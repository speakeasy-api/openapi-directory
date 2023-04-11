import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCmsV3DomainsGetPageSecurity extends SpeakeasyBase {
    hapikey?: string;
    oauth2?: string;
    oauth2Legacy?: string;
    oauth2Legacy1?: string;
    oauth3?: string;
    privateApps?: string;
    privateApps1?: string;
    privateAppsLegacy?: string;
    privateAppsLegacy1?: string;
}
export declare class GetCmsV3DomainsGetPageRequest extends SpeakeasyBase {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.
     */
    after?: string;
    /**
     * Whether to return only results that have been archived.
     */
    archived?: boolean;
    /**
     * Only return domains created after this date.
     */
    createdAfter?: Date;
    /**
     * Only return domains created at this date.
     */
    createdAt?: Date;
    /**
     * Only return domains created before this date.
     */
    createdBefore?: Date;
    /**
     * Maximum number of results per page.
     */
    limit?: number;
    sort?: string[];
    /**
     * Only return domains updated after this date.
     */
    updatedAfter?: Date;
    /**
     * Only return domains updated at this date.
     */
    updatedAt?: Date;
    /**
     * Only return domains updated before this date.
     */
    updatedBefore?: Date;
}
export declare class GetCmsV3DomainsGetPageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * successful operation
     */
    collectionResponseWithTotalDomainForwardPaging?: shared.CollectionResponseWithTotalDomainForwardPaging;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
