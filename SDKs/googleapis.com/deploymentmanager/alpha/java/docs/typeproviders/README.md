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

            DeploymentmanagerTypeProvidersDeleteRequest req = new DeploymentmanagerTypeProvidersDeleteRequest("unde", "architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "illo";
                fields = "reiciendis";
                key = "perferendis";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "incidunt";
                uploadProtocol = "sed";
            }};            

            DeploymentmanagerTypeProvidersDeleteResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersDelete(req, new DeploymentmanagerTypeProvidersDeleteSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersDeleteSecurityOption1("provident", "eius") {{
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

            DeploymentmanagerTypeProvidersGetRequest req = new DeploymentmanagerTypeProvidersGetRequest("necessitatibus", "ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "tempora";
                key = "tempora";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "ex";
                uploadProtocol = "sit";
            }};            

            DeploymentmanagerTypeProvidersGetResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersGet(req, new DeploymentmanagerTypeProvidersGetSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersGetSecurityOption1("non", "officiis") {{
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

            DeploymentmanagerTypeProvidersGetTypeRequest req = new DeploymentmanagerTypeProvidersGetTypeRequest("praesentium", "facilis", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "rem";
                fields = "sit";
                key = "nobis";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "minima";
                uploadProtocol = "recusandae";
            }};            

            DeploymentmanagerTypeProvidersGetTypeResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersGetType(req, new DeploymentmanagerTypeProvidersGetTypeSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersGetTypeSecurityOption1("reiciendis", "nulla") {{
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
import org.openapis.openapi.models.shared.MethodMap;
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

            DeploymentmanagerTypeProvidersInsertRequest req = new DeploymentmanagerTypeProvidersInsertRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                typeProvider = new TypeProvider() {{
                    collectionOverrides = new org.openapis.openapi.models.shared.CollectionOverride[]{{
                        add(new CollectionOverride() {{
                            collection = "numquam";
                            methodMap = new MethodMap() {{
                                create = "veniam";
                                delete = "in";
                                get = "officiis";
                                setIamPolicy = "beatae";
                                update = "laudantium";
                            }};
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "praesentium";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "laboriosam";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "voluptatum";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "hic";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                            }};
                                            failCondition = "debitis";
                                            finishCondition = "neque";
                                            pollingLink = "dolorum";
                                            targetLink = "nostrum";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "officia";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "corrupti";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "tempora";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "fugit";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                            }};
                                            failCondition = "fugiat";
                                            finishCondition = "voluptatem";
                                            pollingLink = "culpa";
                                            targetLink = "expedita";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "consequatur";
                                        location = InputMappingLocationEnum.QUERY;
                                        methodMatch = "ipsam";
                                        value = "sit";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "voluptatum";
                                        location = InputMappingLocationEnum.QUERY;
                                        methodMatch = "repudiandae";
                                        value = "corporis";
                                    }}),
                                }};
                                nameProperty = "et";
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.IGNORE_WITH_WARNINGS;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.IGNORE;
                                }};
                            }};
                        }}),
                        add(new CollectionOverride() {{
                            collection = "sed";
                            methodMap = new MethodMap() {{
                                create = "sit";
                                delete = "vel";
                                get = "nostrum";
                                setIamPolicy = "saepe";
                                update = "error";
                            }};
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "incidunt";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "dolorem";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "dicta";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "occaecati";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "quidem";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                            }};
                                            failCondition = "laborum";
                                            finishCondition = "nam";
                                            pollingLink = "tenetur";
                                            targetLink = "laboriosam";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "amet";
                                        location = InputMappingLocationEnum.BODY;
                                        methodMatch = "voluptate";
                                        value = "unde";
                                    }}),
                                }};
                                nameProperty = "reiciendis";
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.IGNORE_WITH_WARNINGS;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.FAIL;
                                }};
                            }};
                        }}),
                        add(new CollectionOverride() {{
                            collection = "delectus";
                            methodMap = new MethodMap() {{
                                create = "voluptates";
                                delete = "perferendis";
                                get = "est";
                                setIamPolicy = "quidem";
                                update = "reprehenderit";
                            }};
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "fuga";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "mollitia";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "voluptatem";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "repudiandae";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                            }};
                                            failCondition = "atque";
                                            finishCondition = "reprehenderit";
                                            pollingLink = "asperiores";
                                            targetLink = "totam";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "suscipit";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "maxime";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "esse";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "assumenda";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                            }};
                                            failCondition = "atque";
                                            finishCondition = "error";
                                            pollingLink = "officiis";
                                            targetLink = "officiis";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "accusamus";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "minima";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "ex";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "corrupti";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                            }};
                                            failCondition = "error";
                                            finishCondition = "blanditiis";
                                            pollingLink = "suscipit";
                                            targetLink = "repudiandae";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "atque";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "sunt";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "dolorum";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "labore";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                            }};
                                            failCondition = "doloremque";
                                            finishCondition = "repudiandae";
                                            pollingLink = "dicta";
                                            targetLink = "accusantium";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "dolores";
                                        location = InputMappingLocationEnum.PATH;
                                        methodMatch = "laboriosam";
                                        value = "velit";
                                    }}),
                                }};
                                nameProperty = "a";
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.IGNORE_WITH_WARNINGS;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.INCLUDE;
                                }};
                            }};
                        }}),
                        add(new CollectionOverride() {{
                            collection = "saepe";
                            methodMap = new MethodMap() {{
                                create = "consequuntur";
                                delete = "occaecati";
                                get = "officiis";
                                setIamPolicy = "perspiciatis";
                                update = "in";
                            }};
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "eveniet";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "consequuntur";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "id";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "reprehenderit";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                            }};
                                            failCondition = "illo";
                                            finishCondition = "corporis";
                                            pollingLink = "quidem";
                                            targetLink = "eveniet";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "vero";
                                        location = InputMappingLocationEnum.UNKNOWN;
                                        methodMatch = "iure";
                                        value = "ipsa";
                                    }}),
                                }};
                                nameProperty = "totam";
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.UNKNOWN;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.IGNORE;
                                }};
                            }};
                        }}),
                    }};
                    credential = new Credential() {{
                        basicAuth = new BasicAuth() {{
                            password = "eveniet";
                            user = "qui";
                        }};;
                        serviceAccount = new ServiceAccount() {{
                            email = "Howard67@hotmail.com";
                        }};;
                        useProjectDefault = false;
                    }};;
                    customCertificateAuthorityRoots = new String[]{{
                        add("voluptatum"),
                        add("rem"),
                        add("aliquam"),
                    }};
                    description = "ad";
                    descriptorUrl = "repellat";
                    id = "alias";
                    insertTime = "corporis";
                    labels = new org.openapis.openapi.models.shared.TypeProviderLabelEntry[]{{
                        add(new TypeProviderLabelEntry() {{
                            key = "nihil";
                            value = "mollitia";
                        }}),
                        add(new TypeProviderLabelEntry() {{
                            key = "voluptas";
                            value = "alias";
                        }}),
                        add(new TypeProviderLabelEntry() {{
                            key = "maiores";
                            value = "reiciendis";
                        }}),
                    }};
                    name = "Alberta Harber";
                    operation = new Operation() {{
                        clientOperationId = "nesciunt";
                        creationTimestamp = "quae";
                        description = "recusandae";
                        endTime = "omnis";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "molestiae";
                                    location = "ex";
                                    message = "ut";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "culpa";
                                    location = "adipisci";
                                    message = "debitis";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "laudantium";
                        httpErrorStatusCode = 432606;
                        id = "nemo";
                        insertTime = "recusandae";
                        kind = "esse";
                        name = "Alvin Kemmer";
                        operationGroupId = "aspernatur";
                        operationType = "ullam";
                        progress = 96804;
                        region = "animi";
                        selfLink = "nostrum";
                        startTime = "mollitia";
                        status = OperationStatusEnum.RUNNING;
                        statusMessage = "possimus";
                        targetId = "animi";
                        targetLink = "ex";
                        user = "aliquid";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "ullam";
                                        value = "in";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "nam";
                                        value = "earum";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "officia";
                                        value = "laborum";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "placeat";
                                        value = "modi";
                                    }}),
                                }};
                                message = "voluptatibus";
                            }}),
                        }};
                        zone = "molestias";
                    }};;
                    options = new Options() {{
                        asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                            add(new AsyncOptions() {{
                                methodMatch = "sapiente";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "vitae";
                                            level = DiagnosticLevelEnum.WARNING;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "tempora";
                                            level = DiagnosticLevelEnum.INFORMATION;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "inventore";
                                            level = DiagnosticLevelEnum.UNKNOWN;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "cumque";
                                            level = DiagnosticLevelEnum.UNKNOWN;
                                        }}),
                                    }};
                                    failCondition = "perferendis";
                                    finishCondition = "velit";
                                    pollingLink = "aspernatur";
                                    targetLink = "eum";
                                }};
                            }}),
                            add(new AsyncOptions() {{
                                methodMatch = "eius";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "at";
                                            level = DiagnosticLevelEnum.ERROR;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "eos";
                                            level = DiagnosticLevelEnum.ERROR;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "eum";
                                            level = DiagnosticLevelEnum.UNKNOWN;
                                        }}),
                                    }};
                                    failCondition = "minima";
                                    finishCondition = "beatae";
                                    pollingLink = "cupiditate";
                                    targetLink = "provident";
                                }};
                            }}),
                            add(new AsyncOptions() {{
                                methodMatch = "earum";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "hic";
                                            level = DiagnosticLevelEnum.ERROR;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "eaque";
                                            level = DiagnosticLevelEnum.ERROR;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "perspiciatis";
                                            level = DiagnosticLevelEnum.ERROR;
                                        }}),
                                    }};
                                    failCondition = "debitis";
                                    finishCondition = "aliquid";
                                    pollingLink = "porro";
                                    targetLink = "suscipit";
                                }};
                            }}),
                            add(new AsyncOptions() {{
                                methodMatch = "dolorem";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "cumque";
                                            level = DiagnosticLevelEnum.WARNING;
                                        }}),
                                    }};
                                    failCondition = "ratione";
                                    finishCondition = "animi";
                                    pollingLink = "necessitatibus";
                                    targetLink = "nulla";
                                }};
                            }}),
                        }};
                        inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                            add(new InputMapping() {{
                                fieldName = "quasi";
                                location = InputMappingLocationEnum.UNKNOWN;
                                methodMatch = "ducimus";
                                value = "natus";
                            }}),
                        }};
                        nameProperty = "occaecati";
                        validationOptions = new ValidationOptions() {{
                            schemaValidation = ValidationOptionsSchemaValidationEnum.IGNORE;
                            undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.INCLUDE;
                        }};;
                    }};;
                    selfLink = "quasi";
                }};;
                accessToken = "magni";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "necessitatibus";
                key = "ipsa";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "molestiae";
                uploadProtocol = "dicta";
            }};            

            DeploymentmanagerTypeProvidersInsertResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersInsert(req, new DeploymentmanagerTypeProvidersInsertSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersInsertSecurityOption1("iusto", "esse") {{
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

            DeploymentmanagerTypeProvidersListRequest req = new DeploymentmanagerTypeProvidersListRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "architecto";
                fields = "fugiat";
                filter = "doloremque";
                key = "dicta";
                maxResults = 483706L;
                oauthToken = "tempora";
                orderBy = "esse";
                pageToken = "ex";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "aliquid";
                uploadProtocol = "ipsa";
            }};            

            DeploymentmanagerTypeProvidersListResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersList(req, new DeploymentmanagerTypeProvidersListSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersListSecurityOption1("laborum", "sunt") {{
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

            DeploymentmanagerTypeProvidersListTypesRequest req = new DeploymentmanagerTypeProvidersListTypesRequest("nostrum", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "aliquid";
                filter = "perferendis";
                key = "eum";
                maxResults = 374753L;
                oauthToken = "iste";
                orderBy = "id";
                pageToken = "ab";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "possimus";
                uploadProtocol = "voluptates";
            }};            

            DeploymentmanagerTypeProvidersListTypesResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersListTypes(req, new DeploymentmanagerTypeProvidersListTypesSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersListTypesSecurityOption1("mollitia", "laborum") {{
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
import org.openapis.openapi.models.shared.MethodMap;
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

            DeploymentmanagerTypeProvidersPatchRequest req = new DeploymentmanagerTypeProvidersPatchRequest("libero", "ad") {{
                dollarXgafv = XgafvEnum.TWO;
                typeProvider1 = new TypeProvider() {{
                    collectionOverrides = new org.openapis.openapi.models.shared.CollectionOverride[]{{
                        add(new CollectionOverride() {{
                            collection = "vitae";
                            methodMap = new MethodMap() {{
                                create = "repellendus";
                                delete = "ex";
                                get = "quo";
                                setIamPolicy = "ex";
                                update = "ut";
                            }};
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
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
                                nameProperty = "rem";
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.FAIL;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.IGNORE;
                                }};
                            }};
                        }}),
                        add(new CollectionOverride() {{
                            collection = "asperiores";
                            methodMap = new MethodMap() {{
                                create = "ratione";
                                delete = "ullam";
                                get = "perferendis";
                                setIamPolicy = "illum";
                                update = "totam";
                            }};
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "quibusdam";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "ipsam";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "dolor";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "inventore";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                            }};
                                            failCondition = "veritatis";
                                            finishCondition = "tempora";
                                            pollingLink = "dolor";
                                            targetLink = "consequatur";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "architecto";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "modi";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                            }};
                                            failCondition = "ab";
                                            finishCondition = "laudantium";
                                            pollingLink = "quae";
                                            targetLink = "dolor";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "fugiat";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "consequuntur";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "quas";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                            }};
                                            failCondition = "impedit";
                                            finishCondition = "officiis";
                                            pollingLink = "esse";
                                            targetLink = "necessitatibus";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "sed";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "nesciunt";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "eum";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                            }};
                                            failCondition = "voluptatum";
                                            finishCondition = "magnam";
                                            pollingLink = "exercitationem";
                                            targetLink = "ab";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "autem";
                                        location = InputMappingLocationEnum.BODY;
                                        methodMatch = "laboriosam";
                                        value = "recusandae";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "consequuntur";
                                        location = InputMappingLocationEnum.UNKNOWN;
                                        methodMatch = "exercitationem";
                                        value = "necessitatibus";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "quasi";
                                        location = InputMappingLocationEnum.PATH;
                                        methodMatch = "at";
                                        value = "vero";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "est";
                                        location = InputMappingLocationEnum.BODY;
                                        methodMatch = "sequi";
                                        value = "doloribus";
                                    }}),
                                }};
                                nameProperty = "repudiandae";
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.FAIL;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.INCLUDE_WITH_WARNINGS;
                                }};
                            }};
                        }}),
                    }};
                    credential = new Credential() {{
                        basicAuth = new BasicAuth() {{
                            password = "nemo";
                            user = "voluptate";
                        }};;
                        serviceAccount = new ServiceAccount() {{
                            email = "Ludie36@yahoo.com";
                        }};;
                        useProjectDefault = false;
                    }};;
                    customCertificateAuthorityRoots = new String[]{{
                        add("eius"),
                        add("aspernatur"),
                        add("ducimus"),
                    }};
                    description = "nesciunt";
                    descriptorUrl = "fuga";
                    id = "laudantium";
                    insertTime = "incidunt";
                    labels = new org.openapis.openapi.models.shared.TypeProviderLabelEntry[]{{
                        add(new TypeProviderLabelEntry() {{
                            key = "rem";
                            value = "fugiat";
                        }}),
                    }};
                    name = "Elsie Cronin V";
                    operation = new Operation() {{
                        clientOperationId = "reiciendis";
                        creationTimestamp = "soluta";
                        description = "alias";
                        endTime = "omnis";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "occaecati";
                                    location = "iste";
                                    message = "magni";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "inventore";
                        httpErrorStatusCode = 686362;
                        id = "accusamus";
                        insertTime = "voluptatibus";
                        kind = "distinctio";
                        name = "Van Harber";
                        operationGroupId = "magnam";
                        operationType = "temporibus";
                        progress = 549501;
                        region = "commodi";
                        selfLink = "itaque";
                        startTime = "commodi";
                        status = OperationStatusEnum.RUNNING;
                        statusMessage = "earum";
                        targetId = "modi";
                        targetLink = "nam";
                        user = "vero";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.DISK_SIZE_LARGER_THAN_IMAGE_SIZE;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "alias";
                                        value = "quasi";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "non";
                                        value = "maiores";
                                    }}),
                                }};
                                message = "enim";
                            }}),
                        }};
                        zone = "sint";
                    }};;
                    options = new Options() {{
                        asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                            add(new AsyncOptions() {{
                                methodMatch = "deserunt";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "nemo";
                                            level = DiagnosticLevelEnum.INFORMATION;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "est";
                                            level = DiagnosticLevelEnum.INFORMATION;
                                        }}),
                                    }};
                                    failCondition = "sint";
                                    finishCondition = "accusamus";
                                    pollingLink = "impedit";
                                    targetLink = "hic";
                                }};
                            }}),
                            add(new AsyncOptions() {{
                                methodMatch = "necessitatibus";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "ex";
                                            level = DiagnosticLevelEnum.INFORMATION;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "debitis";
                                            level = DiagnosticLevelEnum.ERROR;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "quae";
                                            level = DiagnosticLevelEnum.ERROR;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "fuga";
                                            level = DiagnosticLevelEnum.WARNING;
                                        }}),
                                    }};
                                    failCondition = "consectetur";
                                    finishCondition = "velit";
                                    pollingLink = "atque";
                                    targetLink = "ipsum";
                                }};
                            }}),
                            add(new AsyncOptions() {{
                                methodMatch = "impedit";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "soluta";
                                            level = DiagnosticLevelEnum.ERROR;
                                        }}),
                                    }};
                                    failCondition = "nam";
                                    finishCondition = "dolore";
                                    pollingLink = "iusto";
                                    targetLink = "voluptate";
                                }};
                            }}),
                            add(new AsyncOptions() {{
                                methodMatch = "sequi";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "neque";
                                            level = DiagnosticLevelEnum.ERROR;
                                        }}),
                                        add(new Diagnostic() {{
                                            field = "deleniti";
                                            level = DiagnosticLevelEnum.ERROR;
                                        }}),
                                    }};
                                    failCondition = "iure";
                                    finishCondition = "odit";
                                    pollingLink = "voluptatibus";
                                    targetLink = "vel";
                                }};
                            }}),
                        }};
                        inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                            add(new InputMapping() {{
                                fieldName = "quibusdam";
                                location = InputMappingLocationEnum.UNKNOWN;
                                methodMatch = "facere";
                                value = "libero";
                            }}),
                            add(new InputMapping() {{
                                fieldName = "architecto";
                                location = InputMappingLocationEnum.HEADER;
                                methodMatch = "quia";
                                value = "porro";
                            }}),
                        }};
                        nameProperty = "aliquam";
                        validationOptions = new ValidationOptions() {{
                            schemaValidation = ValidationOptionsSchemaValidationEnum.UNKNOWN;
                            undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.UNKNOWN;
                        }};;
                    }};;
                    selfLink = "accusantium";
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "vero";
                key = "excepturi";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "ut";
                uploadProtocol = "perspiciatis";
            }};            

            DeploymentmanagerTypeProvidersPatchResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersPatch(req, new DeploymentmanagerTypeProvidersPatchSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersPatchSecurityOption1("earum", "dicta") {{
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
import org.openapis.openapi.models.shared.MethodMap;
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

            DeploymentmanagerTypeProvidersUpdateRequest req = new DeploymentmanagerTypeProvidersUpdateRequest("impedit", "voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                typeProvider1 = new TypeProvider() {{
                    collectionOverrides = new org.openapis.openapi.models.shared.CollectionOverride[]{{
                        add(new CollectionOverride() {{
                            collection = "alias";
                            methodMap = new MethodMap() {{
                                create = "nisi";
                                delete = "itaque";
                                get = "velit";
                                setIamPolicy = "laborum";
                                update = "non";
                            }};
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "iusto";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "doloremque";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                            }};
                                            failCondition = "officia";
                                            finishCondition = "recusandae";
                                            pollingLink = "ea";
                                            targetLink = "quidem";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "facilis";
                                        location = InputMappingLocationEnum.HEADER;
                                        methodMatch = "perspiciatis";
                                        value = "expedita";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "deleniti";
                                        location = InputMappingLocationEnum.HEADER;
                                        methodMatch = "voluptate";
                                        value = "ullam";
                                    }}),
                                }};
                                nameProperty = "unde";
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.FAIL;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.INCLUDE_WITH_WARNINGS;
                                }};
                            }};
                        }}),
                        add(new CollectionOverride() {{
                            collection = "impedit";
                            methodMap = new MethodMap() {{
                                create = "ipsam";
                                delete = "corporis";
                                get = "est";
                                setIamPolicy = "error";
                                update = "esse";
                            }};
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "veritatis";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "consectetur";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "inventore";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "ad";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "iste";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                            }};
                                            failCondition = "nemo";
                                            finishCondition = "soluta";
                                            pollingLink = "libero";
                                            targetLink = "rem";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "dolorum";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "fugit";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "magni";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                            }};
                                            failCondition = "quae";
                                            finishCondition = "quae";
                                            pollingLink = "modi";
                                            targetLink = "neque";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "itaque";
                                        location = InputMappingLocationEnum.UNKNOWN;
                                        methodMatch = "ipsum";
                                        value = "unde";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "nulla";
                                        location = InputMappingLocationEnum.BODY;
                                        methodMatch = "maxime";
                                        value = "quia";
                                    }}),
                                }};
                                nameProperty = "quia";
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.IGNORE;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.INCLUDE_WITH_WARNINGS;
                                }};
                            }};
                        }}),
                        add(new CollectionOverride() {{
                            collection = "libero";
                            methodMap = new MethodMap() {{
                                create = "dicta";
                                delete = "id";
                                get = "libero";
                                setIamPolicy = "fugiat";
                                update = "officia";
                            }};
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "placeat";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "iusto";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                            }};
                                            failCondition = "voluptates";
                                            finishCondition = "inventore";
                                            pollingLink = "aperiam";
                                            targetLink = "totam";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "dolore";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "distinctio";
                                                    level = DiagnosticLevelEnum.UNKNOWN;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "autem";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "dolores";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "beatae";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                            }};
                                            failCondition = "facere";
                                            finishCondition = "corrupti";
                                            pollingLink = "molestiae";
                                            targetLink = "provident";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "accusamus";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "tempore";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "ea";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "ipsam";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "laudantium";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                            }};
                                            failCondition = "officiis";
                                            finishCondition = "voluptatibus";
                                            pollingLink = "cum";
                                            targetLink = "at";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "quia";
                                        location = InputMappingLocationEnum.BODY;
                                        methodMatch = "fuga";
                                        value = "repudiandae";
                                    }}),
                                }};
                                nameProperty = "accusantium";
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.IGNORE_WITH_WARNINGS;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.FAIL;
                                }};
                            }};
                        }}),
                        add(new CollectionOverride() {{
                            collection = "eos";
                            methodMap = new MethodMap() {{
                                create = "quibusdam";
                                delete = "odio";
                                get = "praesentium";
                                setIamPolicy = "odit";
                                update = "explicabo";
                            }};
                            options = new Options() {{
                                asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                                    add(new AsyncOptions() {{
                                        methodMatch = "error";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "adipisci";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "similique";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "quidem";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "beatae";
                                                    level = DiagnosticLevelEnum.WARNING;
                                                }}),
                                            }};
                                            failCondition = "molestiae";
                                            finishCondition = "delectus";
                                            pollingLink = "cupiditate";
                                            targetLink = "fugit";
                                        }};
                                    }}),
                                    add(new AsyncOptions() {{
                                        methodMatch = "numquam";
                                        pollingOptions = new PollingOptions() {{
                                            diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                                add(new Diagnostic() {{
                                                    field = "nesciunt";
                                                    level = DiagnosticLevelEnum.ERROR;
                                                }}),
                                                add(new Diagnostic() {{
                                                    field = "officia";
                                                    level = DiagnosticLevelEnum.INFORMATION;
                                                }}),
                                            }};
                                            failCondition = "optio";
                                            finishCondition = "necessitatibus";
                                            pollingLink = "corporis";
                                            targetLink = "qui";
                                        }};
                                    }}),
                                }};
                                inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                                    add(new InputMapping() {{
                                        fieldName = "voluptatum";
                                        location = InputMappingLocationEnum.QUERY;
                                        methodMatch = "minima";
                                        value = "placeat";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "enim";
                                        location = InputMappingLocationEnum.PATH;
                                        methodMatch = "in";
                                        value = "minus";
                                    }}),
                                    add(new InputMapping() {{
                                        fieldName = "eum";
                                        location = InputMappingLocationEnum.PATH;
                                        methodMatch = "corporis";
                                        value = "magnam";
                                    }}),
                                }};
                                nameProperty = "voluptates";
                                validationOptions = new ValidationOptions() {{
                                    schemaValidation = ValidationOptionsSchemaValidationEnum.FAIL;
                                    undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.IGNORE_WITH_WARNINGS;
                                }};
                            }};
                        }}),
                    }};
                    credential = new Credential() {{
                        basicAuth = new BasicAuth() {{
                            password = "aperiam";
                            user = "libero";
                        }};;
                        serviceAccount = new ServiceAccount() {{
                            email = "Effie.Lebsack@gmail.com";
                        }};;
                        useProjectDefault = false;
                    }};;
                    customCertificateAuthorityRoots = new String[]{{
                        add("velit"),
                        add("minus"),
                        add("fuga"),
                        add("nostrum"),
                    }};
                    description = "est";
                    descriptorUrl = "impedit";
                    id = "delectus";
                    insertTime = "tempore";
                    labels = new org.openapis.openapi.models.shared.TypeProviderLabelEntry[]{{
                        add(new TypeProviderLabelEntry() {{
                            key = "odit";
                            value = "repellat";
                        }}),
                        add(new TypeProviderLabelEntry() {{
                            key = "pariatur";
                            value = "nemo";
                        }}),
                        add(new TypeProviderLabelEntry() {{
                            key = "reprehenderit";
                            value = "aperiam";
                        }}),
                        add(new TypeProviderLabelEntry() {{
                            key = "odio";
                            value = "minima";
                        }}),
                    }};
                    name = "Dora Mante";
                    operation = new Operation() {{
                        clientOperationId = "veritatis";
                        creationTimestamp = "ducimus";
                        description = "voluptate";
                        endTime = "pariatur";
                        error = new OperationError() {{
                            errors = new org.openapis.openapi.models.shared.OperationErrorErrors[]{{
                                add(new OperationErrorErrors() {{
                                    code = "similique";
                                    location = "optio";
                                    message = "ex";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "quaerat";
                                    location = "commodi";
                                    message = "officiis";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "placeat";
                                    location = "quidem";
                                    message = "exercitationem";
                                }}),
                                add(new OperationErrorErrors() {{
                                    code = "quam";
                                    location = "dolorem";
                                    message = "modi";
                                }}),
                            }};
                        }};;
                        httpErrorMessage = "ipsa";
                        httpErrorStatusCode = 575534;
                        id = "vero";
                        insertTime = "sequi";
                        kind = "repudiandae";
                        name = "Willie Wehner";
                        operationGroupId = "dolores";
                        operationType = "nam";
                        progress = 115898;
                        region = "consequuntur";
                        selfLink = "necessitatibus";
                        startTime = "nobis";
                        status = OperationStatusEnum.PENDING;
                        statusMessage = "ducimus";
                        targetId = "maiores";
                        targetLink = "veritatis";
                        user = "quasi";
                        warnings = new org.openapis.openapi.models.shared.OperationWarnings[]{{
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.PARTIAL_SUCCESS;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "excepturi";
                                        value = "occaecati";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "nemo";
                                        value = "aliquam";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "nostrum";
                                        value = "doloribus";
                                    }}),
                                }};
                                message = "eligendi";
                            }}),
                            add(new OperationWarnings() {{
                                code = OperationWarningsCodeEnum.FIELD_VALUE_OVERRIDEN;
                                data = new org.openapis.openapi.models.shared.OperationWarningsData[]{{
                                    add(new OperationWarningsData() {{
                                        key = "hic";
                                        value = "animi";
                                    }}),
                                    add(new OperationWarningsData() {{
                                        key = "quas";
                                        value = "totam";
                                    }}),
                                }};
                                message = "molestias";
                            }}),
                        }};
                        zone = "odio";
                    }};;
                    options = new Options() {{
                        asyncOptions = new org.openapis.openapi.models.shared.AsyncOptions[]{{
                            add(new AsyncOptions() {{
                                methodMatch = "saepe";
                                pollingOptions = new PollingOptions() {{
                                    diagnostics = new org.openapis.openapi.models.shared.Diagnostic[]{{
                                        add(new Diagnostic() {{
                                            field = "quos";
                                            level = DiagnosticLevelEnum.WARNING;
                                        }}),
                                    }};
                                    failCondition = "assumenda";
                                    finishCondition = "tempore";
                                    pollingLink = "libero";
                                    targetLink = "velit";
                                }};
                            }}),
                        }};
                        inputMappings = new org.openapis.openapi.models.shared.InputMapping[]{{
                            add(new InputMapping() {{
                                fieldName = "delectus";
                                location = InputMappingLocationEnum.BODY;
                                methodMatch = "cum";
                                value = "ipsum";
                            }}),
                        }};
                        nameProperty = "adipisci";
                        validationOptions = new ValidationOptions() {{
                            schemaValidation = ValidationOptionsSchemaValidationEnum.FAIL;
                            undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum.INCLUDE_WITH_WARNINGS;
                        }};;
                    }};;
                    selfLink = "doloremque";
                }};;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "libero";
                fields = "architecto";
                key = "cupiditate";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "possimus";
                uploadProtocol = "non";
            }};            

            DeploymentmanagerTypeProvidersUpdateResponse res = sdk.typeProviders.deploymentmanagerTypeProvidersUpdate(req, new DeploymentmanagerTypeProvidersUpdateSecurity() {{
                option1 = new DeploymentmanagerTypeProvidersUpdateSecurityOption1("magnam", "itaque") {{
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
