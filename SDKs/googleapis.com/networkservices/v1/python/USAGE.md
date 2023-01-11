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
        parent="optio",
    ),
    query_params=operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams(
        dollar_xgafv="2",
        access_token="accusamus",
        alt="proto",
        callback="dolorum",
        endpoint_policy_id="veritatis",
        fields="doloribus",
        key="in",
        oauth_token="maxime",
        pretty_print=False,
        quota_user="corporis",
        upload_type="nam",
        upload_protocol="assumenda",
    ),
    request=shared.EndpointPolicyInput(
        authorization_policy="molestias",
        client_tls_policy="aut",
        description="esse",
        endpoint_matcher=shared.EndpointMatcher(
            metadata_label_matcher=shared.EndpointMatcherMetadataLabelMatcher(
                metadata_label_match_criteria="MATCH_ALL",
                metadata_labels=[
                    shared.EndpointMatcherMetadataLabelMatcherMetadataLabels(
                        label_name="cumque",
                        label_value="aut",
                    ),
                    shared.EndpointMatcherMetadataLabelMatcherMetadataLabels(
                        label_name="qui",
                        label_value="incidunt",
                    ),
                ],
            ),
        ),
        labels={
            "possimus": "qui",
            "possimus": "alias",
        },
        name="ipsam",
        server_tls_policy="commodi",
        traffic_port_selector=shared.TrafficPortSelector(
            ports=[
                "corrupti",
                "voluptatem",
            ],
        ),
        type="SIDECAR_PROXY",
    ),
)
    
res = s.projects.networkservices_projects_locations_endpoint_policies_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->