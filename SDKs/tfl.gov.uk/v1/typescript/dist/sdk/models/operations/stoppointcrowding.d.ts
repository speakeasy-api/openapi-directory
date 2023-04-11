import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The direction of travel. Can be inbound or outbound.
 */
export declare enum StopPointCrowdingDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    All = "all"
}
export declare class StopPointCrowdingRequest extends SpeakeasyBase {
    /**
     * The direction of travel. Can be inbound or outbound.
     */
    direction: StopPointCrowdingDirectionEnum;
    /**
     * The Naptan id of the stop
     */
    id: string;
    /**
     * A particular line e.g. victoria, circle, northern etc.
     */
    line: string;
}
export declare class StopPointCrowdingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
