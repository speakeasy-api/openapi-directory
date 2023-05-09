# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [fetchPhoneNumber](#fetchphonenumber) - Fetch the Inbound Processing Region assigned to a phone number.
* [fetchSipDomain](#fetchsipdomain)
* [fetchTrunks](#fetchtrunks) - Fetch the Inbound Processing Region assigned to a SIP Trunk.
* [updatePhoneNumber](#updatephonenumber) - Assign an Inbound Processing Region to a phone number.
* [updateSipDomain](#updatesipdomain)
* [updateTrunks](#updatetrunks) - Assign an Inbound Processing Region to a SIP Trunk

## fetchPhoneNumber

Fetch the Inbound Processing Region assigned to a phone number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPhoneNumberRequest;
import org.openapis.openapi.models.operations.FetchPhoneNumberResponse;
import org.openapis.openapi.models.operations.FetchPhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPhoneNumberRequest req = new FetchPhoneNumberRequest("quibusdam");            

            FetchPhoneNumberResponse res = sdk.sdk.fetchPhoneNumber(req, new FetchPhoneNumberSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.routesV2PhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSipDomain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSipDomainRequest;
import org.openapis.openapi.models.operations.FetchSipDomainResponse;
import org.openapis.openapi.models.operations.FetchSipDomainSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSipDomainRequest req = new FetchSipDomainRequest("corrupti");            

            FetchSipDomainResponse res = sdk.sdk.fetchSipDomain(req, new FetchSipDomainSecurity("illum", "vel") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.routesV2SipDomain != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTrunks

Fetch the Inbound Processing Region assigned to a SIP Trunk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTrunksRequest;
import org.openapis.openapi.models.operations.FetchTrunksResponse;
import org.openapis.openapi.models.operations.FetchTrunksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTrunksRequest req = new FetchTrunksRequest("error");            

            FetchTrunksResponse res = sdk.sdk.fetchTrunks(req, new FetchTrunksSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.routesV2Trunks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePhoneNumber

Assign an Inbound Processing Region to a phone number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePhoneNumberRequest;
import org.openapis.openapi.models.operations.UpdatePhoneNumberResponse;
import org.openapis.openapi.models.operations.UpdatePhoneNumberSecurity;
import org.openapis.openapi.models.operations.UpdatePhoneNumberUpdatePhoneNumberRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePhoneNumberRequest req = new UpdatePhoneNumberRequest("iure") {{
                requestBody = new UpdatePhoneNumberUpdatePhoneNumberRequest() {{
                    friendlyName = "magnam";
                    voiceRegion = "debitis";
                }};;
            }};            

            UpdatePhoneNumberResponse res = sdk.sdk.updatePhoneNumber(req, new UpdatePhoneNumberSecurity("ipsa", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.routesV2PhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSipDomain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSipDomainRequest;
import org.openapis.openapi.models.operations.UpdateSipDomainResponse;
import org.openapis.openapi.models.operations.UpdateSipDomainSecurity;
import org.openapis.openapi.models.operations.UpdateSipDomainUpdateSipDomainRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSipDomainRequest req = new UpdateSipDomainRequest("tempora") {{
                requestBody = new UpdateSipDomainUpdateSipDomainRequest() {{
                    friendlyName = "suscipit";
                    voiceRegion = "molestiae";
                }};;
            }};            

            UpdateSipDomainResponse res = sdk.sdk.updateSipDomain(req, new UpdateSipDomainSecurity("minus", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.routesV2SipDomain != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTrunks

Assign an Inbound Processing Region to a SIP Trunk

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTrunksRequest;
import org.openapis.openapi.models.operations.UpdateTrunksResponse;
import org.openapis.openapi.models.operations.UpdateTrunksSecurity;
import org.openapis.openapi.models.operations.UpdateTrunksUpdateTrunksRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTrunksRequest req = new UpdateTrunksRequest("voluptatum") {{
                requestBody = new UpdateTrunksUpdateTrunksRequest() {{
                    friendlyName = "iusto";
                    voiceRegion = "excepturi";
                }};;
            }};            

            UpdateTrunksResponse res = sdk.sdk.updateTrunks(req, new UpdateTrunksSecurity("nisi", "recusandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.routesV2Trunks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
