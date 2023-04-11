import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEditorialLivefeedSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetEditorialLivefeedRequest extends SpeakeasyBase {
    /**
     * Returns only if the livefeed is available for distribution in a certain country
     */
    country: string;
    /**
     * Editorial livefeed ID; must be an URI encoded string
     */
    id: string;
}
export declare class GetEditorialLivefeedResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialLivefeed?: shared.EditorialLivefeed;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
