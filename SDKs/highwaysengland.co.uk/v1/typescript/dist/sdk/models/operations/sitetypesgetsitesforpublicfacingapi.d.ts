import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SiteTypesGetSitesForPublicFacingAPIRequest extends SpeakeasyBase {
    /**
     * 1 = MIDAS, 2 = TAME, 3 = TMU, 4 = TRADS Legacy
     */
    siteTypeId: number;
    version: string;
}
export declare class SiteTypesGetSitesForPublicFacingAPIResponse extends SpeakeasyBase {
    contentType: string;
    siteTypeLayer?: shared.SiteTypeLayer;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
