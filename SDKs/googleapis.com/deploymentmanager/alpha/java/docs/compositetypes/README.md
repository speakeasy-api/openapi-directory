# compositeTypes

### Available Operations

* [deploymentmanagerCompositeTypesDelete](#deploymentmanagercompositetypesdelete) - Deletes a composite type.
* [deploymentmanagerCompositeTypesGet](#deploymentmanagercompositetypesget) - Gets information about a specific composite type.
* [deploymentmanagerCompositeTypesInsert](#deploymentmanagercompositetypesinsert) - Creates a composite type.
* [deploymentmanagerCompositeTypesList](#deploymentmanagercompositetypeslist) - Lists all composite types for Deployment Manager.
* [deploymentmanagerCompositeTypesPatch](#deploymentmanagercompositetypespatch) - Patches a composite type.
* [deploymentmanagerCompositeTypesUpdate](#deploymentmanagercompositetypesupdate) - Updates a composite type.

## deploymentmanagerCompositeTypesDelete

Deletes a composite type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerCompositeTypesDeleteRequest req = new DeploymentmanagerCompositeTypesDeleteRequest("debitis", "ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            DeploymentmanagerCompositeTypesDeleteResponse res = sdk.compositeTypes.deploymentmanagerCompositeTypesDelete(req, new DeploymentmanagerCompositeTypesDeleteSecurity() {{
                option1 = new DeploymentmanagerCompositeTypesDeleteSecurityOption1("recusandae", "temporibus") {{
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

## deploymentmanagerCompositeTypesGet

Gets information about a specific composite type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesGetRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesGetResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesGetSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesGetSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesGetSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesGetSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerCompositeTypesGetRequest req = new DeploymentmanagerCompositeTypesGetRequest("ab", "quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "repellendus";
                key = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            DeploymentmanagerCompositeTypesGetResponse res = sdk.compositeTypes.deploymentmanagerCompositeTypesGet(req, new DeploymentmanagerCompositeTypesGetSecurity() {{
                option1 = new DeploymentmanagerCompositeTypesGetSecurityOption1("maiores", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.compositeType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deploymentmanagerCompositeTypesInsert

Creates a composite type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesInsertRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesInsertResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesInsertSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesInsertSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompositeType;
import org.openapis.openapi.models.shared.CompositeTypeLabelEntry;
import org.openapis.openapi.models.shared.CompositeTypeStatusEnum;
import org.openapis.openapi.models.shared.ImportFile;
import org.openapis.openapi.models.shared.Operation;
import org.openapis.openapi.models.shared.OperationError;
import org.openapis.openapi.models.shared.OperationErrorErrors;
import org.openapis.openapi.models.shared.OperationStatusEnum;
import org.openapis.openapi.models.shared.OperationWarnings;
import org.openapis.openapi.models.shared.OperationWarningsCodeEnum;
import org.openapis.openapi.models.shared.OperationWarningsData;
import org.openapis.openapi.models.shared.TemplateContents;
import org.openapis.openapi.models.shared.TemplateContentsInterpreterEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerCompositeTypesInsertRequest req = new DeploymentmanagerCompositeTypesInsertRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                compositeType = new CompositeType() {{
                    description = "esse";
                    id = "totam";
                    insertTime = "porro";
                    labels = new org.openapis.openapi.models.shared.CompositeTypeLabelEntry[]{{
                        add(new CompositeTypeLabelEntry() {{
                            key = "dicta";
                            value = "nam";
                        }}),
                        add(new CompositeTypeLabelEntry() {{
                            key = "officia";
                            value = "occaecati";
                        }}),
                        add(new CompositeTypeLabelEntry() {{
                            key = "fugit";
                            value = "deleniti";
                        }}),
                    }};
                    name = "Ms. Earnest Lebsack";
                    operation = new Operation() {{
                        clientOperationId = "modi";
                        creationTimestamp = "qui";
                        description = "impedit";
                        endTime = "cum";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "ipsum";
                                    location = "excepturi";
                                    message = "aspernatur";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "perferendis";
                                    location = "ad";
                                    message = "natus";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "sed";
                        httpErrorStatusCode = 612096;
                        id = "dolor";
                        insertTime = "natus";
                        kind = "laboriosam";
                        name = "Elias Parker";
                        operationGroupId = "iste";
                        operationType = "iure";
                        progress = 902349;
                        region = "quidem";
                        selfLink = "architecto";
                        startTime = "ipsa";
                        status = OperationStatusEnum.DONE;
                        statusMessage = "est";
                        targetId = "mollitia";
                        targetLink = "laborum";
                        user = "dolores";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.REQUIRED_TOS_AGREEMENT;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "nobis";
                                        value = "enim";
                                    }}),
                                }};
                                message = "omnis";
                            }}),
                        }};
                        zone = "nemo";
                    }};;
                    selfLink = "minima";
                    status = CompositeTypeStatusEnum.EXPERIMENTAL;
                    templateContents = new TemplateContents() {{
                        imports = new org.openapis.openapi.models.shared.ImportFile[]{{
                            add(new ImportFile() {{
                                content = "iure";
                                name = "Miss Aubrey Williamson";
                            }}),
                        }};
                        interpreter = TemplateContentsInterpreterEnum.PYTHON;
                        mainTemplate = "consequuntur";
                        schema = "repellat";
                        template = "mollitia";
                    }};;
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "quam";
                key = "molestiae";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "quia";
                uploadProtocol = "quis";
            }};            

            DeploymentmanagerCompositeTypesInsertResponse res = sdk.compositeTypes.deploymentmanagerCompositeTypesInsert(req, new DeploymentmanagerCompositeTypesInsertSecurity() {{
                option1 = new DeploymentmanagerCompositeTypesInsertSecurityOption1("vitae", "laborum") {{
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

## deploymentmanagerCompositeTypesList

Lists all composite types for Deployment Manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesListRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesListResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesListSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesListSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesListSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesListSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerCompositeTypesListRequest req = new DeploymentmanagerCompositeTypesListRequest("animi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "tenetur";
                filter = "ipsam";
                key = "id";
                maxResults = 820994L;
                oauthToken = "aut";
                orderBy = "quasi";
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "laborum";
                uploadProtocol = "quasi";
            }};            

            DeploymentmanagerCompositeTypesListResponse res = sdk.compositeTypes.deploymentmanagerCompositeTypesList(req, new DeploymentmanagerCompositeTypesListSecurity() {{
                option1 = new DeploymentmanagerCompositeTypesListSecurityOption1("reiciendis", "voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.compositeTypesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deploymentmanagerCompositeTypesPatch

Patches a composite type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesPatchRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesPatchResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesPatchSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesPatchSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompositeType;
import org.openapis.openapi.models.shared.CompositeTypeLabelEntry;
import org.openapis.openapi.models.shared.CompositeTypeStatusEnum;
import org.openapis.openapi.models.shared.ImportFile;
import org.openapis.openapi.models.shared.Operation;
import org.openapis.openapi.models.shared.OperationError;
import org.openapis.openapi.models.shared.OperationErrorErrors;
import org.openapis.openapi.models.shared.OperationStatusEnum;
import org.openapis.openapi.models.shared.OperationWarnings;
import org.openapis.openapi.models.shared.OperationWarningsCodeEnum;
import org.openapis.openapi.models.shared.OperationWarningsData;
import org.openapis.openapi.models.shared.TemplateContents;
import org.openapis.openapi.models.shared.TemplateContentsInterpreterEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerCompositeTypesPatchRequest req = new DeploymentmanagerCompositeTypesPatchRequest("vero", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                compositeType1 = new CompositeType() {{
                    description = "voluptatibus";
                    id = "ipsa";
                    insertTime = "omnis";
                    labels = new org.openapis.openapi.models.shared.CompositeTypeLabelEntry[]{{
                        add(new CompositeTypeLabelEntry() {{
                            key = "cum";
                            value = "perferendis";
                        }}),
                        add(new CompositeTypeLabelEntry() {{
                            key = "doloremque";
                            value = "reprehenderit";
                        }}),
                    }};
                    name = "Shawna Carter";
                    operation = new Operation() {{
                        clientOperationId = "iusto";
                        creationTimestamp = "dicta";
                        description = "harum";
                        endTime = "enim";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "commodi";
                                    location = "repudiandae";
                                    message = "quae";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "ipsum";
                                    location = "quidem";
                                    message = "molestias";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "excepturi";
                                    location = "pariatur";
                                    message = "modi";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "praesentium";
                                    location = "rem";
                                    message = "voluptates";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "quasi";
                        httpErrorStatusCode = 921158;
                        id = "sint";
                        insertTime = "veritatis";
                        kind = "itaque";
                        name = "Erin Altenwerth";
                        operationGroupId = "explicabo";
                        operationType = "deserunt";
                        progress = 716327;
                        region = "quibusdam";
                        selfLink = "labore";
                        startTime = "modi";
                        status = OperationStatusEnum.PENDING;
                        statusMessage = "aliquid";
                        targetId = "cupiditate";
                        targetLink = "quos";
                        user = "perferendis";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.DEPRECATED_TYPE_USED;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "alias";
                                        value = "fugit";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "dolorum";
                                        value = "excepturi";
                                    }}),
                                }};
                                message = "tempora";
                            }}),
                        }};
                        zone = "facilis";
                    }};;
                    selfLink = "tempore";
                    status = CompositeTypeStatusEnum.DEPRECATED;
                    templateContents = new TemplateContents() {{
                        imports = new org.openapis.openapi.models.shared.ImportFile[]{{
                            add(new ImportFile() {{
                                content = "eum";
                                name = "Sheri Mayer";
                            }}),
                            add(new ImportFile() {{
                                content = "necessitatibus";
                                name = "Luke Fadel";
                            }}),
                            add(new ImportFile() {{
                                content = "dolorum";
                                name = "Arlene Stamm";
                            }}),
                            add(new ImportFile() {{
                                content = "dicta";
                                name = "Blanca Schulist";
                            }}),
                        }};
                        interpreter = TemplateContentsInterpreterEnum.JINJA;
                        mainTemplate = "accusamus";
                        schema = "non";
                        template = "occaecati";
                    }};;
                }};;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "quidem";
                key = "provident";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "blanditiis";
                uploadProtocol = "deleniti";
            }};            

            DeploymentmanagerCompositeTypesPatchResponse res = sdk.compositeTypes.deploymentmanagerCompositeTypesPatch(req, new DeploymentmanagerCompositeTypesPatchSecurity() {{
                option1 = new DeploymentmanagerCompositeTypesPatchSecurityOption1("sapiente", "amet") {{
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

## deploymentmanagerCompositeTypesUpdate

Updates a composite type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesUpdateRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesUpdateResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesUpdateSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompositeType;
import org.openapis.openapi.models.shared.CompositeTypeLabelEntry;
import org.openapis.openapi.models.shared.CompositeTypeStatusEnum;
import org.openapis.openapi.models.shared.ImportFile;
import org.openapis.openapi.models.shared.Operation;
import org.openapis.openapi.models.shared.OperationError;
import org.openapis.openapi.models.shared.OperationErrorErrors;
import org.openapis.openapi.models.shared.OperationStatusEnum;
import org.openapis.openapi.models.shared.OperationWarnings;
import org.openapis.openapi.models.shared.OperationWarningsCodeEnum;
import org.openapis.openapi.models.shared.OperationWarningsData;
import org.openapis.openapi.models.shared.TemplateContents;
import org.openapis.openapi.models.shared.TemplateContentsInterpreterEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerCompositeTypesUpdateRequest req = new DeploymentmanagerCompositeTypesUpdateRequest("deserunt", "nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                compositeType1 = new CompositeType() {{
                    description = "natus";
                    id = "omnis";
                    insertTime = "molestiae";
                    labels = new org.openapis.openapi.models.shared.CompositeTypeLabelEntry[]{{
                        add(new CompositeTypeLabelEntry() {{
                            key = "nihil";
                            value = "magnam";
                        }}),
                    }};
                    name = "Alfonso Green";
                    operation = new Operation() {{
                        clientOperationId = "natus";
                        creationTimestamp = "nobis";
                        description = "eum";
                        endTime = "vero";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "architecto";
                                    location = "magnam";
                                    message = "et";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "excepturi";
                        httpErrorStatusCode = 354047;
                        id = "provident";
                        insertTime = "quos";
                        kind = "sint";
                        name = "Angie Wisozk";
                        operationGroupId = "eum";
                        operationType = "dolor";
                        progress = 896547;
                        region = "odit";
                        selfLink = "nemo";
                        startTime = "quasi";
                        status = OperationStatusEnum.RUNNING;
                        statusMessage = "doloribus";
                        targetId = "debitis";
                        targetLink = "eius";
                        user = "maxime";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.SCHEMA_VALIDATION_IGNORED;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "architecto";
                                        value = "architecto";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "repudiandae";
                                        value = "ullam";
                                    }}),
                                }};
                                message = "expedita";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.SINGLE_INSTANCE_PROPERTY_TEMPLATE;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "quibusdam";
                                        value = "sed";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "saepe";
                                        value = "pariatur";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "accusantium";
                                        value = "consequuntur";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "praesentium";
                                        value = "natus";
                                    }}),
                                }};
                                message = "magni";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.NEXT_HOP_ADDRESS_NOT_ASSIGNED;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "illum";
                                        value = "pariatur";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "maxime";
                                        value = "ea";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "excepturi";
                                        value = "odit";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "ea";
                                        value = "accusantium";
                                    }}),
                                }};
                                message = "ab";
                            }}),
                        }};
                        zone = "maiores";
                    }};;
                    selfLink = "quidem";
                    status = CompositeTypeStatusEnum.DEPRECATED;
                    templateContents = new TemplateContents() {{
                        imports = new org.openapis.openapi.models.shared.ImportFile[]{{
                            add(new ImportFile() {{
                                content = "autem";
                                name = "Gary Streich";
                            }}),
                            add(new ImportFile() {{
                                content = "perferendis";
                                name = "Vincent Anderson";
                            }}),
                        }};
                        interpreter = TemplateContentsInterpreterEnum.JINJA;
                        mainTemplate = "libero";
                        schema = "nobis";
                        template = "dolores";
                    }};;
                }};;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "dignissimos";
                fields = "eaque";
                key = "quis";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "perferendis";
                uploadProtocol = "dolores";
            }};            

            DeploymentmanagerCompositeTypesUpdateResponse res = sdk.compositeTypes.deploymentmanagerCompositeTypesUpdate(req, new DeploymentmanagerCompositeTypesUpdateSecurity() {{
                option1 = new DeploymentmanagerCompositeTypesUpdateSecurityOption1("minus", "quam") {{
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
