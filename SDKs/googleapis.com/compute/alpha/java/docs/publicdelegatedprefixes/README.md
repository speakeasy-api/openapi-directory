# publicDelegatedPrefixes

### Available Operations

* [computePublicDelegatedPrefixesAggregatedList](#computepublicdelegatedprefixesaggregatedlist) - Lists all PublicDelegatedPrefix resources owned by the specific project across all scopes.
* [computePublicDelegatedPrefixesAnnounce](#computepublicdelegatedprefixesannounce) - Announces the specified PublicDelegatedPrefix in the given region.
* [computePublicDelegatedPrefixesDelete](#computepublicdelegatedprefixesdelete) - Deletes the specified PublicDelegatedPrefix in the given region.
* [computePublicDelegatedPrefixesGet](#computepublicdelegatedprefixesget) - Returns the specified PublicDelegatedPrefix resource in the given region.
* [computePublicDelegatedPrefixesInsert](#computepublicdelegatedprefixesinsert) - Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in the request.
* [computePublicDelegatedPrefixesList](#computepublicdelegatedprefixeslist) - Lists the PublicDelegatedPrefixes for a project in the given region.
* [computePublicDelegatedPrefixesPatch](#computepublicdelegatedprefixespatch) - Patches the specified PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computePublicDelegatedPrefixesWithdraw](#computepublicdelegatedprefixeswithdraw) - Withdraws the specified PublicDelegatedPrefix in the given region.

## computePublicDelegatedPrefixesAggregatedList

Lists all PublicDelegatedPrefix resources owned by the specific project across all scopes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicDelegatedPrefixesAggregatedListRequest req = new ComputePublicDelegatedPrefixesAggregatedListRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "excepturi";
                fields = "earum";
                filter = "rem";
                includeAllScopes = false;
                key = "modi";
                maxResults = 605351L;
                oauthToken = "dolorem";
                orderBy = "inventore";
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "voluptas";
                returnPartialSuccess = false;
                uploadType = "culpa";
                uploadProtocol = "saepe";
                userIp = "earum";
            }};            

            ComputePublicDelegatedPrefixesAggregatedListResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesAggregatedList(req, new ComputePublicDelegatedPrefixesAggregatedListSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesAggregatedListSecurityOption1("reprehenderit", "error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.publicDelegatedPrefixAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computePublicDelegatedPrefixesAnnounce

Announces the specified PublicDelegatedPrefix in the given region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesAnnounceRequest;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesAnnounceResponse;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesAnnounceSecurity;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesAnnounceSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesAnnounceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicDelegatedPrefixesAnnounceRequest req = new ComputePublicDelegatedPrefixesAnnounceRequest("quas", "velit", "similique") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "beatae";
                key = "quos";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "a";
                requestId = "molestias";
                uploadType = "hic";
                uploadProtocol = "iusto";
                userIp = "expedita";
            }};            

            ComputePublicDelegatedPrefixesAnnounceResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesAnnounce(req, new ComputePublicDelegatedPrefixesAnnounceSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesAnnounceSecurityOption1("quia", "non") {{
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

## computePublicDelegatedPrefixesDelete

Deletes the specified PublicDelegatedPrefix in the given region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesDeleteRequest;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesDeleteResponse;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicDelegatedPrefixesDeleteRequest req = new ComputePublicDelegatedPrefixesDeleteRequest("ipsum", "quaerat", "hic") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ratione";
                alt = AltEnum.JSON;
                callback = "voluptatum";
                fields = "quae";
                key = "reiciendis";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "optio";
                requestId = "praesentium";
                uploadType = "nobis";
                uploadProtocol = "consequatur";
                userIp = "libero";
            }};            

            ComputePublicDelegatedPrefixesDeleteResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesDelete(req, new ComputePublicDelegatedPrefixesDeleteSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesDeleteSecurityOption1("culpa", "a") {{
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

## computePublicDelegatedPrefixesGet

Returns the specified PublicDelegatedPrefix resource in the given region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesGetRequest;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesGetResponse;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesGetSecurity;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicDelegatedPrefixesGetRequest req = new ComputePublicDelegatedPrefixesGetRequest("dicta", "voluptates", "vitae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "dolor";
                key = "suscipit";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "asperiores";
                uploadProtocol = "consectetur";
                userIp = "doloribus";
            }};            

            ComputePublicDelegatedPrefixesGetResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesGet(req, new ComputePublicDelegatedPrefixesGetSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesGetSecurityOption1("dolores", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.publicDelegatedPrefix != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computePublicDelegatedPrefixesInsert

Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesInsertRequest;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesInsertResponse;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesInsertSecurity;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PublicDelegatedPrefix;
import org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefix;
import org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum;
import org.openapis.openapi.models.shared.PublicDelegatedPrefixStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicDelegatedPrefixesInsertRequest req = new ComputePublicDelegatedPrefixesInsertRequest("et", "eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                publicDelegatedPrefix = new PublicDelegatedPrefix() {{
                    creationTimestamp = "provident";
                    description = "odit";
                    fingerprint = "accusamus";
                    id = "perspiciatis";
                    ipCidrRange = "nam";
                    isLiveMigration = false;
                    kind = "nisi";
                    name = "Arthur Gislason Jr.";
                    parentPrefix = "animi";
                    publicDelegatedSubPrefixs = new org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefix[]{{
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "expedita";
                            description = "id";
                            ipCidrRange = "dolorem";
                            isAddress = false;
                            name = "Leticia McClure";
                            region = "debitis";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "eligendi";
                            description = "repudiandae";
                            ipCidrRange = "quasi";
                            isAddress = false;
                            name = "Clifton O'Connell";
                            region = "molestias";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "excepturi";
                            description = "saepe";
                            ipCidrRange = "dolore";
                            isAddress = false;
                            name = "Ms. Austin Murazik";
                            region = "modi";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "tempora";
                            description = "est";
                            ipCidrRange = "nihil";
                            isAddress = false;
                            name = "Mrs. Silvia Olson";
                            region = "atque";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                    }};
                    region = "autem";
                    selfLink = "blanditiis";
                    selfLinkWithId = "tempore";
                    status = PublicDelegatedPrefixStatusEnum.DELETING;
                }};;
                accessToken = "doloremque";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "a";
                key = "eum";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "unde";
                requestId = "possimus";
                uploadType = "perferendis";
                uploadProtocol = "iste";
                userIp = "impedit";
            }};            

            ComputePublicDelegatedPrefixesInsertResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesInsert(req, new ComputePublicDelegatedPrefixesInsertSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesInsertSecurityOption1("quibusdam", "neque") {{
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

## computePublicDelegatedPrefixesList

Lists the PublicDelegatedPrefixes for a project in the given region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesListRequest;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesListResponse;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesListSecurity;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicDelegatedPrefixesListRequest req = new ComputePublicDelegatedPrefixesListRequest("accusamus", "illo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quidem";
                alt = AltEnum.PROTO;
                callback = "magni";
                fields = "illum";
                filter = "ab";
                key = "odit";
                maxResults = 60548L;
                oauthToken = "vero";
                orderBy = "quas";
                pageToken = "fugit";
                prettyPrint = false;
                quotaUser = "totam";
                returnPartialSuccess = false;
                uploadType = "illum";
                uploadProtocol = "totam";
                userIp = "consequuntur";
            }};            

            ComputePublicDelegatedPrefixesListResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesList(req, new ComputePublicDelegatedPrefixesListSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesListSecurityOption1("provident", "unde") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.publicDelegatedPrefixList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computePublicDelegatedPrefixesPatch

Patches the specified PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesPatchRequest;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesPatchResponse;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesPatchSecurity;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PublicDelegatedPrefix;
import org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefix;
import org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum;
import org.openapis.openapi.models.shared.PublicDelegatedPrefixStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicDelegatedPrefixesPatchRequest req = new ComputePublicDelegatedPrefixesPatchRequest("facilis", "quod", "ea") {{
                dollarXgafv = XgafvEnum.ONE;
                publicDelegatedPrefix1 = new PublicDelegatedPrefix() {{
                    creationTimestamp = "ex";
                    description = "adipisci";
                    fingerprint = "in";
                    id = "praesentium";
                    ipCidrRange = "vero";
                    isLiveMigration = false;
                    kind = "at";
                    name = "Bernard Roob";
                    parentPrefix = "nihil";
                    publicDelegatedSubPrefixs = new org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefix[]{{
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "dolore";
                            description = "perferendis";
                            ipCidrRange = "maxime";
                            isAddress = false;
                            name = "Miss Nicolas Zboncak";
                            region = "exercitationem";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                    }};
                    region = "ab";
                    selfLink = "alias";
                    selfLinkWithId = "molestiae";
                    status = PublicDelegatedPrefixStatusEnum.ANNOUNCED_TO_INTERNET;
                }};;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "consequuntur";
                key = "placeat";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "ratione";
                requestId = "quibusdam";
                uploadType = "officiis";
                uploadProtocol = "repudiandae";
                userIp = "fuga";
            }};            

            ComputePublicDelegatedPrefixesPatchResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesPatch(req, new ComputePublicDelegatedPrefixesPatchSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesPatchSecurityOption1("corrupti", "voluptatibus") {{
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

## computePublicDelegatedPrefixesWithdraw

Withdraws the specified PublicDelegatedPrefix in the given region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesWithdrawRequest;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesWithdrawResponse;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesWithdrawSecurity;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesWithdrawSecurityOption1;
import org.openapis.openapi.models.operations.ComputePublicDelegatedPrefixesWithdrawSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicDelegatedPrefixesWithdrawRequest req = new ComputePublicDelegatedPrefixesWithdrawRequest("earum", "aliquam", "nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "quod";
                fields = "rem";
                key = "temporibus";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "laudantium";
                requestId = "architecto";
                uploadType = "sequi";
                uploadProtocol = "sunt";
                userIp = "ab";
            }};            

            ComputePublicDelegatedPrefixesWithdrawResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesWithdraw(req, new ComputePublicDelegatedPrefixesWithdrawSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesWithdrawSecurityOption1("nemo", "officia") {{
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
