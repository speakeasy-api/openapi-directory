import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApiUsageResponse extends SpeakeasyBase {
    /**
     * Print current API usage.
     */
    apiPeriodUsageOut?: shared.APIPeriodUsageOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
