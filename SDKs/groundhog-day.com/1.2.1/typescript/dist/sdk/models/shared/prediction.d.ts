import { SpeakeasyBase } from "../../../internal/utils";
import { Groundhog } from "./groundhog";
/**
 * An annual prediction of an early spring or a longer winter.
 */
export declare class Prediction extends SpeakeasyBase {
    details: string;
    /**
     * An animal that makes an annual prediction on Groundhog Day.
     */
    groundhog?: Groundhog;
    shadow: number;
    year: number;
}
