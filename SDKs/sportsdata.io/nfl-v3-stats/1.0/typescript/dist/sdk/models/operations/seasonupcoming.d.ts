import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SeasonUpcomingRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: string;
}
export declare class SeasonUpcomingResponse extends SpeakeasyBase {
    contentType: string;
    seasonUpcoming200ApplicationJSONInteger?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
