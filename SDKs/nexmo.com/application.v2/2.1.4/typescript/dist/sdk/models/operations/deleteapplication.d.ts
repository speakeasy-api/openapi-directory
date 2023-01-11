import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteApplicationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteApplicationRequest extends SpeakeasyBase {
    pathParams: DeleteApplicationPathParams;
}
export declare class DeleteApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteApplication401ApplicationJSONAny?: any;
    deleteApplication404ApplicationJSONAny?: any;
    deleteApplication405ApplicationJSONAny?: any;
    deleteApplication406ApplicationJSONAny?: any;
}
