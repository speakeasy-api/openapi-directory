import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request for creating an IdpCredential with its associated payload. An InboundSamlSsoProfile can own up to 2 credentials.
 */
export declare class AddIdpCredentialRequest extends SpeakeasyBase {
    /**
     * PEM encoded x509 certificate containing the public key for verifying IdP signatures.
     */
    pemData?: string;
}
