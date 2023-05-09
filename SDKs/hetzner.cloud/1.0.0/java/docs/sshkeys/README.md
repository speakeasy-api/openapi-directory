# sshKeys

## Overview

SSH keys are public keys you provide to the cloud system. They can be injected into Servers at creation time. We highly recommend that you use keys instead of passwords to manage your Servers.

### Available Operations

* [deleteSshKeysId](#deletesshkeysid) - Delete an SSH key
* [getSshKeys](#getsshkeys) - Get all SSH keys
* [getSshKeysId](#getsshkeysid) - Get a SSH key
* [postSshKeys](#postsshkeys) - Create an SSH key
* [putSshKeysId](#putsshkeysid) - Update an SSH key

## deleteSshKeysId

Deletes an SSH key. It cannot be used anymore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSshKeysIdRequest;
import org.openapis.openapi.models.operations.DeleteSshKeysIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSshKeysIdRequest req = new DeleteSshKeysIdRequest("officiis");            

            DeleteSshKeysIdResponse res = sdk.sshKeys.deleteSshKeysId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSshKeys

Returns all SSH key objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSshKeysRequest;
import org.openapis.openapi.models.operations.GetSshKeysResponse;
import org.openapis.openapi.models.operations.GetSshKeysSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSshKeysRequest req = new GetSshKeysRequest() {{
                fingerprint = "qui";
                labelSelector = "dolorum";
                name = "Cory Pfeffer";
                sort = GetSshKeysSortEnum.NAME_ASC;
            }};            

            GetSshKeysResponse res = sdk.sshKeys.getSshKeys(req);

            if (res.getSshKeys200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSshKeysId

Returns a specific SSH key object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSshKeysIdRequest;
import org.openapis.openapi.models.operations.GetSshKeysIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSshKeysIdRequest req = new GetSshKeysIdRequest(947371L);            

            GetSshKeysIdResponse res = sdk.sshKeys.getSshKeysId(req);

            if (res.getSshKeysId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSshKeys

Creates a new SSH key with the given `name` and `public_key`. Once an SSH key is created, it can be used in other calls such as creating Servers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSshKeysRequestBody;
import org.openapis.openapi.models.operations.PostSshKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSshKeysRequestBody req = new PostSshKeysRequestBody("My ssh key", "ssh-rsa AAAjjk76kgf...Xt") {{
                labels = new java.util.HashMap<String, Object>() {{
                    put("tempore", "accusamus");
                }};
            }};            

            PostSshKeysResponse res = sdk.sshKeys.postSshKeys(req);

            if (res.postSshKeys201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSshKeysId

Updates an SSH key. You can update an SSH key name and an SSH key labels.

Please note that when updating labels, the SSH key current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSshKeysIdRequest;
import org.openapis.openapi.models.operations.PutSshKeysIdRequestBody;
import org.openapis.openapi.models.operations.PutSshKeysIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutSshKeysIdRequest req = new PutSshKeysIdRequest("numquam") {{
                requestBody = new PutSshKeysIdRequestBody() {{
                    labels = new java.util.HashMap<String, Object>() {{
                        put("dolorem", "sapiente");
                        put("totam", "nihil");
                    }};
                    name = "My ssh key";
                }};;
            }};            

            PutSshKeysIdResponse res = sdk.sshKeys.putSshKeysId(req);

            if (res.putSshKeysId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
