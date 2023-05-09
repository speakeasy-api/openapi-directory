# attachments

### Available Operations

* [deleteAttachmentsId](#deleteattachmentsid) - Delete attachment
* [deleteTransactionsTransactionIdAttachmentsAttachmentId](#deletetransactionstransactionidattachmentsattachmentid) - Unassigns attachment in transaction
* [getAttachmentsId](#getattachmentsid) - Get attachment
* [getTransactionsIdAttachments](#gettransactionsidattachments) - List attachments in transaction
* [getUsersIdAttachments](#getusersidattachments) - Lists attachments in user
* [postTransactionsIdAttachments](#posttransactionsidattachments) - Assigns attachment to transaction
* [postUsersIdAttachments](#postusersidattachments) - Create attachment in user
* [putAttachmentsId](#putattachmentsid) - Update attachment

## deleteAttachmentsId

Deletes a particular attachment by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAttachmentsIdRequest;
import org.openapis.openapi.models.operations.DeleteAttachmentsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAttachmentsIdRequest req = new DeleteAttachmentsIdRequest(264555L);            

            DeleteAttachmentsIdResponse res = sdk.attachments.deleteAttachmentsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTransactionsTransactionIdAttachmentsAttachmentId

Unassigns a particular attachment by its ID from the transaction ID. This does not delete the attachment, it only removes its association from the transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTransactionsTransactionIdAttachmentsAttachmentIdRequest;
import org.openapis.openapi.models.operations.DeleteTransactionsTransactionIdAttachmentsAttachmentIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTransactionsTransactionIdAttachmentsAttachmentIdRequest req = new DeleteTransactionsTransactionIdAttachmentsAttachmentIdRequest(774234L, 736918L);            

            DeleteTransactionsTransactionIdAttachmentsAttachmentIdResponse res = sdk.attachments.deleteTransactionsTransactionIdAttachmentsAttachmentId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttachmentsId

Gets a particular attachment by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAttachmentsIdRequest;
import org.openapis.openapi.models.operations.GetAttachmentsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAttachmentsIdRequest req = new GetAttachmentsIdRequest(216550L);            

            GetAttachmentsIdResponse res = sdk.attachments.getAttachmentsId(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionsIdAttachments

Lists attachments belonging to a transaction by their ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsIdAttachmentsRequest;
import org.openapis.openapi.models.operations.GetTransactionsIdAttachmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransactionsIdAttachmentsRequest req = new GetTransactionsIdAttachmentsRequest(135218L);            

            GetTransactionsIdAttachmentsResponse res = sdk.attachments.getTransactionsIdAttachments(req);

            if (res.attachments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdAttachments

Lists attachments belonging to a user by their ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdAttachmentsRequest;
import org.openapis.openapi.models.operations.GetUsersIdAttachmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersIdAttachmentsRequest req = new GetUsersIdAttachmentsRequest(324141L) {{
                unassigned = 617636L;
            }};            

            GetUsersIdAttachmentsResponse res = sdk.attachments.getUsersIdAttachments(req);

            if (res.attachments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTransactionsIdAttachments

Assigns an attachment to the transaction by their ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTransactionsIdAttachmentsRequest;
import org.openapis.openapi.models.operations.PostTransactionsIdAttachmentsRequestBody;
import org.openapis.openapi.models.operations.PostTransactionsIdAttachmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostTransactionsIdAttachmentsRequest req = new PostTransactionsIdAttachmentsRequest(612096L) {{
                requestBody = new PostTransactionsIdAttachmentsRequestBody() {{
                    attachmentId = 1438154L;
                }};;
            }};            

            PostTransactionsIdAttachmentsResponse res = sdk.attachments.postTransactionsIdAttachments(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdAttachments

Creates an attachment belonging to the user by their ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdAttachmentsRequest;
import org.openapis.openapi.models.operations.PostUsersIdAttachmentsRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdAttachmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostUsersIdAttachmentsRequest req = new PostUsersIdAttachmentsRequest(616934L) {{
                requestBody = new PostUsersIdAttachmentsRequestBody() {{
                    fileData = "laboriosam";
                    fileName = "taxi.png";
                    title = "Invoice for taxi";
                }};;
            }};            

            PostUsersIdAttachmentsResponse res = sdk.attachments.postUsersIdAttachments(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAttachmentsId

Updates the title of the attachment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAttachmentsIdRequest;
import org.openapis.openapi.models.operations.PutAttachmentsIdRequestBody;
import org.openapis.openapi.models.operations.PutAttachmentsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAttachmentsIdRequest req = new PutAttachmentsIdRequest(902599L) {{
                requestBody = new PutAttachmentsIdRequestBody() {{
                    title = "Invoice for taxi";
                }};;
            }};            

            PutAttachmentsIdResponse res = sdk.attachments.putAttachmentsId(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
