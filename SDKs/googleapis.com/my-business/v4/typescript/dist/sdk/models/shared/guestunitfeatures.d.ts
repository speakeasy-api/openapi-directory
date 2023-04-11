import { SpeakeasyBase } from "../../../internal/utils";
import { LivingArea } from "./livingarea";
import { ViewsFromUnit } from "./viewsfromunit";
/**
 * Bungalow or villa exception.
 */
export declare enum GuestUnitFeaturesBungalowOrVillaExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Connecting unit available exception.
 */
export declare enum GuestUnitFeaturesConnectingUnitAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Executive floor exception.
 */
export declare enum GuestUnitFeaturesExecutiveFloorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Max adult occupants count exception.
 */
export declare enum GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Max child occupants count exception.
 */
export declare enum GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Max occupants count exception.
 */
export declare enum GuestUnitFeaturesMaxOccupantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Private home exception.
 */
export declare enum GuestUnitFeaturesPrivateHomeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Suite exception.
 */
export declare enum GuestUnitFeaturesSuiteExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Tier. Classification of the unit based on available features/amenities. A non-standard tier is only permitted if at least one other unit type falls under the standard tier.
 */
export declare enum GuestUnitFeaturesTierEnum {
    UnitTierUnspecified = "UNIT_TIER_UNSPECIFIED",
    StandardUnit = "STANDARD_UNIT",
    DeluxeUnit = "DELUXE_UNIT"
}
/**
 * Tier exception.
 */
export declare enum GuestUnitFeaturesTierExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Features and available amenities in the guest unit.
 */
export declare class GuestUnitFeatures extends SpeakeasyBase {
    /**
     * Bungalow or villa. An independent structure that is part of a hotel or resort that is rented to one party for a vacation stay. The hotel or resort may be completely comprised of bungalows or villas, or they may be one of several guestroom options. Guests in the bungalows or villas most often have the same, if not more, amenities and services offered to guests in other guestroom types.
     */
    bungalowOrVilla?: boolean;
    /**
     * Bungalow or villa exception.
     */
    bungalowOrVillaException?: GuestUnitFeaturesBungalowOrVillaExceptionEnum;
    /**
     * Connecting unit available. A guestroom type that features access to an adjacent guestroom for the purpose of booking both rooms. Most often used by families who need more than one room to accommodate the number of people in their group.
     */
    connectingUnitAvailable?: boolean;
    /**
     * Connecting unit available exception.
     */
    connectingUnitAvailableException?: GuestUnitFeaturesConnectingUnitAvailableExceptionEnum;
    /**
     * Executive floor. A floor of the hotel where the guestrooms are only bookable by members of the hotel's frequent guest membership program. Benefits of this room class include access to a designated lounge which may or may not feature free breakfast, cocktails or other perks specific to members of the program.
     */
    executiveFloor?: boolean;
    /**
     * Executive floor exception.
     */
    executiveFloorException?: GuestUnitFeaturesExecutiveFloorExceptionEnum;
    /**
     * Max adult occupants count. The total number of adult guests allowed to stay overnight in the guestroom.
     */
    maxAdultOccupantsCount?: number;
    /**
     * Max adult occupants count exception.
     */
    maxAdultOccupantsCountException?: GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum;
    /**
     * Max child occupants count. The total number of children allowed to stay overnight in the room.
     */
    maxChildOccupantsCount?: number;
    /**
     * Max child occupants count exception.
     */
    maxChildOccupantsCountException?: GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum;
    /**
     * Max occupants count. The total number of guests allowed to stay overnight in the guestroom.
     */
    maxOccupantsCount?: number;
    /**
     * Max occupants count exception.
     */
    maxOccupantsCountException?: GuestUnitFeaturesMaxOccupantsCountExceptionEnum;
    /**
     * Private home. A privately owned home (house, townhouse, apartment, cabin, bungalow etc) that may or not serve as the owner's residence, but is rented out in its entirety or by the room(s) to paying guest(s) for vacation stays. Not for lease-based, long-term residency.
     */
    privateHome?: boolean;
    /**
     * Private home exception.
     */
    privateHomeException?: GuestUnitFeaturesPrivateHomeExceptionEnum;
    /**
     * Suite. A guestroom category that implies both a bedroom area and a separate living area. There may or may not be full walls and doors separating the two areas, but regardless, they are very distinct. Does not mean a couch or chair in a bedroom.
     */
    suite?: boolean;
    /**
     * Suite exception.
     */
    suiteException?: GuestUnitFeaturesSuiteExceptionEnum;
    /**
     * Tier. Classification of the unit based on available features/amenities. A non-standard tier is only permitted if at least one other unit type falls under the standard tier.
     */
    tier?: GuestUnitFeaturesTierEnum;
    /**
     * Tier exception.
     */
    tierException?: GuestUnitFeaturesTierExceptionEnum;
    /**
     * An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.
     */
    totalLivingAreas?: LivingArea;
    /**
     * Views available from the guest unit itself.
     */
    views?: ViewsFromUnit;
}
