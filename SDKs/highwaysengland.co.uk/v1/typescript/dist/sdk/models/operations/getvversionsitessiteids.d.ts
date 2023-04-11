import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVVersionSitesSiteIdsRequest extends SpeakeasyBase {
    /**
     * site id
     */
    siteIds: string;
    version: string;
}
export declare class GetVVersionSitesSiteIdsResponse extends SpeakeasyBase {
    contentType: string;
    siteResponse?: shared.SiteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
