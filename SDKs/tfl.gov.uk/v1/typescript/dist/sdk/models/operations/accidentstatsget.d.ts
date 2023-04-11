import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccidentStatsGetRequest extends SpeakeasyBase {
    /**
     * The year for which to filter the accidents on.
     */
    year: number;
}
export declare class AccidentStatsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesAccidentStatsAccidentDetails?: shared.TflApiPresentationEntitiesAccidentStatsAccidentDetail[];
}
