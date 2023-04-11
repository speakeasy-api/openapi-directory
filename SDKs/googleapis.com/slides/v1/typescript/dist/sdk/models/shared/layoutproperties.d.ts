import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The properties of Page are only relevant for pages with page_type LAYOUT.
 */
export declare class LayoutProperties extends SpeakeasyBase {
    /**
     * The human-readable name of the layout.
     */
    displayName?: string;
    /**
     * The object ID of the master that this layout is based on.
     */
    masterObjectId?: string;
    /**
     * The name of the layout.
     */
    name?: string;
}
