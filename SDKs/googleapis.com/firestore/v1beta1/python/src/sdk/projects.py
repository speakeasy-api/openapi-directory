"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Any, Optional

class Projects:
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
        
    def firestore_projects_databases_documents_batch_get(self, request: operations.FirestoreProjectsDatabasesDocumentsBatchGetRequest, security: operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurity) -> operations.FirestoreProjectsDatabasesDocumentsBatchGetResponse:
        r"""Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesDocumentsBatchGetRequest, base_url, '/v1beta1/{database}/documents:batchGet', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "batch_get_documents_request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesDocumentsBatchGetRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesDocumentsBatchGetResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.BatchGetDocumentsResponse])
                res.batch_get_documents_response = out

        return res

    def firestore_projects_databases_documents_batch_write(self, request: operations.FirestoreProjectsDatabasesDocumentsBatchWriteRequest, security: operations.FirestoreProjectsDatabasesDocumentsBatchWriteSecurity) -> operations.FirestoreProjectsDatabasesDocumentsBatchWriteResponse:
        r"""Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesDocumentsBatchWriteRequest, base_url, '/v1beta1/{database}/documents:batchWrite', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "batch_write_request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesDocumentsBatchWriteRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesDocumentsBatchWriteResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.BatchWriteResponse])
                res.batch_write_response = out

        return res

    def firestore_projects_databases_documents_begin_transaction(self, request: operations.FirestoreProjectsDatabasesDocumentsBeginTransactionRequest, security: operations.FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity) -> operations.FirestoreProjectsDatabasesDocumentsBeginTransactionResponse:
        r"""Starts a new transaction."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesDocumentsBeginTransactionRequest, base_url, '/v1beta1/{database}/documents:beginTransaction', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "begin_transaction_request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesDocumentsBeginTransactionRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesDocumentsBeginTransactionResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.BeginTransactionResponse])
                res.begin_transaction_response = out

        return res

    def firestore_projects_databases_documents_commit(self, request: operations.FirestoreProjectsDatabasesDocumentsCommitRequest, security: operations.FirestoreProjectsDatabasesDocumentsCommitSecurity) -> operations.FirestoreProjectsDatabasesDocumentsCommitResponse:
        r"""Commits a transaction, while optionally updating documents."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesDocumentsCommitRequest, base_url, '/v1beta1/{database}/documents:commit', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "commit_request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesDocumentsCommitRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesDocumentsCommitResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.CommitResponse])
                res.commit_response = out

        return res

    def firestore_projects_databases_documents_create_document(self, request: operations.FirestoreProjectsDatabasesDocumentsCreateDocumentRequest, security: operations.FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity) -> operations.FirestoreProjectsDatabasesDocumentsCreateDocumentResponse:
        r"""Creates a new document."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesDocumentsCreateDocumentRequest, base_url, '/v1beta1/{parent}/{collectionId}', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "document", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesDocumentsCreateDocumentRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesDocumentsCreateDocumentResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Document])
                res.document = out

        return res

    def firestore_projects_databases_documents_list_collection_ids(self, request: operations.FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest, security: operations.FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity) -> operations.FirestoreProjectsDatabasesDocumentsListCollectionIdsResponse:
        r"""Lists all the collection IDs underneath a document."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest, base_url, '/v1beta1/{parent}:listCollectionIds', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "list_collection_ids_request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesDocumentsListCollectionIdsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ListCollectionIdsResponse])
                res.list_collection_ids_response = out

        return res

    def firestore_projects_databases_documents_list_documents(self, request: operations.FirestoreProjectsDatabasesDocumentsListDocumentsRequest, security: operations.FirestoreProjectsDatabasesDocumentsListDocumentsSecurity) -> operations.FirestoreProjectsDatabasesDocumentsListDocumentsResponse:
        r"""Lists documents."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesDocumentsListDocumentsRequest, base_url, '/v1beta1/{parent}/{collectionId}', request)
        
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesDocumentsListDocumentsRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesDocumentsListDocumentsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ListDocumentsResponse])
                res.list_documents_response = out

        return res

    def firestore_projects_databases_documents_listen(self, request: operations.FirestoreProjectsDatabasesDocumentsListenRequest, security: operations.FirestoreProjectsDatabasesDocumentsListenSecurity) -> operations.FirestoreProjectsDatabasesDocumentsListenResponse:
        r"""Listens to changes. This method is only available via gRPC or WebChannel (not REST)."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesDocumentsListenRequest, base_url, '/v1beta1/{database}/documents:listen', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "listen_request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesDocumentsListenRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesDocumentsListenResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ListenResponse])
                res.listen_response = out

        return res

    def firestore_projects_databases_documents_partition_query(self, request: operations.FirestoreProjectsDatabasesDocumentsPartitionQueryRequest, security: operations.FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity) -> operations.FirestoreProjectsDatabasesDocumentsPartitionQueryResponse:
        r"""Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesDocumentsPartitionQueryRequest, base_url, '/v1beta1/{parent}:partitionQuery', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "partition_query_request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesDocumentsPartitionQueryRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesDocumentsPartitionQueryResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.PartitionQueryResponse])
                res.partition_query_response = out

        return res

    def firestore_projects_databases_documents_patch(self, request: operations.FirestoreProjectsDatabasesDocumentsPatchRequest, security: operations.FirestoreProjectsDatabasesDocumentsPatchSecurity) -> operations.FirestoreProjectsDatabasesDocumentsPatchResponse:
        r"""Updates or inserts a document."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesDocumentsPatchRequest, base_url, '/v1beta1/{name}', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "document", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesDocumentsPatchRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('PATCH', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesDocumentsPatchResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Document])
                res.document = out

        return res

    def firestore_projects_databases_documents_rollback(self, request: operations.FirestoreProjectsDatabasesDocumentsRollbackRequest, security: operations.FirestoreProjectsDatabasesDocumentsRollbackSecurity) -> operations.FirestoreProjectsDatabasesDocumentsRollbackResponse:
        r"""Rolls back a transaction."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesDocumentsRollbackRequest, base_url, '/v1beta1/{database}/documents:rollback', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "rollback_request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesDocumentsRollbackRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesDocumentsRollbackResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    def firestore_projects_databases_documents_run_aggregation_query(self, request: operations.FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest, security: operations.FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity) -> operations.FirestoreProjectsDatabasesDocumentsRunAggregationQueryResponse:
        r"""Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest, base_url, '/v1beta1/{parent}:runAggregationQuery', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "run_aggregation_query_request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesDocumentsRunAggregationQueryResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.RunAggregationQueryResponse])
                res.run_aggregation_query_response = out

        return res

    def firestore_projects_databases_documents_run_query(self, request: operations.FirestoreProjectsDatabasesDocumentsRunQueryRequest, security: operations.FirestoreProjectsDatabasesDocumentsRunQuerySecurity) -> operations.FirestoreProjectsDatabasesDocumentsRunQueryResponse:
        r"""Runs a query."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesDocumentsRunQueryRequest, base_url, '/v1beta1/{parent}:runQuery', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "run_query_request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesDocumentsRunQueryRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesDocumentsRunQueryResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.RunQueryResponse])
                res.run_query_response = out

        return res

    def firestore_projects_databases_documents_write(self, request: operations.FirestoreProjectsDatabasesDocumentsWriteRequest, security: operations.FirestoreProjectsDatabasesDocumentsWriteSecurity) -> operations.FirestoreProjectsDatabasesDocumentsWriteResponse:
        r"""Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST)."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesDocumentsWriteRequest, base_url, '/v1beta1/{database}/documents:write', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "write_request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesDocumentsWriteRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesDocumentsWriteResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.WriteResponse])
                res.write_response = out

        return res

    def firestore_projects_databases_export_documents(self, request: operations.FirestoreProjectsDatabasesExportDocumentsRequest, security: operations.FirestoreProjectsDatabasesExportDocumentsSecurity) -> operations.FirestoreProjectsDatabasesExportDocumentsResponse:
        r"""Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesExportDocumentsRequest, base_url, '/v1beta1/{name}:exportDocuments', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "google_firestore_admin_v1beta1_export_documents_request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesExportDocumentsRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesExportDocumentsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    def firestore_projects_databases_import_documents(self, request: operations.FirestoreProjectsDatabasesImportDocumentsRequest, security: operations.FirestoreProjectsDatabasesImportDocumentsSecurity) -> operations.FirestoreProjectsDatabasesImportDocumentsResponse:
        r"""Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesImportDocumentsRequest, base_url, '/v1beta1/{name}:importDocuments', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "google_firestore_admin_v1beta1_import_documents_request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesImportDocumentsRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesImportDocumentsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    def firestore_projects_databases_indexes_create(self, request: operations.FirestoreProjectsDatabasesIndexesCreateRequest, security: operations.FirestoreProjectsDatabasesIndexesCreateSecurity) -> operations.FirestoreProjectsDatabasesIndexesCreateResponse:
        r"""Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesIndexesCreateRequest, base_url, '/v1beta1/{parent}/indexes', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "google_firestore_admin_v1beta1_index", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesIndexesCreateRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesIndexesCreateResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    def firestore_projects_databases_indexes_delete(self, request: operations.FirestoreProjectsDatabasesIndexesDeleteRequest, security: operations.FirestoreProjectsDatabasesIndexesDeleteSecurity) -> operations.FirestoreProjectsDatabasesIndexesDeleteResponse:
        r"""Deletes an index."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesIndexesDeleteRequest, base_url, '/v1beta1/{name}', request)
        
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesIndexesDeleteRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('DELETE', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesIndexesDeleteResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    def firestore_projects_databases_indexes_get(self, request: operations.FirestoreProjectsDatabasesIndexesGetRequest, security: operations.FirestoreProjectsDatabasesIndexesGetSecurity) -> operations.FirestoreProjectsDatabasesIndexesGetResponse:
        r"""Gets an index."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesIndexesGetRequest, base_url, '/v1beta1/{name}', request)
        
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesIndexesGetRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesIndexesGetResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.GoogleFirestoreAdminV1beta1Index])
                res.google_firestore_admin_v1beta1_index = out

        return res

    def firestore_projects_databases_indexes_list(self, request: operations.FirestoreProjectsDatabasesIndexesListRequest, security: operations.FirestoreProjectsDatabasesIndexesListSecurity) -> operations.FirestoreProjectsDatabasesIndexesListResponse:
        r"""Lists the indexes that match the specified filters."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FirestoreProjectsDatabasesIndexesListRequest, base_url, '/v1beta1/{parent}/indexes', request)
        
        query_params = utils.get_query_params(operations.FirestoreProjectsDatabasesIndexesListRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FirestoreProjectsDatabasesIndexesListResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.GoogleFirestoreAdminV1beta1ListIndexesResponse])
                res.google_firestore_admin_v1beta1_list_indexes_response = out

        return res

    