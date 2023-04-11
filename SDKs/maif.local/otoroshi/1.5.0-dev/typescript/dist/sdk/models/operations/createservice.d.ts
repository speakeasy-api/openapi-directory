import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    service?: shared.Service;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
