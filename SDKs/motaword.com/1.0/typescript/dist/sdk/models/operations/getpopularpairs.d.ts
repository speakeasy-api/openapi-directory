import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPopularPairsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    /**
     * Your most ordered language pairs
     */
    popularLanguagePairs?: shared.PopularLanguagePairs;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
