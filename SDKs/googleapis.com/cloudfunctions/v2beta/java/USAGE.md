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
                    parent = "voluptatum";
                }};
                queryParams = new CloudfunctionsProjectsLocationsFunctionsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "aliquid";
                    alt = "media";
                    callback = "quia";
                    fields = "cum";
                    functionId = "molestias";
                    key = "autem";
                    oauthToken = "iure";
                    prettyPrint = false;
                    quotaUser = "nesciunt";
                    uploadType = "eaque";
                    uploadProtocol = "corrupti";
                }};
                request = new FunctionInput() {{
                    buildConfig = new BuildConfigInput() {{
                        buildpackStack = "nihil";
                        dockerRegistry = "DOCKER_REGISTRY_UNSPECIFIED";
                        dockerRepository = "eius";
                        entryPoint = "impedit";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("quis", "dolorem");
                            put("quis", "rerum");
                            put("voluptatem", "occaecati");
                        }};
                        runtime = "ut";
                        source = new Source() {{
                            repoSource = new RepoSource() {{
                                branchName = "deserunt";
                                commitSha = "corporis";
                                dir = "saepe";
                                invertRegex = true;
                                projectId = "laboriosam";
                                repoName = "enim";
                                tagName = "natus";
                            }};
                            storageSource = new StorageSource() {{
                                bucket = "nesciunt";
                                generation = "reiciendis";
                                object = "necessitatibus";
                            }};
                        }};
                        sourceProvenance = new SourceProvenance() {{
                            resolvedRepoSource = new RepoSource() {{
                                branchName = "sit";
                                commitSha = "explicabo";
                                dir = "est";
                                invertRegex = true;
                                projectId = "sapiente";
                                repoName = "maxime";
                                tagName = "porro";
                            }};
                            resolvedStorageSource = new StorageSource() {{
                                bucket = "nobis";
                                generation = "necessitatibus";
                                object = "sit";
                            }};
                        }};
                        workerPool = "minima";
                    }};
                    description = "sint";
                    environment = "ENVIRONMENT_UNSPECIFIED";
                    eventTrigger = new EventTriggerInput() {{
                        channel = "in";
                        eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                            add(new EventFilter() {{
                                attribute = "sint";
                                operator = "veritatis";
                                value = "aliquam";
                            }}),
                        }};
                        eventType = "voluptates";
                        pubsubTopic = "est";
                        retryPolicy = "RETRY_POLICY_DO_NOT_RETRY";
                        serviceAccountEmail = "aut";
                        triggerRegion = "fuga";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("quidem", "voluptatum");
                        put("qui", "consequuntur");
                        put("ipsam", "labore");
                    }};
                    name = "sed";
                    serviceConfig = new ServiceConfigInput() {{
                        allTrafficOnLatestRevision = true;
                        availableCpu = "omnis";
                        availableMemory = "officia";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("inventore", "nam");
                            put("voluptas", "quo");
                        }};
                        ingressSettings = "ALLOW_INTERNAL_AND_GCLB";
                        maxInstanceCount = 2479749284676595074;
                        maxInstanceRequestConcurrency = 5679422250428121759;
                        minInstanceCount = 7276959338971251680;
                        secretEnvironmentVariables = new openapisdk.models.shared.SecretEnvVar[]() {{
                            add(new SecretEnvVar() {{
                                key = "harum";
                                projectId = "quidem";
                                secret = "pariatur";
                                version = "sint";
                            }}),
                        }};
                        secretVolumes = new openapisdk.models.shared.SecretVolume[]() {{
                            add(new SecretVolume() {{
                                mountPath = "qui";
                                projectId = "esse";
                                secret = "et";
                                versions = new openapisdk.models.shared.SecretVersion[]() {{
                                    add(new SecretVersion() {{
                                        path = "quod";
                                        version = "animi";
                                    }}),
                                }};
                            }}),
                            add(new SecretVolume() {{
                                mountPath = "non";
                                projectId = "dicta";
                                secret = "voluptate";
                                versions = new openapisdk.models.shared.SecretVersion[]() {{
                                    add(new SecretVersion() {{
                                        path = "sed";
                                        version = "nam";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "alias";
                                        version = "accusantium";
                                    }}),
                                }};
                            }}),
                        }};
                        securityLevel = "SECURITY_LEVEL_UNSPECIFIED";
                        serviceAccountEmail = "tenetur";
                        timeoutSeconds = 1468837794741711077;
                        vpcConnector = "saepe";
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