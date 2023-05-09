# qualityRetentionProfiles

### Available Operations

* [createNetworkCameraQualityRetentionProfile](#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [deleteNetworkCameraQualityRetentionProfile](#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [getNetworkCameraQualityRetentionProfile](#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [getNetworkCameraQualityRetentionProfiles](#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [updateNetworkCameraQualityRetentionProfile](#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.

## createNetworkCameraQualityRetentionProfile

Creates new quality retention profile for this network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequest;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraQualityRetentionProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkCameraQualityRetentionProfileRequest req = new CreateNetworkCameraQualityRetentionProfileRequest(                new CreateNetworkCameraQualityRetentionProfileRequestBody("et") {{
                                audioRecordingEnabled = false;
                                cloudArchiveEnabled = false;
                                maxRetentionDays = 494175L;
                                motionBasedRetentionEnabled = false;
                                motionDetectorVersion = 62994L;
                                restrictedBandwidthModeEnabled = false;
                                scheduleId = "earum";
                                videoSettings = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings() {{
                                    mv12Mv22Mv72 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum.STANDARD, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum.ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080);;
                                    mv12We = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum.STANDARD, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum.ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720);;
                                    mv13 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum.ENHANCED, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum.ONE_THOUSAND_AND_EIGHTYX1080);;
                                    mv21Mv71 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum.ENHANCED, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum.ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720);;
                                    mv22XMv72X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum.STANDARD, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum.ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720);;
                                    mv32 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum.ENHANCED, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum.TWO_THOUSAND_AND_FIFTY_EIGHTX2058);;
                                    mv33 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum.STANDARD, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum.TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112);;
                                    mv52 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum.HIGH, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum.THREE_THOUSAND_EIGHT_HUNDRED_AND_FORTYX2160);;
                                    mv63 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum.HIGH, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum.TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512);;
                                    mv63X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum.HIGH, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum.THREE_THOUSAND_EIGHT_HUNDRED_AND_FORTYX2160);;
                                    mv93 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum.ENHANCED, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum.ONE_THOUSAND_AND_EIGHTYX1080);;
                                    mv93X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum.ENHANCED, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum.ONE_THOUSAND_AND_EIGHTYX1080);;
                                }};;
                            }};, "officia");            

            CreateNetworkCameraQualityRetentionProfileResponse res = sdk.qualityRetentionProfiles.createNetworkCameraQualityRetentionProfile(req);

            if (res.createNetworkCameraQualityRetentionProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkCameraQualityRetentionProfile

Delete an existing quality retention profile for this network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkCameraQualityRetentionProfileRequest;
import org.openapis.openapi.models.operations.DeleteNetworkCameraQualityRetentionProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkCameraQualityRetentionProfileRequest req = new DeleteNetworkCameraQualityRetentionProfileRequest("at", "molestiae");            

            DeleteNetworkCameraQualityRetentionProfileResponse res = sdk.qualityRetentionProfiles.deleteNetworkCameraQualityRetentionProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkCameraQualityRetentionProfile

Retrieve a single quality retention profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCameraQualityRetentionProfileRequest;
import org.openapis.openapi.models.operations.GetNetworkCameraQualityRetentionProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCameraQualityRetentionProfileRequest req = new GetNetworkCameraQualityRetentionProfileRequest("exercitationem", "veritatis");            

            GetNetworkCameraQualityRetentionProfileResponse res = sdk.qualityRetentionProfiles.getNetworkCameraQualityRetentionProfile(req);

            if (res.getNetworkCameraQualityRetentionProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkCameraQualityRetentionProfiles

List the quality retention profiles for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCameraQualityRetentionProfilesRequest;
import org.openapis.openapi.models.operations.GetNetworkCameraQualityRetentionProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCameraQualityRetentionProfilesRequest req = new GetNetworkCameraQualityRetentionProfilesRequest("sed");            

            GetNetworkCameraQualityRetentionProfilesResponse res = sdk.qualityRetentionProfiles.getNetworkCameraQualityRetentionProfiles(req);

            if (res.getNetworkCameraQualityRetentionProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkCameraQualityRetentionProfile

Update an existing quality retention profile for this network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequest;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraQualityRetentionProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkCameraQualityRetentionProfileRequest req = new UpdateNetworkCameraQualityRetentionProfileRequest("non", "sed") {{
                requestBody = new UpdateNetworkCameraQualityRetentionProfileRequestBody() {{
                    audioRecordingEnabled = false;
                    cloudArchiveEnabled = false;
                    maxRetentionDays = 32423L;
                    motionBasedRetentionEnabled = false;
                    motionDetectorVersion = 579455L;
                    name = "Diana Hagenes";
                    restrictedBandwidthModeEnabled = false;
                    scheduleId = "repudiandae";
                    videoSettings = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings() {{
                        mv12Mv22Mv72 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum.STANDARD, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum.ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080);;
                        mv12We = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum.HIGH, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum.ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720);;
                        mv13 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum.ENHANCED, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum.ONE_THOUSAND_AND_EIGHTYX1080);;
                        mv21Mv71 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum.HIGH, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum.ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720);;
                        mv22XMv72X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum.ENHANCED, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum.ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080);;
                        mv32 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum.HIGH, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum.ONE_THOUSAND_AND_EIGHTYX1080);;
                        mv33 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum.HIGH, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum.ONE_THOUSAND_AND_EIGHTYX1080);;
                        mv52 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum.HIGH, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum.TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512);;
                        mv63 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum.HIGH, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum.TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512);;
                        mv63X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum.ENHANCED, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum.ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080);;
                        mv93 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum.ENHANCED, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum.TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112);;
                        mv93X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum.HIGH, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum.ONE_THOUSAND_AND_EIGHTYX1080);;
                    }};;
                }};;
            }};            

            UpdateNetworkCameraQualityRetentionProfileResponse res = sdk.qualityRetentionProfiles.updateNetworkCameraQualityRetentionProfile(req);

            if (res.updateNetworkCameraQualityRetentionProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
