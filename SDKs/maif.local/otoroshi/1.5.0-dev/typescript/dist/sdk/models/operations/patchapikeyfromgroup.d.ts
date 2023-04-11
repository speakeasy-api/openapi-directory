import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchApiKeyFromGroupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PatchApiKeyFromGroupRequest extends SpeakeasyBase {
    requestBody?: shared.Patch[];
    /**
     * the api key id
     */
    clientId: string;
    /**
     * The api key group id
     */
    groupId: string;
}
export declare class PatchApiKeyFromGroupResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
