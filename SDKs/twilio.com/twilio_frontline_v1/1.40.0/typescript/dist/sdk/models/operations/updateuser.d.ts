import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUserServerList: readonly ["https://frontline-api.twilio.com"];
export declare class UpdateUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUserUpdateUserRequest extends SpeakeasyBase {
    /**
     * The avatar URL which will be shown in Frontline application.
     */
    avatar?: string;
    /**
     * The string that you assigned to describe the User.
     */
    friendlyName?: string;
    /**
     * Whether the User is available for new conversations. Set to `false` to prevent User from receiving new inbound conversations if you are using [Pool Routing](https://www.twilio.com/docs/frontline/handle-incoming-conversations#3-pool-routing).
     */
    isAvailable?: boolean;
    state?: shared.UserEnumStateTypeEnum;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    requestBody?: UpdateUserUpdateUserRequest;
    /**
     * The SID of the User resource to update. This value can be either the `sid` or the `identity` of the User resource to update.
     */
    sid: string;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    frontlineV1User?: shared.FrontlineV1User;
}
