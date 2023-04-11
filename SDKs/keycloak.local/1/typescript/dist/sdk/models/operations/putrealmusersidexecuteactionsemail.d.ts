import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutRealmUsersIdExecuteActionsEmailRequest extends SpeakeasyBase {
    /**
     * required actions the user needs to complete
     */
    requestBody: string[];
    /**
     * Client id
     */
    clientId?: string;
    /**
     * User id
     */
    id: string;
    /**
     * Number of seconds after which the generated token expires
     */
    lifespan?: number;
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * Redirect uri
     */
    redirectUri?: string;
}
export declare class PutRealmUsersIdExecuteActionsEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
