# tags

## Overview

Tags are custom labels that can be associated with transactions
on Up. Within the Up application, tags provide additional insight
into spending. For example, you could have a "Take Away" tag that
you apply to purchases from food delivery services. The Up API
allows you to manage the tags associated with transactions. Each
transaction may have up to 6 tags.

Tags are identified by their labels, which are unique strings,
so the tag "Holiday" has also the `id` `"Holiday"`.


### Available Operations

* [deleteTransactionsTransactionIdRelationshipsTags](#deletetransactionstransactionidrelationshipstags) - Remove tags from transaction
* [getTags](#gettags) - List tags
* [postTransactionsTransactionIdRelationshipsTags](#posttransactionstransactionidrelationshipstags) - Add tags to transaction

## deleteTransactionsTransactionIdRelationshipsTags

Disassociates one or more tags from a specific transaction. Tags that are
not associated are silently ignored. An HTTP `204` is returned on
success. The associated tags, along with this request URL, are also
exposed via the `tags` relationship on the transaction resource returned
from `/transactions/{id}`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTransactionsTransactionIdRelationshipsTagsRequest;
import org.openapis.openapi.models.operations.DeleteTransactionsTransactionIdRelationshipsTagsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagInputResourceIdentifier;
import org.openapis.openapi.models.shared.UpdateTransactionTagsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteTransactionsTransactionIdRelationshipsTagsRequest req = new DeleteTransactionsTransactionIdRelationshipsTagsRequest("molestiae") {{
                updateTransactionTagsRequest = new UpdateTransactionTagsRequest(                new org.openapis.openapi.models.shared.TagInputResourceIdentifier[]{{
                                    add(new TagInputResourceIdentifier("deleniti", "hic") {{
                                        id = "c8796ed1-51a0-45df-82dd-f7cc78ca1ba9";
                                        type = "fugit";
                                    }}),
                                    add(new TagInputResourceIdentifier("reiciendis", "est") {{
                                        id = "c816742c-b739-4205-9293-96fea7596eb1";
                                        type = "ipsa";
                                    }}),
                                    add(new TagInputResourceIdentifier("quis", "vitae") {{
                                        id = "aa2352c5-9559-407a-bf1a-3a2fa9467739";
                                        type = "quia";
                                    }}),
                                    add(new TagInputResourceIdentifier("corporis", "dolore") {{
                                        id = "aa52c3f5-ad01-49da-9ffe-78f097b0074f";
                                        type = "dicta";
                                    }}),
                                }});;
            }};            

            DeleteTransactionsTransactionIdRelationshipsTagsResponse res = sdk.tags.deleteTransactionsTransactionIdRelationshipsTags(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTags

Retrieve a list of all tags currently in use. The returned list is
[paginated](#pagination) and can be scrolled by following the `next`
and `prev` links where present. Results are ordered lexicographically.
The `transactions` relationship for each tag exposes a link
to get the transactions with the given tag.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsRequest;
import org.openapis.openapi.models.operations.GetTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetTagsRequest req = new GetTagsRequest() {{
                pageSize = 118727L;
            }};            

            GetTagsResponse res = sdk.tags.getTags(req);

            if (res.listTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTransactionsTransactionIdRelationshipsTags

Associates one or more tags with a specific transaction. No more than 6
tags may be present on any single transaction. Duplicate tags are
silently ignored. An HTTP `204` is returned on success. The associated
tags, along with this request URL, are also exposed via the `tags`
relationship on the transaction resource returned from
`/transactions/{id}`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTransactionsTransactionIdRelationshipsTagsRequest;
import org.openapis.openapi.models.operations.PostTransactionsTransactionIdRelationshipsTagsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagInputResourceIdentifier;
import org.openapis.openapi.models.shared.UpdateTransactionTagsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PostTransactionsTransactionIdRelationshipsTagsRequest req = new PostTransactionsTransactionIdRelationshipsTagsRequest("enim") {{
                updateTransactionTagsRequest = new UpdateTransactionTagsRequest(                new org.openapis.openapi.models.shared.TagInputResourceIdentifier[]{{
                                    add(new TagInputResourceIdentifier("perferendis", "magni") {{
                                        id = "6e13b99d-488e-41e9-9e45-0ad2abd44269";
                                        type = "quos";
                                    }}),
                                    add(new TagInputResourceIdentifier("facere", "ea") {{
                                        id = "d502a94b-b4f6-43c9-a9e9-a3efa77dfb14";
                                        type = "cumque";
                                    }}),
                                    add(new TagInputResourceIdentifier("eum", "vero") {{
                                        id = "6ae395ef-b9ba-488f-ba66-997074ba4469";
                                        type = "nobis";
                                    }}),
                                    add(new TagInputResourceIdentifier("expedita", "nihil") {{
                                        id = "21419598-90af-4a56-be25-16fe4c8b711e";
                                        type = "ullam";
                                    }}),
                                }});;
            }};            

            PostTransactionsTransactionIdRelationshipsTagsResponse res = sdk.tags.postTransactionsTransactionIdRelationshipsTags(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
