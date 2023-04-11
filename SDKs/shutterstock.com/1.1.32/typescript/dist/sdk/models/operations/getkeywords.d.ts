import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetKeywordsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetKeywordsRequest extends SpeakeasyBase {
    /**
     * The asset ID or upload ID to suggest keywords for
     */
    assetId: any;
}
export declare class GetKeywordsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    keywordDataList?: shared.KeywordDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
