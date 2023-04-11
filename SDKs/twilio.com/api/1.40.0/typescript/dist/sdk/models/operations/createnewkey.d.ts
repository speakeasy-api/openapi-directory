import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateNewKeyServerList: readonly ["https://api.twilio.com"];
export declare class CreateNewKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateNewKeyCreateNewKeyRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
}
export declare class CreateNewKeyRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will be responsible for the new Key resource.
     */
    accountSid: string;
    requestBody?: CreateNewKeyCreateNewKeyRequest;
}
export declare class CreateNewKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountNewKey?: shared.ApiV2010AccountNewKey;
}
