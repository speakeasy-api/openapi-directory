import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEditorialImageLivefeedItemsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetEditorialImageLivefeedItemsRequest extends SpeakeasyBase {
    /**
     * Returns only if the livefeed items are available for distribution in a certain country
     */
    country: string;
    /**
     * Editorial livefeed ID; must be an URI encoded string
     */
    id: string;
}
export declare class GetEditorialImageLivefeedItemsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialImageContentDataList?: shared.EditorialImageContentDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
