import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostConsumerV1CustomersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customerViewModel?: shared.CustomerViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
