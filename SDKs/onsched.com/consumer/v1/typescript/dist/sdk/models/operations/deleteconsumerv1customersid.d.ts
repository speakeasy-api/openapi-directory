import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteConsumerV1CustomersIdRequest extends SpeakeasyBase {
    /**
     * id of customer object
     */
    id: string;
}
export declare class DeleteConsumerV1CustomersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
