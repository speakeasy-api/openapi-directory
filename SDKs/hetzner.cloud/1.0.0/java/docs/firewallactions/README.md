# firewallActions

### Available Operations

* [getFirewallsIdActions](#getfirewallsidactions) - Get all Actions for a Firewall
* [getFirewallsIdActionsActionId](#getfirewallsidactionsactionid) - Get an Action for a Firewall
* [postFirewallsIdActionsApplyToResources](#postfirewallsidactionsapplytoresources) - Apply to Resources
* [postFirewallsIdActionsRemoveFromResources](#postfirewallsidactionsremovefromresources) - Remove from Resources
* [postFirewallsIdActionsSetRules](#postfirewallsidactionssetrules) - Set Rules

## getFirewallsIdActions

Returns all Action objects for a Firewall. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFirewallsIdActionsRequest;
import org.openapis.openapi.models.operations.GetFirewallsIdActionsResponse;
import org.openapis.openapi.models.operations.GetFirewallsIdActionsSortParameterSortEnum;
import org.openapis.openapi.models.operations.GetFirewallsIdActionsStatusParameterStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFirewallsIdActionsRequest req = new GetFirewallsIdActionsRequest(143353L) {{
                sort = GetFirewallsIdActionsSortParameterSortEnum.PROGRESS;
                status = GetFirewallsIdActionsStatusParameterStatusEnum.ERROR;
            }};            

            GetFirewallsIdActionsResponse res = sdk.firewallActions.getFirewallsIdActions(req);

            if (res.actionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFirewallsIdActionsActionId

Returns a specific Action for a Firewall.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFirewallsIdActionsActionIdRequest;
import org.openapis.openapi.models.operations.GetFirewallsIdActionsActionIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFirewallsIdActionsActionIdRequest req = new GetFirewallsIdActionsActionIdRequest(758616L, 521848L);            

            GetFirewallsIdActionsActionIdResponse res = sdk.firewallActions.getFirewallsIdActionsActionId(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFirewallsIdActionsApplyToResources

Applies one Firewall to multiple resources.

Currently servers (public network interface) and label selectors are supported.

#### Call specific error codes

| Code                          | Description                                                   |
|-------------------------------|---------------------------------------------------------------|
| `firewall_already_applied`    | Firewall was already applied on resource                      |
| `incompatible_network_type`   | The Network type is incompatible for the given resource       |
| `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsApplyToResourcesRequest;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsApplyToResourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostFirewallsIdActionsApplyToResourcesRequest req = new PostFirewallsIdActionsApplyToResourcesRequest(105907L) {{
                requestBody = new PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest(                new org.openapis.openapi.models.operations.PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources[]{{
                                    add(new PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources() {{
                                        labelSelector = new PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector("env=prod") {{
                                            selector = "env=prod";
                                        }};
                                        server = new PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer(264555L) {{
                                            id = 473600L;
                                        }};
                                        type = PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum.SERVER;
                                    }}),
                                    add(new PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources() {{
                                        labelSelector = new PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector("env=prod") {{
                                            selector = "env=prod";
                                        }};
                                        server = new PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer(736918L) {{
                                            id = 774234L;
                                        }};
                                        type = PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum.SERVER;
                                    }}),
                                }});;
            }};            

            PostFirewallsIdActionsApplyToResourcesResponse res = sdk.firewallActions.postFirewallsIdActionsApplyToResources(req);

            if (res.actionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFirewallsIdActionsRemoveFromResources

Removes one Firewall from multiple resources.

Currently only Servers (and their public network interfaces) are supported.

#### Call specific error codes

| Code                                  | Description                                                            |
|---------------------------------------|------------------------------------------------------------------------|
| `firewall_already_removed`            | Firewall was already removed from the resource                         |
| `firewall_resource_not_found`         | The resource the Firewall should be attached to was not found          |
| `firewall_managed_by_label_selector`  | Firewall was applied via label selector and cannot be removed manually |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsRemoveFromResourcesRequest;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsRemoveFromResourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostFirewallsIdActionsRemoveFromResourcesRequest req = new PostFirewallsIdActionsRemoveFromResourcesRequest(216550L) {{
                requestBody = new PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest(                new org.openapis.openapi.models.operations.PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources[]{{
                                    add(new PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources() {{
                                        labelSelector = new PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector("env=prod") {{
                                            selector = "env=prod";
                                        }};
                                        server = new PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer(18789L) {{
                                            id = 135218L;
                                        }};
                                        type = PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum.SERVER;
                                    }}),
                                    add(new PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources() {{
                                        labelSelector = new PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector("env=prod") {{
                                            selector = "env=prod";
                                        }};
                                        server = new PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer(149675L) {{
                                            id = 617636L;
                                        }};
                                        type = PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum.LABEL_SELECTOR;
                                    }}),
                                    add(new PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources() {{
                                        labelSelector = new PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector("env=prod") {{
                                            selector = "env=prod";
                                        }};
                                        server = new PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer(616934L) {{
                                            id = 222321L;
                                        }};
                                        type = PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum.SERVER;
                                    }}),
                                }});;
            }};            

            PostFirewallsIdActionsRemoveFromResourcesResponse res = sdk.firewallActions.postFirewallsIdActionsRemoveFromResources(req);

            if (res.actionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFirewallsIdActionsSetRules

Sets the rules of a Firewall.

All existing rules will be overwritten. Pass an empty `rules` array to remove all rules.
The maximum amount of rules that can be defined is 50.

#### Call specific error codes

| Code                          | Description                                                   |
|-------------------------------|---------------------------------------------------------------|
| `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsSetRulesRequest;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsSetRulesResponse;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsSetRulesSetRulesRequest;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsSetRulesSetRulesRequestRule;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum;
import org.openapis.openapi.models.operations.PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostFirewallsIdActionsSetRulesRequest req = new PostFirewallsIdActionsSetRulesRequest(943749L) {{
                requestBody = new PostFirewallsIdActionsSetRulesSetRulesRequest(                new org.openapis.openapi.models.operations.PostFirewallsIdActionsSetRulesSetRulesRequestRule[]{{
                                    add(new PostFirewallsIdActionsSetRulesSetRulesRequestRule(PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum.OUT, PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum.ESP) {{
                                        description = "fuga";
                                        destinationIps = new String[]{{
                                            add("corporis"),
                                            add("iste"),
                                        }};
                                        direction = PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum.IN;
                                        port = "80";
                                        protocol = PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum.GRE;
                                        sourceIps = new String[]{{
                                            add("architecto"),
                                            add("ipsa"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                    add(new PostFirewallsIdActionsSetRulesSetRulesRequestRule(PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum.OUT, PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum.TCP) {{
                                        description = "laborum";
                                        destinationIps = new String[]{{
                                            add("dolorem"),
                                        }};
                                        direction = PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum.IN;
                                        port = "80";
                                        protocol = PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum.TCP;
                                        sourceIps = new String[]{{
                                            add("enim"),
                                            add("omnis"),
                                            add("nemo"),
                                            add("minima"),
                                        }};
                                    }}),
                                    add(new PostFirewallsIdActionsSetRulesSetRulesRequestRule(PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum.OUT, PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum.UDP) {{
                                        description = "iure";
                                        destinationIps = new String[]{{
                                            add("doloribus"),
                                            add("sapiente"),
                                            add("architecto"),
                                        }};
                                        direction = PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum.OUT;
                                        port = "80";
                                        protocol = PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum.UDP;
                                        sourceIps = new String[]{{
                                            add("consequuntur"),
                                            add("repellat"),
                                            add("mollitia"),
                                        }};
                                    }}),
                                    add(new PostFirewallsIdActionsSetRulesSetRulesRequestRule(PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum.OUT, PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum.UDP) {{
                                        description = "commodi";
                                        destinationIps = new String[]{{
                                            add("molestiae"),
                                            add("velit"),
                                        }};
                                        direction = PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum.OUT;
                                        port = "80";
                                        protocol = PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum.TCP;
                                        sourceIps = new String[]{{
                                            add("vitae"),
                                            add("laborum"),
                                        }};
                                    }}),
                                }});;
            }};            

            PostFirewallsIdActionsSetRulesResponse res = sdk.firewallActions.postFirewallsIdActionsSetRules(req);

            if (res.actionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
