import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RoadDisruptionRequest extends SpeakeasyBase {
    /**
     * an optional list of category names to filter on (a valid list of categories can be obtained from the /Road/Meta/categories endpoint)
     */
    categories?: string[];
    /**
     * Optional, defaults to true. When true, always includes disruptions that have road closures, regardless of the severity filter. When false, the severity filter works as normal.
     */
    closures?: boolean;
    /**
     * Comma-separated list of road identifiers e.g. "A406, A2" use all for all to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint)
     */
    ids: string[];
    /**
     * an optional list of Severity names to filter on (a valid list of severities can be obtained from the /Road/Meta/severities endpoint)
     */
    severities?: string[];
    /**
     * Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location, comments and streets
     */
    stripContent?: boolean;
}
export declare class RoadDisruptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesRoadDisruptions?: shared.TflApiPresentationEntitiesRoadDisruption[];
}
