import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEpisodesInBatchRequest extends SpeakeasyBase {
    getEpisodesInBatchForm: shared.GetEpisodesInBatchForm;
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
}
export declare class GetEpisodesInBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getEpisodesInBatchResponse?: shared.GetEpisodesInBatchResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
