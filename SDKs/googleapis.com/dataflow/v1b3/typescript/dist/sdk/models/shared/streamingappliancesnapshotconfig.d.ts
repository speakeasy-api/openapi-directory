import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Streaming appliance snapshot configuration.
 */
export declare class StreamingApplianceSnapshotConfig extends SpeakeasyBase {
    /**
     * Indicates which endpoint is used to import appliance state.
     */
    importStateEndpoint?: string;
    /**
     * If set, indicates the snapshot id for the snapshot being performed.
     */
    snapshotId?: string;
}
