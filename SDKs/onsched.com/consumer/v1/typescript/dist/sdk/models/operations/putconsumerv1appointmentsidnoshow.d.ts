import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutConsumerV1AppointmentsIdNoshowRequest extends SpeakeasyBase {
    requestBody?: Record<string, any>;
    /**
     * appointment id to mark as NoShow
     */
    id: number;
}
export declare class PutConsumerV1AppointmentsIdNoshowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
