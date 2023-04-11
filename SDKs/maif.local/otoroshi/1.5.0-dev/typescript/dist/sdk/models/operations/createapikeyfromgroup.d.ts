import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateApiKeyFromGroupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateApiKeyFromGroupRequest extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    /**
     * The api key group id
     */
    groupId: string;
}
export declare class CreateApiKeyFromGroupResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
