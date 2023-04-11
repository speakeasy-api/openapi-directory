import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApiKeyGroupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ApiKeyGroupRequest extends SpeakeasyBase {
    /**
     * the api key id
     */
    clientId: string;
    /**
     * The api key service id
     */
    serviceId: string;
}
export declare class ApiKeyGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    group?: shared.Group;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
