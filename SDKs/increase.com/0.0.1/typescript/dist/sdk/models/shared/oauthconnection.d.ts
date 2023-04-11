import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the connection is active.
 */
export declare enum OauthConnectionStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * A constant representing the object's type. For this resource it will always be `oauth_connection`.
 */
export declare enum OauthConnectionTypeEnum {
    OauthConnection = "oauth_connection"
}
/**
 * When a user authorizes your OAuth application, an OAuth Connection object is created.
 */
export declare class OauthConnection extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp when the OAuth Connection was created.
     */
    createdAt: Date;
    /**
     * The identifier of the Group that has authorized your OAuth application.
     */
    groupId: string;
    /**
     * The OAuth Connection's identifier.
     */
    id: string;
    /**
     * Whether the connection is active.
     */
    status: OauthConnectionStatusEnum;
    /**
     * A constant representing the object's type. For this resource it will always be `oauth_connection`.
     */
    type: OauthConnectionTypeEnum;
}
