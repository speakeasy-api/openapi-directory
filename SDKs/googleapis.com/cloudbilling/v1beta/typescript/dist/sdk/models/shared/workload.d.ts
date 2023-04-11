import { SpeakeasyBase } from "../../../internal/utils";
import { CloudCdnEgressWorkload } from "./cloudcdnegressworkload";
import { CloudCdnWorkload } from "./cloudcdnworkload";
import { CloudInterconnectEgressWorkload } from "./cloudinterconnectegressworkload";
import { CloudInterconnectWorkload } from "./cloudinterconnectworkload";
import { CloudStorageEgressWorkload } from "./cloudstorageegressworkload";
import { CloudStorageWorkload } from "./cloudstorageworkload";
import { ComputeVmWorkload } from "./computevmworkload";
import { PremiumTierEgressWorkload } from "./premiumtieregressworkload";
import { StandardTierEgressWorkload } from "./standardtieregressworkload";
import { VmToVmEgressWorkload } from "./vmtovmegressworkload";
/**
 * Specifies usage on a single Google Cloud product over a time frame. Each Google Cloud product has its own message, containing specific product configuration parameters of the product usage amounts along each dimension in which the product is billed.
 */
export declare class Workload extends SpeakeasyBase {
    /**
     * Specifies usage for Cloud CDN egress.
     */
    cloudCdnEgressWorkload?: CloudCdnEgressWorkload;
    /**
     * Specifies usage for Cloud CDN resources.
     */
    cloudCdnWorkload?: CloudCdnWorkload;
    /**
     * The interconnect egress only includes the Interconnect Egress. Please use the standard egress traffic interface to specify your standard egress usage.
     */
    cloudInterconnectEgressWorkload?: CloudInterconnectEgressWorkload;
    /**
     * Specifies usage for Cloud Interconnect resources.
     */
    cloudInterconnectWorkload?: CloudInterconnectWorkload;
    /**
     * Specification of a network type. Network egress within Google Cloud applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket.This includes the network egress within Google Cloud and the general network usage.
     */
    cloudStorageEgressWorkload?: CloudStorageEgressWorkload;
    /**
     * Specifies usage of Cloud Storage resources.
     */
    cloudStorageWorkload?: CloudStorageWorkload;
    /**
     * Specificies usage of a set of identical compute VM instances.
     */
    computeVmWorkload?: ComputeVmWorkload;
    /**
     * Required. A name for this workload. All workloads in a `CostScenario` must have a unique `name`. Each `name` may be at most 128 characters long.
     */
    name?: string;
    /**
     * Specify Premium Tier Internet egress networking.
     */
    premiumTierEgressWorkload?: PremiumTierEgressWorkload;
    /**
     * Specify Standard Tier Internet egress networking.
     */
    standardTierEgressWorkload?: StandardTierEgressWorkload;
    /**
     * Specify VM to VM egress.
     */
    vmToVmEgressWorkload?: VmToVmEgressWorkload;
}
