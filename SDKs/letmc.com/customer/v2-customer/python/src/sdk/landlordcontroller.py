import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class LandlordController:
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

    
    def landlord_controller_create_maintenance_preference(self, request: operations.LandlordControllerCreateMaintenancePreferenceRequest) -> operations.LandlordControllerCreateMaintenancePreferenceResponse:
        r"""Post tenancy maintenance preferences:-
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/tenancy/maintenance/preference", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerCreateMaintenancePreferenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.landlord_controller_create_maintenance_preference_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.landlord_controller_create_maintenance_preference_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.landlord_controller_create_maintenance_preference_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.landlord_controller_create_maintenance_preference_200_text_xml_string = r.content

        return res

    
    def landlord_controller_get_accounts(self, request: operations.LandlordControllerGetAccountsRequest) -> operations.LandlordControllerGetAccountsResponse:
        r"""Get the accounting details for the landlord.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/accounting", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordAccountingModel])
                res.landlord_accounting_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordAccountingModel])
                res.landlord_accounting_model = out

        return res

    
    def landlord_controller_get_document(self, request: operations.LandlordControllerGetDocumentRequest) -> operations.LandlordControllerGetDocumentResponse:
        r"""Download a Document
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/document", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def landlord_controller_get_invetory_report(self, request: operations.LandlordControllerGetInvetoryReportRequest) -> operations.LandlordControllerGetInvetoryReportResponse:
        r"""Generate a Inventory PDF for a tenancy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/inventory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetInvetoryReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def landlord_controller_get_invoice(self, request: operations.LandlordControllerGetInvoiceRequest) -> operations.LandlordControllerGetInvoiceResponse:
        r"""Get an invoice pdf belonging to the landlord.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/invoice", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetInvoiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def landlord_controller_get_landlord_crm_entries(self, request: operations.LandlordControllerGetLandlordCrmEntriesRequest) -> operations.LandlordControllerGetLandlordCrmEntriesResponse:
        r"""Retrieve landlord's CRM ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/landlordcrmentries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetLandlordCrmEntriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.LandlordCrmEntry]])
                res.landlord_crm_entries = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.LandlordCrmEntry]])
                res.landlord_crm_entries = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def landlord_controller_get_maintenance_jobs(self, request: operations.LandlordControllerGetMaintenanceJobsRequest) -> operations.LandlordControllerGetMaintenanceJobsResponse:
        r"""Get Active maintenance jobs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/maintenance", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetMaintenanceJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordMaintenanceModel])
                res.landlord_maintenance_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordMaintenanceModel])
                res.landlord_maintenance_model = out

        return res

    
    def landlord_controller_get_profit_loss_report(self, request: operations.LandlordControllerGetProfitLossReportRequest) -> operations.LandlordControllerGetProfitLossReportResponse:
        r"""Generate a Profit and Loss Report
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/profitloss", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetProfitLossReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordProfitLossModel])
                res.landlord_profit_loss_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordProfitLossModel])
                res.landlord_profit_loss_model = out

        return res

    
    def landlord_controller_get_rent_arrears(self, request: operations.LandlordControllerGetRentArrearsRequest) -> operations.LandlordControllerGetRentArrearsResponse:
        r"""Rent Arrears
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/rentarrears", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetRentArrearsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordRentArrearsModel])
                res.landlord_rent_arrears_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordRentArrearsModel])
                res.landlord_rent_arrears_model = out

        return res

    
    def landlord_controller_get_sas_report(self, request: operations.LandlordControllerGetSasReportRequest) -> operations.LandlordControllerGetSasReportResponse:
        r"""Generate a Self Assessment Tax Report
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/sas", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetSasReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def landlord_controller_get_settings(self, request: operations.LandlordControllerGetSettingsRequest) -> operations.LandlordControllerGetSettingsResponse:
        r"""Get contact details of all linked landlords.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/settings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordSettingsModel])
                res.landlord_settings_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordSettingsModel])
                res.landlord_settings_model = out

        return res

    
    def landlord_controller_get_summary_details(self, request: operations.LandlordControllerGetSummaryDetailsRequest) -> operations.LandlordControllerGetSummaryDetailsResponse:
        r"""Get the summary details for the landlord.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/summary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetSummaryDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordSummaryModel])
                res.landlord_summary_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordSummaryModel])
                res.landlord_summary_model = out

        return res

    
    def landlord_controller_get_tenancy(self, request: operations.LandlordControllerGetTenancyRequest) -> operations.LandlordControllerGetTenancyResponse:
        r"""Get tenancy details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/tenancy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetTenancyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordTenancyModel])
                res.landlord_tenancy_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordTenancyModel])
                res.landlord_tenancy_model = out

        return res

    
    def landlord_controller_get_tenancy_agreement_report(self, request: operations.LandlordControllerGetTenancyAgreementReportRequest) -> operations.LandlordControllerGetTenancyAgreementReportResponse:
        r"""Generate a Tenancy Agreement Copy (PDF)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/tenancyagreement", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetTenancyAgreementReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    