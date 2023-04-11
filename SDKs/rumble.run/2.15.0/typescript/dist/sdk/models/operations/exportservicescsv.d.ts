import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportServicesCSVSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportServicesCSVRequest extends SpeakeasyBase {
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class ExportServicesCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * filtered service results
     */
    exportServicesCSV200TextCSVBinaryString?: Uint8Array;
}
