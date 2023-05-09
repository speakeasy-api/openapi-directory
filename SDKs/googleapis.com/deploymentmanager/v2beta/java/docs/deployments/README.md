# deployments

### Available Operations

* [deploymentmanagerDeploymentsCancelPreview](#deploymentmanagerdeploymentscancelpreview) - Cancels and removes the preview currently associated with the deployment.
* [deploymentmanagerDeploymentsDelete](#deploymentmanagerdeploymentsdelete) - Deletes a deployment and all of the resources in the deployment.
* [deploymentmanagerDeploymentsGet](#deploymentmanagerdeploymentsget) - Gets information about a specific deployment.
* [deploymentmanagerDeploymentsGetIamPolicy](#deploymentmanagerdeploymentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [deploymentmanagerDeploymentsInsert](#deploymentmanagerdeploymentsinsert) - Creates a deployment and all of the resources described by the deployment manifest.
* [deploymentmanagerDeploymentsList](#deploymentmanagerdeploymentslist) - Lists all deployments for a given project.
* [deploymentmanagerDeploymentsPatch](#deploymentmanagerdeploymentspatch) - Patches a deployment and all of the resources described by the deployment manifest.
* [deploymentmanagerDeploymentsSetIamPolicy](#deploymentmanagerdeploymentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [deploymentmanagerDeploymentsStop](#deploymentmanagerdeploymentsstop) - Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
* [deploymentmanagerDeploymentsTestIamPermissions](#deploymentmanagerdeploymentstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [deploymentmanagerDeploymentsUpdate](#deploymentmanagerdeploymentsupdate) - Updates a deployment and all of the resources described by the deployment manifest.

## deploymentmanagerDeploymentsCancelPreview

Cancels and removes the preview currently associated with the deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeploymentsCancelPreviewRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsCancelPreviewRequest req = new DeploymentmanagerDeploymentsCancelPreviewRequest("dolor", "vero") {{
                dollarXgafv = XgafvEnum.ONE;
                deploymentsCancelPreviewRequest = new DeploymentsCancelPreviewRequest() {{
                    fingerprint = "hic";
                }};;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "facilis";
                fields = "perspiciatis";
                key = "voluptatem";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "blanditiis";
                uploadProtocol = "error";
            }};            

            DeploymentmanagerDeploymentsCancelPreviewResponse res = sdk.deployments.deploymentmanagerDeploymentsCancelPreview(req, new DeploymentmanagerDeploymentsCancelPreviewSecurity() {{
                option1 = new DeploymentmanagerDeploymentsCancelPreviewSecurityOption1("eaque", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## deploymentmanagerDeploymentsDelete

Deletes a deployment and all of the resources in the deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsDeleteDeletePolicyEnum;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsDeleteRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsDeleteResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsDeleteSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsDeleteRequest req = new DeploymentmanagerDeploymentsDeleteRequest("rerum", "adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "earum";
                alt = AltEnum.JSON;
                callback = "iste";
                deletePolicy = DeploymentmanagerDeploymentsDeleteDeletePolicyEnum.ABANDON;
                fields = "deleniti";
                key = "pariatur";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "libero";
                uploadProtocol = "delectus";
            }};            

            DeploymentmanagerDeploymentsDeleteResponse res = sdk.deployments.deploymentmanagerDeploymentsDelete(req, new DeploymentmanagerDeploymentsDeleteSecurity() {{
                option1 = new DeploymentmanagerDeploymentsDeleteSecurityOption1("quaerat", "quos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## deploymentmanagerDeploymentsGet

Gets information about a specific deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsGetRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsGetResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsGetSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsGetSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsGetSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsGetSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsGetRequest req = new DeploymentmanagerDeploymentsGetRequest("aliquid", "dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolor";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "hic";
                key = "excepturi";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "dignissimos";
                uploadProtocol = "reiciendis";
            }};            

            DeploymentmanagerDeploymentsGetResponse res = sdk.deployments.deploymentmanagerDeploymentsGet(req, new DeploymentmanagerDeploymentsGetSecurity() {{
                option1 = new DeploymentmanagerDeploymentsGetSecurityOption1("amet", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.deployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deploymentmanagerDeploymentsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsGetIamPolicyRequest req = new DeploymentmanagerDeploymentsGetIamPolicyRequest("numquam", "veritatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "odio";
                fields = "quaerat";
                key = "accusamus";
                oauthToken = "quidem";
                optionsRequestedPolicyVersion = 976405L;
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "natus";
                uploadProtocol = "eos";
            }};            

            DeploymentmanagerDeploymentsGetIamPolicyResponse res = sdk.deployments.deploymentmanagerDeploymentsGetIamPolicy(req, new DeploymentmanagerDeploymentsGetIamPolicySecurity() {{
                option1 = new DeploymentmanagerDeploymentsGetIamPolicySecurityOption1("atque", "sit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## deploymentmanagerDeploymentsInsert

Creates a deployment and all of the resources described by the deployment manifest.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsInsertCreatePolicyEnum;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsInsertRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsInsertResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsInsertSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsInsertSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigFile;
import org.openapis.openapi.models.shared.Deployment;
import org.openapis.openapi.models.shared.DeploymentLabelEntry;
import org.openapis.openapi.models.shared.DeploymentUpdate;
import org.openapis.openapi.models.shared.DeploymentUpdateLabelEntry;
import org.openapis.openapi.models.shared.ImportFile;
import org.openapis.openapi.models.shared.Operation;
import org.openapis.openapi.models.shared.OperationError;
import org.openapis.openapi.models.shared.OperationErrorErrors;
import org.openapis.openapi.models.shared.OperationStatusEnum;
import org.openapis.openapi.models.shared.OperationWarnings;
import org.openapis.openapi.models.shared.OperationWarningsCodeEnum;
import org.openapis.openapi.models.shared.OperationWarningsData;
import org.openapis.openapi.models.shared.TargetConfiguration;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsInsertRequest req = new DeploymentmanagerDeploymentsInsertRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                deployment = new Deployment() {{
                    description = "soluta";
                    fingerprint = "dolorum";
                    id = "iusto";
                    insertTime = "voluptate";
                    labels = new org.openapis.openapi.models.shared.DeploymentLabelEntry[]{{
                        add(new DeploymentLabelEntry() {{
                            key = "deleniti";
                            value = "omnis";
                        }}),
                        add(new DeploymentLabelEntry() {{
                            key = "necessitatibus";
                            value = "distinctio";
                        }}),
                        add(new DeploymentLabelEntry() {{
                            key = "asperiores";
                            value = "nihil";
                        }}),
                    }};
                    manifest = "ipsum";
                    name = "Alberta Ullrich";
                    operation = new Operation() {{
                        clientOperationId = "perferendis";
                        creationTimestamp = "amet";
                        description = "optio";
                        endTime = "accusamus";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "saepe";
                                    location = "suscipit";
                                    message = "deserunt";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "provident";
                                    location = "minima";
                                    message = "repellendus";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "totam";
                        httpErrorStatusCode = 628982;
                        id = "alias";
                        insertTime = "at";
                        kind = "quaerat";
                        name = "Gina Schmeler";
                        operationGroupId = "dolorum";
                        operationType = "a";
                        progress = 456130;
                        region = "harum";
                        selfLink = "iusto";
                        startTime = "ipsum";
                        status = OperationStatusEnum.DONE;
                        statusMessage = "tenetur";
                        targetId = "amet";
                        targetLink = "tempore";
                        user = "accusamus";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.INJECTED_KERNELS_DEPRECATED;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "sapiente";
                                        value = "totam";
                                    }}),
                                }};
                                message = "nihil";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.DEPRECATED_RESOURCE_USED;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "neque";
                                        value = "sed";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "vel";
                                        value = "libero";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "voluptas";
                                        value = "deserunt";
                                    }}),
                                }};
                                message = "quam";
                            }}),
                        }};
                        zone = "ipsum";
                    }};;
                    selfLink = "incidunt";
                    target = new TargetConfiguration() {{
                        config = new ConfigFile() {{
                            content = "qui";
                        }};;
                        imports = new org.openapis.openapi.models.shared.ImportFile[]{{
                            add(new ImportFile() {{
                                content = "maxime";
                                name = "Dominic Carroll";
                            }}),
                            add(new ImportFile() {{
                                content = "incidunt";
                                name = "Bonnie Raynor";
                            }}),
                            add(new ImportFile() {{
                                content = "quam";
                                name = "Marty Deckow";
                            }}),
                        }};
                    }};;
                    update = new DeploymentUpdate() {{
                        description = "magni";
                        labels = new org.openapis.openapi.models.shared.DeploymentUpdateLabelEntry[]{{
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "sunt";
                                value = "ullam";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "nam";
                                value = "hic";
                            }}),
                        }};
                        manifest = "voluptatem";
                    }};;
                    updateTime = "cumque";
                }};;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "et";
                createPolicy = DeploymentmanagerDeploymentsInsertCreatePolicyEnum.CREATE;
                fields = "ipsum";
                key = "veritatis";
                oauthToken = "nobis";
                prettyPrint = false;
                preview = false;
                quotaUser = "quos";
                uploadType = "tempore";
                uploadProtocol = "cupiditate";
            }};            

            DeploymentmanagerDeploymentsInsertResponse res = sdk.deployments.deploymentmanagerDeploymentsInsert(req, new DeploymentmanagerDeploymentsInsertSecurity() {{
                option1 = new DeploymentmanagerDeploymentsInsertSecurityOption1("aperiam", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## deploymentmanagerDeploymentsList

Lists all deployments for a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsListRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsListResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsListSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsListSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsListSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsListSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsListRequest req = new DeploymentmanagerDeploymentsListRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "architecto";
                filter = "quae";
                key = "aut";
                maxResults = 555649L;
                oauthToken = "itaque";
                orderBy = "consequatur";
                pageToken = "est";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "porro";
                uploadProtocol = "doloribus";
            }};            

            DeploymentmanagerDeploymentsListResponse res = sdk.deployments.deploymentmanagerDeploymentsList(req, new DeploymentmanagerDeploymentsListSecurity() {{
                option1 = new DeploymentmanagerDeploymentsListSecurityOption1("ut", "facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.deploymentsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deploymentmanagerDeploymentsPatch

Patches a deployment and all of the resources described by the deployment manifest.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsPatchCreatePolicyEnum;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsPatchDeletePolicyEnum;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsPatchRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsPatchResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsPatchSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsPatchSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigFile;
import org.openapis.openapi.models.shared.Deployment;
import org.openapis.openapi.models.shared.DeploymentLabelEntry;
import org.openapis.openapi.models.shared.DeploymentUpdate;
import org.openapis.openapi.models.shared.DeploymentUpdateLabelEntry;
import org.openapis.openapi.models.shared.ImportFile;
import org.openapis.openapi.models.shared.Operation;
import org.openapis.openapi.models.shared.OperationError;
import org.openapis.openapi.models.shared.OperationErrorErrors;
import org.openapis.openapi.models.shared.OperationStatusEnum;
import org.openapis.openapi.models.shared.OperationWarnings;
import org.openapis.openapi.models.shared.OperationWarningsCodeEnum;
import org.openapis.openapi.models.shared.OperationWarningsData;
import org.openapis.openapi.models.shared.TargetConfiguration;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsPatchRequest req = new DeploymentmanagerDeploymentsPatchRequest("cupiditate", "qui") {{
                dollarXgafv = XgafvEnum.ONE;
                deployment1 = new Deployment() {{
                    description = "laudantium";
                    fingerprint = "odio";
                    id = "occaecati";
                    insertTime = "voluptatibus";
                    labels = new org.openapis.openapi.models.shared.DeploymentLabelEntry[]{{
                        add(new DeploymentLabelEntry() {{
                            key = "vero";
                            value = "omnis";
                        }}),
                        add(new DeploymentLabelEntry() {{
                            key = "quis";
                            value = "ipsum";
                        }}),
                        add(new DeploymentLabelEntry() {{
                            key = "delectus";
                            value = "voluptate";
                        }}),
                        add(new DeploymentLabelEntry() {{
                            key = "consectetur";
                            value = "vero";
                        }}),
                    }};
                    manifest = "tenetur";
                    name = "Darla Rau";
                    operation = new Operation() {{
                        clientOperationId = "similique";
                        creationTimestamp = "facilis";
                        description = "vero";
                        endTime = "ducimus";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "quibusdam";
                                    location = "illum";
                                    message = "sequi";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "natus";
                                    location = "impedit";
                                    message = "aut";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "voluptatibus";
                        httpErrorStatusCode = 347233;
                        id = "nulla";
                        insertTime = "fugit";
                        kind = "porro";
                        name = "Domingo Kris";
                        operationGroupId = "alias";
                        operationType = "officia";
                        progress = 269479;
                        region = "ipsam";
                        selfLink = "ea";
                        startTime = "aspernatur";
                        status = OperationStatusEnum.RUNNING;
                        statusMessage = "possimus";
                        targetId = "magnam";
                        targetLink = "ratione";
                        user = "ex";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.NEXT_HOP_ADDRESS_NOT_ASSIGNED;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "maiores";
                                        value = "quasi";
                                    }}),
                                }};
                                message = "ex";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.PARTIAL_SUCCESS;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "voluptatibus";
                                        value = "nostrum";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "sapiente";
                                        value = "quisquam";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "saepe";
                                        value = "ea";
                                    }}),
                                }};
                                message = "impedit";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.REQUIRED_TOS_AGREEMENT;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "aliquid";
                                        value = "inventore";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "magnam";
                                        value = "ea";
                                    }}),
                                }};
                                message = "quo";
                            }}),
                        }};
                        zone = "consectetur";
                    }};;
                    selfLink = "recusandae";
                    target = new TargetConfiguration() {{
                        config = new ConfigFile() {{
                            content = "aspernatur";
                        }};;
                        imports = new org.openapis.openapi.models.shared.ImportFile[]{{
                            add(new ImportFile() {{
                                content = "eaque";
                                name = "Ms. Marco Ankunding";
                            }}),
                            add(new ImportFile() {{
                                content = "aliquam";
                                name = "Eloise Block MD";
                            }}),
                        }};
                    }};;
                    update = new DeploymentUpdate() {{
                        description = "laborum";
                        labels = new org.openapis.openapi.models.shared.DeploymentUpdateLabelEntry[]{{
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "velit";
                                value = "eum";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "autem";
                                value = "nobis";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "quas";
                                value = "assumenda";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "nulla";
                                value = "voluptas";
                            }}),
                        }};
                        manifest = "libero";
                    }};;
                    updateTime = "quasi";
                }};;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "explicabo";
                createPolicy = DeploymentmanagerDeploymentsPatchCreatePolicyEnum.ACQUIRE;
                deletePolicy = DeploymentmanagerDeploymentsPatchDeletePolicyEnum.DELETE;
                fields = "molestiae";
                key = "magnam";
                oauthToken = "odio";
                prettyPrint = false;
                preview = false;
                quotaUser = "eius";
                uploadType = "esse";
                uploadProtocol = "esse";
            }};            

            DeploymentmanagerDeploymentsPatchResponse res = sdk.deployments.deploymentmanagerDeploymentsPatch(req, new DeploymentmanagerDeploymentsPatchSecurity() {{
                option1 = new DeploymentmanagerDeploymentsPatchSecurityOption1("rem", "fuga") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## deploymentmanagerDeploymentsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.GlobalSetPolicyRequest;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsSetIamPolicyRequest req = new DeploymentmanagerDeploymentsSetIamPolicyRequest("reprehenderit", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            condition = new Expr() {{
                                description = "eum";
                                expression = "suscipit";
                                location = "assumenda";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("quisquam"),
                                add("veritatis"),
                                add("ipsa"),
                            }};
                            role = "id";
                        }}),
                        add(new Binding() {{
                            condition = new Expr() {{
                                description = "quidem";
                                expression = "neque";
                                location = "quo";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("fuga"),
                                add("eius"),
                                add("eos"),
                                add("voluptas"),
                            }};
                            role = "ab";
                        }}),
                    }};
                    etag = "cupiditate";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsam"),
                                            add("aspernatur"),
                                            add("sequi"),
                                            add("quo"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aperiam"),
                                            add("distinctio"),
                                            add("quod"),
                                            add("dignissimos"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "nihil";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "accusamus";
                                    expression = "aliquam";
                                    location = "odio";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("sapiente"),
                                    add("dolores"),
                                }};
                                role = "deserunt";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "molestiae";
                                    expression = "accusantium";
                                    location = "porro";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("praesentium"),
                                    add("consequuntur"),
                                    add("deleniti"),
                                }};
                                role = "fugit";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "fuga";
                                    expression = "mollitia";
                                    location = "incidunt";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("minima"),
                                }};
                                role = "nisi";
                            }}),
                        }};
                        etag = "fugit";
                        version = 956406;
                    }};;
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "explicabo";
                fields = "saepe";
                key = "occaecati";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "esse";
                uploadProtocol = "eveniet";
            }};            

            DeploymentmanagerDeploymentsSetIamPolicyResponse res = sdk.deployments.deploymentmanagerDeploymentsSetIamPolicy(req, new DeploymentmanagerDeploymentsSetIamPolicySecurity() {{
                option1 = new DeploymentmanagerDeploymentsSetIamPolicySecurityOption1("accusamus", "veritatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## deploymentmanagerDeploymentsStop

Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsStopRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsStopResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsStopSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsStopSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsStopSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeploymentsStopRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsStopRequest req = new DeploymentmanagerDeploymentsStopRequest("esse", "quod") {{
                dollarXgafv = XgafvEnum.TWO;
                deploymentsStopRequest = new DeploymentsStopRequest() {{
                    fingerprint = "vero";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "vel";
                key = "harum";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "occaecati";
                uploadProtocol = "minima";
            }};            

            DeploymentmanagerDeploymentsStopResponse res = sdk.deployments.deploymentmanagerDeploymentsStop(req, new DeploymentmanagerDeploymentsStopSecurity() {{
                option1 = new DeploymentmanagerDeploymentsStopSecurityOption1("distinctio", "eligendi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## deploymentmanagerDeploymentsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsTestIamPermissionsRequest req = new DeploymentmanagerDeploymentsTestIamPermissionsRequest("sit", "culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("cumque"),
                    }};
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "quaerat";
                key = "sapiente";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "blanditiis";
                uploadProtocol = "provident";
            }};            

            DeploymentmanagerDeploymentsTestIamPermissionsResponse res = sdk.deployments.deploymentmanagerDeploymentsTestIamPermissions(req, new DeploymentmanagerDeploymentsTestIamPermissionsSecurity() {{
                option1 = new DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1("a", "nulla") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deploymentmanagerDeploymentsUpdate

Updates a deployment and all of the resources described by the deployment manifest.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsUpdateCreatePolicyEnum;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsUpdateDeletePolicyEnum;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsUpdateRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsUpdateResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsUpdateSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigFile;
import org.openapis.openapi.models.shared.Deployment;
import org.openapis.openapi.models.shared.DeploymentLabelEntry;
import org.openapis.openapi.models.shared.DeploymentUpdate;
import org.openapis.openapi.models.shared.DeploymentUpdateLabelEntry;
import org.openapis.openapi.models.shared.ImportFile;
import org.openapis.openapi.models.shared.Operation;
import org.openapis.openapi.models.shared.OperationError;
import org.openapis.openapi.models.shared.OperationErrorErrors;
import org.openapis.openapi.models.shared.OperationStatusEnum;
import org.openapis.openapi.models.shared.OperationWarnings;
import org.openapis.openapi.models.shared.OperationWarningsCodeEnum;
import org.openapis.openapi.models.shared.OperationWarningsData;
import org.openapis.openapi.models.shared.TargetConfiguration;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsUpdateRequest req = new DeploymentmanagerDeploymentsUpdateRequest("quas", "esse") {{
                dollarXgafv = XgafvEnum.ONE;
                deployment1 = new Deployment() {{
                    description = "a";
                    fingerprint = "error";
                    id = "sint";
                    insertTime = "pariatur";
                    labels = new org.openapis.openapi.models.shared.DeploymentLabelEntry[]{{
                        add(new DeploymentLabelEntry() {{
                            key = "quia";
                            value = "eveniet";
                        }}),
                        add(new DeploymentLabelEntry() {{
                            key = "asperiores";
                            value = "facere";
                        }}),
                        add(new DeploymentLabelEntry() {{
                            key = "veritatis";
                            value = "consequuntur";
                        }}),
                        add(new DeploymentLabelEntry() {{
                            key = "quasi";
                            value = "similique";
                        }}),
                    }};
                    manifest = "culpa";
                    name = "Mandy Berge";
                    operation = new Operation() {{
                        clientOperationId = "in";
                        creationTimestamp = "eius";
                        description = "libero";
                        endTime = "illum";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "accusantium";
                                    location = "aliquam";
                                    message = "sapiente";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "dicta";
                                    location = "ullam";
                                    message = "reprehenderit";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "ullam";
                                    location = "nisi";
                                    message = "aut";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "voluptatum";
                        httpErrorStatusCode = 185232;
                        id = "quibusdam";
                        insertTime = "ex";
                        kind = "deleniti";
                        name = "Wilbur Bradtke";
                        operationGroupId = "quasi";
                        operationType = "at";
                        progress = 92027;
                        region = "voluptate";
                        selfLink = "ipsa";
                        startTime = "minima";
                        status = OperationStatusEnum.PENDING;
                        statusMessage = "consectetur";
                        targetId = "adipisci";
                        targetLink = "iste";
                        user = "temporibus";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.CLEANUP_FAILED;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "laudantium";
                                        value = "eum";
                                    }}),
                                }};
                                message = "mollitia";
                            }}),
                        }};
                        zone = "ab";
                    }};;
                    selfLink = "corrupti";
                    target = new TargetConfiguration() {{
                        config = new ConfigFile() {{
                            content = "non";
                        }};;
                        imports = new org.openapis.openapi.models.shared.ImportFile[]{{
                            add(new ImportFile() {{
                                content = "dolor";
                                name = "Francis Russel";
                            }}),
                        }};
                    }};;
                    update = new DeploymentUpdate() {{
                        description = "aut";
                        labels = new org.openapis.openapi.models.shared.DeploymentUpdateLabelEntry[]{{
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "dicta";
                                value = "maiores";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "natus";
                                value = "velit";
                            }}),
                        }};
                        manifest = "voluptatibus";
                    }};;
                    updateTime = "voluptas";
                }};;
                accessToken = "asperiores";
                alt = AltEnum.JSON;
                callback = "ea";
                createPolicy = DeploymentmanagerDeploymentsUpdateCreatePolicyEnum.CREATE_OR_ACQUIRE;
                deletePolicy = DeploymentmanagerDeploymentsUpdateDeletePolicyEnum.DELETE;
                fields = "repellendus";
                key = "officia";
                oauthToken = "maxime";
                prettyPrint = false;
                preview = false;
                quotaUser = "dignissimos";
                uploadType = "officia";
                uploadProtocol = "asperiores";
            }};            

            DeploymentmanagerDeploymentsUpdateResponse res = sdk.deployments.deploymentmanagerDeploymentsUpdate(req, new DeploymentmanagerDeploymentsUpdateSecurity() {{
                option1 = new DeploymentmanagerDeploymentsUpdateSecurityOption1("nemo", "quae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
