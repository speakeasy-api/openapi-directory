import { SpeakeasyBase } from "../../../internal/utils";
import { SpecBaseVO } from "./specbasevo";
/**
 * Java type: com.noosh.nooshapi.vo.ShipmentSimpleVO
 */
export declare class ShipmentSimpleVO extends SpeakeasyBase {
    locationsCount?: number;
    qtyReceived?: number;
    qtyRequested?: number;
    qtyShipped?: number;
    receivedDate?: Date;
    shipmentId?: number;
    shipmentStatus?: string;
    shippedDate?: Date;
    /**
     * Java type: com.noosh.nooshapi.vo.SpecBaseVO
     */
    spec?: SpecBaseVO;
}
