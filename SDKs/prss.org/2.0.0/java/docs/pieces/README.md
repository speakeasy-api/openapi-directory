# pieces

## Overview

Pieces define specific story or song level metadata within an episode and segment. For example, an 18 minute audio segment may be composed of multiple 2 or 3 minute pieces.

### Available Operations

* [deleteApiV2PiecesId](#deleteapiv2piecesid) - Deletes the piece with the given ID.
* [getApiV2Pieces](#getapiv2pieces) - Returns the pieces matching the query parameters.
* [getApiV2PiecesId](#getapiv2piecesid) - Returns the piece matching the given ID.
* [postApiV2Pieces](#postapiv2pieces) - Create a new piece.

## deleteApiV2PiecesId

Deletes the piece with the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV2PiecesIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV2PiecesIdResponse;
import org.openapis.openapi.models.operations.DeleteApiV2PiecesIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV2PiecesIdRequest req = new DeleteApiV2PiecesIdRequest(324141L);            

            DeleteApiV2PiecesIdResponse res = sdk.pieces.deleteApiV2PiecesId(req, new DeleteApiV2PiecesIdSecurity("natus") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2Pieces

Returns the pieces matching the query parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2PiecesRequest;
import org.openapis.openapi.models.operations.GetApiV2PiecesResponse;
import org.openapis.openapi.models.operations.GetApiV2PiecesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2PiecesRequest req = new GetApiV2PiecesRequest(149675L);            

            GetApiV2PiecesResponse res = sdk.pieces.getApiV2Pieces(req, new GetApiV2PiecesSecurity("iste") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pieces != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2PiecesId

Returns the piece matching the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2PiecesIdRequest;
import org.openapis.openapi.models.operations.GetApiV2PiecesIdResponse;
import org.openapis.openapi.models.operations.GetApiV2PiecesIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2PiecesIdRequest req = new GetApiV2PiecesIdRequest(222321L);            

            GetApiV2PiecesIdResponse res = sdk.pieces.getApiV2PiecesId(req, new GetApiV2PiecesIdSecurity("natus") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.piece != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV2Pieces

Create a new piece.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV2PiecesResponse;
import org.openapis.openapi.models.operations.PostApiV2PiecesSecurity;
import org.openapis.openapi.models.shared.PieceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PieceInput req = new PieceInput(386489L, 943749, 902599, "fuga") {{
                contributor = "in";
                description = "corporis";
                fullDescription = "iste";
                imageCdDriveUri = "iure";
                imageFileName = "saepe";
                imageFileSize = 697631L;
                imageOriginalFileName = "architecto";
                segmentNumber = 60225;
            }};            

            PostApiV2PiecesResponse res = sdk.pieces.postApiV2Pieces(req, new PostApiV2PiecesSecurity("reiciendis") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.piece != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
