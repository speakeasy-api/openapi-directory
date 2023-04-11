import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSeriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful request
     */
    serieResumes?: shared.SerieResume[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
