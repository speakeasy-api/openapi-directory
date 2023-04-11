import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreditBankIncomePdfGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A PDF of the Bank Income Report
     */
    creditBankIncomePDFGetResponse?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
