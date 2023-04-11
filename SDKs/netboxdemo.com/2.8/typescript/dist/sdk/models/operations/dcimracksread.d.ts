import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRacksReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this rack.
     */
    id: number;
}
export declare class DcimRacksReadResponse extends SpeakeasyBase {
    contentType: string;
    rack?: shared.Rack;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
