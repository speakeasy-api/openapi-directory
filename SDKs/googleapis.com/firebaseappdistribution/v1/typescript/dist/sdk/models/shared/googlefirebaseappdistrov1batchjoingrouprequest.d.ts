import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for `BatchJoinGroup`
 */
export declare class GoogleFirebaseAppdistroV1BatchJoinGroupRequest extends SpeakeasyBase {
    /**
     * Indicates whether to create tester resources based on `emails` if they don't exist yet.
     */
    createMissingTesters?: boolean;
    /**
     * Required. The emails of the testers to be added to the group. A maximum of 999 and a minimum of 1 tester can be created in a batch.
     */
    emails?: string[];
}
