import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerPanelsPartialUpdateRequest extends SpeakeasyBase {
    writablePowerPanelInput: shared.WritablePowerPanelInput;
    /**
     * A unique integer value identifying this power panel.
     */
    id: number;
}
export declare class DcimPowerPanelsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerPanel?: shared.PowerPanel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
