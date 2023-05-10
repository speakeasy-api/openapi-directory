# registrations

### Available Operations

* [classroomRegistrationsCreate](#classroomregistrationscreate) - Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the `expiry_time` or `id` fields will be ignored. While Classroom may validate the `cloudPubSubTopic` and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it. This method may return the following error codes: * `PERMISSION_DENIED` if: * the authenticated user does not have permission to receive notifications from the requested field; or * the current user has not granted access to the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a Request Errors is returned. * another access error is encountered. * `INVALID_ARGUMENT` if: * no `cloudPubsubTopic` is specified, or the specified `cloudPubsubTopic` is not valid; or * no `feed` is specified, or the specified `feed` is not valid. * `NOT_FOUND` if: * the specified `feed` cannot be located, or the requesting user does not have permission to determine whether or not it exists; or * the specified `cloudPubsubTopic` cannot be located, or Classroom has not been granted permission to publish to it.
* [classroomRegistrationsDelete](#classroomregistrationsdelete) - Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.

## classroomRegistrationsCreate

Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the `expiry_time` or `id` fields will be ignored. While Classroom may validate the `cloudPubSubTopic` and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it. This method may return the following error codes: * `PERMISSION_DENIED` if: * the authenticated user does not have permission to receive notifications from the requested field; or * the current user has not granted access to the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a Request Errors is returned. * another access error is encountered. * `INVALID_ARGUMENT` if: * no `cloudPubsubTopic` is specified, or the specified `cloudPubsubTopic` is not valid; or * no `feed` is specified, or the specified `feed` is not valid. * `NOT_FOUND` if: * the specified `feed` cannot be located, or the requesting user does not have permission to determine whether or not it exists; or * the specified `cloudPubsubTopic` cannot be located, or Classroom has not been granted permission to publish to it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomRegistrationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Registration;
use \OpenAPI\OpenAPI\Models\Shared\CloudPubsubTopic;
use \OpenAPI\OpenAPI\Models\Shared\Feed;
use \OpenAPI\OpenAPI\Models\Shared\CourseRosterChangesInfo;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkChangesInfo;
use \OpenAPI\OpenAPI\Models\Shared\FeedFeedTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomRegistrationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomRegistrationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->registration = new Registration();
    $request->registration->cloudPubsubTopic = new CloudPubsubTopic();
    $request->registration->cloudPubsubTopic->topicName = 'fuga';
    $request->registration->expiryTime = 'facere';
    $request->registration->feed = new Feed();
    $request->registration->feed->courseRosterChangesInfo = new CourseRosterChangesInfo();
    $request->registration->feed->courseRosterChangesInfo->courseId = 'impedit';
    $request->registration->feed->courseWorkChangesInfo = new CourseWorkChangesInfo();
    $request->registration->feed->courseWorkChangesInfo->courseId = 'quasi';
    $request->registration->feed->feedType = FeedFeedTypeEnum::COURSE_ROSTER_CHANGES;
    $request->registration->registrationId = 'quod';
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatem';
    $request->fields = 'facere';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new ClassroomRegistrationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->registrations->classroomRegistrationsCreate($request, $requestSecurity);

    if ($response->registration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomRegistrationsDelete

Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomRegistrationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomRegistrationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomRegistrationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quae';
    $request->fields = 'magni';
    $request->key = 'officiis';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->registrationId = 'impedit';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new ClassroomRegistrationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->registrations->classroomRegistrationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
