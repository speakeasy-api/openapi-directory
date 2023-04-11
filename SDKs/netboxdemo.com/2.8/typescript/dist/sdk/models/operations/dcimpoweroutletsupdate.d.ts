import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerOutletsUpdateRequest extends SpeakeasyBase {
    writablePowerOutletInput: shared.WritablePowerOutletInput;
    /**
     * A unique integer value identifying this power outlet.
     */
    id: number;
}
export declare class DcimPowerOutletsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerOutlet?: shared.PowerOutlet;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
