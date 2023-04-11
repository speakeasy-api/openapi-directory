import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteCredentialListServerList: readonly ["https://trunking.twilio.com"];
export declare class DeleteCredentialListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCredentialListRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the CredentialList resource to delete.
     */
    sid: string;
    /**
     * The SID of the Trunk from which to delete the credential list.
     */
    trunkSid: string;
}
export declare class DeleteCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
