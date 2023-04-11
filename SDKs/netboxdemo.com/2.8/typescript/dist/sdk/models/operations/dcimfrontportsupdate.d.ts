import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimFrontPortsUpdateRequest extends SpeakeasyBase {
    writableFrontPortInput: shared.WritableFrontPortInput;
    /**
     * A unique integer value identifying this front port.
     */
    id: number;
}
export declare class DcimFrontPortsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    frontPort?: shared.FrontPort;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
