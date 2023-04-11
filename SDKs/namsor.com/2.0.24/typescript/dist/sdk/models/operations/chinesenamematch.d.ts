import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChineseNameMatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ChineseNameMatchRequest extends SpeakeasyBase {
    chineseGivenNameLatin: string;
    chineseName: string;
    chineseSurnameLatin: string;
}
export declare class ChineseNameMatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A romanized name.
     */
    nameMatchedOut?: shared.NameMatchedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
