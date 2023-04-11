import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBillingResponse extends SpeakeasyBase {
    /**
     * Billing information
     */
    billing?: shared.Billing;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
