<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackupInput;
import org.openapis.openapi.models.shared.ClusterMetadata;
import org.openapis.openapi.models.shared.EncryptionKey;
import org.openapis.openapi.models.shared.NamespacedName;
import org.openapis.openapi.models.shared.NamespacedNames;
import org.openapis.openapi.models.shared.Namespaces;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsBackupPlansBackupsCreateRequest req = new GkebackupProjectsLocationsBackupPlansBackupsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                backupInput = new BackupInput() {{
                    clusterMetadata = new ClusterMetadata() {{
                        anthosVersion = "distinctio";
                        backupCrdVersions = new java.util.HashMap<String, String>() {{
                            put("unde", "nulla");
                            put("corrupti", "illum");
                            put("vel", "error");
                            put("deserunt", "suscipit");
                        }};
                        cluster = "iure";
                        gkeVersion = "magnam";
                        k8sVersion = "debitis";
                    }};;
                    deleteLockDays = 56713;
                    description = "delectus";
                    encryptionKey = new EncryptionKey() {{
                        gcpKmsEncryptionKey = "tempora";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    retainDays = 479977;
                    selectedApplications = new NamespacedNames() {{
                        namespacedNames = new org.openapis.openapi.models.shared.NamespacedName[]{{
                            add(new NamespacedName() {{
                                name = "Mrs. Sophie Smith MD";
                                namespace = "perferendis";
                            }}),
                            add(new NamespacedName() {{
                                name = "Estelle Will";
                                namespace = "at";
                            }}),
                            add(new NamespacedName() {{
                                name = "Emilio Krajcik";
                                namespace = "esse";
                            }}),
                        }};
                    }};;
                    selectedNamespaces = new Namespaces() {{
                        namespaces = new String[]{{
                            add("porro"),
                            add("dolorum"),
                            add("dicta"),
                        }};
                    }};;
                }};;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                backupId = "occaecati";
                callback = "fugit";
                fields = "deleniti";
                key = "hic";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "beatae";
                uploadProtocol = "commodi";
            }};            

            GkebackupProjectsLocationsBackupPlansBackupsCreateResponse res = sdk.projects.gkebackupProjectsLocationsBackupPlansBackupsCreate(req, new GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity("molestiae", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->