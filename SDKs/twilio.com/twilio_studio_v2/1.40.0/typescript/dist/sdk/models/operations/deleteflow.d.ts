import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteFlowServerList: readonly ["https://studio.twilio.com"];
export declare class DeleteFlowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteFlowRequest extends SpeakeasyBase {
    /**
     * The SID of the Flow resource to delete.
     */
    sid: string;
}
export declare class DeleteFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
