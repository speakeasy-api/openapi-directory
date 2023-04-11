import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The direction of travel. Can be inbound or outbound.
 */
export declare enum LineRouteSequenceDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    All = "all"
}
export declare enum LineRouteSequenceServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class LineRouteSequenceRequest extends SpeakeasyBase {
    /**
     * The direction of travel. Can be inbound or outbound.
     */
    direction: LineRouteSequenceDirectionEnum;
    /**
     * That excludes crowding from line disruptions. Can be true or false.
     */
    excludeCrowding?: boolean;
    /**
     * A single line id e.g. victoria
     */
    id: string;
    /**
     * A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
     */
    serviceTypes?: LineRouteSequenceServiceTypesEnum[];
}
export declare class LineRouteSequenceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesRouteSequence?: shared.TflApiPresentationEntitiesRouteSequence;
}
