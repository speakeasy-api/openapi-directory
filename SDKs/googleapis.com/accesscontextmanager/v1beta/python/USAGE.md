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