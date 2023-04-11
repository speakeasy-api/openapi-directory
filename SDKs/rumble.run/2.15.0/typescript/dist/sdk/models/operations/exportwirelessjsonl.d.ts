import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportWirelessJSONLSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportWirelessJSONLRequest extends SpeakeasyBase {
    /**
     * an optional list of fields to export, comma-separated
     */
    fields?: string;
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class ExportWirelessJSONLResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * filtered wireless results
     */
    exportWirelessJSONL200ApplicationJSONBinaryString?: Uint8Array;
}
