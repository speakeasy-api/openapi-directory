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

            DeploymentmanagerDeploymentsCancelPreviewRequest req = new DeploymentmanagerDeploymentsCancelPreviewRequest("ipsa", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                deploymentsCancelPreviewRequest = new DeploymentsCancelPreviewRequest() {{
                    fingerprint = "suscipit";
                }};;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            DeploymentmanagerDeploymentsCancelPreviewResponse res = sdk.deployments.deploymentmanagerDeploymentsCancelPreview(req, new DeploymentmanagerDeploymentsCancelPreviewSecurity() {{
                option1 = new DeploymentmanagerDeploymentsCancelPreviewSecurityOption1("ab", "quis") {{
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

            DeploymentmanagerDeploymentsDeleteRequest req = new DeploymentmanagerDeploymentsDeleteRequest("veritatis", "deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                deletePolicy = DeploymentmanagerDeploymentsDeleteDeletePolicyEnum.ABANDON;
                fields = "odit";
                key = "at";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "molestiae";
                uploadProtocol = "quod";
            }};            

            DeploymentmanagerDeploymentsDeleteResponse res = sdk.deployments.deploymentmanagerDeploymentsDelete(req, new DeploymentmanagerDeploymentsDeleteSecurity() {{
                option1 = new DeploymentmanagerDeploymentsDeleteSecurityOption1("quod", "esse") {{
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

            DeploymentmanagerDeploymentsGetRequest req = new DeploymentmanagerDeploymentsGetRequest("totam", "porro") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "occaecati";
                key = "fugit";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "optio";
                uploadProtocol = "totam";
            }};            

            DeploymentmanagerDeploymentsGetResponse res = sdk.deployments.deploymentmanagerDeploymentsGet(req, new DeploymentmanagerDeploymentsGetSecurity() {{
                option1 = new DeploymentmanagerDeploymentsGetSecurityOption1("beatae", "commodi") {{
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

            DeploymentmanagerDeploymentsGetIamPolicyRequest req = new DeploymentmanagerDeploymentsGetIamPolicyRequest("molestiae", "modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "ipsum";
                key = "excepturi";
                oauthToken = "aspernatur";
                optionsRequestedPolicyVersion = 18789L;
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "natus";
                uploadProtocol = "sed";
            }};            

            DeploymentmanagerDeploymentsGetIamPolicyResponse res = sdk.deployments.deploymentmanagerDeploymentsGetIamPolicy(req, new DeploymentmanagerDeploymentsGetIamPolicySecurity() {{
                option1 = new DeploymentmanagerDeploymentsGetIamPolicySecurityOption1("iste", "dolor") {{
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

            DeploymentmanagerDeploymentsInsertRequest req = new DeploymentmanagerDeploymentsInsertRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                deployment = new Deployment() {{
                    description = "hic";
                    fingerprint = "saepe";
                    id = "fuga";
                    insertTime = "in";
                    labels = new org.openapis.openapi.models.shared.DeploymentLabelEntry[]{{
                        add(new DeploymentLabelEntry() {{
                            key = "iste";
                            value = "iure";
                        }}),
                        add(new DeploymentLabelEntry() {{
                            key = "saepe";
                            value = "quidem";
                        }}),
                    }};
                    manifest = "architecto";
                    name = "Lela Orn";
                    operation = new Operation() {{
                        clientOperationId = "dolores";
                        creationTimestamp = "dolorem";
                        description = "corporis";
                        endTime = "explicabo";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "enim";
                                    location = "omnis";
                                    message = "nemo";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "minima";
                                    location = "excepturi";
                                    message = "accusantium";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "iure";
                                    location = "culpa";
                                    message = "doloribus";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "sapiente";
                                    location = "architecto";
                                    message = "mollitia";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "dolorem";
                        httpErrorStatusCode = 635059;
                        id = "consequuntur";
                        insertTime = "repellat";
                        kind = "mollitia";
                        name = "Francis Jerde";
                        operationGroupId = "velit";
                        operationType = "error";
                        progress = 158969;
                        region = "quis";
                        selfLink = "vitae";
                        startTime = "laborum";
                        status = OperationStatusEnum.RUNNING;
                        statusMessage = "enim";
                        targetId = "odit";
                        targetLink = "quo";
                        user = "sequi";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.REQUIRED_TOS_AGREEMENT;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "possimus";
                                        value = "aut";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "quasi";
                                        value = "error";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "temporibus";
                                        value = "laborum";
                                    }}),
                                }};
                                message = "quasi";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "vero";
                                        value = "nihil";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "praesentium";
                                        value = "voluptatibus";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "ipsa";
                                        value = "omnis";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "voluptate";
                                        value = "cum";
                                    }}),
                                }};
                                message = "perferendis";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.NO_RESULTS_ON_PAGE;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "ut";
                                        value = "maiores";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "dicta";
                                        value = "corporis";
                                    }}),
                                }};
                                message = "dolore";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.SINGLE_INSTANCE_PROPERTY_TEMPLATE;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "harum";
                                        value = "enim";
                                    }}),
                                }};
                                message = "accusamus";
                            }}),
                        }};
                        zone = "commodi";
                    }};;
                    selfLink = "repudiandae";
                    target = new TargetConfiguration() {{
                        config = new ConfigFile() {{
                            content = "quae";
                        }};;
                        imports = new org.openapis.openapi.models.shared.ImportFile[]{{
                            add(new ImportFile() {{
                                content = "quidem";
                                name = "Andy Streich";
                            }}),
                        }};
                    }};;
                    update = new DeploymentUpdate() {{
                        description = "rem";
                        labels = new org.openapis.openapi.models.shared.DeploymentUpdateLabelEntry[]{{
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "quasi";
                                value = "repudiandae";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "sint";
                                value = "veritatis";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "itaque";
                                value = "incidunt";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "enim";
                                value = "consequatur";
                            }}),
                        }};
                        manifest = "est";
                    }};;
                    updateTime = "quibusdam";
                }};;
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                createPolicy = DeploymentmanagerDeploymentsInsertCreatePolicyEnum.ACQUIRE;
                fields = "labore";
                key = "modi";
                oauthToken = "qui";
                prettyPrint = false;
                preview = false;
                quotaUser = "aliquid";
                uploadType = "cupiditate";
                uploadProtocol = "quos";
            }};            

            DeploymentmanagerDeploymentsInsertResponse res = sdk.deployments.deploymentmanagerDeploymentsInsert(req, new DeploymentmanagerDeploymentsInsertSecurity() {{
                option1 = new DeploymentmanagerDeploymentsInsertSecurityOption1("perferendis", "magni") {{
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

            DeploymentmanagerDeploymentsListRequest req = new DeploymentmanagerDeploymentsListRequest("assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "alias";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "excepturi";
                filter = "tempora";
                key = "facilis";
                maxResults = 735194L;
                oauthToken = "labore";
                orderBy = "delectus";
                pageToken = "eum";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "eligendi";
                uploadProtocol = "sint";
            }};            

            DeploymentmanagerDeploymentsListResponse res = sdk.deployments.deploymentmanagerDeploymentsList(req, new DeploymentmanagerDeploymentsListSecurity() {{
                option1 = new DeploymentmanagerDeploymentsListSecurityOption1("aliquid", "provident") {{
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

            DeploymentmanagerDeploymentsPatchRequest req = new DeploymentmanagerDeploymentsPatchRequest("necessitatibus", "sint") {{
                dollarXgafv = XgafvEnum.TWO;
                deployment1 = new Deployment() {{
                    description = "dolor";
                    fingerprint = "debitis";
                    id = "a";
                    insertTime = "dolorum";
                    labels = new org.openapis.openapi.models.shared.DeploymentLabelEntry[]{{
                        add(new DeploymentLabelEntry() {{
                            key = "in";
                            value = "illum";
                        }}),
                        add(new DeploymentLabelEntry() {{
                            key = "maiores";
                            value = "rerum";
                        }}),
                    }};
                    manifest = "dicta";
                    name = "Blanca Schulist";
                    operation = new Operation() {{
                        clientOperationId = "laborum";
                        creationTimestamp = "accusamus";
                        description = "non";
                        endTime = "occaecati";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "accusamus";
                                    location = "delectus";
                                    message = "quidem";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "provident";
                                    location = "nam";
                                    message = "id";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "blanditiis";
                        httpErrorStatusCode = 533206;
                        id = "sapiente";
                        insertTime = "amet";
                        kind = "deserunt";
                        name = "Wilma Mosciski";
                        operationGroupId = "perferendis";
                        operationType = "nihil";
                        progress = 301575;
                        region = "distinctio";
                        selfLink = "id";
                        startTime = "labore";
                        status = OperationStatusEnum.PENDING;
                        statusMessage = "suscipit";
                        targetId = "natus";
                        targetLink = "nobis";
                        user = "eum";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.NEXT_HOP_ADDRESS_NOT_ASSIGNED;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "magnam";
                                        value = "et";
                                    }}),
                                }};
                                message = "excepturi";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.REQUIRED_TOS_AGREEMENT;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "quos";
                                        value = "sint";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "accusantium";
                                        value = "mollitia";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "reiciendis";
                                        value = "mollitia";
                                    }}),
                                }};
                                message = "ad";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.RESOURCE_NOT_DELETED;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "necessitatibus";
                                        value = "odit";
                                    }}),
                                }};
                                message = "nemo";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.UNREACHABLE;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "doloribus";
                                        value = "debitis";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "eius";
                                        value = "maxime";
                                    }}),
                                }};
                                message = "deleniti";
                            }}),
                        }};
                        zone = "facilis";
                    }};;
                    selfLink = "in";
                    target = new TargetConfiguration() {{
                        config = new ConfigFile() {{
                            content = "architecto";
                        }};;
                        imports = new org.openapis.openapi.models.shared.ImportFile[]{{
                            add(new ImportFile() {{
                                content = "repudiandae";
                                name = "Lola Koss";
                            }}),
                        }};
                    }};;
                    update = new DeploymentUpdate() {{
                        description = "sed";
                        labels = new org.openapis.openapi.models.shared.DeploymentUpdateLabelEntry[]{{
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "pariatur";
                                value = "accusantium";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "consequuntur";
                                value = "praesentium";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "natus";
                                value = "magni";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "sunt";
                                value = "quo";
                            }}),
                        }};
                        manifest = "illum";
                    }};;
                    updateTime = "pariatur";
                }};;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                createPolicy = DeploymentmanagerDeploymentsPatchCreatePolicyEnum.CREATE_OR_ACQUIRE;
                deletePolicy = DeploymentmanagerDeploymentsPatchDeletePolicyEnum.DELETE;
                fields = "accusantium";
                key = "ab";
                oauthToken = "maiores";
                prettyPrint = false;
                preview = false;
                quotaUser = "quidem";
                uploadType = "ipsam";
                uploadProtocol = "voluptate";
            }};            

            DeploymentmanagerDeploymentsPatchResponse res = sdk.deployments.deploymentmanagerDeploymentsPatch(req, new DeploymentmanagerDeploymentsPatchSecurity() {{
                option1 = new DeploymentmanagerDeploymentsPatchSecurityOption1("autem", "nam") {{
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

            DeploymentmanagerDeploymentsSetIamPolicyRequest req = new DeploymentmanagerDeploymentsSetIamPolicyRequest("eaque", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            condition = new Expr() {{
                                description = "perferendis";
                                expression = "fugiat";
                                location = "amet";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("corporis"),
                                add("hic"),
                                add("libero"),
                                add("nobis"),
                            }};
                            role = "dolores";
                        }}),
                        add(new Binding() {{
                            condition = new Expr() {{
                                description = "quis";
                                expression = "totam";
                                location = "dignissimos";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("nesciunt"),
                                add("eos"),
                            }};
                            role = "perferendis";
                        }}),
                        add(new Binding() {{
                            condition = new Expr() {{
                                description = "dolores";
                                expression = "minus";
                                location = "quam";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("nostrum"),
                                add("hic"),
                                add("recusandae"),
                                add("omnis"),
                            }};
                            role = "facilis";
                        }}),
                        add(new Binding() {{
                            condition = new Expr() {{
                                description = "perspiciatis";
                                expression = "voluptatem";
                                location = "porro";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("error"),
                                add("eaque"),
                                add("occaecati"),
                            }};
                            role = "rerum";
                        }}),
                    }};
                    etag = "adipisci";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("iste"),
                                            add("dolorum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("provident"),
                                            add("nobis"),
                                            add("libero"),
                                            add("delectus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aliquid"),
                                            add("dolorem"),
                                            add("dolorem"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "excepturi";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dignissimos"),
                                            add("reiciendis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("numquam"),
                                            add("veritatis"),
                                            add("ipsa"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("odio"),
                                            add("quaerat"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "quidem";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("natus"),
                                            add("eos"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("fugiat"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolorum"),
                                            add("iusto"),
                                            add("voluptate"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("omnis"),
                                            add("necessitatibus"),
                                            add("distinctio"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "nihil";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("id"),
                                            add("saepe"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "aspernatur";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "amet";
                                    expression = "optio";
                                    location = "accusamus";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("suscipit"),
                                    add("deserunt"),
                                    add("provident"),
                                    add("minima"),
                                }};
                                role = "repellendus";
                            }}),
                        }};
                        etag = "totam";
                        version = 628982;
                    }};;
                }};;
                accessToken = "alias";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "tempora";
                key = "vel";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "qui";
                uploadProtocol = "dolorum";
            }};            

            DeploymentmanagerDeploymentsSetIamPolicyResponse res = sdk.deployments.deploymentmanagerDeploymentsSetIamPolicy(req, new DeploymentmanagerDeploymentsSetIamPolicySecurity() {{
                option1 = new DeploymentmanagerDeploymentsSetIamPolicySecurityOption1("a", "esse") {{
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

            DeploymentmanagerDeploymentsStopRequest req = new DeploymentmanagerDeploymentsStopRequest("harum", "iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                deploymentsStopRequest = new DeploymentsStopRequest() {{
                    fingerprint = "quisquam";
                }};;
                accessToken = "tenetur";
                alt = AltEnum.JSON;
                callback = "tempore";
                fields = "accusamus";
                key = "numquam";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "sapiente";
                uploadProtocol = "totam";
            }};            

            DeploymentmanagerDeploymentsStopResponse res = sdk.deployments.deploymentmanagerDeploymentsStop(req, new DeploymentmanagerDeploymentsStopSecurity() {{
                option1 = new DeploymentmanagerDeploymentsStopSecurityOption1("nihil", "sit") {{
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

            DeploymentmanagerDeploymentsTestIamPermissionsRequest req = new DeploymentmanagerDeploymentsTestIamPermissionsRequest("expedita", "neque") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("libero"),
                        add("voluptas"),
                    }};
                }};;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "incidunt";
                key = "qui";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "pariatur";
                uploadProtocol = "soluta";
            }};            

            DeploymentmanagerDeploymentsTestIamPermissionsResponse res = sdk.deployments.deploymentmanagerDeploymentsTestIamPermissions(req, new DeploymentmanagerDeploymentsTestIamPermissionsSecurity() {{
                option1 = new DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1("dicta", "laborum") {{
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

            DeploymentmanagerDeploymentsUpdateRequest req = new DeploymentmanagerDeploymentsUpdateRequest("totam", "incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                deployment1 = new Deployment() {{
                    description = "dolores";
                    fingerprint = "distinctio";
                    id = "facilis";
                    insertTime = "aliquid";
                    labels = new org.openapis.openapi.models.shared.DeploymentLabelEntry[]{{
                        add(new DeploymentLabelEntry() {{
                            key = "molestias";
                            value = "temporibus";
                        }}),
                        add(new DeploymentLabelEntry() {{
                            key = "qui";
                            value = "neque";
                        }}),
                    }};
                    manifest = "fugit";
                    name = "Courtney Cassin";
                    operation = new Operation() {{
                        clientOperationId = "hic";
                        creationTimestamp = "voluptatem";
                        description = "cumque";
                        endTime = "soluta";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "et";
                                    location = "saepe";
                                    message = "ipsum";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "veritatis";
                                    location = "nobis";
                                    message = "quos";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "tempore";
                                    location = "cupiditate";
                                    message = "aperiam";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "delectus";
                        httpErrorStatusCode = 209157;
                        id = "dolore";
                        insertTime = "labore";
                        kind = "adipisci";
                        name = "Ms. Joe Berge";
                        operationGroupId = "consequatur";
                        operationType = "est";
                        progress = 833038;
                        region = "porro";
                        selfLink = "doloribus";
                        startTime = "ut";
                        status = OperationStatusEnum.DONE;
                        statusMessage = "cupiditate";
                        targetId = "qui";
                        targetLink = "quae";
                        user = "laudantium";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.FIELD_VALUE_OVERRIDEN;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "quisquam";
                                        value = "vero";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "omnis";
                                        value = "quis";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "ipsum";
                                        value = "delectus";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "voluptate";
                                        value = "consectetur";
                                    }}),
                                }};
                                message = "vero";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "hic";
                                        value = "distinctio";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "quod";
                                        value = "odio";
                                    }}),
                                }};
                                message = "similique";
                            }}),
                        }};
                        zone = "facilis";
                    }};;
                    selfLink = "vero";
                    target = new TargetConfiguration() {{
                        config = new ConfigFile() {{
                            content = "ducimus";
                        }};;
                        imports = new org.openapis.openapi.models.shared.ImportFile[]{{
                            add(new ImportFile() {{
                                content = "quibusdam";
                                name = "Earl Mosciski DVM";
                            }}),
                            add(new ImportFile() {{
                                content = "exercitationem";
                                name = "Louis Sauer";
                            }}),
                        }};
                    }};;
                    update = new DeploymentUpdate() {{
                        description = "iusto";
                        labels = new org.openapis.openapi.models.shared.DeploymentUpdateLabelEntry[]{{
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "ducimus";
                                value = "alias";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "officia";
                                value = "tempora";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "ipsam";
                                value = "ea";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "aspernatur";
                                value = "vel";
                            }}),
                        }};
                        manifest = "possimus";
                    }};;
                    updateTime = "magnam";
                }};;
                accessToken = "ratione";
                alt = AltEnum.MEDIA;
                callback = "laudantium";
                createPolicy = DeploymentmanagerDeploymentsUpdateCreatePolicyEnum.CREATE_OR_ACQUIRE;
                deletePolicy = DeploymentmanagerDeploymentsUpdateDeletePolicyEnum.DELETE;
                fields = "maiores";
                key = "quasi";
                oauthToken = "ex";
                prettyPrint = false;
                preview = false;
                quotaUser = "nulla";
                uploadType = "excepturi";
                uploadProtocol = "voluptatibus";
            }};            

            DeploymentmanagerDeploymentsUpdateResponse res = sdk.deployments.deploymentmanagerDeploymentsUpdate(req, new DeploymentmanagerDeploymentsUpdateSecurity() {{
                option1 = new DeploymentmanagerDeploymentsUpdateSecurityOption1("nostrum", "sapiente") {{
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
