# version

### Available Operations

* [createVersion](#createversion) - Create version
* [deleteVersion](#deleteversion) - Delete version
* [getVersion](#getversion) - Get version
* [getVersions](#getversions) - Get versions
* [updateVersion](#updateversion) - Update version

## createVersion

Create a new version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVersionResponse;
import org.openapis.openapi.models.operations.CreateVersionSecurity;
import org.openapis.openapi.models.shared.Version;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Version req = new Version("quam", "molestiae") {{
                codename = "velit";
                isBeta = false;
                isDeprecated = false;
                isHidden = false;
                isStable = false;
            }};            

            CreateVersionResponse res = sdk.version.createVersion(req, new CreateVersionSecurity("error", "quia") {{
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

## deleteVersion

Delete a version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVersionRequest;
import org.openapis.openapi.models.operations.DeleteVersionResponse;
import org.openapis.openapi.models.operations.DeleteVersionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteVersionRequest req = new DeleteVersionRequest("quis");            

            DeleteVersionResponse res = sdk.version.deleteVersion(req, new DeleteVersionSecurity("vitae", "laborum") {{
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

## getVersion

Returns the version with this version ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVersionRequest;
import org.openapis.openapi.models.operations.GetVersionResponse;
import org.openapis.openapi.models.operations.GetVersionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVersionRequest req = new GetVersionRequest("animi");            

            GetVersionResponse res = sdk.version.getVersion(req, new GetVersionSecurity("enim", "odit") {{
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

## getVersions

Retrieve a list of versions associated with a project API key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVersionsResponse;
import org.openapis.openapi.models.operations.GetVersionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVersionsResponse res = sdk.version.getVersions(new GetVersionsSecurity("quo", "sequi") {{
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

## updateVersion

Update an existing version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVersionRequest;
import org.openapis.openapi.models.operations.UpdateVersionResponse;
import org.openapis.openapi.models.operations.UpdateVersionSecurity;
import org.openapis.openapi.models.shared.Version;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateVersionRequest req = new UpdateVersionRequest(                new Version("tenetur", "ipsam") {{
                                codename = "id";
                                isBeta = false;
                                isDeprecated = false;
                                isHidden = false;
                                isStable = false;
                            }};, "possimus");            

            UpdateVersionResponse res = sdk.version.updateVersion(req, new UpdateVersionSecurity("aut", "quasi") {{
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
