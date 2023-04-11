import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApiKeyFromGroupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ApiKeyFromGroupRequest extends SpeakeasyBase {
    /**
     * the api key id
     */
    clientId: string;
    /**
     * The api key group id
     */
    groupId: string;
}
export declare class ApiKeyFromGroupResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
