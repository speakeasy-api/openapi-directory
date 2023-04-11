import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ModeArrivalsRequest extends SpeakeasyBase {
    /**
     * A number of arrivals to return for each stop, -1 to return all available.
     */
    count?: number;
    /**
     * A mode name e.g. tube, dlr
     */
    mode: string;
}
export declare class ModeArrivalsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesPredictions?: shared.TflApiPresentationEntitiesPrediction[];
}
