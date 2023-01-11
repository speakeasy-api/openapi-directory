<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest(
    security=operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreatePathParams(
        parent="at",
    ),
    query_params=operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams(
        dollar_xgafv="2",
        access_token="voluptas",
        alt="proto",
        authorization_policy_id="quod",
        callback="aperiam",
        fields="dolorem",
        key="id",
        oauth_token="rerum",
        pretty_print=False,
        quota_user="eum",
        upload_type="iusto",
        upload_protocol="repudiandae",
    ),
    request=shared.AuthorizationPolicyInput(
        action="ACTION_UNSPECIFIED",
        description="aut",
        labels={
            "sunt": "sunt",
            "corrupti": "minus",
        },
        name="consectetur",
        rules=[
            shared.Rule(
                destinations=[
                    shared.Destination(
                        hosts=[
                            "nulla",
                            "harum",
                            "aliquid",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="est",
                            regex_match="ut",
                        ),
                        methods=[
                            "aperiam",
                            "voluptates",
                        ],
                        ports=[
                            5608578254048966378,
                        ],
                    ),
                    shared.Destination(
                        hosts=[
                            "quo",
                            "dolor",
                            "nisi",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="provident",
                            regex_match="inventore",
                        ),
                        methods=[
                            "magni",
                            "error",
                        ],
                        ports=[
                            3121704883122059694,
                            8783722961125201754,
                        ],
                    ),
                ],
                sources=[
                    shared.Source(
                        ip_blocks=[
                            "tempore",
                            "qui",
                        ],
                        principals=[
                            "voluptate",
                        ],
                    ),
                ],
            ),
        ],
    ),
)
    
res = s.projects.networksecurity_projects_locations_authorization_policies_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->