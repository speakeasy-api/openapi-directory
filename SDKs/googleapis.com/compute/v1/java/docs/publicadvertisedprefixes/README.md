# publicAdvertisedPrefixes

### Available Operations

* [computePublicAdvertisedPrefixesDelete](#computepublicadvertisedprefixesdelete) - Deletes the specified PublicAdvertisedPrefix
* [computePublicAdvertisedPrefixesGet](#computepublicadvertisedprefixesget) - Returns the specified PublicAdvertisedPrefix resource.
* [computePublicAdvertisedPrefixesInsert](#computepublicadvertisedprefixesinsert) - Creates a PublicAdvertisedPrefix in the specified project using the parameters that are included in the request.
* [computePublicAdvertisedPrefixesList](#computepublicadvertisedprefixeslist) - Lists the PublicAdvertisedPrefixes for a project.
* [computePublicAdvertisedPrefixesPatch](#computepublicadvertisedprefixespatch) - Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

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

            ComputePublicAdvertisedPrefixesDeleteRequest req = new ComputePublicAdvertisedPrefixesDeleteRequest("officia", "quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "nostrum";
                key = "tempora";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "eaque";
                requestId = "accusantium";
                uploadType = "aperiam";
                uploadProtocol = "mollitia";
                userIp = "minima";
            }};            

            ComputePublicAdvertisedPrefixesDeleteResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesDelete(req, new ComputePublicAdvertisedPrefixesDeleteSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesDeleteSecurityOption1("nobis", "dolor") {{
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

            ComputePublicAdvertisedPrefixesGetRequest req = new ComputePublicAdvertisedPrefixesGetRequest("vel", "est") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "eveniet";
                fields = "ratione";
                key = "reiciendis";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "in";
                uploadProtocol = "eaque";
                userIp = "animi";
            }};            

            ComputePublicAdvertisedPrefixesGetResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesGet(req, new ComputePublicAdvertisedPrefixesGetSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesGetSecurityOption1("dolores", "facilis") {{
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
import org.openapis.openapi.models.shared.PublicAdvertisedPrefixPublicDelegatedPrefix;
import org.openapis.openapi.models.shared.PublicAdvertisedPrefixStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicAdvertisedPrefixesInsertRequest req = new ComputePublicAdvertisedPrefixesInsertRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                publicAdvertisedPrefix = new PublicAdvertisedPrefix() {{
                    creationTimestamp = "vero";
                    description = "nostrum";
                    dnsVerificationIp = "officiis";
                    fingerprint = "fugiat";
                    id = "delectus";
                    ipCidrRange = "ea";
                    kind = "eius";
                    name = "Todd Oberbrunner";
                    publicDelegatedPrefixs = new org.openapis.openapi.models.shared.PublicAdvertisedPrefixPublicDelegatedPrefix[]{{
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "optio";
                            name = "Mr. Maggie Klein";
                            project = "minima";
                            region = "numquam";
                            status = "soluta";
                        }}),
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "quaerat";
                            name = "Meghan Runolfsson";
                            project = "mollitia";
                            region = "hic";
                            status = "molestias";
                        }}),
                    }};
                    selfLink = "harum";
                    sharedSecret = "assumenda";
                    status = PublicAdvertisedPrefixStatusEnum.PREFIX_REMOVAL_IN_PROGRESS;
                }};;
                accessToken = "adipisci";
                alt = AltEnum.JSON;
                callback = "molestiae";
                fields = "repudiandae";
                key = "rem";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "esse";
                requestId = "quibusdam";
                uploadType = "non";
                uploadProtocol = "quasi";
                userIp = "nisi";
            }};            

            ComputePublicAdvertisedPrefixesInsertResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesInsert(req, new ComputePublicAdvertisedPrefixesInsertSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesInsertSecurityOption1("vitae", "incidunt") {{
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

            ComputePublicAdvertisedPrefixesListRequest req = new ComputePublicAdvertisedPrefixesListRequest("nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.PROTO;
                callback = "assumenda";
                fields = "praesentium";
                filter = "eos";
                key = "ratione";
                maxResults = 625240L;
                oauthToken = "a";
                orderBy = "consequuntur";
                pageToken = "optio";
                prettyPrint = false;
                quotaUser = "vitae";
                returnPartialSuccess = false;
                uploadType = "iure";
                uploadProtocol = "nihil";
                userIp = "excepturi";
            }};            

            ComputePublicAdvertisedPrefixesListResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesList(req, new ComputePublicAdvertisedPrefixesListSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesListSecurityOption1("nulla", "deleniti") {{
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
import org.openapis.openapi.models.shared.PublicAdvertisedPrefixPublicDelegatedPrefix;
import org.openapis.openapi.models.shared.PublicAdvertisedPrefixStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePublicAdvertisedPrefixesPatchRequest req = new ComputePublicAdvertisedPrefixesPatchRequest("similique", "sit") {{
                dollarXgafv = XgafvEnum.TWO;
                publicAdvertisedPrefix1 = new PublicAdvertisedPrefix() {{
                    creationTimestamp = "dolore";
                    description = "nisi";
                    dnsVerificationIp = "iure";
                    fingerprint = "modi";
                    id = "suscipit";
                    ipCidrRange = "itaque";
                    kind = "minus";
                    name = "Holly Langworth IV";
                    publicDelegatedPrefixs = new org.openapis.openapi.models.shared.PublicAdvertisedPrefixPublicDelegatedPrefix[]{{
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "quam";
                            name = "Miss Nicolas Waters";
                            project = "necessitatibus";
                            region = "totam";
                            status = "impedit";
                        }}),
                    }};
                    selfLink = "reprehenderit";
                    sharedSecret = "explicabo";
                    status = PublicAdvertisedPrefixStatusEnum.INITIAL;
                }};;
                accessToken = "ab";
                alt = AltEnum.JSON;
                callback = "hic";
                fields = "aliquam";
                key = "consequuntur";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "similique";
                requestId = "eaque";
                uploadType = "consectetur";
                uploadProtocol = "consectetur";
                userIp = "laudantium";
            }};            

            ComputePublicAdvertisedPrefixesPatchResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesPatch(req, new ComputePublicAdvertisedPrefixesPatchSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesPatchSecurityOption1("tempore", "odio") {{
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
