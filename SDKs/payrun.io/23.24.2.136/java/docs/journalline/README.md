# journalLine

### Available Operations

* [deleteJournalLineTag](#deletejournallinetag) - Delete journal line tag
* [getAllJournalLineTags](#getalljournallinetags) - Get all journal line tags
* [getAllJournalLinesWithTag](#getalljournallineswithtag) - Get links to tagged journal lines
* [getTagFromJournalLine](#gettagfromjournalline) - Get journal line tag
* [getTagsFromJournalLine](#gettagsfromjournalline) - Get tags from journal line
* [putJournalLineTag](#putjournallinetag) - Insert journal line tag

## deleteJournalLineTag

Deletes a tag from the journal line

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteJournalLineTagRequest;
import org.openapis.openapi.models.operations.DeleteJournalLineTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteJournalLineTagRequest req = new DeleteJournalLineTagRequest("nisi", "at", "vero", "est", "harum");            

            DeleteJournalLineTagResponse res = sdk.journalLine.deleteJournalLineTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllJournalLineTags

Gets all the journal line tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllJournalLineTagsRequest;
import org.openapis.openapi.models.operations.GetAllJournalLineTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllJournalLineTagsRequest req = new GetAllJournalLineTagsRequest("sequi", "doloribus", "repudiandae");            

            GetAllJournalLineTagsResponse res = sdk.journalLine.getAllJournalLineTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllJournalLinesWithTag

Gets the journal lines with the specified tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllJournalLinesWithTagRequest;
import org.openapis.openapi.models.operations.GetAllJournalLinesWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllJournalLinesWithTagRequest req = new GetAllJournalLinesWithTagRequest("optio", "occaecati", "nemo", "voluptate");            

            GetAllJournalLinesWithTagResponse res = sdk.journalLine.getAllJournalLinesWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagFromJournalLine

Gets a tag from the journal line

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagFromJournalLineRequest;
import org.openapis.openapi.models.operations.GetTagFromJournalLineResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagFromJournalLineRequest req = new GetTagFromJournalLineRequest("blanditiis", "officia", "voluptas", "numquam", "nemo");            

            GetTagFromJournalLineResponse res = sdk.journalLine.getTagFromJournalLine(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsFromJournalLine

Gets all tags from the journal line

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsFromJournalLineRequest;
import org.openapis.openapi.models.operations.GetTagsFromJournalLineResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsFromJournalLineRequest req = new GetTagsFromJournalLineRequest("quos", "eius", "aspernatur", "ducimus");            

            GetTagsFromJournalLineResponse res = sdk.journalLine.getTagsFromJournalLine(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putJournalLineTag

Inserts a tag on the journal line

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutJournalLineTagRequest;
import org.openapis.openapi.models.operations.PutJournalLineTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutJournalLineTagRequest req = new PutJournalLineTagRequest("nesciunt", "fuga", "laudantium", "incidunt", "quasi");            

            PutJournalLineTagResponse res = sdk.journalLine.putJournalLineTag(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
