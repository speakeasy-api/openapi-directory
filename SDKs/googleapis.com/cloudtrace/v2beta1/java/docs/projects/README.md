# projects

### Available Operations

* [cloudtraceProjectsTraceSinksCreate](#cloudtraceprojectstracesinkscreate) - Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').
* [cloudtraceProjectsTraceSinksDelete](#cloudtraceprojectstracesinksdelete) - Deletes a sink.
* [cloudtraceProjectsTraceSinksGet](#cloudtraceprojectstracesinksget) - Get a trace sink by name under the parent resource (GCP project).
* [cloudtraceProjectsTraceSinksList](#cloudtraceprojectstracesinkslist) - List all sinks for the parent resource (GCP project).
* [cloudtraceProjectsTraceSinksPatch](#cloudtraceprojectstracesinkspatch) - Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).

## cloudtraceProjectsTraceSinksCreate

Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').

### Example Usage

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

            CloudtraceProjectsTraceSinksCreateRequest req = new CloudtraceProjectsTraceSinksCreateRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                traceSinkInput = new TraceSinkInput() {{
                    name = "Ken Kshlerin";
                    outputConfig = new OutputConfig() {{
                        destination = "recusandae";
                    }};;
                }};;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "veritatis";
                key = "deserunt";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "repellendus";
                uploadProtocol = "sapiente";
            }};            

            CloudtraceProjectsTraceSinksCreateResponse res = sdk.projects.cloudtraceProjectsTraceSinksCreate(req, new CloudtraceProjectsTraceSinksCreateSecurity() {{
                option1 = new CloudtraceProjectsTraceSinksCreateSecurityOption1("quo", "odit") {{
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

## cloudtraceProjectsTraceSinksDelete

Deletes a sink.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksDeleteRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksDeleteResponse;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksDeleteSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksDeleteSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsTraceSinksDeleteRequest req = new CloudtraceProjectsTraceSinksDeleteRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "quod";
                key = "esse";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "dolorum";
                uploadProtocol = "dicta";
            }};            

            CloudtraceProjectsTraceSinksDeleteResponse res = sdk.projects.cloudtraceProjectsTraceSinksDelete(req, new CloudtraceProjectsTraceSinksDeleteSecurity() {{
                option1 = new CloudtraceProjectsTraceSinksDeleteSecurityOption1("nam", "officia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtraceProjectsTraceSinksGet

Get a trace sink by name under the parent resource (GCP project).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksGetRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksGetResponse;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksGetSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsTraceSinksGetRequest req = new CloudtraceProjectsTraceSinksGetRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "optio";
                fields = "totam";
                key = "beatae";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            CloudtraceProjectsTraceSinksGetResponse res = sdk.projects.cloudtraceProjectsTraceSinksGet(req, new CloudtraceProjectsTraceSinksGetSecurity() {{
                option1 = new CloudtraceProjectsTraceSinksGetSecurityOption1("impedit", "cum") {{
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

## cloudtraceProjectsTraceSinksList

List all sinks for the parent resource (GCP project).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksListRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksListResponse;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksListSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksListSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsTraceSinksListRequest req = new CloudtraceProjectsTraceSinksListRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "ad";
                key = "natus";
                oauthToken = "sed";
                pageSize = 612096L;
                pageToken = "dolor";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "laboriosam";
                uploadProtocol = "hic";
            }};            

            CloudtraceProjectsTraceSinksListResponse res = sdk.projects.cloudtraceProjectsTraceSinksList(req, new CloudtraceProjectsTraceSinksListSecurity() {{
                option1 = new CloudtraceProjectsTraceSinksListSecurityOption1("saepe", "fuga") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTraceSinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtraceProjectsTraceSinksPatch

Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksPatchRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksPatchResponse;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksPatchSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksPatchSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OutputConfig;
import org.openapis.openapi.models.shared.TraceSinkInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsTraceSinksPatchRequest req = new CloudtraceProjectsTraceSinksPatchRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                traceSinkInput = new TraceSinkInput() {{
                    name = "Brad Turcotte Jr.";
                    outputConfig = new OutputConfig() {{
                        destination = "reiciendis";
                    }};;
                }};;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "dolores";
                key = "dolorem";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "explicabo";
                updateMask = "nobis";
                uploadType = "enim";
                uploadProtocol = "omnis";
            }};            

            CloudtraceProjectsTraceSinksPatchResponse res = sdk.projects.cloudtraceProjectsTraceSinksPatch(req, new CloudtraceProjectsTraceSinksPatchSecurity() {{
                option1 = new CloudtraceProjectsTraceSinksPatchSecurityOption1("nemo", "minima") {{
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
