# journals

### Available Operations

* [deleteJournalInstruction](#deletejournalinstruction) - Deletes a Journal instruction
* [deleteJournalInstructionTemplate](#deletejournalinstructiontemplate) - Deletes a Journal instruction template
* [getJournalInstructionFromEmployer](#getjournalinstructionfromemployer) - Gets the specified journal instruction from the employer
* [getJournalInstructionTemplate](#getjournalinstructiontemplate) - Gets the Journal instructions template for the application
* [getJournalInstructionTemplates](#getjournalinstructiontemplates) - Gets the Journal instructions templates for the application
* [getJournalInstructionsFromEmployer](#getjournalinstructionsfromemployer) - Gets the Journal instructions from the specified employer
* [getJournalLineFromEmployer](#getjournallinefromemployer) - Gets the specified journal Line from the employer
* [getJournalLinesFromEmployee](#getjournallinesfromemployee) - Gets the journal Lines from the specified employee
* [getJournalLinesFromEmployer](#getjournallinesfromemployer) - Gets the Journal Lines from the specified employer
* [getJournalLinesFromPayRun](#getjournallinesfrompayrun) - Gets the journal Lines from the specified pay run
* [getJournalLinesFromSubContractor](#getjournallinesfromsubcontractor) - Gets the journal Lines from the specified sub contractor
* [postJournalInstruction](#postjournalinstruction) - Creates a new Journal Instruction
* [postJournalInstructionTemplate](#postjournalinstructiontemplate) - Creates a new Journal Instruction template
* [putJournalInstruction](#putjournalinstruction) - Update a Journal Instruction
* [putJournalInstructionTemplate](#putjournalinstructiontemplate) - Update a Journal Instruction template

## deleteJournalInstruction

Delete the specified Journal instruction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteJournalInstructionRequest;
import org.openapis.openapi.models.operations.DeleteJournalInstructionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteJournalInstructionRequest req = new DeleteJournalInstructionRequest("rem", "fugiat", "dicta", "nisi");            

            DeleteJournalInstructionResponse res = sdk.journals.deleteJournalInstruction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteJournalInstructionTemplate

Delete the specified Journal instruction template object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteJournalInstructionTemplateRequest;
import org.openapis.openapi.models.operations.DeleteJournalInstructionTemplateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteJournalInstructionTemplateRequest req = new DeleteJournalInstructionTemplateRequest("consequuntur", "consectetur", "aperiam");            

            DeleteJournalInstructionTemplateResponse res = sdk.journals.deleteJournalInstructionTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJournalInstructionFromEmployer

Returns the specified journal instruction from employer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJournalInstructionFromEmployerRequest;
import org.openapis.openapi.models.operations.GetJournalInstructionFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJournalInstructionFromEmployerRequest req = new GetJournalInstructionFromEmployerRequest("cupiditate", "reiciendis", "soluta", "alias");            

            GetJournalInstructionFromEmployerResponse res = sdk.journals.getJournalInstructionFromEmployer(req);

            if (res.journalInstruction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJournalInstructionTemplate

Retrurns the specified journal instruction from the application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJournalInstructionTemplateRequest;
import org.openapis.openapi.models.operations.GetJournalInstructionTemplateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJournalInstructionTemplateRequest req = new GetJournalInstructionTemplateRequest("omnis", "eos", "occaecati");            

            GetJournalInstructionTemplateResponse res = sdk.journals.getJournalInstructionTemplate(req);

            if (res.journalInstruction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJournalInstructionTemplates

Get links to all journal instruction templates for the application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJournalInstructionTemplatesRequest;
import org.openapis.openapi.models.operations.GetJournalInstructionTemplatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJournalInstructionTemplatesRequest req = new GetJournalInstructionTemplatesRequest("iste", "magni");            

            GetJournalInstructionTemplatesResponse res = sdk.journals.getJournalInstructionTemplates(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJournalInstructionsFromEmployer

Get links to all journal instructions for the specified employer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJournalInstructionsFromEmployerRequest;
import org.openapis.openapi.models.operations.GetJournalInstructionsFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJournalInstructionsFromEmployerRequest req = new GetJournalInstructionsFromEmployerRequest("inventore", "fuga", "accusamus");            

            GetJournalInstructionsFromEmployerResponse res = sdk.journals.getJournalInstructionsFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJournalLineFromEmployer

Returns the specified journal Line from employer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJournalLineFromEmployerRequest;
import org.openapis.openapi.models.operations.GetJournalLineFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJournalLineFromEmployerRequest req = new GetJournalLineFromEmployerRequest("voluptatibus", "distinctio", "omnis", "delectus");            

            GetJournalLineFromEmployerResponse res = sdk.journals.getJournalLineFromEmployer(req);

            if (res.journalLine != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJournalLinesFromEmployee

Get links to all journal lines for the specified employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJournalLinesFromEmployeeRequest;
import org.openapis.openapi.models.operations.GetJournalLinesFromEmployeeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJournalLinesFromEmployeeRequest req = new GetJournalLinesFromEmployeeRequest("minima", "praesentium", "maxime", "magnam");            

            GetJournalLinesFromEmployeeResponse res = sdk.journals.getJournalLinesFromEmployee(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJournalLinesFromEmployer

Get links to all journal Lines for the specified employer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJournalLinesFromEmployerRequest;
import org.openapis.openapi.models.operations.GetJournalLinesFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJournalLinesFromEmployerRequest req = new GetJournalLinesFromEmployerRequest("temporibus", "quos", "commodi");            

            GetJournalLinesFromEmployerResponse res = sdk.journals.getJournalLinesFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJournalLinesFromPayRun

Get links to all journal lines for the specified pay run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJournalLinesFromPayRunRequest;
import org.openapis.openapi.models.operations.GetJournalLinesFromPayRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJournalLinesFromPayRunRequest req = new GetJournalLinesFromPayRunRequest("itaque", "commodi", "totam", "earum", "modi");            

            GetJournalLinesFromPayRunResponse res = sdk.journals.getJournalLinesFromPayRun(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJournalLinesFromSubContractor

Get links to all journal lines for the specified sub contractor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJournalLinesFromSubContractorRequest;
import org.openapis.openapi.models.operations.GetJournalLinesFromSubContractorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJournalLinesFromSubContractorRequest req = new GetJournalLinesFromSubContractorRequest("nam", "vero", "voluptatem", "ipsam");            

            GetJournalLinesFromSubContractorResponse res = sdk.journals.getJournalLinesFromSubContractor(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postJournalInstruction

Creates a new Journal instruction object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostJournalInstructionRequest;
import org.openapis.openapi.models.operations.PostJournalInstructionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostJournalInstructionRequest req = new PostJournalInstructionRequest("vel", "alias", "quasi");            

            PostJournalInstructionResponse res = sdk.journals.postJournalInstruction(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postJournalInstructionTemplate

Creates a new Journal instruction teamplte object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostJournalInstructionTemplateRequest;
import org.openapis.openapi.models.operations.PostJournalInstructionTemplateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostJournalInstructionTemplateRequest req = new PostJournalInstructionTemplateRequest("non", "maiores");            

            PostJournalInstructionTemplateResponse res = sdk.journals.postJournalInstructionTemplate(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putJournalInstruction

Updates the existing specified Journal instruction object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutJournalInstructionRequest;
import org.openapis.openapi.models.operations.PutJournalInstructionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutJournalInstructionRequest req = new PutJournalInstructionRequest("enim", "sint", "nulla", "deserunt");            

            PutJournalInstructionResponse res = sdk.journals.putJournalInstruction(req);

            if (res.journalInstruction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putJournalInstructionTemplate

Updates the existing specified Journal instruction template object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutJournalInstructionTemplateRequest;
import org.openapis.openapi.models.operations.PutJournalInstructionTemplateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutJournalInstructionTemplateRequest req = new PutJournalInstructionTemplateRequest("esse", "nemo", "reprehenderit");            

            PutJournalInstructionTemplateResponse res = sdk.journals.putJournalInstructionTemplate(req);

            if (res.journalInstruction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
