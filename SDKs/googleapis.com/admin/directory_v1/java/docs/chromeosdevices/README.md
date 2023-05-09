# chromeosdevices

### Available Operations

* [directoryChromeosdevicesAction](#directorychromeosdevicesaction) - Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
* [directoryChromeosdevicesGet](#directorychromeosdevicesget) - Retrieves a Chrome OS device's properties.
* [directoryChromeosdevicesList](#directorychromeosdeviceslist) - Retrieves a paginated list of Chrome OS devices within an account.
* [directoryChromeosdevicesMoveDevicesToOu](#directorychromeosdevicesmovedevicestoou) - Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
* [directoryChromeosdevicesPatch](#directorychromeosdevicespatch) - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [directoryChromeosdevicesUpdate](#directorychromeosdevicesupdate) - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

## directoryChromeosdevicesAction

Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesActionRequest;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesActionResponse;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesActionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChromeOsDeviceAction;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryChromeosdevicesActionRequest req = new DirectoryChromeosdevicesActionRequest("error", "quia") {{
                dollarXgafv = XgafvEnum.ONE;
                chromeOsDeviceAction = new ChromeOsDeviceAction() {{
                    action = "vitae";
                    deprovisionReason = "laborum";
                }};;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "quo";
                key = "sequi";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "id";
                uploadProtocol = "possimus";
            }};            

            DirectoryChromeosdevicesActionResponse res = sdk.chromeosdevices.directoryChromeosdevicesAction(req, new DirectoryChromeosdevicesActionSecurity("aut", "quasi") {{
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

## directoryChromeosdevicesGet

Retrieves a Chrome OS device's properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesGetProjectionEnum;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesGetRequest;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesGetResponse;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesGetSecurity;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryChromeosdevicesGetRequest req = new DirectoryChromeosdevicesGetRequest("error", "temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "vero";
                key = "nihil";
                oauthToken = "praesentium";
                prettyPrint = false;
                projection = DirectoryChromeosdevicesGetProjectionEnum.FULL;
                quotaUser = "ipsa";
                uploadType = "omnis";
                uploadProtocol = "voluptate";
            }};            

            DirectoryChromeosdevicesGetResponse res = sdk.chromeosdevices.directoryChromeosdevicesGet(req, new DirectoryChromeosdevicesGetSecurity() {{
                option1 = new DirectoryChromeosdevicesGetSecurityOption1("cum", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.chromeOsDevice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryChromeosdevicesList

Retrieves a paginated list of Chrome OS devices within an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesListOrderByEnum;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesListProjectionEnum;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesListRequest;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesListResponse;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesListSecurity;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesListSecurityOption2;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryChromeosdevicesListRequest req = new DirectoryChromeosdevicesListRequest("doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "corporis";
                includeChildOrgunits = false;
                key = "dolore";
                maxResults = 480894L;
                oauthToken = "dicta";
                orderBy = DirectoryChromeosdevicesListOrderByEnum.SERIAL_NUMBER;
                orgUnitPath = "enim";
                pageToken = "accusamus";
                prettyPrint = false;
                projection = DirectoryChromeosdevicesListProjectionEnum.BASIC;
                query = "repudiandae";
                quotaUser = "quae";
                sortOrder = DirectoryChromeosdevicesListSortOrderEnum.ASCENDING;
                uploadType = "quidem";
                uploadProtocol = "molestias";
            }};            

            DirectoryChromeosdevicesListResponse res = sdk.chromeosdevices.directoryChromeosdevicesList(req, new DirectoryChromeosdevicesListSecurity() {{
                option1 = new DirectoryChromeosdevicesListSecurityOption1("excepturi", "pariatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.chromeOsDevices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryChromeosdevicesMoveDevicesToOu

Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesMoveDevicesToOuRequest;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesMoveDevicesToOuResponse;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesMoveDevicesToOuSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChromeOsMoveDevicesToOu;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryChromeosdevicesMoveDevicesToOuRequest req = new DirectoryChromeosdevicesMoveDevicesToOuRequest("modi", "praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                chromeOsMoveDevicesToOu = new ChromeOsMoveDevicesToOu() {{
                    deviceIds = new String[]{{
                        add("quasi"),
                        add("repudiandae"),
                        add("sint"),
                        add("veritatis"),
                    }};
                }};;
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "consequatur";
                key = "est";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "deserunt";
                uploadProtocol = "distinctio";
            }};            

            DirectoryChromeosdevicesMoveDevicesToOuResponse res = sdk.chromeosdevices.directoryChromeosdevicesMoveDevicesToOu(req, new DirectoryChromeosdevicesMoveDevicesToOuSecurity("quibusdam", "labore") {{
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

## directoryChromeosdevicesPatch

Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesPatchProjectionEnum;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesPatchRequest;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesPatchResponse;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChromeOsDevice;
import org.openapis.openapi.models.shared.ChromeOsDeviceActiveTimeRanges;
import org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfo;
import org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpus;
import org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpusCStates;
import org.openapis.openapi.models.shared.ChromeOsDeviceCpuStatusReports;
import org.openapis.openapi.models.shared.ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo;
import org.openapis.openapi.models.shared.ChromeOsDeviceDeprovisionReasonEnum;
import org.openapis.openapi.models.shared.ChromeOsDeviceDeviceFiles;
import org.openapis.openapi.models.shared.ChromeOsDeviceDiskVolumeReports;
import org.openapis.openapi.models.shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo;
import org.openapis.openapi.models.shared.ChromeOsDeviceLastKnownNetwork;
import org.openapis.openapi.models.shared.ChromeOsDeviceRecentUsers;
import org.openapis.openapi.models.shared.ChromeOsDeviceScreenshotFiles;
import org.openapis.openapi.models.shared.ChromeOsDeviceSystemRamFreeReports;
import org.openapis.openapi.models.shared.ChromeOsDeviceTpmVersionInfo;
import org.openapis.openapi.models.shared.OsUpdateStatus;
import org.openapis.openapi.models.shared.OsUpdateStatusStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryChromeosdevicesPatchRequest req = new DirectoryChromeosdevicesPatchRequest("modi", "qui") {{
                dollarXgafv = XgafvEnum.ONE;
                chromeOsDevice = new ChromeOsDevice() {{
                    activeTimeRanges = new org.openapis.openapi.models.shared.ChromeOsDeviceActiveTimeRanges[]{{
                        add(new ChromeOsDeviceActiveTimeRanges() {{
                            activeTime = 552822;
                            date = LocalDate.parse("2022-11-01");
                        }}),
                        add(new ChromeOsDeviceActiveTimeRanges() {{
                            activeTime = 828940;
                            date = LocalDate.parse("2022-12-30");
                        }}),
                        add(new ChromeOsDeviceActiveTimeRanges() {{
                            activeTime = 146441;
                            date = LocalDate.parse("2021-11-11");
                        }}),
                    }};
                    annotatedAssetId = "tempora";
                    annotatedLocation = "facilis";
                    annotatedUser = "tempore";
                    autoUpdateExpiration = "labore";
                    bootMode = "delectus";
                    cpuInfo = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfo[]{{
                        add(new ChromeOsDeviceCpuInfo() {{
                            architecture = "non";
                            logicalCpus = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpus[]{{
                                add(new ChromeOsDeviceCpuInfoLogicalCpus() {{
                                    cStates = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpusCStates[]{{
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "aliquid";
                                            sessionDuration = "provident";
                                        }}),
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "necessitatibus";
                                            sessionDuration = "sint";
                                        }}),
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "officia";
                                            sessionDuration = "dolor";
                                        }}),
                                    }};
                                    currentScalingFrequencyKhz = 891555;
                                    idleDuration = "a";
                                    maxScalingFrequencyKhz = 680056;
                                }}),
                                add(new ChromeOsDeviceCpuInfoLogicalCpus() {{
                                    cStates = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpusCStates[]{{
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "in";
                                            sessionDuration = "illum";
                                        }}),
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "maiores";
                                            sessionDuration = "rerum";
                                        }}),
                                    }};
                                    currentScalingFrequencyKhz = 116202;
                                    idleDuration = "magnam";
                                    maxScalingFrequencyKhz = 767024;
                                }}),
                                add(new ChromeOsDeviceCpuInfoLogicalCpus() {{
                                    cStates = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpusCStates[]{{
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "ea";
                                            sessionDuration = "aliquid";
                                        }}),
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "laborum";
                                            sessionDuration = "accusamus";
                                        }}),
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "non";
                                            sessionDuration = "occaecati";
                                        }}),
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "enim";
                                            sessionDuration = "accusamus";
                                        }}),
                                    }};
                                    currentScalingFrequencyKhz = 965417;
                                    idleDuration = "quidem";
                                    maxScalingFrequencyKhz = 588465;
                                }}),
                                add(new ChromeOsDeviceCpuInfoLogicalCpus() {{
                                    cStates = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpusCStates[]{{
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "id";
                                            sessionDuration = "blanditiis";
                                        }}),
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "deleniti";
                                            sessionDuration = "sapiente";
                                        }}),
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "amet";
                                            sessionDuration = "deserunt";
                                        }}),
                                    }};
                                    currentScalingFrequencyKhz = 394869;
                                    idleDuration = "vel";
                                    maxScalingFrequencyKhz = 618809;
                                }}),
                            }};
                            maxClockSpeedKhz = 606393;
                            model = "molestiae";
                        }}),
                        add(new ChromeOsDeviceCpuInfo() {{
                            architecture = "perferendis";
                            logicalCpus = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpus[]{{
                                add(new ChromeOsDeviceCpuInfoLogicalCpus() {{
                                    cStates = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpusCStates[]{{
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "distinctio";
                                            sessionDuration = "id";
                                        }}),
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "labore";
                                            sessionDuration = "labore";
                                        }}),
                                    }};
                                    currentScalingFrequencyKhz = 383462;
                                    idleDuration = "natus";
                                    maxScalingFrequencyKhz = 749170;
                                }}),
                                add(new ChromeOsDeviceCpuInfoLogicalCpus() {{
                                    cStates = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpusCStates[]{{
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "vero";
                                            sessionDuration = "aspernatur";
                                        }}),
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "architecto";
                                            sessionDuration = "magnam";
                                        }}),
                                    }};
                                    currentScalingFrequencyKhz = 92373;
                                    idleDuration = "excepturi";
                                    maxScalingFrequencyKhz = 354047;
                                }}),
                            }};
                            maxClockSpeedKhz = 590873;
                            model = "quos";
                        }}),
                    }};
                    cpuStatusReports = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuStatusReports[]{{
                        add(new ChromeOsDeviceCpuStatusReports() {{
                            cpuTemperatureInfo = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo[]{{
                                add(new ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo() {{
                                    label = "mollitia";
                                    temperature = 968962;
                                }}),
                            }};
                            cpuUtilizationPercentageInfo = new Integer[]{{
                                add(320997),
                                add(431418),
                                add(221262),
                            }};
                            reportTime = OffsetDateTime.parse("2022-07-30T07:35:03.817Z");
                        }}),
                        add(new ChromeOsDeviceCpuStatusReports() {{
                            cpuTemperatureInfo = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo[]{{
                                add(new ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo() {{
                                    label = "quasi";
                                    temperature = 435865;
                                }}),
                                add(new ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo() {{
                                    label = "doloribus";
                                    temperature = 891924;
                                }}),
                            }};
                            cpuUtilizationPercentageInfo = new Integer[]{{
                                add(806194),
                                add(537023),
                            }};
                            reportTime = OffsetDateTime.parse("2022-02-08T00:19:59.821Z");
                        }}),
                        add(new ChromeOsDeviceCpuStatusReports() {{
                            cpuTemperatureInfo = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo[]{{
                                add(new ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo() {{
                                    label = "architecto";
                                    temperature = 919483;
                                }}),
                            }};
                            cpuUtilizationPercentageInfo = new Integer[]{{
                                add(714242),
                                add(469249),
                            }};
                            reportTime = OffsetDateTime.parse("2020-06-23T22:50:14.437Z");
                        }}),
                    }};
                    deprovisionReason = ChromeOsDeviceDeprovisionReasonEnum.DEPROVISION_REASON_SAME_MODEL_REPLACEMENT;
                    deviceFiles = new org.openapis.openapi.models.shared.ChromeOsDeviceDeviceFiles[]{{
                        add(new ChromeOsDeviceDeviceFiles() {{
                            createTime = OffsetDateTime.parse("2022-11-20T20:56:20.791Z");
                            downloadUrl = "consequuntur";
                            name = "Miss Nick Cummerata";
                            type = "pariatur";
                        }}),
                        add(new ChromeOsDeviceDeviceFiles() {{
                            createTime = OffsetDateTime.parse("2021-10-07T12:29:38.109Z");
                            downloadUrl = "excepturi";
                            name = "Dr. Rosemary Bartoletti";
                            type = "ipsam";
                        }}),
                        add(new ChromeOsDeviceDeviceFiles() {{
                            createTime = OffsetDateTime.parse("2022-07-31T16:08:22.625Z");
                            downloadUrl = "nam";
                            name = "Meredith Hickle PhD";
                            type = "amet";
                        }}),
                        add(new ChromeOsDeviceDeviceFiles() {{
                            createTime = OffsetDateTime.parse("2022-03-27T19:22:24.458Z");
                            downloadUrl = "corporis";
                            name = "Pete Rohan";
                            type = "totam";
                        }}),
                    }};
                    deviceId = "dignissimos";
                    diskVolumeReports = new org.openapis.openapi.models.shared.ChromeOsDeviceDiskVolumeReports[]{{
                        add(new ChromeOsDeviceDiskVolumeReports() {{
                            volumeInfo = new org.openapis.openapi.models.shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo[]{{
                                add(new ChromeOsDeviceDiskVolumeReportsVolumeInfo() {{
                                    storageFree = "nesciunt";
                                    storageTotal = "eos";
                                    volumeId = "perferendis";
                                }}),
                                add(new ChromeOsDeviceDiskVolumeReportsVolumeInfo() {{
                                    storageFree = "dolores";
                                    storageTotal = "minus";
                                    volumeId = "quam";
                                }}),
                            }};
                        }}),
                    }};
                    dockMacAddress = "dolor";
                    etag = "vero";
                    ethernetMacAddress = "nostrum";
                    ethernetMacAddress0 = "hic";
                    firmwareVersion = "recusandae";
                    firstEnrollmentTime = "omnis";
                    kind = "facilis";
                    lastDeprovisionTimestamp = "perspiciatis";
                    lastEnrollmentTime = OffsetDateTime.parse("2022-03-20T23:16:34.777Z");
                    lastKnownNetwork = new org.openapis.openapi.models.shared.ChromeOsDeviceLastKnownNetwork[]{{
                        add(new ChromeOsDeviceLastKnownNetwork() {{
                            ipAddress = "blanditiis";
                            wanIpAddress = "error";
                        }}),
                    }};
                    lastSync = OffsetDateTime.parse("2022-06-04T07:28:38.912Z");
                    macAddress = "rerum";
                    manufactureDate = "adipisci";
                    meid = "asperiores";
                    model = "earum";
                    notes = "modi";
                    orderNumber = "iste";
                    orgUnitId = "dolorum";
                    orgUnitPath = "deleniti";
                    osUpdateStatus = new OsUpdateStatus() {{
                        rebootTime = "pariatur";
                        state = OsUpdateStatusStateEnum.UPDATE_STATE_DOWNLOAD_IN_PROGRESS;
                        targetKioskAppVersion = "nobis";
                        targetOsVersion = "libero";
                        updateCheckTime = "delectus";
                        updateTime = "quaerat";
                    }};;
                    osVersion = "quos";
                    platformVersion = "aliquid";
                    recentUsers = new org.openapis.openapi.models.shared.ChromeOsDeviceRecentUsers[]{{
                        add(new ChromeOsDeviceRecentUsers() {{
                            email = "Dameon94@gmail.com";
                            type = "excepturi";
                        }}),
                    }};
                    screenshotFiles = new org.openapis.openapi.models.shared.ChromeOsDeviceScreenshotFiles[]{{
                        add(new ChromeOsDeviceScreenshotFiles() {{
                            createTime = OffsetDateTime.parse("2022-07-05T23:34:50.715Z");
                            downloadUrl = "reiciendis";
                            name = "Mr. Lee Funk III";
                            type = "odio";
                        }}),
                        add(new ChromeOsDeviceScreenshotFiles() {{
                            createTime = OffsetDateTime.parse("2022-02-13T10:24:00.119Z");
                            downloadUrl = "quidem";
                            name = "Hector Mosciski";
                            type = "sit";
                        }}),
                        add(new ChromeOsDeviceScreenshotFiles() {{
                            createTime = OffsetDateTime.parse("2022-10-19T08:40:45.996Z");
                            downloadUrl = "soluta";
                            name = "Ted Kling";
                            type = "omnis";
                        }}),
                    }};
                    serialNumber = "necessitatibus";
                    status = "distinctio";
                    supportEndDate = OffsetDateTime.parse("2021-08-04T21:36:49.552Z");
                    systemRamFreeReports = new org.openapis.openapi.models.shared.ChromeOsDeviceSystemRamFreeReports[]{{
                        add(new ChromeOsDeviceSystemRamFreeReports() {{
                            reportTime = OffsetDateTime.parse("2022-05-03T23:26:05.435Z");
                            systemRamFreeInfo = new String[]{{
                                add("eius"),
                                add("aspernatur"),
                                add("perferendis"),
                                add("amet"),
                            }};
                        }}),
                    }};
                    systemRamTotal = "optio";
                    tpmVersionInfo = new ChromeOsDeviceTpmVersionInfo() {{
                        family = "accusamus";
                        firmwareVersion = "ad";
                        manufacturer = "saepe";
                        specLevel = "suscipit";
                        tpmModel = "deserunt";
                        vendorSpecific = "provident";
                    }};;
                    willAutoRenew = false;
                }};;
                accessToken = "minima";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "similique";
                key = "alias";
                oauthToken = "at";
                prettyPrint = false;
                projection = DirectoryChromeosdevicesPatchProjectionEnum.BASIC;
                quotaUser = "tempora";
                uploadType = "vel";
                uploadProtocol = "quod";
            }};            

            DirectoryChromeosdevicesPatchResponse res = sdk.chromeosdevices.directoryChromeosdevicesPatch(req, new DirectoryChromeosdevicesPatchSecurity("officiis", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.chromeOsDevice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryChromeosdevicesUpdate

Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesUpdateProjectionEnum;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesUpdateRequest;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesUpdateResponse;
import org.openapis.openapi.models.operations.DirectoryChromeosdevicesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChromeOsDevice;
import org.openapis.openapi.models.shared.ChromeOsDeviceActiveTimeRanges;
import org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfo;
import org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpus;
import org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpusCStates;
import org.openapis.openapi.models.shared.ChromeOsDeviceCpuStatusReports;
import org.openapis.openapi.models.shared.ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo;
import org.openapis.openapi.models.shared.ChromeOsDeviceDeprovisionReasonEnum;
import org.openapis.openapi.models.shared.ChromeOsDeviceDeviceFiles;
import org.openapis.openapi.models.shared.ChromeOsDeviceDiskVolumeReports;
import org.openapis.openapi.models.shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo;
import org.openapis.openapi.models.shared.ChromeOsDeviceLastKnownNetwork;
import org.openapis.openapi.models.shared.ChromeOsDeviceRecentUsers;
import org.openapis.openapi.models.shared.ChromeOsDeviceScreenshotFiles;
import org.openapis.openapi.models.shared.ChromeOsDeviceSystemRamFreeReports;
import org.openapis.openapi.models.shared.ChromeOsDeviceTpmVersionInfo;
import org.openapis.openapi.models.shared.OsUpdateStatus;
import org.openapis.openapi.models.shared.OsUpdateStatusStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryChromeosdevicesUpdateRequest req = new DirectoryChromeosdevicesUpdateRequest("dolorum", "a") {{
                dollarXgafv = XgafvEnum.ONE;
                chromeOsDevice = new ChromeOsDevice() {{
                    activeTimeRanges = new org.openapis.openapi.models.shared.ChromeOsDeviceActiveTimeRanges[]{{
                        add(new ChromeOsDeviceActiveTimeRanges() {{
                            activeTime = 483409;
                            date = LocalDate.parse("2022-03-19");
                        }}),
                        add(new ChromeOsDeviceActiveTimeRanges() {{
                            activeTime = 947371;
                            date = LocalDate.parse("2022-04-09");
                        }}),
                        add(new ChromeOsDeviceActiveTimeRanges() {{
                            activeTime = 880298;
                            date = LocalDate.parse("2022-09-08");
                        }}),
                    }};
                    annotatedAssetId = "dolorem";
                    annotatedLocation = "sapiente";
                    annotatedUser = "totam";
                    autoUpdateExpiration = "nihil";
                    bootMode = "sit";
                    cpuInfo = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfo[]{{
                        add(new ChromeOsDeviceCpuInfo() {{
                            architecture = "neque";
                            logicalCpus = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpus[]{{
                                add(new ChromeOsDeviceCpuInfoLogicalCpus() {{
                                    cStates = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpusCStates[]{{
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "libero";
                                            sessionDuration = "voluptas";
                                        }}),
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "deserunt";
                                            sessionDuration = "quam";
                                        }}),
                                    }};
                                    currentScalingFrequencyKhz = 214880;
                                    idleDuration = "incidunt";
                                    maxScalingFrequencyKhz = 186458;
                                }}),
                            }};
                            maxClockSpeedKhz = 586784;
                            model = "maxime";
                        }}),
                        add(new ChromeOsDeviceCpuInfo() {{
                            architecture = "pariatur";
                            logicalCpus = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpus[]{{
                                add(new ChromeOsDeviceCpuInfoLogicalCpus() {{
                                    cStates = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpusCStates[]{{
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "laborum";
                                            sessionDuration = "totam";
                                        }}),
                                    }};
                                    currentScalingFrequencyKhz = 276894;
                                    idleDuration = "aspernatur";
                                    maxScalingFrequencyKhz = 174909;
                                }}),
                                add(new ChromeOsDeviceCpuInfoLogicalCpus() {{
                                    cStates = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpusCStates[]{{
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "facilis";
                                            sessionDuration = "aliquid";
                                        }}),
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "quam";
                                            sessionDuration = "molestias";
                                        }}),
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "temporibus";
                                            sessionDuration = "qui";
                                        }}),
                                    }};
                                    currentScalingFrequencyKhz = 204865;
                                    idleDuration = "fugit";
                                    maxScalingFrequencyKhz = 164959;
                                }}),
                                add(new ChromeOsDeviceCpuInfoLogicalCpus() {{
                                    cStates = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpusCStates[]{{
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "sunt";
                                            sessionDuration = "ullam";
                                        }}),
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "nam";
                                            sessionDuration = "hic";
                                        }}),
                                    }};
                                    currentScalingFrequencyKhz = 30452;
                                    idleDuration = "cumque";
                                    maxScalingFrequencyKhz = 746994;
                                }}),
                            }};
                            maxClockSpeedKhz = 748664;
                            model = "et";
                        }}),
                        add(new ChromeOsDeviceCpuInfo() {{
                            architecture = "saepe";
                            logicalCpus = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpus[]{{
                                add(new ChromeOsDeviceCpuInfoLogicalCpus() {{
                                    cStates = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuInfoLogicalCpusCStates[]{{
                                        add(new ChromeOsDeviceCpuInfoLogicalCpusCStates() {{
                                            displayName = "nobis";
                                            sessionDuration = "quos";
                                        }}),
                                    }};
                                    currentScalingFrequencyKhz = 731694;
                                    idleDuration = "cupiditate";
                                    maxScalingFrequencyKhz = 45614;
                                }}),
                            }};
                            maxClockSpeedKhz = 961937;
                            model = "dolorem";
                        }}),
                    }};
                    cpuStatusReports = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuStatusReports[]{{
                        add(new ChromeOsDeviceCpuStatusReports() {{
                            cpuTemperatureInfo = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo[]{{
                                add(new ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo() {{
                                    label = "adipisci";
                                    temperature = 677263;
                                }}),
                                add(new ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo() {{
                                    label = "architecto";
                                    temperature = 63038;
                                }}),
                            }};
                            cpuUtilizationPercentageInfo = new Integer[]{{
                                add(555649),
                            }};
                            reportTime = OffsetDateTime.parse("2022-12-21T21:10:14.455Z");
                        }}),
                        add(new ChromeOsDeviceCpuStatusReports() {{
                            cpuTemperatureInfo = new org.openapis.openapi.models.shared.ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo[]{{
                                add(new ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo() {{
                                    label = "repellendus";
                                    temperature = 785153;
                                }}),
                                add(new ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo() {{
                                    label = "doloribus";
                                    temperature = 281730;
                                }}),
                                add(new ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo() {{
                                    label = "facilis";
                                    temperature = 586410;
                                }}),
                            }};
                            cpuUtilizationPercentageInfo = new Integer[]{{
                                add(63955),
                            }};
                            reportTime = OffsetDateTime.parse("2022-01-11T11:48:15.910Z");
                        }}),
                    }};
                    deprovisionReason = ChromeOsDeviceDeprovisionReasonEnum.DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT;
                    deviceFiles = new org.openapis.openapi.models.shared.ChromeOsDeviceDeviceFiles[]{{
                        add(new ChromeOsDeviceDeviceFiles() {{
                            createTime = OffsetDateTime.parse("2020-05-16T05:26:31.901Z");
                            downloadUrl = "omnis";
                            name = "Tiffany Willms";
                            type = "vero";
                        }}),
                        add(new ChromeOsDeviceDeviceFiles() {{
                            createTime = OffsetDateTime.parse("2021-07-10T23:11:25.857Z");
                            downloadUrl = "hic";
                            name = "Jermaine Kuhic";
                            type = "vero";
                        }}),
                        add(new ChromeOsDeviceDeviceFiles() {{
                            createTime = OffsetDateTime.parse("2022-09-16T01:08:31.616Z");
                            downloadUrl = "quibusdam";
                            name = "Earl Mosciski DVM";
                            type = "exercitationem";
                        }}),
                        add(new ChromeOsDeviceDeviceFiles() {{
                            createTime = OffsetDateTime.parse("2022-07-22T18:51:28.663Z");
                            downloadUrl = "porro";
                            name = "Domingo Kris";
                            type = "alias";
                        }}),
                    }};
                    deviceId = "officia";
                    diskVolumeReports = new org.openapis.openapi.models.shared.ChromeOsDeviceDiskVolumeReports[]{{
                        add(new ChromeOsDeviceDiskVolumeReports() {{
                            volumeInfo = new org.openapis.openapi.models.shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo[]{{
                                add(new ChromeOsDeviceDiskVolumeReportsVolumeInfo() {{
                                    storageFree = "ea";
                                    storageTotal = "aspernatur";
                                    volumeId = "vel";
                                }}),
                                add(new ChromeOsDeviceDiskVolumeReportsVolumeInfo() {{
                                    storageFree = "possimus";
                                    storageTotal = "magnam";
                                    volumeId = "ratione";
                                }}),
                            }};
                        }}),
                        add(new ChromeOsDeviceDiskVolumeReports() {{
                            volumeInfo = new org.openapis.openapi.models.shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo[]{{
                                add(new ChromeOsDeviceDiskVolumeReportsVolumeInfo() {{
                                    storageFree = "laudantium";
                                    storageTotal = "dicta";
                                    volumeId = "dolor";
                                }}),
                                add(new ChromeOsDeviceDiskVolumeReportsVolumeInfo() {{
                                    storageFree = "maiores";
                                    storageTotal = "quasi";
                                    volumeId = "ex";
                                }}),
                            }};
                        }}),
                    }};
                    dockMacAddress = "nulla";
                    etag = "excepturi";
                    ethernetMacAddress = "voluptatibus";
                    ethernetMacAddress0 = "nostrum";
                    firmwareVersion = "sapiente";
                    firstEnrollmentTime = "quisquam";
                    kind = "saepe";
                    lastDeprovisionTimestamp = "ea";
                    lastEnrollmentTime = OffsetDateTime.parse("2021-12-03T14:20:49.127Z");
                    lastKnownNetwork = new org.openapis.openapi.models.shared.ChromeOsDeviceLastKnownNetwork[]{{
                        add(new ChromeOsDeviceLastKnownNetwork() {{
                            ipAddress = "aliquid";
                            wanIpAddress = "inventore";
                        }}),
                        add(new ChromeOsDeviceLastKnownNetwork() {{
                            ipAddress = "magnam";
                            wanIpAddress = "ea";
                        }}),
                    }};
                    lastSync = OffsetDateTime.parse("2022-04-21T16:53:11.568Z");
                    macAddress = "recusandae";
                    manufactureDate = "aspernatur";
                    meid = "minima";
                    model = "eaque";
                    notes = "a";
                    orderNumber = "libero";
                    orgUnitId = "aut";
                    orgUnitPath = "aut";
                    osUpdateStatus = new OsUpdateStatus() {{
                        rebootTime = "deleniti";
                        state = OsUpdateStatusStateEnum.UPDATE_STATE_NEED_REBOOT;
                        targetKioskAppVersion = "aliquam";
                        targetOsVersion = "fugit";
                        updateCheckTime = "accusamus";
                        updateTime = "inventore";
                    }};;
                    osVersion = "non";
                    platformVersion = "et";
                    recentUsers = new org.openapis.openapi.models.shared.ChromeOsDeviceRecentUsers[]{{
                        add(new ChromeOsDeviceRecentUsers() {{
                            email = "Ramon.Franecki@hotmail.com";
                            type = "nobis";
                        }}),
                        add(new ChromeOsDeviceRecentUsers() {{
                            email = "Richard_Stoltenberg@yahoo.com";
                            type = "quasi";
                        }}),
                        add(new ChromeOsDeviceRecentUsers() {{
                            email = "Derrick.Cole@gmail.com";
                            type = "molestiae";
                        }}),
                    }};
                    screenshotFiles = new org.openapis.openapi.models.shared.ChromeOsDeviceScreenshotFiles[]{{
                        add(new ChromeOsDeviceScreenshotFiles() {{
                            createTime = OffsetDateTime.parse("2022-09-27T07:50:41.350Z");
                            downloadUrl = "esse";
                            name = "Hilda Paucek";
                            type = "fugiat";
                        }}),
                        add(new ChromeOsDeviceScreenshotFiles() {{
                            createTime = OffsetDateTime.parse("2022-07-26T19:04:27.877Z");
                            downloadUrl = "suscipit";
                            name = "Alan Lang Jr.";
                            type = "id";
                        }}),
                    }};
                    serialNumber = "quidem";
                    status = "neque";
                    supportEndDate = OffsetDateTime.parse("2020-06-17T05:36:16.683Z");
                    systemRamFreeReports = new org.openapis.openapi.models.shared.ChromeOsDeviceSystemRamFreeReports[]{{
                        add(new ChromeOsDeviceSystemRamFreeReports() {{
                            reportTime = OffsetDateTime.parse("2022-06-25T14:54:59.204Z");
                            systemRamFreeInfo = new String[]{{
                                add("voluptas"),
                            }};
                        }}),
                        add(new ChromeOsDeviceSystemRamFreeReports() {{
                            reportTime = OffsetDateTime.parse("2022-05-31T12:37:37.443Z");
                            systemRamFreeInfo = new String[]{{
                                add("tempora"),
                            }};
                        }}),
                        add(new ChromeOsDeviceSystemRamFreeReports() {{
                            reportTime = OffsetDateTime.parse("2021-11-20T21:59:17.660Z");
                            systemRamFreeInfo = new String[]{{
                                add("sequi"),
                            }};
                        }}),
                        add(new ChromeOsDeviceSystemRamFreeReports() {{
                            reportTime = OffsetDateTime.parse("2021-08-15T10:59:14.485Z");
                            systemRamFreeInfo = new String[]{{
                                add("aperiam"),
                                add("distinctio"),
                                add("quod"),
                                add("dignissimos"),
                            }};
                        }}),
                    }};
                    systemRamTotal = "inventore";
                    tpmVersionInfo = new ChromeOsDeviceTpmVersionInfo() {{
                        family = "nihil";
                        firmwareVersion = "totam";
                        manufacturer = "accusamus";
                        specLevel = "aliquam";
                        tpmModel = "odio";
                        vendorSpecific = "occaecati";
                    }};;
                    willAutoRenew = false;
                }};;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "deserunt";
                key = "molestiae";
                oauthToken = "accusantium";
                prettyPrint = false;
                projection = DirectoryChromeosdevicesUpdateProjectionEnum.FULL;
                quotaUser = "eum";
                uploadType = "quas";
                uploadProtocol = "praesentium";
            }};            

            DirectoryChromeosdevicesUpdateResponse res = sdk.chromeosdevices.directoryChromeosdevicesUpdate(req, new DirectoryChromeosdevicesUpdateSecurity("consequuntur", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.chromeOsDevice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
