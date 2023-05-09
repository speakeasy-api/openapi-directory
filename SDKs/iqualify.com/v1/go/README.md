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

import(
	"context"
	"log"
	"openapi"
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


### [APIInfo](docs/apiinfo/README.md)

* [Get](docs/apiinfo/README.md#get) - List supported endpoints URLs

### [AssessmentData](docs/assessmentdata/README.md)

* [GetOfferingsOfferingIDAnalyticsActivitiesResponses](docs/assessmentdata/README.md#getofferingsofferingidanalyticsactivitiesresponses) - Find open response activity attempts
* [GetOfferingsOfferingIDAnalyticsMarksAssignments](docs/assessmentdata/README.md#getofferingsofferingidanalyticsmarksassignments) - Find assessment marks
* [GetOfferingsOfferingIDAnalyticsMarksQuizzes](docs/assessmentdata/README.md#getofferingsofferingidanalyticsmarksquizzes) - Find quiz marks
* [GetOfferingsOfferingIDAnalyticsSubmissionsAssignments](docs/assessmentdata/README.md#getofferingsofferingidanalyticssubmissionsassignments) - Find submissions to assessments, including marks if any
* [GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentID](docs/assessmentdata/README.md#getofferingsofferingidanalyticssubmissionsopenresponseassessmentid) - Find submissions to a specified open response assessment, including marks if any
* [GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentID](docs/assessmentdata/README.md#getofferingsofferingidanalyticssubmissionsuseremailassignmentsassessmentid) - Find a learner's submission to a specified assessment, including marks if any

### [AssessmentGroups](docs/assessmentgroups/README.md)

* [DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmail](docs/assessmentgroups/README.md#deleteofferingsofferingidgroupsgroupidlearnersuseremail) - Remove a learner from an assessment group
* [GetOfferingsOfferingIDGroups](docs/assessmentgroups/README.md#getofferingsofferingidgroups) - Find assessment groups
* [GetOfferingsOfferingIDGroupsGroupIDLearners](docs/assessmentgroups/README.md#getofferingsofferingidgroupsgroupidlearners) - Find learners in an assessment group
* [PostOfferingsOfferingIDGroups](docs/assessmentgroups/README.md#postofferingsofferingidgroups) - Add an assessment group
* [PostOfferingsOfferingIDGroupsGroupIDLearners](docs/assessmentgroups/README.md#postofferingsofferingidgroupsgroupidlearners) - Add a learner to an assessment group

### [AssessmentManagement](docs/assessmentmanagement/README.md)

* [DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentID](docs/assessmentmanagement/README.md#deleteofferingsofferingidassessmentsassessmentiddocumentsdocumentid) - Remove assessment document
* [DeleteOfferingsOfferingIDUsersUserEmailAssessmentsAssessmentID](docs/assessmentmanagement/README.md#deleteofferingsofferingidusersuseremailassessmentsassessmentid) - Reset user's assessment to draft state
* [GetOfferingsOfferingIDActivitiesOpenresponse](docs/assessmentmanagement/README.md#getofferingsofferingidactivitiesopenresponse) - Find offering's activities
* [GetOfferingsOfferingIDAssessments](docs/assessmentmanagement/README.md#getofferingsofferingidassessments) - Find offering's assessments
* [GetOfferingsOfferingIDLearnersPendingSubmission](docs/assessmentmanagement/README.md#getofferingsofferingidlearnerspendingsubmission) - Find learners with assessments pending x days before due date within the specified offeringId
* [GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponse](docs/assessmentmanagement/README.md#getofferingsofferingidusersuseremailsubmissionsopenresponse) - Find learner's open response assessment submissions
* [PatchOfferingsOfferingIDAssessmentsAssessmentID](docs/assessmentmanagement/README.md#patchofferingsofferingidassessmentsassessmentid) - Update assessment details
* [PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmail](docs/assessmentmanagement/README.md#patchofferingsofferingidassessmentsassessmentiduseremail) - Update the due dates for a learner's quiz attempt

### [Badges](docs/badges/README.md)

* [GetOfferingsOfferingIDBadges](docs/badges/README.md#getofferingsofferingidbadges) - Find offering badges
* [GetUsersUserEmailBadges](docs/badges/README.md#getusersuseremailbadges) - Find user's badges
* [PostOfferingsOfferingIDUsersUserEmailBadgesAward](docs/badges/README.md#postofferingsofferingidusersuseremailbadgesaward) - Award badge

### [Channels](docs/channels/README.md)

* [DeleteOfferingsOfferingIDChannelsChannelIDLearners](docs/channels/README.md#deleteofferingsofferingidchannelschannelidlearners) - Remove learners from a group channel
* [GetOfferingsOfferingIDAnalyticsChannelsChannelIDComments](docs/channels/README.md#getofferingsofferingidanalyticschannelschannelidcomments) - Find comments
* [GetOfferingsOfferingIDAnalyticsChannelsChannelIDPosts](docs/channels/README.md#getofferingsofferingidanalyticschannelschannelidposts) - Find posts
* [GetOfferingsOfferingIDAnalyticsChannelsChannelIDReplies](docs/channels/README.md#getofferingsofferingidanalyticschannelschannelidreplies) - Find replies
* [GetOfferingsOfferingIDChannels](docs/channels/README.md#getofferingsofferingidchannels) - Find channels
* [GetOfferingsOfferingIDChannelsChannelIDLearners](docs/channels/README.md#getofferingsofferingidchannelschannelidlearners) - Find learners in a group channel
* [PatchOfferingsOfferingIDChannelsChannelID](docs/channels/README.md#patchofferingsofferingidchannelschannelid) - Update channel
* [PostOfferingsOfferingIDChannels](docs/channels/README.md#postofferingsofferingidchannels) - Add channel
* [PostOfferingsOfferingIDChannelsChannelIDLearners](docs/channels/README.md#postofferingsofferingidchannelschannelidlearners) - Add learners to a group channel

### [CourseMappings](docs/coursemappings/README.md)

* [DeleteCourseMappingsOfferingIDExternalCourseID](docs/coursemappings/README.md#deletecoursemappingsofferingidexternalcourseid) - Remove course mapping
* [GetCourseMappings](docs/coursemappings/README.md#getcoursemappings) - Find course mappings
* [GetCourseMappingsExternalcourseExternalCourseID](docs/coursemappings/README.md#getcoursemappingsexternalcourseexternalcourseid) - Find course mappings by externalCourseId
* [GetCourseMappingsOfferingID](docs/coursemappings/README.md#getcoursemappingsofferingid) - Find course mappings by offeringId
* [PutCourseMappingsOfferingIDExternalCourseID](docs/coursemappings/README.md#putcoursemappingsofferingidexternalcourseid) - Add course mapping

### [CourseMetadata](docs/coursemetadata/README.md)

* [PutCoursesContentIDMetadataCategory](docs/coursemetadata/README.md#putcoursescontentidmetadatacategory) - Update course category
* [PutCoursesContentIDMetadataLevel](docs/coursemetadata/README.md#putcoursescontentidmetadatalevel) - Update course level
* [PutCoursesContentIDMetadataTags](docs/coursemetadata/README.md#putcoursescontentidmetadatatags) - Update course tags
* [PutCoursesContentIDMetadataTopic](docs/coursemetadata/README.md#putcoursescontentidmetadatatopic) - Update course topic

### [Courses](docs/courses/README.md)

* [GetCourses](docs/courses/README.md#getcourses) - Find courses
* [GetCoursesContentID](docs/courses/README.md#getcoursescontentid) - Find course by contentId
* [GetCoursesContentIDActivations](docs/courses/README.md#getcoursescontentidactivations) - Find activations for a contentId
* [GetCoursesContentIDPermissions](docs/courses/README.md#getcoursescontentidpermissions) - Find users who have access to the contentId provided
* [PostCoursesRootContentIDPermissionsUserEmail](docs/courses/README.md#postcoursesrootcontentidpermissionsuseremail) - Update course access

### [LearnerActivity](docs/learneractivity/README.md)

* [GetOfferingsOfferingIDAnalyticsLearnersProgress](docs/learneractivity/README.md#getofferingsofferingidanalyticslearnersprogress) - Find learner progress in a specified offering
* [GetOfferingsOfferingIDAnalyticsSocialNotes](docs/learneractivity/README.md#getofferingsofferingidanalyticssocialnotes) - Find shared social notes in an offering
* [GetOfferingsOfferingIDAnalyticsUnitReactions](docs/learneractivity/README.md#getofferingsofferingidanalyticsunitreactions) - Find unit reactions
* [GetUsersUserEmailOfferingsOfferingIDProgress](docs/learneractivity/README.md#getusersuseremailofferingsofferingidprogress) - Find learner's progress in a specified offering
* [GetUsersUserEmailProgress](docs/learneractivity/README.md#getusersuseremailprogress) - Find learner's progress in offerings

### [OfferingLearners](docs/offeringlearners/README.md)

* [DeleteOfferingsOfferingIDUsersMarkerEmailMarks](docs/offeringlearners/README.md#deleteofferingsofferingidusersmarkeremailmarks) - Remove learners from coach's marking list
* [DeleteOfferingsOfferingIDUsersUserEmail](docs/offeringlearners/README.md#deleteofferingsofferingidusersuseremail) - Removes user from the offering
* [GetOfferingsOfferingIDUsers](docs/offeringlearners/README.md#getofferingsofferingidusers) - Find offering's users
* [GetOfferingsOfferingIDUsersMarkerEmailMarks](docs/offeringlearners/README.md#getofferingsofferingidusersmarkeremailmarks) - Find Learners marked by a coach
* [PatchUsersUserEmailTransfer](docs/offeringlearners/README.md#patchusersuseremailtransfer) - Transfer a user between offerings
* [PostOfferingsOfferingIDUsers](docs/offeringlearners/README.md#postofferingsofferingidusers) - Adds user to the offering
* [PostOfferingsOfferingIDUsersMarkerEmailMarks](docs/offeringlearners/README.md#postofferingsofferingidusersmarkeremailmarks) - Add learners to be marked by a coach

### [OfferingMetadata](docs/offeringmetadata/README.md)

* [PutOfferingsOfferingIDMetadataCategory](docs/offeringmetadata/README.md#putofferingsofferingidmetadatacategory) - Update offering category metadata
* [PutOfferingsOfferingIDMetadataLevel](docs/offeringmetadata/README.md#putofferingsofferingidmetadatalevel) - Update offering level metadata
* [PutOfferingsOfferingIDMetadataTags](docs/offeringmetadata/README.md#putofferingsofferingidmetadatatags) - Update offering tags metadata
* [PutOfferingsOfferingIDMetadataTopic](docs/offeringmetadata/README.md#putofferingsofferingidmetadatatopic) - Update offering topic metadata

### [Offerings](docs/offerings/README.md)

* [GetOfferings](docs/offerings/README.md#getofferings) - Find current, past and future offerings
* [GetOfferingsCurrent](docs/offerings/README.md#getofferingscurrent) - Find active offerings
* [GetOfferingsFuture](docs/offerings/README.md#getofferingsfuture) - Find scheduled offerings
* [GetOfferingsInfoTextPattern](docs/offerings/README.md#getofferingsinfotextpattern) - Find offerings where info field matches the specified textPattern
* [GetOfferingsPast](docs/offerings/README.md#getofferingspast) - Find past offerings
* [GetOfferingsOfferingID](docs/offerings/README.md#getofferingsofferingid) - Find offering by ID
* [PatchOfferingsOfferingID](docs/offerings/README.md#patchofferingsofferingid) - Update offering
* [PostOfferings](docs/offerings/README.md#postofferings) - Create offering

### [Organisation](docs/organisation/README.md)

* [GetOrg](docs/organisation/README.md#getorg) - Gets the current organisation

### [Pulses](docs/pulses/README.md)

* [GetOfferingsOfferingIDAnalyticsPulses](docs/pulses/README.md#getofferingsofferingidanalyticspulses) - Find all pulse IDs in the specified offering
* [GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponses](docs/pulses/README.md#getofferingsofferingidanalyticspulsespulseidresponses) - Find pulses by offeringId and pulseId

### [UsersInIQualify](docs/usersiniqualify/README.md)

* [GetUsersUserEmail](docs/usersiniqualify/README.md#getusersuseremail) - Find user by email
* [GetUsersUserEmailOfferings](docs/usersiniqualify/README.md#getusersuseremailofferings) - Find user's offerings
* [PatchUsersUserEmail](docs/usersiniqualify/README.md#patchusersuseremail) - Update user
* [PostUsers](docs/usersiniqualify/README.md#postusers) - Add new user
* [PostUsersUserEmailInviteEmail](docs/usersiniqualify/README.md#postusersuseremailinviteemail) - Resend invitation email
* [PostUsersUserEmailOfferings](docs/usersiniqualify/README.md#postusersuseremailofferings) - Adds the user to the specified offerings as a learner
* [PostUsersUserEmailPermissionsPermissionName](docs/usersiniqualify/README.md#postusersuseremailpermissionspermissionname) - Add permission to user
* [PutUsersUserEmailSuspend](docs/usersiniqualify/README.md#putusersuseremailsuspend) - Suspend user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
