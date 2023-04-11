import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerOutletTemplatesPartialUpdateRequest extends SpeakeasyBase {
    writablePowerOutletTemplateInput: shared.WritablePowerOutletTemplateInput;
    /**
     * A unique integer value identifying this power outlet template.
     */
    id: number;
}
export declare class DcimPowerOutletTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerOutletTemplate?: shared.PowerOutletTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
