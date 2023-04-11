import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The pensions' certification
 */
export declare enum PensionPensionCertificationEnum {
    NotSet = "NotSet",
    Set1 = "Set1",
    Set2 = "Set2",
    Set3 = "Set3"
}
/**
 * The pensions' pensionable pay codes
 */
export declare class PensionPensionPensionablePayCodes extends SpeakeasyBase {
    payCode?: string[];
}
/**
 * The pensions' pro rata method
 */
export declare enum PensionPensionProRataMethodEnum {
    NotSet = "NotSet",
    Annual260Days = "Annual260Days",
    Annual365Days = "Annual365Days",
    AnnualQualifyingDays = "AnnualQualifyingDays",
    DaysPerCalendarMonth = "DaysPerCalendarMonth",
    DaysPerTaxPeriod = "DaysPerTaxPeriod",
    WorkingDaysPerCalendarMonth = "WorkingDaysPerCalendarMonth",
    WeekDaysPerCalendarMonth = "WeekDaysPerCalendarMonth"
}
/**
 * The pensions' qualifying pay codes
 */
export declare class PensionPensionQualifyingPayCodes extends SpeakeasyBase {
    payCode?: string[];
}
/**
 * The pensions' ras rounding override
 */
export declare enum PensionPensionRasRoundingOverrideEnum {
    NotSet = "NotSet",
    PennyUp = "PennyUp",
    PennyDown = "PennyDown",
    Bankers = "Bankers",
    FiveUp = "FiveUp",
    FiveDown = "FiveDown",
    Floor = "Floor",
    Ceiling = "Ceiling"
}
/**
 * The pensions' rounding option
 */
export declare enum PensionPensionRoundingOptionEnum {
    NotSet = "NotSet",
    PennyUp = "PennyUp",
    PennyDown = "PennyDown",
    Bankers = "Bankers",
    FiveUp = "FiveUp",
    FiveDown = "FiveDown",
    Floor = "Floor",
    Ceiling = "Ceiling"
}
/**
 * The pensions' taxation method
 */
export declare enum PensionPensionTaxationMethodEnum {
    NotSet = "NotSet",
    NetBased = "NetBased",
    ReliefAtSource = "ReliefAtSource",
    TaxReliefExcluded = "TaxReliefExcluded"
}
export declare class PensionPension extends SpeakeasyBase {
    /**
     * The pensions' a e compatible
     */
    aeCompatible?: boolean;
    /**
     * The pensions' certification
     */
    certification?: PensionPensionCertificationEnum;
    /**
     * The pensions' code
     */
    code?: string;
    /**
     * The pensions' contribution deduction day
     */
    contributionDeductionDay?: number;
    /**
     * The pensions' effective date
     */
    effectiveDate?: Date;
    /**
     * The pensions' employee contribution cash
     */
    employeeContributionCash?: number;
    /**
     * The pensions' employee contribution percent
     */
    employeeContributionPercent?: number;
    /**
     * The pensions' employer contribution cash
     */
    employerContributionCash?: number;
    /**
     * The pensions' employer contribution percent
     */
    employerContributionPercent?: number;
    /**
     * The pensions' employer ni saving
     */
    employerNiSaving?: boolean;
    /**
     * The pensions' employer ni saving percentage
     */
    employerNiSavingPercentage?: number;
    /**
     * The pensions' group
     */
    group?: string;
    /**
     * The pensions' lower threshold
     */
    lowerThreshold?: number;
    /**
     * The pensions' meta data
     */
    metaData?: Record<string, any>;
    /**
     * The pensions' next revision date
     */
    nextRevisionDate?: Date;
    /**
     * The pensions' pensionable pay codes
     */
    pensionablePayCodes?: PensionPensionPensionablePayCodes;
    /**
     * The pensions' pro rata method
     */
    proRataMethod?: PensionPensionProRataMethodEnum;
    /**
     * The pensions' provider employer ref
     */
    providerEmployerRef?: string;
    /**
     * The pensions' provider name
     */
    providerName?: string;
    /**
     * The pensions' qualifying pay codes
     */
    qualifyingPayCodes?: PensionPensionQualifyingPayCodes;
    /**
     * The pensions' ras rounding override
     */
    rasRoundingOverride?: PensionPensionRasRoundingOverrideEnum;
    /**
     * The pensions' revision
     */
    revision?: number;
    /**
     * The pensions' rounding option
     */
    roundingOption?: PensionPensionRoundingOptionEnum;
    /**
     * The pensions' salary sacrifice
     */
    salarySacrifice?: boolean;
    /**
     * The pensions' scheme name
     */
    schemeName?: string;
    /**
     * The pensions' sub group
     */
    subGroup?: string;
    /**
     * The pensions' taxation method
     */
    taxationMethod?: PensionPensionTaxationMethodEnum;
    /**
     * The pensions' upper threshold
     */
    upperThreshold?: number;
    /**
     * The pensions' use a e thresholds
     */
    useAEThresholds?: boolean;
}
/**
 * The pension object.
 */
export declare class Pension extends SpeakeasyBase {
    pension?: PensionPension;
}
