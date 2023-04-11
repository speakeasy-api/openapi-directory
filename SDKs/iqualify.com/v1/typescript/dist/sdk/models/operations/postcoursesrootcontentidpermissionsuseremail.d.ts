import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser extends SpeakeasyBase {
    isBuilder?: boolean;
    isReviewer?: boolean;
}
export declare class PostCoursesRootContentIdPermissionsUserEmailRequest extends SpeakeasyBase {
    requestBody: PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser;
    /**
     * The content Id
     */
    rootContentId: string;
    /**
     * The user email
     */
    userEmail: string;
}
/**
 * user successfully added to the course with the specified permission.
 */
export declare class PostCoursesRootContentIdPermissionsUserEmail201ApplicationJSON extends SpeakeasyBase {
    contentId?: string;
}
export declare class PostCoursesRootContentIdPermissionsUserEmailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * user successfully added to the course with the specified permission.
     */
    postCoursesRootContentIdPermissionsUserEmail201ApplicationJSONObject?: PostCoursesRootContentIdPermissionsUserEmail201ApplicationJSON;
}
