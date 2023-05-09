# managedconfigurationsforuser

### Available Operations

* [androidenterpriseManagedconfigurationsforuserDelete](#androidenterprisemanagedconfigurationsforuserdelete) - Removes a per-user managed configuration for an app for the specified user.
* [androidenterpriseManagedconfigurationsforuserGet](#androidenterprisemanagedconfigurationsforuserget) - Retrieves details of a per-user managed configuration for an app for the specified user.
* [androidenterpriseManagedconfigurationsforuserList](#androidenterprisemanagedconfigurationsforuserlist) - Lists all the per-user managed configurations for the specified user. Only the ID is set.
* [androidenterpriseManagedconfigurationsforuserUpdate](#androidenterprisemanagedconfigurationsforuserupdate) - Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.

## androidenterpriseManagedconfigurationsforuserDelete

Removes a per-user managed configuration for an app for the specified user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsforuserDeleteRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsforuserDeleteResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsforuserDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseManagedconfigurationsforuserDeleteRequest req = new AndroidenterpriseManagedconfigurationsforuserDeleteRequest("reiciendis", "ex", "sit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officiis";
                alt = AltEnum.MEDIA;
                callback = "facilis";
                fields = "quaerat";
                key = "incidunt";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "rem";
                uploadProtocol = "sit";
            }};            

            AndroidenterpriseManagedconfigurationsforuserDeleteResponse res = sdk.managedconfigurationsforuser.androidenterpriseManagedconfigurationsforuserDelete(req, new AndroidenterpriseManagedconfigurationsforuserDeleteSecurity("nobis", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## androidenterpriseManagedconfigurationsforuserGet

Retrieves details of a per-user managed configuration for an app for the specified user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsforuserGetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsforuserGetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsforuserGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseManagedconfigurationsforuserGetRequest req = new AndroidenterpriseManagedconfigurationsforuserGetRequest("veniam", "minima", "recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nulla";
                alt = AltEnum.JSON;
                callback = "aperiam";
                fields = "saepe";
                key = "numquam";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "officiis";
                uploadProtocol = "beatae";
            }};            

            AndroidenterpriseManagedconfigurationsforuserGetResponse res = sdk.managedconfigurationsforuser.androidenterpriseManagedconfigurationsforuserGet(req, new AndroidenterpriseManagedconfigurationsforuserGetSecurity("laudantium", "exercitationem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.managedConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseManagedconfigurationsforuserList

Lists all the per-user managed configurations for the specified user. Only the ID is set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsforuserListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsforuserListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsforuserListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseManagedconfigurationsforuserListRequest req = new AndroidenterpriseManagedconfigurationsforuserListRequest("praesentium", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "hic";
                key = "expedita";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "dolorum";
                uploadProtocol = "nostrum";
            }};            

            AndroidenterpriseManagedconfigurationsforuserListResponse res = sdk.managedconfigurationsforuser.androidenterpriseManagedconfigurationsforuserList(req, new AndroidenterpriseManagedconfigurationsforuserListSecurity("officia", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.managedConfigurationsForUserListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseManagedconfigurationsforuserUpdate

Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsforuserUpdateRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsforuserUpdateResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseManagedconfigurationsforuserUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigurationVariables;
import org.openapis.openapi.models.shared.ManagedConfiguration;
import org.openapis.openapi.models.shared.ManagedProperty;
import org.openapis.openapi.models.shared.ManagedPropertyBundle;
import org.openapis.openapi.models.shared.VariableSet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseManagedconfigurationsforuserUpdateRequest req = new AndroidenterpriseManagedconfigurationsforuserUpdateRequest("corrupti", "accusamus", "tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                managedConfiguration = new ManagedConfiguration() {{
                    configurationVariables = new ConfigurationVariables() {{
                        mcmId = "fugit";
                        variableSet = new org.openapis.openapi.models.shared.VariableSet[]{{
                            add(new VariableSet() {{
                                placeholder = "fugiat";
                                userValue = "voluptatem";
                            }}),
                            add(new VariableSet() {{
                                placeholder = "culpa";
                                userValue = "expedita";
                            }}),
                        }};
                    }};;
                    kind = "magnam";
                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                        add(new ManagedProperty() {{
                            key = "esse";
                            valueBool = false;
                            valueBundle = new ManagedPropertyBundle() {{
                                managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                    add(new ManagedProperty() {{}}),
                                    add(new ManagedProperty() {{}}),
                                }};
                            }};
                            valueBundleArray = new org.openapis.openapi.models.shared.ManagedPropertyBundle[]{{
                                add(new ManagedPropertyBundle() {{
                                    managedProperty = new org.openapis.openapi.models.shared.ManagedProperty[]{{
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                        add(new ManagedProperty() {{}}),
                                    }};
                                }}),
                            }};
                            valueInteger = 558065;
                            valueString = "repudiandae";
                            valueStringArray = new String[]{{
                                add("et"),
                                add("blanditiis"),
                            }};
                        }}),
                    }};
                    productId = "ex";
                }};;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "nostrum";
                key = "saepe";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "incidunt";
                uploadProtocol = "reiciendis";
            }};            

            AndroidenterpriseManagedconfigurationsforuserUpdateResponse res = sdk.managedconfigurationsforuser.androidenterpriseManagedconfigurationsforuserUpdate(req, new AndroidenterpriseManagedconfigurationsforuserUpdateSecurity("dolorem", "harum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.managedConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
