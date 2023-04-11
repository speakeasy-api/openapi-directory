import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List of users who have access to the content ID provided.
 */
export declare class UserPermission extends SpeakeasyBase {
    email?: string;
    isBuilder?: boolean;
    isReviewer?: boolean;
    name?: string;
}
