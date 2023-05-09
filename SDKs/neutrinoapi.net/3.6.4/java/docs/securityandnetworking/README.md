# securityAndNetworking

### Available Operations

* [domainLookup](#domainlookup) - Domain Lookup
* [emailVerify](#emailverify) - Email Verify
* [hostReputation](#hostreputation) - Host Reputation
* [ipBlocklist](#ipblocklist) - IP Blocklist
* [ipBlocklistDownload](#ipblocklistdownload) - IP Blocklist Download
* [ipProbe](#ipprobe) - IP Probe

## domainLookup

Retrieve domain name details and detect potentially malicious or dangerous domains

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainLookupRequest;
import org.openapis.openapi.models.operations.DomainLookupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam", "id") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            DomainLookupRequest req = new DomainLookupRequest("possimus") {{
                live = false;
            }};            

            DomainLookupResponse res = sdk.securityAndNetworking.domainLookup(req);

            if (res.domainLookupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## emailVerify

SMTP based email address verification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmailVerifyRequest;
import org.openapis.openapi.models.operations.EmailVerifyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "quasi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            EmailVerifyRequest req = new EmailVerifyRequest("error") {{
                fixTypos = false;
            }};            

            EmailVerifyResponse res = sdk.securityAndNetworking.emailVerify(req);

            if (res.emailVerifyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## hostReputation

Check the reputation of an IP address, domain name or URL against a comprehensive list of blacklists and blocklists

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HostReputationRequest;
import org.openapis.openapi.models.operations.HostReputationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus", "laborum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            HostReputationRequest req = new HostReputationRequest("quasi") {{
                listRating = 971945;
                zones = "voluptatibus";
            }};            

            HostReputationResponse res = sdk.securityAndNetworking.hostReputation(req);

            if (res.hostReputationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ipBlocklist

The IP Blocklist API will detect potentially malicious or dangerous IP addresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IPBlocklistRequest;
import org.openapis.openapi.models.operations.IPBlocklistResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero", "nihil") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            IPBlocklistRequest req = new IPBlocklistRequest("praesentium") {{
                vpnLookup = false;
            }};            

            IPBlocklistResponse res = sdk.securityAndNetworking.ipBlocklist(req);

            if (res.ipBlocklistResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ipBlocklistDownload

This API is a direct feed to our IP blocklist data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IPBlocklistDownloadRequest;
import org.openapis.openapi.models.operations.IPBlocklistDownloadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus", "ipsa") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            IPBlocklistDownloadRequest req = new IPBlocklistDownloadRequest() {{
                cidr = false;
                format = "omnis";
                includeVpn = false;
                ip6 = false;
            }};            

            IPBlocklistDownloadResponse res = sdk.securityAndNetworking.ipBlocklistDownload(req);

            if (res.ipBlocklistDownload200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ipProbe

Execute a realtime network probe against an IPv4 or IPv6 address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IPProbeRequest;
import org.openapis.openapi.models.operations.IPProbeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate", "cum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            IPProbeRequest req = new IPProbeRequest("perferendis");            

            IPProbeResponse res = sdk.securityAndNetworking.ipProbe(req);

            if (res.ipProbeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
