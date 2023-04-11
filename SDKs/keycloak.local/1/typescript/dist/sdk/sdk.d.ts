import { AttackDetection } from "./attackdetection";
import { AuthenticationManagement } from "./authenticationmanagement";
import { ClientAttributeCertificate } from "./clientattributecertificate";
import { ClientInitialAccess } from "./clientinitialaccess";
import { ClientRegistrationPolicy } from "./clientregistrationpolicy";
import { ClientRoleMappings } from "./clientrolemappings";
import { Clients } from "./clients";
import { ClientScopes } from "./clientscopes";
import { Component } from "./component";
import { Groups } from "./groups";
import { IdentityProviders } from "./identityproviders";
import { Key } from "./key";
import * as shared from "./models/shared";
import { ProtocolMappers } from "./protocolmappers";
import { RealmsAdmin } from "./realmsadmin";
import { RoleMapper } from "./rolemapper";
import { Roles } from "./roles";
import { RolesByID } from "./rolesbyid";
import { Root } from "./root";
import { ScopeMappings } from "./scopemappings";
import { Users } from "./users";
import { UserStorageProvider } from "./userstorageprovider";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://keycloak.local"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is a REST API reference for the Keycloak Admin
 *
 * @see {@link https://github.com/keycloak/keycloak/tree/6.0.1/core/src/main/java/org/keycloak/representations} - Schema source code
 */
export declare class SDK {
    attackDetection: AttackDetection;
    authenticationManagement: AuthenticationManagement;
    clientAttributeCertificate: ClientAttributeCertificate;
    clientInitialAccess: ClientInitialAccess;
    clientRegistrationPolicy: ClientRegistrationPolicy;
    clientRoleMappings: ClientRoleMappings;
    clientScopes: ClientScopes;
    clients: Clients;
    component: Component;
    groups: Groups;
    identityProviders: IdentityProviders;
    key: Key;
    protocolMappers: ProtocolMappers;
    realmsAdmin: RealmsAdmin;
    roleMapper: RoleMapper;
    roles: Roles;
    rolesByID: RolesByID;
    root: Root;
    scopeMappings: ScopeMappings;
    userStorageProvider: UserStorageProvider;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
