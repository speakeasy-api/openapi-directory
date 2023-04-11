import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListChecksSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ListChecksRequest extends SpeakeasyBase {
    /**
     * Report id checks to be returned
     */
    reportId?: string;
    /**
     * Start key value for the pagination
     */
    startKey?: string;
}
export declare class ListChecksResponse extends SpeakeasyBase {
    checksOutput?: shared.ChecksOutput;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
