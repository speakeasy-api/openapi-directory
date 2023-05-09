# token

## Overview

Token operations

Token Services
<https://netlicensing.io/wiki/token-services>
### Available Operations

* [createToken](#createtoken) - Create token
* [deleteToken](#deletetoken) - Delete token
* [getToken](#gettoken) - Get token
* [listTokens](#listtokens) - List Tokens

## createToken

Create token by 'tokenType' and additional token parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTokenRequestBody;
import org.openapis.openapi.models.operations.CreateTokenRequestBodyActionEnum;
import org.openapis.openapi.models.operations.CreateTokenRequestBodyApiKeyRoleEnum;
import org.openapis.openapi.models.operations.CreateTokenRequestBodyTokenTypeEnum;
import org.openapis.openapi.models.operations.CreateTokenRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateTokenResponse;
import org.openapis.openapi.models.operations.CreateTokenSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTokenRequestBody req = new CreateTokenRequestBody(CreateTokenRequestBodyTokenTypeEnum.APIKEY) {{
                action = CreateTokenRequestBodyActionEnum.LICENSEE_LOGIN;
                apiKeyRole = CreateTokenRequestBodyApiKeyRoleEnum.ROLE_APIKEY_OPERATION;
                cancelURL = "aliquid";
                cancelURLTitle = "laborum";
                licenseTemplateNumber = "accusamus";
                licenseeNumber = "non";
                predefinedShoppingItem = "occaecati";
                privateKey = "enim";
                productNumber = "accusamus";
                successURL = "delectus";
                successURLTitle = "quidem";
                type = CreateTokenRequestBodyTypeEnum.ACTION;
            }};            

            CreateTokenResponse res = sdk.token.createToken(req, new CreateTokenSecurity("provident", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteToken

Delete a token by 'number'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTokenRequest;
import org.openapis.openapi.models.operations.DeleteTokenResponse;
import org.openapis.openapi.models.operations.DeleteTokenSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTokenRequest req = new DeleteTokenRequest("id");            

            DeleteTokenResponse res = sdk.token.deleteToken(req, new DeleteTokenSecurity("blanditiis", "deleniti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getToken

Return a token by 'tokenNumber'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTokenRequest;
import org.openapis.openapi.models.operations.GetTokenResponse;
import org.openapis.openapi.models.operations.GetTokenSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTokenRequest req = new GetTokenRequest("sapiente");            

            GetTokenResponse res = sdk.token.getToken(req, new GetTokenSecurity("amet", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTokens

Return a list of all tokens for the current Vendor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTokensResponse;
import org.openapis.openapi.models.operations.ListTokensSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTokensResponse res = sdk.token.listTokens(new ListTokensSecurity("nisi", "vel") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
