import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateApiKeyFromGroupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateApiKeyFromGroupRequest extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    /**
     * the api key id
     */
    clientId: string;
    /**
     * The api key group id
     */
    groupId: string;
}
export declare class UpdateApiKeyFromGroupResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
