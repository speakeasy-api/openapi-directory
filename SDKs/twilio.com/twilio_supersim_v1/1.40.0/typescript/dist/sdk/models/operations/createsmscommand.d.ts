import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSmsCommandServerList: readonly ["https://supersim.twilio.com"];
export declare class CreateSmsCommandSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is POST.
 */
export declare enum CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateSmsCommandCreateSmsCommandRequest extends SpeakeasyBase {
    /**
     * The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is POST.
     */
    callbackMethod?: CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum;
    /**
     * The URL we should call using the `callback_method` after we have sent the command.
     */
    callbackUrl?: string;
    /**
     * The message body of the SMS Command.
     */
    payload: string;
    /**
     * The `sid` or `unique_name` of the [SIM](https://www.twilio.com/docs/iot/supersim/api/sim-resource) to send the SMS Command to.
     */
    sim: string;
}
export declare class CreateSmsCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    supersimV1SmsCommand?: shared.SupersimV1SmsCommand;
}
