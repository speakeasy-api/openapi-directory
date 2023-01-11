import requests
from typing import Any,Optional
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

    
    def delete_job_by_id(self, request: operations.DeleteJobByIDRequest) -> operations.DeleteJobByIDResponse:
        r"""Delete Job by Id
        Deletes a transcription job. All data related to the job, such as input media and transcript, will be permanently deleted. A job can only be deleted once it's completed (either with success or failure).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteJobByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.delete_job_by_id_401_application_problem_plus_json_any = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteJobByID404ApplicationProblemPlusJSON])
                res.delete_job_by_id_404_application_problem_plus_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteJobByID409ApplicationProblemPlusJSON])
                res.delete_job_by_id_409_application_problem_plus_json_object = out

        return res

    
    def get_job_by_id(self, request: operations.GetJobByIDRequest) -> operations.GetJobByIDResponse:
        r"""Get Job By Id
        Returns information about a transcription job
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJobByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_job_by_id_401_application_problem_plus_json_any = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetJobByID404ApplicationProblemPlusJSON])
                res.get_job_by_id_404_application_problem_plus_json_object = out

        return res

    
    def get_list_of_jobs(self, request: operations.GetListOfJobsRequest) -> operations.GetListOfJobsResponse:
        r"""Get List of Jobs
        Gets a list of transcription jobs submitted within the last 30 days in reverse chronological order up to the provided `limit` number of jobs per call. **Note:** Jobs older than 30 days will not be listed. Pagination is supported via passing the last job `id` from a previous call into `starting_after`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jobs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListOfJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Job]])
                res.jobs = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfJobs400ApplicationProblemPlusJSON])
                res.get_list_of_jobs_400_application_problem_plus_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_list_of_jobs_401_application_problem_plus_json_any = out

        return res

    
    def submit_transcription_job(self, request: operations.SubmitTranscriptionJobRequest) -> operations.SubmitTranscriptionJobResponse:
        r"""Submit Transcription Job
        Starts an asynchronous job to transcribe speech-to-text for a media file. Media files can be specified in two ways, either by including a public url to the media in the transcription job `options` or by uploading a local file as part of a multipart/form request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jobs"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubmitTranscriptionJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SubmitTranscriptionJob400ApplicationProblemPlusJSON])
                res.submit_transcription_job_400_application_problem_plus_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.submit_transcription_job_401_application_problem_plus_json_any = out
        elif r.status_code == 413:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.submit_transcription_job_413_application_problem_plus_json_any = out

        return res

    