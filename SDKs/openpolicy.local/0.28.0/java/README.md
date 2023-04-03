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
            }}            

            PostCompileResponse res = sdk.compileAPI.postCompile(req);

            if (res.postCompile200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### compileAPI

* `postCompile` - Compile

### configAPI

* `getConfig` - Get configurations

### dataAPI

* `deleteDocument` - Delete a document
* `getDocument` - Get a document
* `getDocumentWithPath` - Get a document (with input)
* `getDocumentWithWebHook` - Get a document (with webhook)
* `patchDocument` - Update a document
* `putDocument` - Create or overwrite a document

### healthAPI

* `getHealth` - Health

### policyAPI

* `deletePolicyModule` - Delete a policy module
* `getPolicies` - List policies
* `getPolicyModule` - Get a policy module
* `putPolicyModule` - Create or update a policy module

### queryAPI

* `getQuery` - Execute an ad-hoc query (simple)
* `postQuery` - Execute an ad-hoc query (complex)
* `postSimpleQuery` - Execute a simple query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
