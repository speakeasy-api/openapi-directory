import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopPointArrivalDeparturesRequest extends SpeakeasyBase {
    /**
     * A StopPoint id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
     */
    id: string;
    /**
     * A comma-separated list of line ids e.g. elizabeth, london-overground, thameslink
     */
    lineIds: string[];
}
export declare class StopPointArrivalDeparturesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesArrivalDepartures?: shared.TflApiPresentationEntitiesArrivalDeparture[];
}
