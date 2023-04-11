import { SpeakeasyBase } from "../../../internal/utils";
import { DnsKeySpec } from "./dnskeyspec";
/**
 * Limits associated with a Project.
 */
export declare class Quota extends SpeakeasyBase {
    /**
     * Maximum allowed number of DnsKeys per ManagedZone.
     */
    dnsKeysPerManagedZone?: number;
    /**
     * Maximum allowed number of GKE clusters to which a privately scoped zone can be attached.
     */
    gkeClustersPerManagedZone?: number;
    /**
     * Maximum allowed number of GKE clusters per policy.
     */
    gkeClustersPerPolicy?: number;
    /**
     * Maximum allowed number of GKE clusters per response policy.
     */
    gkeClustersPerResponsePolicy?: number;
    /**
     * Maximum allowed number of items per routing policy.
     */
    itemsPerRoutingPolicy?: number;
    kind?: string;
    /**
     * Maximum allowed number of managed zones in the project.
     */
    managedZones?: number;
    /**
     * Maximum allowed number of managed zones which can be attached to a GKE cluster.
     */
    managedZonesPerGkeCluster?: number;
    /**
     * Maximum allowed number of managed zones which can be attached to a network.
     */
    managedZonesPerNetwork?: number;
    /**
     * Maximum allowed number of networks to which a privately scoped zone can be attached.
     */
    networksPerManagedZone?: number;
    /**
     * Maximum allowed number of networks per policy.
     */
    networksPerPolicy?: number;
    /**
     * Maximum allowed number of networks per response policy.
     */
    networksPerResponsePolicy?: number;
    /**
     * Maximum allowed number of consumer peering zones per target network owned by this producer project
     */
    peeringZonesPerTargetNetwork?: number;
    /**
     * Maximum allowed number of policies per project.
     */
    policies?: number;
    /**
     * Maximum allowed number of ResourceRecords per ResourceRecordSet.
     */
    resourceRecordsPerRrset?: number;
    /**
     * Maximum allowed number of response policies per project.
     */
    responsePolicies?: number;
    /**
     * Maximum allowed number of rules per response policy.
     */
    responsePolicyRulesPerResponsePolicy?: number;
    /**
     * Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest.
     */
    rrsetAdditionsPerChange?: number;
    /**
     * Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest.
     */
    rrsetDeletionsPerChange?: number;
    /**
     * Maximum allowed number of ResourceRecordSets per zone in the project.
     */
    rrsetsPerManagedZone?: number;
    /**
     * Maximum allowed number of target name servers per managed forwarding zone.
     */
    targetNameServersPerManagedZone?: number;
    /**
     * Maximum allowed number of alternative target name servers per policy.
     */
    targetNameServersPerPolicy?: number;
    /**
     * Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes.
     */
    totalRrdataSizePerChange?: number;
    /**
     * DNSSEC algorithm and key length types that can be used for DnsKeys.
     */
    whitelistedKeySpecs?: DnsKeySpec[];
}
