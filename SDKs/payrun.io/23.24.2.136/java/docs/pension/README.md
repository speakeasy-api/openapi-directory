# pension

### Available Operations

* [deletePension](#deletepension) - Delete a Pension
* [deletePensionRevision](#deletepensionrevision) - Delete an Pension revision matching the specified revision date.
* [deletePensionRevisionByNumber](#deletepensionrevisionbynumber) - Delete an Pension revision matching the specified revision number.
* [getPensionByEffectiveDate](#getpensionbyeffectivedate) - Get pension by effective date.
* [getPensionFromEmployer](#getpensionfromemployer) - Get pension from employer
* [getPensionRevisionByNumber](#getpensionrevisionbynumber) - Gets the pension by revision number
* [getPensionRevisions](#getpensionrevisions) - Get all pension revisions
* [getPensionsByEffectiveDate](#getpensionsbyeffectivedate) - Get pensions from employer at a given effective date.
* [getPensionsFromEmployer](#getpensionsfromemployer) - Get pensions from employer.
* [patchPension](#patchpension) - Patches the pension
* [postPensionIntoEmployer](#postpensionintoemployer) - Create a new Pension
* [putPensionIntoEmployer](#putpensionintoemployer) - Updates the Pension

## deletePension

Delete the specified ppension

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePensionRequest;
import org.openapis.openapi.models.operations.DeletePensionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePensionRequest req = new DeletePensionRequest("veniam", "libero", "architecto", "cupiditate");            

            DeletePensionResponse res = sdk.pension.deletePension(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePensionRevision

Deletes the specified pension revision for the matching revision date

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePensionRevisionRequest;
import org.openapis.openapi.models.operations.DeletePensionRevisionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePensionRevisionRequest req = new DeletePensionRevisionRequest("molestiae", "eligendi", LocalDate.parse("2022-03-31"), "magnam", "itaque");            

            DeletePensionRevisionResponse res = sdk.pension.deletePensionRevision(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePensionRevisionByNumber

Deletes the specified pension revision for the matching revision number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePensionRevisionByNumberRequest;
import org.openapis.openapi.models.operations.DeletePensionRevisionByNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePensionRevisionByNumberRequest req = new DeletePensionRevisionByNumberRequest("sed", "asperiores", "veniam", "consequuntur", "facere");            

            DeletePensionRevisionByNumberResponse res = sdk.pension.deletePensionRevisionByNumber(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPensionByEffectiveDate

Returns the penion's state at the specified effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPensionByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetPensionByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPensionByEffectiveDateRequest req = new GetPensionByEffectiveDateRequest("laudantium", "odit", LocalDate.parse("2022-04-27"), "exercitationem", "ab");            

            GetPensionByEffectiveDateResponse res = sdk.pension.getPensionByEffectiveDate(req);

            if (res.pension != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPensionFromEmployer

Gets the specified pension from employer by pension code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPensionFromEmployerRequest;
import org.openapis.openapi.models.operations.GetPensionFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPensionFromEmployerRequest req = new GetPensionFromEmployerRequest("velit", "facilis", "tempore", "nisi");            

            GetPensionFromEmployerResponse res = sdk.pension.getPensionFromEmployer(req);

            if (res.pension != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPensionRevisionByNumber

Get the pension revision matching the specified revision number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPensionRevisionByNumberRequest;
import org.openapis.openapi.models.operations.GetPensionRevisionByNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPensionRevisionByNumberRequest req = new GetPensionRevisionByNumberRequest("voluptatibus", "quaerat", "blanditiis", "distinctio", "nisi");            

            GetPensionRevisionByNumberResponse res = sdk.pension.getPensionRevisionByNumber(req);

            if (res.pension != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPensionRevisions

Returns links to all revisions of the pension

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPensionRevisionsRequest;
import org.openapis.openapi.models.operations.GetPensionRevisionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPensionRevisionsRequest req = new GetPensionRevisionsRequest("quis", "nisi", "libero", "minus");            

            GetPensionRevisionsResponse res = sdk.pension.getPensionRevisions(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPensionsByEffectiveDate

Get links to all pensions for the employer on specified effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPensionsByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetPensionsByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPensionsByEffectiveDateRequest req = new GetPensionsByEffectiveDateRequest("facere", "facilis", LocalDate.parse("2022-09-06"), "voluptatibus");            

            GetPensionsByEffectiveDateResponse res = sdk.pension.getPensionsByEffectiveDate(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPensionsFromEmployer

Get links to all pensions for the specified employer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPensionsFromEmployerRequest;
import org.openapis.openapi.models.operations.GetPensionsFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPensionsFromEmployerRequest req = new GetPensionsFromEmployerRequest("voluptatibus", "consequuntur", "debitis");            

            GetPensionsFromEmployerResponse res = sdk.pension.getPensionsFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchPension

Patches the specified pension with the supplied values

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchPensionRequest;
import org.openapis.openapi.models.operations.PatchPensionResponse;
import org.openapis.openapi.models.shared.Pension;
import org.openapis.openapi.models.shared.PensionPension;
import org.openapis.openapi.models.shared.PensionPensionCertificationEnum;
import org.openapis.openapi.models.shared.PensionPensionPensionablePayCodes;
import org.openapis.openapi.models.shared.PensionPensionProRataMethodEnum;
import org.openapis.openapi.models.shared.PensionPensionQualifyingPayCodes;
import org.openapis.openapi.models.shared.PensionPensionRasRoundingOverrideEnum;
import org.openapis.openapi.models.shared.PensionPensionRoundingOptionEnum;
import org.openapis.openapi.models.shared.PensionPensionTaxationMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchPensionRequest req = new PatchPensionRequest("labore", "rerum", "eos",                 new Pension() {{
                                pension = new PensionPension() {{
                                    aeCompatible = false;
                                    certification = PensionPensionCertificationEnum.SET1;
                                    code = "nostrum";
                                    contributionDeductionDay = 207296;
                                    effectiveDate = LocalDate.parse("2022-05-03");
                                    employeeContributionCash = 5221.76;
                                    employeeContributionPercent = 7538.9;
                                    employerContributionCash = 8536.06;
                                    employerContributionPercent = 6040.78;
                                    employerNiSaving = false;
                                    employerNiSavingPercentage = 8894.48;
                                    group = "ducimus";
                                    lowerThreshold = 2201.04;
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("error", "porro");
                                    }};
                                    nextRevisionDate = LocalDate.parse("2022-07-05");
                                    pensionablePayCodes = new PensionPensionPensionablePayCodes() {{
                                        payCode = new String[]{{
                                            add("fugiat"),
                                            add("ad"),
                                        }};
                                    }};;
                                    proRataMethod = PensionPensionProRataMethodEnum.ANNUAL260_DAYS;
                                    providerEmployerRef = "enim";
                                    providerName = "delectus";
                                    qualifyingPayCodes = new PensionPensionQualifyingPayCodes() {{
                                        payCode = new String[]{{
                                            add("dignissimos"),
                                            add("libero"),
                                        }};
                                    }};;
                                    rasRoundingOverride = PensionPensionRasRoundingOverrideEnum.NOT_SET;
                                    revision = 69182;
                                    roundingOption = PensionPensionRoundingOptionEnum.PENNY_DOWN;
                                    salarySacrifice = false;
                                    schemeName = "accusamus";
                                    subGroup = "saepe";
                                    taxationMethod = PensionPensionTaxationMethodEnum.RELIEF_AT_SOURCE;
                                    upperThreshold = 3340.18;
                                    useAEThresholds = false;
                                }};;
                            }};, "eos");            

            PatchPensionResponse res = sdk.pension.patchPension(req);

            if (res.pension != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPensionIntoEmployer

Create a new pension object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPensionIntoEmployerRequest;
import org.openapis.openapi.models.operations.PostPensionIntoEmployerResponse;
import org.openapis.openapi.models.shared.Pension;
import org.openapis.openapi.models.shared.PensionPension;
import org.openapis.openapi.models.shared.PensionPensionCertificationEnum;
import org.openapis.openapi.models.shared.PensionPensionPensionablePayCodes;
import org.openapis.openapi.models.shared.PensionPensionProRataMethodEnum;
import org.openapis.openapi.models.shared.PensionPensionQualifyingPayCodes;
import org.openapis.openapi.models.shared.PensionPensionRasRoundingOverrideEnum;
import org.openapis.openapi.models.shared.PensionPensionRoundingOptionEnum;
import org.openapis.openapi.models.shared.PensionPensionTaxationMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPensionIntoEmployerRequest req = new PostPensionIntoEmployerRequest("reiciendis", "earum", "reprehenderit",                 new Pension() {{
                                pension = new PensionPension() {{
                                    aeCompatible = false;
                                    certification = PensionPensionCertificationEnum.SET2;
                                    code = "nemo";
                                    contributionDeductionDay = 999809;
                                    effectiveDate = LocalDate.parse("2022-05-30");
                                    employeeContributionCash = 4671.19;
                                    employeeContributionPercent = 5349.08;
                                    employerContributionCash = 755.66;
                                    employerContributionPercent = 2902.48;
                                    employerNiSaving = false;
                                    employerNiSavingPercentage = 8288.41;
                                    group = "aliquam";
                                    lowerThreshold = 7904.63;
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("laudantium", "repudiandae");
                                        put("consequatur", "maxime");
                                        put("aspernatur", "nam");
                                    }};
                                    nextRevisionDate = LocalDate.parse("2021-11-18");
                                    pensionablePayCodes = new PensionPensionPensionablePayCodes() {{
                                        payCode = new String[]{{
                                            add("repudiandae"),
                                            add("rerum"),
                                            add("dignissimos"),
                                        }};
                                    }};;
                                    proRataMethod = PensionPensionProRataMethodEnum.ANNUAL365_DAYS;
                                    providerEmployerRef = "vero";
                                    providerName = "similique";
                                    qualifyingPayCodes = new PensionPensionQualifyingPayCodes() {{
                                        payCode = new String[]{{
                                            add("iure"),
                                            add("dolorem"),
                                            add("commodi"),
                                            add("impedit"),
                                        }};
                                    }};;
                                    rasRoundingOverride = PensionPensionRasRoundingOverrideEnum.BANKERS;
                                    revision = 12171;
                                    roundingOption = PensionPensionRoundingOptionEnum.NOT_SET;
                                    salarySacrifice = false;
                                    schemeName = "ad";
                                    subGroup = "quae";
                                    taxationMethod = PensionPensionTaxationMethodEnum.NOT_SET;
                                    upperThreshold = 8493.2;
                                    useAEThresholds = false;
                                }};;
                            }};);            

            PostPensionIntoEmployerResponse res = sdk.pension.postPensionIntoEmployer(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPensionIntoEmployer

Updates existing or inserts the specified pension object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPensionIntoEmployerRequest;
import org.openapis.openapi.models.operations.PutPensionIntoEmployerResponse;
import org.openapis.openapi.models.shared.Pension;
import org.openapis.openapi.models.shared.PensionPension;
import org.openapis.openapi.models.shared.PensionPensionCertificationEnum;
import org.openapis.openapi.models.shared.PensionPensionPensionablePayCodes;
import org.openapis.openapi.models.shared.PensionPensionProRataMethodEnum;
import org.openapis.openapi.models.shared.PensionPensionQualifyingPayCodes;
import org.openapis.openapi.models.shared.PensionPensionRasRoundingOverrideEnum;
import org.openapis.openapi.models.shared.PensionPensionRoundingOptionEnum;
import org.openapis.openapi.models.shared.PensionPensionTaxationMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutPensionIntoEmployerRequest req = new PutPensionIntoEmployerRequest("praesentium", "quidem", "cum",                 new Pension() {{
                                pension = new PensionPension() {{
                                    aeCompatible = false;
                                    certification = PensionPensionCertificationEnum.NOT_SET;
                                    code = "quasi";
                                    contributionDeductionDay = 118126;
                                    effectiveDate = LocalDate.parse("2022-12-02");
                                    employeeContributionCash = 9384.12;
                                    employeeContributionPercent = 4797.07;
                                    employerContributionCash = 2286.46;
                                    employerContributionPercent = 5879.67;
                                    employerNiSaving = false;
                                    employerNiSavingPercentage = 6771.41;
                                    group = "necessitatibus";
                                    lowerThreshold = 5928.8;
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("consequatur", "nemo");
                                        put("molestiae", "itaque");
                                        put("facilis", "corrupti");
                                        put("aperiam", "sint");
                                    }};
                                    nextRevisionDate = LocalDate.parse("2022-06-19");
                                    pensionablePayCodes = new PensionPensionPensionablePayCodes() {{
                                        payCode = new String[]{{
                                            add("dicta"),
                                            add("voluptatem"),
                                            add("velit"),
                                        }};
                                    }};;
                                    proRataMethod = PensionPensionProRataMethodEnum.ANNUAL260_DAYS;
                                    providerEmployerRef = "sunt";
                                    providerName = "a";
                                    qualifyingPayCodes = new PensionPensionQualifyingPayCodes() {{
                                        payCode = new String[]{{
                                            add("occaecati"),
                                        }};
                                    }};;
                                    rasRoundingOverride = PensionPensionRasRoundingOverrideEnum.FIVE_UP;
                                    revision = 107472;
                                    roundingOption = PensionPensionRoundingOptionEnum.FLOOR;
                                    salarySacrifice = false;
                                    schemeName = "labore";
                                    subGroup = "minus";
                                    taxationMethod = PensionPensionTaxationMethodEnum.NET_BASED;
                                    upperThreshold = 323.56;
                                    useAEThresholds = false;
                                }};;
                            }};, "perferendis");            

            PutPensionIntoEmployerResponse res = sdk.pension.putPensionIntoEmployer(req);

            if (res.pension != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
