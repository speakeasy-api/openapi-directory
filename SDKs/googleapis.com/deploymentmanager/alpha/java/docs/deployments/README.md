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
import org.openapis.openapi.models.shared.BasicAuth;
import org.openapis.openapi.models.shared.ConfigFile;
import org.openapis.openapi.models.shared.Credential;
import org.openapis.openapi.models.shared.Deployment;
import org.openapis.openapi.models.shared.DeploymentLabelEntry;
import org.openapis.openapi.models.shared.DeploymentOutputEntry;
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
import org.openapis.openapi.models.shared.ServiceAccount;
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
                    credential = new Credential() {{
                        basicAuth = new BasicAuth() {{
                            password = "soluta";
                            user = "dolorum";
                        }};;
                        serviceAccount = new ServiceAccount() {{
                            email = "Jacinthe_Pagac@yahoo.com";
                        }};;
                        useProjectDefault = false;
                    }};;
                    description = "necessitatibus";
                    fingerprint = "distinctio";
                    id = "asperiores";
                    insertTime = "nihil";
                    labels = new org.openapis.openapi.models.shared.DeploymentLabelEntry[]{{
                        add(new DeploymentLabelEntry() {{
                            key = "voluptate";
                            value = "id";
                        }}),
                    }};
                    manifest = "saepe";
                    name = "Judy Aufderhar";
                    operation = new Operation() {{
                        clientOperationId = "accusamus";
                        creationTimestamp = "ad";
                        description = "saepe";
                        endTime = "suscipit";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "provident";
                                    location = "minima";
                                    message = "repellendus";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "totam";
                                    location = "similique";
                                    message = "alias";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "at";
                                    location = "quaerat";
                                    message = "tempora";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "vel";
                        httpErrorStatusCode = 798047;
                        id = "officiis";
                        insertTime = "qui";
                        kind = "dolorum";
                        name = "Cory Pfeffer";
                        operationGroupId = "quisquam";
                        operationType = "tenetur";
                        progress = 229442;
                        region = "tempore";
                        selfLink = "accusamus";
                        startTime = "numquam";
                        status = OperationStatusEnum.PENDING;
                        statusMessage = "dolorem";
                        targetId = "sapiente";
                        targetLink = "totam";
                        user = "nihil";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.SCHEMA_VALIDATION_IGNORED;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "sed";
                                        value = "vel";
                                    }}),
                                }};
                                message = "libero";
                            }}),
                        }};
                        zone = "voluptas";
                    }};;
                    outputs = new org.openapis.openapi.models.shared.DeploymentOutputEntry[]{{
                        add(new DeploymentOutputEntry() {{
                            key = "quam";
                            value = "ipsum";
                        }}),
                        add(new DeploymentOutputEntry() {{
                            key = "incidunt";
                            value = "qui";
                        }}),
                        add(new DeploymentOutputEntry() {{
                            key = "cupiditate";
                            value = "maxime";
                        }}),
                    }};
                    selfLink = "pariatur";
                    target = new TargetConfiguration() {{
                        config = new ConfigFile() {{
                            content = "soluta";
                        }};;
                        imports = new org.openapis.openapi.models.shared.ImportFile[]{{
                            add(new ImportFile() {{
                                content = "laborum";
                                name = "Randall Cole";
                            }}),
                        }};
                    }};;
                    update = new DeploymentUpdate() {{
                        credential = new Credential() {{
                            basicAuth = new BasicAuth() {{
                                password = "facilis";
                                user = "aliquid";
                            }};;
                            serviceAccount = new ServiceAccount() {{
                                email = "Kennedy20@yahoo.com";
                            }};;
                            useProjectDefault = false;
                        }};;
                        description = "fugit";
                        labels = new org.openapis.openapi.models.shared.DeploymentUpdateLabelEntry[]{{
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "odio";
                                value = "sunt";
                            }}),
                        }};
                        manifest = "ullam";
                    }};;
                    updateTime = "nam";
                }};;
                accessToken = "hic";
                alt = AltEnum.JSON;
                callback = "cumque";
                createPolicy = DeploymentmanagerDeploymentsInsertCreatePolicyEnum.CREATE;
                fields = "nobis";
                key = "et";
                oauthToken = "saepe";
                prettyPrint = false;
                preview = false;
                quotaUser = "ipsum";
                uploadType = "veritatis";
                uploadProtocol = "nobis";
            }};            

            DeploymentmanagerDeploymentsInsertResponse res = sdk.deployments.deploymentmanagerDeploymentsInsert(req, new DeploymentmanagerDeploymentsInsertSecurity() {{
                option1 = new DeploymentmanagerDeploymentsInsertSecurityOption1("quos", "tempore") {{
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

            DeploymentmanagerDeploymentsListRequest req = new DeploymentmanagerDeploymentsListRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "dolore";
                fields = "labore";
                filter = "adipisci";
                key = "dolorum";
                maxResults = 100294L;
                oauthToken = "quae";
                orderBy = "aut";
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "consequatur";
                uploadProtocol = "est";
            }};            

            DeploymentmanagerDeploymentsListResponse res = sdk.deployments.deploymentmanagerDeploymentsList(req, new DeploymentmanagerDeploymentsListSecurity() {{
                option1 = new DeploymentmanagerDeploymentsListSecurityOption1("repellendus", "porro") {{
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
import org.openapis.openapi.models.shared.BasicAuth;
import org.openapis.openapi.models.shared.ConfigFile;
import org.openapis.openapi.models.shared.Credential;
import org.openapis.openapi.models.shared.Deployment;
import org.openapis.openapi.models.shared.DeploymentLabelEntry;
import org.openapis.openapi.models.shared.DeploymentOutputEntry;
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
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.TargetConfiguration;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsPatchRequest req = new DeploymentmanagerDeploymentsPatchRequest("doloribus", "ut") {{
                dollarXgafv = XgafvEnum.TWO;
                deployment1 = new Deployment() {{
                    credential = new Credential() {{
                        basicAuth = new BasicAuth() {{
                            password = "cupiditate";
                            user = "qui";
                        }};;
                        serviceAccount = new ServiceAccount() {{
                            email = "Jon_Kuhic@gmail.com";
                        }};;
                        useProjectDefault = false;
                    }};;
                    description = "quisquam";
                    fingerprint = "vero";
                    id = "omnis";
                    insertTime = "quis";
                    labels = new org.openapis.openapi.models.shared.DeploymentLabelEntry[]{{
                        add(new DeploymentLabelEntry() {{
                            key = "delectus";
                            value = "voluptate";
                        }}),
                    }};
                    manifest = "consectetur";
                    name = "Roman Kulas";
                    operation = new Operation() {{
                        clientOperationId = "quod";
                        creationTimestamp = "odio";
                        description = "similique";
                        endTime = "facilis";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "ducimus";
                                    location = "dolore";
                                    message = "quibusdam";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "illum";
                                    location = "sequi";
                                    message = "natus";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "impedit";
                                    location = "aut";
                                    message = "voluptatibus";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "exercitationem";
                                    location = "nulla";
                                    message = "fugit";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "porro";
                        httpErrorStatusCode = 981830;
                        id = "doloribus";
                        insertTime = "iusto";
                        kind = "eligendi";
                        name = "Linda Nikolaus";
                        operationGroupId = "ea";
                        operationType = "aspernatur";
                        progress = 428224;
                        region = "possimus";
                        selfLink = "magnam";
                        startTime = "ratione";
                        status = OperationStatusEnum.RUNNING;
                        statusMessage = "laudantium";
                        targetId = "dicta";
                        targetLink = "dolor";
                        user = "maiores";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.DISK_SIZE_LARGER_THAN_IMAGE_SIZE;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "excepturi";
                                        value = "voluptatibus";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "nostrum";
                                        value = "sapiente";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "quisquam";
                                        value = "saepe";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "ea";
                                        value = "impedit";
                                    }}),
                                }};
                                message = "corporis";
                            }}),
                        }};
                        zone = "veniam";
                    }};;
                    outputs = new org.openapis.openapi.models.shared.DeploymentOutputEntry[]{{
                        add(new DeploymentOutputEntry() {{
                            key = "inventore";
                            value = "magnam";
                        }}),
                        add(new DeploymentOutputEntry() {{
                            key = "ea";
                            value = "quo";
                        }}),
                    }};
                    selfLink = "consectetur";
                    target = new TargetConfiguration() {{
                        config = new ConfigFile() {{
                            content = "recusandae";
                        }};;
                        imports = new org.openapis.openapi.models.shared.ImportFile[]{{
                            add(new ImportFile() {{
                                content = "minima";
                                name = "Mr. Elsa Reinger";
                            }}),
                        }};
                    }};;
                    update = new DeploymentUpdate() {{
                        credential = new Credential() {{
                            basicAuth = new BasicAuth() {{
                                password = "impedit";
                                user = "aliquam";
                            }};;
                            serviceAccount = new ServiceAccount() {{
                                email = "Shany8@gmail.com";
                            }};;
                            useProjectDefault = false;
                        }};;
                        description = "dolorum";
                        labels = new org.openapis.openapi.models.shared.DeploymentUpdateLabelEntry[]{{
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "placeat";
                                value = "velit";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "eum";
                                value = "autem";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "nobis";
                                value = "quas";
                            }}),
                        }};
                        manifest = "assumenda";
                    }};;
                    updateTime = "nulla";
                }};;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "quasi";
                createPolicy = DeploymentmanagerDeploymentsPatchCreatePolicyEnum.CREATE_OR_ACQUIRE;
                deletePolicy = DeploymentmanagerDeploymentsPatchDeletePolicyEnum.DELETE;
                fields = "explicabo";
                key = "provident";
                oauthToken = "ipsa";
                prettyPrint = false;
                preview = false;
                quotaUser = "molestiae";
                uploadType = "magnam";
                uploadProtocol = "odio";
            }};            

            DeploymentmanagerDeploymentsPatchResponse res = sdk.deployments.deploymentmanagerDeploymentsPatch(req, new DeploymentmanagerDeploymentsPatchSecurity() {{
                option1 = new DeploymentmanagerDeploymentsPatchSecurityOption1("eius", "esse") {{
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

            DeploymentmanagerDeploymentsSetIamPolicyRequest req = new DeploymentmanagerDeploymentsSetIamPolicyRequest("esse", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            condition = new Expr() {{
                                description = "quidem";
                                expression = "fugiat";
                                location = "ut";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("assumenda"),
                                add("eos"),
                            }};
                            role = "praesentium";
                        }}),
                        add(new Binding() {{
                            condition = new Expr() {{
                                description = "quisquam";
                                expression = "veritatis";
                                location = "ipsa";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("neque"),
                                add("quo"),
                                add("illum"),
                            }};
                            role = "quo";
                        }}),
                    }};
                    etag = "fuga";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ab"),
                                            add("cupiditate"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "tempora";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aspernatur"),
                                            add("sequi"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("recusandae"),
                                            add("aperiam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dignissimos"),
                                            add("inventore"),
                                            add("nihil"),
                                            add("totam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("odio"),
                                            add("occaecati"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "sapiente";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "deserunt";
                                    expression = "molestiae";
                                    location = "accusantium";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("quas"),
                                    add("praesentium"),
                                }};
                                role = "consequuntur";
                            }}),
                        }};
                        etag = "deleniti";
                        version = 143829;
                    }};;
                }};;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "incidunt";
                fields = "atque";
                key = "explicabo";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "fugit";
                uploadProtocol = "sapiente";
            }};            

            DeploymentmanagerDeploymentsSetIamPolicyResponse res = sdk.deployments.deploymentmanagerDeploymentsSetIamPolicy(req, new DeploymentmanagerDeploymentsSetIamPolicySecurity() {{
                option1 = new DeploymentmanagerDeploymentsSetIamPolicySecurityOption1("consequuntur", "ratione") {{
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

            DeploymentmanagerDeploymentsStopRequest req = new DeploymentmanagerDeploymentsStopRequest("explicabo", "saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                deploymentsStopRequest = new DeploymentsStopRequest() {{
                    fingerprint = "atque";
                }};;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "eveniet";
                fields = "accusamus";
                key = "veritatis";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "nam";
                uploadProtocol = "vero";
            }};            

            DeploymentmanagerDeploymentsStopResponse res = sdk.deployments.deploymentmanagerDeploymentsStop(req, new DeploymentmanagerDeploymentsStopSecurity() {{
                option1 = new DeploymentmanagerDeploymentsStopSecurityOption1("aliquid", "quasi") {{
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

            DeploymentmanagerDeploymentsTestIamPermissionsRequest req = new DeploymentmanagerDeploymentsTestIamPermissionsRequest("saepe", "vel") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("rerum"),
                        add("occaecati"),
                    }};
                }};;
                accessToken = "minima";
                alt = AltEnum.PROTO;
                callback = "eligendi";
                fields = "sit";
                key = "culpa";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "cumque";
                uploadProtocol = "consequuntur";
            }};            

            DeploymentmanagerDeploymentsTestIamPermissionsResponse res = sdk.deployments.deploymentmanagerDeploymentsTestIamPermissions(req, new DeploymentmanagerDeploymentsTestIamPermissionsSecurity() {{
                option1 = new DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1("consequatur", "minus") {{
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
import org.openapis.openapi.models.shared.BasicAuth;
import org.openapis.openapi.models.shared.ConfigFile;
import org.openapis.openapi.models.shared.Credential;
import org.openapis.openapi.models.shared.Deployment;
import org.openapis.openapi.models.shared.DeploymentLabelEntry;
import org.openapis.openapi.models.shared.DeploymentOutputEntry;
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
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.TargetConfiguration;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsUpdateRequest req = new DeploymentmanagerDeploymentsUpdateRequest("quaerat", "sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                deployment1 = new Deployment() {{
                    credential = new Credential() {{
                        basicAuth = new BasicAuth() {{
                            password = "esse";
                            user = "blanditiis";
                        }};;
                        serviceAccount = new ServiceAccount() {{
                            email = "Vella.Stiedemann@yahoo.com";
                        }};;
                        useProjectDefault = false;
                    }};;
                    description = "quasi";
                    fingerprint = "a";
                    id = "error";
                    insertTime = "sint";
                    labels = new org.openapis.openapi.models.shared.DeploymentLabelEntry[]{{
                        add(new DeploymentLabelEntry() {{
                            key = "possimus";
                            value = "quia";
                        }}),
                        add(new DeploymentLabelEntry() {{
                            key = "eveniet";
                            value = "asperiores";
                        }}),
                        add(new DeploymentLabelEntry() {{
                            key = "facere";
                            value = "veritatis";
                        }}),
                        add(new DeploymentLabelEntry() {{
                            key = "consequuntur";
                            value = "quasi";
                        }}),
                    }};
                    manifest = "similique";
                    name = "Dr. Gene Wiegand";
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
                    outputs = new org.openapis.openapi.models.shared.DeploymentOutputEntry[]{{
                        add(new DeploymentOutputEntry() {{
                            key = "non";
                            value = "voluptatem";
                        }}),
                        add(new DeploymentOutputEntry() {{
                            key = "dolor";
                            value = "occaecati";
                        }}),
                        add(new DeploymentOutputEntry() {{
                            key = "numquam";
                            value = "impedit";
                        }}),
                    }};
                    selfLink = "explicabo";
                    target = new TargetConfiguration() {{
                        config = new ConfigFile() {{
                            content = "voluptas";
                        }};;
                        imports = new org.openapis.openapi.models.shared.ImportFile[]{{
                            add(new ImportFile() {{
                                content = "dignissimos";
                                name = "Elisa Mosciski";
                            }}),
                        }};
                    }};;
                    update = new DeploymentUpdate() {{
                        credential = new Credential() {{
                            basicAuth = new BasicAuth() {{
                                password = "voluptas";
                                user = "asperiores";
                            }};;
                            serviceAccount = new ServiceAccount() {{
                                email = "Haleigh83@gmail.com";
                            }};;
                            useProjectDefault = false;
                        }};;
                        description = "officia";
                        labels = new org.openapis.openapi.models.shared.DeploymentUpdateLabelEntry[]{{
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "dignissimos";
                                value = "officia";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "asperiores";
                                value = "nemo";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "quae";
                                value = "quaerat";
                            }}),
                            add(new DeploymentUpdateLabelEntry() {{
                                key = "porro";
                                value = "quod";
                            }}),
                        }};
                        manifest = "labore";
                    }};;
                    updateTime = "ab";
                }};;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "id";
                createPolicy = DeploymentmanagerDeploymentsUpdateCreatePolicyEnum.ACQUIRE;
                deletePolicy = DeploymentmanagerDeploymentsUpdateDeletePolicyEnum.DELETE;
                fields = "culpa";
                key = "est";
                oauthToken = "recusandae";
                prettyPrint = false;
                preview = false;
                quotaUser = "totam";
                uploadType = "fugiat";
                uploadProtocol = "vel";
            }};            

            DeploymentmanagerDeploymentsUpdateResponse res = sdk.deployments.deploymentmanagerDeploymentsUpdate(req, new DeploymentmanagerDeploymentsUpdateSecurity() {{
                option1 = new DeploymentmanagerDeploymentsUpdateSecurityOption1("ducimus", "quos") {{
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
