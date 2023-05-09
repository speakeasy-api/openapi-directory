# account

### Available Operations

* [createAccountCredential](#createaccountcredential) - Create a new credential
* [createAccountGroup](#createaccountgroup) - Create a new group
* [createAccountGroupMapping](#createaccountgroupmapping) - Create a new SSO group mapping
* [createAccountKey](#createaccountkey) - Create a new key
* [createAccountOrganization](#createaccountorganization) - Create a new organization
* [createAccountScanTemplate](#createaccountscantemplate) - Create a new scan template
* [createAccountUser](#createaccountuser) - Create a new user account
* [createAccountUserInvite](#createaccountuserinvite) - Create a new user account and send an email invite
* [deleteAccountOrganizationExportToken](#deleteaccountorganizationexporttoken) - Removes the export token from the specified organization
* [exportEventsJSON](#exporteventsjson) - System event log as JSON
* [exportEventsJSONL](#exporteventsjsonl) - System event log as JSON line-delimited
* [getAccountAgents](#getaccountagents) - Get all agents across all organizations
* [getAccountCredential](#getaccountcredential) - Get credential details
* [getAccountCredentials](#getaccountcredentials) - Get all account credentials
* [getAccountGroup](#getaccountgroup) - Get group details
* [getAccountGroupMapping](#getaccountgroupmapping) - Get SSO group mapping details
* [getAccountGroupMappings](#getaccountgroupmappings) - Get all SSO group mappings
* [getAccountGroups](#getaccountgroups) - Get all groups
* [getAccountKey](#getaccountkey) - Get key details
* [getAccountKeys](#getaccountkeys) - Get all active API keys
* [getAccountLicense](#getaccountlicense) - Get license details
* [getAccountOrganization](#getaccountorganization) - Get organization details
* [getAccountOrganizations](#getaccountorganizations) - Get all organization details
* [getAccountScanTemplate](#getaccountscantemplate) - Get scan template details
* [getAccountScanTemplates](#getaccountscantemplates) - Get all scan templates across all organizations (up to 1000)
* [getAccountSites](#getaccountsites) - Get all sites details across all organizations
* [getAccountTasks](#getaccounttasks) - Get all task details across all organizations (up to 1000)
* [getAccountUser](#getaccountuser) - Get user details
* [getAccountUsers](#getaccountusers) - Get all users
* [removeAccountCredential](#removeaccountcredential) - Remove this credential
* [removeAccountGroup](#removeaccountgroup) - Remove this group
* [removeAccountGroupMapping](#removeaccountgroupmapping) - Remove this SSO group mapping
* [removeAccountKey](#removeaccountkey) - Remove this key
* [removeAccountOrganization](#removeaccountorganization) - Remove this organization
* [removeAccountScanTemplate](#removeaccountscantemplate) - Remove scan template
* [removeAccountUser](#removeaccountuser) - Remove this user
* [resetAccountUserLockout](#resetaccountuserlockout) - Resets the user's lockout status
* [resetAccountUserMFA](#resetaccountusermfa) - Resets the user's MFA tokens
* [resetAccountUserPassword](#resetaccountuserpassword) - Sends the user a password reset email
* [rotateAccountKey](#rotateaccountkey) - Rotates the key secret
* [rotateAccountOrganizationExportToken](#rotateaccountorganizationexporttoken) - Rotates the organization export token and returns the updated organization
* [updateAccountGroup](#updateaccountgroup) - Update an existing group
* [updateAccountGroupMapping](#updateaccountgroupmapping) - Update an existing SSO group mapping
* [updateAccountOrganization](#updateaccountorganization) - Update organization details
* [updateAccountScanTemplate](#updateaccountscantemplate) - Update scan template
* [updateAccountUser](#updateaccountuser) - Update a user's details

## createAccountCredential

Create a new credential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountCredentialResponse;
import org.openapis.openapi.models.operations.CreateAccountCredentialSecurity;
import org.openapis.openapi.models.shared.AWSCredentialFields;
import org.openapis.openapi.models.shared.AzureClientSecretCredentialFields;
import org.openapis.openapi.models.shared.AzureUsernamePasswordCredentialFields;
import org.openapis.openapi.models.shared.CensysCredentialFields;
import org.openapis.openapi.models.shared.CredentialOptions;
import org.openapis.openapi.models.shared.CredentialOptionsTypeEnum;
import org.openapis.openapi.models.shared.CrowdstrikeCredentialFields;
import org.openapis.openapi.models.shared.MiradoreCredentialFields;
import org.openapis.openapi.models.shared.SNMPv2CommunitiesCredentialFields;
import org.openapis.openapi.models.shared.SNMPv3CredentialFields;
import org.openapis.openapi.models.shared.VMwareCredentialFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CredentialOptions req = new CredentialOptions() {{
                acl = new java.util.HashMap<String, Object>() {{
                    put("deserunt", "suscipit");
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
                cidrs = "10.0.0.17/32, 192.168.1.0/24";
                global = false;
                name = "credentials_name";
                secret = new VMwareCredentialFields("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8", "user") {{
                    insecure = "true";
                    thumbprints = "IP=SHA256:B64HASH";
                }};;
                type = CredentialOptionsTypeEnum.MIRADORE_API_KEY_V1;
            }};            

            CreateAccountCredentialResponse res = sdk.account.createAccountCredential(req, new CreateAccountCredentialSecurity("tempora") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.credential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccountGroup

Create a new group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountGroupResponse;
import org.openapis.openapi.models.operations.CreateAccountGroupSecurity;
import org.openapis.openapi.models.shared.GroupPost;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GroupPost req = new GroupPost() {{
                description = "Viewers Group";
                expiresAt = 1576300370L;
                name = "Viewers";
                orgDefaultRole = "admin";
                orgRoles = new java.util.HashMap<String, Object>() {{
                    put("molestiae", "minus");
                    put("placeat", "voluptatum");
                }};
            }};            

            CreateAccountGroupResponse res = sdk.account.createAccountGroup(req, new CreateAccountGroupSecurity("iusto") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccountGroupMapping

Create a new SSO group mapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountGroupMappingResponse;
import org.openapis.openapi.models.operations.CreateAccountGroupMappingSecurity;
import org.openapis.openapi.models.shared.GroupMapping;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GroupMapping req = new GroupMapping("2b096711-4d28-4417-8635-64af4f62c1ae", "f6cfb91a-52ea-4a86-bf9a-5a891a26f52b", "basic-attribute", "basic-attribute-value") {{
                createdAt = 1576300370L;
                createdByEmail = "jsmith@example.com";
                description = "Maps basic-attribute to Viewers Group";
                groupName = "Viewers Group";
                updatedAt = 1576300370L;
            }};            

            CreateAccountGroupMappingResponse res = sdk.account.createAccountGroupMapping(req, new CreateAccountGroupMappingSecurity("excepturi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccountKey

Create a new key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountKeyResponse;
import org.openapis.openapi.models.operations.CreateAccountKeySecurity;
import org.openapis.openapi.models.shared.APIKeyOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.APIKeyOptions req = new APIKeyOptions() {{
                comment = "Splunk integration key";
                organizationId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
            }};            

            CreateAccountKeyResponse res = sdk.account.createAccountKey(req, new CreateAccountKeySecurity("nisi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.apiKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccountOrganization

Create a new organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountOrganizationResponse;
import org.openapis.openapi.models.operations.CreateAccountOrganizationSecurity;
import org.openapis.openapi.models.shared.OrgOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.OrgOptions req = new OrgOptions() {{
                description = "Wobbly Widgets, Inc.";
                expirationAssetsOffline = "365";
                expirationAssetsStale = "365";
                expirationScans = "365";
                exportToken = "ETXXXXXXXXXXXXXXXX";
                name = "My Organization";
                parentId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                project = "recusandae";
            }};            

            CreateAccountOrganizationResponse res = sdk.account.createAccountOrganization(req, new CreateAccountOrganizationSecurity("temporibus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccountScanTemplate

Create a new scan template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountScanTemplateResponse;
import org.openapis.openapi.models.operations.CreateAccountScanTemplateSecurity;
import org.openapis.openapi.models.shared.ScanTemplateOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ScanTemplateOptions req = new ScanTemplateOptions(                new java.util.HashMap<String, Object>() {{
                                put("quis", "veritatis");
                            }}, false, "My Scan Template") {{
                description = "My Scan Template";
                params = new java.util.HashMap<String, String>() {{
                    put("perferendis", "ipsam");
                    put("repellendus", "sapiente");
                    put("quo", "odit");
                }};
            }};            

            CreateAccountScanTemplateResponse res = sdk.account.createAccountScanTemplate(req, new CreateAccountScanTemplateSecurity("at") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.scanTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccountUser

Create a new user account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountUserResponse;
import org.openapis.openapi.models.operations.CreateAccountUserSecurity;
import org.openapis.openapi.models.shared.UserOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UserOptions req = new UserOptions() {{
                clientAdmin = true;
                email = "jsmith@example.com";
                firstName = "James";
                lastName = "Smith";
                orgDefaultRole = "admin";
                orgRoles = new java.util.HashMap<String, Object>() {{
                    put("maiores", "molestiae");
                    put("quod", "quod");
                    put("esse", "totam");
                    put("porro", "dolorum");
                }};
            }};            

            CreateAccountUserResponse res = sdk.account.createAccountUser(req, new CreateAccountUserSecurity("dicta") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccountUserInvite

Create a new user account and send an email invite

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountUserInviteResponse;
import org.openapis.openapi.models.operations.CreateAccountUserInviteSecurity;
import org.openapis.openapi.models.shared.UserInviteOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UserInviteOptions req = new UserInviteOptions() {{
                clientAdmin = true;
                email = "jsmith@example.com";
                firstName = "James";
                lastName = "Smith";
                message = "You have been invited to the Rumble Network Discovery platform";
                orgDefaultRole = "admin";
                orgRoles = new java.util.HashMap<String, Object>() {{
                    put("officia", "occaecati");
                    put("fugit", "deleniti");
                    put("hic", "optio");
                }};
                subject = "Welcome to Rumble";
            }};            

            CreateAccountUserInviteResponse res = sdk.account.createAccountUserInvite(req, new CreateAccountUserInviteSecurity("totam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccountOrganizationExportToken

Removes the export token from the specified organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccountOrganizationExportTokenRequest;
import org.openapis.openapi.models.operations.DeleteAccountOrganizationExportTokenResponse;
import org.openapis.openapi.models.operations.DeleteAccountOrganizationExportTokenSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAccountOrganizationExportTokenRequest req = new DeleteAccountOrganizationExportTokenRequest("16742cb7-3920-4592-9396-fea7596eb10f");            

            DeleteAccountOrganizationExportTokenResponse res = sdk.account.deleteAccountOrganizationExportToken(req, new DeleteAccountOrganizationExportTokenSecurity("est") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## exportEventsJSON

System event log as JSON

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportEventsJSONRequest;
import org.openapis.openapi.models.operations.ExportEventsJSONResponse;
import org.openapis.openapi.models.operations.ExportEventsJSONSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportEventsJSONRequest req = new ExportEventsJSONRequest() {{
                fields = "mollitia";
                search = "laborum";
            }};            

            ExportEventsJSONResponse res = sdk.account.exportEventsJSON(req, new ExportEventsJSONSecurity("dolores") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportEventsJSONL

System event log as JSON line-delimited

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportEventsJSONLRequest;
import org.openapis.openapi.models.operations.ExportEventsJSONLResponse;
import org.openapis.openapi.models.operations.ExportEventsJSONLSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportEventsJSONLRequest req = new ExportEventsJSONLRequest() {{
                fields = "dolorem";
                search = "corporis";
            }};            

            ExportEventsJSONLResponse res = sdk.account.exportEventsJSONL(req, new ExportEventsJSONLSecurity("explicabo") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountAgents

Get all agents across all organizations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountAgentsRequest;
import org.openapis.openapi.models.operations.GetAccountAgentsResponse;
import org.openapis.openapi.models.operations.GetAccountAgentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountAgentsRequest req = new GetAccountAgentsRequest() {{
                search = "nobis";
            }};            

            GetAccountAgentsResponse res = sdk.account.getAccountAgents(req, new GetAccountAgentsSecurity("enim") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.agents != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountCredential

Get credential details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountCredentialRequest;
import org.openapis.openapi.models.operations.GetAccountCredentialResponse;
import org.openapis.openapi.models.operations.GetAccountCredentialSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountCredentialRequest req = new GetAccountCredentialRequest("955907af-f1a3-4a2f-a946-7739251aa52c");            

            GetAccountCredentialResponse res = sdk.account.getAccountCredential(req, new GetAccountCredentialSecurity("sequi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.credential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountCredentials

Get all account credentials

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountCredentialsRequest;
import org.openapis.openapi.models.operations.GetAccountCredentialsResponse;
import org.openapis.openapi.models.operations.GetAccountCredentialsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountCredentialsRequest req = new GetAccountCredentialsRequest() {{
                search = "tenetur";
            }};            

            GetAccountCredentialsResponse res = sdk.account.getAccountCredentials(req, new GetAccountCredentialsSecurity("ipsam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.credentials != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountGroup

Get group details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountGroupRequest;
import org.openapis.openapi.models.operations.GetAccountGroupResponse;
import org.openapis.openapi.models.operations.GetAccountGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountGroupRequest req = new GetAccountGroupRequest("ad019da1-ffe7-48f0-97b0-074f15471b5e");            

            GetAccountGroupResponse res = sdk.account.getAccountGroup(req, new GetAccountGroupSecurity("commodi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountGroupMapping

Get SSO group mapping details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountGroupMappingRequest;
import org.openapis.openapi.models.operations.GetAccountGroupMappingResponse;
import org.openapis.openapi.models.operations.GetAccountGroupMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountGroupMappingRequest req = new GetAccountGroupMappingRequest("e13b99d4-88e1-4e91-a450-ad2abd442698");            

            GetAccountGroupMappingResponse res = sdk.account.getAccountGroupMapping(req, new GetAccountGroupMappingSecurity("perferendis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountGroupMappings

Get all SSO group mappings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountGroupMappingsResponse;
import org.openapis.openapi.models.operations.GetAccountGroupMappingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountGroupMappingsResponse res = sdk.account.getAccountGroupMappings(new GetAccountGroupMappingsSecurity("magni") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountGroups

Get all groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountGroupsResponse;
import org.openapis.openapi.models.operations.GetAccountGroupsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountGroupsResponse res = sdk.account.getAccountGroups(new GetAccountGroupsSecurity("assumenda") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountKey

Get key details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountKeyRequest;
import org.openapis.openapi.models.operations.GetAccountKeyResponse;
import org.openapis.openapi.models.operations.GetAccountKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountKeyRequest req = new GetAccountKeyRequest("502a94bb-4f63-4c96-9e9a-3efa77dfb14c");            

            GetAccountKeyResponse res = sdk.account.getAccountKey(req, new GetAccountKeySecurity("facere") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountKeys

Get all active API keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountKeysResponse;
import org.openapis.openapi.models.operations.GetAccountKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountKeysResponse res = sdk.account.getAccountKeys(new GetAccountKeysSecurity("ea") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.apiKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountLicense

Get license details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountLicenseResponse;
import org.openapis.openapi.models.operations.GetAccountLicenseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountLicenseResponse res = sdk.account.getAccountLicense(new GetAccountLicenseSecurity("aliquid") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountOrganization

Get organization details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountOrganizationRequest;
import org.openapis.openapi.models.operations.GetAccountOrganizationResponse;
import org.openapis.openapi.models.operations.GetAccountOrganizationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountOrganizationRequest req = new GetAccountOrganizationRequest("ae395efb-9ba8-48f3-a669-97074ba4469b");            

            GetAccountOrganizationResponse res = sdk.account.getAccountOrganization(req, new GetAccountOrganizationSecurity("eum") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountOrganizations

Get all organization details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountOrganizationsRequest;
import org.openapis.openapi.models.operations.GetAccountOrganizationsResponse;
import org.openapis.openapi.models.operations.GetAccountOrganizationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountOrganizationsRequest req = new GetAccountOrganizationsRequest() {{
                search = "vero";
            }};            

            GetAccountOrganizationsResponse res = sdk.account.getAccountOrganizations(req, new GetAccountOrganizationsSecurity("aspernatur") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.organizations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountScanTemplate

Get scan template details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountScanTemplateRequest;
import org.openapis.openapi.models.operations.GetAccountScanTemplateResponse;
import org.openapis.openapi.models.operations.GetAccountScanTemplateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountScanTemplateRequest req = new GetAccountScanTemplateRequest("14195989-0afa-4563-a251-6fe4c8b711e5");            

            GetAccountScanTemplateResponse res = sdk.account.getAccountScanTemplate(req, new GetAccountScanTemplateSecurity("expedita") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.scanTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountScanTemplates

Get all scan templates across all organizations (up to 1000)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountScanTemplatesRequest;
import org.openapis.openapi.models.operations.GetAccountScanTemplatesResponse;
import org.openapis.openapi.models.operations.GetAccountScanTemplatesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountScanTemplatesRequest req = new GetAccountScanTemplatesRequest() {{
                search = "nihil";
            }};            

            GetAccountScanTemplatesResponse res = sdk.account.getAccountScanTemplates(req, new GetAccountScanTemplatesSecurity("repellat") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.scanTemplates != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountSites

Get all sites details across all organizations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountSitesRequest;
import org.openapis.openapi.models.operations.GetAccountSitesResponse;
import org.openapis.openapi.models.operations.GetAccountSitesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountSitesRequest req = new GetAccountSitesRequest() {{
                search = "quibusdam";
            }};            

            GetAccountSitesResponse res = sdk.account.getAccountSites(req, new GetAccountSitesSecurity("sed") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.sites != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountTasks

Get all task details across all organizations (up to 1000)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountTasksRequest;
import org.openapis.openapi.models.operations.GetAccountTasksResponse;
import org.openapis.openapi.models.operations.GetAccountTasksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountTasksRequest req = new GetAccountTasksRequest() {{
                search = "saepe";
            }};            

            GetAccountTasksResponse res = sdk.account.getAccountTasks(req, new GetAccountTasksSecurity("pariatur") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.tasks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountUser

Get user details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountUserRequest;
import org.openapis.openapi.models.operations.GetAccountUserResponse;
import org.openapis.openapi.models.operations.GetAccountUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountUserRequest req = new GetAccountUserRequest("028921cd-dc69-4260-9fb5-76b0d5f0d30c");            

            GetAccountUserResponse res = sdk.account.getAccountUser(req, new GetAccountUserSecurity("corporis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountUsers

Get all users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountUsersResponse;
import org.openapis.openapi.models.operations.GetAccountUsersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountUsersResponse res = sdk.account.getAccountUsers(new GetAccountUsersSecurity("hic") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeAccountCredential

Remove this credential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveAccountCredentialRequest;
import org.openapis.openapi.models.operations.RemoveAccountCredentialResponse;
import org.openapis.openapi.models.operations.RemoveAccountCredentialSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveAccountCredentialRequest req = new RemoveAccountCredentialRequest("bb258705-3202-4c73-95fe-9b90c28909b3");            

            RemoveAccountCredentialResponse res = sdk.account.removeAccountCredential(req, new RemoveAccountCredentialSecurity("asperiores") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## removeAccountGroup

Remove this group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveAccountGroupRequest;
import org.openapis.openapi.models.operations.RemoveAccountGroupResponse;
import org.openapis.openapi.models.operations.RemoveAccountGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveAccountGroupRequest req = new RemoveAccountGroupRequest("e49a8d9c-bf48-4633-b23f-9b77f3a41006");            

            RemoveAccountGroupResponse res = sdk.account.removeAccountGroup(req, new RemoveAccountGroupSecurity("odio") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## removeAccountGroupMapping

Remove this SSO group mapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveAccountGroupMappingRequest;
import org.openapis.openapi.models.operations.RemoveAccountGroupMappingResponse;
import org.openapis.openapi.models.operations.RemoveAccountGroupMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveAccountGroupMappingRequest req = new RemoveAccountGroupMappingRequest("4ebf6928-0d1b-4a77-a89e-bf737ae4203c");            

            RemoveAccountGroupMappingResponse res = sdk.account.removeAccountGroupMapping(req, new RemoveAccountGroupMappingSecurity("accusamus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## removeAccountKey

Remove this key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveAccountKeyRequest;
import org.openapis.openapi.models.operations.RemoveAccountKeyResponse;
import org.openapis.openapi.models.operations.RemoveAccountKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveAccountKeyRequest req = new RemoveAccountKeyRequest("5e6a95d8-a0d4-446c-a2af-7a73cf3be453");            

            RemoveAccountKeyResponse res = sdk.account.removeAccountKey(req, new RemoveAccountKeySecurity("sapiente") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## removeAccountOrganization

Remove this organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveAccountOrganizationRequest;
import org.openapis.openapi.models.operations.RemoveAccountOrganizationResponse;
import org.openapis.openapi.models.operations.RemoveAccountOrganizationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveAccountOrganizationRequest req = new RemoveAccountOrganizationRequest("870b326b-5a73-4429-8db1-a8422bb679d2");            

            RemoveAccountOrganizationResponse res = sdk.account.removeAccountOrganization(req, new RemoveAccountOrganizationSecurity("neque") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## removeAccountScanTemplate

Remove scan template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveAccountScanTemplateRequest;
import org.openapis.openapi.models.operations.RemoveAccountScanTemplateResponse;
import org.openapis.openapi.models.operations.RemoveAccountScanTemplateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveAccountScanTemplateRequest req = new RemoveAccountScanTemplateRequest("22715bf0-cbb1-4e31-b8b9-0f3443a1108e");            

            RemoveAccountScanTemplateResponse res = sdk.account.removeAccountScanTemplate(req, new RemoveAccountScanTemplateSecurity("consequatur") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.scanTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeAccountUser

Remove this user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveAccountUserRequest;
import org.openapis.openapi.models.operations.RemoveAccountUserResponse;
import org.openapis.openapi.models.operations.RemoveAccountUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveAccountUserRequest req = new RemoveAccountUserRequest("adcf4b92-1879-4fce-953f-73ef7fbc7abd");            

            RemoveAccountUserResponse res = sdk.account.removeAccountUser(req, new RemoveAccountUserSecurity("ducimus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## resetAccountUserLockout

Resets the user's lockout status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetAccountUserLockoutRequest;
import org.openapis.openapi.models.operations.ResetAccountUserLockoutResponse;
import org.openapis.openapi.models.operations.ResetAccountUserLockoutSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetAccountUserLockoutRequest req = new ResetAccountUserLockoutRequest("4dd39c0f-5d2c-4ff7-870a-45626d436813");            

            ResetAccountUserLockoutResponse res = sdk.account.resetAccountUserLockout(req, new ResetAccountUserLockoutSecurity("maiores") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetAccountUserMFA

Resets the user's MFA tokens

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetAccountUserMFARequest;
import org.openapis.openapi.models.operations.ResetAccountUserMFAResponse;
import org.openapis.openapi.models.operations.ResetAccountUserMFASecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetAccountUserMFARequest req = new ResetAccountUserMFARequest("16d9f5fc-e6c5-4561-86c3-e250fb008c42");            

            ResetAccountUserMFAResponse res = sdk.account.resetAccountUserMFA(req, new ResetAccountUserMFASecurity("accusamus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetAccountUserPassword

Sends the user a password reset email

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetAccountUserPasswordRequest;
import org.openapis.openapi.models.operations.ResetAccountUserPasswordResponse;
import org.openapis.openapi.models.operations.ResetAccountUserPasswordSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetAccountUserPasswordRequest req = new ResetAccountUserPasswordRequest("141aac36-6c8d-4d6b-9442-907474778a7b");            

            ResetAccountUserPasswordResponse res = sdk.account.resetAccountUserPassword(req, new ResetAccountUserPasswordSecurity("fugiat") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rotateAccountKey

Rotates the key secret

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RotateAccountKeyRequest;
import org.openapis.openapi.models.operations.RotateAccountKeyResponse;
import org.openapis.openapi.models.operations.RotateAccountKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RotateAccountKeyRequest req = new RotateAccountKeyRequest("466d28c1-0ab3-4cdc-a425-1904e523c7e0");            

            RotateAccountKeyResponse res = sdk.account.rotateAccountKey(req, new RotateAccountKeySecurity("distinctio") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.apiKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rotateAccountOrganizationExportToken

Rotates the organization export token and returns the updated organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RotateAccountOrganizationExportTokenRequest;
import org.openapis.openapi.models.operations.RotateAccountOrganizationExportTokenResponse;
import org.openapis.openapi.models.operations.RotateAccountOrganizationExportTokenSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RotateAccountOrganizationExportTokenRequest req = new RotateAccountOrganizationExportTokenRequest("c7178e47-96f2-4a70-8688-282aa482562f");            

            RotateAccountOrganizationExportTokenResponse res = sdk.account.rotateAccountOrganizationExportToken(req, new RotateAccountOrganizationExportTokenSecurity("consequuntur") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccountGroup

Update an existing group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountGroupResponse;
import org.openapis.openapi.models.operations.UpdateAccountGroupSecurity;
import org.openapis.openapi.models.shared.GroupPut;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GroupPut req = new GroupPut() {{
                description = "Viewers Group";
                expiresAt = 1576300370L;
                id = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                name = "Viewers";
                orgDefaultRole = "admin";
                orgRoles = new java.util.HashMap<String, Object>() {{
                    put("explicabo", "saepe");
                }};
            }};            

            UpdateAccountGroupResponse res = sdk.account.updateAccountGroup(req, new UpdateAccountGroupSecurity("occaecati") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccountGroupMapping

Update an existing SSO group mapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountGroupMappingResponse;
import org.openapis.openapi.models.operations.UpdateAccountGroupMappingSecurity;
import org.openapis.openapi.models.shared.GroupMapping;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GroupMapping req = new GroupMapping("2b096711-4d28-4417-8635-64af4f62c1ae", "f6cfb91a-52ea-4a86-bf9a-5a891a26f52b", "basic-attribute", "basic-attribute-value") {{
                createdAt = 1576300370L;
                createdByEmail = "jsmith@example.com";
                description = "Maps basic-attribute to Viewers Group";
                groupName = "Viewers Group";
                updatedAt = 1576300370L;
            }};            

            UpdateAccountGroupMappingResponse res = sdk.account.updateAccountGroupMapping(req, new UpdateAccountGroupMappingSecurity("atque") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccountOrganization

Update organization details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountOrganizationRequest;
import org.openapis.openapi.models.operations.UpdateAccountOrganizationResponse;
import org.openapis.openapi.models.operations.UpdateAccountOrganizationSecurity;
import org.openapis.openapi.models.shared.OrgOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAccountOrganizationRequest req = new UpdateAccountOrganizationRequest(                new OrgOptions() {{
                                description = "Wobbly Widgets, Inc.";
                                expirationAssetsOffline = "365";
                                expirationAssetsStale = "365";
                                expirationScans = "365";
                                exportToken = "ETXXXXXXXXXXXXXXXX";
                                name = "My Organization";
                                parentId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                                project = "et";
                            }};, "7ee17cbe-61e6-4b7b-95bc-0ab3c20c4f37");            

            UpdateAccountOrganizationResponse res = sdk.account.updateAccountOrganization(req, new UpdateAccountOrganizationSecurity("blanditiis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccountScanTemplate

Update scan template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountScanTemplateResponse;
import org.openapis.openapi.models.operations.UpdateAccountScanTemplateSecurity;
import org.openapis.openapi.models.shared.ScanTemplate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ScanTemplate req = new ScanTemplate(                new java.util.HashMap<String, Object>() {{
                                put("a", "nulla");
                                put("quas", "esse");
                                put("quasi", "a");
                            }}, false, "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8") {{
                agentId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                clientId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                createdAt = 1576300370L;
                createdBy = "user@example.com";
                createdByUserId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                cruncherId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                description = "My Scan Template";
                error = "agent unavailable";
                gracePeriod = "4";
                hidden = false;
                hostedZoneId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                linkedTaskCount = 1;
                name = "My Scan Template";
                organizationId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                params = new java.util.HashMap<String, String>() {{
                    put("sint", "pariatur");
                    put("possimus", "quia");
                    put("eveniet", "asperiores");
                }};
                parentId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                recur = false;
                recurFrequency = "hour";
                recurLast = 1576300370L;
                recurLastTaskId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                recurNext = 1576300370L;
                siteId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                sizeData = 815524L;
                sizeResults = 85001L;
                sizeSite = 159414L;
                sourceId = "1";
                startTime = 1576300370L;
                stats = new java.util.HashMap<String, Object>() {{
                    put("similique", "culpa");
                }};
                status = "processed";
                templateId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                type = "scan";
                updatedAt = 1576300370L;
            }};            

            UpdateAccountScanTemplateResponse res = sdk.account.updateAccountScanTemplate(req, new UpdateAccountScanTemplateSecurity("aliquid") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.scanTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccountUser

Update a user's details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountUserRequest;
import org.openapis.openapi.models.operations.UpdateAccountUserResponse;
import org.openapis.openapi.models.operations.UpdateAccountUserSecurity;
import org.openapis.openapi.models.shared.UserOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAccountUserRequest req = new UpdateAccountUserRequest(                new UserOptions() {{
                                clientAdmin = true;
                                email = "jsmith@example.com";
                                firstName = "James";
                                lastName = "Smith";
                                orgDefaultRole = "admin";
                                orgRoles = new java.util.HashMap<String, Object>() {{
                                    put("quae", "earum");
                                    put("vel", "in");
                                    put("eius", "libero");
                                    put("illum", "soluta");
                                }};
                            }};, "04f15756-082d-468e-a19f-1d17051339d0");            

            UpdateAccountUserResponse res = sdk.account.updateAccountUser(req, new UpdateAccountUserSecurity("rem") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
