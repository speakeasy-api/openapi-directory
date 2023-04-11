import { SpeakeasyBase } from "../../../internal/utils";
import { TestOrder } from "./testorder";
/**
 * Successful response
 */
export declare class OrdersGetTestOrderTemplateResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#ordersGetTestOrderTemplateResponse`".
     */
    kind?: string;
    template?: TestOrder;
}
