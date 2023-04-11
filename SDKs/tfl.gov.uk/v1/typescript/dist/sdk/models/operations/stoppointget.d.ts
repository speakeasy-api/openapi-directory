import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopPointGetRequest extends SpeakeasyBase {
    /**
     * A comma-separated list of stop point ids (station naptan code e.g. 940GZZLUASL). Max. approx. 20 ids.
     *
     * @remarks
     *             You can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name.
     */
    ids: string[];
    /**
     * Include the crowding data (static). To Filter further use: /StopPoint/{ids}/Crowding/{line}
     */
    includeCrowdingData?: boolean;
}
export declare class StopPointGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
