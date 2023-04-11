import { SpeakeasyBase } from "../../../internal/utils";
/**
 * KeyUsage.KeyUsageOptions corresponds to the key usage values described in https://tools.ietf.org/html/rfc5280#section-4.2.1.3.
 */
export declare class KeyUsageOptions extends SpeakeasyBase {
    /**
     * The key may be used to sign certificates.
     */
    certSign?: boolean;
    /**
     * The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
     */
    contentCommitment?: boolean;
    /**
     * The key may be used sign certificate revocation lists.
     */
    crlSign?: boolean;
    /**
     * The key may be used to encipher data.
     */
    dataEncipherment?: boolean;
    /**
     * The key may be used to decipher only.
     */
    decipherOnly?: boolean;
    /**
     * The key may be used for digital signatures.
     */
    digitalSignature?: boolean;
    /**
     * The key may be used to encipher only.
     */
    encipherOnly?: boolean;
    /**
     * The key may be used in a key agreement protocol.
     */
    keyAgreement?: boolean;
    /**
     * The key may be used to encipher other keys.
     */
    keyEncipherment?: boolean;
}
