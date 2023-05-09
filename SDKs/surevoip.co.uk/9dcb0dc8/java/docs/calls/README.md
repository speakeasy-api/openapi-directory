# calls

## Overview

Create phone calls via an API

### Available Operations

* [getCalls](#getcalls) - Validate a phone number by calling it once
* [postCalls](#postcalls) - Create phone calls with or without announcements and scheduled hangups

## getCalls

Validate a phone number by calling it once

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallsRequest;
import org.openapis.openapi.models.operations.GetCallsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("temporibus", "ab") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetCallsRequest req = new GetCallsRequest() {{
                validate = 337396L;
            }};            

            GetCallsResponse res = sdk.calls.getCalls(req);

            if (res.oneGetResponses200ContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCalls

Create phone calls with or without announcements and scheduled hangups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCallsRequestBody;
import org.openapis.openapi.models.operations.PostCallsRequestBodyOptions;
import org.openapis.openapi.models.operations.PostCallsRequestBodyOptionsPlayAudio;
import org.openapis.openapi.models.operations.PostCallsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("veritatis", "deserunt") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PostCallsRequestBody req = new PostCallsRequestBody("1224900123", "442035159999", "442035159995") {{
                announcementAt = "180";
                announcementId = "hgCRVfWB4hGRSEAkICyA";
                hangupAnnouncementId = "RVfWB4hGRSEAkIXYCyA";
                hangupAt = "300";
                options = new PostCallsRequestBodyOptions() {{
                    aLegCallerId = "1224900123";
                    aLegOnly = 1L;
                    cancelKey = 2L;
                    connectKey = 1L;
                    playAudio = new org.openapis.openapi.models.operations.PostCallsRequestBodyOptionsPlayAudio[]{{
                        add(new PostCallsRequestBodyOptionsPlayAudio() {{
                            announcementId = "zgL4QmsB6hGmv5YnsW_4lQ";
                        }}),
                    }};
                }};;
            }};            

            PostCallsResponse res = sdk.calls.postCalls(req);

            if (res.postCalls202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
