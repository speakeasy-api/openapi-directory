import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum LineRouteServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class LineRouteRequest extends SpeakeasyBase {
    /**
     * A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
     */
    serviceTypes?: LineRouteServiceTypesEnum[];
}
export declare class LineRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
