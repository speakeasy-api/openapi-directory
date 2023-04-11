import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteApiKeyFromGroupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteApiKeyFromGroupRequest extends SpeakeasyBase {
    /**
     * the api key id
     */
    clientId: string;
    /**
     * The api key group id
     */
    groupId: string;
}
export declare class DeleteApiKeyFromGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    deleted?: shared.Deleted;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
