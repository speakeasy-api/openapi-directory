# institutions

### Available Operations

* [deleteInstitutionsId](#deleteinstitutionsid) - Delete institution
* [getInstitutionsId](#getinstitutionsid) - Get institution
* [getUsersIdInstitutions](#getusersidinstitutions) - List institutions in user
* [postUsersIdInstitutions](#postusersidinstitutions) - Create institution in user
* [putInstitutionsId](#putinstitutionsid) - Update institution

## deleteInstitutionsId

Deletes an institution and all data within. Alternatively, another institution can be provided to merge the data into to avoid losing it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInstitutionsIdRequest;
import org.openapis.openapi.models.operations.DeleteInstitutionsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteInstitutionsIdRequest req = new DeleteInstitutionsIdRequest(662527L) {{
                mergeIntoInstitutionId = 820994L;
            }};            

            DeleteInstitutionsIdResponse res = sdk.institutions.deleteInstitutionsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstitutionsId

Gets an institution by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstitutionsIdRequest;
import org.openapis.openapi.models.operations.GetInstitutionsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstitutionsIdRequest req = new GetInstitutionsIdRequest(97101L);            

            GetInstitutionsIdResponse res = sdk.institutions.getInstitutionsId(req);

            if (res.institution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdInstitutions

Lists all the institutions belonging to the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdInstitutionsRequest;
import org.openapis.openapi.models.operations.GetUsersIdInstitutionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersIdInstitutionsRequest req = new GetUsersIdInstitutionsRequest(837945L);            

            GetUsersIdInstitutionsResponse res = sdk.institutions.getUsersIdInstitutions(req);

            if (res.institutions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdInstitutions

Creates an institution belonging to a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdInstitutionsRequest;
import org.openapis.openapi.models.operations.PostUsersIdInstitutionsRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdInstitutionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostUsersIdInstitutionsRequest req = new PostUsersIdInstitutionsRequest(96098L) {{
                requestBody = new PostUsersIdInstitutionsRequestBody("NZD", "Bank of Foo");;
            }};            

            PostUsersIdInstitutionsResponse res = sdk.institutions.postUsersIdInstitutions(req);

            if (res.institution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putInstitutionsId

Updates the title and currency code for an institution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutInstitutionsIdRequest;
import org.openapis.openapi.models.operations.PutInstitutionsIdRequestBody;
import org.openapis.openapi.models.operations.PutInstitutionsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutInstitutionsIdRequest req = new PutInstitutionsIdRequest(976460L) {{
                requestBody = new PutInstitutionsIdRequestBody() {{
                    currencyCode = "NZD";
                    title = "Bank of Foo";
                }};;
            }};            

            PutInstitutionsIdResponse res = sdk.institutions.putInstitutionsId(req);

            if (res.institution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
