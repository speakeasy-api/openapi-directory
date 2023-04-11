import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEditorialImageLivefeedSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetEditorialImageLivefeedRequest extends SpeakeasyBase {
    /**
     * Returns only if the livefeed is available for distribution in a certain country
     */
    country: string;
    /**
     * Editorial livefeed ID; must be an URI encoded string
     */
    id: string;
}
export declare class GetEditorialImageLivefeedResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialImageLivefeed?: shared.EditorialImageLivefeed;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
