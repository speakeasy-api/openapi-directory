import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportServicesTopProtocolsCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * top service protocols and counts as csv
     */
    exportServicesTopProtocolsCSV200TextCSVBinaryString?: Uint8Array;
}
