import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1CustomersStatesRequest extends SpeakeasyBase {
    country?: string;
}
export declare class GetConsumerV1CustomersStatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    stateViewModels?: shared.StateViewModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
