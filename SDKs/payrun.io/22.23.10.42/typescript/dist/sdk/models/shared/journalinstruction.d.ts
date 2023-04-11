import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The journal instructions' accounting type
 */
export declare enum JournalInstructionJournalInstructionAccountingTypeEnum {
    Credit = "Credit",
    Debit = "Debit"
}
export declare class JournalInstructionJournalInstruction extends SpeakeasyBase {
    /**
     * The journal instructions' accounting type
     */
    accountingType?: JournalInstructionJournalInstructionAccountingTypeEnum;
    /**
     * The journal instructions' description
     */
    description?: string;
    /**
     * The journal instructions' end date
     */
    endDate?: Date;
    /**
     * The journal instructions' expression
     */
    expression?: string;
    /**
     * The journal instructions' journal line tag
     */
    journalLineTag?: string;
    /**
     * The journal instructions' ledger target
     */
    ledgerTarget?: string;
    /**
     * The journal instructions' nom code
     */
    nomCode?: string;
    /**
     * The journal instructions' start date
     */
    startDate?: Date;
    /**
     * The journal instructions' sub nom code
     */
    subNomCode?: string;
}
/**
 * The journal instruction object.
 */
export declare class JournalInstruction extends SpeakeasyBase {
    journalInstruction?: JournalInstructionJournalInstruction;
}
