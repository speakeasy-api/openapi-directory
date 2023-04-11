import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum LineRouteByModeServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class LineRouteByModeRequest extends SpeakeasyBase {
    /**
     * A comma-separated list of modes e.g. tube,dlr
     */
    modes: string[];
    /**
     * A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
     */
    serviceTypes?: LineRouteByModeServiceTypesEnum[];
}
export declare class LineRouteByModeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
