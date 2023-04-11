import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCoursesContentIdPermissionsRequest extends SpeakeasyBase {
    /**
     * The content Id
     */
    contentId: string;
}
export declare class GetCoursesContentIdPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of users who have access to the content ID provided.
     */
    userPermission?: shared.UserPermission;
}
