import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportAssetTopOSCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * top operating systems and counts as csv
     */
    exportAssetTopOSCSV200TextCsvBinaryString?: Uint8Array;
}
