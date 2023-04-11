import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportServicesTopUDPCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * top UDP services and counts as csv
     */
    exportServicesTopUDPCSV200TextCsvBinaryString?: Uint8Array;
}
