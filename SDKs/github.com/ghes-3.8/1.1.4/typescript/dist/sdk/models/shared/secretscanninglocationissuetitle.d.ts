import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an 'issue_title' secret scanning location type. This location type shows that a secret was detected in the title of an issue.
 */
export declare class SecretScanningLocationIssueTitle extends SpeakeasyBase {
    /**
     * The API URL to get the issue where the secret was detected.
     */
    issueTitleUrl: string;
}
