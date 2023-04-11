import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    service?: shared.Service;
    /**
     * The service id
     */
    serviceId: string;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    service?: shared.Service;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
