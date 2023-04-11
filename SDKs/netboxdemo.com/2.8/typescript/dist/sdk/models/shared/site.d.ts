import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRegion } from "./nestedregion";
import { NestedTenant } from "./nestedtenant";
export declare enum SiteStatusLabelEnum {
    Active = "Active",
    Planned = "Planned",
    Retired = "Retired"
}
export declare enum SiteStatusValueEnum {
    Active = "active",
    Planned = "planned",
    Retired = "retired"
}
export declare class SiteStatus extends SpeakeasyBase {
    label: SiteStatusLabelEnum;
    value: SiteStatusValueEnum;
}
export declare class Site extends SpeakeasyBase {
    /**
     * 32-bit autonomous system number
     */
    asn?: number;
    circuitCount?: number;
    comments?: string;
    contactEmail?: string;
    contactName?: string;
    contactPhone?: string;
    created?: Date;
    customFields?: Record<string, any>;
    description?: string;
    deviceCount?: number;
    /**
     * Local facility ID or description
     */
    facility?: string;
    id?: number;
    lastUpdated?: Date;
    /**
     * GPS coordinate (latitude)
     */
    latitude?: string;
    /**
     * GPS coordinate (longitude)
     */
    longitude?: string;
    name: string;
    physicalAddress?: string;
    prefixCount?: number;
    rackCount?: number;
    region?: NestedRegion;
    shippingAddress?: string;
    slug: string;
    status?: SiteStatus;
    tags?: string[];
    tenant?: NestedTenant;
    timeZone?: string;
    virtualmachineCount?: number;
    vlanCount?: number;
}
