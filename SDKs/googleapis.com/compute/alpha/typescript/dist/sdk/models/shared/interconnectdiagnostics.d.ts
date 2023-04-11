import { SpeakeasyBase } from "../../../internal/utils";
import { InterconnectDiagnosticsARPEntry } from "./interconnectdiagnosticsarpentry";
import { InterconnectDiagnosticsLinkStatus } from "./interconnectdiagnosticslinkstatus";
/**
 * The aggregation type of the bundle interface.
 */
export declare enum InterconnectDiagnosticsBundleAggregationTypeEnum {
    BundleAggregationTypeLacp = "BUNDLE_AGGREGATION_TYPE_LACP",
    BundleAggregationTypeStatic = "BUNDLE_AGGREGATION_TYPE_STATIC"
}
/**
 * The operational status of the bundle interface.
 */
export declare enum InterconnectDiagnosticsBundleOperationalStatusEnum {
    BundleOperationalStatusDown = "BUNDLE_OPERATIONAL_STATUS_DOWN",
    BundleOperationalStatusUp = "BUNDLE_OPERATIONAL_STATUS_UP"
}
/**
 * Diagnostics information about interconnect, contains detailed and current technical information about Google's side of the connection.
 */
export declare class InterconnectDiagnostics extends SpeakeasyBase {
    /**
     * A list of InterconnectDiagnostics.ARPEntry objects, describing individual neighbors currently seen by the Google router in the ARP cache for the Interconnect. This will be empty when the Interconnect is not bundled.
     */
    arpCaches?: InterconnectDiagnosticsARPEntry[];
    /**
     * The aggregation type of the bundle interface.
     */
    bundleAggregationType?: InterconnectDiagnosticsBundleAggregationTypeEnum;
    /**
     * The operational status of the bundle interface.
     */
    bundleOperationalStatus?: InterconnectDiagnosticsBundleOperationalStatusEnum;
    /**
     * A list of InterconnectDiagnostics.LinkStatus objects, describing the status for each link on the Interconnect.
     */
    links?: InterconnectDiagnosticsLinkStatus[];
    /**
     * The MAC address of the Interconnect's bundle interface.
     */
    macAddress?: string;
}
