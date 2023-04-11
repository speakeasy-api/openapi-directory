import { SpeakeasyBase } from "../../../internal/utils";
import { OrderSimpleVO } from "./ordersimplevo";
/**
 * Java type: com.noosh.nooshapi.vo.OrderListVO
 */
export declare class OrderListVO extends SpeakeasyBase {
    results?: OrderSimpleVO[];
    statusCode?: number;
    statusReason?: string;
}
