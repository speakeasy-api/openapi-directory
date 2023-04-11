import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The cis instructions' pay frequency
 */
export declare enum CisInstructionCisInstructionPayFrequencyEnum {
    Monthly = "Monthly",
    Weekly = "Weekly"
}
/**
 * The cis instructions' u o m
 */
export declare enum CisInstructionCisInstructionUOMEnum {
    NotSet = "NotSet",
    Minute = "Minute",
    Hour = "Hour",
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year",
    Unit = "Unit"
}
export declare class CisInstructionCisInstruction extends SpeakeasyBase {
    /**
     * The cis instructions' cis line tag
     */
    cisLineTag?: string;
    /**
     * The cis instructions' cis line type
     */
    cisLineType?: string;
    /**
     * The cis instructions' description
     */
    description?: string;
    /**
     * The cis instructions' pay frequency
     */
    payFrequency?: CisInstructionCisInstructionPayFrequencyEnum;
    /**
     * The cis instructions' period end
     */
    periodEnd?: number;
    /**
     * The cis instructions' period start
     */
    periodStart?: number;
    /**
     * The cis instructions' tax year end
     */
    taxYearEnd?: number;
    /**
     * The cis instructions' tax year start
     */
    taxYearStart?: number;
    /**
     * The cis instructions' u o m
     */
    uom?: CisInstructionCisInstructionUOMEnum;
    /**
     * The cis instructions' units
     */
    units?: number;
    /**
     * The cis instructions' v a t
     */
    vat?: number;
    /**
     * The cis instructions' value
     */
    value?: number;
}
/**
 * The cis instruction object.
 */
export declare class CisInstruction extends SpeakeasyBase {
    cisInstruction?: CisInstructionCisInstruction;
}
