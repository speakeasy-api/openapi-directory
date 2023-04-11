import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetImageListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Amount of detail to render in the response
 */
export declare enum GetImageListViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetImageListRequest extends SpeakeasyBase {
    /**
     * One or more image IDs
     */
    id: string[];
    /**
     * The ID of the search that is related to this request
     */
    searchId?: string;
    /**
     * Amount of detail to render in the response
     */
    view?: GetImageListViewEnum;
}
export declare class GetImageListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    imageDataList?: shared.ImageDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
