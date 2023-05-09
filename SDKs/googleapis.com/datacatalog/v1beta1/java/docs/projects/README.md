# projects

### Available Operations

* [datacatalogProjectsLocationsEntryGroupsCreate](#datacatalogprojectslocationsentrygroupscreate) - A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [datacatalogProjectsLocationsEntryGroupsEntriesCreate](#datacatalogprojectslocationsentrygroupsentriescreate) - Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.
* [datacatalogProjectsLocationsEntryGroupsEntriesList](#datacatalogprojectslocationsentrygroupsentrieslist) - Lists entries.
* [datacatalogProjectsLocationsEntryGroupsList](#datacatalogprojectslocationsentrygroupslist) - Lists entry groups.
* [datacatalogProjectsLocationsEntryGroupsTagsCreate](#datacatalogprojectslocationsentrygroupstagscreate) - Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
* [datacatalogProjectsLocationsEntryGroupsTagsList](#datacatalogprojectslocationsentrygroupstagslist) - Lists tags assigned to an Entry. The columns in the response are lowercased.
* [datacatalogProjectsLocationsTagTemplatesCreate](#datacatalogprojectslocationstagtemplatescreate) - Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [datacatalogProjectsLocationsTagTemplatesFieldsCreate](#datacatalogprojectslocationstagtemplatesfieldscreate) - Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename](#datacatalogprojectslocationstagtemplatesfieldsenumvaluesrename) - Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.
* [datacatalogProjectsLocationsTaxonomiesCreate](#datacatalogprojectslocationstaxonomiescreate) - Creates a taxonomy in the specified project.
* [datacatalogProjectsLocationsTaxonomiesExport](#datacatalogprojectslocationstaxonomiesexport) - Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
* [datacatalogProjectsLocationsTaxonomiesImport](#datacatalogprojectslocationstaxonomiesimport) - Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.
* [datacatalogProjectsLocationsTaxonomiesList](#datacatalogprojectslocationstaxonomieslist) - Lists all taxonomies in a project in a particular location that the caller has permission to view.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate](#datacatalogprojectslocationstaxonomiespolicytagscreate) - Creates a policy tag in the specified taxonomy.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete](#datacatalogprojectslocationstaxonomiespolicytagsdelete) - Deletes a policy tag. Also deletes all of its descendant policy tags.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsGet](#datacatalogprojectslocationstaxonomiespolicytagsget) - Gets a policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy](#datacatalogprojectslocationstaxonomiespolicytagsgetiampolicy) - Gets the IAM policy for a taxonomy or a policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsList](#datacatalogprojectslocationstaxonomiespolicytagslist) - Lists all policy tags in a taxonomy.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch](#datacatalogprojectslocationstaxonomiespolicytagspatch) - Updates a policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy](#datacatalogprojectslocationstaxonomiespolicytagssetiampolicy) - Sets the IAM policy for a taxonomy or a policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions](#datacatalogprojectslocationstaxonomiespolicytagstestiampermissions) - Returns the permissions that a caller has on the specified taxonomy or policy tag.

## datacatalogProjectsLocationsEntryGroupsCreate

A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsCreateRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsCreateResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1EntryGroupInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SystemTimestampsInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsCreateRequest req = new DatacatalogProjectsLocationsEntryGroupsCreateRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1beta1EntryGroupInput = new GoogleCloudDatacatalogV1beta1EntryGroupInput() {{
                    dataCatalogTimestamps = new GoogleCloudDatacatalogV1beta1SystemTimestampsInput() {{
                        createTime = "hic";
                        updateTime = "saepe";
                    }};;
                    description = "fuga";
                    displayName = "in";
                    name = "Sheryl Kertzmann";
                }};;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                entryGroupId = "est";
                fields = "mollitia";
                key = "laborum";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "corporis";
                uploadProtocol = "explicabo";
            }};            

            DatacatalogProjectsLocationsEntryGroupsCreateResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsCreate(req, new DatacatalogProjectsLocationsEntryGroupsCreateSecurity("nobis", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1EntryGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesCreate

Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1ColumnSchema;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1EntryInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1EntryTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1Schema;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SystemTimestampsInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1UsageSignal;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1UsageStats;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest req = new DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1beta1EntryInput = new GoogleCloudDatacatalogV1beta1EntryInput() {{
                    description = "minima";
                    displayName = "excepturi";
                    gcsFilesetSpec = new GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput() {{
                        filePatterns = new String[]{{
                            add("iure"),
                        }};
                    }};;
                    linkedResource = "culpa";
                    schema = new GoogleCloudDatacatalogV1beta1Schema() {{
                        columns = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1ColumnSchema[]{{
                            add(new GoogleCloudDatacatalogV1beta1ColumnSchema() {{
                                column = "sapiente";
                                description = "architecto";
                                mode = "mollitia";
                                subcolumns = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1ColumnSchema[]{{
                                    add(new GoogleCloudDatacatalogV1beta1ColumnSchema() {{}}),
                                }};
                                type = "culpa";
                            }}),
                            add(new GoogleCloudDatacatalogV1beta1ColumnSchema() {{
                                column = "consequuntur";
                                description = "repellat";
                                mode = "mollitia";
                                subcolumns = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1ColumnSchema[]{{
                                    add(new GoogleCloudDatacatalogV1beta1ColumnSchema() {{}}),
                                    add(new GoogleCloudDatacatalogV1beta1ColumnSchema() {{}}),
                                    add(new GoogleCloudDatacatalogV1beta1ColumnSchema() {{}}),
                                }};
                                type = "numquam";
                            }}),
                            add(new GoogleCloudDatacatalogV1beta1ColumnSchema() {{
                                column = "commodi";
                                description = "quam";
                                mode = "molestiae";
                                subcolumns = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1ColumnSchema[]{{
                                    add(new GoogleCloudDatacatalogV1beta1ColumnSchema() {{}}),
                                }};
                                type = "error";
                            }}),
                            add(new GoogleCloudDatacatalogV1beta1ColumnSchema() {{
                                column = "quia";
                                description = "quis";
                                mode = "vitae";
                                subcolumns = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1ColumnSchema[]{{
                                    add(new GoogleCloudDatacatalogV1beta1ColumnSchema() {{}}),
                                    add(new GoogleCloudDatacatalogV1beta1ColumnSchema() {{}}),
                                    add(new GoogleCloudDatacatalogV1beta1ColumnSchema() {{}}),
                                }};
                                type = "animi";
                            }}),
                        }};
                    }};;
                    sourceSystemTimestamps = new GoogleCloudDatacatalogV1beta1SystemTimestampsInput() {{
                        createTime = "enim";
                        updateTime = "odit";
                    }};;
                    type = GoogleCloudDatacatalogV1beta1EntryTypeEnum.DATA_STREAM;
                    usageSignal = new GoogleCloudDatacatalogV1beta1UsageSignal() {{
                        updateTime = "sequi";
                        usageWithinTimeRange = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1UsageStats>() {{
                            put("ipsam", new GoogleCloudDatacatalogV1beta1UsageStats() {{
                                totalCancellations = 6625.27;
                                totalCompletions = 8209.94;
                                totalExecutionTimeForCompletionsMillis = 135.71;
                                totalFailures = 971.01;
                            }});
                            put("error", new GoogleCloudDatacatalogV1beta1UsageStats() {{
                                totalCancellations = 8379.45;
                                totalCompletions = 6736.6;
                                totalExecutionTimeForCompletionsMillis = 960.98;
                                totalFailures = 9719.45;
                            }});
                            put("voluptatibus", new GoogleCloudDatacatalogV1beta1UsageStats() {{
                                totalCancellations = 8781.94;
                                totalCompletions = 4686.51;
                                totalExecutionTimeForCompletionsMillis = 5096.24;
                                totalFailures = 9767.62;
                            }});
                            put("ipsa", new GoogleCloudDatacatalogV1beta1UsageStats() {{
                                totalCancellations = 6048.46;
                                totalCompletions = 4511.59;
                                totalExecutionTimeForCompletionsMillis = 7392.64;
                                totalFailures = 199.87;
                            }});
                        }};
                    }};;
                    userSpecifiedSystem = "doloremque";
                    userSpecifiedType = "reprehenderit";
                }};;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "dicta";
                entryId = "corporis";
                fields = "dolore";
                key = "iusto";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "enim";
                uploadProtocol = "accusamus";
            }};            

            DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsEntriesCreate(req, new DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity("commodi", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1Entry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesList

Lists entries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesListRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesListResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsEntriesListRequest req = new DatacatalogProjectsLocationsEntryGroupsEntriesListRequest("quae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "pariatur";
                key = "modi";
                oauthToken = "praesentium";
                pageSize = 523248L;
                pageToken = "voluptates";
                prettyPrint = false;
                quotaUser = "quasi";
                readMask = "repudiandae";
                uploadType = "sint";
                uploadProtocol = "veritatis";
            }};            

            DatacatalogProjectsLocationsEntryGroupsEntriesListResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsEntriesList(req, new DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity("itaque", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1ListEntriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsEntryGroupsList

Lists entry groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsListRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsListResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsListRequest req = new DatacatalogProjectsLocationsEntryGroupsListRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "deserunt";
                key = "distinctio";
                oauthToken = "quibusdam";
                pageSize = 289406L;
                pageToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "aliquid";
                uploadProtocol = "cupiditate";
            }};            

            DatacatalogProjectsLocationsEntryGroupsListResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsList(req, new DatacatalogProjectsLocationsEntryGroupsListSecurity("quos", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1ListEntryGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsEntryGroupsTagsCreate

Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1TagFieldEnumValue;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1TagFieldInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1TagInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest req = new DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest("magni") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogV1beta1TagInput = new GoogleCloudDatacatalogV1beta1TagInput() {{
                    column = "ipsam";
                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1TagFieldInput>() {{
                        put("fugit", new GoogleCloudDatacatalogV1beta1TagFieldInput() {{
                            boolValue = false;
                            doubleValue = 6778.17;
                            enumValue = new GoogleCloudDatacatalogV1beta1TagFieldEnumValue() {{
                                displayName = "excepturi";
                            }};
                            stringValue = "tempora";
                            timestampValue = "facilis";
                        }});
                    }};
                    name = "Francisco Windler";
                    template = "eligendi";
                }};;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "necessitatibus";
                key = "sint";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "debitis";
                uploadProtocol = "a";
            }};            

            DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsTagsCreate(req, new DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity("dolorum", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1Tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsEntryGroupsTagsList

Lists tags assigned to an Entry. The columns in the response are lowercased.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsTagsListRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsTagsListResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsTagsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsTagsListRequest req = new DatacatalogProjectsLocationsEntryGroupsTagsListRequest("in") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "magnam";
                key = "cumque";
                oauthToken = "facere";
                pageSize = 411820L;
                pageToken = "aliquid";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "accusamus";
                uploadProtocol = "non";
            }};            

            DatacatalogProjectsLocationsEntryGroupsTagsListResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsTagsList(req, new DatacatalogProjectsLocationsEntryGroupsTagsListSecurity("occaecati", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1ListTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTagTemplatesCreate

Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesCreateRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesCreateResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1FieldType;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumType;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1TagTemplateFieldInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1TagTemplateInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTagTemplatesCreateRequest req = new DatacatalogProjectsLocationsTagTemplatesCreateRequest("accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogV1beta1TagTemplateInput = new GoogleCloudDatacatalogV1beta1TagTemplateInput() {{
                    displayName = "quidem";
                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1TagTemplateFieldInput>() {{
                        put("nam", new GoogleCloudDatacatalogV1beta1TagTemplateFieldInput() {{
                            description = "id";
                            displayName = "blanditiis";
                            isRequired = false;
                            order = 533206;
                            type = new GoogleCloudDatacatalogV1beta1FieldType() {{
                                enumType = new GoogleCloudDatacatalogV1beta1FieldTypeEnumType() {{
                                    allowedValues = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue[]{{
                                        add(new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "amet";
                                        }}),
                                        add(new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "deserunt";
                                        }}),
                                        add(new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "nisi";
                                        }}),
                                        add(new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "vel";
                                        }}),
                                    }};
                                }};
                                primitiveType = GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum.BOOL;
                            }};
                        }});
                        put("omnis", new GoogleCloudDatacatalogV1beta1TagTemplateFieldInput() {{
                            description = "molestiae";
                            displayName = "perferendis";
                            isRequired = false;
                            order = 470132;
                            type = new GoogleCloudDatacatalogV1beta1FieldType() {{
                                enumType = new GoogleCloudDatacatalogV1beta1FieldTypeEnumType() {{
                                    allowedValues = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue[]{{
                                        add(new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "distinctio";
                                        }}),
                                        add(new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "id";
                                        }}),
                                    }};
                                }};
                                primitiveType = GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum.DOUBLE;
                            }};
                        }});
                        put("labore", new GoogleCloudDatacatalogV1beta1TagTemplateFieldInput() {{
                            description = "suscipit";
                            displayName = "natus";
                            isRequired = false;
                            order = 749170;
                            type = new GoogleCloudDatacatalogV1beta1FieldType() {{
                                enumType = new GoogleCloudDatacatalogV1beta1FieldTypeEnumType() {{
                                    allowedValues = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue[]{{
                                        add(new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "vero";
                                        }}),
                                        add(new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "aspernatur";
                                        }}),
                                    }};
                                }};
                                primitiveType = GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum.PRIMITIVE_TYPE_UNSPECIFIED;
                            }};
                        }});
                    }};
                    name = "Frances Marks";
                }};;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "mollitia";
                key = "reiciendis";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ad";
                tagTemplateId = "eum";
                uploadType = "dolor";
                uploadProtocol = "necessitatibus";
            }};            

            DatacatalogProjectsLocationsTagTemplatesCreateResponse res = sdk.projects.datacatalogProjectsLocationsTagTemplatesCreate(req, new DatacatalogProjectsLocationsTagTemplatesCreateSecurity("odit", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1TagTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTagTemplatesFieldsCreate

Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1FieldType;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumType;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1TagTemplateFieldInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest req = new DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1beta1TagTemplateFieldInput = new GoogleCloudDatacatalogV1beta1TagTemplateFieldInput() {{
                    description = "doloribus";
                    displayName = "debitis";
                    isRequired = false;
                    order = 260341;
                    type = new GoogleCloudDatacatalogV1beta1FieldType() {{
                        enumType = new GoogleCloudDatacatalogV1beta1FieldTypeEnumType() {{
                            allowedValues = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue[]{{
                                add(new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue() {{
                                    displayName = "deleniti";
                                }}),
                                add(new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue() {{
                                    displayName = "facilis";
                                }}),
                                add(new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue() {{
                                    displayName = "in";
                                }}),
                                add(new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue() {{
                                    displayName = "architecto";
                                }}),
                            }};
                        }};;
                        primitiveType = GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum.PRIMITIVE_TYPE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "expedita";
                fields = "nihil";
                key = "repellat";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "sed";
                tagTemplateFieldId = "saepe";
                uploadType = "pariatur";
                uploadProtocol = "accusantium";
            }};            

            DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse res = sdk.projects.datacatalogProjectsLocationsTagTemplatesFieldsCreate(req, new DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity("consequuntur", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1TagTemplateField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename

Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest req = new DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest = new GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest() {{
                    newEnumValueDisplayName = "sunt";
                }};;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "maxime";
                key = "ea";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "ea";
                uploadProtocol = "accusantium";
            }};            

            DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse res = sdk.projects.datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename(req, new DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameSecurity("ab", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1TagTemplateField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesCreate

Creates a taxonomy in the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesCreateRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesCreateResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SystemTimestampsInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1TaxonomyInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1TaxonomyService;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesCreateRequest req = new DatacatalogProjectsLocationsTaxonomiesCreateRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1beta1TaxonomyInput = new GoogleCloudDatacatalogV1beta1TaxonomyInput() {{
                    activatedPolicyTypes = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum[]{{
                        add(GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum.POLICY_TYPE_UNSPECIFIED),
                        add(GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum.FINE_GRAINED_ACCESS_CONTROL),
                    }};
                    description = "eaque";
                    displayName = "pariatur";
                    service = new GoogleCloudDatacatalogV1beta1TaxonomyService() {{
                        identity = "nemo";
                        name = GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum.MANAGING_SYSTEM_OTHER;
                    }};;
                    taxonomyTimestamps = new GoogleCloudDatacatalogV1beta1SystemTimestampsInput() {{
                        createTime = "perferendis";
                        updateTime = "fugiat";
                    }};;
                }};;
                accessToken = "amet";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "corporis";
                key = "hic";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "dolores";
                uploadProtocol = "quis";
            }};            

            DatacatalogProjectsLocationsTaxonomiesCreateResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesCreate(req, new DatacatalogProjectsLocationsTaxonomiesCreateSecurity("totam", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1Taxonomy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesExport

Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesExportRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesExportResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesExportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesExportRequest req = new DatacatalogProjectsLocationsTaxonomiesExportRequest("eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nesciunt";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "dolores";
                key = "minus";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "dolor";
                serializedTaxonomies = false;
                taxonomies = new String[]{{
                    add("nostrum"),
                    add("hic"),
                    add("recusandae"),
                    add("omnis"),
                }};
                uploadType = "facilis";
                uploadProtocol = "perspiciatis";
            }};            

            DatacatalogProjectsLocationsTaxonomiesExportResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesExport(req, new DatacatalogProjectsLocationsTaxonomiesExportSecurity("voluptatem", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1ExportTaxonomiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesImport

Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesImportRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesImportResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1InlineSource;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomy;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesImportRequest req = new DatacatalogProjectsLocationsTaxonomiesImportRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogV1beta1ImportTaxonomiesRequest = new GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest() {{
                    inlineSource = new GoogleCloudDatacatalogV1beta1InlineSource() {{
                        taxonomies = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomy[]{{
                            add(new GoogleCloudDatacatalogV1beta1SerializedTaxonomy() {{
                                activatedPolicyTypes = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum[]{{
                                    add(GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum.FINE_GRAINED_ACCESS_CONTROL),
                                }};
                                description = "rerum";
                                displayName = "adipisci";
                                policyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag[]{{
                                    add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{
                                        childPolicyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag[]{{
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                        }};
                                        description = "modi";
                                        displayName = "iste";
                                        policyTag = "dolorum";
                                    }}),
                                    add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{
                                        childPolicyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag[]{{
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                        }};
                                        description = "pariatur";
                                        displayName = "provident";
                                        policyTag = "nobis";
                                    }}),
                                    add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{
                                        childPolicyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag[]{{
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                        }};
                                        description = "delectus";
                                        displayName = "quaerat";
                                        policyTag = "quos";
                                    }}),
                                    add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{
                                        childPolicyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag[]{{
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                        }};
                                        description = "dolorem";
                                        displayName = "dolorem";
                                        policyTag = "dolor";
                                    }}),
                                }};
                            }}),
                            add(new GoogleCloudDatacatalogV1beta1SerializedTaxonomy() {{
                                activatedPolicyTypes = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum[]{{
                                    add(GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum.POLICY_TYPE_UNSPECIFIED),
                                }};
                                description = "hic";
                                displayName = "excepturi";
                                policyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag[]{{
                                    add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{
                                        childPolicyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag[]{{
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                        }};
                                        description = "dignissimos";
                                        displayName = "reiciendis";
                                        policyTag = "amet";
                                    }}),
                                    add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{
                                        childPolicyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag[]{{
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                        }};
                                        description = "numquam";
                                        displayName = "veritatis";
                                        policyTag = "ipsa";
                                    }}),
                                    add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{
                                        childPolicyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag[]{{
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                        }};
                                        description = "iure";
                                        displayName = "odio";
                                        policyTag = "quaerat";
                                    }}),
                                }};
                            }}),
                            add(new GoogleCloudDatacatalogV1beta1SerializedTaxonomy() {{
                                activatedPolicyTypes = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum[]{{
                                    add(GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum.FINE_GRAINED_ACCESS_CONTROL),
                                    add(GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum.FINE_GRAINED_ACCESS_CONTROL),
                                    add(GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum.POLICY_TYPE_UNSPECIFIED),
                                    add(GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum.FINE_GRAINED_ACCESS_CONTROL),
                                }};
                                description = "eos";
                                displayName = "atque";
                                policyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag[]{{
                                    add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{
                                        childPolicyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag[]{{
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1beta1SerializedPolicyTag() {{}}),
                                        }};
                                        description = "ab";
                                        displayName = "soluta";
                                        policyTag = "dolorum";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                fields = "deleniti";
                key = "omnis";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "asperiores";
                uploadProtocol = "nihil";
            }};            

            DatacatalogProjectsLocationsTaxonomiesImportResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesImport(req, new DatacatalogProjectsLocationsTaxonomiesImportSecurity("ipsum", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1ImportTaxonomiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesList

Lists all taxonomies in a project in a particular location that the caller has permission to view.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesListRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesListResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesListRequest req = new DatacatalogProjectsLocationsTaxonomiesListRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eius";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "amet";
                filter = "optio";
                key = "accusamus";
                oauthToken = "ad";
                pageSize = 904425L;
                pageToken = "suscipit";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "provident";
                uploadProtocol = "minima";
            }};            

            DatacatalogProjectsLocationsTaxonomiesListResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesList(req, new DatacatalogProjectsLocationsTaxonomiesListSecurity("repellendus", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1ListTaxonomiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate

Creates a policy tag in the specified taxonomy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1PolicyTagInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest("similique") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1beta1PolicyTagInput = new GoogleCloudDatacatalogV1beta1PolicyTagInput() {{
                    description = "at";
                    displayName = "quaerat";
                    parentPolicyTag = "tempora";
                }};;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "officiis";
                fields = "qui";
                key = "dolorum";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "harum";
                uploadProtocol = "iusto";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateSecurity("ipsum", "quisquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1PolicyTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete

Deletes a policy tag. Also deletes all of its descendant policy tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tempore";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "enim";
                force = false;
                key = "dolorem";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "nihil";
                uploadProtocol = "sit";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteSecurity("expedita", "neque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsGet

Gets a policy tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest("sed") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "quam";
                key = "ipsum";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "qui";
                readMask = "cupiditate";
                uploadType = "maxime";
                uploadProtocol = "pariatur";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsGet(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity("soluta", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1PolicyTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy

Gets the IAM policy for a taxonomy or a policy tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 276894;
                    }};;
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "facilis";
                key = "aliquid";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "temporibus";
                uploadProtocol = "qui";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity("neque", "fugit") {{
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

## datacatalogProjectsLocationsTaxonomiesPolicyTagsList

Lists all policy tags in a taxonomy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "hic";
                key = "voluptatem";
                oauthToken = "cumque";
                pageSize = 746994L;
                pageToken = "nobis";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "saepe";
                uploadProtocol = "ipsum";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsList(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsListSecurity("veritatis", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1ListPolicyTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch

Updates a policy tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1PolicyTagInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest("quos") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogV1beta1PolicyTagInput = new GoogleCloudDatacatalogV1beta1PolicyTagInput() {{
                    description = "cupiditate";
                    displayName = "aperiam";
                    parentPolicyTag = "delectus";
                }};;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "adipisci";
                key = "dolorum";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "quae";
                updateMask = "aut";
                uploadType = "quas";
                uploadProtocol = "itaque";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchSecurity("consequatur", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1PolicyTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy

Sets the IAM policy for a taxonomy or a policy tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
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

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "ut";
                                    expression = "facilis";
                                    location = "cupiditate";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("laudantium"),
                                }};
                                role = "odio";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "occaecati";
                                    expression = "voluptatibus";
                                    location = "quisquam";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("quis"),
                                    add("ipsum"),
                                    add("delectus"),
                                }};
                                role = "voluptate";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "consectetur";
                                    expression = "vero";
                                    location = "tenetur";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("distinctio"),
                                    add("quod"),
                                    add("odio"),
                                    add("similique"),
                                }};
                                role = "facilis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "vero";
                                    expression = "ducimus";
                                    location = "dolore";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("sequi"),
                                    add("natus"),
                                    add("impedit"),
                                    add("aut"),
                                }};
                                role = "voluptatibus";
                            }}),
                        }};
                        etag = "exercitationem";
                        version = 862310;
                    }};;
                }};;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "doloribus";
                key = "iusto";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "alias";
                uploadProtocol = "officia";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity("tempora", "ipsam") {{
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

## datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions

Returns the permissions that a caller has on the specified taxonomy or policy tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("possimus"),
                        add("magnam"),
                    }};
                }};;
                accessToken = "ratione";
                alt = AltEnum.MEDIA;
                callback = "laudantium";
                fields = "dicta";
                key = "dolor";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "ex";
                uploadProtocol = "nulla";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity("excepturi", "voluptatibus") {{
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
