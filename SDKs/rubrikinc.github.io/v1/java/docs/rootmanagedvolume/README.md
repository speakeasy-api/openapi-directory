# rootManagedVolume

## Overview

Managed volumes.

### Available Operations

* [createManagedVolumeGenerateScriptJob](#createmanagedvolumegeneratescriptjob) - Generate and download unified view script

## createManagedVolumeGenerateScriptJob

Start an asynchronous job to generate and download a script to unify export paths across channels in managed volume export.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateManagedVolumeGenerateScriptJobRequest;
import org.openapis.openapi.models.operations.CreateManagedVolumeGenerateScriptJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("earum", "veniam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateManagedVolumeGenerateScriptJobRequest req = new CreateManagedVolumeGenerateScriptJobRequest("animi");            

            CreateManagedVolumeGenerateScriptJobResponse res = sdk.rootManagedVolume.createManagedVolumeGenerateScriptJob(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
