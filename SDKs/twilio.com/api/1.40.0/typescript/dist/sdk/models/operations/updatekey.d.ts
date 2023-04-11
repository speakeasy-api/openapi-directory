import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateKeyServerList: readonly ["https://api.twilio.com"];
export declare class UpdateKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateKeyUpdateKeyRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
}
export declare class UpdateKeyRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Key resources to update.
     */
    accountSid: string;
    requestBody?: UpdateKeyUpdateKeyRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Key resource to update.
     */
    sid: string;
}
export declare class UpdateKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountKey?: shared.ApiV2010AccountKey;
}
