import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The journal lines' employee
 */
export declare class JournalLineJournalLineEmployee extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
/**
 * The journal lines' pay frequency
 */
export declare enum JournalLineJournalLinePayFrequencyEnum {
    Weekly = "Weekly",
    Monthly = "Monthly",
    TwoWeekly = "TwoWeekly",
    FourWeekly = "FourWeekly",
    Yearly = "Yearly"
}
/**
 * The journal lines' pay run
 */
export declare class JournalLineJournalLinePayRun extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
/**
 * The journal lines' sub contractor
 */
export declare class JournalLineJournalLineSubContractor extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
export declare class JournalLineJournalLine extends SpeakeasyBase {
    /**
     * The journal lines' credit
     */
    credit?: number;
    /**
     * The journal lines' debit
     */
    debit?: number;
    /**
     * The journal lines' description
     */
    description?: string;
    /**
     * The journal lines' employee
     */
    employee?: JournalLineJournalLineEmployee;
    /**
     * The journal lines' generated
     */
    generated?: Date;
    /**
     * The journal lines' grouping
     */
    grouping?: string;
    /**
     * The journal lines' ledger target
     */
    ledgerTarget?: string;
    /**
     * The journal lines' nom code
     */
    nomCode?: string;
    /**
     * The journal lines' pay frequency
     */
    payFrequency?: JournalLineJournalLinePayFrequencyEnum;
    /**
     * The journal lines' pay run
     */
    payRun?: JournalLineJournalLinePayRun;
    /**
     * The journal lines' sub contractor
     */
    subContractor?: JournalLineJournalLineSubContractor;
    /**
     * The journal lines' sub nom code
     */
    subNomCode?: string;
    /**
     * The journal lines' tax period
     */
    taxPeriod?: number;
    /**
     * The journal lines' tax year
     */
    taxYear?: number;
}
/**
 * The journal line object.
 */
export declare class JournalLine extends SpeakeasyBase {
    journalLine?: JournalLineJournalLine;
}
