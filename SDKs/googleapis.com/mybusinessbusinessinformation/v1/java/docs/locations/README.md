# locations

### Available Operations

* [mybusinessbusinessinformationLocationsAssociate](#mybusinessbusinessinformationlocationsassociate) - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.
* [mybusinessbusinessinformationLocationsAttributesGetGoogleUpdated](#mybusinessbusinessinformationlocationsattributesgetgoogleupdated) - Gets the Google-updated version of the specified location.
* [mybusinessbusinessinformationLocationsClearLocationAssociation](#mybusinessbusinessinformationlocationsclearlocationassociation) - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* [mybusinessbusinessinformationLocationsDelete](#mybusinessbusinessinformationlocationsdelete) - Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
* [mybusinessbusinessinformationLocationsGetAttributes](#mybusinessbusinessinformationlocationsgetattributes) - Looks up all the attributes set for a given location.
* [mybusinessbusinessinformationLocationsUpdateAttributes](#mybusinessbusinessinformationlocationsupdateattributes) - Update attributes for a given location.

## mybusinessbusinessinformationLocationsAssociate

Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationLocationsAssociateRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationLocationsAssociateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssociateLocationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinessinformationLocationsAssociateRequest req = new MybusinessbusinessinformationLocationsAssociateRequest("aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                associateLocationRequest = new AssociateLocationRequest() {{
                    placeId = "dicta";
                }};;
                accessToken = "ullam";
                alt = AltEnum.MEDIA;
                callback = "ullam";
                fields = "nisi";
                key = "aut";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "quibusdam";
                uploadProtocol = "ex";
            }};            

            MybusinessbusinessinformationLocationsAssociateResponse res = sdk.locations.mybusinessbusinessinformationLocationsAssociate(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessbusinessinformationLocationsAttributesGetGoogleUpdated

Gets the Google-updated version of the specified location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedRequest req = new MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "tenetur";
                key = "quasi";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "et";
                readMask = "voluptate";
                uploadType = "ipsa";
                uploadProtocol = "minima";
            }};            

            MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedResponse res = sdk.locations.mybusinessbusinessinformationLocationsAttributesGetGoogleUpdated(req);

            if (res.attributes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessbusinessinformationLocationsClearLocationAssociation

Clears an association between a location and its place ID. This operation is only valid if the location is unverified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationLocationsClearLocationAssociationRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationLocationsClearLocationAssociationResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinessinformationLocationsClearLocationAssociationRequest req = new MybusinessbusinessinformationLocationsClearLocationAssociationRequest("veritatis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iste", "temporibus");
                }};
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "aut";
                fields = "laudantium";
                key = "eum";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "corrupti";
                uploadProtocol = "non";
            }};            

            MybusinessbusinessinformationLocationsClearLocationAssociationResponse res = sdk.locations.mybusinessbusinessinformationLocationsClearLocationAssociation(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessbusinessinformationLocationsDelete

Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationLocationsDeleteRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationLocationsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinessinformationLocationsDeleteRequest req = new MybusinessbusinessinformationLocationsDeleteRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "explicabo";
                key = "voluptas";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "dicta";
                uploadProtocol = "maiores";
            }};            

            MybusinessbusinessinformationLocationsDeleteResponse res = sdk.locations.mybusinessbusinessinformationLocationsDelete(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessbusinessinformationLocationsGetAttributes

Looks up all the attributes set for a given location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationLocationsGetAttributesRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationLocationsGetAttributesResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinessinformationLocationsGetAttributesRequest req = new MybusinessbusinessinformationLocationsGetAttributesRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "aperiam";
                key = "ea";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellendus";
                uploadProtocol = "officia";
            }};            

            MybusinessbusinessinformationLocationsGetAttributesResponse res = sdk.locations.mybusinessbusinessinformationLocationsGetAttributes(req);

            if (res.attributes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessbusinessinformationLocationsUpdateAttributes

Update attributes for a given location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationLocationsUpdateAttributesRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationLocationsUpdateAttributesResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttributeInput;
import org.openapis.openapi.models.shared.AttributesInput;
import org.openapis.openapi.models.shared.RepeatedEnumAttributeValue;
import org.openapis.openapi.models.shared.UriAttributeValue;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinessinformationLocationsUpdateAttributesRequest req = new MybusinessbusinessinformationLocationsUpdateAttributesRequest("maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                attributesInput = new AttributesInput() {{
                    attributes = new org.openapis.openapi.models.shared.AttributeInput[]{{
                        add(new AttributeInput() {{
                            name = "Vernon Bergnaum";
                            repeatedEnumValue = new RepeatedEnumAttributeValue() {{
                                setValues = new String[]{{
                                    add("labore"),
                                    add("ab"),
                                    add("adipisci"),
                                    add("fuga"),
                                }};
                                unsetValues = new String[]{{
                                    add("suscipit"),
                                    add("velit"),
                                    add("culpa"),
                                }};
                            }};
                            uriValues = new org.openapis.openapi.models.shared.UriAttributeValue[]{{
                                add(new UriAttributeValue() {{
                                    uri = "https://marvelous-stimulation.info";
                                }}),
                                add(new UriAttributeValue() {{
                                    uri = "http://mysterious-highway.biz";
                                }}),
                                add(new UriAttributeValue() {{
                                    uri = "https://rowdy-repair.info";
                                }}),
                            }};
                            values = new Object[]{{
                                add("corporis"),
                                add("reiciendis"),
                            }};
                        }}),
                        add(new AttributeInput() {{
                            name = "Corey Walsh DDS";
                            repeatedEnumValue = new RepeatedEnumAttributeValue() {{
                                setValues = new String[]{{
                                    add("in"),
                                }};
                                unsetValues = new String[]{{
                                    add("earum"),
                                    add("facere"),
                                }};
                            }};
                            uriValues = new org.openapis.openapi.models.shared.UriAttributeValue[]{{
                                add(new UriAttributeValue() {{
                                    uri = "https://helpless-warming.net";
                                }}),
                                add(new UriAttributeValue() {{
                                    uri = "https://unnatural-editing.com";
                                }}),
                            }};
                            values = new Object[]{{
                                add("adipisci"),
                                add("non"),
                                add("amet"),
                                add("beatae"),
                            }};
                        }}),
                        add(new AttributeInput() {{
                            name = "Lorene Toy";
                            repeatedEnumValue = new RepeatedEnumAttributeValue() {{
                                setValues = new String[]{{
                                    add("laboriosam"),
                                    add("ipsa"),
                                    add("voluptates"),
                                }};
                                unsetValues = new String[]{{
                                    add("vitae"),
                                    add("accusamus"),
                                    add("similique"),
                                }};
                            }};
                            uriValues = new org.openapis.openapi.models.shared.UriAttributeValue[]{{
                                add(new UriAttributeValue() {{
                                    uri = "http://heavenly-gall-bladder.info";
                                }}),
                                add(new UriAttributeValue() {{
                                    uri = "http://showy-porpoise.biz";
                                }}),
                            }};
                            values = new Object[]{{
                                add("dolores"),
                                add("blanditiis"),
                                add("in"),
                                add("dolore"),
                            }};
                        }}),
                    }};
                    name = "Rochelle Smitham";
                }};;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                attributeMask = "quas";
                callback = "hic";
                fields = "nesciunt";
                key = "culpa";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "totam";
                uploadProtocol = "hic";
            }};            

            MybusinessbusinessinformationLocationsUpdateAttributesResponse res = sdk.locations.mybusinessbusinessinformationLocationsUpdateAttributes(req);

            if (res.attributes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
