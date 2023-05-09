# application

### Available Operations

* [deleteApplicationSecret](#deleteapplicationsecret) - Deletes Application secret
* [getApplicationSecret](#getapplicationsecret) - Get Application secret
* [getApplicationSecrets](#getapplicationsecrets) - Get all Application secret links
* [postApplicationSecret](#postapplicationsecret) - Create a new Application secret
* [putApplicationSecret](#putapplicationsecret) - Create a new Application secret

## deleteApplicationSecret

Deletes an Application secret from the given resource location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationSecretRequest;
import org.openapis.openapi.models.operations.DeleteApplicationSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApplicationSecretRequest req = new DeleteApplicationSecretRequest("aspernatur", "perferendis", "ad");            

            DeleteApplicationSecretResponse res = sdk.application.deleteApplicationSecret(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApplicationSecret

Get the public visible Application secret object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationSecretRequest;
import org.openapis.openapi.models.operations.GetApplicationSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApplicationSecretRequest req = new GetApplicationSecretRequest("natus", "sed", "iste");            

            GetApplicationSecretResponse res = sdk.application.getApplicationSecret(req);

            if (res.applicationSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApplicationSecrets

Get all the Application secret links

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationSecretsRequest;
import org.openapis.openapi.models.operations.GetApplicationSecretsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApplicationSecretsRequest req = new GetApplicationSecretsRequest("dolor", "natus");            

            GetApplicationSecretsResponse res = sdk.application.getApplicationSecrets(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApplicationSecret

Create new Application secret using auto generated resource location key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApplicationSecretRequest;
import org.openapis.openapi.models.operations.PostApplicationSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApplicationSecretRequest req = new PostApplicationSecretRequest("laboriosam", "hic");            

            PostApplicationSecretResponse res = sdk.application.postApplicationSecret(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putApplicationSecret

Create / update an Application secret at the given resource location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutApplicationSecretRequest;
import org.openapis.openapi.models.operations.PutApplicationSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutApplicationSecretRequest req = new PutApplicationSecretRequest("saepe", "fuga", "in");            

            PutApplicationSecretResponse res = sdk.application.putApplicationSecret(req);

            if (res.applicationSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
