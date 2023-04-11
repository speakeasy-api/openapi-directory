import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableSiteStatusEnum {
    Active = "active",
    Planned = "planned",
    Retired = "retired"
}
export declare class WritableSiteInput extends SpeakeasyBase {
    /**
     * 32-bit autonomous system number
     */
    asn?: number;
    comments?: string;
    contactEmail?: string;
    contactName?: string;
    contactPhone?: string;
    customFields?: Record<string, any>;
    description?: string;
    /**
     * Local facility ID or description
     */
    facility?: string;
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
    region?: number;
    shippingAddress?: string;
    slug: string;
    status?: WritableSiteStatusEnum;
    tags?: string[];
    tenant?: number;
    timeZone?: string;
}
