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

            ComputePublicAdvertisedPrefixesDeleteRequest req = new ComputePublicAdvertisedPrefixesDeleteRequest("deserunt", "doloremque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "quod";
                key = "harum";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "exercitationem";
                requestId = "ab";
                uploadType = "accusantium";
                uploadProtocol = "quasi";
                userIp = "voluptatibus";
            }};            

            ComputePublicAdvertisedPrefixesDeleteResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesDelete(req, new ComputePublicAdvertisedPrefixesDeleteSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesDeleteSecurityOption1("in", "blanditiis") {{
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

            ComputePublicAdvertisedPrefixesGetRequest req = new ComputePublicAdvertisedPrefixesGetRequest("aliquam", "distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "tempora";
                key = "quidem";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "inventore";
                uploadProtocol = "explicabo";
                userIp = "non";
            }};            

            ComputePublicAdvertisedPrefixesGetResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesGet(req, new ComputePublicAdvertisedPrefixesGetSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesGetSecurityOption1("doloremque", "ad") {{
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

            ComputePublicAdvertisedPrefixesInsertRequest req = new ComputePublicAdvertisedPrefixesInsertRequest("vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                publicAdvertisedPrefix = new PublicAdvertisedPrefix() {{
                    creationTimestamp = "magnam";
                    description = "dolores";
                    dnsVerificationIp = "amet";
                    fingerprint = "dolorum";
                    id = "sint";
                    ipCidrRange = "dicta";
                    kind = "consectetur";
                    name = "Ralph Murazik";
                    publicDelegatedPrefixs = new org.openapis.openapi.models.shared.PublicAdvertisedPrefixPublicDelegatedPrefix[]{{
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "ratione";
                            name = "Bennie Kris";
                            project = "quod";
                            region = "delectus";
                            status = "quo";
                        }}),
                    }};
                    selfLink = "saepe";
                    sharedSecret = "earum";
                    status = PublicAdvertisedPrefixStatusEnum.PTR_CONFIGURED;
                }};;
                accessToken = "porro";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "error";
                key = "praesentium";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "similique";
                requestId = "quam";
                uploadType = "modi";
                uploadProtocol = "officiis";
                userIp = "quod";
            }};            

            ComputePublicAdvertisedPrefixesInsertResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesInsert(req, new ComputePublicAdvertisedPrefixesInsertSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesInsertSecurityOption1("odio", "minima") {{
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

            ComputePublicAdvertisedPrefixesListRequest req = new ComputePublicAdvertisedPrefixesListRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tempore";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "id";
                filter = "sint";
                key = "modi";
                maxResults = 546692L;
                oauthToken = "illum";
                orderBy = "quam";
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "nobis";
                returnPartialSuccess = false;
                uploadType = "vitae";
                uploadProtocol = "ducimus";
                userIp = "quas";
            }};            

            ComputePublicAdvertisedPrefixesListResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesList(req, new ComputePublicAdvertisedPrefixesListSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesListSecurityOption1("possimus", "reiciendis") {{
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

            ComputePublicAdvertisedPrefixesPatchRequest req = new ComputePublicAdvertisedPrefixesPatchRequest("in", "assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                publicAdvertisedPrefix1 = new PublicAdvertisedPrefix() {{
                    creationTimestamp = "at";
                    description = "occaecati";
                    dnsVerificationIp = "eius";
                    fingerprint = "amet";
                    id = "libero";
                    ipCidrRange = "minus";
                    kind = "quis";
                    name = "Mrs. Nadine Farrell";
                    publicDelegatedPrefixs = new org.openapis.openapi.models.shared.PublicAdvertisedPrefixPublicDelegatedPrefix[]{{
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "deserunt";
                            name = "Frederick Lang";
                            project = "eveniet";
                            region = "rem";
                            status = "iste";
                        }}),
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "voluptatem";
                            name = "Olivia Haag";
                            project = "velit";
                            region = "quaerat";
                            status = "reiciendis";
                        }}),
                        add(new PublicAdvertisedPrefixPublicDelegatedPrefix() {{
                            ipRange = "fuga";
                            name = "Lorene Ryan";
                            project = "quisquam";
                            region = "inventore";
                            status = "hic";
                        }}),
                    }};
                    selfLink = "quod";
                    sharedSecret = "voluptas";
                    status = PublicAdvertisedPrefixStatusEnum.REVERSE_DNS_LOOKUP_FAILED;
                }};;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "eligendi";
                fields = "at";
                key = "tempore";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "aliquam";
                requestId = "impedit";
                uploadType = "modi";
                uploadProtocol = "corrupti";
                userIp = "facilis";
            }};            

            ComputePublicAdvertisedPrefixesPatchResponse res = sdk.publicAdvertisedPrefixes.computePublicAdvertisedPrefixesPatch(req, new ComputePublicAdvertisedPrefixesPatchSecurity() {{
                option1 = new ComputePublicAdvertisedPrefixesPatchSecurityOption1("aliquam", "quia") {{
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
