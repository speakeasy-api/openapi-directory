import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StopPointDirectionRequest extends SpeakeasyBase {
    /**
     * Originating stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
     */
    id: string;
    /**
     * Optional line id filter e.g. victoria
     */
    lineId?: string;
    /**
     * Destination stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
     */
    toStopPointId: string;
}
export declare class StopPointDirectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    stopPointDirection200ApplicationJSONString?: string;
    /**
     * OK
     */
    stopPointDirection200ApplicationXMLString?: string;
    /**
     * OK
     */
    stopPointDirection200TextJSONString?: string;
    /**
     * OK
     */
    stopPointDirection200TextXMLString?: string;
}
