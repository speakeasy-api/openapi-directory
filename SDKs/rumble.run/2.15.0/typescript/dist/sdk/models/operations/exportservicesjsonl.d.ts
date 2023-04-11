import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportServicesJSONLSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportServicesJSONLRequest extends SpeakeasyBase {
    /**
     * an optional list of fields to export, comma-separated
     */
    fields?: string;
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class ExportServicesJSONLResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * filtered service results
     */
    exportServicesJSONL200ApplicationJSONBinaryString?: Uint8Array;
}
