import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetServicesSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetServicesRequest extends SpeakeasyBase {
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class GetServicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * array of services
     */
    services?: shared.Service[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
