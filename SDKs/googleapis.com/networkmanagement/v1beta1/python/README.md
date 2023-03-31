# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/networkmanagement/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest(
    dollar_xgafv="2",
    connectivity_test_input=shared.ConnectivityTestInput(
        description="provident",
        destination=shared.EndpointInput(
            app_engine_version=shared.AppEngineVersionEndpoint(
                uri="https://terrible-nutrient.org",
            ),
            cloud_function=shared.CloudFunctionEndpoint(
                uri="https://that-hellcat.name",
            ),
            cloud_run_revision=shared.CloudRunRevisionEndpoint(
                uri="https://high-hound.biz",
            ),
            cloud_sql_instance="debitis",
            forwarding_rule="ipsa",
            gke_master_cluster="delectus",
            instance="tempora",
            ip_address="suscipit",
            network="molestiae",
            network_type="NON_GCP_NETWORK",
            port=812169,
            project_id="voluptatum",
        ),
        labels={
            "excepturi": "nisi",
            "recusandae": "temporibus",
        },
        name="ab",
        probing_details=shared.ProbingDetails(
            abort_cause="PERMISSION_DENIED",
            destination_egress_location=shared.EdgeLocation(
                metropolitan_area="veritatis",
            ),
            endpoint_info=shared.EndpointInfo(
                destination_ip="deserunt",
                destination_network_uri="perferendis",
                destination_port=368241,
                protocol="repellendus",
                source_agent_uri="sapiente",
                source_ip="quo",
                source_network_uri="odit",
                source_port=870013,
            ),
            error=shared.Status(
                code=870088,
                details=[
                    {
                        "quod": "quod",
                        "esse": "totam",
                    },
                    {
                        "dolorum": "dicta",
                        "nam": "officia",
                        "occaecati": "fugit",
                        "deleniti": "hic",
                    },
                    {
                        "totam": "beatae",
                        "commodi": "molestiae",
                        "modi": "qui",
                        "impedit": "cum",
                    },
                    {
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                ],
                message="ad",
            ),
            probing_latency=shared.LatencyDistribution(
                latency_percentiles=[
                    shared.LatencyPercentile(
                        latency_micros="sed",
                        percent=612096,
                    ),
                    shared.LatencyPercentile(
                        latency_micros="dolor",
                        percent=616934,
                    ),
                    shared.LatencyPercentile(
                        latency_micros="laboriosam",
                        percent=943749,
                    ),
                ],
            ),
            result="UNDETERMINED",
            sent_probe_count=681820,
            successful_probe_count=449950,
            verify_time="corporis",
        ),
        protocol="iste",
        reachability_details=shared.ReachabilityDetails(
            error=shared.Status(
                code=437032,
                details=[
                    {
                        "architecto": "ipsa",
                        "reiciendis": "est",
                        "mollitia": "laborum",
                    },
                    {
                        "dolorem": "corporis",
                    },
                    {
                        "nobis": "enim",
                    },
                    {
                        "nemo": "minima",
                        "excepturi": "accusantium",
                        "iure": "culpa",
                    },
                ],
                message="doloribus",
            ),
            result="UNDETERMINED",
            traces=[
                shared.Trace(
                    endpoint_info=shared.EndpointInfo(
                        destination_ip="mollitia",
                        destination_network_uri="dolorem",
                        destination_port=635059,
                        protocol="consequuntur",
                        source_agent_uri="repellat",
                        source_ip="mollitia",
                        source_network_uri="occaecati",
                        source_port=253291,
                    ),
                    steps=[
                        shared.Step(
                            abort=shared.AbortInfo(
                                cause="UNINTENDED_DESTINATION",
                                projects_missing_permission=[
                                    "velit",
                                    "error",
                                ],
                                resource_uri="quia",
                            ),
                            app_engine_version=shared.AppEngineVersionInfo(
                                display_name="quis",
                                environment="vitae",
                                runtime="laborum",
                                uri="https://frozen-catch.net",
                            ),
                            causes_drop=False,
                            cloud_function=shared.CloudFunctionInfo(
                                display_name="sequi",
                                location="tenetur",
                                uri="http://pushy-snuggle.com",
                                version_id="quasi",
                            ),
                            cloud_run_revision=shared.CloudRunRevisionInfo(
                                display_name="error",
                                location="temporibus",
                                service_name="laborum",
                                service_uri="quasi",
                                uri="https://witty-swim.info",
                            ),
                            cloud_sql_instance=shared.CloudSQLInstanceInfo(
                                display_name="praesentium",
                                external_ip="voluptatibus",
                                internal_ip="ipsa",
                                network_uri="omnis",
                                region="voluptate",
                                uri="https://agile-arch-rival.info",
                            ),
                            deliver=shared.DeliverInfo(
                                resource_uri="ut",
                                target="SERVERLESS_NEG",
                            ),
                            description="dicta",
                            drop=shared.DropInfo(
                                cause="FORWARDING_RULE_NO_INSTANCES",
                                resource_uri="dolore",
                            ),
                            endpoint=shared.EndpointInfo(
                                destination_ip="iusto",
                                destination_network_uri="dicta",
                                destination_port=688661,
                                protocol="enim",
                                source_agent_uri="accusamus",
                                source_ip="commodi",
                                source_network_uri="repudiandae",
                                source_port=64147,
                            ),
                            firewall=shared.FirewallInfo(
                                action="ipsum",
                                direction="quidem",
                                display_name="molestias",
                                firewall_rule_type="IMPLIED_VPC_FIREWALL_RULE",
                                network_uri="pariatur",
                                policy="modi",
                                priority=508969,
                                target_service_accounts=[
                                    "voluptates",
                                    "quasi",
                                    "repudiandae",
                                ],
                                target_tags=[
                                    "veritatis",
                                    "itaque",
                                    "incidunt",
                                ],
                                uri="http://acrobatic-plantation.org",
                            ),
                            forward=shared.ForwardInfo(
                                resource_uri="explicabo",
                                target="IMPORTED_CUSTOM_ROUTE_NEXT_HOP",
                            ),
                            forwarding_rule=shared.ForwardingRuleInfo(
                                display_name="distinctio",
                                matched_port_range="quibusdam",
                                matched_protocol="labore",
                                network_uri="modi",
                                target="qui",
                                uri="http://offensive-melody.com",
                                vip="magni",
                            ),
                            gke_master=shared.GKEMasterInfo(
                                cluster_network_uri="assumenda",
                                cluster_uri="ipsam",
                                external_ip="alias",
                                internal_ip="fugit",
                            ),
                            instance=shared.InstanceInfo(
                                display_name="dolorum",
                                external_ip="excepturi",
                                interface="tempora",
                                internal_ip="facilis",
                                network_tags=[
                                    "labore",
                                    "delectus",
                                    "eum",
                                ],
                                network_uri="non",
                                service_account="eligendi",
                                uri="https://humming-networking.org",
                            ),
                            load_balancer=shared.LoadBalancerInfo(
                                backend_type="TARGET_POOL",
                                backend_uri="officia",
                                backends=[
                                    shared.LoadBalancerBackend(
                                        display_name="debitis",
                                        health_check_allowing_firewall_rules=[
                                            "dolorum",
                                            "in",
                                            "in",
                                            "illum",
                                        ],
                                        health_check_blocking_firewall_rules=[
                                            "rerum",
                                            "dicta",
                                            "magnam",
                                            "cumque",
                                        ],
                                        health_check_firewall_state="MISCONFIGURED",
                                        uri="http://humming-police.org",
                                    ),
                                ],
                                health_check_uri="non",
                                load_balancer_type="HTTP_PROXY",
                            ),
                            network=shared.NetworkInfo(
                                display_name="enim",
                                matched_ip_range="accusamus",
                                uri="https://repentant-nectar.net",
                            ),
                            project_id="id",
                            route=shared.RouteInfo(
                                dest_ip_range="blanditiis",
                                dest_port_ranges=[
                                    "sapiente",
                                    "amet",
                                    "deserunt",
                                ],
                                display_name="nisi",
                                instance_tags=[
                                    "natus",
                                    "omnis",
                                ],
                                network_uri="molestiae",
                                next_hop="perferendis",
                                next_hop_type="NEXT_HOP_INTERCONNECT",
                                priority=301575,
                                protocols=[
                                    "id",
                                    "labore",
                                    "labore",
                                ],
                                route_type="DYNAMIC",
                                src_ip_range="natus",
                                src_port_ranges=[
                                    "eum",
                                    "vero",
                                    "aspernatur",
                                ],
                                uri="http://foolhardy-bolero.name",
                            ),
                            state="APPLY_INGRESS_FIREWALL_RULE",
                            vpc_connector=shared.VpcConnectorInfo(
                                display_name="provident",
                                location="quos",
                                uri="https://angelic-pharmacist.org",
                            ),
                            vpn_gateway=shared.VpnGatewayInfo(
                                display_name="mollitia",
                                ip_address="ad",
                                network_uri="eum",
                                region="dolor",
                                uri="https://conventional-frequency.com",
                                vpn_tunnel_uri="iure",
                            ),
                            vpn_tunnel=shared.VpnTunnelInfo(
                                display_name="doloribus",
                                network_uri="debitis",
                                region="eius",
                                remote_gateway="maxime",
                                remote_gateway_ip="deleniti",
                                routing_type="POLICY_BASED",
                                source_gateway="in",
                                source_gateway_ip="architecto",
                                uri="http://vacant-flexibility.net",
                            ),
                        ),
                        shared.Step(
                            abort=shared.AbortInfo(
                                cause="UNINTENDED_DESTINATION",
                                projects_missing_permission=[
                                    "quibusdam",
                                    "sed",
                                    "saepe",
                                    "pariatur",
                                ],
                                resource_uri="accusantium",
                            ),
                            app_engine_version=shared.AppEngineVersionInfo(
                                display_name="consequuntur",
                                environment="praesentium",
                                runtime="natus",
                                uri="http://cloudy-screwdriver.org",
                            ),
                            causes_drop=False,
                            cloud_function=shared.CloudFunctionInfo(
                                display_name="pariatur",
                                location="maxime",
                                uri="http://nimble-caution.info",
                                version_id="accusantium",
                            ),
                            cloud_run_revision=shared.CloudRunRevisionInfo(
                                display_name="ab",
                                location="maiores",
                                service_name="quidem",
                                service_uri="ipsam",
                                uri="http://impolite-rat.com",
                            ),
                            cloud_sql_instance=shared.CloudSQLInstanceInfo(
                                display_name="pariatur",
                                external_ip="nemo",
                                internal_ip="voluptatibus",
                                network_uri="perferendis",
                                region="fugiat",
                                uri="http://adept-sailing.info",
                            ),
                            deliver=shared.DeliverInfo(
                                resource_uri="hic",
                                target="PSC_GOOGLE_API",
                            ),
                            description="nobis",
                            drop=shared.DropInfo(
                                cause="ROUTE_WRONG_NETWORK",
                                resource_uri="quis",
                            ),
                            endpoint=shared.EndpointInfo(
                                destination_ip="totam",
                                destination_network_uri="dignissimos",
                                destination_port=54338,
                                protocol="quis",
                                source_agent_uri="nesciunt",
                                source_ip="eos",
                                source_network_uri="perferendis",
                                source_port=170986,
                            ),
                            firewall=shared.FirewallInfo(
                                action="minus",
                                direction="quam",
                                display_name="dolor",
                                firewall_rule_type="NETWORK_FIREWALL_POLICY_RULE",
                                network_uri="nostrum",
                                policy="hic",
                                priority=928082,
                                target_service_accounts=[
                                    "facilis",
                                    "perspiciatis",
                                    "voluptatem",
                                ],
                                target_tags=[
                                    "consequuntur",
                                    "blanditiis",
                                    "error",
                                    "eaque",
                                ],
                                uri="https://right-damage.org",
                            ),
                            forward=shared.ForwardInfo(
                                resource_uri="earum",
                                target="VPN_GATEWAY",
                            ),
                            forwarding_rule=shared.ForwardingRuleInfo(
                                display_name="iste",
                                matched_port_range="dolorum",
                                matched_protocol="deleniti",
                                network_uri="pariatur",
                                target="provident",
                                uri="https://secret-wafer.biz",
                                vip="quos",
                            ),
                            gke_master=shared.GKEMasterInfo(
                                cluster_network_uri="aliquid",
                                cluster_uri="dolorem",
                                external_ip="dolorem",
                                internal_ip="dolor",
                            ),
                            instance=shared.InstanceInfo(
                                display_name="qui",
                                external_ip="ipsum",
                                interface="hic",
                                internal_ip="excepturi",
                                network_tags=[
                                    "voluptate",
                                    "dignissimos",
                                    "reiciendis",
                                ],
                                network_uri="amet",
                                service_account="dolorum",
                                uri="http://both-background.com",
                            ),
                            load_balancer=shared.LoadBalancerInfo(
                                backend_type="BACKEND_SERVICE",
                                backend_uri="odio",
                                backends=[
                                    shared.LoadBalancerBackend(
                                        display_name="accusamus",
                                        health_check_allowing_firewall_rules=[
                                            "voluptatibus",
                                            "voluptas",
                                            "natus",
                                        ],
                                        health_check_blocking_firewall_rules=[
                                            "atque",
                                        ],
                                        health_check_firewall_state="HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                        uri="https://best-respite.net",
                                    ),
                                    shared.LoadBalancerBackend(
                                        display_name="iusto",
                                        health_check_allowing_firewall_rules=[
                                            "dolorum",
                                            "deleniti",
                                        ],
                                        health_check_blocking_firewall_rules=[
                                            "necessitatibus",
                                            "distinctio",
                                            "asperiores",
                                        ],
                                        health_check_firewall_state="CONFIGURED",
                                        uri="http://jolly-pint.org",
                                    ),
                                ],
                                health_check_uri="eius",
                                load_balancer_type="LOAD_BALANCER_TYPE_UNSPECIFIED",
                            ),
                            network=shared.NetworkInfo(
                                display_name="perferendis",
                                matched_ip_range="amet",
                                uri="https://uncomfortable-evocation.org",
                            ),
                            project_id="suscipit",
                            route=shared.RouteInfo(
                                dest_ip_range="deserunt",
                                dest_port_ranges=[
                                    "minima",
                                    "repellendus",
                                    "totam",
                                ],
                                display_name="similique",
                                instance_tags=[
                                    "at",
                                ],
                                network_uri="quaerat",
                                next_hop="tempora",
                                next_hop_type="NEXT_HOP_INTERCONNECT",
                                priority=798047,
                                protocols=[
                                    "qui",
                                    "dolorum",
                                    "a",
                                    "esse",
                                ],
                                route_type="PEERING_STATIC",
                                src_ip_range="iusto",
                                src_port_ranges=[
                                    "quisquam",
                                ],
                                uri="https://elliptical-rediscovery.org",
                            ),
                            state="START_FROM_CLOUD_FUNCTION",
                            vpc_connector=shared.VpcConnectorInfo(
                                display_name="enim",
                                location="dolorem",
                                uri="https://masculine-introduction.com",
                            ),
                            vpn_gateway=shared.VpnGatewayInfo(
                                display_name="expedita",
                                ip_address="neque",
                                network_uri="sed",
                                region="vel",
                                uri="https://hasty-pen.info",
                                vpn_tunnel_uri="ipsum",
                            ),
                            vpn_tunnel=shared.VpnTunnelInfo(
                                display_name="incidunt",
                                network_uri="qui",
                                region="cupiditate",
                                remote_gateway="maxime",
                                remote_gateway_ip="pariatur",
                                routing_type="POLICY_BASED",
                                source_gateway="dicta",
                                source_gateway_ip="laborum",
                                uri="https://feisty-carnival.biz",
                            ),
                        ),
                    ],
                ),
            ],
            verify_time="distinctio",
        ),
        related_projects=[
            "aliquid",
            "quam",
            "molestias",
        ],
        source=shared.EndpointInput(
            app_engine_version=shared.AppEngineVersionEndpoint(
                uri="https://delightful-cook.com",
            ),
            cloud_function=shared.CloudFunctionEndpoint(
                uri="http://likely-camper.info",
            ),
            cloud_run_revision=shared.CloudRunRevisionEndpoint(
                uri="https://warlike-ankle.net",
            ),
            cloud_sql_instance="soluta",
            forwarding_rule="nobis",
            gke_master_cluster="et",
            instance="saepe",
            ip_address="ipsum",
            network="veritatis",
            network_type="NON_GCP_NETWORK",
            port=552193,
            project_id="tempore",
        ),
    ),
    access_token="cupiditate",
    alt="json",
    callback="delectus",
    fields_="dolorem",
    key="dolore",
    oauth_token="labore",
    parent="adipisci",
    pretty_print=False,
    quota_user="dolorum",
    test_id="architecto",
    upload_type="quae",
    upload_protocol="aut",
)
    
res = s.projects.networkmanagement_projects_locations_global_connectivity_tests_create(req, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `networkmanagement_projects_locations_global_connectivity_tests_create` - Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.
* `networkmanagement_projects_locations_global_connectivity_tests_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networkmanagement_projects_locations_global_connectivity_tests_list` - Lists all Connectivity Tests owned by a project.
* `networkmanagement_projects_locations_global_connectivity_tests_patch` - Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.
* `networkmanagement_projects_locations_global_connectivity_tests_rerun` - Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
* `networkmanagement_projects_locations_global_connectivity_tests_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networkmanagement_projects_locations_global_connectivity_tests_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `networkmanagement_projects_locations_global_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `networkmanagement_projects_locations_global_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `networkmanagement_projects_locations_global_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `networkmanagement_projects_locations_global_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `networkmanagement_projects_locations_list` - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
