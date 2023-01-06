# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Authorization: shared.SchemeAuthorization{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    res, err := s.APIInfo.Get(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### API info

* `Get` - List supported endpoints URLs

### Assessment data

* `GetOfferingsOfferingIDAnalyticsActivitiesResponses` - Find open response activity attempts
* `GetOfferingsOfferingIDAnalyticsMarksAssignments` - Find assessment marks
* `GetOfferingsOfferingIDAnalyticsMarksQuizzes` - Find quiz marks
* `GetOfferingsOfferingIDAnalyticsSubmissionsAssignments` - Find submissions to assessments, including marks if any
* `GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentID` - Find submissions to a specified open response assessment, including marks if any
* `GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentID` - Find a learner's submission to a specified assessment, including marks if any

### Assessment groups

* `DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmail` - Remove a learner from an assessment group
* `GetOfferingsOfferingIDGroups` - Find assessment groups
* `GetOfferingsOfferingIDGroupsGroupIDLearners` - Find learners in an assessment group
* `PostOfferingsOfferingIDGroups` - Add an assessment group
* `PostOfferingsOfferingIDGroupsGroupIDLearners` - Add a learner to an assessment group

### Assessment management

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

### Course mappings

* `DeleteCourseMappingsOfferingIDExternalCourseID` - Remove course mapping
* `GetCourseMappings` - Find course mappings
* `GetCourseMappingsExternalcourseExternalCourseID` - Find course mappings by externalCourseId
* `GetCourseMappingsOfferingID` - Find course mappings by offeringId
* `PutCourseMappingsOfferingIDExternalCourseID` - Add course mapping

### Course metadata

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

### Learner activity

* `GetOfferingsOfferingIDAnalyticsLearnersProgress` - Find learner progress in a specified offering
* `GetOfferingsOfferingIDAnalyticsSocialNotes` - Find shared social notes in an offering
* `GetOfferingsOfferingIDAnalyticsUnitReactions` - Find unit reactions
* `GetUsersUserEmailOfferingsOfferingIDProgress` - Find learner's progress in a specified offering
* `GetUsersUserEmailProgress` - Find learner's progress in offerings

### Offering learners

* `DeleteOfferingsOfferingIDUsersMarkerEmailMarks` - Remove learners from coach's marking list
* `DeleteOfferingsOfferingIDUsersUserEmail` - Removes user from the offering
* `GetOfferingsOfferingIDUsers` - Find offering's users
* `GetOfferingsOfferingIDUsersMarkerEmailMarks` - Find Learners marked by a coach
* `PatchUsersUserEmailTransfer` - Transfer a user between offerings
* `PostOfferingsOfferingIDUsers` - Adds user to the offering
* `PostOfferingsOfferingIDUsersMarkerEmailMarks` - Add learners to be marked by a coach

### Offering metadata

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

### Users in iQualify

* `GetUsersUserEmail` - Find user by email
* `GetUsersUserEmailOfferings` - Find user's offerings
* `PatchUsersUserEmail` - Update user
* `PostUsers` - Add new user
* `PostUsersUserEmailInviteEmail` - Resend invitation email
* `PostUsersUserEmailOfferings` - Adds the user to the specified offerings as a learner
* `PostUsersUserEmailPermissionsPermissionName` - Add permission to user
* `PutUsersUserEmailSuspend` - Suspend user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
