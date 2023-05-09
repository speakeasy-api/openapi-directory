# holidayScheme

### Available Operations

* [deleteHolidayScheme](#deleteholidayscheme) - Delete an holiday scheme
* [deleteHolidaySchemeRevision](#deleteholidayschemerevision) - Delete an holiday scheme revision matching the specified revision date.
* [deleteHolidaySchemeRevisionByNumber](#deleteholidayschemerevisionbynumber) - Delete an HolidayScheme revision matching the specified revision number.
* [deleteHolidaySchemeTag](#deleteholidayschemetag) - Delete holiday scheme tag
* [getAllHolidaySchemeTags](#getallholidayschemetags) - Get all holiday scheme tags
* [getHolidaySchemeByEffectiveDate](#getholidayschemebyeffectivedate) - Get holiday scheme by effective date.
* [getHolidaySchemeFromEmployer](#getholidayschemefromemployer) - Get holiday scheme from employer
* [getHolidaySchemeRevisionByNumber](#getholidayschemerevisionbynumber) - Gets the holiday scheme revision by revision number
* [getHolidaySchemeRevisions](#getholidayschemerevisions) - Get all holiday scheme revisions
* [getHolidaySchemesByEffectiveDate](#getholidayschemesbyeffectivedate) - Get holiday schemes from employer at a given effective date.
* [getHolidaySchemesFromEmployer](#getholidayschemesfromemployer) - Get holiday schemes from employer.
* [getHolidaySchemesWithTag](#getholidayschemeswithtag) - Get holiday schemes with tag
* [getTagFromHolidayScheme](#gettagfromholidayscheme) - Get holiday scheme tag
* [getTagFromHolidaySchemeRevision](#gettagfromholidayschemerevision) - Get holiday scheme revision tag
* [getTagsFromHolidayScheme](#gettagsfromholidayscheme) - Get all tags from the holiday scheme
* [getTagsFromHolidaySchemeRevision](#gettagsfromholidayschemerevision) - Get all holiday scheme revision tags
* [patchHolidayScheme](#patchholidayscheme) - Patches the holiday scheme
* [postHolidaySchemeIntoEmployer](#postholidayschemeintoemployer) - Create a new holiday scheme
* [putHolidaySchemeIntoEmployer](#putholidayschemeintoemployer) - Updates the holiday scheme
* [putHolidaySchemeTag](#putholidayschemetag) - Insert holiday scheme tag

## deleteHolidayScheme

Delete the specified holiday scheme

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHolidaySchemeRequest;
import org.openapis.openapi.models.operations.DeleteHolidaySchemeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteHolidaySchemeRequest req = new DeleteHolidaySchemeRequest("veniam", "voluptatem", "quisquam", "repudiandae");            

            DeleteHolidaySchemeResponse res = sdk.holidayScheme.deleteHolidayScheme(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHolidaySchemeRevision

Deletes the specified holiday scheme revision for the matching revision date

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHolidaySchemeRevisionRequest;
import org.openapis.openapi.models.operations.DeleteHolidaySchemeRevisionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteHolidaySchemeRevisionRequest req = new DeleteHolidaySchemeRevisionRequest("quasi", "atque", LocalDate.parse("2022-01-04"), "totam", "suscipit");            

            DeleteHolidaySchemeRevisionResponse res = sdk.holidayScheme.deleteHolidaySchemeRevision(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHolidaySchemeRevisionByNumber

Deletes the specified holiday scheme revision for the matching revision number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHolidaySchemeRevisionByNumberRequest;
import org.openapis.openapi.models.operations.DeleteHolidaySchemeRevisionByNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteHolidaySchemeRevisionByNumberRequest req = new DeleteHolidaySchemeRevisionByNumberRequest("quidem", "maxime", "et", "esse", "amet");            

            DeleteHolidaySchemeRevisionByNumberResponse res = sdk.holidayScheme.deleteHolidaySchemeRevisionByNumber(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHolidaySchemeTag

Deletes a tag from the holiday scheme

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHolidaySchemeTagRequest;
import org.openapis.openapi.models.operations.DeleteHolidaySchemeTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteHolidaySchemeTagRequest req = new DeleteHolidaySchemeTagRequest("assumenda", "ea", "atque", "error", "officiis");            

            DeleteHolidaySchemeTagResponse res = sdk.holidayScheme.deleteHolidaySchemeTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllHolidaySchemeTags

Gets all the holiday scheme tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllHolidaySchemeTagsRequest;
import org.openapis.openapi.models.operations.GetAllHolidaySchemeTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllHolidaySchemeTagsRequest req = new GetAllHolidaySchemeTagsRequest("officiis", "accusamus", "natus");            

            GetAllHolidaySchemeTagsResponse res = sdk.holidayScheme.getAllHolidaySchemeTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHolidaySchemeByEffectiveDate

Returns the holiday scheme's state at the specified effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHolidaySchemeByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetHolidaySchemeByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHolidaySchemeByEffectiveDateRequest req = new GetHolidaySchemeByEffectiveDateRequest("minima", "aspernatur", LocalDate.parse("2022-01-08"), "corrupti", "at");            

            GetHolidaySchemeByEffectiveDateResponse res = sdk.holidayScheme.getHolidaySchemeByEffectiveDate(req);

            if (res.holidayScheme != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHolidaySchemeFromEmployer

Gets the specified holiday scheme from employer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHolidaySchemeFromEmployerRequest;
import org.openapis.openapi.models.operations.GetHolidaySchemeFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHolidaySchemeFromEmployerRequest req = new GetHolidaySchemeFromEmployerRequest("error", "blanditiis", "suscipit", "repudiandae");            

            GetHolidaySchemeFromEmployerResponse res = sdk.holidayScheme.getHolidaySchemeFromEmployer(req);

            if (res.holidayScheme != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHolidaySchemeRevisionByNumber

Get the holiday scheme revision matching the specified revision number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHolidaySchemeRevisionByNumberRequest;
import org.openapis.openapi.models.operations.GetHolidaySchemeRevisionByNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHolidaySchemeRevisionByNumberRequest req = new GetHolidaySchemeRevisionByNumberRequest("atque", "atque", "sunt", "recusandae", "dolorum");            

            GetHolidaySchemeRevisionByNumberResponse res = sdk.holidayScheme.getHolidaySchemeRevisionByNumber(req);

            if (res.holidayScheme != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHolidaySchemeRevisions

Gets links to all the holiday scheme revisions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHolidaySchemeRevisionsRequest;
import org.openapis.openapi.models.operations.GetHolidaySchemeRevisionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHolidaySchemeRevisionsRequest req = new GetHolidaySchemeRevisionsRequest("repellendus", "labore", "reiciendis", "doloremque");            

            GetHolidaySchemeRevisionsResponse res = sdk.holidayScheme.getHolidaySchemeRevisions(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHolidaySchemesByEffectiveDate

Get links to all holiday schemes for the employer on specified effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHolidaySchemesByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetHolidaySchemesByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHolidaySchemesByEffectiveDateRequest req = new GetHolidaySchemesByEffectiveDateRequest("repudiandae", "dicta", LocalDate.parse("2022-11-23"), "dolores");            

            GetHolidaySchemesByEffectiveDateResponse res = sdk.holidayScheme.getHolidaySchemesByEffectiveDate(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHolidaySchemesFromEmployer

Get links to all holiday schemes for the specified employer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHolidaySchemesFromEmployerRequest;
import org.openapis.openapi.models.operations.GetHolidaySchemesFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHolidaySchemesFromEmployerRequest req = new GetHolidaySchemesFromEmployerRequest("enim", "laboriosam", "velit");            

            GetHolidaySchemesFromEmployerResponse res = sdk.holidayScheme.getHolidaySchemesFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHolidaySchemesWithTag

Gets the holiday scheme with the tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHolidaySchemesWithTagRequest;
import org.openapis.openapi.models.operations.GetHolidaySchemesWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHolidaySchemesWithTagRequest req = new GetHolidaySchemesWithTagRequest("a", "molestias", "magnam", "saepe");            

            GetHolidaySchemesWithTagResponse res = sdk.holidayScheme.getHolidaySchemesWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagFromHolidayScheme

Gets the tag from the holiday scheme

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagFromHolidaySchemeRequest;
import org.openapis.openapi.models.operations.GetTagFromHolidaySchemeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagFromHolidaySchemeRequest req = new GetTagFromHolidaySchemeRequest("consequuntur", "occaecati", "officiis", "perspiciatis", "in");            

            GetTagFromHolidaySchemeResponse res = sdk.holidayScheme.getTagFromHolidayScheme(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagFromHolidaySchemeRevision

Gets the tag from the holiday scheme revision

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagFromHolidaySchemeRevisionRequest;
import org.openapis.openapi.models.operations.GetTagFromHolidaySchemeRevisionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagFromHolidaySchemeRevisionRequest req = new GetTagFromHolidaySchemeRevisionRequest("adipisci", "eveniet", LocalDate.parse("2022-09-06"), "fugit", "id", "quis");            

            GetTagFromHolidaySchemeRevisionResponse res = sdk.holidayScheme.getTagFromHolidaySchemeRevision(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsFromHolidayScheme

Gets all the tags from the holiday scheme

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsFromHolidaySchemeRequest;
import org.openapis.openapi.models.operations.GetTagsFromHolidaySchemeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsFromHolidaySchemeRequest req = new GetTagsFromHolidaySchemeRequest("reprehenderit", "error", "illo", "corporis");            

            GetTagsFromHolidaySchemeResponse res = sdk.holidayScheme.getTagsFromHolidayScheme(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsFromHolidaySchemeRevision

Gets all the tags from the holiday scheme revision

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsFromHolidaySchemeRevisionRequest;
import org.openapis.openapi.models.operations.GetTagsFromHolidaySchemeRevisionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsFromHolidaySchemeRevisionRequest req = new GetTagsFromHolidaySchemeRevisionRequest("quidem", "eveniet", LocalDate.parse("2022-02-14"), "doloremque", "iure");            

            GetTagsFromHolidaySchemeRevisionResponse res = sdk.holidayScheme.getTagsFromHolidaySchemeRevision(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchHolidayScheme

Patches the specified holiday scheme with the supplied values

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchHolidaySchemeRequest;
import org.openapis.openapi.models.operations.PatchHolidaySchemeResponse;
import org.openapis.openapi.models.shared.HolidayScheme;
import org.openapis.openapi.models.shared.HolidaySchemeHolidayScheme;
import org.openapis.openapi.models.shared.HolidaySchemeHolidaySchemeAccrualPayCodes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchHolidaySchemeRequest req = new PatchHolidaySchemeRequest("ipsa", "totam", "quae",                 new HolidayScheme() {{
                                holidayScheme = new HolidaySchemeHolidayScheme() {{
                                    accrualPayCodes = new HolidaySchemeHolidaySchemeAccrualPayCodes() {{
                                        payCode = new String[]{{
                                            add("eveniet"),
                                            add("qui"),
                                        }};
                                    }};;
                                    allowExceedAnnualEntitlement = false;
                                    allowNegativeBalance = false;
                                    annualEntitlementWeeks = 7398.84;
                                    bankHolidayInclusive = false;
                                    code = "iure";
                                    effectiveDate = LocalDate.parse("2022-06-09");
                                    maxCarryOverDays = 6725.82;
                                    nextRevisionDate = LocalDate.parse("2021-12-10");
                                    offsetPayment = false;
                                    revision = 523006;
                                    schemeCeasedDate = LocalDate.parse("2022-09-05");
                                    schemeKey = "repellat";
                                    schemeName = "alias";
                                    yearStartDay = 362189;
                                    yearStartMonth = 597303;
                                }};;
                            }};, "nihil");            

            PatchHolidaySchemeResponse res = sdk.holidayScheme.patchHolidayScheme(req);

            if (res.holidayScheme != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postHolidaySchemeIntoEmployer

Create a new holiday scheme object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostHolidaySchemeIntoEmployerRequest;
import org.openapis.openapi.models.operations.PostHolidaySchemeIntoEmployerResponse;
import org.openapis.openapi.models.shared.HolidayScheme;
import org.openapis.openapi.models.shared.HolidaySchemeHolidayScheme;
import org.openapis.openapi.models.shared.HolidaySchemeHolidaySchemeAccrualPayCodes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostHolidaySchemeIntoEmployerRequest req = new PostHolidaySchemeIntoEmployerRequest("mollitia", "voluptas", "alias",                 new HolidayScheme() {{
                                holidayScheme = new HolidaySchemeHolidayScheme() {{
                                    accrualPayCodes = new HolidaySchemeHolidaySchemeAccrualPayCodes() {{
                                        payCode = new String[]{{
                                            add("reiciendis"),
                                            add("dolores"),
                                            add("id"),
                                            add("minima"),
                                        }};
                                    }};;
                                    allowExceedAnnualEntitlement = false;
                                    allowNegativeBalance = false;
                                    annualEntitlementWeeks = 2931.44;
                                    bankHolidayInclusive = false;
                                    code = "dolorum";
                                    effectiveDate = LocalDate.parse("2022-12-08");
                                    maxCarryOverDays = 9257.03;
                                    nextRevisionDate = LocalDate.parse("2022-05-20");
                                    offsetPayment = false;
                                    revision = 477646;
                                    schemeCeasedDate = LocalDate.parse("2022-09-19");
                                    schemeKey = "culpa";
                                    schemeName = "adipisci";
                                    yearStartDay = 890653;
                                    yearStartMonth = 514513;
                                }};;
                            }};);            

            PostHolidaySchemeIntoEmployerResponse res = sdk.holidayScheme.postHolidaySchemeIntoEmployer(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putHolidaySchemeIntoEmployer

Updates the existing specified holiday scheme object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutHolidaySchemeIntoEmployerRequest;
import org.openapis.openapi.models.operations.PutHolidaySchemeIntoEmployerResponse;
import org.openapis.openapi.models.shared.HolidayScheme;
import org.openapis.openapi.models.shared.HolidaySchemeHolidayScheme;
import org.openapis.openapi.models.shared.HolidaySchemeHolidaySchemeAccrualPayCodes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutHolidaySchemeIntoEmployerRequest req = new PutHolidaySchemeIntoEmployerRequest("eum", "nemo", "recusandae",                 new HolidayScheme() {{
                                holidayScheme = new HolidaySchemeHolidayScheme() {{
                                    accrualPayCodes = new HolidaySchemeHolidaySchemeAccrualPayCodes() {{
                                        payCode = new String[]{{
                                            add("provident"),
                                            add("quis"),
                                        }};
                                    }};;
                                    allowExceedAnnualEntitlement = false;
                                    allowNegativeBalance = false;
                                    annualEntitlementWeeks = 4317.85;
                                    bankHolidayInclusive = false;
                                    code = "reiciendis";
                                    effectiveDate = LocalDate.parse("2022-09-25");
                                    maxCarryOverDays = 3545.06;
                                    nextRevisionDate = LocalDate.parse("2022-05-06");
                                    offsetPayment = false;
                                    revision = 343392;
                                    schemeCeasedDate = LocalDate.parse("2021-10-26");
                                    schemeKey = "possimus";
                                    schemeName = "animi";
                                    yearStartDay = 402767;
                                    yearStartMonth = 397257;
                                }};;
                            }};, "accusantium");            

            PutHolidaySchemeIntoEmployerResponse res = sdk.holidayScheme.putHolidaySchemeIntoEmployer(req);

            if (res.holidayScheme != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putHolidaySchemeTag

Inserts a new tag on the holiday scheme

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutHolidaySchemeTagRequest;
import org.openapis.openapi.models.operations.PutHolidaySchemeTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutHolidaySchemeTagRequest req = new PutHolidaySchemeTagRequest("repellat", "doloribus", "ullam", "in", "nam");            

            PutHolidaySchemeTagResponse res = sdk.holidayScheme.putHolidaySchemeTag(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
