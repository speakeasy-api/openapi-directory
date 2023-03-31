<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatastoreProjectsAllocateIdsRequest(
    dollar_xgafv="2",
    allocate_ids_request=shared.AllocateIdsRequest(
        database_id="provident",
        keys=[
            shared.Key(
                partition_id=shared.PartitionID(
                    database_id="quibusdam",
                    namespace_id="unde",
                    project_id="nulla",
                ),
                path=[
                    shared.PathElement(
                        id="illum",
                        kind="vel",
                        name="error",
                    ),
                    shared.PathElement(
                        id="deserunt",
                        kind="suscipit",
                        name="iure",
                    ),
                    shared.PathElement(
                        id="magnam",
                        kind="debitis",
                        name="ipsa",
                    ),
                ],
            ),
            shared.Key(
                partition_id=shared.PartitionID(
                    database_id="delectus",
                    namespace_id="tempora",
                    project_id="suscipit",
                ),
                path=[
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
                ],
            ),
            shared.Key(
                partition_id=shared.PartitionID(
                    database_id="recusandae",
                    namespace_id="temporibus",
                    project_id="ab",
                ),
                path=[
                    shared.PathElement(
                        id="veritatis",
                        kind="deserunt",
                        name="perferendis",
                    ),
                    shared.PathElement(
                        id="ipsam",
                        kind="repellendus",
                        name="sapiente",
                    ),
                ],
            ),
        ],
    ),
    access_token="quo",
    alt="json",
    callback="at",
    fields_="at",
    key="maiores",
    oauth_token="molestiae",
    pretty_print=False,
    project_id="quod",
    quota_user="quod",
    upload_type="esse",
    upload_protocol="totam",
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