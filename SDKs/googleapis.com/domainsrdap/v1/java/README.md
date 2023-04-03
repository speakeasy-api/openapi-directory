# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DomainsrdapAutnumGetRequest;
import org.openapis.openapi.models.operations.DomainsrdapAutnumGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsrdapAutnumGetRequest req = new DomainsrdapAutnumGetRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                autnumId = "quibusdam";
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }}            

            DomainsrdapAutnumGetResponse res = sdk.autnum.domainsrdapAutnumGet(req);

            if (res.rdapResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### autnum

* `domainsrdapAutnumGet` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### domain

* `domainsrdapDomainGet` - Look up RDAP information for a domain by name.

### entity

* `domainsrdapEntityGet` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### ip

* `domainsrdapIpGet` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### nameserver

* `domainsrdapNameserverGet` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### v1

* `domainsrdapGetDomains` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* `domainsrdapGetEntities` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* `domainsrdapGetHelp` - Get help information for the RDAP API, including links to documentation.
* `domainsrdapGetIp` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* `domainsrdapGetNameservers` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
