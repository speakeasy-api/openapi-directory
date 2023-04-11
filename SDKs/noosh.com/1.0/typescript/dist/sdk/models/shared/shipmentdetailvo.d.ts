import { SpeakeasyBase } from "../../../internal/utils";
import { ShipmentRequestBaseVO } from "./shipmentrequestbasevo";
import { SpecBaseVO } from "./specbasevo";
/**
 * Java type: com.noosh.nooshapi.vo.ShipmentDetailVO
 */
export declare class ShipmentDetailVO extends SpeakeasyBase {
    locations?: ShipmentRequestBaseVO[];
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
