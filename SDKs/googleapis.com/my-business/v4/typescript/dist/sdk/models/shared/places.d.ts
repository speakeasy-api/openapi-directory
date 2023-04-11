import { SpeakeasyBase } from "../../../internal/utils";
import { PlaceInfo } from "./placeinfo";
/**
 * Defines the union of areas represented by a set of places.
 */
export declare class Places extends SpeakeasyBase {
    /**
     * The areas represented by place IDs. Limited to a maximum of 20 places.
     */
    placeInfos?: PlaceInfo[];
}
