import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRearPortsTraceRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this rear port.
     */
    id: number;
}
export declare class DcimRearPortsTraceResponse extends SpeakeasyBase {
    contentType: string;
    rearPort?: shared.RearPort;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
