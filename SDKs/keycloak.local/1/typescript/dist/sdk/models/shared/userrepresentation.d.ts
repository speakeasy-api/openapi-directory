import { SpeakeasyBase } from "../../../internal/utils";
import { CredentialRepresentation } from "./credentialrepresentation";
import { FederatedIdentityRepresentation } from "./federatedidentityrepresentation";
import { UserConsentRepresentation } from "./userconsentrepresentation";
/**
 * success
 */
export declare class UserRepresentation extends SpeakeasyBase {
    access?: Record<string, any>;
    attributes?: Record<string, any>;
    clientConsents?: UserConsentRepresentation[];
    clientRoles?: Record<string, any>;
    createdTimestamp?: number;
    credentials?: CredentialRepresentation[];
    disableableCredentialTypes?: string[];
    email?: string;
    emailVerified?: boolean;
    enabled?: boolean;
    federatedIdentities?: FederatedIdentityRepresentation[];
    federationLink?: string;
    firstName?: string;
    groups?: string[];
    id?: string;
    lastName?: string;
    notBefore?: number;
    origin?: string;
    realmRoles?: string[];
    requiredActions?: string[];
    self?: string;
    serviceAccountClientId?: string;
    username?: string;
}
