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
    
req = operations.ServicecontrolServicesCheckRequest(
    security=operations.ServicecontrolServicesCheckSecurity(
        option1=operations.ServicecontrolServicesCheckSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.ServicecontrolServicesCheckPathParams(
        service_name="repellendus",
    ),
    query_params=operations.ServicecontrolServicesCheckQueryParams(
        dollar_xgafv="2",
        access_token="corrupti",
        alt="media",
        callback="et",
        fields="sint",
        key="ullam",
        oauth_token="ea",
        pretty_print=True,
        quota_user="ratione",
        upload_type="qui",
        upload_protocol="totam",
    ),
    request=shared.CheckRequest(
        attributes=shared.AttributeContext(
            api=shared.API(
                operation="ut",
                protocol="iste",
                service="consequatur",
                version="est",
            ),
            destination=shared.Peer(
                ip="quia",
                labels={
                    "vero": "at",
                    "accusantium": "beatae",
                },
                port="aut",
                principal="dolorem",
                region_code="ipsa",
            ),
            extensions=[
                {
                    "ea": "voluptas",
                },
                {
                    "placeat": "enim",
                    "enim": "dignissimos",
                },
                {
                    "quisquam": "est",
                    "aliquam": "dolores",
                    "ea": "iusto",
                },
            ],
            origin=shared.Peer(
                ip="reprehenderit",
                labels={
                    "dolorum": "incidunt",
                    "qui": "quis",
                },
                port="qui",
                principal="temporibus",
                region_code="natus",
            ),
            request=shared.Request(
                auth=shared.Auth(
                    access_levels=[
                        "quod",
                        "facere",
                        "in",
                    ],
                    audiences=[
                        "dolores",
                        "voluptatem",
                    ],
                    claims={
                        "eos": "tenetur",
                        "libero": "aut",
                        "at": "voluptates",
                    },
                    presenter="earum",
                    principal="omnis",
                ),
                headers={
                    "eligendi": "alias",
                    "itaque": "sint",
                    "et": "sit",
                },
                host="quia",
                id="repudiandae",
                method="similique",
                path="necessitatibus",
                protocol="doloremque",
                query="officiis",
                reason="expedita",
                scheme="repellendus",
                size="harum",
                time="ratione",
            ),
            resource=shared.Resource(
                annotations={
                    "et": "ad",
                    "ullam": "placeat",
                    "repellat": "eius",
                },
                create_time="ducimus",
                delete_time="quia",
                display_name="sit",
                etag="laudantium",
                labels={
                    "odio": "placeat",
                },
                location="aut",
                name="dolorem",
                service="at",
                type="quis",
                uid="vel",
                update_time="corrupti",
            ),
            response=shared.Response(
                backend_latency="dolorem",
                code="deleniti",
                headers={
                    "praesentium": "adipisci",
                    "suscipit": "sed",
                },
                size="aut",
                time="quis",
            ),
            source=shared.Peer(
                ip="est",
                labels={
                    "natus": "consequatur",
                    "aut": "enim",
                    "voluptas": "molestiae",
                },
                port="cum",
                principal="sunt",
                region_code="officiis",
            ),
        ),
        flags="doloremque",
        resources=[
            shared.ResourceInfo(
                container="a",
                location="consequatur",
                name="rerum",
                permission="omnis",
                type="dolores",
            ),
            shared.ResourceInfo(
                container="ut",
                location="quasi",
                name="ullam",
                permission="placeat",
                type="exercitationem",
            ),
            shared.ResourceInfo(
                container="explicabo",
                location="porro",
                name="qui",
                permission="aut",
                type="enim",
            ),
        ],
        service_config_id="minima",
    ),
)
    
res = s.services.servicecontrol_services_check(req)

if res.check_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### services

* `servicecontrol_services_check` - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* `servicecontrol_services_report` - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
