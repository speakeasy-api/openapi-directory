import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutRealmUsersIdSendVerifyEmailRequest extends SpeakeasyBase {
    /**
     * Client id
     */
    clientId?: string;
    /**
     * User id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * Redirect uri
     */
    redirectUri?: string;
}
export declare class PutRealmUsersIdSendVerifyEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
