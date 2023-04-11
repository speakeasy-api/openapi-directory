import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SnowExportServicesCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * services export
     */
    snowExportServicesCSV200TextCSVBinaryString?: Uint8Array;
}
