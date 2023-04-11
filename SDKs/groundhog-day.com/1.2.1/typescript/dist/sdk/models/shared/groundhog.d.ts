import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
export declare enum GroundhogActiveEnum {
    Zero = "0",
    One = "1"
}
/**
 * An animal that makes an annual prediction on Groundhog Day.
 */
export declare class Groundhog extends SpeakeasyBase {
    active: GroundhogActiveEnum;
    city: string;
    contact: string;
    coordinates: string;
    country: string;
    currentPrediction: string;
    description: string;
    id: number;
    image: string;
    isGroundhog: number;
    name: string;
    predictions?: Prediction[];
    /**
     * All predictions, excluding nulls.
     */
    predictionsCount?: number;
    region: string;
    shortname: string;
    slug: string;
    source: string;
    type: string;
}
