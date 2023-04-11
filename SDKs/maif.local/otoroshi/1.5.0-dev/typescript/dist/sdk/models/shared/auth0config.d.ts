import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for Auth0 domain
 */
export declare class Auth0Config extends SpeakeasyBase {
    /**
     * Auth0 callback URL
     */
    callbackUrl: string;
    /**
     * Auth0 client id
     */
    clientId: string;
    /**
     * Auth0 client secret
     */
    clientSecret: string;
    /**
     * Auth0 domain
     */
    domain: string;
}
