import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRole } from "./nestedrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { NestedVLANGroup } from "./nestedvlangroup";
export declare enum VLANStatusLabelEnum {
    Active = "Active",
    Reserved = "Reserved",
    Deprecated = "Deprecated"
}
export declare enum VLANStatusValueEnum {
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated"
}
export declare class VLANStatus extends SpeakeasyBase {
    label: VLANStatusLabelEnum;
    value: VLANStatusValueEnum;
}
export declare class Vlan extends SpeakeasyBase {
    created?: Date;
    customFields?: Record<string, any>;
    description?: string;
    displayName?: string;
    group?: NestedVLANGroup;
    id?: number;
    lastUpdated?: Date;
    name: string;
    prefixCount?: number;
    role?: NestedRole;
    site?: NestedSite;
    status?: VLANStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vid: number;
}
