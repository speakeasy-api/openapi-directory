import { SpeakeasyBase } from "../../../internal/utils";
import { BasicAuth } from "./basicauth";
import { ChangedBy } from "./changedby";
import { Cookies } from "./cookies";
import { FormLogin } from "./formlogin";
import { Headers } from "./headers";
import { VerificationMethodEnum } from "./verificationmethodenum";
/**
 * Main resource associated with a target
 */
export declare class SiteInput extends SpeakeasyBase {
    /**
     * Basic authentication credentials
     */
    basicAuth?: BasicAuth;
    /**
     * Custom cookies name/value pairs
     */
    cookies?: Cookies[];
    /**
     * Custom description for the resource
     */
    desc?: string;
    /**
     * Form login field name, field input pairs
     */
    formLogin?: FormLogin[];
    /**
     * Pattern to check successful authentication (not used)
     */
    formLoginCheckPattern?: string;
    /**
     * URL for the form login
     */
    formLoginUrl?: string;
    /**
     * Use basic authentication in scan
     */
    hasBasicAuth?: boolean;
    /**
     * Does the resource use form login
     */
    hasFormLogin?: boolean;
    /**
     * Custom headers name value pairs
     */
    headers?: Headers[];
    /**
     * Custom name for the resource
     */
    name?: string;
    /**
     * Site URL, it should include the path if the site is not located at the root. This URL can only be set once.
     *
     * @remarks
     *
     */
    url?: string;
    whitelist?: string[];
}
/**
 * Main resource associated with a target
 */
export declare class Site extends SpeakeasyBase {
    /**
     * Basic authentication credentials
     */
    basicAuth?: BasicAuth;
    /**
     * Date time of the last change
     */
    changed?: Date;
    /**
     * User that last modified the object
     */
    changedBy?: ChangedBy;
    /**
     * Custom cookies name/value pairs
     */
    cookies?: Cookies[];
    /**
     * Custom description for the resource
     */
    desc?: string;
    /**
     * Form login field name, field input pairs
     */
    formLogin?: FormLogin[];
    /**
     * Pattern to check successful authentication (not used)
     */
    formLoginCheckPattern?: string;
    /**
     * URL for the form login
     */
    formLoginUrl?: string;
    /**
     * Use basic authentication in scan
     */
    hasBasicAuth?: boolean;
    /**
     * Does the resource use form login
     */
    hasFormLogin?: boolean;
    /**
     * Custom headers name value pairs
     */
    headers?: Headers[];
    /**
     * Site host
     */
    host?: string;
    /**
     * Object id.
     */
    id?: string;
    /**
     * Custom name for the resource
     */
    name?: string;
    /**
     * List of frameworks detected on this resource
     */
    stack?: string[];
    /**
     * Site URL, it should include the path if the site is not located at the root. This URL can only be set once.
     *
     * @remarks
     *
     */
    url?: string;
    /**
     * Verification date time
     */
    verificationDate?: Date;
    /**
     * Reason for last verification failure.
     */
    verificationLastError?: string;
    /**
     * Type of verification:
     *
     * @remarks
     * * dns - we look or a TXT record on the host you registered containing
     * `Probely=<verification_token>`
     * * file - on the root of the path you registered we look for a file
     * named `<verification token>` containing `Probely`.
     *
     */
    verificationMethod?: VerificationMethodEnum;
    /**
     * Token used to verify
     */
    verificationToken?: string;
    /**
     * Has resource ownership been verified
     */
    verified?: boolean;
    whitelist?: string[];
}
