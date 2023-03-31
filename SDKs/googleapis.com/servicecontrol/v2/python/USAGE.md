<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ServicecontrolServicesCheckRequest(
    dollar_xgafv="2",
    check_request=shared.CheckRequest(
        attributes=shared.AttributeContext(
            api=shared.API(
                operation="provident",
                protocol="distinctio",
                service="quibusdam",
                version="unde",
            ),
            destination=shared.Peer(
                ip="nulla",
                labels={
                    "illum": "vel",
                    "error": "deserunt",
                    "suscipit": "iure",
                },
                port="magnam",
                principal="debitis",
                region_code="ipsa",
            ),
            extensions=[
                {
                    "suscipit": "molestiae",
                    "minus": "placeat",
                },
                {
                    "iusto": "excepturi",
                    "nisi": "recusandae",
                    "temporibus": "ab",
                },
                {
                    "veritatis": "deserunt",
                    "perferendis": "ipsam",
                },
                {
                    "sapiente": "quo",
                    "odit": "at",
                    "at": "maiores",
                    "molestiae": "quod",
                },
            ],
            origin=shared.Peer(
                ip="quod",
                labels={
                    "totam": "porro",
                    "dolorum": "dicta",
                },
                port="nam",
                principal="officia",
                region_code="occaecati",
            ),
            request=shared.Request(
                auth=shared.Auth(
                    access_levels=[
                        "deleniti",
                    ],
                    audiences=[
                        "optio",
                        "totam",
                        "beatae",
                        "commodi",
                    ],
                    claims={
                        "modi": "qui",
                        "impedit": "cum",
                    },
                    presenter="esse",
                    principal="ipsum",
                ),
                headers={
                    "aspernatur": "perferendis",
                    "ad": "natus",
                    "sed": "iste",
                },
                host="dolor",
                id="natus",
                method="laboriosam",
                path="hic",
                protocol="saepe",
                query="fuga",
                reason="in",
                scheme="corporis",
                size="iste",
                time="iure",
            ),
            resource=shared.Resource(
                annotations={
                    "quidem": "architecto",
                    "ipsa": "reiciendis",
                    "est": "mollitia",
                    "laborum": "dolores",
                },
                create_time="dolorem",
                delete_time="corporis",
                display_name="explicabo",
                etag="nobis",
                labels={
                    "omnis": "nemo",
                    "minima": "excepturi",
                },
                location="accusantium",
                name="iure",
                service="culpa",
                type="doloribus",
                uid="sapiente",
                update_time="architecto",
            ),
            response=shared.Response(
                backend_latency="mollitia",
                code="dolorem",
                headers={
                    "consequuntur": "repellat",
                    "mollitia": "occaecati",
                    "numquam": "commodi",
                },
                size="quam",
                time="molestiae",
            ),
            source=shared.Peer(
                ip="velit",
                labels={
                    "quia": "quis",
                    "vitae": "laborum",
                    "animi": "enim",
                },
                port="odit",
                principal="quo",
                region_code="sequi",
            ),
        ),
        flags="tenetur",
        resources=[
            shared.ResourceInfo(
                container="id",
                location="possimus",
                name="aut",
                permission="quasi",
                type="error",
            ),
            shared.ResourceInfo(
                container="temporibus",
                location="laborum",
                name="quasi",
                permission="reiciendis",
                type="voluptatibus",
            ),
        ],
        service_config_id="vero",
    ),
    access_token="nihil",
    alt="media",
    callback="voluptatibus",
    fields_="ipsa",
    key="omnis",
    oauth_token="voluptate",
    pretty_print=False,
    quota_user="cum",
    service_name="perferendis",
    upload_type="doloremque",
    upload_protocol="reprehenderit",
)
    
res = s.services.servicecontrol_services_check(req, operations.ServicecontrolServicesCheckSecurity(
    option1=operations.ServicecontrolServicesCheckSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.check_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->