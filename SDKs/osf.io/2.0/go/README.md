# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/osf.io/2.0/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Addons.AddonsList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Addons](docs/addons/README.md)

* [AddonsList](docs/addons/README.md#addonslist) - List all addons

### [Base](docs/base/README.md)

* [BaseRead](docs/base/README.md#baseread) - Root

### [Citations](docs/citations/README.md)

* [CitationsStylesList](docs/citations/README.md#citationsstyleslist) - List all citation styles
* [CitationsStylesRead](docs/citations/README.md#citationsstylesread) - Retrieve a citation style

### [Collections](docs/collections/README.md)

* [CollectionsAddMetadata](docs/collections/README.md#collectionsaddmetadata) - Add Metadata or Subjects to a Entity in a Collection
* [CollectionsCollectedMetadata](docs/collections/README.md#collectionscollectedmetadata) - Retrieve subject data for a specific piece of metadata info for a collection
* [CollectionsCreate](docs/collections/README.md#collectionscreate) - Create a Collection
* [CollectionsDelete](docs/collections/README.md#collectionsdelete) - Delete a Collection
* [CollectionsDetail](docs/collections/README.md#collectionsdetail) - Retrieve a Collection
* [CollectionsLinkedNodesList](docs/collections/README.md#collectionslinkednodeslist) - List All Linked Nodes for a Collection
* [CollectionsLinkedNodesRelationships](docs/collections/README.md#collectionslinkednodesrelationships) - Link Nodes to Collection
* [CollectionsLinkedNodesRelationshipsCreate](docs/collections/README.md#collectionslinkednodesrelationshipscreate) - Give a Sparse List of Node Ids
* [CollectionsLinkedNodesRelationshipsDelete](docs/collections/README.md#collectionslinkednodesrelationshipsdelete) - Remove Nodes From Collection
* [CollectionsLinkedPreprintsList](docs/collections/README.md#collectionslinkedpreprintslist) - List All Linked Preprints for a Collection
* [CollectionsLinkedRegistrationsList](docs/collections/README.md#collectionslinkedregistrationslist) - List All Linked Registrations for a Collection
* [CollectionsLinkedRegistrationsRelationships](docs/collections/README.md#collectionslinkedregistrationsrelationships) - Link Registrations to Collection
* [CollectionsLinkedRegistrationsRelationshipsCreate](docs/collections/README.md#collectionslinkedregistrationsrelationshipscreate) - Give a Sparse List of Registrations Ids
* [CollectionsLinkedRegistrationsRelationshipsDelete](docs/collections/README.md#collectionslinkedregistrationsrelationshipsdelete) - Remove Registrations From Collection
* [CollectionsList](docs/collections/README.md#collectionslist) - List all Collections
* [CollectionsMetadataDelete](docs/collections/README.md#collectionsmetadatadelete) - Delete Collection Metadata from entitiy
* [CollectionsMetadataDetail](docs/collections/README.md#collectionsmetadatadetail) - Add Metadata or Subjects to an Entity in a Collection
* [CollectionsMetadataRegistrationsDetail](docs/collections/README.md#collectionsmetadataregistrationsdetail) - Retrieve Specific Metadata for a Collection
* [CollectionsMetadataRegistrationsList](docs/collections/README.md#collectionsmetadataregistrationslist) - Retrieve a list of collected metadata for a collection
* [CollectionsMetadataSubjectsRelationships](docs/collections/README.md#collectionsmetadatasubjectsrelationships) - Retrieve subject metadata for a specific piece of metadata in a collection
* [CollectionsMetadataSubjectsRelationshipsUpdate](docs/collections/README.md#collectionsmetadatasubjectsrelationshipsupdate) - Update subjects for a specific piece of metadata in a collection

### [Comments](docs/comments/README.md)

* [CommentsDelete](docs/comments/README.md#commentsdelete) - Delete a comment
* [CommentsPut](docs/comments/README.md#commentsput) - Update a comment
* [CommentsRead](docs/comments/README.md#commentsread) - Retrieve a comment

### [DraftRegistrations](docs/draftregistrations/README.md)

* [DeleteDraftRegistrationsDraftID](docs/draftregistrations/README.md#deletedraftregistrationsdraftid) - Delete a draft registration
* [DraftRegistrationContributorsCreate](docs/draftregistrations/README.md#draftregistrationcontributorscreate) - Add a contributor to a Draft Registration
* [DraftRegistrationContributorsList](docs/draftregistrations/README.md#draftregistrationcontributorslist) - Retreive a list Contributors from a Draft Registration
* [DraftRegistrationsCreate](docs/draftregistrations/README.md#draftregistrationscreate) - Create a Draft Registration
* [DraftRegistrationsRead](docs/draftregistrations/README.md#draftregistrationsread) - Retrieve a list of Draft Registrations
* [GetDraftRegistrationsDraftID](docs/draftregistrations/README.md#getdraftregistrationsdraftid) - Retrieve a Draft Registration
* [GetDraftRegistrationsDraftIDContributorsUserID](docs/draftregistrations/README.md#getdraftregistrationsdraftidcontributorsuserid) - Retreive a Contributor from a Draft Registration
* [GetDraftRegistrationsDraftIDInstitutions](docs/draftregistrations/README.md#getdraftregistrationsdraftidinstitutions) - Retrieve Institutions afilliated with a Draft Registration
* [NodesDraftRegistrationsRead](docs/draftregistrations/README.md#nodesdraftregistrationsread) - Retrieve a Draft Registration
* [NodesDraftRegistrationsSubjects](docs/draftregistrations/README.md#nodesdraftregistrationssubjects) - Retrieve Subjects associated with a Draft Registration
* [PatchDraftRegistrationsDraftID](docs/draftregistrations/README.md#patchdraftregistrationsdraftid) - Update a Draft Registration

### [Files](docs/files/README.md)

* [FilesDetail](docs/files/README.md#filesdetail) - Retrieve a file
* [FilesPatch](docs/files/README.md#filespatch) - Update a file
* [FilesVersionDetail](docs/files/README.md#filesversiondetail) - Retrieve a file version
* [FilesVersions](docs/files/README.md#filesversions) - List all file versions

### [Institutions](docs/institutions/README.md)

* [InstitutionsDetail](docs/institutions/README.md#institutionsdetail) - Retrieve an institution
* [InstitutionsList](docs/institutions/README.md#institutionslist) - List all institutions
* [InstitutionsNodeList](docs/institutions/README.md#institutionsnodelist) - List all affiliated nodes
* [InstitutionsRegistrationList](docs/institutions/README.md#institutionsregistrationlist) - List all affiliated registrations
* [InstitutionsUsersList](docs/institutions/README.md#institutionsuserslist) - List all affiliated users

### [Licenses](docs/licenses/README.md)

* [LicenseList](docs/licenses/README.md#licenselist) - List all licenses
* [LicensesRead](docs/licenses/README.md#licensesread) - Retrieve a license

### [Logs](docs/logs/README.md)

* [LogsActions](docs/logs/README.md#logsactions) - Actions
* [LogsRead](docs/logs/README.md#logsread) - Retrieve a log

### [Nodes](docs/nodes/README.md)

* [NodesAddonRead](docs/nodes/README.md#nodesaddonread) - Retrieve an addon
* [NodesAddonsFoldersList](docs/nodes/README.md#nodesaddonsfolderslist) - List all addon folders
* [NodesAddonsList](docs/nodes/README.md#nodesaddonslist) - List all addons
* [NodesChildrenCreate](docs/nodes/README.md#nodeschildrencreate) - Create a child node
* [NodesChildrenList](docs/nodes/README.md#nodeschildrenlist) - List all child nodes
* [NodesCitationList](docs/nodes/README.md#nodescitationlist) - Retrieve citation details
* [NodesCitationRead](docs/nodes/README.md#nodescitationread) - Retrieve a styled citation
* [NodesCommentCreate](docs/nodes/README.md#nodescommentcreate) - Create a comment
* [NodesCommentsList](docs/nodes/README.md#nodescommentslist) - List all comments
* [NodesContributorsCreate](docs/nodes/README.md#nodescontributorscreate) - Create a contributor
* [NodesContributorsDelete](docs/nodes/README.md#nodescontributorsdelete) - Delete a contributor
* [NodesContributorsList](docs/nodes/README.md#nodescontributorslist) - List all contributors
* [NodesContributorsPartialUpdate](docs/nodes/README.md#nodescontributorspartialupdate) - Update a contributor
* [NodesContributorsRead](docs/nodes/README.md#nodescontributorsread) - Retrieve a contributor
* [NodesCreate](docs/nodes/README.md#nodescreate) - Create a node
* [NodesDelete](docs/nodes/README.md#nodesdelete) - Delete a node
* [NodesDraftRegistrationsCreate](docs/nodes/README.md#nodesdraftregistrationscreate) - Create a draft registration based on your current project Node.
* [NodesDraftRegistrationsDelete](docs/nodes/README.md#nodesdraftregistrationsdelete) - Delete a draft registration
* [NodesDraftRegistrationsList](docs/nodes/README.md#nodesdraftregistrationslist) - List all draft registrations
* [NodesDraftRegistrationsPartialUpdate](docs/nodes/README.md#nodesdraftregistrationspartialupdate) - Update a draft registration
* [NodesFilesList](docs/nodes/README.md#nodesfileslist) - List all node files
* [NodesFilesRead](docs/nodes/README.md#nodesfilesread) - Retrieve a file
* [NodesForksCreate](docs/nodes/README.md#nodesforkscreate) - Create a fork of this node
* [NodesForksList](docs/nodes/README.md#nodesforkslist) - List all forks of this node
* [NodesIdentifiersList](docs/nodes/README.md#nodesidentifierslist) - List all identifiers
* [NodesInstitutionsList](docs/nodes/README.md#nodesinstitutionslist) - List all institutions
* [NodesLinkedNodesList](docs/nodes/README.md#nodeslinkednodeslist) - List all linked nodes
* [NodesList](docs/nodes/README.md#nodeslist) - List all nodes
* [NodesLogsList](docs/nodes/README.md#nodeslogslist) - List all logs
* [NodesNodeAddonUpdate](docs/nodes/README.md#nodesnodeaddonupdate) - Update an addon
* [NodesPartialUpdate](docs/nodes/README.md#nodespartialupdate) - Update a node
* [NodesPreprintsList](docs/nodes/README.md#nodespreprintslist) - List all preprints
* [NodesProvidersList](docs/nodes/README.md#nodesproviderslist) - List all storage providers
* [NodesProvidersRead](docs/nodes/README.md#nodesprovidersread) - Retrieve a storage provider
* [NodesRead](docs/nodes/README.md#nodesread) - Retrieve a node
* [NodesRegistrationsList](docs/nodes/README.md#nodesregistrationslist) - List all registrations
* [NodesViewOnlyLinksList](docs/nodes/README.md#nodesviewonlylinkslist) - List all view only links
* [NodesViewOnlyLinksRead](docs/nodes/README.md#nodesviewonlylinksread) - Retrieve a view only link
* [NodesWikisList](docs/nodes/README.md#nodeswikislist) - List all wikis

### [PreprintProviders](docs/preprintproviders/README.md)

* [PreprintProviderDetail](docs/preprintproviders/README.md#preprintproviderdetail) - Retrieve a preprint provider
* [PreprintProviderLicensesList](docs/preprintproviders/README.md#preprintproviderlicenseslist) - List all licenses
* [PreprintProviderList](docs/preprintproviders/README.md#preprintproviderlist) - List all preprint providers
* [PreprintProviderTaxonomiesList](docs/preprintproviders/README.md#preprintprovidertaxonomieslist) - List all taxonomies
* [PreprintProvidersPreprintsList](docs/preprintproviders/README.md#preprintproviderspreprintslist) - List all preprints

### [Preprints](docs/preprints/README.md)

* [PreprintsBibliographicContributorsList](docs/preprints/README.md#preprintsbibliographiccontributorslist) - List all Bibliographic Contributors
* [PreprintsCitationList](docs/preprints/README.md#preprintscitationlist) - Retrieve citation details
* [PreprintsCitationRead](docs/preprints/README.md#preprintscitationread) - Retrieve a styled citation
* [PreprintsContributorRead](docs/preprints/README.md#preprintscontributorread) - Retrieve a contributor
* [PreprintsContributorsCreate](docs/preprints/README.md#preprintscontributorscreate) - Create a Contributor
* [PreprintsContributorsList](docs/preprints/README.md#preprintscontributorslist) - List all Contributors for a Preprint
* [PreprintsCreate](docs/preprints/README.md#preprintscreate) - Create a preprint
* [PreprintsList](docs/preprints/README.md#preprintslist) - List all preprints
* [PreprintsPartialUpdate](docs/preprints/README.md#preprintspartialupdate) - Update a preprint
* [PreprintsRead](docs/preprints/README.md#preprintsread) - Retrieve a preprint

### [RegistrationSchemaBlocks](docs/registrationschemablocks/README.md)

* [GetSchemaResponsesSchemaResponseIDSchemaBlocksSchemaResponseBlockID](docs/registrationschemablocks/README.md#getschemaresponsesschemaresponseidschemablocksschemaresponseblockid) - Retrieve a Registration Schema Block
* [SchemaResponseBlocksRead](docs/registrationschemablocks/README.md#schemaresponseblocksread) - Retrieve a list of Registration Schema Blocks for a Schema Response

### [RegistrationSchemas](docs/registrationschemas/README.md)

* [RegistrationSchemaRead](docs/registrationschemas/README.md#registrationschemaread) - Retrieve a Registration Schema
* [RegistrationSchemasList](docs/registrationschemas/README.md#registrationschemaslist) - Retrieve a list of Registration Schemas

### [Registrations](docs/registrations/README.md)

* [RegistrationsChildrenList](docs/registrations/README.md#registrationschildrenlist) - List all child registrations
* [RegistrationsCitationRead](docs/registrations/README.md#registrationscitationread) - Retrieve a citation
* [RegistrationsCitationsList](docs/registrations/README.md#registrationscitationslist) - List all citation styles
* [RegistrationsCommentsList](docs/registrations/README.md#registrationscommentslist) - List all comments
* [RegistrationsContributorsList](docs/registrations/README.md#registrationscontributorslist) - List all contributors
* [RegistrationsContributorsRead](docs/registrations/README.md#registrationscontributorsread) - Retrieve a contributor
* [RegistrationsFilesList](docs/registrations/README.md#registrationsfileslist) - List all files
* [RegistrationsFilesRead](docs/registrations/README.md#registrationsfilesread) - Retrieve a file
* [RegistrationsForksCreate](docs/registrations/README.md#registrationsforkscreate) - Create a fork
* [RegistrationsForksList](docs/registrations/README.md#registrationsforkslist) - List all forks
* [RegistrationsIdentifiersList](docs/registrations/README.md#registrationsidentifierslist) - List all identifiers
* [RegistrationsInstitutionsList](docs/registrations/README.md#registrationsinstitutionslist) - List all institutions
* [RegistrationsLinkedNodesList](docs/registrations/README.md#registrationslinkednodeslist) - List all linked nodes
* [RegistrationsList](docs/registrations/README.md#registrationslist) - List all registrations
* [RegistrationsLogsList](docs/registrations/README.md#registrationslogslist) - List all logs
* [RegistrationsPartialUpdate](docs/registrations/README.md#registrationspartialupdate) - Update a registration
* [RegistrationsProvidersList](docs/registrations/README.md#registrationsproviderslist) - List all storage providers
* [RegistrationsRead](docs/registrations/README.md#registrationsread) - Retrieve a registration
* [RegistrationsViewOnlyLinksList](docs/registrations/README.md#registrationsviewonlylinkslist) - List all view only links
* [RegistrationsViewOnlyLinksRead](docs/registrations/README.md#registrationsviewonlylinksread) - Retrieve a view only link
* [RegistrationsWikisList](docs/registrations/README.md#registrationswikislist) - List all wikis

### [SchemaResponseActions](docs/schemaresponseactions/README.md)

* [GetSchemaResponsesSchemaResponseIDActionsSchemaResponseActionID](docs/schemaresponseactions/README.md#getschemaresponsesschemaresponseidactionsschemaresponseactionid) - A Schema Response Action from a Schema Response
* [PostSchemaResponsesSchemaResponseIDActions](docs/schemaresponseactions/README.md#postschemaresponsesschemaresponseidactions) - Create a new Schema Response Action
* [SchemaResponseActionRead](docs/schemaresponseactions/README.md#schemaresponseactionread) - Retrieve a list of Schema Response Actions for a Schema Response

### [SchemaResponses](docs/schemaresponses/README.md)

* [SchemaResponseDelete](docs/schemaresponses/README.md#schemaresponsedelete) - Delete a Incomplete Schema Response
* [SchemaResponsePatch](docs/schemaresponses/README.md#schemaresponsepatch) - Update a Registration's Schema Response
* [SchemaResponsePpost](docs/schemaresponses/README.md#schemaresponseppost) - Create a new Schema Response
* [SchemaResponsesList](docs/schemaresponses/README.md#schemaresponseslist) - List all Schema Responses
* [SchemaResponsesRead](docs/schemaresponses/README.md#schemaresponsesread) - Retrieve a Schema Response

### [Taxonomies](docs/taxonomies/README.md)

* [TaxonomiesList](docs/taxonomies/README.md#taxonomieslist) - List all taxonomies
* [TaxonomiesRead](docs/taxonomies/README.md#taxonomiesread) - Retrieve a taxonomy

### [Users](docs/users/README.md)

* [UsersAddonAccountsList](docs/users/README.md#usersaddonaccountslist) - List all addon accounts
* [UsersAddonAccountsRead](docs/users/README.md#usersaddonaccountsread) - Retrieve an addon account
* [UsersAddonsList](docs/users/README.md#usersaddonslist) - List all user addons
* [UsersAddonsRead](docs/users/README.md#usersaddonsread) - Retrieve a user addon
* [UsersInstitutionsList](docs/users/README.md#usersinstitutionslist) - List all institutions
* [UsersList](docs/users/README.md#userslist) - List all users
* [UsersNodesList](docs/users/README.md#usersnodeslist) - List all nodes
* [UsersPartialUpdate](docs/users/README.md#userspartialupdate) - Update a user
* [UsersPreprintsList](docs/users/README.md#userspreprintslist) - List all preprints
* [UsersRead](docs/users/README.md#usersread) - Retrieve a user
* [UsersRegistrationsList](docs/users/README.md#usersregistrationslist) - List all registrations

### [ViewOnlyLinks](docs/viewonlylinks/README.md)

* [ViewOnlyLinksNodeList](docs/viewonlylinks/README.md#viewonlylinksnodelist) - List all nodes
* [ViewOnlyLinksRead](docs/viewonlylinks/README.md#viewonlylinksread) - Retrieve a view only link

### [Wikis](docs/wikis/README.md)

* [WikiContent](docs/wikis/README.md#wikicontent) - Retrieve the Content of a Wiki
* [WikiRead](docs/wikis/README.md#wikiread) - Retrieve a Wiki
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
