# properties

### Available Operations

* [drivePropertiesDelete](#drivepropertiesdelete) - Deletes a property.
* [drivePropertiesGet](#drivepropertiesget) - Gets a property by its key.
* [drivePropertiesInsert](#drivepropertiesinsert) - Adds a property to a file, or updates it if it already exists.
* [drivePropertiesList](#drivepropertieslist) - Lists a file's properties.
* [drivePropertiesPatch](#drivepropertiespatch) - Updates a property.
* [drivePropertiesUpdate](#drivepropertiesupdate) - Updates a property.

## drivePropertiesDelete

Deletes a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivePropertiesDeleteRequest;
import org.openapis.openapi.models.operations.DrivePropertiesDeleteResponse;
import org.openapis.openapi.models.operations.DrivePropertiesDeleteSecurity;
import org.openapis.openapi.models.operations.DrivePropertiesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DrivePropertiesDeleteSecurityOption2;
import org.openapis.openapi.models.operations.DrivePropertiesDeleteSecurityOption3;
import org.openapis.openapi.models.operations.DrivePropertiesDeleteSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivePropertiesDeleteRequest req = new DrivePropertiesDeleteRequest("perferendis", "corrupti") {{
                alt = AltEnum.JSON;
                fields = "doloremque";
                key = "fugiat";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "doloremque";
                userIp = "cum";
                visibility = "nobis";
            }};            

            DrivePropertiesDeleteResponse res = sdk.properties.drivePropertiesDelete(req, new DrivePropertiesDeleteSecurity() {{
                option1 = new DrivePropertiesDeleteSecurityOption1("similique", "porro") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## drivePropertiesGet

Gets a property by its key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivePropertiesGetRequest;
import org.openapis.openapi.models.operations.DrivePropertiesGetResponse;
import org.openapis.openapi.models.operations.DrivePropertiesGetSecurity;
import org.openapis.openapi.models.operations.DrivePropertiesGetSecurityOption1;
import org.openapis.openapi.models.operations.DrivePropertiesGetSecurityOption2;
import org.openapis.openapi.models.operations.DrivePropertiesGetSecurityOption3;
import org.openapis.openapi.models.operations.DrivePropertiesGetSecurityOption4;
import org.openapis.openapi.models.operations.DrivePropertiesGetSecurityOption5;
import org.openapis.openapi.models.operations.DrivePropertiesGetSecurityOption6;
import org.openapis.openapi.models.operations.DrivePropertiesGetSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivePropertiesGetRequest req = new DrivePropertiesGetRequest("impedit", "nisi") {{
                alt = AltEnum.JSON;
                fields = "cumque";
                key = "soluta";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "laboriosam";
                userIp = "nam";
                visibility = "enim";
            }};            

            DrivePropertiesGetResponse res = sdk.properties.drivePropertiesGet(req, new DrivePropertiesGetSecurity() {{
                option1 = new DrivePropertiesGetSecurityOption1("maiores", "consectetur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.property != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivePropertiesInsert

Adds a property to a file, or updates it if it already exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivePropertiesInsertRequest;
import org.openapis.openapi.models.operations.DrivePropertiesInsertResponse;
import org.openapis.openapi.models.operations.DrivePropertiesInsertSecurity;
import org.openapis.openapi.models.operations.DrivePropertiesInsertSecurityOption1;
import org.openapis.openapi.models.operations.DrivePropertiesInsertSecurityOption2;
import org.openapis.openapi.models.operations.DrivePropertiesInsertSecurityOption3;
import org.openapis.openapi.models.operations.DrivePropertiesInsertSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Property;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivePropertiesInsertRequest req = new DrivePropertiesInsertRequest("necessitatibus") {{
                property = new Property() {{
                    etag = "maxime";
                    key = "cupiditate";
                    kind = "voluptatem";
                    selfLink = "provident";
                    value = "adipisci";
                    visibility = "accusantium";
                }};;
                alt = AltEnum.JSON;
                fields = "magnam";
                key = "repellat";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "explicabo";
                userIp = "vel";
            }};            

            DrivePropertiesInsertResponse res = sdk.properties.drivePropertiesInsert(req, new DrivePropertiesInsertSecurity() {{
                option1 = new DrivePropertiesInsertSecurityOption1("cum", "id") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.property != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivePropertiesList

Lists a file's properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivePropertiesListRequest;
import org.openapis.openapi.models.operations.DrivePropertiesListResponse;
import org.openapis.openapi.models.operations.DrivePropertiesListSecurity;
import org.openapis.openapi.models.operations.DrivePropertiesListSecurityOption1;
import org.openapis.openapi.models.operations.DrivePropertiesListSecurityOption2;
import org.openapis.openapi.models.operations.DrivePropertiesListSecurityOption3;
import org.openapis.openapi.models.operations.DrivePropertiesListSecurityOption4;
import org.openapis.openapi.models.operations.DrivePropertiesListSecurityOption5;
import org.openapis.openapi.models.operations.DrivePropertiesListSecurityOption6;
import org.openapis.openapi.models.operations.DrivePropertiesListSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivePropertiesListRequest req = new DrivePropertiesListRequest("possimus") {{
                alt = AltEnum.JSON;
                fields = "fugit";
                key = "ipsam";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "sequi";
                userIp = "voluptatum";
            }};            

            DrivePropertiesListResponse res = sdk.properties.drivePropertiesList(req, new DrivePropertiesListSecurity() {{
                option1 = new DrivePropertiesListSecurityOption1("quasi", "error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.propertyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivePropertiesPatch

Updates a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivePropertiesPatchRequest;
import org.openapis.openapi.models.operations.DrivePropertiesPatchResponse;
import org.openapis.openapi.models.operations.DrivePropertiesPatchSecurity;
import org.openapis.openapi.models.operations.DrivePropertiesPatchSecurityOption1;
import org.openapis.openapi.models.operations.DrivePropertiesPatchSecurityOption2;
import org.openapis.openapi.models.operations.DrivePropertiesPatchSecurityOption3;
import org.openapis.openapi.models.operations.DrivePropertiesPatchSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Property;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivePropertiesPatchRequest req = new DrivePropertiesPatchRequest("nobis", "tempora") {{
                property = new Property() {{
                    etag = "voluptate";
                    key = "eius";
                    kind = "expedita";
                    selfLink = "aperiam";
                    value = "voluptates";
                    visibility = "possimus";
                }};;
                alt = AltEnum.JSON;
                fields = "fugit";
                key = "voluptatem";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "corporis";
                userIp = "ea";
                visibility = "eos";
            }};            

            DrivePropertiesPatchResponse res = sdk.properties.drivePropertiesPatch(req, new DrivePropertiesPatchSecurity() {{
                option1 = new DrivePropertiesPatchSecurityOption1("aliquam", "blanditiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.property != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivePropertiesUpdate

Updates a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivePropertiesUpdateRequest;
import org.openapis.openapi.models.operations.DrivePropertiesUpdateResponse;
import org.openapis.openapi.models.operations.DrivePropertiesUpdateSecurity;
import org.openapis.openapi.models.operations.DrivePropertiesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DrivePropertiesUpdateSecurityOption2;
import org.openapis.openapi.models.operations.DrivePropertiesUpdateSecurityOption3;
import org.openapis.openapi.models.operations.DrivePropertiesUpdateSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Property;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivePropertiesUpdateRequest req = new DrivePropertiesUpdateRequest("hic", "maiores") {{
                property = new Property() {{
                    etag = "asperiores";
                    key = "autem";
                    kind = "nesciunt";
                    selfLink = "cupiditate";
                    value = "animi";
                    visibility = "provident";
                }};;
                alt = AltEnum.JSON;
                fields = "beatae";
                key = "ipsa";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "nam";
                userIp = "assumenda";
                visibility = "quo";
            }};            

            DrivePropertiesUpdateResponse res = sdk.properties.drivePropertiesUpdate(req, new DrivePropertiesUpdateSecurity() {{
                option1 = new DrivePropertiesUpdateSecurityOption1("fuga", "tempore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.property != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
