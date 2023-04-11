import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for `BatchLeaveGroup`
 */
export declare class GoogleFirebaseAppdistroV1BatchLeaveGroupRequest extends SpeakeasyBase {
    /**
     * Required. The email addresses of the testers to be removed from the group. A maximum of 999 and a minimum of 1 testers can be removed in a batch.
     */
    emails?: string[];
}
