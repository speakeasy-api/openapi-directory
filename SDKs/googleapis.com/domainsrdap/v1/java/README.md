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

            DomainsrdapAutnumGetRequest req = new DomainsrdapAutnumGetRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            DomainsrdapAutnumGetResponse res = sdk.autnum.domainsrdapAutnumGet(req);

            if (res.rdapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [autnum](docs/autnum/README.md)

* [domainsrdapAutnumGet](docs/autnum/README.md#domainsrdapautnumget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### [domain](docs/domain/README.md)

* [domainsrdapDomainGet](docs/domain/README.md#domainsrdapdomainget) - Look up RDAP information for a domain by name.

### [entity](docs/entity/README.md)

* [domainsrdapEntityGet](docs/entity/README.md#domainsrdapentityget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### [ip](docs/ip/README.md)

* [domainsrdapIpGet](docs/ip/README.md#domainsrdapipget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### [nameserver](docs/nameserver/README.md)

* [domainsrdapNameserverGet](docs/nameserver/README.md#domainsrdapnameserverget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### [v1](docs/v1/README.md)

* [domainsrdapGetDomains](docs/v1/README.md#domainsrdapgetdomains) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* [domainsrdapGetEntities](docs/v1/README.md#domainsrdapgetentities) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* [domainsrdapGetHelp](docs/v1/README.md#domainsrdapgethelp) - Get help information for the RDAP API, including links to documentation.
* [domainsrdapGetIp](docs/v1/README.md#domainsrdapgetip) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* [domainsrdapGetNameservers](docs/v1/README.md#domainsrdapgetnameservers) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
