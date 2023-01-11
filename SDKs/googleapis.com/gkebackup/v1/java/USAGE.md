<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GkebackupProjectsLocationsBackupPlansBackupsCreateRequest req = new GkebackupProjectsLocationsBackupPlansBackupsCreateRequest() {{
                security = new GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    backupId = "consequuntur";
                    callback = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new BackupInput() {{
                    clusterMetadata = new ClusterMetadata() {{
                        anthosVersion = "debitis";
                        backupCrdVersions = new java.util.HashMap<String, String>() {{
                            put("et", "ut");
                        }};
                        cluster = "dolorem";
                        gkeVersion = "et";
                        k8sVersion = "voluptate";
                    }};
                    deleteLockDays = 3287288577352441706;
                    description = "vitae";
                    encryptionKey = new EncryptionKey() {{
                        gcpKmsEncryptionKey = "totam";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("illum", "debitis");
                    }};
                    retainDays = 3706853784096366226;
                    selectedApplications = new NamespacedNames() {{
                        namespacedNames = new openapisdk.models.shared.NamespacedName[]() {{
                            add(new NamespacedName() {{
                                name = "dolore";
                                namespace = "id";
                            }}),
                        }};
                    }};
                    selectedNamespaces = new Namespaces() {{
                        namespaces = new String[]() {{
                            add("accusantium"),
                        }};
                    }};
                }};
            }};

            GkebackupProjectsLocationsBackupPlansBackupsCreateResponse res = sdk.projects.gkebackupProjectsLocationsBackupPlansBackupsCreate(req);

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->