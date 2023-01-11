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
    
req = operations.TrafficdirectorDiscoveryClientStatusRequest(
    security=operations.TrafficdirectorDiscoveryClientStatusSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.TrafficdirectorDiscoveryClientStatusQueryParams(
        dollar_xgafv="2",
        access_token="rerum",
        alt="json",
        callback="fuga",
        fields="deleniti",
        key="et",
        oauth_token="esse",
        pretty_print=True,
        quota_user="eum",
        upload_type="impedit",
        upload_protocol="non",
    ),
    request=shared.ClientStatusRequest(
        node_matchers=[
            shared.NodeMatcher(
                node_id=shared.StringMatcher(
                    exact="possimus",
                    ignore_case=False,
                    prefix="eum",
                    regex="omnis",
                    safe_regex=shared.RegexMatcher(
                        google_re2=shared.GoogleRe2(
                            max_program_size=801344521399143500,
                        ),
                        regex="officiis",
                    ),
                    suffix="aut",
                ),
                node_metadatas=[
                    shared.StructMatcher(
                        path=[
                            shared.PathSegment(
                                key="qui",
                            ),
                        ],
                        value=shared.ValueMatcher(
                            bool_match=True,
                            double_match=shared.DoubleMatcher(
                                exact=15.100000,
                                range=shared.DoubleRange(
                                    end=85.099998,
                                    start=65.199997,
                                ),
                            ),
                            list_match=shared.ListMatcher(
                                one_of=shared.ValueMatcher(
                                
                                ),
                            ),
                            null_match={
                                "laudantium": "rerum",
                                "et": "officiis",
                                "ipsa": "voluptatem",
                            },
                            present_match=False,
                            string_match=shared.StringMatcher(
                                exact="est",
                                ignore_case=True,
                                prefix="illum",
                                regex="quibusdam",
                                safe_regex=shared.RegexMatcher(
                                    google_re2=shared.GoogleRe2(
                                        max_program_size=2297128530979691075,
                                    ),
                                    regex="enim",
                                ),
                                suffix="qui",
                            ),
                        ),
                    ),
                    shared.StructMatcher(
                        path=[
                            shared.PathSegment(
                                key="ut",
                            ),
                            shared.PathSegment(
                                key="corporis",
                            ),
                        ],
                        value=shared.ValueMatcher(
                            bool_match=True,
                            double_match=shared.DoubleMatcher(
                                exact=37.200001,
                                range=shared.DoubleRange(
                                    end=38.099998,
                                    start=44.099998,
                                ),
                            ),
                            list_match=shared.ListMatcher(
                                one_of=shared.ValueMatcher(
                                
                                ),
                            ),
                            null_match={
                                "velit": "quas",
                            },
                            present_match=True,
                            string_match=shared.StringMatcher(
                                exact="minima",
                                ignore_case=False,
                                prefix="quod",
                                regex="saepe",
                                safe_regex=shared.RegexMatcher(
                                    google_re2=shared.GoogleRe2(
                                        max_program_size=5738798814881421699,
                                    ),
                                    regex="qui",
                                ),
                                suffix="ea",
                            ),
                        ),
                    ),
                    shared.StructMatcher(
                        path=[
                            shared.PathSegment(
                                key="corrupti",
                            ),
                            shared.PathSegment(
                                key="sit",
                            ),
                            shared.PathSegment(
                                key="cumque",
                            ),
                        ],
                        value=shared.ValueMatcher(
                            bool_match=True,
                            double_match=shared.DoubleMatcher(
                                exact=1.200000,
                                range=shared.DoubleRange(
                                    end=55.099998,
                                    start=77.099998,
                                ),
                            ),
                            list_match=shared.ListMatcher(
                                one_of=shared.ValueMatcher(
                                
                                ),
                            ),
                            null_match={
                                "sapiente": "odit",
                                "est": "non",
                            },
                            present_match=False,
                            string_match=shared.StringMatcher(
                                exact="eum",
                                ignore_case=False,
                                prefix="sit",
                                regex="accusantium",
                                safe_regex=shared.RegexMatcher(
                                    google_re2=shared.GoogleRe2(
                                        max_program_size=8481447222394835110,
                                    ),
                                    regex="illum",
                                ),
                                suffix="et",
                            ),
                        ),
                    ),
                ],
            ),
            shared.NodeMatcher(
                node_id=shared.StringMatcher(
                    exact="qui",
                    ignore_case=False,
                    prefix="et",
                    regex="sed",
                    safe_regex=shared.RegexMatcher(
                        google_re2=shared.GoogleRe2(
                            max_program_size=2385077128595817332,
                        ),
                        regex="nesciunt",
                    ),
                    suffix="facilis",
                ),
                node_metadatas=[
                    shared.StructMatcher(
                        path=[
                            shared.PathSegment(
                                key="nostrum",
                            ),
                        ],
                        value=shared.ValueMatcher(
                            bool_match=False,
                            double_match=shared.DoubleMatcher(
                                exact=13.200000,
                                range=shared.DoubleRange(
                                    end=78.099998,
                                    start=22.200001,
                                ),
                            ),
                            list_match=shared.ListMatcher(
                                one_of=shared.ValueMatcher(
                                
                                ),
                            ),
                            null_match={
                                "et": "maxime",
                                "eos": "vero",
                            },
                            present_match=False,
                            string_match=shared.StringMatcher(
                                exact="magni",
                                ignore_case=False,
                                prefix="quis",
                                regex="suscipit",
                                safe_regex=shared.RegexMatcher(
                                    google_re2=shared.GoogleRe2(
                                        max_program_size=2975408353815645467,
                                    ),
                                    regex="omnis",
                                ),
                                suffix="perferendis",
                            ),
                        ),
                    ),
                    shared.StructMatcher(
                        path=[
                            shared.PathSegment(
                                key="molestias",
                            ),
                            shared.PathSegment(
                                key="soluta",
                            ),
                        ],
                        value=shared.ValueMatcher(
                            bool_match=False,
                            double_match=shared.DoubleMatcher(
                                exact=82.099998,
                                range=shared.DoubleRange(
                                    end=16.200001,
                                    start=83.099998,
                                ),
                            ),
                            list_match=shared.ListMatcher(
                                one_of=shared.ValueMatcher(
                                
                                ),
                            ),
                            null_match={
                                "earum": "atque",
                                "est": "at",
                            },
                            present_match=False,
                            string_match=shared.StringMatcher(
                                exact="quisquam",
                                ignore_case=False,
                                prefix="voluptatem",
                                regex="quibusdam",
                                safe_regex=shared.RegexMatcher(
                                    google_re2=shared.GoogleRe2(
                                        max_program_size=2614919038132016322,
                                    ),
                                    regex="est",
                                ),
                                suffix="placeat",
                            ),
                        ),
                    ),
                ],
            ),
            shared.NodeMatcher(
                node_id=shared.StringMatcher(
                    exact="cupiditate",
                    ignore_case=False,
                    prefix="neque",
                    regex="occaecati",
                    safe_regex=shared.RegexMatcher(
                        google_re2=shared.GoogleRe2(
                            max_program_size=4601631252330064062,
                        ),
                        regex="enim",
                    ),
                    suffix="perspiciatis",
                ),
                node_metadatas=[
                    shared.StructMatcher(
                        path=[
                            shared.PathSegment(
                                key="distinctio",
                            ),
                            shared.PathSegment(
                                key="dolor",
                            ),
                        ],
                        value=shared.ValueMatcher(
                            bool_match=True,
                            double_match=shared.DoubleMatcher(
                                exact=72.199997,
                                range=shared.DoubleRange(
                                    end=90.099998,
                                    start=75.099998,
                                ),
                            ),
                            list_match=shared.ListMatcher(
                                one_of=shared.ValueMatcher(
                                
                                ),
                            ),
                            null_match={
                                "voluptates": "et",
                                "sed": "mollitia",
                                "eum": "dolore",
                            },
                            present_match=True,
                            string_match=shared.StringMatcher(
                                exact="perspiciatis",
                                ignore_case=False,
                                prefix="omnis",
                                regex="eligendi",
                                safe_regex=shared.RegexMatcher(
                                    google_re2=shared.GoogleRe2(
                                        max_program_size=3967219848098404836,
                                    ),
                                    regex="officiis",
                                ),
                                suffix="minima",
                            ),
                        ),
                    ),
                ],
            ),
        ],
    ),
)
    
res = s.discovery.trafficdirector_discovery_client_status(req)

if res.client_status_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### discovery

* `trafficdirector_discovery_client_status`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
