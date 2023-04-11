import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Optional. The direction of travel. Can be inbound or outbound or all. If left blank, and destinationStopId is set, will default to all
 */
export declare enum LineArrivalsDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    All = "all"
}
export declare class LineArrivalsRequest extends SpeakeasyBase {
    /**
     * Optional. Id of destination stop
     */
    destinationStationId?: string;
    /**
     * Optional. The direction of travel. Can be inbound or outbound or all. If left blank, and destinationStopId is set, will default to all
     */
    direction?: LineArrivalsDirectionEnum;
    /**
     * A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
     */
    ids: string[];
    /**
     * Optional. Id of stop to get arrival predictions for (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
     */
    stopPointId: string;
}
export declare class LineArrivalsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesPredictions?: shared.TflApiPresentationEntitiesPrediction[];
}
