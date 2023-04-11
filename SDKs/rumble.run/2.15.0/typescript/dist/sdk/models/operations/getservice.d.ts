import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetServiceSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetServiceRequest extends SpeakeasyBase {
    /**
     * UUID of the service to retrieve
     */
    serviceId: string;
}
export declare class GetServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * service details
     */
    service?: shared.Service;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
