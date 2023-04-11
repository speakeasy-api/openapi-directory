import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateNewSigningKeyServerList: readonly ["https://api.twilio.com"];
export declare class CreateNewSigningKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateNewSigningKeyCreateNewSigningKeyRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
}
export declare class CreateNewSigningKeyRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will be responsible for the new Key resource.
     */
    accountSid: string;
    requestBody?: CreateNewSigningKeyCreateNewSigningKeyRequest;
}
export declare class CreateNewSigningKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountNewSigningKey?: shared.ApiV2010AccountNewSigningKey;
}
