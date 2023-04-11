import { SpeakeasyBase } from "../../../internal/utils";
import { Availablenumber } from "./availablenumber";
/**
 * OK
 */
export declare class AvailableNumbers extends SpeakeasyBase {
    /**
     * The total amount of numbers available in the pool.
     */
    count?: number;
    /**
     * A paginated array of available numbers and their details.
     */
    numbers?: Availablenumber[];
}
