import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteCredentialServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCredentialRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class DeleteCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
