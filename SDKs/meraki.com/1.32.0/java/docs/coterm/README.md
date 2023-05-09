# coterm

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
                .setSecurity(new Security("saepe") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationLicensingCotermLicensesRequest req = new GetOrganizationLicensingCotermLicensesRequest("corporis") {{
                endingBefore = "maxime";
                expired = false;
                invalidated = false;
                perPage = 95363L;
                startingAfter = "totam";
            }};            

            GetOrganizationLicensingCotermLicensesResponse res = sdk.coterm.getOrganizationLicensingCotermLicenses(req);

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
                .setSecurity(new Security("harum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            MoveOrganizationLicensingCotermLicensesRequest req = new MoveOrganizationLicensingCotermLicensesRequest(                new MoveOrganizationLicensingCotermLicensesRequestBody(                new MoveOrganizationLicensingCotermLicensesRequestBodyDestination() {{
                                                mode = MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnum.ADD_DEVICES;
                                                organizationId = "ipsam";
                                            }};,                 new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicenses[]{{
                                                add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(                new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(761965L, "rerum") {{
                                                                        count = 762279L;
                                                                        model = "aperiam";
                                                                    }}),
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(144188L, "quod") {{
                                                                        count = 753580L;
                                                                        model = "tempore";
                                                                    }}),
                                                                }}, "mollitia") {{
                                                    counts = new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(407877L, "incidunt") {{
                                                            count = 489718L;
                                                            model = "maiores";
                                                        }}),
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(213547L, "odit") {{
                                                            count = 547753L;
                                                            model = "aspernatur";
                                                        }}),
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(735506L, "repudiandae") {{
                                                            count = 336191L;
                                                            model = "voluptas";
                                                        }}),
                                                    }};
                                                    key = "molestias";
                                                }}),
                                                add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(                new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(933771L, "unde") {{
                                                                        count = 61706L;
                                                                        model = "eum";
                                                                    }}),
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(520049L, "cum") {{
                                                                        count = 148478L;
                                                                        model = "qui";
                                                                    }}),
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(44740L, "nisi") {{
                                                                        count = 367299L;
                                                                        model = "ex";
                                                                    }}),
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(350470L, "voluptatem") {{
                                                                        count = 314354L;
                                                                        model = "similique";
                                                                    }}),
                                                                }}, "dignissimos") {{
                                                    counts = new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(62091L, "quos") {{
                                                            count = 480180L;
                                                            model = "sint";
                                                        }}),
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(219715L, "corrupti") {{
                                                            count = 835054L;
                                                            model = "in";
                                                        }}),
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(643437L, "aut") {{
                                                            count = 12940L;
                                                            model = "iste";
                                                        }}),
                                                    }};
                                                    key = "dolores";
                                                }}),
                                                add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(                new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(139067L, "harum") {{
                                                                        count = 593682L;
                                                                        model = "possimus";
                                                                    }}),
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(260562L, "consequatur") {{
                                                                        count = 570826L;
                                                                        model = "iste";
                                                                    }}),
                                                                }}, "tempora") {{
                                                    counts = new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(999978L, "cum") {{
                                                            count = 706735L;
                                                            model = "officiis";
                                                        }}),
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(942754L, "eum") {{
                                                            count = 518571L;
                                                            model = "laborum";
                                                        }}),
                                                    }};
                                                    key = "rem";
                                                }}),
                                                add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(                new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(28751L, "ipsam") {{
                                                                        count = 306275L;
                                                                        model = "impedit";
                                                                    }}),
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(452831L, "ea") {{
                                                                        count = 244046L;
                                                                        model = "praesentium";
                                                                    }}),
                                                                }}, "eveniet") {{
                                                    counts = new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(653738L, "sit") {{
                                                            count = 433878L;
                                                            model = "adipisci";
                                                        }}),
                                                    }};
                                                    key = "natus";
                                                }}),
                                            }});, "ratione");            

            MoveOrganizationLicensingCotermLicensesResponse res = sdk.coterm.moveOrganizationLicensingCotermLicenses(req);

            if (res.moveOrganizationLicensingCotermLicenses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
