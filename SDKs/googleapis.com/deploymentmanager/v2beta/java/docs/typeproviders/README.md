# typeProviders

### Available Operations

* [deploymentmanagerTypeProvidersDelete](#deploymentmanagertypeprovidersdelete) - Deletes a type provider.
* [deploymentmanagerTypeProvidersGet](#deploymentmanagertypeprovidersget) - Gets information about a specific type provider.
* [deploymentmanagerTypeProvidersGetType](#deploymentmanagertypeprovidersgettype) - Gets a type info for a type provided by a TypeProvider.
* [deploymentmanagerTypeProvidersInsert](#deploymentmanagertypeprovidersinsert) - Creates a type provider.
* [deploymentmanagerTypeProvidersList](#deploymentmanagertypeproviderslist) - Lists all resource type providers for Deployment Manager.
* [deploymentmanagerTypeProvidersListTypes](#deploymentmanagertypeproviderslisttypes) - Lists all the type info for a TypeProvider.
* [deploymentmanagerTypeProvidersPatch](#deploymentmanagertypeproviderspatch) - Patches a type provider.
* [deploymentmanagerTypeProvidersUpdate](#deploymentmanagertypeprovidersupdate) - Updates a type provider.

## deploymentmanagerTypeProvidersDelete

Deletes a type provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersDeleteRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersDeleteResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersDeleteSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerTypeProvidersDeleteRequest req = new DeploymentmanagerTypeProvidersDeleteRequest("rerum", "sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "voluptate";
                key = "expedita";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "dolore";
                uploadProtocol = "laborum";
            }};            

            DeploymentmanagerTypeProvidersDeleteResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersDelete(req, new DeploymentmanagerTypeProvidersDeleteSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersDeleteSecurityOption1("sed", "in") {{
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

## deploymentmanagerTypeProvidersGet

Gets information about a specific type provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersGetRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersGetResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersGetSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersGetSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersGetSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersGetSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerTypeProvidersGetRequest req = new DeploymentmanagerTypeProvidersGetRequest("commodi", "quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "architecto";
                fields = "suscipit";
                key = "sapiente";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "illo";
                uploadType = "reiciendis";
                uploadProtocol = "perferendis";
            }};            

            DeploymentmanagerTypeProvidersGetResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersGet(req, new DeploymentmanagerTypeProvidersGetSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersGetSecurityOption1("corrupti", "maiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.typeProvider != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deploymentmanagerTypeProvidersGetType

Gets a type info for a type provided by a TypeProvider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersGetTypeRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersGetTypeResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersGetTypeSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersGetTypeSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersGetTypeSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersGetTypeSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersGetTypeSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerTypeProvidersGetTypeRequest req = new DeploymentmanagerTypeProvidersGetTypeRequest("incidunt", "sed", "provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "occaecati";
                key = "quos";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "tempora";
                uploadProtocol = "voluptate";
            }};            

            DeploymentmanagerTypeProvidersGetTypeResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersGetType(req, new DeploymentmanagerTypeProvidersGetTypeSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersGetTypeSecurityOption1("reiciendis", "ex") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.typeInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deploymentmanagerTypeProvidersInsert

Creates a type provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersInsertRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersInsertResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersInsertSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersInsertSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AsyncOptions;
import org.openapis.openapi.models.shared.BasicAuth;
import org.openapis.openapi.models.shared.CollectionOverride;
import org.openapis.openapi.models.shared.Credential;
import org.openapis.openapi.models.shared.Diagnostic;
import org.openapis.openapi.models.shared.DiagnosticLevelEnum;
import org.openapis.openapi.models.shared.InputMapping;
import org.openapis.openapi.models.shared.InputMappingLocationEnum;
import org.openapis.openapi.models.shared.Operation;
import org.openapis.openapi.models.shared.OperationError;
import org.openapis.openapi.models.shared.OperationErrorErrors;
import org.openapis.openapi.models.shared.OperationStatusEnum;
import org.openapis.openapi.models.shared.OperationWarnings;
import org.openapis.openapi.models.shared.OperationWarningsCodeEnum;
import org.openapis.openapi.models.shared.OperationWarningsData;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.PollingOptions;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.TypeProvider;
import org.openapis.openapi.models.shared.TypeProviderLabelEntry;
import org.openapis.openapi.models.shared.ValidationOptions;
import org.openapis.openapi.models.shared.ValidationOptionsSchemaValidationEnum;
import org.openapis.openapi.models.shared.ValidationOptionsUndeclaredPropertiesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerTypeProvidersInsertRequest req = new DeploymentmanagerTypeProvidersInsertRequest("sit") {{
                dollarXgafv = XgafvEnum.ONE;
                typeProvider = new TypeProvider() {{
                    collectionOverrides = new org.openapis.openapi.models.shared.CollectionOverride[]{{
                        add(new CollectionOverride() {{
                            collection = "praesentium";
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "quaerat";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "ipsam";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "rem";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                            }};
                                            failCondition = "nobis";
                                            finishCondition = "error";
                                            pollingLink = "veniam";
                                            targetLink = "minima";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "recusandae";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "nulla";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "aperiam";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "numquam";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "in";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                            }};
                                            failCondition = "beatae";
                                            finishCondition = "laudantium";
                                            pollingLink = "exercitationem";
                                            targetLink = "praesentium";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "cum";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "dolorum";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "error";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                            }};
                                            failCondition = "expedita";
                                            finishCondition = "debitis";
                                            pollingLink = "neque";
                                            targetLink = "dolorum";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "officia";
                                        location = InputMappingLocationEnum.BODY;
                                        methodMatch = "corrupti";
                                        value = "accusamus";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "tempora";
                                        location = InputMappingLocationEnum.QUERY;
                                        methodMatch = "fugit";
                                        value = "ut";
                                    }}),
                                }};
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.FAIL;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.UNKNOWN;
                                }};
                                virtualProperties = "culpa";
                            }};
                        }}),
                        add(new CollectionOverride() {{
                            collection = "expedita";
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "consequatur";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "ipsam";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "voluptatum";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                            }};
                                            failCondition = "repudiandae";
                                            finishCondition = "corporis";
                                            pollingLink = "et";
                                            targetLink = "blanditiis";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "ex";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "sit";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                            }};
                                            failCondition = "nostrum";
                                            finishCondition = "saepe";
                                            pollingLink = "error";
                                            targetLink = "consequatur";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "reiciendis";
                                        location = InputMappingLocationEnum.PATH;
                                        methodMatch = "harum";
                                        value = "dicta";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "architecto";
                                        location = InputMappingLocationEnum.QUERY;
                                        methodMatch = "labore";
                                        value = "quidem";
                                    }}),
                                }};
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.IGNORE_WITH_WARNINGS;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.IGNORE_WITH_WARNINGS;
                                }};
                                virtualProperties = "nam";
                            }};
                        }}),
                        add(new CollectionOverride() {{
                            collection = "tenetur";
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "alias";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "deserunt";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                            }};
                                            failCondition = "unde";
                                            finishCondition = "reiciendis";
                                            pollingLink = "provident";
                                            targetLink = "repellendus";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "delectus";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "perferendis";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "quidem";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "facere";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "praesentium";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                            }};
                                            failCondition = "veniam";
                                            finishCondition = "voluptatem";
                                            pollingLink = "quisquam";
                                            targetLink = "repudiandae";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "atque";
                                        location = InputMappingLocationEnum.QUERY;
                                        methodMatch = "asperiores";
                                        value = "totam";
                                    }}),
                                }};
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.IGNORE;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.IGNORE_WITH_WARNINGS;
                                }};
                                virtualProperties = "maxime";
                            }};
                        }}),
                        add(new CollectionOverride() {{
                            collection = "et";
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "amet";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "ea";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "error";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "officiis";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "natus";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                            }};
                                            failCondition = "aspernatur";
                                            finishCondition = "ex";
                                            pollingLink = "maiores";
                                            targetLink = "corrupti";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "at";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "blanditiis";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "repudiandae";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "atque";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                            }};
                                            failCondition = "recusandae";
                                            finishCondition = "dolorum";
                                            pollingLink = "repellendus";
                                            targetLink = "labore";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "doloremque";
                                        location = InputMappingLocationEnum.HEADER;
                                        methodMatch = "dicta";
                                        value = "accusantium";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "beatae";
                                        location = InputMappingLocationEnum.UNKNOWN;
                                        methodMatch = "enim";
                                        value = "laboriosam";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "velit";
                                        location = InputMappingLocationEnum.HEADER;
                                        methodMatch = "molestias";
                                        value = "magnam";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "saepe";
                                        location = InputMappingLocationEnum.UNKNOWN;
                                        methodMatch = "occaecati";
                                        value = "officiis";
                                    }}),
                                }};
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.IGNORE_WITH_WARNINGS;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.IGNORE;
                                }};
                                virtualProperties = "adipisci";
                            }};
                        }}),
                    }};
                    credential = new Credential() {{
                        basicAuth = new BasicAuth() {{
                            password = "eveniet";
                            user = "occaecati";
                        }};;
                        serviceAccount = new ServiceAccount() {{
                            email = "Buster.Olson@gmail.com";
                        }};;
                        useProjectDefault = false;
                    }};;
                    customCertificateAuthorityRoots = new String[]{{
                        add("illo"),
                        add("corporis"),
                        add("quidem"),
                    }};
                    description = "eveniet";
                    descriptorUrl = "non";
                    id = "vero";
                    insertTime = "doloremque";
                    labels = new org.openapis.openapi.models.shared.TypeProviderLabelEntry[]{{
                        add(new TypeProviderLabelEntry() {{
                            key = "ipsa";
                            value = "totam";
                        }}),
                        add(new TypeProviderLabelEntry() {{
                            key = "quae";
                            value = "molestiae";
                        }}),
                    }};
                    name = "Clarence Ritchie";
                    operation = new Operation() {{
                        clientOperationId = "ratione";
                        creationTimestamp = "laborum";
                        description = "distinctio";
                        endTime = "voluptatum";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "aliquam";
                                    location = "ad";
                                    message = "repellat";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "alias";
                                    location = "corporis";
                                    message = "perspiciatis";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "nihil";
                                    location = "mollitia";
                                    message = "voluptas";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "alias";
                        httpErrorStatusCode = 979527;
                        id = "reiciendis";
                        insertTime = "dolores";
                        kind = "id";
                        name = "Joanne Parisian DVM";
                        operationGroupId = "omnis";
                        operationType = "quaerat";
                        progress = 477646;
                        region = "ex";
                        selfLink = "ut";
                        startTime = "culpa";
                        status = OperationStatusEnum.PENDING;
                        statusMessage = "debitis";
                        targetId = "laudantium";
                        targetLink = "eum";
                        user = "nemo";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.SINGLE_INSTANCE_PROPERTY_TEMPLATE;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "quis";
                                        value = "eum";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "reiciendis";
                                        value = "provident";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "aspernatur";
                                        value = "ullam";
                                    }}),
                                }};
                                message = "quasi";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.MISSING_TYPE_DEPENDENCY;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "mollitia";
                                        value = "provident";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "possimus";
                                        value = "animi";
                                    }}),
                                }};
                                message = "ex";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.DISK_SIZE_LARGER_THAN_IMAGE_SIZE;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "repellat";
                                        value = "doloribus";
                                    }}),
                                }};
                                message = "ullam";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.SINGLE_INSTANCE_PROPERTY_TEMPLATE;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "earum";
                                        value = "officia";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "laborum";
                                        value = "placeat";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "modi";
                                        value = "voluptatibus";
                                    }}),
                                }};
                                message = "molestias";
                            }}),
                        }};
                        zone = "officiis";
                    }};;
                    options = new Options() {{
                        asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                            add(new AsyncOptions() {{
                                methodMatch = "cumque";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "rerum";
                                            level = DiagnosticLevelEnum.INFORMATION;
                                        }}),
                                    }};
                                    failCondition = "quis";
                                    finishCondition = "inventore";
                                    pollingLink = "fugit";
                                    targetLink = "cumque";
                                }};
                            }}),
                            add(new AsyncOptions() {{
                                methodMatch = "quae";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "velit";
                                            level = DiagnosticLevelEnum.UNKNOWN;
                                        }}),
                                    }};
                                    failCondition = "eum";
                                    finishCondition = "eius";
                                    pollingLink = "rem";
                                    targetLink = "at";
                                }};
                            }}),
                            add(new AsyncOptions() {{
                                methodMatch = "impedit";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "sapiente";
                                            level = DiagnosticLevelEnum.INFORMATION;
                                        }}),
                                    }};
                                    failCondition = "dicta";
                                    finishCondition = "minima";
                                    pollingLink = "beatae";
                                    targetLink = "cupiditate";
                                }};
                            }}),
                            add(new AsyncOptions() {{
                                methodMatch = "provident";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "soluta";
                                            level = DiagnosticLevelEnum.ERROR;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "illum";
                                            level = DiagnosticLevelEnum.UNKNOWN;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "earum";
                                            level = DiagnosticLevelEnum.WARNING;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "maiores";
                                            level = DiagnosticLevelEnum.ERROR;
                                        }}),
                                    }};
                                    failCondition = "aliquid";
                                    finishCondition = "porro";
                                    pollingLink = "suscipit";
                                    targetLink = "dolorem";
                                }};
                            }}),
                        }};
                        inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                            add(new InputMapping() {{
                                fieldName = "cumque";
                                location = InputMappingLocationEnum.BODY;
                                methodMatch = "ratione";
                                value = "animi";
                            }}),
                        }};
                        validationOptions = new ValidationOptions() {{
                            schemaValidation = ValidationOptionsSchemaValidationEnum.FAIL;
                            undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.FAIL;
                        }};;
                        virtualProperties = "consequatur";
                    }};;
                    selfLink = "quasi";
                }};;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "occaecati";
                key = "suscipit";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "magni";
                uploadProtocol = "doloribus";
            }};            

            DeploymentmanagerTypeProvidersInsertResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersInsert(req, new DeploymentmanagerTypeProvidersInsertSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersInsertSecurityOption1("nulla", "necessitatibus") {{
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

## deploymentmanagerTypeProvidersList

Lists all resource type providers for Deployment Manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersListRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersListResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersListSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersListSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersListSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersListSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerTypeProvidersListRequest req = new DeploymentmanagerTypeProvidersListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "iusto";
                filter = "esse";
                key = "praesentium";
                maxResults = 979963L;
                oauthToken = "reiciendis";
                orderBy = "vel";
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "doloremque";
                uploadProtocol = "dicta";
            }};            

            DeploymentmanagerTypeProvidersListResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersList(req, new DeploymentmanagerTypeProvidersListSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersListSecurityOption1("odio", "tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.typeProvidersListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deploymentmanagerTypeProvidersListTypes

Lists all the type info for a TypeProvider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersListTypesRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersListTypesResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersListTypesSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersListTypesSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersListTypesSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersListTypesSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersListTypesSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerTypeProvidersListTypesRequest req = new DeploymentmanagerTypeProvidersListTypesRequest("esse", "ex") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "sunt";
                filter = "nostrum";
                key = "fugiat";
                maxResults = 713767L;
                oauthToken = "aliquid";
                orderBy = "officia";
                pageToken = "suscipit";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "perferendis";
                uploadProtocol = "eum";
            }};            

            DeploymentmanagerTypeProvidersListTypesResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersListTypes(req, new DeploymentmanagerTypeProvidersListTypesSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersListTypesSecurityOption1("voluptas", "iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.typeProvidersListTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deploymentmanagerTypeProvidersPatch

Patches a type provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersPatchRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersPatchResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersPatchSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersPatchSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AsyncOptions;
import org.openapis.openapi.models.shared.BasicAuth;
import org.openapis.openapi.models.shared.CollectionOverride;
import org.openapis.openapi.models.shared.Credential;
import org.openapis.openapi.models.shared.Diagnostic;
import org.openapis.openapi.models.shared.DiagnosticLevelEnum;
import org.openapis.openapi.models.shared.InputMapping;
import org.openapis.openapi.models.shared.InputMappingLocationEnum;
import org.openapis.openapi.models.shared.Operation;
import org.openapis.openapi.models.shared.OperationError;
import org.openapis.openapi.models.shared.OperationErrorErrors;
import org.openapis.openapi.models.shared.OperationStatusEnum;
import org.openapis.openapi.models.shared.OperationWarnings;
import org.openapis.openapi.models.shared.OperationWarningsCodeEnum;
import org.openapis.openapi.models.shared.OperationWarningsData;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.PollingOptions;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.TypeProvider;
import org.openapis.openapi.models.shared.TypeProviderLabelEntry;
import org.openapis.openapi.models.shared.ValidationOptions;
import org.openapis.openapi.models.shared.ValidationOptionsSchemaValidationEnum;
import org.openapis.openapi.models.shared.ValidationOptionsUndeclaredPropertiesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerTypeProvidersPatchRequest req = new DeploymentmanagerTypeProvidersPatchRequest("id", "ab") {{
                dollarXgafv = XgafvEnum.TWO;
                typeProvider1 = new TypeProvider() {{
                    collectionOverrides = new org.openapis.openapi.models.shared.CollectionOverride[]{{
                        add(new CollectionOverride() {{
                            collection = "voluptates";
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "laborum";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "ad";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "enim";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "repellendus";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                            }};
                                            failCondition = "quo";
                                            finishCondition = "ex";
                                            pollingLink = "ut";
                                            targetLink = "ad";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "expedita";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "molestias";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                            }};
                                            failCondition = "aliquid";
                                            finishCondition = "beatae";
                                            pollingLink = "voluptatum";
                                            targetLink = "omnis";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "veritatis";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "est";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "voluptatem";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "officiis";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                            }};
                                            failCondition = "fuga";
                                            finishCondition = "pariatur";
                                            pollingLink = "debitis";
                                            targetLink = "voluptatem";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "deleniti";
                                        location = InputMappingLocationEnum.HEADER;
                                        methodMatch = "ex";
                                        value = "sapiente";
                                    }}),
                                }};
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.IGNORE_WITH_WARNINGS;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.IGNORE_WITH_WARNINGS;
                                }};
                                virtualProperties = "nemo";
                            }};
                        }}),
                        add(new CollectionOverride() {{
                            collection = "asperiores";
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "ullam";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "illum";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                            }};
                                            failCondition = "impedit";
                                            finishCondition = "quibusdam";
                                            pollingLink = "nam";
                                            targetLink = "ipsam";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "dolor";
                                        location = InputMappingLocationEnum.PATH;
                                        methodMatch = "inventore";
                                        value = "deleniti";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "veritatis";
                                        location = InputMappingLocationEnum.PATH;
                                        methodMatch = "dolor";
                                        value = "consequatur";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "architecto";
                                        location = InputMappingLocationEnum.UNKNOWN;
                                        methodMatch = "modi";
                                        value = "fugit";
                                    }}),
                                }};
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.UNKNOWN;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.INCLUDE_WITH_WARNINGS;
                                }};
                                virtualProperties = "quae";
                            }};
                        }}),
                        add(new CollectionOverride() {{
                            collection = "dolor";
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "ipsam";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "ipsa";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                            }};
                                            failCondition = "eveniet";
                                            finishCondition = "impedit";
                                            pollingLink = "officiis";
                                            targetLink = "esse";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "necessitatibus";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "veniam";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                            }};
                                            failCondition = "expedita";
                                            finishCondition = "eum";
                                            pollingLink = "vel";
                                            targetLink = "voluptatum";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "magnam";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "ab";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "autem";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                            }};
                                            failCondition = "laboriosam";
                                            finishCondition = "recusandae";
                                            pollingLink = "consequuntur";
                                            targetLink = "voluptatem";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "exercitationem";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "quasi";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "at";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "est";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "sequi";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                            }};
                                            failCondition = "repudiandae";
                                            finishCondition = "optio";
                                            pollingLink = "occaecati";
                                            targetLink = "nemo";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "blanditiis";
                                        location = InputMappingLocationEnum.BODY;
                                        methodMatch = "voluptas";
                                        value = "numquam";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "nemo";
                                        location = InputMappingLocationEnum.QUERY;
                                        methodMatch = "eius";
                                        value = "aspernatur";
                                    }}),
                                }};
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.IGNORE;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.INCLUDE;
                                }};
                                virtualProperties = "fuga";
                            }};
                        }}),
                        add(new CollectionOverride() {{
                            collection = "laudantium";
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "quasi";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "fugiat";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "nisi";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "consectetur";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                            }};
                                            failCondition = "cupiditate";
                                            finishCondition = "reiciendis";
                                            pollingLink = "soluta";
                                            targetLink = "alias";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "omnis";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "occaecati";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                            }};
                                            failCondition = "magni";
                                            finishCondition = "inventore";
                                            pollingLink = "fuga";
                                            targetLink = "accusamus";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "distinctio";
                                        location = InputMappingLocationEnum.BODY;
                                        methodMatch = "delectus";
                                        value = "minima";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "praesentium";
                                        location = InputMappingLocationEnum.HEADER;
                                        methodMatch = "magnam";
                                        value = "temporibus";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "quos";
                                        location = InputMappingLocationEnum.QUERY;
                                        methodMatch = "itaque";
                                        value = "commodi";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "totam";
                                        location = InputMappingLocationEnum.HEADER;
                                        methodMatch = "modi";
                                        value = "nam";
                                    }}),
                                }};
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.FAIL;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.UNKNOWN;
                                }};
                                virtualProperties = "ipsam";
                            }};
                        }}),
                    }};
                    credential = new Credential() {{
                        basicAuth = new BasicAuth() {{
                            password = "vel";
                            user = "alias";
                        }};;
                        serviceAccount = new ServiceAccount() {{
                            email = "Dell57@gmail.com";
                        }};;
                        useProjectDefault = false;
                    }};;
                    customCertificateAuthorityRoots = new String[]{{
                        add("deserunt"),
                        add("esse"),
                        add("nemo"),
                        add("reprehenderit"),
                    }};
                    description = "est";
                    descriptorUrl = "quis";
                    id = "sint";
                    insertTime = "accusamus";
                    labels = new org.openapis.openapi.models.shared.TypeProviderLabelEntry[]{{
                        add(new TypeProviderLabelEntry() {{
                            key = "hic";
                            value = "necessitatibus";
                        }}),
                        add(new TypeProviderLabelEntry() {{
                            key = "asperiores";
                            value = "ex";
                        }}),
                        add(new TypeProviderLabelEntry() {{
                            key = "voluptas";
                            value = "debitis";
                        }}),
                        add(new TypeProviderLabelEntry() {{
                            key = "delectus";
                            value = "quae";
                        }}),
                    }};
                    name = "Grant Padberg";
                    operation = new Operation() {{
                        clientOperationId = "atque";
                        creationTimestamp = "ipsum";
                        description = "impedit";
                        endTime = "magni";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "repudiandae";
                                    location = "nam";
                                    message = "dolore";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "iusto";
                                    location = "voluptate";
                                    message = "sequi";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "dignissimos";
                                    location = "neque";
                                    message = "quo";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "deleniti";
                        httpErrorStatusCode = 844235;
                        id = "iure";
                        insertTime = "odit";
                        kind = "voluptatibus";
                        name = "Dr. Megan Spinka";
                        operationGroupId = "architecto";
                        operationType = "voluptatibus";
                        progress = 156383;
                        region = "porro";
                        selfLink = "aliquam";
                        startTime = "velit";
                        status = OperationStatusEnum.PENDING;
                        statusMessage = "accusantium";
                        targetId = "vel";
                        targetLink = "ea";
                        user = "beatae";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.FIELD_VALUE_OVERRIDEN;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "velit";
                                        value = "ut";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "perspiciatis";
                                        value = "earum";
                                    }}),
                                }};
                                message = "dicta";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.UNDECLARED_PROPERTIES;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "iste";
                                        value = "itaque";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "alias";
                                        value = "nisi";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "itaque";
                                        value = "velit";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "laborum";
                                        value = "non";
                                    }}),
                                }};
                                message = "dolor";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.NOT_CRITICAL_ERROR;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "doloremque";
                                        value = "consequatur";
                                    }}),
                                }};
                                message = "officia";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "quidem";
                                        value = "voluptas";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "facilis";
                                        value = "placeat";
                                    }}),
                                }};
                                message = "perspiciatis";
                            }}),
                        }};
                        zone = "expedita";
                    }};;
                    options = new Options() {{
                        asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                            add(new AsyncOptions() {{
                                methodMatch = "a";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "ullam";
                                            level = DiagnosticLevelEnum.WARNING;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "necessitatibus";
                                            level = DiagnosticLevelEnum.WARNING;
                                        }}),
                                    }};
                                    failCondition = "impedit";
                                    finishCondition = "ipsam";
                                    pollingLink = "corporis";
                                    targetLink = "est";
                                }};
                            }}),
                            add(new AsyncOptions() {{
                                methodMatch = "error";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "labore";
                                            level = DiagnosticLevelEnum.UNKNOWN;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "vero";
                                            level = DiagnosticLevelEnum.UNKNOWN;
                                        }}),
                                    }};
                                    failCondition = "vitae";
                                    finishCondition = "inventore";
                                    pollingLink = "dolorem";
                                    targetLink = "ad";
                                }};
                            }}),
                            add(new AsyncOptions() {{
                                methodMatch = "qui";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "ex";
                                            level = DiagnosticLevelEnum.INFORMATION;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "soluta";
                                            level = DiagnosticLevelEnum.WARNING;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "rem";
                                            level = DiagnosticLevelEnum.WARNING;
                                        }}),
                                    }};
                                    failCondition = "odio";
                                    finishCondition = "fugit";
                                    pollingLink = "alias";
                                    targetLink = "magni";
                                }};
                            }}),
                        }};
                        inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                            add(new InputMapping() {{
                                fieldName = "quae";
                                location = InputMappingLocationEnum.UNKNOWN;
                                methodMatch = "modi";
                                value = "neque";
                            }}),
                            add(new InputMapping() {{
                                fieldName = "exercitationem";
                                location = InputMappingLocationEnum.HEADER;
                                methodMatch = "et";
                                value = "ipsum";
                            }}),
                        }};
                        validationOptions = new ValidationOptions() {{
                            schemaValidation = ValidationOptionsSchemaValidationEnum.IGNORE_WITH_WARNINGS;
                            undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.FAIL;
                        }};;
                        virtualProperties = "distinctio";
                    }};;
                    selfLink = "maxime";
                }};;
                accessToken = "quia";
                alt = AltEnum.JSON;
                callback = "nostrum";
                fields = "omnis";
                key = "libero";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "libero";
                uploadProtocol = "fugiat";
            }};            

            DeploymentmanagerTypeProvidersPatchResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersPatch(req, new DeploymentmanagerTypeProvidersPatchSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersPatchSecurityOption1("officia", "quos") {{
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

## deploymentmanagerTypeProvidersUpdate

Updates a type provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersUpdateRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersUpdateResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersUpdateSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerTypeProvidersUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AsyncOptions;
import org.openapis.openapi.models.shared.BasicAuth;
import org.openapis.openapi.models.shared.CollectionOverride;
import org.openapis.openapi.models.shared.Credential;
import org.openapis.openapi.models.shared.Diagnostic;
import org.openapis.openapi.models.shared.DiagnosticLevelEnum;
import org.openapis.openapi.models.shared.InputMapping;
import org.openapis.openapi.models.shared.InputMappingLocationEnum;
import org.openapis.openapi.models.shared.Operation;
import org.openapis.openapi.models.shared.OperationError;
import org.openapis.openapi.models.shared.OperationErrorErrors;
import org.openapis.openapi.models.shared.OperationStatusEnum;
import org.openapis.openapi.models.shared.OperationWarnings;
import org.openapis.openapi.models.shared.OperationWarningsCodeEnum;
import org.openapis.openapi.models.shared.OperationWarningsData;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.PollingOptions;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.TypeProvider;
import org.openapis.openapi.models.shared.TypeProviderLabelEntry;
import org.openapis.openapi.models.shared.ValidationOptions;
import org.openapis.openapi.models.shared.ValidationOptionsSchemaValidationEnum;
import org.openapis.openapi.models.shared.ValidationOptionsUndeclaredPropertiesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerTypeProvidersUpdateRequest req = new DeploymentmanagerTypeProvidersUpdateRequest("placeat", "sit") {{
                dollarXgafv = XgafvEnum.ONE;
                typeProvider1 = new TypeProvider() {{
                    collectionOverrides = new org.openapis.openapi.models.shared.CollectionOverride[]{{
                        add(new CollectionOverride() {{
                            collection = "voluptates";
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "aperiam";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "dolore";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "distinctio";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "autem";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                            }};
                                            failCondition = "dolores";
                                            finishCondition = "assumenda";
                                            pollingLink = "beatae";
                                            targetLink = "est";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "corrupti";
                                        location = InputMappingLocationEnum.QUERY;
                                        methodMatch = "provident";
                                        value = "accusamus";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "necessitatibus";
                                        location = InputMappingLocationEnum.BODY;
                                        methodMatch = "sint";
                                        value = "ea";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "autem";
                                        location = InputMappingLocationEnum.PATH;
                                        methodMatch = "rerum";
                                        value = "laudantium";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "corporis";
                                        location = InputMappingLocationEnum.HEADER;
                                        methodMatch = "voluptatibus";
                                        value = "cum";
                                    }}),
                                }};
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.FAIL;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.UNKNOWN;
                                }};
                                virtualProperties = "quia";
                            }};
                        }}),
                    }};
                    credential = new Credential() {{
                        basicAuth = new BasicAuth() {{
                            password = "quidem";
                            user = "fuga";
                        }};;
                        serviceAccount = new ServiceAccount() {{
                            email = "Alexys.Rath84@hotmail.com";
                        }};;
                        useProjectDefault = false;
                    }};;
                    customCertificateAuthorityRoots = new String[]{{
                        add("praesentium"),
                        add("odit"),
                    }};
                    description = "explicabo";
                    descriptorUrl = "corporis";
                    id = "error";
                    insertTime = "earum";
                    labels = new org.openapis.openapi.models.shared.TypeProviderLabelEntry[]{{
                        add(new TypeProviderLabelEntry() {{
                            key = "recusandae";
                            value = "similique";
                        }}),
                    }};
                    name = "Miss Alison Hayes";
                    operation = new Operation() {{
                        clientOperationId = "delectus";
                        creationTimestamp = "cupiditate";
                        description = "fugit";
                        endTime = "numquam";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "nesciunt";
                                    location = "at";
                                    message = "officia";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "dignissimos";
                                    location = "optio";
                                    message = "necessitatibus";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "corporis";
                        httpErrorStatusCode = 185518;
                        id = "expedita";
                        insertTime = "voluptatum";
                        kind = "cupiditate";
                        name = "Nichole Halvorson";
                        operationGroupId = "minus";
                        operationType = "eum";
                        progress = 266408;
                        region = "corporis";
                        selfLink = "magnam";
                        startTime = "voluptates";
                        status = OperationStatusEnum.DONE;
                        statusMessage = "tempore";
                        targetId = "aperiam";
                        targetLink = "libero";
                        user = "ratione";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.CLEANUP_FAILED;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "voluptas";
                                        value = "quo";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "velit";
                                        value = "minus";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "fuga";
                                        value = "nostrum";
                                    }}),
                                }};
                                message = "est";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.UNDECLARED_PROPERTIES;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "tempore";
                                        value = "vero";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "odit";
                                        value = "repellat";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "pariatur";
                                        value = "nemo";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "reprehenderit";
                                        value = "aperiam";
                                    }}),
                                }};
                                message = "odio";
                            }}),
                        }};
                        zone = "minima";
                    }};;
                    options = new Options() {{
                        asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                            add(new AsyncOptions() {{
                                methodMatch = "ducimus";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "dolores";
                                            level = DiagnosticLevelEnum.WARNING;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "veritatis";
                                            level = DiagnosticLevelEnum.INFORMATION;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "voluptate";
                                            level = DiagnosticLevelEnum.ERROR;
                                        }}),
                                    }};
                                    failCondition = "itaque";
                                    finishCondition = "similique";
                                    pollingLink = "optio";
                                    targetLink = "ex";
                                }};
                            }}),
                            add(new AsyncOptions() {{
                                methodMatch = "quaerat";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "officiis";
                                            level = DiagnosticLevelEnum.ERROR;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "quidem";
                                            level = DiagnosticLevelEnum.INFORMATION;
                                        }}),
                                    }};
                                    failCondition = "quam";
                                    finishCondition = "dolorem";
                                    pollingLink = "modi";
                                    targetLink = "ipsa";
                                }};
                            }}),
                        }};
                        inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                            add(new InputMapping() {{
                                fieldName = "vero";
                                location = InputMappingLocationEnum.UNKNOWN;
                                methodMatch = "repudiandae";
                                value = "cum";
                            }}),
                            add(new InputMapping() {{
                                fieldName = "dicta";
                                location = InputMappingLocationEnum.HEADER;
                                methodMatch = "veniam";
                                value = "animi";
                            }}),
                            add(new InputMapping() {{
                                fieldName = "dolores";
                                location = InputMappingLocationEnum.BODY;
                                methodMatch = "dicta";
                                value = "consequuntur";
                            }}),
                        }};
                        validationOptions = new ValidationOptions() {{
                            schemaValidation = ValidationOptionsSchemaValidationEnum.FAIL;
                            undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.IGNORE_WITH_WARNINGS;
                        }};;
                        virtualProperties = "ipsa";
                    }};;
                    selfLink = "ducimus";
                }};;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "quasi";
                fields = "laboriosam";
                key = "pariatur";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "occaecati";
                uploadProtocol = "nemo";
            }};            

            DeploymentmanagerTypeProvidersUpdateResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersUpdate(req, new DeploymentmanagerTypeProvidersUpdateSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersUpdateSecurityOption1("aliquam", "nostrum") {{
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
