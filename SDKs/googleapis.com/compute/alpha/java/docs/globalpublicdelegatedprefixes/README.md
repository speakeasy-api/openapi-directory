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

            ComputeGlobalPublicDelegatedPrefixesDeleteRequest req = new ComputeGlobalPublicDelegatedPrefixesDeleteRequest("possimus", "voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quam";
                alt = AltEnum.MEDIA;
                callback = "laboriosam";
                fields = "odio";
                key = "adipisci";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "veritatis";
                requestId = "consectetur";
                uploadType = "fuga";
                uploadProtocol = "quasi";
                userIp = "eos";
            }};            

            ComputeGlobalPublicDelegatedPrefixesDeleteResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesDelete(req, new ComputeGlobalPublicDelegatedPrefixesDeleteSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesDeleteSecurityOption1("dolorum", "vel") {{
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

            ComputeGlobalPublicDelegatedPrefixesGetRequest req = new ComputeGlobalPublicDelegatedPrefixesGetRequest("rerum", "cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "perspiciatis";
                fields = "dolore";
                key = "corporis";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "tempora";
                uploadProtocol = "corrupti";
                userIp = "ducimus";
            }};            

            ComputeGlobalPublicDelegatedPrefixesGetResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesGet(req, new ComputeGlobalPublicDelegatedPrefixesGetSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesGetSecurityOption1("asperiores", "veniam") {{
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

            ComputeGlobalPublicDelegatedPrefixesInsertRequest req = new ComputeGlobalPublicDelegatedPrefixesInsertRequest("cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                publicDelegatedPrefix = new PublicDelegatedPrefix() {{
                    creationTimestamp = "ut";
                    description = "amet";
                    fingerprint = "blanditiis";
                    id = "nesciunt";
                    ipCidrRange = "ex";
                    isLiveMigration = false;
                    kind = "tempore";
                    name = "Rick Pouros";
                    parentPrefix = "nulla";
                    publicDelegatedSubPrefixs = new org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefix[]{{
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "ex";
                            description = "dolore";
                            ipCidrRange = "dicta";
                            isAddress = false;
                            name = "Kristy Bahringer";
                            region = "molestias";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "error";
                            description = "repellendus";
                            ipCidrRange = "delectus";
                            isAddress = false;
                            name = "Diana Wintheiser";
                            region = "itaque";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "distinctio";
                            description = "recusandae";
                            ipCidrRange = "in";
                            isAddress = false;
                            name = "Geoffrey Witting III";
                            region = "molestias";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "ipsam";
                            description = "rem";
                            ipCidrRange = "molestias";
                            isAddress = false;
                            name = "Kelley Nader";
                            region = "amet";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                    }};
                    region = "corporis";
                    selfLink = "impedit";
                    selfLinkWithId = "in";
                    status = PublicDelegatedPrefixStatusEnum.ANNOUNCED;
                }};;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "quis";
                fields = "expedita";
                key = "quam";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "exercitationem";
                requestId = "vitae";
                uploadType = "magnam";
                uploadProtocol = "blanditiis";
                userIp = "nulla";
            }};            

            ComputeGlobalPublicDelegatedPrefixesInsertResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesInsert(req, new ComputeGlobalPublicDelegatedPrefixesInsertSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesInsertSecurityOption1("eum", "quibusdam") {{
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

            ComputeGlobalPublicDelegatedPrefixesListRequest req = new ComputeGlobalPublicDelegatedPrefixesListRequest("minima") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cupiditate";
                alt = AltEnum.PROTO;
                callback = "minima";
                fields = "vel";
                filter = "consectetur";
                key = "nostrum";
                maxResults = 735902L;
                oauthToken = "ipsum";
                orderBy = "dolorem";
                pageToken = "expedita";
                prettyPrint = false;
                quotaUser = "maxime";
                returnPartialSuccess = false;
                uploadType = "voluptatem";
                uploadProtocol = "maiores";
                userIp = "unde";
            }};            

            ComputeGlobalPublicDelegatedPrefixesListResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesList(req, new ComputeGlobalPublicDelegatedPrefixesListSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesListSecurityOption1("reprehenderit", "voluptatem") {{
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

            ComputeGlobalPublicDelegatedPrefixesPatchRequest req = new ComputeGlobalPublicDelegatedPrefixesPatchRequest("placeat", "dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                publicDelegatedPrefix1 = new PublicDelegatedPrefix() {{
                    creationTimestamp = "voluptatibus";
                    description = "quod";
                    fingerprint = "provident";
                    id = "delectus";
                    ipCidrRange = "dolore";
                    isLiveMigration = false;
                    kind = "totam";
                    name = "Marjorie Cassin";
                    parentPrefix = "voluptates";
                    publicDelegatedSubPrefixs = new org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefix[]{{
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "minima";
                            description = "expedita";
                            ipCidrRange = "ducimus";
                            isAddress = false;
                            name = "Andre Bauch";
                            region = "cumque";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "earum";
                            description = "earum";
                            ipCidrRange = "culpa";
                            isAddress = false;
                            name = "Jeannie Miller";
                            region = "molestias";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                    }};
                    region = "fuga";
                    selfLink = "beatae";
                    selfLinkWithId = "distinctio";
                    status = PublicDelegatedPrefixStatusEnum.DELETING;
                }};;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                fields = "nam";
                key = "accusamus";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "explicabo";
                requestId = "corporis";
                uploadType = "incidunt";
                uploadProtocol = "soluta";
                userIp = "nihil";
            }};            

            ComputeGlobalPublicDelegatedPrefixesPatchResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesPatch(req, new ComputeGlobalPublicDelegatedPrefixesPatchSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesPatchSecurityOption1("adipisci", "provident") {{
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
