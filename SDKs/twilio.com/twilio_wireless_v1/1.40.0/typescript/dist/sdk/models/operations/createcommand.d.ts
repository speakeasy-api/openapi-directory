import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateCommandServerList: readonly ["https://wireless.twilio.com"];
export declare class CreateCommandSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we use to call `callback_url`. Can be: `POST` or `GET`, and the default is `POST`.
 */
export declare enum CreateCommandCreateCommandRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateCommandCreateCommandRequest extends SpeakeasyBase {
    /**
     * The HTTP method we use to call `callback_url`. Can be: `POST` or `GET`, and the default is `POST`.
     */
    callbackMethod?: CreateCommandCreateCommandRequestCallbackMethodEnum;
    /**
     * The URL we call using the `callback_url` when the Command has finished sending, whether the command was delivered or it failed.
     */
    callbackUrl?: string;
    /**
     * The message body of the Command. Can be plain text in text mode or a Base64 encoded byte string in binary mode.
     */
    command: string;
    commandMode?: shared.CommandEnumCommandModeEnum;
    /**
     * Whether to request delivery receipt from the recipient. For Commands that request delivery receipt, the Command state transitions to 'delivered' once the server has received a delivery receipt from the device. The default value is `true`.
     */
    deliveryReceiptRequested?: boolean;
    /**
     * Whether to include the SID of the command in the message body. Can be: `none`, `start`, or `end`, and the default behavior is `none`. When sending a Command to a SIM in text mode, we can automatically include the SID of the Command in the message body, which could be used to ensure that the device does not process the same Command more than once.  A value of `start` will prepend the message with the Command SID, and `end` will append it to the end, separating the Command SID from the message body with a space. The length of the Command SID is included in the 160 character limit so the SMS body must be 128 characters or less before the Command SID is included.
     */
    includeSid?: string;
    /**
     * The `sid` or `unique_name` of the [SIM](https://www.twilio.com/docs/wireless/api/sim-resource) to send the Command to.
     */
    sim?: string;
}
export declare class CreateCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    wirelessV1Command?: shared.WirelessV1Command;
}
