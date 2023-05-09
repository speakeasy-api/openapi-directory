# policies

### Available Operations

* [dnsPoliciesCreate](#dnspoliciescreate) - Creates a new Policy.
* [dnsPoliciesDelete](#dnspoliciesdelete) - Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
* [dnsPoliciesGet](#dnspoliciesget) - Fetches the representation of an existing Policy.
* [dnsPoliciesList](#dnspolicieslist) - Enumerates all Policies associated with a project.
* [dnsPoliciesPatch](#dnspoliciespatch) - Applies a partial update to an existing Policy.
* [dnsPoliciesUpdate](#dnspoliciesupdate) - Updates an existing Policy.

## dnsPoliciesCreate

Creates a new Policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsPoliciesCreateRequest;
import org.openapis.openapi.models.operations.DnsPoliciesCreateResponse;
import org.openapis.openapi.models.operations.DnsPoliciesCreateSecurity;
import org.openapis.openapi.models.operations.DnsPoliciesCreateSecurityOption1;
import org.openapis.openapi.models.operations.DnsPoliciesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfig;
import org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServer;
import org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum;
import org.openapis.openapi.models.shared.PolicyNetwork;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsPoliciesCreateRequest req = new DnsPoliciesCreateRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                policy = new Policy() {{
                    alternativeNameServerConfig = new PolicyAlternativeNameServerConfig() {{
                        kind = "quis";
                        targetNameServers = new org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServer[]{{
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.PRIVATE_;
                                ipv4Address = "sed";
                                ipv6Address = "quo";
                                kind = "et";
                            }}),
                        }};
                    }};;
                    description = "illo";
                    enableInboundForwarding = false;
                    enableLogging = false;
                    id = "est";
                    kind = "quia";
                    name = "Genevieve Legros";
                    networks = new org.openapis.openapi.models.shared.PolicyNetwork[]{{
                        add(new PolicyNetwork() {{
                            kind = "sunt";
                            networkUrl = "maiores";
                        }}),
                        add(new PolicyNetwork() {{
                            kind = "excepturi";
                            networkUrl = "ducimus";
                        }}),
                        add(new PolicyNetwork() {{
                            kind = "dolore";
                            networkUrl = "aspernatur";
                        }}),
                    }};
                }};;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                callback = "at";
                clientOperationId = "unde";
                fields = "laborum";
                key = "provident";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "soluta";
                uploadProtocol = "earum";
            }};            

            DnsPoliciesCreateResponse res = sdk.policies.dnsPoliciesCreate(req, new DnsPoliciesCreateSecurity() {{
                option1 = new DnsPoliciesCreateSecurityOption1("praesentium", "explicabo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsPoliciesDelete

Deletes a previously created Policy. Fails if the policy is still being referenced by a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsPoliciesDeleteRequest;
import org.openapis.openapi.models.operations.DnsPoliciesDeleteResponse;
import org.openapis.openapi.models.operations.DnsPoliciesDeleteSecurity;
import org.openapis.openapi.models.operations.DnsPoliciesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DnsPoliciesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsPoliciesDeleteRequest req = new DnsPoliciesDeleteRequest("odit", "illo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quia";
                alt = AltEnum.JSON;
                callback = "velit";
                clientOperationId = "ullam";
                fields = "provident";
                key = "possimus";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "consectetur";
                uploadProtocol = "totam";
            }};            

            DnsPoliciesDeleteResponse res = sdk.policies.dnsPoliciesDelete(req, new DnsPoliciesDeleteSecurity() {{
                option1 = new DnsPoliciesDeleteSecurityOption1("dignissimos", "repellat") {{
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

## dnsPoliciesGet

Fetches the representation of an existing Policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsPoliciesGetRequest;
import org.openapis.openapi.models.operations.DnsPoliciesGetResponse;
import org.openapis.openapi.models.operations.DnsPoliciesGetSecurity;
import org.openapis.openapi.models.operations.DnsPoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.DnsPoliciesGetSecurityOption2;
import org.openapis.openapi.models.operations.DnsPoliciesGetSecurityOption3;
import org.openapis.openapi.models.operations.DnsPoliciesGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsPoliciesGetRequest req = new DnsPoliciesGetRequest("iusto", "culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cupiditate";
                alt = AltEnum.PROTO;
                callback = "assumenda";
                clientOperationId = "nihil";
                fields = "sed";
                key = "optio";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "modi";
                uploadProtocol = "voluptatum";
            }};            

            DnsPoliciesGetResponse res = sdk.policies.dnsPoliciesGet(req, new DnsPoliciesGetSecurity() {{
                option1 = new DnsPoliciesGetSecurityOption1("dolore", "possimus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsPoliciesList

Enumerates all Policies associated with a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsPoliciesListRequest;
import org.openapis.openapi.models.operations.DnsPoliciesListResponse;
import org.openapis.openapi.models.operations.DnsPoliciesListSecurity;
import org.openapis.openapi.models.operations.DnsPoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.DnsPoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.DnsPoliciesListSecurityOption3;
import org.openapis.openapi.models.operations.DnsPoliciesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsPoliciesListRequest req = new DnsPoliciesListRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "eos";
                fields = "omnis";
                key = "reiciendis";
                maxResults = 184774L;
                oauthToken = "similique";
                pageToken = "eligendi";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "inventore";
                uploadProtocol = "necessitatibus";
            }};            

            DnsPoliciesListResponse res = sdk.policies.dnsPoliciesList(req, new DnsPoliciesListSecurity() {{
                option1 = new DnsPoliciesListSecurityOption1("tenetur", "exercitationem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policiesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsPoliciesPatch

Applies a partial update to an existing Policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsPoliciesPatchRequest;
import org.openapis.openapi.models.operations.DnsPoliciesPatchResponse;
import org.openapis.openapi.models.operations.DnsPoliciesPatchSecurity;
import org.openapis.openapi.models.operations.DnsPoliciesPatchSecurityOption1;
import org.openapis.openapi.models.operations.DnsPoliciesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfig;
import org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServer;
import org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum;
import org.openapis.openapi.models.shared.PolicyNetwork;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsPoliciesPatchRequest req = new DnsPoliciesPatchRequest("nihil", "quia") {{
                dollarXgafv = XgafvEnum.ONE;
                policy1 = new Policy() {{
                    alternativeNameServerConfig = new PolicyAlternativeNameServerConfig() {{
                        kind = "maiores";
                        targetNameServers = new org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServer[]{{
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.DEFAULT_;
                                ipv4Address = "eum";
                                ipv6Address = "sint";
                                kind = "id";
                            }}),
                        }};
                    }};;
                    description = "nobis";
                    enableInboundForwarding = false;
                    enableLogging = false;
                    id = "quasi";
                    kind = "itaque";
                    name = "Gloria Smith";
                    networks = new org.openapis.openapi.models.shared.PolicyNetwork[]{{
                        add(new PolicyNetwork() {{
                            kind = "neque";
                            networkUrl = "impedit";
                        }}),
                    }};
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "saepe";
                clientOperationId = "amet";
                fields = "labore";
                key = "repellat";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            DnsPoliciesPatchResponse res = sdk.policies.dnsPoliciesPatch(req, new DnsPoliciesPatchSecurity() {{
                option1 = new DnsPoliciesPatchSecurityOption1("quaerat", "officia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policiesPatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsPoliciesUpdate

Updates an existing Policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsPoliciesUpdateRequest;
import org.openapis.openapi.models.operations.DnsPoliciesUpdateResponse;
import org.openapis.openapi.models.operations.DnsPoliciesUpdateSecurity;
import org.openapis.openapi.models.operations.DnsPoliciesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DnsPoliciesUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfig;
import org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServer;
import org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum;
import org.openapis.openapi.models.shared.PolicyNetwork;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsPoliciesUpdateRequest req = new DnsPoliciesUpdateRequest("sunt", "perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                policy1 = new Policy() {{
                    alternativeNameServerConfig = new PolicyAlternativeNameServerConfig() {{
                        kind = "a";
                        targetNameServers = new org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServer[]{{
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.PRIVATE_;
                                ipv4Address = "recusandae";
                                ipv6Address = "iste";
                                kind = "aspernatur";
                            }}),
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.DEFAULT_;
                                ipv4Address = "et";
                                ipv6Address = "ipsam";
                                kind = "et";
                            }}),
                        }};
                    }};;
                    description = "delectus";
                    enableInboundForwarding = false;
                    enableLogging = false;
                    id = "saepe";
                    kind = "sunt";
                    name = "Ms. Diane Corwin";
                    networks = new org.openapis.openapi.models.shared.PolicyNetwork[]{{
                        add(new PolicyNetwork() {{
                            kind = "enim";
                            networkUrl = "nesciunt";
                        }}),
                        add(new PolicyNetwork() {{
                            kind = "saepe";
                            networkUrl = "unde";
                        }}),
                        add(new PolicyNetwork() {{
                            kind = "reiciendis";
                            networkUrl = "quis";
                        }}),
                    }};
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "pariatur";
                clientOperationId = "praesentium";
                fields = "nemo";
                key = "dolore";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "perspiciatis";
                uploadProtocol = "accusamus";
            }};            

            DnsPoliciesUpdateResponse res = sdk.policies.dnsPoliciesUpdate(req, new DnsPoliciesUpdateSecurity() {{
                option1 = new DnsPoliciesUpdateSecurityOption1("voluptates", "quia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policiesUpdateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
