# acls

### Available Operations

* [createOrganizationAdaptivePolicyAcl](#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [deleteOrganizationAdaptivePolicyAcl](#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [getOrganizationAdaptivePolicyAcl](#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [getOrganizationAdaptivePolicyAcls](#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [updateOrganizationAdaptivePolicyAcl](#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL

## createOrganizationAdaptivePolicyAcl

Creates new adaptive policy ACL

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyAclRequest;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyAclRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyAclRequestBodyRules;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyAclResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationAdaptivePolicyAclRequest req = new CreateOrganizationAdaptivePolicyAclRequest(                new CreateOrganizationAdaptivePolicyAclRequestBody(CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum.IPV6, "sint",                 new org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyAclRequestBodyRules[]{{
                                                add(new CreateOrganizationAdaptivePolicyAclRequestBodyRules(CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.DENY, CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.UDP) {{
                                                    dstPort = "itaque";
                                                    policy = CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.ALLOW;
                                                    protocol = CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.ICMP;
                                                    srcPort = "consequatur";
                                                }}),
                                            }}) {{
                                description = "explicabo";
                            }};, "deserunt");            

            CreateOrganizationAdaptivePolicyAclResponse res = sdk.acls.createOrganizationAdaptivePolicyAcl(req);

            if (res.createOrganizationAdaptivePolicyAcl200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationAdaptivePolicyAcl

Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationAdaptivePolicyAclRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationAdaptivePolicyAclResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationAdaptivePolicyAclRequest req = new DeleteOrganizationAdaptivePolicyAclRequest("quibusdam", "labore");            

            DeleteOrganizationAdaptivePolicyAclResponse res = sdk.acls.deleteOrganizationAdaptivePolicyAcl(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdaptivePolicyAcl

Returns the adaptive policy ACL information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyAclRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyAclResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyAclRequest req = new GetOrganizationAdaptivePolicyAclRequest("qui", "aliquid");            

            GetOrganizationAdaptivePolicyAclResponse res = sdk.acls.getOrganizationAdaptivePolicyAcl(req);

            if (res.getOrganizationAdaptivePolicyAcl200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdaptivePolicyAcls

List adaptive policy ACLs in a organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyAclsRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyAclsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyAclsRequest req = new GetOrganizationAdaptivePolicyAclsRequest("quos");            

            GetOrganizationAdaptivePolicyAclsResponse res = sdk.acls.getOrganizationAdaptivePolicyAcls(req);

            if (res.getOrganizationAdaptivePolicyAcls200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationAdaptivePolicyAcl

Updates an adaptive policy ACL

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyAclRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyAclRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyAclRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyAclResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationAdaptivePolicyAclRequest req = new UpdateOrganizationAdaptivePolicyAclRequest("magni", "assumenda") {{
                requestBody = new UpdateOrganizationAdaptivePolicyAclRequestBody() {{
                    description = "ipsam";
                    ipVersion = UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum.ANY;
                    name = "Sonya Marks";
                    rules = new org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyAclRequestBodyRules[]{{
                        add(new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.DENY, UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.TCP) {{
                            dstPort = "labore";
                            policy = UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.ICMP;
                            srcPort = "non";
                        }}),
                        add(new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.DENY, UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.ANY) {{
                            dstPort = "aliquid";
                            policy = UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.UDP;
                            srcPort = "sint";
                        }}),
                        add(new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.ALLOW, UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.UDP) {{
                            dstPort = "debitis";
                            policy = UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.TCP;
                            srcPort = "in";
                        }}),
                    }};
                }};;
            }};            

            UpdateOrganizationAdaptivePolicyAclResponse res = sdk.acls.updateOrganizationAdaptivePolicyAcl(req);

            if (res.updateOrganizationAdaptivePolicyAcl200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
