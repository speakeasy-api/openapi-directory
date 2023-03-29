# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/keycloak.local/1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AccessToken: shared.SchemeAccessToken{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        }),
    )

    req := operations.DeleteRealmAttackDetectionBruteForceUsersRequest{
        PathParams: operations.DeleteRealmAttackDetectionBruteForceUsersPathParams{
            Realm: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.AttackDetection.DeleteRealmAttackDetectionBruteForceUsers(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### AttackDetection

* `DeleteRealmAttackDetectionBruteForceUsers` - Clear any user login failures for all users   This can release temporary disabled users
* `DeleteRealmAttackDetectionBruteForceUsersUserID` - Clear any user login failures for the user   This can release temporary disabled user
* `GetRealmAttackDetectionBruteForceUsersUserID` - Get status of a username in brute force detection

### AuthenticationManagement

* `DeleteRealmAuthenticationConfigID` - Delete authenticator configuration
* `DeleteRealmAuthenticationExecutionsExecutionID` - Delete execution
* `DeleteRealmAuthenticationFlowsID` - Delete an authentication flow
* `DeleteRealmAuthenticationRequiredActionsAlias` - Delete required action
* `GetRealmAuthenticationAuthenticatorProviders` - Get authenticator providers   Returns a list of authenticator providers.
* `GetRealmAuthenticationClientAuthenticatorProviders` - Get client authenticator providers   Returns a list of client authenticator providers.
* `GetRealmAuthenticationConfigDescriptionProviderID` - Get authenticator provider’s configuration description
* `GetRealmAuthenticationConfigID` - Get authenticator configuration
* `GetRealmAuthenticationExecutionsExecutionID` - Get Single Execution
* `GetRealmAuthenticationFlows` - Get authentication flows   Returns a list of authentication flows.
* `GetRealmAuthenticationFlowsFlowAliasExecutions` - Get authentication executions for a flow
* `GetRealmAuthenticationFlowsID` - Get authentication flow for id
* `GetRealmAuthenticationFormActionProviders` - Get form action providers   Returns a list of form action providers.
* `GetRealmAuthenticationFormProviders` - Get form providers   Returns a list of form providers.
* `GetRealmAuthenticationPerClientConfigDescription` - Get configuration descriptions for all clients
* `GetRealmAuthenticationRequiredActions` - Get required actions   Returns a list of required actions.
* `GetRealmAuthenticationRequiredActionsAlias` - Get required action for alias
* `GetRealmAuthenticationUnregisteredRequiredActions` - Get unregistered required actions   Returns a list of unregistered required actions.
* `PostRealmAuthenticationExecutions` - Add new authentication execution
* `PostRealmAuthenticationExecutionsExecutionIDConfig` - Update execution with new configuration
* `PostRealmAuthenticationExecutionsExecutionIDLowerPriority` - Lower execution’s priority
* `PostRealmAuthenticationExecutionsExecutionIDRaisePriority` - Raise execution’s priority
* `PostRealmAuthenticationFlows` - Create a new authentication flow
* `PostRealmAuthenticationFlowsFlowAliasCopy` - Copy existing authentication flow under a new name   The new name is given as 'newName' attribute of the passed JSON object
* `PostRealmAuthenticationFlowsFlowAliasExecutionsExecution` - Add new authentication execution to a flow
* `PostRealmAuthenticationFlowsFlowAliasExecutionsFlow` - Add new flow with new execution to existing flow
* `PostRealmAuthenticationRegisterRequiredAction` - Register a new required actions
* `PostRealmAuthenticationRequiredActionsAliasLowerPriority` - Lower required action’s priority
* `PostRealmAuthenticationRequiredActionsAliasRaisePriority` - Raise required action’s priority
* `PutRealmAuthenticationConfigID` - Update authenticator configuration
* `PutRealmAuthenticationFlowsFlowAliasExecutions` - Update authentication executions of a flow
* `PutRealmAuthenticationFlowsID` - Update an authentication flow
* `PutRealmAuthenticationRequiredActionsAlias` - Update required action

### ClientAttributeCertificate

* `GetRealmClientsIDCertificatesAttr` - Get key info
* `PostRealmClientsIDCertificatesAttrDownload` - Get a keystore file for the client, containing private key and public certificate
* `PostRealmClientsIDCertificatesAttrGenerate` - Generate a new certificate with new key pair
* `PostRealmClientsIDCertificatesAttrGenerateAndDownload` - Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
* `PostRealmClientsIDCertificatesAttrUpload` - Upload certificate and eventually private key
* `PostRealmClientsIDCertificatesAttrUploadCertificate` - Upload only certificate, not private key

### ClientInitialAccess

* `DeleteRealmClientsInitialAccessID`
* `GetRealmClientsInitialAccess`
* `PostRealmClientsInitialAccess` - Create a new initial access token.

### ClientRegistrationPolicy

* `GetRealmClientRegistrationPolicyProviders` - Base path for retrieve providers with the configProperties properly filled

### ClientRoleMappings

* `DeleteRealmGroupsIDRoleMappingsClientsClient` - Delete client-level roles from user role mapping
* `DeleteRealmUsersIDRoleMappingsClientsClient` - Delete client-level roles from user role mapping
* `GetRealmGroupsIDRoleMappingsClientsClient` - Get client-level role mappings for the user, and the app
* `GetRealmGroupsIDRoleMappingsClientsClientAvailable` - Get available client-level roles that can be mapped to the user
* `GetRealmGroupsIDRoleMappingsClientsClientComposite` - Get effective client-level role mappings   This recurses any composite roles
* `GetRealmUsersIDRoleMappingsClientsClient` - Get client-level role mappings for the user, and the app
* `GetRealmUsersIDRoleMappingsClientsClientAvailable` - Get available client-level roles that can be mapped to the user
* `GetRealmUsersIDRoleMappingsClientsClientComposite` - Get effective client-level role mappings   This recurses any composite roles
* `PostRealmGroupsIDRoleMappingsClientsClient` - Add client-level roles to the user role mapping
* `PostRealmUsersIDRoleMappingsClientsClient` - Add client-level roles to the user role mapping

### ClientScopes

* `DeleteRealmClientScopesID` - Delete the client scope
* `GetRealmClientScopes` - Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
* `GetRealmClientScopesID` - Get representation of the client scope
* `PostRealmClientScopes` - Create a new client scope   Client Scope’s name must be unique!
* `PutRealmClientScopesID` - Update the client scope

### Clients

* `DeleteRealmClientsID` - Delete the client
* `DeleteRealmClientsIDDefaultClientScopesClientScopeID`
* `DeleteRealmClientsIDNodesNode` - Unregister a cluster node from the client
* `DeleteRealmClientsIDOptionalClientScopesClientScopeID`
* `GetRealmClients` - Get clients belonging to the realm   Returns a list of clients belonging to the realm
* `GetRealmClientsID` - Get representation of the client
* `GetRealmClientsIDClientSecret` - Get the client secret
* `GetRealmClientsIDDefaultClientScopes` - Get default client scopes.
* `GetRealmClientsIDEvaluateScopesGenerateExampleAccessToken` - Create JSON with payload of example access token
* `GetRealmClientsIDEvaluateScopesProtocolMappers` - Return list of all protocol mappers, which will be used when generating tokens issued for particular client.
* `GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGranted` - Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.
* `GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGranted` - Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.
* `GetRealmClientsIDInstallationProvidersProviderID`
* `GetRealmClientsIDManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `GetRealmClientsIDOfflineSessionCount` - Get application offline session count   Returns a number of offline user sessions associated with this client   {      "count": number  }
* `GetRealmClientsIDOfflineSessions` - Get offline sessions for client   Returns a list of offline user sessions associated with this client
* `GetRealmClientsIDOptionalClientScopes` - Get optional client scopes.
* `GetRealmClientsIDServiceAccountUser` - Get a user dedicated to the service account
* `GetRealmClientsIDSessionCount` - Get application session count   Returns a number of user sessions associated with this client   {      "count": number  }
* `GetRealmClientsIDTestNodesAvailable` - Test if registered cluster nodes are available   Tests availability by sending 'ping' request to all cluster nodes.
* `GetRealmClientsIDUserSessions` - Get user sessions for client   Returns a list of user sessions associated with this client
* `PostRealmClients` - Create a new client   Client’s client_id must be unique!
* `PostRealmClientsIDClientSecret` - Generate a new secret for the client
* `PostRealmClientsIDNodes` - Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak
* `PostRealmClientsIDPushRevocation` - Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.
* `PostRealmClientsIDRegistrationAccessToken` - Generate a new registration access token for the client
* `PutRealmClientsID` - Update the client
* `PutRealmClientsIDDefaultClientScopesClientScopeID`
* `PutRealmClientsIDManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `PutRealmClientsIDOptionalClientScopesClientScopeID`

### Component

* `DeleteRealmComponentsID`
* `GetRealmComponents`
* `GetRealmComponentsID`
* `GetRealmComponentsIDSubComponentTypes` - List of subcomponent types that are available to configure for a particular parent component.
* `PostRealmComponents`
* `PutRealmComponentsID`

### Groups

* `DeleteRealmGroupsID`
* `GetRealmGroups` - Get group hierarchy.
* `GetRealmGroupsCount` - Returns the groups counts.
* `GetRealmGroupsID`
* `GetRealmGroupsIDManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `GetRealmGroupsIDMembers` - Get users   Returns a list of users, filtered according to query parameters
* `PostRealmGroups` - create or add a top level realm groupSet or create child.
* `PostRealmGroupsIDChildren` - Set or create child.
* `PutRealmGroupsID` - Update group, ignores subgroups.
* `PutRealmGroupsIDManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference

### IdentityProviders

* `DeleteRealmIdentityProviderInstancesAlias` - Delete the identity provider
* `DeleteRealmIdentityProviderInstancesAliasMappersID` - Delete a mapper for the identity provider
* `GetRealmIdentityProviderInstances` - Get identity providers
* `GetRealmIdentityProviderInstancesAlias` - Get the identity provider
* `GetRealmIdentityProviderInstancesAliasExport` - Export public broker configuration for identity provider
* `GetRealmIdentityProviderInstancesAliasManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `GetRealmIdentityProviderInstancesAliasMapperTypes` - Get mapper types for identity provider
* `GetRealmIdentityProviderInstancesAliasMappers` - Get mappers for identity provider
* `GetRealmIdentityProviderInstancesAliasMappersID` - Get mapper by id for the identity provider
* `GetRealmIdentityProviderProvidersProviderID` - Get identity providers
* `PostRealmIdentityProviderImportConfig` - Import identity provider from uploaded JSON file
* `PostRealmIdentityProviderInstances` - Create a new identity provider
* `PostRealmIdentityProviderInstancesAliasMappers` - Add a mapper to identity provider
* `PutRealmIdentityProviderInstancesAlias` - Update the identity provider
* `PutRealmIdentityProviderInstancesAliasManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `PutRealmIdentityProviderInstancesAliasMappersID` - Update a mapper for the identity provider

### Key

* `GetRealmKeys`

### ProtocolMappers

* `DeleteRealmClientScopesId1ProtocolMappersModelsId2` - Delete the mapper
* `DeleteRealmClientsId1ProtocolMappersModelsId2` - Delete the mapper
* `GetRealmClientScopesId1ProtocolMappersModelsId2` - Get mapper by id
* `GetRealmClientScopesIDProtocolMappersModels` - Get mappers
* `GetRealmClientScopesIDProtocolMappersProtocolProtocol` - Get mappers by name for a specific protocol
* `GetRealmClientsId1ProtocolMappersModelsId2` - Get mapper by id
* `GetRealmClientsIDProtocolMappersModels` - Get mappers
* `GetRealmClientsIDProtocolMappersProtocolProtocol` - Get mappers by name for a specific protocol
* `PostRealmClientScopesIDProtocolMappersAddModels` - Create multiple mappers
* `PostRealmClientScopesIDProtocolMappersModels` - Create a mapper
* `PostRealmClientsIDProtocolMappersAddModels` - Create multiple mappers
* `PostRealmClientsIDProtocolMappersModels` - Create a mapper
* `PutRealmClientScopesId1ProtocolMappersModelsId2` - Update the mapper
* `PutRealmClientsId1ProtocolMappersModelsId2` - Update the mapper

### RealmsAdmin

* `DeleteRealm` - Delete the realm
* `DeleteRealmAdminEvents` - Delete all admin events
* `DeleteRealmDefaultDefaultClientScopesClientScopeID`
* `DeleteRealmDefaultGroupsGroupID`
* `DeleteRealmDefaultOptionalClientScopesClientScopeID`
* `DeleteRealmEvents` - Delete all events
* `DeleteRealmSessionsSession` - Remove a specific user session.
* `GetRealm` - Get the top-level representation of the realm   It will not include nested information like User and Client representations.
* `GetRealmAdminEvents` - Get admin events   Returns all admin events, or filters events based on URL query parameters listed here
* `GetRealmClientSessionStats` - Get client session stats   Returns a JSON map.
* `GetRealmCredentialRegistrators`
* `GetRealmDefaultDefaultClientScopes` - Get realm default client scopes.
* `GetRealmDefaultGroups` - Get group hierarchy.
* `GetRealmDefaultOptionalClientScopes` - Get realm optional client scopes.
* `GetRealmEvents` - Get events   Returns all events, or filters them based on URL query parameters listed here
* `GetRealmEventsConfig` - Get the events provider configuration   Returns JSON object with events provider configuration
* `GetRealmGroupByPathPath`
* `GetRealmUsersManagementPermissions`
* `Post` - Import a realm   Imports a realm from a full representation of that realm.
* `PostRealmClearKeysCache` - Clear cache of external public keys (Public keys of clients or Identity providers)
* `PostRealmClearRealmCache` - Clear realm cache
* `PostRealmClearUserCache` - Clear user cache
* `PostRealmClientDescriptionConverter` - Base path for importing clients under this realm.
* `PostRealmLogoutAll` - Removes all user sessions.
* `PostRealmPartialExport` - Partial export of existing realm into a JSON file.
* `PostRealmPartialImport` - Partial import from a JSON file to an existing realm.
* `PostRealmPushRevocation` - Push the realm’s revocation policy to any client that has an admin url associated with it.
* `PostRealmTestLDAPConnection` - Test LDAP connection
* `PostRealmTestSMTPConnection`
* `PutRealm` - Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.
* `PutRealmDefaultDefaultClientScopesClientScopeID`
* `PutRealmDefaultGroupsGroupID`
* `PutRealmDefaultOptionalClientScopesClientScopeID`
* `PutRealmEventsConfig` - Update the events provider   Change the events provider and/or its configuration
* `PutRealmUsersManagementPermissions`

### RoleMapper

* `DeleteRealmGroupsIDRoleMappingsRealm` - Delete realm-level role mappings
* `DeleteRealmUsersIDRoleMappingsRealm` - Delete realm-level role mappings
* `GetRealmGroupsIDRoleMappings` - Get role mappings
* `GetRealmGroupsIDRoleMappingsRealm` - Get realm-level role mappings
* `GetRealmGroupsIDRoleMappingsRealmAvailable` - Get realm-level roles that can be mapped
* `GetRealmGroupsIDRoleMappingsRealmComposite` - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
* `GetRealmUsersIDRoleMappings` - Get role mappings
* `GetRealmUsersIDRoleMappingsRealm` - Get realm-level role mappings
* `GetRealmUsersIDRoleMappingsRealmAvailable` - Get realm-level roles that can be mapped
* `GetRealmUsersIDRoleMappingsRealmComposite` - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
* `PostRealmGroupsIDRoleMappingsRealm` - Add realm-level role mappings to the user
* `PostRealmUsersIDRoleMappingsRealm` - Add realm-level role mappings to the user

### Roles

* `DeleteRealmClientsIDRolesRoleName` - Delete a role by name
* `DeleteRealmClientsIDRolesRoleNameComposites` - Remove roles from the role’s composite
* `DeleteRealmRolesRoleName` - Delete a role by name
* `DeleteRealmRolesRoleNameComposites` - Remove roles from the role’s composite
* `GetRealmClientsIDRoles` - Get all roles for the realm or client
* `GetRealmClientsIDRolesRoleName` - Get a role by name
* `GetRealmClientsIDRolesRoleNameComposites` - Get composites of the role
* `GetRealmClientsIDRolesRoleNameCompositesClientsClient` - An app-level roles for the specified app for the role’s composite
* `GetRealmClientsIDRolesRoleNameCompositesRealm` - Get realm-level roles of the role’s composite
* `GetRealmClientsIDRolesRoleNameGroups` - Return List of Groups that have the specified role name
* `GetRealmClientsIDRolesRoleNameManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `GetRealmClientsIDRolesRoleNameUsers` - Return List of Users that have the specified role name
* `GetRealmRoles` - Get all roles for the realm or client
* `GetRealmRolesRoleName` - Get a role by name
* `GetRealmRolesRoleNameComposites` - Get composites of the role
* `GetRealmRolesRoleNameCompositesClientsClient` - An app-level roles for the specified app for the role’s composite
* `GetRealmRolesRoleNameCompositesRealm` - Get realm-level roles of the role’s composite
* `GetRealmRolesRoleNameGroups` - Return List of Groups that have the specified role name
* `GetRealmRolesRoleNameManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `GetRealmRolesRoleNameUsers` - Return List of Users that have the specified role name
* `PostRealmClientsIDRoles` - Create a new role for the realm or client
* `PostRealmClientsIDRolesRoleNameComposites` - Add a composite to the role
* `PostRealmRoles` - Create a new role for the realm or client
* `PostRealmRolesRoleNameComposites` - Add a composite to the role
* `PutRealmClientsIDRolesRoleName` - Update a role by name
* `PutRealmClientsIDRolesRoleNameManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `PutRealmRolesRoleName` - Update a role by name
* `PutRealmRolesRoleNameManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference

### RolesByID

* `DeleteRealmRolesByIDRoleID` - Delete the role
* `DeleteRealmRolesByIDRoleIDComposites` - Remove a set of roles from the role’s composite
* `GetRealmRolesByIDRoleID` - Get a specific role’s representation
* `GetRealmRolesByIDRoleIDComposites` - Get role’s children   Returns a set of role’s children provided the role is a composite.
* `GetRealmRolesByIDRoleIDCompositesClientsClient` - Get client-level roles for the client that are in the role’s composite
* `GetRealmRolesByIDRoleIDCompositesRealm` - Get realm-level roles that are in the role’s composite
* `GetRealmRolesByIDRoleIDManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `PostRealmRolesByIDRoleIDComposites` - Make the role a composite role by associating some child roles
* `PutRealmRolesByIDRoleID` - Update the role
* `PutRealmRolesByIDRoleIDManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference

### Root

* `Get` - Get themes, social providers, auth providers, and event listeners available on this server

### ScopeMappings

* `DeleteRealmClientScopesIDScopeMappingsClientsClient` - Remove client-level roles from the client’s scope.
* `DeleteRealmClientScopesIDScopeMappingsRealm` - Remove a set of realm-level roles from the client’s scope
* `DeleteRealmClientsIDScopeMappingsClientsClient` - Remove client-level roles from the client’s scope.
* `DeleteRealmClientsIDScopeMappingsRealm` - Remove a set of realm-level roles from the client’s scope
* `GetRealmClientScopesIDScopeMappings` - Get all scope mappings for the client
* `GetRealmClientScopesIDScopeMappingsClientsClient` - Get the roles associated with a client’s scope   Returns roles for the client.
* `GetRealmClientScopesIDScopeMappingsClientsClientAvailable` - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
* `GetRealmClientScopesIDScopeMappingsClientsClientComposite` - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
* `GetRealmClientScopesIDScopeMappingsRealm` - Get realm-level roles associated with the client’s scope
* `GetRealmClientScopesIDScopeMappingsRealmAvailable` - Get realm-level roles that are available to attach to this client’s scope
* `GetRealmClientScopesIDScopeMappingsRealmComposite` - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
* `GetRealmClientsIDScopeMappings` - Get all scope mappings for the client
* `GetRealmClientsIDScopeMappingsClientsClient` - Get the roles associated with a client’s scope   Returns roles for the client.
* `GetRealmClientsIDScopeMappingsClientsClientAvailable` - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
* `GetRealmClientsIDScopeMappingsClientsClientComposite` - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
* `GetRealmClientsIDScopeMappingsRealm` - Get realm-level roles associated with the client’s scope
* `GetRealmClientsIDScopeMappingsRealmAvailable` - Get realm-level roles that are available to attach to this client’s scope
* `GetRealmClientsIDScopeMappingsRealmComposite` - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
* `PostRealmClientScopesIDScopeMappingsClientsClient` - Add client-level roles to the client’s scope
* `PostRealmClientScopesIDScopeMappingsRealm` - Add a set of realm-level roles to the client’s scope
* `PostRealmClientsIDScopeMappingsClientsClient` - Add client-level roles to the client’s scope
* `PostRealmClientsIDScopeMappingsRealm` - Add a set of realm-level roles to the client’s scope

### UserStorageProvider

* `GetIDName` - Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328
* `GetRealmUserStorageIDName` - Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328
* `PostRealmUserStorageIDRemoveImportedUsers` - Remove imported users
* `PostRealmUserStorageIDSync` - Trigger sync of users   Action can be "triggerFullSync" or "triggerChangedUsersSync"
* `PostRealmUserStorageIDUnlinkUsers` - Unlink imported users from a storage provider
* `PostRealmUserStorageParentIDMappersIDSync` - Trigger sync of mapper data related to ldap mapper (roles, groups, …​)   direction is "fedToKeycloak" or "keycloakToFed"

### Users

* `DeleteRealmUsersID` - Delete the user
* `DeleteRealmUsersIDConsentsClient` - Revoke consent and offline tokens for particular client from user
* `DeleteRealmUsersIDCredentialsCredentialID` - Remove a credential for a user
* `DeleteRealmUsersIDFederatedIdentityProvider` - Remove a social login provider from user
* `DeleteRealmUsersIDGroupsGroupID`
* `GetRealmUsers` - Get users   Returns a list of users, filtered according to query parameters
* `GetRealmUsersCount` - Returns the number of users that match the given criteria.
* `GetRealmUsersID` - Get representation of the user
* `GetRealmUsersIDConfiguredUserStorageCredentialTypes` - Return credential types, which are provided by the user storage where user is stored.
* `GetRealmUsersIDConsents` - Get consents granted by the user
* `GetRealmUsersIDCredentials`
* `GetRealmUsersIDFederatedIdentity` - Get social logins associated with the user
* `GetRealmUsersIDGroups`
* `GetRealmUsersIDGroupsCount`
* `GetRealmUsersIDOfflineSessionsClientID` - Get offline sessions associated with the user and client
* `GetRealmUsersIDSessions` - Get sessions associated with the user
* `PostRealmUsers` - Create a new user   Username must be unique.
* `PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialID` - Move a credential to a position behind another credential
* `PostRealmUsersIDCredentialsCredentialIDMoveToFirst` - Move a credential to a first position in the credentials list of the user
* `PostRealmUsersIDFederatedIdentityProvider` - Add a social login provider to the user
* `PostRealmUsersIDImpersonation` - Impersonate the user
* `PostRealmUsersIDLogout` - Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.
* `PutRealmUsersID` - Update the user
* `PutRealmUsersIDCredentialsCredentialIDUserLabel` - Update a credential label for a user
* `PutRealmUsersIDDisableCredentialTypes` - Disable all credentials for a user of a specific type
* `PutRealmUsersIDExecuteActionsEmail` - Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.
* `PutRealmUsersIDGroupsGroupID`
* `PutRealmUsersIDResetPassword` - Set up a new password for the user.
* `PutRealmUsersIDSendVerifyEmail` - Send an email-verification email to the user   An email contains a link the user can click to verify their email address.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
