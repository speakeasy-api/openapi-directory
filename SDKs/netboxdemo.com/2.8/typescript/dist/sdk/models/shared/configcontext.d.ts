import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCluster } from "./nestedcluster";
import { NestedClusterGroup } from "./nestedclustergroup";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedPlatform } from "./nestedplatform";
import { NestedRegion } from "./nestedregion";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { NestedTenantGroup } from "./nestedtenantgroup";
export declare class ConfigContext extends SpeakeasyBase {
    clusterGroups?: NestedClusterGroup[];
    clusters?: NestedCluster[];
    data: string;
    description?: string;
    id?: number;
    isActive?: boolean;
    name: string;
    platforms?: NestedPlatform[];
    regions?: NestedRegion[];
    roles?: NestedDeviceRole[];
    sites?: NestedSite[];
    tags?: string[];
    tenantGroups?: NestedTenantGroup[];
    tenants?: NestedTenant[];
    weight?: number;
}
