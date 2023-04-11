import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * True if you want to display licensed content
 */
export declare enum GetIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare class GetRequest extends SpeakeasyBase {
    /**
     * ID of the attraction
     */
    id: string;
    /**
     * True if you want to display licensed content
     */
    includeLicensedContent?: GetIncludeLicensedContentEnum;
    /**
     * The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*')
     */
    locale?: string;
}
export declare class GetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
