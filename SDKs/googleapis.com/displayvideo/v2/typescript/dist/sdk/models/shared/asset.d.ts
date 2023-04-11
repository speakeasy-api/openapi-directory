import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single asset.
 */
export declare class Asset extends SpeakeasyBase {
    /**
     * The asset content. For uploaded assets, the content is the serving path.
     */
    content?: string;
    /**
     * Media ID of the uploaded asset. This is a unique identifier for the asset. This ID can be passed to other API calls, e.g. CreateCreative to associate the asset with a creative. **On April 5, 2023, the value of this ID will be updated. Before this date, we recommend that you stop using any cached media IDs when creating or updating creatives, and instead upload assets immediately before using them for creative production.** **After April 5, you can update cached media IDs to the new values by retrieving them from associated creative resources or re-uploading them.**
     */
    mediaId?: string;
}
