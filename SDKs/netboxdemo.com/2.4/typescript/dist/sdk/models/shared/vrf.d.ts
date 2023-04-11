import { SpeakeasyBase } from "../../../internal/utils";
import { NestedTenant } from "./nestedtenant";
export declare class Vrf extends SpeakeasyBase {
    created?: Date;
    customFields?: Record<string, any>;
    description?: string;
    displayName?: string;
    /**
     * Prevent duplicate prefixes/IP addresses within this VRF
     */
    enforceUnique?: boolean;
    id?: number;
    lastUpdated?: Date;
    name: string;
    rd: string;
    tags?: string[];
    tenant?: NestedTenant;
}
