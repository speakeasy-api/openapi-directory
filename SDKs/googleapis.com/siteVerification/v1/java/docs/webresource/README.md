# webResource

### Available Operations

* [siteVerificationWebResourceDelete](#siteverificationwebresourcedelete) - Relinquish ownership of a website or domain.
* [siteVerificationWebResourceGet](#siteverificationwebresourceget) - Get the most current data for a website or domain.
* [siteVerificationWebResourceGetToken](#siteverificationwebresourcegettoken) - Get a verification token for placing on a website or domain.
* [siteVerificationWebResourceInsert](#siteverificationwebresourceinsert) - Attempt verification of a website or domain.
* [siteVerificationWebResourceList](#siteverificationwebresourcelist) - Get the list of your verified websites and domains.
* [siteVerificationWebResourcePatch](#siteverificationwebresourcepatch) - Modify the list of owners for your website or domain. This method supports patch semantics.
* [siteVerificationWebResourceUpdate](#siteverificationwebresourceupdate) - Modify the list of owners for your website or domain.

## siteVerificationWebResourceDelete

Relinquish ownership of a website or domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteRequest;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteResponse;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SiteVerificationWebResourceDeleteRequest req = new SiteVerificationWebResourceDeleteRequest("vel") {{
                alt = AltEnum.JSON;
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                userIp = "magnam";
            }};            

            SiteVerificationWebResourceDeleteResponse res = sdk.webResource.siteVerificationWebResourceDelete(req, new SiteVerificationWebResourceDeleteSecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## siteVerificationWebResourceGet

Get the most current data for a website or domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceGetRequest;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceGetResponse;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SiteVerificationWebResourceGetRequest req = new SiteVerificationWebResourceGetRequest("delectus") {{
                alt = AltEnum.JSON;
                fields = "tempora";
                key = "suscipit";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "minus";
                userIp = "placeat";
            }};            

            SiteVerificationWebResourceGetResponse res = sdk.webResource.siteVerificationWebResourceGet(req, new SiteVerificationWebResourceGetSecurity("voluptatum", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.siteVerificationWebResourceResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## siteVerificationWebResourceGetToken

Get a verification token for placing on a website or domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceGetTokenRequest;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceGetTokenResponse;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceGetTokenSecurity;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceGetTokenSecurityOption1;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceGetTokenSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SiteVerificationWebResourceGettokenRequest;
import org.openapis.openapi.models.shared.SiteVerificationWebResourceGettokenRequestSite;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SiteVerificationWebResourceGetTokenRequest req = new SiteVerificationWebResourceGetTokenRequest() {{
                siteVerificationWebResourceGettokenRequest = new SiteVerificationWebResourceGettokenRequest() {{
                    site = new SiteVerificationWebResourceGettokenRequestSite() {{
                        identifier = "excepturi";
                        type = "nisi";
                    }};;
                    verificationMethod = "recusandae";
                }};;
                alt = AltEnum.JSON;
                fields = "temporibus";
                key = "ab";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "veritatis";
                userIp = "deserunt";
            }};            

            SiteVerificationWebResourceGetTokenResponse res = sdk.webResource.siteVerificationWebResourceGetToken(req, new SiteVerificationWebResourceGetTokenSecurity() {{
                option1 = new SiteVerificationWebResourceGetTokenSecurityOption1("perferendis", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.siteVerificationWebResourceGettokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## siteVerificationWebResourceInsert

Attempt verification of a website or domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceInsertRequest;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceInsertResponse;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceInsertSecurity;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceInsertSecurityOption1;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SiteVerificationWebResourceResource;
import org.openapis.openapi.models.shared.SiteVerificationWebResourceResourceSite;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SiteVerificationWebResourceInsertRequest req = new SiteVerificationWebResourceInsertRequest("repellendus") {{
                siteVerificationWebResourceResource = new SiteVerificationWebResourceResource() {{
                    id = "fc2ddf7c-c78c-4a1b-a928-fc816742cb73";
                    owners = new String[]{{
                        add("aspernatur"),
                        add("perferendis"),
                        add("ad"),
                    }};
                    site = new SiteVerificationWebResourceResourceSite() {{
                        identifier = "natus";
                        type = "sed";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "iste";
                key = "dolor";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "laboriosam";
                userIp = "hic";
            }};            

            SiteVerificationWebResourceInsertResponse res = sdk.webResource.siteVerificationWebResourceInsert(req, new SiteVerificationWebResourceInsertSecurity() {{
                option1 = new SiteVerificationWebResourceInsertSecurityOption1("saepe", "fuga") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.siteVerificationWebResourceResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## siteVerificationWebResourceList

Get the list of your verified websites and domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceListRequest;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceListResponse;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SiteVerificationWebResourceListRequest req = new SiteVerificationWebResourceListRequest() {{
                alt = AltEnum.JSON;
                fields = "in";
                key = "corporis";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "iure";
                userIp = "saepe";
            }};            

            SiteVerificationWebResourceListResponse res = sdk.webResource.siteVerificationWebResourceList(req, new SiteVerificationWebResourceListSecurity("quidem", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.siteVerificationWebResourceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## siteVerificationWebResourcePatch

Modify the list of owners for your website or domain. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SiteVerificationWebResourcePatchRequest;
import org.openapis.openapi.models.operations.SiteVerificationWebResourcePatchResponse;
import org.openapis.openapi.models.operations.SiteVerificationWebResourcePatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SiteVerificationWebResourceResource;
import org.openapis.openapi.models.shared.SiteVerificationWebResourceResourceSite;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SiteVerificationWebResourcePatchRequest req = new SiteVerificationWebResourcePatchRequest("ipsa") {{
                siteVerificationWebResourceResource = new SiteVerificationWebResourceResource() {{
                    id = "faaa2352-c595-4590-baff-1a3a2fa94677";
                    owners = new String[]{{
                        add("error"),
                    }};
                    site = new SiteVerificationWebResourceResourceSite() {{
                        identifier = "quia";
                        type = "quis";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "vitae";
                key = "laborum";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "enim";
                userIp = "odit";
            }};            

            SiteVerificationWebResourcePatchResponse res = sdk.webResource.siteVerificationWebResourcePatch(req, new SiteVerificationWebResourcePatchSecurity("quo", "sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.siteVerificationWebResourceResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## siteVerificationWebResourceUpdate

Modify the list of owners for your website or domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceUpdateRequest;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceUpdateResponse;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SiteVerificationWebResourceResource;
import org.openapis.openapi.models.shared.SiteVerificationWebResourceResourceSite;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SiteVerificationWebResourceUpdateRequest req = new SiteVerificationWebResourceUpdateRequest("tenetur") {{
                siteVerificationWebResourceResource = new SiteVerificationWebResourceResource() {{
                    id = "5ad019da-1ffe-478f-897b-0074f15471b5";
                    owners = new String[]{{
                        add("commodi"),
                        add("repudiandae"),
                        add("quae"),
                        add("ipsum"),
                    }};
                    site = new SiteVerificationWebResourceResourceSite() {{
                        identifier = "quidem";
                        type = "molestias";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "excepturi";
                key = "pariatur";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "praesentium";
                userIp = "rem";
            }};            

            SiteVerificationWebResourceUpdateResponse res = sdk.webResource.siteVerificationWebResourceUpdate(req, new SiteVerificationWebResourceUpdateSecurity("voluptates", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.siteVerificationWebResourceResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
