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

            ComputeGlobalPublicDelegatedPrefixesDeleteRequest req = new ComputeGlobalPublicDelegatedPrefixesDeleteRequest("dolore", "aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aspernatur";
                alt = AltEnum.PROTO;
                callback = "dolorem";
                fields = "neque";
                key = "ipsa";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "repellendus";
                requestId = "soluta";
                uploadType = "aut";
                uploadProtocol = "ullam";
                userIp = "amet";
            }};            

            ComputeGlobalPublicDelegatedPrefixesDeleteResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesDelete(req, new ComputeGlobalPublicDelegatedPrefixesDeleteSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesDeleteSecurityOption1("iure", "quibusdam") {{
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

            ComputeGlobalPublicDelegatedPrefixesGetRequest req = new ComputeGlobalPublicDelegatedPrefixesGetRequest("sint", "voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.PROTO;
                callback = "fuga";
                fields = "consequatur";
                key = "sit";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "quis";
                uploadProtocol = "dolorem";
                userIp = "omnis";
            }};            

            ComputeGlobalPublicDelegatedPrefixesGetResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesGet(req, new ComputeGlobalPublicDelegatedPrefixesGetSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesGetSecurityOption1("sed", "quo") {{
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

            ComputeGlobalPublicDelegatedPrefixesInsertRequest req = new ComputeGlobalPublicDelegatedPrefixesInsertRequest("et") {{
                dollarXgafv = XgafvEnum.ONE;
                publicDelegatedPrefix = new PublicDelegatedPrefix() {{
                    creationTimestamp = "est";
                    description = "quia";
                    fingerprint = "veniam";
                    id = "est";
                    ipCidrRange = "rem";
                    isLiveMigration = false;
                    kind = "cum";
                    name = "Rene Cassin";
                    parentPrefix = "ducimus";
                    publicDelegatedSubPrefixs = new org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefix[]{{
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "aspernatur";
                            description = "molestias";
                            ipCidrRange = "fuga";
                            isAddress = false;
                            name = "Stuart Pacocha";
                            region = "corrupti";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "earum";
                            description = "praesentium";
                            ipCidrRange = "explicabo";
                            isAddress = false;
                            name = "Pamela Braun";
                            region = "velit";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                    }};
                    region = "provident";
                    selfLink = "possimus";
                    status = PublicDelegatedPrefixStatusEnum.INITIALIZING;
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.JSON;
                callback = "totam";
                fields = "dignissimos";
                key = "repellat";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "culpa";
                requestId = "voluptate";
                uploadType = "cupiditate";
                uploadProtocol = "maxime";
                userIp = "assumenda";
            }};            

            ComputeGlobalPublicDelegatedPrefixesInsertResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesInsert(req, new ComputeGlobalPublicDelegatedPrefixesInsertSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesInsertSecurityOption1("nihil", "sed") {{
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

            ComputeGlobalPublicDelegatedPrefixesListRequest req = new ComputeGlobalPublicDelegatedPrefixesListRequest("optio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "voluptatum";
                fields = "dolore";
                filter = "possimus";
                key = "dolorum";
                maxResults = 177716L;
                oauthToken = "sunt";
                orderBy = "quam";
                pageToken = "eos";
                prettyPrint = false;
                quotaUser = "omnis";
                returnPartialSuccess = false;
                uploadType = "reiciendis";
                uploadProtocol = "qui";
                userIp = "similique";
            }};            

            ComputeGlobalPublicDelegatedPrefixesListResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesList(req, new ComputeGlobalPublicDelegatedPrefixesListSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesListSecurityOption1("eligendi", "numquam") {{
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

            ComputeGlobalPublicDelegatedPrefixesPatchRequest req = new ComputeGlobalPublicDelegatedPrefixesPatchRequest("inventore", "necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                publicDelegatedPrefix1 = new PublicDelegatedPrefix() {{
                    creationTimestamp = "exercitationem";
                    description = "nihil";
                    fingerprint = "quia";
                    id = "quis";
                    ipCidrRange = "maiores";
                    isLiveMigration = false;
                    kind = "dicta";
                    name = "Agnes Marvin";
                    parentPrefix = "quasi";
                    publicDelegatedSubPrefixs = new org.openapis.openapi.models.shared.PublicDelegatedPrefixPublicDelegatedSubPrefix[]{{
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "aliquam";
                            description = "vitae";
                            ipCidrRange = "temporibus";
                            isAddress = false;
                            name = "Kenny Cole";
                            region = "consequuntur";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "saepe";
                            description = "amet";
                            ipCidrRange = "labore";
                            isAddress = false;
                            name = "Craig Sporer";
                            region = "quaerat";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "sunt";
                            description = "perspiciatis";
                            ipCidrRange = "quam";
                            isAddress = false;
                            name = "Elmer Stokes";
                            region = "aspernatur";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.ACTIVE;
                        }}),
                        add(new PublicDelegatedPrefixPublicDelegatedSubPrefix() {{
                            delegateeProject = "et";
                            description = "ipsam";
                            ipCidrRange = "et";
                            isAddress = false;
                            name = "Bert Cartwright Sr.";
                            region = "voluptatem";
                            status = PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum.INACTIVE;
                        }}),
                    }};
                    region = "error";
                    selfLink = "deleniti";
                    status = PublicDelegatedPrefixStatusEnum.DELETING;
                }};;
                accessToken = "nesciunt";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "reiciendis";
                key = "quis";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "adipisci";
                requestId = "pariatur";
                uploadType = "praesentium";
                uploadProtocol = "nemo";
                userIp = "dolore";
            }};            

            ComputeGlobalPublicDelegatedPrefixesPatchResponse res = sdk.globalPublicDelegatedPrefixes.computeGlobalPublicDelegatedPrefixesPatch(req, new ComputeGlobalPublicDelegatedPrefixesPatchSecurity() {{
                option1 = new ComputeGlobalPublicDelegatedPrefixesPatchSecurityOption1("numquam", "dolor") {{
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
