import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutConsumerV1AppointmentsIdConfirmRequest extends SpeakeasyBase {
    /**
     * appointment id to confirm
     */
    id: number;
    /**
     * Use this parameter to undo the confirmed status
     */
    undo?: boolean;
}
export declare class PutConsumerV1AppointmentsIdConfirmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
