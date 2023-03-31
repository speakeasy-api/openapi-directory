<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatastoreProjectsAllocateIdsRequest(
    dollar_xgafv="2",
    allocate_ids_request=shared.AllocateIdsRequest(
        keys=[
            shared.Key(
                partition_id=shared.PartitionID(
                    namespace_id="distinctio",
                    project_id="quibusdam",
                ),
                path=[
                    shared.PathElement(
                        id="nulla",
                        kind="corrupti",
                        name="illum",
                    ),
                    shared.PathElement(
                        id="vel",
                        kind="error",
                        name="deserunt",
                    ),
                    shared.PathElement(
                        id="suscipit",
                        kind="iure",
                        name="magnam",
                    ),
                ],
            ),
            shared.Key(
                partition_id=shared.PartitionID(
                    namespace_id="debitis",
                    project_id="ipsa",
                ),
                path=[
                    shared.PathElement(
                        id="tempora",
                        kind="suscipit",
                        name="molestiae",
                    ),
                    shared.PathElement(
                        id="minus",
                        kind="placeat",
                        name="voluptatum",
                    ),
                    shared.PathElement(
                        id="iusto",
                        kind="excepturi",
                        name="nisi",
                    ),
                    shared.PathElement(
                        id="recusandae",
                        kind="temporibus",
                        name="ab",
                    ),
                ],
            ),
            shared.Key(
                partition_id=shared.PartitionID(
                    namespace_id="quis",
                    project_id="veritatis",
                ),
                path=[
                    shared.PathElement(
                        id="perferendis",
                        kind="ipsam",
                        name="repellendus",
                    ),
                    shared.PathElement(
                        id="sapiente",
                        kind="quo",
                        name="odit",
                    ),
                    shared.PathElement(
                        id="at",
                        kind="at",
                        name="maiores",
                    ),
                ],
            ),
        ],
    ),
    access_token="molestiae",
    alt="proto",
    callback="quod",
    fields_="esse",
    key="totam",
    oauth_token="porro",
    pretty_print=False,
    project_id="dolorum",
    quota_user="dicta",
    upload_type="nam",
    upload_protocol="officia",
)
    
res = s.projects.datastore_projects_allocate_ids(req, operations.DatastoreProjectsAllocateIdsSecurity(
    option1=operations.DatastoreProjectsAllocateIdsSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.allocate_ids_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->