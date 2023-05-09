# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createDeployedDevicesCertificate](#createdeployeddevicescertificate) - Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.
* [createDeployedDevicesDeployment](#createdeployeddevicesdeployment) - Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.
* [createDeployedDevicesDevice](#createdeployeddevicesdevice) - Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.
* [createDeployedDevicesFleet](#createdeployeddevicesfleet) - Create a new Fleet for scoping of deployed devices within your account.
* [createDeployedDevicesKey](#createdeployeddeviceskey) - Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.
* [createHostedNumbersAuthorizationDocument](#createhostednumbersauthorizationdocument) - Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
* [createHostedNumbersHostedNumberOrder](#createhostednumbershostednumberorder) - Host a phone number's capability on Twilio's platform.
* [createMarketplaceInstalledAddOn](#createmarketplaceinstalledaddon) - Install an Add-on for the Account specified.
* [createSyncDocument](#createsyncdocument)
* [createSyncService](#createsyncservice)
* [createSyncSyncList](#createsyncsynclist)
* [createSyncSyncListItem](#createsyncsynclistitem)
* [createSyncSyncMap](#createsyncsyncmap)
* [createSyncSyncMapItem](#createsyncsyncmapitem)
* [createUnderstandAssistant](#createunderstandassistant)
* [createUnderstandField](#createunderstandfield)
* [createUnderstandFieldType](#createunderstandfieldtype)
* [createUnderstandFieldValue](#createunderstandfieldvalue)
* [createUnderstandModelBuild](#createunderstandmodelbuild)
* [createUnderstandQuery](#createunderstandquery)
* [createUnderstandSample](#createunderstandsample)
* [createUnderstandTask](#createunderstandtask)
* [createWirelessCommand](#createwirelesscommand)
* [createWirelessRatePlan](#createwirelessrateplan)
* [deleteDeployedDevicesCertificate](#deletedeployeddevicescertificate) - Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* [deleteDeployedDevicesDeployment](#deletedeployeddevicesdeployment) - Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.
* [deleteDeployedDevicesDevice](#deletedeployeddevicesdevice) - Delete a specific Device from the Fleet, also removing it from associated Deployments.
* [deleteDeployedDevicesFleet](#deletedeployeddevicesfleet) - Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.
* [deleteDeployedDevicesKey](#deletedeployeddeviceskey) - Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* [deleteHostedNumbersHostedNumberOrder](#deletehostednumbershostednumberorder) - Cancel the HostedNumberOrder (only available when the status is in `received`).
* [deleteMarketplaceInstalledAddOn](#deletemarketplaceinstalledaddon) - Remove an Add-on installation from your account
* [deleteSyncDocument](#deletesyncdocument)
* [deleteSyncDocumentPermission](#deletesyncdocumentpermission) - Delete a specific Sync Document Permission.
* [deleteSyncService](#deletesyncservice)
* [deleteSyncSyncList](#deletesyncsynclist)
* [deleteSyncSyncListItem](#deletesyncsynclistitem)
* [deleteSyncSyncListPermission](#deletesyncsynclistpermission) - Delete a specific Sync List Permission.
* [deleteSyncSyncMap](#deletesyncsyncmap)
* [deleteSyncSyncMapItem](#deletesyncsyncmapitem)
* [deleteSyncSyncMapPermission](#deletesyncsyncmappermission) - Delete a specific Sync Map Permission.
* [deleteUnderstandAssistant](#deleteunderstandassistant)
* [deleteUnderstandField](#deleteunderstandfield)
* [deleteUnderstandFieldType](#deleteunderstandfieldtype)
* [deleteUnderstandFieldValue](#deleteunderstandfieldvalue)
* [deleteUnderstandModelBuild](#deleteunderstandmodelbuild)
* [deleteUnderstandQuery](#deleteunderstandquery)
* [deleteUnderstandSample](#deleteunderstandsample)
* [deleteUnderstandTask](#deleteunderstandtask)
* [deleteWirelessRatePlan](#deletewirelessrateplan)
* [fetchDeployedDevicesCertificate](#fetchdeployeddevicescertificate) - Fetch information about a specific Certificate credential in the Fleet.
* [fetchDeployedDevicesDeployment](#fetchdeployeddevicesdeployment) - Fetch information about a specific Deployment in the Fleet.
* [fetchDeployedDevicesDevice](#fetchdeployeddevicesdevice) - Fetch information about a specific Device in the Fleet.
* [fetchDeployedDevicesFleet](#fetchdeployeddevicesfleet) - Fetch information about a specific Fleet in your account.
* [fetchDeployedDevicesKey](#fetchdeployeddeviceskey) - Fetch information about a specific Key credential in the Fleet.
* [fetchHostedNumbersAuthorizationDocument](#fetchhostednumbersauthorizationdocument) - Fetch a specific AuthorizationDocument.
* [fetchHostedNumbersHostedNumberOrder](#fetchhostednumbershostednumberorder) - Fetch a specific HostedNumberOrder.
* [fetchMarketplaceAvailableAddOn](#fetchmarketplaceavailableaddon) - Fetch an instance of an Add-on currently available to be installed.
* [fetchMarketplaceAvailableAddOnExtension](#fetchmarketplaceavailableaddonextension) - Fetch an instance of an Extension for the Available Add-on.
* [fetchMarketplaceInstalledAddOn](#fetchmarketplaceinstalledaddon) - Fetch an instance of an Add-on currently installed on this Account.
* [fetchMarketplaceInstalledAddOnExtension](#fetchmarketplaceinstalledaddonextension) - Fetch an instance of an Extension for the Installed Add-on.
* [fetchSyncDocument](#fetchsyncdocument)
* [fetchSyncDocumentPermission](#fetchsyncdocumentpermission) - Fetch a specific Sync Document Permission.
* [fetchSyncService](#fetchsyncservice)
* [fetchSyncSyncList](#fetchsyncsynclist)
* [fetchSyncSyncListItem](#fetchsyncsynclistitem)
* [fetchSyncSyncListPermission](#fetchsyncsynclistpermission) - Fetch a specific Sync List Permission.
* [fetchSyncSyncMap](#fetchsyncsyncmap)
* [fetchSyncSyncMapItem](#fetchsyncsyncmapitem)
* [fetchSyncSyncMapPermission](#fetchsyncsyncmappermission) - Fetch a specific Sync Map Permission.
* [fetchUnderstandAssistant](#fetchunderstandassistant)
* [fetchUnderstandAssistantFallbackActions](#fetchunderstandassistantfallbackactions)
* [fetchUnderstandAssistantInitiationActions](#fetchunderstandassistantinitiationactions)
* [fetchUnderstandDialogue](#fetchunderstanddialogue)
* [fetchUnderstandField](#fetchunderstandfield)
* [fetchUnderstandFieldType](#fetchunderstandfieldtype)
* [fetchUnderstandFieldValue](#fetchunderstandfieldvalue)
* [fetchUnderstandModelBuild](#fetchunderstandmodelbuild)
* [fetchUnderstandQuery](#fetchunderstandquery)
* [fetchUnderstandSample](#fetchunderstandsample)
* [fetchUnderstandStyleSheet](#fetchunderstandstylesheet) - Returns Style sheet JSON object for this Assistant
* [fetchUnderstandTask](#fetchunderstandtask)
* [fetchUnderstandTaskActions](#fetchunderstandtaskactions) - Returns JSON actions for this Task.
* [fetchUnderstandTaskStatistics](#fetchunderstandtaskstatistics)
* [fetchWirelessCommand](#fetchwirelesscommand)
* [fetchWirelessRatePlan](#fetchwirelessrateplan)
* [fetchWirelessSim](#fetchwirelesssim)
* [fetchWirelessUsage](#fetchwirelessusage)
* [listDeployedDevicesCertificate](#listdeployeddevicescertificate) - Retrieve a list of all Certificate credentials belonging to the Fleet.
* [listDeployedDevicesDeployment](#listdeployeddevicesdeployment) - Retrieve a list of all Deployments belonging to the Fleet.
* [listDeployedDevicesDevice](#listdeployeddevicesdevice) - Retrieve a list of all Devices belonging to the Fleet.
* [listDeployedDevicesFleet](#listdeployeddevicesfleet) - Retrieve a list of all Fleets belonging to your account.
* [listDeployedDevicesKey](#listdeployeddeviceskey) - Retrieve a list of all Keys credentials belonging to the Fleet.
* [listHostedNumbersAuthorizationDocument](#listhostednumbersauthorizationdocument) - Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
* [listHostedNumbersDependentHostedNumberOrder](#listhostednumbersdependenthostednumberorder) - Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
* [listHostedNumbersHostedNumberOrder](#listhostednumbershostednumberorder) - Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
* [listMarketplaceAvailableAddOn](#listmarketplaceavailableaddon) - Retrieve a list of Add-ons currently available to be installed.
* [listMarketplaceAvailableAddOnExtension](#listmarketplaceavailableaddonextension) - Retrieve a list of Extensions for the Available Add-on.
* [listMarketplaceInstalledAddOn](#listmarketplaceinstalledaddon) - Retrieve a list of Add-ons currently installed on this Account.
* [listMarketplaceInstalledAddOnExtension](#listmarketplaceinstalledaddonextension) - Retrieve a list of Extensions for the Installed Add-on.
* [listSyncDocument](#listsyncdocument)
* [listSyncDocumentPermission](#listsyncdocumentpermission) - Retrieve a list of all Permissions applying to a Sync Document.
* [listSyncService](#listsyncservice)
* [listSyncSyncList](#listsyncsynclist)
* [listSyncSyncListItem](#listsyncsynclistitem)
* [listSyncSyncListPermission](#listsyncsynclistpermission) - Retrieve a list of all Permissions applying to a Sync List.
* [listSyncSyncMap](#listsyncsyncmap)
* [listSyncSyncMapItem](#listsyncsyncmapitem)
* [listSyncSyncMapPermission](#listsyncsyncmappermission) - Retrieve a list of all Permissions applying to a Sync Map.
* [listUnderstandAssistant](#listunderstandassistant)
* [listUnderstandField](#listunderstandfield)
* [listUnderstandFieldType](#listunderstandfieldtype)
* [listUnderstandFieldValue](#listunderstandfieldvalue)
* [listUnderstandModelBuild](#listunderstandmodelbuild)
* [listUnderstandQuery](#listunderstandquery)
* [listUnderstandSample](#listunderstandsample)
* [listUnderstandTask](#listunderstandtask)
* [listWirelessCommand](#listwirelesscommand)
* [listWirelessRatePlan](#listwirelessrateplan)
* [listWirelessSim](#listwirelesssim)
* [updateDeployedDevicesCertificate](#updatedeployeddevicescertificate) - Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.
* [updateDeployedDevicesDeployment](#updatedeployeddevicesdeployment) - Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.
* [updateDeployedDevicesDevice](#updatedeployeddevicesdevice) - Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.
* [updateDeployedDevicesFleet](#updatedeployeddevicesfleet) - Update the friendly name property of a specific Fleet in your account.
* [updateDeployedDevicesKey](#updatedeployeddeviceskey) - Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.
* [updateHostedNumbersAuthorizationDocument](#updatehostednumbersauthorizationdocument) - Updates a specific AuthorizationDocument.
* [updateHostedNumbersHostedNumberOrder](#updatehostednumbershostednumberorder) - Updates a specific HostedNumberOrder.
* [updateMarketplaceInstalledAddOn](#updatemarketplaceinstalledaddon) - Update an Add-on installation for the Account specified.
* [updateMarketplaceInstalledAddOnExtension](#updatemarketplaceinstalledaddonextension) - Update an Extension for an Add-on installation.
* [updateSyncDocument](#updatesyncdocument)
* [updateSyncDocumentPermission](#updatesyncdocumentpermission) - Update an identity's access to a specific Sync Document.
* [updateSyncService](#updatesyncservice)
* [updateSyncSyncListItem](#updatesyncsynclistitem)
* [updateSyncSyncListPermission](#updatesyncsynclistpermission) - Update an identity's access to a specific Sync List.
* [updateSyncSyncMapItem](#updatesyncsyncmapitem)
* [updateSyncSyncMapPermission](#updatesyncsyncmappermission) - Update an identity's access to a specific Sync Map.
* [updateUnderstandAssistant](#updateunderstandassistant)
* [updateUnderstandAssistantFallbackActions](#updateunderstandassistantfallbackactions)
* [updateUnderstandAssistantInitiationActions](#updateunderstandassistantinitiationactions)
* [updateUnderstandFieldType](#updateunderstandfieldtype)
* [updateUnderstandModelBuild](#updateunderstandmodelbuild)
* [updateUnderstandQuery](#updateunderstandquery)
* [updateUnderstandSample](#updateunderstandsample)
* [updateUnderstandStyleSheet](#updateunderstandstylesheet) - Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.
* [updateUnderstandTask](#updateunderstandtask)
* [updateUnderstandTaskActions](#updateunderstandtaskactions) - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* [updateWirelessRatePlan](#updatewirelessrateplan)
* [updateWirelessSim](#updatewirelesssim)

## createDeployedDevicesCertificate

Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateResponse;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeployedDevicesCertificateRequest req = new CreateDeployedDevicesCertificateRequest("corrupti") {{
                requestBody = new CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest("illum") {{
                    deviceSid = "vel";
                    friendlyName = "error";
                }};;
            }};            

            CreateDeployedDevicesCertificateResponse res = sdk.sdk.createDeployedDevicesCertificate(req, new CreateDeployedDevicesCertificateSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeployedDevicesDeployment

Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesDeploymentRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesDeploymentResponse;
import org.openapis.openapi.models.operations.CreateDeployedDevicesDeploymentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeployedDevicesDeploymentRequest req = new CreateDeployedDevicesDeploymentRequest("iure") {{
                requestBody = new CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest() {{
                    friendlyName = "magnam";
                    syncServiceSid = "debitis";
                }};;
            }};            

            CreateDeployedDevicesDeploymentResponse res = sdk.sdk.createDeployedDevicesDeployment(req, new CreateDeployedDevicesDeploymentSecurity("ipsa", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeployedDevicesDevice

Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesDeviceRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesDeviceResponse;
import org.openapis.openapi.models.operations.CreateDeployedDevicesDeviceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeployedDevicesDeviceRequest req = new CreateDeployedDevicesDeviceRequest("tempora") {{
                requestBody = new CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest() {{
                    deploymentSid = "suscipit";
                    enabled = false;
                    friendlyName = "molestiae";
                    identity = "minus";
                    uniqueName = "placeat";
                }};;
            }};            

            CreateDeployedDevicesDeviceResponse res = sdk.sdk.createDeployedDevicesDevice(req, new CreateDeployedDevicesDeviceSecurity("voluptatum", "iusto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetDevice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeployedDevicesFleet

Create a new Fleet for scoping of deployed devices within your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesFleetResponse;
import org.openapis.openapi.models.operations.CreateDeployedDevicesFleetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest req = new CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest() {{
                friendlyName = "excepturi";
            }};            

            CreateDeployedDevicesFleetResponse res = sdk.sdk.createDeployedDevicesFleet(req, new CreateDeployedDevicesFleetSecurity("nisi", "recusandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeployedDevicesKey

Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesKeyRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesKeyResponse;
import org.openapis.openapi.models.operations.CreateDeployedDevicesKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeployedDevicesKeyRequest req = new CreateDeployedDevicesKeyRequest("temporibus") {{
                requestBody = new CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest() {{
                    deviceSid = "ab";
                    friendlyName = "quis";
                }};;
            }};            

            CreateDeployedDevicesKeyResponse res = sdk.sdk.createDeployedDevicesKey(req, new CreateDeployedDevicesKeySecurity("veritatis", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createHostedNumbersAuthorizationDocument

Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest;
import org.openapis.openapi.models.operations.CreateHostedNumbersAuthorizationDocumentResponse;
import org.openapis.openapi.models.operations.CreateHostedNumbersAuthorizationDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest req = new CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest("perferendis", "ipsam", "repellendus", "sapiente",                 new String[]{{
                                add("odit"),
                                add("at"),
                                add("at"),
                                add("maiores"),
                            }}) {{
                ccEmails = new String[]{{
                    add("quod"),
                    add("quod"),
                }};
            }};            

            CreateHostedNumbersAuthorizationDocumentResponse res = sdk.sdk.createHostedNumbersAuthorizationDocument(req, new CreateHostedNumbersAuthorizationDocumentSecurity("esse", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewHostedNumbersAuthorizationDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createHostedNumbersHostedNumberOrder

Host a phone number's capability on Twilio's platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest;
import org.openapis.openapi.models.operations.CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum;
import org.openapis.openapi.models.operations.CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateHostedNumbersHostedNumberOrderResponse;
import org.openapis.openapi.models.operations.CreateHostedNumbersHostedNumberOrderSecurity;
import org.openapis.openapi.models.shared.HostedNumberOrderEnumVerificationTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest req = new CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest("porro", false) {{
                accountSid = "dolorum";
                addressSid = "dicta";
                ccEmails = new String[]{{
                    add("officia"),
                    add("occaecati"),
                    add("fugit"),
                }};
                email = "Tyrel.Rosenbaum@yahoo.com";
                friendlyName = "commodi";
                smsApplicationSid = "molestiae";
                smsFallbackMethod = CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum.GET;
                smsFallbackUrl = "http://soft-reminder.info";
                smsMethod = CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum.GET;
                smsUrl = "https://composed-alb.biz";
                statusCallbackMethod = CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum.PATCH;
                statusCallbackUrl = "http://passionate-crewman.name";
                uniqueName = "laboriosam";
                verificationDocumentSid = "hic";
                verificationType = HostedNumberOrderEnumVerificationTypeEnum.PHONE_BILL;
            }};            

            CreateHostedNumbersHostedNumberOrderResponse res = sdk.sdk.createHostedNumbersHostedNumberOrder(req, new CreateHostedNumbersHostedNumberOrderSecurity("fuga", "in") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewHostedNumbersHostedNumberOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMarketplaceInstalledAddOn

Install an Add-on for the Account specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest;
import org.openapis.openapi.models.operations.CreateMarketplaceInstalledAddOnResponse;
import org.openapis.openapi.models.operations.CreateMarketplaceInstalledAddOnSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest req = new CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest(false, "corporis") {{
                configuration = "iste";
                uniqueName = "iure";
            }};            

            CreateMarketplaceInstalledAddOnResponse res = sdk.sdk.createMarketplaceInstalledAddOn(req, new CreateMarketplaceInstalledAddOnSecurity("saepe", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewMarketplaceInstalledAddOn != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSyncDocument

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSyncDocumentCreateSyncDocumentRequest;
import org.openapis.openapi.models.operations.CreateSyncDocumentRequest;
import org.openapis.openapi.models.operations.CreateSyncDocumentResponse;
import org.openapis.openapi.models.operations.CreateSyncDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSyncDocumentRequest req = new CreateSyncDocumentRequest("architecto") {{
                requestBody = new CreateSyncDocumentCreateSyncDocumentRequest() {{
                    data = "ipsa";
                    uniqueName = "reiciendis";
                }};;
            }};            

            CreateSyncDocumentResponse res = sdk.sdk.createSyncDocument(req, new CreateSyncDocumentSecurity("est", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSyncService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSyncServiceCreateSyncServiceRequest;
import org.openapis.openapi.models.operations.CreateSyncServiceResponse;
import org.openapis.openapi.models.operations.CreateSyncServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSyncServiceCreateSyncServiceRequest req = new CreateSyncServiceCreateSyncServiceRequest() {{
                aclEnabled = false;
                friendlyName = "laborum";
                reachabilityWebhooksEnabled = false;
                webhookUrl = "http://doting-footage.com";
            }};            

            CreateSyncServiceResponse res = sdk.sdk.createSyncService(req, new CreateSyncServiceSecurity("nobis", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncService != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSyncSyncList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSyncSyncListCreateSyncSyncListRequest;
import org.openapis.openapi.models.operations.CreateSyncSyncListRequest;
import org.openapis.openapi.models.operations.CreateSyncSyncListResponse;
import org.openapis.openapi.models.operations.CreateSyncSyncListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSyncSyncListRequest req = new CreateSyncSyncListRequest("omnis") {{
                requestBody = new CreateSyncSyncListCreateSyncSyncListRequest() {{
                    uniqueName = "nemo";
                }};;
            }};            

            CreateSyncSyncListResponse res = sdk.sdk.createSyncSyncList(req, new CreateSyncSyncListSecurity("minima", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceSyncList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSyncSyncListItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSyncSyncListItemCreateSyncSyncListItemRequest;
import org.openapis.openapi.models.operations.CreateSyncSyncListItemRequest;
import org.openapis.openapi.models.operations.CreateSyncSyncListItemResponse;
import org.openapis.openapi.models.operations.CreateSyncSyncListItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSyncSyncListItemRequest req = new CreateSyncSyncListItemRequest("accusantium", "iure") {{
                requestBody = new CreateSyncSyncListItemCreateSyncSyncListItemRequest("culpa");;
            }};            

            CreateSyncSyncListItemResponse res = sdk.sdk.createSyncSyncListItem(req, new CreateSyncSyncListItemSecurity("doloribus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceSyncListSyncListItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSyncSyncMap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSyncSyncMapCreateSyncSyncMapRequest;
import org.openapis.openapi.models.operations.CreateSyncSyncMapRequest;
import org.openapis.openapi.models.operations.CreateSyncSyncMapResponse;
import org.openapis.openapi.models.operations.CreateSyncSyncMapSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSyncSyncMapRequest req = new CreateSyncSyncMapRequest("architecto") {{
                requestBody = new CreateSyncSyncMapCreateSyncSyncMapRequest() {{
                    uniqueName = "mollitia";
                }};;
            }};            

            CreateSyncSyncMapResponse res = sdk.sdk.createSyncSyncMap(req, new CreateSyncSyncMapSecurity("dolorem", "culpa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceSyncMap != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSyncSyncMapItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSyncSyncMapItemCreateSyncSyncMapItemRequest;
import org.openapis.openapi.models.operations.CreateSyncSyncMapItemRequest;
import org.openapis.openapi.models.operations.CreateSyncSyncMapItemResponse;
import org.openapis.openapi.models.operations.CreateSyncSyncMapItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSyncSyncMapItemRequest req = new CreateSyncSyncMapItemRequest("consequuntur", "repellat") {{
                requestBody = new CreateSyncSyncMapItemCreateSyncSyncMapItemRequest("mollitia", "occaecati");;
            }};            

            CreateSyncSyncMapItemResponse res = sdk.sdk.createSyncSyncMapItem(req, new CreateSyncSyncMapItemSecurity("numquam", "commodi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceSyncMapSyncMapItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUnderstandAssistant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUnderstandAssistantCreateUnderstandAssistantRequest;
import org.openapis.openapi.models.operations.CreateUnderstandAssistantResponse;
import org.openapis.openapi.models.operations.CreateUnderstandAssistantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUnderstandAssistantCreateUnderstandAssistantRequest req = new CreateUnderstandAssistantCreateUnderstandAssistantRequest() {{
                callbackEvents = "quam";
                callbackUrl = "http://even-ox.com";
                fallbackActions = "quis";
                friendlyName = "vitae";
                initiationActions = "laborum";
                logQueries = false;
                styleSheet = "animi";
                uniqueName = "enim";
            }};            

            CreateUnderstandAssistantResponse res = sdk.sdk.createUnderstandAssistant(req, new CreateUnderstandAssistantSecurity("odit", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUnderstandField

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUnderstandFieldCreateUnderstandFieldRequest;
import org.openapis.openapi.models.operations.CreateUnderstandFieldRequest;
import org.openapis.openapi.models.operations.CreateUnderstandFieldResponse;
import org.openapis.openapi.models.operations.CreateUnderstandFieldSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUnderstandFieldRequest req = new CreateUnderstandFieldRequest("sequi", "tenetur") {{
                requestBody = new CreateUnderstandFieldCreateUnderstandFieldRequest("ipsam", "id");;
            }};            

            CreateUnderstandFieldResponse res = sdk.sdk.createUnderstandField(req, new CreateUnderstandFieldSecurity("possimus", "aut") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantTaskField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUnderstandFieldType

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest;
import org.openapis.openapi.models.operations.CreateUnderstandFieldTypeRequest;
import org.openapis.openapi.models.operations.CreateUnderstandFieldTypeResponse;
import org.openapis.openapi.models.operations.CreateUnderstandFieldTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUnderstandFieldTypeRequest req = new CreateUnderstandFieldTypeRequest("quasi") {{
                requestBody = new CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest("error") {{
                    friendlyName = "temporibus";
                }};;
            }};            

            CreateUnderstandFieldTypeResponse res = sdk.sdk.createUnderstandFieldType(req, new CreateUnderstandFieldTypeSecurity("laborum", "quasi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantFieldType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUnderstandFieldValue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUnderstandFieldValueCreateUnderstandFieldValueRequest;
import org.openapis.openapi.models.operations.CreateUnderstandFieldValueRequest;
import org.openapis.openapi.models.operations.CreateUnderstandFieldValueResponse;
import org.openapis.openapi.models.operations.CreateUnderstandFieldValueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUnderstandFieldValueRequest req = new CreateUnderstandFieldValueRequest("reiciendis", "voluptatibus") {{
                requestBody = new CreateUnderstandFieldValueCreateUnderstandFieldValueRequest("vero", "nihil") {{
                    synonymOf = "praesentium";
                }};;
            }};            

            CreateUnderstandFieldValueResponse res = sdk.sdk.createUnderstandFieldValue(req, new CreateUnderstandFieldValueSecurity("voluptatibus", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantFieldTypeFieldValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUnderstandModelBuild

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUnderstandModelBuildCreateUnderstandModelBuildRequest;
import org.openapis.openapi.models.operations.CreateUnderstandModelBuildRequest;
import org.openapis.openapi.models.operations.CreateUnderstandModelBuildResponse;
import org.openapis.openapi.models.operations.CreateUnderstandModelBuildSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUnderstandModelBuildRequest req = new CreateUnderstandModelBuildRequest("omnis") {{
                requestBody = new CreateUnderstandModelBuildCreateUnderstandModelBuildRequest() {{
                    statusCallback = "http://shadowy-alfalfa.com";
                    uniqueName = "reprehenderit";
                }};;
            }};            

            CreateUnderstandModelBuildResponse res = sdk.sdk.createUnderstandModelBuild(req, new CreateUnderstandModelBuildSecurity("ut", "maiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantModelBuild != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUnderstandQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUnderstandQueryCreateUnderstandQueryRequest;
import org.openapis.openapi.models.operations.CreateUnderstandQueryRequest;
import org.openapis.openapi.models.operations.CreateUnderstandQueryResponse;
import org.openapis.openapi.models.operations.CreateUnderstandQuerySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUnderstandQueryRequest req = new CreateUnderstandQueryRequest("dicta") {{
                requestBody = new CreateUnderstandQueryCreateUnderstandQueryRequest("corporis", "dolore") {{
                    field = "iusto";
                    modelBuild = "dicta";
                    tasks = "harum";
                }};;
            }};            

            CreateUnderstandQueryResponse res = sdk.sdk.createUnderstandQuery(req, new CreateUnderstandQuerySecurity("enim", "accusamus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUnderstandSample

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUnderstandSampleCreateUnderstandSampleRequest;
import org.openapis.openapi.models.operations.CreateUnderstandSampleRequest;
import org.openapis.openapi.models.operations.CreateUnderstandSampleResponse;
import org.openapis.openapi.models.operations.CreateUnderstandSampleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUnderstandSampleRequest req = new CreateUnderstandSampleRequest("commodi", "repudiandae") {{
                requestBody = new CreateUnderstandSampleCreateUnderstandSampleRequest("quae", "ipsum") {{
                    sourceChannel = "quidem";
                }};;
            }};            

            CreateUnderstandSampleResponse res = sdk.sdk.createUnderstandSample(req, new CreateUnderstandSampleSecurity("molestias", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantTaskSample != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUnderstandTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUnderstandTaskCreateUnderstandTaskRequest;
import org.openapis.openapi.models.operations.CreateUnderstandTaskRequest;
import org.openapis.openapi.models.operations.CreateUnderstandTaskResponse;
import org.openapis.openapi.models.operations.CreateUnderstandTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUnderstandTaskRequest req = new CreateUnderstandTaskRequest("pariatur") {{
                requestBody = new CreateUnderstandTaskCreateUnderstandTaskRequest("modi") {{
                    actions = "praesentium";
                    actionsUrl = "https://useful-bonnet.org";
                    friendlyName = "sint";
                }};;
            }};            

            CreateUnderstandTaskResponse res = sdk.sdk.createUnderstandTask(req, new CreateUnderstandTaskSecurity("veritatis", "itaque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWirelessCommand

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWirelessCommandCreateWirelessCommandRequest;
import org.openapis.openapi.models.operations.CreateWirelessCommandResponse;
import org.openapis.openapi.models.operations.CreateWirelessCommandSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateWirelessCommandCreateWirelessCommandRequest req = new CreateWirelessCommandCreateWirelessCommandRequest("incidunt") {{
                callbackMethod = "enim";
                callbackUrl = "http://quarrelsome-square.com";
                commandMode = "deserunt";
                device = "distinctio";
                includeSid = "quibusdam";
                sim = "labore";
            }};            

            CreateWirelessCommandResponse res = sdk.sdk.createWirelessCommand(req, new CreateWirelessCommandSecurity("modi", "qui") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewWirelessCommand != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWirelessRatePlan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWirelessRatePlanCreateWirelessRatePlanRequest;
import org.openapis.openapi.models.operations.CreateWirelessRatePlanResponse;
import org.openapis.openapi.models.operations.CreateWirelessRatePlanSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateWirelessRatePlanCreateWirelessRatePlanRequest req = new CreateWirelessRatePlanCreateWirelessRatePlanRequest() {{
                commandsEnabled = false;
                dataEnabled = false;
                dataLimit = 397821L;
                dataMetering = "cupiditate";
                friendlyName = "quos";
                internationalRoaming = new String[]{{
                    add("magni"),
                }};
                messagingEnabled = false;
                nationalRoamingEnabled = false;
                uniqueName = "assumenda";
                voiceEnabled = false;
            }};            

            CreateWirelessRatePlanResponse res = sdk.sdk.createWirelessRatePlan(req, new CreateWirelessRatePlanSecurity("ipsam", "alias") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewWirelessRatePlan != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDeployedDevicesCertificate

Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesCertificateRequest;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesCertificateResponse;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesCertificateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDeployedDevicesCertificateRequest req = new DeleteDeployedDevicesCertificateRequest("fugit", "dolorum");            

            DeleteDeployedDevicesCertificateResponse res = sdk.sdk.deleteDeployedDevicesCertificate(req, new DeleteDeployedDevicesCertificateSecurity("excepturi", "tempora") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteDeployedDevicesDeployment

Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesDeploymentRequest;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesDeploymentResponse;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesDeploymentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDeployedDevicesDeploymentRequest req = new DeleteDeployedDevicesDeploymentRequest("facilis", "tempore");            

            DeleteDeployedDevicesDeploymentResponse res = sdk.sdk.deleteDeployedDevicesDeployment(req, new DeleteDeployedDevicesDeploymentSecurity("labore", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteDeployedDevicesDevice

Delete a specific Device from the Fleet, also removing it from associated Deployments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesDeviceRequest;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesDeviceResponse;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesDeviceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDeployedDevicesDeviceRequest req = new DeleteDeployedDevicesDeviceRequest("eum", "non");            

            DeleteDeployedDevicesDeviceResponse res = sdk.sdk.deleteDeployedDevicesDevice(req, new DeleteDeployedDevicesDeviceSecurity("eligendi", "sint") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteDeployedDevicesFleet

Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesFleetRequest;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesFleetResponse;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesFleetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDeployedDevicesFleetRequest req = new DeleteDeployedDevicesFleetRequest("aliquid");            

            DeleteDeployedDevicesFleetResponse res = sdk.sdk.deleteDeployedDevicesFleet(req, new DeleteDeployedDevicesFleetSecurity("provident", "necessitatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteDeployedDevicesKey

Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesKeyRequest;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesKeyResponse;
import org.openapis.openapi.models.operations.DeleteDeployedDevicesKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDeployedDevicesKeyRequest req = new DeleteDeployedDevicesKeyRequest("sint", "officia");            

            DeleteDeployedDevicesKeyResponse res = sdk.sdk.deleteDeployedDevicesKey(req, new DeleteDeployedDevicesKeySecurity("dolor", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteHostedNumbersHostedNumberOrder

Cancel the HostedNumberOrder (only available when the status is in `received`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHostedNumbersHostedNumberOrderRequest;
import org.openapis.openapi.models.operations.DeleteHostedNumbersHostedNumberOrderResponse;
import org.openapis.openapi.models.operations.DeleteHostedNumbersHostedNumberOrderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteHostedNumbersHostedNumberOrderRequest req = new DeleteHostedNumbersHostedNumberOrderRequest("a");            

            DeleteHostedNumbersHostedNumberOrderResponse res = sdk.sdk.deleteHostedNumbersHostedNumberOrder(req, new DeleteHostedNumbersHostedNumberOrderSecurity("dolorum", "in") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteMarketplaceInstalledAddOn

Remove an Add-on installation from your account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMarketplaceInstalledAddOnRequest;
import org.openapis.openapi.models.operations.DeleteMarketplaceInstalledAddOnResponse;
import org.openapis.openapi.models.operations.DeleteMarketplaceInstalledAddOnSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMarketplaceInstalledAddOnRequest req = new DeleteMarketplaceInstalledAddOnRequest("in");            

            DeleteMarketplaceInstalledAddOnResponse res = sdk.sdk.deleteMarketplaceInstalledAddOn(req, new DeleteMarketplaceInstalledAddOnSecurity("illum", "maiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteSyncDocument

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncDocumentRequest;
import org.openapis.openapi.models.operations.DeleteSyncDocumentResponse;
import org.openapis.openapi.models.operations.DeleteSyncDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncDocumentRequest req = new DeleteSyncDocumentRequest("rerum", "dicta");            

            DeleteSyncDocumentResponse res = sdk.sdk.deleteSyncDocument(req, new DeleteSyncDocumentSecurity("magnam", "cumque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteSyncDocumentPermission

Delete a specific Sync Document Permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncDocumentPermissionRequest;
import org.openapis.openapi.models.operations.DeleteSyncDocumentPermissionResponse;
import org.openapis.openapi.models.operations.DeleteSyncDocumentPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncDocumentPermissionRequest req = new DeleteSyncDocumentPermissionRequest("facere", "ea", "aliquid");            

            DeleteSyncDocumentPermissionResponse res = sdk.sdk.deleteSyncDocumentPermission(req, new DeleteSyncDocumentPermissionSecurity("laborum", "accusamus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteSyncService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncServiceRequest;
import org.openapis.openapi.models.operations.DeleteSyncServiceResponse;
import org.openapis.openapi.models.operations.DeleteSyncServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncServiceRequest req = new DeleteSyncServiceRequest("non");            

            DeleteSyncServiceResponse res = sdk.sdk.deleteSyncService(req, new DeleteSyncServiceSecurity("occaecati", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteSyncSyncList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncSyncListRequest;
import org.openapis.openapi.models.operations.DeleteSyncSyncListResponse;
import org.openapis.openapi.models.operations.DeleteSyncSyncListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncSyncListRequest req = new DeleteSyncSyncListRequest("accusamus", "delectus");            

            DeleteSyncSyncListResponse res = sdk.sdk.deleteSyncSyncList(req, new DeleteSyncSyncListSecurity("quidem", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteSyncSyncListItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncSyncListItemRequest;
import org.openapis.openapi.models.operations.DeleteSyncSyncListItemResponse;
import org.openapis.openapi.models.operations.DeleteSyncSyncListItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncSyncListItemRequest req = new DeleteSyncSyncListItemRequest(725255L, "id", "blanditiis") {{
                ifMatch = "deleniti";
            }};            

            DeleteSyncSyncListItemResponse res = sdk.sdk.deleteSyncSyncListItem(req, new DeleteSyncSyncListItemSecurity("sapiente", "amet") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteSyncSyncListPermission

Delete a specific Sync List Permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncSyncListPermissionRequest;
import org.openapis.openapi.models.operations.DeleteSyncSyncListPermissionResponse;
import org.openapis.openapi.models.operations.DeleteSyncSyncListPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncSyncListPermissionRequest req = new DeleteSyncSyncListPermissionRequest("deserunt", "nisi", "vel");            

            DeleteSyncSyncListPermissionResponse res = sdk.sdk.deleteSyncSyncListPermission(req, new DeleteSyncSyncListPermissionSecurity("natus", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteSyncSyncMap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncSyncMapRequest;
import org.openapis.openapi.models.operations.DeleteSyncSyncMapResponse;
import org.openapis.openapi.models.operations.DeleteSyncSyncMapSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncSyncMapRequest req = new DeleteSyncSyncMapRequest("molestiae", "perferendis");            

            DeleteSyncSyncMapResponse res = sdk.sdk.deleteSyncSyncMap(req, new DeleteSyncSyncMapSecurity("nihil", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteSyncSyncMapItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncSyncMapItemRequest;
import org.openapis.openapi.models.operations.DeleteSyncSyncMapItemResponse;
import org.openapis.openapi.models.operations.DeleteSyncSyncMapItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncSyncMapItemRequest req = new DeleteSyncSyncMapItemRequest("distinctio", "id", "labore") {{
                ifMatch = "labore";
            }};            

            DeleteSyncSyncMapItemResponse res = sdk.sdk.deleteSyncSyncMapItem(req, new DeleteSyncSyncMapItemSecurity("suscipit", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteSyncSyncMapPermission

Delete a specific Sync Map Permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncSyncMapPermissionRequest;
import org.openapis.openapi.models.operations.DeleteSyncSyncMapPermissionResponse;
import org.openapis.openapi.models.operations.DeleteSyncSyncMapPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncSyncMapPermissionRequest req = new DeleteSyncSyncMapPermissionRequest("nobis", "eum", "vero");            

            DeleteSyncSyncMapPermissionResponse res = sdk.sdk.deleteSyncSyncMapPermission(req, new DeleteSyncSyncMapPermissionSecurity("aspernatur", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteUnderstandAssistant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUnderstandAssistantRequest;
import org.openapis.openapi.models.operations.DeleteUnderstandAssistantResponse;
import org.openapis.openapi.models.operations.DeleteUnderstandAssistantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUnderstandAssistantRequest req = new DeleteUnderstandAssistantRequest("magnam");            

            DeleteUnderstandAssistantResponse res = sdk.sdk.deleteUnderstandAssistant(req, new DeleteUnderstandAssistantSecurity("et", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteUnderstandField

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUnderstandFieldRequest;
import org.openapis.openapi.models.operations.DeleteUnderstandFieldResponse;
import org.openapis.openapi.models.operations.DeleteUnderstandFieldSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUnderstandFieldRequest req = new DeleteUnderstandFieldRequest("ullam", "provident", "quos");            

            DeleteUnderstandFieldResponse res = sdk.sdk.deleteUnderstandField(req, new DeleteUnderstandFieldSecurity("sint", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteUnderstandFieldType

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUnderstandFieldTypeRequest;
import org.openapis.openapi.models.operations.DeleteUnderstandFieldTypeResponse;
import org.openapis.openapi.models.operations.DeleteUnderstandFieldTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUnderstandFieldTypeRequest req = new DeleteUnderstandFieldTypeRequest("mollitia", "reiciendis");            

            DeleteUnderstandFieldTypeResponse res = sdk.sdk.deleteUnderstandFieldType(req, new DeleteUnderstandFieldTypeSecurity("mollitia", "ad") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteUnderstandFieldValue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUnderstandFieldValueRequest;
import org.openapis.openapi.models.operations.DeleteUnderstandFieldValueResponse;
import org.openapis.openapi.models.operations.DeleteUnderstandFieldValueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUnderstandFieldValueRequest req = new DeleteUnderstandFieldValueRequest("eum", "dolor", "necessitatibus");            

            DeleteUnderstandFieldValueResponse res = sdk.sdk.deleteUnderstandFieldValue(req, new DeleteUnderstandFieldValueSecurity("odit", "nemo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteUnderstandModelBuild

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUnderstandModelBuildRequest;
import org.openapis.openapi.models.operations.DeleteUnderstandModelBuildResponse;
import org.openapis.openapi.models.operations.DeleteUnderstandModelBuildSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUnderstandModelBuildRequest req = new DeleteUnderstandModelBuildRequest("quasi", "iure");            

            DeleteUnderstandModelBuildResponse res = sdk.sdk.deleteUnderstandModelBuild(req, new DeleteUnderstandModelBuildSecurity("doloribus", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteUnderstandQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUnderstandQueryRequest;
import org.openapis.openapi.models.operations.DeleteUnderstandQueryResponse;
import org.openapis.openapi.models.operations.DeleteUnderstandQuerySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUnderstandQueryRequest req = new DeleteUnderstandQueryRequest("eius", "maxime");            

            DeleteUnderstandQueryResponse res = sdk.sdk.deleteUnderstandQuery(req, new DeleteUnderstandQuerySecurity("deleniti", "facilis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteUnderstandSample

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUnderstandSampleRequest;
import org.openapis.openapi.models.operations.DeleteUnderstandSampleResponse;
import org.openapis.openapi.models.operations.DeleteUnderstandSampleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUnderstandSampleRequest req = new DeleteUnderstandSampleRequest("in", "architecto", "architecto");            

            DeleteUnderstandSampleResponse res = sdk.sdk.deleteUnderstandSample(req, new DeleteUnderstandSampleSecurity("repudiandae", "ullam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteUnderstandTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUnderstandTaskRequest;
import org.openapis.openapi.models.operations.DeleteUnderstandTaskResponse;
import org.openapis.openapi.models.operations.DeleteUnderstandTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUnderstandTaskRequest req = new DeleteUnderstandTaskRequest("expedita", "nihil");            

            DeleteUnderstandTaskResponse res = sdk.sdk.deleteUnderstandTask(req, new DeleteUnderstandTaskSecurity("repellat", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteWirelessRatePlan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWirelessRatePlanRequest;
import org.openapis.openapi.models.operations.DeleteWirelessRatePlanResponse;
import org.openapis.openapi.models.operations.DeleteWirelessRatePlanSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWirelessRatePlanRequest req = new DeleteWirelessRatePlanRequest("sed");            

            DeleteWirelessRatePlanResponse res = sdk.sdk.deleteWirelessRatePlan(req, new DeleteWirelessRatePlanSecurity("saepe", "pariatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## fetchDeployedDevicesCertificate

Fetch information about a specific Certificate credential in the Fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDeployedDevicesCertificateRequest;
import org.openapis.openapi.models.operations.FetchDeployedDevicesCertificateResponse;
import org.openapis.openapi.models.operations.FetchDeployedDevicesCertificateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDeployedDevicesCertificateRequest req = new FetchDeployedDevicesCertificateRequest("accusantium", "consequuntur");            

            FetchDeployedDevicesCertificateResponse res = sdk.sdk.fetchDeployedDevicesCertificate(req, new FetchDeployedDevicesCertificateSecurity("praesentium", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDeployedDevicesDeployment

Fetch information about a specific Deployment in the Fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDeployedDevicesDeploymentRequest;
import org.openapis.openapi.models.operations.FetchDeployedDevicesDeploymentResponse;
import org.openapis.openapi.models.operations.FetchDeployedDevicesDeploymentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDeployedDevicesDeploymentRequest req = new FetchDeployedDevicesDeploymentRequest("magni", "sunt");            

            FetchDeployedDevicesDeploymentResponse res = sdk.sdk.fetchDeployedDevicesDeployment(req, new FetchDeployedDevicesDeploymentSecurity("quo", "illum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDeployedDevicesDevice

Fetch information about a specific Device in the Fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDeployedDevicesDeviceRequest;
import org.openapis.openapi.models.operations.FetchDeployedDevicesDeviceResponse;
import org.openapis.openapi.models.operations.FetchDeployedDevicesDeviceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDeployedDevicesDeviceRequest req = new FetchDeployedDevicesDeviceRequest("pariatur", "maxime");            

            FetchDeployedDevicesDeviceResponse res = sdk.sdk.fetchDeployedDevicesDevice(req, new FetchDeployedDevicesDeviceSecurity("ea", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetDevice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDeployedDevicesFleet

Fetch information about a specific Fleet in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDeployedDevicesFleetRequest;
import org.openapis.openapi.models.operations.FetchDeployedDevicesFleetResponse;
import org.openapis.openapi.models.operations.FetchDeployedDevicesFleetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDeployedDevicesFleetRequest req = new FetchDeployedDevicesFleetRequest("odit");            

            FetchDeployedDevicesFleetResponse res = sdk.sdk.fetchDeployedDevicesFleet(req, new FetchDeployedDevicesFleetSecurity("ea", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDeployedDevicesKey

Fetch information about a specific Key credential in the Fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDeployedDevicesKeyRequest;
import org.openapis.openapi.models.operations.FetchDeployedDevicesKeyResponse;
import org.openapis.openapi.models.operations.FetchDeployedDevicesKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDeployedDevicesKeyRequest req = new FetchDeployedDevicesKeyRequest("ab", "maiores");            

            FetchDeployedDevicesKeyResponse res = sdk.sdk.fetchDeployedDevicesKey(req, new FetchDeployedDevicesKeySecurity("quidem", "ipsam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchHostedNumbersAuthorizationDocument

Fetch a specific AuthorizationDocument.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchHostedNumbersAuthorizationDocumentRequest;
import org.openapis.openapi.models.operations.FetchHostedNumbersAuthorizationDocumentResponse;
import org.openapis.openapi.models.operations.FetchHostedNumbersAuthorizationDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchHostedNumbersAuthorizationDocumentRequest req = new FetchHostedNumbersAuthorizationDocumentRequest("voluptate");            

            FetchHostedNumbersAuthorizationDocumentResponse res = sdk.sdk.fetchHostedNumbersAuthorizationDocument(req, new FetchHostedNumbersAuthorizationDocumentSecurity("autem", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewHostedNumbersAuthorizationDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchHostedNumbersHostedNumberOrder

Fetch a specific HostedNumberOrder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchHostedNumbersHostedNumberOrderRequest;
import org.openapis.openapi.models.operations.FetchHostedNumbersHostedNumberOrderResponse;
import org.openapis.openapi.models.operations.FetchHostedNumbersHostedNumberOrderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchHostedNumbersHostedNumberOrderRequest req = new FetchHostedNumbersHostedNumberOrderRequest("eaque");            

            FetchHostedNumbersHostedNumberOrderResponse res = sdk.sdk.fetchHostedNumbersHostedNumberOrder(req, new FetchHostedNumbersHostedNumberOrderSecurity("pariatur", "nemo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewHostedNumbersHostedNumberOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchMarketplaceAvailableAddOn

Fetch an instance of an Add-on currently available to be installed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMarketplaceAvailableAddOnRequest;
import org.openapis.openapi.models.operations.FetchMarketplaceAvailableAddOnResponse;
import org.openapis.openapi.models.operations.FetchMarketplaceAvailableAddOnSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMarketplaceAvailableAddOnRequest req = new FetchMarketplaceAvailableAddOnRequest("voluptatibus");            

            FetchMarketplaceAvailableAddOnResponse res = sdk.sdk.fetchMarketplaceAvailableAddOn(req, new FetchMarketplaceAvailableAddOnSecurity("perferendis", "fugiat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewMarketplaceAvailableAddOn != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchMarketplaceAvailableAddOnExtension

Fetch an instance of an Extension for the Available Add-on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMarketplaceAvailableAddOnExtensionRequest;
import org.openapis.openapi.models.operations.FetchMarketplaceAvailableAddOnExtensionResponse;
import org.openapis.openapi.models.operations.FetchMarketplaceAvailableAddOnExtensionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMarketplaceAvailableAddOnExtensionRequest req = new FetchMarketplaceAvailableAddOnExtensionRequest("amet", "aut");            

            FetchMarketplaceAvailableAddOnExtensionResponse res = sdk.sdk.fetchMarketplaceAvailableAddOnExtension(req, new FetchMarketplaceAvailableAddOnExtensionSecurity("cumque", "corporis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewMarketplaceAvailableAddOnAvailableAddOnExtension != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchMarketplaceInstalledAddOn

Fetch an instance of an Add-on currently installed on this Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMarketplaceInstalledAddOnRequest;
import org.openapis.openapi.models.operations.FetchMarketplaceInstalledAddOnResponse;
import org.openapis.openapi.models.operations.FetchMarketplaceInstalledAddOnSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMarketplaceInstalledAddOnRequest req = new FetchMarketplaceInstalledAddOnRequest("hic");            

            FetchMarketplaceInstalledAddOnResponse res = sdk.sdk.fetchMarketplaceInstalledAddOn(req, new FetchMarketplaceInstalledAddOnSecurity("libero", "nobis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewMarketplaceInstalledAddOn != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchMarketplaceInstalledAddOnExtension

Fetch an instance of an Extension for the Installed Add-on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMarketplaceInstalledAddOnExtensionRequest;
import org.openapis.openapi.models.operations.FetchMarketplaceInstalledAddOnExtensionResponse;
import org.openapis.openapi.models.operations.FetchMarketplaceInstalledAddOnExtensionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMarketplaceInstalledAddOnExtensionRequest req = new FetchMarketplaceInstalledAddOnExtensionRequest("dolores", "quis");            

            FetchMarketplaceInstalledAddOnExtensionResponse res = sdk.sdk.fetchMarketplaceInstalledAddOnExtension(req, new FetchMarketplaceInstalledAddOnExtensionSecurity("totam", "dignissimos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewMarketplaceInstalledAddOnInstalledAddOnExtension != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncDocument

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncDocumentRequest;
import org.openapis.openapi.models.operations.FetchSyncDocumentResponse;
import org.openapis.openapi.models.operations.FetchSyncDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncDocumentRequest req = new FetchSyncDocumentRequest("eaque", "quis");            

            FetchSyncDocumentResponse res = sdk.sdk.fetchSyncDocument(req, new FetchSyncDocumentSecurity("nesciunt", "eos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncDocumentPermission

Fetch a specific Sync Document Permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncDocumentPermissionRequest;
import org.openapis.openapi.models.operations.FetchSyncDocumentPermissionResponse;
import org.openapis.openapi.models.operations.FetchSyncDocumentPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncDocumentPermissionRequest req = new FetchSyncDocumentPermissionRequest("perferendis", "dolores", "minus");            

            FetchSyncDocumentPermissionResponse res = sdk.sdk.fetchSyncDocumentPermission(req, new FetchSyncDocumentPermissionSecurity("quam", "dolor") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceDocumentDocumentPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncServiceRequest;
import org.openapis.openapi.models.operations.FetchSyncServiceResponse;
import org.openapis.openapi.models.operations.FetchSyncServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncServiceRequest req = new FetchSyncServiceRequest("vero");            

            FetchSyncServiceResponse res = sdk.sdk.fetchSyncService(req, new FetchSyncServiceSecurity("nostrum", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncService != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncSyncList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncSyncListRequest;
import org.openapis.openapi.models.operations.FetchSyncSyncListResponse;
import org.openapis.openapi.models.operations.FetchSyncSyncListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncSyncListRequest req = new FetchSyncSyncListRequest("recusandae", "omnis");            

            FetchSyncSyncListResponse res = sdk.sdk.fetchSyncSyncList(req, new FetchSyncSyncListSecurity("facilis", "perspiciatis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceSyncList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncSyncListItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncSyncListItemRequest;
import org.openapis.openapi.models.operations.FetchSyncSyncListItemResponse;
import org.openapis.openapi.models.operations.FetchSyncSyncListItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncSyncListItemRequest req = new FetchSyncSyncListItemRequest(31838L, "porro", "consequuntur");            

            FetchSyncSyncListItemResponse res = sdk.sdk.fetchSyncSyncListItem(req, new FetchSyncSyncListItemSecurity("blanditiis", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceSyncListSyncListItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncSyncListPermission

Fetch a specific Sync List Permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncSyncListPermissionRequest;
import org.openapis.openapi.models.operations.FetchSyncSyncListPermissionResponse;
import org.openapis.openapi.models.operations.FetchSyncSyncListPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncSyncListPermissionRequest req = new FetchSyncSyncListPermissionRequest("eaque", "occaecati", "rerum");            

            FetchSyncSyncListPermissionResponse res = sdk.sdk.fetchSyncSyncListPermission(req, new FetchSyncSyncListPermissionSecurity("adipisci", "asperiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceSyncListSyncListPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncSyncMap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncSyncMapRequest;
import org.openapis.openapi.models.operations.FetchSyncSyncMapResponse;
import org.openapis.openapi.models.operations.FetchSyncSyncMapSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncSyncMapRequest req = new FetchSyncSyncMapRequest("earum", "modi");            

            FetchSyncSyncMapResponse res = sdk.sdk.fetchSyncSyncMap(req, new FetchSyncSyncMapSecurity("iste", "dolorum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceSyncMap != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncSyncMapItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncSyncMapItemRequest;
import org.openapis.openapi.models.operations.FetchSyncSyncMapItemResponse;
import org.openapis.openapi.models.operations.FetchSyncSyncMapItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncSyncMapItemRequest req = new FetchSyncSyncMapItemRequest("deleniti", "pariatur", "provident");            

            FetchSyncSyncMapItemResponse res = sdk.sdk.fetchSyncSyncMapItem(req, new FetchSyncSyncMapItemSecurity("nobis", "libero") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceSyncMapSyncMapItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncSyncMapPermission

Fetch a specific Sync Map Permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncSyncMapPermissionRequest;
import org.openapis.openapi.models.operations.FetchSyncSyncMapPermissionResponse;
import org.openapis.openapi.models.operations.FetchSyncSyncMapPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncSyncMapPermissionRequest req = new FetchSyncSyncMapPermissionRequest("delectus", "quaerat", "quos");            

            FetchSyncSyncMapPermissionResponse res = sdk.sdk.fetchSyncSyncMapPermission(req, new FetchSyncSyncMapPermissionSecurity("aliquid", "dolorem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceSyncMapSyncMapPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUnderstandAssistant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUnderstandAssistantRequest;
import org.openapis.openapi.models.operations.FetchUnderstandAssistantResponse;
import org.openapis.openapi.models.operations.FetchUnderstandAssistantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUnderstandAssistantRequest req = new FetchUnderstandAssistantRequest("dolorem");            

            FetchUnderstandAssistantResponse res = sdk.sdk.fetchUnderstandAssistant(req, new FetchUnderstandAssistantSecurity("dolor", "qui") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUnderstandAssistantFallbackActions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUnderstandAssistantFallbackActionsRequest;
import org.openapis.openapi.models.operations.FetchUnderstandAssistantFallbackActionsResponse;
import org.openapis.openapi.models.operations.FetchUnderstandAssistantFallbackActionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUnderstandAssistantFallbackActionsRequest req = new FetchUnderstandAssistantFallbackActionsRequest("ipsum");            

            FetchUnderstandAssistantFallbackActionsResponse res = sdk.sdk.fetchUnderstandAssistantFallbackActions(req, new FetchUnderstandAssistantFallbackActionsSecurity("hic", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantAssistantFallbackActions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUnderstandAssistantInitiationActions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUnderstandAssistantInitiationActionsRequest;
import org.openapis.openapi.models.operations.FetchUnderstandAssistantInitiationActionsResponse;
import org.openapis.openapi.models.operations.FetchUnderstandAssistantInitiationActionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUnderstandAssistantInitiationActionsRequest req = new FetchUnderstandAssistantInitiationActionsRequest("cum");            

            FetchUnderstandAssistantInitiationActionsResponse res = sdk.sdk.fetchUnderstandAssistantInitiationActions(req, new FetchUnderstandAssistantInitiationActionsSecurity("voluptate", "dignissimos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantAssistantInitiationActions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUnderstandDialogue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUnderstandDialogueRequest;
import org.openapis.openapi.models.operations.FetchUnderstandDialogueResponse;
import org.openapis.openapi.models.operations.FetchUnderstandDialogueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUnderstandDialogueRequest req = new FetchUnderstandDialogueRequest("reiciendis", "amet");            

            FetchUnderstandDialogueResponse res = sdk.sdk.fetchUnderstandDialogue(req, new FetchUnderstandDialogueSecurity("dolorum", "numquam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantDialogue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUnderstandField

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUnderstandFieldRequest;
import org.openapis.openapi.models.operations.FetchUnderstandFieldResponse;
import org.openapis.openapi.models.operations.FetchUnderstandFieldSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUnderstandFieldRequest req = new FetchUnderstandFieldRequest("veritatis", "ipsa", "ipsa");            

            FetchUnderstandFieldResponse res = sdk.sdk.fetchUnderstandField(req, new FetchUnderstandFieldSecurity("iure", "odio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantTaskField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUnderstandFieldType

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUnderstandFieldTypeRequest;
import org.openapis.openapi.models.operations.FetchUnderstandFieldTypeResponse;
import org.openapis.openapi.models.operations.FetchUnderstandFieldTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUnderstandFieldTypeRequest req = new FetchUnderstandFieldTypeRequest("quaerat", "accusamus");            

            FetchUnderstandFieldTypeResponse res = sdk.sdk.fetchUnderstandFieldType(req, new FetchUnderstandFieldTypeSecurity("quidem", "voluptatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantFieldType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUnderstandFieldValue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUnderstandFieldValueRequest;
import org.openapis.openapi.models.operations.FetchUnderstandFieldValueResponse;
import org.openapis.openapi.models.operations.FetchUnderstandFieldValueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUnderstandFieldValueRequest req = new FetchUnderstandFieldValueRequest("voluptas", "natus", "eos");            

            FetchUnderstandFieldValueResponse res = sdk.sdk.fetchUnderstandFieldValue(req, new FetchUnderstandFieldValueSecurity("atque", "sit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantFieldTypeFieldValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUnderstandModelBuild

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUnderstandModelBuildRequest;
import org.openapis.openapi.models.operations.FetchUnderstandModelBuildResponse;
import org.openapis.openapi.models.operations.FetchUnderstandModelBuildSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUnderstandModelBuildRequest req = new FetchUnderstandModelBuildRequest("fugiat", "ab");            

            FetchUnderstandModelBuildResponse res = sdk.sdk.fetchUnderstandModelBuild(req, new FetchUnderstandModelBuildSecurity("soluta", "dolorum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantModelBuild != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUnderstandQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUnderstandQueryRequest;
import org.openapis.openapi.models.operations.FetchUnderstandQueryResponse;
import org.openapis.openapi.models.operations.FetchUnderstandQuerySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUnderstandQueryRequest req = new FetchUnderstandQueryRequest("iusto", "voluptate");            

            FetchUnderstandQueryResponse res = sdk.sdk.fetchUnderstandQuery(req, new FetchUnderstandQuerySecurity("dolorum", "deleniti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUnderstandSample

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUnderstandSampleRequest;
import org.openapis.openapi.models.operations.FetchUnderstandSampleResponse;
import org.openapis.openapi.models.operations.FetchUnderstandSampleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUnderstandSampleRequest req = new FetchUnderstandSampleRequest("omnis", "necessitatibus", "distinctio");            

            FetchUnderstandSampleResponse res = sdk.sdk.fetchUnderstandSample(req, new FetchUnderstandSampleSecurity("asperiores", "nihil") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantTaskSample != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUnderstandStyleSheet

Returns Style sheet JSON object for this Assistant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUnderstandStyleSheetRequest;
import org.openapis.openapi.models.operations.FetchUnderstandStyleSheetResponse;
import org.openapis.openapi.models.operations.FetchUnderstandStyleSheetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUnderstandStyleSheetRequest req = new FetchUnderstandStyleSheetRequest("ipsum");            

            FetchUnderstandStyleSheetResponse res = sdk.sdk.fetchUnderstandStyleSheet(req, new FetchUnderstandStyleSheetSecurity("voluptate", "id") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantStyleSheet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUnderstandTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUnderstandTaskRequest;
import org.openapis.openapi.models.operations.FetchUnderstandTaskResponse;
import org.openapis.openapi.models.operations.FetchUnderstandTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUnderstandTaskRequest req = new FetchUnderstandTaskRequest("saepe", "eius");            

            FetchUnderstandTaskResponse res = sdk.sdk.fetchUnderstandTask(req, new FetchUnderstandTaskSecurity("aspernatur", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUnderstandTaskActions

Returns JSON actions for this Task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUnderstandTaskActionsRequest;
import org.openapis.openapi.models.operations.FetchUnderstandTaskActionsResponse;
import org.openapis.openapi.models.operations.FetchUnderstandTaskActionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUnderstandTaskActionsRequest req = new FetchUnderstandTaskActionsRequest("amet", "optio");            

            FetchUnderstandTaskActionsResponse res = sdk.sdk.fetchUnderstandTaskActions(req, new FetchUnderstandTaskActionsSecurity("accusamus", "ad") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantTaskTaskActions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUnderstandTaskStatistics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUnderstandTaskStatisticsRequest;
import org.openapis.openapi.models.operations.FetchUnderstandTaskStatisticsResponse;
import org.openapis.openapi.models.operations.FetchUnderstandTaskStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUnderstandTaskStatisticsRequest req = new FetchUnderstandTaskStatisticsRequest("saepe", "suscipit");            

            FetchUnderstandTaskStatisticsResponse res = sdk.sdk.fetchUnderstandTaskStatistics(req, new FetchUnderstandTaskStatisticsSecurity("deserunt", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantTaskTaskStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWirelessCommand

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWirelessCommandRequest;
import org.openapis.openapi.models.operations.FetchWirelessCommandResponse;
import org.openapis.openapi.models.operations.FetchWirelessCommandSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWirelessCommandRequest req = new FetchWirelessCommandRequest("minima");            

            FetchWirelessCommandResponse res = sdk.sdk.fetchWirelessCommand(req, new FetchWirelessCommandSecurity("repellendus", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewWirelessCommand != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWirelessRatePlan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWirelessRatePlanRequest;
import org.openapis.openapi.models.operations.FetchWirelessRatePlanResponse;
import org.openapis.openapi.models.operations.FetchWirelessRatePlanSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWirelessRatePlanRequest req = new FetchWirelessRatePlanRequest("similique");            

            FetchWirelessRatePlanResponse res = sdk.sdk.fetchWirelessRatePlan(req, new FetchWirelessRatePlanSecurity("alias", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewWirelessRatePlan != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWirelessSim

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWirelessSimRequest;
import org.openapis.openapi.models.operations.FetchWirelessSimResponse;
import org.openapis.openapi.models.operations.FetchWirelessSimSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWirelessSimRequest req = new FetchWirelessSimRequest("quaerat");            

            FetchWirelessSimResponse res = sdk.sdk.fetchWirelessSim(req, new FetchWirelessSimSecurity("tempora", "vel") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewWirelessSim != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWirelessUsage

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWirelessUsageRequest;
import org.openapis.openapi.models.operations.FetchWirelessUsageResponse;
import org.openapis.openapi.models.operations.FetchWirelessUsageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWirelessUsageRequest req = new FetchWirelessUsageRequest("quod") {{
                end = "officiis";
                start = "qui";
            }};            

            FetchWirelessUsageResponse res = sdk.sdk.fetchWirelessUsage(req, new FetchWirelessUsageSecurity("dolorum", "a") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewWirelessSimUsage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeployedDevicesCertificate

Retrieve a list of all Certificate credentials belonging to the Fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeployedDevicesCertificateRequest;
import org.openapis.openapi.models.operations.ListDeployedDevicesCertificateResponse;
import org.openapis.openapi.models.operations.ListDeployedDevicesCertificateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDeployedDevicesCertificateRequest req = new ListDeployedDevicesCertificateRequest("esse") {{
                deviceSid = "harum";
                page = 483409L;
                pageSize = 215507L;
                pageToken = "quisquam";
            }};            

            ListDeployedDevicesCertificateResponse res = sdk.sdk.listDeployedDevicesCertificate(req, new ListDeployedDevicesCertificateSecurity("tenetur", "amet") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDeployedDevicesCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeployedDevicesDeployment

Retrieve a list of all Deployments belonging to the Fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeployedDevicesDeploymentRequest;
import org.openapis.openapi.models.operations.ListDeployedDevicesDeploymentResponse;
import org.openapis.openapi.models.operations.ListDeployedDevicesDeploymentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDeployedDevicesDeploymentRequest req = new ListDeployedDevicesDeploymentRequest("tempore") {{
                page = 880298L;
                pageSize = 253941L;
                pageToken = "enim";
            }};            

            ListDeployedDevicesDeploymentResponse res = sdk.sdk.listDeployedDevicesDeployment(req, new ListDeployedDevicesDeploymentSecurity("dolorem", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDeployedDevicesDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeployedDevicesDevice

Retrieve a list of all Devices belonging to the Fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeployedDevicesDeviceRequest;
import org.openapis.openapi.models.operations.ListDeployedDevicesDeviceResponse;
import org.openapis.openapi.models.operations.ListDeployedDevicesDeviceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDeployedDevicesDeviceRequest req = new ListDeployedDevicesDeviceRequest("totam") {{
                deploymentSid = "nihil";
                page = 25662L;
                pageSize = 711584L;
                pageToken = "neque";
            }};            

            ListDeployedDevicesDeviceResponse res = sdk.sdk.listDeployedDevicesDevice(req, new ListDeployedDevicesDeviceSecurity("sed", "vel") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDeployedDevicesDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeployedDevicesFleet

Retrieve a list of all Fleets belonging to your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeployedDevicesFleetRequest;
import org.openapis.openapi.models.operations.ListDeployedDevicesFleetResponse;
import org.openapis.openapi.models.operations.ListDeployedDevicesFleetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDeployedDevicesFleetRequest req = new ListDeployedDevicesFleetRequest() {{
                page = 730442L;
                pageSize = 374170L;
                pageToken = "deserunt";
            }};            

            ListDeployedDevicesFleetResponse res = sdk.sdk.listDeployedDevicesFleet(req, new ListDeployedDevicesFleetSecurity("quam", "ipsum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDeployedDevicesFleetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeployedDevicesKey

Retrieve a list of all Keys credentials belonging to the Fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeployedDevicesKeyRequest;
import org.openapis.openapi.models.operations.ListDeployedDevicesKeyResponse;
import org.openapis.openapi.models.operations.ListDeployedDevicesKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDeployedDevicesKeyRequest req = new ListDeployedDevicesKeyRequest("incidunt") {{
                deviceSid = "qui";
                page = 586784L;
                pageSize = 807581L;
                pageToken = "pariatur";
            }};            

            ListDeployedDevicesKeyResponse res = sdk.sdk.listDeployedDevicesKey(req, new ListDeployedDevicesKeySecurity("soluta", "dicta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDeployedDevicesKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHostedNumbersAuthorizationDocument

Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHostedNumbersAuthorizationDocumentRequest;
import org.openapis.openapi.models.operations.ListHostedNumbersAuthorizationDocumentResponse;
import org.openapis.openapi.models.operations.ListHostedNumbersAuthorizationDocumentSecurity;
import org.openapis.openapi.models.shared.AuthorizationDocumentEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListHostedNumbersAuthorizationDocumentRequest req = new ListHostedNumbersAuthorizationDocumentRequest() {{
                email = "Joseph17@hotmail.com";
                page = 716860L;
                pageSize = 704474L;
                pageToken = "aliquid";
                status = AuthorizationDocumentEnumStatusEnum.SIGNED;
            }};            

            ListHostedNumbersAuthorizationDocumentResponse res = sdk.sdk.listHostedNumbersAuthorizationDocument(req, new ListHostedNumbersAuthorizationDocumentSecurity("molestias", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listHostedNumbersAuthorizationDocumentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHostedNumbersDependentHostedNumberOrder

Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHostedNumbersDependentHostedNumberOrderRequest;
import org.openapis.openapi.models.operations.ListHostedNumbersDependentHostedNumberOrderResponse;
import org.openapis.openapi.models.operations.ListHostedNumbersDependentHostedNumberOrderSecurity;
import org.openapis.openapi.models.shared.DependentHostedNumberOrderEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListHostedNumbersDependentHostedNumberOrderRequest req = new ListHostedNumbersDependentHostedNumberOrderRequest("qui") {{
                friendlyName = "neque";
                incomingPhoneNumberSid = "fugit";
                page = 164959L;
                pageSize = 488056L;
                pageToken = "sunt";
                phoneNumber = "ullam";
                status = DependentHostedNumberOrderEnumStatusEnum.COMPLETED;
                uniqueName = "hic";
            }};            

            ListHostedNumbersDependentHostedNumberOrderResponse res = sdk.sdk.listHostedNumbersDependentHostedNumberOrder(req, new ListHostedNumbersDependentHostedNumberOrderSecurity("voluptatem", "cumque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listHostedNumbersDependentHostedNumberOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHostedNumbersHostedNumberOrder

Retrieve a list of HostedNumberOrders belonging to the account initiating the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHostedNumbersHostedNumberOrderRequest;
import org.openapis.openapi.models.operations.ListHostedNumbersHostedNumberOrderResponse;
import org.openapis.openapi.models.operations.ListHostedNumbersHostedNumberOrderSecurity;
import org.openapis.openapi.models.shared.HostedNumberOrderEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListHostedNumbersHostedNumberOrderRequest req = new ListHostedNumbersHostedNumberOrderRequest() {{
                friendlyName = "soluta";
                incomingPhoneNumberSid = "nobis";
                page = 92596L;
                pageSize = 903720L;
                pageToken = "ipsum";
                phoneNumber = "veritatis";
                status = HostedNumberOrderEnumStatusEnum.COMPLETED;
                uniqueName = "quos";
            }};            

            ListHostedNumbersHostedNumberOrderResponse res = sdk.sdk.listHostedNumbersHostedNumberOrder(req, new ListHostedNumbersHostedNumberOrderSecurity("tempore", "cupiditate") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listHostedNumbersHostedNumberOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMarketplaceAvailableAddOn

Retrieve a list of Add-ons currently available to be installed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMarketplaceAvailableAddOnRequest;
import org.openapis.openapi.models.operations.ListMarketplaceAvailableAddOnResponse;
import org.openapis.openapi.models.operations.ListMarketplaceAvailableAddOnSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMarketplaceAvailableAddOnRequest req = new ListMarketplaceAvailableAddOnRequest() {{
                page = 45614L;
                pageSize = 961937L;
                pageToken = "dolorem";
            }};            

            ListMarketplaceAvailableAddOnResponse res = sdk.sdk.listMarketplaceAvailableAddOn(req, new ListMarketplaceAvailableAddOnSecurity("dolore", "labore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMarketplaceAvailableAddOnResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMarketplaceAvailableAddOnExtension

Retrieve a list of Extensions for the Available Add-on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMarketplaceAvailableAddOnExtensionRequest;
import org.openapis.openapi.models.operations.ListMarketplaceAvailableAddOnExtensionResponse;
import org.openapis.openapi.models.operations.ListMarketplaceAvailableAddOnExtensionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMarketplaceAvailableAddOnExtensionRequest req = new ListMarketplaceAvailableAddOnExtensionRequest("adipisci") {{
                page = 677263L;
                pageSize = 100294L;
                pageToken = "quae";
            }};            

            ListMarketplaceAvailableAddOnExtensionResponse res = sdk.sdk.listMarketplaceAvailableAddOnExtension(req, new ListMarketplaceAvailableAddOnExtensionSecurity("aut", "quas") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMarketplaceAvailableAddOnExtensionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMarketplaceInstalledAddOn

Retrieve a list of Add-ons currently installed on this Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMarketplaceInstalledAddOnRequest;
import org.openapis.openapi.models.operations.ListMarketplaceInstalledAddOnResponse;
import org.openapis.openapi.models.operations.ListMarketplaceInstalledAddOnSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMarketplaceInstalledAddOnRequest req = new ListMarketplaceInstalledAddOnRequest() {{
                page = 929530L;
                pageSize = 9240L;
                pageToken = "est";
            }};            

            ListMarketplaceInstalledAddOnResponse res = sdk.sdk.listMarketplaceInstalledAddOn(req, new ListMarketplaceInstalledAddOnSecurity("repellendus", "porro") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMarketplaceInstalledAddOnResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMarketplaceInstalledAddOnExtension

Retrieve a list of Extensions for the Installed Add-on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMarketplaceInstalledAddOnExtensionRequest;
import org.openapis.openapi.models.operations.ListMarketplaceInstalledAddOnExtensionResponse;
import org.openapis.openapi.models.operations.ListMarketplaceInstalledAddOnExtensionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMarketplaceInstalledAddOnExtensionRequest req = new ListMarketplaceInstalledAddOnExtensionRequest("doloribus") {{
                page = 281730L;
                pageSize = 703495L;
                pageToken = "cupiditate";
            }};            

            ListMarketplaceInstalledAddOnExtensionResponse res = sdk.sdk.listMarketplaceInstalledAddOnExtension(req, new ListMarketplaceInstalledAddOnExtensionSecurity("qui", "quae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMarketplaceInstalledAddOnExtensionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncDocument

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncDocumentRequest;
import org.openapis.openapi.models.operations.ListSyncDocumentResponse;
import org.openapis.openapi.models.operations.ListSyncDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncDocumentRequest req = new ListSyncDocumentRequest("laudantium") {{
                page = 485628L;
                pageSize = 580447L;
                pageToken = "voluptatibus";
            }};            

            ListSyncDocumentResponse res = sdk.sdk.listSyncDocument(req, new ListSyncDocumentSecurity("quisquam", "vero") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncDocumentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncDocumentPermission

Retrieve a list of all Permissions applying to a Sync Document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncDocumentPermissionRequest;
import org.openapis.openapi.models.operations.ListSyncDocumentPermissionResponse;
import org.openapis.openapi.models.operations.ListSyncDocumentPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncDocumentPermissionRequest req = new ListSyncDocumentPermissionRequest("omnis", "quis") {{
                page = 218403L;
                pageSize = 961571L;
                pageToken = "voluptate";
            }};            

            ListSyncDocumentPermissionResponse res = sdk.sdk.listSyncDocumentPermission(req, new ListSyncDocumentPermissionSecurity("consectetur", "vero") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncDocumentPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncServiceRequest;
import org.openapis.openapi.models.operations.ListSyncServiceResponse;
import org.openapis.openapi.models.operations.ListSyncServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncServiceRequest req = new ListSyncServiceRequest() {{
                page = 949319L;
                pageSize = 492268L;
                pageToken = "hic";
            }};            

            ListSyncServiceResponse res = sdk.sdk.listSyncService(req, new ListSyncServiceSecurity("distinctio", "quod") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncSyncList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncSyncListRequest;
import org.openapis.openapi.models.operations.ListSyncSyncListResponse;
import org.openapis.openapi.models.operations.ListSyncSyncListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncSyncListRequest req = new ListSyncSyncListRequest("odio") {{
                page = 630448L;
                pageSize = 708548L;
                pageToken = "vero";
            }};            

            ListSyncSyncListResponse res = sdk.sdk.listSyncSyncList(req, new ListSyncSyncListSecurity("ducimus", "dolore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncSyncListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncSyncListItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncSyncListItemRequest;
import org.openapis.openapi.models.operations.ListSyncSyncListItemResponse;
import org.openapis.openapi.models.operations.ListSyncSyncListItemSecurity;
import org.openapis.openapi.models.shared.SyncListItemEnumQueryFromBoundTypeEnum;
import org.openapis.openapi.models.shared.SyncListItemEnumQueryResultOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncSyncListItemRequest req = new ListSyncSyncListItemRequest("quibusdam", "illum") {{
                bounds = SyncListItemEnumQueryFromBoundTypeEnum.INCLUSIVE;
                from = "natus";
                order = SyncListItemEnumQueryResultOrderEnum.DESC;
                page = 13236L;
                pageSize = 974259L;
                pageToken = "exercitationem";
            }};            

            ListSyncSyncListItemResponse res = sdk.sdk.listSyncSyncListItem(req, new ListSyncSyncListItemSecurity("nulla", "fugit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncSyncListItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncSyncListPermission

Retrieve a list of all Permissions applying to a Sync List.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncSyncListPermissionRequest;
import org.openapis.openapi.models.operations.ListSyncSyncListPermissionResponse;
import org.openapis.openapi.models.operations.ListSyncSyncListPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncSyncListPermissionRequest req = new ListSyncSyncListPermissionRequest("porro", "maiores") {{
                page = 985033L;
                pageSize = 478370L;
                pageToken = "eligendi";
            }};            

            ListSyncSyncListPermissionResponse res = sdk.sdk.listSyncSyncListPermission(req, new ListSyncSyncListPermissionSecurity("ducimus", "alias") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncSyncListPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncSyncMap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncSyncMapRequest;
import org.openapis.openapi.models.operations.ListSyncSyncMapResponse;
import org.openapis.openapi.models.operations.ListSyncSyncMapSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncSyncMapRequest req = new ListSyncSyncMapRequest("officia") {{
                page = 269479L;
                pageSize = 368584L;
                pageToken = "ea";
            }};            

            ListSyncSyncMapResponse res = sdk.sdk.listSyncSyncMap(req, new ListSyncSyncMapSecurity("aspernatur", "vel") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncSyncMapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncSyncMapItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncSyncMapItemRequest;
import org.openapis.openapi.models.operations.ListSyncSyncMapItemResponse;
import org.openapis.openapi.models.operations.ListSyncSyncMapItemSecurity;
import org.openapis.openapi.models.shared.SyncMapItemEnumQueryFromBoundTypeEnum;
import org.openapis.openapi.models.shared.SyncMapItemEnumQueryResultOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncSyncMapItemRequest req = new ListSyncSyncMapItemRequest("possimus", "magnam") {{
                bounds = SyncMapItemEnumQueryFromBoundTypeEnum.INCLUSIVE;
                from = "ex";
                order = SyncMapItemEnumQueryResultOrderEnum.DESC;
                page = 120657L;
                pageSize = 224317L;
                pageToken = "maiores";
            }};            

            ListSyncSyncMapItemResponse res = sdk.sdk.listSyncSyncMapItem(req, new ListSyncSyncMapItemSecurity("quasi", "ex") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncSyncMapItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncSyncMapPermission

Retrieve a list of all Permissions applying to a Sync Map.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncSyncMapPermissionRequest;
import org.openapis.openapi.models.operations.ListSyncSyncMapPermissionResponse;
import org.openapis.openapi.models.operations.ListSyncSyncMapPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncSyncMapPermissionRequest req = new ListSyncSyncMapPermissionRequest("nulla", "excepturi") {{
                page = 972920L;
                pageSize = 343605L;
                pageToken = "sapiente";
            }};            

            ListSyncSyncMapPermissionResponse res = sdk.sdk.listSyncSyncMapPermission(req, new ListSyncSyncMapPermissionSecurity("quisquam", "saepe") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncSyncMapPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUnderstandAssistant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUnderstandAssistantRequest;
import org.openapis.openapi.models.operations.ListUnderstandAssistantResponse;
import org.openapis.openapi.models.operations.ListUnderstandAssistantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUnderstandAssistantRequest req = new ListUnderstandAssistantRequest() {{
                page = 411372L;
                pageSize = 774048L;
                pageToken = "corporis";
            }};            

            ListUnderstandAssistantResponse res = sdk.sdk.listUnderstandAssistant(req, new ListUnderstandAssistantSecurity("veniam", "aliquid") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUnderstandAssistantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUnderstandField

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUnderstandFieldRequest;
import org.openapis.openapi.models.operations.ListUnderstandFieldResponse;
import org.openapis.openapi.models.operations.ListUnderstandFieldSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUnderstandFieldRequest req = new ListUnderstandFieldRequest("inventore", "magnam") {{
                page = 407241L;
                pageSize = 775220L;
                pageToken = "consectetur";
            }};            

            ListUnderstandFieldResponse res = sdk.sdk.listUnderstandField(req, new ListUnderstandFieldSecurity("recusandae", "aspernatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUnderstandFieldResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUnderstandFieldType

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUnderstandFieldTypeRequest;
import org.openapis.openapi.models.operations.ListUnderstandFieldTypeResponse;
import org.openapis.openapi.models.operations.ListUnderstandFieldTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUnderstandFieldTypeRequest req = new ListUnderstandFieldTypeRequest("minima") {{
                page = 53427L;
                pageSize = 952871L;
                pageToken = "libero";
            }};            

            ListUnderstandFieldTypeResponse res = sdk.sdk.listUnderstandFieldType(req, new ListUnderstandFieldTypeSecurity("aut", "aut") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUnderstandFieldTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUnderstandFieldValue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUnderstandFieldValueRequest;
import org.openapis.openapi.models.operations.ListUnderstandFieldValueResponse;
import org.openapis.openapi.models.operations.ListUnderstandFieldValueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUnderstandFieldValueRequest req = new ListUnderstandFieldValueRequest("deleniti", "impedit") {{
                language = "aliquam";
                page = 146946L;
                pageSize = 882860L;
                pageToken = "inventore";
            }};            

            ListUnderstandFieldValueResponse res = sdk.sdk.listUnderstandFieldValue(req, new ListUnderstandFieldValueSecurity("non", "et") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUnderstandFieldValueResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUnderstandModelBuild

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUnderstandModelBuildRequest;
import org.openapis.openapi.models.operations.ListUnderstandModelBuildResponse;
import org.openapis.openapi.models.operations.ListUnderstandModelBuildSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUnderstandModelBuildRequest req = new ListUnderstandModelBuildRequest("dolorum") {{
                page = 672048L;
                pageSize = 810424L;
                pageToken = "velit";
            }};            

            ListUnderstandModelBuildResponse res = sdk.sdk.listUnderstandModelBuild(req, new ListUnderstandModelBuildSecurity("eum", "autem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUnderstandModelBuildResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUnderstandQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUnderstandQueryRequest;
import org.openapis.openapi.models.operations.ListUnderstandQueryResponse;
import org.openapis.openapi.models.operations.ListUnderstandQuerySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUnderstandQueryRequest req = new ListUnderstandQueryRequest("nobis") {{
                language = "quas";
                modelBuild = "assumenda";
                page = 860552L;
                pageSize = 379034L;
                pageToken = "libero";
                status = "quasi";
            }};            

            ListUnderstandQueryResponse res = sdk.sdk.listUnderstandQuery(req, new ListUnderstandQuerySecurity("tempora", "numquam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUnderstandQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUnderstandSample

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUnderstandSampleRequest;
import org.openapis.openapi.models.operations.ListUnderstandSampleResponse;
import org.openapis.openapi.models.operations.ListUnderstandSampleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUnderstandSampleRequest req = new ListUnderstandSampleRequest("explicabo", "provident") {{
                language = "ipsa";
                page = 476477L;
                pageSize = 301598L;
                pageToken = "odio";
            }};            

            ListUnderstandSampleResponse res = sdk.sdk.listUnderstandSample(req, new ListUnderstandSampleSecurity("eius", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUnderstandSampleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUnderstandTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUnderstandTaskRequest;
import org.openapis.openapi.models.operations.ListUnderstandTaskResponse;
import org.openapis.openapi.models.operations.ListUnderstandTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUnderstandTaskRequest req = new ListUnderstandTaskRequest("esse") {{
                page = 524593L;
                pageSize = 683282L;
                pageToken = "reprehenderit";
            }};            

            ListUnderstandTaskResponse res = sdk.sdk.listUnderstandTask(req, new ListUnderstandTaskSecurity("quidem", "fugiat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUnderstandTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWirelessCommand

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWirelessCommandRequest;
import org.openapis.openapi.models.operations.ListWirelessCommandResponse;
import org.openapis.openapi.models.operations.ListWirelessCommandSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListWirelessCommandRequest req = new ListWirelessCommandRequest() {{
                device = "ut";
                direction = "eum";
                page = 379927L;
                pageSize = 826871L;
                pageToken = "eos";
                sim = "praesentium";
                status = "quisquam";
            }};            

            ListWirelessCommandResponse res = sdk.sdk.listWirelessCommand(req, new ListWirelessCommandSecurity("veritatis", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listWirelessCommandResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWirelessRatePlan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWirelessRatePlanRequest;
import org.openapis.openapi.models.operations.ListWirelessRatePlanResponse;
import org.openapis.openapi.models.operations.ListWirelessRatePlanSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListWirelessRatePlanRequest req = new ListWirelessRatePlanRequest() {{
                page = 660040L;
                pageSize = 696997L;
                pageToken = "neque";
            }};            

            ListWirelessRatePlanResponse res = sdk.sdk.listWirelessRatePlan(req, new ListWirelessRatePlanSecurity("quo", "illum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listWirelessRatePlanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWirelessSim

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWirelessSimRequest;
import org.openapis.openapi.models.operations.ListWirelessSimResponse;
import org.openapis.openapi.models.operations.ListWirelessSimSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListWirelessSimRequest req = new ListWirelessSimRequest() {{
                eId = "quo";
                iccid = "fuga";
                page = 259422L;
                pageSize = 178367L;
                pageToken = "voluptas";
                ratePlan = "ab";
                simRegistrationCode = "cupiditate";
                status = "consequatur";
            }};            

            ListWirelessSimResponse res = sdk.sdk.listWirelessSim(req, new ListWirelessSimSecurity("tempora", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listWirelessSimResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeployedDevicesCertificate

Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesCertificateRequest;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesCertificateResponse;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesCertificateSecurity;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDeployedDevicesCertificateRequest req = new UpdateDeployedDevicesCertificateRequest("ipsam", "aspernatur") {{
                requestBody = new UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest() {{
                    deviceSid = "sequi";
                    friendlyName = "quo";
                }};;
            }};            

            UpdateDeployedDevicesCertificateResponse res = sdk.sdk.updateDeployedDevicesCertificate(req, new UpdateDeployedDevicesCertificateSecurity("esse", "recusandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeployedDevicesDeployment

Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesDeploymentRequest;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesDeploymentResponse;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesDeploymentSecurity;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDeployedDevicesDeploymentRequest req = new UpdateDeployedDevicesDeploymentRequest("aperiam", "distinctio") {{
                requestBody = new UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest() {{
                    friendlyName = "quod";
                    syncServiceSid = "dignissimos";
                }};;
            }};            

            UpdateDeployedDevicesDeploymentResponse res = sdk.sdk.updateDeployedDevicesDeployment(req, new UpdateDeployedDevicesDeploymentSecurity("inventore", "nihil") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeployedDevicesDevice

Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesDeviceRequest;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesDeviceResponse;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesDeviceSecurity;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDeployedDevicesDeviceRequest req = new UpdateDeployedDevicesDeviceRequest("totam", "accusamus") {{
                requestBody = new UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest() {{
                    deploymentSid = "aliquam";
                    enabled = false;
                    friendlyName = "odio";
                    identity = "occaecati";
                }};;
            }};            

            UpdateDeployedDevicesDeviceResponse res = sdk.sdk.updateDeployedDevicesDevice(req, new UpdateDeployedDevicesDeviceSecurity("commodi", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetDevice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeployedDevicesFleet

Update the friendly name property of a specific Fleet in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesFleetRequest;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesFleetResponse;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesFleetSecurity;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDeployedDevicesFleetRequest req = new UpdateDeployedDevicesFleetRequest("dolores") {{
                requestBody = new UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest() {{
                    defaultDeploymentSid = "deserunt";
                    friendlyName = "molestiae";
                }};;
            }};            

            UpdateDeployedDevicesFleetResponse res = sdk.sdk.updateDeployedDevicesFleet(req, new UpdateDeployedDevicesFleetSecurity("accusantium", "porro") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeployedDevicesKey

Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesKeyRequest;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesKeyResponse;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesKeySecurity;
import org.openapis.openapi.models.operations.UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDeployedDevicesKeyRequest req = new UpdateDeployedDevicesKeyRequest("eum", "quas") {{
                requestBody = new UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest() {{
                    deviceSid = "praesentium";
                    friendlyName = "consequuntur";
                }};;
            }};            

            UpdateDeployedDevicesKeyResponse res = sdk.sdk.updateDeployedDevicesKey(req, new UpdateDeployedDevicesKeySecurity("deleniti", "fugit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateHostedNumbersAuthorizationDocument

Updates a specific AuthorizationDocument.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateHostedNumbersAuthorizationDocumentRequest;
import org.openapis.openapi.models.operations.UpdateHostedNumbersAuthorizationDocumentResponse;
import org.openapis.openapi.models.operations.UpdateHostedNumbersAuthorizationDocumentSecurity;
import org.openapis.openapi.models.operations.UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest;
import org.openapis.openapi.models.shared.AuthorizationDocumentEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateHostedNumbersAuthorizationDocumentRequest req = new UpdateHostedNumbersAuthorizationDocumentRequest("fuga") {{
                requestBody = new UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest() {{
                    addressSid = "mollitia";
                    ccEmails = new String[]{{
                        add("atque"),
                        add("explicabo"),
                    }};
                    contactPhoneNumber = "minima";
                    contactTitle = "nisi";
                    email = "Verlie12@gmail.com";
                    hostedNumberOrderSids = new String[]{{
                        add("occaecati"),
                        add("atque"),
                        add("et"),
                        add("esse"),
                    }};
                    status = AuthorizationDocumentEnumStatusEnum.FAILED;
                }};;
            }};            

            UpdateHostedNumbersAuthorizationDocumentResponse res = sdk.sdk.updateHostedNumbersAuthorizationDocument(req, new UpdateHostedNumbersAuthorizationDocumentSecurity("accusamus", "veritatis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewHostedNumbersAuthorizationDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateHostedNumbersHostedNumberOrder

Updates a specific HostedNumberOrder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateHostedNumbersHostedNumberOrderRequest;
import org.openapis.openapi.models.operations.UpdateHostedNumbersHostedNumberOrderResponse;
import org.openapis.openapi.models.operations.UpdateHostedNumbersHostedNumberOrderSecurity;
import org.openapis.openapi.models.operations.UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest;
import org.openapis.openapi.models.shared.HostedNumberOrderEnumStatusEnum;
import org.openapis.openapi.models.shared.HostedNumberOrderEnumVerificationTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateHostedNumbersHostedNumberOrderRequest req = new UpdateHostedNumbersHostedNumberOrderRequest("esse") {{
                requestBody = new UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest() {{
                    callDelay = 800379L;
                    ccEmails = new String[]{{
                        add("vero"),
                        add("aliquid"),
                        add("quasi"),
                    }};
                    email = "Herta_Pollich@hotmail.com";
                    extension = "occaecati";
                    friendlyName = "minima";
                    status = HostedNumberOrderEnumStatusEnum.COMPLETED;
                    uniqueName = "eligendi";
                    verificationCode = "sit";
                    verificationDocumentSid = "culpa";
                    verificationType = HostedNumberOrderEnumVerificationTypeEnum.PHONE_BILL;
                }};;
            }};            

            UpdateHostedNumbersHostedNumberOrderResponse res = sdk.sdk.updateHostedNumbersHostedNumberOrder(req, new UpdateHostedNumbersHostedNumberOrderSecurity("adipisci", "cumque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewHostedNumbersHostedNumberOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMarketplaceInstalledAddOn

Update an Add-on installation for the Account specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMarketplaceInstalledAddOnRequest;
import org.openapis.openapi.models.operations.UpdateMarketplaceInstalledAddOnResponse;
import org.openapis.openapi.models.operations.UpdateMarketplaceInstalledAddOnSecurity;
import org.openapis.openapi.models.operations.UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMarketplaceInstalledAddOnRequest req = new UpdateMarketplaceInstalledAddOnRequest("consequuntur") {{
                requestBody = new UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest() {{
                    configuration = "consequatur";
                    uniqueName = "minus";
                }};;
            }};            

            UpdateMarketplaceInstalledAddOnResponse res = sdk.sdk.updateMarketplaceInstalledAddOn(req, new UpdateMarketplaceInstalledAddOnSecurity("quaerat", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewMarketplaceInstalledAddOn != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMarketplaceInstalledAddOnExtension

Update an Extension for an Add-on installation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMarketplaceInstalledAddOnExtensionRequest;
import org.openapis.openapi.models.operations.UpdateMarketplaceInstalledAddOnExtensionResponse;
import org.openapis.openapi.models.operations.UpdateMarketplaceInstalledAddOnExtensionSecurity;
import org.openapis.openapi.models.operations.UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMarketplaceInstalledAddOnExtensionRequest req = new UpdateMarketplaceInstalledAddOnExtensionRequest("consectetur", "esse") {{
                requestBody = new UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest(false);;
            }};            

            UpdateMarketplaceInstalledAddOnExtensionResponse res = sdk.sdk.updateMarketplaceInstalledAddOnExtension(req, new UpdateMarketplaceInstalledAddOnExtensionSecurity("blanditiis", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewMarketplaceInstalledAddOnInstalledAddOnExtension != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyncDocument

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyncDocumentRequest;
import org.openapis.openapi.models.operations.UpdateSyncDocumentResponse;
import org.openapis.openapi.models.operations.UpdateSyncDocumentSecurity;
import org.openapis.openapi.models.operations.UpdateSyncDocumentUpdateSyncDocumentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSyncDocumentRequest req = new UpdateSyncDocumentRequest("a", "nulla") {{
                ifMatch = "quas";
                requestBody = new UpdateSyncDocumentUpdateSyncDocumentRequest("esse");;
            }};            

            UpdateSyncDocumentResponse res = sdk.sdk.updateSyncDocument(req, new UpdateSyncDocumentSecurity("quasi", "a") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyncDocumentPermission

Update an identity's access to a specific Sync Document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyncDocumentPermissionRequest;
import org.openapis.openapi.models.operations.UpdateSyncDocumentPermissionResponse;
import org.openapis.openapi.models.operations.UpdateSyncDocumentPermissionSecurity;
import org.openapis.openapi.models.operations.UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSyncDocumentPermissionRequest req = new UpdateSyncDocumentPermissionRequest("error", "sint", "pariatur") {{
                requestBody = new UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest(false, false, false);;
            }};            

            UpdateSyncDocumentPermissionResponse res = sdk.sdk.updateSyncDocumentPermission(req, new UpdateSyncDocumentPermissionSecurity("possimus", "quia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceDocumentDocumentPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyncService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyncServiceRequest;
import org.openapis.openapi.models.operations.UpdateSyncServiceResponse;
import org.openapis.openapi.models.operations.UpdateSyncServiceSecurity;
import org.openapis.openapi.models.operations.UpdateSyncServiceUpdateSyncServiceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSyncServiceRequest req = new UpdateSyncServiceRequest("eveniet") {{
                requestBody = new UpdateSyncServiceUpdateSyncServiceRequest() {{
                    aclEnabled = false;
                    friendlyName = "asperiores";
                    reachabilityWebhooksEnabled = false;
                    webhookUrl = "https://bossy-chowder.com";
                }};;
            }};            

            UpdateSyncServiceResponse res = sdk.sdk.updateSyncService(req, new UpdateSyncServiceSecurity("similique", "culpa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncService != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyncSyncListItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyncSyncListItemRequest;
import org.openapis.openapi.models.operations.UpdateSyncSyncListItemResponse;
import org.openapis.openapi.models.operations.UpdateSyncSyncListItemSecurity;
import org.openapis.openapi.models.operations.UpdateSyncSyncListItemUpdateSyncSyncListItemRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSyncSyncListItemRequest req = new UpdateSyncSyncListItemRequest(398434L, "tenetur", "quae") {{
                ifMatch = "earum";
                requestBody = new UpdateSyncSyncListItemUpdateSyncSyncListItemRequest("vel");;
            }};            

            UpdateSyncSyncListItemResponse res = sdk.sdk.updateSyncSyncListItem(req, new UpdateSyncSyncListItemSecurity("in", "eius") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceSyncListSyncListItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyncSyncListPermission

Update an identity's access to a specific Sync List.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyncSyncListPermissionRequest;
import org.openapis.openapi.models.operations.UpdateSyncSyncListPermissionResponse;
import org.openapis.openapi.models.operations.UpdateSyncSyncListPermissionSecurity;
import org.openapis.openapi.models.operations.UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSyncSyncListPermissionRequest req = new UpdateSyncSyncListPermissionRequest("libero", "illum", "soluta") {{
                requestBody = new UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest(false, false, false);;
            }};            

            UpdateSyncSyncListPermissionResponse res = sdk.sdk.updateSyncSyncListPermission(req, new UpdateSyncSyncListPermissionSecurity("accusantium", "aliquam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceSyncListSyncListPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyncSyncMapItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyncSyncMapItemRequest;
import org.openapis.openapi.models.operations.UpdateSyncSyncMapItemResponse;
import org.openapis.openapi.models.operations.UpdateSyncSyncMapItemSecurity;
import org.openapis.openapi.models.operations.UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSyncSyncMapItemRequest req = new UpdateSyncSyncMapItemRequest("sapiente", "dicta", "ullam") {{
                ifMatch = "reprehenderit";
                requestBody = new UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest("ullam");;
            }};            

            UpdateSyncSyncMapItemResponse res = sdk.sdk.updateSyncSyncMapItem(req, new UpdateSyncSyncMapItemSecurity("nisi", "aut") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceSyncMapSyncMapItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyncSyncMapPermission

Update an identity's access to a specific Sync Map.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyncSyncMapPermissionRequest;
import org.openapis.openapi.models.operations.UpdateSyncSyncMapPermissionResponse;
import org.openapis.openapi.models.operations.UpdateSyncSyncMapPermissionSecurity;
import org.openapis.openapi.models.operations.UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSyncSyncMapPermissionRequest req = new UpdateSyncSyncMapPermissionRequest("voluptatum", "qui", "quibusdam") {{
                requestBody = new UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest(false, false, false);;
            }};            

            UpdateSyncSyncMapPermissionResponse res = sdk.sdk.updateSyncSyncMapPermission(req, new UpdateSyncSyncMapPermissionSecurity("ex", "deleniti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewSyncServiceSyncMapSyncMapPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUnderstandAssistant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUnderstandAssistantRequest;
import org.openapis.openapi.models.operations.UpdateUnderstandAssistantResponse;
import org.openapis.openapi.models.operations.UpdateUnderstandAssistantSecurity;
import org.openapis.openapi.models.operations.UpdateUnderstandAssistantUpdateUnderstandAssistantRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUnderstandAssistantRequest req = new UpdateUnderstandAssistantRequest("itaque") {{
                requestBody = new UpdateUnderstandAssistantUpdateUnderstandAssistantRequest() {{
                    callbackEvents = "dolorum";
                    callbackUrl = "http://paltry-utensil.com";
                    fallbackActions = "at";
                    friendlyName = "et";
                    initiationActions = "voluptate";
                    logQueries = false;
                    styleSheet = "ipsa";
                    uniqueName = "minima";
                }};;
            }};            

            UpdateUnderstandAssistantResponse res = sdk.sdk.updateUnderstandAssistant(req, new UpdateUnderstandAssistantSecurity("veritatis", "consectetur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUnderstandAssistantFallbackActions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUnderstandAssistantFallbackActionsRequest;
import org.openapis.openapi.models.operations.UpdateUnderstandAssistantFallbackActionsResponse;
import org.openapis.openapi.models.operations.UpdateUnderstandAssistantFallbackActionsSecurity;
import org.openapis.openapi.models.operations.UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUnderstandAssistantFallbackActionsRequest req = new UpdateUnderstandAssistantFallbackActionsRequest("adipisci") {{
                requestBody = new UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest() {{
                    fallbackActions = "iste";
                }};;
            }};            

            UpdateUnderstandAssistantFallbackActionsResponse res = sdk.sdk.updateUnderstandAssistantFallbackActions(req, new UpdateUnderstandAssistantFallbackActionsSecurity("temporibus", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantAssistantFallbackActions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUnderstandAssistantInitiationActions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUnderstandAssistantInitiationActionsRequest;
import org.openapis.openapi.models.operations.UpdateUnderstandAssistantInitiationActionsResponse;
import org.openapis.openapi.models.operations.UpdateUnderstandAssistantInitiationActionsSecurity;
import org.openapis.openapi.models.operations.UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUnderstandAssistantInitiationActionsRequest req = new UpdateUnderstandAssistantInitiationActionsRequest("rem") {{
                requestBody = new UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest() {{
                    initiationActions = "aut";
                }};;
            }};            

            UpdateUnderstandAssistantInitiationActionsResponse res = sdk.sdk.updateUnderstandAssistantInitiationActions(req, new UpdateUnderstandAssistantInitiationActionsSecurity("laudantium", "eum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantAssistantInitiationActions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUnderstandFieldType

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUnderstandFieldTypeRequest;
import org.openapis.openapi.models.operations.UpdateUnderstandFieldTypeResponse;
import org.openapis.openapi.models.operations.UpdateUnderstandFieldTypeSecurity;
import org.openapis.openapi.models.operations.UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUnderstandFieldTypeRequest req = new UpdateUnderstandFieldTypeRequest("mollitia", "ab") {{
                requestBody = new UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest() {{
                    friendlyName = "corrupti";
                    uniqueName = "non";
                }};;
            }};            

            UpdateUnderstandFieldTypeResponse res = sdk.sdk.updateUnderstandFieldType(req, new UpdateUnderstandFieldTypeSecurity("voluptatem", "dolor") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantFieldType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUnderstandModelBuild

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUnderstandModelBuildRequest;
import org.openapis.openapi.models.operations.UpdateUnderstandModelBuildResponse;
import org.openapis.openapi.models.operations.UpdateUnderstandModelBuildSecurity;
import org.openapis.openapi.models.operations.UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUnderstandModelBuildRequest req = new UpdateUnderstandModelBuildRequest("occaecati", "numquam") {{
                requestBody = new UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest() {{
                    uniqueName = "impedit";
                }};;
            }};            

            UpdateUnderstandModelBuildResponse res = sdk.sdk.updateUnderstandModelBuild(req, new UpdateUnderstandModelBuildSecurity("explicabo", "voluptas") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantModelBuild != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUnderstandQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUnderstandQueryRequest;
import org.openapis.openapi.models.operations.UpdateUnderstandQueryResponse;
import org.openapis.openapi.models.operations.UpdateUnderstandQuerySecurity;
import org.openapis.openapi.models.operations.UpdateUnderstandQueryUpdateUnderstandQueryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUnderstandQueryRequest req = new UpdateUnderstandQueryRequest("aut", "dignissimos") {{
                requestBody = new UpdateUnderstandQueryUpdateUnderstandQueryRequest() {{
                    sampleSid = "dicta";
                    status = "maiores";
                }};;
            }};            

            UpdateUnderstandQueryResponse res = sdk.sdk.updateUnderstandQuery(req, new UpdateUnderstandQuerySecurity("natus", "velit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUnderstandSample

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUnderstandSampleRequest;
import org.openapis.openapi.models.operations.UpdateUnderstandSampleResponse;
import org.openapis.openapi.models.operations.UpdateUnderstandSampleSecurity;
import org.openapis.openapi.models.operations.UpdateUnderstandSampleUpdateUnderstandSampleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUnderstandSampleRequest req = new UpdateUnderstandSampleRequest("voluptatibus", "voluptas", "asperiores") {{
                requestBody = new UpdateUnderstandSampleUpdateUnderstandSampleRequest() {{
                    language = "aperiam";
                    sourceChannel = "ea";
                    taggedText = "quaerat";
                }};;
            }};            

            UpdateUnderstandSampleResponse res = sdk.sdk.updateUnderstandSample(req, new UpdateUnderstandSampleSecurity("consequuntur", "repellendus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantTaskSample != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUnderstandStyleSheet

Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUnderstandStyleSheetRequest;
import org.openapis.openapi.models.operations.UpdateUnderstandStyleSheetResponse;
import org.openapis.openapi.models.operations.UpdateUnderstandStyleSheetSecurity;
import org.openapis.openapi.models.operations.UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUnderstandStyleSheetRequest req = new UpdateUnderstandStyleSheetRequest("officia") {{
                requestBody = new UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest() {{
                    styleSheet = "maxime";
                }};;
            }};            

            UpdateUnderstandStyleSheetResponse res = sdk.sdk.updateUnderstandStyleSheet(req, new UpdateUnderstandStyleSheetSecurity("dignissimos", "officia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantStyleSheet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUnderstandTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUnderstandTaskRequest;
import org.openapis.openapi.models.operations.UpdateUnderstandTaskResponse;
import org.openapis.openapi.models.operations.UpdateUnderstandTaskSecurity;
import org.openapis.openapi.models.operations.UpdateUnderstandTaskUpdateUnderstandTaskRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUnderstandTaskRequest req = new UpdateUnderstandTaskRequest("asperiores", "nemo") {{
                requestBody = new UpdateUnderstandTaskUpdateUnderstandTaskRequest() {{
                    actions = "quae";
                    actionsUrl = "http://spanish-show-stopper.biz";
                    friendlyName = "ab";
                    uniqueName = "adipisci";
                }};;
            }};            

            UpdateUnderstandTaskResponse res = sdk.sdk.updateUnderstandTask(req, new UpdateUnderstandTaskSecurity("fuga", "id") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUnderstandTaskActions

Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUnderstandTaskActionsRequest;
import org.openapis.openapi.models.operations.UpdateUnderstandTaskActionsResponse;
import org.openapis.openapi.models.operations.UpdateUnderstandTaskActionsSecurity;
import org.openapis.openapi.models.operations.UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUnderstandTaskActionsRequest req = new UpdateUnderstandTaskActionsRequest("suscipit", "velit") {{
                requestBody = new UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest() {{
                    actions = "culpa";
                }};;
            }};            

            UpdateUnderstandTaskActionsResponse res = sdk.sdk.updateUnderstandTaskActions(req, new UpdateUnderstandTaskActionsSecurity("est", "recusandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewUnderstandAssistantTaskTaskActions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWirelessRatePlan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWirelessRatePlanRequest;
import org.openapis.openapi.models.operations.UpdateWirelessRatePlanResponse;
import org.openapis.openapi.models.operations.UpdateWirelessRatePlanSecurity;
import org.openapis.openapi.models.operations.UpdateWirelessRatePlanUpdateWirelessRatePlanRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateWirelessRatePlanRequest req = new UpdateWirelessRatePlanRequest("totam") {{
                requestBody = new UpdateWirelessRatePlanUpdateWirelessRatePlanRequest() {{
                    friendlyName = "fugiat";
                    uniqueName = "vel";
                }};;
            }};            

            UpdateWirelessRatePlanResponse res = sdk.sdk.updateWirelessRatePlan(req, new UpdateWirelessRatePlanSecurity("ducimus", "quos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewWirelessRatePlan != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWirelessSim

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWirelessSimRequest;
import org.openapis.openapi.models.operations.UpdateWirelessSimResponse;
import org.openapis.openapi.models.operations.UpdateWirelessSimSecurity;
import org.openapis.openapi.models.operations.UpdateWirelessSimUpdateWirelessSimRequest;
import org.openapis.openapi.models.operations.UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum;
import org.openapis.openapi.models.operations.UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateWirelessSimRequest req = new UpdateWirelessSimRequest("vel") {{
                requestBody = new UpdateWirelessSimUpdateWirelessSimRequest() {{
                    callbackMethod = "labore";
                    callbackUrl = "https://rowdy-repair.info";
                    commandsCallbackMethod = UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum.POST;
                    commandsCallbackUrl = "http://wide-eyed-source.info";
                    friendlyName = "recusandae";
                    ratePlan = "aliquid";
                    smsFallbackMethod = UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum.HEAD;
                    smsFallbackUrl = "https://emotional-ignorant.info";
                    smsMethod = UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum.DELETE;
                    smsUrl = "https://extroverted-wisdom.info";
                    status = "reiciendis";
                    uniqueName = "quidem";
                    voiceFallbackMethod = UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum.DELETE;
                    voiceFallbackUrl = "https://focused-caddy.org";
                    voiceMethod = UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum.GET;
                    voiceUrl = "http://elegant-brick.info";
                }};;
            }};            

            UpdateWirelessSimResponse res = sdk.sdk.updateWirelessSim(req, new UpdateWirelessSimSecurity("a", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewWirelessSim != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
