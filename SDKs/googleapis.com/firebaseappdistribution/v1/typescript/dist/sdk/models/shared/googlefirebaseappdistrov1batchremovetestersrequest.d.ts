import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for `BatchRemoveTesters`.
 */
export declare class GoogleFirebaseAppdistroV1BatchRemoveTestersRequest extends SpeakeasyBase {
    /**
     * Required. The email addresses of the tester resources to removed. A maximum of 999 and a minimum of 1 testers can be deleted in a batch.
     */
    emails?: string[];
}
