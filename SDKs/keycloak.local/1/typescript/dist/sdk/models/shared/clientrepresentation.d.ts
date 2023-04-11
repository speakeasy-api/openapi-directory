import { SpeakeasyBase } from "../../../internal/utils";
import { ProtocolMapperRepresentation } from "./protocolmapperrepresentation";
import { ResourceServerRepresentation } from "./resourceserverrepresentation";
/**
 * success
 */
export declare class ClientRepresentation extends SpeakeasyBase {
    access?: Record<string, any>;
    adminUrl?: string;
    alwaysDisplayInConsole?: boolean;
    attributes?: Record<string, any>;
    authenticationFlowBindingOverrides?: Record<string, any>;
    authorizationServicesEnabled?: boolean;
    authorizationSettings?: ResourceServerRepresentation;
    baseUrl?: string;
    bearerOnly?: boolean;
    clientAuthenticatorType?: string;
    clientId?: string;
    consentRequired?: boolean;
    defaultClientScopes?: string[];
    defaultRoles?: string[];
    description?: string;
    directAccessGrantsEnabled?: boolean;
    enabled?: boolean;
    frontchannelLogout?: boolean;
    fullScopeAllowed?: boolean;
    id?: string;
    implicitFlowEnabled?: boolean;
    name?: string;
    nodeReRegistrationTimeout?: number;
    notBefore?: number;
    optionalClientScopes?: string[];
    origin?: string;
    protocol?: string;
    protocolMappers?: ProtocolMapperRepresentation[];
    publicClient?: boolean;
    redirectUris?: string[];
    registeredNodes?: Record<string, any>;
    registrationAccessToken?: string;
    rootUrl?: string;
    secret?: string;
    serviceAccountsEnabled?: boolean;
    standardFlowEnabled?: boolean;
    surrogateAuthRequired?: boolean;
    webOrigins?: string[];
}
