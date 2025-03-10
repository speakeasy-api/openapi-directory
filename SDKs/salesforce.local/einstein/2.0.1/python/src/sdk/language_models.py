"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class LanguageModels:
    r"""Resources that manage text models and model metrics."""
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
        
    def delete_model(self, request: operations.DeleteModelRequest, security: operations.DeleteModelSecurity) -> operations.DeleteModelResponse:
        r"""Delete a Model
        Deletes the specified model.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.DeleteModelRequest, base_url, '/v2/language/models/{modelId}', request)
        
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('DELETE', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DeleteModelResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 201:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.DeletionResponse])
                res.deletion_response = out

        return res

    def get_trained_model_learning_curve(self, request: operations.GetTrainedModelLearningCurveRequest, security: operations.GetTrainedModelLearningCurveSecurity) -> operations.GetTrainedModelLearningCurveResponse:
        r"""Get Model Learning Curve
        Returns the metrics for each epoch in a model.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetTrainedModelLearningCurveRequest, base_url, '/v2/language/models/{modelId}/lc', request)
        
        query_params = utils.get_query_params(operations.GetTrainedModelLearningCurveRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetTrainedModelLearningCurveResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.LearningCurveList])
                res.learning_curve_list = out

        return res

    def get_trained_model_metrics(self, request: operations.GetTrainedModelMetricsRequest, security: operations.GetTrainedModelMetricsSecurity) -> operations.GetTrainedModelMetricsResponse:
        r"""Get Model Metrics
        Returns the metrics for a model
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetTrainedModelMetricsRequest, base_url, '/v2/language/models/{modelId}', request)
        
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetTrainedModelMetricsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Metrics])
                res.metrics = out

        return res

    def get_trained_models(self, request: operations.GetTrainedModelsRequest, security: operations.GetTrainedModelsSecurity) -> operations.GetTrainedModelsResponse:
        r"""Get All Models
        Returns all models for the specified dataset.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetTrainedModelsRequest, base_url, '/v2/language/datasets/{datasetId}/models', request)
        
        query_params = utils.get_query_params(operations.GetTrainedModelsRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetTrainedModelsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ModelList])
                res.model_list = out

        return res

    