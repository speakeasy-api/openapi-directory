import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerOutletsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this power outlet.
     */
    id: number;
}
export declare class DcimPowerOutletsReadResponse extends SpeakeasyBase {
    contentType: string;
    powerOutlet?: shared.PowerOutlet;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
