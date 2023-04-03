<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FunctionEnvironmentEnum;
import org.openapis.openapi.models.shared.FunctionInput;
import org.openapis.openapi.models.shared.ServiceConfigIngressSettingsEnum;
import org.openapis.openapi.models.shared.ServiceConfigSecurityLevelEnum;
import org.openapis.openapi.models.shared.ServiceConfigVpcConnectorEgressSettingsEnum;
import org.openapis.openapi.models.shared.ServiceConfigInput;
import org.openapis.openapi.models.shared.SecretVolume;
import org.openapis.openapi.models.shared.SecretVersion;
import org.openapis.openapi.models.shared.SecretEnvVar;
import org.openapis.openapi.models.shared.EventTriggerRetryPolicyEnum;
import org.openapis.openapi.models.shared.EventTriggerInput;
import org.openapis.openapi.models.shared.EventFilter;
import org.openapis.openapi.models.shared.BuildConfigDockerRegistryEnum;
import org.openapis.openapi.models.shared.BuildConfigInput;
import org.openapis.openapi.models.shared.SourceProvenance;
import org.openapis.openapi.models.shared.StorageSource;
import org.openapis.openapi.models.shared.RepoSource;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsFunctionsCreateRequest req = new CloudfunctionsProjectsLocationsFunctionsCreateRequest() {{
                dollarXgafv = "2";
                functionInput = new FunctionInput() {{
                    buildConfig = new BuildConfigInput() {{
                        buildpackStack = "provident";
                        dockerRegistry = "ARTIFACT_REGISTRY";
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
                            }};
                            storageSource = new StorageSource() {{
                                bucket = "placeat";
                                generation = "voluptatum";
                                object = "iusto";
                            }};
                        }};
                        sourceProvenance = new SourceProvenance() {{
                            resolvedRepoSource = new RepoSource() {{
                                branchName = "excepturi";
                                commitSha = "nisi";
                                dir = "recusandae";
                                invertRegex = false;
                                projectId = "temporibus";
                                repoName = "ab";
                                tagName = "quis";
                            }};
                            resolvedStorageSource = new StorageSource() {{
                                bucket = "veritatis";
                                generation = "deserunt";
                                object = "perferendis";
                            }};
                        }};
                        workerPool = "ipsam";
                    }};
                    description = "repellendus";
                    environment = "GEN_2";
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
                        retryPolicy = "RETRY_POLICY_RETRY";
                        serviceAccountEmail = "esse";
                        triggerRegion = "totam";
                    }};
                    kmsKeyName = "porro";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dicta", "nam");
                        put("officia", "occaecati");
                        put("fugit", "deleniti");
                    }};
                    name = "hic";
                    serviceConfig = new ServiceConfigInput() {{
                        allTrafficOnLatestRevision = false;
                        availableCpu = "optio";
                        availableMemory = "totam";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("commodi", "molestiae");
                        }};
                        ingressSettings = "ALLOW_ALL";
                        maxInstanceCount = 186332;
                        maxInstanceRequestConcurrency = 774234;
                        minInstanceCount = 736918;
                        secretEnvironmentVariables = new org.openapis.openapi.models.shared.SecretEnvVar[]{{
                            add(new SecretEnvVar() {{
                                key = "ipsum";
                                projectId = "excepturi";
                                secret = "aspernatur";
                                version = "perferendis";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "ad";
                                projectId = "natus";
                                secret = "sed";
                                version = "iste";
                            }}),
                        }};
                        secretVolumes = new org.openapis.openapi.models.shared.SecretVolume[]{{
                            add(new SecretVolume() {{
                                mountPath = "natus";
                                projectId = "laboriosam";
                                secret = "hic";
                                versions = new org.openapis.openapi.models.shared.SecretVersion[]{{
                                    add(new SecretVersion() {{
                                        path = "fuga";
                                        version = "in";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "corporis";
                                        version = "iste";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "iure";
                                        version = "saepe";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "quidem";
                                        version = "architecto";
                                    }}),
                                }};
                            }}),
                        }};
                        securityLevel = "SECURITY_LEVEL_UNSPECIFIED";
                        serviceAccountEmail = "reiciendis";
                        timeoutSeconds = 666767;
                        vpcConnector = "mollitia";
                        vpcConnectorEgressSettings = "ALL_TRAFFIC";
                    }};
                }};
                accessToken = "dolores";
                alt = "json";
                callback = "corporis";
                fields = "explicabo";
                functionId = "nobis";
                key = "enim";
                oauthToken = "omnis";
                parent = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
            }}            

            CloudfunctionsProjectsLocationsFunctionsCreateResponse res = sdk.projects.cloudfunctionsProjectsLocationsFunctionsCreate(req, new CloudfunctionsProjectsLocationsFunctionsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->