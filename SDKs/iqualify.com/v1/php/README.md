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
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apiInfo->get();

    if ($response->get200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apiInfo](docs/apiinfo/README.md)

* [get](docs/apiinfo/README.md#get) - List supported endpoints URLs

### [assessmentData](docs/assessmentdata/README.md)

* [getOfferingsOfferingIdAnalyticsActivitiesResponses](docs/assessmentdata/README.md#getofferingsofferingidanalyticsactivitiesresponses) - Find open response activity attempts
* [getOfferingsOfferingIdAnalyticsMarksAssignments](docs/assessmentdata/README.md#getofferingsofferingidanalyticsmarksassignments) - Find assessment marks
* [getOfferingsOfferingIdAnalyticsMarksQuizzes](docs/assessmentdata/README.md#getofferingsofferingidanalyticsmarksquizzes) - Find quiz marks
* [getOfferingsOfferingIdAnalyticsSubmissionsAssignments](docs/assessmentdata/README.md#getofferingsofferingidanalyticssubmissionsassignments) - Find submissions to assessments, including marks if any
* [getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId](docs/assessmentdata/README.md#getofferingsofferingidanalyticssubmissionsopenresponseassessmentid) - Find submissions to a specified open response assessment, including marks if any
* [getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId](docs/assessmentdata/README.md#getofferingsofferingidanalyticssubmissionsuseremailassignmentsassessmentid) - Find a learner's submission to a specified assessment, including marks if any

### [assessmentGroups](docs/assessmentgroups/README.md)

* [deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail](docs/assessmentgroups/README.md#deleteofferingsofferingidgroupsgroupidlearnersuseremail) - Remove a learner from an assessment group
* [getOfferingsOfferingIdGroups](docs/assessmentgroups/README.md#getofferingsofferingidgroups) - Find assessment groups
* [getOfferingsOfferingIdGroupsGroupIdLearners](docs/assessmentgroups/README.md#getofferingsofferingidgroupsgroupidlearners) - Find learners in an assessment group
* [postOfferingsOfferingIdGroups](docs/assessmentgroups/README.md#postofferingsofferingidgroups) - Add an assessment group
* [postOfferingsOfferingIdGroupsGroupIdLearners](docs/assessmentgroups/README.md#postofferingsofferingidgroupsgroupidlearners) - Add a learner to an assessment group

### [assessmentManagement](docs/assessmentmanagement/README.md)

* [deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId](docs/assessmentmanagement/README.md#deleteofferingsofferingidassessmentsassessmentiddocumentsdocumentid) - Remove assessment document
* [deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId](docs/assessmentmanagement/README.md#deleteofferingsofferingidusersuseremailassessmentsassessmentid) - Reset user's assessment to draft state
* [getOfferingsOfferingIdActivitiesOpenresponse](docs/assessmentmanagement/README.md#getofferingsofferingidactivitiesopenresponse) - Find offering's activities
* [getOfferingsOfferingIdAssessments](docs/assessmentmanagement/README.md#getofferingsofferingidassessments) - Find offering's assessments
* [getOfferingsOfferingIdLearnersPendingSubmission](docs/assessmentmanagement/README.md#getofferingsofferingidlearnerspendingsubmission) - Find learners with assessments pending x days before due date within the specified offeringId
* [getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse](docs/assessmentmanagement/README.md#getofferingsofferingidusersuseremailsubmissionsopenresponse) - Find learner's open response assessment submissions
* [patchOfferingsOfferingIdAssessmentsAssessmentId](docs/assessmentmanagement/README.md#patchofferingsofferingidassessmentsassessmentid) - Update assessment details
* [patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail](docs/assessmentmanagement/README.md#patchofferingsofferingidassessmentsassessmentiduseremail) - Update the due dates for a learner's quiz attempt

### [badges](docs/badges/README.md)

* [getOfferingsOfferingIdBadges](docs/badges/README.md#getofferingsofferingidbadges) - Find offering badges
* [getUsersUserEmailBadges](docs/badges/README.md#getusersuseremailbadges) - Find user's badges
* [postOfferingsOfferingIdUsersUserEmailBadgesAward](docs/badges/README.md#postofferingsofferingidusersuseremailbadgesaward) - Award badge

### [channels](docs/channels/README.md)

* [deleteOfferingsOfferingIdChannelsChannelIdLearners](docs/channels/README.md#deleteofferingsofferingidchannelschannelidlearners) - Remove learners from a group channel
* [getOfferingsOfferingIdAnalyticsChannelsChannelIdComments](docs/channels/README.md#getofferingsofferingidanalyticschannelschannelidcomments) - Find comments
* [getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts](docs/channels/README.md#getofferingsofferingidanalyticschannelschannelidposts) - Find posts
* [getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies](docs/channels/README.md#getofferingsofferingidanalyticschannelschannelidreplies) - Find replies
* [getOfferingsOfferingIdChannels](docs/channels/README.md#getofferingsofferingidchannels) - Find channels
* [getOfferingsOfferingIdChannelsChannelIdLearners](docs/channels/README.md#getofferingsofferingidchannelschannelidlearners) - Find learners in a group channel
* [patchOfferingsOfferingIdChannelsChannelId](docs/channels/README.md#patchofferingsofferingidchannelschannelid) - Update channel
* [postOfferingsOfferingIdChannels](docs/channels/README.md#postofferingsofferingidchannels) - Add channel
* [postOfferingsOfferingIdChannelsChannelIdLearners](docs/channels/README.md#postofferingsofferingidchannelschannelidlearners) - Add learners to a group channel

### [courseMappings](docs/coursemappings/README.md)

* [deleteCourseMappingsOfferingIdExternalCourseId](docs/coursemappings/README.md#deletecoursemappingsofferingidexternalcourseid) - Remove course mapping
* [getCourseMappings](docs/coursemappings/README.md#getcoursemappings) - Find course mappings
* [getCourseMappingsExternalcourseExternalCourseId](docs/coursemappings/README.md#getcoursemappingsexternalcourseexternalcourseid) - Find course mappings by externalCourseId
* [getCourseMappingsOfferingId](docs/coursemappings/README.md#getcoursemappingsofferingid) - Find course mappings by offeringId
* [putCourseMappingsOfferingIdExternalCourseId](docs/coursemappings/README.md#putcoursemappingsofferingidexternalcourseid) - Add course mapping

### [courseMetadata](docs/coursemetadata/README.md)

* [putCoursesContentIdMetadataCategory](docs/coursemetadata/README.md#putcoursescontentidmetadatacategory) - Update course category
* [putCoursesContentIdMetadataLevel](docs/coursemetadata/README.md#putcoursescontentidmetadatalevel) - Update course level
* [putCoursesContentIdMetadataTags](docs/coursemetadata/README.md#putcoursescontentidmetadatatags) - Update course tags
* [putCoursesContentIdMetadataTopic](docs/coursemetadata/README.md#putcoursescontentidmetadatatopic) - Update course topic

### [courses](docs/courses/README.md)

* [getCourses](docs/courses/README.md#getcourses) - Find courses
* [getCoursesContentId](docs/courses/README.md#getcoursescontentid) - Find course by contentId
* [getCoursesContentIdActivations](docs/courses/README.md#getcoursescontentidactivations) - Find activations for a contentId
* [getCoursesContentIdPermissions](docs/courses/README.md#getcoursescontentidpermissions) - Find users who have access to the contentId provided
* [postCoursesRootContentIdPermissionsUserEmail](docs/courses/README.md#postcoursesrootcontentidpermissionsuseremail) - Update course access

### [learnerActivity](docs/learneractivity/README.md)

* [getOfferingsOfferingIdAnalyticsLearnersProgress](docs/learneractivity/README.md#getofferingsofferingidanalyticslearnersprogress) - Find learner progress in a specified offering
* [getOfferingsOfferingIdAnalyticsSocialNotes](docs/learneractivity/README.md#getofferingsofferingidanalyticssocialnotes) - Find shared social notes in an offering
* [getOfferingsOfferingIdAnalyticsUnitReactions](docs/learneractivity/README.md#getofferingsofferingidanalyticsunitreactions) - Find unit reactions
* [getUsersUserEmailOfferingsOfferingIdProgress](docs/learneractivity/README.md#getusersuseremailofferingsofferingidprogress) - Find learner's progress in a specified offering
* [getUsersUserEmailProgress](docs/learneractivity/README.md#getusersuseremailprogress) - Find learner's progress in offerings

### [offeringLearners](docs/offeringlearners/README.md)

* [deleteOfferingsOfferingIdUsersMarkerEmailMarks](docs/offeringlearners/README.md#deleteofferingsofferingidusersmarkeremailmarks) - Remove learners from coach's marking list
* [deleteOfferingsOfferingIdUsersUserEmail](docs/offeringlearners/README.md#deleteofferingsofferingidusersuseremail) - Removes user from the offering
* [getOfferingsOfferingIdUsers](docs/offeringlearners/README.md#getofferingsofferingidusers) - Find offering's users
* [getOfferingsOfferingIdUsersMarkerEmailMarks](docs/offeringlearners/README.md#getofferingsofferingidusersmarkeremailmarks) - Find Learners marked by a coach
* [patchUsersUserEmailTransfer](docs/offeringlearners/README.md#patchusersuseremailtransfer) - Transfer a user between offerings
* [postOfferingsOfferingIdUsers](docs/offeringlearners/README.md#postofferingsofferingidusers) - Adds user to the offering
* [postOfferingsOfferingIdUsersMarkerEmailMarks](docs/offeringlearners/README.md#postofferingsofferingidusersmarkeremailmarks) - Add learners to be marked by a coach

### [offeringMetadata](docs/offeringmetadata/README.md)

* [putOfferingsOfferingIdMetadataCategory](docs/offeringmetadata/README.md#putofferingsofferingidmetadatacategory) - Update offering category metadata
* [putOfferingsOfferingIdMetadataLevel](docs/offeringmetadata/README.md#putofferingsofferingidmetadatalevel) - Update offering level metadata
* [putOfferingsOfferingIdMetadataTags](docs/offeringmetadata/README.md#putofferingsofferingidmetadatatags) - Update offering tags metadata
* [putOfferingsOfferingIdMetadataTopic](docs/offeringmetadata/README.md#putofferingsofferingidmetadatatopic) - Update offering topic metadata

### [offerings](docs/offerings/README.md)

* [getOfferings](docs/offerings/README.md#getofferings) - Find current, past and future offerings
* [getOfferingsCurrent](docs/offerings/README.md#getofferingscurrent) - Find active offerings
* [getOfferingsFuture](docs/offerings/README.md#getofferingsfuture) - Find scheduled offerings
* [getOfferingsInfoTextPattern](docs/offerings/README.md#getofferingsinfotextpattern) - Find offerings where info field matches the specified textPattern
* [getOfferingsPast](docs/offerings/README.md#getofferingspast) - Find past offerings
* [getOfferingsOfferingId](docs/offerings/README.md#getofferingsofferingid) - Find offering by ID
* [patchOfferingsOfferingId](docs/offerings/README.md#patchofferingsofferingid) - Update offering
* [postOfferings](docs/offerings/README.md#postofferings) - Create offering

### [organisation](docs/organisation/README.md)

* [getOrg](docs/organisation/README.md#getorg) - Gets the current organisation

### [pulses](docs/pulses/README.md)

* [getOfferingsOfferingIdAnalyticsPulses](docs/pulses/README.md#getofferingsofferingidanalyticspulses) - Find all pulse IDs in the specified offering
* [getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses](docs/pulses/README.md#getofferingsofferingidanalyticspulsespulseidresponses) - Find pulses by offeringId and pulseId

### [usersInIQualify](docs/usersiniqualify/README.md)

* [getUsersUserEmail](docs/usersiniqualify/README.md#getusersuseremail) - Find user by email
* [getUsersUserEmailOfferings](docs/usersiniqualify/README.md#getusersuseremailofferings) - Find user's offerings
* [patchUsersUserEmail](docs/usersiniqualify/README.md#patchusersuseremail) - Update user
* [postUsers](docs/usersiniqualify/README.md#postusers) - Add new user
* [postUsersUserEmailInviteEmail](docs/usersiniqualify/README.md#postusersuseremailinviteemail) - Resend invitation email
* [postUsersUserEmailOfferings](docs/usersiniqualify/README.md#postusersuseremailofferings) - Adds the user to the specified offerings as a learner
* [postUsersUserEmailPermissionsPermissionName](docs/usersiniqualify/README.md#postusersuseremailpermissionspermissionname) - Add permission to user
* [putUsersUserEmailSuspend](docs/usersiniqualify/README.md#putusersuseremailsuspend) - Suspend user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
