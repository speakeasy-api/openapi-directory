import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the digital signature of the resource.
 */
export declare class SignatureInfo extends SpeakeasyBase {
    /**
     * The resource name of the customer CryptoKeyVersion used for signing.
     */
    customerKmsKeyVersion?: string;
    /**
     * The public key for the Google default signing, encoded in PEM format. The signature was created using a private key which may be verified using this public key.
     */
    googlePublicKeyPem?: string;
    /**
     * The digital signature.
     */
    signature?: string;
}
