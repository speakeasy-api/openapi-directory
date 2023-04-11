import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApiKeysFromGroupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ApiKeysFromGroupRequest extends SpeakeasyBase {
    /**
     * The api key group id
     */
    groupId: string;
}
export declare class ApiKeysFromGroupResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    apiKeys?: shared.ApiKey[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
