import { SpeakeasyBase } from "../../../internal/utils";
export declare class QaFilter extends SpeakeasyBase {
    budgetCodes?: string[];
    categories?: string[];
    clients?: number[];
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    dateFrom?: Date;
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    dateTo?: Date;
    documents?: number[];
    projects?: number[];
    severities?: string[];
    sourceLanguages?: string[];
    subjects?: string[];
    targetLanguages?: string[];
    vendors?: number[];
}
