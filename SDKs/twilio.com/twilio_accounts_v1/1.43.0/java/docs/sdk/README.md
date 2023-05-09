# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createCredentialAws](#createcredentialaws) - Create a new AWS Credential
* [createCredentialPublicKey](#createcredentialpublickey) - Create a new Public Key Credential
* [createSecondaryAuthToken](#createsecondaryauthtoken) - Create a new secondary Auth Token
* [deleteCredentialAws](#deletecredentialaws) - Delete a Credential from your account
* [deleteCredentialPublicKey](#deletecredentialpublickey) - Delete a Credential from your account
* [deleteSecondaryAuthToken](#deletesecondaryauthtoken) - Delete the secondary Auth Token from your account
* [fetchCredentialAws](#fetchcredentialaws) - Fetch the AWS credentials specified by the provided Credential Sid
* [fetchCredentialPublicKey](#fetchcredentialpublickey) - Fetch the public key specified by the provided Credential Sid
* [listCredentialAws](#listcredentialaws) - Retrieves a collection of AWS Credentials belonging to the account used to make the request
* [listCredentialPublicKey](#listcredentialpublickey) - Retrieves a collection of Public Key Credentials belonging to the account used to make the request
* [updateAuthTokenPromotion](#updateauthtokenpromotion) - Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
* [updateCredentialAws](#updatecredentialaws) - Modify the properties of a given Account
* [updateCredentialPublicKey](#updatecredentialpublickey) - Modify the properties of a given Account

## createCredentialAws

Create a new AWS Credential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCredentialAwsCreateCredentialAwsRequest;
import org.openapis.openapi.models.operations.CreateCredentialAwsResponse;
import org.openapis.openapi.models.operations.CreateCredentialAwsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCredentialAwsCreateCredentialAwsRequest req = new CreateCredentialAwsCreateCredentialAwsRequest("nulla") {{
                accountSid = "corrupti";
                friendlyName = "illum";
            }};            

            CreateCredentialAwsResponse res = sdk.sdk.createCredentialAws(req, new CreateCredentialAwsSecurity("vel", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.accountsV1CredentialCredentialAws != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCredentialPublicKey

Create a new Public Key Credential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCredentialPublicKeyCreateCredentialPublicKeyRequest;
import org.openapis.openapi.models.operations.CreateCredentialPublicKeyResponse;
import org.openapis.openapi.models.operations.CreateCredentialPublicKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCredentialPublicKeyCreateCredentialPublicKeyRequest req = new CreateCredentialPublicKeyCreateCredentialPublicKeyRequest("deserunt") {{
                accountSid = "suscipit";
                friendlyName = "iure";
            }};            

            CreateCredentialPublicKeyResponse res = sdk.sdk.createCredentialPublicKey(req, new CreateCredentialPublicKeySecurity("magnam", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.accountsV1CredentialCredentialPublicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSecondaryAuthToken

Create a new secondary Auth Token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSecondaryAuthTokenResponse;
import org.openapis.openapi.models.operations.CreateSecondaryAuthTokenSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSecondaryAuthTokenResponse res = sdk.sdk.createSecondaryAuthToken(new CreateSecondaryAuthTokenSecurity("ipsa", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.accountsV1SecondaryAuthToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCredentialAws

Delete a Credential from your account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCredentialAwsRequest;
import org.openapis.openapi.models.operations.DeleteCredentialAwsResponse;
import org.openapis.openapi.models.operations.DeleteCredentialAwsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCredentialAwsRequest req = new DeleteCredentialAwsRequest("tempora");            

            DeleteCredentialAwsResponse res = sdk.sdk.deleteCredentialAws(req, new DeleteCredentialAwsSecurity("suscipit", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteCredentialPublicKey

Delete a Credential from your account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCredentialPublicKeyRequest;
import org.openapis.openapi.models.operations.DeleteCredentialPublicKeyResponse;
import org.openapis.openapi.models.operations.DeleteCredentialPublicKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCredentialPublicKeyRequest req = new DeleteCredentialPublicKeyRequest("minus");            

            DeleteCredentialPublicKeyResponse res = sdk.sdk.deleteCredentialPublicKey(req, new DeleteCredentialPublicKeySecurity("placeat", "voluptatum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteSecondaryAuthToken

Delete the secondary Auth Token from your account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSecondaryAuthTokenResponse;
import org.openapis.openapi.models.operations.DeleteSecondaryAuthTokenSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSecondaryAuthTokenResponse res = sdk.sdk.deleteSecondaryAuthToken(new DeleteSecondaryAuthTokenSecurity("iusto", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## fetchCredentialAws

Fetch the AWS credentials specified by the provided Credential Sid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCredentialAwsRequest;
import org.openapis.openapi.models.operations.FetchCredentialAwsResponse;
import org.openapis.openapi.models.operations.FetchCredentialAwsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCredentialAwsRequest req = new FetchCredentialAwsRequest("nisi");            

            FetchCredentialAwsResponse res = sdk.sdk.fetchCredentialAws(req, new FetchCredentialAwsSecurity("recusandae", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.accountsV1CredentialCredentialAws != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCredentialPublicKey

Fetch the public key specified by the provided Credential Sid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCredentialPublicKeyRequest;
import org.openapis.openapi.models.operations.FetchCredentialPublicKeyResponse;
import org.openapis.openapi.models.operations.FetchCredentialPublicKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCredentialPublicKeyRequest req = new FetchCredentialPublicKeyRequest("ab");            

            FetchCredentialPublicKeyResponse res = sdk.sdk.fetchCredentialPublicKey(req, new FetchCredentialPublicKeySecurity("quis", "veritatis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.accountsV1CredentialCredentialPublicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCredentialAws

Retrieves a collection of AWS Credentials belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCredentialAwsRequest;
import org.openapis.openapi.models.operations.ListCredentialAwsResponse;
import org.openapis.openapi.models.operations.ListCredentialAwsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCredentialAwsRequest req = new ListCredentialAwsRequest() {{
                page = 648172L;
                pageSize = 20218L;
                pageToken = "ipsam";
            }};            

            ListCredentialAwsResponse res = sdk.sdk.listCredentialAws(req, new ListCredentialAwsSecurity("repellendus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCredentialAwsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCredentialPublicKey

Retrieves a collection of Public Key Credentials belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCredentialPublicKeyRequest;
import org.openapis.openapi.models.operations.ListCredentialPublicKeyResponse;
import org.openapis.openapi.models.operations.ListCredentialPublicKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCredentialPublicKeyRequest req = new ListCredentialPublicKeyRequest() {{
                page = 778157L;
                pageSize = 140350L;
                pageToken = "at";
            }};            

            ListCredentialPublicKeyResponse res = sdk.sdk.listCredentialPublicKey(req, new ListCredentialPublicKeySecurity("at", "maiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCredentialPublicKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAuthTokenPromotion

Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAuthTokenPromotionResponse;
import org.openapis.openapi.models.operations.UpdateAuthTokenPromotionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAuthTokenPromotionResponse res = sdk.sdk.updateAuthTokenPromotion(new UpdateAuthTokenPromotionSecurity("molestiae", "quod") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.accountsV1AuthTokenPromotion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCredentialAws

Modify the properties of a given Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCredentialAwsRequest;
import org.openapis.openapi.models.operations.UpdateCredentialAwsResponse;
import org.openapis.openapi.models.operations.UpdateCredentialAwsSecurity;
import org.openapis.openapi.models.operations.UpdateCredentialAwsUpdateCredentialAwsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCredentialAwsRequest req = new UpdateCredentialAwsRequest("quod") {{
                requestBody = new UpdateCredentialAwsUpdateCredentialAwsRequest() {{
                    friendlyName = "esse";
                }};;
            }};            

            UpdateCredentialAwsResponse res = sdk.sdk.updateCredentialAws(req, new UpdateCredentialAwsSecurity("totam", "porro") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.accountsV1CredentialCredentialAws != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCredentialPublicKey

Modify the properties of a given Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCredentialPublicKeyRequest;
import org.openapis.openapi.models.operations.UpdateCredentialPublicKeyResponse;
import org.openapis.openapi.models.operations.UpdateCredentialPublicKeySecurity;
import org.openapis.openapi.models.operations.UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCredentialPublicKeyRequest req = new UpdateCredentialPublicKeyRequest("dolorum") {{
                requestBody = new UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest() {{
                    friendlyName = "dicta";
                }};;
            }};            

            UpdateCredentialPublicKeyResponse res = sdk.sdk.updateCredentialPublicKey(req, new UpdateCredentialPublicKeySecurity("nam", "officia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.accountsV1CredentialCredentialPublicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
