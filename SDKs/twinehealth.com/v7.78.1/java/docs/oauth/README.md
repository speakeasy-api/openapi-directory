# oauth

## Overview

Authentication operations

### Available Operations

* [createToken](#createtoken) - Create an oauth token
* [fetchTokenGroups](#fetchtokengroups) - Get the groups for a token
* [fetchTokenOrganization](#fetchtokenorganization) - Get the organization for a token

## createToken

Create an OAuth 2.0 Bearer token. A valid bearer token is required for all other API requests.

Be sure to set the header `Content-Type: "application/vnd.api+json"`. Otherwise, you will get an error
403 Forbidden. Using `Content-Type: "application/json"` is permitted (to support older oauth clients) but when
using `application/json` the body should have a body in the following format instead of nesting under
`data.attributes`:
```
{
  "grant_type": "client_credentials",
  "client_id": "95c78ab2-167f-40b8-8bec-8398d4b87454",
  "client_secret": "35d18dc9-a3dd-4948-b787-063a490b9354"
}
```


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTokenIncludeEnum;
import org.openapis.openapi.models.operations.CreateTokenRequest;
import org.openapis.openapi.models.operations.CreateTokenResponse;
import org.openapis.openapi.models.operations.CreateTokenSecurity;
import org.openapis.openapi.models.shared.CreateTokenRequest;
import org.openapis.openapi.models.shared.CreateTokenRequestData;
import org.openapis.openapi.models.shared.CreateTokenRequestDataAttributes;
import org.openapis.openapi.models.shared.CreateTokenRequestDataAttributesGrantTypeEnum;
import org.openapis.openapi.models.shared.CreateTokenRequestDataTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTokenRequest req = new CreateTokenRequest(                new CreateTokenRequest(                new CreateTokenRequestData(                new CreateTokenRequestDataAttributes("19391dc5-8af8-4152-93e8-74ff9361607e", CreateTokenRequestDataAttributesGrantTypeEnum.CLIENT_CREDENTIALS) {{
                                                                clientSecret = "63eca384-7a65-42e2-872b-afd3e8659d0a";
                                                                refreshToken = "b7dcc4a4-593b-4410-a0c5-97ae48939396";
                                                            }};) {{
                                                type = CreateTokenRequestDataTypeEnum.TOKEN;
                                            }};);) {{
                include = CreateTokenIncludeEnum.GROUPS;
            }};            

            CreateTokenResponse res = sdk.oauth.createToken(req, new CreateTokenSecurity("quaerat") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTokenGroups

Get the list of groups a token can be used to access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTokenGroupsRequest;
import org.openapis.openapi.models.operations.FetchTokenGroupsResponse;
import org.openapis.openapi.models.operations.FetchTokenGroupsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTokenGroupsRequest req = new FetchTokenGroupsRequest("consequuntur");            

            FetchTokenGroupsResponse res = sdk.oauth.fetchTokenGroups(req, new FetchTokenGroupsSecurity("repellendus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fetchGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTokenOrganization

Get the organization a token can be used to access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTokenOrganizationRequest;
import org.openapis.openapi.models.operations.FetchTokenOrganizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTokenOrganizationRequest req = new FetchTokenOrganizationRequest("officia");            

            FetchTokenOrganizationResponse res = sdk.oauth.fetchTokenOrganization(req);

            if (res.fetchOrganizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
