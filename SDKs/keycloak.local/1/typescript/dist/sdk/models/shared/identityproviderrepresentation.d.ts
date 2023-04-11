import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON body
 */
export declare class IdentityProviderRepresentation extends SpeakeasyBase {
    addReadTokenRoleOnCreate?: boolean;
    alias?: string;
    config?: Record<string, any>;
    displayName?: string;
    enabled?: boolean;
    firstBrokerLoginFlowAlias?: string;
    internalId?: string;
    linkOnly?: boolean;
    postBrokerLoginFlowAlias?: string;
    providerId?: string;
    storeToken?: boolean;
    trustEmail?: boolean;
}
