# responsePolicies

### Available Operations

* [dnsResponsePoliciesCreate](#dnsresponsepoliciescreate) - Creates a new Response Policy
* [dnsResponsePoliciesDelete](#dnsresponsepoliciesdelete) - Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
* [dnsResponsePoliciesGet](#dnsresponsepoliciesget) - Fetches the representation of an existing Response Policy.
* [dnsResponsePoliciesList](#dnsresponsepolicieslist) - Enumerates all Response Policies associated with a project.
* [dnsResponsePoliciesPatch](#dnsresponsepoliciespatch) - Applies a partial update to an existing Response Policy.
* [dnsResponsePoliciesUpdate](#dnsresponsepoliciesupdate) - Updates an existing Response Policy.

## dnsResponsePoliciesCreate

Creates a new Response Policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResponsePoliciesCreateRequest;
import org.openapis.openapi.models.operations.DnsResponsePoliciesCreateResponse;
import org.openapis.openapi.models.operations.DnsResponsePoliciesCreateSecurity;
import org.openapis.openapi.models.operations.DnsResponsePoliciesCreateSecurityOption1;
import org.openapis.openapi.models.operations.DnsResponsePoliciesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ResponsePolicy;
import org.openapis.openapi.models.shared.ResponsePolicyGKECluster;
import org.openapis.openapi.models.shared.ResponsePolicyNetwork;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResponsePoliciesCreateRequest req = new DnsResponsePoliciesCreateRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                responsePolicy = new ResponsePolicy() {{
                    description = "molestiae";
                    gkeClusters = new org.openapis.openapi.models.shared.ResponsePolicyGKECluster[]{{
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "accusamus";
                            kind = "excepturi";
                        }}),
                    }};
                    id = "deleniti";
                    kind = "inventore";
                    labels = new java.util.HashMap<String, String>() {{
                        put("perferendis", "corporis");
                        put("ullam", "molestiae");
                        put("adipisci", "totam");
                    }};
                    networks = new org.openapis.openapi.models.shared.ResponsePolicyNetwork[]{{
                        add(new ResponsePolicyNetwork() {{
                            kind = "optio";
                            networkUrl = "itaque";
                        }}),
                        add(new ResponsePolicyNetwork() {{
                            kind = "at";
                            networkUrl = "nam";
                        }}),
                        add(new ResponsePolicyNetwork() {{
                            kind = "id";
                            networkUrl = "cumque";
                        }}),
                    }};
                    responsePolicyName = "in";
                }};;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "culpa";
                clientOperationId = "dolor";
                fields = "occaecati";
                key = "exercitationem";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "pariatur";
                uploadProtocol = "vel";
            }};            

            DnsResponsePoliciesCreateResponse res = sdk.responsePolicies.dnsResponsePoliciesCreate(req, new DnsResponsePoliciesCreateSecurity() {{
                option1 = new DnsResponsePoliciesCreateSecurityOption1("laboriosam", "soluta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.responsePolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResponsePoliciesDelete

Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResponsePoliciesDeleteRequest;
import org.openapis.openapi.models.operations.DnsResponsePoliciesDeleteResponse;
import org.openapis.openapi.models.operations.DnsResponsePoliciesDeleteSecurity;
import org.openapis.openapi.models.operations.DnsResponsePoliciesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DnsResponsePoliciesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResponsePoliciesDeleteRequest req = new DnsResponsePoliciesDeleteRequest("minus", "magni") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "quas";
                clientOperationId = "aut";
                fields = "autem";
                key = "dolorem";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "iste";
                uploadProtocol = "occaecati";
            }};            

            DnsResponsePoliciesDeleteResponse res = sdk.responsePolicies.dnsResponsePoliciesDelete(req, new DnsResponsePoliciesDeleteSecurity() {{
                option1 = new DnsResponsePoliciesDeleteSecurityOption1("enim", "tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## dnsResponsePoliciesGet

Fetches the representation of an existing Response Policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResponsePoliciesGetRequest;
import org.openapis.openapi.models.operations.DnsResponsePoliciesGetResponse;
import org.openapis.openapi.models.operations.DnsResponsePoliciesGetSecurity;
import org.openapis.openapi.models.operations.DnsResponsePoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.DnsResponsePoliciesGetSecurityOption2;
import org.openapis.openapi.models.operations.DnsResponsePoliciesGetSecurityOption3;
import org.openapis.openapi.models.operations.DnsResponsePoliciesGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResponsePoliciesGetRequest req = new DnsResponsePoliciesGetRequest("libero", "iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "explicabo";
                clientOperationId = "accusantium";
                fields = "eum";
                key = "nesciunt";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "atque";
                uploadProtocol = "explicabo";
            }};            

            DnsResponsePoliciesGetResponse res = sdk.responsePolicies.dnsResponsePoliciesGet(req, new DnsResponsePoliciesGetSecurity() {{
                option1 = new DnsResponsePoliciesGetSecurityOption1("totam", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.responsePolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResponsePoliciesList

Enumerates all Response Policies associated with a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResponsePoliciesListRequest;
import org.openapis.openapi.models.operations.DnsResponsePoliciesListResponse;
import org.openapis.openapi.models.operations.DnsResponsePoliciesListSecurity;
import org.openapis.openapi.models.operations.DnsResponsePoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.DnsResponsePoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.DnsResponsePoliciesListSecurityOption3;
import org.openapis.openapi.models.operations.DnsResponsePoliciesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResponsePoliciesListRequest req = new DnsResponsePoliciesListRequest("nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "optio";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "alias";
                key = "accusantium";
                maxResults = 40150L;
                oauthToken = "autem";
                pageToken = "tempore";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "reiciendis";
                uploadProtocol = "incidunt";
            }};            

            DnsResponsePoliciesListResponse res = sdk.responsePolicies.dnsResponsePoliciesList(req, new DnsResponsePoliciesListSecurity() {{
                option1 = new DnsResponsePoliciesListSecurityOption1("provident", "dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.responsePoliciesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResponsePoliciesPatch

Applies a partial update to an existing Response Policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResponsePoliciesPatchRequest;
import org.openapis.openapi.models.operations.DnsResponsePoliciesPatchResponse;
import org.openapis.openapi.models.operations.DnsResponsePoliciesPatchSecurity;
import org.openapis.openapi.models.operations.DnsResponsePoliciesPatchSecurityOption1;
import org.openapis.openapi.models.operations.DnsResponsePoliciesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ResponsePolicy;
import org.openapis.openapi.models.shared.ResponsePolicyGKECluster;
import org.openapis.openapi.models.shared.ResponsePolicyNetwork;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResponsePoliciesPatchRequest req = new DnsResponsePoliciesPatchRequest("illo", "recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                responsePolicy1 = new ResponsePolicy() {{
                    description = "magni";
                    gkeClusters = new org.openapis.openapi.models.shared.ResponsePolicyGKECluster[]{{
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "voluptas";
                            kind = "nesciunt";
                        }}),
                    }};
                    id = "libero";
                    kind = "molestiae";
                    labels = new java.util.HashMap<String, String>() {{
                        put("perspiciatis", "amet");
                        put("ex", "aliquid");
                    }};
                    networks = new org.openapis.openapi.models.shared.ResponsePolicyNetwork[]{{
                        add(new ResponsePolicyNetwork() {{
                            kind = "quisquam";
                            networkUrl = "rem";
                        }}),
                        add(new ResponsePolicyNetwork() {{
                            kind = "eveniet";
                            networkUrl = "eveniet";
                        }}),
                        add(new ResponsePolicyNetwork() {{
                            kind = "voluptatem";
                            networkUrl = "repellat";
                        }}),
                    }};
                    responsePolicyName = "magni";
                }};;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                clientOperationId = "provident";
                fields = "veniam";
                key = "quos";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "eius";
                uploadProtocol = "doloremque";
            }};            

            DnsResponsePoliciesPatchResponse res = sdk.responsePolicies.dnsResponsePoliciesPatch(req, new DnsResponsePoliciesPatchSecurity() {{
                option1 = new DnsResponsePoliciesPatchSecurityOption1("vero", "aut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.responsePoliciesPatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResponsePoliciesUpdate

Updates an existing Response Policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResponsePoliciesUpdateRequest;
import org.openapis.openapi.models.operations.DnsResponsePoliciesUpdateResponse;
import org.openapis.openapi.models.operations.DnsResponsePoliciesUpdateSecurity;
import org.openapis.openapi.models.operations.DnsResponsePoliciesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DnsResponsePoliciesUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ResponsePolicy;
import org.openapis.openapi.models.shared.ResponsePolicyGKECluster;
import org.openapis.openapi.models.shared.ResponsePolicyNetwork;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResponsePoliciesUpdateRequest req = new DnsResponsePoliciesUpdateRequest("sequi", "reiciendis") {{
                dollarXgafv = XgafvEnum.ONE;
                responsePolicy1 = new ResponsePolicy() {{
                    description = "assumenda";
                    gkeClusters = new org.openapis.openapi.models.shared.ResponsePolicyGKECluster[]{{
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "nobis";
                            kind = "est";
                        }}),
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "quia";
                            kind = "natus";
                        }}),
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "molestiae";
                            kind = "facilis";
                        }}),
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "earum";
                            kind = "ipsum";
                        }}),
                    }};
                    id = "itaque";
                    kind = "cupiditate";
                    labels = new java.util.HashMap<String, String>() {{
                        put("harum", "nobis");
                    }};
                    networks = new org.openapis.openapi.models.shared.ResponsePolicyNetwork[]{{
                        add(new ResponsePolicyNetwork() {{
                            kind = "consequatur";
                            networkUrl = "temporibus";
                        }}),
                        add(new ResponsePolicyNetwork() {{
                            kind = "doloribus";
                            networkUrl = "quos";
                        }}),
                    }};
                    responsePolicyName = "commodi";
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.PROTO;
                callback = "nulla";
                clientOperationId = "nemo";
                fields = "ratione";
                key = "dolore";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "impedit";
                uploadProtocol = "libero";
            }};            

            DnsResponsePoliciesUpdateResponse res = sdk.responsePolicies.dnsResponsePoliciesUpdate(req, new DnsResponsePoliciesUpdateSecurity() {{
                option1 = new DnsResponsePoliciesUpdateSecurityOption1("dolor", "nesciunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.responsePoliciesUpdateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
