<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest(
    security=operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.NetworkservicesProjectsLocationsEndpointPoliciesCreatePathParams(
        parent="molestiae",
    ),
    query_params=operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams(
        dollar_xgafv="1",
        access_token="consequatur",
        alt="media",
        callback="necessitatibus",
        endpoint_policy_id="consequatur",
        fields="ad",
        key="eius",
        oauth_token="ea",
        pretty_print=False,
        quota_user="veniam",
        upload_type="explicabo",
        upload_protocol="enim",
    ),
    request=shared.EndpointPolicyInput(
        authorization_policy="dolorem",
        client_tls_policy="omnis",
        description="delectus",
        endpoint_matcher=shared.EndpointMatcher(
            metadata_label_matcher=shared.MetadataLabelMatcher(
                metadata_label_match_criteria="MATCH_ALL",
                metadata_labels=[
                    shared.MetadataLabels(
                        label_name="nesciunt",
                        label_value="voluptatem",
                    ),
                ],
            ),
        ),
        labels={
            "quo": "eaque",
            "numquam": "officiis",
        },
        name="asperiores",
        server_tls_policy="dolorem",
        traffic_port_selector=shared.TrafficPortSelector(
            ports=[
                "corporis",
                "veniam",
            ],
        ),
        type="ENDPOINT_POLICY_TYPE_UNSPECIFIED",
    ),
)
    
res = s.projects.networkservices_projects_locations_endpoint_policies_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->