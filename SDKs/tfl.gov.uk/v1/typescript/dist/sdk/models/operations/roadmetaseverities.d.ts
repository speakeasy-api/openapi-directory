import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RoadMetaSeveritiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesStatusSeverities?: shared.TflApiPresentationEntitiesStatusSeverity[];
}
