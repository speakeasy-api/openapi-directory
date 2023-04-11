import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class UsersResponse extends SpeakeasyBase {
    duration: string;
    /**
     * List of found users
     */
    users: Record<string, any>[];
}
