# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/datacatalog/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Catalog.DatacatalogCatalogSearch(ctx, operations.DatacatalogCatalogSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatacatalogV1beta1SearchCatalogRequest: &shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequest{
            OrderBy: sdk.String("provident"),
            PageSize: sdk.Int(715190),
            PageToken: sdk.String("quibusdam"),
            Query: sdk.String("unde"),
            Scope: &shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope{
                IncludeGcpPublicDatasets: sdk.Bool(false),
                IncludeOrgIds: []string{
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                },
                IncludeProjectIds: []string{
                    "suscipit",
                    "iure",
                    "magnam",
                },
                RestrictedLocations: []string{
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                },
            },
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.DatacatalogCatalogSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1SearchCatalogResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Catalog](docs/catalog/README.md)

* [DatacatalogCatalogSearch](docs/catalog/README.md#datacatalogcatalogsearch) - Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.

### [Entries](docs/entries/README.md)

* [DatacatalogEntriesLookup](docs/entries/README.md#datacatalogentrieslookup) - Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.

### [Projects](docs/projects/README.md)

* [DatacatalogProjectsLocationsEntryGroupsCreate](docs/projects/README.md#datacatalogprojectslocationsentrygroupscreate) - A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [DatacatalogProjectsLocationsEntryGroupsEntriesCreate](docs/projects/README.md#datacatalogprojectslocationsentrygroupsentriescreate) - Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.
* [DatacatalogProjectsLocationsEntryGroupsEntriesList](docs/projects/README.md#datacatalogprojectslocationsentrygroupsentrieslist) - Lists entries.
* [DatacatalogProjectsLocationsEntryGroupsList](docs/projects/README.md#datacatalogprojectslocationsentrygroupslist) - Lists entry groups.
* [DatacatalogProjectsLocationsEntryGroupsTagsCreate](docs/projects/README.md#datacatalogprojectslocationsentrygroupstagscreate) - Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
* [DatacatalogProjectsLocationsEntryGroupsTagsList](docs/projects/README.md#datacatalogprojectslocationsentrygroupstagslist) - Lists tags assigned to an Entry. The columns in the response are lowercased.
* [DatacatalogProjectsLocationsTagTemplatesCreate](docs/projects/README.md#datacatalogprojectslocationstagtemplatescreate) - Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [DatacatalogProjectsLocationsTagTemplatesFieldsCreate](docs/projects/README.md#datacatalogprojectslocationstagtemplatesfieldscreate) - Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename](docs/projects/README.md#datacatalogprojectslocationstagtemplatesfieldsenumvaluesrename) - Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.
* [DatacatalogProjectsLocationsTaxonomiesCreate](docs/projects/README.md#datacatalogprojectslocationstaxonomiescreate) - Creates a taxonomy in the specified project.
* [DatacatalogProjectsLocationsTaxonomiesExport](docs/projects/README.md#datacatalogprojectslocationstaxonomiesexport) - Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
* [DatacatalogProjectsLocationsTaxonomiesImport](docs/projects/README.md#datacatalogprojectslocationstaxonomiesimport) - Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.
* [DatacatalogProjectsLocationsTaxonomiesList](docs/projects/README.md#datacatalogprojectslocationstaxonomieslist) - Lists all taxonomies in a project in a particular location that the caller has permission to view.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreate](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagscreate) - Creates a policy tag in the specified taxonomy.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsDelete](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagsdelete) - Deletes a policy tag. Also deletes all of its descendant policy tags.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsGet](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagsget) - Gets a policy tag.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagsgetiampolicy) - Gets the IAM policy for a taxonomy or a policy tag.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsList](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagslist) - Lists all policy tags in a taxonomy.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatch](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagspatch) - Updates a policy tag.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagssetiampolicy) - Sets the IAM policy for a taxonomy or a policy tag.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagstestiampermissions) - Returns the permissions that a caller has on the specified taxonomy or policy tag.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
