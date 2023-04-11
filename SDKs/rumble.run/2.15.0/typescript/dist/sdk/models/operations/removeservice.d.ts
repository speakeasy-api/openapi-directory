import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveServiceSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class RemoveServiceRequest extends SpeakeasyBase {
    /**
     * UUID of the service to remove
     */
    serviceId: string;
}
export declare class RemoveServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
