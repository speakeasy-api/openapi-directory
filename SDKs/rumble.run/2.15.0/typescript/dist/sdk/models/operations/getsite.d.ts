import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSiteSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetSiteRequest extends SpeakeasyBase {
    /**
     * UUID or name of the site
     */
    siteId: string;
}
export declare class GetSiteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * site details
     */
    site?: shared.Site;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
