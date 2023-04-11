import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopPointRouteServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class StopPointRouteRequest extends SpeakeasyBase {
    /**
     * A stop point id (station naptan codes e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
     */
    id: string;
    /**
     * A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
     */
    serviceTypes?: StopPointRouteServiceTypesEnum[];
}
export declare class StopPointRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesStopPointRouteSections?: shared.TflApiPresentationEntitiesStopPointRouteSection[];
}
