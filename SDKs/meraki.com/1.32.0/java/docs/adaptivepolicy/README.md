# adaptivePolicy

### Available Operations

* [createOrganizationAdaptivePolicyAcl](#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [createOrganizationAdaptivePolicyGroup](#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [createOrganizationAdaptivePolicyPolicy](#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [deleteOrganizationAdaptivePolicyAcl](#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [deleteOrganizationAdaptivePolicyGroup](#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [deleteOrganizationAdaptivePolicyPolicy](#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [getOrganizationAdaptivePolicyAcl](#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [getOrganizationAdaptivePolicyAcls](#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [getOrganizationAdaptivePolicyGroup](#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [getOrganizationAdaptivePolicyGroups](#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [getOrganizationAdaptivePolicyOverview](#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [getOrganizationAdaptivePolicyPolicies](#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [getOrganizationAdaptivePolicyPolicy](#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [getOrganizationAdaptivePolicySettings](#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [updateOrganizationAdaptivePolicyAcl](#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL
* [updateOrganizationAdaptivePolicyGroup](#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [updateOrganizationAdaptivePolicyPolicy](#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy
* [updateOrganizationAdaptivePolicySettings](#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings

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
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationAdaptivePolicyAclRequest req = new CreateOrganizationAdaptivePolicyAclRequest(                new CreateOrganizationAdaptivePolicyAclRequestBody(CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum.ANY, "et",                 new org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyAclRequestBodyRules[]{{
                                                add(new CreateOrganizationAdaptivePolicyAclRequestBodyRules(CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.ALLOW, CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.TCP) {{
                                                    dstPort = "ullam";
                                                    policy = CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.DENY;
                                                    protocol = CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.TCP;
                                                    srcPort = "sint";
                                                }}),
                                                add(new CreateOrganizationAdaptivePolicyAclRequestBodyRules(CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.ALLOW, CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.UDP) {{
                                                    dstPort = "reiciendis";
                                                    policy = CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.DENY;
                                                    protocol = CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.ICMP;
                                                    srcPort = "eum";
                                                }}),
                                                add(new CreateOrganizationAdaptivePolicyAclRequestBodyRules(CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.DENY, CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.UDP) {{
                                                    dstPort = "odit";
                                                    policy = CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.ALLOW;
                                                    protocol = CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.ANY;
                                                    srcPort = "iure";
                                                }}),
                                            }}) {{
                                description = "eius";
                            }};, "maxime");            

            CreateOrganizationAdaptivePolicyAclResponse res = sdk.adaptivePolicy.createOrganizationAdaptivePolicyAcl(req);

            if (res.createOrganizationAdaptivePolicyAcl200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrganizationAdaptivePolicyGroup

Creates a new adaptive policy group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyGroupRequest;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyGroupRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationAdaptivePolicyGroupRequest req = new CreateOrganizationAdaptivePolicyGroupRequest(                new CreateOrganizationAdaptivePolicyGroupRequestBody("facilis", 447926L) {{
                                description = "architecto";
                                policyObjects = new org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects[]{{
                                    add(new CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects() {{
                                        id = "e5b7fd2e-d028-4921-8ddc-692601fb576b";
                                        name = "Meredith Hickle PhD";
                                    }}),
                                }};
                            }};, "amet");            

            CreateOrganizationAdaptivePolicyGroupResponse res = sdk.adaptivePolicy.createOrganizationAdaptivePolicyGroup(req);

            if (res.createOrganizationAdaptivePolicyGroup201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrganizationAdaptivePolicyPolicy

Add an Adaptive Policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyPolicyRequest;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyPolicyRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationAdaptivePolicyPolicyRequest req = new CreateOrganizationAdaptivePolicyPolicyRequest(                new CreateOrganizationAdaptivePolicyPolicyRequestBody(                new CreateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup() {{
                                                id = "c5fbb258-7053-4202-873d-5fe9b90c2890";
                                                name = "Jean Ferry";
                                                sgt = 267262L;
                                            }};,                 new CreateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup() {{
                                                id = "9a8d9cbf-4863-4332-bf9b-77f3a4100674";
                                                name = "Rickey Wolf";
                                                sgt = 179603L;
                                            }};) {{
                                acls = new org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls[]{{
                                    add(new CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls() {{
                                        id = "0d1ba77a-89eb-4f73-bae4-203ce5e6a95d";
                                        name = "Donnie Abbott";
                                    }}),
                                    add(new CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls() {{
                                        id = "46ce2af7-a73c-4f3b-a453-f870b326b5a7";
                                        name = "Amber Dibbert";
                                    }}),
                                    add(new CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls() {{
                                        id = "db1a8422-bb67-49d2-b227-15bf0cbb1e31";
                                        name = "Isaac Reynolds DVM";
                                    }}),
                                }};
                                lastEntryRule = CreateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum.ALLOW;
                            }};, "dolore");            

            CreateOrganizationAdaptivePolicyPolicyResponse res = sdk.adaptivePolicy.createOrganizationAdaptivePolicyPolicy(req);

            if (res.createOrganizationAdaptivePolicyPolicy201ApplicationJSONObject != null) {
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
                .setSecurity(new Security("labore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationAdaptivePolicyAclRequest req = new DeleteOrganizationAdaptivePolicyAclRequest("adipisci", "dolorum");            

            DeleteOrganizationAdaptivePolicyAclResponse res = sdk.adaptivePolicy.deleteOrganizationAdaptivePolicyAcl(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationAdaptivePolicyGroup

Deletes the specified adaptive policy group and any associated policies and references

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationAdaptivePolicyGroupRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationAdaptivePolicyGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationAdaptivePolicyGroupRequest req = new DeleteOrganizationAdaptivePolicyGroupRequest("quae", "aut");            

            DeleteOrganizationAdaptivePolicyGroupResponse res = sdk.adaptivePolicy.deleteOrganizationAdaptivePolicyGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationAdaptivePolicyPolicy

Delete an Adaptive Policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationAdaptivePolicyPolicyRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationAdaptivePolicyPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationAdaptivePolicyPolicyRequest req = new DeleteOrganizationAdaptivePolicyPolicyRequest("itaque", "consequatur");            

            DeleteOrganizationAdaptivePolicyPolicyResponse res = sdk.adaptivePolicy.deleteOrganizationAdaptivePolicyPolicy(req);

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
                .setSecurity(new Security("est") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyAclRequest req = new GetOrganizationAdaptivePolicyAclRequest("repellendus", "porro");            

            GetOrganizationAdaptivePolicyAclResponse res = sdk.adaptivePolicy.getOrganizationAdaptivePolicyAcl(req);

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
                .setSecurity(new Security("doloribus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyAclsRequest req = new GetOrganizationAdaptivePolicyAclsRequest("ut");            

            GetOrganizationAdaptivePolicyAclsResponse res = sdk.adaptivePolicy.getOrganizationAdaptivePolicyAcls(req);

            if (res.getOrganizationAdaptivePolicyAcls200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdaptivePolicyGroup

Returns an adaptive policy group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyGroupRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyGroupRequest req = new GetOrganizationAdaptivePolicyGroupRequest("cupiditate", "qui");            

            GetOrganizationAdaptivePolicyGroupResponse res = sdk.adaptivePolicy.getOrganizationAdaptivePolicyGroup(req);

            if (res.getOrganizationAdaptivePolicyGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdaptivePolicyGroups

List adaptive policy groups in a organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyGroupsRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyGroupsRequest req = new GetOrganizationAdaptivePolicyGroupsRequest("laudantium");            

            GetOrganizationAdaptivePolicyGroupsResponse res = sdk.adaptivePolicy.getOrganizationAdaptivePolicyGroups(req);

            if (res.getOrganizationAdaptivePolicyGroups200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdaptivePolicyOverview

Returns adaptive policy aggregate statistics for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyOverviewRequest req = new GetOrganizationAdaptivePolicyOverviewRequest("occaecati");            

            GetOrganizationAdaptivePolicyOverviewResponse res = sdk.adaptivePolicy.getOrganizationAdaptivePolicyOverview(req);

            if (res.getOrganizationAdaptivePolicyOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdaptivePolicyPolicies

List adaptive policies in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyPoliciesRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyPoliciesRequest req = new GetOrganizationAdaptivePolicyPoliciesRequest("quisquam");            

            GetOrganizationAdaptivePolicyPoliciesResponse res = sdk.adaptivePolicy.getOrganizationAdaptivePolicyPolicies(req);

            if (res.getOrganizationAdaptivePolicyPolicies200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdaptivePolicyPolicy

Return an adaptive policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyPolicyRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyPolicyRequest req = new GetOrganizationAdaptivePolicyPolicyRequest("omnis", "quis");            

            GetOrganizationAdaptivePolicyPolicyResponse res = sdk.adaptivePolicy.getOrganizationAdaptivePolicyPolicy(req);

            if (res.getOrganizationAdaptivePolicyPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdaptivePolicySettings

Returns global adaptive policy settings in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicySettingsRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicySettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicySettingsRequest req = new GetOrganizationAdaptivePolicySettingsRequest("delectus");            

            GetOrganizationAdaptivePolicySettingsResponse res = sdk.adaptivePolicy.getOrganizationAdaptivePolicySettings(req);

            if (res.getOrganizationAdaptivePolicySettings200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationAdaptivePolicyAclRequest req = new UpdateOrganizationAdaptivePolicyAclRequest("consectetur", "vero") {{
                requestBody = new UpdateOrganizationAdaptivePolicyAclRequestBody() {{
                    description = "tenetur";
                    ipVersion = UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum.IPV4;
                    name = "Kelvin Schmidt";
                    rules = new org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyAclRequestBodyRules[]{{
                        add(new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.DENY, UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.ANY) {{
                            dstPort = "vero";
                            policy = UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.ICMP;
                            srcPort = "quibusdam";
                        }}),
                        add(new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.ALLOW, UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.UDP) {{
                            dstPort = "natus";
                            policy = UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.ANY;
                            srcPort = "voluptatibus";
                        }}),
                        add(new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.ALLOW, UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.UDP) {{
                            dstPort = "fugit";
                            policy = UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum.UDP;
                            srcPort = "doloribus";
                        }}),
                    }};
                }};;
            }};            

            UpdateOrganizationAdaptivePolicyAclResponse res = sdk.adaptivePolicy.updateOrganizationAdaptivePolicyAcl(req);

            if (res.updateOrganizationAdaptivePolicyAcl200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationAdaptivePolicyGroup

Updates an adaptive policy group. If updating "Infrastructure", only the SGT is allowed. Cannot update "Unknown".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyGroupRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationAdaptivePolicyGroupRequest req = new UpdateOrganizationAdaptivePolicyGroupRequest("alias", "officia") {{
                requestBody = new UpdateOrganizationAdaptivePolicyGroupRequestBody() {{
                    description = "tempora";
                    name = "Terri Collins";
                    policyObjects = new org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects[]{{
                        add(new UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects() {{
                            id = "36813f16-d9f5-4fce-ac55-6146c3e250fb";
                            name = "Jennifer Lesch";
                        }}),
                        add(new UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects() {{
                            id = "2e141aac-366c-48dd-ab14-42907474778a";
                            name = "Yvette Stehr";
                        }}),
                    }};
                    sgt = 379927L;
                }};;
            }};            

            UpdateOrganizationAdaptivePolicyGroupResponse res = sdk.adaptivePolicy.updateOrganizationAdaptivePolicyGroup(req);

            if (res.updateOrganizationAdaptivePolicyGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationAdaptivePolicyPolicy

Update an Adaptive Policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyPolicyRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationAdaptivePolicyPolicyRequest req = new UpdateOrganizationAdaptivePolicyPolicyRequest("eos", "praesentium") {{
                requestBody = new UpdateOrganizationAdaptivePolicyPolicyRequestBody() {{
                    acls = new org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls[]{{
                        add(new UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls() {{
                            id = "10ab3cdc-a425-4190-8e52-3c7e0bc7178e";
                            name = "Courtney Mayert";
                        }}),
                        add(new UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls() {{
                            id = "2a70c688-282a-4a48-a562-f222e9817ee1";
                            name = "Traci Reilly";
                        }}),
                        add(new UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls() {{
                            id = "1e6b7b95-bc0a-4b3c-a0c4-f3789fd871f9";
                            name = "Jody Schuster";
                        }}),
                        add(new UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls() {{
                            id = "fd121aa6-f1e6-474b-9b04-f15756082d68";
                            name = "Wilbur Bradtke";
                        }}),
                    }};
                    destinationGroup = new UpdateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup() {{
                        id = "1d170513-39d0-4808-aa18-40394c26071f";
                        name = "Lee Wiza";
                        sgt = 45659L;
                    }};;
                    lastEntryRule = UpdateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum.DEFAULT_;
                    sourceGroup = new UpdateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup() {{
                        id = "42dac7af-515c-4c41-baa6-3aae8d67864d";
                        name = "Felipe Johns";
                        sgt = 968904L;
                    }};;
                }};;
            }};            

            UpdateOrganizationAdaptivePolicyPolicyResponse res = sdk.adaptivePolicy.updateOrganizationAdaptivePolicyPolicy(req);

            if (res.updateOrganizationAdaptivePolicyPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationAdaptivePolicySettings

Update global adaptive policy settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicySettingsRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicySettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicySettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationAdaptivePolicySettingsRequest req = new UpdateOrganizationAdaptivePolicySettingsRequest("nemo") {{
                requestBody = new UpdateOrganizationAdaptivePolicySettingsRequestBody() {{
                    enabledNetworks = new String[]{{
                        add("aliquid"),
                        add("aperiam"),
                        add("cum"),
                        add("consectetur"),
                    }};
                }};;
            }};            

            UpdateOrganizationAdaptivePolicySettingsResponse res = sdk.adaptivePolicy.updateOrganizationAdaptivePolicySettings(req);

            if (res.updateOrganizationAdaptivePolicySettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
