# projects

### Available Operations

* [cloudfunctionsProjectsLocationsFunctionsCreate](#cloudfunctionsprojectslocationsfunctionscreate) - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
* [cloudfunctionsProjectsLocationsFunctionsDelete](#cloudfunctionsprojectslocationsfunctionsdelete) - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
* [cloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl](#cloudfunctionsprojectslocationsfunctionsgeneratedownloadurl) - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
* [cloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl](#cloudfunctionsprojectslocationsfunctionsgenerateuploadurl) - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
* [cloudfunctionsProjectsLocationsFunctionsGetIamPolicy](#cloudfunctionsprojectslocationsfunctionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [cloudfunctionsProjectsLocationsFunctionsList](#cloudfunctionsprojectslocationsfunctionslist) - Returns a list of functions that belong to the requested project.
* [cloudfunctionsProjectsLocationsFunctionsPatch](#cloudfunctionsprojectslocationsfunctionspatch) - Updates existing function.
* [cloudfunctionsProjectsLocationsFunctionsSetIamPolicy](#cloudfunctionsprojectslocationsfunctionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [cloudfunctionsProjectsLocationsFunctionsTestIamPermissions](#cloudfunctionsprojectslocationsfunctionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [cloudfunctionsProjectsLocationsList](#cloudfunctionsprojectslocationslist) - Lists information about the supported locations for this service.
* [cloudfunctionsProjectsLocationsOperationsGet](#cloudfunctionsprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [cloudfunctionsProjectsLocationsOperationsList](#cloudfunctionsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [cloudfunctionsProjectsLocationsRuntimesList](#cloudfunctionsprojectslocationsruntimeslist) - Returns a list of runtimes that are supported for the requested project.

## cloudfunctionsProjectsLocationsFunctionsCreate

Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.

### Example Usage

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

            CloudfunctionsProjectsLocationsFunctionsCreateRequest req = new CloudfunctionsProjectsLocationsFunctionsCreateRequest("odit") {{
                dollarXgafv = XgafvEnum.TWO;
                functionInput = new FunctionInput() {{
                    buildConfig = new BuildConfigInput() {{
                        dockerRegistry = BuildConfigDockerRegistryEnum.DOCKER_REGISTRY_UNSPECIFIED;
                        dockerRepository = "tenetur";
                        entryPoint = "ipsam";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("possimus", "aut");
                            put("quasi", "error");
                            put("temporibus", "laborum");
                        }};
                        runtime = "quasi";
                        source = new Source() {{
                            repoSource = new RepoSource() {{
                                branchName = "reiciendis";
                                commitSha = "voluptatibus";
                                dir = "vero";
                                invertRegex = false;
                                projectId = "nihil";
                                repoName = "praesentium";
                                tagName = "voluptatibus";
                            }};;
                            storageSource = new StorageSource() {{
                                bucket = "ipsa";
                                generation = "omnis";
                                object = "voluptate";
                            }};;
                        }};;
                        sourceProvenance = new SourceProvenance() {{
                            resolvedRepoSource = new RepoSource() {{
                                branchName = "cum";
                                commitSha = "perferendis";
                                dir = "doloremque";
                                invertRegex = false;
                                projectId = "reprehenderit";
                                repoName = "ut";
                                tagName = "maiores";
                            }};;
                            resolvedStorageSource = new StorageSource() {{
                                bucket = "dicta";
                                generation = "corporis";
                                object = "dolore";
                            }};;
                        }};;
                        workerPool = "iusto";
                    }};;
                    description = "dicta";
                    environment = FunctionEnvironmentEnum.GEN2;
                    eventTrigger = new EventTriggerInput() {{
                        channel = "enim";
                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                            add(new EventFilter() {{
                                attribute = "commodi";
                                operator = "repudiandae";
                                value = "quae";
                            }}),
                            add(new EventFilter() {{
                                attribute = "ipsum";
                                operator = "quidem";
                                value = "molestias";
                            }}),
                            add(new EventFilter() {{
                                attribute = "excepturi";
                                operator = "pariatur";
                                value = "modi";
                            }}),
                            add(new EventFilter() {{
                                attribute = "praesentium";
                                operator = "rem";
                                value = "voluptates";
                            }}),
                        }};
                        eventType = "quasi";
                        pubsubTopic = "repudiandae";
                        retryPolicy = EventTriggerRetryPolicyEnum.RETRY_POLICY_DO_NOT_RETRY;
                        serviceAccountEmail = "veritatis";
                        triggerRegion = "itaque";
                    }};;
                    kmsKeyName = "incidunt";
                    labels = new java.util.HashMap<String, String>() {{
                        put("consequatur", "est");
                        put("quibusdam", "explicabo");
                    }};
                    name = "Rudy Spencer";
                    serviceConfig = new ServiceConfigInput() {{
                        allTrafficOnLatestRevision = false;
                        availableCpu = "qui";
                        availableMemory = "aliquid";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("quos", "perferendis");
                            put("magni", "assumenda");
                            put("ipsam", "alias");
                        }};
                        ingressSettings = ServiceConfigIngressSettingsEnum.INGRESS_SETTINGS_UNSPECIFIED;
                        maxInstanceCount = 677817;
                        maxInstanceRequestConcurrency = 569618;
                        minInstanceCount = 270008;
                        secretEnvironmentVariables = new org.openapis.openapi.models.shared.SecretEnvVar[]{{
                            add(new SecretEnvVar() {{
                                key = "tempore";
                                projectId = "labore";
                                secret = "delectus";
                                version = "eum";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "non";
                                projectId = "eligendi";
                                secret = "sint";
                                version = "aliquid";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "provident";
                                projectId = "necessitatibus";
                                secret = "sint";
                                version = "officia";
                            }}),
                        }};
                        secretVolumes = new org.openapis.openapi.models.shared.SecretVolume[]{{
                            add(new SecretVolume() {{
                                mountPath = "debitis";
                                projectId = "a";
                                secret = "dolorum";
                                versions = new org.openapis.openapi.models.shared.SecretVersion[]{{
                                    add(new SecretVersion() {{
                                        path = "in";
                                        version = "illum";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "maiores";
                                        version = "rerum";
                                    }}),
                                }};
                            }}),
                        }};
                        securityLevel = ServiceConfigSecurityLevelEnum.SECURITY_LEVEL_UNSPECIFIED;
                        serviceAccountEmail = "magnam";
                        timeoutSeconds = 767024;
                        vpcConnector = "facere";
                        vpcConnectorEgressSettings = ServiceConfigVpcConnectorEgressSettingsEnum.PRIVATE_RANGES_ONLY;
                    }};;
                }};;
                accessToken = "aliquid";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "non";
                functionId = "occaecati";
                key = "enim";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "quidem";
                uploadProtocol = "provident";
            }};            

            CloudfunctionsProjectsLocationsFunctionsCreateResponse res = sdk.projects.cloudfunctionsProjectsLocationsFunctionsCreate(req, new CloudfunctionsProjectsLocationsFunctionsCreateSecurity("nam", "id") {{
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

## cloudfunctionsProjectsLocationsFunctionsDelete

Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsDeleteRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsDeleteResponse;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsFunctionsDeleteRequest req = new CloudfunctionsProjectsLocationsFunctionsDeleteRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "nisi";
                key = "vel";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "molestiae";
                uploadProtocol = "perferendis";
            }};            

            CloudfunctionsProjectsLocationsFunctionsDeleteResponse res = sdk.projects.cloudfunctionsProjectsLocationsFunctionsDelete(req, new CloudfunctionsProjectsLocationsFunctionsDeleteSecurity("nihil", "magnam") {{
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

## cloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl

Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlResponse;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlRequest req = new CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("labore", "suscipit");
                    put("natus", "nobis");
                }};
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "architecto";
                key = "magnam";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "ullam";
                uploadProtocol = "provident";
            }};            

            CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlResponse res = sdk.projects.cloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl(req, new CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlSecurity("quos", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.generateDownloadUrlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl

Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GenerateUploadUrlRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest req = new CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest("accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                generateUploadUrlRequest = new GenerateUploadUrlRequest() {{
                    kmsKeyName = "reiciendis";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "dolor";
                key = "necessitatibus";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "quasi";
                uploadProtocol = "iure";
            }};            

            CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse res = sdk.projects.cloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl(req, new CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity("doloribus", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.generateUploadUrlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudfunctionsProjectsLocationsFunctionsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest req = new CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest("eius") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "architecto";
                key = "architecto";
                oauthToken = "repudiandae";
                optionsRequestedPolicyVersion = 352312L;
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "nihil";
                uploadProtocol = "repellat";
            }};            

            CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse res = sdk.projects.cloudfunctionsProjectsLocationsFunctionsGetIamPolicy(req, new CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity("quibusdam", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudfunctionsProjectsLocationsFunctionsList

Returns a list of functions that belong to the requested project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsListRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsListResponse;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsFunctionsListRequest req = new CloudfunctionsProjectsLocationsFunctionsListRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "natus";
                filter = "magni";
                key = "sunt";
                oauthToken = "quo";
                orderBy = "illum";
                pageSize = 864934L;
                pageToken = "maxime";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "excepturi";
                uploadProtocol = "odit";
            }};            

            CloudfunctionsProjectsLocationsFunctionsListResponse res = sdk.projects.cloudfunctionsProjectsLocationsFunctionsList(req, new CloudfunctionsProjectsLocationsFunctionsListSecurity("ea", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listFunctionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudfunctionsProjectsLocationsFunctionsPatch

Updates existing function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsPatchRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsPatchResponse;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsPatchSecurity;
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

            CloudfunctionsProjectsLocationsFunctionsPatchRequest req = new CloudfunctionsProjectsLocationsFunctionsPatchRequest("ab") {{
                dollarXgafv = XgafvEnum.TWO;
                functionInput = new FunctionInput() {{
                    buildConfig = new BuildConfigInput() {{
                        dockerRegistry = BuildConfigDockerRegistryEnum.ARTIFACT_REGISTRY;
                        dockerRepository = "ipsam";
                        entryPoint = "voluptate";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("nam", "eaque");
                            put("pariatur", "nemo");
                        }};
                        runtime = "voluptatibus";
                        source = new Source() {{
                            repoSource = new RepoSource() {{
                                branchName = "perferendis";
                                commitSha = "fugiat";
                                dir = "amet";
                                invertRegex = false;
                                projectId = "aut";
                                repoName = "cumque";
                                tagName = "corporis";
                            }};;
                            storageSource = new StorageSource() {{
                                bucket = "hic";
                                generation = "libero";
                                object = "nobis";
                            }};;
                        }};;
                        sourceProvenance = new SourceProvenance() {{
                            resolvedRepoSource = new RepoSource() {{
                                branchName = "dolores";
                                commitSha = "quis";
                                dir = "totam";
                                invertRegex = false;
                                projectId = "dignissimos";
                                repoName = "eaque";
                                tagName = "quis";
                            }};;
                            resolvedStorageSource = new StorageSource() {{
                                bucket = "nesciunt";
                                generation = "eos";
                                object = "perferendis";
                            }};;
                        }};;
                        workerPool = "dolores";
                    }};;
                    description = "minus";
                    environment = FunctionEnvironmentEnum.GEN1;
                    eventTrigger = new EventTriggerInput() {{
                        channel = "dolor";
                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                            add(new EventFilter() {{
                                attribute = "nostrum";
                                operator = "hic";
                                value = "recusandae";
                            }}),
                            add(new EventFilter() {{
                                attribute = "omnis";
                                operator = "facilis";
                                value = "perspiciatis";
                            }}),
                            add(new EventFilter() {{
                                attribute = "voluptatem";
                                operator = "porro";
                                value = "consequuntur";
                            }}),
                            add(new EventFilter() {{
                                attribute = "blanditiis";
                                operator = "error";
                                value = "eaque";
                            }}),
                        }};
                        eventType = "occaecati";
                        pubsubTopic = "rerum";
                        retryPolicy = EventTriggerRetryPolicyEnum.RETRY_POLICY_UNSPECIFIED;
                        serviceAccountEmail = "asperiores";
                        triggerRegion = "earum";
                    }};;
                    kmsKeyName = "modi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolorum", "deleniti");
                        put("pariatur", "provident");
                        put("nobis", "libero");
                    }};
                    name = "Alex Luettgen";
                    serviceConfig = new ServiceConfigInput() {{
                        allTrafficOnLatestRevision = false;
                        availableCpu = "dolorem";
                        availableMemory = "dolor";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("ipsum", "hic");
                        }};
                        ingressSettings = ServiceConfigIngressSettingsEnum.ALLOW_INTERNAL_ONLY;
                        maxInstanceCount = 739551;
                        maxInstanceRequestConcurrency = 452109;
                        minInstanceCount = 490459;
                        secretEnvironmentVariables = new org.openapis.openapi.models.shared.SecretEnvVar[]{{
                            add(new SecretEnvVar() {{
                                key = "amet";
                                projectId = "dolorum";
                                secret = "numquam";
                                version = "veritatis";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "ipsa";
                                projectId = "ipsa";
                                secret = "iure";
                                version = "odio";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "quaerat";
                                projectId = "accusamus";
                                secret = "quidem";
                                version = "voluptatibus";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "voluptas";
                                projectId = "natus";
                                secret = "eos";
                                version = "atque";
                            }}),
                        }};
                        secretVolumes = new org.openapis.openapi.models.shared.SecretVolume[]{{
                            add(new SecretVolume() {{
                                mountPath = "fugiat";
                                projectId = "ab";
                                secret = "soluta";
                                versions = new org.openapis.openapi.models.shared.SecretVersion[]{{
                                    add(new SecretVersion() {{
                                        path = "iusto";
                                        version = "voluptate";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "dolorum";
                                        version = "deleniti";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "omnis";
                                        version = "necessitatibus";
                                    }}),
                                }};
                            }}),
                        }};
                        securityLevel = ServiceConfigSecurityLevelEnum.SECURE_OPTIONAL;
                        serviceAccountEmail = "asperiores";
                        timeoutSeconds = 469497;
                        vpcConnector = "ipsum";
                        vpcConnectorEgressSettings = ServiceConfigVpcConnectorEgressSettingsEnum.PRIVATE_RANGES_ONLY;
                    }};;
                }};;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "aspernatur";
                key = "perferendis";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "optio";
                updateMask = "accusamus";
                uploadType = "ad";
                uploadProtocol = "saepe";
            }};            

            CloudfunctionsProjectsLocationsFunctionsPatchResponse res = sdk.projects.cloudfunctionsProjectsLocationsFunctionsPatch(req, new CloudfunctionsProjectsLocationsFunctionsPatchSecurity("suscipit", "deserunt") {{
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

## cloudfunctionsProjectsLocationsFunctionsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest req = new CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest("provident") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("alias"),
                                            add("at"),
                                            add("quaerat"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quod"),
                                            add("officiis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("a"),
                                            add("esse"),
                                            add("harum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "ipsum";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("amet"),
                                            add("tempore"),
                                            add("accusamus"),
                                            add("numquam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sapiente"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sit"),
                                            add("expedita"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("vel"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "voluptas";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsum"),
                                            add("incidunt"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("maxime"),
                                            add("pariatur"),
                                            add("soluta"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("totam"),
                                            add("incidunt"),
                                            add("aspernatur"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "distinctio";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quam"),
                                            add("molestias"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("neque"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("odio"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "ullam";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "hic";
                                    expression = "voluptatem";
                                    location = "cumque";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("et"),
                                    add("saepe"),
                                    add("ipsum"),
                                }};
                                role = "veritatis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "nobis";
                                    expression = "quos";
                                    location = "tempore";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("delectus"),
                                }};
                                role = "dolorem";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "dolore";
                                    expression = "labore";
                                    location = "adipisci";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("quae"),
                                }};
                                role = "aut";
                            }}),
                        }};
                        etag = "quas";
                        version = 929530;
                    }};;
                    updateMask = "consequatur";
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "porro";
                fields = "doloribus";
                key = "ut";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "qui";
                uploadProtocol = "quae";
            }};            

            CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse res = sdk.projects.cloudfunctionsProjectsLocationsFunctionsSetIamPolicy(req, new CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity("laudantium", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudfunctionsProjectsLocationsFunctionsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest req = new CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("vero"),
                        add("omnis"),
                        add("quis"),
                        add("ipsum"),
                    }};
                }};;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                fields = "vero";
                key = "tenetur";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "distinctio";
                uploadProtocol = "quod";
            }};            

            CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsResponse res = sdk.projects.cloudfunctionsProjectsLocationsFunctionsTestIamPermissions(req, new CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsSecurity("odio", "similique") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudfunctionsProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsListRequest req = new CloudfunctionsProjectsLocationsListRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ducimus";
                alt = AltEnum.JSON;
                callback = "quibusdam";
                fields = "illum";
                filter = "sequi";
                key = "natus";
                oauthToken = "impedit";
                pageSize = 13236L;
                pageToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "nulla";
                uploadProtocol = "fugit";
            }};            

            CloudfunctionsProjectsLocationsListResponse res = sdk.projects.cloudfunctionsProjectsLocationsList(req, new CloudfunctionsProjectsLocationsListSecurity("porro", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudfunctionsProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsOperationsGetRequest req = new CloudfunctionsProjectsLocationsOperationsGetRequest("doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "officia";
                key = "tempora";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "aspernatur";
                uploadProtocol = "vel";
            }};            

            CloudfunctionsProjectsLocationsOperationsGetResponse res = sdk.projects.cloudfunctionsProjectsLocationsOperationsGet(req, new CloudfunctionsProjectsLocationsOperationsGetSecurity("possimus", "magnam") {{
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

## cloudfunctionsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsOperationsListRequest req = new CloudfunctionsProjectsLocationsOperationsListRequest("ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "maiores";
                filter = "quasi";
                key = "ex";
                oauthToken = "nulla";
                pageSize = 569211L;
                pageToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "sapiente";
                uploadProtocol = "quisquam";
            }};            

            CloudfunctionsProjectsLocationsOperationsListResponse res = sdk.projects.cloudfunctionsProjectsLocationsOperationsList(req, new CloudfunctionsProjectsLocationsOperationsListSecurity("saepe", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudfunctionsProjectsLocationsRuntimesList

Returns a list of runtimes that are supported for the requested project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsRuntimesListRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsRuntimesListResponse;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsRuntimesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsRuntimesListRequest req = new CloudfunctionsProjectsLocationsRuntimesListRequest("impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                fields = "magnam";
                filter = "ea";
                key = "quo";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "aspernatur";
                uploadProtocol = "minima";
            }};            

            CloudfunctionsProjectsLocationsRuntimesListResponse res = sdk.projects.cloudfunctionsProjectsLocationsRuntimesList(req, new CloudfunctionsProjectsLocationsRuntimesListSecurity("eaque", "a") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRuntimesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
