import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGroupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    group?: shared.Group;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
