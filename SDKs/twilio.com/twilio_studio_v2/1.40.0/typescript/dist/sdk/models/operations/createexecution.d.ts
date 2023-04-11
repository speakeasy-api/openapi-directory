import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateExecutionServerList: readonly ["https://studio.twilio.com"];
export declare class CreateExecutionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateExecutionCreateExecutionRequest extends SpeakeasyBase {
    /**
     * The Twilio phone number to send messages or initiate calls from during the Flow's Execution. Available as variable `{{flow.channel.address}}`. For SMS, this can also be a Messaging Service SID.
     */
    from: string;
    /**
     * JSON data that will be added to the Flow's context and that can be accessed as variables inside your Flow. For example, if you pass in `Parameters={"name":"Zeke"}`, a widget in your Flow can reference the variable `{{flow.data.name}}`, which returns "Zeke". Note: the JSON value must explicitly be passed as a string, not as a hash object. Depending on your particular HTTP library, you may need to add quotes or URL encode the JSON string.
     */
    parameters?: any;
    /**
     * The Contact phone number to start a Studio Flow Execution, available as variable `{{contact.channel.address}}`.
     */
    to: string;
}
export declare class CreateExecutionRequest extends SpeakeasyBase {
    /**
     * The SID of the Excecution's Flow.
     */
    flowSid: string;
    requestBody?: CreateExecutionCreateExecutionRequest;
}
export declare class CreateExecutionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    studioV2FlowExecution?: shared.StudioV2FlowExecution;
}
