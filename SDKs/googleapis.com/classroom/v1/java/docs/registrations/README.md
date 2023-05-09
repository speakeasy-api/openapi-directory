# registrations

### Available Operations

* [classroomRegistrationsCreate](#classroomregistrationscreate) - Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the `expiry_time` or `id` fields will be ignored. While Classroom may validate the `cloudPubSubTopic` and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it. This method may return the following error codes: * `PERMISSION_DENIED` if: * the authenticated user does not have permission to receive notifications from the requested field; or * the current user has not granted access to the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a Request Errors is returned. * another access error is encountered. * `INVALID_ARGUMENT` if: * no `cloudPubsubTopic` is specified, or the specified `cloudPubsubTopic` is not valid; or * no `feed` is specified, or the specified `feed` is not valid. * `NOT_FOUND` if: * the specified `feed` cannot be located, or the requesting user does not have permission to determine whether or not it exists; or * the specified `cloudPubsubTopic` cannot be located, or Classroom has not been granted permission to publish to it.
* [classroomRegistrationsDelete](#classroomregistrationsdelete) - Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.

## classroomRegistrationsCreate

Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the `expiry_time` or `id` fields will be ignored. While Classroom may validate the `cloudPubSubTopic` and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it. This method may return the following error codes: * `PERMISSION_DENIED` if: * the authenticated user does not have permission to receive notifications from the requested field; or * the current user has not granted access to the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a Request Errors is returned. * another access error is encountered. * `INVALID_ARGUMENT` if: * no `cloudPubsubTopic` is specified, or the specified `cloudPubsubTopic` is not valid; or * no `feed` is specified, or the specified `feed` is not valid. * `NOT_FOUND` if: * the specified `feed` cannot be located, or the requesting user does not have permission to determine whether or not it exists; or * the specified `cloudPubsubTopic` cannot be located, or Classroom has not been granted permission to publish to it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomRegistrationsCreateRequest;
import org.openapis.openapi.models.operations.ClassroomRegistrationsCreateResponse;
import org.openapis.openapi.models.operations.ClassroomRegistrationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudPubsubTopic;
import org.openapis.openapi.models.shared.CourseRosterChangesInfo;
import org.openapis.openapi.models.shared.CourseWorkChangesInfo;
import org.openapis.openapi.models.shared.Feed;
import org.openapis.openapi.models.shared.FeedFeedTypeEnum;
import org.openapis.openapi.models.shared.Registration;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomRegistrationsCreateRequest req = new ClassroomRegistrationsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                registration = new Registration() {{
                    cloudPubsubTopic = new CloudPubsubTopic() {{
                        topicName = "quod";
                    }};;
                    expiryTime = "repudiandae";
                    feed = new Feed() {{
                        courseRosterChangesInfo = new CourseRosterChangesInfo() {{
                            courseId = "eaque";
                        }};;
                        courseWorkChangesInfo = new CourseWorkChangesInfo() {{
                            courseId = "consectetur";
                        }};;
                        feedType = FeedFeedTypeEnum.DOMAIN_ROSTER_CHANGES;
                    }};;
                    registrationId = "vitae";
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "quos";
                key = "minus";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "reprehenderit";
                uploadProtocol = "reprehenderit";
            }};            

            ClassroomRegistrationsCreateResponse res = sdk.registrations.classroomRegistrationsCreate(req, new ClassroomRegistrationsCreateSecurity("animi", "consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.registration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomRegistrationsDelete

Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomRegistrationsDeleteRequest;
import org.openapis.openapi.models.operations.ClassroomRegistrationsDeleteResponse;
import org.openapis.openapi.models.operations.ClassroomRegistrationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomRegistrationsDeleteRequest req = new ClassroomRegistrationsDeleteRequest("voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "ipsum";
                key = "laboriosam";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "voluptatum";
                uploadProtocol = "debitis";
            }};            

            ClassroomRegistrationsDeleteResponse res = sdk.registrations.classroomRegistrationsDelete(req, new ClassroomRegistrationsDeleteSecurity("a", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
