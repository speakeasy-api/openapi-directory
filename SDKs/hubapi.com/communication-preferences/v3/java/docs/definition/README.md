# definition

## Overview

The different subscription types that are defined in a portal.

### Available Operations

* [getCommunicationPreferencesV3DefinitionsGetPage](#getcommunicationpreferencesv3definitionsgetpage) - Get subscription definitions

## getCommunicationPreferencesV3DefinitionsGetPage

Get a list of all subscription definitions for the portal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommunicationPreferencesV3DefinitionsGetPageResponse;
import org.openapis.openapi.models.operations.GetCommunicationPreferencesV3DefinitionsGetPageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCommunicationPreferencesV3DefinitionsGetPageResponse res = sdk.definition.getCommunicationPreferencesV3DefinitionsGetPage(new GetCommunicationPreferencesV3DefinitionsGetPageSecurity() {{
                hapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.subscriptionDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
