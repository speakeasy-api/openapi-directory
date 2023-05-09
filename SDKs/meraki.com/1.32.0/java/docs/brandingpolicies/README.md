# brandingPolicies

### Available Operations

* [createOrganizationBrandingPolicy](#createorganizationbrandingpolicy) - Add a new branding policy to an organization
* [deleteOrganizationBrandingPolicy](#deleteorganizationbrandingpolicy) - Delete a branding policy
* [getOrganizationBrandingPolicies](#getorganizationbrandingpolicies) - List the branding policies of an organization
* [getOrganizationBrandingPoliciesPriorities](#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [getOrganizationBrandingPolicy](#getorganizationbrandingpolicy) - Return a branding policy
* [updateOrganizationBrandingPoliciesPriorities](#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.
* [updateOrganizationBrandingPolicy](#updateorganizationbrandingpolicy) - Update a branding policy

## createOrganizationBrandingPolicy

Add a new branding policy to an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequest;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyAdminSettings;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyCustomLogo;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyCustomLogoImage;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnum;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettings;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnum;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;
import org.openapis.openapi.models.operations.CreateOrganizationBrandingPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationBrandingPolicyRequest req = new CreateOrganizationBrandingPolicyRequest("eaque") {{
                requestBody = new CreateOrganizationBrandingPolicyRequestBody() {{
                    adminSettings = new CreateOrganizationBrandingPolicyRequestBodyAdminSettings() {{
                        appliesTo = CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum.ALL_ENTERPRISE_ADMINS;
                        values = new String[]{{
                            add("nihil"),
                        }};
                    }};;
                    customLogo = new CreateOrganizationBrandingPolicyRequestBodyCustomLogo() {{
                        enabled = false;
                        image = new CreateOrganizationBrandingPolicyRequestBodyCustomLogoImage() {{
                            contents = "unde";
                            format = CreateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnum.JPG;
                        }};;
                    }};;
                    enabled = false;
                    helpSettings = new CreateOrganizationBrandingPolicyRequestBodyHelpSettings() {{
                        apiDocsSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum.HIDE;
                        casesSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum.HIDE;
                        ciscoMerakiProductDocumentation = "occaecati";
                        communitySubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum.SHOW;
                        dataProtectionRequestsSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum.SHOW;
                        firewallInfoSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum.DEFAULT_OR_INHERIT;
                        getHelpSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum.SHOW;
                        getHelpSubtabKnowledgeBaseSearch = "nam";
                        hardwareReplacementsSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum.SHOW;
                        helpTab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum.SHOW;
                        helpWidget = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnum.HIDE;
                        newFeaturesSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum.HIDE;
                        smForums = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum.SHOW;
                        supportContactInfo = "culpa";
                        universalSearchKnowledgeBaseSearch = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum.DEFAULT_OR_INHERIT;
                    }};;
                    name = "Blake Kuhic";
                }};;
            }};            

            CreateOrganizationBrandingPolicyResponse res = sdk.brandingPolicies.createOrganizationBrandingPolicy(req);

            if (res.createOrganizationBrandingPolicy201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationBrandingPolicy

Delete a branding policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationBrandingPolicyRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationBrandingPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationBrandingPolicyRequest req = new DeleteOrganizationBrandingPolicyRequest("harum", "voluptatibus");            

            DeleteOrganizationBrandingPolicyResponse res = sdk.brandingPolicies.deleteOrganizationBrandingPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationBrandingPolicies

List the branding policies of an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationBrandingPoliciesRequest;
import org.openapis.openapi.models.operations.GetOrganizationBrandingPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationBrandingPoliciesRequest req = new GetOrganizationBrandingPoliciesRequest("quis");            

            GetOrganizationBrandingPoliciesResponse res = sdk.brandingPolicies.getOrganizationBrandingPolicies(req);

            if (res.getOrganizationBrandingPolicies200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationBrandingPoliciesPriorities

Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationBrandingPoliciesPrioritiesRequest;
import org.openapis.openapi.models.operations.GetOrganizationBrandingPoliciesPrioritiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationBrandingPoliciesPrioritiesRequest req = new GetOrganizationBrandingPoliciesPrioritiesRequest("natus");            

            GetOrganizationBrandingPoliciesPrioritiesResponse res = sdk.brandingPolicies.getOrganizationBrandingPoliciesPriorities(req);

            if (res.getOrganizationBrandingPoliciesPriorities200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationBrandingPolicy

Return a branding policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationBrandingPolicyRequest;
import org.openapis.openapi.models.operations.GetOrganizationBrandingPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationBrandingPolicyRequest req = new GetOrganizationBrandingPolicyRequest("vero", "nisi");            

            GetOrganizationBrandingPolicyResponse res = sdk.brandingPolicies.getOrganizationBrandingPolicy(req);

            if (res.getOrganizationBrandingPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationBrandingPoliciesPriorities

Update the priority ordering of an organization's branding policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPoliciesPrioritiesRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationBrandingPoliciesPrioritiesRequest req = new UpdateOrganizationBrandingPoliciesPrioritiesRequest("eum") {{
                requestBody = new UpdateOrganizationBrandingPoliciesPrioritiesRequestBody() {{
                    brandingPolicyIds = new String[]{{
                        add("animi"),
                    }};
                }};;
            }};            

            UpdateOrganizationBrandingPoliciesPrioritiesResponse res = sdk.brandingPolicies.updateOrganizationBrandingPoliciesPriorities(req);

            if (res.updateOrganizationBrandingPoliciesPriorities200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationBrandingPolicy

Update a branding policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyAdminSettings;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyCustomLogo;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImage;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettings;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationBrandingPolicyRequest req = new UpdateOrganizationBrandingPolicyRequest("libero", "ullam") {{
                requestBody = new UpdateOrganizationBrandingPolicyRequestBody() {{
                    adminSettings = new UpdateOrganizationBrandingPolicyRequestBodyAdminSettings() {{
                        appliesTo = UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum.ALL_ADMINS_OF_NETWORKS_TAGGED;
                        values = new String[]{{
                            add("iste"),
                            add("accusamus"),
                            add("ipsam"),
                            add("fugiat"),
                        }};
                    }};;
                    customLogo = new UpdateOrganizationBrandingPolicyRequestBodyCustomLogo() {{
                        enabled = false;
                        image = new UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImage() {{
                            contents = "odio";
                            format = UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnum.JPG;
                        }};;
                    }};;
                    enabled = false;
                    helpSettings = new UpdateOrganizationBrandingPolicyRequestBodyHelpSettings() {{
                        apiDocsSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum.DEFAULT_OR_INHERIT;
                        casesSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum.SHOW;
                        ciscoMerakiProductDocumentation = "occaecati";
                        communitySubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum.SHOW;
                        dataProtectionRequestsSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum.SHOW;
                        firewallInfoSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum.HIDE;
                        getHelpSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum.SHOW;
                        getHelpSubtabKnowledgeBaseSearch = "nihil";
                        hardwareReplacementsSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum.HIDE;
                        helpTab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum.DEFAULT_OR_INHERIT;
                        helpWidget = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnum.DEFAULT_OR_INHERIT;
                        newFeaturesSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum.SHOW;
                        smForums = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum.SHOW;
                        supportContactInfo = "nulla";
                        universalSearchKnowledgeBaseSearch = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum.SHOW;
                    }};;
                    name = "Ms. Joanne Halvorson";
                }};;
            }};            

            UpdateOrganizationBrandingPolicyResponse res = sdk.brandingPolicies.updateOrganizationBrandingPolicy(req);

            if (res.updateOrganizationBrandingPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
