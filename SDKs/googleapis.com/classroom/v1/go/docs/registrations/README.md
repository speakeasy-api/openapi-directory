# Registrations

### Available Operations

* [ClassroomRegistrationsCreate](#classroomregistrationscreate) - Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the `expiry_time` or `id` fields will be ignored. While Classroom may validate the `cloudPubSubTopic` and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it. This method may return the following error codes: * `PERMISSION_DENIED` if: * the authenticated user does not have permission to receive notifications from the requested field; or * the current user has not granted access to the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a Request Errors is returned. * another access error is encountered. * `INVALID_ARGUMENT` if: * no `cloudPubsubTopic` is specified, or the specified `cloudPubsubTopic` is not valid; or * no `feed` is specified, or the specified `feed` is not valid. * `NOT_FOUND` if: * the specified `feed` cannot be located, or the requesting user does not have permission to determine whether or not it exists; or * the specified `cloudPubsubTopic` cannot be located, or Classroom has not been granted permission to publish to it.
* [ClassroomRegistrationsDelete](#classroomregistrationsdelete) - Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.

## ClassroomRegistrationsCreate

Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the `expiry_time` or `id` fields will be ignored. While Classroom may validate the `cloudPubSubTopic` and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it. This method may return the following error codes: * `PERMISSION_DENIED` if: * the authenticated user does not have permission to receive notifications from the requested field; or * the current user has not granted access to the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a Request Errors is returned. * another access error is encountered. * `INVALID_ARGUMENT` if: * no `cloudPubsubTopic` is specified, or the specified `cloudPubsubTopic` is not valid; or * no `feed` is specified, or the specified `feed` is not valid. * `NOT_FOUND` if: * the specified `feed` cannot be located, or the requesting user does not have permission to determine whether or not it exists; or * the specified `cloudPubsubTopic` cannot be located, or Classroom has not been granted permission to publish to it.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Registrations.ClassroomRegistrationsCreate(ctx, operations.ClassroomRegistrationsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Registration: &shared.Registration{
            CloudPubsubTopic: &shared.CloudPubsubTopic{
                TopicName: sdk.String("magni"),
            },
            ExpiryTime: sdk.String("animi"),
            Feed: &shared.Feed{
                CourseRosterChangesInfo: &shared.CourseRosterChangesInfo{
                    CourseID: sdk.String("dolorum"),
                },
                CourseWorkChangesInfo: &shared.CourseWorkChangesInfo{
                    CourseID: sdk.String("voluptas"),
                },
                FeedType: shared.FeedFeedTypeEnumCourseWorkChanges.ToPointer(),
            },
            RegistrationID: sdk.String("porro"),
        },
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("autem"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("magni"),
        OauthToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.ClassroomRegistrationsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Registration != nil {
        // handle response
    }
}
```

## ClassroomRegistrationsDelete

Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Registrations.ClassroomRegistrationsDelete(ctx, operations.ClassroomRegistrationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        RegistrationID: "laboriosam",
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.ClassroomRegistrationsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
