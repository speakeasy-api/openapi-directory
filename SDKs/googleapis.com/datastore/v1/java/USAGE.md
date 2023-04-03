<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurityOption2;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AllocateIdsRequest;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsAllocateIdsRequest req = new DatastoreProjectsAllocateIdsRequest() {{
                dollarXgafv = "2";
                allocateIdsRequest = new AllocateIdsRequest() {{
                    databaseId = "provident";
                    keys = new org.openapis.openapi.models.shared.Key[]{{
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "quibusdam";
                                namespaceId = "unde";
                                projectId = "nulla";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "illum";
                                    kind = "vel";
                                    name = "error";
                                }}),
                                add(new PathElement() {{
                                    id = "deserunt";
                                    kind = "suscipit";
                                    name = "iure";
                                }}),
                                add(new PathElement() {{
                                    id = "magnam";
                                    kind = "debitis";
                                    name = "ipsa";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "delectus";
                                namespaceId = "tempora";
                                projectId = "suscipit";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "minus";
                                    kind = "placeat";
                                    name = "voluptatum";
                                }}),
                                add(new PathElement() {{
                                    id = "iusto";
                                    kind = "excepturi";
                                    name = "nisi";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "recusandae";
                                namespaceId = "temporibus";
                                projectId = "ab";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "veritatis";
                                    kind = "deserunt";
                                    name = "perferendis";
                                }}),
                                add(new PathElement() {{
                                    id = "ipsam";
                                    kind = "repellendus";
                                    name = "sapiente";
                                }}),
                            }};
                        }}),
                    }};
                }};
                accessToken = "quo";
                alt = "json";
                callback = "at";
                fields = "at";
                key = "maiores";
                oauthToken = "molestiae";
                prettyPrint = false;
                projectId = "quod";
                quotaUser = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
            }}            

            DatastoreProjectsAllocateIdsResponse res = sdk.projects.datastoreProjectsAllocateIds(req, new DatastoreProjectsAllocateIdsSecurity() {{
                option1 = new DatastoreProjectsAllocateIdsSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.allocateIdsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->