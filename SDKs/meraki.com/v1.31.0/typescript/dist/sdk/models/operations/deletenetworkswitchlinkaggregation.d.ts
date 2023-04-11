import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkSwitchLinkAggregationRequest extends SpeakeasyBase {
    linkAggregationId: string;
    networkId: string;
}
export declare class DeleteNetworkSwitchLinkAggregationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
