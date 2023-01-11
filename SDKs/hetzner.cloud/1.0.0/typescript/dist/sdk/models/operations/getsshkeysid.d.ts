import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSshKeysIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetSshKeysId200ApplicationJsonSshKey extends SpeakeasyBase {
    created: string;
    fingerprint: string;
    id: number;
    labels: Record<string, string>;
    name: string;
    publicKey: string;
}
export declare class GetSshKeysId200ApplicationJson extends SpeakeasyBase {
    sshKey: GetSshKeysId200ApplicationJsonSshKey;
}
export declare class GetSshKeysIdRequest extends SpeakeasyBase {
    pathParams: GetSshKeysIdPathParams;
}
export declare class GetSshKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSshKeysId200ApplicationJSONObject?: GetSshKeysId200ApplicationJson;
}
