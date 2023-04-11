import { SpeakeasyBase } from "../../../internal/utils";
import { Occurrence } from "./occurrence";
/**
 * ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.
 */
export declare class ListVulnerabilitiesResponseV1 extends SpeakeasyBase {
    /**
     * A page token that can be used in a subsequent call to ListVulnerabilities to continue retrieving results.
     */
    nextPageToken?: string;
    /**
     * The list of Vulnerability Occurrences resulting from a scan.
     */
    occurrences?: Occurrence[];
}
