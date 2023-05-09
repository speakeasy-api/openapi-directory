# partners

### Available Operations

* [androiddeviceprovisioningPartnersCustomersCreate](#androiddeviceprovisioningpartnerscustomerscreate) - Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
* [androiddeviceprovisioningPartnersCustomersList](#androiddeviceprovisioningpartnerscustomerslist) - Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
* [androiddeviceprovisioningPartnersDevicesClaim](#androiddeviceprovisioningpartnersdevicesclaim) - Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
* [androiddeviceprovisioningPartnersDevicesClaimAsync](#androiddeviceprovisioningpartnersdevicesclaimasync) - Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* [androiddeviceprovisioningPartnersDevicesFindByIdentifier](#androiddeviceprovisioningpartnersdevicesfindbyidentifier) - Finds devices by hardware identifiers, such as IMEI.
* [androiddeviceprovisioningPartnersDevicesFindByOwner](#androiddeviceprovisioningpartnersdevicesfindbyowner) - Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
* [androiddeviceprovisioningPartnersDevicesGet](#androiddeviceprovisioningpartnersdevicesget) - Gets a device.
* [androiddeviceprovisioningPartnersDevicesMetadata](#androiddeviceprovisioningpartnersdevicesmetadata) - Updates reseller metadata associated with the device. Android devices only.
* [androiddeviceprovisioningPartnersDevicesUnclaim](#androiddeviceprovisioningpartnersdevicesunclaim) - Unclaims a device from a customer and removes it from zero-touch enrollment.
* [androiddeviceprovisioningPartnersDevicesUnclaimAsync](#androiddeviceprovisioningpartnersdevicesunclaimasync) - Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* [androiddeviceprovisioningPartnersDevicesUpdateMetadataAsync](#androiddeviceprovisioningpartnersdevicesupdatemetadataasync) - Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
* [androiddeviceprovisioningPartnersVendorsCustomersList](#androiddeviceprovisioningpartnersvendorscustomerslist) - Lists the customers of the vendor.
* [androiddeviceprovisioningPartnersVendorsList](#androiddeviceprovisioningpartnersvendorslist) - Lists the vendors of the partner.

## androiddeviceprovisioningPartnersCustomersCreate

Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersCustomersCreateRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersCustomersCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompanyInput;
import org.openapis.openapi.models.shared.CreateCustomerRequestInput;
import org.openapis.openapi.models.shared.GoogleWorkspaceAccountInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningPartnersCustomersCreateRequest req = new AndroiddeviceprovisioningPartnersCustomersCreateRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                createCustomerRequestInput = new CreateCustomerRequestInput() {{
                    customer = new CompanyInput() {{
                        adminEmails = new String[]{{
                            add("quasi"),
                            add("repudiandae"),
                            add("sint"),
                            add("veritatis"),
                        }};
                        companyName = "itaque";
                        googleWorkspaceAccount = new GoogleWorkspaceAccountInput() {{
                            customerId = "incidunt";
                        }};;
                        languageCode = "enim";
                        ownerEmails = new String[]{{
                            add("est"),
                        }};
                        skipWelcomeEmail = false;
                    }};;
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "aliquid";
            }};            

            AndroiddeviceprovisioningPartnersCustomersCreateResponse res = sdk.partners.androiddeviceprovisioningPartnersCustomersCreate(req);

            if (res.company != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningPartnersCustomersList

Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersCustomersListRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersCustomersListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningPartnersCustomersListRequest req = new AndroiddeviceprovisioningPartnersCustomersListRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "assumenda";
                fields = "ipsam";
                key = "alias";
                oauthToken = "fugit";
                pageSize = 677817L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "facilis";
                uploadProtocol = "tempore";
            }};            

            AndroiddeviceprovisioningPartnersCustomersListResponse res = sdk.partners.androiddeviceprovisioningPartnersCustomersList(req);

            if (res.listCustomersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningPartnersDevicesClaim

Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesClaimRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesClaimResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClaimDeviceRequest;
import org.openapis.openapi.models.shared.ClaimDeviceRequestSectionTypeEnum;
import org.openapis.openapi.models.shared.DeviceIdentifier;
import org.openapis.openapi.models.shared.DeviceIdentifierDeviceTypeEnum;
import org.openapis.openapi.models.shared.DeviceMetadata;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningPartnersDevicesClaimRequest req = new AndroiddeviceprovisioningPartnersDevicesClaimRequest("labore") {{
                dollarXgafv = XgafvEnum.TWO;
                claimDeviceRequest = new ClaimDeviceRequest() {{
                    customerId = "eum";
                    deviceIdentifier = new DeviceIdentifier() {{
                        chromeOsAttestedDeviceId = "non";
                        deviceType = DeviceIdentifierDeviceTypeEnum.DEVICE_TYPE_CHROME_OS;
                        imei = "sint";
                        manufacturer = "aliquid";
                        meid = "provident";
                        model = "necessitatibus";
                        serialNumber = "sint";
                    }};;
                    deviceMetadata = new DeviceMetadata() {{
                        entries = new java.util.HashMap<String, String>() {{
                            put("dolor", "debitis");
                            put("a", "dolorum");
                            put("in", "in");
                        }};
                    }};;
                    googleWorkspaceCustomerId = "illum";
                    preProvisioningToken = "maiores";
                    sectionType = ClaimDeviceRequestSectionTypeEnum.SECTION_TYPE_ZERO_TOUCH;
                    simlockProfileId = "dicta";
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "ea";
                key = "aliquid";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "non";
                uploadProtocol = "occaecati";
            }};            

            AndroiddeviceprovisioningPartnersDevicesClaimResponse res = sdk.partners.androiddeviceprovisioningPartnersDevicesClaim(req);

            if (res.claimDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningPartnersDevicesClaimAsync

Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClaimDevicesRequest;
import org.openapis.openapi.models.shared.DeviceIdentifier;
import org.openapis.openapi.models.shared.DeviceIdentifierDeviceTypeEnum;
import org.openapis.openapi.models.shared.DeviceMetadata;
import org.openapis.openapi.models.shared.PartnerClaim;
import org.openapis.openapi.models.shared.PartnerClaimSectionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest req = new AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                claimDevicesRequest = new ClaimDevicesRequest() {{
                    claims = new org.openapis.openapi.models.shared.PartnerClaim[]{{
                        add(new PartnerClaim() {{
                            customerId = "quidem";
                            deviceIdentifier = new DeviceIdentifier() {{
                                chromeOsAttestedDeviceId = "provident";
                                deviceType = DeviceIdentifierDeviceTypeEnum.DEVICE_TYPE_CHROME_OS;
                                imei = "id";
                                manufacturer = "blanditiis";
                                meid = "deleniti";
                                model = "sapiente";
                                serialNumber = "amet";
                            }};
                            deviceMetadata = new DeviceMetadata() {{
                                entries = new java.util.HashMap<String, String>() {{
                                    put("nisi", "vel");
                                    put("natus", "omnis");
                                    put("molestiae", "perferendis");
                                }};
                            }};
                            googleWorkspaceCustomerId = "nihil";
                            preProvisioningToken = "magnam";
                            sectionType = PartnerClaimSectionTypeEnum.SECTION_TYPE_ZERO_TOUCH;
                            simlockProfileId = "id";
                        }}),
                        add(new PartnerClaim() {{
                            customerId = "labore";
                            deviceIdentifier = new DeviceIdentifier() {{
                                chromeOsAttestedDeviceId = "labore";
                                deviceType = DeviceIdentifierDeviceTypeEnum.DEVICE_TYPE_ANDROID;
                                imei = "natus";
                                manufacturer = "nobis";
                                meid = "eum";
                                model = "vero";
                                serialNumber = "aspernatur";
                            }};
                            deviceMetadata = new DeviceMetadata() {{
                                entries = new java.util.HashMap<String, String>() {{
                                    put("magnam", "et");
                                }};
                            }};
                            googleWorkspaceCustomerId = "excepturi";
                            preProvisioningToken = "ullam";
                            sectionType = PartnerClaimSectionTypeEnum.SECTION_TYPE_SIM_LOCK;
                            simlockProfileId = "quos";
                        }}),
                        add(new PartnerClaim() {{
                            customerId = "sint";
                            deviceIdentifier = new DeviceIdentifier() {{
                                chromeOsAttestedDeviceId = "accusantium";
                                deviceType = DeviceIdentifierDeviceTypeEnum.DEVICE_TYPE_ANDROID;
                                imei = "reiciendis";
                                manufacturer = "mollitia";
                                meid = "ad";
                                model = "eum";
                                serialNumber = "dolor";
                            }};
                            deviceMetadata = new DeviceMetadata() {{
                                entries = new java.util.HashMap<String, String>() {{
                                    put("odit", "nemo");
                                    put("quasi", "iure");
                                    put("doloribus", "debitis");
                                    put("eius", "maxime");
                                }};
                            }};
                            googleWorkspaceCustomerId = "deleniti";
                            preProvisioningToken = "facilis";
                            sectionType = PartnerClaimSectionTypeEnum.SECTION_TYPE_SIM_LOCK;
                            simlockProfileId = "architecto";
                        }}),
                        add(new PartnerClaim() {{
                            customerId = "architecto";
                            deviceIdentifier = new DeviceIdentifier() {{
                                chromeOsAttestedDeviceId = "repudiandae";
                                deviceType = DeviceIdentifierDeviceTypeEnum.DEVICE_TYPE_ANDROID;
                                imei = "expedita";
                                manufacturer = "nihil";
                                meid = "repellat";
                                model = "quibusdam";
                                serialNumber = "sed";
                            }};
                            deviceMetadata = new DeviceMetadata() {{
                                entries = new java.util.HashMap<String, String>() {{
                                    put("pariatur", "accusantium");
                                    put("consequuntur", "praesentium");
                                    put("natus", "magni");
                                    put("sunt", "quo");
                                }};
                            }};
                            googleWorkspaceCustomerId = "illum";
                            preProvisioningToken = "pariatur";
                            sectionType = PartnerClaimSectionTypeEnum.SECTION_TYPE_ZERO_TOUCH;
                            simlockProfileId = "ea";
                        }}),
                    }};
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "accusantium";
                key = "ab";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "ipsam";
                uploadProtocol = "voluptate";
            }};            

            AndroiddeviceprovisioningPartnersDevicesClaimAsyncResponse res = sdk.partners.androiddeviceprovisioningPartnersDevicesClaimAsync(req);

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningPartnersDevicesFindByIdentifier

Finds devices by hardware identifiers, such as IMEI.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeviceIdentifier;
import org.openapis.openapi.models.shared.DeviceIdentifierDeviceTypeEnum;
import org.openapis.openapi.models.shared.FindDevicesByDeviceIdentifierRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest req = new AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest("autem") {{
                dollarXgafv = XgafvEnum.TWO;
                findDevicesByDeviceIdentifierRequest = new FindDevicesByDeviceIdentifierRequest() {{
                    deviceIdentifier = new DeviceIdentifier() {{
                        chromeOsAttestedDeviceId = "eaque";
                        deviceType = DeviceIdentifierDeviceTypeEnum.DEVICE_TYPE_CHROME_OS;
                        imei = "nemo";
                        manufacturer = "voluptatibus";
                        meid = "perferendis";
                        model = "fugiat";
                        serialNumber = "amet";
                    }};;
                    limit = "aut";
                    pageToken = "cumque";
                }};;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "nobis";
                key = "dolores";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "dignissimos";
                uploadProtocol = "eaque";
            }};            

            AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse res = sdk.partners.androiddeviceprovisioningPartnersDevicesFindByIdentifier(req);

            if (res.findDevicesByDeviceIdentifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningPartnersDevicesFindByOwner

Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FindDevicesByOwnerRequest;
import org.openapis.openapi.models.shared.FindDevicesByOwnerRequestSectionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest req = new AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                findDevicesByOwnerRequest = new FindDevicesByOwnerRequest() {{
                    customerId = new String[]{{
                        add("perferendis"),
                    }};
                    googleWorkspaceCustomerId = new String[]{{
                        add("minus"),
                    }};
                    limit = "quam";
                    pageToken = "dolor";
                    sectionType = FindDevicesByOwnerRequestSectionTypeEnum.SECTION_TYPE_ZERO_TOUCH;
                }};;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "recusandae";
                fields = "omnis";
                key = "facilis";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "porro";
                uploadProtocol = "consequuntur";
            }};            

            AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse res = sdk.partners.androiddeviceprovisioningPartnersDevicesFindByOwner(req);

            if (res.findDevicesByOwnerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningPartnersDevicesGet

Gets a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesGetRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningPartnersDevicesGetRequest req = new AndroiddeviceprovisioningPartnersDevicesGetRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                callback = "rerum";
                fields = "adipisci";
                key = "asperiores";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "iste";
                uploadProtocol = "dolorum";
            }};            

            AndroiddeviceprovisioningPartnersDevicesGetResponse res = sdk.partners.androiddeviceprovisioningPartnersDevicesGet(req);

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningPartnersDevicesMetadata

Updates reseller metadata associated with the device. Android devices only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesMetadataRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesMetadataResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeviceMetadata;
import org.openapis.openapi.models.shared.UpdateDeviceMetadataRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningPartnersDevicesMetadataRequest req = new AndroiddeviceprovisioningPartnersDevicesMetadataRequest("deleniti", "pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                updateDeviceMetadataRequest = new UpdateDeviceMetadataRequest() {{
                    deviceMetadata = new DeviceMetadata() {{
                        entries = new java.util.HashMap<String, String>() {{
                            put("libero", "delectus");
                            put("quaerat", "quos");
                            put("aliquid", "dolorem");
                            put("dolorem", "dolor");
                        }};
                    }};;
                }};;
                accessToken = "qui";
                alt = AltEnum.JSON;
                callback = "hic";
                fields = "excepturi";
                key = "cum";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "reiciendis";
                uploadProtocol = "amet";
            }};            

            AndroiddeviceprovisioningPartnersDevicesMetadataResponse res = sdk.partners.androiddeviceprovisioningPartnersDevicesMetadata(req);

            if (res.deviceMetadata != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningPartnersDevicesUnclaim

Unclaims a device from a customer and removes it from zero-touch enrollment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesUnclaimRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesUnclaimResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeviceIdentifier;
import org.openapis.openapi.models.shared.DeviceIdentifierDeviceTypeEnum;
import org.openapis.openapi.models.shared.UnclaimDeviceRequest;
import org.openapis.openapi.models.shared.UnclaimDeviceRequestSectionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningPartnersDevicesUnclaimRequest req = new AndroiddeviceprovisioningPartnersDevicesUnclaimRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                unclaimDeviceRequest = new UnclaimDeviceRequest() {{
                    deviceId = "veritatis";
                    deviceIdentifier = new DeviceIdentifier() {{
                        chromeOsAttestedDeviceId = "ipsa";
                        deviceType = DeviceIdentifierDeviceTypeEnum.DEVICE_TYPE_UNSPECIFIED;
                        imei = "iure";
                        manufacturer = "odio";
                        meid = "quaerat";
                        model = "accusamus";
                        serialNumber = "quidem";
                    }};;
                    sectionType = UnclaimDeviceRequestSectionTypeEnum.SECTION_TYPE_ZERO_TOUCH;
                    vacationModeDays = 377752;
                    vacationModeExpireTime = "natus";
                }};;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "sit";
                fields = "fugiat";
                key = "ab";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "iusto";
                uploadProtocol = "voluptate";
            }};            

            AndroiddeviceprovisioningPartnersDevicesUnclaimResponse res = sdk.partners.androiddeviceprovisioningPartnersDevicesUnclaim(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningPartnersDevicesUnclaimAsync

Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeviceIdentifier;
import org.openapis.openapi.models.shared.DeviceIdentifierDeviceTypeEnum;
import org.openapis.openapi.models.shared.PartnerUnclaim;
import org.openapis.openapi.models.shared.PartnerUnclaimSectionTypeEnum;
import org.openapis.openapi.models.shared.UnclaimDevicesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest req = new AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                unclaimDevicesRequest = new UnclaimDevicesRequest() {{
                    unclaims = new org.openapis.openapi.models.shared.PartnerUnclaim[]{{
                        add(new PartnerUnclaim() {{
                            deviceId = "necessitatibus";
                            deviceIdentifier = new DeviceIdentifier() {{
                                chromeOsAttestedDeviceId = "distinctio";
                                deviceType = DeviceIdentifierDeviceTypeEnum.DEVICE_TYPE_CHROME_OS;
                                imei = "nihil";
                                manufacturer = "ipsum";
                                meid = "voluptate";
                                model = "id";
                                serialNumber = "saepe";
                            }};
                            sectionType = PartnerUnclaimSectionTypeEnum.SECTION_TYPE_UNSPECIFIED;
                            vacationModeDays = 137220;
                            vacationModeExpireTime = "perferendis";
                        }}),
                        add(new PartnerUnclaim() {{
                            deviceId = "amet";
                            deviceIdentifier = new DeviceIdentifier() {{
                                chromeOsAttestedDeviceId = "optio";
                                deviceType = DeviceIdentifierDeviceTypeEnum.DEVICE_TYPE_CHROME_OS;
                                imei = "ad";
                                manufacturer = "saepe";
                                meid = "suscipit";
                                model = "deserunt";
                                serialNumber = "provident";
                            }};
                            sectionType = PartnerUnclaimSectionTypeEnum.SECTION_TYPE_UNSPECIFIED;
                            vacationModeDays = 831049;
                            vacationModeExpireTime = "totam";
                        }}),
                        add(new PartnerUnclaim() {{
                            deviceId = "similique";
                            deviceIdentifier = new DeviceIdentifier() {{
                                chromeOsAttestedDeviceId = "alias";
                                deviceType = DeviceIdentifierDeviceTypeEnum.DEVICE_TYPE_CHROME_OS;
                                imei = "quaerat";
                                manufacturer = "tempora";
                                meid = "vel";
                                model = "quod";
                                serialNumber = "officiis";
                            }};
                            sectionType = PartnerUnclaimSectionTypeEnum.SECTION_TYPE_UNSPECIFIED;
                            vacationModeDays = 679880;
                            vacationModeExpireTime = "a";
                        }}),
                    }};
                }};;
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "ipsum";
                key = "quisquam";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "tempore";
                uploadProtocol = "accusamus";
            }};            

            AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse res = sdk.partners.androiddeviceprovisioningPartnersDevicesUnclaimAsync(req);

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningPartnersDevicesUpdateMetadataAsync

Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeviceIdentifier;
import org.openapis.openapi.models.shared.DeviceIdentifierDeviceTypeEnum;
import org.openapis.openapi.models.shared.DeviceMetadata;
import org.openapis.openapi.models.shared.UpdateDeviceMetadataInBatchRequest;
import org.openapis.openapi.models.shared.UpdateMetadataArguments;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest req = new AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                updateDeviceMetadataInBatchRequest = new UpdateDeviceMetadataInBatchRequest() {{
                    updates = new org.openapis.openapi.models.shared.UpdateMetadataArguments[]{{
                        add(new UpdateMetadataArguments() {{
                            deviceId = "sapiente";
                            deviceIdentifier = new DeviceIdentifier() {{
                                chromeOsAttestedDeviceId = "totam";
                                deviceType = DeviceIdentifierDeviceTypeEnum.DEVICE_TYPE_ANDROID;
                                imei = "sit";
                                manufacturer = "expedita";
                                meid = "neque";
                                model = "sed";
                                serialNumber = "vel";
                            }};
                            deviceMetadata = new DeviceMetadata() {{
                                entries = new java.util.HashMap<String, String>() {{
                                    put("voluptas", "deserunt");
                                    put("quam", "ipsum");
                                    put("incidunt", "qui");
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "cupiditate";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "soluta";
                key = "dicta";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "incidunt";
                uploadProtocol = "aspernatur";
            }};            

            AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse res = sdk.partners.androiddeviceprovisioningPartnersDevicesUpdateMetadataAsync(req);

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningPartnersVendorsCustomersList

Lists the customers of the vendor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersVendorsCustomersListRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersVendorsCustomersListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningPartnersVendorsCustomersListRequest req = new AndroiddeviceprovisioningPartnersVendorsCustomersListRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "molestias";
                key = "temporibus";
                oauthToken = "qui";
                pageSize = 204865L;
                pageToken = "fugit";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "odio";
                uploadProtocol = "sunt";
            }};            

            AndroiddeviceprovisioningPartnersVendorsCustomersListResponse res = sdk.partners.androiddeviceprovisioningPartnersVendorsCustomersList(req);

            if (res.listVendorCustomersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androiddeviceprovisioningPartnersVendorsList

Lists the vendors of the partner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersVendorsListRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningPartnersVendorsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningPartnersVendorsListRequest req = new AndroiddeviceprovisioningPartnersVendorsListRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "soluta";
                key = "nobis";
                oauthToken = "et";
                pageSize = 903720L;
                pageToken = "ipsum";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "nobis";
                uploadProtocol = "quos";
            }};            

            AndroiddeviceprovisioningPartnersVendorsListResponse res = sdk.partners.androiddeviceprovisioningPartnersVendorsList(req);

            if (res.listVendorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
