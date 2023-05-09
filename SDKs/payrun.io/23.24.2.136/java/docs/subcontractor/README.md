# subContractor

### Available Operations

* [deleteSubContractor](#deletesubcontractor) - Delete an sub contractor
* [deleteSubContractorRevision](#deletesubcontractorrevision) - Delete an sub contractor revision matching the specified revision date.
* [deleteSubContractorRevisionByNumber](#deletesubcontractorrevisionbynumber) - Delete an SubContractor revision matching the specified revision number.
* [getSubContractorByEffectiveDate](#getsubcontractorbyeffectivedate) - Get sub contractor by effective date.
* [getSubContractorFromEmployer](#getsubcontractorfromemployer) - Get sub contractor from employer
* [getSubContractorRevisionByNumber](#getsubcontractorrevisionbynumber) - Gets the sub contractor by revision number
* [getSubContractorRevisions](#getsubcontractorrevisions) - Get all sub contractor revisions
* [getSubContractorsByEffectiveDate](#getsubcontractorsbyeffectivedate) - Get sub contractors from employer at a given effective date.
* [getSubContractorsFromEmployer](#getsubcontractorsfromemployer) - Get sub contractors from employer.
* [patchSubContractor](#patchsubcontractor) - Patches the sub contractor
* [postSubContractorIntoEmployer](#postsubcontractorintoemployer) - Create a new sub contractor
* [putSubContractorIntoEmployer](#putsubcontractorintoemployer) - Updates the sub contractor

## deleteSubContractor

Delete the specified sub contractor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubContractorRequest;
import org.openapis.openapi.models.operations.DeleteSubContractorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSubContractorRequest req = new DeleteSubContractorRequest("officia", "impedit", "quasi", "blanditiis");            

            DeleteSubContractorResponse res = sdk.subContractor.deleteSubContractor(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubContractorRevision

Deletes the specified sub contractor revision for the matching revision date

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubContractorRevisionRequest;
import org.openapis.openapi.models.operations.DeleteSubContractorRevisionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSubContractorRevisionRequest req = new DeleteSubContractorRevisionRequest("eius", "quisquam", LocalDate.parse("2022-04-02"), "natus", "minus");            

            DeleteSubContractorRevisionResponse res = sdk.subContractor.deleteSubContractorRevision(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubContractorRevisionByNumber

Deletes the specified sub contractor revision for the matching revision number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubContractorRevisionByNumberRequest;
import org.openapis.openapi.models.operations.DeleteSubContractorRevisionByNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSubContractorRevisionByNumberRequest req = new DeleteSubContractorRevisionByNumberRequest("quia", "magnam", "reprehenderit", "quod", "quos");            

            DeleteSubContractorRevisionByNumberResponse res = sdk.subContractor.deleteSubContractorRevisionByNumber(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubContractorByEffectiveDate

Returns the sub contractor's state at the specified effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubContractorByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetSubContractorByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubContractorByEffectiveDateRequest req = new GetSubContractorByEffectiveDateRequest("corrupti", "amet", LocalDate.parse("2022-10-10"), "laborum", "modi");            

            GetSubContractorByEffectiveDateResponse res = sdk.subContractor.getSubContractorByEffectiveDate(req);

            if (res.subContractor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubContractorFromEmployer

Gets the specified sub contractor from employer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubContractorFromEmployerRequest;
import org.openapis.openapi.models.operations.GetSubContractorFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubContractorFromEmployerRequest req = new GetSubContractorFromEmployerRequest("perferendis", "necessitatibus", "architecto", "molestias");            

            GetSubContractorFromEmployerResponse res = sdk.subContractor.getSubContractorFromEmployer(req);

            if (res.subContractor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubContractorRevisionByNumber

Get the sub contractor revision matching the specified revision number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubContractorRevisionByNumberRequest;
import org.openapis.openapi.models.operations.GetSubContractorRevisionByNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubContractorRevisionByNumberRequest req = new GetSubContractorRevisionByNumberRequest("dolore", "sunt", "maiores", "neque", "odit");            

            GetSubContractorRevisionByNumberResponse res = sdk.subContractor.getSubContractorRevisionByNumber(req);

            if (res.subContractor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubContractorRevisions

Gets links to all the sub contractor revisions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubContractorRevisionsRequest;
import org.openapis.openapi.models.operations.GetSubContractorRevisionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubContractorRevisionsRequest req = new GetSubContractorRevisionsRequest("earum", "veniam", "ipsam", "eaque");            

            GetSubContractorRevisionsResponse res = sdk.subContractor.getSubContractorRevisions(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubContractorsByEffectiveDate

Get links to all sub contractors for the employer on specified effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubContractorsByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetSubContractorsByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubContractorsByEffectiveDateRequest req = new GetSubContractorsByEffectiveDateRequest("exercitationem", "veniam", LocalDate.parse("2022-09-06"), "nisi");            

            GetSubContractorsByEffectiveDateResponse res = sdk.subContractor.getSubContractorsByEffectiveDate(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubContractorsFromEmployer

Get links to all sub contractors for the specified employer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubContractorsFromEmployerRequest;
import org.openapis.openapi.models.operations.GetSubContractorsFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubContractorsFromEmployerRequest req = new GetSubContractorsFromEmployerRequest("tenetur", "quis", "quibusdam");            

            GetSubContractorsFromEmployerResponse res = sdk.subContractor.getSubContractorsFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchSubContractor

Patches the specified sub contractor with the supplied values

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchSubContractorRequest;
import org.openapis.openapi.models.operations.PatchSubContractorResponse;
import org.openapis.openapi.models.shared.SubContractor;
import org.openapis.openapi.models.shared.SubContractorSubContractor;
import org.openapis.openapi.models.shared.SubContractorSubContractorAddress;
import org.openapis.openapi.models.shared.SubContractorSubContractorBankAccount;
import org.openapis.openapi.models.shared.SubContractorSubContractorBusinessTypeEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorPayFrequencyEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorPaymentMethodEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorRegionEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorTaxationStatusEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorTerritoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchSubContractorRequest req = new PatchSubContractorRequest("nemo", "suscipit", "pariatur",                 new SubContractor() {{
                                subContractor = new SubContractorSubContractor() {{
                                    address = new SubContractorSubContractorAddress() {{
                                        address1 = "sit";
                                        address2 = "quidem";
                                        address3 = "repellendus";
                                        address4 = "perferendis";
                                        country = "Northern Mariana Islands";
                                        postcode = "18991-2862";
                                    }};;
                                    bankAccount = new SubContractorSubContractorBankAccount() {{
                                        accountName = "voluptatibus";
                                        accountNumber = "iure";
                                        branchName = "explicabo";
                                        reference = "minus";
                                        sortCode = "soluta";
                                    }};;
                                    businessType = SubContractorSubContractorBusinessTypeEnum.PARTNERSHIP;
                                    companyName = "velit";
                                    companyRegistrationNumber = "earum";
                                    deactivated = false;
                                    effectiveDate = LocalDate.parse("2021-10-04");
                                    firstName = "Dena";
                                    initials = "quasi";
                                    lastName = "O'Connell";
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("harum", "cumque");
                                        put("doloremque", "expedita");
                                        put("corrupti", "eaque");
                                        put("deserunt", "aliquid");
                                    }};
                                    middleName = "excepturi";
                                    nextRevisionDate = LocalDate.parse("2022-09-23");
                                    niNumber = "possimus";
                                    partnershipName = "dolor";
                                    partnershipUniqueTaxReference = "rerum";
                                    payFrequency = SubContractorSubContractorPayFrequencyEnum.MONTHLY;
                                    paymentMethod = SubContractorSubContractorPaymentMethodEnum.OTHER;
                                    region = SubContractorSubContractorRegionEnum.WALES;
                                    revision = 966576;
                                    taxationStatus = SubContractorSubContractorTaxationStatusEnum.GROSS;
                                    telephone = "quo";
                                    territory = SubContractorSubContractorTerritoryEnum.UNITED_KINGDOM;
                                    title = "Ms.";
                                    tradingName = "asperiores";
                                    uniqueTaxReference = "voluptatum";
                                    vatRegistered = false;
                                    vatRegistrationNumber = "iste";
                                    verificationDate = OffsetDateTime.parse("2022-12-18T10:44:39.786Z");
                                    verificationNumber = "illo";
                                    worksNumber = "aut";
                                }};;
                            }};, "doloribus");            

            PatchSubContractorResponse res = sdk.subContractor.patchSubContractor(req);

            if (res.subContractor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSubContractorIntoEmployer

Create a new sub contractor object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSubContractorIntoEmployerRequest;
import org.openapis.openapi.models.operations.PostSubContractorIntoEmployerResponse;
import org.openapis.openapi.models.shared.SubContractor;
import org.openapis.openapi.models.shared.SubContractorSubContractor;
import org.openapis.openapi.models.shared.SubContractorSubContractorAddress;
import org.openapis.openapi.models.shared.SubContractorSubContractorBankAccount;
import org.openapis.openapi.models.shared.SubContractorSubContractorBusinessTypeEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorPayFrequencyEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorPaymentMethodEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorRegionEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorTaxationStatusEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorTerritoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSubContractorIntoEmployerRequest req = new PostSubContractorIntoEmployerRequest("nostrum", "at", "possimus",                 new SubContractor() {{
                                subContractor = new SubContractorSubContractor() {{
                                    address = new SubContractorSubContractorAddress() {{
                                        address1 = "neque";
                                        address2 = "pariatur";
                                        address3 = "vel";
                                        address4 = "sapiente";
                                        country = "Niue";
                                        postcode = "50293";
                                    }};;
                                    bankAccount = new SubContractorSubContractorBankAccount() {{
                                        accountName = "aliquam";
                                        accountNumber = "quisquam";
                                        branchName = "quas";
                                        reference = "consequuntur";
                                        sortCode = "maiores";
                                    }};;
                                    businessType = SubContractorSubContractorBusinessTypeEnum.SOLE_TRADER;
                                    companyName = "aliquid";
                                    companyRegistrationNumber = "laudantium";
                                    deactivated = false;
                                    effectiveDate = LocalDate.parse("2022-07-23");
                                    firstName = "Gregory";
                                    initials = "consectetur";
                                    lastName = "Runte";
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("voluptatum", "ducimus");
                                        put("adipisci", "recusandae");
                                        put("tempora", "blanditiis");
                                    }};
                                    middleName = "numquam";
                                    nextRevisionDate = LocalDate.parse("2022-06-20");
                                    niNumber = "sit";
                                    partnershipName = "rerum";
                                    partnershipUniqueTaxReference = "veritatis";
                                    payFrequency = SubContractorSubContractorPayFrequencyEnum.WEEKLY;
                                    paymentMethod = SubContractorSubContractorPaymentMethodEnum.CHEQUE;
                                    region = SubContractorSubContractorRegionEnum.SCOTLAND;
                                    revision = 517121;
                                    taxationStatus = SubContractorSubContractorTaxationStatusEnum.GROSS;
                                    telephone = "deserunt";
                                    territory = SubContractorSubContractorTerritoryEnum.UNITED_KINGDOM;
                                    title = "Mr.";
                                    tradingName = "nihil";
                                    uniqueTaxReference = "voluptas";
                                    vatRegistered = false;
                                    vatRegistrationNumber = "animi";
                                    verificationDate = OffsetDateTime.parse("2022-12-31T17:43:08.927Z");
                                    verificationNumber = "fuga";
                                    worksNumber = "aut";
                                }};;
                            }};);            

            PostSubContractorIntoEmployerResponse res = sdk.subContractor.postSubContractorIntoEmployer(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSubContractorIntoEmployer

Updates the existing specified sub contractor object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSubContractorIntoEmployerRequest;
import org.openapis.openapi.models.operations.PutSubContractorIntoEmployerResponse;
import org.openapis.openapi.models.shared.SubContractor;
import org.openapis.openapi.models.shared.SubContractorSubContractor;
import org.openapis.openapi.models.shared.SubContractorSubContractorAddress;
import org.openapis.openapi.models.shared.SubContractorSubContractorBankAccount;
import org.openapis.openapi.models.shared.SubContractorSubContractorBusinessTypeEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorPayFrequencyEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorPaymentMethodEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorRegionEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorTaxationStatusEnum;
import org.openapis.openapi.models.shared.SubContractorSubContractorTerritoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutSubContractorIntoEmployerRequest req = new PutSubContractorIntoEmployerRequest("dolore", "maxime", "aliquam",                 new SubContractor() {{
                                subContractor = new SubContractorSubContractor() {{
                                    address = new SubContractorSubContractorAddress() {{
                                        address1 = "iste";
                                        address2 = "ullam";
                                        address3 = "eligendi";
                                        address4 = "placeat";
                                        country = "Heard Island and McDonald Islands";
                                        postcode = "60407-3071";
                                    }};;
                                    bankAccount = new SubContractorSubContractorBankAccount() {{
                                        accountName = "harum";
                                        accountNumber = "facere";
                                        branchName = "facilis";
                                        reference = "beatae";
                                        sortCode = "cumque";
                                    }};;
                                    businessType = SubContractorSubContractorBusinessTypeEnum.TRUST;
                                    companyName = "labore";
                                    companyRegistrationNumber = "expedita";
                                    deactivated = false;
                                    effectiveDate = LocalDate.parse("2021-12-14");
                                    firstName = "Karianne";
                                    initials = "officiis";
                                    lastName = "Ritchie";
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("sapiente", "quo");
                                        put("incidunt", "quod");
                                        put("minus", "porro");
                                        put("id", "excepturi");
                                    }};
                                    middleName = "occaecati";
                                    nextRevisionDate = LocalDate.parse("2021-06-14");
                                    niNumber = "esse";
                                    partnershipName = "hic";
                                    partnershipUniqueTaxReference = "maxime";
                                    payFrequency = SubContractorSubContractorPayFrequencyEnum.MONTHLY;
                                    paymentMethod = SubContractorSubContractorPaymentMethodEnum.FASTER_PAYMENTS;
                                    region = SubContractorSubContractorRegionEnum.NOT_SET;
                                    revision = 866292;
                                    taxationStatus = SubContractorSubContractorTaxationStatusEnum.GROSS;
                                    telephone = "recusandae";
                                    territory = SubContractorSubContractorTerritoryEnum.UNITED_KINGDOM;
                                    title = "Mr.";
                                    tradingName = "aut";
                                    uniqueTaxReference = "laudantium";
                                    vatRegistered = false;
                                    vatRegistrationNumber = "iusto";
                                    verificationDate = OffsetDateTime.parse("2022-01-31T05:44:55.505Z");
                                    verificationNumber = "tempora";
                                    worksNumber = "magni";
                                }};;
                            }};, "rerum");            

            PutSubContractorIntoEmployerResponse res = sdk.subContractor.putSubContractorIntoEmployer(req);

            if (res.subContractor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
