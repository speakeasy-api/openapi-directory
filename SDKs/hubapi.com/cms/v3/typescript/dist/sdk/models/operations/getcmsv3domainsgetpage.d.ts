import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCmsV3DomainsGetPageQueryParams extends SpeakeasyBase {
    after?: string;
    archived?: boolean;
    createdAfter?: Date;
    createdAt?: Date;
    createdBefore?: Date;
    limit?: number;
    sort?: string[];
    updatedAfter?: Date;
    updatedAt?: Date;
    updatedBefore?: Date;
}
export declare class GetCmsV3DomainsGetPageSecurity extends SpeakeasyBase {
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2?: shared.SchemeOauth2;
    privateApps?: shared.SchemePrivateApps;
    hapikey?: shared.SchemeHapikey;
    privateApps1?: shared.SchemePrivateApps;
    oauth3?: shared.SchemeOauth2;
    privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    oauth2Legacy1?: shared.SchemeOauth2Legacy;
}
export declare class GetCmsV3DomainsGetPageRequest extends SpeakeasyBase {
    queryParams: GetCmsV3DomainsGetPageQueryParams;
    security: GetCmsV3DomainsGetPageSecurity;
}
export declare class GetCmsV3DomainsGetPageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    collectionResponseWithTotalDomainForwardPaging?: shared.CollectionResponseWithTotalDomainForwardPaging;
    contentType: string;
    statusCode: number;
}
