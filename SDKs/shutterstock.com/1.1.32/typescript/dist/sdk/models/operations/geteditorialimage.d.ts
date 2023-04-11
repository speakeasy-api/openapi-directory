import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEditorialImageSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetEditorialImageRequest extends SpeakeasyBase {
    /**
     * Returns only if the content is available for distribution in a certain country
     */
    country: string;
    /**
     * Editorial ID
     */
    id: string;
}
export declare class GetEditorialImageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialContent?: shared.EditorialContent;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
