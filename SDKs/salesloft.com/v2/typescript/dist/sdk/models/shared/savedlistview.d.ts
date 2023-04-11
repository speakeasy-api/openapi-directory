import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class SavedListView extends SpeakeasyBase {
    /**
     * ID of Ssaved list view
     */
    id?: number;
    /**
     * Whether the saved list view is the default view
     */
    isDefault?: boolean;
    /**
     * Name of saved list view
     */
    name?: string;
    /**
     * Type of saved list view
     */
    view?: string;
    /**
     * List of set filters in saved list view
     */
    viewParams?: Record<string, any>;
}
