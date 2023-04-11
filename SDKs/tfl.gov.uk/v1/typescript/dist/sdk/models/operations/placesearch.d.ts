import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PlaceSearchRequest extends SpeakeasyBase {
    /**
     * The name of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their names.
     */
    name: string;
    /**
     * A comma-separated list of the types to return. Max. approx 12 types.
     */
    types?: string[];
}
export declare class PlaceSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
