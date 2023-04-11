import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CalculateMatrixResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected Error
     */
    ghError?: shared.GHError;
    headers?: Record<string, string[]>;
    /**
     * A jobId you can use to retrieve your solution from the server.
     */
    jobId?: shared.JobId;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
