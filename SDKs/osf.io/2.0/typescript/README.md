# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/osf.io/2.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/osf.io/2.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AddonsListResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.addons.addonsList().then((res: AddonsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### addons

* `addonsList` - List all addons

### base

* `baseRead` - Root

### citations

* `citationsStylesList` - List all citation styles
* `citationsStylesRead` - Retrieve a citation style

### collections

* `collectionsAddMetadata` - Add Metadata or Subjects to a Entity in a Collection
* `collectionsCollectedMetadata` - Retrieve subject data for a specific piece of metadata info for a collection
* `collectionsCreate` - Create a Collection
* `collectionsDelete` - Delete a Collection
* `collectionsDetail` - Retrieve a Collection
* `collectionsLinkedNodesList` - List All Linked Nodes for a Collection
* `collectionsLinkedNodesRelationships` - Link Nodes to Collection
* `collectionsLinkedNodesRelationshipsCreate` - Give a Sparse List of Node Ids
* `collectionsLinkedNodesRelationshipsDelete` - Remove Nodes From Collection
* `collectionsLinkedPreprintsList` - List All Linked Preprints for a Collection
* `collectionsLinkedRegistrationsList` - List All Linked Registrations for a Collection
* `collectionsLinkedRegistrationsRelationships` - Link Registrations to Collection
* `collectionsLinkedRegistrationsRelationshipsCreate` - Give a Sparse List of Registrations Ids
* `collectionsLinkedRegistrationsRelationshipsDelete` - Remove Registrations From Collection
* `collectionsList` - List all Collections
* `collectionsMetadataDelete` - Delete Collection Metadata from entitiy
* `collectionsMetadataDetail` - Add Metadata or Subjects to an Entity in a Collection
* `collectionsMetadataRegistrationsDetail` - Retrieve Specific Metadata for a Collection
* `collectionsMetadataRegistrationsList` - Retrieve a list of collected metadata for a collection
* `collectionsMetadataSubjectsRelationships` - Retrieve subject metadata for a specific piece of metadata in a collection
* `collectionsMetadataSubjectsRelationshipsUpdate` - Update subjects for a specific piece of metadata in a collection

### comments

* `commentsDelete` - Delete a comment
* `commentsPut` - Update a comment
* `commentsRead` - Retrieve a comment

### draftRegistrations

* `deleteDraftRegistrationsDraftId` - Delete a draft registration
* `draftRegistrationContributorsCreate` - Add a contributor to a Draft Registration
* `draftRegistrationContributorsList` - Retreive a list Contributors from a Draft Registration
* `draftRegistrationsCreate` - Create a Draft Registration
* `draftRegistrationsRead` - Retrieve a list of Draft Registrations
* `getDraftRegistrationsDraftId` - Retrieve a Draft Registration
* `getDraftRegistrationsDraftIdContributorsUserId` - Retreive a Contributor from a Draft Registration
* `getDraftRegistrationsDraftIdInstitutions` - Retrieve Institutions afilliated with a Draft Registration
* `nodesDraftRegistrationsRead` - Retrieve a Draft Registration
* `nodesDraftRegistrationsSubjects` - Retrieve Subjects associated with a Draft Registration
* `patchDraftRegistrationsDraftId` - Update a Draft Registration

### files

* `filesDetail` - Retrieve a file
* `filesPatch` - Update a file
* `filesVersionDetail` - Retrieve a file version
* `filesVersions` - List all file versions

### institutions

* `institutionsDetail` - Retrieve an institution
* `institutionsList` - List all institutions
* `institutionsNodeList` - List all affiliated nodes
* `institutionsRegistrationList` - List all affiliated registrations
* `institutionsUsersList` - List all affiliated users

### licenses

* `licenseList` - List all licenses
* `licensesRead` - Retrieve a license

### logs

* `logsActions` - Actions
* `logsRead` - Retrieve a log

### nodes

* `nodesAddonRead` - Retrieve an addon
* `nodesAddonsFoldersList` - List all addon folders
* `nodesAddonsList` - List all addons
* `nodesChildrenCreate` - Create a child node
* `nodesChildrenList` - List all child nodes
* `nodesCitationList` - Retrieve citation details
* `nodesCitationRead` - Retrieve a styled citation
* `nodesCommentCreate` - Create a comment
* `nodesCommentsList` - List all comments
* `nodesContributorsCreate` - Create a contributor
* `nodesContributorsDelete` - Delete a contributor
* `nodesContributorsList` - List all contributors
* `nodesContributorsPartialUpdate` - Update a contributor
* `nodesContributorsRead` - Retrieve a contributor
* `nodesCreate` - Create a node
* `nodesDelete` - Delete a node
* `nodesDraftRegistrationsCreate` - Create a draft registration based on your current project Node.
* `nodesDraftRegistrationsDelete` - Delete a draft registration
* `nodesDraftRegistrationsList` - List all draft registrations
* `nodesDraftRegistrationsPartialUpdate` - Update a draft registration
* `nodesFilesList` - List all node files
* `nodesFilesRead` - Retrieve a file
* `nodesForksCreate` - Create a fork of this node
* `nodesForksList` - List all forks of this node
* `nodesIdentifiersList` - List all identifiers
* `nodesInstitutionsList` - List all institutions
* `nodesLinkedNodesList` - List all linked nodes
* `nodesList` - List all nodes
* `nodesLogsList` - List all logs
* `nodesNodeAddonUpdate` - Update an addon
* `nodesPartialUpdate` - Update a node
* `nodesPreprintsList` - List all preprints
* `nodesProvidersList` - List all storage providers
* `nodesProvidersRead` - Retrieve a storage provider
* `nodesRead` - Retrieve a node
* `nodesRegistrationsList` - List all registrations
* `nodesViewOnlyLinksList` - List all view only links
* `nodesViewOnlyLinksRead` - Retrieve a view only link
* `nodesWikisList` - List all wikis

### preprintProviders

* `preprintProviderDetail` - Retrieve a preprint provider
* `preprintProviderLicensesList` - List all licenses
* `preprintProviderList` - List all preprint providers
* `preprintProviderTaxonomiesList` - List all taxonomies
* `preprintProvidersPreprintsList` - List all preprints

### preprints

* `preprintsBibliographicContributorsList` - List all Bibliographic Contributors
* `preprintsCitationList` - Retrieve citation details
* `preprintsCitationRead` - Retrieve a styled citation
* `preprintsContributorRead` - Retrieve a contributor
* `preprintsContributorsCreate` - Create a Contributor
* `preprintsContributorsList` - List all Contributors for a Preprint
* `preprintsCreate` - Create a preprint
* `preprintsList` - List all preprints
* `preprintsPartialUpdate` - Update a preprint
* `preprintsRead` - Retrieve a preprint

### registrationSchemaBlocks

* `getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId` - Retrieve a Registration Schema Block
* `schemaResponseBlocksRead` - Retrieve a list of Registration Schema Blocks for a Schema Response

### registrationSchemas

* `registrationSchemaRead` - Retrieve a Registration Schema
* `registrationSchemasList` - Retrieve a list of Registration Schemas

### registrations

* `registrationsChildrenList` - List all child registrations
* `registrationsCitationRead` - Retrieve a citation
* `registrationsCitationsList` - List all citation styles
* `registrationsCommentsList` - List all comments
* `registrationsContributorsList` - List all contributors
* `registrationsContributorsRead` - Retrieve a contributor
* `registrationsFilesList` - List all files
* `registrationsFilesRead` - Retrieve a file
* `registrationsForksCreate` - Create a fork
* `registrationsForksList` - List all forks
* `registrationsIdentifiersList` - List all identifiers
* `registrationsInstitutionsList` - List all institutions
* `registrationsLinkedNodesList` - List all linked nodes
* `registrationsList` - List all registrations
* `registrationsLogsList` - List all logs
* `registrationsPartialUpdate` - Update a registration
* `registrationsProvidersList` - List all storage providers
* `registrationsRead` - Retrieve a registration
* `registrationsViewOnlyLinksList` - List all view only links
* `registrationsViewOnlyLinksRead` - Retrieve a view only link
* `registrationsWikisList` - List all wikis

### schemaResponseActions

* `getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionId` - A Schema Response Action from a Schema Response
* `postSchemaResponsesSchemaResponseIdActions` - Create a new Schema Response Action
* `schemaResponseActionRead` - Retrieve a list of Schema Response Actions for a Schema Response

### schemaResponses

* `schemaResponseDelete` - Delete a Incomplete Schema Response
* `schemaResponsePatch` - Update a Registration's Schema Response
* `schemaResponsePpost` - Create a new Schema Response
* `schemaResponsesList` - List all Schema Responses
* `schemaResponsesRead` - Retrieve a Schema Response

### taxonomies

* `taxonomiesList` - List all taxonomies
* `taxonomiesRead` - Retrieve a taxonomy

### users

* `usersAddonAccountsList` - List all addon accounts
* `usersAddonAccountsRead` - Retrieve an addon account
* `usersAddonsList` - List all user addons
* `usersAddonsRead` - Retrieve a user addon
* `usersInstitutionsList` - List all institutions
* `usersList` - List all users
* `usersNodesList` - List all nodes
* `usersPartialUpdate` - Update a user
* `usersPreprintsList` - List all preprints
* `usersRead` - Retrieve a user
* `usersRegistrationsList` - List all registrations

### viewOnlyLinks

* `viewOnlyLinksNodeList` - List all nodes
* `viewOnlyLinksRead` - Retrieve a view only link

### wikis

* `wikiContent` - Retrieve the Content of a Wiki
* `wikiRead` - Retrieve a Wiki
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

