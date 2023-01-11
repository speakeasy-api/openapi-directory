import { SpeakeasyBase } from "../../../internal/utils";
import { LabelDownloadTypeEnum } from "./labeldownloadtypeenum";
import { ValidateAddressEnum } from "./validateaddressenum";
/**
 * A purchase label without shipment resource
**/
export declare class CreateLabelFromRateRequestBody extends SpeakeasyBase {
    labelDownloadType?: LabelDownloadTypeEnum;
    labelFormat?: Record<string, any>;
    labelLayout?: Record<string, any>;
    validateAddress?: ValidateAddressEnum;
}
