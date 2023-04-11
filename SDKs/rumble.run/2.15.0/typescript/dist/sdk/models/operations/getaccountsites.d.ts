import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountSitesSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAccountSitesRequest extends SpeakeasyBase {
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class GetAccountSitesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * array of sites
     */
    sites?: shared.Site[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
