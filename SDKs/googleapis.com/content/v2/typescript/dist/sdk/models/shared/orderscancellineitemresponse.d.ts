import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class OrdersCancelLineItemResponse extends SpeakeasyBase {
    /**
     * The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
     */
    executionStatus?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelLineItemResponse".
     */
    kind?: string;
}
