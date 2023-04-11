import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSigningKeyServerList: readonly ["https://api.twilio.com"];
export declare class UpdateSigningKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSigningKeyUpdateSigningKeyRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class UpdateSigningKeyRequest extends SpeakeasyBase {
    accountSid: string;
    requestBody?: UpdateSigningKeyUpdateSigningKeyRequest;
    sid: string;
}
export declare class UpdateSigningKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSigningKey?: shared.ApiV2010AccountSigningKey;
}
