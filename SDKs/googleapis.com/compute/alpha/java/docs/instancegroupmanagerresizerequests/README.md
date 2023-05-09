# instanceGroupManagerResizeRequests

### Available Operations

* [computeInstanceGroupManagerResizeRequestsCancel](#computeinstancegroupmanagerresizerequestscancel) - Cancels the specified resize request and removes it from the queue. Cancelled resize request does no longer wait for the resources to be provisioned. Cancel is only possible for requests that are accepted in the queue.
* [computeInstanceGroupManagerResizeRequestsDelete](#computeinstancegroupmanagerresizerequestsdelete) - Deletes the specified, inactive resize request. Requests that are still active cannot be deleted. Deleting request does not delete instances that were provisioned previously.
* [computeInstanceGroupManagerResizeRequestsGet](#computeinstancegroupmanagerresizerequestsget) - Returns all of the details about the specified resize request.
* [computeInstanceGroupManagerResizeRequestsInsert](#computeinstancegroupmanagerresizerequestsinsert) - Creates a new resize request that starts provisioning VMs immediately or queues VM creation.
* [computeInstanceGroupManagerResizeRequestsList](#computeinstancegroupmanagerresizerequestslist) - Retrieves a list of resize requests that are contained in the managed instance group.

## computeInstanceGroupManagerResizeRequestsCancel

Cancels the specified resize request and removes it from the queue. Cancelled resize request does no longer wait for the resources to be provisioned. Cancel is only possible for requests that are accepted in the queue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsCancelRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsCancelResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsCancelSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsCancelSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsCancelSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagerResizeRequestsCancelRequest req = new ComputeInstanceGroupManagerResizeRequestsCancelRequest("soluta", "exercitationem", "exercitationem", "similique") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "unde";
                alt = AltEnum.JSON;
                callback = "cum";
                fields = "aut";
                key = "expedita";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "non";
                requestId = "libero";
                uploadType = "expedita";
                uploadProtocol = "odio";
                userIp = "quaerat";
            }};            

            ComputeInstanceGroupManagerResizeRequestsCancelResponse res = sdk.instanceGroupManagerResizeRequests.computeInstanceGroupManagerResizeRequestsCancel(req, new ComputeInstanceGroupManagerResizeRequestsCancelSecurity() {{
                option1 = new ComputeInstanceGroupManagerResizeRequestsCancelSecurityOption1("aliquam", "laboriosam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceGroupManagerResizeRequestsDelete

Deletes the specified, inactive resize request. Requests that are still active cannot be deleted. Deleting request does not delete instances that were provisioned previously.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagerResizeRequestsDeleteRequest req = new ComputeInstanceGroupManagerResizeRequestsDeleteRequest("nisi", "labore", "accusamus", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.JSON;
                callback = "non";
                fields = "ipsum";
                key = "laudantium";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "facilis";
                requestId = "consequatur";
                uploadType = "assumenda";
                uploadProtocol = "architecto";
                userIp = "libero";
            }};            

            ComputeInstanceGroupManagerResizeRequestsDeleteResponse res = sdk.instanceGroupManagerResizeRequests.computeInstanceGroupManagerResizeRequestsDelete(req, new ComputeInstanceGroupManagerResizeRequestsDeleteSecurity() {{
                option1 = new ComputeInstanceGroupManagerResizeRequestsDeleteSecurityOption1("rerum", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceGroupManagerResizeRequestsGet

Returns all of the details about the specified resize request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsGetRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsGetResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsGetSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagerResizeRequestsGetRequest req = new ComputeInstanceGroupManagerResizeRequestsGetRequest("in", "fuga", "tenetur", "saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "soluta";
                fields = "voluptas";
                key = "delectus";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "occaecati";
                uploadProtocol = "labore";
                userIp = "ipsam";
            }};            

            ComputeInstanceGroupManagerResizeRequestsGetResponse res = sdk.instanceGroupManagerResizeRequests.computeInstanceGroupManagerResizeRequestsGet(req, new ComputeInstanceGroupManagerResizeRequestsGetSecurity() {{
                option1 = new ComputeInstanceGroupManagerResizeRequestsGetSecurityOption1("voluptate", "quod") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceGroupManagerResizeRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceGroupManagerResizeRequestsInsert

Creates a new resize request that starts provisioning VMs immediately or queues VM creation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsInsertRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsInsertResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.ErrorInfo;
import org.openapis.openapi.models.shared.Help;
import org.openapis.openapi.models.shared.HelpLink;
import org.openapis.openapi.models.shared.InstanceGroupManagerResizeRequest;
import org.openapis.openapi.models.shared.InstanceGroupManagerResizeRequestStateEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerResizeRequestStatus;
import org.openapis.openapi.models.shared.InstanceGroupManagerResizeRequestStatusError;
import org.openapis.openapi.models.shared.InstanceGroupManagerResizeRequestStatusErrorErrors;
import org.openapis.openapi.models.shared.InstanceGroupManagerResizeRequestStatusErrorErrorsErrorDetails;
import org.openapis.openapi.models.shared.LocalizedMessage;
import org.openapis.openapi.models.shared.QueuingPolicy;
import org.openapis.openapi.models.shared.QuotaExceededInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagerResizeRequestsInsertRequest req = new ComputeInstanceGroupManagerResizeRequestsInsertRequest("nihil", "recusandae", "illum") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagerResizeRequest = new InstanceGroupManagerResizeRequest() {{
                    count = 968272;
                    creationTimestamp = "consectetur";
                    description = "provident";
                    id = "possimus";
                    kind = "illo";
                    name = "Mandy Price";
                    queuingPolicy = new QueuingPolicy() {{
                        validUntilDuration = new Duration() {{
                            nanos = 395577;
                            seconds = "hic";
                        }};;
                        validUntilTime = "assumenda";
                    }};;
                    selfLink = "ab";
                    selfLinkWithId = "eum";
                    state = InstanceGroupManagerResizeRequestStateEnum.CANCELLED;
                    status = new InstanceGroupManagerResizeRequestStatus() {{
                        error = new InstanceGroupManagerResizeRequestStatusError() {{
                            errors = new org.openapis.openapi.models.shared.InstanceGroupManagerResizeRequestStatusErrorErrors[]{{
                                add(new InstanceGroupManagerResizeRequestStatusErrorErrors() {{
                                    code = "sequi";
                                    errorDetails = new org.openapis.openapi.models.shared.InstanceGroupManagerResizeRequestStatusErrorErrorsErrorDetails[]{{
                                        add(new InstanceGroupManagerResizeRequestStatusErrorErrorsErrorDetails() {{
                                            errorInfo = new ErrorInfo() {{
                                                domain = "dolor";
                                                metadatas = new java.util.HashMap<String, String>() {{
                                                    put("consectetur", "aperiam");
                                                    put("sed", "dolor");
                                                    put("quidem", "excepturi");
                                                    put("ipsum", "accusamus");
                                                }};
                                                reason = "consectetur";
                                            }};
                                            help = new Help() {{
                                                links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                    add(new HelpLink() {{
                                                        description = "sequi";
                                                        url = "et";
                                                    }}),
                                                    add(new HelpLink() {{
                                                        description = "aliquid";
                                                        url = "placeat";
                                                    }}),
                                                }};
                                            }};
                                            localizedMessage = new LocalizedMessage() {{
                                                locale = "sapiente";
                                                message = "corporis";
                                            }};
                                            quotaInfo = new QuotaExceededInfo() {{
                                                dimensions = new java.util.HashMap<String, String>() {{
                                                    put("soluta", "magnam");
                                                    put("sequi", "ab");
                                                }};
                                                limit = 2328.64;
                                                limitName = "ullam";
                                                metricName = "ullam";
                                            }};
                                        }}),
                                    }};
                                    location = "consectetur";
                                    message = "porro";
                                }}),
                                add(new InstanceGroupManagerResizeRequestStatusErrorErrors() {{
                                    code = "optio";
                                    errorDetails = new org.openapis.openapi.models.shared.InstanceGroupManagerResizeRequestStatusErrorErrorsErrorDetails[]{{
                                        add(new InstanceGroupManagerResizeRequestStatusErrorErrorsErrorDetails() {{
                                            errorInfo = new ErrorInfo() {{
                                                domain = "vitae";
                                                metadatas = new java.util.HashMap<String, String>() {{
                                                    put("fugit", "consequatur");
                                                    put("incidunt", "placeat");
                                                    put("labore", "culpa");
                                                    put("illum", "quod");
                                                }};
                                                reason = "minus";
                                            }};
                                            help = new Help() {{
                                                links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                    add(new HelpLink() {{
                                                        description = "occaecati";
                                                        url = "voluptatem";
                                                    }}),
                                                    add(new HelpLink() {{
                                                        description = "labore";
                                                        url = "maxime";
                                                    }}),
                                                    add(new HelpLink() {{
                                                        description = "ad";
                                                        url = "illo";
                                                    }}),
                                                }};
                                            }};
                                            localizedMessage = new LocalizedMessage() {{
                                                locale = "provident";
                                                message = "exercitationem";
                                            }};
                                            quotaInfo = new QuotaExceededInfo() {{
                                                dimensions = new java.util.HashMap<String, String>() {{
                                                    put("atque", "suscipit");
                                                    put("labore", "praesentium");
                                                    put("optio", "officiis");
                                                }};
                                                limit = 9741.32;
                                                limitName = "mollitia";
                                                metricName = "quam";
                                            }};
                                        }}),
                                        add(new InstanceGroupManagerResizeRequestStatusErrorErrorsErrorDetails() {{
                                            errorInfo = new ErrorInfo() {{
                                                domain = "deleniti";
                                                metadatas = new java.util.HashMap<String, String>() {{
                                                    put("ab", "voluptates");
                                                    put("eos", "facere");
                                                    put("nesciunt", "libero");
                                                    put("error", "perferendis");
                                                }};
                                                reason = "beatae";
                                            }};
                                            help = new Help() {{
                                                links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                    add(new HelpLink() {{
                                                        description = "voluptatem";
                                                        url = "sint";
                                                    }}),
                                                    add(new HelpLink() {{
                                                        description = "corporis";
                                                        url = "explicabo";
                                                    }}),
                                                    add(new HelpLink() {{
                                                        description = "distinctio";
                                                        url = "harum";
                                                    }}),
                                                    add(new HelpLink() {{
                                                        description = "quidem";
                                                        url = "tempora";
                                                    }}),
                                                }};
                                            }};
                                            localizedMessage = new LocalizedMessage() {{
                                                locale = "minus";
                                                message = "harum";
                                            }};
                                            quotaInfo = new QuotaExceededInfo() {{
                                                dimensions = new java.util.HashMap<String, String>() {{
                                                    put("inventore", "iste");
                                                    put("voluptatibus", "odio");
                                                    put("ab", "neque");
                                                }};
                                                limit = 8677.12;
                                                limitName = "excepturi";
                                                metricName = "enim";
                                            }};
                                        }}),
                                        add(new InstanceGroupManagerResizeRequestStatusErrorErrorsErrorDetails() {{
                                            errorInfo = new ErrorInfo() {{
                                                domain = "culpa";
                                                metadatas = new java.util.HashMap<String, String>() {{
                                                    put("sunt", "nisi");
                                                    put("molestias", "impedit");
                                                }};
                                                reason = "quasi";
                                            }};
                                            help = new Help() {{
                                                links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                    add(new HelpLink() {{
                                                        description = "corrupti";
                                                        url = "in";
                                                    }}),
                                                }};
                                            }};
                                            localizedMessage = new LocalizedMessage() {{
                                                locale = "quia";
                                                message = "odio";
                                            }};
                                            quotaInfo = new QuotaExceededInfo() {{
                                                dimensions = new java.util.HashMap<String, String>() {{
                                                    put("eveniet", "vitae");
                                                }};
                                                limit = 5548.5;
                                                limitName = "eveniet";
                                                metricName = "officia";
                                            }};
                                        }}),
                                        add(new InstanceGroupManagerResizeRequestStatusErrorErrorsErrorDetails() {{
                                            errorInfo = new ErrorInfo() {{
                                                domain = "perspiciatis";
                                                metadatas = new java.util.HashMap<String, String>() {{
                                                    put("non", "veniam");
                                                    put("illo", "illo");
                                                    put("deleniti", "quisquam");
                                                    put("fugit", "optio");
                                                }};
                                                reason = "quo";
                                            }};
                                            help = new Help() {{
                                                links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                    add(new HelpLink() {{
                                                        description = "ducimus";
                                                        url = "tenetur";
                                                    }}),
                                                    add(new HelpLink() {{
                                                        description = "libero";
                                                        url = "repellendus";
                                                    }}),
                                                }};
                                            }};
                                            localizedMessage = new LocalizedMessage() {{
                                                locale = "aliquid";
                                                message = "alias";
                                            }};
                                            quotaInfo = new QuotaExceededInfo() {{
                                                dimensions = new java.util.HashMap<String, String>() {{
                                                    put("beatae", "fuga");
                                                    put("quam", "molestias");
                                                    put("eveniet", "quibusdam");
                                                }};
                                                limit = 1762.55;
                                                limitName = "cupiditate";
                                                metricName = "est";
                                            }};
                                        }}),
                                    }};
                                    location = "occaecati";
                                    message = "pariatur";
                                }}),
                                add(new InstanceGroupManagerResizeRequestStatusErrorErrors() {{
                                    code = "quaerat";
                                    errorDetails = new org.openapis.openapi.models.shared.InstanceGroupManagerResizeRequestStatusErrorErrorsErrorDetails[]{{
                                        add(new InstanceGroupManagerResizeRequestStatusErrorErrorsErrorDetails() {{
                                            errorInfo = new ErrorInfo() {{
                                                domain = "itaque";
                                                metadatas = new java.util.HashMap<String, String>() {{
                                                    put("totam", "ullam");
                                                    put("nisi", "nemo");
                                                    put("atque", "optio");
                                                }};
                                                reason = "fugit";
                                            }};
                                            help = new Help() {{
                                                links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                    add(new HelpLink() {{
                                                        description = "modi";
                                                        url = "delectus";
                                                    }}),
                                                    add(new HelpLink() {{
                                                        description = "aliquam";
                                                        url = "optio";
                                                    }}),
                                                    add(new HelpLink() {{
                                                        description = "laudantium";
                                                        url = "quas";
                                                    }}),
                                                    add(new HelpLink() {{
                                                        description = "quidem";
                                                        url = "voluptates";
                                                    }}),
                                                }};
                                            }};
                                            localizedMessage = new LocalizedMessage() {{
                                                locale = "labore";
                                                message = "hic";
                                            }};
                                            quotaInfo = new QuotaExceededInfo() {{
                                                dimensions = new java.util.HashMap<String, String>() {{
                                                    put("nihil", "quas");
                                                }};
                                                limit = 9483.82;
                                                limitName = "fugiat";
                                                metricName = "unde";
                                            }};
                                        }}),
                                        add(new InstanceGroupManagerResizeRequestStatusErrorErrorsErrorDetails() {{
                                            errorInfo = new ErrorInfo() {{
                                                domain = "autem";
                                                metadatas = new java.util.HashMap<String, String>() {{
                                                    put("molestiae", "accusamus");
                                                    put("labore", "autem");
                                                }};
                                                reason = "placeat";
                                            }};
                                            help = new Help() {{
                                                links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                    add(new HelpLink() {{
                                                        description = "dicta";
                                                        url = "possimus";
                                                    }}),
                                                    add(new HelpLink() {{
                                                        description = "dolores";
                                                        url = "voluptatibus";
                                                    }}),
                                                }};
                                            }};
                                            localizedMessage = new LocalizedMessage() {{
                                                locale = "repellat";
                                                message = "id";
                                            }};
                                            quotaInfo = new QuotaExceededInfo() {{
                                                dimensions = new java.util.HashMap<String, String>() {{
                                                    put("ad", "corrupti");
                                                    put("temporibus", "minus");
                                                    put("voluptates", "repellat");
                                                }};
                                                limit = 1490.64;
                                                limitName = "ratione";
                                                metricName = "quaerat";
                                            }};
                                        }}),
                                        add(new InstanceGroupManagerResizeRequestStatusErrorErrorsErrorDetails() {{
                                            errorInfo = new ErrorInfo() {{
                                                domain = "minus";
                                                metadatas = new java.util.HashMap<String, String>() {{
                                                    put("nostrum", "veniam");
                                                    put("tempore", "natus");
                                                    put("facilis", "assumenda");
                                                }};
                                                reason = "repellat";
                                            }};
                                            help = new Help() {{
                                                links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                    add(new HelpLink() {{
                                                        description = "vitae";
                                                        url = "error";
                                                    }}),
                                                }};
                                            }};
                                            localizedMessage = new LocalizedMessage() {{
                                                locale = "alias";
                                                message = "id";
                                            }};
                                            quotaInfo = new QuotaExceededInfo() {{
                                                dimensions = new java.util.HashMap<String, String>() {{
                                                    put("vero", "excepturi");
                                                    put("expedita", "harum");
                                                    put("quisquam", "eligendi");
                                                }};
                                                limit = 1655.2;
                                                limitName = "dignissimos";
                                                metricName = "aspernatur";
                                            }};
                                        }}),
                                        add(new InstanceGroupManagerResizeRequestStatusErrorErrorsErrorDetails() {{
                                            errorInfo = new ErrorInfo() {{
                                                domain = "ullam";
                                                metadatas = new java.util.HashMap<String, String>() {{
                                                    put("impedit", "magni");
                                                    put("suscipit", "ipsam");
                                                    put("error", "quisquam");
                                                    put("debitis", "ipsa");
                                                }};
                                                reason = "quia";
                                            }};
                                            help = new Help() {{
                                                links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                    add(new HelpLink() {{
                                                        description = "consequatur";
                                                        url = "corrupti";
                                                    }}),
                                                    add(new HelpLink() {{
                                                        description = "numquam";
                                                        url = "alias";
                                                    }}),
                                                    add(new HelpLink() {{
                                                        description = "quod";
                                                        url = "nisi";
                                                    }}),
                                                }};
                                            }};
                                            localizedMessage = new LocalizedMessage() {{
                                                locale = "excepturi";
                                                message = "eveniet";
                                            }};
                                            quotaInfo = new QuotaExceededInfo() {{
                                                dimensions = new java.util.HashMap<String, String>() {{
                                                    put("vel", "corrupti");
                                                    put("voluptates", "modi");
                                                    put("enim", "cumque");
                                                    put("blanditiis", "animi");
                                                }};
                                                limit = 8430.36;
                                                limitName = "possimus";
                                                metricName = "maiores";
                                            }};
                                        }}),
                                    }};
                                    location = "est";
                                    message = "optio";
                                }}),
                            }};
                        }};;
                        queuingPolicy = new QueuingPolicy() {{
                            validUntilDuration = new Duration() {{
                                nanos = 451949;
                                seconds = "nostrum";
                            }};;
                            validUntilTime = "incidunt";
                        }};;
                    }};;
                    zone = "enim";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.JSON;
                callback = "quaerat";
                fields = "nesciunt";
                key = "aperiam";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "eum";
                requestId = "commodi";
                uploadType = "amet";
                uploadProtocol = "quia";
                userIp = "facilis";
            }};            

            ComputeInstanceGroupManagerResizeRequestsInsertResponse res = sdk.instanceGroupManagerResizeRequests.computeInstanceGroupManagerResizeRequestsInsert(req, new ComputeInstanceGroupManagerResizeRequestsInsertSecurity() {{
                option1 = new ComputeInstanceGroupManagerResizeRequestsInsertSecurityOption1("magnam", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceGroupManagerResizeRequestsList

Retrieves a list of resize requests that are contained in the managed instance group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsListRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsListResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsListSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagerResizeRequestsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagerResizeRequestsListRequest req = new ComputeInstanceGroupManagerResizeRequestsListRequest("provident", "inventore", "sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "vitae";
                fields = "nobis";
                filter = "adipisci";
                key = "itaque";
                maxResults = 598914L;
                oauthToken = "beatae";
                orderBy = "eveniet";
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "maiores";
                returnPartialSuccess = false;
                uploadType = "voluptate";
                uploadProtocol = "libero";
                userIp = "quod";
            }};            

            ComputeInstanceGroupManagerResizeRequestsListResponse res = sdk.instanceGroupManagerResizeRequests.computeInstanceGroupManagerResizeRequestsList(req, new ComputeInstanceGroupManagerResizeRequestsListSecurity() {{
                option1 = new ComputeInstanceGroupManagerResizeRequestsListSecurityOption1("ea", "error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceGroupManagerResizeRequestsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
