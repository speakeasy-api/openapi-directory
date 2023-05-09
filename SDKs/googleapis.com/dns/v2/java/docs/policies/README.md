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

            DnsPoliciesCreateRequest req = new DnsPoliciesCreateRequest("omnis", "fugit") {{
                dollarXgafv = XgafvEnum.ONE;
                policy = new Policy() {{
                    alternativeNameServerConfig = new PolicyAlternativeNameServerConfig() {{
                        kind = "quidem";
                        targetNameServers = new org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServer[]{{
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.PRIVATE_;
                                ipv4Address = "vitae";
                                ipv6Address = "dolor";
                                kind = "ad";
                            }}),
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.PRIVATE_;
                                ipv4Address = "ut";
                                ipv6Address = "asperiores";
                                kind = "reprehenderit";
                            }}),
                        }};
                    }};;
                    description = "deserunt";
                    enableInboundForwarding = false;
                    enableLogging = false;
                    id = "itaque";
                    kind = "et";
                    name = "Pat Jacobs";
                    networks = new org.openapis.openapi.models.shared.PolicyNetwork[]{{
                        add(new PolicyNetwork() {{
                            kind = "tenetur";
                            networkUrl = "laudantium";
                        }}),
                    }};
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.PROTO;
                callback = "repudiandae";
                clientOperationId = "dicta";
                fields = "inventore";
                key = "ullam";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "voluptate";
                uploadProtocol = "sed";
            }};            

            DnsPoliciesCreateResponse res = sdk.policies.dnsPoliciesCreate(req, new DnsPoliciesCreateSecurity() {{
                option1 = new DnsPoliciesCreateSecurityOption1("dolorem", "eaque") {{
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

            DnsPoliciesDeleteRequest req = new DnsPoliciesDeleteRequest("exercitationem", "amet", "voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "a";
                clientOperationId = "fuga";
                fields = "totam";
                key = "cupiditate";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "omnis";
                uploadProtocol = "quam";
            }};            

            DnsPoliciesDeleteResponse res = sdk.policies.dnsPoliciesDelete(req, new DnsPoliciesDeleteSecurity() {{
                option1 = new DnsPoliciesDeleteSecurityOption1("exercitationem", "voluptates") {{
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

            DnsPoliciesGetRequest req = new DnsPoliciesGetRequest("sequi", "quis", "commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "rem";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                clientOperationId = "perspiciatis";
                fields = "fugit";
                key = "itaque";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "dolor";
                uploadProtocol = "repellendus";
            }};            

            DnsPoliciesGetResponse res = sdk.policies.dnsPoliciesGet(req, new DnsPoliciesGetSecurity() {{
                option1 = new DnsPoliciesGetSecurityOption1("temporibus", "minus") {{
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

            DnsPoliciesListRequest req = new DnsPoliciesListRequest("minima", "a") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vitae";
                alt = AltEnum.JSON;
                callback = "facere";
                fields = "earum";
                key = "laborum";
                maxResults = 118020L;
                oauthToken = "voluptatem";
                pageToken = "odit";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "pariatur";
                uploadProtocol = "enim";
            }};            

            DnsPoliciesListResponse res = sdk.policies.dnsPoliciesList(req, new DnsPoliciesListSecurity() {{
                option1 = new DnsPoliciesListSecurityOption1("numquam", "architecto") {{
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

            DnsPoliciesPatchRequest req = new DnsPoliciesPatchRequest("est", "quaerat", "facere") {{
                dollarXgafv = XgafvEnum.ONE;
                policy1 = new Policy() {{
                    alternativeNameServerConfig = new PolicyAlternativeNameServerConfig() {{
                        kind = "omnis";
                        targetNameServers = new org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServer[]{{
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.PRIVATE_;
                                ipv4Address = "officiis";
                                ipv6Address = "expedita";
                                kind = "quia";
                            }}),
                        }};
                    }};;
                    description = "vitae";
                    enableInboundForwarding = false;
                    enableLogging = false;
                    id = "odio";
                    kind = "quas";
                    name = "Beulah Schulist";
                    networks = new org.openapis.openapi.models.shared.PolicyNetwork[]{{
                        add(new PolicyNetwork() {{
                            kind = "possimus";
                            networkUrl = "distinctio";
                        }}),
                    }};
                }};;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "illum";
                clientOperationId = "soluta";
                fields = "magnam";
                key = "laudantium";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "doloremque";
                uploadProtocol = "corrupti";
            }};            

            DnsPoliciesPatchResponse res = sdk.policies.dnsPoliciesPatch(req, new DnsPoliciesPatchSecurity() {{
                option1 = new DnsPoliciesPatchSecurityOption1("reiciendis", "facilis") {{
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

            DnsPoliciesUpdateRequest req = new DnsPoliciesUpdateRequest("aliquam", "repudiandae", "amet") {{
                dollarXgafv = XgafvEnum.TWO;
                policy1 = new Policy() {{
                    alternativeNameServerConfig = new PolicyAlternativeNameServerConfig() {{
                        kind = "ab";
                        targetNameServers = new org.openapis.openapi.models.shared.PolicyAlternativeNameServerConfigTargetNameServer[]{{
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.DEFAULT_;
                                ipv4Address = "rerum";
                                ipv6Address = "placeat";
                                kind = "ab";
                            }}),
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.DEFAULT_;
                                ipv4Address = "blanditiis";
                                ipv6Address = "porro";
                                kind = "labore";
                            }}),
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.PRIVATE_;
                                ipv4Address = "ut";
                                ipv6Address = "earum";
                                kind = "ullam";
                            }}),
                            add(new PolicyAlternativeNameServerConfigTargetNameServer() {{
                                forwardingPath = PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum.DEFAULT_;
                                ipv4Address = "enim";
                                ipv6Address = "cupiditate";
                                kind = "occaecati";
                            }}),
                        }};
                    }};;
                    description = "itaque";
                    enableInboundForwarding = false;
                    enableLogging = false;
                    id = "fuga";
                    kind = "consectetur";
                    name = "Nicole Christiansen DVM";
                    networks = new org.openapis.openapi.models.shared.PolicyNetwork[]{{
                        add(new PolicyNetwork() {{
                            kind = "nobis";
                            networkUrl = "qui";
                        }}),
                        add(new PolicyNetwork() {{
                            kind = "accusantium";
                            networkUrl = "consequatur";
                        }}),
                        add(new PolicyNetwork() {{
                            kind = "impedit";
                            networkUrl = "recusandae";
                        }}),
                    }};
                }};;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "est";
                clientOperationId = "et";
                fields = "expedita";
                key = "quibusdam";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "quidem";
                uploadProtocol = "in";
            }};            

            DnsPoliciesUpdateResponse res = sdk.policies.dnsPoliciesUpdate(req, new DnsPoliciesUpdateSecurity() {{
                option1 = new DnsPoliciesUpdateSecurityOption1("culpa", "doloremque") {{
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
