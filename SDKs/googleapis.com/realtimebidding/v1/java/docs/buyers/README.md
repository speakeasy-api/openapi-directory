# buyers

### Available Operations

* [realtimebiddingBuyersCreativesCreate](#realtimebiddingbuyerscreativescreate) - Creates a creative.
* [realtimebiddingBuyersCreativesList](#realtimebiddingbuyerscreativeslist) - Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
* [realtimebiddingBuyersCreativesPatch](#realtimebiddingbuyerscreativespatch) - Updates a creative.
* [realtimebiddingBuyersList](#realtimebiddingbuyerslist) - Lists all buyer account information the calling buyer user or service account is permissioned to manage.
* [realtimebiddingBuyersUserListsClose](#realtimebiddingbuyersuserlistsclose) - Change the status of a user list to CLOSED. This prevents new users from being added to the user list.
* [realtimebiddingBuyersUserListsCreate](#realtimebiddingbuyersuserlistscreate) - Create a new user list.
* [realtimebiddingBuyersUserListsGet](#realtimebiddingbuyersuserlistsget) - Gets a user list by its name.
* [realtimebiddingBuyersUserListsGetRemarketingTag](#realtimebiddingbuyersuserlistsgetremarketingtag) - Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
* [realtimebiddingBuyersUserListsList](#realtimebiddingbuyersuserlistslist) - Lists the user lists visible to the current user.
* [realtimebiddingBuyersUserListsOpen](#realtimebiddingbuyersuserlistsopen) - Change the status of a user list to OPEN. This allows new users to be added to the user list.
* [realtimebiddingBuyersUserListsUpdate](#realtimebiddingbuyersuserlistsupdate) - Update the given user list. Only user lists with URLRestrictions can be updated.

## realtimebiddingBuyersCreativesCreate

Creates a creative.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersCreativesCreateRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersCreativesCreateResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersCreativesCreateSecurity;
import org.openapis.openapi.models.shared.AdTechnologyProviders;
import org.openapis.openapi.models.shared.AdvertiserAndBrand;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeDeclaredAttributesEnum;
import org.openapis.openapi.models.shared.CreativeDeclaredRestrictedCategoriesEnum;
import org.openapis.openapi.models.shared.CreativeInput;
import org.openapis.openapi.models.shared.CreativeRestrictedCategoriesEnum;
import org.openapis.openapi.models.shared.CreativeServingDecision;
import org.openapis.openapi.models.shared.CreativeServingDecisionDetectedAttributesEnum;
import org.openapis.openapi.models.shared.DestinationNotCrawlableEvidence;
import org.openapis.openapi.models.shared.DestinationNotCrawlableEvidenceReasonEnum;
import org.openapis.openapi.models.shared.DestinationNotWorkingEvidence;
import org.openapis.openapi.models.shared.DestinationNotWorkingEvidenceDnsErrorEnum;
import org.openapis.openapi.models.shared.DestinationNotWorkingEvidenceInvalidPageEnum;
import org.openapis.openapi.models.shared.DestinationNotWorkingEvidencePlatformEnum;
import org.openapis.openapi.models.shared.DestinationNotWorkingEvidenceRedirectionErrorEnum;
import org.openapis.openapi.models.shared.DestinationNotWorkingEvidenceUrlRejectedEnum;
import org.openapis.openapi.models.shared.DestinationUrlEvidence;
import org.openapis.openapi.models.shared.DomainCallEvidence;
import org.openapis.openapi.models.shared.DomainCalls;
import org.openapis.openapi.models.shared.DownloadSizeEvidence;
import org.openapis.openapi.models.shared.HtmlContent;
import org.openapis.openapi.models.shared.HttpCallEvidence;
import org.openapis.openapi.models.shared.HttpCookieEvidence;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.MediaFile;
import org.openapis.openapi.models.shared.MediaFileMimeTypeEnum;
import org.openapis.openapi.models.shared.NativeContent;
import org.openapis.openapi.models.shared.PolicyCompliance;
import org.openapis.openapi.models.shared.PolicyComplianceStatusEnum;
import org.openapis.openapi.models.shared.PolicyTopicEntry;
import org.openapis.openapi.models.shared.PolicyTopicEvidence;
import org.openapis.openapi.models.shared.UrlDownloadSize;
import org.openapis.openapi.models.shared.VideoContent;
import org.openapis.openapi.models.shared.VideoMetadata;
import org.openapis.openapi.models.shared.VideoMetadataVastVersionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBuyersCreativesCreateRequest req = new RealtimebiddingBuyersCreativesCreateRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeInput = new CreativeInput() {{
                    adChoicesDestinationUrl = "provident";
                    advertiserName = "nobis";
                    agencyId = "libero";
                    creativeId = "delectus";
                    creativeServingDecision = new CreativeServingDecision() {{
                        adTechnologyProviders = new AdTechnologyProviders() {{
                            detectedGvlIds = new String[]{{
                                add("quos"),
                                add("aliquid"),
                            }};
                            detectedProviderIds = new String[]{{
                                add("dolorem"),
                            }};
                            unidentifiedProviderDomains = new String[]{{
                                add("qui"),
                            }};
                        }};;
                        chinaPolicyCompliance = new PolicyCompliance() {{
                            status = PolicyComplianceStatusEnum.PENDING_REVIEW;
                            topics = new org.openapis.openapi.models.shared.PolicyTopicEntry[]{{
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "cum";
                                                crawledUrl = "voluptate";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.TIMEOUT_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "amet";
                                                httpError = 680545;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "veritatis";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.BAD_REQUEST;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "odio";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "accusamus";
                                                        httpCallCount = 696344;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "voluptatibus";
                                                        httpCallCount = 377752;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 617658;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 542499;
                                                        normalizedUrl = "sit";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 854614;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("soluta"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("iusto"),
                                                    add("voluptate"),
                                                    add("dolorum"),
                                                }};
                                                maxCookieCount = 536579;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "omnis";
                                                crawledUrl = "necessitatibus";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.ROBOTED_DENIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "nihil";
                                                httpError = 216897;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "id";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.TOO_MANY_REDIRECTS;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "perferendis";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "optio";
                                                        httpCallCount = 881586;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 320017;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 383464;
                                                        normalizedUrl = "deserunt";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 588317;
                                                        normalizedUrl = "minima";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 831049;
                                                        normalizedUrl = "totam";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 628982;
                                                        normalizedUrl = "alias";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 872651;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("tempora"),
                                                    add("vel"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("officiis"),
                                                    add("qui"),
                                                    add("dolorum"),
                                                    add("a"),
                                                }};
                                                maxCookieCount = 456130;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "harum";
                                                crawledUrl = "iusto";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "tenetur";
                                                httpError = 229442;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "accusamus";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.TOO_MANY_REDIRECTS;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "sapiente";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "nihil";
                                                        httpCallCount = 25662;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "expedita";
                                                        httpCallCount = 207470;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "sed";
                                                        httpCallCount = 424685;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 730442;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 646265;
                                                        normalizedUrl = "quam";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 214880;
                                                        normalizedUrl = "incidunt";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 186458;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("maxime"),
                                                    add("pariatur"),
                                                    add("soluta"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("laborum"),
                                                }};
                                                maxCookieCount = 517379;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "incidunt";
                                    missingCertificate = false;
                                    policyTopic = "aspernatur";
                                }}),
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "distinctio";
                                                crawledUrl = "facilis";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "molestias";
                                                httpError = 840429;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "neque";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.BAD_REQUEST;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "sunt";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "nam";
                                                        httpCallCount = 940432;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "voluptatem";
                                                        httpCallCount = 765326;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 746994;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 92596;
                                                        normalizedUrl = "saepe";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 217450;
                                                        normalizedUrl = "veritatis";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 749255;
                                                        normalizedUrl = "quos";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 731694;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("aperiam"),
                                                    add("delectus"),
                                                    add("dolorem"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("labore"),
                                                    add("adipisci"),
                                                }};
                                                maxCookieCount = 677263;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "architecto";
                                    missingCertificate = false;
                                    policyTopic = "quae";
                                }}),
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "quas";
                                                crawledUrl = "itaque";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.REASON_UNSPECIFIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "repellendus";
                                                httpError = 785153;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "ut";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.ANDROID;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.INVALID_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "quae";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "odio";
                                                        httpCallCount = 580447;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "voluptatibus";
                                                        httpCallCount = 787542;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "vero";
                                                        httpCallCount = 606476;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 338159;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 961571;
                                                        normalizedUrl = "voluptate";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 231701;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("tenetur"),
                                                    add("dignissimos"),
                                                    add("hic"),
                                                    add("distinctio"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("odio"),
                                                    add("similique"),
                                                    add("facilis"),
                                                    add("vero"),
                                                }};
                                                maxCookieCount = 498140;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "dolore";
                                    missingCertificate = false;
                                    policyTopic = "quibusdam";
                                }}),
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "sequi";
                                                crawledUrl = "natus";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.ROBOTED_DENIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "voluptatibus";
                                                httpError = 347233;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "fugit";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECT_ERROR_UNKNOWN;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNKNOWN;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "iusto";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "ducimus";
                                                        httpCallCount = 4048;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "officia";
                                                        httpCallCount = 269479;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "ipsam";
                                                        httpCallCount = 410492;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "aspernatur";
                                                        httpCallCount = 428224;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 822118;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 189848;
                                                        normalizedUrl = "ex";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 511319;
                                                        normalizedUrl = "dicta";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 224317;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("quasi"),
                                                    add("ex"),
                                                    add("nulla"),
                                                    add("excepturi"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("nostrum"),
                                                    add("sapiente"),
                                                    add("quisquam"),
                                                    add("saepe"),
                                                }};
                                                maxCookieCount = 411372;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "impedit";
                                                crawledUrl = "corporis";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "inventore";
                                                httpError = 301831;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "quo";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECT_ERROR_UNKNOWN;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "minima";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "a";
                                                        httpCallCount = 725595;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 13948;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 533466;
                                                        normalizedUrl = "impedit";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 304582;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("accusamus"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("non"),
                                                }};
                                                maxCookieCount = 89603;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "dolorum";
                                                crawledUrl = "laborum";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNKNOWN;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "eum";
                                                httpError = 420539;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "quas";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECT_ERROR_UNKNOWN;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.BAD_REQUEST;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "libero";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "tempora";
                                                        httpCallCount = 256139;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 131482;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 55374;
                                                        normalizedUrl = "molestiae";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 301598;
                                                        normalizedUrl = "odio";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 262118;
                                                        normalizedUrl = "esse";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 456141;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("fuga"),
                                                    add("reprehenderit"),
                                                    add("quidem"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("ut"),
                                                    add("eum"),
                                                    add("suscipit"),
                                                    add("assumenda"),
                                                }};
                                                maxCookieCount = 181151;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "praesentium";
                                                crawledUrl = "quisquam";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.REASON_UNSPECIFIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "id";
                                                httpError = 696997;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "quo";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.EMPTY_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "eius";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "voluptas";
                                                        httpCallCount = 69859;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 587600;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 272822;
                                                        normalizedUrl = "debitis";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 370853;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("sequi"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("esse"),
                                                    add("recusandae"),
                                                    add("aperiam"),
                                                    add("distinctio"),
                                                }};
                                                maxCookieCount = 799796;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "dignissimos";
                                    missingCertificate = false;
                                    policyTopic = "inventore";
                                }}),
                            }};
                        }};;
                        dealsPolicyCompliance = new PolicyCompliance() {{
                            status = PolicyComplianceStatusEnum.DISAPPROVED;
                            topics = new org.openapis.openapi.models.shared.PolicyTopicEntry[]{{
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "aliquam";
                                                crawledUrl = "odio";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.TIMEOUT_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "sapiente";
                                                httpError = 174112;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "molestiae";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.EMPTY_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.BAD_REQUEST;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "quas";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "consequuntur";
                                                        httpCallCount = 536178;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "fugit";
                                                        httpCallCount = 681393;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "mollitia";
                                                        httpCallCount = 277596;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 539224;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 325685;
                                                        normalizedUrl = "nisi";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 147014;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("consequuntur"),
                                                    add("ratione"),
                                                    add("explicabo"),
                                                    add("saepe"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("atque"),
                                                    add("et"),
                                                    add("esse"),
                                                }};
                                                maxCookieCount = 910545;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "accusamus";
                                                crawledUrl = "veritatis";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.TIMEOUT_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "nam";
                                                httpError = 877131;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "quasi";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.INVALID_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "molestiae";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "occaecati";
                                                        httpCallCount = 327720;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "distinctio";
                                                        httpCallCount = 756779;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "sit";
                                                        httpCallCount = 636061;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 731398;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 766964;
                                                        normalizedUrl = "consequuntur";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 9766;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("quaerat"),
                                                    add("sapiente"),
                                                    add("consectetur"),
                                                    add("esse"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("provident"),
                                                    add("a"),
                                                    add("nulla"),
                                                }};
                                                maxCookieCount = 557811;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "esse";
                                                crawledUrl = "quasi";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNKNOWN;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "sint";
                                                httpError = 863023;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "quia";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECT_ERROR_UNKNOWN;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNKNOWN;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "veritatis";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "quasi";
                                                        httpCallCount = 628899;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 633608;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 949298;
                                                        normalizedUrl = "quae";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 936747;
                                                        normalizedUrl = "vel";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 447378;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("libero"),
                                                    add("illum"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("accusantium"),
                                                    add("aliquam"),
                                                    add("sapiente"),
                                                }};
                                                maxCookieCount = 119771;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "ullam";
                                                crawledUrl = "reprehenderit";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "aut";
                                                httpError = 531849;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "quibusdam";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.INVALID_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNKNOWN;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "dolorum";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "omnis";
                                                        httpCallCount = 945302;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 98478;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 92027;
                                                        normalizedUrl = "voluptate";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 55965;
                                                        normalizedUrl = "minima";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 86532;
                                                        normalizedUrl = "consectetur";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 237173;
                                                        normalizedUrl = "iste";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 839513;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("rem"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("laudantium"),
                                                }};
                                                maxCookieCount = 428796;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "mollitia";
                                    missingCertificate = false;
                                    policyTopic = "ab";
                                }}),
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "non";
                                                crawledUrl = "voluptatem";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "numquam";
                                                httpError = 771089;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "voluptas";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.INVALID_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "maiores";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "velit";
                                                        httpCallCount = 974257;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "voluptas";
                                                        httpCallCount = 990345;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "aperiam";
                                                        httpCallCount = 409054;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 310067;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 831520;
                                                        normalizedUrl = "officia";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 807023;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("officia"),
                                                    add("asperiores"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("quae"),
                                                    add("quaerat"),
                                                }};
                                                maxCookieCount = 783235;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "quod";
                                                crawledUrl = "labore";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.REASON_UNSPECIFIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "fuga";
                                                httpError = 662505;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "velit";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.ANDROID;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.EMPTY_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNKNOWN;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "totam";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "vel";
                                                        httpCallCount = 497678;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "quos";
                                                        httpCallCount = 427834;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "labore";
                                                        httpCallCount = 822560;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "facilis";
                                                        httpCallCount = 738227;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 414857;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 360545;
                                                        normalizedUrl = "reiciendis";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 828657;
                                                        normalizedUrl = "nemo";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 924967;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("aperiam"),
                                                    add("cum"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("in"),
                                                }};
                                                maxCookieCount = 348519;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "earum";
                                                crawledUrl = "facere";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "suscipit";
                                                httpError = 968972;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "saepe";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.TOO_MANY_REDIRECTS;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "asperiores";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "non";
                                                        httpCallCount = 228263;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 105906;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 950953;
                                                        normalizedUrl = "debitis";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 233420;
                                                        normalizedUrl = "corporis";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 689768;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("ipsa"),
                                                    add("voluptates"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("vitae"),
                                                    add("accusamus"),
                                                    add("similique"),
                                                }};
                                                maxCookieCount = 272437;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "aspernatur";
                                    missingCertificate = false;
                                    policyTopic = "voluptas";
                                }}),
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "voluptas";
                                                crawledUrl = "minima";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.ROBOTED_DENIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "adipisci";
                                                httpError = 795535;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "blanditiis";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.TOO_MANY_REDIRECTS;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.BAD_REQUEST;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "officiis";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "ullam";
                                                        httpCallCount = 237742;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "cum";
                                                        httpCallCount = 502389;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "quas";
                                                        httpCallCount = 942584;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "nesciunt";
                                                        httpCallCount = 633998;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 548519;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 519643;
                                                        normalizedUrl = "hic";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 348783;
                                                        normalizedUrl = "nobis";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 24619;
                                                        normalizedUrl = "rerum";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 148829;
                                                        normalizedUrl = "reiciendis";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 131852;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("facilis"),
                                                    add("voluptate"),
                                                    add("expedita"),
                                                    add("ab"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("dolore"),
                                                    add("laborum"),
                                                    add("sed"),
                                                }};
                                                maxCookieCount = 447516;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "commodi";
                                                crawledUrl = "quidem";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.REASON_UNSPECIFIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "unde";
                                                httpError = 100032;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "sapiente";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNKNOWN;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "perferendis";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "maiores";
                                                        httpCallCount = 274823;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "sed";
                                                        httpCallCount = 592231;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "eius";
                                                        httpCallCount = 896762;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 215529;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 579912;
                                                        normalizedUrl = "quos";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 975752;
                                                        normalizedUrl = "tempora";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 273009;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("reiciendis"),
                                                    add("ex"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("non"),
                                                }};
                                                maxCookieCount = 888044;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "praesentium";
                                    missingCertificate = false;
                                    policyTopic = "facilis";
                                }}),
                            }};
                        }};;
                        detectedAdvertisers = new org.openapis.openapi.models.shared.AdvertiserAndBrand[]{{
                            add(new AdvertiserAndBrand() {{
                                advertiserId = "incidunt";
                                advertiserName = "ipsam";
                                brandId = "debitis";
                                brandName = "rem";
                            }}),
                            add(new AdvertiserAndBrand() {{
                                advertiserId = "sit";
                                advertiserName = "nobis";
                                brandId = "error";
                                brandName = "veniam";
                            }}),
                        }};
                        detectedAttributes = new org.openapis.openapi.models.shared.CreativeServingDecisionDetectedAttributesEnum[]{{
                            add(CreativeServingDecisionDetectedAttributesEnum.IN_BANNER_VIDEO),
                            add(CreativeServingDecisionDetectedAttributesEnum.RENDERING_SIZELESS_ADX),
                        }};
                        detectedClickThroughUrls = new String[]{{
                            add("magni"),
                            add("aperiam"),
                            add("saepe"),
                            add("numquam"),
                        }};
                        detectedDomains = new String[]{{
                            add("in"),
                            add("officiis"),
                        }};
                        detectedLanguages = new String[]{{
                            add("laudantium"),
                        }};
                        detectedProductCategories = new Integer[]{{
                            add(510629),
                            add(740098),
                        }};
                        detectedSensitiveCategories = new Integer[]{{
                            add(680515),
                            add(530089),
                        }};
                        detectedVendorIds = new Integer[]{{
                            add(944708),
                            add(710529),
                            add(892863),
                        }};
                        lastStatusUpdate = "neque";
                        networkPolicyCompliance = new PolicyCompliance() {{
                            status = PolicyComplianceStatusEnum.APPROVED;
                            topics = new org.openapis.openapi.models.shared.PolicyTopicEntry[]{{
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "dolorum";
                                                crawledUrl = "corrupti";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNKNOWN;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "atque";
                                                httpError = 148268;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "fugiat";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.EMPTY_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "magnam";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "esse";
                                                        httpCallCount = 372679;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 24527;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 558065;
                                                        normalizedUrl = "repudiandae";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 361151;
                                                        normalizedUrl = "et";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 502710;
                                                        normalizedUrl = "ex";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 153627;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("vel"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("saepe"),
                                                    add("error"),
                                                }};
                                                maxCookieCount = 8511;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "incidunt";
                                                crawledUrl = "reiciendis";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "dicta";
                                                httpError = 99416;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "labore";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.ANDROID;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.INVALID_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "nam";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "laboriosam";
                                                        httpCallCount = 2703;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "amet";
                                                        httpCallCount = 647197;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "voluptate";
                                                        httpCallCount = 600392;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "reiciendis";
                                                        httpCallCount = 588740;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 833819;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 914791;
                                                        normalizedUrl = "perferendis";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 667285;
                                                        normalizedUrl = "quidem";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 440666;
                                                        normalizedUrl = "facere";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 685092;
                                                        normalizedUrl = "praesentium";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 648598;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("voluptatem"),
                                                    add("quisquam"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("quasi"),
                                                    add("atque"),
                                                    add("reprehenderit"),
                                                    add("asperiores"),
                                                }};
                                                maxCookieCount = 519952;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "suscipit";
                                                crawledUrl = "quidem";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNKNOWN;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "esse";
                                                httpError = 227759;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "ea";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.ANDROID;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.EMPTY_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNKNOWN;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "officiis";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "natus";
                                                        httpCallCount = 328303;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "aspernatur";
                                                        httpCallCount = 404425;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "maiores";
                                                        httpCallCount = 544647;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "at";
                                                        httpCallCount = 621693;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 502721;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 922348;
                                                        normalizedUrl = "atque";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 541381;
                                                        normalizedUrl = "sunt";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 923306;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("repellendus"),
                                                    add("labore"),
                                                    add("reiciendis"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("repudiandae"),
                                                }};
                                                maxCookieCount = 116098;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "accusantium";
                                    missingCertificate = false;
                                    policyTopic = "beatae";
                                }}),
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "enim";
                                                crawledUrl = "laboriosam";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "molestias";
                                                httpError = 300029;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "consequuntur";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.ANDROID;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECT_ERROR_UNKNOWN;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "in";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "eveniet";
                                                        httpCallCount = 580887;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 160230;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 661118;
                                                        normalizedUrl = "quis";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 440264;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("illo"),
                                                    add("corporis"),
                                                    add("quidem"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("non"),
                                                    add("vero"),
                                                    add("doloremque"),
                                                    add("iure"),
                                                }};
                                                maxCookieCount = 59944;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "totam";
                                    missingCertificate = false;
                                    policyTopic = "quae";
                                }}),
                            }};
                        }};;
                        platformPolicyCompliance = new PolicyCompliance() {{
                            status = PolicyComplianceStatusEnum.DISAPPROVED;
                            topics = new org.openapis.openapi.models.shared.PolicyTopicEntry[]{{
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "cum";
                                                crawledUrl = "iure";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNKNOWN;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "laborum";
                                                httpError = 715208;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "rem";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.TOO_MANY_REDIRECTS;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNKNOWN;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "alias";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "perspiciatis";
                                                        httpCallCount = 470649;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "mollitia";
                                                        httpCallCount = 378245;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 5189;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 970222;
                                                        normalizedUrl = "dolores";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 663866;
                                                        normalizedUrl = "minima";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 293144;
                                                        normalizedUrl = "dolorum";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 200364;
                                                        normalizedUrl = "quae";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 925703;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("quaerat"),
                                                    add("molestiae"),
                                                    add("ex"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("culpa"),
                                                    add("adipisci"),
                                                }};
                                                maxCookieCount = 890653;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "laudantium";
                                    missingCertificate = false;
                                    policyTopic = "eum";
                                }}),
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "recusandae";
                                                crawledUrl = "esse";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.TIMEOUT_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "eum";
                                                httpError = 970494;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "aspernatur";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "nostrum";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "provident";
                                                        httpCallCount = 821719;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "animi";
                                                        httpCallCount = 402767;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "aliquid";
                                                        httpCallCount = 37565;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 999278;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 351893;
                                                        normalizedUrl = "in";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 721407;
                                                        normalizedUrl = "earum";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 637583;
                                                        normalizedUrl = "laborum";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 813054;
                                                        normalizedUrl = "modi";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 976226;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("officiis"),
                                                    add("sapiente"),
                                                    add("cumque"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("rerum"),
                                                }};
                                                maxCookieCount = 272229;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "quis";
                                                crawledUrl = "inventore";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.REASON_UNSPECIFIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "quae";
                                                httpError = 21688;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "aspernatur";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.TOO_MANY_REDIRECTS;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "at";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "eos";
                                                        httpCallCount = 958741;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "eum";
                                                        httpCallCount = 117320;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "minima";
                                                        httpCallCount = 107004;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "cupiditate";
                                                        httpCallCount = 589695;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 936469;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 940782;
                                                        normalizedUrl = "illum";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 52508;
                                                        normalizedUrl = "earum";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 596211;
                                                        normalizedUrl = "maiores";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 891801;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("porro"),
                                                    add("suscipit"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("fugit"),
                                                }};
                                                maxCookieCount = 764995;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "fuga";
                                    missingCertificate = false;
                                    policyTopic = "ratione";
                                }}),
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "necessitatibus";
                                                crawledUrl = "nulla";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.REASON_UNSPECIFIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "et";
                                                httpError = 497777;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "occaecati";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.TOO_MANY_REDIRECTS;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "magni";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "nulla";
                                                        httpCallCount = 896582;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "ipsa";
                                                        httpCallCount = 271113;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "nihil";
                                                        httpCallCount = 473190;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "dicta";
                                                        httpCallCount = 479754;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 457059;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 979963;
                                                        normalizedUrl = "reiciendis";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 423706;
                                                        normalizedUrl = "architecto";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 857125;
                                                        normalizedUrl = "doloremque";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 117315;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("tempora"),
                                                    add("esse"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("consectetur"),
                                                    add("aliquid"),
                                                }};
                                                maxCookieCount = 58870;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "laborum";
                                                crawledUrl = "sunt";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "expedita";
                                                httpError = 399667;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "suscipit";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.BAD_REQUEST;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "voluptas";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "id";
                                                        httpCallCount = 70042;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "error";
                                                        httpCallCount = 822407;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "voluptates";
                                                        httpCallCount = 653421;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 671794;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 324083;
                                                        normalizedUrl = "deleniti";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 316220;
                                                        normalizedUrl = "vitae";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 833316;
                                                        normalizedUrl = "ex";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 775803;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("ut"),
                                                    add("ad"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("voluptatem"),
                                                    add("molestias"),
                                                    add("cum"),
                                                }};
                                                maxCookieCount = 399660;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "beatae";
                                                crawledUrl = "voluptatum";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.ROBOTED_DENIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "rerum";
                                                httpError = 665678;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "voluptatem";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECT_ERROR_UNKNOWN;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "fuga";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "debitis";
                                                        httpCallCount = 29190;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "alias";
                                                        httpCallCount = 534917;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "earum";
                                                        httpCallCount = 404244;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "sapiente";
                                                        httpCallCount = 524184;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 796320;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 992074;
                                                        normalizedUrl = "ratione";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 355225;
                                                        normalizedUrl = "perferendis";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 848341;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("impedit"),
                                                    add("quibusdam"),
                                                    add("nam"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("culpa"),
                                                    add("dolor"),
                                                }};
                                                maxCookieCount = 307376;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "inventore";
                                    missingCertificate = false;
                                    policyTopic = "deleniti";
                                }}),
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "tempora";
                                                crawledUrl = "dolor";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.REASON_UNSPECIFIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "sit";
                                                httpError = 265039;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "ab";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.ANDROID;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "fugiat";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "consequuntur";
                                                        httpCallCount = 55107;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "quas";
                                                        httpCallCount = 911198;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 773456;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 456410;
                                                        normalizedUrl = "necessitatibus";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 153369;
                                                        normalizedUrl = "veniam";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 199596;
                                                        normalizedUrl = "expedita";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 432984;
                                                        normalizedUrl = "vel";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 528234;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("exercitationem"),
                                                    add("ab"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("autem"),
                                                    add("nobis"),
                                                    add("laboriosam"),
                                                    add("recusandae"),
                                                }};
                                                maxCookieCount = 160393;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "voluptatem";
                                    missingCertificate = false;
                                    policyTopic = "exercitationem";
                                }}),
                            }};
                        }};;
                        russiaPolicyCompliance = new PolicyCompliance() {{
                            status = PolicyComplianceStatusEnum.CERTIFICATE_REQUIRED;
                            topics = new org.openapis.openapi.models.shared.PolicyTopicEntry[]{{
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "at";
                                                crawledUrl = "vero";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.ROBOTED_DENIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "sequi";
                                                httpError = 987349;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "optio";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.ANDROID;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.TOO_MANY_REDIRECTS;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.BAD_REQUEST;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "blanditiis";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "voluptas";
                                                        httpCallCount = 254025;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "nemo";
                                                        httpCallCount = 551079;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "eius";
                                                        httpCallCount = 131903;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 495970;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 681740;
                                                        normalizedUrl = "laudantium";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 277340;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("rem"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("dicta"),
                                                    add("nisi"),
                                                    add("consequuntur"),
                                                    add("consectetur"),
                                                }};
                                                maxCookieCount = 46806;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "cupiditate";
                                                crawledUrl = "reiciendis";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.ROBOTED_DENIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "omnis";
                                                httpError = 178580;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "iste";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "accusamus";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "distinctio";
                                                        httpCallCount = 608593;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "delectus";
                                                        httpCallCount = 328379;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "praesentium";
                                                        httpCallCount = 802692;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "magnam";
                                                        httpCallCount = 836364;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 549501;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 930819;
                                                        normalizedUrl = "commodi";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 520761;
                                                        normalizedUrl = "earum";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 267207;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("vero"),
                                                    add("voluptatem"),
                                                    add("ipsam"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("alias"),
                                                    add("quasi"),
                                                }};
                                                maxCookieCount = 247685;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "maiores";
                                    missingCertificate = false;
                                    policyTopic = "enim";
                                }}),
                            }};
                        }};;
                    }};;
                    declaredAttributes = new org.openapis.openapi.models.shared.CreativeDeclaredAttributesEnum[]{{
                        add(CreativeDeclaredAttributesEnum.NATIVE_ELIGIBILITY_NOT_ELIGIBLE),
                        add(CreativeDeclaredAttributesEnum.RICH_MEDIA_CAPABILITY_TYPE_HTML5),
                        add(CreativeDeclaredAttributesEnum.EXPANDING_DIRECTION_UP_OR_DOWN),
                    }};
                    declaredClickThroughUrls = new String[]{{
                        add("reprehenderit"),
                        add("est"),
                    }};
                    declaredRestrictedCategories = new org.openapis.openapi.models.shared.CreativeDeclaredRestrictedCategoriesEnum[]{{
                        add(CreativeDeclaredRestrictedCategoriesEnum.ALCOHOL),
                        add(CreativeDeclaredRestrictedCategoriesEnum.ALCOHOL),
                    }};
                    declaredVendorIds = new Integer[]{{
                        add(945027),
                        add(900103),
                        add(991891),
                        add(404306),
                    }};
                    html = new HtmlContent() {{
                        height = 376741;
                        snippet = "debitis";
                        width = 966148;
                    }};;
                    impressionTrackingUrls = new String[]{{
                        add("minus"),
                    }};
                    native_ = new NativeContent() {{
                        advertiserName = "fuga";
                        appIcon = new Image() {{
                            height = 675689;
                            url = "consectetur";
                            width = 244889;
                        }};;
                        body = "atque";
                        callToAction = "ipsum";
                        clickLinkUrl = "impedit";
                        clickTrackingUrl = "magni";
                        headline = "soluta";
                        image = new Image() {{
                            height = 922757;
                            url = "nam";
                            width = 294076;
                        }};;
                        logo = new Image() {{
                            height = 482892;
                            url = "voluptate";
                            width = 194023;
                        }};;
                        priceDisplayText = "dignissimos";
                        starRating = 2055.66;
                        videoUrl = "quo";
                        videoVastXml = "deleniti";
                    }};;
                    renderUrl = "quibusdam";
                    restrictedCategories = new org.openapis.openapi.models.shared.CreativeRestrictedCategoriesEnum[]{{
                        add(CreativeRestrictedCategoriesEnum.RESTRICTED_CATEGORY_UNSPECIFIED),
                        add(CreativeRestrictedCategoriesEnum.ALCOHOL),
                    }};
                    video = new VideoContent() {{
                        videoMetadata = new VideoMetadata() {{
                            duration = "vel";
                            isValidVast = false;
                            isVpaid = false;
                            mediaFiles = new org.openapis.openapi.models.shared.MediaFile[]{{
                                add(new MediaFile() {{
                                    bitrate = "quibusdam";
                                    mimeType = MediaFileMimeTypeEnum.MIME_VIDEO_XFLV;
                                }}),
                                add(new MediaFile() {{
                                    bitrate = "facere";
                                    mimeType = MediaFileMimeTypeEnum.MIME_APPLICATION_MPEGURL;
                                }}),
                            }};
                            skipOffset = "architecto";
                            vastVersion = VideoMetadataVastVersionEnum.VAST_VERSION40;
                        }};;
                        videoUrl = "quia";
                        videoVastXml = "porro";
                    }};;
                }};;
                accessToken = "aliquam";
                alt = AltEnum.JSON;
                callback = "illo";
                fields = "accusantium";
                key = "vel";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "vero";
                uploadProtocol = "excepturi";
            }};            

            RealtimebiddingBuyersCreativesCreateResponse res = sdk.buyers.realtimebiddingBuyersCreativesCreate(req, new RealtimebiddingBuyersCreativesCreateSecurity("eum", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creative != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBuyersCreativesList

Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersCreativesListRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersCreativesListResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersCreativesListSecurity;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersCreativesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBuyersCreativesListRequest req = new RealtimebiddingBuyersCreativesListRequest("ut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "earum";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "voluptatibus";
                filter = "iste";
                key = "itaque";
                oauthToken = "alias";
                pageSize = 391797L;
                pageToken = "itaque";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "laborum";
                uploadProtocol = "non";
                view = RealtimebiddingBuyersCreativesListViewEnum.CREATIVE_VIEW_UNSPECIFIED;
            }};            

            RealtimebiddingBuyersCreativesListResponse res = sdk.buyers.realtimebiddingBuyersCreativesList(req, new RealtimebiddingBuyersCreativesListSecurity("iusto", "sit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCreativesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBuyersCreativesPatch

Updates a creative.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersCreativesPatchRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersCreativesPatchResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersCreativesPatchSecurity;
import org.openapis.openapi.models.shared.AdTechnologyProviders;
import org.openapis.openapi.models.shared.AdvertiserAndBrand;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeDeclaredAttributesEnum;
import org.openapis.openapi.models.shared.CreativeDeclaredRestrictedCategoriesEnum;
import org.openapis.openapi.models.shared.CreativeInput;
import org.openapis.openapi.models.shared.CreativeRestrictedCategoriesEnum;
import org.openapis.openapi.models.shared.CreativeServingDecision;
import org.openapis.openapi.models.shared.CreativeServingDecisionDetectedAttributesEnum;
import org.openapis.openapi.models.shared.DestinationNotCrawlableEvidence;
import org.openapis.openapi.models.shared.DestinationNotCrawlableEvidenceReasonEnum;
import org.openapis.openapi.models.shared.DestinationNotWorkingEvidence;
import org.openapis.openapi.models.shared.DestinationNotWorkingEvidenceDnsErrorEnum;
import org.openapis.openapi.models.shared.DestinationNotWorkingEvidenceInvalidPageEnum;
import org.openapis.openapi.models.shared.DestinationNotWorkingEvidencePlatformEnum;
import org.openapis.openapi.models.shared.DestinationNotWorkingEvidenceRedirectionErrorEnum;
import org.openapis.openapi.models.shared.DestinationNotWorkingEvidenceUrlRejectedEnum;
import org.openapis.openapi.models.shared.DestinationUrlEvidence;
import org.openapis.openapi.models.shared.DomainCallEvidence;
import org.openapis.openapi.models.shared.DomainCalls;
import org.openapis.openapi.models.shared.DownloadSizeEvidence;
import org.openapis.openapi.models.shared.HtmlContent;
import org.openapis.openapi.models.shared.HttpCallEvidence;
import org.openapis.openapi.models.shared.HttpCookieEvidence;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.MediaFile;
import org.openapis.openapi.models.shared.MediaFileMimeTypeEnum;
import org.openapis.openapi.models.shared.NativeContent;
import org.openapis.openapi.models.shared.PolicyCompliance;
import org.openapis.openapi.models.shared.PolicyComplianceStatusEnum;
import org.openapis.openapi.models.shared.PolicyTopicEntry;
import org.openapis.openapi.models.shared.PolicyTopicEvidence;
import org.openapis.openapi.models.shared.UrlDownloadSize;
import org.openapis.openapi.models.shared.VideoContent;
import org.openapis.openapi.models.shared.VideoMetadata;
import org.openapis.openapi.models.shared.VideoMetadataVastVersionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBuyersCreativesPatchRequest req = new RealtimebiddingBuyersCreativesPatchRequest("doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeInput = new CreativeInput() {{
                    adChoicesDestinationUrl = "officia";
                    advertiserName = "recusandae";
                    agencyId = "ea";
                    creativeId = "quidem";
                    creativeServingDecision = new CreativeServingDecision() {{
                        adTechnologyProviders = new AdTechnologyProviders() {{
                            detectedGvlIds = new String[]{{
                                add("facilis"),
                                add("placeat"),
                            }};
                            detectedProviderIds = new String[]{{
                                add("expedita"),
                                add("deleniti"),
                                add("a"),
                            }};
                            unidentifiedProviderDomains = new String[]{{
                                add("ullam"),
                                add("unde"),
                            }};
                        }};;
                        chinaPolicyCompliance = new PolicyCompliance() {{
                            status = PolicyComplianceStatusEnum.CERTIFICATE_REQUIRED;
                            topics = new org.openapis.openapi.models.shared.PolicyTopicEntry[]{{
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "ipsam";
                                                crawledUrl = "corporis";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.ROBOTED_DENIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "esse";
                                                httpError = 288570;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "vero";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "dolorem";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "qui";
                                                        httpCallCount = 611328;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "ex";
                                                        httpCallCount = 367626;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 745233;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 526907;
                                                        normalizedUrl = "dolorum";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 487676;
                                                        normalizedUrl = "fugit";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 545;
                                                        normalizedUrl = "magni";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 425402;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("quae"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("neque"),
                                                    add("exercitationem"),
                                                }};
                                                maxCookieCount = 932394;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "et";
                                                crawledUrl = "ipsum";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.ROBOTED_DENIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "distinctio";
                                                httpError = 802894;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "quia";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.EMPTY_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "dicta";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "libero";
                                                        httpCallCount = 854460;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "officia";
                                                        httpCallCount = 554603;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "placeat";
                                                        httpCallCount = 25756;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 479385;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 914864;
                                                        normalizedUrl = "inventore";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 49348;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("dolore"),
                                                    add("eligendi"),
                                                    add("distinctio"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("autem"),
                                                }};
                                                maxCookieCount = 456688;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "dolores";
                                                crawledUrl = "assumenda";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.REASON_UNSPECIFIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "facere";
                                                httpError = 545918;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "provident";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECT_ERROR_UNKNOWN;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "sint";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "autem";
                                                        httpCallCount = 373511;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "rerum";
                                                        httpCallCount = 515638;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 357207;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 972912;
                                                        normalizedUrl = "cum";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 872303;
                                                        normalizedUrl = "alias";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 156653;
                                                        normalizedUrl = "quidem";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 684126;
                                                        normalizedUrl = "repudiandae";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 34070;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("officiis"),
                                                    add("eos"),
                                                    add("quibusdam"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("praesentium"),
                                                    add("odit"),
                                                }};
                                                maxCookieCount = 127688;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "corporis";
                                                crawledUrl = "error";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNKNOWN;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "recusandae";
                                                httpError = 630871;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "quidem";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "molestiae";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "cupiditate";
                                                        httpCallCount = 147801;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "numquam";
                                                        httpCallCount = 256916;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "nesciunt";
                                                        httpCallCount = 873557;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "officia";
                                                        httpCallCount = 491892;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 760744;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 359111;
                                                        normalizedUrl = "qui";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 708898;
                                                        normalizedUrl = "voluptatum";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 587375;
                                                        normalizedUrl = "minima";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 809594;
                                                        normalizedUrl = "enim";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 204072;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("minus"),
                                                    add("eum"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("corporis"),
                                                    add("magnam"),
                                                }};
                                                maxCookieCount = 914971;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "maiores";
                                    missingCertificate = false;
                                    policyTopic = "tempore";
                                }}),
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "libero";
                                                crawledUrl = "ratione";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "occaecati";
                                                httpError = 375994;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "velit";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.EMPTY_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.BAD_REQUEST;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "est";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "delectus";
                                                        httpCallCount = 735894;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "vero";
                                                        httpCallCount = 141506;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "repellat";
                                                        httpCallCount = 865946;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "nemo";
                                                        httpCallCount = 441321;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 45234;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 325297;
                                                        normalizedUrl = "in";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 496915;
                                                        normalizedUrl = "excepturi";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 172195;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("veritatis"),
                                                    add("ducimus"),
                                                    add("voluptate"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("itaque"),
                                                    add("similique"),
                                                    add("optio"),
                                                    add("ex"),
                                                }};
                                                maxCookieCount = 311486;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "commodi";
                                    missingCertificate = false;
                                    policyTopic = "officiis";
                                }}),
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "quidem";
                                                crawledUrl = "exercitationem";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.TIMEOUT_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "modi";
                                                httpError = 59383;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "vero";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECT_ERROR_UNKNOWN;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "dicta";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "veniam";
                                                        httpCallCount = 659268;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "dolores";
                                                        httpCallCount = 724994;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "dicta";
                                                        httpCallCount = 164488;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "necessitatibus";
                                                        httpCallCount = 748224;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 56877;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 980486;
                                                        normalizedUrl = "veritatis";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 96450;
                                                        normalizedUrl = "laboriosam";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 863471;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("excepturi"),
                                                    add("occaecati"),
                                                    add("nemo"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("nostrum"),
                                                    add("doloribus"),
                                                }};
                                                maxCookieCount = 757364;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "sint";
                                                crawledUrl = "enim";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNKNOWN;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "quas";
                                                httpError = 517326;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "odio";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECT_ERROR_UNKNOWN;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "quos";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "assumenda";
                                                        httpCallCount = 731634;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "libero";
                                                        httpCallCount = 244032;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "doloremque";
                                                        httpCallCount = 963976;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 773110;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 216870;
                                                        normalizedUrl = "adipisci";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 903150;
                                                        normalizedUrl = "deserunt";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 42924;
                                                        normalizedUrl = "quis";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 333072;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("architecto"),
                                                    add("cupiditate"),
                                                    add("molestiae"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("possimus"),
                                                    add("non"),
                                                    add("magnam"),
                                                    add("itaque"),
                                                }};
                                                maxCookieCount = 150935;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "asperiores";
                                                crawledUrl = "veniam";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.REASON_UNSPECIFIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "laudantium";
                                                httpError = 140384;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "amet";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "facilis";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "nisi";
                                                        httpCallCount = 977518;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "quaerat";
                                                        httpCallCount = 503748;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "distinctio";
                                                        httpCallCount = 392430;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 335977;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 727771;
                                                        normalizedUrl = "minus";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 815200;
                                                        normalizedUrl = "facilis";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 217663;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("voluptatibus"),
                                                    add("voluptatibus"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("debitis"),
                                                }};
                                                maxCookieCount = 290841;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "rerum";
                                                crawledUrl = "eos";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.TIMEOUT_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "neque";
                                                httpError = 480061;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "rem";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECT_ERROR_UNKNOWN;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "officiis";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "dolor";
                                                        httpCallCount = 118041;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "error";
                                                        httpCallCount = 784731;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 111496;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 458970;
                                                        normalizedUrl = "fugiat";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 322333;
                                                        normalizedUrl = "aspernatur";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 316501;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("iusto"),
                                                    add("dignissimos"),
                                                    add("libero"),
                                                    add("illo"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("incidunt"),
                                                }};
                                                maxCookieCount = 879174;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "saepe";
                                    missingCertificate = false;
                                    policyTopic = "tempore";
                                }}),
                            }};
                        }};;
                        dealsPolicyCompliance = new PolicyCompliance() {{
                            status = PolicyComplianceStatusEnum.PENDING_REVIEW;
                            topics = new org.openapis.openapi.models.shared.PolicyTopicEntry[]{{
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "earum";
                                                crawledUrl = "reprehenderit";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.TIMEOUT_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "repellat";
                                                httpError = 789770;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "nihil";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.ANDROID;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.BAD_REQUEST;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "assumenda";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "quisquam";
                                                        httpCallCount = 591065;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "laudantium";
                                                        httpCallCount = 921719;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 9683;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 136357;
                                                        normalizedUrl = "nam";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 711991;
                                                        normalizedUrl = "quas";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 590858;
                                                        normalizedUrl = "repudiandae";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 700045;
                                                        normalizedUrl = "dignissimos";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 360934;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("similique"),
                                                    add("repellendus"),
                                                    add("iure"),
                                                    add("dolorem"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("impedit"),
                                                    add("commodi"),
                                                }};
                                                maxCookieCount = 12171;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "voluptatem";
                                                crawledUrl = "ad";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.REASON_UNSPECIFIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "illum";
                                                httpError = 506863;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "cum";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "laudantium";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "earum";
                                                        httpCallCount = 479707;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 228646;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 677141;
                                                        normalizedUrl = "necessitatibus";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 592880;
                                                        normalizedUrl = "repudiandae";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 10063;
                                                        normalizedUrl = "nemo";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 475826;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("facilis"),
                                                    add("corrupti"),
                                                    add("aperiam"),
                                                    add("sint"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("eos"),
                                                    add("totam"),
                                                    add("dicta"),
                                                    add("voluptatem"),
                                                }};
                                                maxCookieCount = 244376;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "dolor";
                                                crawledUrl = "sunt";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNKNOWN;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "occaecati";
                                                httpError = 539813;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "at";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.EMPTY_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.BAD_REQUEST;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "voluptatem";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "rerum";
                                                        httpCallCount = 411615;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 46791;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 998026;
                                                        normalizedUrl = "velit";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 784115;
                                                        normalizedUrl = "provident";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 231382;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("dignissimos"),
                                                    add("consectetur"),
                                                    add("soluta"),
                                                    add("natus"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("officia"),
                                                    add("amet"),
                                                    add("tenetur"),
                                                    add("aspernatur"),
                                                }};
                                                maxCookieCount = 778276;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "itaque";
                                                crawledUrl = "illum";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.ROBOTED_DENIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "vero";
                                                httpError = 185348;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "repellat";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.BAD_REQUEST;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "nihil";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "ab";
                                                        httpCallCount = 72754;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "hic";
                                                        httpCallCount = 644479;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 964925;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 719389;
                                                        normalizedUrl = "in";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 349993;
                                                        normalizedUrl = "labore";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 254382;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("modi"),
                                                    add("in"),
                                                    add("explicabo"),
                                                    add("accusamus"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("aperiam"),
                                                    add("odit"),
                                                    add("deleniti"),
                                                }};
                                                maxCookieCount = 316730;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "voluptate";
                                    missingCertificate = false;
                                    policyTopic = "similique";
                                }}),
                            }};
                        }};;
                        detectedAdvertisers = new org.openapis.openapi.models.shared.AdvertiserAndBrand[]{{
                            add(new AdvertiserAndBrand() {{
                                advertiserId = "libero";
                                advertiserName = "magnam";
                                brandId = "sit";
                                brandName = "modi";
                            }}),
                            add(new AdvertiserAndBrand() {{
                                advertiserId = "eum";
                                advertiserName = "nesciunt";
                                brandId = "mollitia";
                                brandName = "dignissimos";
                            }}),
                        }};
                        detectedAttributes = new org.openapis.openapi.models.shared.CreativeServingDecisionDetectedAttributesEnum[]{{
                            add(CreativeServingDecisionDetectedAttributesEnum.EXPANDING_DIRECTION_DOWN_LEFT),
                            add(CreativeServingDecisionDetectedAttributesEnum.EXPANDING_DIRECTION_LEFT_OR_RIGHT),
                            add(CreativeServingDecisionDetectedAttributesEnum.EXPANDING_DIRECTION_UP_RIGHT),
                            add(CreativeServingDecisionDetectedAttributesEnum.RENDERING_SIZELESS_ADX),
                        }};
                        detectedClickThroughUrls = new String[]{{
                            add("modi"),
                        }};
                        detectedDomains = new String[]{{
                            add("aut"),
                        }};
                        detectedLanguages = new String[]{{
                            add("odio"),
                            add("commodi"),
                            add("numquam"),
                            add("dolorum"),
                        }};
                        detectedProductCategories = new Integer[]{{
                            add(452399),
                            add(232772),
                            add(200637),
                            add(310629),
                        }};
                        detectedSensitiveCategories = new Integer[]{{
                            add(791228),
                            add(122662),
                            add(715143),
                            add(481375),
                        }};
                        detectedVendorIds = new Integer[]{{
                            add(91728),
                            add(704948),
                            add(229276),
                        }};
                        lastStatusUpdate = "autem";
                        networkPolicyCompliance = new PolicyCompliance() {{
                            status = PolicyComplianceStatusEnum.APPROVED;
                            topics = new org.openapis.openapi.models.shared.PolicyTopicEntry[]{{
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "aut";
                                                crawledUrl = "quos";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.TIMEOUT_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "veritatis";
                                                httpError = 60778;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "saepe";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.EMPTY_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNKNOWN;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "officia";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "voluptatem";
                                                        httpCallCount = 664;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 910073;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 27982;
                                                        normalizedUrl = "incidunt";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 185448;
                                                        normalizedUrl = "qui";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 895912;
                                                        normalizedUrl = "harum";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 126727;
                                                        normalizedUrl = "beatae";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 397988;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("optio"),
                                                    add("voluptatibus"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("officia"),
                                                    add("libero"),
                                                    add("totam"),
                                                }};
                                                maxCookieCount = 192846;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "aliquid";
                                                crawledUrl = "ea";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.ROBOTED_DENIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "odit";
                                                httpError = 243623;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "repellat";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.EMPTY_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "accusamus";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "nisi";
                                                        httpCallCount = 700856;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 924840;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 251627;
                                                        normalizedUrl = "rem";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 157884;
                                                        normalizedUrl = "ullam";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 786860;
                                                        normalizedUrl = "dicta";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 973017;
                                                        normalizedUrl = "eligendi";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 62035;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("architecto"),
                                                    add("architecto"),
                                                    add("enim"),
                                                    add("optio"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("perferendis"),
                                                    add("facilis"),
                                                    add("reiciendis"),
                                                }};
                                                maxCookieCount = 955551;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "iste";
                                                crawledUrl = "dicta";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.TIMEOUT_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "dolore";
                                                httpError = 266284;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "maxime";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNKNOWN;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "vero";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "impedit";
                                                        httpCallCount = 783397;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "accusamus";
                                                        httpCallCount = 518990;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "reiciendis";
                                                        httpCallCount = 66074;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "sint";
                                                        httpCallCount = 472414;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 458412;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 485031;
                                                        normalizedUrl = "nesciunt";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 895513;
                                                        normalizedUrl = "vel";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 208683;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("voluptas"),
                                                    add("consequuntur"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("reprehenderit"),
                                                    add("distinctio"),
                                                    add("eius"),
                                                }};
                                                maxCookieCount = 56372;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "rem";
                                    missingCertificate = false;
                                    policyTopic = "maiores";
                                }}),
                            }};
                        }};;
                        platformPolicyCompliance = new PolicyCompliance() {{
                            status = PolicyComplianceStatusEnum.STATUS_UNSPECIFIED;
                            topics = new org.openapis.openapi.models.shared.PolicyTopicEntry[]{{
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "neque";
                                                crawledUrl = "facere";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "doloribus";
                                                httpError = 851809;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "delectus";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "similique";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "repellat";
                                                        httpCallCount = 363214;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 987890;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 603323;
                                                        normalizedUrl = "incidunt";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 128021;
                                                        normalizedUrl = "ipsam";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 583193;
                                                        normalizedUrl = "optio";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 2064;
                                                        normalizedUrl = "quidem";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 198911;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("sapiente"),
                                                    add("consequuntur"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("debitis"),
                                                    add("officia"),
                                                }};
                                                maxCookieCount = 575062;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "ut";
                                                crawledUrl = "numquam";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNKNOWN;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "libero";
                                                httpError = 448386;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "ex";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "hic";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "quisquam";
                                                        httpCallCount = 221218;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "ducimus";
                                                        httpCallCount = 683727;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 326903;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 181476;
                                                        normalizedUrl = "aliquid";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 166289;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("adipisci"),
                                                    add("praesentium"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("exercitationem"),
                                                }};
                                                maxCookieCount = 709701;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "facilis";
                                                crawledUrl = "impedit";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.REASON_UNSPECIFIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "culpa";
                                                httpError = 159393;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "deserunt";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.TOO_MANY_REDIRECTS;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNKNOWN;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "itaque";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "quisquam";
                                                        httpCallCount = 316550;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "doloribus";
                                                        httpCallCount = 826806;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "officiis";
                                                        httpCallCount = 103990;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "alias";
                                                        httpCallCount = 633982;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 60335;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 898193;
                                                        normalizedUrl = "quia";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 118932;
                                                        normalizedUrl = "vel";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 595584;
                                                        normalizedUrl = "debitis";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 354821;
                                                        normalizedUrl = "architecto";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 33771;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("veritatis"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("cumque"),
                                                    add("iure"),
                                                    add("quibusdam"),
                                                }};
                                                maxCookieCount = 798690;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "nemo";
                                                crawledUrl = "recusandae";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "dignissimos";
                                                httpError = 388404;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "odio";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.ANDROID;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.INVALID_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "doloribus";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "quidem";
                                                        httpCallCount = 932080;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "laboriosam";
                                                        httpCallCount = 601714;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "modi";
                                                        httpCallCount = 595198;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 944626;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 135548;
                                                        normalizedUrl = "libero";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 720266;
                                                        normalizedUrl = "incidunt";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 925395;
                                                        normalizedUrl = "quod";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 664666;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("autem"),
                                                    add("quo"),
                                                    add("nesciunt"),
                                                    add("illum"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("illum"),
                                                    add("facilis"),
                                                }};
                                                maxCookieCount = 247618;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "mollitia";
                                    missingCertificate = false;
                                    policyTopic = "assumenda";
                                }}),
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "distinctio";
                                                crawledUrl = "pariatur";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "laborum";
                                                httpError = 911451;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "incidunt";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.TOO_MANY_REDIRECTS;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "suscipit";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "molestias";
                                                        httpCallCount = 672889;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "est";
                                                        httpCallCount = 577413;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "labore";
                                                        httpCallCount = 777378;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 19462;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 399222;
                                                        normalizedUrl = "magnam";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 308528;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("hic"),
                                                    add("nostrum"),
                                                    add("officiis"),
                                                    add("unde"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("error"),
                                                    add("mollitia"),
                                                    add("magnam"),
                                                    add("nostrum"),
                                                }};
                                                maxCookieCount = 460909;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "corrupti";
                                                crawledUrl = "fuga";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNKNOWN;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "quasi";
                                                httpError = 647218;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "laboriosam";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNKNOWN;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "necessitatibus";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "consequatur";
                                                        httpCallCount = 51007;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "architecto";
                                                        httpCallCount = 627161;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "porro";
                                                        httpCallCount = 502453;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "quae";
                                                        httpCallCount = 169819;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 885797;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 898111;
                                                        normalizedUrl = "impedit";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 55981;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("a"),
                                                    add("maiores"),
                                                    add("laudantium"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("alias"),
                                                    add("asperiores"),
                                                    add("rem"),
                                                    add("dicta"),
                                                }};
                                                maxCookieCount = 380595;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "earum";
                                                crawledUrl = "doloribus";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.DNS_ERROR_UNSPECIFIED;
                                                expandedUrl = "esse";
                                                httpError = 446547;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "quasi";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECT_ERROR_UNKNOWN;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "accusantium";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "impedit";
                                                        httpCallCount = 104736;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 278329;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 139133;
                                                        normalizedUrl = "corporis";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 701441;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("error"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("accusantium"),
                                                    add("id"),
                                                }};
                                                maxCookieCount = 388169;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "ex";
                                                crawledUrl = "quas";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.REASON_UNSPECIFIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "quae";
                                                httpError = 631719;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "quam";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PLATFORM_UNSPECIFIED;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.EMPTY_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNKNOWN;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "omnis";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "nesciunt";
                                                        httpCallCount = 805463;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 337841;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 303253;
                                                        normalizedUrl = "excepturi";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 980410;
                                                        normalizedUrl = "laudantium";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 243904;
                                                        normalizedUrl = "reiciendis";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 230305;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("ipsa"),
                                                    add("quisquam"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("quas"),
                                                    add("molestiae"),
                                                    add("aliquid"),
                                                    add("asperiores"),
                                                }};
                                                maxCookieCount = 955466;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "nobis";
                                    missingCertificate = false;
                                    policyTopic = "perspiciatis";
                                }}),
                            }};
                        }};;
                        russiaPolicyCompliance = new PolicyCompliance() {{
                            status = PolicyComplianceStatusEnum.STATUS_UNSPECIFIED;
                            topics = new org.openapis.openapi.models.shared.PolicyTopicEntry[]{{
                                add(new PolicyTopicEntry() {{
                                    evidences = new org.openapis.openapi.models.shared.PolicyTopicEvidence[]{{
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "commodi";
                                                crawledUrl = "eveniet";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.ROBOTED_DENIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "quidem";
                                                httpError = 265930;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "fugit";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.PERSONAL_COMPUTER;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNKNOWN;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "asperiores";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "blanditiis";
                                                        httpCallCount = 573610;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "repellat";
                                                        httpCallCount = 955047;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 658604;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 930429;
                                                        normalizedUrl = "nulla";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 643419;
                                                        normalizedUrl = "corporis";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 246577;
                                                        normalizedUrl = "officiis";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 315022;
                                                        normalizedUrl = "officia";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 902979;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("repudiandae"),
                                                    add("accusantium"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("impedit"),
                                                    add("quasi"),
                                                    add("blanditiis"),
                                                }};
                                                maxCookieCount = 260911;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "quisquam";
                                                crawledUrl = "eos";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.ROBOTED_DENIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "minus";
                                                httpError = 154389;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "reprehenderit";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.INVALID_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "amet";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "amet";
                                                        httpCallCount = 675126;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "modi";
                                                        httpCallCount = 21358;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 897058;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 564627;
                                                        normalizedUrl = "dolore";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 125811;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("neque"),
                                                    add("odit"),
                                                    add("earum"),
                                                    add("veniam"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("eaque"),
                                                    add("exercitationem"),
                                                }};
                                                maxCookieCount = 331269;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "nihil";
                                                crawledUrl = "ad";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.UNREACHABLE_ROBOTS;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.GOOGLE_CRAWLER_DNS_ISSUE;
                                                expandedUrl = "quis";
                                                httpError = 845154;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.INVALID_PAGE_UNSPECIFIED;
                                                lastCheckTime = "suscipit";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.IOS;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.REDIRECTION_ERROR_UNSPECIFIED;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.MALFORMED_URL;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "repellendus";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "id";
                                                        httpCallCount = 958146;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 152364;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 996072;
                                                        normalizedUrl = "repudiandae";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 100233;
                                                        normalizedUrl = "adipisci";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 867115;
                                                        normalizedUrl = "harum";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 294266;
                                                        normalizedUrl = "voluptatibus";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 435353;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("minus"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("dolorum"),
                                                    add("velit"),
                                                    add("earum"),
                                                }};
                                                maxCookieCount = 510020;
                                            }};
                                        }}),
                                        add(new PolicyTopicEvidence() {{
                                            destinationNotCrawlable = new DestinationNotCrawlableEvidence() {{
                                                crawlTime = "error";
                                                crawledUrl = "non";
                                                reason = DestinationNotCrawlableEvidenceReasonEnum.REASON_UNSPECIFIED;
                                            }};
                                            destinationNotWorking = new DestinationNotWorkingEvidence() {{
                                                dnsError = DestinationNotWorkingEvidenceDnsErrorEnum.ERROR_DNS;
                                                expandedUrl = "accusamus";
                                                httpError = 687589;
                                                invalidPage = DestinationNotWorkingEvidenceInvalidPageEnum.EMPTY_OR_ERROR_PAGE;
                                                lastCheckTime = "doloremque";
                                                platform = DestinationNotWorkingEvidencePlatformEnum.ANDROID;
                                                redirectionError = DestinationNotWorkingEvidenceRedirectionErrorEnum.INVALID_REDIRECT;
                                                urlRejected = DestinationNotWorkingEvidenceUrlRejectedEnum.URL_REJECTED_UNSPECIFIED;
                                            }};
                                            destinationUrl = new DestinationUrlEvidence() {{
                                                destinationUrl = "deserunt";
                                            }};
                                            domainCall = new DomainCallEvidence() {{
                                                topHttpCallDomains = new org.openapis.openapi.models.shared.DomainCalls[]{{
                                                    add(new DomainCalls() {{
                                                        domain = "excepturi";
                                                        httpCallCount = 167435;
                                                    }}),
                                                    add(new DomainCalls() {{
                                                        domain = "tempora";
                                                        httpCallCount = 821904;
                                                    }}),
                                                }};
                                                totalHttpCallCount = 220824;
                                            }};
                                            downloadSize = new DownloadSizeEvidence() {{
                                                topUrlDownloadSizeBreakdowns = new org.openapis.openapi.models.shared.UrlDownloadSize[]{{
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 153582;
                                                        normalizedUrl = "accusamus";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 759874;
                                                        normalizedUrl = "delectus";
                                                    }}),
                                                    add(new UrlDownloadSize() {{
                                                        downloadSizeKb = 792719;
                                                        normalizedUrl = "quo";
                                                    }}),
                                                }};
                                                totalDownloadSizeKb = 550338;
                                            }};
                                            httpCall = new HttpCallEvidence() {{
                                                urls = new String[]{{
                                                    add("voluptatum"),
                                                    add("iste"),
                                                    add("corporis"),
                                                    add("accusantium"),
                                                }};
                                            }};
                                            httpCookie = new HttpCookieEvidence() {{
                                                cookieNames = new String[]{{
                                                    add("aut"),
                                                }};
                                                maxCookieCount = 984031;
                                            }};
                                        }}),
                                    }};
                                    helpCenterUrl = "nostrum";
                                    missingCertificate = false;
                                    policyTopic = "at";
                                }}),
                            }};
                        }};;
                    }};;
                    declaredAttributes = new org.openapis.openapi.models.shared.CreativeDeclaredAttributesEnum[]{{
                        add(CreativeDeclaredAttributesEnum.EXPANDING_DIRECTION_UP),
                        add(CreativeDeclaredAttributesEnum.NATIVE_ELIGIBILITY_NOT_ELIGIBLE),
                        add(CreativeDeclaredAttributesEnum.CREATIVE_TYPE_VAST_VIDEO),
                        add(CreativeDeclaredAttributesEnum.RENDERING_SIZELESS_ADX),
                    }};
                    declaredClickThroughUrls = new String[]{{
                        add("quae"),
                        add("quos"),
                        add("aperiam"),
                    }};
                    declaredRestrictedCategories = new org.openapis.openapi.models.shared.CreativeDeclaredRestrictedCategoriesEnum[]{{
                        add(CreativeDeclaredRestrictedCategoriesEnum.ALCOHOL),
                        add(CreativeDeclaredRestrictedCategoriesEnum.RESTRICTED_CATEGORY_UNSPECIFIED),
                    }};
                    declaredVendorIds = new Integer[]{{
                        add(788165),
                        add(557987),
                    }};
                    html = new HtmlContent() {{
                        height = 162450;
                        snippet = "maiores";
                        width = 81581;
                    }};;
                    impressionTrackingUrls = new String[]{{
                        add("laudantium"),
                        add("est"),
                    }};
                    native_ = new NativeContent() {{
                        advertiserName = "dolor";
                        appIcon = new Image() {{
                            height = 400879;
                            url = "consectetur";
                            width = 768195;
                        }};;
                        body = "rem";
                        callToAction = "voluptatum";
                        clickLinkUrl = "ducimus";
                        clickTrackingUrl = "adipisci";
                        headline = "recusandae";
                        image = new Image() {{
                            height = 271306;
                            url = "blanditiis";
                            width = 258059;
                        }};;
                        logo = new Image() {{
                            height = 196374;
                            url = "voluptatum";
                            width = 27078;
                        }};;
                        priceDisplayText = "rerum";
                        starRating = 841.78;
                        videoUrl = "tenetur";
                        videoVastXml = "autem";
                    }};;
                    renderUrl = "quidem";
                    restrictedCategories = new org.openapis.openapi.models.shared.CreativeRestrictedCategoriesEnum[]{{
                        add(CreativeRestrictedCategoriesEnum.ALCOHOL),
                        add(CreativeRestrictedCategoriesEnum.ALCOHOL),
                        add(CreativeRestrictedCategoriesEnum.RESTRICTED_CATEGORY_UNSPECIFIED),
                    }};
                    video = new VideoContent() {{
                        videoMetadata = new VideoMetadata() {{
                            duration = "nihil";
                            isValidVast = false;
                            isVpaid = false;
                            mediaFiles = new org.openapis.openapi.models.shared.MediaFile[]{{
                                add(new MediaFile() {{
                                    bitrate = "animi";
                                    mimeType = MediaFileMimeTypeEnum.MIME_VIDEO3_GPP;
                                }}),
                                add(new MediaFile() {{
                                    bitrate = "alias";
                                    mimeType = MediaFileMimeTypeEnum.MIME_APPLICATION_SILVERLIGHT;
                                }}),
                            }};
                            skipOffset = "aut";
                            vastVersion = VideoMetadataVastVersionEnum.VAST_VERSION10;
                        }};;
                        videoUrl = "maxime";
                        videoVastXml = "aliquam";
                    }};;
                }};;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                fields = "placeat";
                key = "voluptas";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "unde";
                updateMask = "illo";
                uploadType = "nihil";
                uploadProtocol = "inventore";
            }};            

            RealtimebiddingBuyersCreativesPatchResponse res = sdk.buyers.realtimebiddingBuyersCreativesPatch(req, new RealtimebiddingBuyersCreativesPatchSecurity("libero", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creative != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBuyersList

Lists all buyer account information the calling buyer user or service account is permissioned to manage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersListRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersListResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBuyersListRequest req = new RealtimebiddingBuyersListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cumque";
                alt = AltEnum.JSON;
                callback = "harum";
                fields = "facere";
                key = "facilis";
                oauthToken = "beatae";
                pageSize = 767210L;
                pageToken = "delectus";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "expedita";
                uploadProtocol = "corrupti";
            }};            

            RealtimebiddingBuyersListResponse res = sdk.buyers.realtimebiddingBuyersList(req, new RealtimebiddingBuyersListSecurity("rem", "atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBuyersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBuyersUserListsClose

Change the status of a user list to CLOSED. This prevents new users from being added to the user list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsCloseRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsCloseResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsCloseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBuyersUserListsCloseRequest req = new RealtimebiddingBuyersUserListsCloseRequest("officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sapiente", "quo");
                    put("incidunt", "quod");
                    put("minus", "porro");
                    put("id", "excepturi");
                }};
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "esse";
                key = "hic";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "soluta";
                uploadProtocol = "fugit";
            }};            

            RealtimebiddingBuyersUserListsCloseResponse res = sdk.buyers.realtimebiddingBuyersUserListsClose(req, new RealtimebiddingBuyersUserListsCloseSecurity("pariatur", "eligendi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBuyersUserListsCreate

Create a new user list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsCreateRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsCreateResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.UrlRestriction;
import org.openapis.openapi.models.shared.UrlRestrictionRestrictionTypeEnum;
import org.openapis.openapi.models.shared.UserListInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBuyersUserListsCreateRequest req = new RealtimebiddingBuyersUserListsCreateRequest("recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                userListInput = new UserListInput() {{
                    description = "aut";
                    displayName = "laudantium";
                    membershipDurationDays = "iusto";
                    urlRestriction = new UrlRestriction() {{
                        endDate = new Date() {{
                            day = 219860;
                            month = 917152;
                            year = 274295;
                        }};;
                        restrictionType = UrlRestrictionRestrictionTypeEnum.CONTAINS;
                        startDate = new Date() {{
                            day = 701841;
                            month = 39222;
                            year = 30192;
                        }};;
                        url = "eum";
                    }};;
                }};;
                accessToken = "at";
                alt = AltEnum.MEDIA;
                callback = "reprehenderit";
                fields = "voluptatum";
                key = "blanditiis";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "rerum";
                uploadProtocol = "deserunt";
            }};            

            RealtimebiddingBuyersUserListsCreateResponse res = sdk.buyers.realtimebiddingBuyersUserListsCreate(req, new RealtimebiddingBuyersUserListsCreateSecurity("atque", "nostrum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBuyersUserListsGet

Gets a user list by its name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsGetRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsGetResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsGetSecurity;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBuyersUserListsGetRequest req = new RealtimebiddingBuyersUserListsGetRequest("atque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "est";
                alt = AltEnum.JSON;
                callback = "rem";
                fields = "magni";
                key = "quae";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "enim";
                uploadProtocol = "labore";
                view = RealtimebiddingBuyersUserListsGetViewEnum.FULL;
            }};            

            RealtimebiddingBuyersUserListsGetResponse res = sdk.buyers.realtimebiddingBuyersUserListsGet(req, new RealtimebiddingBuyersUserListsGetSecurity("saepe", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBuyersUserListsGetRemarketingTag

Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsGetRemarketingTagRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsGetRemarketingTagResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsGetRemarketingTagSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBuyersUserListsGetRemarketingTagRequest req = new RealtimebiddingBuyersUserListsGetRemarketingTagRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cumque";
                alt = AltEnum.MEDIA;
                callback = "quaerat";
                fields = "doloribus";
                key = "quia";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "cumque";
                uploadProtocol = "quis";
            }};            

            RealtimebiddingBuyersUserListsGetRemarketingTagResponse res = sdk.buyers.realtimebiddingBuyersUserListsGetRemarketingTag(req, new RealtimebiddingBuyersUserListsGetRemarketingTagSecurity("enim", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getRemarketingTagResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBuyersUserListsList

Lists the user lists visible to the current user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsListRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsListResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBuyersUserListsListRequest req = new RealtimebiddingBuyersUserListsListRequest("nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nesciunt";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "minus";
                key = "asperiores";
                oauthToken = "recusandae";
                pageSize = 912151L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "fugit";
                uploadProtocol = "sit";
            }};            

            RealtimebiddingBuyersUserListsListResponse res = sdk.buyers.realtimebiddingBuyersUserListsList(req, new RealtimebiddingBuyersUserListsListSecurity("aliquid", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listUserListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBuyersUserListsOpen

Change the status of a user list to OPEN. This allows new users to be added to the user list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsOpenRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsOpenResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsOpenSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBuyersUserListsOpenRequest req = new RealtimebiddingBuyersUserListsOpenRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nesciunt", "delectus");
                }};
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "modi";
                key = "sunt";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "voluptatum";
                uploadProtocol = "ipsa";
            }};            

            RealtimebiddingBuyersUserListsOpenResponse res = sdk.buyers.realtimebiddingBuyersUserListsOpen(req, new RealtimebiddingBuyersUserListsOpenSecurity("at", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBuyersUserListsUpdate

Update the given user list. Only user lists with URLRestrictions can be updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsUpdateRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsUpdateResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBuyersUserListsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.UrlRestriction;
import org.openapis.openapi.models.shared.UrlRestrictionRestrictionTypeEnum;
import org.openapis.openapi.models.shared.UserListInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBuyersUserListsUpdateRequest req = new RealtimebiddingBuyersUserListsUpdateRequest("repellat") {{
                dollarXgafv = XgafvEnum.ONE;
                userListInput = new UserListInput() {{
                    description = "inventore";
                    displayName = "sequi";
                    membershipDurationDays = "fugit";
                    urlRestriction = new UrlRestriction() {{
                        endDate = new Date() {{
                            day = 685467;
                            month = 943103;
                            year = 49499;
                        }};;
                        restrictionType = UrlRestrictionRestrictionTypeEnum.CONTAINS;
                        startDate = new Date() {{
                            day = 101854;
                            month = 44929;
                            year = 134173;
                        }};;
                        url = "nulla";
                    }};;
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "delectus";
                key = "numquam";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "ex";
                uploadProtocol = "repellat";
            }};            

            RealtimebiddingBuyersUserListsUpdateResponse res = sdk.buyers.realtimebiddingBuyersUserListsUpdate(req, new RealtimebiddingBuyersUserListsUpdateSecurity("quae", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
