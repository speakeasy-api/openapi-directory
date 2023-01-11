import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EarningWithTqsStatusEnum {
    Paid = "paid",
    Pending = "pending",
    Failed = "failed"
}
export declare class EarningWithTqs extends SpeakeasyBase {
    amount?: number;
    currency?: string;
    dueDate?: Date;
    isAboveAverage?: boolean;
    projectId?: number;
    score?: number;
    status?: EarningWithTqsStatusEnum;
    stringsEdited?: number;
    stringsTranslated?: number;
    words?: number;
    wordsApproved?: number;
    wordsTranslated?: number;
}
