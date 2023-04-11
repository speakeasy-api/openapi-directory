import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * Whether this block is used by physical or virtual devices
 */
export declare enum DeviceIpBlockFormEnum {
    DeviceFormUnspecified = "DEVICE_FORM_UNSPECIFIED",
    Virtual = "VIRTUAL",
    Physical = "PHYSICAL",
    Emulator = "EMULATOR"
}
/**
 * A single device IP block
 */
export declare class DeviceIpBlock extends SpeakeasyBase {
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    addedDate?: Date;
    /**
     * An IP address block in CIDR notation eg: 34.68.194.64/29
     */
    block?: string;
    /**
     * Whether this block is used by physical or virtual devices
     */
    form?: DeviceIpBlockFormEnum;
}
