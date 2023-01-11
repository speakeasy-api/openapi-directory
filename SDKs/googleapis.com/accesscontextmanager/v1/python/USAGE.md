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
        parent="vel",
    ),
    query_params=operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams(
        dollar_xgafv="2",
        access_token="consequatur",
        alt="json",
        callback="atque",
        fields="quo",
        key="amet",
        oauth_token="ipsa",
        pretty_print=True,
        quota_user="aspernatur",
        upload_type="at",
        upload_protocol="esse",
    ),
    request=shared.AccessLevel(
        basic=shared.BasicLevel(
            combining_function="AND",
            conditions=[
                shared.Condition(
                    device_policy=shared.DevicePolicy(
                        allowed_device_management_levels=[
                            "NONE",
                        ],
                        allowed_encryption_statuses=[
                            "UNENCRYPTED",
                            "ENCRYPTION_UNSPECIFIED",
                        ],
                        os_constraints=[
                            shared.OsConstraint(
                                minimum_version="voluptatibus",
                                os_type="DESKTOP_MAC",
                                require_verified_chrome_os=False,
                            ),
                        ],
                        require_admin_approval=True,
                        require_corp_owned=True,
                        require_screenlock=False,
                    ),
                    ip_subnetworks=[
                        "doloribus",
                    ],
                    members=[
                        "excepturi",
                    ],
                    negate=True,
                    regions=[
                        "beatae",
                        "quia",
                    ],
                    required_access_levels=[
                        "suscipit",
                        "cupiditate",
                    ],
                ),
                shared.Condition(
                    device_policy=shared.DevicePolicy(
                        allowed_device_management_levels=[
                            "BASIC",
                        ],
                        allowed_encryption_statuses=[
                            "ENCRYPTION_UNSPECIFIED",
                            "ENCRYPTION_UNSPECIFIED",
                        ],
                        os_constraints=[
                            shared.OsConstraint(
                                minimum_version="rerum",
                                os_type="IOS",
                                require_verified_chrome_os=False,
                            ),
                            shared.OsConstraint(
                                minimum_version="autem",
                                os_type="IOS",
                                require_verified_chrome_os=True,
                            ),
                            shared.OsConstraint(
                                minimum_version="ipsam",
                                os_type="DESKTOP_CHROME_OS",
                                require_verified_chrome_os=True,
                            ),
                        ],
                        require_admin_approval=False,
                        require_corp_owned=True,
                        require_screenlock=True,
                    ),
                    ip_subnetworks=[
                        "quis",
                    ],
                    members=[
                        "optio",
                        "eos",
                    ],
                    negate=False,
                    regions=[
                        "sunt",
                    ],
                    required_access_levels=[
                        "non",
                        "iure",
                    ],
                ),
            ],
        ),
        custom=shared.CustomLevel(
            expr=shared.Expr(
                description="atque",
                expression="corporis",
                location="sed",
                title="illum",
            ),
        ),
        description="enim",
        name="aut",
        title="et",
    ),
)
    
res = s.access_policies.accesscontextmanager_access_policies_access_levels_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->