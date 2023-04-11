import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2JobTriggerInput } from "./googleprivacydlpv2jobtrigger";
/**
 * Request message for CreateJobTrigger.
 */
export declare class GooglePrivacyDlpV2CreateJobTriggerRequestInput extends SpeakeasyBase {
    /**
     * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
     */
    jobTrigger?: GooglePrivacyDlpV2JobTriggerInput;
    /**
     * Deprecated. This field has no effect.
     */
    locationId?: string;
    /**
     * The trigger id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
     */
    triggerId?: string;
}
