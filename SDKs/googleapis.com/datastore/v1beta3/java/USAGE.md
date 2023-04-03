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
                    keys = new org.openapis.openapi.models.shared.Key[]{{
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "distinctio";
                                projectId = "quibusdam";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "nulla";
                                    kind = "corrupti";
                                    name = "illum";
                                }}),
                                add(new PathElement() {{
                                    id = "vel";
                                    kind = "error";
                                    name = "deserunt";
                                }}),
                                add(new PathElement() {{
                                    id = "suscipit";
                                    kind = "iure";
                                    name = "magnam";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "debitis";
                                projectId = "ipsa";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "tempora";
                                    kind = "suscipit";
                                    name = "molestiae";
                                }}),
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
                                add(new PathElement() {{
                                    id = "recusandae";
                                    kind = "temporibus";
                                    name = "ab";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "quis";
                                projectId = "veritatis";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "perferendis";
                                    kind = "ipsam";
                                    name = "repellendus";
                                }}),
                                add(new PathElement() {{
                                    id = "sapiente";
                                    kind = "quo";
                                    name = "odit";
                                }}),
                                add(new PathElement() {{
                                    id = "at";
                                    kind = "at";
                                    name = "maiores";
                                }}),
                            }};
                        }}),
                    }};
                }};
                accessToken = "molestiae";
                alt = "proto";
                callback = "quod";
                fields = "esse";
                key = "totam";
                oauthToken = "porro";
                prettyPrint = false;
                projectId = "dolorum";
                quotaUser = "dicta";
                uploadType = "nam";
                uploadProtocol = "officia";
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