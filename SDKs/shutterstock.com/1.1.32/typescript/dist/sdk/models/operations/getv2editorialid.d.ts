import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV2EditorialIdSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetV2EditorialIdRequest extends SpeakeasyBase {
    /**
     * Returns only if the content is available for distribution in a certain country
     */
    country: string;
    /**
     * Editorial ID
     */
    id: string;
    /**
     * The ID of the search that is related to this request
     */
    searchId?: string;
}
export declare class GetV2EditorialIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialContent?: shared.EditorialContent;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
