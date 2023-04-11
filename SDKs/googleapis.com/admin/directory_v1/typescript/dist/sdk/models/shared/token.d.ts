import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for token resource in Directory API.
 */
export declare class Token extends SpeakeasyBase {
    /**
     * Whether the application is registered with Google. The value is `true` if the application has an anonymous Client ID.
     */
    anonymous?: boolean;
    /**
     * The Client ID of the application the token is issued to.
     */
    clientId?: string;
    /**
     * The displayable name of the application the token is issued to.
     */
    displayText?: string;
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The type of the API resource. This is always `admin#directory#token`.
     */
    kind?: string;
    /**
     * Whether the token is issued to an installed application. The value is `true` if the application is installed to a desktop or mobile device.
     */
    nativeApp?: boolean;
    /**
     * A list of authorization scopes the application is granted.
     */
    scopes?: string[];
    /**
     * The unique ID of the user that issued the token.
     */
    userKey?: string;
}
