# globalPublicDelegatedPrefixes

### Available Operations

* [computeGlobalPublicDelegatedPrefixesDelete](#computeglobalpublicdelegatedprefixesdelete) - Deletes the specified global PublicDelegatedPrefix.
* [computeGlobalPublicDelegatedPrefixesGet](#computeglobalpublicdelegatedprefixesget) - Returns the specified global PublicDelegatedPrefix resource.
* [computeGlobalPublicDelegatedPrefixesInsert](#computeglobalpublicdelegatedprefixesinsert) - Creates a global PublicDelegatedPrefix in the specified project using the parameters that are included in the request.
* [computeGlobalPublicDelegatedPrefixesList](#computeglobalpublicdelegatedprefixeslist) - Lists the global PublicDelegatedPrefixes for a project.
* [computeGlobalPublicDelegatedPrefixesPatch](#computeglobalpublicdelegatedprefixespatch) - Patches the specified global PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

## computeGlobalPublicDelegatedPrefixesDelete

Deletes the specified global PublicDelegatedPrefix.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalPublicDelegatedPrefixesDeleteRequest req = new ComputeGlobalPublicDelegatedPrefixesDeleteRequest("molestiae", "adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perspiciatis";
                alt = AltEnum.PROTO;
                callback = "itaque";
                fields = "at";
                key = "nam";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "cumque";
                requestId = "in";
                uploadType = "a";
                uploadProtocol = "quibusdam";
                userIp = "culpa";
            }};            

            ComputeGlobalPublicDelegatedPrefixesDeleteResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesDelete(req, new ComputeGlobalPublicDelegatedPrefixesDeleteSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesDeleteSecurityOption1("dolor", "occaecati") {{
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

## computeGlobalPublicDelegatedPrefixesGet

Returns the specified global PublicDelegatedPrefix resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesGetRequest;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesGetResponse;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesGetSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalPublicDelegatedPrefixesGetRequest req = new ComputeGlobalPublicDelegatedPrefixesGetRequest("exercitationem", "unde") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "laboriosam";
                fields = "soluta";
                key = "minus";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "officiis";
                uploadProtocol = "aliquam";
                userIp = "quas";
            }};            

            ComputeGlobalPublicDelegatedPrefixesGetResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesGet(req, new ComputeGlobalPublicDelegatedPrefixesGetSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesGetSecurityOption1("aut", "autem") {{
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

## computeGlobalPublicDelegatedPrefixesInsert

Creates a global PublicDelegatedPrefix in the specified project using the parameters that are included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesInsertRequest;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesInsertResponse;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesInsertSecurityOption2;
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

            ComputeGlobalPublicDelegatedPrefixesInsertRequest req = new ComputeGlobalPublicDelegatedPrefixesInsertRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                publicDelegatedPrefix = new PublicDelegatedPrefix() {{
                    creationTimestamp = "rerum";
                    description = "iste";
                    fingerprint = "occaecati";
                    id = "enim";
                    ipCidrRange = "tempora";
                    isLiveMigration = false;
                    kind = "libero";
                    name = "Tami Olson Jr.";
                    parentPrefix = "eum";
                    publicDelegatedSubPrefixs = new org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefix[]{{
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "commodi";
                            description = "molestias";
                            ipCidrRange = "atque";
                            isAddress = false;
                            name = "Deanna Hilpert";
                            region = "optio";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                    }};
                    region = "ab";
                    selfLink = "alias";
                    status = PublicDelegatedPrefixStatusEnum.ANNOUNCED;
                }};;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "necessitatibus";
                key = "reiciendis";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "provident";
                requestId = "dolores";
                uploadType = "illo";
                uploadProtocol = "recusandae";
                userIp = "quod";
            }};            

            ComputeGlobalPublicDelegatedPrefixesInsertResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesInsert(req, new ComputeGlobalPublicDelegatedPrefixesInsertSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesInsertSecurityOption1("magni", "sit") {{
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

## computeGlobalPublicDelegatedPrefixesList

Lists the global PublicDelegatedPrefixes for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesListRequest;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesListResponse;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesListSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalPublicDelegatedPrefixesListRequest req = new ComputeGlobalPublicDelegatedPrefixesListRequest("voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "perspiciatis";
                filter = "amet";
                key = "ex";
                maxResults = 397667L;
                oauthToken = "officia";
                orderBy = "quisquam";
                pageToken = "rem";
                prettyPrint = false;
                quotaUser = "eveniet";
                returnPartialSuccess = false;
                uploadType = "eveniet";
                uploadProtocol = "voluptatem";
                userIp = "repellat";
            }};            

            ComputeGlobalPublicDelegatedPrefixesListResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesList(req, new ComputeGlobalPublicDelegatedPrefixesListSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesListSecurityOption1("magni", "libero") {{
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

## computeGlobalPublicDelegatedPrefixesPatch

Patches the specified global PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesPatchRequest;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesPatchResponse;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalPublicDelegatedPrefixesPatchSecurityOption2;
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

            ComputeGlobalPublicDelegatedPrefixesPatchRequest req = new ComputeGlobalPublicDelegatedPrefixesPatchRequest("sapiente", "veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                publicDelegatedPrefix1 = new PublicDelegatedPrefix() {{
                    creationTimestamp = "veniam";
                    description = "quos";
                    fingerprint = "totam";
                    id = "facere";
                    ipCidrRange = "eius";
                    isLiveMigration = false;
                    kind = "doloremque";
                    name = "Richard Dietrich";
                    parentPrefix = "assumenda";
                    publicDelegatedSubPrefixs = new org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefix[]{{
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "nobis";
                            description = "est";
                            ipCidrRange = "quia";
                            isAddress = false;
                            name = "Clinton Quigley";
                            region = "itaque";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "consequatur";
                            description = "harum";
                            ipCidrRange = "nobis";
                            isAddress = false;
                            name = "Barbara Spencer";
                            region = "commodi";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "voluptatibus";
                            description = "nulla";
                            ipCidrRange = "nemo";
                            isAddress = false;
                            name = "Joanne Aufderhar";
                            region = "libero";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "nesciunt";
                            description = "vitae";
                            ipCidrRange = "pariatur";
                            isAddress = false;
                            name = "Ramona Crona";
                            region = "doloribus";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                    }};
                    region = "qui";
                    selfLink = "iusto";
                    status = PublicDelegatedPrefixStatusEnum.READY_TO_ANNOUNCE;
                }};;
                accessToken = "quidem";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "voluptatem";
                key = "soluta";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "beatae";
                requestId = "delectus";
                uploadType = "deleniti";
                uploadProtocol = "fugit";
                userIp = "inventore";
            }};            

            ComputeGlobalPublicDelegatedPrefixesPatchResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesPatch(req, new ComputeGlobalPublicDelegatedPrefixesPatchSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesPatchSecurityOption1("reprehenderit", "sint") {{
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
