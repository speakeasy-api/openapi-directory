import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldPersistVO } from "./customfieldpersistvo";
/**
 * Java type: com.noosh.domain.nooshapi.persist.vo.ShipmentLocationPostPersistVO
 */
export declare class ShipmentLocationPostPersistVO extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    batchLabel?: string;
    city?: string;
    companyName?: string;
    countryIsoCode?: string;
    deliveryDate?: Date;
    descriptionOrTitle?: string;
    email?: string;
    firstName?: string;
    innerCartonLabel?: string;
    lastName?: string;
    middleName?: string;
    outerCartonLabel?: string;
    palletLablel?: string;
    poofType?: string;
    postalCode?: string;
    requestType?: string;
    requestedQuantity?: number;
    shipmentCustomFields?: CustomFieldPersistVO[];
    shipmentRequestCustomFields?: CustomFieldPersistVO[];
    shippingCarrier?: string;
    shippingInstruction?: string;
    shppingMethod?: string;
    specIds?: string;
    state?: string;
    workPhoneNumber?: string;
    workgroupName?: string;
}
