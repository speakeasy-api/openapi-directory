import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEditorialLivefeedItemsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetEditorialLivefeedItemsRequest extends SpeakeasyBase {
    /**
     * Returns only if the livefeed items are available for distribution in a certain country
     */
    country: string;
    /**
     * Editorial livefeed ID; must be an URI encoded string
     */
    id: string;
}
export declare class GetEditorialLivefeedItemsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialContentDataList?: shared.EditorialContentDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
