import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateIpCommandServerList: readonly ["https://supersim.twilio.com"];
export declare class CreateIpCommandSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `callback_url`. Can be `GET` or `POST`, and the default is `POST`.
 */
export declare enum CreateIpCommandCreateIpCommandRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateIpCommandCreateIpCommandRequest extends SpeakeasyBase {
    /**
     * The HTTP method we should use to call `callback_url`. Can be `GET` or `POST`, and the default is `POST`.
     */
    callbackMethod?: CreateIpCommandCreateIpCommandRequestCallbackMethodEnum;
    /**
     * The URL we should call using the `callback_method` after we have sent the IP Command.
     */
    callbackUrl?: string;
    /**
     * The device port to which the IP Command will be sent.
     */
    devicePort: number;
    /**
     * The data that will be sent to the device. The payload cannot exceed 1300 bytes. If the PayloadType is set to text, the payload is encoded in UTF-8. If PayloadType is set to binary, the payload is encoded in Base64.
     */
    payload: string;
    payloadType?: shared.IpCommandEnumPayloadTypeEnum;
    /**
     * The `sid` or `unique_name` of the [Super SIM](https://www.twilio.com/docs/iot/supersim/api/sim-resource) to send the IP Command to.
     */
    sim: string;
}
export declare class CreateIpCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    supersimV1IpCommand?: shared.SupersimV1IpCommand;
}
