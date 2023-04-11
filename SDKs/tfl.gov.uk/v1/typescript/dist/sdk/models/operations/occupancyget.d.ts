import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OccupancyGetRequest extends SpeakeasyBase {
    id: string;
}
export declare class OccupancyGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesCarParkOccupancy?: shared.TflApiPresentationEntitiesCarParkOccupancy;
}
