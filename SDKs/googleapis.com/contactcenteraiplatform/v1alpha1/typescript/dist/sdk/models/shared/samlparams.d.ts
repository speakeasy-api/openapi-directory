import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message storing SAML params to enable Google as IDP.
 */
export declare class SAMLParams extends SpeakeasyBase {
    /**
     * SAML certificate
     */
    certificate?: string;
    /**
     * Entity id URL
     */
    entityId?: string;
    /**
     * Single sign-on URL
     */
    ssoUri?: string;
    /**
     * Email address of the first admin users.
     */
    userEmail?: string;
}
