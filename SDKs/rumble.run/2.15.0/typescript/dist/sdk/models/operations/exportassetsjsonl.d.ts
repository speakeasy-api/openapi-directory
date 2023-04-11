import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportAssetsJSONLSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportAssetsJSONLRequest extends SpeakeasyBase {
    /**
     * an optional list of fields to export, comma-separated
     */
    fields?: string;
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class ExportAssetsJSONLResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * filtered asset results
     */
    exportAssetsJSONL200ApplicationJSONBinaryString?: Uint8Array;
}
