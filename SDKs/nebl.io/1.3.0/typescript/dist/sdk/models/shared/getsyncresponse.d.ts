import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object containing node sync status
 */
export declare class GetSyncResponse extends SpeakeasyBase {
    /**
     * Current blockchain height
     */
    blockChainHeight?: number;
    /**
     * Recent sync error messages
     */
    error?: string;
    /**
     * Height node is synced to
     */
    height?: number;
    /**
     * Current sync status
     */
    status?: string;
    /**
     * Current sync percentage
     */
    syncPercentage?: number;
    /**
     * Node type
     */
    type?: string;
}
