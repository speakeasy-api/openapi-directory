# policies

### Available Operations

* [createOrganizationAdaptivePolicyPolicy](#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [deleteOrganizationAdaptivePolicyPolicy](#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [getNetworkPoliciesByClient](#getnetworkpoliciesbyclient) - Get policies for all clients with policies
* [getOrganizationAdaptivePolicyPolicies](#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [getOrganizationAdaptivePolicyPolicy](#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [updateOrganizationAdaptivePolicyPolicy](#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy

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
                .setSecurity(new Security("rem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationAdaptivePolicyPolicyRequest req = new CreateOrganizationAdaptivePolicyPolicyRequest(                new CreateOrganizationAdaptivePolicyPolicyRequestBody(                new CreateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup() {{
                                                id = "493195ae-e798-43a7-8691-85f9f7b2434f";
                                                name = "Diana Harber DVM";
                                                sgt = 471580L;
                                            }};,                 new CreateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup() {{
                                                id = "c8b0baf1-e172-4223-ae2f-3f2410492e9b";
                                                name = "Kay Botsford";
                                                sgt = 11004L;
                                            }};) {{
                                acls = new org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls[]{{
                                    add(new CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls() {{
                                        id = "acba34c9-6be4-4ce1-b8a2-49b9e4b9a29d";
                                        name = "Jody Glover";
                                    }}),
                                }};
                                lastEntryRule = CreateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum.ALLOW;
                            }};, "voluptates");            

            CreateOrganizationAdaptivePolicyPolicyResponse res = sdk.policies.createOrganizationAdaptivePolicyPolicy(req);

            if (res.createOrganizationAdaptivePolicyPolicy201ApplicationJSONObject != null) {
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
                .setSecurity(new Security("id") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationAdaptivePolicyPolicyRequest req = new DeleteOrganizationAdaptivePolicyPolicyRequest("illo", "voluptas");            

            DeleteOrganizationAdaptivePolicyPolicyResponse res = sdk.policies.deleteOrganizationAdaptivePolicyPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkPoliciesByClient

Get policies for all clients with policies

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPoliciesByClientRequest;
import org.openapis.openapi.models.operations.GetNetworkPoliciesByClientResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPoliciesByClientRequest req = new GetNetworkPoliciesByClientRequest("atque") {{
                endingBefore = "consequatur";
                perPage = 418580L;
                startingAfter = "blanditiis";
                t0 = "tempore";
                timespan = 6045.46;
            }};            

            GetNetworkPoliciesByClientResponse res = sdk.policies.getNetworkPoliciesByClient(req);

            if (res.getNetworkPoliciesByClient200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("doloremque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyPoliciesRequest req = new GetOrganizationAdaptivePolicyPoliciesRequest("distinctio");            

            GetOrganizationAdaptivePolicyPoliciesResponse res = sdk.policies.getOrganizationAdaptivePolicyPolicies(req);

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
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyPolicyRequest req = new GetOrganizationAdaptivePolicyPolicyRequest("a", "eum");            

            GetOrganizationAdaptivePolicyPolicyResponse res = sdk.policies.getOrganizationAdaptivePolicyPolicy(req);

            if (res.getOrganizationAdaptivePolicyPolicy200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationAdaptivePolicyPolicyRequest req = new UpdateOrganizationAdaptivePolicyPolicyRequest("unde", "possimus") {{
                requestBody = new UpdateOrganizationAdaptivePolicyPolicyRequestBody() {{
                    acls = new org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls[]{{
                        add(new UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls() {{
                            id = "9cd3e12b-f2d1-420d-828d-8299bc676378";
                            name = "Josh Sauer";
                        }}),
                    }};
                    destinationGroup = new UpdateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup() {{
                        id = "347040ca-df0b-4a58-9075-a072c23deea8";
                        name = "Merle Haag";
                        sgt = 311361L;
                    }};;
                    lastEntryRule = UpdateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum.ALLOW;
                    sourceGroup = new UpdateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup() {{
                        id = "c8d48131-15a0-42ee-8863-f1b94694866d";
                        name = "Ms. Monique Stoltenberg";
                        sgt = 112274L;
                    }};;
                }};;
            }};            

            UpdateOrganizationAdaptivePolicyPolicyResponse res = sdk.policies.updateOrganizationAdaptivePolicyPolicy(req);

            if (res.updateOrganizationAdaptivePolicyPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
