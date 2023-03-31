# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/iqualify.com/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIInfo.Get(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### APIInfo

* `Get` - List supported endpoints URLs

### AssessmentData

* `GetOfferingsOfferingIDAnalyticsActivitiesResponses` - Find open response activity attempts
* `GetOfferingsOfferingIDAnalyticsMarksAssignments` - Find assessment marks
* `GetOfferingsOfferingIDAnalyticsMarksQuizzes` - Find quiz marks
* `GetOfferingsOfferingIDAnalyticsSubmissionsAssignments` - Find submissions to assessments, including marks if any
* `GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentID` - Find submissions to a specified open response assessment, including marks if any
* `GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentID` - Find a learner's submission to a specified assessment, including marks if any

### AssessmentGroups

* `DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmail` - Remove a learner from an assessment group
* `GetOfferingsOfferingIDGroups` - Find assessment groups
* `GetOfferingsOfferingIDGroupsGroupIDLearners` - Find learners in an assessment group
* `PostOfferingsOfferingIDGroups` - Add an assessment group
* `PostOfferingsOfferingIDGroupsGroupIDLearners` - Add a learner to an assessment group

### AssessmentManagement

* `DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentID` - Remove assessment document
* `DeleteOfferingsOfferingIDUsersUserEmailAssessmentsAssessmentID` - Reset user's assessment to draft state
* `GetOfferingsOfferingIDActivitiesOpenresponse` - Find offering's activities
* `GetOfferingsOfferingIDAssessments` - Find offering's assessments
* `GetOfferingsOfferingIDLearnersPendingSubmission` - Find learners with assessments pending x days before due date within the specified offeringId
* `GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponse` - Find learner's open response assessment submissions
* `PatchOfferingsOfferingIDAssessmentsAssessmentID` - Update assessment details
* `PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmail` - Update the due dates for a learner's quiz attempt

### Badges

* `GetOfferingsOfferingIDBadges` - Find offering badges
* `GetUsersUserEmailBadges` - Find user's badges
* `PostOfferingsOfferingIDUsersUserEmailBadgesAward` - Award badge

### Channels

* `DeleteOfferingsOfferingIDChannelsChannelIDLearners` - Remove learners from a group channel
* `GetOfferingsOfferingIDAnalyticsChannelsChannelIDComments` - Find comments
* `GetOfferingsOfferingIDAnalyticsChannelsChannelIDPosts` - Find posts
* `GetOfferingsOfferingIDAnalyticsChannelsChannelIDReplies` - Find replies
* `GetOfferingsOfferingIDChannels` - Find channels
* `GetOfferingsOfferingIDChannelsChannelIDLearners` - Find learners in a group channel
* `PatchOfferingsOfferingIDChannelsChannelID` - Update channel
* `PostOfferingsOfferingIDChannels` - Add channel
* `PostOfferingsOfferingIDChannelsChannelIDLearners` - Add learners to a group channel

### CourseMappings

* `DeleteCourseMappingsOfferingIDExternalCourseID` - Remove course mapping
* `GetCourseMappings` - Find course mappings
* `GetCourseMappingsExternalcourseExternalCourseID` - Find course mappings by externalCourseId
* `GetCourseMappingsOfferingID` - Find course mappings by offeringId
* `PutCourseMappingsOfferingIDExternalCourseID` - Add course mapping

### CourseMetadata

* `PutCoursesContentIDMetadataCategory` - Update course category
* `PutCoursesContentIDMetadataLevel` - Update course level
* `PutCoursesContentIDMetadataTags` - Update course tags
* `PutCoursesContentIDMetadataTopic` - Update course topic

### Courses

* `GetCourses` - Find courses
* `GetCoursesContentID` - Find course by contentId
* `GetCoursesContentIDActivations` - Find activations for a contentId
* `GetCoursesContentIDPermissions` - Find users who have access to the contentId provided
* `PostCoursesRootContentIDPermissionsUserEmail` - Update course access

### LearnerActivity

* `GetOfferingsOfferingIDAnalyticsLearnersProgress` - Find learner progress in a specified offering
* `GetOfferingsOfferingIDAnalyticsSocialNotes` - Find shared social notes in an offering
* `GetOfferingsOfferingIDAnalyticsUnitReactions` - Find unit reactions
* `GetUsersUserEmailOfferingsOfferingIDProgress` - Find learner's progress in a specified offering
* `GetUsersUserEmailProgress` - Find learner's progress in offerings

### OfferingLearners

* `DeleteOfferingsOfferingIDUsersMarkerEmailMarks` - Remove learners from coach's marking list
* `DeleteOfferingsOfferingIDUsersUserEmail` - Removes user from the offering
* `GetOfferingsOfferingIDUsers` - Find offering's users
* `GetOfferingsOfferingIDUsersMarkerEmailMarks` - Find Learners marked by a coach
* `PatchUsersUserEmailTransfer` - Transfer a user between offerings
* `PostOfferingsOfferingIDUsers` - Adds user to the offering
* `PostOfferingsOfferingIDUsersMarkerEmailMarks` - Add learners to be marked by a coach

### OfferingMetadata

* `PutOfferingsOfferingIDMetadataCategory` - Update offering category metadata
* `PutOfferingsOfferingIDMetadataLevel` - Update offering level metadata
* `PutOfferingsOfferingIDMetadataTags` - Update offering tags metadata
* `PutOfferingsOfferingIDMetadataTopic` - Update offering topic metadata

### Offerings

* `GetOfferings` - Find current, past and future offerings
* `GetOfferingsCurrent` - Find active offerings
* `GetOfferingsFuture` - Find scheduled offerings
* `GetOfferingsInfoTextPattern` - Find offerings where info field matches the specified textPattern
* `GetOfferingsPast` - Find past offerings
* `GetOfferingsOfferingID` - Find offering by ID
* `PatchOfferingsOfferingID` - Update offering
* `PostOfferings` - Create offering

### Organisation

* `GetOrg` - Gets the current organisation

### Pulses

* `GetOfferingsOfferingIDAnalyticsPulses` - Find all pulse IDs in the specified offering
* `GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponses` - Find pulses by offeringId and pulseId

### UsersInIQualify

* `GetUsersUserEmail` - Find user by email
* `GetUsersUserEmailOfferings` - Find user's offerings
* `PatchUsersUserEmail` - Update user
* `PostUsers` - Add new user
* `PostUsersUserEmailInviteEmail` - Resend invitation email
* `PostUsersUserEmailOfferings` - Adds the user to the specified offerings as a learner
* `PostUsersUserEmailPermissionsPermissionName` - Add permission to user
* `PutUsersUserEmailSuspend` - Suspend user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
