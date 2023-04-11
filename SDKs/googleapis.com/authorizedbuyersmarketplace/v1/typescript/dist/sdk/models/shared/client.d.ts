import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The role assigned to the client. Each role implies a set of permissions granted to the client.
 */
export declare enum ClientRoleEnum {
    ClientRoleUnspecified = "CLIENT_ROLE_UNSPECIFIED",
    ClientDealViewer = "CLIENT_DEAL_VIEWER",
    ClientDealNegotiator = "CLIENT_DEAL_NEGOTIATOR",
    ClientDealApprover = "CLIENT_DEAL_APPROVER"
}
/**
 * Output only. The state of the client.
 */
export declare enum ClientStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
 */
export declare class Client extends SpeakeasyBase {
    /**
     * Required. Display name shown to publishers. Must be unique for clients without partnerClientId specified. Maximum length of 255 characters is allowed.
     */
    displayName?: string;
    /**
     * Output only. The resource name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}`
     */
    name?: string;
    /**
     * Arbitrary unique identifier provided by the buyer. This field can be used to associate a client with an identifier in the namespace of the buyer, lookup clients by that identifier and verify whether an Authorized Buyers account of the client already exists. If present, must be unique across all the clients.
     */
    partnerClientId?: string;
    /**
     * Required. The role assigned to the client. Each role implies a set of permissions granted to the client.
     */
    role?: ClientRoleEnum;
    /**
     * Whether the client will be visible to sellers.
     */
    sellerVisible?: boolean;
    /**
     * Output only. The state of the client.
     */
    state?: ClientStateEnum;
}
/**
 * A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
 */
export declare class ClientInput extends SpeakeasyBase {
    /**
     * Required. Display name shown to publishers. Must be unique for clients without partnerClientId specified. Maximum length of 255 characters is allowed.
     */
    displayName?: string;
    /**
     * Arbitrary unique identifier provided by the buyer. This field can be used to associate a client with an identifier in the namespace of the buyer, lookup clients by that identifier and verify whether an Authorized Buyers account of the client already exists. If present, must be unique across all the clients.
     */
    partnerClientId?: string;
    /**
     * Required. The role assigned to the client. Each role implies a set of permissions granted to the client.
     */
    role?: ClientRoleEnum;
    /**
     * Whether the client will be visible to sellers.
     */
    sellerVisible?: boolean;
}
