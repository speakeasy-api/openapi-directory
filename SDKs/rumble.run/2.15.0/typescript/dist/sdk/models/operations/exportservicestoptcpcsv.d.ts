import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportServicesTopTCPCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * top TCP services and counts as csv
     */
    exportServicesTopTCPCSV200TextCsvBinaryString?: Uint8Array;
}
