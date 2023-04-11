import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTestUserServerList: readonly ["https://studio.twilio.com"];
export declare class FetchTestUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTestUserRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the flow.
     */
    sid: string;
}
export declare class FetchTestUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV2FlowTestUser?: shared.StudioV2FlowTestUser;
}
