import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LineStopPointsRequest extends SpeakeasyBase {
    /**
     * A single line id e.g. victoria
     */
    id: string;
    /**
     * If the national-rail line is requested, this flag will filter the national rail stations so that only those operated by TfL are returned
     */
    tflOperatedNationalRailStationsOnly?: boolean;
}
export declare class LineStopPointsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
