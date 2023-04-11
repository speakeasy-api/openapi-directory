import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ServiceRequest extends SpeakeasyBase {
    /**
     * The service id
     */
    serviceId: string;
}
export declare class ServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    service?: shared.Service;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
