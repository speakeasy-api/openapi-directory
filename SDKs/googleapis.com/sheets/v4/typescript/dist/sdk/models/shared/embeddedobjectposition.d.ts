import { SpeakeasyBase } from "../../../internal/utils";
import { OverlayPosition } from "./overlayposition";
/**
 * The position of an embedded object such as a chart.
 */
export declare class EmbeddedObjectPosition extends SpeakeasyBase {
    /**
     * If true, the embedded object is put on a new sheet whose ID is chosen for you. Used only when writing.
     */
    newSheet?: boolean;
    /**
     * The location an object is overlaid on top of a grid.
     */
    overlayPosition?: OverlayPosition;
    /**
     * The sheet this is on. Set only if the embedded object is on its own sheet. Must be non-negative.
     */
    sheetId?: number;
}
