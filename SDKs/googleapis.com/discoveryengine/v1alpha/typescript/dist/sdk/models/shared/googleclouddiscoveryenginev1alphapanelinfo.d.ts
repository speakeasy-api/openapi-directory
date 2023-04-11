import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detailed panel information associated with a user event.
 */
export declare class GoogleCloudDiscoveryengineV1alphaPanelInfo extends SpeakeasyBase {
    /**
     * The display name of the panel.
     */
    displayName?: string;
    /**
     * Required. The panel ID.
     */
    panelId?: string;
    /**
     * The ordered position of the panel, if shown to the user with other panels. If set, then total_panels must also be set.
     */
    panelPosition?: number;
    /**
     * The total number of panels, including this one, shown to the user. Must be set if panel_position is set.
     */
    totalPanels?: number;
}
