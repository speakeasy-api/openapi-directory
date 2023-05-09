# dataTools

### Available Operations

* [badWordFilter](#badwordfilter) - Bad Word Filter
* [emailValidate](#emailvalidate) - Email Validate
* [phoneValidate](#phonevalidate) - Phone Validate
* [uaLookup](#ualookup) - UA Lookup

## badWordFilter

Detect bad words, swear words and profanity in a given text

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BadWordFilterRequestBody;
import org.openapis.openapi.models.operations.BadWordFilterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla", "corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            BadWordFilterRequestBody req = new BadWordFilterRequestBody("illum") {{
                catalog = "vel";
                censorCharacter = "error";
            }};            

            BadWordFilterResponse res = sdk.dataTools.badWordFilter(req);

            if (res.badWordFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## emailValidate

Parse, validate and clean an email address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmailValidateRequest;
import org.openapis.openapi.models.operations.EmailValidateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "suscipit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            EmailValidateRequest req = new EmailValidateRequest("iure") {{
                fixTypos = false;
            }};            

            EmailValidateResponse res = sdk.dataTools.emailValidate(req);

            if (res.emailValidateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## phoneValidate

Parse, validate and get location information about a phone number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PhoneValidateRequest;
import org.openapis.openapi.models.operations.PhoneValidateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam", "debitis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            PhoneValidateRequest req = new PhoneValidateRequest("ipsa") {{
                countryCode = "VI";
                ip = "tempora";
            }};            

            PhoneValidateResponse res = sdk.dataTools.phoneValidate(req);

            if (res.phoneValidateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uaLookup

Parse, validate and get detailed user-agent information from a user agent string or from client hints

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UALookupRequest;
import org.openapis.openapi.models.operations.UALookupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit", "molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            UALookupRequest req = new UALookupRequest("minus") {{
                deviceBrand = "placeat";
                deviceModel = "voluptatum";
                uaMobile = "iusto";
                uaPlatform = "excepturi";
                uaPlatformVersion = "nisi";
                uaVersion = "recusandae";
            }};            

            UALookupResponse res = sdk.dataTools.uaLookup(req);

            if (res.uaLookupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
