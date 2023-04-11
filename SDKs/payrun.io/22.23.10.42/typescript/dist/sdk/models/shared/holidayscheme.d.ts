import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The holiday schemes' accrual pay codes
 */
export declare class HolidaySchemeHolidaySchemeAccrualPayCodes extends SpeakeasyBase {
    payCode?: string[];
}
export declare class HolidaySchemeHolidayScheme extends SpeakeasyBase {
    /**
     * The holiday schemes' accrual pay codes
     */
    accrualPayCodes?: HolidaySchemeHolidaySchemeAccrualPayCodes;
    /**
     * The holiday schemes' allow exceed annual entitlement
     */
    allowExceedAnnualEntitlement?: boolean;
    /**
     * The holiday schemes' allow negative balance
     */
    allowNegativeBalance?: boolean;
    /**
     * The holiday schemes' annual entitlement weeks
     */
    annualEntitlementWeeks?: number;
    /**
     * The holiday schemes' bank holiday inclusive
     */
    bankHolidayInclusive?: boolean;
    /**
     * The holiday schemes' code
     */
    code?: string;
    /**
     * The holiday schemes' effective date
     */
    effectiveDate?: Date;
    /**
     * The holiday schemes' max carry over days
     */
    maxCarryOverDays?: number;
    /**
     * The holiday schemes' next revision date
     */
    nextRevisionDate?: Date;
    /**
     * The holiday schemes' offset payment
     */
    offsetPayment?: boolean;
    /**
     * The holiday schemes' revision
     */
    revision?: number;
    /**
     * The holiday schemes' scheme ceased date
     */
    schemeCeasedDate?: Date;
    /**
     * The holiday schemes' scheme key
     */
    schemeKey?: string;
    /**
     * The holiday schemes' scheme name
     */
    schemeName?: string;
    /**
     * The holiday schemes' year start day
     */
    yearStartDay?: number;
    /**
     * The holiday schemes' year start month
     */
    yearStartMonth?: number;
}
/**
 * The holiday scheme object.
 */
export declare class HolidayScheme extends SpeakeasyBase {
    holidayScheme?: HolidaySchemeHolidayScheme;
}
