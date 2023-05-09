<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateResponse;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BuildConfigDockerRegistryEnum;
import org.openapis.openapi.models.shared.BuildConfigInput;
import org.openapis.openapi.models.shared.EventFilter;
import org.openapis.openapi.models.shared.EventTriggerInput;
import org.openapis.openapi.models.shared.EventTriggerRetryPolicyEnum;
import org.openapis.openapi.models.shared.FunctionEnvironmentEnum;
import org.openapis.openapi.models.shared.FunctionInput;
import org.openapis.openapi.models.shared.RepoSource;
import org.openapis.openapi.models.shared.SecretEnvVar;
import org.openapis.openapi.models.shared.SecretVersion;
import org.openapis.openapi.models.shared.SecretVolume;
import org.openapis.openapi.models.shared.ServiceConfigIngressSettingsEnum;
import org.openapis.openapi.models.shared.ServiceConfigInput;
import org.openapis.openapi.models.shared.ServiceConfigSecurityLevelEnum;
import org.openapis.openapi.models.shared.ServiceConfigVpcConnectorEgressSettingsEnum;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.SourceProvenance;
import org.openapis.openapi.models.shared.StorageSource;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsFunctionsCreateRequest req = new CloudfunctionsProjectsLocationsFunctionsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                functionInput = new FunctionInput() {{
                    buildConfig = new BuildConfigInput() {{
                        dockerRegistry = BuildConfigDockerRegistryEnum.ARTIFACT_REGISTRY;
                        dockerRepository = "quibusdam";
                        entryPoint = "unde";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("corrupti", "illum");
                            put("vel", "error");
                            put("deserunt", "suscipit");
                            put("iure", "magnam");
                        }};
                        runtime = "debitis";
                        source = new Source() {{
                            repoSource = new RepoSource() {{
                                branchName = "ipsa";
                                commitSha = "delectus";
                                dir = "tempora";
                                invertRegex = false;
                                projectId = "suscipit";
                                repoName = "molestiae";
                                tagName = "minus";
                            }};;
                            storageSource = new StorageSource() {{
                                bucket = "placeat";
                                generation = "voluptatum";
                                object = "iusto";
                            }};;
                        }};;
                        sourceProvenance = new SourceProvenance() {{
                            resolvedRepoSource = new RepoSource() {{
                                branchName = "excepturi";
                                commitSha = "nisi";
                                dir = "recusandae";
                                invertRegex = false;
                                projectId = "temporibus";
                                repoName = "ab";
                                tagName = "quis";
                            }};;
                            resolvedStorageSource = new StorageSource() {{
                                bucket = "veritatis";
                                generation = "deserunt";
                                object = "perferendis";
                            }};;
                        }};;
                        workerPool = "ipsam";
                    }};;
                    description = "repellendus";
                    environment = FunctionEnvironmentEnum.GEN2;
                    eventTrigger = new EventTriggerInput() {{
                        channel = "quo";
                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                            add(new EventFilter() {{
                                attribute = "at";
                                operator = "at";
                                value = "maiores";
                            }}),
                        }};
                        eventType = "molestiae";
                        pubsubTopic = "quod";
                        retryPolicy = EventTriggerRetryPolicyEnum.RETRY_POLICY_RETRY;
                        serviceAccountEmail = "esse";
                        triggerRegion = "totam";
                    }};;
                    kmsKeyName = "porro";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dicta", "nam");
                        put("officia", "occaecati");
                        put("fugit", "deleniti");
                    }};
                    name = "Ms. Earnest Lebsack";
                    serviceConfig = new ServiceConfigInput() {{
                        allTrafficOnLatestRevision = false;
                        availableCpu = "modi";
                        availableMemory = "qui";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("cum", "esse");
                            put("ipsum", "excepturi");
                            put("aspernatur", "perferendis");
                            put("ad", "natus");
                        }};
                        ingressSettings = ServiceConfigIngressSettingsEnum.INGRESS_SETTINGS_UNSPECIFIED;
                        maxInstanceCount = 612096;
                        maxInstanceRequestConcurrency = 222321;
                        minInstanceCount = 616934;
                        secretEnvironmentVariables = new org.openapis.openapi.models.shared.SecretEnvVar[]{{
                            add(new SecretEnvVar() {{
                                key = "hic";
                                projectId = "saepe";
                                secret = "fuga";
                                version = "in";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "corporis";
                                projectId = "iste";
                                secret = "iure";
                                version = "saepe";
                            }}),
                        }};
                        secretVolumes = new org.openapis.openapi.models.shared.SecretVolume[]{{
                            add(new SecretVolume() {{
                                mountPath = "architecto";
                                projectId = "ipsa";
                                secret = "reiciendis";
                                versions = new org.openapis.openapi.models.shared.SecretVersion[]{{
                                    add(new SecretVersion() {{
                                        path = "mollitia";
                                        version = "laborum";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "dolores";
                                        version = "dolorem";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "corporis";
                                        version = "explicabo";
                                    }}),
                                }};
                            }}),
                            add(new SecretVolume() {{
                                mountPath = "nobis";
                                projectId = "enim";
                                secret = "omnis";
                                versions = new org.openapis.openapi.models.shared.SecretVersion[]{{
                                    add(new SecretVersion() {{
                                        path = "minima";
                                        version = "excepturi";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "accusantium";
                                        version = "iure";
                                    }}),
                                }};
                            }}),
                            add(new SecretVolume() {{
                                mountPath = "culpa";
                                projectId = "doloribus";
                                secret = "sapiente";
                                versions = new org.openapis.openapi.models.shared.SecretVersion[]{{
                                    add(new SecretVersion() {{
                                        path = "mollitia";
                                        version = "dolorem";
                                    }}),
                                }};
                            }}),
                        }};
                        securityLevel = ServiceConfigSecurityLevelEnum.SECURE_ALWAYS;
                        serviceAccountEmail = "consequuntur";
                        timeoutSeconds = 995300;
                        vpcConnector = "mollitia";
                        vpcConnectorEgressSettings = ServiceConfigVpcConnectorEgressSettingsEnum.PRIVATE_RANGES_ONLY;
                    }};;
                }};;
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "molestiae";
                functionId = "velit";
                key = "error";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "vitae";
                uploadProtocol = "laborum";
            }};            

            CloudfunctionsProjectsLocationsFunctionsCreateResponse res = sdk.projects.cloudfunctionsProjectsLocationsFunctionsCreate(req, new CloudfunctionsProjectsLocationsFunctionsCreateSecurity("animi", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->