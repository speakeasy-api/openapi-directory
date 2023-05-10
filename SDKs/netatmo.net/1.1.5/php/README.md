# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicelistRequest;
use \OpenAPI\OpenAPI\Models\Operations\DevicelistAppTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DevicelistSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevicelistRequest();
    $request->appType = DevicelistAppTypeEnum::APP_STATION;
    $request->deviceId = 'provident';
    $request->getFavorites = false;

    $requestSecurity = new DevicelistSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deprecated->devicelist($request, $requestSecurity);

    if ($response->naDeviceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [deprecated](docs/deprecated/README.md)

* [~~devicelist~~](docs/deprecated/README.md#devicelist) - The method devicelist returns the list of devices owned by the user, and their modules.
A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.
 :warning: **Deprecated**
* [~~getthermstate~~](docs/deprecated/README.md#getthermstate) - The method getthermstate returns the last Thermostat measurements, its current weekly schedule, and, if present, its current manual temperature setpoint. :warning: **Deprecated**
* [~~getuser~~](docs/deprecated/README.md#getuser) - The method getuser returns information about a user such as prefered language, prefered units, and list of devices.
 :warning: **Deprecated**

### [healthyhomecoach](docs/healthyhomecoach/README.md)

* [gethomecoachsdata](docs/healthyhomecoach/README.md#gethomecoachsdata) - The method gethomecoachsdata Returns data from a user Healthy Home Coach Station (measures and device specific data).

### [partner](docs/partner/README.md)

* [getmeasure](docs/partner/README.md#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [partnerdevices](docs/partner/README.md#partnerdevices) - The method partnerdevices returns the list of device_id to which your partner application has access to.

### [public](docs/public/README.md)

* [getmeasure](docs/public/README.md#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [getpublicdata](docs/public/README.md#getpublicdata) - Retrieves publicly shared weather data from Outdoor Modules within a predefined area.

### [station](docs/station/README.md)

* [getmeasure](docs/station/README.md#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [getstationsdata](docs/station/README.md#getstationsdata) - The method getstationsdata Returns data from a user's Weather Stations (measures and device specific data).

### [thermostat](docs/thermostat/README.md)

* [createnewschedule](docs/thermostat/README.md#createnewschedule) - The method createnewschedule creates a new schedule stored in the backup list.
* [getmeasure](docs/thermostat/README.md#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [getthermostatsdata](docs/thermostat/README.md#getthermostatsdata) - The method getthermostatsdata returns information about user's thermostats such as their last measurements.
* [setthermpoint](docs/thermostat/README.md#setthermpoint) - The method setthermpoint changes the Thermostat manual temperature setpoint.
* [switchschedule](docs/thermostat/README.md#switchschedule) - The method switchschedule switches the Thermostat's schedule to another existing schedule.
* [syncschedule](docs/thermostat/README.md#syncschedule) - The method syncschedule changes the Thermostat weekly schedule.

### [welcome](docs/welcome/README.md)

* [addwebhook](docs/welcome/README.md#addwebhook) - Links a callback url to a user.

* [dropwebhook](docs/welcome/README.md#dropwebhook) - Dissociates a webhook from a user.

* [getcamerapicture](docs/welcome/README.md#getcamerapicture) - Returns the snapshot associated to an event.

* [geteventsuntil](docs/welcome/README.md#geteventsuntil) - Returns the snapshot associated to an event.

* [gethomedata](docs/welcome/README.md#gethomedata) - Returns information about users homes and cameras.

* [getlasteventof](docs/welcome/README.md#getlasteventof) - Returns most recent events.

* [getnextevents](docs/welcome/README.md#getnextevents) - Returns previous events.

* [setpersonsaway](docs/welcome/README.md#setpersonsaway) - Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.

* [setpersonshome](docs/welcome/README.md#setpersonshome) - Sets a person as 'At home'.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
