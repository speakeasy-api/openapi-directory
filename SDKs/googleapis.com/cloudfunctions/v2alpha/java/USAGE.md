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
                    parent = "sit";
                }};
                queryParams = new CloudfunctionsProjectsLocationsFunctionsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    functionId = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new FunctionInput() {{
                    buildConfig = new BuildConfigInput() {{
                        buildpackStack = "debitis";
                        dockerRegistry = "DOCKER_REGISTRY_UNSPECIFIED";
                        dockerRepository = "et";
                        entryPoint = "ut";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("et", "voluptate");
                            put("iste", "vitae");
                            put("totam", "dolores");
                        }};
                        runtime = "illum";
                        source = new Source() {{
                            repoSource = new RepoSource() {{
                                branchName = "debitis";
                                commitSha = "vel";
                                dir = "odio";
                                invertRegex = true;
                                projectId = "id";
                                repoName = "aspernatur";
                                tagName = "accusantium";
                            }};
                            storageSource = new StorageSource() {{
                                bucket = "totam";
                                generation = "commodi";
                                object = "quis";
                            }};
                        }};
                        sourceProvenance = new SourceProvenance() {{
                            resolvedRepoSource = new RepoSource() {{
                                branchName = "est";
                                commitSha = "aut";
                                dir = "odit";
                                invertRegex = true;
                                projectId = "voluptas";
                                repoName = "omnis";
                                tagName = "aut";
                            }};
                            resolvedStorageSource = new StorageSource() {{
                                bucket = "illo";
                                generation = "sed";
                                object = "officiis";
                            }};
                        }};
                        workerPool = "autem";
                    }};
                    description = "consectetur";
                    environment = "ENVIRONMENT_UNSPECIFIED";
                    eventTrigger = new EventTriggerInput() {{
                        channel = "odio";
                        eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                            add(new EventFilter() {{
                                attribute = "recusandae";
                                operator = "at";
                                value = "ipsum";
                            }}),
                        }};
                        eventType = "eveniet";
                        pubsubTopic = "modi";
                        retryPolicy = "RETRY_POLICY_UNSPECIFIED";
                        serviceAccountEmail = "inventore";
                        triggerRegion = "ut";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("aut", "reprehenderit");
                        put("tempore", "maiores");
                        put("incidunt", "dolor");
                    }};
                    name = "beatae";
                    serviceConfig = new ServiceConfigInput() {{
                        allTrafficOnLatestRevision = true;
                        availableCpu = "in";
                        availableMemory = "et";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("ipsum", "ex");
                            put("dolores", "placeat");
                        }};
                        ingressSettings = "ALLOW_INTERNAL_ONLY";
                        maxInstanceCount = 2587000937929698613;
                        maxInstanceRequestConcurrency = 8489437897698681073;
                        minInstanceCount = 1938800996802160635;
                        secretEnvironmentVariables = new openapisdk.models.shared.SecretEnvVar[]() {{
                            add(new SecretEnvVar() {{
                                key = "reprehenderit";
                                projectId = "qui";
                                secret = "qui";
                                version = "unde";
                            }}),
                        }};
                        secretVolumes = new openapisdk.models.shared.SecretVolume[]() {{
                            add(new SecretVolume() {{
                                mountPath = "autem";
                                projectId = "qui";
                                secret = "ut";
                                versions = new openapisdk.models.shared.SecretVersion[]() {{
                                    add(new SecretVersion() {{
                                        path = "ab";
                                        version = "neque";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "ullam";
                                        version = "et";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "accusantium";
                                        version = "esse";
                                    }}),
                                }};
                            }}),
                            add(new SecretVolume() {{
                                mountPath = "architecto";
                                projectId = "quam";
                                secret = "velit";
                                versions = new openapisdk.models.shared.SecretVersion[]() {{
                                    add(new SecretVersion() {{
                                        path = "soluta";
                                        version = "sunt";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "voluptates";
                                        version = "magni";
                                    }}),
                                }};
                            }}),
                        }};
                        securityLevel = "SECURE_OPTIONAL";
                        serviceAccountEmail = "optio";
                        timeoutSeconds = 8482125374365136680;
                        vpcConnector = "earum";
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