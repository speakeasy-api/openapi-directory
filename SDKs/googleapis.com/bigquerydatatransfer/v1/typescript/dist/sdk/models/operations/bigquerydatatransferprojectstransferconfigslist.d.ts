import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigquerydatatransferProjectsTransferConfigsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsListSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsTransferConfigsListSecurityOption1;
    option2?: BigquerydatatransferProjectsTransferConfigsListSecurityOption2;
    option3?: BigquerydatatransferProjectsTransferConfigsListSecurityOption3;
}
export declare class BigquerydatatransferProjectsTransferConfigsListRequest extends SpeakeasyBase {
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
     * When specified, only configurations of requested data sources are returned.
     */
    dataSourceIds?: string[];
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Required. The BigQuery project id for which transfer configs should be returned: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}`
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
}
export declare class BigquerydatatransferProjectsTransferConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listTransferConfigsResponse?: shared.ListTransferConfigsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
