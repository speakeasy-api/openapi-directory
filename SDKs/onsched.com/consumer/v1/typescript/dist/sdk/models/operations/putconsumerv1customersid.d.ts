import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutConsumerV1CustomersIdRequest extends SpeakeasyBase {
    customerUpdateModel?: shared.CustomerUpdateModel;
    /**
     * id of customer object
     */
    id: string;
}
export declare class PutConsumerV1CustomersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
