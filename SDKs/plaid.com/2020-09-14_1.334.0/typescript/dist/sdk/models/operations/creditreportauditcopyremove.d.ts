import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreditReportAuditCopyRemoveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    creditAuditCopyTokenRemoveResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
