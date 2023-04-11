import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStopPointIdPlaceTypesRequest extends SpeakeasyBase {
    /**
     * A naptan id for a stop point (station naptan code e.g. 940GZZLUASL).
     */
    id: string;
    /**
     * A comcomma-separated value representing the place types.
     */
    placeTypes: string[];
}
export declare class GetStopPointIdPlaceTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
