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
import org.openapis.openapi.models.operations.PostCompileRequest;
import org.openapis.openapi.models.operations.PostCompileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCompileRequest req = new PostCompileRequest() {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("provident", "distinctio");
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                }};
                explain = "illum";
                instrument = false;
                metrics = false;
                pretty = false;
            }};            

            PostCompileResponse res = sdk.compileAPI.postCompile(req);

            if (res.postCompile200ApplicationJSONObject != null) {
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


### [compileAPI](docs/compileapi/README.md)

* [postCompile](docs/compileapi/README.md#postcompile) - Compile

### [configAPI](docs/configapi/README.md)

* [getConfig](docs/configapi/README.md#getconfig) - Get configurations

### [dataAPI](docs/dataapi/README.md)

* [deleteDocument](docs/dataapi/README.md#deletedocument) - Delete a document
* [getDocument](docs/dataapi/README.md#getdocument) - Get a document
* [getDocumentWithPath](docs/dataapi/README.md#getdocumentwithpath) - Get a document (with input)
* [getDocumentWithWebHook](docs/dataapi/README.md#getdocumentwithwebhook) - Get a document (with webhook)
* [patchDocument](docs/dataapi/README.md#patchdocument) - Update a document
* [putDocument](docs/dataapi/README.md#putdocument) - Create or overwrite a document

### [healthAPI](docs/healthapi/README.md)

* [getHealth](docs/healthapi/README.md#gethealth) - Health

### [policyAPI](docs/policyapi/README.md)

* [deletePolicyModule](docs/policyapi/README.md#deletepolicymodule) - Delete a policy module
* [getPolicies](docs/policyapi/README.md#getpolicies) - List policies
* [getPolicyModule](docs/policyapi/README.md#getpolicymodule) - Get a policy module
* [putPolicyModule](docs/policyapi/README.md#putpolicymodule) - Create or update a policy module

### [queryAPI](docs/queryapi/README.md)

* [getQuery](docs/queryapi/README.md#getquery) - Execute an ad-hoc query (simple)
* [postQuery](docs/queryapi/README.md#postquery) - Execute an ad-hoc query (complex)
* [postSimpleQuery](docs/queryapi/README.md#postsimplequery) - Execute a simple query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
