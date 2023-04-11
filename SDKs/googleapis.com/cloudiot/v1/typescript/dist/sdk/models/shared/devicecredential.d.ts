import { SpeakeasyBase } from "../../../internal/utils";
import { PublicKeyCredential } from "./publickeycredential";
/**
 * A server-stored device credential used for authentication.
 */
export declare class DeviceCredential extends SpeakeasyBase {
    /**
     * [Optional] The time at which this credential becomes invalid. This credential will be ignored for new client authentication requests after this timestamp; however, it will not be automatically deleted.
     */
    expirationTime?: string;
    /**
     * A public key format and data.
     */
    publicKey?: PublicKeyCredential;
}
