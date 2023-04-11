import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableSiteStatusEnum {
    One = "1",
    Two = "2",
    Four = "4"
}
export declare class WritableSiteInput extends SpeakeasyBase {
    asn?: number;
    comments?: string;
    contactEmail?: string;
    contactName?: string;
    contactPhone?: string;
    customFields?: Record<string, any>;
    description?: string;
    facility?: string;
    latitude?: string;
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
