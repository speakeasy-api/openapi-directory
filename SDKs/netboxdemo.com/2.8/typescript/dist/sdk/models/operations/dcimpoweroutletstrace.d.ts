import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerOutletsTraceRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this power outlet.
     */
    id: number;
}
export declare class DcimPowerOutletsTraceResponse extends SpeakeasyBase {
    contentType: string;
    powerOutlet?: shared.PowerOutlet;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
