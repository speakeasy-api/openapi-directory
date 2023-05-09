# telephony

### Available Operations

* [hlrLookup](#hlrlookup) - HLR Lookup
* [phonePlayback](#phoneplayback) - Phone Playback
* [phoneVerify](#phoneverify) - Phone Verify
* [smsVerify](#smsverify) - SMS Verify
* [verifySecurityCode](#verifysecuritycode) - Verify Security Code

## hlrLookup

Connect to the global mobile cellular network and retrieve the status of a mobile device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HLRLookupRequest;
import org.openapis.openapi.models.operations.HLRLookupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque", "reprehenderit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            HLRLookupRequest req = new HLRLookupRequest("ut") {{
                countryCode = "WS";
            }};            

            HLRLookupResponse res = sdk.telephony.hlrLookup(req);

            if (res.hlrLookupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## phonePlayback

Make an automated call to any valid phone number and playback an audio message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PhonePlaybackRequestBody;
import org.openapis.openapi.models.operations.PhonePlaybackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta", "corporis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            PhonePlaybackRequestBody req = new PhonePlaybackRequestBody("dolore", "iusto") {{
                limit = 118727;
                limitTtl = 688661;
            }};            

            PhonePlaybackResponse res = sdk.telephony.phonePlayback(req);

            if (res.phonePlaybackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## phoneVerify

Make an automated call to any valid phone number and playback a unique security code

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PhoneVerifyRequestBody;
import org.openapis.openapi.models.operations.PhoneVerifyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim", "accusamus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            PhoneVerifyRequestBody req = new PhoneVerifyRequestBody("commodi") {{
                codeLength = 918236;
                countryCode = "AZ";
                languageCode = "ipsum";
                limit = 692472;
                limitTtl = 565189;
                playbackDelay = 566602;
                securityCode = 865103;
            }};            

            PhoneVerifyResponse res = sdk.telephony.phoneVerify(req);

            if (res.phoneVerifyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## smsVerify

Send a unique security code to any mobile device via SMS

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SMSVerifyRequestBody;
import org.openapis.openapi.models.operations.SMSVerifyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi", "praesentium") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            SMSVerifyRequestBody req = new SMSVerifyRequestBody("rem") {{
                codeLength = 916723;
                countryCode = "BI";
                languageCode = "repudiandae";
                limit = 575947;
                limitTtl = 83112;
                securityCode = 929297;
            }};            

            SMSVerifyResponse res = sdk.telephony.smsVerify(req);

            if (res.smsVerifyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## verifySecurityCode

Check if a security code sent via SMS Verify or Phone Verify is valid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifySecurityCodeRequest;
import org.openapis.openapi.models.operations.VerifySecurityCodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt", "enim") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            VerifySecurityCodeRequest req = new VerifySecurityCodeRequest("consequatur") {{
                limitBy = "est";
            }};            

            VerifySecurityCodeResponse res = sdk.telephony.verifySecurityCode(req);

            if (res.verifySecurityCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
