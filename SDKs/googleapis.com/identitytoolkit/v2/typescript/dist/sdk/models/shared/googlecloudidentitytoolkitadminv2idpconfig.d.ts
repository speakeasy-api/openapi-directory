import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2IdpCertificate } from "./googlecloudidentitytoolkitadminv2idpcertificate";
/**
 * The SAML IdP (Identity Provider) configuration when the project acts as the relying party.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2IdpConfig extends SpeakeasyBase {
    /**
     * IDP's public keys for verifying signature in the assertions.
     */
    idpCertificates?: GoogleCloudIdentitytoolkitAdminV2IdpCertificate[];
    /**
     * Unique identifier for all SAML entities.
     */
    idpEntityId?: string;
    /**
     * Indicates if outbounding SAMLRequest should be signed.
     */
    signRequest?: boolean;
    /**
     * URL to send Authentication request to.
     */
    ssoUrl?: string;
}
