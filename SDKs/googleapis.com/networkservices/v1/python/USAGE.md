<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest(
    dollar_xgafv="2",
    endpoint_policy_input=shared.EndpointPolicyInput(
        authorization_policy="provident",
        client_tls_policy="distinctio",
        description="quibusdam",
        endpoint_matcher=shared.EndpointMatcher(
            metadata_label_matcher=shared.EndpointMatcherMetadataLabelMatcher(
                metadata_label_match_criteria="MATCH_ANY",
                metadata_labels=[
                    shared.EndpointMatcherMetadataLabelMatcherMetadataLabels(
                        label_name="corrupti",
                        label_value="illum",
                    ),
                    shared.EndpointMatcherMetadataLabelMatcherMetadataLabels(
                        label_name="vel",
                        label_value="error",
                    ),
                    shared.EndpointMatcherMetadataLabelMatcherMetadataLabels(
                        label_name="deserunt",
                        label_value="suscipit",
                    ),
                    shared.EndpointMatcherMetadataLabelMatcherMetadataLabels(
                        label_name="iure",
                        label_value="magnam",
                    ),
                ],
            ),
        ),
        labels={
            "ipsa": "delectus",
            "tempora": "suscipit",
            "molestiae": "minus",
            "placeat": "voluptatum",
        },
        name="iusto",
        server_tls_policy="excepturi",
        traffic_port_selector=shared.TrafficPortSelector(
            ports=[
                "recusandae",
                "temporibus",
            ],
        ),
        type="ENDPOINT_POLICY_TYPE_UNSPECIFIED",
    ),
    access_token="quis",
    alt="json",
    callback="deserunt",
    endpoint_policy_id="perferendis",
    fields_="ipsam",
    key="repellendus",
    oauth_token="sapiente",
    parent="quo",
    pretty_print=False,
    quota_user="odit",
    upload_type="at",
    upload_protocol="at",
)
    
res = s.projects.networkservices_projects_locations_endpoint_policies_create(req, operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->