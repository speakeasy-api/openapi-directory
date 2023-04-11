import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2Code?: string;
    oauth2Implicit?: string;
}
export declare class GetGroupRequest extends SpeakeasyBase {
    /**
     * The ID of the group to retrieve.
     */
    groupId: string;
}
export declare class GetGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The group.
     */
    group?: shared.Group;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
