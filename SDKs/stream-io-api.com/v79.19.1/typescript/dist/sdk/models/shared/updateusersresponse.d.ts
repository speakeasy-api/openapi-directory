import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class UpdateUsersResponse extends SpeakeasyBase {
    duration: string;
    /**
     * Object containing users
     */
    users: Record<string, Record<string, any>>;
}
