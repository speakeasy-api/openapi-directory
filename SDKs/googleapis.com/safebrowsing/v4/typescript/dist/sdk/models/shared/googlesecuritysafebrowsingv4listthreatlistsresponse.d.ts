import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ThreatListDescriptor } from "./googlesecuritysafebrowsingv4threatlistdescriptor";
/**
 * Successful response
 */
export declare class GoogleSecuritySafebrowsingV4ListThreatListsResponse extends SpeakeasyBase {
    /**
     * The lists available for download by the client.
     */
    threatLists?: GoogleSecuritySafebrowsingV4ThreatListDescriptor[];
}
