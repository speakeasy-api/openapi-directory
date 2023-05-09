# viewOnlyLinks

### Available Operations

* [viewOnlyLinksNodeList](#viewonlylinksnodelist) - List all nodes
* [viewOnlyLinksRead](#viewonlylinksread) - Retrieve a view only link

## viewOnlyLinksNodeList


The list of nodes which this view only link gives read-only access to.
#### Permissions
Only project administrators may retrieve the nodes of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
#### Returns
Returns a JSON object containing `data` and `links` keys.
The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ViewOnlyLinksNodeListRequest;
import org.openapis.openapi.models.operations.ViewOnlyLinksNodeListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ViewOnlyLinksNodeListRequest req = new ViewOnlyLinksNodeListRequest("iusto");            

            ViewOnlyLinksNodeListResponse res = sdk.viewOnlyLinks.viewOnlyLinksNodeList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## viewOnlyLinksRead

Retrieves details about a specific view only link.
#### Permissions
Only project administrators may retrieve the details of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ViewOnlyLinksReadRequest;
import org.openapis.openapi.models.operations.ViewOnlyLinksReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ViewOnlyLinksReadRequest req = new ViewOnlyLinksReadRequest("voluptate");            

            ViewOnlyLinksReadResponse res = sdk.viewOnlyLinks.viewOnlyLinksRead(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
