<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FirestoreProjectsDatabasesDocumentsBatchGetRequest(
    dollar_xgafv="2",
    batch_get_documents_request=shared.BatchGetDocumentsRequest(
        documents=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        mask=shared.DocumentMask(
            field_paths=[
                "corrupti",
                "illum",
                "vel",
                "error",
            ],
        ),
        new_transaction=shared.TransactionOptions(
            read_only=shared.ReadOnly(
                read_time="deserunt",
            ),
            read_write=shared.ReadWrite(
                retry_transaction="suscipit",
            ),
        ),
        read_time="iure",
        transaction="magnam",
    ),
    access_token="debitis",
    alt="json",
    callback="delectus",
    database="tempora",
    fields_="suscipit",
    key="molestiae",
    oauth_token="minus",
    pretty_print=False,
    quota_user="placeat",
    upload_type="voluptatum",
    upload_protocol="iusto",
)
    
res = s.projects.firestore_projects_databases_documents_batch_get(req, operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurity(
    option1=operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.batch_get_documents_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->