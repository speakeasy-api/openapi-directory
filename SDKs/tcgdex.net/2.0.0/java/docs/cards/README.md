# cards

## Overview

Fetch cards globally

### Available Operations

* [cards](#cards) - fetch the list of cards
* [findPetsByTags](#findpetsbytags) - Finds Card by Global ID
* [getSetsSetCardLocalId](#getsetssetcardlocalid)

## cards

desc

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CardsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CardsResponse res = sdk.cards.cards();

            if (res.cardResumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findPetsByTags

Find a defined card thatusing its global id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindPetsByTagsRequest;
import org.openapis.openapi.models.operations.FindPetsByTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindPetsByTagsRequest req = new FindPetsByTagsRequest("corrupti");            

            FindPetsByTagsResponse res = sdk.cards.findPetsByTags(req);

            if (res.card != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetsSetCardLocalId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetsSetCardLocalIdRequest;
import org.openapis.openapi.models.operations.GetSetsSetCardLocalIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSetsSetCardLocalIdRequest req = new GetSetsSetCardLocalIdRequest("provident", "distinctio");            

            GetSetsSetCardLocalIdResponse res = sdk.cards.getSetsSetCardLocalId(req);

            if (res.card != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
