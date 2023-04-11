import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentOptions } from "./paymentoptions";
import { TimeOfDay } from "./timeofday";
/**
 * All inclusive available exception.
 */
export declare enum PoliciesAllInclusiveAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * All inclusive only exception.
 */
export declare enum PoliciesAllInclusiveOnlyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Check-in time exception.
 */
export declare enum PoliciesCheckinTimeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Check-out time exception.
 */
export declare enum PoliciesCheckoutTimeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Kids stay free exception.
 */
export declare enum PoliciesKidsStayFreeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Max child age exception.
 */
export declare enum PoliciesMaxChildAgeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Max kids stay free count exception.
 */
export declare enum PoliciesMaxKidsStayFreeCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Smoke free property exception.
 */
export declare enum PoliciesSmokeFreePropertyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Property rules that impact guests.
 */
export declare class Policies extends SpeakeasyBase {
    /**
     * All inclusive available. The hotel offers a rate option that includes the cost of the room, meals, activities, and other amenities that might otherwise be charged separately.
     */
    allInclusiveAvailable?: boolean;
    /**
     * All inclusive available exception.
     */
    allInclusiveAvailableException?: PoliciesAllInclusiveAvailableExceptionEnum;
    /**
     * All inclusive only. The only rate option offered by the hotel is a rate that includes the cost of the room, meals, activities and other amenities that might otherwise be charged separately.
     */
    allInclusiveOnly?: boolean;
    /**
     * All inclusive only exception.
     */
    allInclusiveOnlyException?: PoliciesAllInclusiveOnlyExceptionEnum;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    checkinTime?: TimeOfDay;
    /**
     * Check-in time exception.
     */
    checkinTimeException?: PoliciesCheckinTimeExceptionEnum;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    checkoutTime?: TimeOfDay;
    /**
     * Check-out time exception.
     */
    checkoutTimeException?: PoliciesCheckoutTimeExceptionEnum;
    /**
     * Kids stay free. The children of guests are allowed to stay in the room/suite of a parent or adult without an additional fee. The policy may or may not stipulate a limit of the child's age or the overall number of children allowed.
     */
    kidsStayFree?: boolean;
    /**
     * Kids stay free exception.
     */
    kidsStayFreeException?: PoliciesKidsStayFreeExceptionEnum;
    /**
     * Max child age. The hotel allows children up to a certain age to stay in the room/suite of a parent or adult without an additional fee.
     */
    maxChildAge?: number;
    /**
     * Max child age exception.
     */
    maxChildAgeException?: PoliciesMaxChildAgeExceptionEnum;
    /**
     * Max kids stay free count. The hotel allows a specific, defined number of children to stay in the room/suite of a parent or adult without an additional fee.
     */
    maxKidsStayFreeCount?: number;
    /**
     * Max kids stay free count exception.
     */
    maxKidsStayFreeCountException?: PoliciesMaxKidsStayFreeCountExceptionEnum;
    /**
     * Forms of payment accepted at the property.
     */
    paymentOptions?: PaymentOptions;
    /**
     * Smoke free property. Smoking is not allowed inside the building, on balconies, or in outside spaces. Hotels that offer a designated area for guests to smoke are not considered smoke-free properties.
     */
    smokeFreeProperty?: boolean;
    /**
     * Smoke free property exception.
     */
    smokeFreePropertyException?: PoliciesSmokeFreePropertyExceptionEnum;
}
