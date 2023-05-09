# licensing

### Available Operations

* [getOrganizationLicensingCotermLicenses](#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [moveOrganizationLicensingCotermLicenses](#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)

## getOrganizationLicensingCotermLicenses

List the licenses in a coterm organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationLicensingCotermLicensesRequest;
import org.openapis.openapi.models.operations.GetOrganizationLicensingCotermLicensesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationLicensingCotermLicensesRequest req = new GetOrganizationLicensingCotermLicensesRequest("ad") {{
                endingBefore = "modi";
                expired = false;
                invalidated = false;
                perPage = 200824L;
                startingAfter = "quod";
            }};            

            GetOrganizationLicensingCotermLicensesResponse res = sdk.licensing.getOrganizationLicensingCotermLicenses(req);

            if (res.getOrganizationLicensingCotermLicenses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## moveOrganizationLicensingCotermLicenses

Moves a license to a different organization (coterm only)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequest;
import org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBody;
import org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyDestination;
import org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnum;
import org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicenses;
import org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts;
import org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            MoveOrganizationLicensingCotermLicensesRequest req = new MoveOrganizationLicensingCotermLicensesRequest(                new MoveOrganizationLicensingCotermLicensesRequestBody(                new MoveOrganizationLicensingCotermLicensesRequestBodyDestination() {{
                                                mode = MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnum.RENEW;
                                                organizationId = "est";
                                            }};,                 new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicenses[]{{
                                                add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(                new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(524609L, "sunt") {{
                                                                        count = 906214L;
                                                                        model = "perferendis";
                                                                    }}),
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(992514L, "facilis") {{
                                                                        count = 645664L;
                                                                        model = "dolores";
                                                                    }}),
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(897576L, "provident") {{
                                                                        count = 976625L;
                                                                        model = "maiores";
                                                                    }}),
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(672467L, "esse") {{
                                                                        count = 246723L;
                                                                        model = "et";
                                                                    }}),
                                                                }}, "quos") {{
                                                    counts = new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(898775L, "atque") {{
                                                            count = 892924L;
                                                            model = "eius";
                                                        }}),
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(750026L, "modi") {{
                                                            count = 708873L;
                                                            model = "nulla";
                                                        }}),
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(539956L, "incidunt") {{
                                                            count = 455808L;
                                                            model = "sit";
                                                        }}),
                                                    }};
                                                    key = "nesciunt";
                                                }}),
                                                add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(                new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(195016L, "qui") {{
                                                                        count = 734704L;
                                                                        model = "natus";
                                                                    }}),
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(792479L, "possimus") {{
                                                                        count = 22158L;
                                                                        model = "neque";
                                                                    }}),
                                                                }}, "magnam") {{
                                                    counts = new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(417117L, "dolore") {{
                                                            count = 275071L;
                                                            model = "eos";
                                                        }}),
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(730129L, "enim") {{
                                                            count = 805490L;
                                                            model = "est";
                                                        }}),
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(136723L, "minus") {{
                                                            count = 85684L;
                                                            model = "libero";
                                                        }}),
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(58322L, "quos") {{
                                                            count = 99L;
                                                            model = "repellendus";
                                                        }}),
                                                    }};
                                                    key = "porro";
                                                }}),
                                            }});, "facere");            

            MoveOrganizationLicensingCotermLicensesResponse res = sdk.licensing.moveOrganizationLicensingCotermLicenses(req);

            if (res.moveOrganizationLicensingCotermLicenses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
