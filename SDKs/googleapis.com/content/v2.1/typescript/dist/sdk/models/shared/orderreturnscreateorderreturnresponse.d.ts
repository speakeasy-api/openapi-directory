import { SpeakeasyBase } from "../../../internal/utils";
import { MerchantOrderReturn } from "./merchantorderreturn";
/**
 * Successful response
 */
export declare class OrderreturnsCreateOrderReturnResponse extends SpeakeasyBase {
    /**
     * The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
     */
    executionStatus?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#orderreturnsCreateOrderReturnResponse`".
     */
    kind?: string;
    /**
     * Order return. Production access (all methods) requires the order manager role. Sandbox access does not.
     */
    orderReturn?: MerchantOrderReturn;
}
