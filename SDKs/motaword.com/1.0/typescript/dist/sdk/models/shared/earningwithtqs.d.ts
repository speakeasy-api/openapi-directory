import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EarningWithTQSStatusEnum {
    Paid = "paid",
    Pending = "pending",
    Failed = "failed"
}
export declare class EarningWithTQS extends SpeakeasyBase {
    amount?: number;
    currency?: string;
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    dueDate?: Date;
    /**
     * Is this score above or below the average among other vendors in the same project?
     */
    isAboveAverage?: boolean;
    projectId?: number;
    score?: number;
    status?: EarningWithTQSStatusEnum;
    /**
     * The number of translated strings by this translator which was edited by a proofreader.
     */
    stringsEdited?: number;
    /**
     * The number of translated strings by this translator.
     */
    stringsTranslated?: number;
    words?: number;
    wordsApproved?: number;
    wordsTranslated?: number;
}
