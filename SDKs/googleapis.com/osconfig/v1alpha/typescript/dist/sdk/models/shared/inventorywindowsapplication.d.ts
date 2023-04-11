import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key
 */
export declare class InventoryWindowsApplication extends SpeakeasyBase {
    /**
     * The name of the application or product.
     */
    displayName?: string;
    /**
     * The version of the product or application in string format.
     */
    displayVersion?: string;
    /**
     * The internet address for technical support.
     */
    helpLink?: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    installDate?: Date;
    /**
     * The name of the manufacturer for the product or application.
     */
    publisher?: string;
}
