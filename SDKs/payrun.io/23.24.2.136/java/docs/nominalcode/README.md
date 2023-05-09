# nominalCode

### Available Operations

* [deleteNominalCode](#deletenominalcode) - Deletes the nominal codes
* [getNominalCodeFromEmployer](#getnominalcodefromemployer) - Gets the nominal code
* [getNominalCodesFromEmployer](#getnominalcodesfromemployer) - Gets the nominal codes
* [postNominalCode](#postnominalcode) - Insert nominal code
* [putNominalCode](#putnominalcode) - Insert nominal code

## deleteNominalCode

Deletes the nominal code

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNominalCodeRequest;
import org.openapis.openapi.models.operations.DeleteNominalCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteNominalCodeRequest req = new DeleteNominalCodeRequest("est", "quis", "sint", "accusamus");            

            DeleteNominalCodeResponse res = sdk.nominalCode.deleteNominalCode(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNominalCodeFromEmployer

Gets the nominal code

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNominalCodeFromEmployerRequest;
import org.openapis.openapi.models.operations.GetNominalCodeFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNominalCodeFromEmployerRequest req = new GetNominalCodeFromEmployerRequest("impedit", "hic", "necessitatibus", "asperiores");            

            GetNominalCodeFromEmployerResponse res = sdk.nominalCode.getNominalCodeFromEmployer(req);

            if (res.nominalCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNominalCodesFromEmployer

Gets the nominal code links

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNominalCodesFromEmployerRequest;
import org.openapis.openapi.models.operations.GetNominalCodesFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNominalCodesFromEmployerRequest req = new GetNominalCodesFromEmployerRequest("ex", "voluptas", "debitis");            

            GetNominalCodesFromEmployerResponse res = sdk.nominalCode.getNominalCodesFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNominalCode

Inserts a new nominal code

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNominalCodeRequest;
import org.openapis.openapi.models.operations.PostNominalCodeResponse;
import org.openapis.openapi.models.shared.NominalCode;
import org.openapis.openapi.models.shared.NominalCodeNominalCode;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNominalCodeRequest req = new PostNominalCodeRequest("delectus", "quae", "minus",                 new NominalCode() {{
                                nominalCode = new NominalCodeNominalCode() {{
                                    description = "fuga";
                                    key = "laborum";
                                }};;
                            }};);            

            PostNominalCodeResponse res = sdk.nominalCode.postNominalCode(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putNominalCode

Inserts a new nominal code at the specified resource location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutNominalCodeRequest;
import org.openapis.openapi.models.operations.PutNominalCodeResponse;
import org.openapis.openapi.models.shared.NominalCode;
import org.openapis.openapi.models.shared.NominalCodeNominalCode;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutNominalCodeRequest req = new PutNominalCodeRequest("consectetur", "velit", "atque",                 new NominalCode() {{
                                nominalCode = new NominalCodeNominalCode() {{
                                    description = "ipsum";
                                    key = "impedit";
                                }};;
                            }};, "magni");            

            PutNominalCodeResponse res = sdk.nominalCode.putNominalCode(req);

            if (res.nominalCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
