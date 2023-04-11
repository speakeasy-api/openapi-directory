import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateDeviceCodeServerList: readonly ["https://oauth.twilio.com"];
export declare class CreateDeviceCodeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateDeviceCodeCreateDeviceCodeRequest extends SpeakeasyBase {
    /**
     * An array of intended audiences for token requests
     */
    audiences?: string[];
    /**
     * A 34 character string that uniquely identifies this OAuth App.
     */
    clientSid: string;
    /**
     * An Array of scopes for authorization request
     */
    scopes: string[];
}
export declare class CreateDeviceCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    oauthV1DeviceCode?: shared.OauthV1DeviceCode;
}
