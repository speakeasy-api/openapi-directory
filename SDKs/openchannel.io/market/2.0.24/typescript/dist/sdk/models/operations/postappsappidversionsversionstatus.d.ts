import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The role initiating this status change. Can be either 'developer' or 'administrator' (default)
 */
export declare enum PostAppsAppIdVersionsVersionStatusModifiedByEnum {
    Developer = "developer",
    Administrator = "administrator"
}
/**
 * The new status for this app. Can be either 'inReview', 'approved', 'suspended' or 'rejected'
 */
export declare enum PostAppsAppIdVersionsVersionStatusStatusEnum {
    InReview = "inReview",
    Approved = "approved",
    Suspended = "suspended",
    Rejected = "rejected"
}
export declare class PostAppsAppIdVersionsVersionStatusRequest extends SpeakeasyBase {
    /**
     * The id of the App to be updated
     */
    appId: string;
    /**
     * The unique id of the developer that is modifying this app
     */
    developerId?: string;
    /**
     * The role initiating this status change. Can be either 'developer' or 'administrator' (default)
     */
    modifiedBy?: PostAppsAppIdVersionsVersionStatusModifiedByEnum;
    /**
     * The reason for this status change
     */
    reason?: string;
    /**
     * The new status for this app. Can be either 'inReview', 'approved', 'suspended' or 'rejected'
     */
    status?: PostAppsAppIdVersionsVersionStatusStatusEnum;
    /**
     * The version of the App to be updated
     */
    version: number;
}
export declare class PostAppsAppIdVersionsVersionStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
