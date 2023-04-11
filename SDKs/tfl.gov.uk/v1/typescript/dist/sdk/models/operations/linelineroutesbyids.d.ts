import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum LineLineRoutesByIdsServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class LineLineRoutesByIdsRequest extends SpeakeasyBase {
    /**
     * A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
     */
    ids: string[];
    /**
     * A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
     */
    serviceTypes?: LineLineRoutesByIdsServiceTypesEnum[];
}
export declare class LineLineRoutesByIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
