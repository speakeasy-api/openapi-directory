import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SeasonLastCompletedRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: string;
}
export declare class SeasonLastCompletedResponse extends SpeakeasyBase {
    contentType: string;
    seasonLastCompleted200ApplicationJSONInteger?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
