import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServiceGroupServicesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ServiceGroupServicesRequest extends SpeakeasyBase {
    /**
     * The service group id
     */
    serviceGroupId: string;
}
export declare class ServiceGroupServicesResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    apiKeys?: shared.ApiKey[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
