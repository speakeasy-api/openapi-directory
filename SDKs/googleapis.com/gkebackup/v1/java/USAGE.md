<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateResponse;
import org.openapis.openapi.models.shared.BackupInput;
import org.openapis.openapi.models.shared.Namespaces;
import org.openapis.openapi.models.shared.NamespacedNames;
import org.openapis.openapi.models.shared.NamespacedName;
import org.openapis.openapi.models.shared.EncryptionKey;
import org.openapis.openapi.models.shared.ClusterMetadata;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    backupId = "unde";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new BackupInput() {{
                    clusterMetadata = new ClusterMetadata() {{
                        anthosVersion = "iure";
                        backupCrdVersions = new java.util.HashMap<String, String>() {{
                            put("debitis", "ipsa");
                            put("delectus", "tempora");
                        }};
                        cluster = "suscipit";
                        gkeVersion = "molestiae";
                        k8sVersion = "minus";
                    }};
                    deleteLockDays = 812169;
                    description = "voluptatum";
                    encryptionKey = new EncryptionKey() {{
                        gcpKmsEncryptionKey = "iusto";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                    }};
                    retainDays = 648172;
                    selectedApplications = new NamespacedNames() {{
                        namespacedNames = new org.openapis.openapi.models.shared.NamespacedName[]{{
                            add(new NamespacedName() {{
                                name = "ipsam";
                                namespace = "repellendus";
                            }}),
                        }};
                    }};
                    selectedNamespaces = new Namespaces() {{
                        namespaces = new String[]{{
                            add("quo"),
                            add("odit"),
                            add("at"),
                            add("at"),
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