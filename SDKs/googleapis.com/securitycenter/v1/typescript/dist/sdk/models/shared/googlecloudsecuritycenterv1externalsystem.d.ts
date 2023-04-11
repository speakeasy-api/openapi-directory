import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Representation of third party SIEM/SOAR fields within SCC.
 */
export declare class GoogleCloudSecuritycenterV1ExternalSystem extends SpeakeasyBase {
    /**
     * References primary/secondary etc assignees in the external system.
     */
    assignees?: string[];
    /**
     * The most recent time when the corresponding finding's ticket/tracker was updated in the external system.
     */
    externalSystemUpdateTime?: string;
    /**
     * Identifier that's used to track the given finding in the external system.
     */
    externalUid?: string;
    /**
     * Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira"
     */
    name?: string;
    /**
     * Most recent status of the corresponding finding's ticket/tracker in the external system.
     */
    status?: string;
}
