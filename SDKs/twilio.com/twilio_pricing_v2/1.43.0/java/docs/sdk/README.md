# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [fetchTrunkingCountry](#fetchtrunkingcountry) - Fetch a specific Country.
* [fetchTrunkingNumber](#fetchtrunkingnumber) - Fetch pricing information for a specific destination and, optionally, origination phone number.
* [fetchVoiceCountry](#fetchvoicecountry) - Fetch a specific Country.
* [fetchVoiceNumber](#fetchvoicenumber) - Fetch pricing information for a specific destination and, optionally, origination phone number.
* [listTrunkingCountry](#listtrunkingcountry)
* [listVoiceCountry](#listvoicecountry)

## fetchTrunkingCountry

Fetch a specific Country.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTrunkingCountryRequest;
import org.openapis.openapi.models.operations.FetchTrunkingCountryResponse;
import org.openapis.openapi.models.operations.FetchTrunkingCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTrunkingCountryRequest req = new FetchTrunkingCountryRequest("quibusdam");            

            FetchTrunkingCountryResponse res = sdk.sdk.fetchTrunkingCountry(req, new FetchTrunkingCountrySecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.pricingV2TrunkingCountryInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTrunkingNumber

Fetch pricing information for a specific destination and, optionally, origination phone number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTrunkingNumberRequest;
import org.openapis.openapi.models.operations.FetchTrunkingNumberResponse;
import org.openapis.openapi.models.operations.FetchTrunkingNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTrunkingNumberRequest req = new FetchTrunkingNumberRequest("corrupti") {{
                originationNumber = "illum";
            }};            

            FetchTrunkingNumberResponse res = sdk.sdk.fetchTrunkingNumber(req, new FetchTrunkingNumberSecurity("vel", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.pricingV2TrunkingNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchVoiceCountry

Fetch a specific Country.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchVoiceCountryRequest;
import org.openapis.openapi.models.operations.FetchVoiceCountryResponse;
import org.openapis.openapi.models.operations.FetchVoiceCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchVoiceCountryRequest req = new FetchVoiceCountryRequest("deserunt");            

            FetchVoiceCountryResponse res = sdk.sdk.fetchVoiceCountry(req, new FetchVoiceCountrySecurity("suscipit", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.pricingV2VoiceVoiceCountryInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchVoiceNumber

Fetch pricing information for a specific destination and, optionally, origination phone number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchVoiceNumberRequest;
import org.openapis.openapi.models.operations.FetchVoiceNumberResponse;
import org.openapis.openapi.models.operations.FetchVoiceNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchVoiceNumberRequest req = new FetchVoiceNumberRequest("magnam") {{
                originationNumber = "debitis";
            }};            

            FetchVoiceNumberResponse res = sdk.sdk.fetchVoiceNumber(req, new FetchVoiceNumberSecurity("ipsa", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.pricingV2VoiceVoiceNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTrunkingCountry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTrunkingCountryRequest;
import org.openapis.openapi.models.operations.ListTrunkingCountryResponse;
import org.openapis.openapi.models.operations.ListTrunkingCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTrunkingCountryRequest req = new ListTrunkingCountryRequest() {{
                page = 272656L;
                pageSize = 383441L;
                pageToken = "molestiae";
            }};            

            ListTrunkingCountryResponse res = sdk.sdk.listTrunkingCountry(req, new ListTrunkingCountrySecurity("minus", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listTrunkingCountryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVoiceCountry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVoiceCountryRequest;
import org.openapis.openapi.models.operations.ListVoiceCountryResponse;
import org.openapis.openapi.models.operations.ListVoiceCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListVoiceCountryRequest req = new ListVoiceCountryRequest() {{
                page = 528895L;
                pageSize = 479977L;
                pageToken = "excepturi";
            }};            

            ListVoiceCountryResponse res = sdk.sdk.listVoiceCountry(req, new ListVoiceCountrySecurity("nisi", "recusandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listVoiceCountryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
