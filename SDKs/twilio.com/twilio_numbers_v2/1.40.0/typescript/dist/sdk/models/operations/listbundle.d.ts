import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListBundleServerList: readonly ["https://numbers.twilio.com"];
export declare class ListBundleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListBundleRequest extends SpeakeasyBase {
    /**
     * The string that you assigned to describe the resource. The column can contain 255 variable characters.
     */
    friendlyName?: string;
    /**
     * Indicates that the Bundle is a valid Bundle until a specified expiration date.
     */
    hasValidUntilDate?: boolean;
    /**
     * The 2-digit [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Bundle's phone number country ownership request.
     */
    isoCountry?: string;
    /**
     * The type of phone number of the Bundle's ownership request. Can be `local`, `mobile`, `national`, or `tollfree`.
     */
    numberType?: string;
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
    /**
     * The unique string of a [Regulation resource](https://www.twilio.com/docs/phone-numbers/regulatory/api/regulations) that is associated to the Bundle resource.
     */
    regulationSid?: string;
    /**
     * Can be `valid-until` or `date-updated`. Defaults to `date-created`.
     */
    sortBy?: shared.BundleEnumSortByEnum;
    /**
     * Default is `DESC`. Can be `ASC` or `DESC`.
     */
    sortDirection?: shared.BundleEnumSortDirectionEnum;
    /**
     * The verification status of the Bundle resource. Please refer to [Bundle Statuses](https://www.twilio.com/docs/phone-numbers/regulatory/api/bundles#bundle-statuses) for more details.
     */
    status?: shared.BundleEnumStatusEnum;
    /**
     * Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
     */
    validUntilDate?: Date;
    /**
     * Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
     */
    validUntilDateLessThan?: Date;
    /**
     * Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
     */
    validUntilDateGreaterThan?: Date;
}
export declare class ListBundleListBundleResponseMeta extends SpeakeasyBase {
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
export declare class ListBundleListBundleResponse extends SpeakeasyBase {
    meta?: ListBundleListBundleResponseMeta;
    results?: shared.NumbersV2RegulatoryComplianceBundle[];
}
export declare class ListBundleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listBundleResponse?: ListBundleListBundleResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
