import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Successful response
 */
export declare class UsersListResponse extends SpeakeasyBase {
    /**
     * A user of an enterprise.
     */
    user?: User[];
}
