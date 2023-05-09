# projects

### Available Operations

* [eventarcProjectsLocationsChannelConnectionsCreate](#eventarcprojectslocationschannelconnectionscreate) - Create a new ChannelConnection in a particular project and location.
* [eventarcProjectsLocationsChannelConnectionsList](#eventarcprojectslocationschannelconnectionslist) - List channel connections.
* [eventarcProjectsLocationsChannelsCreate](#eventarcprojectslocationschannelscreate) - Create a new channel in a particular project and location.
* [eventarcProjectsLocationsChannelsList](#eventarcprojectslocationschannelslist) - List channels.
* [eventarcProjectsLocationsList](#eventarcprojectslocationslist) - Lists information about the supported locations for this service.
* [eventarcProjectsLocationsOperationsCancel](#eventarcprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [eventarcProjectsLocationsOperationsList](#eventarcprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [eventarcProjectsLocationsProvidersList](#eventarcprojectslocationsproviderslist) - List providers.
* [eventarcProjectsLocationsTriggersCreate](#eventarcprojectslocationstriggerscreate) - Create a new trigger in a particular project and location.
* [eventarcProjectsLocationsTriggersDelete](#eventarcprojectslocationstriggersdelete) - Delete a single trigger.
* [eventarcProjectsLocationsTriggersGet](#eventarcprojectslocationstriggersget) - Get a single trigger.
* [eventarcProjectsLocationsTriggersGetIamPolicy](#eventarcprojectslocationstriggersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [eventarcProjectsLocationsTriggersList](#eventarcprojectslocationstriggerslist) - List triggers.
* [eventarcProjectsLocationsTriggersPatch](#eventarcprojectslocationstriggerspatch) - Update a single trigger.
* [eventarcProjectsLocationsTriggersSetIamPolicy](#eventarcprojectslocationstriggerssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [eventarcProjectsLocationsTriggersTestIamPermissions](#eventarcprojectslocationstriggerstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## eventarcProjectsLocationsChannelConnectionsCreate

Create a new ChannelConnection in a particular project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsCreateRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsCreateResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelConnectionInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsChannelConnectionsCreateRequest req = new EventarcProjectsLocationsChannelConnectionsCreateRequest("placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                channelConnectionInput = new ChannelConnectionInput() {{
                    activationToken = "iusto";
                    channel = "excepturi";
                    name = "Mrs. Sophie Smith MD";
                }};;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                channelConnectionId = "sapiente";
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
            }};            

            EventarcProjectsLocationsChannelConnectionsCreateResponse res = sdk.projects.eventarcProjectsLocationsChannelConnectionsCreate(req, new EventarcProjectsLocationsChannelConnectionsCreateSecurity("quod", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsChannelConnectionsList

List channel connections.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsListRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsListResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsChannelConnectionsListRequest req = new EventarcProjectsLocationsChannelConnectionsListRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "nam";
                key = "officia";
                oauthToken = "occaecati";
                pageSize = 143353L;
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "optio";
                uploadProtocol = "totam";
            }};            

            EventarcProjectsLocationsChannelConnectionsListResponse res = sdk.projects.eventarcProjectsLocationsChannelConnectionsList(req, new EventarcProjectsLocationsChannelConnectionsListSecurity("beatae", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listChannelConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsChannelsCreate

Create a new channel in a particular project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelsCreateRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelsCreateResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsChannelsCreateRequest req = new EventarcProjectsLocationsChannelsCreateRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                channelInput = new ChannelInput() {{
                    cryptoKeyName = "qui";
                    name = "Jonathon Klocko";
                    provider = "aspernatur";
                }};;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "natus";
                channelId = "sed";
                fields = "iste";
                key = "dolor";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "hic";
                uploadProtocol = "saepe";
                validateOnly = false;
            }};            

            EventarcProjectsLocationsChannelsCreateResponse res = sdk.projects.eventarcProjectsLocationsChannelsCreate(req, new EventarcProjectsLocationsChannelsCreateSecurity("fuga", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsChannelsList

List channels.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelsListRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelsListResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsChannelsListRequest req = new EventarcProjectsLocationsChannelsListRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "architecto";
                key = "ipsa";
                oauthToken = "reiciendis";
                orderBy = "est";
                pageSize = 653140L;
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "dolorem";
                uploadProtocol = "corporis";
            }};            

            EventarcProjectsLocationsChannelsListResponse res = sdk.projects.eventarcProjectsLocationsChannelsList(req, new EventarcProjectsLocationsChannelsListSecurity("explicabo", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsListRequest req = new EventarcProjectsLocationsListRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "accusantium";
                filter = "iure";
                key = "culpa";
                oauthToken = "doloribus";
                pageSize = 958950L;
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "dolorem";
                uploadProtocol = "culpa";
            }};            

            EventarcProjectsLocationsListResponse res = sdk.projects.eventarcProjectsLocationsList(req, new EventarcProjectsLocationsListSecurity("consequuntur", "repellat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsOperationsCancelRequest req = new EventarcProjectsLocationsOperationsCancelRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("commodi", "quam");
                    put("molestiae", "velit");
                }};
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "vitae";
                key = "laborum";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "odit";
                uploadProtocol = "quo";
            }};            

            EventarcProjectsLocationsOperationsCancelResponse res = sdk.projects.eventarcProjectsLocationsOperationsCancel(req, new EventarcProjectsLocationsOperationsCancelSecurity("sequi", "tenetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## eventarcProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsOperationsListRequest req = new EventarcProjectsLocationsOperationsListRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "quasi";
                fields = "error";
                filter = "temporibus";
                key = "laborum";
                oauthToken = "quasi";
                pageSize = 971945L;
                pageToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "nihil";
                uploadProtocol = "praesentium";
            }};            

            EventarcProjectsLocationsOperationsListResponse res = sdk.projects.eventarcProjectsLocationsOperationsList(req, new EventarcProjectsLocationsOperationsListSecurity("voluptatibus", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsProvidersList

List providers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsProvidersListRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsProvidersListResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsProvidersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsProvidersListRequest req = new EventarcProjectsLocationsProvidersListRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "reprehenderit";
                filter = "ut";
                key = "maiores";
                oauthToken = "dicta";
                orderBy = "corporis";
                pageSize = 296140L;
                pageToken = "iusto";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "harum";
                uploadProtocol = "enim";
            }};            

            EventarcProjectsLocationsProvidersListResponse res = sdk.projects.eventarcProjectsLocationsProvidersList(req, new EventarcProjectsLocationsProvidersListSecurity("accusamus", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listProvidersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsTriggersCreate

Create a new trigger in a particular project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersCreateRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersCreateResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudRun;
import org.openapis.openapi.models.shared.Destination;
import org.openapis.openapi.models.shared.EventFilter;
import org.openapis.openapi.models.shared.Gke;
import org.openapis.openapi.models.shared.PubsubInput;
import org.openapis.openapi.models.shared.TransportInput;
import org.openapis.openapi.models.shared.TriggerInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersCreateRequest req = new EventarcProjectsLocationsTriggersCreateRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                triggerInput = new TriggerInput() {{
                    channel = "ipsum";
                    destination = new Destination() {{
                        cloudFunction = "quidem";
                        cloudRun = new CloudRun() {{
                            path = "molestias";
                            region = "excepturi";
                            service = "pariatur";
                        }};;
                        gke = new Gke() {{
                            cluster = "modi";
                            location = "praesentium";
                            namespace = "rem";
                            path = "voluptates";
                            service = "quasi";
                        }};;
                        workflow = "repudiandae";
                    }};;
                    eventDataContentType = "sint";
                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                        add(new EventFilter() {{
                            attribute = "itaque";
                            operator = "incidunt";
                            value = "enim";
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("est", "quibusdam");
                    }};
                    name = "Joanna Rau";
                    serviceAccount = "modi";
                    transport = new TransportInput() {{
                        pubsub = new PubsubInput() {{
                            topic = "qui";
                        }};;
                    }};;
                }};;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "perferendis";
                key = "magni";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "ipsam";
                triggerId = "alias";
                uploadType = "fugit";
                uploadProtocol = "dolorum";
                validateOnly = false;
            }};            

            EventarcProjectsLocationsTriggersCreateResponse res = sdk.projects.eventarcProjectsLocationsTriggersCreate(req, new EventarcProjectsLocationsTriggersCreateSecurity("excepturi", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsTriggersDelete

Delete a single trigger.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersDeleteRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersDeleteResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersDeleteRequest req = new EventarcProjectsLocationsTriggersDeleteRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                allowMissing = false;
                alt = AltEnum.PROTO;
                callback = "eum";
                etag = "non";
                fields = "eligendi";
                key = "sint";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "necessitatibus";
                uploadProtocol = "sint";
                validateOnly = false;
            }};            

            EventarcProjectsLocationsTriggersDeleteResponse res = sdk.projects.eventarcProjectsLocationsTriggersDelete(req, new EventarcProjectsLocationsTriggersDeleteSecurity("officia", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsTriggersGet

Get a single trigger.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersGetRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersGetResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersGetRequest req = new EventarcProjectsLocationsTriggersGetRequest("debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "illum";
                key = "maiores";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "magnam";
                uploadProtocol = "cumque";
            }};            

            EventarcProjectsLocationsTriggersGetResponse res = sdk.projects.eventarcProjectsLocationsTriggersGet(req, new EventarcProjectsLocationsTriggersGetSecurity("facere", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.trigger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsTriggersGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersGetIamPolicyRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersGetIamPolicyResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersGetIamPolicyRequest req = new EventarcProjectsLocationsTriggersGetIamPolicyRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "enim";
                key = "accusamus";
                oauthToken = "delectus";
                optionsRequestedPolicyVersion = 692532L;
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "nam";
                uploadProtocol = "id";
            }};            

            EventarcProjectsLocationsTriggersGetIamPolicyResponse res = sdk.projects.eventarcProjectsLocationsTriggersGetIamPolicy(req, new EventarcProjectsLocationsTriggersGetIamPolicySecurity("blanditiis", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsTriggersList

List triggers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersListRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersListResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersListRequest req = new EventarcProjectsLocationsTriggersListRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "natus";
                filter = "omnis";
                key = "molestiae";
                oauthToken = "perferendis";
                orderBy = "nihil";
                pageSize = 301575L;
                pageToken = "distinctio";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "labore";
                uploadProtocol = "labore";
            }};            

            EventarcProjectsLocationsTriggersListResponse res = sdk.projects.eventarcProjectsLocationsTriggersList(req, new EventarcProjectsLocationsTriggersListSecurity("suscipit", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTriggersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsTriggersPatch

Update a single trigger.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersPatchRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersPatchResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudRun;
import org.openapis.openapi.models.shared.Destination;
import org.openapis.openapi.models.shared.EventFilter;
import org.openapis.openapi.models.shared.Gke;
import org.openapis.openapi.models.shared.PubsubInput;
import org.openapis.openapi.models.shared.TransportInput;
import org.openapis.openapi.models.shared.TriggerInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersPatchRequest req = new EventarcProjectsLocationsTriggersPatchRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                triggerInput = new TriggerInput() {{
                    channel = "vero";
                    destination = new Destination() {{
                        cloudFunction = "aspernatur";
                        cloudRun = new CloudRun() {{
                            path = "architecto";
                            region = "magnam";
                            service = "et";
                        }};;
                        gke = new Gke() {{
                            cluster = "excepturi";
                            location = "ullam";
                            namespace = "provident";
                            path = "quos";
                            service = "sint";
                        }};;
                        workflow = "accusantium";
                    }};;
                    eventDataContentType = "mollitia";
                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                        add(new EventFilter() {{
                            attribute = "mollitia";
                            operator = "ad";
                            value = "eum";
                        }}),
                        add(new EventFilter() {{
                            attribute = "dolor";
                            operator = "necessitatibus";
                            value = "odit";
                        }}),
                        add(new EventFilter() {{
                            attribute = "nemo";
                            operator = "quasi";
                            value = "iure";
                        }}),
                        add(new EventFilter() {{
                            attribute = "doloribus";
                            operator = "debitis";
                            value = "eius";
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("deleniti", "facilis");
                        put("in", "architecto");
                        put("architecto", "repudiandae");
                        put("ullam", "expedita");
                    }};
                    name = "Kristie Spencer";
                    serviceAccount = "pariatur";
                    transport = new TransportInput() {{
                        pubsub = new PubsubInput() {{
                            topic = "accusantium";
                        }};;
                    }};;
                }};;
                accessToken = "consequuntur";
                allowMissing = false;
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "magni";
                key = "sunt";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "illum";
                updateMask = "pariatur";
                uploadType = "maxime";
                uploadProtocol = "ea";
                validateOnly = false;
            }};            

            EventarcProjectsLocationsTriggersPatchResponse res = sdk.projects.eventarcProjectsLocationsTriggersPatch(req, new EventarcProjectsLocationsTriggersPatchSecurity("excepturi", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsTriggersSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersSetIamPolicyRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersSetIamPolicyResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersSetIamPolicyRequest req = new EventarcProjectsLocationsTriggersSetIamPolicyRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsam"),
                                            add("voluptate"),
                                            add("autem"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("pariatur"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("perferendis"),
                                            add("fugiat"),
                                            add("amet"),
                                            add("aut"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("hic"),
                                            add("libero"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "dolores";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "totam";
                                    expression = "dignissimos";
                                    location = "eaque";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("eos"),
                                }};
                                role = "perferendis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "dolores";
                                    expression = "minus";
                                    location = "quam";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("nostrum"),
                                    add("hic"),
                                    add("recusandae"),
                                    add("omnis"),
                                }};
                                role = "facilis";
                            }}),
                        }};
                        etag = "perspiciatis";
                        version = 31838;
                    }};;
                    updateMask = "porro";
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "eaque";
                key = "occaecati";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "asperiores";
                uploadProtocol = "earum";
            }};            

            EventarcProjectsLocationsTriggersSetIamPolicyResponse res = sdk.projects.eventarcProjectsLocationsTriggersSetIamPolicy(req, new EventarcProjectsLocationsTriggersSetIamPolicySecurity("modi", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsTriggersTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersTestIamPermissionsRequest req = new EventarcProjectsLocationsTriggersTestIamPermissionsRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("provident"),
                        add("nobis"),
                        add("libero"),
                        add("delectus"),
                    }};
                }};;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "dolorem";
                key = "dolorem";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "ipsum";
                uploadProtocol = "hic";
            }};            

            EventarcProjectsLocationsTriggersTestIamPermissionsResponse res = sdk.projects.eventarcProjectsLocationsTriggersTestIamPermissions(req, new EventarcProjectsLocationsTriggersTestIamPermissionsSecurity("excepturi", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
