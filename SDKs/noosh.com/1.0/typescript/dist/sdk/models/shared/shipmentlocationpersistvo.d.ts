import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Java type: com.noosh.domain.nooshapi.persist.vo.ShipmentLocationPersistVO
 */
export declare class ShipmentLocationPersistVO extends SpeakeasyBase {
    dueDate?: Date;
    qtyReceived?: number;
    qtyRequested?: number;
    qtyShipped?: number;
    receivedDate?: Date;
    shippedDate?: Date;
    /**
     * Java type: java.math.BigDecimal
     */
    shippingCost?: any;
    type?: string;
}
