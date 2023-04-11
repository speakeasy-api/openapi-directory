import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRacksPartialUpdateRequest extends SpeakeasyBase {
    writableRackInput: shared.WritableRackInput;
    /**
     * A unique integer value identifying this rack.
     */
    id: number;
}
export declare class DcimRacksPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rack?: shared.Rack;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
