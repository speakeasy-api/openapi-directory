import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * The restriction type for the specified URL.
 */
export declare enum UrlRestrictionRestrictionTypeEnum {
    RestrictionTypeUnspecified = "RESTRICTION_TYPE_UNSPECIFIED",
    Contains = "CONTAINS",
    Equals = "EQUALS",
    StartsWith = "STARTS_WITH",
    EndsWith = "ENDS_WITH",
    DoesNotEqual = "DOES_NOT_EQUAL",
    DoesNotContain = "DOES_NOT_CONTAIN",
    DoesNotStartWith = "DOES_NOT_START_WITH",
    DoesNotEndWith = "DOES_NOT_END_WITH"
}
/**
 * Represents the URL restriction (for the URL captured by the pixel callback) for a user list.
 */
export declare class UrlRestriction extends SpeakeasyBase {
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    endDate?: Date;
    /**
     * The restriction type for the specified URL.
     */
    restrictionType?: UrlRestrictionRestrictionTypeEnum;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    startDate?: Date;
    /**
     * Required. The URL to use for applying the restriction on the user list.
     */
    url?: string;
}
