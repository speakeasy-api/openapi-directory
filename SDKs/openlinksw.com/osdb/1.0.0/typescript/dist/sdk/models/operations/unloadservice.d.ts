import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnloadServiceRequest extends SpeakeasyBase {
    /**
     * Service ID of the service to be unloaded
     */
    serviceId: string;
}
export declare enum UnloadService200ApplicationJSONStatusEnum {
    Success = "success"
}
/**
 * unloadService response
 */
export declare class UnloadService200ApplicationJSON extends SpeakeasyBase {
    /**
     * The path of the REST API method
     */
    api: string;
    /**
     * The name of the REST API method
     */
    method: string;
    /**
     * Confirmation message
     */
    response: string;
    status: UnloadService200ApplicationJSONStatusEnum;
}
export declare class UnloadServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * unloadService response
     */
    unloadService200ApplicationJSONObject?: UnloadService200ApplicationJSON;
}
