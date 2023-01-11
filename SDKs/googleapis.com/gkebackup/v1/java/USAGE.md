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
                    parent = "et";
                }};
                queryParams = new GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "aliquid";
                    alt = "json";
                    backupId = "voluptatem";
                    callback = "sunt";
                    fields = "ut";
                    key = "dignissimos";
                    oauthToken = "qui";
                    prettyPrint = true;
                    quotaUser = "quam";
                    uploadType = "sint";
                    uploadProtocol = "saepe";
                }};
                request = new BackupInput() {{
                    clusterMetadata = new ClusterMetadata() {{
                        anthosVersion = "et";
                        backupCrdVersions = new java.util.HashMap<String, String>() {{
                            put("qui", "commodi");
                            put("autem", "enim");
                            put("officia", "enim");
                        }};
                        cluster = "aperiam";
                        gkeVersion = "quasi";
                        k8sVersion = "enim";
                    }};
                    deleteLockDays = 929418561123333178;
                    description = "tenetur";
                    encryptionKey = new EncryptionKey() {{
                        gcpKmsEncryptionKey = "cupiditate";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("nihil", "totam");
                    }};
                    retainDays = 2179631856028217069;
                    selectedApplications = new NamespacedNames() {{
                        namespacedNames = new openapisdk.models.shared.NamespacedName[]() {{
                            add(new NamespacedName() {{
                                name = "laudantium";
                                namespace = "quo";
                            }}),
                            add(new NamespacedName() {{
                                name = "qui";
                                namespace = "quos";
                            }}),
                            add(new NamespacedName() {{
                                name = "ut";
                                namespace = "sit";
                            }}),
                        }};
                    }};
                    selectedNamespaces = new Namespaces() {{
                        namespaces = new String[]() {{
                            add("ut"),
                            add("iure"),
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