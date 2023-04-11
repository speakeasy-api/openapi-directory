import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Service to register with OSDB
 */
export declare class LoadServiceRequestBody extends SpeakeasyBase {
    /**
     * The URL of the resource containing the service description to load.
     */
    serviceDescriptionUrl: string;
    /**
     * Service ID to be used to uniquely identify the service. (Optional: Required for anonymous services or to override the service name in the service description.)
     */
    serviceMoniker?: string;
}
export declare enum LoadService200ApplicationJSONStatusEnum {
    Success = "success"
}
/**
 * loadService response
 */
export declare class LoadService200ApplicationJSON extends SpeakeasyBase {
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
    status: LoadService200ApplicationJSONStatusEnum;
}
export declare class LoadServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * loadService response
     */
    loadService200ApplicationJSONObject?: LoadService200ApplicationJSON;
}
