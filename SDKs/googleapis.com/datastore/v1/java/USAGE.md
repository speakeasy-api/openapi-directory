<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurityOption2;
import org.openapis.openapi.models.shared.AllocateIdsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsAllocateIdsRequest req = new DatastoreProjectsAllocateIdsRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                allocateIdsRequest = new AllocateIdsRequest() {{
                    databaseId = "distinctio";
                    keys = new org.openapis.openapi.models.shared.Key[]{{
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "unde";
                                namespaceId = "nulla";
                                projectId = "corrupti";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "vel";
                                    kind = "error";
                                    name = "Rick Kertzmann";
                                }}),
                                add(new PathElement() {{
                                    id = "ipsa";
                                    kind = "delectus";
                                    name = "Laurie Kreiger";
                                }}),
                                add(new PathElement() {{
                                    id = "voluptatum";
                                    kind = "iusto";
                                    name = "Charlie Walsh II";
                                }}),
                                add(new PathElement() {{
                                    id = "veritatis";
                                    kind = "deserunt";
                                    name = "Roberta Sipes";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "odit";
                                namespaceId = "at";
                                projectId = "at";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "molestiae";
                                    kind = "quod";
                                    name = "Erik Lebsack";
                                }}),
                                add(new PathElement() {{
                                    id = "dicta";
                                    kind = "nam";
                                    name = "Seth Conroy";
                                }}),
                                add(new PathElement() {{
                                    id = "optio";
                                    kind = "totam";
                                    name = "Lucy Krajcik";
                                }}),
                                add(new PathElement() {{
                                    id = "impedit";
                                    kind = "cum";
                                    name = "Edna Mante II";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "natus";
                                namespaceId = "sed";
                                projectId = "iste";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "natus";
                                    kind = "laboriosam";
                                    name = "Elias Parker";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "iste";
                                namespaceId = "iure";
                                projectId = "saepe";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "architecto";
                                    kind = "ipsa";
                                    name = "Carlton O'Hara";
                                }}),
                                add(new PathElement() {{
                                    id = "dolorem";
                                    kind = "corporis";
                                    name = "Della Halvorson";
                                }}),
                                add(new PathElement() {{
                                    id = "minima";
                                    kind = "excepturi";
                                    name = "Charlene Nicolas";
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "culpa";
                key = "consequuntur";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "occaecati";
                uploadProtocol = "numquam";
            }};            

            DatastoreProjectsAllocateIdsResponse res = sdk.projects.datastoreProjectsAllocateIds(req, new DatastoreProjectsAllocateIdsSecurity() {{
                option1 = new DatastoreProjectsAllocateIdsSecurityOption1("commodi", "quam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.allocateIdsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->