# resources

### Available Operations

* [directoryResourcesBuildingsDelete](#directoryresourcesbuildingsdelete) - Deletes a building.
* [directoryResourcesBuildingsGet](#directoryresourcesbuildingsget) - Retrieves a building.
* [directoryResourcesBuildingsInsert](#directoryresourcesbuildingsinsert) - Inserts a building.
* [directoryResourcesBuildingsList](#directoryresourcesbuildingslist) - Retrieves a list of buildings for an account.
* [directoryResourcesBuildingsPatch](#directoryresourcesbuildingspatch) - Patches a building.
* [directoryResourcesBuildingsUpdate](#directoryresourcesbuildingsupdate) - Updates a building.
* [directoryResourcesCalendarsDelete](#directoryresourcescalendarsdelete) - Deletes a calendar resource.
* [directoryResourcesCalendarsGet](#directoryresourcescalendarsget) - Retrieves a calendar resource.
* [directoryResourcesCalendarsInsert](#directoryresourcescalendarsinsert) - Inserts a calendar resource.
* [directoryResourcesCalendarsList](#directoryresourcescalendarslist) - Retrieves a list of calendar resources for an account.
* [directoryResourcesCalendarsPatch](#directoryresourcescalendarspatch) - Patches a calendar resource.
* [directoryResourcesCalendarsUpdate](#directoryresourcescalendarsupdate) - Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
* [directoryResourcesFeaturesDelete](#directoryresourcesfeaturesdelete) - Deletes a feature.
* [directoryResourcesFeaturesGet](#directoryresourcesfeaturesget) - Retrieves a feature.
* [directoryResourcesFeaturesInsert](#directoryresourcesfeaturesinsert) - Inserts a feature.
* [directoryResourcesFeaturesList](#directoryresourcesfeatureslist) - Retrieves a list of features for an account.
* [directoryResourcesFeaturesPatch](#directoryresourcesfeaturespatch) - Patches a feature.
* [directoryResourcesFeaturesRename](#directoryresourcesfeaturesrename) - Renames a feature.
* [directoryResourcesFeaturesUpdate](#directoryresourcesfeaturesupdate) - Updates a feature.

## directoryResourcesBuildingsDelete

Deletes a building.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesBuildingsDeleteRequest req = new DirectoryResourcesBuildingsDeleteRequest("illo", "repellat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "incidunt";
                key = "explicabo";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "optio";
                uploadProtocol = "alias";
            }};            

            DirectoryResourcesBuildingsDeleteResponse res = sdk.resources.directoryResourcesBuildingsDelete(req, new DirectoryResourcesBuildingsDeleteSecurity("quidem", "nesciunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesBuildingsGet

Retrieves a building.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsGetRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsGetResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsGetSecurity;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesBuildingsGetRequest req = new DirectoryResourcesBuildingsGetRequest("commodi", "sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veniam";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "sint";
                key = "ut";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "adipisci";
                uploadProtocol = "libero";
            }};            

            DirectoryResourcesBuildingsGetResponse res = sdk.resources.directoryResourcesBuildingsGet(req, new DirectoryResourcesBuildingsGetSecurity() {{
                option1 = new DirectoryResourcesBuildingsGetSecurityOption1("in", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.building != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesBuildingsInsert

Inserts a building.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsInsertCoordinatesSourceEnum;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsInsertRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsInsertResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Building;
import org.openapis.openapi.models.shared.BuildingAddress;
import org.openapis.openapi.models.shared.BuildingCoordinates;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesBuildingsInsertRequest req = new DirectoryResourcesBuildingsInsertRequest("ex") {{
                dollarXgafv = XgafvEnum.TWO;
                building = new Building() {{
                    address = new BuildingAddress() {{
                        addressLines = new String[]{{
                            add("beatae"),
                        }};
                        administrativeArea = "hic";
                        languageCode = "nisi";
                        locality = "quisquam";
                        postalCode = "46311";
                        regionCode = "aliquid";
                        sublocality = "magni";
                    }};;
                    buildingId = "incidunt";
                    buildingName = "adipisci";
                    coordinates = new BuildingCoordinates() {{
                        latitude = 5063.43;
                        longitude = 2205.28;
                    }};;
                    description = "exercitationem";
                    etags = "expedita";
                    floorNames = new String[]{{
                        add("impedit"),
                        add("sit"),
                        add("nemo"),
                    }};
                    kind = "culpa";
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "deserunt";
                coordinatesSource = DirectoryResourcesBuildingsInsertCoordinatesSourceEnum.CLIENT_SPECIFIED;
                fields = "veniam";
                key = "quod";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "quisquam";
                uploadProtocol = "enim";
            }};            

            DirectoryResourcesBuildingsInsertResponse res = sdk.resources.directoryResourcesBuildingsInsert(req, new DirectoryResourcesBuildingsInsertSecurity("doloribus", "assumenda") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.building != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesBuildingsList

Retrieves a list of buildings for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsListRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsListResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsListSecurity;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesBuildingsListRequest req = new DirectoryResourcesBuildingsListRequest("officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "nobis";
                key = "necessitatibus";
                maxResults = 155978L;
                oauthToken = "dicta";
                pageToken = "vel";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "debitis";
                uploadProtocol = "ullam";
            }};            

            DirectoryResourcesBuildingsListResponse res = sdk.resources.directoryResourcesBuildingsList(req, new DirectoryResourcesBuildingsListSecurity() {{
                option1 = new DirectoryResourcesBuildingsListSecurityOption1("architecto", "accusantium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.buildings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesBuildingsPatch

Patches a building.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsPatchCoordinatesSourceEnum;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsPatchRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsPatchResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Building;
import org.openapis.openapi.models.shared.BuildingAddress;
import org.openapis.openapi.models.shared.BuildingCoordinates;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesBuildingsPatchRequest req = new DirectoryResourcesBuildingsPatchRequest("perferendis", "veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                building = new Building() {{
                    address = new BuildingAddress() {{
                        addressLines = new String[]{{
                            add("iure"),
                            add("quibusdam"),
                            add("quod"),
                            add("nemo"),
                        }};
                        administrativeArea = "recusandae";
                        languageCode = "velit";
                        locality = "magnam";
                        postalCode = "31465";
                        regionCode = "cum";
                        sublocality = "doloribus";
                    }};;
                    buildingId = "facilis";
                    buildingName = "quidem";
                    coordinates = new BuildingCoordinates() {{
                        latitude = 9320.8;
                        longitude = 3895.48;
                    }};;
                    description = "unde";
                    etags = "modi";
                    floorNames = new String[]{{
                        add("hic"),
                        add("cum"),
                        add("aspernatur"),
                    }};
                    kind = "libero";
                }};;
                accessToken = "nam";
                alt = AltEnum.JSON;
                callback = "recusandae";
                coordinatesSource = DirectoryResourcesBuildingsPatchCoordinatesSourceEnum.SOURCE_UNSPECIFIED;
                fields = "id";
                key = "saepe";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "nesciunt";
                uploadProtocol = "illum";
            }};            

            DirectoryResourcesBuildingsPatchResponse res = sdk.resources.directoryResourcesBuildingsPatch(req, new DirectoryResourcesBuildingsPatchSecurity("nemo", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.building != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesBuildingsUpdate

Updates a building.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsUpdateRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsUpdateResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesBuildingsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Building;
import org.openapis.openapi.models.shared.BuildingAddress;
import org.openapis.openapi.models.shared.BuildingCoordinates;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesBuildingsUpdateRequest req = new DirectoryResourcesBuildingsUpdateRequest("facilis", "non") {{
                dollarXgafv = XgafvEnum.TWO;
                building = new Building() {{
                    address = new BuildingAddress() {{
                        addressLines = new String[]{{
                            add("recusandae"),
                            add("distinctio"),
                            add("pariatur"),
                            add("ad"),
                        }};
                        administrativeArea = "facere";
                        languageCode = "laborum";
                        locality = "eveniet";
                        postalCode = "28303-6566";
                        regionCode = "occaecati";
                        sublocality = "labore";
                    }};;
                    buildingId = "quo";
                    buildingName = "perferendis";
                    coordinates = new BuildingCoordinates() {{
                        latitude = 1435.28;
                        longitude = 3992.22;
                    }};;
                    description = "magnam";
                    etags = "quaerat";
                    floorNames = new String[]{{
                        add("hic"),
                        add("nostrum"),
                        add("officiis"),
                        add("unde"),
                    }};
                    kind = "nulla";
                }};;
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "magnam";
                coordinatesSource = DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum.RESOLVED_FROM_ADDRESS;
                fields = "esse";
                key = "corrupti";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "impedit";
                uploadProtocol = "quasi";
            }};            

            DirectoryResourcesBuildingsUpdateResponse res = sdk.resources.directoryResourcesBuildingsUpdate(req, new DirectoryResourcesBuildingsUpdateSecurity("deserunt", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.building != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesCalendarsDelete

Deletes a calendar resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesCalendarsDeleteRequest req = new DirectoryResourcesCalendarsDeleteRequest("laboriosam", "doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facere";
                alt = AltEnum.PROTO;
                callback = "maxime";
                fields = "consequatur";
                key = "eaque";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "porro";
                uploadProtocol = "blanditiis";
            }};            

            DirectoryResourcesCalendarsDeleteResponse res = sdk.resources.directoryResourcesCalendarsDelete(req, new DirectoryResourcesCalendarsDeleteSecurity("quae", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesCalendarsGet

Retrieves a calendar resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsGetRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsGetResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsGetSecurity;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesCalendarsGetRequest req = new DirectoryResourcesCalendarsGetRequest("officiis", "sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "a";
                key = "maiores";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "alias";
                uploadProtocol = "asperiores";
            }};            

            DirectoryResourcesCalendarsGetResponse res = sdk.resources.directoryResourcesCalendarsGet(req, new DirectoryResourcesCalendarsGetSecurity() {{
                option1 = new DirectoryResourcesCalendarsGetSecurityOption1("rem", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.calendarResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesCalendarsInsert

Inserts a calendar resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsInsertRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsInsertResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CalendarResource;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesCalendarsInsertRequest req = new DirectoryResourcesCalendarsInsertRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                calendarResource = new CalendarResource() {{
                    buildingId = "doloribus";
                    capacity = 244569;
                    etags = "eius";
                    featureInstances = "esse";
                    floorName = "in";
                    floorSection = "eligendi";
                    generatedResourceName = "quasi";
                    kind = "neque";
                    resourceCategory = "vero";
                    resourceDescription = "excepturi";
                    resourceEmail = "accusantium";
                    resourceId = "qui";
                    resourceName = "impedit";
                    resourceType = "beatae";
                    userVisibleDescription = "incidunt";
                }};;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "corporis";
                fields = "rerum";
                key = "alias";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "accusantium";
                uploadProtocol = "id";
            }};            

            DirectoryResourcesCalendarsInsertResponse res = sdk.resources.directoryResourcesCalendarsInsert(req, new DirectoryResourcesCalendarsInsertSecurity("laboriosam", "ex") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.calendarResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesCalendarsList

Retrieves a list of calendar resources for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsListRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsListResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsListSecurity;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesCalendarsListRequest req = new DirectoryResourcesCalendarsListRequest("quas") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ullam";
                alt = AltEnum.JSON;
                callback = "similique";
                fields = "incidunt";
                key = "quam";
                maxResults = 169312L;
                oauthToken = "deserunt";
                orderBy = "delectus";
                pageToken = "omnis";
                prettyPrint = false;
                query = "sed";
                quotaUser = "nesciunt";
                uploadType = "maxime";
                uploadProtocol = "quis";
            }};            

            DirectoryResourcesCalendarsListResponse res = sdk.resources.directoryResourcesCalendarsList(req, new DirectoryResourcesCalendarsListSecurity() {{
                option1 = new DirectoryResourcesCalendarsListSecurityOption1("cupiditate", "aliquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.calendarResources != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesCalendarsPatch

Patches a calendar resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsPatchRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsPatchResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CalendarResource;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesCalendarsPatchRequest req = new DirectoryResourcesCalendarsPatchRequest("excepturi", "maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                calendarResource = new CalendarResource() {{
                    buildingId = "velit";
                    capacity = 971764;
                    etags = "amet";
                    featureInstances = "nemo";
                    floorName = "ipsa";
                    floorSection = "quisquam";
                    generatedResourceName = "tenetur";
                    kind = "quas";
                    resourceCategory = "molestiae";
                    resourceDescription = "aliquid";
                    resourceEmail = "asperiores";
                    resourceId = "a";
                    resourceName = "nobis";
                    resourceType = "perspiciatis";
                    userVisibleDescription = "accusantium";
                }};;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "eveniet";
                key = "porro";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "modi";
                uploadProtocol = "voluptates";
            }};            

            DirectoryResourcesCalendarsPatchResponse res = sdk.resources.directoryResourcesCalendarsPatch(req, new DirectoryResourcesCalendarsPatchSecurity("fugit", "eius") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.calendarResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesCalendarsUpdate

Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsUpdateRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsUpdateResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesCalendarsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CalendarResource;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesCalendarsUpdateRequest req = new DirectoryResourcesCalendarsUpdateRequest("sequi", "eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                calendarResource = new CalendarResource() {{
                    buildingId = "esse";
                    capacity = 500021;
                    etags = "sint";
                    featureInstances = "repellat";
                    floorName = "a";
                    floorSection = "animi";
                    generatedResourceName = "maiores";
                    kind = "itaque";
                    resourceCategory = "nulla";
                    resourceDescription = "deserunt";
                    resourceEmail = "corporis";
                    resourceId = "velit";
                    resourceName = "officiis";
                    resourceType = "enim";
                    userVisibleDescription = "officia";
                }};;
                accessToken = "saepe";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "accusantium";
                key = "officia";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "blanditiis";
                uploadProtocol = "eius";
            }};            

            DirectoryResourcesCalendarsUpdateResponse res = sdk.resources.directoryResourcesCalendarsUpdate(req, new DirectoryResourcesCalendarsUpdateSecurity("quisquam", "eos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.calendarResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesFeaturesDelete

Deletes a feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesFeaturesDeleteRequest req = new DirectoryResourcesFeaturesDeleteRequest("nobis", "natus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.JSON;
                callback = "reprehenderit";
                fields = "quod";
                key = "quos";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "molestiae";
                uploadProtocol = "amet";
            }};            

            DirectoryResourcesFeaturesDeleteResponse res = sdk.resources.directoryResourcesFeaturesDelete(req, new DirectoryResourcesFeaturesDeleteSecurity("laborum", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesFeaturesGet

Retrieves a feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesGetRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesGetResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesGetSecurity;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesFeaturesGetRequest req = new DirectoryResourcesFeaturesGetRequest("perferendis", "necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestias";
                alt = AltEnum.JSON;
                callback = "sunt";
                fields = "maiores";
                key = "neque";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "veniam";
                uploadProtocol = "ipsam";
            }};            

            DirectoryResourcesFeaturesGetResponse res = sdk.resources.directoryResourcesFeaturesGet(req, new DirectoryResourcesFeaturesGetSecurity() {{
                option1 = new DirectoryResourcesFeaturesGetSecurityOption1("eaque", "exercitationem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.feature != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesFeaturesInsert

Inserts a feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesInsertRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesInsertResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Feature;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesFeaturesInsertRequest req = new DirectoryResourcesFeaturesInsertRequest("veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                feature = new Feature() {{
                    etags = "ad";
                    kind = "nisi";
                    name = "Tim Sporer";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "repellendus";
                key = "perferendis";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "sed";
                uploadProtocol = "possimus";
            }};            

            DirectoryResourcesFeaturesInsertResponse res = sdk.resources.directoryResourcesFeaturesInsert(req, new DirectoryResourcesFeaturesInsertSecurity("repellat", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.feature != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesFeaturesList

Retrieves a list of features for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesListRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesListResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesListSecurity;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesFeaturesListRequest req = new DirectoryResourcesFeaturesListRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "dolore";
                fields = "voluptatibus";
                key = "iure";
                maxResults = 127087L;
                oauthToken = "minus";
                pageToken = "soluta";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "velit";
                uploadProtocol = "earum";
            }};            

            DirectoryResourcesFeaturesListResponse res = sdk.resources.directoryResourcesFeaturesList(req, new DirectoryResourcesFeaturesListSecurity() {{
                option1 = new DirectoryResourcesFeaturesListSecurityOption1("praesentium", "error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.features != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesFeaturesPatch

Patches a feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesPatchRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesPatchResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Feature;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesFeaturesPatchRequest req = new DirectoryResourcesFeaturesPatchRequest("non", "quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                feature = new Feature() {{
                    etags = "accusamus";
                    kind = "harum";
                    name = "Anthony Rath MD";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "magni";
                fields = "tempora";
                key = "possimus";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "sed";
                uploadProtocol = "accusamus";
            }};            

            DirectoryResourcesFeaturesPatchResponse res = sdk.resources.directoryResourcesFeaturesPatch(req, new DirectoryResourcesFeaturesPatchSecurity("optio", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.feature != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesFeaturesRename

Renames a feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesRenameRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesRenameResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesRenameSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FeatureRename;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesFeaturesRenameRequest req = new DirectoryResourcesFeaturesRenameRequest("minus", "quo") {{
                dollarXgafv = XgafvEnum.TWO;
                featureRename = new FeatureRename() {{
                    newName = "asperiores";
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "accusantium";
                key = "illo";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "nostrum";
                uploadProtocol = "at";
            }};            

            DirectoryResourcesFeaturesRenameResponse res = sdk.resources.directoryResourcesFeaturesRename(req, new DirectoryResourcesFeaturesRenameSecurity("possimus", "neque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryResourcesFeaturesUpdate

Updates a feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesUpdateRequest;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesUpdateResponse;
import org.openapis.openapi.models.operations.DirectoryResourcesFeaturesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Feature;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryResourcesFeaturesUpdateRequest req = new DirectoryResourcesFeaturesUpdateRequest("pariatur", "vel") {{
                dollarXgafv = XgafvEnum.TWO;
                feature = new Feature() {{
                    etags = "mollitia";
                    kind = "quae";
                    name = "Kevin Friesen";
                }};;
                accessToken = "aliquam";
                alt = AltEnum.PROTO;
                callback = "quas";
                fields = "consequuntur";
                key = "maiores";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "laudantium";
                uploadProtocol = "est";
            }};            

            DirectoryResourcesFeaturesUpdateResponse res = sdk.resources.directoryResourcesFeaturesUpdate(req, new DirectoryResourcesFeaturesUpdateSecurity("dolor", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.feature != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
