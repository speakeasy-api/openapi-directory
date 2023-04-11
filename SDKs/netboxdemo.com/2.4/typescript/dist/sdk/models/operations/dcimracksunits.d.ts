import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRacksUnitsRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this rack.
     */
    id: number;
}
export declare class DcimRacksUnitsResponse extends SpeakeasyBase {
    contentType: string;
    rack?: shared.Rack;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
