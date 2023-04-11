import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { GuestInstalledApplicationList } from "./guestinstalledapplicationlist";
import { OpenFileList } from "./openfilelist";
import { RunningProcessList } from "./runningprocesslist";
import { RunningServiceList } from "./runningservicelist";
import { RuntimeNetworkInfo } from "./runtimenetworkinfo";
/**
 * Guest OS runtime information.
 */
export declare class GuestRuntimeDetails extends SpeakeasyBase {
    /**
     * Domain, e.g. c.stratozone-development.internal.
     */
    domain?: string;
    /**
     * Guest installed application list.
     */
    installedApps?: GuestInstalledApplicationList;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    lastUptime?: Date;
    /**
     * Machine name.
     */
    machineName?: string;
    /**
     * Runtime networking information.
     */
    networkInfo?: RuntimeNetworkInfo;
    /**
     * Open file list.
     */
    openFileList?: OpenFileList;
    /**
     * List of running guest OS processes.
     */
    processes?: RunningProcessList;
    /**
     * List of running guest OS services.
     */
    services?: RunningServiceList;
}
