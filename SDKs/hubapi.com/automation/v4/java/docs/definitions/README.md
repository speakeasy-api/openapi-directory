# definitions

## Overview

Operations to configure custom workflow actions.

### Available Operations

* [deleteAutomationV4ActionsAppIdDefinitionIdArchive](#deleteautomationv4actionsappiddefinitionidarchive) - Archive a custom action
* [getAutomationV4ActionsAppIdDefinitionIdGetById](#getautomationv4actionsappiddefinitionidgetbyid) - Get a custom action
* [getAutomationV4ActionsAppIdGetPage](#getautomationv4actionsappidgetpage) - Get all custom actions
* [patchAutomationV4ActionsAppIdDefinitionIdUpdate](#patchautomationv4actionsappiddefinitionidupdate) - Update a custom action
* [postAutomationV4ActionsAppIdCreate](#postautomationv4actionsappidcreate) - Create new custom action

## deleteAutomationV4ActionsAppIdDefinitionIdArchive

Archives a single custom workflow action with the specified ID. Workflows that currently use this custom action will stop attempting to execute the action, and all future executions will be marked as a failure.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest;
import org.openapis.openapi.models.operations.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse;
import org.openapis.openapi.models.operations.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest req = new DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest(315428, "omnis");            

            DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse res = sdk.definitions.deleteAutomationV4ActionsAppIdDefinitionIdArchive(req, new DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity("nemo") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutomationV4ActionsAppIdDefinitionIdGetById

Returns a single custom workflow action with the specified ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest req = new GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest(325047, "excepturi") {{
                archived = false;
            }};            

            GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse res = sdk.definitions.getAutomationV4ActionsAppIdDefinitionIdGetById(req, new GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity("accusantium") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.extensionActionDefinition != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutomationV4ActionsAppIdGetPage

Returns a list of all custom workflow actions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdGetPageRequest;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdGetPageResponse;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdGetPageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutomationV4ActionsAppIdGetPageRequest req = new GetAutomationV4ActionsAppIdGetPageRequest(438601) {{
                after = "culpa";
                archived = false;
                limit = 988374;
            }};            

            GetAutomationV4ActionsAppIdGetPageResponse res = sdk.definitions.getAutomationV4ActionsAppIdGetPage(req, new GetAutomationV4ActionsAppIdGetPageSecurity("sapiente") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.collectionResponseExtensionActionDefinitionForwardPaging != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchAutomationV4ActionsAppIdDefinitionIdUpdate

Updates a custom workflow action with new values for the specified fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest;
import org.openapis.openapi.models.operations.PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse;
import org.openapis.openapi.models.operations.PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity;
import org.openapis.openapi.models.shared.ActionLabels;
import org.openapis.openapi.models.shared.ConditionalSingleFieldDependency;
import org.openapis.openapi.models.shared.ConditionalSingleFieldDependencyDependencyTypeEnum;
import org.openapis.openapi.models.shared.ExtensionActionDefinitionPatch;
import org.openapis.openapi.models.shared.FieldTypeDefinition;
import org.openapis.openapi.models.shared.FieldTypeDefinitionFieldTypeEnum;
import org.openapis.openapi.models.shared.FieldTypeDefinitionReferencedObjectTypeEnum;
import org.openapis.openapi.models.shared.FieldTypeDefinitionTypeEnum;
import org.openapis.openapi.models.shared.InputFieldDefinition;
import org.openapis.openapi.models.shared.InputFieldDefinitionSupportedValueTypesEnum;
import org.openapis.openapi.models.shared.ObjectRequestOptions;
import org.openapis.openapi.models.shared.Option;
import org.openapis.openapi.models.shared.SingleFieldDependency;
import org.openapis.openapi.models.shared.SingleFieldDependencyDependencyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest req = new PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest(                new ExtensionActionDefinitionPatch() {{
                                actionUrl = "architecto";
                                inputFieldDependencies = new Object[]{{
                                    add(new SingleFieldDependency("mollitia", SingleFieldDependencyDependencyTypeEnum.SINGLE_FIELD,                 new String[]{{
                                                        add("numquam"),
                                                        add("commodi"),
                                                        add("quam"),
                                                    }}) {{
                                        controllingFieldName = "culpa";
                                        dependencyType = SingleFieldDependencyDependencyTypeEnum.SINGLE_FIELD;
                                        dependentFieldNames = new String[]{{
                                            add("repellat"),
                                        }};
                                    }}),
                                    add(new SingleFieldDependency("laborum", SingleFieldDependencyDependencyTypeEnum.SINGLE_FIELD,                 new String[]{{
                                                        add("enim"),
                                                        add("odit"),
                                                        add("quo"),
                                                    }}) {{
                                        controllingFieldName = "velit";
                                        dependencyType = SingleFieldDependencyDependencyTypeEnum.SINGLE_FIELD;
                                        dependentFieldNames = new String[]{{
                                            add("quia"),
                                            add("quis"),
                                            add("vitae"),
                                        }};
                                    }}),
                                    add(new SingleFieldDependency("aut", SingleFieldDependencyDependencyTypeEnum.SINGLE_FIELD,                 new String[]{{
                                                        add("error"),
                                                    }}) {{
                                        controllingFieldName = "tenetur";
                                        dependencyType = SingleFieldDependencyDependencyTypeEnum.SINGLE_FIELD;
                                        dependentFieldNames = new String[]{{
                                            add("id"),
                                            add("possimus"),
                                        }};
                                    }}),
                                }};
                                inputFields = new org.openapis.openapi.models.shared.InputFieldDefinition[]{{
                                    add(new InputFieldDefinition(false,                 new FieldTypeDefinition("dicta",                 new org.openapis.openapi.models.shared.Option[]{{
                                                                        add(new Option("accusamus", 249796, 5812.73, false, "enim", false, "accusamus") {{
                                                                            description = "cumque";
                                                                            displayOrder = 813798;
                                                                            doubleData = 4118.2;
                                                                            hidden = false;
                                                                            label = "aliquid";
                                                                            readOnly = false;
                                                                            value = "laborum";
                                                                        }}),
                                                                        add(new Option("blanditiis", 533206, 9560.84, false, "amet", false, "deserunt") {{
                                                                            description = "delectus";
                                                                            displayOrder = 692532;
                                                                            doubleData = 5884.65;
                                                                            hidden = false;
                                                                            label = "nam";
                                                                            readOnly = false;
                                                                            value = "id";
                                                                        }}),
                                                                    }}, FieldTypeDefinitionTypeEnum.DATETIME) {{
                                                        fieldType = FieldTypeDefinitionFieldTypeEnum.RADIO;
                                                        optionsUrl = "natus";
                                                        referencedObjectType = FieldTypeDefinitionReferencedObjectTypeEnum.BLOG_POST;
                                                    }};) {{
                                        isRequired = false;
                                        supportedValueTypes = new org.openapis.openapi.models.shared.InputFieldDefinitionSupportedValueTypesEnum[]{{
                                            add(InputFieldDefinitionSupportedValueTypesEnum.STATIC_VALUE),
                                            add(InputFieldDefinitionSupportedValueTypesEnum.FIELD_DATA),
                                            add(InputFieldDefinitionSupportedValueTypesEnum.FIELD_DATA),
                                        }};
                                        typeDefinition = new FieldTypeDefinition("est",                 new org.openapis.openapi.models.shared.Option[]{{
                                                            add(new Option("modi", 183191, 3978.21, false, "cupiditate", false, "quos") {{
                                                                description = "explicabo";
                                                                displayOrder = 647174;
                                                                doubleData = 7163.27;
                                                                hidden = false;
                                                                label = "quibusdam";
                                                                readOnly = false;
                                                                value = "labore";
                                                            }}),
                                                            add(new Option("fugit", 677817, 5696.18, false, "tempora", false, "facilis") {{
                                                                description = "perferendis";
                                                                displayOrder = 164940;
                                                                doubleData = 8289.4;
                                                                hidden = false;
                                                                label = "ipsam";
                                                                readOnly = false;
                                                                value = "alias";
                                                            }}),
                                                            add(new Option("eligendi", 576157, 3960.98, false, "provident", false, "necessitatibus") {{
                                                                description = "tempore";
                                                                displayOrder = 288476;
                                                                doubleData = 9621.89;
                                                                hidden = false;
                                                                label = "eum";
                                                                readOnly = false;
                                                                value = "non";
                                                            }}),
                                                            add(new Option("dolorum", 447125, 4491.98, false, "illum", false, "maiores") {{
                                                                description = "sint";
                                                                displayOrder = 638921;
                                                                doubleData = 2230.81;
                                                                hidden = false;
                                                                label = "debitis";
                                                                readOnly = false;
                                                                value = "a";
                                                            }}),
                                                        }}, FieldTypeDefinitionTypeEnum.PHONE_NUMBER) {{
                                            fieldType = FieldTypeDefinitionFieldTypeEnum.CALCULATION_READ_TIME;
                                            name = "Miss Irma Wolff";
                                            options = new org.openapis.openapi.models.shared.Option[]{{
                                                add(new Option("dicta", 359444, 2961.4, false, "iusto", false, "dicta") {{
                                                    description = "perferendis";
                                                    displayOrder = 39187;
                                                    doubleData = 4417.11;
                                                    hidden = false;
                                                    label = "ut";
                                                    readOnly = false;
                                                    value = "maiores";
                                                }}),
                                                add(new Option("quae", 216822, 6924.72, false, "molestias", false, "excepturi") {{
                                                    description = "harum";
                                                    displayOrder = 317983;
                                                    doubleData = 8804.76;
                                                    hidden = false;
                                                    label = "commodi";
                                                    readOnly = false;
                                                    value = "repudiandae";
                                                }}),
                                                add(new Option("quasi", 921158, 5759.47, false, "veritatis", false, "itaque") {{
                                                    description = "pariatur";
                                                    displayOrder = 265389;
                                                    doubleData = 5089.69;
                                                    hidden = false;
                                                    label = "rem";
                                                    readOnly = false;
                                                    value = "voluptates";
                                                }}),
                                            }};
                                            optionsUrl = "incidunt";
                                            referencedObjectType = FieldTypeDefinitionReferencedObjectTypeEnum.ATTRIBUTION;
                                            type = FieldTypeDefinitionTypeEnum.STRING;
                                        }};
                                    }}),
                                    add(new InputFieldDefinition(false,                 new FieldTypeDefinition("accusantium",                 new org.openapis.openapi.models.shared.Option[]{{
                                                                        add(new Option("nam", 50588, 8663.83, false, "nemo", false, "voluptatibus") {{
                                                                            description = "maiores";
                                                                            displayOrder = 697429;
                                                                            doubleData = 3732.91;
                                                                            hidden = false;
                                                                            label = "voluptate";
                                                                            readOnly = false;
                                                                            value = "autem";
                                                                        }}),
                                                                    }}, FieldTypeDefinitionTypeEnum.STRING) {{
                                                        fieldType = FieldTypeDefinitionFieldTypeEnum.CALCULATION_SCORE;
                                                        optionsUrl = "amet";
                                                        referencedObjectType = FieldTypeDefinitionReferencedObjectTypeEnum.CONTACT;
                                                    }};) {{
                                        isRequired = false;
                                        supportedValueTypes = new org.openapis.openapi.models.shared.InputFieldDefinitionSupportedValueTypesEnum[]{{
                                            add(InputFieldDefinitionSupportedValueTypesEnum.STATIC_VALUE),
                                            add(InputFieldDefinitionSupportedValueTypesEnum.OBJECT_PROPERTY),
                                        }};
                                        typeDefinition = new FieldTypeDefinition("repudiandae",                 new org.openapis.openapi.models.shared.Option[]{{
                                                            add(new Option("saepe", 868126, 375.59, false, "consequuntur", false, "praesentium") {{
                                                                description = "expedita";
                                                                displayOrder = 469249;
                                                                doubleData = 9988.48;
                                                                hidden = false;
                                                                label = "quibusdam";
                                                                readOnly = false;
                                                                value = "sed";
                                                            }}),
                                                            add(new Option("pariatur", 807319, 4113.97, false, "excepturi", false, "odit") {{
                                                                description = "natus";
                                                                displayOrder = 166847;
                                                                doubleData = 1238.2;
                                                                hidden = false;
                                                                label = "quo";
                                                                readOnly = false;
                                                                value = "illum";
                                                            }}),
                                                        }}, FieldTypeDefinitionTypeEnum.ENUMERATION) {{
                                            fieldType = FieldTypeDefinitionFieldTypeEnum.NUMBER;
                                            name = "Alfonso Green";
                                            options = new org.openapis.openapi.models.shared.Option[]{{
                                                add(new Option("magnam", 92373, 5699.65, false, "ullam", false, "provident") {{
                                                    description = "nobis";
                                                    displayOrder = 428769;
                                                    doubleData = 8784.53;
                                                    hidden = false;
                                                    label = "aspernatur";
                                                    readOnly = false;
                                                    value = "architecto";
                                                }}),
                                                add(new Option("mollitia", 320997, 4314.18, false, "dolor", false, "necessitatibus") {{
                                                    description = "quos";
                                                    displayOrder = 574325;
                                                    doubleData = 336.25;
                                                    hidden = false;
                                                    label = "mollitia";
                                                    readOnly = false;
                                                    value = "reiciendis";
                                                }}),
                                                add(new Option("debitis", 260341, 8061.94, false, "deleniti", false, "facilis") {{
                                                    description = "odit";
                                                    displayOrder = 367562;
                                                    doubleData = 972.6;
                                                    hidden = false;
                                                    label = "iure";
                                                    readOnly = false;
                                                    value = "doloribus";
                                                }}),
                                            }};
                                            optionsUrl = "in";
                                            referencedObjectType = FieldTypeDefinitionReferencedObjectTypeEnum.PRODUCT;
                                            type = FieldTypeDefinitionTypeEnum.STRING;
                                        }};
                                    }}),
                                    add(new InputFieldDefinition(false,                 new FieldTypeDefinition("deleniti",                 new org.openapis.openapi.models.shared.Option[]{{
                                                                        add(new Option("quos", 398221, 2123.9, false, "dolorem", false, "dolor") {{
                                                                            description = "provident";
                                                                            displayOrder = 750844;
                                                                            doubleData = 7301.22;
                                                                            hidden = false;
                                                                            label = "delectus";
                                                                            readOnly = false;
                                                                            value = "quaerat";
                                                                        }}),
                                                                        add(new Option("voluptate", 490459, 9702.37, false, "amet", false, "dolorum") {{
                                                                            description = "qui";
                                                                            displayOrder = 218749;
                                                                            doubleData = 9443.73;
                                                                            hidden = false;
                                                                            label = "excepturi";
                                                                            readOnly = false;
                                                                            value = "cum";
                                                                        }}),
                                                                        add(new Option("odio", 311796, 8810.05, false, "quidem", false, "voluptatibus") {{
                                                                            description = "numquam";
                                                                            displayOrder = 85295;
                                                                            doubleData = 580.29;
                                                                            hidden = false;
                                                                            label = "ipsa";
                                                                            readOnly = false;
                                                                            value = "iure";
                                                                        }}),
                                                                        add(new Option("fugiat", 67249, 7438.35, false, "dolorum", false, "iusto") {{
                                                                            description = "voluptas";
                                                                            displayOrder = 617658;
                                                                            doubleData = 1796.03;
                                                                            hidden = false;
                                                                            label = "atque";
                                                                            readOnly = false;
                                                                            value = "sit";
                                                                        }}),
                                                                    }}, FieldTypeDefinitionTypeEnum.ENUMERATION) {{
                                                        fieldType = FieldTypeDefinitionFieldTypeEnum.CALCULATION_EQUATION;
                                                        optionsUrl = "deleniti";
                                                        referencedObjectType = FieldTypeDefinitionReferencedObjectTypeEnum.BLOG_POST;
                                                    }};) {{
                                        isRequired = false;
                                        supportedValueTypes = new org.openapis.openapi.models.shared.InputFieldDefinitionSupportedValueTypesEnum[]{{
                                            add(InputFieldDefinitionSupportedValueTypesEnum.OBJECT_PROPERTY),
                                            add(InputFieldDefinitionSupportedValueTypesEnum.FIELD_DATA),
                                            add(InputFieldDefinitionSupportedValueTypesEnum.FIELD_DATA),
                                            add(InputFieldDefinitionSupportedValueTypesEnum.FIELD_DATA),
                                        }};
                                        typeDefinition = new FieldTypeDefinition("porro",                 new org.openapis.openapi.models.shared.Option[]{{
                                                            add(new Option("adipisci", 992397, 9342.14, false, "modi", false, "iste") {{
                                                                description = "blanditiis";
                                                                displayOrder = 621479;
                                                                doubleData = 503.7;
                                                                hidden = false;
                                                                label = "occaecati";
                                                                readOnly = false;
                                                                value = "rerum";
                                                            }}),
                                                        }}, FieldTypeDefinitionTypeEnum.PHONE_NUMBER) {{
                                            fieldType = FieldTypeDefinitionFieldTypeEnum.DATE;
                                            name = "Mrs. Deanna Kuhn";
                                            options = new org.openapis.openapi.models.shared.Option[]{{
                                                add(new Option("vero", 345352, 9441.2, false, "recusandae", false, "omnis") {{
                                                    description = "perferendis";
                                                    displayOrder = 170986;
                                                    doubleData = 7936.98;
                                                    hidden = false;
                                                    label = "quam";
                                                    readOnly = false;
                                                    value = "dolor";
                                                }}),
                                            }};
                                            optionsUrl = "facilis";
                                            referencedObjectType = FieldTypeDefinitionReferencedObjectTypeEnum.SITE_PAGE;
                                            type = FieldTypeDefinitionTypeEnum.STRING;
                                        }};
                                    }}),
                                    add(new InputFieldDefinition(false,                 new FieldTypeDefinition("dolores",                 new org.openapis.openapi.models.shared.Option[]{{
                                                                        add(new Option("qui", 204865, 1448.47, false, "magni", false, "odio") {{
                                                                            description = "facilis";
                                                                            displayOrder = 396060;
                                                                            doubleData = 4631.5;
                                                                            hidden = false;
                                                                            label = "molestias";
                                                                            readOnly = false;
                                                                            value = "temporibus";
                                                                        }}),
                                                                        add(new Option("cumque", 746994, 7486.64, false, "et", false, "saepe") {{
                                                                            description = "sunt";
                                                                            displayOrder = 355613;
                                                                            doubleData = 7220.81;
                                                                            hidden = false;
                                                                            label = "hic";
                                                                            readOnly = false;
                                                                            value = "voluptatem";
                                                                        }}),
                                                                        add(new Option("cupiditate", 45614, 9619.37, false, "dolorem", false, "dolore") {{
                                                                            description = "ipsum";
                                                                            displayOrder = 83422;
                                                                            doubleData = 7492.55;
                                                                            hidden = false;
                                                                            label = "quos";
                                                                            readOnly = false;
                                                                            value = "tempore";
                                                                        }}),
                                                                    }}, FieldTypeDefinitionTypeEnum.BOOL) {{
                                                        fieldType = FieldTypeDefinitionFieldTypeEnum.FILE;
                                                        optionsUrl = "dolorum";
                                                        referencedObjectType = FieldTypeDefinitionReferencedObjectTypeEnum.PRODUCT;
                                                    }};) {{
                                        isRequired = false;
                                        supportedValueTypes = new org.openapis.openapi.models.shared.InputFieldDefinitionSupportedValueTypesEnum[]{{
                                            add(InputFieldDefinitionSupportedValueTypesEnum.FIELD_DATA),
                                            add(InputFieldDefinitionSupportedValueTypesEnum.FIELD_DATA),
                                            add(InputFieldDefinitionSupportedValueTypesEnum.OBJECT_PROPERTY),
                                            add(InputFieldDefinitionSupportedValueTypesEnum.STATIC_VALUE),
                                        }};
                                        typeDefinition = new FieldTypeDefinition("quam",                 new org.openapis.openapi.models.shared.Option[]{{
                                                            add(new Option("soluta", 117531, 6748.48, false, "totam", false, "incidunt") {{
                                                                description = "incidunt";
                                                                displayOrder = 186458;
                                                                doubleData = 5867.84;
                                                                hidden = false;
                                                                label = "maxime";
                                                                readOnly = false;
                                                                value = "pariatur";
                                                            }}),
                                                        }}, FieldTypeDefinitionTypeEnum.NUMBER) {{
                                            fieldType = FieldTypeDefinitionFieldTypeEnum.RADIO;
                                            name = "Elbert Gislason I";
                                            options = new org.openapis.openapi.models.shared.Option[]{{
                                                add(new Option("provident", 324683, 8310.49, false, "totam", false, "similique") {{
                                                    description = "accusamus";
                                                    displayOrder = 320017;
                                                    doubleData = 9044.25;
                                                    hidden = false;
                                                    label = "suscipit";
                                                    readOnly = false;
                                                    value = "deserunt";
                                                }}),
                                                add(new Option("quod", 885338, 1856.36, false, "dolorum", false, "a") {{
                                                    description = "alias";
                                                    displayOrder = 872651;
                                                    doubleData = 3118.6;
                                                    hidden = false;
                                                    label = "tempora";
                                                    readOnly = false;
                                                    value = "vel";
                                                }}),
                                                add(new Option("tenetur", 229442, 7308.56, false, "accusamus", false, "numquam") {{
                                                    description = "esse";
                                                    displayOrder = 687488;
                                                    doubleData = 4834.09;
                                                    hidden = false;
                                                    label = "ipsum";
                                                    readOnly = false;
                                                    value = "quisquam";
                                                }}),
                                                add(new Option("sit", 711584, 2074.7, false, "sed", false, "vel") {{
                                                    description = "enim";
                                                    displayOrder = 213312;
                                                    doubleData = 9574.51;
                                                    hidden = false;
                                                    label = "totam";
                                                    readOnly = false;
                                                    value = "nihil";
                                                }}),
                                            }};
                                            optionsUrl = "libero";
                                            referencedObjectType = FieldTypeDefinitionReferencedObjectTypeEnum.LANDING_PAGE;
                                            type = FieldTypeDefinitionTypeEnum.PHONE_NUMBER;
                                        }};
                                    }}),
                                }};
                                labels = new java.util.HashMap<String, org.openapis.openapi.models.shared.ActionLabels>() {{
                                    put("aut", new ActionLabels("omnis") {{
                                        actionCardContent = "quas";
                                        actionDescription = "itaque";
                                        actionName = "consequatur";
                                        appDisplayName = "est";
                                        inputFieldDescriptions = new java.util.HashMap<String, String>() {{
                                            put("porro", "doloribus");
                                            put("ut", "facilis");
                                            put("cupiditate", "qui");
                                            put("quae", "laudantium");
                                        }};
                                        inputFieldLabels = new java.util.HashMap<String, String>() {{
                                            put("occaecati", "voluptatibus");
                                            put("quisquam", "vero");
                                        }};
                                    }});
                                }};
                                objectRequestOptions = new ObjectRequestOptions(                new String[]{{
                                                    add("ipsum"),
                                                    add("delectus"),
                                                }});;
                                objectTypes = new String[]{{
                                    add("consectetur"),
                                    add("vero"),
                                }};
                                published = false;
                            }};, 949319, "dignissimos");            

            PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse res = sdk.definitions.patchAutomationV4ActionsAppIdDefinitionIdUpdate(req, new PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity("hic") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.extensionActionDefinition != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAutomationV4ActionsAppIdCreate

Creates a new custom workflow action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAutomationV4ActionsAppIdCreateRequest;
import org.openapis.openapi.models.operations.PostAutomationV4ActionsAppIdCreateResponse;
import org.openapis.openapi.models.operations.PostAutomationV4ActionsAppIdCreateSecurity;
import org.openapis.openapi.models.shared.ActionFunction;
import org.openapis.openapi.models.shared.ActionFunctionFunctionTypeEnum;
import org.openapis.openapi.models.shared.ActionLabels;
import org.openapis.openapi.models.shared.ConditionalSingleFieldDependency;
import org.openapis.openapi.models.shared.ConditionalSingleFieldDependencyDependencyTypeEnum;
import org.openapis.openapi.models.shared.ExtensionActionDefinitionInput;
import org.openapis.openapi.models.shared.FieldTypeDefinition;
import org.openapis.openapi.models.shared.FieldTypeDefinitionFieldTypeEnum;
import org.openapis.openapi.models.shared.FieldTypeDefinitionReferencedObjectTypeEnum;
import org.openapis.openapi.models.shared.FieldTypeDefinitionTypeEnum;
import org.openapis.openapi.models.shared.InputFieldDefinition;
import org.openapis.openapi.models.shared.InputFieldDefinitionSupportedValueTypesEnum;
import org.openapis.openapi.models.shared.ObjectRequestOptions;
import org.openapis.openapi.models.shared.Option;
import org.openapis.openapi.models.shared.SingleFieldDependency;
import org.openapis.openapi.models.shared.SingleFieldDependencyDependencyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAutomationV4ActionsAppIdCreateRequest req = new PostAutomationV4ActionsAppIdCreateRequest(                new ExtensionActionDefinitionInput("distinctio",                 new org.openapis.openapi.models.shared.ActionFunction[]{{
                                                add(new ActionFunction("laudantium", ActionFunctionFunctionTypeEnum.PRE_ACTION_EXECUTION) {{
                                                    functionSource = "odio";
                                                    functionType = ActionFunctionFunctionTypeEnum.PRE_FETCH_OPTIONS;
                                                    id = "bd74dd39-c0f5-4d2c-bf7c-70a45626d436";
                                                }}),
                                                add(new ActionFunction("accusamus", ActionFunctionFunctionTypeEnum.PRE_ACTION_EXECUTION) {{
                                                    functionSource = "dolor";
                                                    functionType = ActionFunctionFunctionTypeEnum.POST_FETCH_OPTIONS;
                                                    id = "16d9f5fc-e6c5-4561-86c3-e250fb008c42";
                                                }}),
                                                add(new ActionFunction("suscipit", ActionFunctionFunctionTypeEnum.POST_FETCH_OPTIONS) {{
                                                    functionSource = "non";
                                                    functionType = ActionFunctionFunctionTypeEnum.PRE_ACTION_EXECUTION;
                                                    id = "aac366c8-dd6b-4144-a907-474778a7bd46";
                                                }}),
                                                add(new ActionFunction("accusamus", ActionFunctionFunctionTypeEnum.PRE_ACTION_EXECUTION) {{
                                                    functionSource = "eos";
                                                    functionType = ActionFunctionFunctionTypeEnum.PRE_FETCH_OPTIONS;
                                                    id = "c10ab3cd-ca42-4519-84e5-23c7e0bc7178";
                                                }}),
                                            }},                 new org.openapis.openapi.models.shared.InputFieldDefinition[]{{
                                                add(new InputFieldDefinition(false,                 new FieldTypeDefinition("veritatis",                 new org.openapis.openapi.models.shared.Option[]{{
                                                                                    add(new Option("quae", 936747, 4240.32, false, "in", false, "eius") {{
                                                                                        description = "quasi";
                                                                                        displayOrder = 628899;
                                                                                        doubleData = 6336.08;
                                                                                        hidden = false;
                                                                                        label = "aliquid";
                                                                                        readOnly = false;
                                                                                        value = "tenetur";
                                                                                    }}),
                                                                                }}, FieldTypeDefinitionTypeEnum.CURRENCY_NUMBER) {{
                                                                    fieldType = FieldTypeDefinitionFieldTypeEnum.CALCULATION_SCORE;
                                                                    optionsUrl = "soluta";
                                                                    referencedObjectType = FieldTypeDefinitionReferencedObjectTypeEnum.DEAL;
                                                                }};) {{
                                                    isRequired = false;
                                                    supportedValueTypes = new org.openapis.openapi.models.shared.InputFieldDefinitionSupportedValueTypesEnum[]{{
                                                        add(InputFieldDefinitionSupportedValueTypesEnum.OBJECT_PROPERTY),
                                                        add(InputFieldDefinitionSupportedValueTypesEnum.FIELD_DATA),
                                                        add(InputFieldDefinitionSupportedValueTypesEnum.STATIC_VALUE),
                                                    }};
                                                    typeDefinition = new FieldTypeDefinition("rerum",                 new org.openapis.openapi.models.shared.Option[]{{
                                                                        add(new Option("tempore", 240020, 7669.64, false, "consequuntur", false, "consequatur") {{
                                                                            description = "minima";
                                                                            displayOrder = 716244;
                                                                            doubleData = 7567.79;
                                                                            hidden = false;
                                                                            label = "sit";
                                                                            readOnly = false;
                                                                            value = "culpa";
                                                                        }}),
                                                                        add(new Option("blanditiis", 590984, 9537.22, false, "nulla", false, "quas") {{
                                                                            description = "minus";
                                                                            displayOrder = 308286;
                                                                            doubleData = 9591.67;
                                                                            hidden = false;
                                                                            label = "consectetur";
                                                                            readOnly = false;
                                                                            value = "esse";
                                                                        }}),
                                                                        add(new Option("pariatur", 820767, 1576.32, false, "eveniet", false, "asperiores") {{
                                                                            description = "esse";
                                                                            displayOrder = 97468;
                                                                            doubleData = 9518.75;
                                                                            hidden = false;
                                                                            label = "error";
                                                                            readOnly = false;
                                                                            value = "sint";
                                                                        }}),
                                                                    }}, FieldTypeDefinitionTypeEnum.JSON) {{
                                                        fieldType = FieldTypeDefinitionFieldTypeEnum.TEXTAREA;
                                                        name = "Carol Sawayn";
                                                        options = new org.openapis.openapi.models.shared.Option[]{{
                                                            add(new Option("incidunt", 539224, 1288.6, false, "minima", false, "nisi") {{
                                                                description = "consequuntur";
                                                                displayOrder = 536178;
                                                                doubleData = 1438.29;
                                                                hidden = false;
                                                                label = "fuga";
                                                                readOnly = false;
                                                                value = "mollitia";
                                                            }}),
                                                            add(new Option("saepe", 578922, 5438.06, false, "et", false, "esse") {{
                                                                description = "fugit";
                                                                displayOrder = 956406;
                                                                doubleData = 1598.7;
                                                                hidden = false;
                                                                label = "ratione";
                                                                readOnly = false;
                                                                value = "explicabo";
                                                            }}),
                                                            add(new Option("nam", 877131, 3990.25, false, "quasi", false, "saepe") {{
                                                                description = "eveniet";
                                                                displayOrder = 882042;
                                                                doubleData = 829.71;
                                                                hidden = false;
                                                                label = "esse";
                                                                readOnly = false;
                                                                value = "quod";
                                                            }}),
                                                        }};
                                                        optionsUrl = "vel";
                                                        referencedObjectType = FieldTypeDefinitionReferencedObjectTypeEnum.AUTOMATION_PLATFORM_FLOW;
                                                        type = FieldTypeDefinitionTypeEnum.ENUMERATION;
                                                    }};
                                                }}),
                                                add(new InputFieldDefinition(false,                 new FieldTypeDefinition("est",                 new org.openapis.openapi.models.shared.Option[]{{
                                                                                    add(new Option("vel", 287051, 8225.6, false, "facilis", false, "cum") {{
                                                                                        description = "totam";
                                                                                        displayOrder = 853940;
                                                                                        doubleData = 4240.89;
                                                                                        hidden = false;
                                                                                        label = "ducimus";
                                                                                        readOnly = false;
                                                                                        value = "quos";
                                                                                    }}),
                                                                                    add(new Option("nemo", 924967, 3975.33, false, "aperiam", false, "cum") {{
                                                                                        description = "commodi";
                                                                                        displayOrder = 447144;
                                                                                        doubleData = 3605.45;
                                                                                        hidden = false;
                                                                                        label = "reiciendis";
                                                                                        readOnly = false;
                                                                                        value = "assumenda";
                                                                                    }}),
                                                                                    add(new Option("numquam", 985492, 3817.6, false, "reiciendis", false, "quidem") {{
                                                                                        description = "consectetur";
                                                                                        displayOrder = 449083;
                                                                                        doubleData = 3485.19;
                                                                                        hidden = false;
                                                                                        label = "earum";
                                                                                        readOnly = false;
                                                                                        value = "facere";
                                                                                    }}),
                                                                                    add(new Option("adipisci", 249420, 2282.63, false, "beatae", false, "dignissimos") {{
                                                                                        description = "saepe";
                                                                                        displayOrder = 897071;
                                                                                        doubleData = 2965.56;
                                                                                        hidden = false;
                                                                                        label = "sunt";
                                                                                        readOnly = false;
                                                                                        value = "asperiores";
                                                                                    }}),
                                                                                }}, FieldTypeDefinitionTypeEnum.OBJECT_COORDINATES) {{
                                                                    fieldType = FieldTypeDefinitionFieldTypeEnum.CALCULATION_READ_TIME;
                                                                    optionsUrl = "consectetur";
                                                                    referencedObjectType = FieldTypeDefinitionReferencedObjectTypeEnum.HUB;
                                                                }};) {{
                                                    isRequired = false;
                                                    supportedValueTypes = new org.openapis.openapi.models.shared.InputFieldDefinitionSupportedValueTypesEnum[]{{
                                                        add(InputFieldDefinitionSupportedValueTypesEnum.FIELD_DATA),
                                                        add(InputFieldDefinitionSupportedValueTypesEnum.STATIC_VALUE),
                                                    }};
                                                    typeDefinition = new FieldTypeDefinition("aperiam",                 new org.openapis.openapi.models.shared.Option[]{{
                                                                        add(new Option("dignissimos", 640024, 9894.1, false, "nemo", false, "quae") {{
                                                                            description = "quaerat";
                                                                            displayOrder = 162954;
                                                                            doubleData = 8315.2;
                                                                            hidden = false;
                                                                            label = "officia";
                                                                            readOnly = false;
                                                                            value = "maxime";
                                                                        }}),
                                                                        add(new Option("adipisci", 683573, 6625.05, false, "suscipit", false, "velit") {{
                                                                            description = "quaerat";
                                                                            displayOrder = 783235;
                                                                            doubleData = 8018.36;
                                                                            hidden = false;
                                                                            label = "labore";
                                                                            readOnly = false;
                                                                            value = "ab";
                                                                        }}),
                                                                    }}, FieldTypeDefinitionTypeEnum.PHONE_NUMBER) {{
                                                        fieldType = FieldTypeDefinitionFieldTypeEnum.PHONENUMBER;
                                                        name = "Ms. Dana Huel";
                                                        options = new org.openapis.openapi.models.shared.Option[]{{
                                                            add(new Option("omnis", 945302, 984.78, false, "at", false, "et") {{
                                                                description = "ex";
                                                                displayOrder = 536275;
                                                                doubleData = 9292.92;
                                                                hidden = false;
                                                                label = "dolorum";
                                                                readOnly = false;
                                                                value = "architecto";
                                                            }}),
                                                            add(new Option("adipisci", 614465, 8395.13, false, "accusantium", false, "rem") {{
                                                                description = "voluptate";
                                                                displayOrder = 55965;
                                                                doubleData = 3267.01;
                                                                hidden = false;
                                                                label = "veritatis";
                                                                readOnly = false;
                                                                value = "consectetur";
                                                            }}),
                                                            add(new Option("corrupti", 251941, 324.65, false, "dolor", false, "occaecati") {{
                                                                description = "aut";
                                                                displayOrder = 513075;
                                                                doubleData = 4287.96;
                                                                hidden = false;
                                                                label = "mollitia";
                                                                readOnly = false;
                                                                value = "ab";
                                                            }}),
                                                            add(new Option("dignissimos", 115484, 9816.4, false, "natus", false, "velit") {{
                                                                description = "numquam";
                                                                displayOrder = 771089;
                                                                doubleData = 1310.55;
                                                                hidden = false;
                                                                label = "voluptas";
                                                                readOnly = false;
                                                                value = "aut";
                                                            }}),
                                                        }};
                                                        optionsUrl = "voluptatibus";
                                                        referencedObjectType = FieldTypeDefinitionReferencedObjectTypeEnum.LANDING_PAGE;
                                                        type = FieldTypeDefinitionTypeEnum.OBJECT_COORDINATES;
                                                    }};
                                                }}),
                                            }},                 new java.util.HashMap<String, org.openapis.openapi.models.shared.ActionLabels>() {{
                                                put("laboriosam", new ActionLabels("aliquam") {{
                                                    actionCardContent = "ipsa";
                                                    actionDescription = "voluptates";
                                                    actionName = "libero";
                                                    appDisplayName = "vitae";
                                                    inputFieldDescriptions = new java.util.HashMap<String, String>() {{
                                                        put("similique", "tempora");
                                                        put("aspernatur", "voluptas");
                                                        put("voluptas", "voluptas");
                                                        put("minima", "nobis");
                                                    }};
                                                    inputFieldLabels = new java.util.HashMap<String, String>() {{
                                                        put("adipisci", "minus");
                                                        put("dolores", "blanditiis");
                                                        put("in", "dolore");
                                                    }};
                                                }});
                                                put("officiis", new ActionLabels("reiciendis") {{
                                                    actionCardContent = "temporibus";
                                                    actionDescription = "ullam";
                                                    actionName = "adipisci";
                                                    appDisplayName = "cum";
                                                    inputFieldDescriptions = new java.util.HashMap<String, String>() {{
                                                        put("quas", "hic");
                                                        put("nesciunt", "culpa");
                                                        put("corrupti", "pariatur");
                                                    }};
                                                    inputFieldLabels = new java.util.HashMap<String, String>() {{
                                                        put("hic", "exercitationem");
                                                        put("nobis", "sit");
                                                        put("rerum", "sed");
                                                    }};
                                                }});
                                                put("explicabo", new ActionLabels("unde") {{
                                                    actionCardContent = "asperiores";
                                                    actionDescription = "facilis";
                                                    actionName = "voluptate";
                                                    appDisplayName = "expedita";
                                                    inputFieldDescriptions = new java.util.HashMap<String, String>() {{
                                                        put("iste", "dolore");
                                                    }};
                                                    inputFieldLabels = new java.util.HashMap<String, String>() {{
                                                        put("sed", "in");
                                                        put("commodi", "quidem");
                                                        put("explicabo", "voluptas");
                                                    }};
                                                }});
                                            }},                 new String[]{{
                                                add("suscipit"),
                                            }}, false) {{
                                archivedAt = 960257L;
                                inputFieldDependencies = new Object[]{{
                                    add(new SingleFieldDependency("maiores", SingleFieldDependencyDependencyTypeEnum.SINGLE_FIELD,                 new String[]{{
                                                        add("sed"),
                                                        add("provident"),
                                                    }}) {{
                                        controllingFieldName = "reiciendis";
                                        dependencyType = SingleFieldDependencyDependencyTypeEnum.SINGLE_FIELD;
                                        dependentFieldNames = new String[]{{
                                            add("corrupti"),
                                        }};
                                    }}),
                                    add(new SingleFieldDependency("occaecati", SingleFieldDependencyDependencyTypeEnum.SINGLE_FIELD,                 new String[]{{
                                                        add("voluptatibus"),
                                                        add("tempora"),
                                                        add("tempora"),
                                                    }}) {{
                                        controllingFieldName = "necessitatibus";
                                        dependencyType = SingleFieldDependencyDependencyTypeEnum.SINGLE_FIELD;
                                        dependentFieldNames = new String[]{{
                                            add("ea"),
                                        }};
                                    }}),
                                    add(new SingleFieldDependency("officiis", SingleFieldDependencyDependencyTypeEnum.SINGLE_FIELD,                 new String[]{{
                                                        add("facilis"),
                                                        add("quaerat"),
                                                        add("incidunt"),
                                                    }}) {{
                                        controllingFieldName = "reiciendis";
                                        dependencyType = SingleFieldDependencyDependencyTypeEnum.SINGLE_FIELD;
                                        dependentFieldNames = new String[]{{
                                            add("sit"),
                                            add("non"),
                                        }};
                                    }}),
                                    add(new SingleFieldDependency("veniam", SingleFieldDependencyDependencyTypeEnum.SINGLE_FIELD,                 new String[]{{
                                                        add("recusandae"),
                                                        add("reiciendis"),
                                                    }}) {{
                                        controllingFieldName = "debitis";
                                        dependencyType = SingleFieldDependencyDependencyTypeEnum.SINGLE_FIELD;
                                        dependentFieldNames = new String[]{{
                                            add("sit"),
                                            add("nobis"),
                                            add("error"),
                                        }};
                                    }}),
                                }};
                                objectRequestOptions = new ObjectRequestOptions(                new String[]{{
                                                    add("magni"),
                                                    add("aperiam"),
                                                    add("saepe"),
                                                    add("numquam"),
                                                }});;
                            }};, 329935);            

            PostAutomationV4ActionsAppIdCreateResponse res = sdk.definitions.postAutomationV4ActionsAppIdCreate(req, new PostAutomationV4ActionsAppIdCreateSecurity("in") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.extensionActionDefinition != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
