import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportAssetsCiscoCSVSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportAssetsCiscoCSVRequest extends SpeakeasyBase {
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class ExportAssetsCiscoCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * filtered asset results
     */
    exportAssetsCiscoCSV200TextCSVBinaryString?: Uint8Array;
}
