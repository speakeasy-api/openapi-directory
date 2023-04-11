import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateEngagementServerList: readonly ["https://studio.twilio.com"];
export declare class CreateEngagementSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateEngagementCreateEngagementRequest extends SpeakeasyBase {
    /**
     * The Twilio phone number to send messages or initiate calls from during the Flow Engagement. Available as variable `{{flow.channel.address}}`
     */
    from: string;
    /**
     * A JSON string we will add to your flow's context and that you can access as variables inside your flow. For example, if you pass in `Parameters={'name':'Zeke'}` then inside a widget you can reference the variable `{{flow.data.name}}` which will return the string 'Zeke'. Note: the JSON value must explicitly be passed as a string, not as a hash object. Depending on your particular HTTP library, you may need to add quotes or URL encode your JSON string.
     */
    parameters?: any;
    /**
     * The Contact phone number to start a Studio Flow Engagement, available as variable `{{contact.channel.address}}`.
     */
    to: string;
}
export declare class CreateEngagementRequest extends SpeakeasyBase {
    /**
     * The SID of the Flow.
     */
    flowSid: string;
    requestBody?: CreateEngagementCreateEngagementRequest;
}
export declare class CreateEngagementResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    studioV1FlowEngagement?: shared.StudioV1FlowEngagement;
}
