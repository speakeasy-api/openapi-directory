# locations

### Available Operations

* [createLocation](#createlocation) - CreateLocation
* [listLocations](#listlocations) - ListLocations
* [retrieveLocation](#retrievelocation) - RetrieveLocation
* [updateLocation](#updatelocation) - UpdateLocation

## createLocation

Creates a location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLocationResponse;
import org.openapis.openapi.models.operations.CreateLocationSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.BusinessHours;
import org.openapis.openapi.models.shared.BusinessHoursPeriod;
import org.openapis.openapi.models.shared.Coordinates;
import org.openapis.openapi.models.shared.CreateLocationRequest;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.TaxIds;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateLocationRequest req = new CreateLocationRequest() {{
                location = new Location() {{
                    address = new Address() {{
                        addressLine1 = "quibusdam";
                        addressLine2 = "corrupti";
                        addressLine3 = "maxime";
                        administrativeDistrictLevel1 = "aliquam";
                        administrativeDistrictLevel2 = "adipisci";
                        administrativeDistrictLevel3 = "explicabo";
                        country = "Australia";
                        firstName = "Trudie";
                        lastName = "Gorczany";
                        locality = "quae";
                        organization = "eos";
                        postalCode = "08325";
                        sublocality = "iusto";
                        sublocality2 = "mollitia";
                        sublocality3 = "porro";
                    }};;
                    businessEmail = "voluptas";
                    businessHours = new BusinessHours() {{
                        periods = new org.openapis.openapi.models.shared.BusinessHoursPeriod[]{{
                            add(new BusinessHoursPeriod() {{
                                dayOfWeek = "neque";
                                endLocalTime = "expedita";
                                startLocalTime = "excepturi";
                            }}),
                            add(new BusinessHoursPeriod() {{
                                dayOfWeek = "quaerat";
                                endLocalTime = "nobis";
                                startLocalTime = "nesciunt";
                            }}),
                            add(new BusinessHoursPeriod() {{
                                dayOfWeek = "quidem";
                                endLocalTime = "unde";
                                startLocalTime = "fugiat";
                            }}),
                        }};
                    }};;
                    businessName = "magni";
                    capabilities = new String[]{{
                        add("atque"),
                        add("blanditiis"),
                    }};
                    coordinates = new Coordinates() {{
                        latitude = 8422.41;
                        longitude = 4884.37;
                    }};;
                    country = "Morocco";
                    createdAt = "ad";
                    currency = "officia";
                    description = "fuga";
                    facebookUrl = "incidunt";
                    fullFormatLogoUrl = "aspernatur";
                    id = "fc405669-f69a-4006-9212-49450819d7c3";
                    instagramUsername = "cum";
                    languageCode = "et";
                    logoUrl = "harum";
                    mcc = "magnam";
                    merchantId = "illo";
                    name = "Mrs. Miguel Goyette PhD";
                    phoneNumber = "accusantium";
                    posBackgroundUrl = "sit";
                    status = "nesciunt";
                    taxIds = new TaxIds() {{
                        euVat = "veritatis";
                        frNaf = "ipsa";
                        frSiret = "possimus";
                    }};;
                    timezone = "perferendis";
                    twitterUsername = "qui";
                    type = "velit";
                    websiteUrl = "repellendus";
                }};;
            }};            

            CreateLocationResponse res = sdk.locations.createLocation(req, new CreateLocationSecurity("quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createLocationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLocations

Provides information of all locations of a business.

Many Square API endpoints require a `location_id` parameter.
The `id` field of the [`Location`](https://developer.squareup.com/reference/square_2021-08-18/objects/Location) objects returned by this
endpoint correspond to that `location_id` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLocationsResponse;
import org.openapis.openapi.models.operations.ListLocationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListLocationsResponse res = sdk.locations.listLocations(new ListLocationsSecurity("error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveLocation

Retrieves details of a location. You can specify "main" 
as the location ID to retrieve details of the 
main location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveLocationRequest;
import org.openapis.openapi.models.operations.RetrieveLocationResponse;
import org.openapis.openapi.models.operations.RetrieveLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveLocationRequest req = new RetrieveLocationRequest("ipsa");            

            RetrieveLocationResponse res = sdk.locations.retrieveLocation(req, new RetrieveLocationSecurity("beatae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveLocationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLocation

Updates a location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLocationRequest;
import org.openapis.openapi.models.operations.UpdateLocationResponse;
import org.openapis.openapi.models.operations.UpdateLocationSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.BusinessHours;
import org.openapis.openapi.models.shared.BusinessHoursPeriod;
import org.openapis.openapi.models.shared.Coordinates;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.TaxIds;
import org.openapis.openapi.models.shared.UpdateLocationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateLocationRequest req = new UpdateLocationRequest(                new UpdateLocationRequest() {{
                                location = new Location() {{
                                    address = new Address() {{
                                        addressLine1 = "doloribus";
                                        addressLine2 = "veniam";
                                        addressLine3 = "animi";
                                        administrativeDistrictLevel1 = "delectus";
                                        administrativeDistrictLevel2 = "pariatur";
                                        administrativeDistrictLevel3 = "eos";
                                        country = "Northern Mariana Islands";
                                        firstName = "Harold";
                                        lastName = "Sanford";
                                        locality = "aliquam";
                                        organization = "magnam";
                                        postalCode = "24695-8551";
                                        sublocality = "veniam";
                                        sublocality2 = "amet";
                                        sublocality3 = "nobis";
                                    }};;
                                    businessEmail = "quos";
                                    businessHours = new BusinessHours() {{
                                        periods = new org.openapis.openapi.models.shared.BusinessHoursPeriod[]{{
                                            add(new BusinessHoursPeriod() {{
                                                dayOfWeek = "ea";
                                                endLocalTime = "consequuntur";
                                                startLocalTime = "delectus";
                                            }}),
                                            add(new BusinessHoursPeriod() {{
                                                dayOfWeek = "quaerat";
                                                endLocalTime = "quos";
                                                startLocalTime = "excepturi";
                                            }}),
                                            add(new BusinessHoursPeriod() {{
                                                dayOfWeek = "eum";
                                                endLocalTime = "rerum";
                                                startLocalTime = "a";
                                            }}),
                                        }};
                                    }};;
                                    businessName = "ad";
                                    capabilities = new String[]{{
                                        add("eveniet"),
                                    }};
                                    coordinates = new Coordinates() {{
                                        latitude = 2717.82;
                                        longitude = 4082;
                                    }};;
                                    country = "Guadeloupe";
                                    createdAt = "sed";
                                    currency = "fugiat";
                                    description = "dolorem";
                                    facebookUrl = "cumque";
                                    fullFormatLogoUrl = "nesciunt";
                                    id = "43d61778-af49-4124-b725-e621909e9104";
                                    instagramUsername = "labore";
                                    languageCode = "id";
                                    logoUrl = "ullam";
                                    mcc = "quibusdam";
                                    merchantId = "recusandae";
                                    name = "Belinda O'Hara";
                                    phoneNumber = "ducimus";
                                    posBackgroundUrl = "eaque";
                                    status = "aliquid";
                                    taxIds = new TaxIds() {{
                                        euVat = "ea";
                                        frNaf = "odio";
                                        frSiret = "voluptatem";
                                    }};;
                                    timezone = "quisquam";
                                    twitterUsername = "delectus";
                                    type = "et";
                                    websiteUrl = "optio";
                                }};;
                            }};, "a");            

            UpdateLocationResponse res = sdk.locations.updateLocation(req, new UpdateLocationSecurity("quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateLocationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
