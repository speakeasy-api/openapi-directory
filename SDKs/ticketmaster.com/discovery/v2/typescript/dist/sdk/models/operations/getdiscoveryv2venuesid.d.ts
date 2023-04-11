import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * True if you want to display licensed content
 */
export declare enum GetDiscoveryV2VenuesIdIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare class GetDiscoveryV2VenuesIdRequest extends SpeakeasyBase {
    /**
     * ID of the venue
     */
    id: string;
    /**
     * True if you want to display licensed content
     */
    includeLicensedContent?: GetDiscoveryV2VenuesIdIncludeLicensedContentEnum;
    /**
     * The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*')
     */
    locale?: string;
}
export declare class GetDiscoveryV2VenuesIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
