import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The cis lines' pay frequency
 */
export declare enum CisLineCisLinePayFrequencyEnum {
    Monthly = "Monthly",
    Weekly = "Weekly"
}
/**
 * The cis lines' tax treatment
 */
export declare enum CisLineCisLineTaxTreatmentEnum {
    Taxable = "Taxable",
    NonTaxable = "NonTaxable",
    Notional = "Notional",
    Materials = "Materials"
}
/**
 * The cis lines' u o m
 */
export declare enum CisLineCisLineUOMEnum {
    NotSet = "NotSet",
    Minute = "Minute",
    Hour = "Hour",
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year",
    Unit = "Unit"
}
export declare class CisLineCisLine extends SpeakeasyBase {
    /**
     * The cis lines' cis deduction
     */
    cisDeduction?: number;
    /**
     * The cis lines' cis line type
     */
    cisLineType?: string;
    /**
     * The cis lines' description
     */
    description?: string;
    /**
     * The cis lines' generated
     */
    generated?: Date;
    /**
     * The cis lines' gross pay
     */
    grossPay?: number;
    /**
     * The cis lines' nominal code key
     */
    nominalCodeKey?: string;
    /**
     * The cis lines' pay frequency
     */
    payFrequency?: CisLineCisLinePayFrequencyEnum;
    /**
     * The cis lines' tax month
     */
    taxMonth?: number;
    /**
     * The cis lines' tax period
     */
    taxPeriod?: number;
    /**
     * The cis lines' tax treatment
     */
    taxTreatment?: CisLineCisLineTaxTreatmentEnum;
    /**
     * The cis lines' tax year
     */
    taxYear?: number;
    /**
     * The cis lines' u o m
     */
    uom?: CisLineCisLineUOMEnum;
    /**
     * The cis lines' unit rate
     */
    unitRate?: number;
    /**
     * The cis lines' units
     */
    units?: number;
    /**
     * The cis lines' v a t
     */
    vat?: number;
}
/**
 * The cis line object.
 */
export declare class CisLine extends SpeakeasyBase {
    cisLine?: CisLineCisLine;
}
