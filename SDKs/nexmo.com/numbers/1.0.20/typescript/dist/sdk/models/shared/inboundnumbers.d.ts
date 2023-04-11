import { SpeakeasyBase } from "../../../internal/utils";
import { Ownednumber } from "./ownednumber";
/**
 * OK
 */
export declare class InboundNumbers extends SpeakeasyBase {
    /**
     * The total amount of numbers owned by the account
     */
    count?: number;
    /**
     * A paginated array of numbers and their details
     */
    numbers?: Ownednumber[];
}
