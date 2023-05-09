# cis

### Available Operations

* [deleteCisInstruction](#deletecisinstruction) - Delete a CIS instruction
* [deleteCisInstructionTag](#deletecisinstructiontag) - Delete CIS instruction tag
* [deleteCisLine](#deletecisline) - Delete a CIS line
* [deleteCisLineTag](#deletecislinetag) - Delete CIS line tag
* [deleteCisLineType](#deletecislinetype) - Delete an CIS line type
* [deleteCisLineTypeTag](#deletecislinetypetag) - Delete CIS line type tag
* [deleteCisTransaction](#deletecistransaction) - Delete the CIS transaction
* [deleteSubContractorTag](#deletesubcontractortag) - Delete sub contractor tag
* [getAllCisInstructionTags](#getallcisinstructiontags) - Get all CIS instruction tags
* [getAllCisLineTags](#getallcislinetags) - Get all CIS line tags
* [getAllCisLineTypeTags](#getallcislinetypetags) - Get all CIS line type tags
* [getAllSubContractorTags](#getallsubcontractortags) - Get all sub contractor tags
* [getCisInstructionFromSubContractor](#getcisinstructionfromsubcontractor) - Get CIS instruction from sub contractor
* [getCisInstructionsFromSubContractor](#getcisinstructionsfromsubcontractor) - Get CIS instructions from sub contractor.
* [getCisInstructionsWithTag](#getcisinstructionswithtag) - Get CIS instructions with tag
* [getCisLineFromSubContractor](#getcislinefromsubcontractor) - Get CIS line from sub contractor
* [getCisLineTypeFromEmployer](#getcislinetypefromemployer) - Get CIS line type from employer
* [getCisLineTypesFromEmployer](#getcislinetypesfromemployer) - Get CIS line types from employer.
* [getCisLineTypesWithTag](#getcislinetypeswithtag) - Get CIS line types with tag
* [getCisLinesFromSubContractor](#getcislinesfromsubcontractor) - Get CIS lines from sub contractor.
* [getCisLinesWithTag](#getcislineswithtag) - Get CIS lines with tag
* [getCisTransactionFromEmployer](#getcistransactionfromemployer) - Get the CIS transaction
* [getCisTransactionsFromEmployer](#getcistransactionsfromemployer) - Get all CIS transactions for the employer
* [getSubContractorsWithTag](#getsubcontractorswithtag) - Get sub contractors with tag
* [getTagFromCisInstruction](#gettagfromcisinstruction) - Get CIS instruction tag
* [getTagFromCisLine](#gettagfromcisline) - Get CIS line tag
* [getTagFromCisLineType](#gettagfromcislinetype) - Get CIS line type tag
* [getTagFromSubContractor](#gettagfromsubcontractor) - Get sub contractor tag
* [getTagFromSubContractorRevision](#gettagfromsubcontractorrevision) - Get sub contractor revision tag
* [getTagsFromCisInstruction](#gettagsfromcisinstruction) - Get all tags from the CIS instruction
* [getTagsFromCisLine](#gettagsfromcisline) - Get all tags from the CIS line
* [getTagsFromCisLineType](#gettagsfromcislinetype) - Get all tags from the CIS line type
* [getTagsFromSubContractor](#gettagsfromsubcontractor) - Get all tags from the sub contractor
* [getTagsFromSubContractorRevision](#gettagsfromsubcontractorrevision) - Get all sub contractor revision tags
* [patchCisInstruction](#patchcisinstruction) - Patches the CIS instruction
* [postCisInstructionIntoSubContractor](#postcisinstructionintosubcontractor) - Create a new CIS instruction
* [postCisLineTypeIntoEmployer](#postcislinetypeintoemployer) - Create a new CIS line type
* [putCisInstructionIntoSubContractor](#putcisinstructionintosubcontractor) - Updates the CIS instruction
* [putCisInstructionTag](#putcisinstructiontag) - Insert CIS instruction tag
* [putCisLineTag](#putcislinetag) - Insert CIS line tag
* [putCisLineTypeIntoEmployer](#putcislinetypeintoemployer) - Updates the CIS line type
* [putCisLineTypeTag](#putcislinetypetag) - Insert CIS line type tag
* [putSubContractorTag](#putsubcontractortag) - Insert sub contractor tag

## deleteCisInstruction

Delete the specified CIS instruction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCisInstructionRequest;
import org.openapis.openapi.models.operations.DeleteCisInstructionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCisInstructionRequest req = new DeleteCisInstructionRequest("corporis", "iste", "iure", "saepe", "quidem");            

            DeleteCisInstructionResponse res = sdk.cis.deleteCisInstruction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCisInstructionTag

Deletes a tag from the CIS instruction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCisInstructionTagRequest;
import org.openapis.openapi.models.operations.DeleteCisInstructionTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCisInstructionTagRequest req = new DeleteCisInstructionTagRequest("architecto", "ipsa", "reiciendis", "est", "mollitia", "laborum");            

            DeleteCisInstructionTagResponse res = sdk.cis.deleteCisInstructionTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCisLine

Delete the specified CIS line

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCisLineRequest;
import org.openapis.openapi.models.operations.DeleteCisLineResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCisLineRequest req = new DeleteCisLineRequest("dolores", "dolorem", "corporis", "explicabo", "nobis");            

            DeleteCisLineResponse res = sdk.cis.deleteCisLine(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCisLineTag

Deletes a tag from the CIS line

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCisLineTagRequest;
import org.openapis.openapi.models.operations.DeleteCisLineTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCisLineTagRequest req = new DeleteCisLineTagRequest("enim", "omnis", "nemo", "minima", "excepturi", "accusantium");            

            DeleteCisLineTagResponse res = sdk.cis.deleteCisLineTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCisLineType

Delete the specified CIS line type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCisLineTypeRequest;
import org.openapis.openapi.models.operations.DeleteCisLineTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCisLineTypeRequest req = new DeleteCisLineTypeRequest("iure", "culpa", "doloribus", "sapiente");            

            DeleteCisLineTypeResponse res = sdk.cis.deleteCisLineType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCisLineTypeTag

Deletes a tag from the CIS line type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCisLineTypeTagRequest;
import org.openapis.openapi.models.operations.DeleteCisLineTypeTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCisLineTypeTagRequest req = new DeleteCisLineTypeTagRequest("architecto", "mollitia", "dolorem", "culpa", "consequuntur");            

            DeleteCisLineTypeTagResponse res = sdk.cis.deleteCisLineTypeTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCisTransaction

Deletes the specified CIS transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCisTransactionRequest;
import org.openapis.openapi.models.operations.DeleteCisTransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCisTransactionRequest req = new DeleteCisTransactionRequest("repellat", "mollitia", "occaecati", "numquam");            

            DeleteCisTransactionResponse res = sdk.cis.deleteCisTransaction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubContractorTag

Deletes a tag from the sub contractor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubContractorTagRequest;
import org.openapis.openapi.models.operations.DeleteSubContractorTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSubContractorTagRequest req = new DeleteSubContractorTagRequest("commodi", "quam", "molestiae", "velit", "error");            

            DeleteSubContractorTagResponse res = sdk.cis.deleteSubContractorTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllCisInstructionTags

Gets all the CIS instruction tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllCisInstructionTagsRequest;
import org.openapis.openapi.models.operations.GetAllCisInstructionTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllCisInstructionTagsRequest req = new GetAllCisInstructionTagsRequest("quia", "quis", "vitae", "laborum");            

            GetAllCisInstructionTagsResponse res = sdk.cis.getAllCisInstructionTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllCisLineTags

Gets all the CIS line tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllCisLineTagsRequest;
import org.openapis.openapi.models.operations.GetAllCisLineTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllCisLineTagsRequest req = new GetAllCisLineTagsRequest("animi", "enim", "odit", "quo");            

            GetAllCisLineTagsResponse res = sdk.cis.getAllCisLineTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllCisLineTypeTags

Gets all the CIS line type tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllCisLineTypeTagsRequest;
import org.openapis.openapi.models.operations.GetAllCisLineTypeTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllCisLineTypeTagsRequest req = new GetAllCisLineTypeTagsRequest("sequi", "tenetur", "ipsam");            

            GetAllCisLineTypeTagsResponse res = sdk.cis.getAllCisLineTypeTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllSubContractorTags

Gets all the sub contractor tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllSubContractorTagsRequest;
import org.openapis.openapi.models.operations.GetAllSubContractorTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllSubContractorTagsRequest req = new GetAllSubContractorTagsRequest("id", "possimus", "aut");            

            GetAllSubContractorTagsResponse res = sdk.cis.getAllSubContractorTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisInstructionFromSubContractor

Gets the specified CIS instruction from sub contractor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisInstructionFromSubContractorRequest;
import org.openapis.openapi.models.operations.GetCisInstructionFromSubContractorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisInstructionFromSubContractorRequest req = new GetCisInstructionFromSubContractorRequest("quasi", "error", "temporibus", "laborum", "quasi");            

            GetCisInstructionFromSubContractorResponse res = sdk.cis.getCisInstructionFromSubContractor(req);

            if (res.cisInstruction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisInstructionsFromSubContractor

Get links to all CIS instructions for the specified sub contractor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisInstructionsFromSubContractorRequest;
import org.openapis.openapi.models.operations.GetCisInstructionsFromSubContractorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisInstructionsFromSubContractorRequest req = new GetCisInstructionsFromSubContractorRequest("reiciendis", "voluptatibus", "vero", "nihil");            

            GetCisInstructionsFromSubContractorResponse res = sdk.cis.getCisInstructionsFromSubContractor(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisInstructionsWithTag

Gets the CIS instruction with the tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisInstructionsWithTagRequest;
import org.openapis.openapi.models.operations.GetCisInstructionsWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisInstructionsWithTagRequest req = new GetCisInstructionsWithTagRequest("praesentium", "voluptatibus", "ipsa", "omnis", "voluptate");            

            GetCisInstructionsWithTagResponse res = sdk.cis.getCisInstructionsWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisLineFromSubContractor

Gets the specified CIS line from sub contractor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisLineFromSubContractorRequest;
import org.openapis.openapi.models.operations.GetCisLineFromSubContractorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisLineFromSubContractorRequest req = new GetCisLineFromSubContractorRequest("cum", "perferendis", "doloremque", "reprehenderit", "ut");            

            GetCisLineFromSubContractorResponse res = sdk.cis.getCisLineFromSubContractor(req);

            if (res.cisLine != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisLineTypeFromEmployer

Gets the specified CIS line type from employer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisLineTypeFromEmployerRequest;
import org.openapis.openapi.models.operations.GetCisLineTypeFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisLineTypeFromEmployerRequest req = new GetCisLineTypeFromEmployerRequest("maiores", "dicta", "corporis", "dolore");            

            GetCisLineTypeFromEmployerResponse res = sdk.cis.getCisLineTypeFromEmployer(req);

            if (res.cisLineType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisLineTypesFromEmployer

Get links to all CIS line types for the specified employer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisLineTypesFromEmployerRequest;
import org.openapis.openapi.models.operations.GetCisLineTypesFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisLineTypesFromEmployerRequest req = new GetCisLineTypesFromEmployerRequest("iusto", "dicta", "harum");            

            GetCisLineTypesFromEmployerResponse res = sdk.cis.getCisLineTypesFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisLineTypesWithTag

Gets the CIS line type with the tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisLineTypesWithTagRequest;
import org.openapis.openapi.models.operations.GetCisLineTypesWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisLineTypesWithTagRequest req = new GetCisLineTypesWithTagRequest("enim", "accusamus", "commodi", "repudiandae");            

            GetCisLineTypesWithTagResponse res = sdk.cis.getCisLineTypesWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisLinesFromSubContractor

Get links to all CIS lines for the specified sub contractor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisLinesFromSubContractorRequest;
import org.openapis.openapi.models.operations.GetCisLinesFromSubContractorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisLinesFromSubContractorRequest req = new GetCisLinesFromSubContractorRequest("quae", "ipsum", "quidem", "molestias");            

            GetCisLinesFromSubContractorResponse res = sdk.cis.getCisLinesFromSubContractor(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisLinesWithTag

Gets the CIS line with the tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisLinesWithTagRequest;
import org.openapis.openapi.models.operations.GetCisLinesWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisLinesWithTagRequest req = new GetCisLinesWithTagRequest("excepturi", "pariatur", "modi", "praesentium", "rem");            

            GetCisLinesWithTagResponse res = sdk.cis.getCisLinesWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisTransactionFromEmployer

Returns the specified CIS transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisTransactionFromEmployerRequest;
import org.openapis.openapi.models.operations.GetCisTransactionFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisTransactionFromEmployerRequest req = new GetCisTransactionFromEmployerRequest("voluptates", "quasi", "repudiandae", "sint");            

            GetCisTransactionFromEmployerResponse res = sdk.cis.getCisTransactionFromEmployer(req);

            if (res.cisTransaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisTransactionsFromEmployer

Get links for all CIS transactions for the specified employer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisTransactionsFromEmployerRequest;
import org.openapis.openapi.models.operations.GetCisTransactionsFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisTransactionsFromEmployerRequest req = new GetCisTransactionsFromEmployerRequest("veritatis", "itaque", "incidunt");            

            GetCisTransactionsFromEmployerResponse res = sdk.cis.getCisTransactionsFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubContractorsWithTag

Gets the sub contractor with the tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubContractorsWithTagRequest;
import org.openapis.openapi.models.operations.GetSubContractorsWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubContractorsWithTagRequest req = new GetSubContractorsWithTagRequest("enim", "consequatur", "est", "quibusdam");            

            GetSubContractorsWithTagResponse res = sdk.cis.getSubContractorsWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagFromCisInstruction

Gets the tag from the CIS instruction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagFromCisInstructionRequest;
import org.openapis.openapi.models.operations.GetTagFromCisInstructionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagFromCisInstructionRequest req = new GetTagFromCisInstructionRequest("explicabo", "deserunt", "distinctio", "quibusdam", "labore", "modi");            

            GetTagFromCisInstructionResponse res = sdk.cis.getTagFromCisInstruction(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagFromCisLine

Gets the tag from the CIS line

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagFromCisLineRequest;
import org.openapis.openapi.models.operations.GetTagFromCisLineResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagFromCisLineRequest req = new GetTagFromCisLineRequest("qui", "aliquid", "cupiditate", "quos", "perferendis", "magni");            

            GetTagFromCisLineResponse res = sdk.cis.getTagFromCisLine(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagFromCisLineType

Gets the tag from the CIS line type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagFromCisLineTypeRequest;
import org.openapis.openapi.models.operations.GetTagFromCisLineTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagFromCisLineTypeRequest req = new GetTagFromCisLineTypeRequest("assumenda", "ipsam", "alias", "fugit", "dolorum");            

            GetTagFromCisLineTypeResponse res = sdk.cis.getTagFromCisLineType(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagFromSubContractor

Gets the tag from the sub contractor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagFromSubContractorRequest;
import org.openapis.openapi.models.operations.GetTagFromSubContractorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagFromSubContractorRequest req = new GetTagFromSubContractorRequest("excepturi", "tempora", "facilis", "tempore", "labore");            

            GetTagFromSubContractorResponse res = sdk.cis.getTagFromSubContractor(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagFromSubContractorRevision

Gets the tag from the sub contractor revision

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagFromSubContractorRevisionRequest;
import org.openapis.openapi.models.operations.GetTagFromSubContractorRevisionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagFromSubContractorRevisionRequest req = new GetTagFromSubContractorRevisionRequest("delectus", "eum", LocalDate.parse("2022-03-31"), "sint", "aliquid", "provident");            

            GetTagFromSubContractorRevisionResponse res = sdk.cis.getTagFromSubContractorRevision(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsFromCisInstruction

Gets all the tags from the CIS instruction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsFromCisInstructionRequest;
import org.openapis.openapi.models.operations.GetTagsFromCisInstructionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsFromCisInstructionRequest req = new GetTagsFromCisInstructionRequest("necessitatibus", "sint", "officia", "dolor", "debitis");            

            GetTagsFromCisInstructionResponse res = sdk.cis.getTagsFromCisInstruction(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsFromCisLine

Gets all the tags from the CIS line

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsFromCisLineRequest;
import org.openapis.openapi.models.operations.GetTagsFromCisLineResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsFromCisLineRequest req = new GetTagsFromCisLineRequest("a", "dolorum", "in", "in", "illum");            

            GetTagsFromCisLineResponse res = sdk.cis.getTagsFromCisLine(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsFromCisLineType

Gets all the tags from the CIS line type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsFromCisLineTypeRequest;
import org.openapis.openapi.models.operations.GetTagsFromCisLineTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsFromCisLineTypeRequest req = new GetTagsFromCisLineTypeRequest("maiores", "rerum", "dicta", "magnam");            

            GetTagsFromCisLineTypeResponse res = sdk.cis.getTagsFromCisLineType(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsFromSubContractor

Gets all the tags from the sub contractor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsFromSubContractorRequest;
import org.openapis.openapi.models.operations.GetTagsFromSubContractorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsFromSubContractorRequest req = new GetTagsFromSubContractorRequest("cumque", "facere", "ea", "aliquid");            

            GetTagsFromSubContractorResponse res = sdk.cis.getTagsFromSubContractor(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsFromSubContractorRevision

Gets all the tags from the sub contractor revision

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsFromSubContractorRevisionRequest;
import org.openapis.openapi.models.operations.GetTagsFromSubContractorRevisionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsFromSubContractorRevisionRequest req = new GetTagsFromSubContractorRevisionRequest("laborum", "accusamus", LocalDate.parse("2022-06-02"), "enim", "accusamus");            

            GetTagsFromSubContractorRevisionResponse res = sdk.cis.getTagsFromSubContractorRevision(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchCisInstruction

Update an existing CIS instruction object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchCisInstructionRequest;
import org.openapis.openapi.models.operations.PatchCisInstructionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchCisInstructionRequest req = new PatchCisInstructionRequest("delectus", "quidem", "provident", "nam", "id");            

            PatchCisInstructionResponse res = sdk.cis.patchCisInstruction(req);

            if (res.cisInstruction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCisInstructionIntoSubContractor

Create a new CIS instruction object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCisInstructionIntoSubContractorRequest;
import org.openapis.openapi.models.operations.PostCisInstructionIntoSubContractorResponse;
import org.openapis.openapi.models.shared.CisInstruction;
import org.openapis.openapi.models.shared.CisInstructionCisInstruction;
import org.openapis.openapi.models.shared.CisInstructionCisInstructionPayFrequencyEnum;
import org.openapis.openapi.models.shared.CisInstructionCisInstructionUOMEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCisInstructionIntoSubContractorRequest req = new PostCisInstructionIntoSubContractorRequest("blanditiis", "deleniti",                 new CisInstruction() {{
                                cisInstruction = new CisInstructionCisInstruction() {{
                                    cisLineTag = "sapiente";
                                    cisLineType = "amet";
                                    description = "deserunt";
                                    payFrequency = CisInstructionCisInstructionPayFrequencyEnum.MONTHLY;
                                    periodEnd = 423855;
                                    periodStart = 618809;
                                    taxYearEnd = 606393;
                                    taxYearStart = 474867;
                                    uom = CisInstructionCisInstructionUOMEnum.NOT_SET;
                                    units = 4701.32;
                                    vat = 3015.75;
                                    value = 7160.75;
                                }};;
                            }};, "id", "labore");            

            PostCisInstructionIntoSubContractorResponse res = sdk.cis.postCisInstructionIntoSubContractor(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCisLineTypeIntoEmployer

Create a new CIS line type object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCisLineTypeIntoEmployerRequest;
import org.openapis.openapi.models.operations.PostCisLineTypeIntoEmployerResponse;
import org.openapis.openapi.models.shared.CisLineType;
import org.openapis.openapi.models.shared.CisLineTypeCisLineType;
import org.openapis.openapi.models.shared.CisLineTypeCisLineTypeNominalCode;
import org.openapis.openapi.models.shared.CisLineTypeCisLineTypeTaxTreatmentEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCisLineTypeIntoEmployerRequest req = new PostCisLineTypeIntoEmployerRequest("labore", "suscipit",                 new CisLineType() {{
                                cisLineType = new CisLineTypeCisLineType() {{
                                    description = "natus";
                                    lineType = "nobis";
                                    nominalCode = new CisLineTypeCisLineTypeNominalCode() {{
                                        atHref = "eum";
                                        atRel = "vero";
                                        atTitle = "aspernatur";
                                    }};;
                                    taxTreatment = CisLineTypeCisLineTypeTaxTreatmentEnum.TAXABLE;
                                }};;
                            }};, "magnam");            

            PostCisLineTypeIntoEmployerResponse res = sdk.cis.postCisLineTypeIntoEmployer(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCisInstructionIntoSubContractor

Insert or update existing CIS instruction object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCisInstructionIntoSubContractorRequest;
import org.openapis.openapi.models.operations.PutCisInstructionIntoSubContractorResponse;
import org.openapis.openapi.models.shared.CisInstruction;
import org.openapis.openapi.models.shared.CisInstructionCisInstruction;
import org.openapis.openapi.models.shared.CisInstructionCisInstructionPayFrequencyEnum;
import org.openapis.openapi.models.shared.CisInstructionCisInstructionUOMEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCisInstructionIntoSubContractorRequest req = new PutCisInstructionIntoSubContractorRequest("et", "excepturi",                 new CisInstruction() {{
                                cisInstruction = new CisInstructionCisInstruction() {{
                                    cisLineTag = "ullam";
                                    cisLineType = "provident";
                                    description = "quos";
                                    payFrequency = CisInstructionCisInstructionPayFrequencyEnum.WEEKLY;
                                    periodEnd = 33625;
                                    periodStart = 653201;
                                    taxYearEnd = 968962;
                                    taxYearStart = 652103;
                                    uom = CisInstructionCisInstructionUOMEnum.HOUR;
                                    units = 4314.18;
                                    vat = 2212.62;
                                    value = 8965.47;
                                }};;
                            }};, "odit", "nemo", "quasi");            

            PutCisInstructionIntoSubContractorResponse res = sdk.cis.putCisInstructionIntoSubContractor(req);

            if (res.cisInstruction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCisInstructionTag

Inserts a new tag on the CIS instruction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCisInstructionTagRequest;
import org.openapis.openapi.models.operations.PutCisInstructionTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCisInstructionTagRequest req = new PutCisInstructionTagRequest("iure", "doloribus", "debitis", "eius", "maxime", "deleniti");            

            PutCisInstructionTagResponse res = sdk.cis.putCisInstructionTag(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCisLineTag

Inserts a new tag on the CIS line

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCisLineTagRequest;
import org.openapis.openapi.models.operations.PutCisLineTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCisLineTagRequest req = new PutCisLineTagRequest("facilis", "in", "architecto", "architecto", "repudiandae", "ullam");            

            PutCisLineTagResponse res = sdk.cis.putCisLineTag(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCisLineTypeIntoEmployer

Updates the existing specified CIS line type object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCisLineTypeIntoEmployerRequest;
import org.openapis.openapi.models.operations.PutCisLineTypeIntoEmployerResponse;
import org.openapis.openapi.models.shared.CisLineType;
import org.openapis.openapi.models.shared.CisLineTypeCisLineType;
import org.openapis.openapi.models.shared.CisLineTypeCisLineTypeNominalCode;
import org.openapis.openapi.models.shared.CisLineTypeCisLineTypeTaxTreatmentEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCisLineTypeIntoEmployerRequest req = new PutCisLineTypeIntoEmployerRequest("expedita", "nihil",                 new CisLineType() {{
                                cisLineType = new CisLineTypeCisLineType() {{
                                    description = "repellat";
                                    lineType = "quibusdam";
                                    nominalCode = new CisLineTypeCisLineTypeNominalCode() {{
                                        atHref = "sed";
                                        atRel = "saepe";
                                        atTitle = "pariatur";
                                    }};;
                                    taxTreatment = CisLineTypeCisLineTypeTaxTreatmentEnum.TAXABLE;
                                }};;
                            }};, "consequuntur", "praesentium");            

            PutCisLineTypeIntoEmployerResponse res = sdk.cis.putCisLineTypeIntoEmployer(req);

            if (res.cisLineType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCisLineTypeTag

Inserts a new tag on the CIS line type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCisLineTypeTagRequest;
import org.openapis.openapi.models.operations.PutCisLineTypeTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCisLineTypeTagRequest req = new PutCisLineTypeTagRequest("natus", "magni", "sunt", "quo", "illum");            

            PutCisLineTypeTagResponse res = sdk.cis.putCisLineTypeTag(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSubContractorTag

Inserts a new tag on the sub contractor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSubContractorTagRequest;
import org.openapis.openapi.models.operations.PutSubContractorTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutSubContractorTagRequest req = new PutSubContractorTagRequest("pariatur", "maxime", "ea", "excepturi", "odit");            

            PutSubContractorTagResponse res = sdk.cis.putSubContractorTag(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
