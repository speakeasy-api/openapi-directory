import { SpeakeasyBase } from "../../../internal/utils";
export declare class SyncRequest extends SpeakeasyBase {
    /**
     * List of channel CIDs to sync
     */
    channelCids?: string[];
    clientId?: string;
    connectionId?: string;
    /**
     * Date from which synchronization should happen
     */
    lastSyncAt: Date;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    userId?: string;
    /**
     * If set to true this will start watching requested and newly added channels that user has access to. If error occurred with this option enabled and it is not an input error - channels will still be watched.
     */
    watch?: boolean;
    /**
     * If set to true this will add 'inaccessible_cids' to response type
     */
    withInaccessibleCids?: boolean;
}
