import { SpeakeasyBase } from "../../../internal/utils";
import { PublicKeyCertificate } from "./publickeycertificate";
/**
 * A server-stored registry credential used to validate device credentials.
 */
export declare class RegistryCredential extends SpeakeasyBase {
    /**
     * A public key certificate format and data.
     */
    publicKeyCertificate?: PublicKeyCertificate;
}
