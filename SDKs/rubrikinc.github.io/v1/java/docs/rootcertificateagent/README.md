# rootCertificateAgent

### Available Operations

* [markAgentSecondaryCertificate](#markagentsecondarycertificate) - Mark a certificate to be added to agents
* [queryAgentSecondaryCertificate](#queryagentsecondarycertificate) - Get all potential agent secondary cluster certificates
* [unmarkAgentSecondaryCertificate](#unmarkagentsecondarycertificate) - Unmark a certificate that was previously marked

## markAgentSecondaryCertificate

Mark a secondary cluster certificate to be asynchronously synced to all Rubrik Backup Service instances for which this cluster is the primary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MarkAgentSecondaryCertificateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("minima", "excepturi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.. req = "accusantium"            

            MarkAgentSecondaryCertificateResponse res = sdk.rootCertificateAgent.markAgentSecondaryCertificate(req);

            if (res.agentSecondaryCertificateInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryAgentSecondaryCertificate

Get all certificates that have been added to the cluster and qualify to be secondary cluster certificates for the Rubrik Backup Service. This call retrieves any certificates that are detected to be Rubrik cluster certificates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryAgentSecondaryCertificateRequest;
import org.openapis.openapi.models.operations.QueryAgentSecondaryCertificateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("iure", "culpa") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryAgentSecondaryCertificateRequest req = new QueryAgentSecondaryCertificateRequest() {{
                isAgentEnabled = false;
            }};            

            QueryAgentSecondaryCertificateResponse res = sdk.rootCertificateAgent.queryAgentSecondaryCertificate(req);

            if (res.agentSecondaryCertificateInfoListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unmarkAgentSecondaryCertificate

Unmark a previously marked secondary cluster certificate to be asynchronously removed from all Rubrik Backup Service instances for which this cluster is the primary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnmarkAgentSecondaryCertificateRequest;
import org.openapis.openapi.models.operations.UnmarkAgentSecondaryCertificateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("doloribus", "sapiente") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UnmarkAgentSecondaryCertificateRequest req = new UnmarkAgentSecondaryCertificateRequest("architecto");            

            UnmarkAgentSecondaryCertificateResponse res = sdk.rootCertificateAgent.unmarkAgentSecondaryCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
