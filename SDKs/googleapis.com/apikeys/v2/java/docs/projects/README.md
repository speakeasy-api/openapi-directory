# projects

### Available Operations

* [apikeysProjectsLocationsKeysCreate](#apikeysprojectslocationskeyscreate) - Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysDelete](#apikeysprojectslocationskeysdelete) - Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysGet](#apikeysprojectslocationskeysget) - Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysGetKeyString](#apikeysprojectslocationskeysgetkeystring) - Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysList](#apikeysprojectslocationskeyslist) - Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysPatch](#apikeysprojectslocationskeyspatch) - Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysUndelete](#apikeysprojectslocationskeysundelete) - Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.

## apikeysProjectsLocationsKeysCreate

Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysCreateRequest;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysCreateResponse;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.V2AndroidApplication;
import org.openapis.openapi.models.shared.V2AndroidKeyRestrictions;
import org.openapis.openapi.models.shared.V2ApiTarget;
import org.openapis.openapi.models.shared.V2BrowserKeyRestrictions;
import org.openapis.openapi.models.shared.V2IosKeyRestrictions;
import org.openapis.openapi.models.shared.V2KeyInput;
import org.openapis.openapi.models.shared.V2Restrictions;
import org.openapis.openapi.models.shared.V2ServerKeyRestrictions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApikeysProjectsLocationsKeysCreateRequest req = new ApikeysProjectsLocationsKeysCreateRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                v2KeyInput = new V2KeyInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("quis", "veritatis");
                    }};
                    displayName = "deserunt";
                    restrictions = new V2Restrictions() {{
                        androidKeyRestrictions = new V2AndroidKeyRestrictions() {{
                            allowedApplications = new org.openapis.openapi.models.shared.V2AndroidApplication[]{{
                                add(new V2AndroidApplication() {{
                                    packageName = "ipsam";
                                    sha1Fingerprint = "repellendus";
                                }}),
                            }};
                        }};;
                        apiTargets = new org.openapis.openapi.models.shared.V2ApiTarget[]{{
                            add(new V2ApiTarget() {{
                                methods = new String[]{{
                                    add("odit"),
                                    add("at"),
                                    add("at"),
                                    add("maiores"),
                                }};
                                service = "molestiae";
                            }}),
                            add(new V2ApiTarget() {{
                                methods = new String[]{{
                                    add("quod"),
                                    add("esse"),
                                    add("totam"),
                                    add("porro"),
                                }};
                                service = "dolorum";
                            }}),
                            add(new V2ApiTarget() {{
                                methods = new String[]{{
                                    add("nam"),
                                }};
                                service = "officia";
                            }}),
                            add(new V2ApiTarget() {{
                                methods = new String[]{{
                                    add("fugit"),
                                    add("deleniti"),
                                    add("hic"),
                                }};
                                service = "optio";
                            }}),
                        }};
                        browserKeyRestrictions = new V2BrowserKeyRestrictions() {{
                            allowedReferrers = new String[]{{
                                add("beatae"),
                                add("commodi"),
                                add("molestiae"),
                            }};
                        }};;
                        iosKeyRestrictions = new V2IosKeyRestrictions() {{
                            allowedBundleIds = new String[]{{
                                add("qui"),
                                add("impedit"),
                            }};
                        }};;
                        serverKeyRestrictions = new V2ServerKeyRestrictions() {{
                            allowedIps = new String[]{{
                                add("esse"),
                                add("ipsum"),
                                add("excepturi"),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "natus";
                key = "sed";
                keyId = "iste";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "laboriosam";
                uploadProtocol = "hic";
            }};            

            ApikeysProjectsLocationsKeysCreateResponse res = sdk.projects.apikeysProjectsLocationsKeysCreate(req, new ApikeysProjectsLocationsKeysCreateSecurity("saepe", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## apikeysProjectsLocationsKeysDelete

Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysDeleteRequest;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysDeleteResponse;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApikeysProjectsLocationsKeysDeleteRequest req = new ApikeysProjectsLocationsKeysDeleteRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                etag = "quidem";
                fields = "architecto";
                key = "ipsa";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "mollitia";
                uploadProtocol = "laborum";
            }};            

            ApikeysProjectsLocationsKeysDeleteResponse res = sdk.projects.apikeysProjectsLocationsKeysDelete(req, new ApikeysProjectsLocationsKeysDeleteSecurity("dolores", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## apikeysProjectsLocationsKeysGet

Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysGetRequest;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysGetResponse;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysGetSecurity;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysGetSecurityOption1;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApikeysProjectsLocationsKeysGetRequest req = new ApikeysProjectsLocationsKeysGetRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "nemo";
                key = "minima";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "iure";
                uploadProtocol = "culpa";
            }};            

            ApikeysProjectsLocationsKeysGetResponse res = sdk.projects.apikeysProjectsLocationsKeysGet(req, new ApikeysProjectsLocationsKeysGetSecurity() {{
                option1 = new ApikeysProjectsLocationsKeysGetSecurityOption1("doloribus", "sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.v2Key != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apikeysProjectsLocationsKeysGetKeyString

Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysGetKeyStringRequest;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysGetKeyStringResponse;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysGetKeyStringSecurity;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysGetKeyStringSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApikeysProjectsLocationsKeysGetKeyStringRequest req = new ApikeysProjectsLocationsKeysGetKeyStringRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "consequuntur";
                fields = "repellat";
                key = "mollitia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "commodi";
                uploadProtocol = "quam";
            }};            

            ApikeysProjectsLocationsKeysGetKeyStringResponse res = sdk.projects.apikeysProjectsLocationsKeysGetKeyString(req, new ApikeysProjectsLocationsKeysGetKeyStringSecurity() {{
                option1 = new ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1("molestiae", "velit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.v2GetKeyStringResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apikeysProjectsLocationsKeysList

Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysListRequest;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysListResponse;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysListSecurity;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysListSecurityOption1;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApikeysProjectsLocationsKeysListRequest req = new ApikeysProjectsLocationsKeysListRequest("error") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "animi";
                key = "enim";
                oauthToken = "odit";
                pageSize = 778346L;
                pageToken = "sequi";
                prettyPrint = false;
                quotaUser = "tenetur";
                showDeleted = false;
                uploadType = "ipsam";
                uploadProtocol = "id";
            }};            

            ApikeysProjectsLocationsKeysListResponse res = sdk.projects.apikeysProjectsLocationsKeysList(req, new ApikeysProjectsLocationsKeysListSecurity() {{
                option1 = new ApikeysProjectsLocationsKeysListSecurityOption1("possimus", "aut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.v2ListKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apikeysProjectsLocationsKeysPatch

Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysPatchRequest;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysPatchResponse;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.V2AndroidApplication;
import org.openapis.openapi.models.shared.V2AndroidKeyRestrictions;
import org.openapis.openapi.models.shared.V2ApiTarget;
import org.openapis.openapi.models.shared.V2BrowserKeyRestrictions;
import org.openapis.openapi.models.shared.V2IosKeyRestrictions;
import org.openapis.openapi.models.shared.V2KeyInput;
import org.openapis.openapi.models.shared.V2Restrictions;
import org.openapis.openapi.models.shared.V2ServerKeyRestrictions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApikeysProjectsLocationsKeysPatchRequest req = new ApikeysProjectsLocationsKeysPatchRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                v2KeyInput = new V2KeyInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("laborum", "quasi");
                        put("reiciendis", "voluptatibus");
                        put("vero", "nihil");
                        put("praesentium", "voluptatibus");
                    }};
                    displayName = "ipsa";
                    restrictions = new V2Restrictions() {{
                        androidKeyRestrictions = new V2AndroidKeyRestrictions() {{
                            allowedApplications = new org.openapis.openapi.models.shared.V2AndroidApplication[]{{
                                add(new V2AndroidApplication() {{
                                    packageName = "voluptate";
                                    sha1Fingerprint = "cum";
                                }}),
                                add(new V2AndroidApplication() {{
                                    packageName = "perferendis";
                                    sha1Fingerprint = "doloremque";
                                }}),
                                add(new V2AndroidApplication() {{
                                    packageName = "reprehenderit";
                                    sha1Fingerprint = "ut";
                                }}),
                            }};
                        }};;
                        apiTargets = new org.openapis.openapi.models.shared.V2ApiTarget[]{{
                            add(new V2ApiTarget() {{
                                methods = new String[]{{
                                    add("corporis"),
                                }};
                                service = "dolore";
                            }}),
                            add(new V2ApiTarget() {{
                                methods = new String[]{{
                                    add("dicta"),
                                    add("harum"),
                                }};
                                service = "enim";
                            }}),
                            add(new V2ApiTarget() {{
                                methods = new String[]{{
                                    add("commodi"),
                                    add("repudiandae"),
                                    add("quae"),
                                    add("ipsum"),
                                }};
                                service = "quidem";
                            }}),
                            add(new V2ApiTarget() {{
                                methods = new String[]{{
                                    add("excepturi"),
                                    add("pariatur"),
                                    add("modi"),
                                }};
                                service = "praesentium";
                            }}),
                        }};
                        browserKeyRestrictions = new V2BrowserKeyRestrictions() {{
                            allowedReferrers = new String[]{{
                                add("voluptates"),
                                add("quasi"),
                                add("repudiandae"),
                            }};
                        }};;
                        iosKeyRestrictions = new V2IosKeyRestrictions() {{
                            allowedBundleIds = new String[]{{
                                add("veritatis"),
                                add("itaque"),
                                add("incidunt"),
                            }};
                        }};;
                        serverKeyRestrictions = new V2ServerKeyRestrictions() {{
                            allowedIps = new String[]{{
                                add("consequatur"),
                                add("est"),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "modi";
                updateMask = "qui";
                uploadType = "aliquid";
                uploadProtocol = "cupiditate";
            }};            

            ApikeysProjectsLocationsKeysPatchResponse res = sdk.projects.apikeysProjectsLocationsKeysPatch(req, new ApikeysProjectsLocationsKeysPatchSecurity("quos", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## apikeysProjectsLocationsKeysUndelete

Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysUndeleteRequest;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysUndeleteResponse;
import org.openapis.openapi.models.operations.ApikeysProjectsLocationsKeysUndeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApikeysProjectsLocationsKeysUndeleteRequest req = new ApikeysProjectsLocationsKeysUndeleteRequest("magni") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("alias", "fugit");
                    put("dolorum", "excepturi");
                }};
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "labore";
                key = "delectus";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "eligendi";
                uploadProtocol = "sint";
            }};            

            ApikeysProjectsLocationsKeysUndeleteResponse res = sdk.projects.apikeysProjectsLocationsKeysUndelete(req, new ApikeysProjectsLocationsKeysUndeleteSecurity("aliquid", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
