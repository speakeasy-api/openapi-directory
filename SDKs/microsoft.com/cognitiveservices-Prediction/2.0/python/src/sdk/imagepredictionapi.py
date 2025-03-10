"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class ImagePredictionAPI:
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
        
    def predict_image(self, request: operations.PredictImageRequest) -> operations.PredictImageResponse:
        r"""Predict an image and saves the result"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PredictImageRequest, base_url, '/{projectId}/image', request)
        
        headers = utils.get_headers(request)
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'multipart')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.PredictImageRequest, request)
        
        client = self._client
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PredictImageResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'application/xml'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.body = http_res.content

        return res

    def predict_image_url_with_no_store_form(self, request: operations.PredictImageURLWithNoStoreFormRequest) -> operations.PredictImageURLWithNoStoreFormResponse:
        r"""Predict an image url without saving the result"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PredictImageURLWithNoStoreFormRequest, base_url, '/{projectId}/url/nostore', request)
        
        headers = utils.get_headers(request)
        req_content_type, data, form = utils.serialize_request_body(request, "image_url", 'form')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.PredictImageURLWithNoStoreFormRequest, request)
        
        client = self._client
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PredictImageURLWithNoStoreFormResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'application/xml'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.body = http_res.content

        return res

    def predict_image_url_with_no_store_json(self, request: operations.PredictImageURLWithNoStoreJSONRequest) -> operations.PredictImageURLWithNoStoreJSONResponse:
        r"""Predict an image url without saving the result"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PredictImageURLWithNoStoreJSONRequest, base_url, '/{projectId}/url/nostore', request)
        
        headers = utils.get_headers(request)
        req_content_type, data, form = utils.serialize_request_body(request, "image_url", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.PredictImageURLWithNoStoreJSONRequest, request)
        
        client = self._client
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PredictImageURLWithNoStoreJSONResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'application/xml'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.body = http_res.content

        return res

    def predict_image_url_with_no_store_raw(self, request: operations.PredictImageURLWithNoStoreRawRequest) -> operations.PredictImageURLWithNoStoreRawResponse:
        r"""Predict an image url without saving the result"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PredictImageURLWithNoStoreRawRequest, base_url, '/{projectId}/url/nostore', request)
        
        headers = utils.get_headers(request)
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'raw')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.PredictImageURLWithNoStoreRawRequest, request)
        
        client = self._client
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PredictImageURLWithNoStoreRawResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'application/xml'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.body = http_res.content

        return res

    def predict_image_url_form(self, request: operations.PredictImageURLFormRequest) -> operations.PredictImageURLFormResponse:
        r"""Predict an image url and saves the result"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PredictImageURLFormRequest, base_url, '/{projectId}/url', request)
        
        headers = utils.get_headers(request)
        req_content_type, data, form = utils.serialize_request_body(request, "image_url", 'form')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.PredictImageURLFormRequest, request)
        
        client = self._client
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PredictImageURLFormResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'application/xml'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.body = http_res.content

        return res

    def predict_image_url_json(self, request: operations.PredictImageURLJSONRequest) -> operations.PredictImageURLJSONResponse:
        r"""Predict an image url and saves the result"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PredictImageURLJSONRequest, base_url, '/{projectId}/url', request)
        
        headers = utils.get_headers(request)
        req_content_type, data, form = utils.serialize_request_body(request, "image_url", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.PredictImageURLJSONRequest, request)
        
        client = self._client
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PredictImageURLJSONResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'application/xml'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.body = http_res.content

        return res

    def predict_image_url_raw(self, request: operations.PredictImageURLRawRequest) -> operations.PredictImageURLRawResponse:
        r"""Predict an image url and saves the result"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PredictImageURLRawRequest, base_url, '/{projectId}/url', request)
        
        headers = utils.get_headers(request)
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'raw')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.PredictImageURLRawRequest, request)
        
        client = self._client
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PredictImageURLRawResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'application/xml'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.body = http_res.content

        return res

    def predict_image_with_no_store(self, request: operations.PredictImageWithNoStoreRequest) -> operations.PredictImageWithNoStoreResponse:
        r"""Predict an image without saving the result"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PredictImageWithNoStoreRequest, base_url, '/{projectId}/image/nostore', request)
        
        headers = utils.get_headers(request)
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'multipart')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.PredictImageWithNoStoreRequest, request)
        
        client = self._client
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PredictImageWithNoStoreResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ImagePrediction])
                res.image_prediction = out
            if utils.match_content_type(content_type, 'application/xml'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'text/xml'):
                res.body = http_res.content

        return res

    