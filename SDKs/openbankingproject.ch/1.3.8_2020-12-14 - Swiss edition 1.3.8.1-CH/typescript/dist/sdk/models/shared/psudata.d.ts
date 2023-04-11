import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PSU Data for Update PSU authentication.
 */
export declare class PsuData extends SpeakeasyBase {
    /**
     * Additional encrypted password.
     */
    additionalEncryptedPassword?: string;
    /**
     * Additional password in plaintext.
     */
    additionalPassword?: string;
    /**
     * Encrypted password.
     */
    encryptedPassword?: string;
    /**
     * Password.
     */
    password?: string;
}
