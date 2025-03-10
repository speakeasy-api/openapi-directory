/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RouterNatLogConfig } from "./routernatlogconfig";
import { RouterNatRule } from "./routernatrule";
import { RouterNatSubnetworkToNat } from "./routernatsubnetworktonat";
import { Expose, Type } from "class-transformer";

export enum RouterNatEndpointTypesEnum {
  EndpointTypeSwg = "ENDPOINT_TYPE_SWG",
  EndpointTypeVm = "ENDPOINT_TYPE_VM",
}

/**
 * Specify the NatIpAllocateOption, which can take one of the following values: - MANUAL_ONLY: Uses only Nat IP addresses provided by customers. When there are not enough specified Nat IPs, the Nat service fails for new VMs. - AUTO_ONLY: Nat IPs are allocated by Google Cloud Platform; customers can't specify any Nat IPs. When choosing AUTO_ONLY, then nat_ip should be empty.
 */
export enum RouterNatNatIpAllocateOptionEnum {
  AutoOnly = "AUTO_ONLY",
  ManualOnly = "MANUAL_ONLY",
}

/**
 * Specify the Nat option, which can take one of the following values: - ALL_SUBNETWORKS_ALL_IP_RANGES: All of the IP ranges in every Subnetwork are allowed to Nat. - ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES: All of the primary IP ranges in every Subnetwork are allowed to Nat. - LIST_OF_SUBNETWORKS: A list of Subnetworks are allowed to Nat (specified in the field subnetwork below) The default is SUBNETWORK_IP_RANGE_TO_NAT_OPTION_UNSPECIFIED. Note that if this field contains ALL_SUBNETWORKS_ALL_IP_RANGES or ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any other Router.Nat section in any Router for this network in this region.
 */
export enum RouterNatSourceSubnetworkIpRangesToNatEnum {
  AllSubnetworksAllIpRanges = "ALL_SUBNETWORKS_ALL_IP_RANGES",
  AllSubnetworksAllPrimaryIpRanges = "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES",
  ListOfSubnetworks = "LIST_OF_SUBNETWORKS",
}

/**
 * Represents a Nat resource. It enables the VMs within the specified subnetworks to access Internet without external IP addresses. It specifies a list of subnetworks (and the ranges within) that want to use NAT. Customers can also provide the external IPs that would be used for NAT. GCP would auto-allocate ephemeral IPs if no external IPs are provided.
 */
export class RouterNat extends SpeakeasyBase {
  /**
   * A list of URLs of the IP resources to be drained. These IPs must be valid static external IPs that have been assigned to the NAT. These IPs should be used for updating/patching a NAT only.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "drainNatIps" })
  drainNatIps?: string[];

  /**
   * Enable Dynamic Port Allocation. If not specified, it is disabled by default. If set to true, - Dynamic Port Allocation will be enabled on this NAT config. - enableEndpointIndependentMapping cannot be set to true. - If minPorts is set, minPortsPerVm must be set to a power of two greater than or equal to 32. If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "enableDynamicPortAllocation" })
  enableDynamicPortAllocation?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "enableEndpointIndependentMapping" })
  enableEndpointIndependentMapping?: boolean;

  /**
   * List of NAT-ted endpoint types supported by the Nat Gateway. If the list is empty, then it will be equivalent to include ENDPOINT_TYPE_VM
   */
  @SpeakeasyMetadata()
  @Expose({ name: "endpointTypes" })
  endpointTypes?: RouterNatEndpointTypesEnum[];

  /**
   * Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "icmpIdleTimeoutSec" })
  icmpIdleTimeoutSec?: number;

  /**
   * Configuration of logging on a NAT.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "logConfig" })
  @Type(() => RouterNatLogConfig)
  logConfig?: RouterNatLogConfig;

  /**
   * Maximum number of ports allocated to a VM from this NAT config when Dynamic Port Allocation is enabled. If Dynamic Port Allocation is not enabled, this field has no effect. If Dynamic Port Allocation is enabled, and this field is set, it must be set to a power of two greater than minPortsPerVm, or 64 if minPortsPerVm is not set. If Dynamic Port Allocation is enabled and this field is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "maxPortsPerVm" })
  maxPortsPerVm?: number;

  /**
   * Minimum number of ports allocated to a VM from this NAT config. If not set, a default number of ports is allocated to a VM. This is rounded up to the nearest power of 2. For example, if the value of this field is 50, at least 64 ports are allocated to a VM.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minPortsPerVm" })
  minPortsPerVm?: number;

  /**
   * Unique name of this Nat service. The name must be 1-63 characters long and comply with RFC1035.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Specify the NatIpAllocateOption, which can take one of the following values: - MANUAL_ONLY: Uses only Nat IP addresses provided by customers. When there are not enough specified Nat IPs, the Nat service fails for new VMs. - AUTO_ONLY: Nat IPs are allocated by Google Cloud Platform; customers can't specify any Nat IPs. When choosing AUTO_ONLY, then nat_ip should be empty.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "natIpAllocateOption" })
  natIpAllocateOption?: RouterNatNatIpAllocateOptionEnum;

  /**
   * A list of URLs of the IP resources used for this Nat service. These IP addresses must be valid static external IP addresses assigned to the project.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "natIps" })
  natIps?: string[];

  /**
   * A list of rules associated with this NAT.
   */
  @SpeakeasyMetadata({ elemType: RouterNatRule })
  @Expose({ name: "rules" })
  @Type(() => RouterNatRule)
  rules?: RouterNatRule[];

  /**
   * Specify the Nat option, which can take one of the following values: - ALL_SUBNETWORKS_ALL_IP_RANGES: All of the IP ranges in every Subnetwork are allowed to Nat. - ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES: All of the primary IP ranges in every Subnetwork are allowed to Nat. - LIST_OF_SUBNETWORKS: A list of Subnetworks are allowed to Nat (specified in the field subnetwork below) The default is SUBNETWORK_IP_RANGE_TO_NAT_OPTION_UNSPECIFIED. Note that if this field contains ALL_SUBNETWORKS_ALL_IP_RANGES or ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any other Router.Nat section in any Router for this network in this region.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceSubnetworkIpRangesToNat" })
  sourceSubnetworkIpRangesToNat?: RouterNatSourceSubnetworkIpRangesToNatEnum;

  /**
   * A list of Subnetwork resources whose traffic should be translated by NAT Gateway. It is used only when LIST_OF_SUBNETWORKS is selected for the SubnetworkIpRangeToNatOption above.
   */
  @SpeakeasyMetadata({ elemType: RouterNatSubnetworkToNat })
  @Expose({ name: "subnetworks" })
  @Type(() => RouterNatSubnetworkToNat)
  subnetworks?: RouterNatSubnetworkToNat[];

  /**
   * Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tcpEstablishedIdleTimeoutSec" })
  tcpEstablishedIdleTimeoutSec?: number;

  /**
   * Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tcpTimeWaitTimeoutSec" })
  tcpTimeWaitTimeoutSec?: number;

  /**
   * Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tcpTransitoryIdleTimeoutSec" })
  tcpTransitoryIdleTimeoutSec?: number;

  /**
   * Timeout (in seconds) for UDP connections. Defaults to 30s if not set.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "udpIdleTimeoutSec" })
  udpIdleTimeoutSec?: number;
}
