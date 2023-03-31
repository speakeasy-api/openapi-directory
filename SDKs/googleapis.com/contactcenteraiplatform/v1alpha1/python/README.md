# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/contactcenteraiplatform/v1alpha1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest(
    dollar_xgafv="2",
    contact_center_input=shared.ContactCenterInput(
        admin_user=shared.AdminUser(
            family_name="provident",
            given_name="distinctio",
        ),
        ccaip_managed_users=False,
        customer_domain_prefix="quibusdam",
        display_name="unde",
        instance_config=shared.InstanceConfig(
            instance_size="STANDARD_3XLARGE",
        ),
        labels={
            "illum": "vel",
            "error": "deserunt",
            "suscipit": "iure",
        },
        name="magnam",
        saml_params=shared.SAMLParams(
            certificate="debitis",
            entity_id="ipsa",
            sso_uri="delectus",
            user_email="tempora",
        ),
        uris=shared.URIs(
            chat_bot_uri="suscipit",
            media_uri="molestiae",
            root_uri="minus",
            virtual_agent_streaming_service_uri="placeat",
        ),
        user_email="voluptatum",
    ),
    access_token="iusto",
    alt="media",
    callback="nisi",
    contact_center_id="recusandae",
    fields_="temporibus",
    key="ab",
    oauth_token="quis",
    parent="veritatis",
    pretty_print=False,
    quota_user="deserunt",
    request_id="perferendis",
    upload_type="ipsam",
    upload_protocol="repellendus",
)
    
res = s.projects.contactcenteraiplatform_projects_locations_contact_centers_create(req, operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `contactcenteraiplatform_projects_locations_contact_centers_create` - Creates a new ContactCenter in a given project and location.
* `contactcenteraiplatform_projects_locations_contact_centers_list` - Lists ContactCenters in a given project and location.
* `contactcenteraiplatform_projects_locations_contact_centers_patch` - Updates the parameters of a single ContactCenter.
* `contactcenteraiplatform_projects_locations_list` - Lists information about the supported locations for this service.
* `contactcenteraiplatform_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `contactcenteraiplatform_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `contactcenteraiplatform_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `contactcenteraiplatform_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `contactcenteraiplatform_projects_locations_query_contact_center_quota` - Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
