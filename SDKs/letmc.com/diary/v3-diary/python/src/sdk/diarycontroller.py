"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class DiaryController:
    _client: requests_http.Session
    _security_client: requests_http.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests_http.Session, security_client: requests_http.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version
        
    def diary_controller_add_feedback_form(self, request: operations.DiaryControllerAddFeedbackFormRequest) -> operations.DiaryControllerAddFeedbackFormResponse:
        r"""Submit appointment feedback"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerAddFeedbackFormRequest, base_url, '/v3/diary/{shortName}/appointment/feedback', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "feedback_submission_model", 'form')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._client
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerAddFeedbackFormResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                res.diary_controller_add_feedback_form_200_application_json_string = http_res.content
            if utils.match_content_type(content_type, 'application/xml'):
                res.diary_controller_add_feedback_form_200_application_xml_string = http_res.content
            if utils.match_content_type(content_type, 'text/json'):
                res.diary_controller_add_feedback_form_200_text_json_string = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.diary_controller_add_feedback_form_200_text_xml_string = http_res.content

        return res

    def diary_controller_add_feedback_json(self, request: operations.DiaryControllerAddFeedbackJSONRequest) -> operations.DiaryControllerAddFeedbackJSONResponse:
        r"""Submit appointment feedback"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerAddFeedbackJSONRequest, base_url, '/v3/diary/{shortName}/appointment/feedback', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "feedback_submission_model", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._client
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerAddFeedbackJSONResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                res.diary_controller_add_feedback_json_200_application_json_string = http_res.content
            if utils.match_content_type(content_type, 'application/xml'):
                res.diary_controller_add_feedback_json_200_application_xml_string = http_res.content
            if utils.match_content_type(content_type, 'text/json'):
                res.diary_controller_add_feedback_json_200_text_json_string = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.diary_controller_add_feedback_json_200_text_xml_string = http_res.content

        return res

    def diary_controller_add_feedback_raw(self, request: operations.DiaryControllerAddFeedbackRawRequest) -> operations.DiaryControllerAddFeedbackRawResponse:
        r"""Submit appointment feedback"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerAddFeedbackRawRequest, base_url, '/v3/diary/{shortName}/appointment/feedback', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'raw')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._client
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerAddFeedbackRawResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                res.diary_controller_add_feedback_raw_200_application_json_string = http_res.content
            if utils.match_content_type(content_type, 'application/xml'):
                res.diary_controller_add_feedback_raw_200_application_xml_string = http_res.content
            if utils.match_content_type(content_type, 'text/json'):
                res.diary_controller_add_feedback_raw_200_text_json_string = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.diary_controller_add_feedback_raw_200_text_xml_string = http_res.content

        return res

    def diary_controller_cancel_appointment(self, request: operations.DiaryControllerCancelAppointmentRequest) -> operations.DiaryControllerCancelAppointmentResponse:
        r"""Cancel an existing appointment using its unique identifier"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerCancelAppointmentRequest, base_url, '/v3/diary/{shortName}/appointment/{appointmentID}/cancel', request)
        
        
        client = self._client
        
        http_res = client.request('PATCH', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerCancelAppointmentResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                res.diary_controller_cancel_appointment_200_application_json_string = http_res.content
            if utils.match_content_type(content_type, 'application/xml'):
                res.diary_controller_cancel_appointment_200_application_xml_string = http_res.content
            if utils.match_content_type(content_type, 'text/json'):
                res.diary_controller_cancel_appointment_200_text_json_string = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.diary_controller_cancel_appointment_200_text_xml_string = http_res.content

        return res

    def diary_controller_delete_appointment(self, request: operations.DiaryControllerDeleteAppointmentRequest) -> operations.DiaryControllerDeleteAppointmentResponse:
        r"""Delete an existing appointment using its unique identifier"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerDeleteAppointmentRequest, base_url, '/v3/diary/{shortName}/appointment', request)
        
        query_params = utils.get_query_params(operations.DiaryControllerDeleteAppointmentRequest, request)
        
        client = self._client
        
        http_res = client.request('DELETE', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerDeleteAppointmentResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                res.diary_controller_delete_appointment_200_application_json_string = http_res.content
            if utils.match_content_type(content_type, 'application/xml'):
                res.diary_controller_delete_appointment_200_application_xml_string = http_res.content
            if utils.match_content_type(content_type, 'text/json'):
                res.diary_controller_delete_appointment_200_text_json_string = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.diary_controller_delete_appointment_200_text_xml_string = http_res.content

        return res

    def diary_controller_get_allocations(self, request: operations.DiaryControllerGetAllocationsRequest) -> operations.DiaryControllerGetAllocationsResponse:
        r"""Get a list of all available allocations for a date + 7 days for a specified appointment type"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerGetAllocationsRequest, base_url, '/v3/diary/{shortName}/allocations', request)
        
        query_params = utils.get_query_params(operations.DiaryControllerGetAllocationsRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerGetAllocationsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[shared.DiaryBookingModel]])
                res.diary_booking_models = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[shared.DiaryBookingModel]])
                res.diary_booking_models = out
            if utils.match_content_type(content_type, 'application/xml'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.body = http_res.content

        return res

    def diary_controller_get_appointment(self, request: operations.DiaryControllerGetAppointmentRequest) -> operations.DiaryControllerGetAppointmentResponse:
        r"""Get an appointment by ID"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerGetAppointmentRequest, base_url, '/v3/diary/{shortName}/appointment', request)
        
        query_params = utils.get_query_params(operations.DiaryControllerGetAppointmentRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerGetAppointmentResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.DiaryAppointmentModel])
                res.diary_appointment_model = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.DiaryAppointmentModel])
                res.diary_appointment_model = out

        return res

    def diary_controller_get_appointment_types(self, request: operations.DiaryControllerGetAppointmentTypesRequest) -> operations.DiaryControllerGetAppointmentTypesResponse:
        r"""A collection of all diary appointment types"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerGetAppointmentTypesRequest, base_url, '/v3/diary/{shortName}/appointmenttypes', request)
        
        query_params = utils.get_query_params(operations.DiaryControllerGetAppointmentTypesRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerGetAppointmentTypesResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.DiaryAppointmentTypeModelResults])
                res.diary_appointment_type_model_results = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.DiaryAppointmentTypeModelResults])
                res.diary_appointment_type_model_results = out
            if utils.match_content_type(content_type, 'application/xml'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.body = http_res.content

        return res

    def diary_controller_get_appointments_between_dates(self, request: operations.DiaryControllerGetAppointmentsBetweenDatesRequest) -> operations.DiaryControllerGetAppointmentsBetweenDatesResponse:
        r"""A collection of diary appointments linked to a company filtered between specific dates and by appointment type"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerGetAppointmentsBetweenDatesRequest, base_url, '/v3/diary/{shortName}/appointmentsbetweendates', request)
        
        query_params = utils.get_query_params(operations.DiaryControllerGetAppointmentsBetweenDatesRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerGetAppointmentsBetweenDatesResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.DiaryAppointmentModelResults])
                res.diary_appointment_model_results = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.DiaryAppointmentModelResults])
                res.diary_appointment_model_results = out
            if utils.match_content_type(content_type, 'application/xml'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.body = http_res.content

        return res

    def diary_controller_get_recurring_appointments(self, request: operations.DiaryControllerGetRecurringAppointmentsRequest) -> operations.DiaryControllerGetRecurringAppointmentsResponse:
        r"""Retrieves all recurring appointments:-"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerGetRecurringAppointmentsRequest, base_url, '/v3/diary/{shortName}/recurringappointment', request)
        
        query_params = utils.get_query_params(operations.DiaryControllerGetRecurringAppointmentsRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerGetRecurringAppointmentsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.DiaryAppointmentModelResults])
                res.diary_appointment_model_results = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.DiaryAppointmentModelResults])
                res.diary_appointment_model_results = out
            if utils.match_content_type(content_type, 'application/xml'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.body = http_res.content

        return res

    def diary_controller_post_appointment_form(self, request: operations.DiaryControllerPostAppointmentFormRequest) -> operations.DiaryControllerPostAppointmentFormResponse:
        r"""Post an appointment into a valid diary allocation"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerPostAppointmentFormRequest, base_url, '/v3/diary/{shortName}/appointment', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "diary_appointment_details", 'form')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.DiaryControllerPostAppointmentFormRequest, request)
        
        client = self._client
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerPostAppointmentFormResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                res.diary_controller_post_appointment_form_200_application_json_string = http_res.content
            if utils.match_content_type(content_type, 'application/xml'):
                res.diary_controller_post_appointment_form_200_application_xml_string = http_res.content
            if utils.match_content_type(content_type, 'text/json'):
                res.diary_controller_post_appointment_form_200_text_json_string = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.diary_controller_post_appointment_form_200_text_xml_string = http_res.content

        return res

    def diary_controller_post_appointment_json(self, request: operations.DiaryControllerPostAppointmentJSONRequest) -> operations.DiaryControllerPostAppointmentJSONResponse:
        r"""Post an appointment into a valid diary allocation"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerPostAppointmentJSONRequest, base_url, '/v3/diary/{shortName}/appointment', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "diary_appointment_details", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.DiaryControllerPostAppointmentJSONRequest, request)
        
        client = self._client
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerPostAppointmentJSONResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                res.diary_controller_post_appointment_json_200_application_json_string = http_res.content
            if utils.match_content_type(content_type, 'application/xml'):
                res.diary_controller_post_appointment_json_200_application_xml_string = http_res.content
            if utils.match_content_type(content_type, 'text/json'):
                res.diary_controller_post_appointment_json_200_text_json_string = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.diary_controller_post_appointment_json_200_text_xml_string = http_res.content

        return res

    def diary_controller_post_appointment_raw(self, request: operations.DiaryControllerPostAppointmentRawRequest) -> operations.DiaryControllerPostAppointmentRawResponse:
        r"""Post an appointment into a valid diary allocation"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerPostAppointmentRawRequest, base_url, '/v3/diary/{shortName}/appointment', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'raw')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.DiaryControllerPostAppointmentRawRequest, request)
        
        client = self._client
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerPostAppointmentRawResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                res.diary_controller_post_appointment_raw_200_application_json_string = http_res.content
            if utils.match_content_type(content_type, 'application/xml'):
                res.diary_controller_post_appointment_raw_200_application_xml_string = http_res.content
            if utils.match_content_type(content_type, 'text/json'):
                res.diary_controller_post_appointment_raw_200_text_json_string = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.diary_controller_post_appointment_raw_200_text_xml_string = http_res.content

        return res

    def diary_controller_put_appointment_form(self, request: operations.DiaryControllerPutAppointmentFormRequest) -> operations.DiaryControllerPutAppointmentFormResponse:
        r"""Update an existing appointment using its unique identifier"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerPutAppointmentFormRequest, base_url, '/v3/diary/{shortName}/appointment', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "diary_appointment_details", 'form')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.DiaryControllerPutAppointmentFormRequest, request)
        
        client = self._client
        
        http_res = client.request('PUT', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerPutAppointmentFormResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                res.diary_controller_put_appointment_form_200_application_json_string = http_res.content
            if utils.match_content_type(content_type, 'application/xml'):
                res.diary_controller_put_appointment_form_200_application_xml_string = http_res.content
            if utils.match_content_type(content_type, 'text/json'):
                res.diary_controller_put_appointment_form_200_text_json_string = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.diary_controller_put_appointment_form_200_text_xml_string = http_res.content

        return res

    def diary_controller_put_appointment_json(self, request: operations.DiaryControllerPutAppointmentJSONRequest) -> operations.DiaryControllerPutAppointmentJSONResponse:
        r"""Update an existing appointment using its unique identifier"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerPutAppointmentJSONRequest, base_url, '/v3/diary/{shortName}/appointment', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "diary_appointment_details", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.DiaryControllerPutAppointmentJSONRequest, request)
        
        client = self._client
        
        http_res = client.request('PUT', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerPutAppointmentJSONResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                res.diary_controller_put_appointment_json_200_application_json_string = http_res.content
            if utils.match_content_type(content_type, 'application/xml'):
                res.diary_controller_put_appointment_json_200_application_xml_string = http_res.content
            if utils.match_content_type(content_type, 'text/json'):
                res.diary_controller_put_appointment_json_200_text_json_string = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.diary_controller_put_appointment_json_200_text_xml_string = http_res.content

        return res

    def diary_controller_put_appointment_raw(self, request: operations.DiaryControllerPutAppointmentRawRequest) -> operations.DiaryControllerPutAppointmentRawResponse:
        r"""Update an existing appointment using its unique identifier"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerPutAppointmentRawRequest, base_url, '/v3/diary/{shortName}/appointment', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'raw')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.DiaryControllerPutAppointmentRawRequest, request)
        
        client = self._client
        
        http_res = client.request('PUT', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerPutAppointmentRawResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                res.diary_controller_put_appointment_raw_200_application_json_string = http_res.content
            if utils.match_content_type(content_type, 'application/xml'):
                res.diary_controller_put_appointment_raw_200_application_xml_string = http_res.content
            if utils.match_content_type(content_type, 'text/json'):
                res.diary_controller_put_appointment_raw_200_text_json_string = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.diary_controller_put_appointment_raw_200_text_xml_string = http_res.content

        return res

    def diary_controller_search_guest(self, request: operations.DiaryControllerSearchGuestRequest) -> operations.DiaryControllerSearchGuestResponse:
        r"""Match Guest Parameters with existing applicants"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DiaryControllerSearchGuestRequest, base_url, '/v3/diary/{shortname}/{branchID}/guest/search', request)
        
        query_params = utils.get_query_params(operations.DiaryControllerSearchGuestRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DiaryControllerSearchGuestResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.GuestDiaryParametersResultsModel])
                res.guest_diary_parameters_results_model = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.GuestDiaryParametersResultsModel])
                res.guest_diary_parameters_results_model = out

        return res

    