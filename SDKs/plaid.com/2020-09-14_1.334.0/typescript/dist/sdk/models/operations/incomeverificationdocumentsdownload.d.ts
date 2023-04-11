import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IncomeVerificationDocumentsDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A ZIP file containing source documents(s) used as the basis for income verification.
     */
    incomeVerificationDocumentsDownload200ApplicationZipBinaryString?: Uint8Array;
}
