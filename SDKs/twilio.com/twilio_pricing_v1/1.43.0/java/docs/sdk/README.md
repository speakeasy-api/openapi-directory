# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [fetchMessagingCountry](#fetchmessagingcountry)
* [fetchPhoneNumberCountry](#fetchphonenumbercountry)
* [fetchVoiceCountry](#fetchvoicecountry)
* [fetchVoiceNumber](#fetchvoicenumber)
* [listMessagingCountry](#listmessagingcountry)
* [listPhoneNumberCountry](#listphonenumbercountry)
* [listVoiceCountry](#listvoicecountry)

## fetchMessagingCountry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMessagingCountryRequest;
import org.openapis.openapi.models.operations.FetchMessagingCountryResponse;
import org.openapis.openapi.models.operations.FetchMessagingCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMessagingCountryRequest req = new FetchMessagingCountryRequest("quibusdam");            

            FetchMessagingCountryResponse res = sdk.sdk.fetchMessagingCountry(req, new FetchMessagingCountrySecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.pricingV1MessagingMessagingCountryInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPhoneNumberCountry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPhoneNumberCountryRequest;
import org.openapis.openapi.models.operations.FetchPhoneNumberCountryResponse;
import org.openapis.openapi.models.operations.FetchPhoneNumberCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPhoneNumberCountryRequest req = new FetchPhoneNumberCountryRequest("corrupti");            

            FetchPhoneNumberCountryResponse res = sdk.sdk.fetchPhoneNumberCountry(req, new FetchPhoneNumberCountrySecurity("illum", "vel") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.pricingV1PhoneNumberPhoneNumberCountryInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchVoiceCountry

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

            FetchVoiceCountryRequest req = new FetchVoiceCountryRequest("error");            

            FetchVoiceCountryResponse res = sdk.sdk.fetchVoiceCountry(req, new FetchVoiceCountrySecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.pricingV1VoiceVoiceCountryInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchVoiceNumber

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

            FetchVoiceNumberRequest req = new FetchVoiceNumberRequest("iure");            

            FetchVoiceNumberResponse res = sdk.sdk.fetchVoiceNumber(req, new FetchVoiceNumberSecurity("magnam", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.pricingV1VoiceVoiceNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMessagingCountry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMessagingCountryRequest;
import org.openapis.openapi.models.operations.ListMessagingCountryResponse;
import org.openapis.openapi.models.operations.ListMessagingCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMessagingCountryRequest req = new ListMessagingCountryRequest() {{
                page = 56713L;
                pageSize = 963663L;
                pageToken = "tempora";
            }};            

            ListMessagingCountryResponse res = sdk.sdk.listMessagingCountry(req, new ListMessagingCountrySecurity("suscipit", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMessagingCountryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPhoneNumberCountry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPhoneNumberCountryRequest;
import org.openapis.openapi.models.operations.ListPhoneNumberCountryResponse;
import org.openapis.openapi.models.operations.ListPhoneNumberCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListPhoneNumberCountryRequest req = new ListPhoneNumberCountryRequest() {{
                page = 791725L;
                pageSize = 812169L;
                pageToken = "voluptatum";
            }};            

            ListPhoneNumberCountryResponse res = sdk.sdk.listPhoneNumberCountry(req, new ListPhoneNumberCountrySecurity("iusto", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listPhoneNumberCountryResponse != null) {
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
                page = 392785L;
                pageSize = 925597L;
                pageToken = "temporibus";
            }};            

            ListVoiceCountryResponse res = sdk.sdk.listVoiceCountry(req, new ListVoiceCountrySecurity("ab", "quis") {{
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
