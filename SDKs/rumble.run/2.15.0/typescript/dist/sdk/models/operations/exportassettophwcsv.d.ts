import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportAssetTopHWCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * top asset hardware platforms and counts as csv
     */
    exportAssetTopHWCSV200TextCsvBinaryString?: Uint8Array;
}
