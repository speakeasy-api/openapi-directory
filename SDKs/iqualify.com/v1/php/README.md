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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### apiInfo

* `get` - List supported endpoints URLs

### assessmentData

* `getOfferingsOfferingIdAnalyticsActivitiesResponses` - Find open response activity attempts
* `getOfferingsOfferingIdAnalyticsMarksAssignments` - Find assessment marks
* `getOfferingsOfferingIdAnalyticsMarksQuizzes` - Find quiz marks
* `getOfferingsOfferingIdAnalyticsSubmissionsAssignments` - Find submissions to assessments, including marks if any
* `getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId` - Find submissions to a specified open response assessment, including marks if any
* `getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId` - Find a learner's submission to a specified assessment, including marks if any

### assessmentGroups

* `deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail` - Remove a learner from an assessment group
* `getOfferingsOfferingIdGroups` - Find assessment groups
* `getOfferingsOfferingIdGroupsGroupIdLearners` - Find learners in an assessment group
* `postOfferingsOfferingIdGroups` - Add an assessment group
* `postOfferingsOfferingIdGroupsGroupIdLearners` - Add a learner to an assessment group

### assessmentManagement

* `deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId` - Remove assessment document
* `deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId` - Reset user's assessment to draft state
* `getOfferingsOfferingIdActivitiesOpenresponse` - Find offering's activities
* `getOfferingsOfferingIdAssessments` - Find offering's assessments
* `getOfferingsOfferingIdLearnersPendingSubmission` - Find learners with assessments pending x days before due date within the specified offeringId
* `getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse` - Find learner's open response assessment submissions
* `patchOfferingsOfferingIdAssessmentsAssessmentId` - Update assessment details
* `patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail` - Update the due dates for a learner's quiz attempt

### badges

* `getOfferingsOfferingIdBadges` - Find offering badges
* `getUsersUserEmailBadges` - Find user's badges
* `postOfferingsOfferingIdUsersUserEmailBadgesAward` - Award badge

### channels

* `deleteOfferingsOfferingIdChannelsChannelIdLearners` - Remove learners from a group channel
* `getOfferingsOfferingIdAnalyticsChannelsChannelIdComments` - Find comments
* `getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts` - Find posts
* `getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies` - Find replies
* `getOfferingsOfferingIdChannels` - Find channels
* `getOfferingsOfferingIdChannelsChannelIdLearners` - Find learners in a group channel
* `patchOfferingsOfferingIdChannelsChannelId` - Update channel
* `postOfferingsOfferingIdChannels` - Add channel
* `postOfferingsOfferingIdChannelsChannelIdLearners` - Add learners to a group channel

### courseMappings

* `deleteCourseMappingsOfferingIdExternalCourseId` - Remove course mapping
* `getCourseMappings` - Find course mappings
* `getCourseMappingsExternalcourseExternalCourseId` - Find course mappings by externalCourseId
* `getCourseMappingsOfferingId` - Find course mappings by offeringId
* `putCourseMappingsOfferingIdExternalCourseId` - Add course mapping

### courseMetadata

* `putCoursesContentIdMetadataCategory` - Update course category
* `putCoursesContentIdMetadataLevel` - Update course level
* `putCoursesContentIdMetadataTags` - Update course tags
* `putCoursesContentIdMetadataTopic` - Update course topic

### courses

* `getCourses` - Find courses
* `getCoursesContentId` - Find course by contentId
* `getCoursesContentIdActivations` - Find activations for a contentId
* `getCoursesContentIdPermissions` - Find users who have access to the contentId provided
* `postCoursesRootContentIdPermissionsUserEmail` - Update course access

### learnerActivity

* `getOfferingsOfferingIdAnalyticsLearnersProgress` - Find learner progress in a specified offering
* `getOfferingsOfferingIdAnalyticsSocialNotes` - Find shared social notes in an offering
* `getOfferingsOfferingIdAnalyticsUnitReactions` - Find unit reactions
* `getUsersUserEmailOfferingsOfferingIdProgress` - Find learner's progress in a specified offering
* `getUsersUserEmailProgress` - Find learner's progress in offerings

### offeringLearners

* `deleteOfferingsOfferingIdUsersMarkerEmailMarks` - Remove learners from coach's marking list
* `deleteOfferingsOfferingIdUsersUserEmail` - Removes user from the offering
* `getOfferingsOfferingIdUsers` - Find offering's users
* `getOfferingsOfferingIdUsersMarkerEmailMarks` - Find Learners marked by a coach
* `patchUsersUserEmailTransfer` - Transfer a user between offerings
* `postOfferingsOfferingIdUsers` - Adds user to the offering
* `postOfferingsOfferingIdUsersMarkerEmailMarks` - Add learners to be marked by a coach

### offeringMetadata

* `putOfferingsOfferingIdMetadataCategory` - Update offering category metadata
* `putOfferingsOfferingIdMetadataLevel` - Update offering level metadata
* `putOfferingsOfferingIdMetadataTags` - Update offering tags metadata
* `putOfferingsOfferingIdMetadataTopic` - Update offering topic metadata

### offerings

* `getOfferings` - Find current, past and future offerings
* `getOfferingsCurrent` - Find active offerings
* `getOfferingsFuture` - Find scheduled offerings
* `getOfferingsInfoTextPattern` - Find offerings where info field matches the specified textPattern
* `getOfferingsPast` - Find past offerings
* `getOfferingsOfferingId` - Find offering by ID
* `patchOfferingsOfferingId` - Update offering
* `postOfferings` - Create offering

### organisation

* `getOrg` - Gets the current organisation

### pulses

* `getOfferingsOfferingIdAnalyticsPulses` - Find all pulse IDs in the specified offering
* `getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses` - Find pulses by offeringId and pulseId

### usersInIQualify

* `getUsersUserEmail` - Find user by email
* `getUsersUserEmailOfferings` - Find user's offerings
* `patchUsersUserEmail` - Update user
* `postUsers` - Add new user
* `postUsersUserEmailInviteEmail` - Resend invitation email
* `postUsersUserEmailOfferings` - Adds the user to the specified offerings as a learner
* `postUsersUserEmailPermissionsPermissionName` - Add permission to user
* `putUsersUserEmailSuspend` - Suspend user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
