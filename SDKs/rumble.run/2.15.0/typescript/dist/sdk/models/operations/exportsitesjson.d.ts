import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportSitesJSONSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportSitesJSONRequest extends SpeakeasyBase {
    /**
     * an optional list of fields to export, comma-separated
     */
    fields?: string;
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class ExportSitesJSONResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * all sites
     */
    sites?: shared.Site[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
