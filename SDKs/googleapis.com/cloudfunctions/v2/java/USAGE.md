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
                    parent = "doloribus";
                }};
                queryParams = new CloudfunctionsProjectsLocationsFunctionsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "distinctio";
                    alt = "json";
                    callback = "placeat";
                    fields = "architecto";
                    functionId = "autem";
                    key = "voluptatum";
                    oauthToken = "qui";
                    prettyPrint = true;
                    quotaUser = "nihil";
                    uploadType = "libero";
                    uploadProtocol = "et";
                }};
                request = new FunctionInput() {{
                    buildConfig = new BuildConfigInput() {{
                        buildpackStack = "possimus";
                        dockerRegistry = "ARTIFACT_REGISTRY";
                        dockerRepository = "rerum";
                        entryPoint = "repellat";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("eos", "modi");
                            put("et", "culpa");
                            put("unde", "quae");
                        }};
                        runtime = "incidunt";
                        source = new Source() {{
                            repoSource = new RepoSource() {{
                                branchName = "voluptas";
                                commitSha = "nam";
                                dir = "optio";
                                invertRegex = true;
                                projectId = "ratione";
                                repoName = "quaerat";
                                tagName = "qui";
                            }};
                            storageSource = new StorageSource() {{
                                bucket = "modi";
                                generation = "cum";
                                object = "rem";
                            }};
                        }};
                        sourceProvenance = new SourceProvenance() {{
                            resolvedRepoSource = new RepoSource() {{
                                branchName = "maxime";
                                commitSha = "cum";
                                dir = "iste";
                                invertRegex = true;
                                projectId = "sunt";
                                repoName = "et";
                                tagName = "dolore";
                            }};
                            resolvedStorageSource = new StorageSource() {{
                                bucket = "placeat";
                                generation = "et";
                                object = "ut";
                            }};
                        }};
                        workerPool = "sapiente";
                    }};
                    description = "laborum";
                    environment = "GEN_1";
                    eventTrigger = new EventTriggerInput() {{
                        channel = "accusamus";
                        eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                            add(new EventFilter() {{
                                attribute = "qui";
                                operator = "eos";
                                value = "ut";
                            }}),
                            add(new EventFilter() {{
                                attribute = "animi";
                                operator = "velit";
                                value = "eum";
                            }}),
                            add(new EventFilter() {{
                                attribute = "quo";
                                operator = "maiores";
                                value = "nesciunt";
                            }}),
                        }};
                        eventType = "velit";
                        pubsubTopic = "at";
                        retryPolicy = "RETRY_POLICY_UNSPECIFIED";
                        serviceAccountEmail = "placeat";
                        triggerRegion = "accusantium";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("at", "et");
                        put("id", "consequatur");
                    }};
                    name = "modi";
                    serviceConfig = new ServiceConfigInput() {{
                        allTrafficOnLatestRevision = false;
                        availableCpu = "quia";
                        availableMemory = "eaque";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("assumenda", "incidunt");
                            put("perspiciatis", "quia");
                            put("unde", "ipsam");
                        }};
                        ingressSettings = "INGRESS_SETTINGS_UNSPECIFIED";
                        maxInstanceCount = 2565633263143229678;
                        maxInstanceRequestConcurrency = 4411887169756233109;
                        minInstanceCount = 7451324342267124285;
                        secretEnvironmentVariables = new openapisdk.models.shared.SecretEnvVar[]() {{
                            add(new SecretEnvVar() {{
                                key = "cupiditate";
                                projectId = "sit";
                                secret = "sapiente";
                                version = "et";
                            }}),
                        }};
                        secretVolumes = new openapisdk.models.shared.SecretVolume[]() {{
                            add(new SecretVolume() {{
                                mountPath = "possimus";
                                projectId = "voluptate";
                                secret = "illum";
                                versions = new openapisdk.models.shared.SecretVersion[]() {{
                                    add(new SecretVersion() {{
                                        path = "sunt";
                                        version = "saepe";
                                    }}),
                                }};
                            }}),
                        }};
                        securityLevel = "SECURE_OPTIONAL";
                        serviceAccountEmail = "quod";
                        timeoutSeconds = 1786080741491450862;
                        vpcConnector = "esse";
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