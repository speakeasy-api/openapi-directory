import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2;
}
/**
 * The fields of the primary version to include in the response.
 */
export declare enum CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum {
    CryptoKeyVersionViewUnspecified = "CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED",
    Full = "FULL"
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     */
    orderBy?: string;
    /**
     * Optional. Optional limit on the number of CryptoKeys to include in the response. Further CryptoKeys can subsequently be obtained by including the ListCryptoKeysResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Optional pagination token, returned earlier via ListCryptoKeysResponse.next_page_token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the KeyRing to list, in the format `projects/* /locations/* /keyRings/*`.
     */
    parent: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * The fields of the primary version to include in the response.
     */
    versionView?: CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listCryptoKeysResponse?: shared.ListCryptoKeysResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
