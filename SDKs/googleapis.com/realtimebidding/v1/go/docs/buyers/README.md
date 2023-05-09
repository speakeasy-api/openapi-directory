# Buyers

### Available Operations

* [RealtimebiddingBuyersCreativesCreate](#realtimebiddingbuyerscreativescreate) - Creates a creative.
* [RealtimebiddingBuyersCreativesList](#realtimebiddingbuyerscreativeslist) - Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
* [RealtimebiddingBuyersCreativesPatch](#realtimebiddingbuyerscreativespatch) - Updates a creative.
* [RealtimebiddingBuyersList](#realtimebiddingbuyerslist) - Lists all buyer account information the calling buyer user or service account is permissioned to manage.
* [RealtimebiddingBuyersUserListsClose](#realtimebiddingbuyersuserlistsclose) - Change the status of a user list to CLOSED. This prevents new users from being added to the user list.
* [RealtimebiddingBuyersUserListsCreate](#realtimebiddingbuyersuserlistscreate) - Create a new user list.
* [RealtimebiddingBuyersUserListsGet](#realtimebiddingbuyersuserlistsget) - Gets a user list by its name.
* [RealtimebiddingBuyersUserListsGetRemarketingTag](#realtimebiddingbuyersuserlistsgetremarketingtag) - Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
* [RealtimebiddingBuyersUserListsList](#realtimebiddingbuyersuserlistslist) - Lists the user lists visible to the current user.
* [RealtimebiddingBuyersUserListsOpen](#realtimebiddingbuyersuserlistsopen) - Change the status of a user list to OPEN. This allows new users to be added to the user list.
* [RealtimebiddingBuyersUserListsUpdate](#realtimebiddingbuyersuserlistsupdate) - Update the given user list. Only user lists with URLRestrictions can be updated.

## RealtimebiddingBuyersCreativesCreate

Creates a creative.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Buyers.RealtimebiddingBuyersCreativesCreate(ctx, operations.RealtimebiddingBuyersCreativesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreativeInput: &shared.CreativeInput{
            AdChoicesDestinationURL: sdk.String("eos"),
            AdvertiserName: sdk.String("perferendis"),
            AgencyID: sdk.String("dolores"),
            CreativeID: sdk.String("minus"),
            CreativeServingDecision: &shared.CreativeServingDecision{
                AdTechnologyProviders: &shared.AdTechnologyProviders{
                    DetectedGvlIds: []string{
                        "dolor",
                        "vero",
                    },
                    DetectedProviderIds: []string{
                        "hic",
                        "recusandae",
                    },
                    UnidentifiedProviderDomains: []string{
                        "facilis",
                        "perspiciatis",
                        "voluptatem",
                    },
                },
                ChinaPolicyCompliance: &shared.PolicyCompliance{
                    Status: shared.PolicyComplianceStatusEnumApproved.ToPointer(),
                    Topics: []shared.PolicyTopicEntry{
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("error"),
                                        CrawledURL: sdk.String("eaque"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("adipisci"),
                                        HTTPError: sdk.Int(992397),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("modi"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("pariatur"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("nobis"),
                                                HTTPCallCount: sdk.Int(730122),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("delectus"),
                                                HTTPCallCount: sdk.Int(311945),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("quos"),
                                                HTTPCallCount: sdk.Int(398221),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(212390),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(222443),
                                                NormalizedURL: sdk.String("qui"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(218749),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "excepturi",
                                            "cum",
                                            "voluptate",
                                            "dignissimos",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "amet",
                                            "dolorum",
                                            "numquam",
                                            "veritatis",
                                        },
                                        MaxCookieCount: sdk.Int(58029),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("ipsa"),
                                        CrawledURL: sdk.String("iure"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("accusamus"),
                                        HTTPError: sdk.Int(696344),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("voluptas"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectionErrorUnspecified.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("sit"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("ab"),
                                                HTTPCallCount: sdk.Int(743835),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("dolorum"),
                                                HTTPCallCount: sdk.Int(478596),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("voluptate"),
                                                HTTPCallCount: sdk.Int(677082),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("deleniti"),
                                                HTTPCallCount: sdk.Int(607045),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(896672),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(990339),
                                                NormalizedURL: sdk.String("nihil"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(216897),
                                                NormalizedURL: sdk.String("voluptate"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(663078),
                                                NormalizedURL: sdk.String("saepe"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(263322),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "perferendis",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "optio",
                                        },
                                        MaxCookieCount: sdk.Int(881586),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("ad"),
                                        CrawledURL: sdk.String("saepe"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnreachableRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumErrorDNS.ToPointer(),
                                        ExpandedURL: sdk.String("provident"),
                                        HTTPError: sdk.Int(324683),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("totam"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectionErrorUnspecified.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("quaerat"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("vel"),
                                                HTTPCallCount: sdk.Int(798047),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("officiis"),
                                                HTTPCallCount: sdk.Int(185636),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(679880),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(456130),
                                                NormalizedURL: sdk.String("harum"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(483409),
                                                NormalizedURL: sdk.String("ipsum"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(788740),
                                                NormalizedURL: sdk.String("tenetur"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(229442),
                                                NormalizedURL: sdk.String("tempore"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(880298),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "enim",
                                            "dolorem",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "totam",
                                            "nihil",
                                            "sit",
                                            "expedita",
                                        },
                                        MaxCookieCount: sdk.Int(207470),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("sed"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("vel"),
                        },
                    },
                },
                DealsPolicyCompliance: &shared.PolicyCompliance{
                    Status: shared.PolicyComplianceStatusEnumApproved.ToPointer(),
                    Topics: []shared.PolicyTopicEntry{
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("quam"),
                                        CrawledURL: sdk.String("ipsum"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnreachableRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("cupiditate"),
                                        HTTPError: sdk.Int(807581),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("soluta"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPlatformUnspecified.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("incidunt"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("dolores"),
                                                HTTPCallCount: sdk.Int(716860),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(704474),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(463150),
                                                NormalizedURL: sdk.String("molestias"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(840429),
                                                NormalizedURL: sdk.String("qui"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(204865),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "magni",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "sunt",
                                            "ullam",
                                        },
                                        MaxCookieCount: sdk.Int(722081),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("hic"),
                                        CrawledURL: sdk.String("voluptatem"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumRobotedDenied.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("nobis"),
                                        HTTPError: sdk.Int(92596),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("ipsum"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPlatformUnspecified.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("tempore"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("aperiam"),
                                                HTTPCallCount: sdk.Int(961937),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("dolorem"),
                                                HTTPCallCount: sdk.Int(292147),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("labore"),
                                                HTTPCallCount: sdk.Int(240829),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(677263),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(63038),
                                                NormalizedURL: sdk.String("aut"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(555649),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "consequatur",
                                            "est",
                                            "repellendus",
                                            "porro",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "ut",
                                            "facilis",
                                            "cupiditate",
                                            "qui",
                                        },
                                        MaxCookieCount: sdk.Int(63955),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("laudantium"),
                                        CrawledURL: sdk.String("odio"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("quisquam"),
                                        HTTPError: sdk.Int(876506),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("quis"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPlatformUnspecified.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumBadRequest.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("consectetur"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("tenetur"),
                                                HTTPCallCount: sdk.Int(492268),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("hic"),
                                                HTTPCallCount: sdk.Int(715561),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("quod"),
                                                HTTPCallCount: sdk.Int(486160),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("similique"),
                                                HTTPCallCount: sdk.Int(708548),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(874288),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(293020),
                                                NormalizedURL: sdk.String("quibusdam"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(848944),
                                                NormalizedURL: sdk.String("sequi"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(617877),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "aut",
                                            "voluptatibus",
                                            "exercitationem",
                                            "nulla",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "porro",
                                        },
                                        MaxCookieCount: sdk.Int(981830),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("doloribus"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("iusto"),
                        },
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("ducimus"),
                                        CrawledURL: sdk.String("alias"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumRobotedDenied.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("ipsam"),
                                        HTTPError: sdk.Int(410492),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("vel"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumTooManyRedirects.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("ex"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("dicta"),
                                                HTTPCallCount: sdk.Int(224317),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("maiores"),
                                                HTTPCallCount: sdk.Int(97844),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("ex"),
                                                HTTPCallCount: sdk.Int(862192),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(569211),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(343605),
                                                NormalizedURL: sdk.String("sapiente"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(788873),
                                                NormalizedURL: sdk.String("saepe"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(411372),
                                                NormalizedURL: sdk.String("impedit"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(359271),
                                                NormalizedURL: sdk.String("veniam"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(399499),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "magnam",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "quo",
                                            "consectetur",
                                        },
                                        MaxCookieCount: sdk.Int(926213),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("aspernatur"),
                                        CrawledURL: sdk.String("minima"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("libero"),
                                        HTTPError: sdk.Int(13948),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("deleniti"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumTooManyRedirects.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("accusamus"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("non"),
                                                HTTPCallCount: sdk.Int(89603),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(677412),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(810424),
                                                NormalizedURL: sdk.String("velit"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(432148),
                                                NormalizedURL: sdk.String("autem"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(752135),
                                                NormalizedURL: sdk.String("quas"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(829603),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "voluptas",
                                            "libero",
                                            "quasi",
                                            "tempora",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "explicabo",
                                            "provident",
                                        },
                                        MaxCookieCount: sdk.Int(55374),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("molestiae"),
                                        CrawledURL: sdk.String("magnam"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("esse"),
                                        HTTPError: sdk.Int(456141),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("fuga"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("ut"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("suscipit"),
                                                HTTPCallCount: sdk.Int(826871),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("eos"),
                                                HTTPCallCount: sdk.Int(509342),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(788546),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(56848),
                                                NormalizedURL: sdk.String("id"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(696997),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "quo",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "quo",
                                            "fuga",
                                            "eius",
                                            "eos",
                                        },
                                        MaxCookieCount: sdk.Int(373813),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("ab"),
                                        CrawledURL: sdk.String("cupiditate"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("debitis"),
                                        HTTPError: sdk.Int(370853),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("sequi"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumInvalidRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("aperiam"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("quod"),
                                                HTTPCallCount: sdk.Int(490819),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("inventore"),
                                                HTTPCallCount: sdk.Int(469498),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("totam"),
                                                HTTPCallCount: sdk.Int(882710),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(306810),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(577543),
                                                NormalizedURL: sdk.String("commodi"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(959434),
                                                NormalizedURL: sdk.String("dolores"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(645570),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "accusantium",
                                            "porro",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "quas",
                                            "praesentium",
                                        },
                                        MaxCookieCount: sdk.Int(159867),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("deleniti"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("fugit"),
                        },
                    },
                },
                DetectedAdvertisers: []shared.AdvertiserAndBrand{
                    shared.AdvertiserAndBrand{
                        AdvertiserID: sdk.String("mollitia"),
                        AdvertiserName: sdk.String("incidunt"),
                        BrandID: sdk.String("atque"),
                        BrandName: sdk.String("explicabo"),
                    },
                    shared.AdvertiserAndBrand{
                        AdvertiserID: sdk.String("minima"),
                        AdvertiserName: sdk.String("nisi"),
                        BrandID: sdk.String("fugit"),
                        BrandName: sdk.String("sapiente"),
                    },
                    shared.AdvertiserAndBrand{
                        AdvertiserID: sdk.String("consequuntur"),
                        AdvertiserName: sdk.String("ratione"),
                        BrandID: sdk.String("explicabo"),
                        BrandName: sdk.String("saepe"),
                    },
                },
                DetectedAttributes: []shared.CreativeServingDecisionDetectedAttributesEnum{
                    shared.CreativeServingDecisionDetectedAttributesEnumExpandingActionRolloverToExpand,
                    shared.CreativeServingDecisionDetectedAttributesEnumIsTagged,
                    shared.CreativeServingDecisionDetectedAttributesEnumExpandingDirectionUpOrDown,
                },
                DetectedClickThroughUrls: []string{
                    "accusamus",
                    "veritatis",
                    "esse",
                    "quod",
                },
                DetectedDomains: []string{
                    "vero",
                    "aliquid",
                    "quasi",
                },
                DetectedLanguages: []string{
                    "vel",
                    "harum",
                    "molestiae",
                    "rerum",
                },
                DetectedProductCategories: []int{
                    327720,
                    716244,
                    756779,
                },
                DetectedSensitiveCategories: []int{
                    636061,
                },
                DetectedVendorIds: []int{
                    240020,
                    766964,
                    160538,
                },
                LastStatusUpdate: sdk.String("consequatur"),
                NetworkPolicyCompliance: &shared.PolicyCompliance{
                    Status: shared.PolicyComplianceStatusEnumApproved.ToPointer(),
                    Topics: []shared.PolicyTopicEntry{
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("consectetur"),
                                        CrawledURL: sdk.String("esse"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumErrorDNS.ToPointer(),
                                        ExpandedURL: sdk.String("a"),
                                        HTTPError: sdk.Int(857723),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("esse"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPlatformUnspecified.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("sint"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("possimus"),
                                                HTTPCallCount: sdk.Int(157632),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("eveniet"),
                                                HTTPCallCount: sdk.Int(992430),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("facere"),
                                                HTTPCallCount: sdk.Int(85001),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("consequuntur"),
                                                HTTPCallCount: sdk.Int(94458),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(628899),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(398434),
                                                NormalizedURL: sdk.String("tenetur"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(62713),
                                                NormalizedURL: sdk.String("earum"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(424032),
                                                NormalizedURL: sdk.String("in"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(258684),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "illum",
                                            "soluta",
                                            "accusantium",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "sapiente",
                                            "dicta",
                                        },
                                        MaxCookieCount: sdk.Int(355369),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("reprehenderit"),
                                        CrawledURL: sdk.String("ullam"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnreachableRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("voluptatum"),
                                        HTTPError: sdk.Int(185232),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("ex"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("architecto"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("tenetur"),
                                                HTTPCallCount: sdk.Int(98478),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("at"),
                                                HTTPCallCount: sdk.Int(92027),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("voluptate"),
                                                HTTPCallCount: sdk.Int(55965),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(326701),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(232744),
                                                NormalizedURL: sdk.String("adipisci"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(614465),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "accusantium",
                                            "rem",
                                            "aut",
                                            "laudantium",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "mollitia",
                                            "ab",
                                        },
                                        MaxCookieCount: sdk.Int(544591),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("non"),
                                        CrawledURL: sdk.String("voluptatem"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnreachableRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumErrorDNS.ToPointer(),
                                        ExpandedURL: sdk.String("numquam"),
                                        HTTPError: sdk.Int(771089),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("voluptas"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPlatformUnspecified.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumInvalidRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("maiores"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("velit"),
                                                HTTPCallCount: sdk.Int(974257),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("voluptas"),
                                                HTTPCallCount: sdk.Int(990345),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("aperiam"),
                                                HTTPCallCount: sdk.Int(409054),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(310067),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(831520),
                                                NormalizedURL: sdk.String("officia"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(807023),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "officia",
                                            "asperiores",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "quae",
                                            "quaerat",
                                        },
                                        MaxCookieCount: sdk.Int(783235),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("quod"),
                                        CrawledURL: sdk.String("labore"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("fuga"),
                                        HTTPError: sdk.Int(662505),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("velit"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("totam"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("vel"),
                                                HTTPCallCount: sdk.Int(497678),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("quos"),
                                                HTTPCallCount: sdk.Int(427834),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("labore"),
                                                HTTPCallCount: sdk.Int(822560),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("facilis"),
                                                HTTPCallCount: sdk.Int(738227),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(414857),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(360545),
                                                NormalizedURL: sdk.String("reiciendis"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(828657),
                                                NormalizedURL: sdk.String("nemo"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(924967),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "aperiam",
                                            "cum",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "in",
                                        },
                                        MaxCookieCount: sdk.Int(348519),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("earum"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("facere"),
                        },
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("doloribus"),
                                        CrawledURL: sdk.String("suscipit"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnknown.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("saepe"),
                                        HTTPError: sdk.Int(897071),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("sunt"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumTooManyRedirects.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("amet"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("dignissimos"),
                                                HTTPCallCount: sdk.Int(950953),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(891523),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(358107),
                                                NormalizedURL: sdk.String("harum"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(385237),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "voluptates",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "vitae",
                                            "accusamus",
                                            "similique",
                                        },
                                        MaxCookieCount: sdk.Int(272437),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("aspernatur"),
                                        CrawledURL: sdk.String("voluptas"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnreachableRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumErrorDNS.ToPointer(),
                                        ExpandedURL: sdk.String("minima"),
                                        HTTPError: sdk.Int(748789),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("adipisci"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectionErrorUnspecified.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("in"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("aliquam"),
                                                HTTPCallCount: sdk.Int(885963),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("temporibus"),
                                                HTTPCallCount: sdk.Int(351870),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(237742),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(502389),
                                                NormalizedURL: sdk.String("quas"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(942584),
                                                NormalizedURL: sdk.String("nesciunt"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(633998),
                                                NormalizedURL: sdk.String("corrupti"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(867290),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "hic",
                                            "exercitationem",
                                            "nobis",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "rerum",
                                        },
                                        MaxCookieCount: sdk.Int(148829),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("reiciendis"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("explicabo"),
                        },
                    },
                },
                PlatformPolicyCompliance: &shared.PolicyCompliance{
                    Status: shared.PolicyComplianceStatusEnumCertificateRequired.ToPointer(),
                    Topics: []shared.PolicyTopicEntry{
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("expedita"),
                                        CrawledURL: sdk.String("ab"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumRobotedDenied.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("laborum"),
                                        HTTPError: sdk.Int(152354),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("commodi"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectionErrorUnspecified.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumBadRequest.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("unde"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("suscipit"),
                                                HTTPCallCount: sdk.Int(960257),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(895386),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(967795),
                                                NormalizedURL: sdk.String("perferendis"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(546885),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "incidunt",
                                            "sed",
                                            "provident",
                                            "eius",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "ipsum",
                                            "ea",
                                            "occaecati",
                                            "quos",
                                        },
                                        MaxCookieCount: sdk.Int(975752),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("tempora"),
                                        CrawledURL: sdk.String("tempora"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("ex"),
                                        HTTPError: sdk.Int(25497),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("officiis"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumBadRequest.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("incidunt"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("debitis"),
                                                HTTPCallCount: sdk.Int(524970),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("sit"),
                                                HTTPCallCount: sdk.Int(750595),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(625637),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(329543),
                                                NormalizedURL: sdk.String("recusandae"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(967122),
                                                NormalizedURL: sdk.String("nulla"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(168576),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "saepe",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "veniam",
                                            "in",
                                        },
                                        MaxCookieCount: sdk.Int(889234),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("beatae"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("laudantium"),
                        },
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("praesentium"),
                                        CrawledURL: sdk.String("cum"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnreachableRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("voluptatum"),
                                        HTTPError: sdk.Int(622385),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("expedita"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumTooManyRedirects.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("nostrum"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("dolorum"),
                                                HTTPCallCount: sdk.Int(548361),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("accusamus"),
                                                HTTPCallCount: sdk.Int(272683),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("atque"),
                                                HTTPCallCount: sdk.Int(148268),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(282699),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(30235),
                                                NormalizedURL: sdk.String("culpa"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(710337),
                                                NormalizedURL: sdk.String("magnam"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(7884),
                                                NormalizedURL: sdk.String("esse"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(372679),
                                                NormalizedURL: sdk.String("sit"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(530537),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "repudiandae",
                                            "corporis",
                                            "et",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "ex",
                                            "sed",
                                            "sit",
                                        },
                                        MaxCookieCount: sdk.Int(425508),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("nostrum"),
                                        CrawledURL: sdk.String("saepe"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumRobotedDenied.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("incidunt"),
                                        HTTPError: sdk.Int(968865),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("harum"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPlatformUnspecified.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectionErrorUnspecified.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("labore"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("atque"),
                                                HTTPCallCount: sdk.Int(671957),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("nam"),
                                                HTTPCallCount: sdk.Int(948861),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("laboriosam"),
                                                HTTPCallCount: sdk.Int(2703),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(227084),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(454860),
                                                NormalizedURL: sdk.String("unde"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(972083),
                                                NormalizedURL: sdk.String("provident"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(833819),
                                                NormalizedURL: sdk.String("delectus"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(914791),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "est",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "reprehenderit",
                                            "facere",
                                            "fuga",
                                        },
                                        MaxCookieCount: sdk.Int(509807),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("mollitia"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("veniam"),
                        },
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("quisquam"),
                                        CrawledURL: sdk.String("repudiandae"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumErrorDNS.ToPointer(),
                                        ExpandedURL: sdk.String("reprehenderit"),
                                        HTTPError: sdk.Int(991142),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("suscipit"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("esse"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("assumenda"),
                                                HTTPCallCount: sdk.Int(410301),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(539118),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(887265),
                                                NormalizedURL: sdk.String("officiis"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(880107),
                                                NormalizedURL: sdk.String("natus"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(328303),
                                                NormalizedURL: sdk.String("aspernatur"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(404425),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "corrupti",
                                            "at",
                                            "error",
                                            "blanditiis",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "repudiandae",
                                            "atque",
                                        },
                                        MaxCookieCount: sdk.Int(541381),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("sunt"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("recusandae"),
                        },
                    },
                },
                RussiaPolicyCompliance: &shared.PolicyCompliance{
                    Status: shared.PolicyComplianceStatusEnumApproved.ToPointer(),
                    Topics: []shared.PolicyTopicEntry{
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("reiciendis"),
                                        CrawledURL: sdk.String("doloremque"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnknown.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("accusantium"),
                                        HTTPError: sdk.Int(106429),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("enim"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumTooManyRedirects.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("molestias"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("saepe"),
                                                HTTPCallCount: sdk.Int(160467),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("occaecati"),
                                                HTTPCallCount: sdk.Int(886305),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(597937),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(238043),
                                                NormalizedURL: sdk.String("eveniet"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(580887),
                                                NormalizedURL: sdk.String("consequuntur"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(145870),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "quis",
                                            "reprehenderit",
                                            "error",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "corporis",
                                        },
                                        MaxCookieCount: sdk.Int(696463),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("eveniet"),
                                        CrawledURL: sdk.String("non"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnknown.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("iure"),
                                        HTTPError: sdk.Int(59944),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("quae"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("cum"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("necessitatibus"),
                                                HTTPCallCount: sdk.Int(187552),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("laborum"),
                                                HTTPCallCount: sdk.Int(715208),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(528940),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(304446),
                                                NormalizedURL: sdk.String("ad"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(997963),
                                                NormalizedURL: sdk.String("alias"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(362189),
                                                NormalizedURL: sdk.String("perspiciatis"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(470649),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "voluptas",
                                            "alias",
                                            "maiores",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "dolores",
                                            "id",
                                            "minima",
                                            "dolore",
                                        },
                                        MaxCookieCount: sdk.Int(680349),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("nesciunt"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("quae"),
                        },
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("omnis"),
                                        CrawledURL: sdk.String("quaerat"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumErrorDNS.ToPointer(),
                                        ExpandedURL: sdk.String("ut"),
                                        HTTPError: sdk.Int(633062),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("debitis"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumInvalidRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumBadRequest.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("recusandae"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("provident"),
                                                HTTPCallCount: sdk.Int(337477),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("eum"),
                                                HTTPCallCount: sdk.Int(970494),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(592780),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(354506),
                                                NormalizedURL: sdk.String("quasi"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(657020),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "mollitia",
                                            "provident",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "animi",
                                            "ex",
                                            "aliquid",
                                            "accusantium",
                                        },
                                        MaxCookieCount: sdk.Int(999278),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("doloribus"),
                                        CrawledURL: sdk.String("ullam"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("earum"),
                                        HTTPError: sdk.Int(637583),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("placeat"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("officiis"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("cumque"),
                                                HTTPCallCount: sdk.Int(113486),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("rerum"),
                                                HTTPCallCount: sdk.Int(272229),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("quis"),
                                                HTTPCallCount: sdk.Int(82057),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("fugit"),
                                                HTTPCallCount: sdk.Int(765271),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(62636),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(241901),
                                                NormalizedURL: sdk.String("aspernatur"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(432281),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "rem",
                                            "at",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "eos",
                                            "sapiente",
                                            "eum",
                                            "dicta",
                                        },
                                        MaxCookieCount: sdk.Int(325118),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("beatae"),
                                        CrawledURL: sdk.String("cupiditate"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("soluta"),
                                        HTTPError: sdk.Int(940782),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("eaque"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumInvalidRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("debitis"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("porro"),
                                                HTTPCallCount: sdk.Int(380335),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("dolorem"),
                                                HTTPCallCount: sdk.Int(147808),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(764995),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(189062),
                                                NormalizedURL: sdk.String("animi"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(898760),
                                                NormalizedURL: sdk.String("nulla"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(8931),
                                                NormalizedURL: sdk.String("quasi"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(90233),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "natus",
                                            "occaecati",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "adipisci",
                                            "quasi",
                                        },
                                        MaxCookieCount: sdk.Int(169025),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("doloribus"),
                                        CrawledURL: sdk.String("nulla"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnknown.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("tempora"),
                                        HTTPError: sdk.Int(470621),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("dicta"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumInvalidRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("maiores"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("vel"),
                                                HTTPCallCount: sdk.Int(99958),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("fugiat"),
                                                HTTPCallCount: sdk.Int(39650),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("dicta"),
                                                HTTPCallCount: sdk.Int(483706),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("tempora"),
                                                HTTPCallCount: sdk.Int(458259),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(403793),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(399812),
                                                NormalizedURL: sdk.String("ipsa"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(671384),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "nostrum",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "expedita",
                                            "aliquid",
                                            "officia",
                                            "suscipit",
                                        },
                                        MaxCookieCount: sdk.Int(399161),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("perferendis"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("eum"),
                        },
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("iste"),
                                        CrawledURL: sdk.String("id"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumErrorDNS.ToPointer(),
                                        ExpandedURL: sdk.String("possimus"),
                                        HTTPError: sdk.Int(913992),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("laborum"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumTooManyRedirects.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("enim"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("repellendus"),
                                                HTTPCallCount: sdk.Int(405036),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(775803),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(281153),
                                                NormalizedURL: sdk.String("ad"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(713927),
                                                NormalizedURL: sdk.String("voluptatem"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(561577),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "aliquid",
                                            "beatae",
                                            "voluptatum",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "veritatis",
                                            "rerum",
                                            "est",
                                        },
                                        MaxCookieCount: sdk.Int(634786),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("voluptatem"),
                                        CrawledURL: sdk.String("sapiente"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnknown.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("fuga"),
                                        HTTPError: sdk.Int(867168),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("voluptatem"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPlatformUnspecified.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumInvalidRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("ex"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("rem"),
                                                HTTPCallCount: sdk.Int(796320),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("nemo"),
                                                HTTPCallCount: sdk.Int(992074),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("ratione"),
                                                HTTPCallCount: sdk.Int(355225),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("perferendis"),
                                                HTTPCallCount: sdk.Int(848341),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(518150),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(842777),
                                                NormalizedURL: sdk.String("nam"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(373216),
                                                NormalizedURL: sdk.String("culpa"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(222864),
                                                NormalizedURL: sdk.String("aliquam"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(80532),
                                                NormalizedURL: sdk.String("deleniti"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(85311),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "dolor",
                                            "consequatur",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "sit",
                                        },
                                        MaxCookieCount: sdk.Int(265039),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("fugit"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("ab"),
                        },
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("quae"),
                                        CrawledURL: sdk.String("dolor"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnknown.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumErrorDNS.ToPointer(),
                                        ExpandedURL: sdk.String("consequuntur"),
                                        HTTPError: sdk.Int(55107),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("eveniet"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumBadRequest.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("necessitatibus"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("veniam"),
                                                HTTPCallCount: sdk.Int(199596),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(712927),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(426943),
                                                NormalizedURL: sdk.String("voluptatum"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(301692),
                                                NormalizedURL: sdk.String("exercitationem"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(70410),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "autem",
                                            "nobis",
                                            "laboriosam",
                                            "recusandae",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "voluptatem",
                                        },
                                        MaxCookieCount: sdk.Int(350207),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("necessitatibus"),
                                        CrawledURL: sdk.String("quasi"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnreachableRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("vero"),
                                        HTTPError: sdk.Int(667593),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("sequi"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("occaecati"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("voluptate"),
                                                HTTPCallCount: sdk.Int(501063),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("officia"),
                                                HTTPCallCount: sdk.Int(376389),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(254025),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(551079),
                                                NormalizedURL: sdk.String("eius"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(131903),
                                                NormalizedURL: sdk.String("ducimus"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(200516),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "laudantium",
                                            "incidunt",
                                            "quasi",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "fugiat",
                                            "dicta",
                                            "nisi",
                                        },
                                        MaxCookieCount: sdk.Int(159845),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("consectetur"),
                                        CrawledURL: sdk.String("aperiam"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("soluta"),
                                        HTTPError: sdk.Int(3860),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("eos"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("inventore"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("accusamus"),
                                                HTTPCallCount: sdk.Int(976802),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("distinctio"),
                                                HTTPCallCount: sdk.Int(608593),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("delectus"),
                                                HTTPCallCount: sdk.Int(328379),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(507636),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(300403),
                                                NormalizedURL: sdk.String("temporibus"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(549501),
                                                NormalizedURL: sdk.String("commodi"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(930819),
                                                NormalizedURL: sdk.String("commodi"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(520761),
                                                NormalizedURL: sdk.String("earum"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(267207),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "vero",
                                            "voluptatem",
                                            "ipsam",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "alias",
                                            "quasi",
                                        },
                                        MaxCookieCount: sdk.Int(247685),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("maiores"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("enim"),
                        },
                    },
                },
            },
            DeclaredAttributes: []shared.CreativeDeclaredAttributesEnum{
                shared.CreativeDeclaredAttributesEnumNativeEligibilityNotEligible,
                shared.CreativeDeclaredAttributesEnumRichMediaCapabilityTypeHtml5,
                shared.CreativeDeclaredAttributesEnumExpandingDirectionUpOrDown,
            },
            DeclaredClickThroughUrls: []string{
                "reprehenderit",
                "est",
            },
            DeclaredRestrictedCategories: []shared.CreativeDeclaredRestrictedCategoriesEnum{
                shared.CreativeDeclaredRestrictedCategoriesEnumAlcohol,
                shared.CreativeDeclaredRestrictedCategoriesEnumAlcohol,
            },
            DeclaredVendorIds: []int{
                945027,
                900103,
                991891,
                404306,
            },
            HTML: &shared.HTMLContent{
                Height: sdk.Int(376741),
                Snippet: sdk.String("debitis"),
                Width: sdk.Int(966148),
            },
            ImpressionTrackingUrls: []string{
                "minus",
            },
            Native: &shared.NativeContent{
                AdvertiserName: sdk.String("fuga"),
                AppIcon: &shared.Image{
                    Height: sdk.Int(675689),
                    URL: sdk.String("consectetur"),
                    Width: sdk.Int(244889),
                },
                Body: sdk.String("atque"),
                CallToAction: sdk.String("ipsum"),
                ClickLinkURL: sdk.String("impedit"),
                ClickTrackingURL: sdk.String("magni"),
                Headline: sdk.String("soluta"),
                Image: &shared.Image{
                    Height: sdk.Int(922757),
                    URL: sdk.String("nam"),
                    Width: sdk.Int(294076),
                },
                Logo: &shared.Image{
                    Height: sdk.Int(482892),
                    URL: sdk.String("voluptate"),
                    Width: sdk.Int(194023),
                },
                PriceDisplayText: sdk.String("dignissimos"),
                StarRating: sdk.Float64(2055.66),
                VideoURL: sdk.String("quo"),
                VideoVastXML: sdk.String("deleniti"),
            },
            RenderURL: sdk.String("quibusdam"),
            RestrictedCategories: []shared.CreativeRestrictedCategoriesEnum{
                shared.CreativeRestrictedCategoriesEnumRestrictedCategoryUnspecified,
                shared.CreativeRestrictedCategoriesEnumAlcohol,
            },
            Video: &shared.VideoContent{
                VideoMetadata: &shared.VideoMetadata{
                    Duration: sdk.String("vel"),
                    IsValidVast: sdk.Bool(false),
                    IsVpaid: sdk.Bool(false),
                    MediaFiles: []shared.MediaFile{
                        shared.MediaFile{
                            Bitrate: sdk.String("quibusdam"),
                            MimeType: shared.MediaFileMimeTypeEnumMimeVideoXflv.ToPointer(),
                        },
                        shared.MediaFile{
                            Bitrate: sdk.String("facere"),
                            MimeType: shared.MediaFileMimeTypeEnumMimeApplicationMpegurl.ToPointer(),
                        },
                    },
                    SkipOffset: sdk.String("architecto"),
                    VastVersion: shared.VideoMetadataVastVersionEnumVastVersion40.ToPointer(),
                },
                VideoURL: sdk.String("quia"),
                VideoVastXML: sdk.String("porro"),
            },
        },
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("illo"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("ea"),
        Parent: "beatae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("eum"),
    }, operations.RealtimebiddingBuyersCreativesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Creative != nil {
        // handle response
    }
}
```

## RealtimebiddingBuyersCreativesList

Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Buyers.RealtimebiddingBuyersCreativesList(ctx, operations.RealtimebiddingBuyersCreativesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("dicta"),
        Filter: sdk.String("impedit"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("iste"),
        PageSize: sdk.Int64(932562),
        PageToken: sdk.String("alias"),
        Parent: "nisi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("laborum"),
        View: operations.RealtimebiddingBuyersCreativesListViewEnumCreativeViewUnspecified.ToPointer(),
    }, operations.RealtimebiddingBuyersCreativesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCreativesResponse != nil {
        // handle response
    }
}
```

## RealtimebiddingBuyersCreativesPatch

Updates a creative.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Buyers.RealtimebiddingBuyersCreativesPatch(ctx, operations.RealtimebiddingBuyersCreativesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreativeInput: &shared.CreativeInput{
            AdChoicesDestinationURL: sdk.String("iusto"),
            AdvertiserName: sdk.String("sit"),
            AgencyID: sdk.String("doloremque"),
            CreativeID: sdk.String("consequatur"),
            CreativeServingDecision: &shared.CreativeServingDecision{
                AdTechnologyProviders: &shared.AdTechnologyProviders{
                    DetectedGvlIds: []string{
                        "recusandae",
                        "ea",
                        "quidem",
                    },
                    DetectedProviderIds: []string{
                        "facilis",
                        "placeat",
                    },
                    UnidentifiedProviderDomains: []string{
                        "expedita",
                        "deleniti",
                        "a",
                    },
                },
                ChinaPolicyCompliance: &shared.PolicyCompliance{
                    Status: shared.PolicyComplianceStatusEnumDisapproved.ToPointer(),
                    Topics: []shared.PolicyTopicEntry{
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("necessitatibus"),
                                        CrawledURL: sdk.String("animi"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumRobotedDenied.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumErrorDNS.ToPointer(),
                                        ExpandedURL: sdk.String("corporis"),
                                        HTTPError: sdk.Int(668234),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("esse"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectionErrorUnspecified.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("consectetur"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("inventore"),
                                                HTTPCallCount: sdk.Int(212434),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(322017),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(611328),
                                                NormalizedURL: sdk.String("ex"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(367626),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "libero",
                                            "rem",
                                            "dolorum",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "fugit",
                                            "alias",
                                        },
                                        MaxCookieCount: sdk.Int(168042),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("vel"),
                                        CrawledURL: sdk.String("quae"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("neque"),
                                        HTTPError: sdk.Int(348357),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("et"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPlatformUnspecified.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("distinctio"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("quia"),
                                                HTTPCallCount: sdk.Int(159146),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("nostrum"),
                                                HTTPCallCount: sdk.Int(605712),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("libero"),
                                                HTTPCallCount: sdk.Int(115661),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("id"),
                                                HTTPCallCount: sdk.Int(727888),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(854460),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(554603),
                                                NormalizedURL: sdk.String("placeat"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(25756),
                                                NormalizedURL: sdk.String("iusto"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(57320),
                                                NormalizedURL: sdk.String("voluptates"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(80061),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "totam",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "eligendi",
                                            "distinctio",
                                        },
                                        MaxCookieCount: sdk.Int(32273),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("autem"),
                                        CrawledURL: sdk.String("esse"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("beatae"),
                                        HTTPError: sdk.Int(668606),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("corrupti"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumInvalidRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("necessitatibus"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("sint"),
                                                HTTPCallCount: sdk.Int(409726),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("autem"),
                                                HTTPCallCount: sdk.Int(373511),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("rerum"),
                                                HTTPCallCount: sdk.Int(515638),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(357207),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(972912),
                                                NormalizedURL: sdk.String("cum"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(872303),
                                                NormalizedURL: sdk.String("alias"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(156653),
                                                NormalizedURL: sdk.String("quidem"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(684126),
                                                NormalizedURL: sdk.String("repudiandae"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(34070),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "officiis",
                                            "eos",
                                            "quibusdam",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "praesentium",
                                            "odit",
                                        },
                                        MaxCookieCount: sdk.Int(127688),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("corporis"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("error"),
                        },
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("adipisci"),
                                        CrawledURL: sdk.String("recusandae"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumRobotedDenied.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("quidem"),
                                        HTTPError: sdk.Int(339631),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("unde"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("fugit"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("numquam"),
                                                HTTPCallCount: sdk.Int(201010),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("at"),
                                                HTTPCallCount: sdk.Int(637856),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(491892),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(898961),
                                                NormalizedURL: sdk.String("corporis"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(185518),
                                                NormalizedURL: sdk.String("expedita"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(532669),
                                                NormalizedURL: sdk.String("cupiditate"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(326269),
                                                NormalizedURL: sdk.String("placeat"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(316542),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "in",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "eum",
                                            "modi",
                                            "corporis",
                                            "magnam",
                                        },
                                        MaxCookieCount: sdk.Int(914971),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("maiores"),
                                        CrawledURL: sdk.String("tempore"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("ratione"),
                                        HTTPError: sdk.Int(289913),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("occaecati"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("minus"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("nostrum"),
                                                HTTPCallCount: sdk.Int(669237),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("impedit"),
                                                HTTPCallCount: sdk.Int(963741),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("tempore"),
                                                HTTPCallCount: sdk.Int(878601),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(141506),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(865946),
                                                NormalizedURL: sdk.String("nemo"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(441321),
                                                NormalizedURL: sdk.String("aperiam"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(486410),
                                                NormalizedURL: sdk.String("minima"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(448369),
                                                NormalizedURL: sdk.String("ducimus"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(567846),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "error",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "ducimus",
                                        },
                                        MaxCookieCount: sdk.Int(452729),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("pariatur"),
                                        CrawledURL: sdk.String("itaque"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumRobotedDenied.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("ex"),
                                        HTTPError: sdk.Int(311486),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("officiis"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumBadRequest.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("quam"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("modi"),
                                                HTTPCallCount: sdk.Int(59383),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(575534),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(194901),
                                                NormalizedURL: sdk.String("repudiandae"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(741232),
                                                NormalizedURL: sdk.String("dicta"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(936928),
                                                NormalizedURL: sdk.String("veniam"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(659268),
                                                NormalizedURL: sdk.String("dolores"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(724994),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "consequuntur",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "nobis",
                                            "ipsa",
                                            "ducimus",
                                            "maiores",
                                        },
                                        MaxCookieCount: sdk.Int(87382),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("quasi"),
                                        CrawledURL: sdk.String("laboriosam"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnknown.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("excepturi"),
                                        HTTPError: sdk.Int(578210),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("aliquam"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("sint"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("hic"),
                                                HTTPCallCount: sdk.Int(657319),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("quas"),
                                                HTTPCallCount: sdk.Int(517326),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(564667),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(51170),
                                                NormalizedURL: sdk.String("saepe"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(104078),
                                                NormalizedURL: sdk.String("quos"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(614438),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "tempore",
                                            "libero",
                                            "velit",
                                            "doloremque",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "impedit",
                                            "cum",
                                            "ipsum",
                                            "adipisci",
                                        },
                                        MaxCookieCount: sdk.Int(903150),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("deserunt"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("doloremque"),
                        },
                    },
                },
                DealsPolicyCompliance: &shared.PolicyCompliance{
                    Status: shared.PolicyComplianceStatusEnumPendingReview.ToPointer(),
                    Topics: []shared.PolicyTopicEntry{
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("architecto"),
                                        CrawledURL: sdk.String("cupiditate"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("possimus"),
                                        HTTPError: sdk.Int(251464),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("itaque"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPlatformUnspecified.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumBadRequest.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("consequuntur"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("laudantium"),
                                                HTTPCallCount: sdk.Int(140384),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("pariatur"),
                                                HTTPCallCount: sdk.Int(227362),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("exercitationem"),
                                                HTTPCallCount: sdk.Int(68852),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("velit"),
                                                HTTPCallCount: sdk.Int(705710),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(731065),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(977518),
                                                NormalizedURL: sdk.String("quaerat"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(503748),
                                                NormalizedURL: sdk.String("distinctio"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(392430),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "nisi",
                                            "libero",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "facere",
                                            "facilis",
                                            "ipsum",
                                            "ad",
                                        },
                                        MaxCookieCount: sdk.Int(973819),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("voluptatibus"),
                                        CrawledURL: sdk.String("consequuntur"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnknown.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("rerum"),
                                        HTTPError: sdk.Int(179795),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("nostrum"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPlatformUnspecified.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumInvalidRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("rem"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("fugiat"),
                                                HTTPCallCount: sdk.Int(604078),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("officiis"),
                                                HTTPCallCount: sdk.Int(495617),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("dolor"),
                                                HTTPCallCount: sdk.Int(118041),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("error"),
                                                HTTPCallCount: sdk.Int(784731),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(111496),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(458970),
                                                NormalizedURL: sdk.String("fugiat"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(322333),
                                                NormalizedURL: sdk.String("aspernatur"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(316501),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "iusto",
                                            "dignissimos",
                                            "libero",
                                            "illo",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "incidunt",
                                        },
                                        MaxCookieCount: sdk.Int(879174),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("saepe"),
                                        CrawledURL: sdk.String("tempore"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnreachableRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("reiciendis"),
                                        HTTPError: sdk.Int(939161),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("praesentium"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("sequi"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("deleniti"),
                                                HTTPCallCount: sdk.Int(75566),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("labore"),
                                                HTTPCallCount: sdk.Int(828841),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(304173),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(591065),
                                                NormalizedURL: sdk.String("laudantium"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(921719),
                                                NormalizedURL: sdk.String("consequatur"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(805264),
                                                NormalizedURL: sdk.String("aspernatur"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(723942),
                                                NormalizedURL: sdk.String("expedita"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(559174),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "repudiandae",
                                            "rerum",
                                            "dignissimos",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "vero",
                                            "similique",
                                        },
                                        MaxCookieCount: sdk.Int(833982),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("iure"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("dolorem"),
                        },
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("impedit"),
                                        CrawledURL: sdk.String("commodi"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("ad"),
                                        HTTPError: sdk.Int(60995),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("illum"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("amet"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("dicta"),
                                                HTTPCallCount: sdk.Int(514922),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(40710),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(479707),
                                                NormalizedURL: sdk.String("amet"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(587967),
                                                NormalizedURL: sdk.String("dolorum"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(897956),
                                                NormalizedURL: sdk.String("provident"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(920272),
                                                NormalizedURL: sdk.String("consequatur"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(366244),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "itaque",
                                            "facilis",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "aperiam",
                                            "sint",
                                            "accusamus",
                                        },
                                        MaxCookieCount: sdk.Int(178635),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("totam"),
                                        CrawledURL: sdk.String("dicta"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("dolor"),
                                        HTTPError: sdk.Int(124289),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("dolor"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumInvalidRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("at"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("minus"),
                                                HTTPCallCount: sdk.Int(456704),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("voluptatem"),
                                                HTTPCallCount: sdk.Int(20950),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(698558),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(46791),
                                                NormalizedURL: sdk.String("dignissimos"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(998026),
                                                NormalizedURL: sdk.String("velit"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(784115),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "consectetur",
                                            "eligendi",
                                            "dignissimos",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "soluta",
                                        },
                                        MaxCookieCount: sdk.Int(620500),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("temporibus"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("officia"),
                        },
                    },
                },
                DetectedAdvertisers: []shared.AdvertiserAndBrand{
                    shared.AdvertiserAndBrand{
                        AdvertiserID: sdk.String("tenetur"),
                        AdvertiserName: sdk.String("aspernatur"),
                        BrandID: sdk.String("quo"),
                        BrandName: sdk.String("itaque"),
                    },
                },
                DetectedAttributes: []shared.CreativeServingDecisionDetectedAttributesEnum{
                    shared.CreativeServingDecisionDetectedAttributesEnumSkippableInstreamVideo,
                    shared.CreativeServingDecisionDetectedAttributesEnumExpandingDirectionLeftOrRight,
                    shared.CreativeServingDecisionDetectedAttributesEnumAnyInterstitial,
                    shared.CreativeServingDecisionDetectedAttributesEnumExpandingDirectionUp,
                },
                DetectedClickThroughUrls: []string{
                    "repellat",
                },
                DetectedDomains: []string{
                    "explicabo",
                },
                DetectedLanguages: []string{
                    "nihil",
                    "non",
                },
                DetectedProductCategories: []int{
                    72754,
                },
                DetectedSensitiveCategories: []int{
                    644479,
                    964925,
                    251212,
                    719389,
                },
                DetectedVendorIds: []int{
                    349993,
                    288300,
                },
                LastStatusUpdate: sdk.String("numquam"),
                NetworkPolicyCompliance: &shared.PolicyCompliance{
                    Status: shared.PolicyComplianceStatusEnumCertificateRequired.ToPointer(),
                    Topics: []shared.PolicyTopicEntry{
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("explicabo"),
                                        CrawledURL: sdk.String("accusamus"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("odit"),
                                        HTTPError: sdk.Int(535802),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("voluptate"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumTooManyRedirects.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("magnam"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("modi"),
                                                HTTPCallCount: sdk.Int(430116),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(199529),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(492632),
                                                NormalizedURL: sdk.String("fugiat"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(345138),
                                                NormalizedURL: sdk.String("molestiae"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(330600),
                                                NormalizedURL: sdk.String("reiciendis"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(66207),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "aut",
                                            "aut",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "odio",
                                            "commodi",
                                            "numquam",
                                            "dolorum",
                                        },
                                        MaxCookieCount: sdk.Int(823718),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("voluptate"),
                                        CrawledURL: sdk.String("consectetur"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnreachableRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("itaque"),
                                        HTTPError: sdk.Int(791228),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("distinctio"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumInvalidRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("facilis"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("autem"),
                                                HTTPCallCount: sdk.Int(685415),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(5310),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(11355),
                                                NormalizedURL: sdk.String("quos"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(511222),
                                                NormalizedURL: sdk.String("repellendus"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(83291),
                                                NormalizedURL: sdk.String("quae"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(51075),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "delectus",
                                            "mollitia",
                                            "nulla",
                                            "officia",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "voluptatem",
                                        },
                                        MaxCookieCount: sdk.Int(664),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("eveniet"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("hic"),
                        },
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("incidunt"),
                                        CrawledURL: sdk.String("qui"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("harum"),
                                        HTTPError: sdk.Int(126727),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("aliquid"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("molestias"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("libero"),
                                                HTTPCallCount: sdk.Int(520678),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("sequi"),
                                                HTTPCallCount: sdk.Int(397919),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("ea"),
                                                HTTPCallCount: sdk.Int(774501),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(498388),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(243623),
                                                NormalizedURL: sdk.String("reiciendis"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(997918),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "laborum",
                                            "natus",
                                            "accusamus",
                                            "doloremque",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "rerum",
                                            "recusandae",
                                        },
                                        MaxCookieCount: sdk.Int(913285),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("non"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("rem"),
                        },
                    },
                },
                PlatformPolicyCompliance: &shared.PolicyCompliance{
                    Status: shared.PolicyComplianceStatusEnumStatusUnspecified.ToPointer(),
                    Topics: []shared.PolicyTopicEntry{
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("dicta"),
                                        CrawledURL: sdk.String("voluptatibus"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumRobotedDenied.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("officiis"),
                                        HTTPError: sdk.Int(100002),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("enim"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumInvalidRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("facilis"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("a"),
                                                HTTPCallCount: sdk.Int(615058),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("dicta"),
                                                HTTPCallCount: sdk.Int(552439),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("ullam"),
                                                HTTPCallCount: sdk.Int(295950),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("modi"),
                                                HTTPCallCount: sdk.Int(929292),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(807419),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(163558),
                                                NormalizedURL: sdk.String("assumenda"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(876840),
                                                NormalizedURL: sdk.String("doloribus"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(773711),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "accusamus",
                                            "totam",
                                            "reiciendis",
                                            "ab",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "nihil",
                                            "esse",
                                            "iure",
                                        },
                                        MaxCookieCount: sdk.Int(485031),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("nesciunt"),
                                        CrawledURL: sdk.String("debitis"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("corporis"),
                                        HTTPError: sdk.Int(375350),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("officia"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumBadRequest.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("ipsa"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("maiores"),
                                                HTTPCallCount: sdk.Int(35160),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("veniam"),
                                                HTTPCallCount: sdk.Int(906232),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("neque"),
                                                HTTPCallCount: sdk.Int(816365),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(307173),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(984773),
                                                NormalizedURL: sdk.String("fugiat"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(668577),
                                                NormalizedURL: sdk.String("delectus"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(245278),
                                                NormalizedURL: sdk.String("vitae"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(201096),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "illo",
                                            "repellat",
                                            "nemo",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "possimus",
                                            "unde",
                                            "incidunt",
                                            "explicabo",
                                        },
                                        MaxCookieCount: sdk.Int(368491),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("cupiditate"),
                                        CrawledURL: sdk.String("optio"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("nesciunt"),
                                        HTTPError: sdk.Int(412433),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("consequuntur"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("sint"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("numquam"),
                                                HTTPCallCount: sdk.Int(947822),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("adipisci"),
                                                HTTPCallCount: sdk.Int(728559),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(448386),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(403147),
                                                NormalizedURL: sdk.String("minus"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(68880),
                                                NormalizedURL: sdk.String("beatae"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(943143),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "quisquam",
                                            "dolor",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "fuga",
                                            "minima",
                                        },
                                        MaxCookieCount: sdk.Int(102446),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("qui"),
                                        CrawledURL: sdk.String("aliquid"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("adipisci"),
                                        HTTPError: sdk.Int(506343),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("exercitationem"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("sit"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("culpa"),
                                                HTTPCallCount: sdk.Int(159393),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("amet"),
                                                HTTPCallCount: sdk.Int(644734),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(268709),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(800256),
                                                NormalizedURL: sdk.String("itaque"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(955569),
                                                NormalizedURL: sdk.String("quisquam"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(316550),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "assumenda",
                                            "officiis",
                                            "architecto",
                                            "alias",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "ipsa",
                                            "nobis",
                                            "necessitatibus",
                                        },
                                        MaxCookieCount: sdk.Int(155978),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("dicta"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("vel"),
                        },
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("debitis"),
                                        CrawledURL: sdk.String("ullam"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("perferendis"),
                                        HTTPError: sdk.Int(82876),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("cumque"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("nemo"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("velit"),
                                                HTTPCallCount: sdk.Int(299153),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("dignissimos"),
                                                HTTPCallCount: sdk.Int(388404),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("sed"),
                                                HTTPCallCount: sdk.Int(486272),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("natus"),
                                                HTTPCallCount: sdk.Int(588152),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(739508),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(703966),
                                                NormalizedURL: sdk.String("quidem"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(932080),
                                                NormalizedURL: sdk.String("laboriosam"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(601714),
                                                NormalizedURL: sdk.String("modi"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(595198),
                                                NormalizedURL: sdk.String("hic"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(736985),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "libero",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "incidunt",
                                            "recusandae",
                                            "quod",
                                        },
                                        MaxCookieCount: sdk.Int(664666),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("saepe"),
                                        CrawledURL: sdk.String("autem"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumRobotedDenied.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("illum"),
                                        HTTPError: sdk.Int(367475),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("facilis"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPlatformUnspecified.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("recusandae"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("pariatur"),
                                                HTTPCallCount: sdk.Int(323365),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("facere"),
                                                HTTPCallCount: sdk.Int(674683),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("eveniet"),
                                                HTTPCallCount: sdk.Int(673191),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(276337),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(369523),
                                                NormalizedURL: sdk.String("alias"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(379894),
                                                NormalizedURL: sdk.String("deserunt"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(560451),
                                                NormalizedURL: sdk.String("laborum"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(668218),
                                                NormalizedURL: sdk.String("occaecati"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(286716),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "perferendis",
                                            "fugit",
                                            "aliquid",
                                            "magnam",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "eligendi",
                                            "hic",
                                        },
                                        MaxCookieCount: sdk.Int(342921),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("officiis"),
                                        CrawledURL: sdk.String("unde"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnknown.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumErrorDNS.ToPointer(),
                                        ExpandedURL: sdk.String("mollitia"),
                                        HTTPError: sdk.Int(298613),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("esse"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("impedit"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("deserunt"),
                                                HTTPCallCount: sdk.Int(801075),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(385739),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(31574),
                                                NormalizedURL: sdk.String("facere"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(901008),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "consequatur",
                                            "eaque",
                                            "architecto",
                                            "similique",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "blanditiis",
                                            "quae",
                                            "magni",
                                            "officiis",
                                        },
                                        MaxCookieCount: sdk.Int(148379),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("necessitatibus"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("impedit"),
                        },
                    },
                },
                RussiaPolicyCompliance: &shared.PolicyCompliance{
                    Status: shared.PolicyComplianceStatusEnumStatusUnspecified.ToPointer(),
                    Topics: []shared.PolicyTopicEntry{
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("maiores"),
                                        CrawledURL: sdk.String("laudantium"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnknown.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("asperiores"),
                                        HTTPError: sdk.Int(523365),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("suscipit"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("eius"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("in"),
                                                HTTPCallCount: sdk.Int(757407),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("quasi"),
                                                HTTPCallCount: sdk.Int(203621),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(876649),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(37534),
                                                NormalizedURL: sdk.String("qui"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(771241),
                                                NormalizedURL: sdk.String("beatae"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(278329),
                                                NormalizedURL: sdk.String("dicta"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(139133),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "rerum",
                                            "alias",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "vel",
                                            "accusantium",
                                            "id",
                                        },
                                        MaxCookieCount: sdk.Int(388169),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("ex"),
                                        CrawledURL: sdk.String("quas"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumErrorDNS.ToPointer(),
                                        ExpandedURL: sdk.String("quae"),
                                        HTTPError: sdk.Int(631719),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("quam"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPlatformUnspecified.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("omnis"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("nesciunt"),
                                                HTTPCallCount: sdk.Int(805463),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(337841),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(303253),
                                                NormalizedURL: sdk.String("excepturi"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(980410),
                                                NormalizedURL: sdk.String("laudantium"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(243904),
                                                NormalizedURL: sdk.String("reiciendis"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(230305),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "ipsa",
                                            "quisquam",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "quas",
                                            "molestiae",
                                            "aliquid",
                                            "asperiores",
                                        },
                                        MaxCookieCount: sdk.Int(955466),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("nobis"),
                                        CrawledURL: sdk.String("perspiciatis"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("minus"),
                                        HTTPError: sdk.Int(417539),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("porro"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumBadRequest.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("voluptates"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("eius"),
                                                HTTPCallCount: sdk.Int(194058),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(758194),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(459875),
                                                NormalizedURL: sdk.String("blanditiis"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(573610),
                                                NormalizedURL: sdk.String("repellat"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(955047),
                                                NormalizedURL: sdk.String("animi"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(979287),
                                                NormalizedURL: sdk.String("itaque"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(861591),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "corporis",
                                            "velit",
                                            "officiis",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "officia",
                                            "saepe",
                                        },
                                        MaxCookieCount: sdk.Int(429997),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("repudiandae"),
                                        CrawledURL: sdk.String("accusantium"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumRobotedDenied.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("quasi"),
                                        HTTPError: sdk.Int(502106),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("quisquam"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPlatformUnspecified.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("minus"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("magnam"),
                                                HTTPCallCount: sdk.Int(440847),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(800799),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(548846),
                                                NormalizedURL: sdk.String("amet"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(473326),
                                                NormalizedURL: sdk.String("amet"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(675126),
                                                NormalizedURL: sdk.String("modi"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(21358),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "architecto",
                                            "molestias",
                                            "dolore",
                                            "sunt",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "neque",
                                            "odit",
                                            "earum",
                                            "veniam",
                                        },
                                        MaxCookieCount: sdk.Int(373106),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("eaque"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("exercitationem"),
                        },
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("nihil"),
                                        CrawledURL: sdk.String("ad"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnreachableRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("quis"),
                                        HTTPError: sdk.Int(845154),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("suscipit"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectionErrorUnspecified.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("repellendus"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("id"),
                                                HTTPCallCount: sdk.Int(958146),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(152364),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(996072),
                                                NormalizedURL: sdk.String("repudiandae"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(100233),
                                                NormalizedURL: sdk.String("adipisci"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(867115),
                                                NormalizedURL: sdk.String("harum"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(294266),
                                                NormalizedURL: sdk.String("voluptatibus"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(435353),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "minus",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "dolorum",
                                            "velit",
                                            "earum",
                                        },
                                        MaxCookieCount: sdk.Int(510020),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("error"),
                                        CrawledURL: sdk.String("non"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumErrorDNS.ToPointer(),
                                        ExpandedURL: sdk.String("accusamus"),
                                        HTTPError: sdk.Int(687589),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("doloremque"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumAndroid.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumInvalidRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("deserunt"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("excepturi"),
                                                HTTPCallCount: sdk.Int(167435),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("tempora"),
                                                HTTPCallCount: sdk.Int(821904),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(220824),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(153582),
                                                NormalizedURL: sdk.String("accusamus"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(759874),
                                                NormalizedURL: sdk.String("delectus"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(792719),
                                                NormalizedURL: sdk.String("quo"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(550338),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "voluptatum",
                                            "iste",
                                            "corporis",
                                            "accusantium",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "aut",
                                        },
                                        MaxCookieCount: sdk.Int(984031),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("nostrum"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("at"),
                        },
                        shared.PolicyTopicEntry{
                            Evidences: []shared.PolicyTopicEvidence{
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("neque"),
                                        CrawledURL: sdk.String("pariatur"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("mollitia"),
                                        HTTPError: sdk.Int(65121),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("aperiam"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumPersonalComputer.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumBadRequest.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("aliquam"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("quas"),
                                                HTTPCallCount: sdk.Int(162450),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("maiores"),
                                                HTTPCallCount: sdk.Int(81581),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("aliquid"),
                                                HTTPCallCount: sdk.Int(513185),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("est"),
                                                HTTPCallCount: sdk.Int(221329),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(400879),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(768195),
                                                NormalizedURL: sdk.String("rem"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(527715),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "adipisci",
                                            "recusandae",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "blanditiis",
                                            "numquam",
                                        },
                                        MaxCookieCount: sdk.Int(196374),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("voluptatum"),
                                        CrawledURL: sdk.String("sit"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumRobotedDenied.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("tenetur"),
                                        HTTPError: sdk.Int(419858),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage.ToPointer(),
                                        LastCheckTime: sdk.String("totam"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("nihil"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("animi"),
                                                HTTPCallCount: sdk.Int(413780),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("alias"),
                                                HTTPCallCount: sdk.Int(686380),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(14780),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(802734),
                                                NormalizedURL: sdk.String("aliquam"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(613702),
                                                NormalizedURL: sdk.String("ullam"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(755738),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "voluptas",
                                            "occaecati",
                                            "unde",
                                            "illo",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "inventore",
                                            "libero",
                                        },
                                        MaxCookieCount: sdk.Int(371287),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("quasi"),
                                        CrawledURL: sdk.String("cumque"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue.ToPointer(),
                                        ExpandedURL: sdk.String("facere"),
                                        HTTPError: sdk.Int(707983),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("cumque"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumTooManyRedirects.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("corrupti"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("atque"),
                                                HTTPCallCount: sdk.Int(886118),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("cum"),
                                                HTTPCallCount: sdk.Int(863330),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("sapiente"),
                                                HTTPCallCount: sdk.Int(775427),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(277990),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(793282),
                                                NormalizedURL: sdk.String("porro"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(659971),
                                                NormalizedURL: sdk.String("excepturi"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(580238),
                                                NormalizedURL: sdk.String("libero"),
                                            },
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(774880),
                                                NormalizedURL: sdk.String("esse"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(944033),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "accusantium",
                                            "soluta",
                                            "fugit",
                                            "pariatur",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "recusandae",
                                            "veritatis",
                                            "aut",
                                            "laudantium",
                                        },
                                        MaxCookieCount: sdk.Int(480421),
                                    },
                                },
                                shared.PolicyTopicEvidence{
                                    DestinationNotCrawlable: &shared.DestinationNotCrawlableEvidence{
                                        CrawlTime: sdk.String("dolor"),
                                        CrawledURL: sdk.String("voluptates"),
                                        Reason: shared.DestinationNotCrawlableEvidenceReasonEnumUnreachableRobots.ToPointer(),
                                    },
                                    DestinationNotWorking: &shared.DestinationNotWorkingEvidence{
                                        DNSError: shared.DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified.ToPointer(),
                                        ExpandedURL: sdk.String("rerum"),
                                        HTTPError: sdk.Int(39222),
                                        InvalidPage: shared.DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified.ToPointer(),
                                        LastCheckTime: sdk.String("eum"),
                                        Platform: shared.DestinationNotWorkingEvidencePlatformEnumIos.ToPointer(),
                                        RedirectionError: shared.DestinationNotWorkingEvidenceRedirectionErrorEnumInvalidRedirect.ToPointer(),
                                        URLRejected: shared.DestinationNotWorkingEvidenceURLRejectedEnumBadRequest.ToPointer(),
                                    },
                                    DestinationURL: &shared.DestinationURLEvidence{
                                        DestinationURL: sdk.String("voluptatum"),
                                    },
                                    DomainCall: &shared.DomainCallEvidence{
                                        TopHTTPCallDomains: []shared.DomainCalls{
                                            shared.DomainCalls{
                                                Domain: sdk.String("nihil"),
                                                HTTPCallCount: sdk.Int(540048),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("rerum"),
                                                HTTPCallCount: sdk.Int(645544),
                                            },
                                            shared.DomainCalls{
                                                Domain: sdk.String("atque"),
                                                HTTPCallCount: sdk.Int(344856),
                                            },
                                        },
                                        TotalHTTPCallCount: sdk.Int(542340),
                                    },
                                    DownloadSize: &shared.DownloadSizeEvidence{
                                        TopURLDownloadSizeBreakdowns: []shared.URLDownloadSize{
                                            shared.URLDownloadSize{
                                                DownloadSizeKb: sdk.Int(667213),
                                                NormalizedURL: sdk.String("enim"),
                                            },
                                        },
                                        TotalDownloadSizeKb: sdk.Int(522390),
                                    },
                                    HTTPCall: &shared.HTTPCallEvidence{
                                        Urls: []string{
                                            "quae",
                                        },
                                    },
                                    HTTPCookie: &shared.HTTPCookieEvidence{
                                        CookieNames: []string{
                                            "placeat",
                                            "enim",
                                            "labore",
                                        },
                                        MaxCookieCount: sdk.Int(958068),
                                    },
                                },
                            },
                            HelpCenterURL: sdk.String("saepe"),
                            MissingCertificate: sdk.Bool(false),
                            PolicyTopic: sdk.String("delectus"),
                        },
                    },
                },
            },
            DeclaredAttributes: []shared.CreativeDeclaredAttributesEnum{
                shared.CreativeDeclaredAttributesEnumRichMediaCapabilityTypeFlash,
                shared.CreativeDeclaredAttributesEnumNonSkippableInstreamVideo,
                shared.CreativeDeclaredAttributesEnumRichMediaCapabilityTypeFlash,
            },
            DeclaredClickThroughUrls: []string{
                "doloribus",
                "quia",
            },
            DeclaredRestrictedCategories: []shared.CreativeDeclaredRestrictedCategoriesEnum{
                shared.CreativeDeclaredRestrictedCategoriesEnumAlcohol,
                shared.CreativeDeclaredRestrictedCategoriesEnumAlcohol,
                shared.CreativeDeclaredRestrictedCategoriesEnumRestrictedCategoryUnspecified,
                shared.CreativeDeclaredRestrictedCategoriesEnumRestrictedCategoryUnspecified,
            },
            DeclaredVendorIds: []int{
                365539,
                849337,
            },
            HTML: &shared.HTMLContent{
                Height: sdk.Int(201266),
                Snippet: sdk.String("sit"),
                Width: sdk.Int(487148),
            },
            ImpressionTrackingUrls: []string{
                "asperiores",
                "recusandae",
                "voluptates",
                "praesentium",
            },
            Native: &shared.NativeContent{
                AdvertiserName: sdk.String("dicta"),
                AppIcon: &shared.Image{
                    Height: sdk.Int(144179),
                    URL: sdk.String("sit"),
                    Width: sdk.Int(396234),
                },
                Body: sdk.String("necessitatibus"),
                CallToAction: sdk.String("sed"),
                ClickLinkURL: sdk.String("deleniti"),
                ClickTrackingURL: sdk.String("sunt"),
                Headline: sdk.String("nesciunt"),
                Image: &shared.Image{
                    Height: sdk.Int(963913),
                    URL: sdk.String("laborum"),
                    Width: sdk.Int(303421),
                },
                Logo: &shared.Image{
                    Height: sdk.Int(644223),
                    URL: sdk.String("modi"),
                    Width: sdk.Int(122085),
                },
                PriceDisplayText: sdk.String("impedit"),
                StarRating: sdk.Float64(2596),
                VideoURL: sdk.String("voluptatum"),
                VideoVastXML: sdk.String("ipsa"),
            },
            RenderURL: sdk.String("at"),
            RestrictedCategories: []shared.CreativeRestrictedCategoriesEnum{
                shared.CreativeRestrictedCategoriesEnumAlcohol,
            },
            Video: &shared.VideoContent{
                VideoMetadata: &shared.VideoMetadata{
                    Duration: sdk.String("aspernatur"),
                    IsValidVast: sdk.Bool(false),
                    IsVpaid: sdk.Bool(false),
                    MediaFiles: []shared.MediaFile{
                        shared.MediaFile{
                            Bitrate: sdk.String("sequi"),
                            MimeType: shared.MediaFileMimeTypeEnumMimeVideoWebm.ToPointer(),
                        },
                    },
                    SkipOffset: sdk.String("fuga"),
                    VastVersion: shared.VideoMetadataVastVersionEnumVastVersion40.ToPointer(),
                },
                VideoURL: sdk.String("eaque"),
                VideoVastXML: sdk.String("dolorem"),
            },
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("enim"),
        Name: "Danielle Willms",
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        UpdateMask: sdk.String("repellat"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.RealtimebiddingBuyersCreativesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Creative != nil {
        // handle response
    }
}
```

## RealtimebiddingBuyersList

Lists all buyer account information the calling buyer user or service account is permissioned to manage.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Buyers.RealtimebiddingBuyersList(ctx, operations.RealtimebiddingBuyersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("sed"),
        Key: sdk.String("beatae"),
        OauthToken: sdk.String("similique"),
        PageSize: sdk.Int64(408774),
        PageToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.RealtimebiddingBuyersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBuyersResponse != nil {
        // handle response
    }
}
```

## RealtimebiddingBuyersUserListsClose

Change the status of a user list to CLOSED. This prevents new users from being added to the user list.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Buyers.RealtimebiddingBuyersUserListsClose(ctx, operations.RealtimebiddingBuyersUserListsCloseRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "laudantium": "esse",
            "eveniet": "earum",
            "velit": "officiis",
        },
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("ipsam"),
        Name: "Leticia Hyatt",
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.RealtimebiddingBuyersUserListsCloseSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserList != nil {
        // handle response
    }
}
```

## RealtimebiddingBuyersUserListsCreate

Create a new user list.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Buyers.RealtimebiddingBuyersUserListsCreate(ctx, operations.RealtimebiddingBuyersUserListsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UserListInput: &shared.UserListInput{
            Description: sdk.String("eveniet"),
            DisplayName: sdk.String("dolor"),
            MembershipDurationDays: sdk.String("expedita"),
            URLRestriction: &shared.URLRestriction{
                EndDate: &shared.Date{
                    Day: sdk.Int(730003),
                    Month: sdk.Int(615277),
                    Year: sdk.Int(74921),
                },
                RestrictionType: shared.URLRestrictionRestrictionTypeEnumDoesNotStartWith.ToPointer(),
                StartDate: &shared.Date{
                    Day: sdk.Int(553315),
                    Month: sdk.Int(835646),
                    Year: sdk.Int(576657),
                },
                URL: sdk.String("iusto"),
            },
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("voluptates"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("tempora"),
        Parent: "quae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("rem"),
    }, operations.RealtimebiddingBuyersUserListsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserList != nil {
        // handle response
    }
}
```

## RealtimebiddingBuyersUserListsGet

Gets a user list by its name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Buyers.RealtimebiddingBuyersUserListsGet(ctx, operations.RealtimebiddingBuyersUserListsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("aliquam"),
        Name: "Ebony Donnelly IV",
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("cumque"),
        View: operations.RealtimebiddingBuyersUserListsGetViewEnumCreativeViewUnspecified.ToPointer(),
    }, operations.RealtimebiddingBuyersUserListsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserList != nil {
        // handle response
    }
}
```

## RealtimebiddingBuyersUserListsGetRemarketingTag

Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Buyers.RealtimebiddingBuyersUserListsGetRemarketingTag(ctx, operations.RealtimebiddingBuyersUserListsGetRemarketingTagRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("sequi"),
        Key: sdk.String("porro"),
        Name: "Robin Spinka III",
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("quia"),
    }, operations.RealtimebiddingBuyersUserListsGetRemarketingTagSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRemarketingTagResponse != nil {
        // handle response
    }
}
```

## RealtimebiddingBuyersUserListsList

Lists the user lists visible to the current user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Buyers.RealtimebiddingBuyersUserListsList(ctx, operations.RealtimebiddingBuyersUserListsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quia"),
        OauthToken: sdk.String("laudantium"),
        PageSize: sdk.Int64(152742),
        PageToken: sdk.String("odit"),
        Parent: "iusto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("repellendus"),
    }, operations.RealtimebiddingBuyersUserListsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserListsResponse != nil {
        // handle response
    }
}
```

## RealtimebiddingBuyersUserListsOpen

Change the status of a user list to OPEN. This allows new users to be added to the user list.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Buyers.RealtimebiddingBuyersUserListsOpen(ctx, operations.RealtimebiddingBuyersUserListsOpenRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "sint": "dolore",
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("quam"),
        Name: "Tom Wintheiser",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.RealtimebiddingBuyersUserListsOpenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserList != nil {
        // handle response
    }
}
```

## RealtimebiddingBuyersUserListsUpdate

Update the given user list. Only user lists with URLRestrictions can be updated.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Buyers.RealtimebiddingBuyersUserListsUpdate(ctx, operations.RealtimebiddingBuyersUserListsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserListInput: &shared.UserListInput{
            Description: sdk.String("ullam"),
            DisplayName: sdk.String("laborum"),
            MembershipDurationDays: sdk.String("voluptas"),
            URLRestriction: &shared.URLRestriction{
                EndDate: &shared.Date{
                    Day: sdk.Int(987371),
                    Month: sdk.Int(657862),
                    Year: sdk.Int(925994),
                },
                RestrictionType: shared.URLRestrictionRestrictionTypeEnumStartsWith.ToPointer(),
                StartDate: &shared.Date{
                    Day: sdk.Int(252567),
                    Month: sdk.Int(900368),
                    Year: sdk.Int(719469),
                },
                URL: sdk.String("maiores"),
            },
        },
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("sequi"),
        Key: sdk.String("sunt"),
        Name: "Shari Baumbach",
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.RealtimebiddingBuyersUserListsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserList != nil {
        // handle response
    }
}
```
