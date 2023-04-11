import { SpeakeasyBase } from "../../../internal/utils";
import { RouterApplianceInstance } from "./routerapplianceinstance";
/**
 * A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
 */
export declare class LinkedRouterApplianceInstancesInput extends SpeakeasyBase {
    /**
     * The list of router appliance instances.
     */
    instances?: RouterApplianceInstance[];
    /**
     * A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations).
     */
    siteToSiteDataTransfer?: boolean;
}
/**
 * A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
 */
export declare class LinkedRouterApplianceInstances extends SpeakeasyBase {
    /**
     * The list of router appliance instances.
     */
    instances?: RouterApplianceInstance[];
    /**
     * A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations).
     */
    siteToSiteDataTransfer?: boolean;
    /**
     * Output only. The VPC network where these router appliance instances are located.
     */
    vpcNetwork?: string;
}
