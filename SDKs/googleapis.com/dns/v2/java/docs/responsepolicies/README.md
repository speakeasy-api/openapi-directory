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

            DnsResponsePoliciesCreateRequest req = new DnsResponsePoliciesCreateRequest("consequatur", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                responsePolicy = new ResponsePolicy() {{
                    description = "dolore";
                    gkeClusters = new org.openapis.openapi.models.shared.ResponsePolicyGKECluster[]{{
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "est";
                            kind = "quo";
                        }}),
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "maxime";
                            kind = "delectus";
                        }}),
                    }};
                    id = "laboriosam";
                    kind = "laboriosam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("fuga", "officia");
                        put("repellat", "cupiditate");
                    }};
                    networks = new org.openapis.openapi.models.shared.ResponsePolicyNetwork[]{{
                        add(new ResponsePolicyNetwork() {{
                            kind = "tempore";
                            networkUrl = "culpa";
                        }}),
                        add(new ResponsePolicyNetwork() {{
                            kind = "fugiat";
                            networkUrl = "inventore";
                        }}),
                        add(new ResponsePolicyNetwork() {{
                            kind = "atque";
                            networkUrl = "ad";
                        }}),
                    }};
                    responsePolicyName = "sapiente";
                }};;
                accessToken = "voluptates";
                alt = AltEnum.JSON;
                callback = "nesciunt";
                clientOperationId = "ab";
                fields = "quibusdam";
                key = "suscipit";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "nemo";
                uploadProtocol = "cumque";
            }};            

            DnsResponsePoliciesCreateResponse res = sdk.responsePolicies.dnsResponsePoliciesCreate(req, new DnsResponsePoliciesCreateSecurity() {{
                option1 = new DnsResponsePoliciesCreateSecurityOption1("voluptatum", "sequi") {{
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

            DnsResponsePoliciesDeleteRequest req = new DnsResponsePoliciesDeleteRequest("atque", "maiores", "expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                clientOperationId = "eaque";
                fields = "impedit";
                key = "nam";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "delectus";
                uploadProtocol = "minus";
            }};            

            DnsResponsePoliciesDeleteResponse res = sdk.responsePolicies.dnsResponsePoliciesDelete(req, new DnsResponsePoliciesDeleteSecurity() {{
                option1 = new DnsResponsePoliciesDeleteSecurityOption1("ut", "distinctio") {{
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

            DnsResponsePoliciesGetRequest req = new DnsResponsePoliciesGetRequest("eius", "eos", "veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "debitis";
                clientOperationId = "laboriosam";
                fields = "eos";
                key = "amet";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "occaecati";
                uploadProtocol = "reiciendis";
            }};            

            DnsResponsePoliciesGetResponse res = sdk.responsePolicies.dnsResponsePoliciesGet(req, new DnsResponsePoliciesGetSecurity() {{
                option1 = new DnsResponsePoliciesGetSecurityOption1("voluptate", "tempore") {{
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

            DnsResponsePoliciesListRequest req = new DnsResponsePoliciesListRequest("in", "omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tenetur";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "iusto";
                key = "esse";
                maxResults = 687352L;
                oauthToken = "ad";
                pageToken = "quod";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "totam";
                uploadProtocol = "vero";
            }};            

            DnsResponsePoliciesListResponse res = sdk.responsePolicies.dnsResponsePoliciesList(req, new DnsResponsePoliciesListSecurity() {{
                option1 = new DnsResponsePoliciesListSecurityOption1("dolore", "nam") {{
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

            DnsResponsePoliciesPatchRequest req = new DnsResponsePoliciesPatchRequest("officia", "maiores", "cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                responsePolicy1 = new ResponsePolicy() {{
                    description = "saepe";
                    gkeClusters = new org.openapis.openapi.models.shared.ResponsePolicyGKECluster[]{{
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "eaque";
                            kind = "ex";
                        }}),
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "eveniet";
                            kind = "delectus";
                        }}),
                    }};
                    id = "deleniti";
                    kind = "provident";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolorum", "nostrum");
                    }};
                    networks = new org.openapis.openapi.models.shared.ResponsePolicyNetwork[]{{
                        add(new ResponsePolicyNetwork() {{
                            kind = "nam";
                            networkUrl = "numquam";
                        }}),
                        add(new ResponsePolicyNetwork() {{
                            kind = "odio";
                            networkUrl = "nostrum";
                        }}),
                    }};
                    responsePolicyName = "maiores";
                }};;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "earum";
                clientOperationId = "minima";
                fields = "ex";
                key = "possimus";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "nostrum";
                uploadProtocol = "fuga";
            }};            

            DnsResponsePoliciesPatchResponse res = sdk.responsePolicies.dnsResponsePoliciesPatch(req, new DnsResponsePoliciesPatchSecurity() {{
                option1 = new DnsResponsePoliciesPatchSecurityOption1("sequi", "maxime") {{
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

            DnsResponsePoliciesUpdateRequest req = new DnsResponsePoliciesUpdateRequest("numquam", "laborum", "eligendi") {{
                dollarXgafv = XgafvEnum.ONE;
                responsePolicy1 = new ResponsePolicy() {{
                    description = "adipisci";
                    gkeClusters = new org.openapis.openapi.models.shared.ResponsePolicyGKECluster[]{{
                        add(new ResponsePolicyGKECluster() {{
                            gkeClusterName = "rerum";
                            kind = "occaecati";
                        }}),
                    }};
                    id = "provident";
                    kind = "necessitatibus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("autem", "optio");
                    }};
                    networks = new org.openapis.openapi.models.shared.ResponsePolicyNetwork[]{{
                        add(new ResponsePolicyNetwork() {{
                            kind = "fugiat";
                            networkUrl = "blanditiis";
                        }}),
                        add(new ResponsePolicyNetwork() {{
                            kind = "a";
                            networkUrl = "natus";
                        }}),
                        add(new ResponsePolicyNetwork() {{
                            kind = "sapiente";
                            networkUrl = "repellendus";
                        }}),
                        add(new ResponsePolicyNetwork() {{
                            kind = "facilis";
                            networkUrl = "molestias";
                        }}),
                    }};
                    responsePolicyName = "dolore";
                }};;
                accessToken = "et";
                alt = AltEnum.JSON;
                callback = "maiores";
                clientOperationId = "nisi";
                fields = "velit";
                key = "tempore";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "blanditiis";
                uploadProtocol = "vitae";
            }};            

            DnsResponsePoliciesUpdateResponse res = sdk.responsePolicies.dnsResponsePoliciesUpdate(req, new DnsResponsePoliciesUpdateSecurity() {{
                option1 = new DnsResponsePoliciesUpdateSecurityOption1("iusto", "atque") {{
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
