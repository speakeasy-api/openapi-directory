import { SpeakeasyBase } from "../../../internal/utils";
import { SapDiscoveryComponent } from "./sapdiscoverycomponent";
import { SapDiscoveryMetadata } from "./sapdiscoverymetadata";
/**
 * The schema of SAP system discovery data.
 */
export declare class SapDiscovery extends SpeakeasyBase {
    /**
     * Message describing the system component.
     */
    applicationLayer?: SapDiscoveryComponent;
    /**
     * Message describing the system component.
     */
    databaseLayer?: SapDiscoveryComponent;
    /**
     * Message describing SAP discovery system metadata
     */
    metadata?: SapDiscoveryMetadata;
    /**
     * A combination of database SID, database instance URI and tenant DB name to make a unique identifier per-system.
     */
    systemId?: string;
    /**
     * Unix timestamp this system has been updated last.
     */
    updateTime?: string;
}
