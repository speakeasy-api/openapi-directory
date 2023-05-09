# Projects

### Available Operations

* [DatacatalogProjectsLocationsEntryGroupsCreate](#datacatalogprojectslocationsentrygroupscreate) - A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [DatacatalogProjectsLocationsEntryGroupsEntriesCreate](#datacatalogprojectslocationsentrygroupsentriescreate) - Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.
* [DatacatalogProjectsLocationsEntryGroupsEntriesList](#datacatalogprojectslocationsentrygroupsentrieslist) - Lists entries.
* [DatacatalogProjectsLocationsEntryGroupsList](#datacatalogprojectslocationsentrygroupslist) - Lists entry groups.
* [DatacatalogProjectsLocationsEntryGroupsTagsCreate](#datacatalogprojectslocationsentrygroupstagscreate) - Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
* [DatacatalogProjectsLocationsEntryGroupsTagsList](#datacatalogprojectslocationsentrygroupstagslist) - Lists tags assigned to an Entry. The columns in the response are lowercased.
* [DatacatalogProjectsLocationsTagTemplatesCreate](#datacatalogprojectslocationstagtemplatescreate) - Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [DatacatalogProjectsLocationsTagTemplatesFieldsCreate](#datacatalogprojectslocationstagtemplatesfieldscreate) - Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename](#datacatalogprojectslocationstagtemplatesfieldsenumvaluesrename) - Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.
* [DatacatalogProjectsLocationsTaxonomiesCreate](#datacatalogprojectslocationstaxonomiescreate) - Creates a taxonomy in the specified project.
* [DatacatalogProjectsLocationsTaxonomiesExport](#datacatalogprojectslocationstaxonomiesexport) - Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
* [DatacatalogProjectsLocationsTaxonomiesImport](#datacatalogprojectslocationstaxonomiesimport) - Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.
* [DatacatalogProjectsLocationsTaxonomiesList](#datacatalogprojectslocationstaxonomieslist) - Lists all taxonomies in a project in a particular location that the caller has permission to view.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreate](#datacatalogprojectslocationstaxonomiespolicytagscreate) - Creates a policy tag in the specified taxonomy.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsDelete](#datacatalogprojectslocationstaxonomiespolicytagsdelete) - Deletes a policy tag. Also deletes all of its descendant policy tags.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsGet](#datacatalogprojectslocationstaxonomiespolicytagsget) - Gets a policy tag.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy](#datacatalogprojectslocationstaxonomiespolicytagsgetiampolicy) - Gets the IAM policy for a taxonomy or a policy tag.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsList](#datacatalogprojectslocationstaxonomiespolicytagslist) - Lists all policy tags in a taxonomy.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatch](#datacatalogprojectslocationstaxonomiespolicytagspatch) - Updates a policy tag.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy](#datacatalogprojectslocationstaxonomiespolicytagssetiampolicy) - Sets the IAM policy for a taxonomy or a policy tag.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions](#datacatalogprojectslocationstaxonomiespolicytagstestiampermissions) - Returns the permissions that a caller has on the specified taxonomy or policy tag.

## DatacatalogProjectsLocationsEntryGroupsCreate

A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsCreate(ctx, operations.DatacatalogProjectsLocationsEntryGroupsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1beta1EntryGroupInput: &shared.GoogleCloudDatacatalogV1beta1EntryGroupInput{
            DataCatalogTimestamps: &shared.GoogleCloudDatacatalogV1beta1SystemTimestampsInput{
                CreateTime: sdk.String("excepturi"),
                UpdateTime: sdk.String("aspernatur"),
            },
            Description: sdk.String("perferendis"),
            DisplayName: sdk.String("ad"),
            Name: sdk.String("Louis Moore"),
        },
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("saepe"),
        EntryGroupID: sdk.String("fuga"),
        Fields: sdk.String("in"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("iste"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1EntryGroup != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsEntriesCreate

Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsEntriesCreate(ctx, operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1beta1EntryInput: &shared.GoogleCloudDatacatalogV1beta1EntryInput{
            Description: sdk.String("reiciendis"),
            DisplayName: sdk.String("est"),
            GcsFilesetSpec: &shared.GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput{
                FilePatterns: []string{
                    "laborum",
                    "dolores",
                    "dolorem",
                },
            },
            LinkedResource: sdk.String("corporis"),
            Schema: &shared.GoogleCloudDatacatalogV1beta1Schema{
                Columns: []shared.GoogleCloudDatacatalogV1beta1ColumnSchema{
                    shared.GoogleCloudDatacatalogV1beta1ColumnSchema{
                        Column: sdk.String("nobis"),
                        Description: sdk.String("enim"),
                        Mode: sdk.String("omnis"),
                        Subcolumns: []shared.GoogleCloudDatacatalogV1beta1ColumnSchema{
                            shared.GoogleCloudDatacatalogV1beta1ColumnSchema{},
                            shared.GoogleCloudDatacatalogV1beta1ColumnSchema{},
                        },
                        Type: sdk.String("minima"),
                    },
                },
            },
            SourceSystemTimestamps: &shared.GoogleCloudDatacatalogV1beta1SystemTimestampsInput{
                CreateTime: sdk.String("excepturi"),
                UpdateTime: sdk.String("accusantium"),
            },
            Type: shared.GoogleCloudDatacatalogV1beta1EntryTypeEnumModel.ToPointer(),
            UsageSignal: &shared.GoogleCloudDatacatalogV1beta1UsageSignal{
                UpdateTime: sdk.String("culpa"),
                UsageWithinTimeRange: map[string]shared.GoogleCloudDatacatalogV1beta1UsageStats{
                    "sapiente": shared.GoogleCloudDatacatalogV1beta1UsageStats{
                        TotalCancellations: sdk.Float32(1020.44),
                        TotalCompletions: sdk.Float32(6527.9),
                        TotalExecutionTimeForCompletionsMillis: sdk.Float32(2088.76),
                        TotalFailures: sdk.Float32(6350.59),
                    },
                    "consequuntur": shared.GoogleCloudDatacatalogV1beta1UsageStats{
                        TotalCancellations: sdk.Float32(9953),
                        TotalCompletions: sdk.Float32(6531.08),
                        TotalExecutionTimeForCompletionsMillis: sdk.Float32(5818.5),
                        TotalFailures: sdk.Float32(2532.91),
                    },
                    "commodi": shared.GoogleCloudDatacatalogV1beta1UsageStats{
                        TotalCancellations: sdk.Float32(4663.11),
                        TotalCompletions: sdk.Float32(4746.97),
                        TotalExecutionTimeForCompletionsMillis: sdk.Float32(2444.25),
                        TotalFailures: sdk.Float32(6235.1),
                    },
                    "quia": shared.GoogleCloudDatacatalogV1beta1UsageStats{
                        TotalCancellations: sdk.Float32(3380.07),
                        TotalCompletions: sdk.Float32(1103.75),
                        TotalExecutionTimeForCompletionsMillis: sdk.Float32(6747.52),
                        TotalFailures: sdk.Float32(6563.3),
                    },
                },
            },
            UserSpecifiedSystem: sdk.String("enim"),
            UserSpecifiedType: sdk.String("odit"),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tenetur"),
        EntryID: sdk.String("ipsam"),
        Fields: sdk.String("id"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("aut"),
        Parent: "quasi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1Entry != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsEntriesList

Lists entries.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsEntriesList(ctx, operations.DatacatalogProjectsLocationsEntryGroupsEntriesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("voluptatibus"),
        PageSize: sdk.Int64(55714),
        PageToken: sdk.String("omnis"),
        Parent: "voluptate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        ReadMask: sdk.String("perferendis"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1ListEntriesResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsList

Lists entry groups.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsList(ctx, operations.DatacatalogProjectsLocationsEntryGroupsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("dicta"),
        PageSize: sdk.Int64(688661),
        PageToken: sdk.String("enim"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("quae"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsTagsCreate

Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsTagsCreate(ctx, operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1beta1TagInput: &shared.GoogleCloudDatacatalogV1beta1TagInput{
            Column: sdk.String("quidem"),
            Fields: map[string]shared.GoogleCloudDatacatalogV1beta1TagFieldInput{
                "excepturi": shared.GoogleCloudDatacatalogV1beta1TagFieldInput{
                    BoolValue: sdk.Bool(false),
                    DoubleValue: sdk.Float64(8651.03),
                    EnumValue: &shared.GoogleCloudDatacatalogV1beta1TagFieldEnumValue{
                        DisplayName: sdk.String("modi"),
                    },
                    StringValue: sdk.String("praesentium"),
                    TimestampValue: sdk.String("rem"),
                },
                "voluptates": shared.GoogleCloudDatacatalogV1beta1TagFieldInput{
                    BoolValue: sdk.Bool(false),
                    DoubleValue: sdk.Float64(939.4),
                    EnumValue: &shared.GoogleCloudDatacatalogV1beta1TagFieldEnumValue{
                        DisplayName: sdk.String("repudiandae"),
                    },
                    StringValue: sdk.String("sint"),
                    TimestampValue: sdk.String("veritatis"),
                },
                "itaque": shared.GoogleCloudDatacatalogV1beta1TagFieldInput{
                    BoolValue: sdk.Bool(false),
                    DoubleValue: sdk.Float64(2777.18),
                    EnumValue: &shared.GoogleCloudDatacatalogV1beta1TagFieldEnumValue{
                        DisplayName: sdk.String("enim"),
                    },
                    StringValue: sdk.String("consequatur"),
                    TimestampValue: sdk.String("est"),
                },
            },
            Name: sdk.String("Benjamin O'Connell"),
            Template: sdk.String("labore"),
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("perferendis"),
        Parent: "magni",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("alias"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1Tag != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsTagsList

Lists tags assigned to an Entry. The columns in the response are lowercased.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsTagsList(ctx, operations.DatacatalogProjectsLocationsEntryGroupsTagsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("labore"),
        PageSize: sdk.Int64(962189),
        PageToken: sdk.String("eum"),
        Parent: "non",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsTagsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1ListTagsResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTagTemplatesCreate

Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTagTemplatesCreate(ctx, operations.DatacatalogProjectsLocationsTagTemplatesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatacatalogV1beta1TagTemplateInput: &shared.GoogleCloudDatacatalogV1beta1TagTemplateInput{
            DisplayName: sdk.String("necessitatibus"),
            Fields: map[string]shared.GoogleCloudDatacatalogV1beta1TagTemplateFieldInput{
                "officia": shared.GoogleCloudDatacatalogV1beta1TagTemplateFieldInput{
                    Description: sdk.String("dolor"),
                    DisplayName: sdk.String("debitis"),
                    IsRequired: sdk.Bool(false),
                    Order: sdk.Int(952749),
                    Type: &shared.GoogleCloudDatacatalogV1beta1FieldType{
                        EnumType: &shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumType{
                            AllowedValues: []shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                                shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("in"),
                                },
                                shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("in"),
                                },
                                shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("illum"),
                                },
                            },
                        },
                        PrimitiveType: shared.GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnumTimestamp.ToPointer(),
                    },
                },
                "rerum": shared.GoogleCloudDatacatalogV1beta1TagTemplateFieldInput{
                    Description: sdk.String("dicta"),
                    DisplayName: sdk.String("magnam"),
                    IsRequired: sdk.Bool(false),
                    Order: sdk.Int(767024),
                    Type: &shared.GoogleCloudDatacatalogV1beta1FieldType{
                        EnumType: &shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumType{
                            AllowedValues: []shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                                shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("ea"),
                                },
                                shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("aliquid"),
                                },
                                shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("laborum"),
                                },
                                shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("accusamus"),
                                },
                            },
                        },
                        PrimitiveType: shared.GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnumDouble.ToPointer(),
                    },
                },
                "occaecati": shared.GoogleCloudDatacatalogV1beta1TagTemplateFieldInput{
                    Description: sdk.String("enim"),
                    DisplayName: sdk.String("accusamus"),
                    IsRequired: sdk.Bool(false),
                    Order: sdk.Int(965417),
                    Type: &shared.GoogleCloudDatacatalogV1beta1FieldType{
                        EnumType: &shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumType{
                            AllowedValues: []shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                                shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("provident"),
                                },
                                shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("nam"),
                                },
                                shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("id"),
                                },
                            },
                        },
                        PrimitiveType: shared.GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnumString.ToPointer(),
                    },
                },
            },
            Name: sdk.String("Timmy Feeney"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("nihil"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        TagTemplateID: sdk.String("id"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("labore"),
    }, operations.DatacatalogProjectsLocationsTagTemplatesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1TagTemplate != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTagTemplatesFieldsCreate

Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTagTemplatesFieldsCreate(ctx, operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1beta1TagTemplateFieldInput: &shared.GoogleCloudDatacatalogV1beta1TagTemplateFieldInput{
            Description: sdk.String("natus"),
            DisplayName: sdk.String("nobis"),
            IsRequired: sdk.Bool(false),
            Order: sdk.Int(428769),
            Type: &shared.GoogleCloudDatacatalogV1beta1FieldType{
                EnumType: &shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumType{
                    AllowedValues: []shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                        shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                            DisplayName: sdk.String("aspernatur"),
                        },
                        shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                            DisplayName: sdk.String("architecto"),
                        },
                        shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                            DisplayName: sdk.String("magnam"),
                        },
                        shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue{
                            DisplayName: sdk.String("et"),
                        },
                    },
                },
                PrimitiveType: shared.GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnumString.ToPointer(),
            },
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("sint"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("mollitia"),
        Parent: "reiciendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        TagTemplateFieldID: sdk.String("ad"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1TagTemplateField != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename

Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename(ctx, operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest: &shared.GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest{
            NewEnumValueDisplayName: sdk.String("odit"),
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("debitis"),
        Name: "Jasmine Lind",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1TagTemplateField != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesCreate

Creates a taxonomy in the specified project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesCreate(ctx, operations.DatacatalogProjectsLocationsTaxonomiesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatacatalogV1beta1TaxonomyInput: &shared.GoogleCloudDatacatalogV1beta1TaxonomyInput{
            ActivatedPolicyTypes: []shared.GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum{
                shared.GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl,
                shared.GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl,
            },
            Description: sdk.String("sed"),
            DisplayName: sdk.String("saepe"),
            Service: &shared.GoogleCloudDatacatalogV1beta1TaxonomyService{
                Identity: sdk.String("pariatur"),
                Name: shared.GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnumManagingSystemUnspecified.ToPointer(),
            },
            TaxonomyTimestamps: &shared.GoogleCloudDatacatalogV1beta1SystemTimestampsInput{
                CreateTime: sdk.String("consequuntur"),
                UpdateTime: sdk.String("praesentium"),
            },
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("quo"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("pariatur"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("odit"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1Taxonomy != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesExport

Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesExport(ctx, operations.DatacatalogProjectsLocationsTaxonomiesExportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("voluptate"),
        Parent: "autem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        SerializedTaxonomies: sdk.Bool(false),
        Taxonomies: []string{
            "pariatur",
        },
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesExportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesImport

Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesImport(ctx, operations.DatacatalogProjectsLocationsTaxonomiesImportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest: &shared.GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest{
            InlineSource: &shared.GoogleCloudDatacatalogV1beta1InlineSource{
                Taxonomies: []shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomy{
                    shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomy{
                        ActivatedPolicyTypes: []shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum{
                            shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified,
                        },
                        Description: sdk.String("cumque"),
                        DisplayName: sdk.String("corporis"),
                        PolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                            shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                },
                                Description: sdk.String("nobis"),
                                DisplayName: sdk.String("dolores"),
                                PolicyTag: sdk.String("quis"),
                            },
                            shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                },
                                Description: sdk.String("dignissimos"),
                                DisplayName: sdk.String("eaque"),
                                PolicyTag: sdk.String("quis"),
                            },
                            shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                },
                                Description: sdk.String("eos"),
                                DisplayName: sdk.String("perferendis"),
                                PolicyTag: sdk.String("dolores"),
                            },
                            shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                },
                                Description: sdk.String("quam"),
                                DisplayName: sdk.String("dolor"),
                                PolicyTag: sdk.String("vero"),
                            },
                        },
                    },
                    shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomy{
                        ActivatedPolicyTypes: []shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum{
                            shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl,
                            shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl,
                        },
                        Description: sdk.String("omnis"),
                        DisplayName: sdk.String("facilis"),
                        PolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                            shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                },
                                Description: sdk.String("porro"),
                                DisplayName: sdk.String("consequuntur"),
                                PolicyTag: sdk.String("blanditiis"),
                            },
                            shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                },
                                Description: sdk.String("eaque"),
                                DisplayName: sdk.String("occaecati"),
                                PolicyTag: sdk.String("rerum"),
                            },
                            shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                },
                                Description: sdk.String("asperiores"),
                                DisplayName: sdk.String("earum"),
                                PolicyTag: sdk.String("modi"),
                            },
                        },
                    },
                    shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomy{
                        ActivatedPolicyTypes: []shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum{
                            shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl,
                            shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl,
                            shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl,
                        },
                        Description: sdk.String("provident"),
                        DisplayName: sdk.String("nobis"),
                        PolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                            shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                },
                                Description: sdk.String("quaerat"),
                                DisplayName: sdk.String("quos"),
                                PolicyTag: sdk.String("aliquid"),
                            },
                            shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                },
                                Description: sdk.String("dolorem"),
                                DisplayName: sdk.String("dolor"),
                                PolicyTag: sdk.String("qui"),
                            },
                            shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                },
                                Description: sdk.String("hic"),
                                DisplayName: sdk.String("excepturi"),
                                PolicyTag: sdk.String("cum"),
                            },
                        },
                    },
                    shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomy{
                        ActivatedPolicyTypes: []shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum{
                            shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified,
                            shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl,
                        },
                        Description: sdk.String("amet"),
                        DisplayName: sdk.String("dolorum"),
                        PolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                            shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                },
                                Description: sdk.String("ipsa"),
                                DisplayName: sdk.String("ipsa"),
                                PolicyTag: sdk.String("iure"),
                            },
                            shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag{},
                                },
                                Description: sdk.String("quaerat"),
                                DisplayName: sdk.String("accusamus"),
                                PolicyTag: sdk.String("quidem"),
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("eos"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("sit"),
        Parent: "fugiat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesImportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesList

Lists all taxonomies in a project in a particular location that the caller has permission to view.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesList(ctx, operations.DatacatalogProjectsLocationsTaxonomiesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("omnis"),
        Filter: sdk.String("necessitatibus"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("asperiores"),
        PageSize: sdk.Int64(469497),
        PageToken: sdk.String("ipsum"),
        Parent: "voluptate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("eius"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreate

Creates a policy tag in the specified taxonomy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreate(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1beta1PolicyTagInput: &shared.GoogleCloudDatacatalogV1beta1PolicyTagInput{
            Description: sdk.String("perferendis"),
            DisplayName: sdk.String("amet"),
            ParentPolicyTag: sdk.String("optio"),
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("provident"),
        Parent: "minima",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("similique"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1PolicyTag != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsDelete

Deletes a policy tag. Also deletes all of its descendant policy tags.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDelete(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("vel"),
        Force: sdk.Bool(false),
        Key: sdk.String("quod"),
        Name: "Clarence Parisian",
        OauthToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsGet

Gets a policy tag.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGet(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("enim"),
        Name: "Jeannie Leannon MD",
        OauthToken: sdk.String("neque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        ReadMask: sdk.String("vel"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1PolicyTag != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy

Gets the IAM policy for a taxonomy or a policy tag.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(463575),
            },
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        Resource: "dicta",
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("totam"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsList

Lists all policy tags in a taxonomy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsList(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("quam"),
        PageSize: sdk.Int64(565421),
        PageToken: sdk.String("temporibus"),
        Parent: "qui",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("magni"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatch

Updates a policy tag.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatch(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1beta1PolicyTagInput: &shared.GoogleCloudDatacatalogV1beta1PolicyTagInput{
            Description: sdk.String("sunt"),
            DisplayName: sdk.String("ullam"),
            ParentPolicyTag: sdk.String("nam"),
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("nobis"),
        Name: "Miss Kerry Emmerich",
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UpdateMask: sdk.String("aperiam"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1PolicyTag != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy

Sets the IAM policy for a taxonomy or a policy tag.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("adipisci"),
                            Expression: sdk.String("dolorum"),
                            Location: sdk.String("architecto"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "quas",
                        },
                        Role: sdk.String("itaque"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("consequatur"),
                            Expression: sdk.String("est"),
                            Location: sdk.String("repellendus"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "ut",
                            "facilis",
                            "cupiditate",
                            "qui",
                        },
                        Role: sdk.String("quae"),
                    },
                },
                Etag: sdk.String("laudantium"),
                Version: sdk.Int(485628),
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("vero"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        Resource: "delectus",
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions

Returns the permissions that a caller has on the specified taxonomy or policy tag.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "dignissimos",
                "hic",
                "distinctio",
                "quod",
            },
        },
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("vero"),
        Key: sdk.String("ducimus"),
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        Resource: "illum",
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("natus"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```
