import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LineTimetableToRequest extends SpeakeasyBase {
    /**
     * The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
     */
    fromStopPointId: string;
    /**
     * A single line id e.g. victoria
     */
    id: string;
    /**
     * The destination stations's Naptan code
     */
    toStopPointId: string;
}
export declare class LineTimetableToResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesTimetableResponse?: shared.TflApiPresentationEntitiesTimetableResponse;
}
