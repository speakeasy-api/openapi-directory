# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest(
    security=operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams(
        parent="nostrum",
    ),
    query_params=operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams(
        dollar_xgafv="2",
        access_token="est",
        alt="media",
        callback="omnis",
        fields="exercitationem",
        key="at",
        oauth_token="vitae",
        pretty_print=False,
        quota_user="vel",
        upload_type="ab",
        upload_protocol="provident",
    ),
    request=shared.AccessLevel(
        basic=shared.BasicLevel(
            combining_function="OR",
            conditions=[
                shared.Condition(
                    device_policy=shared.DevicePolicy(
                        allowed_device_management_levels=[
                            "BASIC",
                        ],
                        allowed_encryption_statuses=[
                            "UNENCRYPTED",
                            "ENCRYPTION_UNSUPPORTED",
                        ],
                        os_constraints=[
                            shared.OsConstraint(
                                minimum_version="aspernatur",
                                os_type="OS_UNSPECIFIED",
                                require_verified_chrome_os=True,
                            ),
                            shared.OsConstraint(
                                minimum_version="unde",
                                os_type="DESKTOP_MAC",
                                require_verified_chrome_os=True,
                            ),
                            shared.OsConstraint(
                                minimum_version="est",
                                os_type="DESKTOP_MAC",
                                require_verified_chrome_os=True,
                            ),
                        ],
                        require_admin_approval=False,
                        require_corp_owned=False,
                        require_screenlock=True,
                    ),
                    ip_subnetworks=[
                        "at",
                        "repellendus",
                    ],
                    members=[
                        "sequi",
                    ],
                    negate=True,
                    regions=[
                        "ipsam",
                    ],
                    required_access_levels=[
                        "ut",
                        "deleniti",
                        "ea",
                    ],
                ),
            ],
        ),
        custom=shared.CustomLevel(
            expr=shared.Expr(
                description="laborum",
                expression="eligendi",
                location="dolores",
                title="qui",
            ),
        ),
        description="ea",
        name="nihil",
        title="dolorem",
    ),
)
    
res = s.access_policies.accesscontextmanager_access_policies_access_levels_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accessPolicies

* `accesscontextmanager_access_policies_access_levels_create` - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* `accesscontextmanager_access_policies_access_levels_list` - List all Access Levels for an access policy.
* `accesscontextmanager_access_policies_create` - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* `accesscontextmanager_access_policies_list` - List all AccessPolicies under a container.
* `accesscontextmanager_access_policies_service_perimeters_create` - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* `accesscontextmanager_access_policies_service_perimeters_delete` - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* `accesscontextmanager_access_policies_service_perimeters_list` - List all Service Perimeters for an access policy.
* `accesscontextmanager_access_policies_service_perimeters_patch` - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

### operations

* `accesscontextmanager_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
