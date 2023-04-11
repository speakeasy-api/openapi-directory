import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum LineSearchServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class LineSearchRequest extends SpeakeasyBase {
    /**
     * Optionally filter by the specified modes
     */
    modes?: string[];
    /**
     * Search term e.g victoria
     */
    query: string;
    /**
     * A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
     */
    serviceTypes?: LineSearchServiceTypesEnum[];
}
export declare class LineSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesRouteSearchResponse?: shared.TflApiPresentationEntitiesRouteSearchResponse;
}
