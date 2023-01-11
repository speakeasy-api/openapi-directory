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
                    parent = "non";
                }};
                queryParams = new CloudfunctionsProjectsLocationsFunctionsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "enim";
                    alt = "media";
                    callback = "assumenda";
                    fields = "quo";
                    functionId = "sint";
                    key = "quis";
                    oauthToken = "esse";
                    prettyPrint = false;
                    quotaUser = "quibusdam";
                    uploadType = "vero";
                    uploadProtocol = "ea";
                }};
                request = new FunctionInput() {{
                    buildConfig = new BuildConfigInput() {{
                        buildpackStack = "doloremque";
                        dockerRegistry = "DOCKER_REGISTRY_UNSPECIFIED";
                        dockerRepository = "aperiam";
                        entryPoint = "ut";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("hic", "quisquam");
                            put("sit", "autem");
                            put("sed", "itaque");
                        }};
                        runtime = "qui";
                        source = new Source() {{
                            repoSource = new RepoSource() {{
                                branchName = "et";
                                commitSha = "et";
                                dir = "sequi";
                                invertRegex = true;
                                projectId = "possimus";
                                repoName = "iusto";
                                tagName = "illum";
                            }};
                            storageSource = new StorageSource() {{
                                bucket = "ex";
                                generation = "eos";
                                object = "asperiores";
                            }};
                        }};
                        sourceProvenance = new SourceProvenance() {{
                            resolvedRepoSource = new RepoSource() {{
                                branchName = "dicta";
                                commitSha = "sunt";
                                dir = "accusantium";
                                invertRegex = true;
                                projectId = "nobis";
                                repoName = "et";
                                tagName = "corrupti";
                            }};
                            resolvedStorageSource = new StorageSource() {{
                                bucket = "et";
                                generation = "aut";
                                object = "expedita";
                            }};
                        }};
                        workerPool = "laudantium";
                    }};
                    description = "soluta";
                    environment = "GEN_2";
                    eventTrigger = new EventTriggerInput() {{
                        channel = "aperiam";
                        eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                            add(new EventFilter() {{
                                attribute = "repellendus";
                                operator = "officia";
                                value = "in";
                            }}),
                            add(new EventFilter() {{
                                attribute = "quia";
                                operator = "sit";
                                value = "quia";
                            }}),
                        }};
                        eventType = "nesciunt";
                        pubsubTopic = "et";
                        retryPolicy = "RETRY_POLICY_RETRY";
                        serviceAccountEmail = "ea";
                        triggerRegion = "magnam";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("nulla", "harum");
                    }};
                    name = "et";
                    serviceConfig = new ServiceConfigInput() {{
                        allTrafficOnLatestRevision = true;
                        availableCpu = "ut";
                        availableMemory = "sed";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("expedita", "facere");
                        }};
                        ingressSettings = "ALLOW_INTERNAL_ONLY";
                        maxInstanceCount = 6391757899720754799;
                        maxInstanceRequestConcurrency = 5140633824996507702;
                        minInstanceCount = 2836993313376391135;
                        secretEnvironmentVariables = new openapisdk.models.shared.SecretEnvVar[]() {{
                            add(new SecretEnvVar() {{
                                key = "voluptatum";
                                projectId = "minima";
                                secret = "necessitatibus";
                                version = "totam";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "et";
                                projectId = "ea";
                                secret = "labore";
                                version = "quasi";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "eaque";
                                projectId = "velit";
                                secret = "ullam";
                                version = "cum";
                            }}),
                        }};
                        secretVolumes = new openapisdk.models.shared.SecretVolume[]() {{
                            add(new SecretVolume() {{
                                mountPath = "magnam";
                                projectId = "quisquam";
                                secret = "est";
                                versions = new openapisdk.models.shared.SecretVersion[]() {{
                                    add(new SecretVersion() {{
                                        path = "dolorum";
                                        version = "dolores";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "perspiciatis";
                                        version = "ab";
                                    }}),
                                }};
                            }}),
                            add(new SecretVolume() {{
                                mountPath = "quia";
                                projectId = "sit";
                                secret = "necessitatibus";
                                versions = new openapisdk.models.shared.SecretVersion[]() {{
                                    add(new SecretVersion() {{
                                        path = "possimus";
                                        version = "voluptatum";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "facere";
                                        version = "accusamus";
                                    }}),
                                }};
                            }}),
                        }};
                        securityLevel = "SECURE_ALWAYS";
                        serviceAccountEmail = "hic";
                        timeoutSeconds = 5480400701712790885;
                        vpcConnector = "omnis";
                        vpcConnectorEgressSettings = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED";
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