import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetHistoryRequest extends SpeakeasyBase {
    /**
     * The ID of the application.
     */
    applicationId?: string;
    /**
     * Beginning of the period (Epoch time, in seconds).
     */
    from?: number;
    /**
     * The ID of the group.
     */
    groupId?: string;
    /**
     * The ID of the service.
     */
    serviceId?: string;
    /**
     * End of the period (Epoch time, in seconds).
     */
    to?: number;
}
export declare class GetHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
