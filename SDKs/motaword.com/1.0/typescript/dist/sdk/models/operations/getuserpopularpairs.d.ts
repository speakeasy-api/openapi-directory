import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserPopularPairsSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class GetUserPopularPairsRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
}
export declare class GetUserPopularPairsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    /**
     * User's most ordered language pairs
     */
    popularLanguagePairs?: shared.PopularLanguagePairs;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
