# payCode

### Available Operations

* [deletePayCode](#deletepaycode) - Deletes a pay code
* [deletePayCodeRevision](#deletepaycoderevision) - Deletes a pay code revision
* [deletePayCodeRevisionByNumber](#deletepaycoderevisionbynumber) - Delete an PayCode revision matching the specified revision number.
* [getAllPayCodeTags](#getallpaycodetags) - Get all pay code tags
* [getPayCodeByEffectiveDate](#getpaycodebyeffectivedate) - Gets pay code for specified date
* [getPayCodeFromEmployer](#getpaycodefromemployer) - Gets the specified pay code from the employer
* [getPayCodeRevisionByNumber](#getpaycoderevisionbynumber) - Gets the pay code by revision number
* [getPayCodeRevisions](#getpaycoderevisions) - Get all revisions of the Pay Code
* [getPayCodesByEffectiveDate](#getpaycodesbyeffectivedate) - Gets all pay codes for specified date
* [getPayCodesFromEmployer](#getpaycodesfromemployer) - Gets the pay codes from the employer
* [getPayCodesFromNominalCode](#getpaycodesfromnominalcode) - Gets the pay codes by nominal code
* [getPayCodesWithTag](#getpaycodeswithtag) - Get pay codes with tag
* [patchPayCode](#patchpaycode) - Patches the pay code
* [postPayCode](#postpaycode) - Create a new pay code
* [putPayCode](#putpaycode) - Updates a pay code

## deletePayCode

Delete the specified pay code

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePayCodeRequest;
import org.openapis.openapi.models.operations.DeletePayCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePayCodeRequest req = new DeletePayCodeRequest("soluta", "repudiandae", "nam", "dolore");            

            DeletePayCodeResponse res = sdk.payCode.deletePayCode(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePayCodeRevision

Delete the pay code revision for the specified date

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePayCodeRevisionRequest;
import org.openapis.openapi.models.operations.DeletePayCodeRevisionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePayCodeRevisionRequest req = new DeletePayCodeRevisionRequest("iusto", "voluptate", LocalDate.parse("2022-07-04"), "neque", "quo");            

            DeletePayCodeRevisionResponse res = sdk.payCode.deletePayCodeRevision(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePayCodeRevisionByNumber

Deletes the specified pay code revision for the matching revision number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePayCodeRevisionByNumberRequest;
import org.openapis.openapi.models.operations.DeletePayCodeRevisionByNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePayCodeRevisionByNumberRequest req = new DeletePayCodeRevisionByNumberRequest("deleniti", "quibusdam", "iure", "odit", "voluptatibus");            

            DeletePayCodeRevisionByNumberResponse res = sdk.payCode.deletePayCodeRevisionByNumber(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllPayCodeTags

Gets all the pay code tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllPayCodeTagsRequest;
import org.openapis.openapi.models.operations.GetAllPayCodeTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllPayCodeTagsRequest req = new GetAllPayCodeTagsRequest("vel", "magnam", "quibusdam");            

            GetAllPayCodeTagsResponse res = sdk.payCode.getAllPayCodeTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayCodeByEffectiveDate

Gets the pay code revision for the specified effective date

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayCodeByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetPayCodeByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayCodeByEffectiveDateRequest req = new GetPayCodeByEffectiveDateRequest("inventore", "facere", LocalDate.parse("2022-10-18"), "voluptatibus", "quia");            

            GetPayCodeByEffectiveDateResponse res = sdk.payCode.getPayCodeByEffectiveDate(req);

            if (res.payCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayCodeFromEmployer

Returns the specified pay code from the employer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayCodeFromEmployerRequest;
import org.openapis.openapi.models.operations.GetPayCodeFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayCodeFromEmployerRequest req = new GetPayCodeFromEmployerRequest("porro", "aliquam", "velit", "illo");            

            GetPayCodeFromEmployerResponse res = sdk.payCode.getPayCodeFromEmployer(req);

            if (res.payCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayCodeRevisionByNumber

Get the pay code revision matching the specified revision number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayCodeRevisionByNumberRequest;
import org.openapis.openapi.models.operations.GetPayCodeRevisionByNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayCodeRevisionByNumberRequest req = new GetPayCodeRevisionByNumberRequest("accusantium", "vel", "ea", "beatae", "vero");            

            GetPayCodeRevisionByNumberResponse res = sdk.payCode.getPayCodeRevisionByNumber(req);

            if (res.payCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayCodeRevisions

Returns links to all revisions of the pay code

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayCodeRevisionsRequest;
import org.openapis.openapi.models.operations.GetPayCodeRevisionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayCodeRevisionsRequest req = new GetPayCodeRevisionsRequest("excepturi", "eum", "velit", "ut");            

            GetPayCodeRevisionsResponse res = sdk.payCode.getPayCodeRevisions(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayCodesByEffectiveDate

Gets the effective pay code revision for the specified date

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayCodesByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetPayCodesByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayCodesByEffectiveDateRequest req = new GetPayCodesByEffectiveDateRequest("perspiciatis", "earum", LocalDate.parse("2022-03-25"), "voluptatibus");            

            GetPayCodesByEffectiveDateResponse res = sdk.payCode.getPayCodesByEffectiveDate(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayCodesFromEmployer

Get links to all the pay codes for the specified employer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayCodesFromEmployerRequest;
import org.openapis.openapi.models.operations.GetPayCodesFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayCodesFromEmployerRequest req = new GetPayCodesFromEmployerRequest("iste", "itaque", "alias");            

            GetPayCodesFromEmployerResponse res = sdk.payCode.getPayCodesFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayCodesFromNominalCode

Get the pay codes that share the specified nominal code

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayCodesFromNominalCodeRequest;
import org.openapis.openapi.models.operations.GetPayCodesFromNominalCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayCodesFromNominalCodeRequest req = new GetPayCodesFromNominalCodeRequest("nisi", "itaque", "velit", "laborum");            

            GetPayCodesFromNominalCodeResponse res = sdk.payCode.getPayCodesFromNominalCode(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayCodesWithTag

Gets the pay codes with the tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayCodesWithTagRequest;
import org.openapis.openapi.models.operations.GetPayCodesWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayCodesWithTagRequest req = new GetPayCodesWithTagRequest("non", "dolor", "iusto", "sit");            

            GetPayCodesWithTagResponse res = sdk.payCode.getPayCodesWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchPayCode

Patches the specified pay code object with the supplied values

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchPayCodeRequest;
import org.openapis.openapi.models.operations.PatchPayCodeResponse;
import org.openapis.openapi.models.shared.PayCode;
import org.openapis.openapi.models.shared.PayCodePayCode;
import org.openapis.openapi.models.shared.PayCodePayCodeNominalCode;
import org.openapis.openapi.models.shared.PayCodePayCodeRegionEnum;
import org.openapis.openapi.models.shared.PayCodePayCodeTerritoryEnum;
import org.openapis.openapi.models.shared.PayCodePayCodeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchPayCodeRequest req = new PatchPayCodeRequest("doloremque", "consequatur", "officia",                 new PayCode() {{
                                payCode = new PayCodePayCode() {{
                                    benefit = false;
                                    code = "recusandae";
                                    description = "ea";
                                    effectiveDate = LocalDate.parse("2022-03-31");
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("placeat", "perspiciatis");
                                        put("expedita", "deleniti");
                                        put("a", "voluptate");
                                    }};
                                    nextRevisionDate = LocalDate.parse("2022-05-26");
                                    niable = false;
                                    nominalCode = new PayCodePayCodeNominalCode() {{
                                        atHref = "necessitatibus";
                                        atRel = "animi";
                                        atTitle = "impedit";
                                    }};;
                                    nonArrestable = false;
                                    notional = false;
                                    readonly = false;
                                    region = PayCodePayCodeRegionEnum.ENGLAND;
                                    revision = 357425;
                                    taxable = false;
                                    territory = PayCodePayCodeTerritoryEnum.UNITED_KINGDOM;
                                    type = PayCodePayCodeTypeEnum.DEDUCTION;
                                }};;
                            }};, "error");            

            PatchPayCodeResponse res = sdk.payCode.patchPayCode(req);

            if (res.payCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPayCode

Create a new pay code object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPayCodeRequest;
import org.openapis.openapi.models.operations.PostPayCodeResponse;
import org.openapis.openapi.models.shared.PayCode;
import org.openapis.openapi.models.shared.PayCodePayCode;
import org.openapis.openapi.models.shared.PayCodePayCodeNominalCode;
import org.openapis.openapi.models.shared.PayCodePayCodeRegionEnum;
import org.openapis.openapi.models.shared.PayCodePayCodeTerritoryEnum;
import org.openapis.openapi.models.shared.PayCodePayCodeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPayCodeRequest req = new PostPayCodeRequest("esse", "labore", "veritatis",                 new PayCode() {{
                                payCode = new PayCodePayCode() {{
                                    benefit = false;
                                    code = "vero";
                                    description = "consectetur";
                                    effectiveDate = LocalDate.parse("2022-12-02");
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("ad", "qui");
                                    }};
                                    nextRevisionDate = LocalDate.parse("2022-03-12");
                                    niable = false;
                                    nominalCode = new PayCodePayCodeNominalCode() {{
                                        atHref = "nemo";
                                        atRel = "soluta";
                                        atTitle = "libero";
                                    }};;
                                    nonArrestable = false;
                                    notional = false;
                                    readonly = false;
                                    region = PayCodePayCodeRegionEnum.SCOTLAND;
                                    revision = 678060;
                                    taxable = false;
                                    territory = PayCodePayCodeTerritoryEnum.UNITED_KINGDOM;
                                    type = PayCodePayCodeTypeEnum.PAYMENT;
                                }};;
                            }};);            

            PostPayCodeResponse res = sdk.payCode.postPayCode(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPayCode

Updates the existing specified pay code object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPayCodeRequest;
import org.openapis.openapi.models.operations.PutPayCodeResponse;
import org.openapis.openapi.models.shared.PayCode;
import org.openapis.openapi.models.shared.PayCodePayCode;
import org.openapis.openapi.models.shared.PayCodePayCodeNominalCode;
import org.openapis.openapi.models.shared.PayCodePayCodeRegionEnum;
import org.openapis.openapi.models.shared.PayCodePayCodeTerritoryEnum;
import org.openapis.openapi.models.shared.PayCodePayCodeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutPayCodeRequest req = new PutPayCodeRequest("fugit", "alias", "magni",                 new PayCode() {{
                                payCode = new PayCodePayCode() {{
                                    benefit = false;
                                    code = "vel";
                                    description = "quae";
                                    effectiveDate = LocalDate.parse("2022-09-26");
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("exercitationem", "itaque");
                                    }};
                                    nextRevisionDate = LocalDate.parse("2022-10-14");
                                    niable = false;
                                    nominalCode = new PayCodePayCodeNominalCode() {{
                                        atHref = "unde";
                                        atRel = "nulla";
                                        atTitle = "distinctio";
                                    }};;
                                    nonArrestable = false;
                                    notional = false;
                                    readonly = false;
                                    region = PayCodePayCodeRegionEnum.WALES;
                                    revision = 157222;
                                    taxable = false;
                                    territory = PayCodePayCodeTerritoryEnum.UNITED_KINGDOM;
                                    type = PayCodePayCodeTypeEnum.NOT_SET;
                                }};;
                            }};, "nostrum");            

            PutPayCodeResponse res = sdk.payCode.putPayCode(req);

            if (res.payCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
