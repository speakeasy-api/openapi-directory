# attributes

## Overview

Computed attributes management

### Available Operations

* [deleteAttributesComputedId](#deleteattributescomputedid) - Delete an Attribute
* [getAttributesComputed](#getattributescomputed) - Fetch a list of Attributes
* [postAttributesComputed](#postattributescomputed) - Create an Attribute
* [putAttributesComputedId](#putattributescomputedid) - Update an Attribute

## deleteAttributesComputedId

Delete an Attribute

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAttributesComputedIdRequest;
import org.openapis.openapi.models.operations.DeleteAttributesComputedIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam", "unde") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteAttributesComputedIdRequest req = new DeleteAttributesComputedIdRequest(857946L);            

            DeleteAttributesComputedIdResponse res = sdk.attributes.deleteAttributesComputedId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttributesComputed

Without params, it returns a list of Attributes the user has access to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAttributesComputedRequest;
import org.openapis.openapi.models.operations.GetAttributesComputedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "illum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAttributesComputedRequest req = new GetAttributesComputedRequest() {{
                all = false;
                deviceId = 423655L;
                groupId = 623564L;
                refresh = false;
                userId = 645894L;
            }};            

            GetAttributesComputedResponse res = sdk.attributes.getAttributesComputed(req);

            if (res.attributes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAttributesComputed

Create an Attribute

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAttributesComputedResponse;
import org.openapis.openapi.models.shared.Attribute;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit", "iure") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Attribute req = new Attribute() {{
                attribute = "magnam";
                description = "debitis";
                expression = "ipsa";
                id = 963663L;
                type = "tempora";
            }};            

            PostAttributesComputedResponse res = sdk.attributes.postAttributesComputed(req);

            if (res.attribute != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAttributesComputedId

Update an Attribute

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAttributesComputedIdRequest;
import org.openapis.openapi.models.operations.PutAttributesComputedIdResponse;
import org.openapis.openapi.models.shared.Attribute;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit", "molestiae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutAttributesComputedIdRequest req = new PutAttributesComputedIdRequest(                new Attribute() {{
                                attribute = "minus";
                                description = "placeat";
                                expression = "voluptatum";
                                id = 479977L;
                                type = "excepturi";
                            }};, 392785L);            

            PutAttributesComputedIdResponse res = sdk.attributes.putAttributesComputedId(req);

            if (res.attribute != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
