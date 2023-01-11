import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateApplication201ApplicationJsonKeys extends SpeakeasyBase {
    privateKey?: string;
    publicKey?: string;
}
/**
 * Application privacy config
**/
export declare class CreateApplication201ApplicationJsonPrivacy extends SpeakeasyBase {
    improveAi?: boolean;
}
export declare class CreateApplication201ApplicationJson extends SpeakeasyBase {
    capabilities?: shared.Capabilities;
    id?: string;
    keys?: CreateApplication201ApplicationJsonKeys;
    name?: string;
    privacy?: CreateApplication201ApplicationJsonPrivacy;
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    request: any;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createApplication201ApplicationJSONObject?: CreateApplication201ApplicationJson;
    createApplication400ApplicationJSONAny?: any;
    createApplication401ApplicationJSONAny?: any;
    createApplication405ApplicationJSONAny?: any;
    createApplication406ApplicationJSONAny?: any;
    createApplication415ApplicationJSONAny?: any;
}
