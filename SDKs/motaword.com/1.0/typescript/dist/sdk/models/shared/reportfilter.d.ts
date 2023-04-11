import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportFilter extends SpeakeasyBase {
    /**
     * budget code filter. valid for corporate accounts only.
     */
    budgetCode?: string;
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    dateFrom?: Date;
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    dateTo?: Date;
    /**
     * List of source language codes.
     */
    sourceLanguages?: string[];
    /**
     * List of target language codes.
     */
    targetLanguages?: string[];
    /**
     * List of corporate user IDs. Valid for corporate accounts only.
     */
    users?: number[];
}
