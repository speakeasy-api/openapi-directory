# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/osf.io/2.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.addons.addons_list()

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### addons

* `addons_list` - List all addons

### base

* `base_read` - Root

### citations

* `citations_styles_list` - List all citation styles
* `citations_styles_read` - Retrieve a citation style

### collections

* `collections_add_metadata` - Add Metadata or Subjects to a Entity in a Collection
* `collections_collected_metadata` - Retrieve subject data for a specific piece of metadata info for a collection
* `collections_create` - Create a Collection
* `collections_delete` - Delete a Collection
* `collections_detail` - Retrieve a Collection
* `collections_linked_nodes_list` - List All Linked Nodes for a Collection
* `collections_linked_nodes_relationships` - Link Nodes to Collection
* `collections_linked_nodes_relationships_create` - Give a Sparse List of Node Ids
* `collections_linked_nodes_relationships_delete` - Remove Nodes From Collection
* `collections_linked_preprints_list` - List All Linked Preprints for a Collection
* `collections_linked_registrations_list` - List All Linked Registrations for a Collection
* `collections_linked_registrations_relationships` - Link Registrations to Collection
* `collections_linked_registrations_relationships_create` - Give a Sparse List of Registrations Ids
* `collections_linked_registrations_relationships_delete` - Remove Registrations From Collection
* `collections_list` - List all Collections
* `collections_metadata_delete` - Delete Collection Metadata from entitiy
* `collections_metadata_detail` - Add Metadata or Subjects to an Entity in a Collection
* `collections_metadata_registrations_detail` - Retrieve Specific Metadata for a Collection
* `collections_metadata_registrations_list` - Retrieve a list of collected metadata for a collection
* `collections_metadata_subjects_relationships` - Retrieve subject metadata for a specific piece of metadata in a collection
* `collections_metadata_subjects_relationships_update` - Update subjects for a specific piece of metadata in a collection

### comments

* `comments_delete` - Delete a comment
* `comments_put` - Update a comment
* `comments_read` - Retrieve a comment

### draft_registrations

* `delete_draft_registrations_draft_id_` - Delete a draft registration
* `draft_registration_contributors_create` - Add a contributor to a Draft Registration
* `draft_registration_contributors_list` - Retreive a list Contributors from a Draft Registration
* `draft_registrations_create` - Create a Draft Registration
* `draft_registrations_read` - Retrieve a list of Draft Registrations
* `get_draft_registrations_draft_id_` - Retrieve a Draft Registration
* `get_draft_registrations_draft_id_contributors_user_id_` - Retreive a Contributor from a Draft Registration
* `get_draft_registrations_draft_id_institutions_` - Retrieve Institutions afilliated with a Draft Registration
* `nodes_draft_registrations_read` - Retrieve a Draft Registration
* `nodes_draft_registrations_subjects` - Retrieve Subjects associated with a Draft Registration
* `patch_draft_registrations_draft_id_` - Update a Draft Registration

### files

* `files_detail` - Retrieve a file
* `files_patch` - Update a file
* `files_version_detail` - Retrieve a file version
* `files_versions` - List all file versions

### institutions

* `institutions_detail` - Retrieve an institution
* `institutions_list` - List all institutions
* `institutions_node_list` - List all affiliated nodes
* `institutions_registration_list` - List all affiliated registrations
* `institutions_users_list` - List all affiliated users

### licenses

* `license_list` - List all licenses
* `licenses_read` - Retrieve a license

### logs

* `logs_actions` - Actions
* `logs_read` - Retrieve a log

### nodes

* `nodes_addon_read` - Retrieve an addon
* `nodes_addons_folders_list` - List all addon folders
* `nodes_addons_list` - List all addons
* `nodes_children_create` - Create a child node
* `nodes_children_list` - List all child nodes
* `nodes_citation_list` - Retrieve citation details
* `nodes_citation_read` - Retrieve a styled citation
* `nodes_comment_create` - Create a comment
* `nodes_comments_list` - List all comments
* `nodes_contributors_create` - Create a contributor
* `nodes_contributors_delete` - Delete a contributor
* `nodes_contributors_list` - List all contributors
* `nodes_contributors_partial_update` - Update a contributor
* `nodes_contributors_read` - Retrieve a contributor
* `nodes_create` - Create a node
* `nodes_delete` - Delete a node
* `nodes_draft_registrations_create` - Create a draft registration based on your current project Node.
* `nodes_draft_registrations_delete` - Delete a draft registration
* `nodes_draft_registrations_list` - List all draft registrations
* `nodes_draft_registrations_partial_update` - Update a draft registration
* `nodes_files_list` - List all node files
* `nodes_files_read` - Retrieve a file
* `nodes_forks_create` - Create a fork of this node
* `nodes_forks_list` - List all forks of this node
* `nodes_identifiers_list` - List all identifiers
* `nodes_institutions_list` - List all institutions
* `nodes_linked_nodes_list` - List all linked nodes
* `nodes_list` - List all nodes
* `nodes_logs_list` - List all logs
* `nodes_node_addon_update` - Update an addon
* `nodes_partial_update` - Update a node
* `nodes_preprints_list` - List all preprints
* `nodes_providers_list` - List all storage providers
* `nodes_providers_read` - Retrieve a storage provider
* `nodes_read` - Retrieve a node
* `nodes_registrations_list` - List all registrations
* `nodes_view_only_links_list` - List all view only links
* `nodes_view_only_links_read` - Retrieve a view only link
* `nodes_wikis_list` - List all wikis

### preprint_providers

* `preprint_provider_detail` - Retrieve a preprint provider
* `preprint_provider_licenses_list` - List all licenses
* `preprint_provider_list` - List all preprint providers
* `preprint_provider_taxonomies_list` - List all taxonomies
* `preprint_providers_preprints_list` - List all preprints

### preprints

* `preprints_bibliographic_contributors_list` - List all Bibliographic Contributors
* `preprints_citation_list` - Retrieve citation details
* `preprints_citation_read` - Retrieve a styled citation
* `preprints_contributor_read` - Retrieve a contributor
* `preprints_contributors_create` - Create a Contributor
* `preprints_contributors_list` - List all Contributors for a Preprint
* `preprints_create` - Create a preprint
* `preprints_list` - List all preprints
* `preprints_partial_update` - Update a preprint
* `preprints_read` - Retrieve a preprint

### registration_schema_blocks

* `get_schema_responses_schema_response_id_schema_blocks_schema_response_block_id_` - Retrieve a Registration Schema Block
* `schema_response_blocks_read` - Retrieve a list of Registration Schema Blocks for a Schema Response

### registration_schemas

* `registration_schema_read` - Retrieve a Registration Schema
* `registration_schemas_list` - Retrieve a list of Registration Schemas

### registrations

* `registrations_children_list` - List all child registrations
* `registrations_citation_read` - Retrieve a citation
* `registrations_citations_list` - List all citation styles
* `registrations_comments_list` - List all comments
* `registrations_contributors_list` - List all contributors
* `registrations_contributors_read` - Retrieve a contributor
* `registrations_files_list` - List all files
* `registrations_files_read` - Retrieve a file
* `registrations_forks_create` - Create a fork
* `registrations_forks_list` - List all forks
* `registrations_identifiers_list` - List all identifiers
* `registrations_institutions_list` - List all institutions
* `registrations_linked_nodes_list` - List all linked nodes
* `registrations_list` - List all registrations
* `registrations_logs_list` - List all logs
* `registrations_partial_update` - Update a registration
* `registrations_providers_list` - List all storage providers
* `registrations_read` - Retrieve a registration
* `registrations_view_only_links_list` - List all view only links
* `registrations_view_only_links_read` - Retrieve a view only link
* `registrations_wikis_list` - List all wikis

### schema_response_actions

* `get_schema_responses_schema_response_id_actions_schema_response_action_id_` - A Schema Response Action from a Schema Response
* `post_schema_responses_schema_response_id_actions_` - Create a new Schema Response Action
* `schema_response_action_read` - Retrieve a list of Schema Response Actions for a Schema Response

### schema_responses

* `schema_response_delete` - Delete a Incomplete Schema Response
* `schema_response_patch` - Update a Registration's Schema Response
* `schema_response_ppost` - Create a new Schema Response
* `schema_responses_list` - List all Schema Responses
* `schema_responses_read` - Retrieve a Schema Response

### taxonomies

* `taxonomies_list` - List all taxonomies
* `taxonomies_read` - Retrieve a taxonomy

### users

* `users_addon_accounts_list` - List all addon accounts
* `users_addon_accounts_read` - Retrieve an addon account
* `users_addons_list` - List all user addons
* `users_addons_read` - Retrieve a user addon
* `users_institutions_list` - List all institutions
* `users_list` - List all users
* `users_nodes_list` - List all nodes
* `users_partial_update` - Update a user
* `users_preprints_list` - List all preprints
* `users_read` - Retrieve a user
* `users_registrations_list` - List all registrations

### view_only_links

* `view_only_links_node_list` - List all nodes
* `view_only_links_read` - Retrieve a view only link

### wikis

* `wiki_content` - Retrieve the Content of a Wiki
* `wiki_read` - Retrieve a Wiki
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
