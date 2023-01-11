import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostSshKeysRequestBody extends SpeakeasyBase {
    labels?: Record<string, any>;
    name: string;
    publicKey: string;
}
export declare class PostSshKeys201ApplicationJsonSshKey extends SpeakeasyBase {
    created: string;
    fingerprint: string;
    id: number;
    labels: Record<string, string>;
    name: string;
    publicKey: string;
}
export declare class PostSshKeys201ApplicationJson extends SpeakeasyBase {
    sshKey: PostSshKeys201ApplicationJsonSshKey;
}
export declare class PostSshKeysRequest extends SpeakeasyBase {
    request?: PostSshKeysRequestBody;
}
export declare class PostSshKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postSshKeys201ApplicationJSONObject?: PostSshKeys201ApplicationJson;
}
