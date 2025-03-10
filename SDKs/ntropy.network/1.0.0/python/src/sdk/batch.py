"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations
from typing import Optional

class Batch:
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
        
    def get_a_batch_of_consumer_transaction_classification_results(self, request: operations.GetABatchOfConsumerTransactionClassificationResultsRequest) -> operations.GetABatchOfConsumerTransactionClassificationResultsResponse:
        r"""Get a batch of consumer transaction classification results.
        Get a batch of consumer transaction classification results.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetABatchOfConsumerTransactionClassificationResultsRequest, base_url, '/classifier/consumer/batch/{id}', request)
        
        
        client = self._client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetABatchOfConsumerTransactionClassificationResultsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetABatchOfConsumerTransactionClassificationResults200ApplicationJSON])
                res.get_a_batch_of_consumer_transaction_classification_results_200_application_json_object = out
        elif http_res.status_code in [404, 500]:
            pass

        return res

    