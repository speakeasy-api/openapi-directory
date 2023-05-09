# podcasterAPI

## Overview

Endpoints to improve the podcast database

### Available Operations

* [deletePodcastById](#deletepodcastbyid) - Request to delete a podcast
* [submitPodcast](#submitpodcast) - Submit a podcast to Listen Notes database

## deletePodcastById

Podcast hosting services can use this endpoint to streamline the process of podcast deletion on behave of their users (podcasters). We will review the deletion request within 12 hours. If the podcast is already deleted, the "status" field in the response will be "deleted". Otherwise, the status field will be "in review". If you want to get a notification once the podcast is deleted, you can configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePodcastByIdRequest;
import org.openapis.openapi.models.operations.DeletePodcastByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePodcastByIdRequest req = new DeletePodcastByIdRequest("modi", "qui") {{
                reason = "impedit";
            }};            

            DeletePodcastByIdResponse res = sdk.podcasterAPI.deletePodcastById(req);

            if (res.deletePodcastResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitPodcast

Podcast hosting services can use this endpoint to help your users directly submit a new podcast to Listen Notes database. If the podcast doesn't exist in the database, "status" in the response will be "in review", and we'll review it within 12 hours. If the podcast exists, "status" in the response will be "found". If this submission is rejected, "status" in the response will be "rejected". You can use `POST /podcasts` to check if multiple podcasts exist in the database. If you want to get a notification once the podcast is accepted, you can either specify the "email" parameter or configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitPodcastRequest;
import org.openapis.openapi.models.operations.SubmitPodcastResponse;
import org.openapis.openapi.models.shared.SubmitPodcastForm;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubmitPodcastRequest req = new SubmitPodcastRequest(                new SubmitPodcastForm("cum") {{
                                email = "Cullen1@yahoo.com";
                            }};, "ad");            

            SubmitPodcastResponse res = sdk.podcasterAPI.submitPodcast(req);

            if (res.submitPodcastResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
