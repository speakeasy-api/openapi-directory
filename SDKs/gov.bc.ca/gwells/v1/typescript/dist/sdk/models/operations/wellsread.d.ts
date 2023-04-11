import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WellsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this well.
     */
    wellTagNumber: number;
}
export declare class WellsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    wellDetail?: shared.WellDetail;
}
