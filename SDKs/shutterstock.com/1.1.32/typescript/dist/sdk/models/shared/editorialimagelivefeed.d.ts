import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialCoverItem } from "./editorialcoveritem";
/**
 * Metadata about editorial livefeed
 */
export declare class EditorialImageLivefeed extends SpeakeasyBase {
    /**
     * Cover image for editorial livefeed
     */
    coverItem?: EditorialCoverItem;
    /**
     * When the livefeed was initially created
     */
    createdTime?: Date;
    /**
     * Livefeed ID
     */
    id: string;
    /**
     * Name of the livefeed
     */
    name: string;
    /**
     * Total count of items in the livefeed
     */
    totalItemCount: number;
}
