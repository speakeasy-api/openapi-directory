# configTemplates

### Available Operations

* [createOrganizationConfigTemplate](#createorganizationconfigtemplate) - Create a new configuration template
* [deleteOrganizationConfigTemplate](#deleteorganizationconfigtemplate) - Remove a configuration template
* [getOrganizationConfigTemplate](#getorganizationconfigtemplate) - Return a single configuration template
* [getOrganizationConfigTemplateSwitchProfilePort](#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [getOrganizationConfigTemplateSwitchProfilePorts](#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [getOrganizationConfigTemplateSwitchProfiles](#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [getOrganizationConfigTemplates](#getorganizationconfigtemplates) - List the configuration templates for this organization
* [updateOrganizationConfigTemplate](#updateorganizationconfigtemplate) - Update a configuration template
* [updateOrganizationConfigTemplateSwitchProfilePort](#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

## createOrganizationConfigTemplate

Create a new configuration template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationConfigTemplateRequest;
import org.openapis.openapi.models.operations.CreateOrganizationConfigTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationConfigTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationConfigTemplateRequest req = new CreateOrganizationConfigTemplateRequest(                new CreateOrganizationConfigTemplateRequestBody("magni") {{
                                copyFromNetworkId = "incidunt";
                                timeZone = "fugit";
                            }};, "quisquam");            

            CreateOrganizationConfigTemplateResponse res = sdk.configTemplates.createOrganizationConfigTemplate(req);

            if (res.createOrganizationConfigTemplate201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationConfigTemplate

Remove a configuration template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationConfigTemplateRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationConfigTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationConfigTemplateRequest req = new DeleteOrganizationConfigTemplateRequest("quidem", "iure");            

            DeleteOrganizationConfigTemplateResponse res = sdk.configTemplates.deleteOrganizationConfigTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigTemplate

Return a single configuration template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplateRequest req = new GetOrganizationConfigTemplateRequest("culpa", "illo");            

            GetOrganizationConfigTemplateResponse res = sdk.configTemplates.getOrganizationConfigTemplate(req);

            if (res.getOrganizationConfigTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigTemplateSwitchProfilePort

Return a switch profile port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplateSwitchProfilePortRequest req = new GetOrganizationConfigTemplateSwitchProfilePortRequest("ipsum", "doloremque", "quod", "dignissimos");            

            GetOrganizationConfigTemplateSwitchProfilePortResponse res = sdk.configTemplates.getOrganizationConfigTemplateSwitchProfilePort(req);

            if (res.getOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigTemplateSwitchProfilePorts

Return all the ports of a switch profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplateSwitchProfilePortsRequest req = new GetOrganizationConfigTemplateSwitchProfilePortsRequest("facere", "repellat", "exercitationem");            

            GetOrganizationConfigTemplateSwitchProfilePortsResponse res = sdk.configTemplates.getOrganizationConfigTemplateSwitchProfilePorts(req);

            if (res.getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigTemplateSwitchProfiles

List the switch profiles for your switch template configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilesRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplateSwitchProfilesRequest req = new GetOrganizationConfigTemplateSwitchProfilesRequest("ea", "molestiae");            

            GetOrganizationConfigTemplateSwitchProfilesResponse res = sdk.configTemplates.getOrganizationConfigTemplateSwitchProfiles(req);

            if (res.getOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigTemplates

List the configuration templates for this organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplatesRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplatesRequest req = new GetOrganizationConfigTemplatesRequest("excepturi");            

            GetOrganizationConfigTemplatesResponse res = sdk.configTemplates.getOrganizationConfigTemplates(req);

            if (res.getOrganizationConfigTemplates200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationConfigTemplate

Update a configuration template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationConfigTemplateRequest req = new UpdateOrganizationConfigTemplateRequest("iste", "eaque") {{
                requestBody = new UpdateOrganizationConfigTemplateRequestBody() {{
                    name = "Jay Crooks";
                    timeZone = "nobis";
                }};;
            }};            

            UpdateOrganizationConfigTemplateResponse res = sdk.configTemplates.updateOrganizationConfigTemplate(req);

            if (res.updateOrganizationConfigTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationConfigTemplateSwitchProfilePort

Update a switch profile port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationConfigTemplateSwitchProfilePortRequest req = new UpdateOrganizationConfigTemplateSwitchProfilePortRequest("modi", "adipisci", "atque", "at") {{
                requestBody = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody() {{
                    accessPolicyNumber = 523607L;
                    accessPolicyType = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum.MAC_ALLOW_LIST;
                    allowedVlans = "tempore";
                    daiTrusted = false;
                    enabled = false;
                    flexibleStackingEnabled = false;
                    isolationEnabled = false;
                    linkNegotiation = "eos";
                    macAllowList = new String[]{{
                        add("aperiam"),
                        add("minima"),
                    }};
                    name = "Samuel Shanahan";
                    poeEnabled = false;
                    portScheduleId = "ad";
                    profile = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile() {{
                        enabled = false;
                        id = "e3c2059c-9c3f-4567-a0e2-52765b1d62fc";
                        iname = "possimus";
                    }};;
                    rstpEnabled = false;
                    stickyMacAllowList = new String[]{{
                        add("optio"),
                        add("debitis"),
                        add("architecto"),
                    }};
                    stickyMacAllowListLimit = 968792L;
                    stormControlEnabled = false;
                    stpGuard = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum.BPDU_GUARD;
                    tags = new String[]{{
                        add("odit"),
                    }};
                    type = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum.ACCESS;
                    udld = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum.ALERT_ONLY;
                    vlan = 799730L;
                    voiceVlan = 921086L;
                }};;
            }};            

            UpdateOrganizationConfigTemplateSwitchProfilePortResponse res = sdk.configTemplates.updateOrganizationConfigTemplateSwitchProfilePort(req);

            if (res.updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
