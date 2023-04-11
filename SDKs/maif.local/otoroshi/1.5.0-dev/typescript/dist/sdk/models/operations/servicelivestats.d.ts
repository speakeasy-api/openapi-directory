import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServiceLiveStatsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ServiceLiveStatsRequest extends SpeakeasyBase {
    /**
     * The service id or global for otoroshi stats
     */
    id: string;
}
export declare class ServiceLiveStatsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Successful operation
     */
    stats?: shared.Stats;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
