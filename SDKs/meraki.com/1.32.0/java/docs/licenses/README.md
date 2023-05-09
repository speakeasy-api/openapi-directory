# licenses

### Available Operations

* [assignOrganizationLicensesSeats](#assignorganizationlicensesseats) - Assign SM seats to a network
* [getOrganizationLicense](#getorganizationlicense) - Display a license
* [getOrganizationLicenses](#getorganizationlicenses) - List the licenses for an organization
* [getOrganizationLicensesOverview](#getorganizationlicensesoverview) - Return an overview of the license state for an organization
* [getOrganizationLicensingCotermLicenses](#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [moveOrganizationLicenses](#moveorganizationlicenses) - Move licenses to another organization
* [moveOrganizationLicensesSeats](#moveorganizationlicensesseats) - Move SM seats to another organization
* [moveOrganizationLicensingCotermLicenses](#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)
* [renewOrganizationLicensesSeats](#reneworganizationlicensesseats) - Renew SM seats of a license
* [updateOrganizationLicense](#updateorganizationlicense) - Update a license

## assignOrganizationLicensesSeats

Assign SM seats to a network. This will increase the managed SM device limit of the network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignOrganizationLicensesSeatsRequest;
import org.openapis.openapi.models.operations.AssignOrganizationLicensesSeatsRequestBody;
import org.openapis.openapi.models.operations.AssignOrganizationLicensesSeatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssignOrganizationLicensesSeatsRequest req = new AssignOrganizationLicensesSeatsRequest(                new AssignOrganizationLicensesSeatsRequestBody("quibusdam", "quas", 439044L);, "dicta");            

            AssignOrganizationLicensesSeatsResponse res = sdk.licenses.assignOrganizationLicensesSeats(req);

            if (res.assignOrganizationLicensesSeats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationLicense

Display a license

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationLicenseRequest;
import org.openapis.openapi.models.operations.GetOrganizationLicenseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationLicenseRequest req = new GetOrganizationLicenseRequest("aperiam", "magnam");            

            GetOrganizationLicenseResponse res = sdk.licenses.getOrganizationLicense(req);

            if (res.getOrganizationLicense200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationLicenses

List the licenses for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationLicensesRequest;
import org.openapis.openapi.models.operations.GetOrganizationLicensesResponse;
import org.openapis.openapi.models.operations.GetOrganizationLicensesStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationLicensesRequest req = new GetOrganizationLicensesRequest("quibusdam") {{
                deviceSerial = "eos";
                endingBefore = "delectus";
                networkId = "odio";
                perPage = 93722L;
                startingAfter = "velit";
                state = GetOrganizationLicensesStateEnum.UNUSED_ACTIVE;
            }};            

            GetOrganizationLicensesResponse res = sdk.licenses.getOrganizationLicenses(req);

            if (res.getOrganizationLicenses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationLicensesOverview

Return an overview of the license state for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationLicensesOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationLicensesOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationLicensesOverviewRequest req = new GetOrganizationLicensesOverviewRequest("ullam");            

            GetOrganizationLicensesOverviewResponse res = sdk.licenses.getOrganizationLicensesOverview(req);

            if (res.getOrganizationLicensesOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                .setSecurity(new Security("distinctio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationLicensingCotermLicensesRequest req = new GetOrganizationLicensingCotermLicensesRequest("nemo") {{
                endingBefore = "veniam";
                expired = false;
                invalidated = false;
                perPage = 600316L;
                startingAfter = "dolores";
            }};            

            GetOrganizationLicensingCotermLicensesResponse res = sdk.licenses.getOrganizationLicensingCotermLicenses(req);

            if (res.getOrganizationLicensingCotermLicenses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## moveOrganizationLicenses

Move licenses to another organization. This will also move any devices that the licenses are assigned to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MoveOrganizationLicensesRequest;
import org.openapis.openapi.models.operations.MoveOrganizationLicensesRequestBody;
import org.openapis.openapi.models.operations.MoveOrganizationLicensesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            MoveOrganizationLicensesRequest req = new MoveOrganizationLicensesRequest(                new MoveOrganizationLicensesRequestBody("tenetur",                 new String[]{{
                                                add("odio"),
                                                add("nesciunt"),
                                                add("molestias"),
                                                add("enim"),
                                            }});, "delectus");            

            MoveOrganizationLicensesResponse res = sdk.licenses.moveOrganizationLicenses(req);

            if (res.moveOrganizationLicenses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## moveOrganizationLicensesSeats

Move SM seats to another organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MoveOrganizationLicensesSeatsRequest;
import org.openapis.openapi.models.operations.MoveOrganizationLicensesSeatsRequestBody;
import org.openapis.openapi.models.operations.MoveOrganizationLicensesSeatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            MoveOrganizationLicensesSeatsRequest req = new MoveOrganizationLicensesSeatsRequest(                new MoveOrganizationLicensesSeatsRequestBody("dicta", "eos", 182269L);, "ipsum");            

            MoveOrganizationLicensesSeatsResponse res = sdk.licenses.moveOrganizationLicensesSeats(req);

            if (res.moveOrganizationLicensesSeats200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("expedita") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            MoveOrganizationLicensingCotermLicensesRequest req = new MoveOrganizationLicensingCotermLicensesRequest(                new MoveOrganizationLicensingCotermLicensesRequestBody(                new MoveOrganizationLicensingCotermLicensesRequestBodyDestination() {{
                                                mode = MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnum.ADD_DEVICES;
                                                organizationId = "molestias";
                                            }};,                 new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicenses[]{{
                                                add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(                new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(343145L, "quaerat") {{
                                                                        count = 937436L;
                                                                        model = "ex";
                                                                    }}),
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(407029L, "praesentium") {{
                                                                        count = 35396L;
                                                                        model = "nesciunt";
                                                                    }}),
                                                                }}, "voluptates") {{
                                                    counts = new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(733893L, "cupiditate") {{
                                                            count = 642908L;
                                                            model = "vitae";
                                                        }}),
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(416637L, "laborum") {{
                                                            count = 788033L;
                                                            model = "reprehenderit";
                                                        }}),
                                                    }};
                                                    key = "dicta";
                                                }}),
                                                add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(                new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                                    add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(953857L, "officia") {{
                                                                        count = 306690L;
                                                                        model = "totam";
                                                                    }}),
                                                                }}, "suscipit") {{
                                                    counts = new org.openapis.openapi.models.operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[]{{
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(948341L, "odio") {{
                                                            count = 243478L;
                                                            model = "accusantium";
                                                        }}),
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(926826L, "culpa") {{
                                                            count = 633471L;
                                                            model = "nobis";
                                                        }}),
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(557208L, "ipsa") {{
                                                            count = 744505L;
                                                            model = "asperiores";
                                                        }}),
                                                        add(new MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts(265094L, "ad") {{
                                                            count = 113948L;
                                                            model = "consequuntur";
                                                        }}),
                                                    }};
                                                    key = "perspiciatis";
                                                }}),
                                            }});, "autem");            

            MoveOrganizationLicensingCotermLicensesResponse res = sdk.licenses.moveOrganizationLicensingCotermLicenses(req);

            if (res.moveOrganizationLicensingCotermLicenses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renewOrganizationLicensesSeats

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenewOrganizationLicensesSeatsRequest;
import org.openapis.openapi.models.operations.RenewOrganizationLicensesSeatsRequestBody;
import org.openapis.openapi.models.operations.RenewOrganizationLicensesSeatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RenewOrganizationLicensesSeatsRequest req = new RenewOrganizationLicensesSeatsRequest(                new RenewOrganizationLicensesSeatsRequestBody("commodi", "iure");, "vero");            

            RenewOrganizationLicensesSeatsResponse res = sdk.licenses.renewOrganizationLicensesSeats(req);

            if (res.renewOrganizationLicensesSeats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationLicense

Update a license

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationLicenseRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationLicenseRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationLicenseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationLicenseRequest req = new UpdateOrganizationLicenseRequest("iste", "repellendus") {{
                requestBody = new UpdateOrganizationLicenseRequestBody() {{
                    deviceSerial = "eius";
                }};;
            }};            

            UpdateOrganizationLicenseResponse res = sdk.licenses.updateOrganizationLicense(req);

            if (res.updateOrganizationLicense200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
