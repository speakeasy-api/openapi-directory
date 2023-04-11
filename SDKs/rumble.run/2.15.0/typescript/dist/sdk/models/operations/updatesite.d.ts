import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSiteSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class UpdateSiteRequest extends SpeakeasyBase {
    /**
     * site object
     */
    siteOptions: shared.SiteOptions;
    /**
     * UUID or name of the site to update
     */
    siteId: string;
}
export declare class UpdateSiteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * site details
     */
    site?: shared.Site;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
