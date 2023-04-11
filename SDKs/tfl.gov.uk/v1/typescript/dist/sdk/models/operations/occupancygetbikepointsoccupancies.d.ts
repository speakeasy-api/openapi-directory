import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OccupancyGetBikePointsOccupanciesRequest extends SpeakeasyBase {
    ids: string[];
}
export declare class OccupancyGetBikePointsOccupanciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesBikePointOccupancies?: shared.TflApiPresentationEntitiesBikePointOccupancy[];
}
