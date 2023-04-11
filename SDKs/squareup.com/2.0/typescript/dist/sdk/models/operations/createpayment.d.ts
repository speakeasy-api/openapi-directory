import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePaymentSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreatePaymentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPaymentResponse?: shared.CreatePaymentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
