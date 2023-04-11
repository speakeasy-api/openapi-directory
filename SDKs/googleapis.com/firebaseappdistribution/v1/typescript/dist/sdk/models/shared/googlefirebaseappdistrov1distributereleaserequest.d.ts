import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for `DistributeRelease`.
 */
export declare class GoogleFirebaseAppdistroV1DistributeReleaseRequest extends SpeakeasyBase {
    /**
     * A list of group aliases (IDs) to be given access to this release. A combined maximum of 999 `testerEmails` and `groupAliases` can be specified in a single request.
     */
    groupAliases?: string[];
    /**
     * A list of tester email addresses to be given access to this release. A combined maximum of 999 `testerEmails` and `groupAliases` can be specified in a single request.
     */
    testerEmails?: string[];
}
