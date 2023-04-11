import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListMoodsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class ListMoodsRequest extends SpeakeasyBase {
    /**
     * Which language the moods will be returned in
     */
    language?: string;
}
export declare class ListMoodsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    moodList?: shared.MoodList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
