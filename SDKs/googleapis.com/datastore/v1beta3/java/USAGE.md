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
                    keys = new org.openapis.openapi.models.shared.Key[]{{
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "quibusdam";
                                projectId = "unde";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "corrupti";
                                    kind = "illum";
                                    name = "Sabrina Oberbrunner";
                                }}),
                                add(new PathElement() {{
                                    id = "magnam";
                                    kind = "debitis";
                                    name = "Lucia Goldner";
                                }}),
                                add(new PathElement() {{
                                    id = "minus";
                                    kind = "placeat";
                                    name = "Ted Mante";
                                }}),
                                add(new PathElement() {{
                                    id = "temporibus";
                                    kind = "ab";
                                    name = "Mrs. Marie O'Connell";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "sapiente";
                                projectId = "quo";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "at";
                                    kind = "at";
                                    name = "Javier Schmidt";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "totam";
                                projectId = "porro";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
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
                    }};
                }};;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolor";
                key = "natus";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "saepe";
                uploadProtocol = "fuga";
            }};            

            DatastoreProjectsAllocateIdsResponse res = sdk.projects.datastoreProjectsAllocateIds(req, new DatastoreProjectsAllocateIdsSecurity() {{
                option1 = new DatastoreProjectsAllocateIdsSecurityOption1("in", "corporis") {{
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