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

            DnsResponsePoliciesCreateRequest req = new DnsResponsePoliciesCreateRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                responsePolicy = new ResponsePolicy() {{
                    description = "aperiam";
                    gkeClusters = new org.openapis.openapi.models.shared.ResponsePolicyGKECluster[]{{
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "non";
                            kind = "beatae";
                        }}),
                    }};
                    id = "sequi";
                    kind = "rerum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("debitis", "quis");
                    }};
                    networks = new org.openapis.openapi.models.shared.ResponsePolicyNetwork[]{{
                        add(new ResponsePolicyNetwork() {{
                            kind = "incidunt";
                            networkUrl = "ut";
                        }}),
                    }};
                    responsePolicyName = "delectus";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "maiores";
                clientOperationId = "debitis";
                fields = "reprehenderit";
                key = "eos";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "ut";
                uploadProtocol = "quae";
            }};            

            DnsResponsePoliciesCreateResponse res = sdk.responsePolicies.dnsResponsePoliciesCreate(req, new DnsResponsePoliciesCreateSecurity() {{
                option1 = new DnsResponsePoliciesCreateSecurityOption1("nihil", "quam") {{
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

            DnsResponsePoliciesDeleteRequest req = new DnsResponsePoliciesDeleteRequest("assumenda", "consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "placeat";
                alt = AltEnum.JSON;
                callback = "tenetur";
                clientOperationId = "non";
                fields = "accusantium";
                key = "corrupti";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "impedit";
                uploadProtocol = "dicta";
            }};            

            DnsResponsePoliciesDeleteResponse res = sdk.responsePolicies.dnsResponsePoliciesDelete(req, new DnsResponsePoliciesDeleteSecurity() {{
                option1 = new DnsResponsePoliciesDeleteSecurityOption1("corporis", "impedit") {{
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

            DnsResponsePoliciesGetRequest req = new DnsResponsePoliciesGetRequest("eveniet", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illum";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                clientOperationId = "quasi";
                fields = "accusamus";
                key = "animi";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "maiores";
                uploadProtocol = "odio";
            }};            

            DnsResponsePoliciesGetResponse res = sdk.responsePolicies.dnsResponsePoliciesGet(req, new DnsResponsePoliciesGetSecurity() {{
                option1 = new DnsResponsePoliciesGetSecurityOption1("veniam", "fuga") {{
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

            DnsResponsePoliciesListRequest req = new DnsResponsePoliciesListRequest("itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tenetur";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "eligendi";
                key = "id";
                maxResults = 719077L;
                oauthToken = "corporis";
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "cupiditate";
                uploadProtocol = "unde";
            }};            

            DnsResponsePoliciesListResponse res = sdk.responsePolicies.dnsResponsePoliciesList(req, new DnsResponsePoliciesListSecurity() {{
                option1 = new DnsResponsePoliciesListSecurityOption1("et", "quisquam") {{
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

            DnsResponsePoliciesPatchRequest req = new DnsResponsePoliciesPatchRequest("unde", "sed") {{
                dollarXgafv = XgafvEnum.ONE;
                responsePolicy1 = new ResponsePolicy() {{
                    description = "facere";
                    gkeClusters = new org.openapis.openapi.models.shared.ResponsePolicyGKECluster[]{{
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "nam";
                            kind = "quaerat";
                        }}),
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "corrupti";
                            kind = "sint";
                        }}),
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "eius";
                            kind = "vel";
                        }}),
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "quasi";
                            kind = "vero";
                        }}),
                    }};
                    id = "odio";
                    kind = "numquam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("inventore", "optio");
                    }};
                    networks = new org.openapis.openapi.models.shared.ResponsePolicyNetwork[]{{
                        add(new ResponsePolicyNetwork() {{
                            kind = "recusandae";
                            networkUrl = "commodi";
                        }}),
                        add(new ResponsePolicyNetwork() {{
                            kind = "possimus";
                            networkUrl = "provident";
                        }}),
                        add(new ResponsePolicyNetwork() {{
                            kind = "veniam";
                            networkUrl = "sit";
                        }}),
                    }};
                    responsePolicyName = "fugit";
                }};;
                accessToken = "a";
                alt = AltEnum.JSON;
                callback = "vero";
                clientOperationId = "id";
                fields = "error";
                key = "ratione";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "voluptas";
                uploadProtocol = "sint";
            }};            

            DnsResponsePoliciesPatchResponse res = sdk.responsePolicies.dnsResponsePoliciesPatch(req, new DnsResponsePoliciesPatchSecurity() {{
                option1 = new DnsResponsePoliciesPatchSecurityOption1("maiores", "nihil") {{
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

            DnsResponsePoliciesUpdateRequest req = new DnsResponsePoliciesUpdateRequest("fuga", "cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                responsePolicy1 = new ResponsePolicy() {{
                    description = "maiores";
                    gkeClusters = new org.openapis.openapi.models.shared.ResponsePolicyGKECluster[]{{
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "explicabo";
                            kind = "delectus";
                        }}),
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "quos";
                            kind = "deleniti";
                        }}),
                    }};
                    id = "enim";
                    kind = "sit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("natus", "voluptatem");
                    }};
                    networks = new org.openapis.openapi.models.shared.ResponsePolicyNetwork[]{{
                        add(new ResponsePolicyNetwork() {{
                            kind = "occaecati";
                            networkUrl = "quasi";
                        }}),
                        add(new ResponsePolicyNetwork() {{
                            kind = "veritatis";
                            networkUrl = "ex";
                        }}),
                    }};
                    responsePolicyName = "doloremque";
                }};;
                accessToken = "quas";
                alt = AltEnum.JSON;
                callback = "perferendis";
                clientOperationId = "esse";
                fields = "quas";
                key = "blanditiis";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "minus";
                uploadProtocol = "autem";
            }};            

            DnsResponsePoliciesUpdateResponse res = sdk.responsePolicies.dnsResponsePoliciesUpdate(req, new DnsResponsePoliciesUpdateSecurity() {{
                option1 = new DnsResponsePoliciesUpdateSecurityOption1("vel", "beatae") {{
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
