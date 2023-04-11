import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PlaceGetRequest extends SpeakeasyBase {
    /**
     * The id of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their ids
     */
    id: string;
    /**
     * Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned
     */
    includeChildren?: boolean;
}
export declare class PlaceGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
