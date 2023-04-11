import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetForecastPointsRequest extends SpeakeasyBase {
    language: string;
    /**
     * base URL for the the
     */
    yatchclubid: string;
}
export declare class GetForecastPointsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
