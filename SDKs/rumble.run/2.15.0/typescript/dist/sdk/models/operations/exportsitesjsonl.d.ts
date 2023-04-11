import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportSitesJSONLSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportSitesJSONLRequest extends SpeakeasyBase {
    /**
     * an optional list of fields to export, comma-separated
     */
    fields?: string;
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class ExportSitesJSONLResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * all sites
     */
    exportSitesJSONL200ApplicationJSONBinaryString?: Uint8Array;
}
