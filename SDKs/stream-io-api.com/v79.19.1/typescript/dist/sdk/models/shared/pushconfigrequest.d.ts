import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PushConfigRequestVersionEnum {
    V1 = "v1",
    V2 = "v2"
}
export declare class PushConfigRequest extends SpeakeasyBase {
    offlineOnly?: boolean;
    version?: PushConfigRequestVersionEnum;
}
