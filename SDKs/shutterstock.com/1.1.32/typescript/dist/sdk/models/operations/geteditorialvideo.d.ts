import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEditorialVideoSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetEditorialVideoRequest extends SpeakeasyBase {
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
export declare class GetEditorialVideoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialVideoContent?: shared.EditorialVideoContent;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
