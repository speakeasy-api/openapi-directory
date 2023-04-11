import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVideoListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Amount of detail to render in the response
 */
export declare enum GetVideoListViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetVideoListRequest extends SpeakeasyBase {
    /**
     * One or more video IDs
     */
    id: string[];
    /**
     * The ID of the search that is related to this request
     */
    searchId?: string;
    /**
     * Amount of detail to render in the response
     */
    view?: GetVideoListViewEnum;
}
export declare class GetVideoListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoDataList?: shared.VideoDataList;
}
