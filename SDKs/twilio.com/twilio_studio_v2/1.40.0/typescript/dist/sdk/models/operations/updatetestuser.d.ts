import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateTestUserServerList: readonly ["https://studio.twilio.com"];
export declare class UpdateTestUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateTestUserUpdateTestUserRequest extends SpeakeasyBase {
    /**
     * List of test user identities that can test draft versions of the flow.
     */
    testUsers: string[];
}
export declare class UpdateTestUserRequest extends SpeakeasyBase {
    requestBody?: UpdateTestUserUpdateTestUserRequest;
    /**
     * Unique identifier of the flow.
     */
    sid: string;
}
export declare class UpdateTestUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV2FlowTestUser?: shared.StudioV2FlowTestUser;
}
