# SDK

## Overview

This documentation shows how to use Greip API, by highlighting the API methods, options and some other features that allow you to get the most of this API.

API Documentaion
<https://docs.greip.io>
### Available Operations

* [getASNLookup](#getasnlookup) - ASNLookup endpoint: This method helps you lookup any AS Number. It returns the type, organisation details, routes, etc.
* [getBINLookup](#getbinlookup) - This method helps you validate any BIN/IIN number and retrieve the full details related to the bank, brand, type, scheme, country, etc.
* [getBulkLookup](#getbulklookup) - BulkLookup endpoint: Returns the geolocation data of multiple IP Addresses.
* [getCountry](#getcountry) - Country endpoint: Returns the information of a specific country by passing the `countrCode`.
* [getGeoIP](#getgeoip) - Returns the geolocation data of the visitor.
* [getIPLookup](#getiplookup) - Returns the geolocation data of a specific IP Address.
* [getBadWords](#getbadwords) - badWords endpoint: Detects whether user inputs contain profanity or not.
* [getValidateEmail](#getvalidateemail) - This method can be used as an extra-layer of your system for validating email addresses.
* [getValidatePhone](#getvalidatephone) - This method can be used as an extra-layer of your system for validating phone numbers.

## getASNLookup

ASNLookup endpoint: This method helps you lookup any AS Number. It returns the type, organisation details, routes, etc.

Greip API - ASN Lookup
<https://docs.greip.io/methods/asn-lookup-api>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetASNLookupRequest;
import org.openapis.openapi.models.operations.GetASNLookupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetASNLookupRequest req = new GetASNLookupRequest("15169", "2517bc4fc3f790e8f09bc808bb63b899") {{
                format = "JSON";
                isList = "no";
            }};            

            GetASNLookupResponse res = sdk.sdk.getASNLookup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBINLookup

This method helps you validate any BIN/IIN number and retrieve the full details related to the bank, brand, type, scheme, country, etc.

Greip API - BIN/IIN Validation
<https://docs.greip.io/methods/bin-iin-validation>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBINLookupRequest;
import org.openapis.openapi.models.operations.GetBINLookupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBINLookupRequest req = new GetBINLookupRequest("489022", "2517bc4fc3f790e8f09bc808bb63b899") {{
                format = "JSON";
            }};            

            GetBINLookupResponse res = sdk.sdk.getBINLookup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBulkLookup

BulkLookup endpoint: Returns the geolocation data of multiple IP Addresses.

Greip API - Bulk Lookup
<https://docs.greip.io/methods/bulk-lookup>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBulkLookupRequest;
import org.openapis.openapi.models.operations.GetBulkLookupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBulkLookupRequest req = new GetBulkLookupRequest("1.1.1.1,2.2.2.2", "2517bc4fc3f790e8f09bc808bb63b899") {{
                format = "XML";
                lang = "AR";
                params = "currency";
            }};            

            GetBulkLookupResponse res = sdk.sdk.getBulkLookup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCountry

Country endpoint: Returns the information of a specific country by passing the `countrCode`.

Greip API - Country Data API
<https://docs.greip.io/methods/country-data-api>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCountryRequest;
import org.openapis.openapi.models.operations.GetCountryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCountryRequest req = new GetCountryRequest("PS", "2517bc4fc3f790e8f09bc808bb63b899") {{
                format = "XML";
                lang = "AR";
                params = "language";
            }};            

            GetCountryResponse res = sdk.sdk.getCountry(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeoIP

Returns the geolocation data of the visitor.

Greip API - Retrieve Visitor Info
<https://docs.greip.io/methods/retrieve-visitor-info>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeoIPRequest;
import org.openapis.openapi.models.operations.GetGeoIPResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGeoIPRequest req = new GetGeoIPRequest("2517bc4fc3f790e8f09bc808bb63b899") {{
                format = "XML";
                lang = "AR";
                params = "currency";
            }};            

            GetGeoIPResponse res = sdk.sdk.getGeoIP(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIPLookup

Returns the geolocation data of a specific IP Address.

Greip API - Lookup IP Address
<https://docs.greip.io/methods/lookup-ip-address>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIPLookupRequest;
import org.openapis.openapi.models.operations.GetIPLookupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIPLookupRequest req = new GetIPLookupRequest("1.1.1.1", "2517bc4fc3f790e8f09bc808bb63b899") {{
                format = "XML";
                lang = "AR";
                params = "currency";
            }};            

            GetIPLookupResponse res = sdk.sdk.getIPLookup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBadWords

badWords endpoint: Detects whether user inputs contain profanity or not.

Greip API - Profanity Detection
<https://docs.greip.io/methods/profanity-detection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBadWordsRequest;
import org.openapis.openapi.models.operations.GetBadWordsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBadWordsRequest req = new GetBadWordsRequest("2517bc4fc3f790e8f09bc808bb63b899", "This is a sample text without profanity!") {{
                format = "JSON";
                listBadWords = "no";
                scoreOnly = "no";
            }};            

            GetBadWordsResponse res = sdk.sdk.getBadWords(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getValidateEmail

This method can be used as an extra-layer of your system for validating email addresses.

Greip API - Email Validation
<https://docs.greip.io/methods/data-validation/email-validation>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetValidateEmailRequest;
import org.openapis.openapi.models.operations.GetValidateEmailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetValidateEmailRequest req = new GetValidateEmailRequest("name@domain.com", "2517bc4fc3f790e8f09bc808bb63b899") {{
                format = "JSON";
            }};            

            GetValidateEmailResponse res = sdk.sdk.getValidateEmail(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getValidatePhone

This method can be used as an extra-layer of your system for validating phone numbers.

Greip API - Phone Number Validation
<https://docs.greip.io/methods/data-validation/phone-number-validation>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetValidatePhoneRequest;
import org.openapis.openapi.models.operations.GetValidatePhoneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetValidatePhoneRequest req = new GetValidatePhoneRequest("US", "2517bc4fc3f790e8f09bc808bb63b899", "1234567890") {{
                format = "JSON";
            }};            

            GetValidatePhoneResponse res = sdk.sdk.getValidatePhone(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
