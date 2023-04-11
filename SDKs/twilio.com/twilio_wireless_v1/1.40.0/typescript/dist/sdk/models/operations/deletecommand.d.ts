import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteCommandServerList: readonly ["https://wireless.twilio.com"];
export declare class DeleteCommandSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCommandRequest extends SpeakeasyBase {
    /**
     * The SID of the Command resource to delete.
     */
    sid: string;
}
export declare class DeleteCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
