import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveCurrentNeoStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    statistics?: shared.Statistics;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
