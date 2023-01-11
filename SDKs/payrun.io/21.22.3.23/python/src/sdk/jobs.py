import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Jobs:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def delete_batch_job(self, request: operations.DeleteBatchJobRequest) -> operations.DeleteBatchJobResponse:
        r"""Delete the Batch job
        Deletes the the Batch job
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Batch/{JobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteBatchJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def delete_cis_job(self, request: operations.DeleteCisJobRequest) -> operations.DeleteCisJobResponse:
        r"""Delete the CIS job
        Deletes the the CIS job
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Cis/{JobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCisJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def delete_dps_job(self, request: operations.DeleteDpsJobRequest) -> operations.DeleteDpsJobResponse:
        r"""Delete the DPS job
        Deletes the the DPS job
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Dps/{JobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDpsJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def delete_pay_run_job(self, request: operations.DeletePayRunJobRequest) -> operations.DeletePayRunJobResponse:
        r"""Delete the pay run job
        Deletes the the payrun job
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/PayRuns/{JobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePayRunJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def delete_rti_job(self, request: operations.DeleteRtiJobRequest) -> operations.DeleteRtiJobResponse:
        r"""Delete the RTI job
        Deletes the the RTI job
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Rti/{JobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRtiJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def delete_third_party_job(self, request: operations.DeleteThirdPartyJobRequest) -> operations.DeleteThirdPartyJobResponse:
        r"""Delete the Third Party job
        Deletes the the Third Party job
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/ThirdParty/{JobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteThirdPartyJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_batch_job_info(self, request: operations.GetBatchJobInfoRequest) -> operations.GetBatchJobInfoResponse:
        r"""Get the Batch job information
        Return the the Batch job information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Batch/{JobId}/Info", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchJobInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JobInfo])
                res.job_info = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_batch_job_progress(self, request: operations.GetBatchJobProgressRequest) -> operations.GetBatchJobProgressResponse:
        r"""Get the Batch job progress
        Return the the Batch job progress
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Batch/{JobId}/Progress", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchJobProgressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_batch_job_status(self, request: operations.GetBatchJobStatusRequest) -> operations.GetBatchJobStatusResponse:
        r"""Get the Batch job status
        Return the the Batch job status
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Batch/{JobId}/Status", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchJobStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_batch_jobs(self, request: operations.GetBatchJobsRequest) -> operations.GetBatchJobsResponse:
        r"""Get all Batch jobs
        Gets all the Batch jobs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Jobs/Batch"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_cis_job_info(self, request: operations.GetCisJobInfoRequest) -> operations.GetCisJobInfoResponse:
        r"""Get the CIS job information
        Return the the CIS job information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Cis/{JobId}/Info", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCisJobInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JobInfo])
                res.job_info = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_cis_job_progress(self, request: operations.GetCisJobProgressRequest) -> operations.GetCisJobProgressResponse:
        r"""Get the CIS job progress
        Return the the CIS job progress
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Cis/{JobId}/Progress", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCisJobProgressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_cis_job_status(self, request: operations.GetCisJobStatusRequest) -> operations.GetCisJobStatusResponse:
        r"""Get the CIS job status
        Return the the CIS job status
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Cis/{JobId}/Status", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCisJobStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_cis_jobs(self, request: operations.GetCisJobsRequest) -> operations.GetCisJobsResponse:
        r"""Get all CIS jobs
        Gets all the CIS jobs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Jobs/Cis"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCisJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_dps_job_info(self, request: operations.GetDpsJobInfoRequest) -> operations.GetDpsJobInfoResponse:
        r"""Get the DPS job information
        Return the the DPS job information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Dps/{JobId}/Info", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDpsJobInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JobInfo])
                res.job_info = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_dps_job_progress(self, request: operations.GetDpsJobProgressRequest) -> operations.GetDpsJobProgressResponse:
        r"""Get the DPS job progress
        Return the the DPS job progress
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Dps/{JobId}/Progress", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDpsJobProgressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_dps_job_status(self, request: operations.GetDpsJobStatusRequest) -> operations.GetDpsJobStatusResponse:
        r"""Get the DPS job status
        Return the the DPS job status
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Dps/{JobId}/Status", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDpsJobStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_dps_jobs(self, request: operations.GetDpsJobsRequest) -> operations.GetDpsJobsResponse:
        r"""Get all DPS jobs
        Gets all the DPS jobs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Jobs/Dps"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDpsJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_employer_jobs(self, request: operations.GetEmployerJobsRequest) -> operations.GetEmployerJobsResponse:
        r"""Gets all jobs relating to the employer.
        Returns all job information objects for the specified employer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Employer/{EmployerId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEmployerJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.get_employer_jobs_200_application_json_binary_string = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_pay_run_job_info(self, request: operations.GetPayRunJobInfoRequest) -> operations.GetPayRunJobInfoResponse:
        r"""Get the pay run job information
        Return the the payrun job information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/PayRuns/{JobId}/Info", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayRunJobInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JobInfo])
                res.job_info = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_pay_run_job_progress(self, request: operations.GetPayRunJobProgressRequest) -> operations.GetPayRunJobProgressResponse:
        r"""Get the pay run job progress
        Return the the payrun job progress
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/PayRuns/{JobId}/Progress", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayRunJobProgressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_pay_run_job_status(self, request: operations.GetPayRunJobStatusRequest) -> operations.GetPayRunJobStatusResponse:
        r"""Get the pay run job status
        Return the the payrun job status
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/PayRuns/{JobId}/Status", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayRunJobStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_pay_run_jobs(self, request: operations.GetPayRunJobsRequest) -> operations.GetPayRunJobsResponse:
        r"""Get all PayRun jobs
        Gets all the pay run jobs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Jobs/PayRuns"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayRunJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_rti_job_info(self, request: operations.GetRtiJobInfoRequest) -> operations.GetRtiJobInfoResponse:
        r"""Get the RTI job information
        Return the the RTI job information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Rti/{JobId}/Info", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRtiJobInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JobInfo])
                res.job_info = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_rti_job_progress(self, request: operations.GetRtiJobProgressRequest) -> operations.GetRtiJobProgressResponse:
        r"""Get the RTI job progress
        Return the the RTI job progress
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Rti/{JobId}/Progress", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRtiJobProgressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_rti_job_status(self, request: operations.GetRtiJobStatusRequest) -> operations.GetRtiJobStatusResponse:
        r"""Get the RTI job status
        Return the the RTI job status
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/Rti/{JobId}/Status", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRtiJobStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_rti_jobs(self, request: operations.GetRtiJobsRequest) -> operations.GetRtiJobsResponse:
        r"""Get all RTI jobs
        Gets all the RTI jobs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Jobs/Rti"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRtiJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_third_party_job_info(self, request: operations.GetThirdPartyJobInfoRequest) -> operations.GetThirdPartyJobInfoResponse:
        r"""Get the Third Party job information
        Return the the Third Party job information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/ThirdParty/{JobId}/Info", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetThirdPartyJobInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JobInfo])
                res.job_info = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_third_party_job_progress(self, request: operations.GetThirdPartyJobProgressRequest) -> operations.GetThirdPartyJobProgressResponse:
        r"""Get the Third Party job progress
        Return the the Third Party job progress
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/ThirdParty/{JobId}/Progress", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetThirdPartyJobProgressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_third_party_job_status(self, request: operations.GetThirdPartyJobStatusRequest) -> operations.GetThirdPartyJobStatusResponse:
        r"""Get the Third Party job status
        Return the the Third Party job status
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Jobs/ThirdParty/{JobId}/Status", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetThirdPartyJobStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_third_party_jobs(self, request: operations.GetThirdPartyJobsRequest) -> operations.GetThirdPartyJobsResponse:
        r"""Get all Third Party jobs
        Gets all the Third Party jobs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Jobs/ThirdParty"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetThirdPartyJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def post_new_batch_job(self, request: operations.PostNewBatchJobRequest) -> operations.PostNewBatchJobResponse:
        r"""Create new Batch job
        Adds a new Batch job to the queue and returns the job info
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Jobs/Batch"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNewBatchJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Link])
                res.link = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def post_new_cis_job(self, request: operations.PostNewCisJobRequest) -> operations.PostNewCisJobResponse:
        r"""Create new CIS job
        Adds a new CIS job to the queue and returns the job info
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Jobs/Cis"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNewCisJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Link])
                res.link = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def post_new_dps_job(self, request: operations.PostNewDpsJobRequest) -> operations.PostNewDpsJobResponse:
        r"""Create new DPS job
        Creates the new DPS job to the queue and returns the job info
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Jobs/Dps"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNewDpsJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Link])
                res.link = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def post_new_pay_run_job(self, request: operations.PostNewPayRunJobRequest) -> operations.PostNewPayRunJobResponse:
        r"""Create new PayRun job
        Creates the new pay run job to the queue and returns the job info
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Jobs/PayRuns"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNewPayRunJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Link])
                res.link = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def post_new_rti_job(self, request: operations.PostNewRtiJobRequest) -> operations.PostNewRtiJobResponse:
        r"""Create new RTI job
        Creates the new RTI job to the queue and returns the job info
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Jobs/Rti"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNewRtiJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Link])
                res.link = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def post_new_third_party_job(self, request: operations.PostNewThirdPartyJobRequest) -> operations.PostNewThirdPartyJobResponse:
        r"""Create new Third Party job
        Adds a new Third Party job to the queue and returns the job info
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Jobs/ThirdParty"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNewThirdPartyJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Link])
                res.link = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    