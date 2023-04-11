import { SpeakeasyBase } from "../../../internal/utils";
/**
 * asset details
 */
export declare class Asset extends SpeakeasyBase {
    addresses?: string[];
    addressesExtra?: string[];
    agentName?: string;
    alive?: boolean;
    attributes?: Record<string, string>;
    comments?: string;
    createdAt?: number;
    credentials?: Record<string, string>;
    detectedBy?: string;
    domains?: string[];
    firstSeen?: number;
    hw?: string;
    id: string;
    lastAgentId?: string;
    lastSeen?: number;
    lastTaskId?: string;
    lowestRtt?: number;
    lowestTtl?: number;
    macVendors?: string[];
    macs?: string[];
    names?: string[];
    newestMac?: string;
    newestMacAge?: number;
    newestMacVendor?: string;
    orgName?: string;
    organizationId?: string;
    os?: string;
    osVersion?: string;
    rtts?: Record<string, any>;
    serviceCount?: number;
    serviceCountArp?: number;
    serviceCountIcmp?: number;
    serviceCountTcp?: number;
    serviceCountUdp?: number;
    servicePortsProducts?: string[];
    servicePortsProtocols?: string[];
    servicePortsTcp?: string[];
    servicePortsUdp?: string[];
    services?: Record<string, Record<string, string>>;
    siteId?: string;
    siteName?: string;
    tags?: Record<string, string>;
    type?: string;
    updatedAt?: number;
}
