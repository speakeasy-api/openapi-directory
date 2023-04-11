import { SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";
export declare class SufficiencyPostInput extends SpeakeasyBase {
    /**
     * list of features
     */
    features?: Feature[];
    /**
     * curie formatted id
     */
    id?: string;
}
