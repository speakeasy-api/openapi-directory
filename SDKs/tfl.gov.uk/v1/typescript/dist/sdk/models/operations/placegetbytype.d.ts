import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PlaceGetByTypeRequest extends SpeakeasyBase {
    /**
     * An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported)
     */
    activeOnly?: boolean;
    /**
     * A comma-separated list of the types to return. Max. approx 12 types.
     *
     * @remarks
     *             A valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint.
     */
    types: string[];
}
export declare class PlaceGetByTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
