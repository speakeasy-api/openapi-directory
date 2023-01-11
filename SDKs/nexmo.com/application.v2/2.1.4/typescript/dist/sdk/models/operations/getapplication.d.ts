import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApplicationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetApplicationRequest extends SpeakeasyBase {
    pathParams: GetApplicationPathParams;
}
export declare class GetApplicationResponse extends SpeakeasyBase {
    applicationResponse?: any;
    contentType: string;
    statusCode: number;
    getApplication401ApplicationJSONAny?: any;
    getApplication404ApplicationJSONAny?: any;
    getApplication405ApplicationJSONAny?: any;
    getApplication406ApplicationJSONAny?: any;
}
