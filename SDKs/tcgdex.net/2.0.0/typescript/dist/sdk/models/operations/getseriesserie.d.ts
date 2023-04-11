import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSeriesSerieRequest extends SpeakeasyBase {
    /**
     * the serie ID or name
     */
    serie: string;
}
export declare class GetSeriesSerieResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serie?: shared.Serie;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
