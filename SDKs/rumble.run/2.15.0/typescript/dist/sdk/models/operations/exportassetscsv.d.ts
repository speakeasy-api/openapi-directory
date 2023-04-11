import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportAssetsCSVSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportAssetsCSVRequest extends SpeakeasyBase {
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class ExportAssetsCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * filtered asset results
     */
    exportAssetsCSV200TextCSVBinaryString?: Uint8Array;
}
