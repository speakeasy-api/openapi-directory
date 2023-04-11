import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The public key used for setting Dependabot Secrets.
 */
export declare class DependabotPublicKey extends SpeakeasyBase {
    /**
     * The Base64 encoded public key.
     */
    key: string;
    /**
     * The identifier for the key.
     */
    keyId: string;
}
