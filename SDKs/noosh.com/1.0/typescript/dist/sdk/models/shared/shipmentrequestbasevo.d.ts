import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyPaAndAttVO } from "./propertypaandattvo";
/**
 * Java type: com.noosh.nooshapi.vo.ShipmentRequestBaseVO
 */
export declare class ShipmentRequestBaseVO extends SpeakeasyBase {
    city?: string;
    companyName?: string;
    country?: string;
    countryCode?: string;
    customFields?: PropertyPaAndAttVO[];
    descriptionOrTitle?: string;
    dueDate?: Date;
    email?: string;
    firstName?: string;
    isUseSpecPackaging?: boolean;
    lastName?: string;
    line1?: string;
    line2?: string;
    line3?: string;
    locationId?: number;
    middleName?: string;
    postal?: string;
    proofType?: string;
    qtyReceived?: number;
    qtyRequested?: number;
    qtyShipped?: number;
    receivedComments?: string;
    receivedDate?: Date;
    requestedShippingCarrier?: string;
    requestedShippingMethod?: string;
    shippedComments?: string;
    shippedDate?: Date;
    shippedInUnits?: number;
    shippedInUofm?: string;
    shippedShippingCarrier?: string;
    shippedShippingMethod?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    shippingCost?: any;
    shippingInstruction?: string;
    state?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    tax?: any;
    trackingNumber?: string;
    type?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    weight?: any;
    weightUofm?: string;
    workPhoneNumber?: string;
    workgroupName?: string;
}
