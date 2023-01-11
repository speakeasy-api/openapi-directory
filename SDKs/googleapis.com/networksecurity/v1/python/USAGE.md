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
        parent="et",
    ),
    query_params=operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams(
        dollar_xgafv="1",
        access_token="minima",
        alt="media",
        authorization_policy_id="dolor",
        callback="explicabo",
        fields="voluptates",
        key="dolor",
        oauth_token="iure",
        pretty_print=False,
        quota_user="at",
        upload_type="nostrum",
        upload_protocol="quo",
    ),
    request=shared.AuthorizationPolicyInput(
        action="ALLOW",
        description="qui",
        labels={
            "odio": "beatae",
            "nobis": "totam",
            "sunt": "adipisci",
        },
        name="ullam",
        rules=[
            shared.Rule(
                destinations=[
                    shared.Destination(
                        hosts=[
                            "eum",
                            "sed",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="eveniet",
                            regex_match="est",
                        ),
                        methods=[
                            "et",
                            "ipsa",
                            "assumenda",
                        ],
                        ports=[
                            4943689285477287669,
                            3160307118056465289,
                        ],
                    ),
                    shared.Destination(
                        hosts=[
                            "id",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="cupiditate",
                            regex_match="dolorem",
                        ),
                        methods=[
                            "esse",
                            "ratione",
                            "soluta",
                        ],
                        ports=[
                            3231685339067003690,
                            5512569230175251860,
                            8584494059737821751,
                        ],
                    ),
                ],
                sources=[
                    shared.Source(
                        ip_blocks=[
                            "omnis",
                        ],
                        principals=[
                            "accusamus",
                            "atque",
                            "et",
                        ],
                    ),
                ],
            ),
            shared.Rule(
                destinations=[
                    shared.Destination(
                        hosts=[
                            "ratione",
                            "occaecati",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="et",
                            regex_match="neque",
                        ),
                        methods=[
                            "ea",
                        ],
                        ports=[
                            4607326647308611294,
                            6100199300792176061,
                            3576388956540400177,
                        ],
                    ),
                ],
                sources=[
                    shared.Source(
                        ip_blocks=[
                            "asperiores",
                            "non",
                        ],
                        principals=[
                            "ab",
                        ],
                    ),
                    shared.Source(
                        ip_blocks=[
                            "aut",
                            "unde",
                        ],
                        principals=[
                            "repellat",
                            "sed",
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