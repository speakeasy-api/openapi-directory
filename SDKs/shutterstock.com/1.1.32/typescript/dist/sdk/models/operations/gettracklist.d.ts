import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrackListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Amount of detail to render in the response
 */
export declare enum GetTrackListViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetTrackListRequest extends SpeakeasyBase {
    /**
     * One or more audio IDs
     */
    id: string[];
    /**
     * The ID of the search that is related to this request
     */
    searchId?: string;
    /**
     * Amount of detail to render in the response
     */
    view?: GetTrackListViewEnum;
}
export declare class GetTrackListResponse extends SpeakeasyBase {
    /**
     * OK
     */
    audioDataList?: shared.AudioDataList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
