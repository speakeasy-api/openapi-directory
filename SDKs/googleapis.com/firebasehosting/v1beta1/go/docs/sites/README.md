# Sites

### Available Operations

* [FirebasehostingSitesChannelsCreate](#firebasehostingsiteschannelscreate) - Creates a new channel in the specified site.
* [FirebasehostingSitesChannelsList](#firebasehostingsiteschannelslist) - Lists the channels for the specified site. All sites have a default `live` channel.
* [FirebasehostingSitesDomainsCreate](#firebasehostingsitesdomainscreate) - Creates a domain mapping on the specified site.
* [FirebasehostingSitesDomainsList](#firebasehostingsitesdomainslist) - Lists the domains for the specified site.
* [FirebasehostingSitesDomainsUpdate](#firebasehostingsitesdomainsupdate) - Updates the specified domain mapping, creating the mapping as if it does not exist.
* [FirebasehostingSitesReleasesCreate](#firebasehostingsitesreleasescreate) - Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
* [FirebasehostingSitesReleasesList](#firebasehostingsitesreleaseslist) - Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
* [FirebasehostingSitesVersionsClone](#firebasehostingsitesversionsclone) - Creates a new version on the specified target site using the content of the specified version.
* [FirebasehostingSitesVersionsCreate](#firebasehostingsitesversionscreate) - Creates a new version for the specified site.
* [FirebasehostingSitesVersionsDelete](#firebasehostingsitesversionsdelete) - Deletes the specified version.
* [FirebasehostingSitesVersionsFilesList](#firebasehostingsitesversionsfileslist) - Lists the remaining files to be uploaded for the specified version.
* [FirebasehostingSitesVersionsGet](#firebasehostingsitesversionsget) - Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
* [FirebasehostingSitesVersionsList](#firebasehostingsitesversionslist) - Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
* [FirebasehostingSitesVersionsPatch](#firebasehostingsitesversionspatch) -  Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
* [FirebasehostingSitesVersionsPopulateFiles](#firebasehostingsitesversionspopulatefiles) -  Adds content files to the specified version. Each file must be under 2 GB.

## FirebasehostingSitesChannelsCreate

Creates a new channel in the specified site.

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
    res, err := s.Sites.FirebasehostingSitesChannelsCreate(ctx, operations.FirebasehostingSitesChannelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ChannelInput: &shared.ChannelInput{
            ExpireTime: sdk.String("hic"),
            Labels: map[string]string{
                "totam": "beatae",
                "commodi": "molestiae",
                "modi": "qui",
                "impedit": "cum",
            },
            Name: sdk.String("Edna Mante II"),
            Release: &shared.Release{
                Message: sdk.String("natus"),
                Name: sdk.String("Sheryl Fadel"),
                ReleaseTime: sdk.String("hic"),
                ReleaseUser: &shared.ActingUser{
                    Email: sdk.String("Marisa_Kirlin@hotmail.com"),
                    ImageURL: sdk.String("iure"),
                },
                Type: shared.ReleaseTypeEnumSiteDisable.ToPointer(),
                Version: &shared.Version{
                    Config: &shared.ServingConfig{
                        AppAssociation: shared.ServingConfigAppAssociationEnumNone.ToPointer(),
                        CleanUrls: sdk.Bool(false),
                        Headers: []shared.Header{
                            shared.Header{
                                Glob: sdk.String("ipsa"),
                                Headers: map[string]string{
                                    "est": "mollitia",
                                    "laborum": "dolores",
                                    "dolorem": "corporis",
                                    "explicabo": "nobis",
                                },
                                Regex: sdk.String("enim"),
                            },
                        },
                        I18n: &shared.I18nConfig{
                            Root: sdk.String("omnis"),
                        },
                        Redirects: []shared.Redirect{
                            shared.Redirect{
                                Glob: sdk.String("minima"),
                                Location: sdk.String("excepturi"),
                                Regex: sdk.String("accusantium"),
                                StatusCode: sdk.Int(438601),
                            },
                            shared.Redirect{
                                Glob: sdk.String("culpa"),
                                Location: sdk.String("doloribus"),
                                Regex: sdk.String("sapiente"),
                                StatusCode: sdk.Int(102044),
                            },
                        },
                        Rewrites: []shared.Rewrite{
                            shared.Rewrite{
                                DynamicLinks: sdk.Bool(false),
                                Function: sdk.String("dolorem"),
                                FunctionRegion: sdk.String("culpa"),
                                Glob: sdk.String("consequuntur"),
                                Path: sdk.String("repellat"),
                                Regex: sdk.String("mollitia"),
                                Run: &shared.CloudRunRewrite{
                                    Region: sdk.String("occaecati"),
                                    ServiceID: sdk.String("numquam"),
                                },
                            },
                            shared.Rewrite{
                                DynamicLinks: sdk.Bool(false),
                                Function: sdk.String("commodi"),
                                FunctionRegion: sdk.String("quam"),
                                Glob: sdk.String("molestiae"),
                                Path: sdk.String("velit"),
                                Regex: sdk.String("error"),
                                Run: &shared.CloudRunRewrite{
                                    Region: sdk.String("quia"),
                                    ServiceID: sdk.String("quis"),
                                },
                            },
                            shared.Rewrite{
                                DynamicLinks: sdk.Bool(false),
                                Function: sdk.String("vitae"),
                                FunctionRegion: sdk.String("laborum"),
                                Glob: sdk.String("animi"),
                                Path: sdk.String("enim"),
                                Regex: sdk.String("odit"),
                                Run: &shared.CloudRunRewrite{
                                    Region: sdk.String("quo"),
                                    ServiceID: sdk.String("sequi"),
                                },
                            },
                        },
                        TrailingSlashBehavior: shared.ServingConfigTrailingSlashBehaviorEnumRemove.ToPointer(),
                    },
                    CreateTime: sdk.String("ipsam"),
                    CreateUser: &shared.ActingUser{
                        Email: sdk.String("Reid62@yahoo.com"),
                        ImageURL: sdk.String("temporibus"),
                    },
                    DeleteTime: sdk.String("laborum"),
                    DeleteUser: &shared.ActingUser{
                        Email: sdk.String("Wanda.Wolf50@gmail.com"),
                        ImageURL: sdk.String("voluptatibus"),
                    },
                    FileCount: sdk.String("ipsa"),
                    FinalizeTime: sdk.String("omnis"),
                    FinalizeUser: &shared.ActingUser{
                        Email: sdk.String("Myrtis44@yahoo.com"),
                        ImageURL: sdk.String("ut"),
                    },
                    Labels: map[string]string{
                        "dicta": "corporis",
                        "dolore": "iusto",
                        "dicta": "harum",
                        "enim": "accusamus",
                    },
                    Name: sdk.String("Elvira Bergnaum"),
                    Status: shared.VersionStatusEnumDeleted.ToPointer(),
                    VersionBytes: sdk.String("excepturi"),
                },
            },
            RetainedReleaseCount: sdk.Int(865103),
            TTL: sdk.String("modi"),
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptates"),
        ChannelID: sdk.String("quasi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("veritatis"),
        Parent: "itaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.FirebasehostingSitesChannelsCreateSecurity{
        Option1: &operations.FirebasehostingSitesChannelsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Channel != nil {
        // handle response
    }
}
```

## FirebasehostingSitesChannelsList

Lists the channels for the specified site. All sites have a default `live` channel.

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
    res, err := s.Sites.FirebasehostingSitesChannelsList(ctx, operations.FirebasehostingSitesChannelsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("labore"),
        PageSize: sdk.Int64(264730),
        PageToken: sdk.String("qui"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.FirebasehostingSitesChannelsListSecurity{
        Option1: &operations.FirebasehostingSitesChannelsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChannelsResponse != nil {
        // handle response
    }
}
```

## FirebasehostingSitesDomainsCreate

Creates a domain mapping on the specified site.

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
    res, err := s.Sites.FirebasehostingSitesDomainsCreate(ctx, operations.FirebasehostingSitesDomainsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Domain: &shared.Domain{
            DomainName: sdk.String("assumenda"),
            DomainRedirect: &shared.DomainRedirect{
                DomainName: sdk.String("ipsam"),
                Type: shared.DomainRedirectTypeEnumRedirectTypeUnspecified.ToPointer(),
            },
            Provisioning: &shared.DomainProvisioning{
                CertChallengeDiscoveredTxt: []string{
                    "dolorum",
                },
                CertChallengeDNS: &shared.CertDNSChallenge{
                    DomainName: sdk.String("excepturi"),
                    Token: sdk.String("tempora"),
                },
                CertChallengeHTTP: &shared.CertHTTPChallenge{
                    Path: sdk.String("facilis"),
                    Token: sdk.String("tempore"),
                },
                CertStatus: shared.DomainProvisioningCertStatusEnumCertMissing.ToPointer(),
                DiscoveredIps: []string{
                    "eum",
                    "non",
                    "eligendi",
                    "sint",
                },
                DNSFetchTime: sdk.String("aliquid"),
                DNSStatus: shared.DomainProvisioningDNSStatusEnumDNSPartialMatch.ToPointer(),
                ExpectedIps: []string{
                    "sint",
                    "officia",
                    "dolor",
                    "debitis",
                },
            },
            Site: sdk.String("a"),
            Status: shared.DomainStatusEnumDomainVerificationRequired.ToPointer(),
            UpdateTime: sdk.String("in"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("magnam"),
        Parent: "cumque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.FirebasehostingSitesDomainsCreateSecurity{
        Option1: &operations.FirebasehostingSitesDomainsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Domain != nil {
        // handle response
    }
}
```

## FirebasehostingSitesDomainsList

Lists the domains for the specified site.

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
    res, err := s.Sites.FirebasehostingSitesDomainsList(ctx, operations.FirebasehostingSitesDomainsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("delectus"),
        PageSize: sdk.Int64(692532),
        PageToken: sdk.String("provident"),
        Parent: "nam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.FirebasehostingSitesDomainsListSecurity{
        Option1: &operations.FirebasehostingSitesDomainsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainsResponse != nil {
        // handle response
    }
}
```

## FirebasehostingSitesDomainsUpdate

Updates the specified domain mapping, creating the mapping as if it does not exist.

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
    res, err := s.Sites.FirebasehostingSitesDomainsUpdate(ctx, operations.FirebasehostingSitesDomainsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Domain: &shared.Domain{
            DomainName: sdk.String("amet"),
            DomainRedirect: &shared.DomainRedirect{
                DomainName: sdk.String("deserunt"),
                Type: shared.DomainRedirectTypeEnumRedirectTypeUnspecified.ToPointer(),
            },
            Provisioning: &shared.DomainProvisioning{
                CertChallengeDiscoveredTxt: []string{
                    "natus",
                    "omnis",
                },
                CertChallengeDNS: &shared.CertDNSChallenge{
                    DomainName: sdk.String("molestiae"),
                    Token: sdk.String("perferendis"),
                },
                CertChallengeHTTP: &shared.CertHTTPChallenge{
                    Path: sdk.String("nihil"),
                    Token: sdk.String("magnam"),
                },
                CertStatus: shared.DomainProvisioningCertStatusEnumCertActive.ToPointer(),
                DiscoveredIps: []string{
                    "labore",
                    "labore",
                    "suscipit",
                },
                DNSFetchTime: sdk.String("natus"),
                DNSStatus: shared.DomainProvisioningDNSStatusEnumDNSMatch.ToPointer(),
                ExpectedIps: []string{
                    "vero",
                    "aspernatur",
                },
            },
            Site: sdk.String("architecto"),
            Status: shared.DomainStatusEnumDomainChangePending.ToPointer(),
            UpdateTime: sdk.String("et"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("quos"),
        Key: sdk.String("sint"),
        Name: "Angie Wisozk",
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("odit"),
    }, operations.FirebasehostingSitesDomainsUpdateSecurity{
        Option1: &operations.FirebasehostingSitesDomainsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Domain != nil {
        // handle response
    }
}
```

## FirebasehostingSitesReleasesCreate

Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).

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
    res, err := s.Sites.FirebasehostingSitesReleasesCreate(ctx, operations.FirebasehostingSitesReleasesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Release: &shared.Release{
            Message: sdk.String("quasi"),
            Name: sdk.String("Melba Toy"),
            ReleaseTime: sdk.String("deleniti"),
            ReleaseUser: &shared.ActingUser{
                Email: sdk.String("Isaias91@hotmail.com"),
                ImageURL: sdk.String("ullam"),
            },
            Type: shared.ReleaseTypeEnumRollback.ToPointer(),
            Version: &shared.Version{
                Config: &shared.ServingConfig{
                    AppAssociation: shared.ServingConfigAppAssociationEnumAuto.ToPointer(),
                    CleanUrls: sdk.Bool(false),
                    Headers: []shared.Header{
                        shared.Header{
                            Glob: sdk.String("quibusdam"),
                            Headers: map[string]string{
                                "saepe": "pariatur",
                            },
                            Regex: sdk.String("accusantium"),
                        },
                        shared.Header{
                            Glob: sdk.String("consequuntur"),
                            Headers: map[string]string{
                                "natus": "magni",
                                "sunt": "quo",
                                "illum": "pariatur",
                            },
                            Regex: sdk.String("maxime"),
                        },
                        shared.Header{
                            Glob: sdk.String("ea"),
                            Headers: map[string]string{
                                "odit": "ea",
                                "accusantium": "ab",
                                "maiores": "quidem",
                            },
                            Regex: sdk.String("ipsam"),
                        },
                        shared.Header{
                            Glob: sdk.String("voluptate"),
                            Headers: map[string]string{
                                "nam": "eaque",
                                "pariatur": "nemo",
                            },
                            Regex: sdk.String("voluptatibus"),
                        },
                    },
                    I18n: &shared.I18nConfig{
                        Root: sdk.String("perferendis"),
                    },
                    Redirects: []shared.Redirect{
                        shared.Redirect{
                            Glob: sdk.String("amet"),
                            Location: sdk.String("aut"),
                            Regex: sdk.String("cumque"),
                            StatusCode: sdk.Int(359978),
                        },
                        shared.Redirect{
                            Glob: sdk.String("hic"),
                            Location: sdk.String("libero"),
                            Regex: sdk.String("nobis"),
                            StatusCode: sdk.Int(171629),
                        },
                        shared.Redirect{
                            Glob: sdk.String("quis"),
                            Location: sdk.String("totam"),
                            Regex: sdk.String("dignissimos"),
                            StatusCode: sdk.Int(54338),
                        },
                        shared.Redirect{
                            Glob: sdk.String("quis"),
                            Location: sdk.String("nesciunt"),
                            Regex: sdk.String("eos"),
                            StatusCode: sdk.Int(18521),
                        },
                    },
                    Rewrites: []shared.Rewrite{
                        shared.Rewrite{
                            DynamicLinks: sdk.Bool(false),
                            Function: sdk.String("minus"),
                            FunctionRegion: sdk.String("quam"),
                            Glob: sdk.String("dolor"),
                            Path: sdk.String("vero"),
                            Regex: sdk.String("nostrum"),
                            Run: &shared.CloudRunRewrite{
                                Region: sdk.String("hic"),
                                ServiceID: sdk.String("recusandae"),
                            },
                        },
                    },
                    TrailingSlashBehavior: shared.ServingConfigTrailingSlashBehaviorEnumAdd.ToPointer(),
                },
                CreateTime: sdk.String("facilis"),
                CreateUser: &shared.ActingUser{
                    Email: sdk.String("Alexandria50@yahoo.com"),
                    ImageURL: sdk.String("error"),
                },
                DeleteTime: sdk.String("eaque"),
                DeleteUser: &shared.ActingUser{
                    Email: sdk.String("Maximillian_Ferry26@yahoo.com"),
                    ImageURL: sdk.String("iste"),
                },
                FileCount: sdk.String("dolorum"),
                FinalizeTime: sdk.String("deleniti"),
                FinalizeUser: &shared.ActingUser{
                    Email: sdk.String("Lambert_Rolfson31@hotmail.com"),
                    ImageURL: sdk.String("quos"),
                },
                Labels: map[string]string{
                    "dolorem": "dolorem",
                    "dolor": "qui",
                },
                Name: sdk.String("Mindy Marks"),
                Status: shared.VersionStatusEnumDeleted.ToPointer(),
                VersionBytes: sdk.String("reiciendis"),
            },
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("ipsa"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("accusamus"),
        VersionName: sdk.String("quidem"),
    }, operations.FirebasehostingSitesReleasesCreateSecurity{
        Option1: &operations.FirebasehostingSitesReleasesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```

## FirebasehostingSitesReleasesList

Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.

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
    res, err := s.Sites.FirebasehostingSitesReleasesList(ctx, operations.FirebasehostingSitesReleasesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eos"),
        Fields: sdk.String("atque"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("fugiat"),
        PageSize: sdk.Int64(67249),
        PageToken: sdk.String("soluta"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.FirebasehostingSitesReleasesListSecurity{
        Option1: &operations.FirebasehostingSitesReleasesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReleasesResponse != nil {
        // handle response
    }
}
```

## FirebasehostingSitesVersionsClone

Creates a new version on the specified target site using the content of the specified version.

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
    res, err := s.Sites.FirebasehostingSitesVersionsClone(ctx, operations.FirebasehostingSitesVersionsCloneRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CloneVersionRequest: &shared.CloneVersionRequest{
            Exclude: &shared.PathFilter{
                Regexes: []string{
                    "necessitatibus",
                    "distinctio",
                    "asperiores",
                },
            },
            Finalize: sdk.Bool(false),
            Include: &shared.PathFilter{
                Regexes: []string{
                    "ipsum",
                    "voluptate",
                },
            },
            SourceVersion: sdk.String("id"),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("optio"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.FirebasehostingSitesVersionsCloneSecurity{
        Option1: &operations.FirebasehostingSitesVersionsCloneSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## FirebasehostingSitesVersionsCreate

Creates a new version for the specified site.

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
    res, err := s.Sites.FirebasehostingSitesVersionsCreate(ctx, operations.FirebasehostingSitesVersionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Version: &shared.Version{
            Config: &shared.ServingConfig{
                AppAssociation: shared.ServingConfigAppAssociationEnumNone.ToPointer(),
                CleanUrls: sdk.Bool(false),
                Headers: []shared.Header{
                    shared.Header{
                        Glob: sdk.String("repellendus"),
                        Headers: map[string]string{
                            "similique": "alias",
                            "at": "quaerat",
                            "tempora": "vel",
                        },
                        Regex: sdk.String("quod"),
                    },
                    shared.Header{
                        Glob: sdk.String("officiis"),
                        Headers: map[string]string{
                            "dolorum": "a",
                        },
                        Regex: sdk.String("esse"),
                    },
                },
                I18n: &shared.I18nConfig{
                    Root: sdk.String("harum"),
                },
                Redirects: []shared.Redirect{
                    shared.Redirect{
                        Glob: sdk.String("ipsum"),
                        Location: sdk.String("quisquam"),
                        Regex: sdk.String("tenetur"),
                        StatusCode: sdk.Int(229442),
                    },
                    shared.Redirect{
                        Glob: sdk.String("tempore"),
                        Location: sdk.String("accusamus"),
                        Regex: sdk.String("numquam"),
                        StatusCode: sdk.Int(313692),
                    },
                },
                Rewrites: []shared.Rewrite{
                    shared.Rewrite{
                        DynamicLinks: sdk.Bool(false),
                        Function: sdk.String("sapiente"),
                        FunctionRegion: sdk.String("totam"),
                        Glob: sdk.String("nihil"),
                        Path: sdk.String("sit"),
                        Regex: sdk.String("expedita"),
                        Run: &shared.CloudRunRewrite{
                            Region: sdk.String("neque"),
                            ServiceID: sdk.String("sed"),
                        },
                    },
                },
                TrailingSlashBehavior: shared.ServingConfigTrailingSlashBehaviorEnumAdd.ToPointer(),
            },
            CreateTime: sdk.String("libero"),
            CreateUser: &shared.ActingUser{
                Email: sdk.String("Lura27@yahoo.com"),
                ImageURL: sdk.String("qui"),
            },
            DeleteTime: sdk.String("cupiditate"),
            DeleteUser: &shared.ActingUser{
                Email: sdk.String("Salvador67@hotmail.com"),
                ImageURL: sdk.String("totam"),
            },
            FileCount: sdk.String("incidunt"),
            FinalizeTime: sdk.String("aspernatur"),
            FinalizeUser: &shared.ActingUser{
                Email: sdk.String("Mikayla.Purdy@gmail.com"),
                ImageURL: sdk.String("molestias"),
            },
            Labels: map[string]string{
                "qui": "neque",
                "fugit": "magni",
                "odio": "sunt",
                "ullam": "nam",
            },
            Name: sdk.String("George Runolfsdottir"),
            Status: shared.VersionStatusEnumVersionStatusUnspecified.ToPointer(),
            VersionBytes: sdk.String("saepe"),
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("quos"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("cupiditate"),
        Parent: "aperiam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        SizeBytes: sdk.String("dolorem"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("labore"),
        VersionID: sdk.String("adipisci"),
    }, operations.FirebasehostingSitesVersionsCreateSecurity{
        Option1: &operations.FirebasehostingSitesVersionsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Version != nil {
        // handle response
    }
}
```

## FirebasehostingSitesVersionsDelete

Deletes the specified version.

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
    res, err := s.Sites.FirebasehostingSitesVersionsDelete(ctx, operations.FirebasehostingSitesVersionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("quas"),
        Key: sdk.String("itaque"),
        Name: "Jodi Skiles",
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("qui"),
    }, operations.FirebasehostingSitesVersionsDeleteSecurity{
        Option1: &operations.FirebasehostingSitesVersionsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## FirebasehostingSitesVersionsFilesList

Lists the remaining files to be uploaded for the specified version.

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
    res, err := s.Sites.FirebasehostingSitesVersionsFilesList(ctx, operations.FirebasehostingSitesVersionsFilesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("vero"),
        PageSize: sdk.Int64(606476),
        PageToken: sdk.String("quis"),
        Parent: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        Status: operations.FirebasehostingSitesVersionsFilesListStatusEnumExpected.ToPointer(),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("vero"),
    }, operations.FirebasehostingSitesVersionsFilesListSecurity{
        Option1: &operations.FirebasehostingSitesVersionsFilesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVersionFilesResponse != nil {
        // handle response
    }
}
```

## FirebasehostingSitesVersionsGet

Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.

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
    res, err := s.Sites.FirebasehostingSitesVersionsGet(ctx, operations.FirebasehostingSitesVersionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("quod"),
        Key: sdk.String("odio"),
        Name: "Malcolm Swift",
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("natus"),
    }, operations.FirebasehostingSitesVersionsGetSecurity{
        Option1: &operations.FirebasehostingSitesVersionsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Version != nil {
        // handle response
    }
}
```

## FirebasehostingSitesVersionsList

Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.

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
    res, err := s.Sites.FirebasehostingSitesVersionsList(ctx, operations.FirebasehostingSitesVersionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("nulla"),
        Filter: sdk.String("fugit"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("maiores"),
        PageSize: sdk.Int64(985033),
        PageToken: sdk.String("iusto"),
        Parent: "eligendi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("officia"),
    }, operations.FirebasehostingSitesVersionsListSecurity{
        Option1: &operations.FirebasehostingSitesVersionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVersionsResponse != nil {
        // handle response
    }
}
```

## FirebasehostingSitesVersionsPatch

 Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.

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
    res, err := s.Sites.FirebasehostingSitesVersionsPatch(ctx, operations.FirebasehostingSitesVersionsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Version: &shared.Version{
            Config: &shared.ServingConfig{
                AppAssociation: shared.ServingConfigAppAssociationEnumAuto.ToPointer(),
                CleanUrls: sdk.Bool(false),
                Headers: []shared.Header{
                    shared.Header{
                        Glob: sdk.String("aspernatur"),
                        Headers: map[string]string{
                            "possimus": "magnam",
                            "ratione": "ex",
                        },
                        Regex: sdk.String("laudantium"),
                    },
                    shared.Header{
                        Glob: sdk.String("dicta"),
                        Headers: map[string]string{
                            "maiores": "quasi",
                        },
                        Regex: sdk.String("ex"),
                    },
                },
                I18n: &shared.I18nConfig{
                    Root: sdk.String("nulla"),
                },
                Redirects: []shared.Redirect{
                    shared.Redirect{
                        Glob: sdk.String("voluptatibus"),
                        Location: sdk.String("nostrum"),
                        Regex: sdk.String("sapiente"),
                        StatusCode: sdk.Int(788873),
                    },
                    shared.Redirect{
                        Glob: sdk.String("saepe"),
                        Location: sdk.String("ea"),
                        Regex: sdk.String("impedit"),
                        StatusCode: sdk.Int(359271),
                    },
                    shared.Redirect{
                        Glob: sdk.String("veniam"),
                        Location: sdk.String("aliquid"),
                        Regex: sdk.String("inventore"),
                        StatusCode: sdk.Int(301831),
                    },
                },
                Rewrites: []shared.Rewrite{
                    shared.Rewrite{
                        DynamicLinks: sdk.Bool(false),
                        Function: sdk.String("quo"),
                        FunctionRegion: sdk.String("consectetur"),
                        Glob: sdk.String("recusandae"),
                        Path: sdk.String("aspernatur"),
                        Regex: sdk.String("minima"),
                        Run: &shared.CloudRunRewrite{
                            Region: sdk.String("eaque"),
                            ServiceID: sdk.String("a"),
                        },
                    },
                    shared.Rewrite{
                        DynamicLinks: sdk.Bool(false),
                        Function: sdk.String("libero"),
                        FunctionRegion: sdk.String("aut"),
                        Glob: sdk.String("aut"),
                        Path: sdk.String("deleniti"),
                        Regex: sdk.String("impedit"),
                        Run: &shared.CloudRunRewrite{
                            Region: sdk.String("aliquam"),
                            ServiceID: sdk.String("fugit"),
                        },
                    },
                },
                TrailingSlashBehavior: shared.ServingConfigTrailingSlashBehaviorEnumRemove.ToPointer(),
            },
            CreateTime: sdk.String("inventore"),
            CreateUser: &shared.ActingUser{
                Email: sdk.String("Assunta_Pagac24@gmail.com"),
                ImageURL: sdk.String("eum"),
            },
            DeleteTime: sdk.String("autem"),
            DeleteUser: &shared.ActingUser{
                Email: sdk.String("Keagan.Simonis72@hotmail.com"),
                ImageURL: sdk.String("quasi"),
            },
            FileCount: sdk.String("tempora"),
            FinalizeTime: sdk.String("numquam"),
            FinalizeUser: &shared.ActingUser{
                Email: sdk.String("Larissa.Bednar@gmail.com"),
                ImageURL: sdk.String("odio"),
            },
            Labels: map[string]string{
                "esse": "esse",
                "rem": "fuga",
            },
            Name: sdk.String("Yvette Stehr"),
            Status: shared.VersionStatusEnumFinalized.ToPointer(),
            VersionBytes: sdk.String("assumenda"),
        },
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("ipsa"),
        Name: "Rickey DuBuque",
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UpdateMask: sdk.String("eius"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.FirebasehostingSitesVersionsPatchSecurity{
        Option1: &operations.FirebasehostingSitesVersionsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Version != nil {
        // handle response
    }
}
```

## FirebasehostingSitesVersionsPopulateFiles

 Adds content files to the specified version. Each file must be under 2 GB.

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
    res, err := s.Sites.FirebasehostingSitesVersionsPopulateFiles(ctx, operations.FirebasehostingSitesVersionsPopulateFilesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PopulateVersionFilesRequest: &shared.PopulateVersionFilesRequest{
            Files: map[string]string{
                "consequatur": "tempora",
                "debitis": "ipsam",
                "aspernatur": "sequi",
            },
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quod"),
        Parent: "dignissimos",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("totam"),
    }, operations.FirebasehostingSitesVersionsPopulateFilesSecurity{
        Option1: &operations.FirebasehostingSitesVersionsPopulateFilesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PopulateVersionFilesResponse != nil {
        // handle response
    }
}
```
