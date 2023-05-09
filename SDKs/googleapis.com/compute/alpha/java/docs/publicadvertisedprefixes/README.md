# publicAdvertisedPrefixes

### Available Operations

* [computePublicAdvertisedPrefixesAnnounce](#computepublicadvertisedprefixesannounce) - Announces the specified PublicAdvertisedPrefix
* [computePublicAdvertisedPrefixesDelete](#computepublicadvertisedprefixesdelete) - Deletes the specified PublicAdvertisedPrefix
* [computePublicAdvertisedPrefixesGet](#computepublicadvertisedprefixesget) - Returns the specified PublicAdvertisedPrefix resource.
* [computePublicAdvertisedPrefixesInsert](#computepublicadvertisedprefixesinsert) - Creates a PublicAdvertisedPrefix in the specified project using the parameters that are included in the request.
* [computePublicAdvertisedPrefixesList](#computepublicadvertisedprefixeslist) - Lists the PublicAdvertisedPrefixes for a project.
* [computePublicAdvertisedPrefixesPatch](#computepublicadvertisedprefixespatch) - Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computePublicAdvertisedPrefixesWithdraw](#computepublicadvertisedprefixeswithdraw) - Withdraws the specified PublicAdvertisedPrefix

## computePublicAdvertisedPrefixesAnnounce

Announces the specified PublicAdvertisedPrefix

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesAnnounceRequest;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesAnnounceResponse;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesAnnounceSecurity;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesAnnounceSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesAnnounceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicAdvertisedPrefixesAnnounceRequest req = new ComputePublicAdvertisedPrefixesAnnounceRequest("nostrum", "voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "harum";
                alt = AltEnum.PROTO;
                callback = "earum";
                fields = "repellendus";
                key = "dolorem";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "vero";
                requestId = "debitis";
                uploadType = "rem";
                uploadProtocol = "atque";
                userIp = "illo";
            }};            

            ComputePublicAdvertisedPrefixesAnnounceResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesAnnounce(req, new ComputePublicAdvertisedPrefixesAnnounceSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesAnnounceSecurityOption1("architecto", "at") {{
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

## computePublicAdvertisedPrefixesDelete

Deletes the specified PublicAdvertisedPrefix

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesDeleteRequest;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesDeleteResponse;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicAdvertisedPrefixesDeleteRequest req = new ComputePublicAdvertisedPrefixesDeleteRequest("quod", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.MEDIA;
                callback = "consequatur";
                fields = "temporibus";
                key = "quis";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "neque";
                requestId = "quod";
                uploadType = "perferendis";
                uploadProtocol = "odit";
                userIp = "quis";
            }};            

            ComputePublicAdvertisedPrefixesDeleteResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesDelete(req, new ComputePublicAdvertisedPrefixesDeleteSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesDeleteSecurityOption1("eos", "ducimus") {{
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

## computePublicAdvertisedPrefixesGet

Returns the specified PublicAdvertisedPrefix resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesGetRequest;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesGetResponse;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesGetSecurity;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicAdvertisedPrefixesGetRequest req = new ComputePublicAdvertisedPrefixesGetRequest("deleniti", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "quisquam";
                key = "aperiam";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "aliquid";
                uploadProtocol = "eveniet";
                userIp = "architecto";
            }};            

            ComputePublicAdvertisedPrefixesGetResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesGet(req, new ComputePublicAdvertisedPrefixesGetSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesGetSecurityOption1("cupiditate", "quibusdam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.publicAdvertisedPrefix != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computePublicAdvertisedPrefixesInsert

Creates a PublicAdvertisedPrefix in the specified project using the parameters that are included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesInsertRequest;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesInsertResponse;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesInsertSecurity;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PublicAdvertisedPrefix;
import org.openapis.openapi.models.shared.PublicAdvertisedPrefixPdpScopeEnum;
import org.openapis.openapi.models.shared.PublicAdvertisedPrefixPublicDelegatedPrefix;
import org.openapis.openapi.models.shared.PublicAdvertisedPrefixStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicAdvertisedPrefixesInsertRequest req = new ComputePublicAdvertisedPrefixesInsertRequest("adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                publicAdvertisedPrefix = new PublicAdvertisedPrefix() {{
                    creationTimestamp = "modi";
                    description = "nemo";
                    dnsVerificationIp = "corporis";
                    fingerprint = "dolores";
                    id = "at";
                    ipCidrRange = "laudantium";
                    kind = "assumenda";
                    name = "Carolyn Douglas";
                    pdpScope = PublicAdvertisedPrefixPdpScopeEnum.REGIONAL;
                    publicDelegatedPrefixs = new org.openapis.openapi.models.shared.PublicAdvertisedPrefixPublicDelegatedPrefix[]{{
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "laborum";
                            name = "Tomas Muller";
                            project = "molestias";
                            region = "numquam";
                            status = "vero";
                        }}),
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "excepturi";
                            name = "Sabrina Rodriguez";
                            project = "itaque";
                            region = "illo";
                            status = "minima";
                        }}),
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "in";
                            name = "Dorothy Witting";
                            project = "non";
                            region = "doloremque";
                            status = "necessitatibus";
                        }}),
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "nam";
                            name = "Bonnie Howell";
                            project = "occaecati";
                            region = "asperiores";
                            status = "ipsam";
                        }}),
                    }};
                    selfLink = "aliquid";
                    selfLinkWithId = "laudantium";
                    sharedSecret = "harum";
                    status = PublicAdvertisedPrefixStatusEnum.INITIAL;
                }};;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "atque";
                fields = "corrupti";
                key = "commodi";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "non";
                requestId = "est";
                uploadType = "dignissimos";
                uploadProtocol = "non";
                userIp = "officiis";
            }};            

            ComputePublicAdvertisedPrefixesInsertResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesInsert(req, new ComputePublicAdvertisedPrefixesInsertSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesInsertSecurityOption1("suscipit", "vero") {{
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

## computePublicAdvertisedPrefixesList

Lists the PublicAdvertisedPrefixes for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesListRequest;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesListResponse;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesListSecurity;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicAdvertisedPrefixesListRequest req = new ComputePublicAdvertisedPrefixesListRequest("sit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "impedit";
                filter = "magnam";
                key = "impedit";
                maxResults = 14655L;
                oauthToken = "debitis";
                orderBy = "tempora";
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "possimus";
                returnPartialSuccess = false;
                uploadType = "aliquam";
                uploadProtocol = "est";
                userIp = "atque";
            }};            

            ComputePublicAdvertisedPrefixesListResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesList(req, new ComputePublicAdvertisedPrefixesListSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesListSecurityOption1("iusto", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.publicAdvertisedPrefixList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computePublicAdvertisedPrefixesPatch

Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesPatchRequest;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesPatchResponse;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesPatchSecurity;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PublicAdvertisedPrefix;
import org.openapis.openapi.models.shared.PublicAdvertisedPrefixPdpScopeEnum;
import org.openapis.openapi.models.shared.PublicAdvertisedPrefixPublicDelegatedPrefix;
import org.openapis.openapi.models.shared.PublicAdvertisedPrefixStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicAdvertisedPrefixesPatchRequest req = new ComputePublicAdvertisedPrefixesPatchRequest("eos", "nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                publicAdvertisedPrefix1 = new PublicAdvertisedPrefix() {{
                    creationTimestamp = "tenetur";
                    description = "tempora";
                    dnsVerificationIp = "quidem";
                    fingerprint = "cum";
                    id = "optio";
                    ipCidrRange = "corrupti";
                    kind = "quam";
                    name = "Meredith Kris Jr.";
                    pdpScope = PublicAdvertisedPrefixPdpScopeEnum.GLOBAL_AND_REGIONAL;
                    publicDelegatedPrefixs = new org.openapis.openapi.models.shared.PublicAdvertisedPrefixPublicDelegatedPrefix[]{{
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "sunt";
                            name = "Dale Shanahan";
                            project = "libero";
                            region = "cupiditate";
                            status = "quod";
                        }}),
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "quos";
                            name = "Loren Brown";
                            project = "quae";
                            region = "odio";
                            status = "quisquam";
                        }}),
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "odit";
                            name = "Kristi Hirthe";
                            project = "repellendus";
                            region = "neque";
                            status = "velit";
                        }}),
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "at";
                            name = "Miss Timothy Schimmel";
                            project = "praesentium";
                            region = "harum";
                            status = "dolorem";
                        }}),
                    }};
                    selfLink = "tempore";
                    selfLinkWithId = "earum";
                    sharedSecret = "suscipit";
                    status = PublicAdvertisedPrefixStatusEnum.ANNOUNCED_TO_INTERNET;
                }};;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "aliquam";
                fields = "fuga";
                key = "porro";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "aspernatur";
                requestId = "minima";
                uploadType = "recusandae";
                uploadProtocol = "fugiat";
                userIp = "nulla";
            }};            

            ComputePublicAdvertisedPrefixesPatchResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesPatch(req, new ComputePublicAdvertisedPrefixesPatchSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesPatchSecurityOption1("quis", "alias") {{
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

## computePublicAdvertisedPrefixesWithdraw

Withdraws the specified PublicAdvertisedPrefix

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesWithdrawRequest;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesWithdrawResponse;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesWithdrawSecurity;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesWithdrawSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicAdvertisedPrefixesWithdrawSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicAdvertisedPrefixesWithdrawRequest req = new ComputePublicAdvertisedPrefixesWithdrawRequest("numquam", "laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "nihil";
                key = "eos";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "incidunt";
                requestId = "voluptatibus";
                uploadType = "quae";
                uploadProtocol = "optio";
                userIp = "eius";
            }};            

            ComputePublicAdvertisedPrefixesWithdrawResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesWithdraw(req, new ComputePublicAdvertisedPrefixesWithdrawSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesWithdrawSecurityOption1("alias", "sequi") {{
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
