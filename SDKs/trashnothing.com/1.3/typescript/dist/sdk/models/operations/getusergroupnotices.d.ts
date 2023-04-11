import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserGroupNoticesRequest extends SpeakeasyBase {
    /**
     * A comma separated list of group IDs to return notices for.  If unset, notices for all the users groups will be returned.
     */
    groupIds?: string;
}
export declare class GetUserGroupNoticesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The users group notices.
     */
    groupNotices?: shared.GroupNotice[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
