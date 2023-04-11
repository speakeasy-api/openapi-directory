import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssetReportPdfGetResponse extends SpeakeasyBase {
    /**
     * A PDF of the Asset Report
     */
    assetReportPDFGetResponse?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
