import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteFlexFlowServerList: readonly ["https://flex-api.twilio.com"];
export declare class DeleteFlexFlowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteFlexFlowRequest extends SpeakeasyBase {
    /**
     * The SID of the Flex Flow resource to delete.
     */
    sid: string;
}
export declare class DeleteFlexFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
