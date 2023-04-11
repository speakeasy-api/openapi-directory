import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SnowExportAssetsCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * asset export
     */
    snowExportAssetsCSV200TextCSVBinaryString?: Uint8Array;
}
