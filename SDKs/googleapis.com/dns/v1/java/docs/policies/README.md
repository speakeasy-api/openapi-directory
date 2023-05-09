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

            DnsPoliciesCreateRequest req = new DnsPoliciesCreateRequest("placeat") {{
                dollarXgafv = XgafvEnum.ONE;
                policy = new Policy() {{
                    alternativeNameServerConfig = new PolicyAlternativeNameServerConfig() {{
                        kind = "molestiae";
                        targetNameServers = new org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServer[]{{
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.PRIVATE_;
                                ipv4Address = "nemo";
                                ipv6Address = "non";
                                kind = "recusandae";
                            }}),
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.PRIVATE_;
                                ipv4Address = "ipsa";
                                ipv6Address = "aliquam";
                                kind = "dolor";
                            }}),
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.PRIVATE_;
                                ipv4Address = "quibusdam";
                                ipv6Address = "magni";
                                kind = "consequuntur";
                            }}),
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.DEFAULT_;
                                ipv4Address = "eius";
                                ipv6Address = "commodi";
                                kind = "ipsam";
                            }}),
                        }};
                    }};;
                    description = "vel";
                    enableInboundForwarding = false;
                    enableLogging = false;
                    id = "cupiditate";
                    kind = "modi";
                    name = "Ms. Janice Gleichner IV";
                    networks = new org.openapis.openapi.models.shared.PolicyNetwork[]{{
                        add(new PolicyNetwork() {{
                            kind = "delectus";
                            networkUrl = "quam";
                        }}),
                        add(new PolicyNetwork() {{
                            kind = "dolorum";
                            networkUrl = "libero";
                        }}),
                    }};
                }};;
                accessToken = "ratione";
                alt = AltEnum.MEDIA;
                callback = "optio";
                clientOperationId = "saepe";
                fields = "maiores";
                key = "accusantium";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "consequuntur";
                uploadProtocol = "quis";
            }};            

            DnsPoliciesCreateResponse res = sdk.policies.dnsPoliciesCreate(req, new DnsPoliciesCreateSecurity() {{
                option1 = new DnsPoliciesCreateSecurityOption1("vitae", "occaecati") {{
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

            DnsPoliciesDeleteRequest req = new DnsPoliciesDeleteRequest("labore", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "exercitationem";
                alt = AltEnum.JSON;
                callback = "modi";
                clientOperationId = "quasi";
                fields = "quae";
                key = "similique";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "suscipit";
                uploadProtocol = "ex";
            }};            

            DnsPoliciesDeleteResponse res = sdk.policies.dnsPoliciesDelete(req, new DnsPoliciesDeleteSecurity() {{
                option1 = new DnsPoliciesDeleteSecurityOption1("sint", "est") {{
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

            DnsPoliciesGetRequest req = new DnsPoliciesGetRequest("doloribus", "provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "autem";
                clientOperationId = "quo";
                fields = "molestiae";
                key = "maxime";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "cupiditate";
                uploadProtocol = "deleniti";
            }};            

            DnsPoliciesGetResponse res = sdk.policies.dnsPoliciesGet(req, new DnsPoliciesGetSecurity() {{
                option1 = new DnsPoliciesGetSecurityOption1("quasi", "maiores") {{
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

            DnsPoliciesListRequest req = new DnsPoliciesListRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "corrupti";
                fields = "quae";
                key = "facere";
                maxResults = 409857L;
                oauthToken = "libero";
                pageToken = "nam";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "adipisci";
                uploadProtocol = "minus";
            }};            

            DnsPoliciesListResponse res = sdk.policies.dnsPoliciesList(req, new DnsPoliciesListSecurity() {{
                option1 = new DnsPoliciesListSecurityOption1("hic", "similique") {{
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

            DnsPoliciesPatchRequest req = new DnsPoliciesPatchRequest("fuga", "consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                policy1 = new Policy() {{
                    alternativeNameServerConfig = new PolicyAlternativeNameServerConfig() {{
                        kind = "laudantium";
                        targetNameServers = new org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServer[]{{
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.DEFAULT_;
                                ipv4Address = "veritatis";
                                ipv6Address = "nam";
                                kind = "voluptatibus";
                            }}),
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.DEFAULT_;
                                ipv4Address = "aperiam";
                                ipv6Address = "ducimus";
                                kind = "itaque";
                            }}),
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.PRIVATE_;
                                ipv4Address = "numquam";
                                ipv6Address = "doloribus";
                                kind = "eligendi";
                            }}),
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.PRIVATE_;
                                ipv4Address = "alias";
                                ipv6Address = "impedit";
                                kind = "numquam";
                            }}),
                        }};
                    }};;
                    description = "aspernatur";
                    enableInboundForwarding = false;
                    enableLogging = false;
                    id = "nobis";
                    kind = "nihil";
                    name = "Abel Buckridge";
                    networks = new org.openapis.openapi.models.shared.PolicyNetwork[]{{
                        add(new PolicyNetwork() {{
                            kind = "voluptas";
                            networkUrl = "ratione";
                        }}),
                    }};
                }};;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "est";
                clientOperationId = "perferendis";
                fields = "quibusdam";
                key = "impedit";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "nisi";
                uploadProtocol = "dolor";
            }};            

            DnsPoliciesPatchResponse res = sdk.policies.dnsPoliciesPatch(req, new DnsPoliciesPatchSecurity() {{
                option1 = new DnsPoliciesPatchSecurityOption1("fugit", "dolore") {{
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

            DnsPoliciesUpdateRequest req = new DnsPoliciesUpdateRequest("maxime", "maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                policy1 = new Policy() {{
                    alternativeNameServerConfig = new PolicyAlternativeNameServerConfig() {{
                        kind = "accusantium";
                        targetNameServers = new org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServer[]{{
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.PRIVATE_;
                                ipv4Address = "totam";
                                ipv6Address = "optio";
                                kind = "est";
                            }}),
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.DEFAULT_;
                                ipv4Address = "consequuntur";
                                ipv6Address = "repellendus";
                                kind = "sit";
                            }}),
                        }};
                    }};;
                    description = "dolores";
                    enableInboundForwarding = false;
                    enableLogging = false;
                    id = "enim";
                    kind = "aspernatur";
                    name = "Miss Victor Kuhlman";
                    networks = new org.openapis.openapi.models.shared.PolicyNetwork[]{{
                        add(new PolicyNetwork() {{
                            kind = "ipsam";
                            networkUrl = "odio";
                        }}),
                        add(new PolicyNetwork() {{
                            kind = "fugit";
                            networkUrl = "aspernatur";
                        }}),
                        add(new PolicyNetwork() {{
                            kind = "at";
                            networkUrl = "illum";
                        }}),
                        add(new PolicyNetwork() {{
                            kind = "praesentium";
                            networkUrl = "sint";
                        }}),
                    }};
                }};;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                clientOperationId = "facilis";
                fields = "placeat";
                key = "reiciendis";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "pariatur";
                uploadProtocol = "facilis";
            }};            

            DnsPoliciesUpdateResponse res = sdk.policies.dnsPoliciesUpdate(req, new DnsPoliciesUpdateSecurity() {{
                option1 = new DnsPoliciesUpdateSecurityOption1("cupiditate", "nemo") {{
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
