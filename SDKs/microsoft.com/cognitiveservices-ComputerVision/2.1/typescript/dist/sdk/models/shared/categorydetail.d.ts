import { SpeakeasyBase } from "../../../internal/utils";
import { CelebritiesModel } from "./celebritiesmodel";
import { LandmarksModel } from "./landmarksmodel";
/**
 * An object describing additional category details.
 */
export declare class CategoryDetail extends SpeakeasyBase {
    /**
     * An array of celebrities if any identified.
     */
    celebrities?: CelebritiesModel[];
    /**
     * An array of landmarks if any identified.
     */
    landmarks?: LandmarksModel[];
}
