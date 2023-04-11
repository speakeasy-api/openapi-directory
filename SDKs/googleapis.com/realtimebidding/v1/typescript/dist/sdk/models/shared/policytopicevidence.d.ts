import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationNotCrawlableEvidence } from "./destinationnotcrawlableevidence";
import { DestinationNotWorkingEvidence } from "./destinationnotworkingevidence";
import { DestinationUrlEvidence } from "./destinationurlevidence";
import { DomainCallEvidence } from "./domaincallevidence";
import { DownloadSizeEvidence } from "./downloadsizeevidence";
import { HttpCallEvidence } from "./httpcallevidence";
import { HttpCookieEvidence } from "./httpcookieevidence";
/**
 * Evidence associated with a policy topic entry.
 */
export declare class PolicyTopicEvidence extends SpeakeasyBase {
    /**
     * Evidence that the creative's destination URL was not crawlable by Google.
     */
    destinationNotCrawlable?: DestinationNotCrawlableEvidence;
    /**
     * Evidence of the creative's destination URL not functioning properly or having been incorrectly set up.
     */
    destinationNotWorking?: DestinationNotWorkingEvidence;
    /**
     * The full landing page URL of the destination.
     */
    destinationUrl?: DestinationUrlEvidence;
    /**
     * Number of HTTP calls made by a creative, broken down by domain.
     */
    domainCall?: DomainCallEvidence;
    /**
     * Total download size and URL-level download size breakdown for resources in a creative.
     */
    downloadSize?: DownloadSizeEvidence;
    /**
     * HTTP calls made by a creative that resulted in policy violations.
     */
    httpCall?: HttpCallEvidence;
    /**
     * Evidence for HTTP cookie-related policy violations.
     */
    httpCookie?: HttpCookieEvidence;
}
