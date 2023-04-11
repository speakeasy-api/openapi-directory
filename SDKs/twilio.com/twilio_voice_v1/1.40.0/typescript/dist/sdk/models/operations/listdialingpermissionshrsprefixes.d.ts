import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListDialingPermissionsHrsPrefixesServerList: readonly ["https://voice.twilio.com"];
export declare class ListDialingPermissionsHrsPrefixesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListDialingPermissionsHrsPrefixesRequest extends SpeakeasyBase {
    /**
     * The [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) to identify the country permissions from which high-risk special service number prefixes are fetched
     */
    isoCode: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse extends SpeakeasyBase {
    content?: shared.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes[];
    meta?: ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta;
}
export declare class ListDialingPermissionsHrsPrefixesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listDialingPermissionsHrsPrefixesResponse?: ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
