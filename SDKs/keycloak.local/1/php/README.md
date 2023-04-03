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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### attackDetection

* `deleteRealmAttackDetectionBruteForceUsers` - Clear any user login failures for all users   This can release temporary disabled users
* `deleteRealmAttackDetectionBruteForceUsersUserId` - Clear any user login failures for the user   This can release temporary disabled user
* `getRealmAttackDetectionBruteForceUsersUserId` - Get status of a username in brute force detection

### authenticationManagement

* `deleteRealmAuthenticationConfigId` - Delete authenticator configuration
* `deleteRealmAuthenticationExecutionsExecutionId` - Delete execution
* `deleteRealmAuthenticationFlowsId` - Delete an authentication flow
* `deleteRealmAuthenticationRequiredActionsAlias` - Delete required action
* `getRealmAuthenticationAuthenticatorProviders` - Get authenticator providers   Returns a list of authenticator providers.
* `getRealmAuthenticationClientAuthenticatorProviders` - Get client authenticator providers   Returns a list of client authenticator providers.
* `getRealmAuthenticationConfigDescriptionProviderId` - Get authenticator provider’s configuration description
* `getRealmAuthenticationConfigId` - Get authenticator configuration
* `getRealmAuthenticationExecutionsExecutionId` - Get Single Execution
* `getRealmAuthenticationFlows` - Get authentication flows   Returns a list of authentication flows.
* `getRealmAuthenticationFlowsFlowAliasExecutions` - Get authentication executions for a flow
* `getRealmAuthenticationFlowsId` - Get authentication flow for id
* `getRealmAuthenticationFormActionProviders` - Get form action providers   Returns a list of form action providers.
* `getRealmAuthenticationFormProviders` - Get form providers   Returns a list of form providers.
* `getRealmAuthenticationPerClientConfigDescription` - Get configuration descriptions for all clients
* `getRealmAuthenticationRequiredActions` - Get required actions   Returns a list of required actions.
* `getRealmAuthenticationRequiredActionsAlias` - Get required action for alias
* `getRealmAuthenticationUnregisteredRequiredActions` - Get unregistered required actions   Returns a list of unregistered required actions.
* `postRealmAuthenticationExecutions` - Add new authentication execution
* `postRealmAuthenticationExecutionsExecutionIdConfig` - Update execution with new configuration
* `postRealmAuthenticationExecutionsExecutionIdLowerPriority` - Lower execution’s priority
* `postRealmAuthenticationExecutionsExecutionIdRaisePriority` - Raise execution’s priority
* `postRealmAuthenticationFlows` - Create a new authentication flow
* `postRealmAuthenticationFlowsFlowAliasCopy` - Copy existing authentication flow under a new name   The new name is given as 'newName' attribute of the passed JSON object
* `postRealmAuthenticationFlowsFlowAliasExecutionsExecution` - Add new authentication execution to a flow
* `postRealmAuthenticationFlowsFlowAliasExecutionsFlow` - Add new flow with new execution to existing flow
* `postRealmAuthenticationRegisterRequiredAction` - Register a new required actions
* `postRealmAuthenticationRequiredActionsAliasLowerPriority` - Lower required action’s priority
* `postRealmAuthenticationRequiredActionsAliasRaisePriority` - Raise required action’s priority
* `putRealmAuthenticationConfigId` - Update authenticator configuration
* `putRealmAuthenticationFlowsFlowAliasExecutions` - Update authentication executions of a flow
* `putRealmAuthenticationFlowsId` - Update an authentication flow
* `putRealmAuthenticationRequiredActionsAlias` - Update required action

### clientAttributeCertificate

* `getRealmClientsIdCertificatesAttr` - Get key info
* `postRealmClientsIdCertificatesAttrDownload` - Get a keystore file for the client, containing private key and public certificate
* `postRealmClientsIdCertificatesAttrGenerate` - Generate a new certificate with new key pair
* `postRealmClientsIdCertificatesAttrGenerateAndDownload` - Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
* `postRealmClientsIdCertificatesAttrUpload` - Upload certificate and eventually private key
* `postRealmClientsIdCertificatesAttrUploadCertificate` - Upload only certificate, not private key

### clientInitialAccess

* `deleteRealmClientsInitialAccessId`
* `getRealmClientsInitialAccess`
* `postRealmClientsInitialAccess` - Create a new initial access token.

### clientRegistrationPolicy

* `getRealmClientRegistrationPolicyProviders` - Base path for retrieve providers with the configProperties properly filled

### clientRoleMappings

* `deleteRealmGroupsIdRoleMappingsClientsClient` - Delete client-level roles from user role mapping
* `deleteRealmUsersIdRoleMappingsClientsClient` - Delete client-level roles from user role mapping
* `getRealmGroupsIdRoleMappingsClientsClient` - Get client-level role mappings for the user, and the app
* `getRealmGroupsIdRoleMappingsClientsClientAvailable` - Get available client-level roles that can be mapped to the user
* `getRealmGroupsIdRoleMappingsClientsClientComposite` - Get effective client-level role mappings   This recurses any composite roles
* `getRealmUsersIdRoleMappingsClientsClient` - Get client-level role mappings for the user, and the app
* `getRealmUsersIdRoleMappingsClientsClientAvailable` - Get available client-level roles that can be mapped to the user
* `getRealmUsersIdRoleMappingsClientsClientComposite` - Get effective client-level role mappings   This recurses any composite roles
* `postRealmGroupsIdRoleMappingsClientsClient` - Add client-level roles to the user role mapping
* `postRealmUsersIdRoleMappingsClientsClient` - Add client-level roles to the user role mapping

### clientScopes

* `deleteRealmClientScopesId` - Delete the client scope
* `getRealmClientScopes` - Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
* `getRealmClientScopesId` - Get representation of the client scope
* `postRealmClientScopes` - Create a new client scope   Client Scope’s name must be unique!
* `putRealmClientScopesId` - Update the client scope

### clients

* `deleteRealmClientsId` - Delete the client
* `deleteRealmClientsIdDefaultClientScopesClientScopeId`
* `deleteRealmClientsIdNodesNode` - Unregister a cluster node from the client
* `deleteRealmClientsIdOptionalClientScopesClientScopeId`
* `getRealmClients` - Get clients belonging to the realm   Returns a list of clients belonging to the realm
* `getRealmClientsId` - Get representation of the client
* `getRealmClientsIdClientSecret` - Get the client secret
* `getRealmClientsIdDefaultClientScopes` - Get default client scopes.
* `getRealmClientsIdEvaluateScopesGenerateExampleAccessToken` - Create JSON with payload of example access token
* `getRealmClientsIdEvaluateScopesProtocolMappers` - Return list of all protocol mappers, which will be used when generating tokens issued for particular client.
* `getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted` - Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.
* `getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted` - Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.
* `getRealmClientsIdInstallationProvidersProviderId`
* `getRealmClientsIdManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `getRealmClientsIdOfflineSessionCount` - Get application offline session count   Returns a number of offline user sessions associated with this client   {      "count": number  }
* `getRealmClientsIdOfflineSessions` - Get offline sessions for client   Returns a list of offline user sessions associated with this client
* `getRealmClientsIdOptionalClientScopes` - Get optional client scopes.
* `getRealmClientsIdServiceAccountUser` - Get a user dedicated to the service account
* `getRealmClientsIdSessionCount` - Get application session count   Returns a number of user sessions associated with this client   {      "count": number  }
* `getRealmClientsIdTestNodesAvailable` - Test if registered cluster nodes are available   Tests availability by sending 'ping' request to all cluster nodes.
* `getRealmClientsIdUserSessions` - Get user sessions for client   Returns a list of user sessions associated with this client
* `postRealmClients` - Create a new client   Client’s client_id must be unique!
* `postRealmClientsIdClientSecret` - Generate a new secret for the client
* `postRealmClientsIdNodes` - Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak
* `postRealmClientsIdPushRevocation` - Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.
* `postRealmClientsIdRegistrationAccessToken` - Generate a new registration access token for the client
* `putRealmClientsId` - Update the client
* `putRealmClientsIdDefaultClientScopesClientScopeId`
* `putRealmClientsIdManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `putRealmClientsIdOptionalClientScopesClientScopeId`

### component

* `deleteRealmComponentsId`
* `getRealmComponents`
* `getRealmComponentsId`
* `getRealmComponentsIdSubComponentTypes` - List of subcomponent types that are available to configure for a particular parent component.
* `postRealmComponents`
* `putRealmComponentsId`

### groups

* `deleteRealmGroupsId`
* `getRealmGroups` - Get group hierarchy.
* `getRealmGroupsCount` - Returns the groups counts.
* `getRealmGroupsId`
* `getRealmGroupsIdManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `getRealmGroupsIdMembers` - Get users   Returns a list of users, filtered according to query parameters
* `postRealmGroups` - create or add a top level realm groupSet or create child.
* `postRealmGroupsIdChildren` - Set or create child.
* `putRealmGroupsId` - Update group, ignores subgroups.
* `putRealmGroupsIdManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference

### identityProviders

* `deleteRealmIdentityProviderInstancesAlias` - Delete the identity provider
* `deleteRealmIdentityProviderInstancesAliasMappersId` - Delete a mapper for the identity provider
* `getRealmIdentityProviderInstances` - Get identity providers
* `getRealmIdentityProviderInstancesAlias` - Get the identity provider
* `getRealmIdentityProviderInstancesAliasExport` - Export public broker configuration for identity provider
* `getRealmIdentityProviderInstancesAliasManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `getRealmIdentityProviderInstancesAliasMapperTypes` - Get mapper types for identity provider
* `getRealmIdentityProviderInstancesAliasMappers` - Get mappers for identity provider
* `getRealmIdentityProviderInstancesAliasMappersId` - Get mapper by id for the identity provider
* `getRealmIdentityProviderProvidersProviderId` - Get identity providers
* `postRealmIdentityProviderImportConfig` - Import identity provider from uploaded JSON file
* `postRealmIdentityProviderInstances` - Create a new identity provider
* `postRealmIdentityProviderInstancesAliasMappers` - Add a mapper to identity provider
* `putRealmIdentityProviderInstancesAlias` - Update the identity provider
* `putRealmIdentityProviderInstancesAliasManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `putRealmIdentityProviderInstancesAliasMappersId` - Update a mapper for the identity provider

### key

* `getRealmKeys`

### protocolMappers

* `deleteRealmClientScopesId1ProtocolMappersModelsId2` - Delete the mapper
* `deleteRealmClientsId1ProtocolMappersModelsId2` - Delete the mapper
* `getRealmClientScopesId1ProtocolMappersModelsId2` - Get mapper by id
* `getRealmClientScopesIdProtocolMappersModels` - Get mappers
* `getRealmClientScopesIdProtocolMappersProtocolProtocol` - Get mappers by name for a specific protocol
* `getRealmClientsId1ProtocolMappersModelsId2` - Get mapper by id
* `getRealmClientsIdProtocolMappersModels` - Get mappers
* `getRealmClientsIdProtocolMappersProtocolProtocol` - Get mappers by name for a specific protocol
* `postRealmClientScopesIdProtocolMappersAddModels` - Create multiple mappers
* `postRealmClientScopesIdProtocolMappersModels` - Create a mapper
* `postRealmClientsIdProtocolMappersAddModels` - Create multiple mappers
* `postRealmClientsIdProtocolMappersModels` - Create a mapper
* `putRealmClientScopesId1ProtocolMappersModelsId2` - Update the mapper
* `putRealmClientsId1ProtocolMappersModelsId2` - Update the mapper

### realmsAdmin

* `deleteRealm` - Delete the realm
* `deleteRealmAdminEvents` - Delete all admin events
* `deleteRealmDefaultDefaultClientScopesClientScopeId`
* `deleteRealmDefaultGroupsGroupId`
* `deleteRealmDefaultOptionalClientScopesClientScopeId`
* `deleteRealmEvents` - Delete all events
* `deleteRealmSessionsSession` - Remove a specific user session.
* `getRealm` - Get the top-level representation of the realm   It will not include nested information like User and Client representations.
* `getRealmAdminEvents` - Get admin events   Returns all admin events, or filters events based on URL query parameters listed here
* `getRealmClientSessionStats` - Get client session stats   Returns a JSON map.
* `getRealmCredentialRegistrators`
* `getRealmDefaultDefaultClientScopes` - Get realm default client scopes.
* `getRealmDefaultGroups` - Get group hierarchy.
* `getRealmDefaultOptionalClientScopes` - Get realm optional client scopes.
* `getRealmEvents` - Get events   Returns all events, or filters them based on URL query parameters listed here
* `getRealmEventsConfig` - Get the events provider configuration   Returns JSON object with events provider configuration
* `getRealmGroupByPathPath`
* `getRealmUsersManagementPermissions`
* `post` - Import a realm   Imports a realm from a full representation of that realm.
* `postRealmClearKeysCache` - Clear cache of external public keys (Public keys of clients or Identity providers)
* `postRealmClearRealmCache` - Clear realm cache
* `postRealmClearUserCache` - Clear user cache
* `postRealmClientDescriptionConverter` - Base path for importing clients under this realm.
* `postRealmLogoutAll` - Removes all user sessions.
* `postRealmPartialExport` - Partial export of existing realm into a JSON file.
* `postRealmPartialImport` - Partial import from a JSON file to an existing realm.
* `postRealmPushRevocation` - Push the realm’s revocation policy to any client that has an admin url associated with it.
* `postRealmTestLDAPConnection` - Test LDAP connection
* `postRealmTestSMTPConnection`
* `putRealm` - Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.
* `putRealmDefaultDefaultClientScopesClientScopeId`
* `putRealmDefaultGroupsGroupId`
* `putRealmDefaultOptionalClientScopesClientScopeId`
* `putRealmEventsConfig` - Update the events provider   Change the events provider and/or its configuration
* `putRealmUsersManagementPermissions`

### roleMapper

* `deleteRealmGroupsIdRoleMappingsRealm` - Delete realm-level role mappings
* `deleteRealmUsersIdRoleMappingsRealm` - Delete realm-level role mappings
* `getRealmGroupsIdRoleMappings` - Get role mappings
* `getRealmGroupsIdRoleMappingsRealm` - Get realm-level role mappings
* `getRealmGroupsIdRoleMappingsRealmAvailable` - Get realm-level roles that can be mapped
* `getRealmGroupsIdRoleMappingsRealmComposite` - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
* `getRealmUsersIdRoleMappings` - Get role mappings
* `getRealmUsersIdRoleMappingsRealm` - Get realm-level role mappings
* `getRealmUsersIdRoleMappingsRealmAvailable` - Get realm-level roles that can be mapped
* `getRealmUsersIdRoleMappingsRealmComposite` - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
* `postRealmGroupsIdRoleMappingsRealm` - Add realm-level role mappings to the user
* `postRealmUsersIdRoleMappingsRealm` - Add realm-level role mappings to the user

### roles

* `deleteRealmClientsIdRolesRoleName` - Delete a role by name
* `deleteRealmClientsIdRolesRoleNameComposites` - Remove roles from the role’s composite
* `deleteRealmRolesRoleName` - Delete a role by name
* `deleteRealmRolesRoleNameComposites` - Remove roles from the role’s composite
* `getRealmClientsIdRoles` - Get all roles for the realm or client
* `getRealmClientsIdRolesRoleName` - Get a role by name
* `getRealmClientsIdRolesRoleNameComposites` - Get composites of the role
* `getRealmClientsIdRolesRoleNameCompositesClientsClient` - An app-level roles for the specified app for the role’s composite
* `getRealmClientsIdRolesRoleNameCompositesRealm` - Get realm-level roles of the role’s composite
* `getRealmClientsIdRolesRoleNameGroups` - Return List of Groups that have the specified role name
* `getRealmClientsIdRolesRoleNameManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `getRealmClientsIdRolesRoleNameUsers` - Return List of Users that have the specified role name
* `getRealmRoles` - Get all roles for the realm or client
* `getRealmRolesRoleName` - Get a role by name
* `getRealmRolesRoleNameComposites` - Get composites of the role
* `getRealmRolesRoleNameCompositesClientsClient` - An app-level roles for the specified app for the role’s composite
* `getRealmRolesRoleNameCompositesRealm` - Get realm-level roles of the role’s composite
* `getRealmRolesRoleNameGroups` - Return List of Groups that have the specified role name
* `getRealmRolesRoleNameManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `getRealmRolesRoleNameUsers` - Return List of Users that have the specified role name
* `postRealmClientsIdRoles` - Create a new role for the realm or client
* `postRealmClientsIdRolesRoleNameComposites` - Add a composite to the role
* `postRealmRoles` - Create a new role for the realm or client
* `postRealmRolesRoleNameComposites` - Add a composite to the role
* `putRealmClientsIdRolesRoleName` - Update a role by name
* `putRealmClientsIdRolesRoleNameManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `putRealmRolesRoleName` - Update a role by name
* `putRealmRolesRoleNameManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference

### rolesByID

* `deleteRealmRolesByIdRoleId` - Delete the role
* `deleteRealmRolesByIdRoleIdComposites` - Remove a set of roles from the role’s composite
* `getRealmRolesByIdRoleId` - Get a specific role’s representation
* `getRealmRolesByIdRoleIdComposites` - Get role’s children   Returns a set of role’s children provided the role is a composite.
* `getRealmRolesByIdRoleIdCompositesClientsClient` - Get client-level roles for the client that are in the role’s composite
* `getRealmRolesByIdRoleIdCompositesRealm` - Get realm-level roles that are in the role’s composite
* `getRealmRolesByIdRoleIdManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `postRealmRolesByIdRoleIdComposites` - Make the role a composite role by associating some child roles
* `putRealmRolesByIdRoleId` - Update the role
* `putRealmRolesByIdRoleIdManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference

### root

* `get` - Get themes, social providers, auth providers, and event listeners available on this server

### scopeMappings

* `deleteRealmClientScopesIdScopeMappingsClientsClient` - Remove client-level roles from the client’s scope.
* `deleteRealmClientScopesIdScopeMappingsRealm` - Remove a set of realm-level roles from the client’s scope
* `deleteRealmClientsIdScopeMappingsClientsClient` - Remove client-level roles from the client’s scope.
* `deleteRealmClientsIdScopeMappingsRealm` - Remove a set of realm-level roles from the client’s scope
* `getRealmClientScopesIdScopeMappings` - Get all scope mappings for the client
* `getRealmClientScopesIdScopeMappingsClientsClient` - Get the roles associated with a client’s scope   Returns roles for the client.
* `getRealmClientScopesIdScopeMappingsClientsClientAvailable` - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
* `getRealmClientScopesIdScopeMappingsClientsClientComposite` - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
* `getRealmClientScopesIdScopeMappingsRealm` - Get realm-level roles associated with the client’s scope
* `getRealmClientScopesIdScopeMappingsRealmAvailable` - Get realm-level roles that are available to attach to this client’s scope
* `getRealmClientScopesIdScopeMappingsRealmComposite` - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
* `getRealmClientsIdScopeMappings` - Get all scope mappings for the client
* `getRealmClientsIdScopeMappingsClientsClient` - Get the roles associated with a client’s scope   Returns roles for the client.
* `getRealmClientsIdScopeMappingsClientsClientAvailable` - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
* `getRealmClientsIdScopeMappingsClientsClientComposite` - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
* `getRealmClientsIdScopeMappingsRealm` - Get realm-level roles associated with the client’s scope
* `getRealmClientsIdScopeMappingsRealmAvailable` - Get realm-level roles that are available to attach to this client’s scope
* `getRealmClientsIdScopeMappingsRealmComposite` - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
* `postRealmClientScopesIdScopeMappingsClientsClient` - Add client-level roles to the client’s scope
* `postRealmClientScopesIdScopeMappingsRealm` - Add a set of realm-level roles to the client’s scope
* `postRealmClientsIdScopeMappingsClientsClient` - Add client-level roles to the client’s scope
* `postRealmClientsIdScopeMappingsRealm` - Add a set of realm-level roles to the client’s scope

### userStorageProvider

* `getIdName` - Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328
* `getRealmUserStorageIdName` - Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328
* `postRealmUserStorageIdRemoveImportedUsers` - Remove imported users
* `postRealmUserStorageIdSync` - Trigger sync of users   Action can be "triggerFullSync" or "triggerChangedUsersSync"
* `postRealmUserStorageIdUnlinkUsers` - Unlink imported users from a storage provider
* `postRealmUserStorageParentIdMappersIdSync` - Trigger sync of mapper data related to ldap mapper (roles, groups, …​)   direction is "fedToKeycloak" or "keycloakToFed"

### users

* `deleteRealmUsersId` - Delete the user
* `deleteRealmUsersIdConsentsClient` - Revoke consent and offline tokens for particular client from user
* `deleteRealmUsersIdCredentialsCredentialId` - Remove a credential for a user
* `deleteRealmUsersIdFederatedIdentityProvider` - Remove a social login provider from user
* `deleteRealmUsersIdGroupsGroupId`
* `getRealmUsers` - Get users   Returns a list of users, filtered according to query parameters
* `getRealmUsersCount` - Returns the number of users that match the given criteria.
* `getRealmUsersId` - Get representation of the user
* `getRealmUsersIdConfiguredUserStorageCredentialTypes` - Return credential types, which are provided by the user storage where user is stored.
* `getRealmUsersIdConsents` - Get consents granted by the user
* `getRealmUsersIdCredentials`
* `getRealmUsersIdFederatedIdentity` - Get social logins associated with the user
* `getRealmUsersIdGroups`
* `getRealmUsersIdGroupsCount`
* `getRealmUsersIdOfflineSessionsClientId` - Get offline sessions associated with the user and client
* `getRealmUsersIdSessions` - Get sessions associated with the user
* `postRealmUsers` - Create a new user   Username must be unique.
* `postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId` - Move a credential to a position behind another credential
* `postRealmUsersIdCredentialsCredentialIdMoveToFirst` - Move a credential to a first position in the credentials list of the user
* `postRealmUsersIdFederatedIdentityProvider` - Add a social login provider to the user
* `postRealmUsersIdImpersonation` - Impersonate the user
* `postRealmUsersIdLogout` - Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.
* `putRealmUsersId` - Update the user
* `putRealmUsersIdCredentialsCredentialIdUserLabel` - Update a credential label for a user
* `putRealmUsersIdDisableCredentialTypes` - Disable all credentials for a user of a specific type
* `putRealmUsersIdExecuteActionsEmail` - Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.
* `putRealmUsersIdGroupsGroupId`
* `putRealmUsersIdResetPassword` - Set up a new password for the user.
* `putRealmUsersIdSendVerifyEmail` - Send an email-verification email to the user   An email contains a link the user can click to verify their email address.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
