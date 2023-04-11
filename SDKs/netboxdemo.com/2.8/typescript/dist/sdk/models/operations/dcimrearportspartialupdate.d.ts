import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRearPortsPartialUpdateRequest extends SpeakeasyBase {
    writableRearPortInput: shared.WritableRearPortInput;
    /**
     * A unique integer value identifying this rear port.
     */
    id: number;
}
export declare class DcimRearPortsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rearPort?: shared.RearPort;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
