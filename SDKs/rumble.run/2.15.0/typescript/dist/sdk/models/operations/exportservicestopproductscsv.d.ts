import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportServicesTopProductsCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * top service products and counts as csv
     */
    exportServicesTopProductsCSV200TextCSVBinaryString?: Uint8Array;
}
