import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopPointReachableFromServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class StopPointReachableFromRequest extends SpeakeasyBase {
    /**
     * The id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) of the stop point to filter by
     */
    id: string;
    /**
     * Line id of the line to filter by (e.g. victoria)
     */
    lineId: string;
    /**
     * A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
     */
    serviceTypes?: StopPointReachableFromServiceTypesEnum[];
}
export declare class StopPointReachableFromResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
