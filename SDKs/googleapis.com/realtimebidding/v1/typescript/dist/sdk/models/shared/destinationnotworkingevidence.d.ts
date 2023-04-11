import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DNS lookup errors.
 */
export declare enum DestinationNotWorkingEvidenceDnsErrorEnum {
    DnsErrorUnspecified = "DNS_ERROR_UNSPECIFIED",
    ErrorDns = "ERROR_DNS",
    GoogleCrawlerDnsIssue = "GOOGLE_CRAWLER_DNS_ISSUE"
}
/**
 * Page was crawled successfully, but was detected as either a page with no content or an error page.
 */
export declare enum DestinationNotWorkingEvidenceInvalidPageEnum {
    InvalidPageUnspecified = "INVALID_PAGE_UNSPECIFIED",
    EmptyOrErrorPage = "EMPTY_OR_ERROR_PAGE"
}
/**
 * Platform of the non-working URL.
 */
export declare enum DestinationNotWorkingEvidencePlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    PersonalComputer = "PERSONAL_COMPUTER",
    Android = "ANDROID",
    Ios = "IOS"
}
/**
 * HTTP redirect chain error.
 */
export declare enum DestinationNotWorkingEvidenceRedirectionErrorEnum {
    RedirectionErrorUnspecified = "REDIRECTION_ERROR_UNSPECIFIED",
    TooManyRedirects = "TOO_MANY_REDIRECTS",
    InvalidRedirect = "INVALID_REDIRECT",
    EmptyRedirect = "EMPTY_REDIRECT",
    RedirectErrorUnknown = "REDIRECT_ERROR_UNKNOWN"
}
/**
 * Rejected because of malformed URLs or invalid requests.
 */
export declare enum DestinationNotWorkingEvidenceUrlRejectedEnum {
    UrlRejectedUnspecified = "URL_REJECTED_UNSPECIFIED",
    BadRequest = "BAD_REQUEST",
    MalformedUrl = "MALFORMED_URL",
    UrlRejectedUnknown = "URL_REJECTED_UNKNOWN"
}
/**
 * Evidence of the creative's destination URL not functioning properly or having been incorrectly set up.
 */
export declare class DestinationNotWorkingEvidence extends SpeakeasyBase {
    /**
     * DNS lookup errors.
     */
    dnsError?: DestinationNotWorkingEvidenceDnsErrorEnum;
    /**
     * The full non-working URL.
     */
    expandedUrl?: string;
    /**
     * HTTP error code (for example, 404 or 5xx)
     */
    httpError?: number;
    /**
     * Page was crawled successfully, but was detected as either a page with no content or an error page.
     */
    invalidPage?: DestinationNotWorkingEvidenceInvalidPageEnum;
    /**
     * Approximate time when the ad destination was last checked.
     */
    lastCheckTime?: string;
    /**
     * Platform of the non-working URL.
     */
    platform?: DestinationNotWorkingEvidencePlatformEnum;
    /**
     * HTTP redirect chain error.
     */
    redirectionError?: DestinationNotWorkingEvidenceRedirectionErrorEnum;
    /**
     * Rejected because of malformed URLs or invalid requests.
     */
    urlRejected?: DestinationNotWorkingEvidenceUrlRejectedEnum;
}
