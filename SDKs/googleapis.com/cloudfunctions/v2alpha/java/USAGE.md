<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreatePathParams;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsFunctionsCreateRequest req = new CloudfunctionsProjectsLocationsFunctionsCreateRequest() {{
                security = new CloudfunctionsProjectsLocationsFunctionsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudfunctionsProjectsLocationsFunctionsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new CloudfunctionsProjectsLocationsFunctionsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    functionId = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new FunctionInput() {{
                    buildConfig = new BuildConfigInput() {{
                        buildpackStack = "iure";
                        dockerRegistry = "DOCKER_REGISTRY_UNSPECIFIED";
                        dockerRepository = "debitis";
                        entryPoint = "ipsa";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("tempora", "suscipit");
                            put("molestiae", "minus");
                            put("placeat", "voluptatum");
                            put("iusto", "excepturi");
                        }};
                        runtime = "nisi";
                        source = new Source() {{
                            repoSource = new RepoSource() {{
                                branchName = "recusandae";
                                commitSha = "temporibus";
                                dir = "ab";
                                invertRegex = false;
                                projectId = "quis";
                                repoName = "veritatis";
                                tagName = "deserunt";
                            }};
                            storageSource = new StorageSource() {{
                                bucket = "perferendis";
                                generation = "ipsam";
                                object = "repellendus";
                            }};
                        }};
                        sourceProvenance = new SourceProvenance() {{
                            resolvedRepoSource = new RepoSource() {{
                                branchName = "sapiente";
                                commitSha = "quo";
                                dir = "odit";
                                invertRegex = false;
                                projectId = "at";
                                repoName = "at";
                                tagName = "maiores";
                            }};
                            resolvedStorageSource = new StorageSource() {{
                                bucket = "molestiae";
                                generation = "quod";
                                object = "quod";
                            }};
                        }};
                        workerPool = "esse";
                    }};
                    description = "totam";
                    environment = "GEN_2";
                    eventTrigger = new EventTriggerInput() {{
                        channel = "dolorum";
                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                            add(new EventFilter() {{
                                attribute = "nam";
                                operator = "officia";
                                value = "occaecati";
                            }}),
                        }};
                        eventType = "fugit";
                        pubsubTopic = "deleniti";
                        retryPolicy = "RETRY_POLICY_RETRY";
                        serviceAccountEmail = "optio";
                        triggerRegion = "totam";
                    }};
                    kmsKeyName = "beatae";
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestiae", "modi");
                        put("qui", "impedit");
                    }};
                    name = "cum";
                    serviceConfig = new ServiceConfigInput() {{
                        allTrafficOnLatestRevision = false;
                        availableCpu = "esse";
                        availableMemory = "ipsum";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("aspernatur", "perferendis");
                            put("ad", "natus");
                            put("sed", "iste");
                        }};
                        ingressSettings = "INGRESS_SETTINGS_UNSPECIFIED";
                        maxInstanceCount = 616934;
                        maxInstanceRequestConcurrency = 386489;
                        minInstanceCount = 943749;
                        secretEnvironmentVariables = new org.openapis.openapi.models.shared.SecretEnvVar[]{{
                            add(new SecretEnvVar() {{
                                key = "fuga";
                                projectId = "in";
                                secret = "corporis";
                                version = "iste";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "iure";
                                projectId = "saepe";
                                secret = "quidem";
                                version = "architecto";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "ipsa";
                                projectId = "reiciendis";
                                secret = "est";
                                version = "mollitia";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "laborum";
                                projectId = "dolores";
                                secret = "dolorem";
                                version = "corporis";
                            }}),
                        }};
                        secretVolumes = new org.openapis.openapi.models.shared.SecretVolume[]{{
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
                        }};
                        securityLevel = "SECURE_ALWAYS";
                        serviceAccountEmail = "doloribus";
                        timeoutSeconds = 958950;
                        vpcConnector = "architecto";
                        vpcConnectorEgressSettings = "PRIVATE_RANGES_ONLY";
                    }};
                }};
            }};            

            CloudfunctionsProjectsLocationsFunctionsCreateResponse res = sdk.projects.cloudfunctionsProjectsLocationsFunctionsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->