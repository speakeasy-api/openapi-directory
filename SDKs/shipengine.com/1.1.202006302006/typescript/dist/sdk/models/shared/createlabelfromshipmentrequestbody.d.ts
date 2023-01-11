import { SpeakeasyBase } from "../../../internal/utils";
import { LabelDownloadTypeEnum } from "./labeldownloadtypeenum";
import { ValidateAddressEnum } from "./validateaddressenum";
/**
 * A purchase label without shipment request body
**/
export declare class CreateLabelFromShipmentRequestBody extends SpeakeasyBase {
    labelDownloadType?: LabelDownloadTypeEnum;
    labelFormat?: Record<string, any>;
    labelLayout?: Record<string, any>;
    validateAddress?: ValidateAddressEnum;
}
