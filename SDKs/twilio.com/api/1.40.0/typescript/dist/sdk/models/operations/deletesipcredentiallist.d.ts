import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSipCredentialListServerList: readonly ["https://api.twilio.com"];
export declare class DeleteSipCredentialListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSipCredentialListRequest extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid: string;
    /**
     * The credential list Sid that uniquely identifies this resource
     */
    sid: string;
}
export declare class DeleteSipCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
