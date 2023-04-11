import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerPortsTraceRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this power port.
     */
    id: number;
}
export declare class DcimPowerPortsTraceResponse extends SpeakeasyBase {
    contentType: string;
    powerPort?: shared.PowerPort;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
