# lifecycleOperations

### Available Operations

* [activateUser](#activateuser) - Activate User
* [deactivateUser](#deactivateuser) - Deactivate User
* [resetPassword](#resetpassword) - Reset Password
* [setTempPassword](#settemppassword) - Set Temp Password
* [suspendUser](#suspenduser) - Suspend User
* [unlockUser](#unlockuser) - Unlock User
* [unsuspendUser](#unsuspenduser) - Unsuspend User

## activateUser

Activate User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateUserRequest;
import org.openapis.openapi.models.operations.ActivateUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivateUserRequest req = new ActivateUserRequest("minus") {{
                requestBody = "placeat".getBytes();
                sendEmail = "false";
            }};            

            ActivateUserResponse res = sdk.lifecycleOperations.activateUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deactivateUser

Deactivate User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeactivateUserRequest;
import org.openapis.openapi.models.operations.DeactivateUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeactivateUserRequest req = new DeactivateUserRequest("voluptatum") {{
                requestBody = "iusto".getBytes();
            }};            

            DeactivateUserResponse res = sdk.lifecycleOperations.deactivateUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetPassword

Reset Password

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetPasswordRequest;
import org.openapis.openapi.models.operations.ResetPasswordResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetPasswordRequest req = new ResetPasswordRequest("excepturi") {{
                requestBody = "nisi".getBytes();
                sendEmail = "false";
            }};            

            ResetPasswordResponse res = sdk.lifecycleOperations.resetPassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setTempPassword

Set Temp Password

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetTempPasswordRequest;
import org.openapis.openapi.models.operations.SetTempPasswordResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SetTempPasswordRequest req = new SetTempPasswordRequest("recusandae") {{
                requestBody = "temporibus".getBytes();
                tempPassword = "true";
            }};            

            SetTempPasswordResponse res = sdk.lifecycleOperations.setTempPassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suspendUser

Suspend User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuspendUserRequest;
import org.openapis.openapi.models.operations.SuspendUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuspendUserRequest req = new SuspendUserRequest("ab") {{
                requestBody = "quis".getBytes();
            }};            

            SuspendUserResponse res = sdk.lifecycleOperations.suspendUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unlockUser

Unlock User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnlockUserRequest;
import org.openapis.openapi.models.operations.UnlockUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnlockUserRequest req = new UnlockUserRequest("veritatis") {{
                requestBody = "deserunt".getBytes();
            }};            

            UnlockUserResponse res = sdk.lifecycleOperations.unlockUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsuspendUser

Unsuspend User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnsuspendUserRequest;
import org.openapis.openapi.models.operations.UnsuspendUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnsuspendUserRequest req = new UnsuspendUserRequest("perferendis") {{
                requestBody = "ipsam".getBytes();
            }};            

            UnsuspendUserResponse res = sdk.lifecycleOperations.unsuspendUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
