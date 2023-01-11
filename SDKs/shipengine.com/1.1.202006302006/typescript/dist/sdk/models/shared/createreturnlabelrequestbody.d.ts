import { SpeakeasyBase } from "../../../internal/utils";
import { LabelChargeEventEnum } from "./labelchargeeventenum";
/**
 * A create return label request body
**/
export declare class CreateReturnLabelRequestBody extends SpeakeasyBase {
    chargeEvent?: LabelChargeEventEnum;
    labelDownloadType?: Record<string, any>;
    labelFormat?: Record<string, any>;
    labelImageId?: Record<string, any>;
    labelLayout?: Record<string, any>;
}
