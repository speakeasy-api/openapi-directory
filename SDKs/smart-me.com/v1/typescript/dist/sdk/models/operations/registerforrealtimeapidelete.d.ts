import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RegisterForRealtimeApiDeleteRequest extends SpeakeasyBase {
    /**
     * The ID of the realtime API registration
     */
    id: string;
}
export declare class RegisterForRealtimeApiDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
