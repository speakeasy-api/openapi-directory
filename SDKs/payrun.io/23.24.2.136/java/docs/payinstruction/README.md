# payInstruction

### Available Operations

* [deletePayInstruction](#deletepayinstruction) - Deletes a pay instruction
* [getAllPayInstructionTags](#getallpayinstructiontags) - Get all pay instruction tags
* [getPayInstructionFromEmployee](#getpayinstructionfromemployee) - Gets the specified pay instruction from the employee
* [getPayInstructionsFromEmployee](#getpayinstructionsfromemployee) - Gets the pay instructions from the specified employee
* [getPayInstructionsWithTag](#getpayinstructionswithtag) - Get pay instructions with tag
* [patchPayInstruction](#patchpayinstruction) - Sparse Update of a Pay Instruction
* [postPayInstruction](#postpayinstruction) - Creates a new Pay Instruction
* [putPayInstruction](#putpayinstruction) - Update a Pay Instruction

## deletePayInstruction

Delete the specified pay instruction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePayInstructionRequest;
import org.openapis.openapi.models.operations.DeletePayInstructionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePayInstructionRequest req = new DeletePayInstructionRequest("omnis", "libero", "dicta", "id", "libero");            

            DeletePayInstructionResponse res = sdk.payInstruction.deletePayInstruction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllPayInstructionTags

Gets all the pay instruction tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllPayInstructionTagsRequest;
import org.openapis.openapi.models.operations.GetAllPayInstructionTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllPayInstructionTagsRequest req = new GetAllPayInstructionTagsRequest("fugiat", "officia", "quos", "placeat");            

            GetAllPayInstructionTagsResponse res = sdk.payInstruction.getAllPayInstructionTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayInstructionFromEmployee

Returns the specified pay instruction from employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayInstructionFromEmployeeRequest;
import org.openapis.openapi.models.operations.GetPayInstructionFromEmployeeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayInstructionFromEmployeeRequest req = new GetPayInstructionFromEmployeeRequest("sit", "iusto", "ipsa", "voluptates", "inventore");            

            GetPayInstructionFromEmployeeResponse res = sdk.payInstruction.getPayInstructionFromEmployee(req);

            if (res.payInstruction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayInstructionsFromEmployee

Get links to all pay instructions for the specified employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayInstructionsFromEmployeeRequest;
import org.openapis.openapi.models.operations.GetPayInstructionsFromEmployeeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayInstructionsFromEmployeeRequest req = new GetPayInstructionsFromEmployeeRequest("aperiam", "totam", "dolore", "eligendi");            

            GetPayInstructionsFromEmployeeResponse res = sdk.payInstruction.getPayInstructionsFromEmployee(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayInstructionsWithTag

Gets the pay instructions with the tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayInstructionsWithTagRequest;
import org.openapis.openapi.models.operations.GetPayInstructionsWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayInstructionsWithTagRequest req = new GetPayInstructionsWithTagRequest("distinctio", "voluptatem", "autem", "esse", "dolores");            

            GetPayInstructionsWithTagResponse res = sdk.payInstruction.getPayInstructionsWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchPayInstruction

Patches the specified pay instruction with the supplied values

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchPayInstructionRequest;
import org.openapis.openapi.models.operations.PatchPayInstructionResponse;
import org.openapis.openapi.models.shared.PayInstruction;
import org.openapis.openapi.models.shared.PayInstructionPayInstruction;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchPayInstructionRequest req = new PatchPayInstructionRequest("assumenda", "beatae", "est", "facere",                 new PayInstruction() {{
                                payInstruction = new PayInstructionPayInstruction() {{
                                    description = "corrupti";
                                    endDate = LocalDate.parse("2022-05-31");
                                    payLineTag = "accusamus";
                                    startDate = LocalDate.parse("2020-10-20");
                                }};;
                            }};, "sint");            

            PatchPayInstructionResponse res = sdk.payInstruction.patchPayInstruction(req);

            if (res.payInstruction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPayInstruction

Creates a new pay instruction object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPayInstructionRequest;
import org.openapis.openapi.models.operations.PostPayInstructionResponse;
import org.openapis.openapi.models.shared.PayInstruction;
import org.openapis.openapi.models.shared.PayInstructionPayInstruction;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPayInstructionRequest req = new PostPayInstructionRequest("ea", "autem", "ipsam", "rerum",                 new PayInstruction() {{
                                payInstruction = new PayInstructionPayInstruction() {{
                                    description = "laudantium";
                                    endDate = LocalDate.parse("2022-02-10");
                                    payLineTag = "voluptatibus";
                                    startDate = LocalDate.parse("2021-04-04");
                                }};;
                            }};);            

            PostPayInstructionResponse res = sdk.payInstruction.postPayInstruction(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPayInstruction

Updates the existing specified pay instruction object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPayInstructionRequest;
import org.openapis.openapi.models.operations.PutPayInstructionResponse;
import org.openapis.openapi.models.shared.PayInstruction;
import org.openapis.openapi.models.shared.PayInstructionPayInstruction;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutPayInstructionRequest req = new PutPayInstructionRequest("alias", "quia", "quidem", "fuga",                 new PayInstruction() {{
                                payInstruction = new PayInstructionPayInstruction() {{
                                    description = "repudiandae";
                                    endDate = LocalDate.parse("2022-04-16");
                                    payLineTag = "officiis";
                                    startDate = LocalDate.parse("2022-02-26");
                                }};;
                            }};, "odio");            

            PutPayInstructionResponse res = sdk.payInstruction.putPayInstruction(req);

            if (res.payInstruction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
