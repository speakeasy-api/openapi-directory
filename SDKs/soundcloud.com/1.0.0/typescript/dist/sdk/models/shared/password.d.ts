import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PasswordGrantTypeEnum {
    Password = "password"
}
export declare class Password extends SpeakeasyBase {
    /**
     * Client ID
     */
    clientId?: string;
    /**
     * Client secret
     */
    clientSecret?: string;
    grantType?: PasswordGrantTypeEnum;
    /**
     * User password
     */
    password?: string;
    /**
     * Redirect URI
     */
    redirectUri?: string;
    /**
     * User name
     */
    userName?: string;
}
