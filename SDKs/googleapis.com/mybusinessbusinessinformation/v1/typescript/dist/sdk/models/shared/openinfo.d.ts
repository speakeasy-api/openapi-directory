import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * Required. Indicates whether or not the Location is currently open for business. All locations are open by default, unless updated to be closed.
 */
export declare enum OpenInfoStatusEnum {
    OpenForBusinessUnspecified = "OPEN_FOR_BUSINESS_UNSPECIFIED",
    Open = "OPEN",
    ClosedPermanently = "CLOSED_PERMANENTLY",
    ClosedTemporarily = "CLOSED_TEMPORARILY"
}
/**
 * Information related to the opening state of the business.
 */
export declare class OpenInfoInput extends SpeakeasyBase {
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    openingDate?: Date;
    /**
     * Required. Indicates whether or not the Location is currently open for business. All locations are open by default, unless updated to be closed.
     */
    status?: OpenInfoStatusEnum;
}
/**
 * Information related to the opening state of the business.
 */
export declare class OpenInfo extends SpeakeasyBase {
    /**
     * Output only. Indicates whether this business is eligible for re-open.
     */
    canReopen?: boolean;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    openingDate?: Date;
    /**
     * Required. Indicates whether or not the Location is currently open for business. All locations are open by default, unless updated to be closed.
     */
    status?: OpenInfoStatusEnum;
}
