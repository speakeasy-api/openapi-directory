import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedZonePrivateVisibilityConfigGKECluster } from "./managedzoneprivatevisibilityconfiggkecluster";
import { ManagedZonePrivateVisibilityConfigNetwork } from "./managedzoneprivatevisibilityconfignetwork";
export declare class ManagedZonePrivateVisibilityConfig extends SpeakeasyBase {
    /**
     * The list of Google Kubernetes Engine clusters that can see this zone.
     */
    gkeClusters?: ManagedZonePrivateVisibilityConfigGKECluster[];
    kind?: string;
    /**
     * The list of VPC networks that can see this zone.
     */
    networks?: ManagedZonePrivateVisibilityConfigNetwork[];
}
