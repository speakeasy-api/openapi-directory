import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Request message for batch adding testers
 */
export declare class GoogleFirebaseAppdistroV1BatchAddTestersRequest extends SpeakeasyBase {
    /**
     * Required. The email addresses of the tester resources to create. A maximum of 999 and a minimum of 1 tester can be created in a batch.
     */
    emails?: string[];
}
