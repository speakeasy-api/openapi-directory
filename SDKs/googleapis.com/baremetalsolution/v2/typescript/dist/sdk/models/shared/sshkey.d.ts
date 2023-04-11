import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An SSH key, used for authorizing with the interactive serial console feature.
 */
export declare class SSHKey extends SpeakeasyBase {
    /**
     * Output only. The name of this SSH key. Currently, the only valid value for the location is "global".
     */
    name?: string;
    /**
     * The public SSH key. This must be in OpenSSH .authorized_keys format.
     */
    publicKey?: string;
}
/**
 * An SSH key, used for authorizing with the interactive serial console feature.
 */
export declare class SSHKeyInput extends SpeakeasyBase {
    /**
     * The public SSH key. This must be in OpenSSH .authorized_keys format.
     */
    publicKey?: string;
}
