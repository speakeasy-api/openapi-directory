import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSshKeysRequestBody extends SpeakeasyBase {
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    /**
     * Name of the SSH key
     */
    name: string;
    /**
     * Public key
     */
    publicKey: string;
}
export declare class PostSshKeys201ApplicationJSONSshKey extends SpeakeasyBase {
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
 * The `ssh_key` key in the reply contains the object that was just created
 */
export declare class PostSshKeys201ApplicationJSON extends SpeakeasyBase {
    sshKey: PostSshKeys201ApplicationJSONSshKey;
}
export declare class PostSshKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `ssh_key` key in the reply contains the object that was just created
     */
    postSshKeys201ApplicationJSONObject?: PostSshKeys201ApplicationJSON;
}
