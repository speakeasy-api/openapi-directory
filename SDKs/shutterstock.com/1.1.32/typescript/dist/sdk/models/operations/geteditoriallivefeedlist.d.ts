import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEditorialLivefeedListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetEditorialLivefeedListRequest extends SpeakeasyBase {
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
export declare class GetEditorialLivefeedListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialLivefeedList?: shared.EditorialLivefeedList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
