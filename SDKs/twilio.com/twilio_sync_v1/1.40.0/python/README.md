# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twilio.com/twilio_sync_v1/1.40.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateDocumentRequest(
    request_body=operations.CreateDocumentCreateDocumentRequest(
        data="corrupti",
        ttl=592845,
        unique_name="distinctio",
    ),
    service_sid="quibusdam",
)
    
res = s.create_document(req, operations.CreateDocumentSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.sync_v1_service_document is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_document`
* `create_service`
* `create_stream_message` - Create a new Stream Message.
* `create_sync_list`
* `create_sync_list_item`
* `create_sync_map`
* `create_sync_map_item`
* `create_sync_stream` - Create a new Stream.
* `delete_document`
* `delete_document_permission` - Delete a specific Sync Document Permission.
* `delete_service`
* `delete_sync_list`
* `delete_sync_list_item`
* `delete_sync_list_permission` - Delete a specific Sync List Permission.
* `delete_sync_map`
* `delete_sync_map_item`
* `delete_sync_map_permission` - Delete a specific Sync Map Permission.
* `delete_sync_stream` - Delete a specific Stream.
* `fetch_document`
* `fetch_document_permission` - Fetch a specific Sync Document Permission.
* `fetch_service`
* `fetch_sync_list`
* `fetch_sync_list_item`
* `fetch_sync_list_permission` - Fetch a specific Sync List Permission.
* `fetch_sync_map`
* `fetch_sync_map_item`
* `fetch_sync_map_permission` - Fetch a specific Sync Map Permission.
* `fetch_sync_stream` - Fetch a specific Stream.
* `list_document`
* `list_document_permission` - Retrieve a list of all Permissions applying to a Sync Document.
* `list_service`
* `list_sync_list`
* `list_sync_list_item`
* `list_sync_list_permission` - Retrieve a list of all Permissions applying to a Sync List.
* `list_sync_map`
* `list_sync_map_item`
* `list_sync_map_permission` - Retrieve a list of all Permissions applying to a Sync Map.
* `list_sync_stream` - Retrieve a list of all Streams in a Service Instance.
* `update_document`
* `update_document_permission` - Update an identity's access to a specific Sync Document.
* `update_service`
* `update_sync_list`
* `update_sync_list_item`
* `update_sync_list_permission` - Update an identity's access to a specific Sync List.
* `update_sync_map`
* `update_sync_map_item`
* `update_sync_map_permission` - Update an identity's access to a specific Sync Map.
* `update_sync_stream` - Update a specific Stream.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
