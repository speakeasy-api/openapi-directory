import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRacksUpdateRequest extends SpeakeasyBase {
    writableRackInput: shared.WritableRackInput;
    /**
     * A unique integer value identifying this rack.
     */
    id: number;
}
export declare class DcimRacksUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rack?: shared.Rack;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
