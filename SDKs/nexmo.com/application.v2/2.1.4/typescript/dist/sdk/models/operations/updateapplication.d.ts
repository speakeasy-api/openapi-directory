import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateApplicationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateApplication200ApplicationJsonKeys extends SpeakeasyBase {
    privateKey?: string;
    publicKey?: string;
}
/**
 * Application privacy config
**/
export declare class UpdateApplication200ApplicationJsonPrivacy extends SpeakeasyBase {
    improveAi?: boolean;
}
export declare class UpdateApplication200ApplicationJson extends SpeakeasyBase {
    capabilities?: shared.Capabilities;
    id?: string;
    keys?: UpdateApplication200ApplicationJsonKeys;
    name?: string;
    privacy?: UpdateApplication200ApplicationJsonPrivacy;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    pathParams: UpdateApplicationPathParams;
    request: any;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateApplication200ApplicationJSONObject?: UpdateApplication200ApplicationJson;
    updateApplication400ApplicationJSONAny?: any;
    updateApplication401ApplicationJSONAny?: any;
    updateApplication404ApplicationJSONAny?: any;
    updateApplication405ApplicationJSONAny?: any;
    updateApplication406ApplicationJSONAny?: any;
    updateApplication415ApplicationJSONAny?: any;
}
