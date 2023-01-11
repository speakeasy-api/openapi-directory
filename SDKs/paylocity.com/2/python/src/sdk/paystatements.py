import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PayStatements:
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

    
    def gets_employee_pay_statement_detail_data_based_on_the_specified_year(self, request: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest) -> operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse:
        r"""Get employee pay statement details data for the specified year.
        Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PayStatementDetails]])
                res.pay_statement_details = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out

        return res

    
    def gets_employee_pay_statement_detail_data_based_on_the_specified_year_and_check_date(self, request: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest) -> operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse:
        r"""Get employee pay statement details data for the specified year and check date.
        Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}/{checkDate}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PayStatementDetails]])
                res.pay_statement_details = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out

        return res

    
    def gets_employee_pay_statement_summary_data_based_on_the_specified_year(self, request: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest) -> operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse:
        r"""Get employee pay statement summary data for the specified year.
        Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PayStatementSummary]])
                res.pay_statement_summaries = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out

        return res

    
    def gets_employee_pay_statement_summary_data_based_on_the_specified_year_and_check_date(self, request: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest) -> operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse:
        r"""Get employee pay statement summary data for the specified year and check date.
        Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}/{checkDate}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PayStatementSummary]])
                res.pay_statement_summaries = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out

        return res

    