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

            ComputePublicDelegatedPrefixesAggregatedListRequest req = new ComputePublicDelegatedPrefixesAggregatedListRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "excepturi";
                filter = "voluptas";
                includeAllScopes = false;
                key = "ipsum";
                maxResults = 948010L;
                oauthToken = "tenetur";
                orderBy = "doloremque";
                pageToken = "consectetur";
                prettyPrint = false;
                quotaUser = "eveniet";
                returnPartialSuccess = false;
                uploadType = "quaerat";
                uploadProtocol = "cupiditate";
                userIp = "reprehenderit";
            }};            

            ComputePublicDelegatedPrefixesAggregatedListResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesAggregatedList(req, new ComputePublicDelegatedPrefixesAggregatedListSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesAggregatedListSecurityOption1("assumenda", "totam") {{
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

            ComputePublicDelegatedPrefixesDeleteRequest req = new ComputePublicDelegatedPrefixesDeleteRequest("occaecati", "voluptate", "doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quia";
                alt = AltEnum.PROTO;
                callback = "eveniet";
                fields = "sit";
                key = "repellendus";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "maiores";
                requestId = "possimus";
                uploadType = "magnam";
                uploadProtocol = "earum";
                userIp = "inventore";
            }};            

            ComputePublicDelegatedPrefixesDeleteResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesDelete(req, new ComputePublicDelegatedPrefixesDeleteSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesDeleteSecurityOption1("enim", "sapiente") {{
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

            ComputePublicDelegatedPrefixesGetRequest req = new ComputePublicDelegatedPrefixesGetRequest("eos", "neque", "eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "quia";
                fields = "exercitationem";
                key = "magni";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "laudantium";
                uploadProtocol = "incidunt";
                userIp = "quae";
            }};            

            ComputePublicDelegatedPrefixesGetResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesGet(req, new ComputePublicDelegatedPrefixesGetSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesGetSecurityOption1("dolorem", "adipisci") {{
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

            ComputePublicDelegatedPrefixesInsertRequest req = new ComputePublicDelegatedPrefixesInsertRequest("omnis", "eius") {{
                dollarXgafv = XgafvEnum.TWO;
                publicDelegatedPrefix = new PublicDelegatedPrefix() {{
                    creationTimestamp = "id";
                    description = "mollitia";
                    fingerprint = "a";
                    id = "officia";
                    ipCidrRange = "soluta";
                    isLiveMigration = false;
                    kind = "fugiat";
                    name = "Edward Conroy";
                    parentPrefix = "laboriosam";
                    publicDelegatedSubPrefixs = new org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefix[]{{
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "quisquam";
                            description = "fugit";
                            ipCidrRange = "amet";
                            isAddress = false;
                            name = "Belinda Davis";
                            region = "consectetur";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "minima";
                            description = "labore";
                            ipCidrRange = "quae";
                            isAddress = false;
                            name = "Dominic Rau";
                            region = "perferendis";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                    }};
                    region = "mollitia";
                    selfLink = "iste";
                    status = PublicDelegatedPrefixStatusEnum.INITIALIZING;
                }};;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "fuga";
                key = "dignissimos";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "veniam";
                requestId = "occaecati";
                uploadType = "nemo";
                uploadProtocol = "explicabo";
                userIp = "eaque";
            }};            

            ComputePublicDelegatedPrefixesInsertResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesInsert(req, new ComputePublicDelegatedPrefixesInsertSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesInsertSecurityOption1("consequuntur", "tempore") {{
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

            ComputePublicDelegatedPrefixesListRequest req = new ComputePublicDelegatedPrefixesListRequest("dolor", "voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nulla";
                alt = AltEnum.JSON;
                callback = "voluptates";
                fields = "architecto";
                filter = "aliquid";
                key = "totam";
                maxResults = 587187L;
                oauthToken = "rerum";
                orderBy = "aliquid";
                pageToken = "quasi";
                prettyPrint = false;
                quotaUser = "rem";
                returnPartialSuccess = false;
                uploadType = "libero";
                uploadProtocol = "non";
                userIp = "sit";
            }};            

            ComputePublicDelegatedPrefixesListResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesList(req, new ComputePublicDelegatedPrefixesListSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesListSecurityOption1("quidem", "rerum") {{
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

            ComputePublicDelegatedPrefixesPatchRequest req = new ComputePublicDelegatedPrefixesPatchRequest("iusto", "a", "blanditiis") {{
                dollarXgafv = XgafvEnum.ONE;
                publicDelegatedPrefix1 = new PublicDelegatedPrefix() {{
                    creationTimestamp = "eius";
                    description = "quae";
                    fingerprint = "nobis";
                    id = "ut";
                    ipCidrRange = "id";
                    isLiveMigration = false;
                    kind = "fugit";
                    name = "Nelson Russel";
                    parentPrefix = "repellat";
                    publicDelegatedSubPrefixs = new org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefix[]{{
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "autem";
                            description = "reiciendis";
                            ipCidrRange = "laboriosam";
                            isAddress = false;
                            name = "Anna Walsh Sr.";
                            region = "corrupti";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "quisquam";
                            description = "magnam";
                            ipCidrRange = "labore";
                            isAddress = false;
                            name = "Vickie Simonis MD";
                            region = "iusto";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "labore";
                            description = "quidem";
                            ipCidrRange = "adipisci";
                            isAddress = false;
                            name = "Rosa Beatty";
                            region = "minus";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "ea";
                            description = "saepe";
                            ipCidrRange = "enim";
                            isAddress = false;
                            name = "Kelli Skiles";
                            region = "at";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                    }};
                    region = "dolore";
                    selfLink = "ratione";
                    status = PublicDelegatedPrefixStatusEnum.ANNOUNCED;
                }};;
                accessToken = "culpa";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "magnam";
                key = "id";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "laboriosam";
                requestId = "dolore";
                uploadType = "magnam";
                uploadProtocol = "doloribus";
                userIp = "ipsa";
            }};            

            ComputePublicDelegatedPrefixesPatchResponse res = sdk.publicDelegatedPrefixes.computePublicDelegatedPrefixesPatch(req, new ComputePublicDelegatedPrefixesPatchSecurity() {{
                option1 = new ComputePublicDelegatedPrefixesPatchSecurityOption1("voluptatibus", "explicabo") {{
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
