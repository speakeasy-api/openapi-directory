# camera

### Available Operations

* [createNetworkCameraQualityRetentionProfile](#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [createNetworkCameraWirelessProfile](#createnetworkcamerawirelessprofile) - Creates a new camera wireless profile for this network.
* [createOrganizationCameraCustomAnalyticsArtifact](#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [deleteNetworkCameraQualityRetentionProfile](#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [deleteNetworkCameraWirelessProfile](#deletenetworkcamerawirelessprofile) - Delete an existing camera wireless profile for this network.
* [deleteOrganizationCameraCustomAnalyticsArtifact](#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [generateDeviceCameraSnapshot](#generatedevicecamerasnapshot) - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* [getDeviceCameraAnalyticsLive](#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [getDeviceCameraAnalyticsOverview](#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [getDeviceCameraAnalyticsRecent](#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [getDeviceCameraAnalyticsZoneHistory](#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getDeviceCameraAnalyticsZones](#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera
* [getDeviceCameraCustomAnalytics](#getdevicecameracustomanalytics) - Return custom analytics settings for a camera
* [getDeviceCameraQualityAndRetention](#getdevicecameraqualityandretention) - Returns quality and retention settings for the given camera
* [getDeviceCameraSense](#getdevicecamerasense) - Returns sense settings for a given camera
* [getDeviceCameraSenseObjectDetectionModels](#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera
* [getDeviceCameraVideoLink](#getdevicecameravideolink) - Returns video link to the specified camera
* [getDeviceCameraVideoSettings](#getdevicecameravideosettings) - Returns video settings for the given camera
* [getDeviceCameraWirelessProfiles](#getdevicecamerawirelessprofiles) - Returns wireless profile assigned to the given camera
* [getNetworkCameraQualityRetentionProfile](#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [getNetworkCameraQualityRetentionProfiles](#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [getNetworkCameraSchedules](#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [getNetworkCameraWirelessProfile](#getnetworkcamerawirelessprofile) - Retrieve a single camera wireless profile.
* [getNetworkCameraWirelessProfiles](#getnetworkcamerawirelessprofiles) - List the camera wireless profiles for this network.
* [getOrganizationCameraCustomAnalyticsArtifact](#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [getOrganizationCameraCustomAnalyticsArtifacts](#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts
* [getOrganizationCameraOnboardingStatuses](#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [updateDeviceCameraCustomAnalytics](#updatedevicecameracustomanalytics) - Update custom analytics settings for a camera
* [updateDeviceCameraQualityAndRetention](#updatedevicecameraqualityandretention) - Update quality and retention settings for the given camera
* [updateDeviceCameraSense](#updatedevicecamerasense) - Update sense settings for the given camera
* [updateDeviceCameraVideoSettings](#updatedevicecameravideosettings) - Update video settings for the given camera
* [updateDeviceCameraWirelessProfiles](#updatedevicecamerawirelessprofiles) - Assign wireless profiles to the given camera
* [updateNetworkCameraQualityRetentionProfile](#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.
* [updateNetworkCameraWirelessProfile](#updatenetworkcamerawirelessprofile) - Update an existing camera wireless profile in this network.
* [updateOrganizationCameraOnboardingStatuses](#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed

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
                .setSecurity(new Security("delectus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkCameraQualityRetentionProfileRequest req = new CreateNetworkCameraQualityRetentionProfileRequest(                new CreateNetworkCameraQualityRetentionProfileRequestBody("quos") {{
                                audioRecordingEnabled = false;
                                cloudArchiveEnabled = false;
                                maxRetentionDays = 661949L;
                                motionBasedRetentionEnabled = false;
                                motionDetectorVersion = 884812L;
                                restrictedBandwidthModeEnabled = false;
                                scheduleId = "ab";
                                videoSettings = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings() {{
                                    mv12Mv22Mv72 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum.HIGH, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum.ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720);;
                                    mv12We = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum.STANDARD, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum.ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080);;
                                    mv13 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum.ENHANCED, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum.ONE_THOUSAND_AND_EIGHTYX1080);;
                                    mv21Mv71 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum.STANDARD, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum.ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720);;
                                    mv22XMv72X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum.ENHANCED, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum.TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512);;
                                    mv32 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum.ENHANCED, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum.ONE_THOUSAND_AND_EIGHTYX1080);;
                                    mv33 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum.STANDARD, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum.ONE_THOUSAND_AND_EIGHTYX1080);;
                                    mv52 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum.HIGH, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum.TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512);;
                                    mv63 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum.HIGH, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum.ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080);;
                                    mv63X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum.HIGH, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum.TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512);;
                                    mv93 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum.ENHANCED, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum.ONE_THOUSAND_AND_EIGHTYX1080);;
                                    mv93X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum.HIGH, CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum.TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112);;
                                }};;
                            }};, "autem");            

            CreateNetworkCameraQualityRetentionProfileResponse res = sdk.camera.createNetworkCameraQualityRetentionProfile(req);

            if (res.createNetworkCameraQualityRetentionProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkCameraWirelessProfile

Creates a new camera wireless profile for this network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkCameraWirelessProfileRequest;
import org.openapis.openapi.models.operations.CreateNetworkCameraWirelessProfileRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkCameraWirelessProfileRequestBodyIdentity;
import org.openapis.openapi.models.operations.CreateNetworkCameraWirelessProfileRequestBodySsid;
import org.openapis.openapi.models.operations.CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraWirelessProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkCameraWirelessProfileRequest req = new CreateNetworkCameraWirelessProfileRequest(                new CreateNetworkCameraWirelessProfileRequestBody("nesciunt",                 new CreateNetworkCameraWirelessProfileRequestBodySsid() {{
                                                authMode = CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum.EIGHT_THOUSAND_AND_TWENTY_ONEX_RADIUS;
                                                encryptionMode = "animi";
                                                name = "Clyde Spencer";
                                                psk = "commodi";
                                            }};) {{
                                identity = new CreateNetworkCameraWirelessProfileRequestBodyIdentity() {{
                                    password = "autem";
                                    username = "Johan_Cummerata44";
                                }};;
                            }};, "eaque");            

            CreateNetworkCameraWirelessProfileResponse res = sdk.camera.createNetworkCameraWirelessProfile(req);

            if (res.createNetworkCameraWirelessProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrganizationCameraCustomAnalyticsArtifact

Create custom analytics artifact. Returns an artifact upload URL with expiry time. Upload the artifact file with a put request to the returned upload URL before its expiry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationCameraCustomAnalyticsArtifactRequest;
import org.openapis.openapi.models.operations.CreateOrganizationCameraCustomAnalyticsArtifactRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationCameraCustomAnalyticsArtifactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationCameraCustomAnalyticsArtifactRequest req = new CreateOrganizationCameraCustomAnalyticsArtifactRequest("blanditiis") {{
                requestBody = new CreateOrganizationCameraCustomAnalyticsArtifactRequestBody() {{
                    name = "Roman Shanahan";
                }};;
            }};            

            CreateOrganizationCameraCustomAnalyticsArtifactResponse res = sdk.camera.createOrganizationCameraCustomAnalyticsArtifact(req);

            if (res.createOrganizationCameraCustomAnalyticsArtifact201ApplicationJSONObject != null) {
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
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkCameraQualityRetentionProfileRequest req = new DeleteNetworkCameraQualityRetentionProfileRequest("laboriosam", "earum");            

            DeleteNetworkCameraQualityRetentionProfileResponse res = sdk.camera.deleteNetworkCameraQualityRetentionProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkCameraWirelessProfile

Delete an existing camera wireless profile for this network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkCameraWirelessProfileRequest;
import org.openapis.openapi.models.operations.DeleteNetworkCameraWirelessProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkCameraWirelessProfileRequest req = new DeleteNetworkCameraWirelessProfileRequest("dicta", "quidem");            

            DeleteNetworkCameraWirelessProfileResponse res = sdk.camera.deleteNetworkCameraWirelessProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationCameraCustomAnalyticsArtifact

Delete Custom Analytics Artifact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationCameraCustomAnalyticsArtifactRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationCameraCustomAnalyticsArtifactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationCameraCustomAnalyticsArtifactRequest req = new DeleteOrganizationCameraCustomAnalyticsArtifactRequest("laborum", "molestias");            

            DeleteOrganizationCameraCustomAnalyticsArtifactResponse res = sdk.camera.deleteOrganizationCameraCustomAnalyticsArtifact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateDeviceCameraSnapshot

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateDeviceCameraSnapshotRequest;
import org.openapis.openapi.models.operations.GenerateDeviceCameraSnapshotRequestBody;
import org.openapis.openapi.models.operations.GenerateDeviceCameraSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateDeviceCameraSnapshotRequest req = new GenerateDeviceCameraSnapshotRequest("dignissimos") {{
                requestBody = new GenerateDeviceCameraSnapshotRequestBody() {{
                    fullframe = false;
                    timestamp = OffsetDateTime.parse("2022-06-28T11:10:03.721Z");
                }};;
            }};            

            GenerateDeviceCameraSnapshotResponse res = sdk.camera.generateDeviceCameraSnapshot(req);

            if (res.generateDeviceCameraSnapshot202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraAnalyticsLive

Returns live state from camera of analytics zones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsLiveRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsLiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsLiveRequest req = new GetDeviceCameraAnalyticsLiveRequest("aliquid");            

            GetDeviceCameraAnalyticsLiveResponse res = sdk.camera.getDeviceCameraAnalyticsLive(req);

            if (res.getDeviceCameraAnalyticsLive200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraAnalyticsOverview

Returns an overview of aggregate analytics data for a timespan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsOverviewObjectTypeEnum;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsOverviewRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsOverviewRequest req = new GetDeviceCameraAnalyticsOverviewRequest("aspernatur") {{
                objectType = GetDeviceCameraAnalyticsOverviewObjectTypeEnum.VEHICLE;
                t0 = "dolorem";
                t1 = "neque";
                timespan = 563.71;
            }};            

            GetDeviceCameraAnalyticsOverviewResponse res = sdk.camera.getDeviceCameraAnalyticsOverview(req);

            if (res.getDeviceCameraAnalyticsOverview200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraAnalyticsRecent

Returns most recent record for analytics zones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsRecentObjectTypeEnum;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsRecentRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsRecentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsRecentRequest req = new GetDeviceCameraAnalyticsRecentRequest("repellendus") {{
                objectType = GetDeviceCameraAnalyticsRecentObjectTypeEnum.VEHICLE;
            }};            

            GetDeviceCameraAnalyticsRecentResponse res = sdk.camera.getDeviceCameraAnalyticsRecent(req);

            if (res.getDeviceCameraAnalyticsRecent200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraAnalyticsZoneHistory

Return historical records for analytic zones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZoneHistoryRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZoneHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsZoneHistoryRequest req = new GetDeviceCameraAnalyticsZoneHistoryRequest("ullam", "amet") {{
                objectType = GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum.PERSON;
                resolution = 842461L;
                t0 = "sint";
                t1 = "voluptates";
                timespan = 4671.09;
            }};            

            GetDeviceCameraAnalyticsZoneHistoryResponse res = sdk.camera.getDeviceCameraAnalyticsZoneHistory(req);

            if (res.getDeviceCameraAnalyticsZoneHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraAnalyticsZones

Returns all configured analytic zones for this camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZonesRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZonesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsZonesRequest req = new GetDeviceCameraAnalyticsZonesRequest("eligendi");            

            GetDeviceCameraAnalyticsZonesResponse res = sdk.camera.getDeviceCameraAnalyticsZones(req);

            if (res.getDeviceCameraAnalyticsZones200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraCustomAnalytics

Return custom analytics settings for a camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraCustomAnalyticsRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraCustomAnalyticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraCustomAnalyticsRequest req = new GetDeviceCameraCustomAnalyticsRequest("consequatur");            

            GetDeviceCameraCustomAnalyticsResponse res = sdk.camera.getDeviceCameraCustomAnalytics(req);

            if (res.getDeviceCameraCustomAnalytics200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraQualityAndRetention

Returns quality and retention settings for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraQualityAndRetentionRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraQualityAndRetentionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraQualityAndRetentionRequest req = new GetDeviceCameraQualityAndRetentionRequest("iure");            

            GetDeviceCameraQualityAndRetentionResponse res = sdk.camera.getDeviceCameraQualityAndRetention(req);

            if (res.getDeviceCameraQualityAndRetention200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraSense

Returns sense settings for a given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraSenseRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraSenseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraSenseRequest req = new GetDeviceCameraSenseRequest("quis");            

            GetDeviceCameraSenseResponse res = sdk.camera.getDeviceCameraSense(req);

            if (res.getDeviceCameraSense200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraSenseObjectDetectionModels

Returns the MV Sense object detection model list for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraSenseObjectDetectionModelsRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraSenseObjectDetectionModelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraSenseObjectDetectionModelsRequest req = new GetDeviceCameraSenseObjectDetectionModelsRequest("omnis");            

            GetDeviceCameraSenseObjectDetectionModelsResponse res = sdk.camera.getDeviceCameraSenseObjectDetectionModels(req);

            if (res.getDeviceCameraSenseObjectDetectionModels200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraVideoLink

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraVideoLinkRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraVideoLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraVideoLinkRequest req = new GetDeviceCameraVideoLinkRequest("quo") {{
                timestamp = OffsetDateTime.parse("2022-12-04T04:58:05.244Z");
            }};            

            GetDeviceCameraVideoLinkResponse res = sdk.camera.getDeviceCameraVideoLink(req);

            if (res.getDeviceCameraVideoLink200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraVideoSettings

Returns video settings for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraVideoSettingsRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraVideoSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraVideoSettingsRequest req = new GetDeviceCameraVideoSettingsRequest("quia");            

            GetDeviceCameraVideoSettingsResponse res = sdk.camera.getDeviceCameraVideoSettings(req);

            if (res.getDeviceCameraVideoSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraWirelessProfiles

Returns wireless profile assigned to the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraWirelessProfilesRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraWirelessProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraWirelessProfilesRequest req = new GetDeviceCameraWirelessProfilesRequest("est");            

            GetDeviceCameraWirelessProfilesResponse res = sdk.camera.getDeviceCameraWirelessProfiles(req);

            if (res.getDeviceCameraWirelessProfiles200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("rem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCameraQualityRetentionProfileRequest req = new GetNetworkCameraQualityRetentionProfileRequest("cum", "maiores");            

            GetNetworkCameraQualityRetentionProfileResponse res = sdk.camera.getNetworkCameraQualityRetentionProfile(req);

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
                .setSecurity(new Security("provident") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCameraQualityRetentionProfilesRequest req = new GetNetworkCameraQualityRetentionProfilesRequest("sunt");            

            GetNetworkCameraQualityRetentionProfilesResponse res = sdk.camera.getNetworkCameraQualityRetentionProfiles(req);

            if (res.getNetworkCameraQualityRetentionProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkCameraSchedules

Returns a list of all camera recording schedules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCameraSchedulesRequest;
import org.openapis.openapi.models.operations.GetNetworkCameraSchedulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCameraSchedulesRequest req = new GetNetworkCameraSchedulesRequest("excepturi");            

            GetNetworkCameraSchedulesResponse res = sdk.camera.getNetworkCameraSchedules(req);

            if (res.getNetworkCameraSchedules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkCameraWirelessProfile

Retrieve a single camera wireless profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCameraWirelessProfileRequest;
import org.openapis.openapi.models.operations.GetNetworkCameraWirelessProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCameraWirelessProfileRequest req = new GetNetworkCameraWirelessProfileRequest("dolore", "aspernatur");            

            GetNetworkCameraWirelessProfileResponse res = sdk.camera.getNetworkCameraWirelessProfile(req);

            if (res.getNetworkCameraWirelessProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkCameraWirelessProfiles

List the camera wireless profiles for this network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCameraWirelessProfilesRequest;
import org.openapis.openapi.models.operations.GetNetworkCameraWirelessProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCameraWirelessProfilesRequest req = new GetNetworkCameraWirelessProfilesRequest("fuga");            

            GetNetworkCameraWirelessProfilesResponse res = sdk.camera.getNetworkCameraWirelessProfiles(req);

            if (res.getNetworkCameraWirelessProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationCameraCustomAnalyticsArtifact

Get Custom Analytics Artifact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationCameraCustomAnalyticsArtifactRequest;
import org.openapis.openapi.models.operations.GetOrganizationCameraCustomAnalyticsArtifactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationCameraCustomAnalyticsArtifactRequest req = new GetOrganizationCameraCustomAnalyticsArtifactRequest("unde", "laborum");            

            GetOrganizationCameraCustomAnalyticsArtifactResponse res = sdk.camera.getOrganizationCameraCustomAnalyticsArtifact(req);

            if (res.getOrganizationCameraCustomAnalyticsArtifact200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationCameraCustomAnalyticsArtifacts

List Custom Analytics Artifacts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationCameraCustomAnalyticsArtifactsRequest;
import org.openapis.openapi.models.operations.GetOrganizationCameraCustomAnalyticsArtifactsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationCameraCustomAnalyticsArtifactsRequest req = new GetOrganizationCameraCustomAnalyticsArtifactsRequest("hic");            

            GetOrganizationCameraCustomAnalyticsArtifactsResponse res = sdk.camera.getOrganizationCameraCustomAnalyticsArtifacts(req);

            if (res.getOrganizationCameraCustomAnalyticsArtifacts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationCameraOnboardingStatuses

Fetch onboarding status of cameras

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationCameraOnboardingStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationCameraOnboardingStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationCameraOnboardingStatusesRequest req = new GetOrganizationCameraOnboardingStatusesRequest("soluta") {{
                networkIds = new String[]{{
                    add("praesentium"),
                    add("explicabo"),
                    add("odit"),
                    add("illo"),
                }};
                serials = new String[]{{
                    add("quia"),
                }};
            }};            

            GetOrganizationCameraOnboardingStatusesResponse res = sdk.camera.getOrganizationCameraOnboardingStatuses(req);

            if (res.getOrganizationCameraOnboardingStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCameraCustomAnalytics

Update custom analytics settings for a camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCameraCustomAnalyticsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCameraCustomAnalyticsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCameraCustomAnalyticsRequestBodyParameters;
import org.openapis.openapi.models.operations.UpdateDeviceCameraCustomAnalyticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCameraCustomAnalyticsRequest req = new UpdateDeviceCameraCustomAnalyticsRequest("velit") {{
                requestBody = new UpdateDeviceCameraCustomAnalyticsRequestBody() {{
                    artifactId = "ullam";
                    enabled = false;
                    parameters = new org.openapis.openapi.models.operations.UpdateDeviceCameraCustomAnalyticsRequestBodyParameters[]{{
                        add(new UpdateDeviceCameraCustomAnalyticsRequestBodyParameters("repellat", "iusto") {{
                            name = "Joey Labadie";
                            value = "dignissimos";
                        }}),
                        add(new UpdateDeviceCameraCustomAnalyticsRequestBodyParameters("sed", "optio") {{
                            name = "Adrian McCullough";
                            value = "nihil";
                        }}),
                        add(new UpdateDeviceCameraCustomAnalyticsRequestBodyParameters("dolorum", "eos") {{
                            name = "Victor Gleason";
                            value = "possimus";
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceCameraCustomAnalyticsResponse res = sdk.camera.updateDeviceCameraCustomAnalytics(req);

            if (res.updateDeviceCameraCustomAnalytics200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCameraQualityAndRetention

Update quality and retention settings for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCameraQualityAndRetentionRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCameraQualityAndRetentionRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCameraQualityAndRetentionRequestBodyMotionDetectorVersionEnum;
import org.openapis.openapi.models.operations.UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum;
import org.openapis.openapi.models.operations.UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum;
import org.openapis.openapi.models.operations.UpdateDeviceCameraQualityAndRetentionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCameraQualityAndRetentionRequest req = new UpdateDeviceCameraQualityAndRetentionRequest("quam") {{
                requestBody = new UpdateDeviceCameraQualityAndRetentionRequestBody() {{
                    audioRecordingEnabled = false;
                    motionBasedRetentionEnabled = false;
                    motionDetectorVersion = UpdateDeviceCameraQualityAndRetentionRequestBodyMotionDetectorVersionEnum.ONE;
                    profileId = "omnis";
                    quality = UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum.STANDARD;
                    resolution = UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum.ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
                    restrictedBandwidthModeEnabled = false;
                }};;
            }};            

            UpdateDeviceCameraQualityAndRetentionResponse res = sdk.camera.updateDeviceCameraQualityAndRetention(req);

            if (res.updateDeviceCameraQualityAndRetention200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCameraSense

Update sense settings for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCameraSenseRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCameraSenseRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCameraSenseRequestBodyAudioDetection;
import org.openapis.openapi.models.operations.UpdateDeviceCameraSenseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCameraSenseRequest req = new UpdateDeviceCameraSenseRequest("eligendi") {{
                requestBody = new UpdateDeviceCameraSenseRequestBody() {{
                    audioDetection = new UpdateDeviceCameraSenseRequestBodyAudioDetection() {{
                        enabled = false;
                    }};;
                    detectionModelId = "numquam";
                    mqttBrokerId = "inventore";
                    senseEnabled = false;
                }};;
            }};            

            UpdateDeviceCameraSenseResponse res = sdk.camera.updateDeviceCameraSense(req);

            if (res.updateDeviceCameraSense200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCameraVideoSettings

Update video settings for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCameraVideoSettingsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCameraVideoSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCameraVideoSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCameraVideoSettingsRequest req = new UpdateDeviceCameraVideoSettingsRequest("tenetur") {{
                requestBody = new UpdateDeviceCameraVideoSettingsRequestBody() {{
                    externalRtspEnabled = false;
                }};;
            }};            

            UpdateDeviceCameraVideoSettingsResponse res = sdk.camera.updateDeviceCameraVideoSettings(req);

            if (res.updateDeviceCameraVideoSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCameraWirelessProfiles

Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCameraWirelessProfilesRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCameraWirelessProfilesRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCameraWirelessProfilesRequestBodyIds;
import org.openapis.openapi.models.operations.UpdateDeviceCameraWirelessProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCameraWirelessProfilesRequest req = new UpdateDeviceCameraWirelessProfilesRequest(                new UpdateDeviceCameraWirelessProfilesRequestBody(                new UpdateDeviceCameraWirelessProfilesRequestBodyIds() {{
                                                backup = "nihil";
                                                primary = "quia";
                                                secondary = "quis";
                                            }};);, "maiores");            

            UpdateDeviceCameraWirelessProfilesResponse res = sdk.camera.updateDeviceCameraWirelessProfiles(req);

            if (res.updateDeviceCameraWirelessProfiles200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("dicta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkCameraQualityRetentionProfileRequest req = new UpdateNetworkCameraQualityRetentionProfileRequest("dicta", "eum") {{
                requestBody = new UpdateNetworkCameraQualityRetentionProfileRequestBody() {{
                    audioRecordingEnabled = false;
                    cloudArchiveEnabled = false;
                    maxRetentionDays = 572996L;
                    motionBasedRetentionEnabled = false;
                    motionDetectorVersion = 659804L;
                    name = "Arthur Waters PhD";
                    restrictedBandwidthModeEnabled = false;
                    scheduleId = "voluptatum";
                    videoSettings = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings() {{
                        mv12Mv22Mv72 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum.HIGH, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum.ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720);;
                        mv12We = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum.ENHANCED, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum.ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080);;
                        mv13 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum.ENHANCED, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum.ONE_THOUSAND_AND_EIGHTYX1080);;
                        mv21Mv71 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum.STANDARD, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum.ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720);;
                        mv22XMv72X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum.ENHANCED, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum.ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720);;
                        mv32 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum.STANDARD, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum.ONE_THOUSAND_AND_EIGHTYX1080);;
                        mv33 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum.STANDARD, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum.TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112);;
                        mv52 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum.HIGH, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum.ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080);;
                        mv63 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum.HIGH, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum.ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080);;
                        mv63X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum.HIGH, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum.TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512);;
                        mv93 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum.STANDARD, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum.ONE_THOUSAND_AND_EIGHTYX1080);;
                        mv93X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum.STANDARD, UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum.TWO_THOUSAND_EIGHT_HUNDRED_AND_EIGHTYX2880);;
                    }};;
                }};;
            }};            

            UpdateNetworkCameraQualityRetentionProfileResponse res = sdk.camera.updateNetworkCameraQualityRetentionProfile(req);

            if (res.updateNetworkCameraQualityRetentionProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkCameraWirelessProfile

Update an existing camera wireless profile in this network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkCameraWirelessProfileRequest;
import org.openapis.openapi.models.operations.UpdateNetworkCameraWirelessProfileRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkCameraWirelessProfileRequestBodyIdentity;
import org.openapis.openapi.models.operations.UpdateNetworkCameraWirelessProfileRequestBodySsid;
import org.openapis.openapi.models.operations.UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraWirelessProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkCameraWirelessProfileRequest req = new UpdateNetworkCameraWirelessProfileRequest("aspernatur", "aspernatur") {{
                requestBody = new UpdateNetworkCameraWirelessProfileRequestBody() {{
                    identity = new UpdateNetworkCameraWirelessProfileRequestBodyIdentity() {{
                        password = "et";
                        username = "Freida_Bosco12";
                    }};;
                    name = "Ms. Diane Corwin";
                    ssid = new UpdateNetworkCameraWirelessProfileRequestBodySsid() {{
                        authMode = UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum.PSK;
                        encryptionMode = "enim";
                        name = "Kerry Mitchell";
                        psk = "modi";
                    }};;
                }};;
            }};            

            UpdateNetworkCameraWirelessProfileResponse res = sdk.camera.updateNetworkCameraWirelessProfile(req);

            if (res.updateNetworkCameraWirelessProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationCameraOnboardingStatuses

Notify that credential handoff to camera has completed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationCameraOnboardingStatusesRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationCameraOnboardingStatusesRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationCameraOnboardingStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationCameraOnboardingStatusesRequest req = new UpdateOrganizationCameraOnboardingStatusesRequest("pariatur") {{
                requestBody = new UpdateOrganizationCameraOnboardingStatusesRequestBody() {{
                    serial = "praesentium";
                    wirelessCredentialsSent = false;
                }};;
            }};            

            UpdateOrganizationCameraOnboardingStatusesResponse res = sdk.camera.updateOrganizationCameraOnboardingStatuses(req);

            if (res.updateOrganizationCameraOnboardingStatuses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
