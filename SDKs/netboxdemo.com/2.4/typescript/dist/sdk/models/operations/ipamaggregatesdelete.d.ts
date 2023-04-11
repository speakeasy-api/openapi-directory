import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IpamAggregatesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this aggregate.
     */
    id: number;
}
export declare class IpamAggregatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
