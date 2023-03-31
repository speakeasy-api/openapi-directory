<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest(
    dollar_xgafv="2",
    authorization_policy_input=shared.AuthorizationPolicyInput(
        action="ALLOW",
        description="distinctio",
        labels={
            "unde": "nulla",
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
        },
        name="iure",
        rules=[
            shared.Rule(
                destinations=[
                    shared.Destination(
                        hosts=[
                            "delectus",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="tempora",
                            regex_match="suscipit",
                        ),
                        methods=[
                            "minus",
                            "placeat",
                        ],
                        ports=[
                            479977,
                            568045,
                            392785,
                        ],
                    ),
                    shared.Destination(
                        hosts=[
                            "temporibus",
                            "ab",
                            "quis",
                            "veritatis",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="deserunt",
                            regex_match="perferendis",
                        ),
                        methods=[
                            "repellendus",
                            "sapiente",
                        ],
                        ports=[
                            140350,
                            870013,
                            870088,
                            978619,
                        ],
                    ),
                    shared.Destination(
                        hosts=[
                            "quod",
                            "quod",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="esse",
                            regex_match="totam",
                        ),
                        methods=[
                            "dolorum",
                            "dicta",
                            "nam",
                            "officia",
                        ],
                        ports=[
                            143353,
                            537373,
                            944669,
                        ],
                    ),
                    shared.Destination(
                        hosts=[
                            "totam",
                            "beatae",
                            "commodi",
                            "molestiae",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="modi",
                            regex_match="qui",
                        ),
                        methods=[
                            "cum",
                            "esse",
                            "ipsum",
                            "excepturi",
                        ],
                        ports=[
                            18789,
                        ],
                    ),
                ],
                sources=[
                    shared.Source(
                        ip_blocks=[
                            "sed",
                            "iste",
                            "dolor",
                        ],
                        principals=[
                            "laboriosam",
                            "hic",
                            "saepe",
                        ],
                    ),
                    shared.Source(
                        ip_blocks=[
                            "in",
                            "corporis",
                            "iste",
                        ],
                        principals=[
                            "saepe",
                            "quidem",
                        ],
                    ),
                ],
            ),
            shared.Rule(
                destinations=[
                    shared.Destination(
                        hosts=[
                            "reiciendis",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="est",
                            regex_match="mollitia",
                        ),
                        methods=[
                            "dolores",
                            "dolorem",
                            "corporis",
                        ],
                        ports=[
                            750686,
                        ],
                    ),
                ],
                sources=[
                    shared.Source(
                        ip_blocks=[
                            "nemo",
                            "minima",
                            "excepturi",
                        ],
                        principals=[
                            "iure",
                        ],
                    ),
                    shared.Source(
                        ip_blocks=[
                            "doloribus",
                            "sapiente",
                            "architecto",
                        ],
                        principals=[
                            "dolorem",
                            "culpa",
                            "consequuntur",
                        ],
                    ),
                ],
            ),
        ],
    ),
    access_token="repellat",
    alt="media",
    authorization_policy_id="occaecati",
    callback="numquam",
    fields_="commodi",
    key="quam",
    oauth_token="molestiae",
    parent="velit",
    pretty_print=False,
    quota_user="error",
    upload_type="quia",
    upload_protocol="quis",
)
    
res = s.projects.networksecurity_projects_locations_authorization_policies_create(req, operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->