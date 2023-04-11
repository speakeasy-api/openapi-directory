import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEditorialImageLivefeedListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetEditorialImageLivefeedListRequest extends SpeakeasyBase {
    /**
     * Returns only livefeeds that are available for distribution in a certain country
     */
    country: string;
    /**
     * Page number
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
}
export declare class GetEditorialImageLivefeedListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialImageLivefeedList?: shared.EditorialImageLivefeedList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
