import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteServiceRequest extends SpeakeasyBase {
    /**
     * The service id
     */
    serviceId: string;
}
export declare class DeleteServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    deleted?: shared.Deleted;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
