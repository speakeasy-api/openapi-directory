# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    authorization = new SchemeAuthorization() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetResponse res = sdk.apiInfo.get();

            if (res.get200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### API info

* `get` - List supported endpoints URLs

### Assessment data

* `getOfferingsOfferingIdAnalyticsActivitiesResponses` - Find open response activity attempts
* `getOfferingsOfferingIdAnalyticsMarksAssignments` - Find assessment marks
* `getOfferingsOfferingIdAnalyticsMarksQuizzes` - Find quiz marks
* `getOfferingsOfferingIdAnalyticsSubmissionsAssignments` - Find submissions to assessments, including marks if any
* `getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId` - Find submissions to a specified open response assessment, including marks if any
* `getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId` - Find a learner's submission to a specified assessment, including marks if any

### Assessment groups

* `deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail` - Remove a learner from an assessment group
* `getOfferingsOfferingIdGroups` - Find assessment groups
* `getOfferingsOfferingIdGroupsGroupIdLearners` - Find learners in an assessment group
* `postOfferingsOfferingIdGroups` - Add an assessment group
* `postOfferingsOfferingIdGroupsGroupIdLearners` - Add a learner to an assessment group

### Assessment management

* `deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId` - Remove assessment document
* `deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId` - Reset user's assessment to draft state
* `getOfferingsOfferingIdActivitiesOpenresponse` - Find offering's activities
* `getOfferingsOfferingIdAssessments` - Find offering's assessments
* `getOfferingsOfferingIdLearnersPendingSubmission` - Find learners with assessments pending x days before due date within the specified offeringId
* `getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse` - Find learner's open response assessment submissions
* `patchOfferingsOfferingIdAssessmentsAssessmentId` - Update assessment details
* `patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail` - Update the due dates for a learner's quiz attempt

### Badges

* `getOfferingsOfferingIdBadges` - Find offering badges
* `getUsersUserEmailBadges` - Find user's badges
* `postOfferingsOfferingIdUsersUserEmailBadgesAward` - Award badge

### Channels

* `deleteOfferingsOfferingIdChannelsChannelIdLearners` - Remove learners from a group channel
* `getOfferingsOfferingIdAnalyticsChannelsChannelIdComments` - Find comments
* `getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts` - Find posts
* `getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies` - Find replies
* `getOfferingsOfferingIdChannels` - Find channels
* `getOfferingsOfferingIdChannelsChannelIdLearners` - Find learners in a group channel
* `patchOfferingsOfferingIdChannelsChannelId` - Update channel
* `postOfferingsOfferingIdChannels` - Add channel
* `postOfferingsOfferingIdChannelsChannelIdLearners` - Add learners to a group channel

### Course mappings

* `deleteCourseMappingsOfferingIdExternalCourseId` - Remove course mapping
* `getCourseMappings` - Find course mappings
* `getCourseMappingsExternalcourseExternalCourseId` - Find course mappings by externalCourseId
* `getCourseMappingsOfferingId` - Find course mappings by offeringId
* `putCourseMappingsOfferingIdExternalCourseId` - Add course mapping

### Course metadata

* `putCoursesContentIdMetadataCategory` - Update course category
* `putCoursesContentIdMetadataLevel` - Update course level
* `putCoursesContentIdMetadataTags` - Update course tags
* `putCoursesContentIdMetadataTopic` - Update course topic

### Courses

* `getCourses` - Find courses
* `getCoursesContentId` - Find course by contentId
* `getCoursesContentIdActivations` - Find activations for a contentId
* `getCoursesContentIdPermissions` - Find users who have access to the contentId provided
* `postCoursesRootContentIdPermissionsUserEmail` - Update course access

### Learner activity

* `getOfferingsOfferingIdAnalyticsLearnersProgress` - Find learner progress in a specified offering
* `getOfferingsOfferingIdAnalyticsSocialNotes` - Find shared social notes in an offering
* `getOfferingsOfferingIdAnalyticsUnitReactions` - Find unit reactions
* `getUsersUserEmailOfferingsOfferingIdProgress` - Find learner's progress in a specified offering
* `getUsersUserEmailProgress` - Find learner's progress in offerings

### Offering learners

* `deleteOfferingsOfferingIdUsersMarkerEmailMarks` - Remove learners from coach's marking list
* `deleteOfferingsOfferingIdUsersUserEmail` - Removes user from the offering
* `getOfferingsOfferingIdUsers` - Find offering's users
* `getOfferingsOfferingIdUsersMarkerEmailMarks` - Find Learners marked by a coach
* `patchUsersUserEmailTransfer` - Transfer a user between offerings
* `postOfferingsOfferingIdUsers` - Adds user to the offering
* `postOfferingsOfferingIdUsersMarkerEmailMarks` - Add learners to be marked by a coach

### Offering metadata

* `putOfferingsOfferingIdMetadataCategory` - Update offering category metadata
* `putOfferingsOfferingIdMetadataLevel` - Update offering level metadata
* `putOfferingsOfferingIdMetadataTags` - Update offering tags metadata
* `putOfferingsOfferingIdMetadataTopic` - Update offering topic metadata

### Offerings

* `getOfferings` - Find current, past and future offerings
* `getOfferingsCurrent` - Find active offerings
* `getOfferingsFuture` - Find scheduled offerings
* `getOfferingsInfoTextPattern` - Find offerings where info field matches the specified textPattern
* `getOfferingsPast` - Find past offerings
* `getOfferingsOfferingId` - Find offering by ID
* `patchOfferingsOfferingId` - Update offering
* `postOfferings` - Create offering

### Organisation

* `getOrg` - Gets the current organisation

### Pulses

* `getOfferingsOfferingIdAnalyticsPulses` - Find all pulse IDs in the specified offering
* `getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses` - Find pulses by offeringId and pulseId

### Users in iQualify

* `getUsersUserEmail` - Find user by email
* `getUsersUserEmailOfferings` - Find user's offerings
* `patchUsersUserEmail` - Update user
* `postUsers` - Add new user
* `postUsersUserEmailInviteEmail` - Resend invitation email
* `postUsersUserEmailOfferings` - Adds the user to the specified offerings as a learner
* `postUsersUserEmailPermissionsPermissionName` - Add permission to user
* `putUsersUserEmailSuspend` - Suspend user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
