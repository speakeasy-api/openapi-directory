import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GlobalLiveStatsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    stats?: shared.Stats;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
