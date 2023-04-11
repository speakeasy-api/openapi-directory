import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCustomerSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateCustomerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCustomerResponse?: shared.CreateCustomerResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
