import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportAssetTopTypesCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * top asset types and counts as csv
     */
    exportAssetTopTypesCSV200TextCSVBinaryString?: Uint8Array;
}
