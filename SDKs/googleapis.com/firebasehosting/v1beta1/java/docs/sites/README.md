# sites

### Available Operations

* [firebasehostingSitesChannelsCreate](#firebasehostingsiteschannelscreate) - Creates a new channel in the specified site.
* [firebasehostingSitesChannelsList](#firebasehostingsiteschannelslist) - Lists the channels for the specified site. All sites have a default `live` channel.
* [firebasehostingSitesDomainsCreate](#firebasehostingsitesdomainscreate) - Creates a domain mapping on the specified site.
* [firebasehostingSitesDomainsList](#firebasehostingsitesdomainslist) - Lists the domains for the specified site.
* [firebasehostingSitesDomainsUpdate](#firebasehostingsitesdomainsupdate) - Updates the specified domain mapping, creating the mapping as if it does not exist.
* [firebasehostingSitesReleasesCreate](#firebasehostingsitesreleasescreate) - Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
* [firebasehostingSitesReleasesList](#firebasehostingsitesreleaseslist) - Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
* [firebasehostingSitesVersionsClone](#firebasehostingsitesversionsclone) - Creates a new version on the specified target site using the content of the specified version.
* [firebasehostingSitesVersionsCreate](#firebasehostingsitesversionscreate) - Creates a new version for the specified site.
* [firebasehostingSitesVersionsDelete](#firebasehostingsitesversionsdelete) - Deletes the specified version.
* [firebasehostingSitesVersionsFilesList](#firebasehostingsitesversionsfileslist) - Lists the remaining files to be uploaded for the specified version.
* [firebasehostingSitesVersionsGet](#firebasehostingsitesversionsget) - Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
* [firebasehostingSitesVersionsList](#firebasehostingsitesversionslist) - Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
* [firebasehostingSitesVersionsPatch](#firebasehostingsitesversionspatch) -  Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
* [firebasehostingSitesVersionsPopulateFiles](#firebasehostingsitesversionspopulatefiles) -  Adds content files to the specified version. Each file must be under 2 GB.

## firebasehostingSitesChannelsCreate

Creates a new channel in the specified site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesChannelsCreateRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesChannelsCreateResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesChannelsCreateSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesChannelsCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesChannelsCreateSecurityOption2;
import org.openapis.openapi.models.shared.ActingUser;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelInput;
import org.openapis.openapi.models.shared.CloudRunRewrite;
import org.openapis.openapi.models.shared.Header;
import org.openapis.openapi.models.shared.I18nConfig;
import org.openapis.openapi.models.shared.Redirect;
import org.openapis.openapi.models.shared.Release;
import org.openapis.openapi.models.shared.ReleaseTypeEnum;
import org.openapis.openapi.models.shared.Rewrite;
import org.openapis.openapi.models.shared.ServingConfig;
import org.openapis.openapi.models.shared.ServingConfigAppAssociationEnum;
import org.openapis.openapi.models.shared.ServingConfigTrailingSlashBehaviorEnum;
import org.openapis.openapi.models.shared.Version;
import org.openapis.openapi.models.shared.VersionStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesChannelsCreateRequest req = new FirebasehostingSitesChannelsCreateRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                channelInput = new ChannelInput() {{
                    expireTime = "ipsum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aspernatur", "perferendis");
                        put("ad", "natus");
                        put("sed", "iste");
                    }};
                    name = "Faye Howe";
                    release = new Release() {{
                        message = "fuga";
                        name = "Stacy Moore";
                        releaseTime = "quidem";
                        releaseUser = new ActingUser() {{
                            email = "Andy_Wisozk67@gmail.com";
                            imageUrl = "dolores";
                        }};;
                        type = ReleaseTypeEnum.TYPE_UNSPECIFIED;
                        version = new Version() {{
                            config = new ServingConfig() {{
                                appAssociation = ServingConfigAppAssociationEnum.AUTO;
                                cleanUrls = false;
                                headers = new org.openapis.openapi.models.shared.Header[]{{
                                    add(new Header() {{
                                        glob = "nobis";
                                        headers = new java.util.HashMap<String, String>() {{
                                            put("omnis", "nemo");
                                            put("minima", "excepturi");
                                        }};
                                        regex = "accusantium";
                                    }}),
                                }};
                                i18n = new I18nConfig() {{
                                    root = "iure";
                                }};;
                                redirects = new org.openapis.openapi.models.shared.Redirect[]{{
                                    add(new Redirect() {{
                                        glob = "doloribus";
                                        location = "sapiente";
                                        regex = "architecto";
                                        statusCode = 652790;
                                    }}),
                                    add(new Redirect() {{
                                        glob = "dolorem";
                                        location = "culpa";
                                        regex = "consequuntur";
                                        statusCode = 995300;
                                    }}),
                                    add(new Redirect() {{
                                        glob = "mollitia";
                                        location = "occaecati";
                                        regex = "numquam";
                                        statusCode = 414369;
                                    }}),
                                }};
                                rewrites = new org.openapis.openapi.models.shared.Rewrite[]{{
                                    add(new Rewrite() {{
                                        dynamicLinks = false;
                                        function = "molestiae";
                                        functionRegion = "velit";
                                        glob = "error";
                                        path = "quia";
                                        regex = "quis";
                                        run = new CloudRunRewrite() {{
                                            region = "vitae";
                                            serviceId = "laborum";
                                        }};
                                    }}),
                                    add(new Rewrite() {{
                                        dynamicLinks = false;
                                        function = "animi";
                                        functionRegion = "enim";
                                        glob = "odit";
                                        path = "quo";
                                        regex = "sequi";
                                        run = new CloudRunRewrite() {{
                                            region = "tenetur";
                                            serviceId = "ipsam";
                                        }};
                                    }}),
                                }};
                                trailingSlashBehavior = ServingConfigTrailingSlashBehaviorEnum.ADD;
                            }};;
                            createTime = "possimus";
                            createUser = new ActingUser() {{
                                email = "Avery_Mueller9@gmail.com";
                                imageUrl = "reiciendis";
                            }};;
                            deleteTime = "voluptatibus";
                            deleteUser = new ActingUser() {{
                                email = "Jane.Langosh60@hotmail.com";
                                imageUrl = "voluptate";
                            }};;
                            fileCount = "cum";
                            finalizeTime = "perferendis";
                            finalizeUser = new ActingUser() {{
                                email = "Iliana.Grady35@gmail.com";
                                imageUrl = "dolore";
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("dicta", "harum");
                                put("enim", "accusamus");
                            }};
                            name = "Elvira Bergnaum";
                            status = VersionStatusEnum.DELETED;
                            versionBytes = "excepturi";
                        }};;
                    }};;
                    retainedReleaseCount = 865103;
                    ttl = "modi";
                }};;
                accessToken = "praesentium";
                alt = AltEnum.MEDIA;
                callback = "voluptates";
                channelId = "quasi";
                fields = "repudiandae";
                key = "sint";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "incidunt";
                uploadProtocol = "enim";
            }};            

            FirebasehostingSitesChannelsCreateResponse res = sdk.sites.firebasehostingSitesChannelsCreate(req, new FirebasehostingSitesChannelsCreateSecurity() {{
                option1 = new FirebasehostingSitesChannelsCreateSecurityOption1("consequatur", "est") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingSitesChannelsList

Lists the channels for the specified site. All sites have a default `live` channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesChannelsListRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesChannelsListResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesChannelsListSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesChannelsListSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesChannelsListSecurityOption2;
import org.openapis.openapi.models.operations.FirebasehostingSitesChannelsListSecurityOption3;
import org.openapis.openapi.models.operations.FirebasehostingSitesChannelsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesChannelsListRequest req = new FirebasehostingSitesChannelsListRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "labore";
                key = "modi";
                oauthToken = "qui";
                pageSize = 397821L;
                pageToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "perferendis";
                uploadProtocol = "magni";
            }};            

            FirebasehostingSitesChannelsListResponse res = sdk.sites.firebasehostingSitesChannelsList(req, new FirebasehostingSitesChannelsListSecurity() {{
                option1 = new FirebasehostingSitesChannelsListSecurityOption1("assumenda", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingSitesDomainsCreate

Creates a domain mapping on the specified site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsCreateRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsCreateResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsCreateSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertDnsChallenge;
import org.openapis.openapi.models.shared.CertHttpChallenge;
import org.openapis.openapi.models.shared.Domain;
import org.openapis.openapi.models.shared.DomainProvisioning;
import org.openapis.openapi.models.shared.DomainProvisioningCertStatusEnum;
import org.openapis.openapi.models.shared.DomainProvisioningDnsStatusEnum;
import org.openapis.openapi.models.shared.DomainRedirect;
import org.openapis.openapi.models.shared.DomainRedirectTypeEnum;
import org.openapis.openapi.models.shared.DomainStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesDomainsCreateRequest req = new FirebasehostingSitesDomainsCreateRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                domain = new Domain() {{
                    domainName = "dolorum";
                    domainRedirect = new DomainRedirect() {{
                        domainName = "excepturi";
                        type = DomainRedirectTypeEnum.REDIRECT_TYPE_UNSPECIFIED;
                    }};;
                    provisioning = new DomainProvisioning() {{
                        certChallengeDiscoveredTxt = new String[]{{
                            add("tempore"),
                            add("labore"),
                            add("delectus"),
                        }};
                        certChallengeDns = new CertDnsChallenge() {{
                            domainName = "eum";
                            token = "non";
                        }};;
                        certChallengeHttp = new CertHttpChallenge() {{
                            path = "eligendi";
                            token = "sint";
                        }};;
                        certStatus = DomainProvisioningCertStatusEnum.CERT_MISSING;
                        discoveredIps = new String[]{{
                            add("necessitatibus"),
                            add("sint"),
                            add("officia"),
                        }};
                        dnsFetchTime = "dolor";
                        dnsStatus = DomainProvisioningDnsStatusEnum.DNS_EXTRANEOUS_MATCH;
                        expectedIps = new String[]{{
                            add("dolorum"),
                            add("in"),
                            add("in"),
                            add("illum"),
                        }};
                    }};;
                    site = "maiores";
                    status = DomainStatusEnum.DOMAIN_VERIFICATION_REQUIRED;
                    updateTime = "dicta";
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "ea";
                key = "aliquid";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "non";
                uploadProtocol = "occaecati";
            }};            

            FirebasehostingSitesDomainsCreateResponse res = sdk.sites.firebasehostingSitesDomainsCreate(req, new FirebasehostingSitesDomainsCreateSecurity() {{
                option1 = new FirebasehostingSitesDomainsCreateSecurityOption1("enim", "accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.domain != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingSitesDomainsList

Lists the domains for the specified site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsListRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsListResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsListSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsListSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsListSecurityOption2;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsListSecurityOption3;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesDomainsListRequest req = new FirebasehostingSitesDomainsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "blanditiis";
                key = "deleniti";
                oauthToken = "sapiente";
                pageSize = 230533L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "vel";
                uploadProtocol = "natus";
            }};            

            FirebasehostingSitesDomainsListResponse res = sdk.sites.firebasehostingSitesDomainsList(req, new FirebasehostingSitesDomainsListSecurity() {{
                option1 = new FirebasehostingSitesDomainsListSecurityOption1("omnis", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingSitesDomainsUpdate

Updates the specified domain mapping, creating the mapping as if it does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsUpdateRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsUpdateResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsUpdateSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesDomainsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertDnsChallenge;
import org.openapis.openapi.models.shared.CertHttpChallenge;
import org.openapis.openapi.models.shared.Domain;
import org.openapis.openapi.models.shared.DomainProvisioning;
import org.openapis.openapi.models.shared.DomainProvisioningCertStatusEnum;
import org.openapis.openapi.models.shared.DomainProvisioningDnsStatusEnum;
import org.openapis.openapi.models.shared.DomainRedirect;
import org.openapis.openapi.models.shared.DomainRedirectTypeEnum;
import org.openapis.openapi.models.shared.DomainStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesDomainsUpdateRequest req = new FirebasehostingSitesDomainsUpdateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                domain = new Domain() {{
                    domainName = "magnam";
                    domainRedirect = new DomainRedirect() {{
                        domainName = "distinctio";
                        type = DomainRedirectTypeEnum.MOVED_PERMANENTLY;
                    }};;
                    provisioning = new DomainProvisioning() {{
                        certChallengeDiscoveredTxt = new String[]{{
                            add("labore"),
                            add("suscipit"),
                        }};
                        certChallengeDns = new CertDnsChallenge() {{
                            domainName = "natus";
                            token = "nobis";
                        }};;
                        certChallengeHttp = new CertHttpChallenge() {{
                            path = "eum";
                            token = "vero";
                        }};;
                        certStatus = DomainProvisioningCertStatusEnum.CERT_STATUS_UNSPECIFIED;
                        discoveredIps = new String[]{{
                            add("magnam"),
                        }};
                        dnsFetchTime = "et";
                        dnsStatus = DomainProvisioningDnsStatusEnum.DNS_PARTIAL_MATCH;
                        expectedIps = new String[]{{
                            add("provident"),
                            add("quos"),
                        }};
                    }};;
                    site = "sint";
                    status = DomainStatusEnum.DOMAIN_STATUS_UNSPECIFIED;
                    updateTime = "mollitia";
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "ad";
                fields = "eum";
                key = "dolor";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "nemo";
                uploadProtocol = "quasi";
            }};            

            FirebasehostingSitesDomainsUpdateResponse res = sdk.sites.firebasehostingSitesDomainsUpdate(req, new FirebasehostingSitesDomainsUpdateSecurity() {{
                option1 = new FirebasehostingSitesDomainsUpdateSecurityOption1("iure", "doloribus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.domain != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingSitesReleasesCreate

Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesReleasesCreateRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesReleasesCreateResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesReleasesCreateSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesReleasesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesReleasesCreateSecurityOption2;
import org.openapis.openapi.models.shared.ActingUser;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudRunRewrite;
import org.openapis.openapi.models.shared.Header;
import org.openapis.openapi.models.shared.I18nConfig;
import org.openapis.openapi.models.shared.Redirect;
import org.openapis.openapi.models.shared.Release;
import org.openapis.openapi.models.shared.ReleaseTypeEnum;
import org.openapis.openapi.models.shared.Rewrite;
import org.openapis.openapi.models.shared.ServingConfig;
import org.openapis.openapi.models.shared.ServingConfigAppAssociationEnum;
import org.openapis.openapi.models.shared.ServingConfigTrailingSlashBehaviorEnum;
import org.openapis.openapi.models.shared.Version;
import org.openapis.openapi.models.shared.VersionStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesReleasesCreateRequest req = new FirebasehostingSitesReleasesCreateRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                release = new Release() {{
                    message = "maxime";
                    name = "Mr. Andres King";
                    releaseTime = "ullam";
                    releaseUser = new ActingUser() {{
                        email = "Janessa.Zulauf90@hotmail.com";
                        imageUrl = "pariatur";
                    }};;
                    type = ReleaseTypeEnum.TYPE_UNSPECIFIED;
                    version = new Version() {{
                        config = new ServingConfig() {{
                            appAssociation = ServingConfigAppAssociationEnum.AUTO;
                            cleanUrls = false;
                            headers = new org.openapis.openapi.models.shared.Header[]{{
                                add(new Header() {{
                                    glob = "natus";
                                    headers = new java.util.HashMap<String, String>() {{
                                        put("sunt", "quo");
                                    }};
                                    regex = "illum";
                                }}),
                                add(new Header() {{
                                    glob = "pariatur";
                                    headers = new java.util.HashMap<String, String>() {{
                                        put("ea", "excepturi");
                                        put("odit", "ea");
                                        put("accusantium", "ab");
                                        put("maiores", "quidem");
                                    }};
                                    regex = "ipsam";
                                }}),
                                add(new Header() {{
                                    glob = "voluptate";
                                    headers = new java.util.HashMap<String, String>() {{
                                        put("nam", "eaque");
                                        put("pariatur", "nemo");
                                    }};
                                    regex = "voluptatibus";
                                }}),
                            }};
                            i18n = new I18nConfig() {{
                                root = "perferendis";
                            }};;
                            redirects = new org.openapis.openapi.models.shared.Redirect[]{{
                                add(new Redirect() {{
                                    glob = "amet";
                                    location = "aut";
                                    regex = "cumque";
                                    statusCode = 359978;
                                }}),
                                add(new Redirect() {{
                                    glob = "hic";
                                    location = "libero";
                                    regex = "nobis";
                                    statusCode = 171629;
                                }}),
                                add(new Redirect() {{
                                    glob = "quis";
                                    location = "totam";
                                    regex = "dignissimos";
                                    statusCode = 54338;
                                }}),
                                add(new Redirect() {{
                                    glob = "quis";
                                    location = "nesciunt";
                                    regex = "eos";
                                    statusCode = 18521;
                                }}),
                            }};
                            rewrites = new org.openapis.openapi.models.shared.Rewrite[]{{
                                add(new Rewrite() {{
                                    dynamicLinks = false;
                                    function = "minus";
                                    functionRegion = "quam";
                                    glob = "dolor";
                                    path = "vero";
                                    regex = "nostrum";
                                    run = new CloudRunRewrite() {{
                                        region = "hic";
                                        serviceId = "recusandae";
                                    }};
                                }}),
                            }};
                            trailingSlashBehavior = ServingConfigTrailingSlashBehaviorEnum.ADD;
                        }};;
                        createTime = "facilis";
                        createUser = new ActingUser() {{
                            email = "Alexandria50@yahoo.com";
                            imageUrl = "error";
                        }};;
                        deleteTime = "eaque";
                        deleteUser = new ActingUser() {{
                            email = "Maximillian_Ferry26@yahoo.com";
                            imageUrl = "iste";
                        }};;
                        fileCount = "dolorum";
                        finalizeTime = "deleniti";
                        finalizeUser = new ActingUser() {{
                            email = "Lambert_Rolfson31@hotmail.com";
                            imageUrl = "quos";
                        }};;
                        labels = new java.util.HashMap<String, String>() {{
                            put("dolorem", "dolorem");
                            put("dolor", "qui");
                        }};
                        name = "Mindy Marks";
                        status = VersionStatusEnum.DELETED;
                        versionBytes = "reiciendis";
                    }};;
                }};;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "veritatis";
                key = "ipsa";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "odio";
                uploadProtocol = "quaerat";
                versionName = "accusamus";
            }};            

            FirebasehostingSitesReleasesCreateResponse res = sdk.sites.firebasehostingSitesReleasesCreate(req, new FirebasehostingSitesReleasesCreateSecurity() {{
                option1 = new FirebasehostingSitesReleasesCreateSecurityOption1("quidem", "voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.release != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingSitesReleasesList

Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesReleasesListRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesReleasesListResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesReleasesListSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesReleasesListSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesReleasesListSecurityOption2;
import org.openapis.openapi.models.operations.FirebasehostingSitesReleasesListSecurityOption3;
import org.openapis.openapi.models.operations.FirebasehostingSitesReleasesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesReleasesListRequest req = new FirebasehostingSitesReleasesListRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "sit";
                fields = "fugiat";
                key = "ab";
                oauthToken = "soluta";
                pageSize = 679393L;
                pageToken = "iusto";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "dolorum";
                uploadProtocol = "deleniti";
            }};            

            FirebasehostingSitesReleasesListResponse res = sdk.sites.firebasehostingSitesReleasesList(req, new FirebasehostingSitesReleasesListSecurity() {{
                option1 = new FirebasehostingSitesReleasesListSecurityOption1("omnis", "necessitatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listReleasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingSitesVersionsClone

Creates a new version on the specified target site using the content of the specified version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsCloneRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsCloneResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsCloneSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsCloneSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsCloneSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloneVersionRequest;
import org.openapis.openapi.models.shared.PathFilter;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesVersionsCloneRequest req = new FirebasehostingSitesVersionsCloneRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                cloneVersionRequest = new CloneVersionRequest() {{
                    exclude = new PathFilter() {{
                        regexes = new String[]{{
                            add("ipsum"),
                            add("voluptate"),
                        }};
                    }};;
                    finalize = false;
                    include = new PathFilter() {{
                        regexes = new String[]{{
                            add("saepe"),
                            add("eius"),
                            add("aspernatur"),
                        }};
                    }};;
                    sourceVersion = "perferendis";
                }};;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "ad";
                key = "saepe";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "provident";
                uploadProtocol = "minima";
            }};            

            FirebasehostingSitesVersionsCloneResponse res = sdk.sites.firebasehostingSitesVersionsClone(req, new FirebasehostingSitesVersionsCloneSecurity() {{
                option1 = new FirebasehostingSitesVersionsCloneSecurityOption1("repellendus", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingSitesVersionsCreate

Creates a new version for the specified site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsCreateRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsCreateResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsCreateSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsCreateSecurityOption2;
import org.openapis.openapi.models.shared.ActingUser;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudRunRewrite;
import org.openapis.openapi.models.shared.Header;
import org.openapis.openapi.models.shared.I18nConfig;
import org.openapis.openapi.models.shared.Redirect;
import org.openapis.openapi.models.shared.Rewrite;
import org.openapis.openapi.models.shared.ServingConfig;
import org.openapis.openapi.models.shared.ServingConfigAppAssociationEnum;
import org.openapis.openapi.models.shared.ServingConfigTrailingSlashBehaviorEnum;
import org.openapis.openapi.models.shared.Version;
import org.openapis.openapi.models.shared.VersionStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesVersionsCreateRequest req = new FirebasehostingSitesVersionsCreateRequest("similique") {{
                dollarXgafv = XgafvEnum.ONE;
                version = new Version() {{
                    config = new ServingConfig() {{
                        appAssociation = ServingConfigAppAssociationEnum.NONE;
                        cleanUrls = false;
                        headers = new org.openapis.openapi.models.shared.Header[]{{
                            add(new Header() {{
                                glob = "tempora";
                                headers = new java.util.HashMap<String, String>() {{
                                    put("quod", "officiis");
                                    put("qui", "dolorum");
                                }};
                                regex = "a";
                            }}),
                            add(new Header() {{
                                glob = "esse";
                                headers = new java.util.HashMap<String, String>() {{
                                    put("iusto", "ipsum");
                                    put("quisquam", "tenetur");
                                    put("amet", "tempore");
                                }};
                                regex = "accusamus";
                            }}),
                        }};
                        i18n = new I18nConfig() {{
                            root = "numquam";
                        }};;
                        redirects = new org.openapis.openapi.models.shared.Redirect[]{{
                            add(new Redirect() {{
                                glob = "dolorem";
                                location = "sapiente";
                                regex = "totam";
                                statusCode = 471752;
                            }}),
                            add(new Redirect() {{
                                glob = "sit";
                                location = "expedita";
                                regex = "neque";
                                statusCode = 153694;
                            }}),
                        }};
                        rewrites = new org.openapis.openapi.models.shared.Rewrite[]{{
                            add(new Rewrite() {{
                                dynamicLinks = false;
                                function = "libero";
                                functionRegion = "voluptas";
                                glob = "deserunt";
                                path = "quam";
                                regex = "ipsum";
                                run = new CloudRunRewrite() {{
                                    region = "incidunt";
                                    serviceId = "qui";
                                }};
                            }}),
                            add(new Rewrite() {{
                                dynamicLinks = false;
                                function = "cupiditate";
                                functionRegion = "maxime";
                                glob = "pariatur";
                                path = "soluta";
                                regex = "dicta";
                                run = new CloudRunRewrite() {{
                                    region = "laborum";
                                    serviceId = "totam";
                                }};
                            }}),
                        }};
                        trailingSlashBehavior = ServingConfigTrailingSlashBehaviorEnum.TRAILING_SLASH_BEHAVIOR_UNSPECIFIED;
                    }};;
                    createTime = "aspernatur";
                    createUser = new ActingUser() {{
                        email = "Mikayla.Purdy@gmail.com";
                        imageUrl = "molestias";
                    }};;
                    deleteTime = "temporibus";
                    deleteUser = new ActingUser() {{
                        email = "Conor48@gmail.com";
                        imageUrl = "sunt";
                    }};;
                    fileCount = "ullam";
                    finalizeTime = "nam";
                    finalizeUser = new ActingUser() {{
                        email = "Alexander_Runolfsdottir9@hotmail.com";
                        imageUrl = "saepe";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("veritatis", "nobis");
                    }};
                    name = "Dr. Randolph McDermott";
                    status = VersionStatusEnum.FINALIZED;
                    versionBytes = "labore";
                }};;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "quae";
                key = "aut";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "itaque";
                sizeBytes = "consequatur";
                uploadType = "est";
                uploadProtocol = "repellendus";
                versionId = "porro";
            }};            

            FirebasehostingSitesVersionsCreateResponse res = sdk.sites.firebasehostingSitesVersionsCreate(req, new FirebasehostingSitesVersionsCreateSecurity() {{
                option1 = new FirebasehostingSitesVersionsCreateSecurityOption1("doloribus", "ut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.version != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingSitesVersionsDelete

Deletes the specified version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsDeleteRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsDeleteResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsDeleteSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesVersionsDeleteRequest req = new FirebasehostingSitesVersionsDeleteRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "qui";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "odio";
                key = "occaecati";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "vero";
                uploadProtocol = "omnis";
            }};            

            FirebasehostingSitesVersionsDeleteResponse res = sdk.sites.firebasehostingSitesVersionsDelete(req, new FirebasehostingSitesVersionsDeleteSecurity() {{
                option1 = new FirebasehostingSitesVersionsDeleteSecurityOption1("quis", "ipsum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingSitesVersionsFilesList

Lists the remaining files to be uploaded for the specified version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsFilesListRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsFilesListResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsFilesListSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsFilesListSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsFilesListSecurityOption2;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsFilesListSecurityOption3;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsFilesListSecurityOption4;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsFilesListStatusEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesVersionsFilesListRequest req = new FirebasehostingSitesVersionsFilesListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "dignissimos";
                key = "hic";
                oauthToken = "distinctio";
                pageSize = 799203L;
                pageToken = "odio";
                prettyPrint = false;
                quotaUser = "similique";
                status = FirebasehostingSitesVersionsFilesListStatusEnum.ACTIVE;
                uploadType = "vero";
                uploadProtocol = "ducimus";
            }};            

            FirebasehostingSitesVersionsFilesListResponse res = sdk.sites.firebasehostingSitesVersionsFilesList(req, new FirebasehostingSitesVersionsFilesListSecurity() {{
                option1 = new FirebasehostingSitesVersionsFilesListSecurityOption1("dolore", "quibusdam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listVersionFilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingSitesVersionsGet

Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsGetRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsGetResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsGetSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsGetSecurityOption2;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsGetSecurityOption3;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesVersionsGetRequest req = new FirebasehostingSitesVersionsGetRequest("illum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "voluptatibus";
                key = "exercitationem";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "porro";
                uploadProtocol = "maiores";
            }};            

            FirebasehostingSitesVersionsGetResponse res = sdk.sites.firebasehostingSitesVersionsGet(req, new FirebasehostingSitesVersionsGetSecurity() {{
                option1 = new FirebasehostingSitesVersionsGetSecurityOption1("doloribus", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.version != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingSitesVersionsList

Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsListRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsListResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsListSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsListSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsListSecurityOption2;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsListSecurityOption3;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesVersionsListRequest req = new FirebasehostingSitesVersionsListRequest("eligendi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                fields = "ipsam";
                filter = "ea";
                key = "aspernatur";
                oauthToken = "vel";
                pageSize = 822118L;
                pageToken = "magnam";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "ex";
                uploadProtocol = "laudantium";
            }};            

            FirebasehostingSitesVersionsListResponse res = sdk.sites.firebasehostingSitesVersionsList(req, new FirebasehostingSitesVersionsListSecurity() {{
                option1 = new FirebasehostingSitesVersionsListSecurityOption1("dicta", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingSitesVersionsPatch

 Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsPatchRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsPatchResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsPatchSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsPatchSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsPatchSecurityOption2;
import org.openapis.openapi.models.shared.ActingUser;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudRunRewrite;
import org.openapis.openapi.models.shared.Header;
import org.openapis.openapi.models.shared.I18nConfig;
import org.openapis.openapi.models.shared.Redirect;
import org.openapis.openapi.models.shared.Rewrite;
import org.openapis.openapi.models.shared.ServingConfig;
import org.openapis.openapi.models.shared.ServingConfigAppAssociationEnum;
import org.openapis.openapi.models.shared.ServingConfigTrailingSlashBehaviorEnum;
import org.openapis.openapi.models.shared.Version;
import org.openapis.openapi.models.shared.VersionStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesVersionsPatchRequest req = new FirebasehostingSitesVersionsPatchRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                version = new Version() {{
                    config = new ServingConfig() {{
                        appAssociation = ServingConfigAppAssociationEnum.AUTO;
                        cleanUrls = false;
                        headers = new org.openapis.openapi.models.shared.Header[]{{
                            add(new Header() {{
                                glob = "excepturi";
                                headers = new java.util.HashMap<String, String>() {{
                                    put("nostrum", "sapiente");
                                    put("quisquam", "saepe");
                                    put("ea", "impedit");
                                    put("corporis", "veniam");
                                }};
                                regex = "aliquid";
                            }}),
                            add(new Header() {{
                                glob = "inventore";
                                headers = new java.util.HashMap<String, String>() {{
                                    put("ea", "quo");
                                    put("consectetur", "recusandae");
                                }};
                                regex = "aspernatur";
                            }}),
                            add(new Header() {{
                                glob = "minima";
                                headers = new java.util.HashMap<String, String>() {{
                                    put("a", "libero");
                                }};
                                regex = "aut";
                            }}),
                            add(new Header() {{
                                glob = "aut";
                                headers = new java.util.HashMap<String, String>() {{
                                    put("impedit", "aliquam");
                                    put("fugit", "accusamus");
                                    put("inventore", "non");
                                }};
                                regex = "et";
                            }}),
                        }};
                        i18n = new I18nConfig() {{
                            root = "dolorum";
                        }};;
                        redirects = new org.openapis.openapi.models.shared.Redirect[]{{
                            add(new Redirect() {{
                                glob = "placeat";
                                location = "velit";
                                regex = "eum";
                                statusCode = 420539;
                            }}),
                            add(new Redirect() {{
                                glob = "nobis";
                                location = "quas";
                                regex = "assumenda";
                                statusCode = 860552;
                            }}),
                            add(new Redirect() {{
                                glob = "voluptas";
                                location = "libero";
                                regex = "quasi";
                                statusCode = 270328;
                            }}),
                        }};
                        rewrites = new org.openapis.openapi.models.shared.Rewrite[]{{
                            add(new Rewrite() {{
                                dynamicLinks = false;
                                function = "explicabo";
                                functionRegion = "provident";
                                glob = "ipsa";
                                path = "molestiae";
                                regex = "magnam";
                                run = new CloudRunRewrite() {{
                                    region = "odio";
                                    serviceId = "eius";
                                }};
                            }}),
                            add(new Rewrite() {{
                                dynamicLinks = false;
                                function = "esse";
                                functionRegion = "esse";
                                glob = "rem";
                                path = "fuga";
                                regex = "reprehenderit";
                                run = new CloudRunRewrite() {{
                                    region = "quidem";
                                    serviceId = "fugiat";
                                }};
                            }}),
                        }};
                        trailingSlashBehavior = ServingConfigTrailingSlashBehaviorEnum.TRAILING_SLASH_BEHAVIOR_UNSPECIFIED;
                    }};;
                    createTime = "eum";
                    createUser = new ActingUser() {{
                        email = "Reyna_Davis@yahoo.com";
                        imageUrl = "veritatis";
                    }};;
                    deleteTime = "ipsa";
                    deleteUser = new ActingUser() {{
                        email = "Mavis_DuBuque77@yahoo.com";
                        imageUrl = "fuga";
                    }};;
                    fileCount = "eius";
                    finalizeTime = "eos";
                    finalizeUser = new ActingUser() {{
                        email = "Ansley27@yahoo.com";
                        imageUrl = "debitis";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("aspernatur", "sequi");
                        put("quo", "esse");
                    }};
                    name = "Kevin Rau";
                    status = VersionStatusEnum.VERSION_STATUS_UNSPECIFIED;
                    versionBytes = "nihil";
                }};;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                fields = "odio";
                key = "occaecati";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "sapiente";
                updateMask = "dolores";
                uploadType = "deserunt";
                uploadProtocol = "molestiae";
            }};            

            FirebasehostingSitesVersionsPatchResponse res = sdk.sites.firebasehostingSitesVersionsPatch(req, new FirebasehostingSitesVersionsPatchSecurity() {{
                option1 = new FirebasehostingSitesVersionsPatchSecurityOption1("accusantium", "porro") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.version != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingSitesVersionsPopulateFiles

 Adds content files to the specified version. Each file must be under 2 GB.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsPopulateFilesRequest;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsPopulateFilesResponse;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsPopulateFilesSecurity;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsPopulateFilesSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingSitesVersionsPopulateFilesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PopulateVersionFilesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingSitesVersionsPopulateFilesRequest req = new FirebasehostingSitesVersionsPopulateFilesRequest("eum") {{
                dollarXgafv = XgafvEnum.TWO;
                populateVersionFilesRequest = new PopulateVersionFilesRequest() {{
                    files = new java.util.HashMap<String, String>() {{
                        put("consequuntur", "deleniti");
                        put("fugit", "fuga");
                        put("mollitia", "incidunt");
                    }};
                }};;
                accessToken = "atque";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "nisi";
                key = "fugit";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "ratione";
                uploadProtocol = "explicabo";
            }};            

            FirebasehostingSitesVersionsPopulateFilesResponse res = sdk.sites.firebasehostingSitesVersionsPopulateFiles(req, new FirebasehostingSitesVersionsPopulateFilesSecurity() {{
                option1 = new FirebasehostingSitesVersionsPopulateFilesSecurityOption1("saepe", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.populateVersionFilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
