import { SpeakeasyBase } from "../../../internal/utils";
export declare class InitiatorJoined extends SpeakeasyBase {
    /**
     * `true` if the user was invited by an admin JWT. `user_id` and `member_id` will not exist if `true`
     */
    isSystem?: boolean;
    /**
     * Member ID
     */
    memberId?: string;
    /**
     * User ID
     */
    userId?: string;
}
export declare class Initiator extends SpeakeasyBase {
    joined?: InitiatorJoined;
}
