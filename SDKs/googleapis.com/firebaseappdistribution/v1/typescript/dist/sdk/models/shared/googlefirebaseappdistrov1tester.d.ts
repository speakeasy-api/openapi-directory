import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A person that can be invited to test apps in a Firebase project.
 */
export declare class GoogleFirebaseAppdistroV1TesterInput extends SpeakeasyBase {
    /**
     * The name of the tester associated with the Google account used to accept the tester invitation.
     */
    displayName?: string;
    /**
     * The resource names of the groups this tester belongs to.
     */
    groups?: string[];
    /**
     * The name of the tester resource. Format: `projects/{project_number}/testers/{email_address}`
     */
    name?: string;
}
/**
 * A person that can be invited to test apps in a Firebase project.
 */
export declare class GoogleFirebaseAppdistroV1Tester extends SpeakeasyBase {
    /**
     * The name of the tester associated with the Google account used to accept the tester invitation.
     */
    displayName?: string;
    /**
     * The resource names of the groups this tester belongs to.
     */
    groups?: string[];
    /**
     * Output only. The time the tester was last active. This is the most recent time the tester installed one of the apps. If they've never installed one or if the release no longer exists, this is the time the tester was added to the project.
     */
    lastActivityTime?: string;
    /**
     * The name of the tester resource. Format: `projects/{project_number}/testers/{email_address}`
     */
    name?: string;
}
