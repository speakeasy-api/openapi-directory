import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateMemberServerList: readonly ["https://chat.twilio.com"];
export declare class CreateMemberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateMemberCreateMemberRequest extends SpeakeasyBase {
    /**
     * The `identity` value that uniquely identifies the new resource's [User](https://www.twilio.com/docs/api/chat/rest/v1/user) within the [Service](https://www.twilio.com/docs/api/chat/rest/services). See [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) for more details.
     */
    identity: string;
    /**
     * The SID of the [Role](https://www.twilio.com/docs/api/chat/rest/roles) to assign to the member. The default roles are those specified on the [Service](https://www.twilio.com/docs/chat/api/services).
     */
    roleSid?: string;
}
export declare class CreateMemberRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the new member belongs to. Can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    requestBody?: CreateMemberCreateMemberRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to create the resource under.
     */
    serviceSid: string;
}
export declare class CreateMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    chatV1ServiceChannelMember?: shared.ChatV1ServiceChannelMember;
}
