# customers

### Available Operations

* [chromepolicyCustomersPoliciesGroupsBatchDelete](#chromepolicycustomerspoliciesgroupsbatchdelete) - Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesGroupsBatchModify](#chromepolicycustomerspoliciesgroupsbatchmodify) - Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering](#chromepolicycustomerspoliciesgroupslistgrouppriorityordering) - Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering](#chromepolicycustomerspoliciesgroupsupdategrouppriorityordering) - Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesNetworksDefineCertificate](#chromepolicycustomerspoliciesnetworksdefinecertificate) - Creates a certificate at a specified OU for a customer.
* [chromepolicyCustomersPoliciesNetworksDefineNetwork](#chromepolicycustomerspoliciesnetworksdefinenetwork) - Define a new network.
* [chromepolicyCustomersPoliciesNetworksRemoveCertificate](#chromepolicycustomerspoliciesnetworksremovecertificate) - Remove an existing certificate by guid.
* [chromepolicyCustomersPoliciesNetworksRemoveNetwork](#chromepolicycustomerspoliciesnetworksremovenetwork) - Remove an existing network by guid.
* [chromepolicyCustomersPoliciesOrgunitsBatchInherit](#chromepolicycustomerspoliciesorgunitsbatchinherit) - Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesOrgunitsBatchModify](#chromepolicycustomerspoliciesorgunitsbatchmodify) - Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesResolve](#chromepolicycustomerspoliciesresolve) - Gets the resolved policy values for a list of policies that match a search query.
* [chromepolicyCustomersPolicySchemasGet](#chromepolicycustomerspolicyschemasget) - Get a specific policy schema for a customer by its resource name.
* [chromepolicyCustomersPolicySchemasList](#chromepolicycustomerspolicyschemaslist) - Gets a list of policy schemas that match a specified filter value for a given customer.

## chromepolicyCustomersPoliciesGroupsBatchDelete

Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1PolicyTargetKey;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest req = new ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                googleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest = new GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest[]{{
                        add(new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest() {{
                            policySchema = "esse";
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("porro", "dolorum");
                                    put("dicta", "nam");
                                    put("officia", "occaecati");
                                }};
                                targetResource = "fugit";
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest() {{
                            policySchema = "deleniti";
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("optio", "totam");
                                    put("beatae", "commodi");
                                    put("molestiae", "modi");
                                    put("qui", "impedit");
                                }};
                                targetResource = "cum";
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest() {{
                            policySchema = "esse";
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("excepturi", "aspernatur");
                                }};
                                targetResource = "perferendis";
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest() {{
                            policySchema = "ad";
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("sed", "iste");
                                    put("dolor", "natus");
                                    put("laboriosam", "hic");
                                }};
                                targetResource = "saepe";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "iste";
                key = "iure";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "architecto";
                uploadProtocol = "ipsa";
            }};            

            ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse res = sdk.customers.chromepolicyCustomersPoliciesGroupsBatchDelete(req, new ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity("reiciendis", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromepolicyCustomersPoliciesGroupsBatchModify

Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchModifyRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchModifyResponse;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchModifySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1PolicyTargetKey;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1PolicyValue;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPoliciesGroupsBatchModifyRequest req = new ChromepolicyCustomersPoliciesGroupsBatchModifyRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                googleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest = new GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest[]{{
                        add(new GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest() {{
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("corporis", "explicabo");
                                }};
                                targetResource = "nobis";
                            }};
                            policyValue = new GoogleChromePolicyVersionsV1PolicyValue() {{
                                policySchema = "enim";
                                value = new java.util.HashMap<String, Object>() {{
                                    put("nemo", "minima");
                                    put("excepturi", "accusantium");
                                    put("iure", "culpa");
                                }};
                            }};
                            updateMask = "doloribus";
                        }}),
                    }};
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "dolorem";
                key = "culpa";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "mollitia";
                uploadProtocol = "occaecati";
            }};            

            ChromepolicyCustomersPoliciesGroupsBatchModifyResponse res = sdk.customers.chromepolicyCustomersPoliciesGroupsBatchModify(req, new ChromepolicyCustomersPoliciesGroupsBatchModifySecurity("numquam", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering

Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingResponse;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurity;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption1;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1PolicyTargetKey;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingRequest req = new ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleChromePolicyVersionsV1ListGroupPriorityOrderingRequest = new GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest() {{
                    policyNamespace = "velit";
                    policySchema = "error";
                    policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                        additionalTargetKeys = new java.util.HashMap<String, String>() {{
                            put("quis", "vitae");
                        }};
                        targetResource = "laborum";
                    }};;
                }};;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "quo";
                key = "sequi";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "id";
                uploadProtocol = "possimus";
            }};            

            ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingResponse res = sdk.customers.chromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering(req, new ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurity() {{
                option1 = new ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption1("aut", "quasi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleChromePolicyVersionsV1ListGroupPriorityOrderingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering

Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingResponse;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1PolicyTargetKey;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingRequest req = new ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingRequest("error") {{
                dollarXgafv = XgafvEnum.TWO;
                googleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest = new GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest() {{
                    groupIds = new String[]{{
                        add("quasi"),
                        add("reiciendis"),
                        add("voluptatibus"),
                    }};
                    policyNamespace = "vero";
                    policySchema = "nihil";
                    policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                        additionalTargetKeys = new java.util.HashMap<String, String>() {{
                            put("voluptatibus", "ipsa");
                            put("omnis", "voluptate");
                            put("cum", "perferendis");
                        }};
                        targetResource = "doloremque";
                    }};;
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "dicta";
                key = "corporis";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "dicta";
                uploadProtocol = "harum";
            }};            

            ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingResponse res = sdk.customers.chromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering(req, new ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingSecurity("enim", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromepolicyCustomersPoliciesNetworksDefineCertificate

Creates a certificate at a specified OU for a customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateResponse;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1DefineCertificateRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1NetworkSetting;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPoliciesNetworksDefineCertificateRequest req = new ChromepolicyCustomersPoliciesNetworksDefineCertificateRequest("commodi") {{
                dollarXgafv = XgafvEnum.TWO;
                googleChromePolicyVersionsV1DefineCertificateRequest = new GoogleChromePolicyVersionsV1DefineCertificateRequest() {{
                    ceritificateName = "quae";
                    certificate = "ipsum";
                    settings = new org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1NetworkSetting[]{{
                        add(new GoogleChromePolicyVersionsV1NetworkSetting() {{
                            policySchema = "molestias";
                            value = new java.util.HashMap<String, Object>() {{
                                put("pariatur", "modi");
                                put("praesentium", "rem");
                                put("voluptates", "quasi");
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1NetworkSetting() {{
                            policySchema = "repudiandae";
                            value = new java.util.HashMap<String, Object>() {{
                                put("veritatis", "itaque");
                                put("incidunt", "enim");
                                put("consequatur", "est");
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1NetworkSetting() {{
                            policySchema = "quibusdam";
                            value = new java.util.HashMap<String, Object>() {{
                                put("deserunt", "distinctio");
                            }};
                        }}),
                    }};
                    targetResource = "quibusdam";
                }};;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "aliquid";
                key = "cupiditate";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "magni";
                uploadProtocol = "assumenda";
            }};            

            ChromepolicyCustomersPoliciesNetworksDefineCertificateResponse res = sdk.customers.chromepolicyCustomersPoliciesNetworksDefineCertificate(req, new ChromepolicyCustomersPoliciesNetworksDefineCertificateSecurity("ipsam", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromePolicyVersionsV1DefineCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromepolicyCustomersPoliciesNetworksDefineNetwork

Define a new network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkResponse;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1DefineNetworkRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1NetworkSetting;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPoliciesNetworksDefineNetworkRequest req = new ChromepolicyCustomersPoliciesNetworksDefineNetworkRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                googleChromePolicyVersionsV1DefineNetworkRequest = new GoogleChromePolicyVersionsV1DefineNetworkRequest() {{
                    name = "Eddie Prosacco";
                    settings = new org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1NetworkSetting[]{{
                        add(new GoogleChromePolicyVersionsV1NetworkSetting() {{
                            policySchema = "eum";
                            value = new java.util.HashMap<String, Object>() {{
                                put("eligendi", "sint");
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1NetworkSetting() {{
                            policySchema = "aliquid";
                            value = new java.util.HashMap<String, Object>() {{
                                put("necessitatibus", "sint");
                                put("officia", "dolor");
                                put("debitis", "a");
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1NetworkSetting() {{
                            policySchema = "dolorum";
                            value = new java.util.HashMap<String, Object>() {{
                                put("in", "illum");
                                put("maiores", "rerum");
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1NetworkSetting() {{
                            policySchema = "dicta";
                            value = new java.util.HashMap<String, Object>() {{
                                put("cumque", "facere");
                                put("ea", "aliquid");
                            }};
                        }}),
                    }};
                    targetResource = "laborum";
                }};;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "enim";
                key = "accusamus";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "provident";
                uploadProtocol = "nam";
            }};            

            ChromepolicyCustomersPoliciesNetworksDefineNetworkResponse res = sdk.customers.chromepolicyCustomersPoliciesNetworksDefineNetwork(req, new ChromepolicyCustomersPoliciesNetworksDefineNetworkSecurity("id", "blanditiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromePolicyVersionsV1DefineNetworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromepolicyCustomersPoliciesNetworksRemoveCertificate

Remove an existing certificate by guid.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateResponse;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1RemoveCertificateRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPoliciesNetworksRemoveCertificateRequest req = new ChromepolicyCustomersPoliciesNetworksRemoveCertificateRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleChromePolicyVersionsV1RemoveCertificateRequest = new GoogleChromePolicyVersionsV1RemoveCertificateRequest() {{
                    networkId = "amet";
                    targetResource = "deserunt";
                }};;
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "omnis";
                key = "molestiae";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "magnam";
                uploadProtocol = "distinctio";
            }};            

            ChromepolicyCustomersPoliciesNetworksRemoveCertificateResponse res = sdk.customers.chromepolicyCustomersPoliciesNetworksRemoveCertificate(req, new ChromepolicyCustomersPoliciesNetworksRemoveCertificateSecurity("id", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromePolicyVersionsV1RemoveCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromepolicyCustomersPoliciesNetworksRemoveNetwork

Remove an existing network by guid.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1RemoveNetworkRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest req = new ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                googleChromePolicyVersionsV1RemoveNetworkRequest = new GoogleChromePolicyVersionsV1RemoveNetworkRequest() {{
                    networkId = "natus";
                    targetResource = "nobis";
                }};;
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "architecto";
                key = "magnam";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "ullam";
                uploadProtocol = "provident";
            }};            

            ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse res = sdk.customers.chromepolicyCustomersPoliciesNetworksRemoveNetwork(req, new ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity("quos", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromePolicyVersionsV1RemoveNetworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromepolicyCustomersPoliciesOrgunitsBatchInherit

Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1PolicyTargetKey;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest req = new ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest("accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                googleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest = new GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest[]{{
                        add(new GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest() {{
                            policySchema = "mollitia";
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("eum", "dolor");
                                    put("necessitatibus", "odit");
                                }};
                                targetResource = "nemo";
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest() {{
                            policySchema = "quasi";
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("doloribus", "debitis");
                                    put("eius", "maxime");
                                }};
                                targetResource = "deleniti";
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest() {{
                            policySchema = "facilis";
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("architecto", "architecto");
                                    put("repudiandae", "ullam");
                                }};
                                targetResource = "expedita";
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest() {{
                            policySchema = "nihil";
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("quibusdam", "sed");
                                    put("saepe", "pariatur");
                                    put("accusantium", "consequuntur");
                                    put("praesentium", "natus");
                                }};
                                targetResource = "magni";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "pariatur";
                key = "maxime";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "odit";
                uploadProtocol = "ea";
            }};            

            ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse res = sdk.customers.chromepolicyCustomersPoliciesOrgunitsBatchInherit(req, new ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity("accusantium", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromepolicyCustomersPoliciesOrgunitsBatchModify

Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1PolicyTargetKey;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1PolicyValue;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest req = new ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                googleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest = new GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest[]{{
                        add(new GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest() {{
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("autem", "nam");
                                    put("eaque", "pariatur");
                                }};
                                targetResource = "nemo";
                            }};
                            policyValue = new GoogleChromePolicyVersionsV1PolicyValue() {{
                                policySchema = "voluptatibus";
                                value = new java.util.HashMap<String, Object>() {{
                                    put("fugiat", "amet");
                                }};
                            }};
                            updateMask = "aut";
                        }}),
                        add(new GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest() {{
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("corporis", "hic");
                                    put("libero", "nobis");
                                    put("dolores", "quis");
                                    put("totam", "dignissimos");
                                }};
                                targetResource = "eaque";
                            }};
                            policyValue = new GoogleChromePolicyVersionsV1PolicyValue() {{
                                policySchema = "quis";
                                value = new java.util.HashMap<String, Object>() {{
                                    put("eos", "perferendis");
                                }};
                            }};
                            updateMask = "dolores";
                        }}),
                    }};
                }};;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "vero";
                key = "nostrum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "omnis";
                uploadProtocol = "facilis";
            }};            

            ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse res = sdk.customers.chromepolicyCustomersPoliciesOrgunitsBatchModify(req, new ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity("perspiciatis", "voluptatem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromepolicyCustomersPoliciesResolve

Gets the resolved policy values for a list of policies that match a search query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesResolveRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesResolveResponse;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesResolveSecurity;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesResolveSecurityOption1;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesResolveSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1PolicyTargetKey;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1ResolveRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPoliciesResolveRequest req = new ChromepolicyCustomersPoliciesResolveRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                googleChromePolicyVersionsV1ResolveRequest = new GoogleChromePolicyVersionsV1ResolveRequest() {{
                    pageSize = 500026;
                    pageToken = "error";
                    policySchemaFilter = "eaque";
                    policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                        additionalTargetKeys = new java.util.HashMap<String, String>() {{
                            put("rerum", "adipisci");
                            put("asperiores", "earum");
                            put("modi", "iste");
                        }};
                        targetResource = "dolorum";
                    }};;
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "nobis";
                key = "libero";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "quos";
                uploadProtocol = "aliquid";
            }};            

            ChromepolicyCustomersPoliciesResolveResponse res = sdk.customers.chromepolicyCustomersPoliciesResolve(req, new ChromepolicyCustomersPoliciesResolveSecurity() {{
                option1 = new ChromepolicyCustomersPoliciesResolveSecurityOption1("dolorem", "dolorem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleChromePolicyVersionsV1ResolveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromepolicyCustomersPolicySchemasGet

Get a specific policy schema for a customer by its resource name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPolicySchemasGetRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPolicySchemasGetResponse;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPolicySchemasGetSecurity;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPolicySchemasGetSecurityOption1;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPolicySchemasGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPolicySchemasGetRequest req = new ChromepolicyCustomersPolicySchemasGetRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "excepturi";
                fields = "cum";
                key = "voluptate";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "amet";
                uploadProtocol = "dolorum";
            }};            

            ChromepolicyCustomersPolicySchemasGetResponse res = sdk.customers.chromepolicyCustomersPolicySchemasGet(req, new ChromepolicyCustomersPolicySchemasGetSecurity() {{
                option1 = new ChromepolicyCustomersPolicySchemasGetSecurityOption1("numquam", "veritatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleChromePolicyVersionsV1PolicySchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromepolicyCustomersPolicySchemasList

Gets a list of policy schemas that match a specified filter value for a given customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPolicySchemasListRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPolicySchemasListResponse;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPolicySchemasListSecurity;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPolicySchemasListSecurityOption1;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPolicySchemasListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPolicySchemasListRequest req = new ChromepolicyCustomersPolicySchemasListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "quaerat";
                fields = "accusamus";
                filter = "quidem";
                key = "voluptatibus";
                oauthToken = "voluptas";
                pageSize = 617658L;
                pageToken = "eos";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "sit";
                uploadProtocol = "fugiat";
            }};            

            ChromepolicyCustomersPolicySchemasListResponse res = sdk.customers.chromepolicyCustomersPolicySchemasList(req, new ChromepolicyCustomersPolicySchemasListSecurity() {{
                option1 = new ChromepolicyCustomersPolicySchemasListSecurityOption1("ab", "soluta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleChromePolicyVersionsV1ListPolicySchemasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
