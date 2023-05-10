# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->addons->addonsList();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [addons](docs/addons/README.md)

* [addonsList](docs/addons/README.md#addonslist) - List all addons

### [base](docs/base/README.md)

* [baseRead](docs/base/README.md#baseread) - Root

### [citations](docs/citations/README.md)

* [citationsStylesList](docs/citations/README.md#citationsstyleslist) - List all citation styles
* [citationsStylesRead](docs/citations/README.md#citationsstylesread) - Retrieve a citation style

### [collections](docs/collections/README.md)

* [collectionsAddMetadata](docs/collections/README.md#collectionsaddmetadata) - Add Metadata or Subjects to a Entity in a Collection
* [collectionsCollectedMetadata](docs/collections/README.md#collectionscollectedmetadata) - Retrieve subject data for a specific piece of metadata info for a collection
* [collectionsCreate](docs/collections/README.md#collectionscreate) - Create a Collection
* [collectionsDelete](docs/collections/README.md#collectionsdelete) - Delete a Collection
* [collectionsDetail](docs/collections/README.md#collectionsdetail) - Retrieve a Collection
* [collectionsLinkedNodesList](docs/collections/README.md#collectionslinkednodeslist) - List All Linked Nodes for a Collection
* [collectionsLinkedNodesRelationships](docs/collections/README.md#collectionslinkednodesrelationships) - Link Nodes to Collection
* [collectionsLinkedNodesRelationshipsCreate](docs/collections/README.md#collectionslinkednodesrelationshipscreate) - Give a Sparse List of Node Ids
* [collectionsLinkedNodesRelationshipsDelete](docs/collections/README.md#collectionslinkednodesrelationshipsdelete) - Remove Nodes From Collection
* [collectionsLinkedPreprintsList](docs/collections/README.md#collectionslinkedpreprintslist) - List All Linked Preprints for a Collection
* [collectionsLinkedRegistrationsList](docs/collections/README.md#collectionslinkedregistrationslist) - List All Linked Registrations for a Collection
* [collectionsLinkedRegistrationsRelationships](docs/collections/README.md#collectionslinkedregistrationsrelationships) - Link Registrations to Collection
* [collectionsLinkedRegistrationsRelationshipsCreate](docs/collections/README.md#collectionslinkedregistrationsrelationshipscreate) - Give a Sparse List of Registrations Ids
* [collectionsLinkedRegistrationsRelationshipsDelete](docs/collections/README.md#collectionslinkedregistrationsrelationshipsdelete) - Remove Registrations From Collection
* [collectionsList](docs/collections/README.md#collectionslist) - List all Collections
* [collectionsMetadataDelete](docs/collections/README.md#collectionsmetadatadelete) - Delete Collection Metadata from entitiy
* [collectionsMetadataDetail](docs/collections/README.md#collectionsmetadatadetail) - Add Metadata or Subjects to an Entity in a Collection
* [collectionsMetadataRegistrationsDetail](docs/collections/README.md#collectionsmetadataregistrationsdetail) - Retrieve Specific Metadata for a Collection
* [collectionsMetadataRegistrationsList](docs/collections/README.md#collectionsmetadataregistrationslist) - Retrieve a list of collected metadata for a collection
* [collectionsMetadataSubjectsRelationships](docs/collections/README.md#collectionsmetadatasubjectsrelationships) - Retrieve subject metadata for a specific piece of metadata in a collection
* [collectionsMetadataSubjectsRelationshipsUpdate](docs/collections/README.md#collectionsmetadatasubjectsrelationshipsupdate) - Update subjects for a specific piece of metadata in a collection

### [comments](docs/comments/README.md)

* [commentsDelete](docs/comments/README.md#commentsdelete) - Delete a comment
* [commentsPut](docs/comments/README.md#commentsput) - Update a comment
* [commentsRead](docs/comments/README.md#commentsread) - Retrieve a comment

### [draftRegistrations](docs/draftregistrations/README.md)

* [deleteDraftRegistrationsDraftId](docs/draftregistrations/README.md#deletedraftregistrationsdraftid) - Delete a draft registration
* [draftRegistrationContributorsCreate](docs/draftregistrations/README.md#draftregistrationcontributorscreate) - Add a contributor to a Draft Registration
* [draftRegistrationContributorsList](docs/draftregistrations/README.md#draftregistrationcontributorslist) - Retreive a list Contributors from a Draft Registration
* [draftRegistrationsCreate](docs/draftregistrations/README.md#draftregistrationscreate) - Create a Draft Registration
* [draftRegistrationsRead](docs/draftregistrations/README.md#draftregistrationsread) - Retrieve a list of Draft Registrations
* [getDraftRegistrationsDraftId](docs/draftregistrations/README.md#getdraftregistrationsdraftid) - Retrieve a Draft Registration
* [getDraftRegistrationsDraftIdContributorsUserId](docs/draftregistrations/README.md#getdraftregistrationsdraftidcontributorsuserid) - Retreive a Contributor from a Draft Registration
* [getDraftRegistrationsDraftIdInstitutions](docs/draftregistrations/README.md#getdraftregistrationsdraftidinstitutions) - Retrieve Institutions afilliated with a Draft Registration
* [nodesDraftRegistrationsRead](docs/draftregistrations/README.md#nodesdraftregistrationsread) - Retrieve a Draft Registration
* [nodesDraftRegistrationsSubjects](docs/draftregistrations/README.md#nodesdraftregistrationssubjects) - Retrieve Subjects associated with a Draft Registration
* [patchDraftRegistrationsDraftId](docs/draftregistrations/README.md#patchdraftregistrationsdraftid) - Update a Draft Registration

### [files](docs/files/README.md)

* [filesDetail](docs/files/README.md#filesdetail) - Retrieve a file
* [filesPatch](docs/files/README.md#filespatch) - Update a file
* [filesVersionDetail](docs/files/README.md#filesversiondetail) - Retrieve a file version
* [filesVersions](docs/files/README.md#filesversions) - List all file versions

### [institutions](docs/institutions/README.md)

* [institutionsDetail](docs/institutions/README.md#institutionsdetail) - Retrieve an institution
* [institutionsList](docs/institutions/README.md#institutionslist) - List all institutions
* [institutionsNodeList](docs/institutions/README.md#institutionsnodelist) - List all affiliated nodes
* [institutionsRegistrationList](docs/institutions/README.md#institutionsregistrationlist) - List all affiliated registrations
* [institutionsUsersList](docs/institutions/README.md#institutionsuserslist) - List all affiliated users

### [licenses](docs/licenses/README.md)

* [licenseList](docs/licenses/README.md#licenselist) - List all licenses
* [licensesRead](docs/licenses/README.md#licensesread) - Retrieve a license

### [logs](docs/logs/README.md)

* [logsActions](docs/logs/README.md#logsactions) - Actions
* [logsRead](docs/logs/README.md#logsread) - Retrieve a log

### [nodes](docs/nodes/README.md)

* [nodesAddonRead](docs/nodes/README.md#nodesaddonread) - Retrieve an addon
* [nodesAddonsFoldersList](docs/nodes/README.md#nodesaddonsfolderslist) - List all addon folders
* [nodesAddonsList](docs/nodes/README.md#nodesaddonslist) - List all addons
* [nodesChildrenCreate](docs/nodes/README.md#nodeschildrencreate) - Create a child node
* [nodesChildrenList](docs/nodes/README.md#nodeschildrenlist) - List all child nodes
* [nodesCitationList](docs/nodes/README.md#nodescitationlist) - Retrieve citation details
* [nodesCitationRead](docs/nodes/README.md#nodescitationread) - Retrieve a styled citation
* [nodesCommentCreate](docs/nodes/README.md#nodescommentcreate) - Create a comment
* [nodesCommentsList](docs/nodes/README.md#nodescommentslist) - List all comments
* [nodesContributorsCreate](docs/nodes/README.md#nodescontributorscreate) - Create a contributor
* [nodesContributorsDelete](docs/nodes/README.md#nodescontributorsdelete) - Delete a contributor
* [nodesContributorsList](docs/nodes/README.md#nodescontributorslist) - List all contributors
* [nodesContributorsPartialUpdate](docs/nodes/README.md#nodescontributorspartialupdate) - Update a contributor
* [nodesContributorsRead](docs/nodes/README.md#nodescontributorsread) - Retrieve a contributor
* [nodesCreate](docs/nodes/README.md#nodescreate) - Create a node
* [nodesDelete](docs/nodes/README.md#nodesdelete) - Delete a node
* [nodesDraftRegistrationsCreate](docs/nodes/README.md#nodesdraftregistrationscreate) - Create a draft registration based on your current project Node.
* [nodesDraftRegistrationsDelete](docs/nodes/README.md#nodesdraftregistrationsdelete) - Delete a draft registration
* [nodesDraftRegistrationsList](docs/nodes/README.md#nodesdraftregistrationslist) - List all draft registrations
* [nodesDraftRegistrationsPartialUpdate](docs/nodes/README.md#nodesdraftregistrationspartialupdate) - Update a draft registration
* [nodesFilesList](docs/nodes/README.md#nodesfileslist) - List all node files
* [nodesFilesRead](docs/nodes/README.md#nodesfilesread) - Retrieve a file
* [nodesForksCreate](docs/nodes/README.md#nodesforkscreate) - Create a fork of this node
* [nodesForksList](docs/nodes/README.md#nodesforkslist) - List all forks of this node
* [nodesIdentifiersList](docs/nodes/README.md#nodesidentifierslist) - List all identifiers
* [nodesInstitutionsList](docs/nodes/README.md#nodesinstitutionslist) - List all institutions
* [nodesLinkedNodesList](docs/nodes/README.md#nodeslinkednodeslist) - List all linked nodes
* [nodesList](docs/nodes/README.md#nodeslist) - List all nodes
* [nodesLogsList](docs/nodes/README.md#nodeslogslist) - List all logs
* [nodesNodeAddonUpdate](docs/nodes/README.md#nodesnodeaddonupdate) - Update an addon
* [nodesPartialUpdate](docs/nodes/README.md#nodespartialupdate) - Update a node
* [nodesPreprintsList](docs/nodes/README.md#nodespreprintslist) - List all preprints
* [nodesProvidersList](docs/nodes/README.md#nodesproviderslist) - List all storage providers
* [nodesProvidersRead](docs/nodes/README.md#nodesprovidersread) - Retrieve a storage provider
* [nodesRead](docs/nodes/README.md#nodesread) - Retrieve a node
* [nodesRegistrationsList](docs/nodes/README.md#nodesregistrationslist) - List all registrations
* [nodesViewOnlyLinksList](docs/nodes/README.md#nodesviewonlylinkslist) - List all view only links
* [nodesViewOnlyLinksRead](docs/nodes/README.md#nodesviewonlylinksread) - Retrieve a view only link
* [nodesWikisList](docs/nodes/README.md#nodeswikislist) - List all wikis

### [preprintProviders](docs/preprintproviders/README.md)

* [preprintProviderDetail](docs/preprintproviders/README.md#preprintproviderdetail) - Retrieve a preprint provider
* [preprintProviderLicensesList](docs/preprintproviders/README.md#preprintproviderlicenseslist) - List all licenses
* [preprintProviderList](docs/preprintproviders/README.md#preprintproviderlist) - List all preprint providers
* [preprintProviderTaxonomiesList](docs/preprintproviders/README.md#preprintprovidertaxonomieslist) - List all taxonomies
* [preprintProvidersPreprintsList](docs/preprintproviders/README.md#preprintproviderspreprintslist) - List all preprints

### [preprints](docs/preprints/README.md)

* [preprintsBibliographicContributorsList](docs/preprints/README.md#preprintsbibliographiccontributorslist) - List all Bibliographic Contributors
* [preprintsCitationList](docs/preprints/README.md#preprintscitationlist) - Retrieve citation details
* [preprintsCitationRead](docs/preprints/README.md#preprintscitationread) - Retrieve a styled citation
* [preprintsContributorRead](docs/preprints/README.md#preprintscontributorread) - Retrieve a contributor
* [preprintsContributorsCreate](docs/preprints/README.md#preprintscontributorscreate) - Create a Contributor
* [preprintsContributorsList](docs/preprints/README.md#preprintscontributorslist) - List all Contributors for a Preprint
* [preprintsCreate](docs/preprints/README.md#preprintscreate) - Create a preprint
* [preprintsList](docs/preprints/README.md#preprintslist) - List all preprints
* [preprintsPartialUpdate](docs/preprints/README.md#preprintspartialupdate) - Update a preprint
* [preprintsRead](docs/preprints/README.md#preprintsread) - Retrieve a preprint

### [registrationSchemaBlocks](docs/registrationschemablocks/README.md)

* [getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId](docs/registrationschemablocks/README.md#getschemaresponsesschemaresponseidschemablocksschemaresponseblockid) - Retrieve a Registration Schema Block
* [schemaResponseBlocksRead](docs/registrationschemablocks/README.md#schemaresponseblocksread) - Retrieve a list of Registration Schema Blocks for a Schema Response

### [registrationSchemas](docs/registrationschemas/README.md)

* [registrationSchemaRead](docs/registrationschemas/README.md#registrationschemaread) - Retrieve a Registration Schema
* [registrationSchemasList](docs/registrationschemas/README.md#registrationschemaslist) - Retrieve a list of Registration Schemas

### [registrations](docs/registrations/README.md)

* [registrationsChildrenList](docs/registrations/README.md#registrationschildrenlist) - List all child registrations
* [registrationsCitationRead](docs/registrations/README.md#registrationscitationread) - Retrieve a citation
* [registrationsCitationsList](docs/registrations/README.md#registrationscitationslist) - List all citation styles
* [registrationsCommentsList](docs/registrations/README.md#registrationscommentslist) - List all comments
* [registrationsContributorsList](docs/registrations/README.md#registrationscontributorslist) - List all contributors
* [registrationsContributorsRead](docs/registrations/README.md#registrationscontributorsread) - Retrieve a contributor
* [registrationsFilesList](docs/registrations/README.md#registrationsfileslist) - List all files
* [registrationsFilesRead](docs/registrations/README.md#registrationsfilesread) - Retrieve a file
* [registrationsForksCreate](docs/registrations/README.md#registrationsforkscreate) - Create a fork
* [registrationsForksList](docs/registrations/README.md#registrationsforkslist) - List all forks
* [registrationsIdentifiersList](docs/registrations/README.md#registrationsidentifierslist) - List all identifiers
* [registrationsInstitutionsList](docs/registrations/README.md#registrationsinstitutionslist) - List all institutions
* [registrationsLinkedNodesList](docs/registrations/README.md#registrationslinkednodeslist) - List all linked nodes
* [registrationsList](docs/registrations/README.md#registrationslist) - List all registrations
* [registrationsLogsList](docs/registrations/README.md#registrationslogslist) - List all logs
* [registrationsPartialUpdate](docs/registrations/README.md#registrationspartialupdate) - Update a registration
* [registrationsProvidersList](docs/registrations/README.md#registrationsproviderslist) - List all storage providers
* [registrationsRead](docs/registrations/README.md#registrationsread) - Retrieve a registration
* [registrationsViewOnlyLinksList](docs/registrations/README.md#registrationsviewonlylinkslist) - List all view only links
* [registrationsViewOnlyLinksRead](docs/registrations/README.md#registrationsviewonlylinksread) - Retrieve a view only link
* [registrationsWikisList](docs/registrations/README.md#registrationswikislist) - List all wikis

### [schemaResponseActions](docs/schemaresponseactions/README.md)

* [getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionId](docs/schemaresponseactions/README.md#getschemaresponsesschemaresponseidactionsschemaresponseactionid) - A Schema Response Action from a Schema Response
* [postSchemaResponsesSchemaResponseIdActions](docs/schemaresponseactions/README.md#postschemaresponsesschemaresponseidactions) - Create a new Schema Response Action
* [schemaResponseActionRead](docs/schemaresponseactions/README.md#schemaresponseactionread) - Retrieve a list of Schema Response Actions for a Schema Response

### [schemaResponses](docs/schemaresponses/README.md)

* [schemaResponseDelete](docs/schemaresponses/README.md#schemaresponsedelete) - Delete a Incomplete Schema Response
* [schemaResponsePatch](docs/schemaresponses/README.md#schemaresponsepatch) - Update a Registration's Schema Response
* [schemaResponsePpost](docs/schemaresponses/README.md#schemaresponseppost) - Create a new Schema Response
* [schemaResponsesList](docs/schemaresponses/README.md#schemaresponseslist) - List all Schema Responses
* [schemaResponsesRead](docs/schemaresponses/README.md#schemaresponsesread) - Retrieve a Schema Response

### [taxonomies](docs/taxonomies/README.md)

* [taxonomiesList](docs/taxonomies/README.md#taxonomieslist) - List all taxonomies
* [taxonomiesRead](docs/taxonomies/README.md#taxonomiesread) - Retrieve a taxonomy

### [users](docs/users/README.md)

* [usersAddonAccountsList](docs/users/README.md#usersaddonaccountslist) - List all addon accounts
* [usersAddonAccountsRead](docs/users/README.md#usersaddonaccountsread) - Retrieve an addon account
* [usersAddonsList](docs/users/README.md#usersaddonslist) - List all user addons
* [usersAddonsRead](docs/users/README.md#usersaddonsread) - Retrieve a user addon
* [usersInstitutionsList](docs/users/README.md#usersinstitutionslist) - List all institutions
* [usersList](docs/users/README.md#userslist) - List all users
* [usersNodesList](docs/users/README.md#usersnodeslist) - List all nodes
* [usersPartialUpdate](docs/users/README.md#userspartialupdate) - Update a user
* [usersPreprintsList](docs/users/README.md#userspreprintslist) - List all preprints
* [usersRead](docs/users/README.md#usersread) - Retrieve a user
* [usersRegistrationsList](docs/users/README.md#usersregistrationslist) - List all registrations

### [viewOnlyLinks](docs/viewonlylinks/README.md)

* [viewOnlyLinksNodeList](docs/viewonlylinks/README.md#viewonlylinksnodelist) - List all nodes
* [viewOnlyLinksRead](docs/viewonlylinks/README.md#viewonlylinksread) - Retrieve a view only link

### [wikis](docs/wikis/README.md)

* [wikiContent](docs/wikis/README.md#wikicontent) - Retrieve the Content of a Wiki
* [wikiRead](docs/wikis/README.md#wikiread) - Retrieve a Wiki
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
