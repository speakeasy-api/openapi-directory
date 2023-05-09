# publicDelegatedPrefixes

### Available Operations

* [computePublicDelegatedPrefixesAggregatedList](#computepublicdelegatedprefixesaggregatedlist) - Lists all PublicDelegatedPrefix resources owned by the specific project across all scopes.
* [computePublicDelegatedPrefixesDelete](#computepublicdelegatedprefixesdelete) - Deletes the specified PublicDelegatedPrefix in the given region.
* [computePublicDelegatedPrefixesGet](#computepublicdelegatedprefixesget) - Returns the specified PublicDelegatedPrefix resource in the given region.
* [computePublicDelegatedPrefixesInsert](#computepublicdelegatedprefixesinsert) - Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in the request.
* [computePublicDelegatedPrefixesList](#computepublicdelegatedprefixeslist) - Lists the PublicDelegatedPrefixes for a project in the given region.
* [computePublicDelegatedPrefixesPatch](#computepublicdelegatedprefixespatch) - Patches the specified PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

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

            ComputePublicDelegatedPrefixesAggregatedListRequest req = new ComputePublicDelegatedPrefixesAggregatedListRequest("inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "neque";
                alt = AltEnum.PROTO;
                callback = "magni";
                fields = "repellat";
                filter = "fugiat";
                includeAllScopes = false;
                key = "neque";
                maxResults = 703545L;
                oauthToken = "iure";
                orderBy = "amet";
                pageToken = "voluptas";
                prettyPrint = false;
                quotaUser = "quisquam";
                returnPartialSuccess = false;
                uploadType = "accusantium";
                uploadProtocol = "dignissimos";
                userIp = "adipisci";
            }};            

            ComputePublicDelegatedPrefixesAggregatedListResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesAggregatedList(req, new ComputePublicDelegatedPrefixesAggregatedListSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesAggregatedListSecurityOption1("aperiam", "corrupti") {{
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

            ComputePublicDelegatedPrefixesDeleteRequest req = new ComputePublicDelegatedPrefixesDeleteRequest("corrupti", "vero", "voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officia";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                fields = "hic";
                key = "tenetur";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "animi";
                requestId = "beatae";
                uploadType = "magni";
                uploadProtocol = "doloribus";
                userIp = "rerum";
            }};            

            ComputePublicDelegatedPrefixesDeleteResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesDelete(req, new ComputePublicDelegatedPrefixesDeleteSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesDeleteSecurityOption1("eaque", "reprehenderit") {{
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

            ComputePublicDelegatedPrefixesGetRequest req = new ComputePublicDelegatedPrefixesGetRequest("ut", "quod", "at") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "incidunt";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "non";
                key = "porro";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "sunt";
                uploadProtocol = "beatae";
                userIp = "ratione";
            }};            

            ComputePublicDelegatedPrefixesGetResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesGet(req, new ComputePublicDelegatedPrefixesGetSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesGetSecurityOption1("blanditiis", "illo") {{
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

            ComputePublicDelegatedPrefixesInsertRequest req = new ComputePublicDelegatedPrefixesInsertRequest("debitis", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                publicDelegatedPrefix = new PublicDelegatedPrefix() {{
                    creationTimestamp = "atque";
                    description = "dolor";
                    fingerprint = "corporis";
                    id = "quidem";
                    ipCidrRange = "iste";
                    isLiveMigration = false;
                    kind = "amet";
                    name = "Elbert Schuster";
                    parentPrefix = "odio";
                    publicDelegatedSubPrefixs = new org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefix[]{{
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "quidem";
                            description = "eius";
                            ipCidrRange = "corporis";
                            isAddress = false;
                            name = "May Greenholt";
                            region = "delectus";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "laboriosam";
                            description = "dicta";
                            ipCidrRange = "porro";
                            isAddress = false;
                            name = "Nichole Quitzon DDS";
                            region = "dignissimos";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "accusamus";
                            description = "unde";
                            ipCidrRange = "laboriosam";
                            isAddress = false;
                            name = "Doreen Toy";
                            region = "amet";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                    }};
                    region = "reprehenderit";
                    selfLink = "enim";
                    status = PublicDelegatedPrefixStatusEnum.INITIALIZING;
                }};;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "magni";
                fields = "earum";
                key = "corrupti";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "quibusdam";
                requestId = "voluptatum";
                uploadType = "ducimus";
                uploadProtocol = "nobis";
                userIp = "corporis";
            }};            

            ComputePublicDelegatedPrefixesInsertResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesInsert(req, new ComputePublicDelegatedPrefixesInsertSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesInsertSecurityOption1("vitae", "recusandae") {{
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

            ComputePublicDelegatedPrefixesListRequest req = new ComputePublicDelegatedPrefixesListRequest("dolores", "aspernatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "optio";
                fields = "sit";
                filter = "necessitatibus";
                key = "autem";
                maxResults = 927781L;
                oauthToken = "dicta";
                orderBy = "vitae";
                pageToken = "porro";
                prettyPrint = false;
                quotaUser = "atque";
                returnPartialSuccess = false;
                uploadType = "corrupti";
                uploadProtocol = "dolorem";
                userIp = "ratione";
            }};            

            ComputePublicDelegatedPrefixesListResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesList(req, new ComputePublicDelegatedPrefixesListSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesListSecurityOption1("eos", "laboriosam") {{
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

            ComputePublicDelegatedPrefixesPatchRequest req = new ComputePublicDelegatedPrefixesPatchRequest("pariatur", "minus", "ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                publicDelegatedPrefix1 = new PublicDelegatedPrefix() {{
                    creationTimestamp = "beatae";
                    description = "aperiam";
                    fingerprint = "ipsum";
                    id = "voluptatem";
                    ipCidrRange = "suscipit";
                    isLiveMigration = false;
                    kind = "in";
                    name = "Byron Muller";
                    parentPrefix = "aspernatur";
                    publicDelegatedSubPrefixs = new org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefix[]{{
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "minus";
                            description = "aliquid";
                            ipCidrRange = "dolorum";
                            isAddress = false;
                            name = "Rosalie Carroll";
                            region = "maiores";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "molestias";
                            description = "molestiae";
                            ipCidrRange = "tempora";
                            isAddress = false;
                            name = "Mrs. Fernando Prohaska IV";
                            region = "et";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                    }};
                    region = "velit";
                    selfLink = "quasi";
                    status = PublicDelegatedPrefixStatusEnum.INITIALIZING;
                }};;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "ex";
                fields = "voluptatem";
                key = "alias";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "sit";
                requestId = "porro";
                uploadType = "eaque";
                uploadProtocol = "soluta";
                userIp = "cumque";
            }};            

            ComputePublicDelegatedPrefixesPatchResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesPatch(req, new ComputePublicDelegatedPrefixesPatchSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesPatchSecurityOption1("at", "officiis") {{
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
