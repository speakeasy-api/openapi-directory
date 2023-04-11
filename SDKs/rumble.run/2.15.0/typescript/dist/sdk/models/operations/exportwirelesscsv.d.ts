import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportWirelessCSVSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportWirelessCSVRequest extends SpeakeasyBase {
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class ExportWirelessCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * filtered wireless results
     */
    exportWirelessCSV200TextCSVBinaryString?: Uint8Array;
}
