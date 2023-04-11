import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSshKeysIdRequest extends SpeakeasyBase {
    /**
     * ID of the SSH key
     */
    id: number;
}
export declare class GetSshKeysId200ApplicationJSONSshKey extends SpeakeasyBase {
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * Fingerprint of public key
     */
    fingerprint: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    /**
     * Public key
     */
    publicKey: string;
}
/**
 * The `ssh_key` key in the reply contains an SSH key object with this structure
 */
export declare class GetSshKeysId200ApplicationJSON extends SpeakeasyBase {
    sshKey: GetSshKeysId200ApplicationJSONSshKey;
}
export declare class GetSshKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `ssh_key` key in the reply contains an SSH key object with this structure
     */
    getSshKeysId200ApplicationJSONObject?: GetSshKeysId200ApplicationJSON;
}
