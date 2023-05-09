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
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateResponse;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OutputConfig;
import org.openapis.openapi.models.shared.TraceSinkInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsTraceSinksCreateRequest req = new CloudtraceProjectsTraceSinksCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                traceSinkInput = new TraceSinkInput() {{
                    name = "Ellis Mitchell";
                    outputConfig = new OutputConfig() {{
                        destination = "illum";
                    }};;
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "ipsa";
                uploadProtocol = "delectus";
            }};            

            CloudtraceProjectsTraceSinksCreateResponse res = sdk.projects.cloudtraceProjectsTraceSinksCreate(req, new CloudtraceProjectsTraceSinksCreateSecurity() {{
                option1 = new CloudtraceProjectsTraceSinksCreateSecurityOption1("tempora", "suscipit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.traceSink != null) {
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


### [projects](docs/projects/README.md)

* [cloudtraceProjectsTraceSinksCreate](docs/projects/README.md#cloudtraceprojectstracesinkscreate) - Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').
* [cloudtraceProjectsTraceSinksDelete](docs/projects/README.md#cloudtraceprojectstracesinksdelete) - Deletes a sink.
* [cloudtraceProjectsTraceSinksGet](docs/projects/README.md#cloudtraceprojectstracesinksget) - Get a trace sink by name under the parent resource (GCP project).
* [cloudtraceProjectsTraceSinksList](docs/projects/README.md#cloudtraceprojectstracesinkslist) - List all sinks for the parent resource (GCP project).
* [cloudtraceProjectsTraceSinksPatch](docs/projects/README.md#cloudtraceprojectstracesinkspatch) - Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
