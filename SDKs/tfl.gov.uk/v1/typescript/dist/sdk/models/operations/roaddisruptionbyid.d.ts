import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RoadDisruptionByIdRequest extends SpeakeasyBase {
    /**
     * Comma-separated list of disruption identifiers to filter by.
     */
    disruptionIds: string[];
    /**
     * Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location and comments.
     */
    stripContent?: boolean;
}
export declare class RoadDisruptionByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesRoadDisruption?: shared.TflApiPresentationEntitiesRoadDisruption;
}
