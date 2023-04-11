import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportAssetTopTagsCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * top asset tags and counts as csv
     */
    exportAssetTopTagsCSV200TextCSVBinaryString?: Uint8Array;
}
