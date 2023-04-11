import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopPointGetTaxiRanksByIdsRequest extends SpeakeasyBase {
    /**
     * stopPointId is required to get the taxi ranks.
     */
    stopPointId: string;
}
export declare class StopPointGetTaxiRanksByIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
