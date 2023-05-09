# rootJobMonitoring

## Overview

Job monitoring.

### Available Operations

* [createMonitoringSubscription](#createmonitoringsubscription) - Create an email subscription to the job monitoring page
* [deleteMonitoringSubscription](#deletemonitoringsubscription) - Delete a monitoring page email subscription
* [getJobMonitoringInfo](#getjobmonitoringinfo) - Get job monitoring information
* [getJobMonitoringInfoCsvDownloadLink](#getjobmonitoringinfocsvdownloadlink) - Download job monitoring information as a CSV file
* [getMonitoringJobCountByJobState](#getmonitoringjobcountbyjobstate) - Get job monitoring summary information separated by job state
* [getMonitoringJobCountByJobType](#getmonitoringjobcountbyjobtype) - Get job monitoring summary information separated by job type
* [getMonitoringSubscription](#getmonitoringsubscription) - Get a specific monitoring email subscription by id
* [getMonitoringSubscriptions](#getmonitoringsubscriptions) - Returns all email subscriptions for the monitoring page
* [updateMonitoringSubscription](#updatemonitoringsubscription) - Update a monitoring email subscription

## createMonitoringSubscription

Creates an email subscription to the job monitoring page, which provides information on jobs based on their type (active, in progress, canceled, scheduled, or succeeded). Users can choose which job states to include in the subscription. The email summarizes the job counts by type in the body, and includes the option to include CSV attachments for every job state selected.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMonitoringSubscriptionResponse;
import org.openapis.openapi.models.shared.JobMonitoringStateEnum;
import org.openapis.openapi.models.shared.MonitoringEmailSubscriptionRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubscriptionAttachmentTypeEnum;
import org.openapis.openapi.models.shared.SubscriptionScheduleTimeAttributes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("vero", "consectetur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.MonitoringEmailSubscriptionRequest req = new MonitoringEmailSubscriptionRequest(                new org.openapis.openapi.models.shared.SubscriptionAttachmentTypeEnum[]{{
                                add(SubscriptionAttachmentTypeEnum.CSV),
                            }},                 new String[]{{
                                add("dolorem"),
                            }},                 new org.openapis.openapi.models.shared.JobMonitoringStateEnum[]{{
                                add(JobMonitoringStateEnum.FAILURE),
                                add(JobMonitoringStateEnum.ACTIVE),
                            }},                 new SubscriptionScheduleTimeAttributes() {{
                                dailyScheduleHour = 403026;
                                dayOfMonth = 367626;
                                daysOfWeek = new Integer[]{{
                                    add(726227),
                                    add(526907),
                                    add(678060),
                                }};
                                monthlyScheduleHour = 487676;
                                weeklyScheduleHour = 144691;
                            }};);            

            CreateMonitoringSubscriptionResponse res = sdk.rootJobMonitoring.createMonitoringSubscription(req);

            if (res.monitoringSubscriptionSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMonitoringSubscription

Deletes the specified monitoring page email subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMonitoringSubscriptionRequest;
import org.openapis.openapi.models.operations.DeleteMonitoringSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("alias", "magni") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteMonitoringSubscriptionRequest req = new DeleteMonitoringSubscriptionRequest("vel");            

            DeleteMonitoringSubscriptionResponse res = sdk.rootJobMonitoring.deleteMonitoringSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJobMonitoringInfo

Get the job summary for protection and recovery jobs that are currently running, scheduled to run, or completed in the past 24 hours.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobMonitoringInfoJobTypeEnum;
import org.openapis.openapi.models.operations.GetJobMonitoringInfoObjectTypeEnum;
import org.openapis.openapi.models.operations.GetJobMonitoringInfoRequest;
import org.openapis.openapi.models.operations.GetJobMonitoringInfoResponse;
import org.openapis.openapi.models.operations.GetJobMonitoringInfoSortByEnum;
import org.openapis.openapi.models.operations.GetJobMonitoringInfoSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quae", "quae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetJobMonitoringInfoRequest req = new GetJobMonitoringInfoRequest() {{
                afterId = "modi";
                effectiveSlaDomainId = "neque";
                isFirstFull = false;
                isOnDemand = false;
                jobEventStatus = new String[]{{
                    add("itaque"),
                    add("et"),
                }};
                jobType = GetJobMonitoringInfoJobTypeEnum.CONVERSION;
                lastUpdateTime = OffsetDateTime.parse("2021-04-14T09:55:28.474Z");
                limit = 714376;
                nodeName = "maxime";
                objectName = "quia";
                objectType = GetJobMonitoringInfoObjectTypeEnum.HDFS;
                shouldIncludeLogRelatedJob = false;
                sortBy = GetJobMonitoringInfoSortByEnum.OBJECT_TYPE;
                sortOrder = GetJobMonitoringInfoSortOrderEnum.DESC;
            }};            

            GetJobMonitoringInfoResponse res = sdk.rootJobMonitoring.getJobMonitoringInfo(req);

            if (res.jobMonitoringResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJobMonitoringInfoCsvDownloadLink

Download the job summary for protection and recovery jobs that are currently running, scheduled to run, or completed in the past 24 hours as a CSV file. This is a synchronous operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobMonitoringInfoCsvDownloadLinkJobEventStatusEnum;
import org.openapis.openapi.models.operations.GetJobMonitoringInfoCsvDownloadLinkJobMonitoringStateEnum;
import org.openapis.openapi.models.operations.GetJobMonitoringInfoCsvDownloadLinkJobTypeEnum;
import org.openapis.openapi.models.operations.GetJobMonitoringInfoCsvDownloadLinkObjectTypeEnum;
import org.openapis.openapi.models.operations.GetJobMonitoringInfoCsvDownloadLinkRequest;
import org.openapis.openapi.models.operations.GetJobMonitoringInfoCsvDownloadLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("libero", "dicta") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetJobMonitoringInfoCsvDownloadLinkRequest req = new GetJobMonitoringInfoCsvDownloadLinkRequest(GetJobMonitoringInfoCsvDownloadLinkJobMonitoringStateEnum.ACTIVE) {{
                jobEventStatus = GetJobMonitoringInfoCsvDownloadLinkJobEventStatusEnum.CANCELED;
                jobType = GetJobMonitoringInfoCsvDownloadLinkJobTypeEnum.LOG_REPLICATION;
                objectName = "officia";
                objectType = GetJobMonitoringInfoCsvDownloadLinkObjectTypeEnum.ORACLE_DATABASE;
                shouldIncludeLogRelatedJob = false;
            }};            

            GetJobMonitoringInfoCsvDownloadLinkResponse res = sdk.rootJobMonitoring.getJobMonitoringInfoCsvDownloadLink(req);

            if (res.jobMonitoringCsvDownloadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMonitoringJobCountByJobState

Get job summary separated by job state for all running jobs, jobs that have been scheduled and jobs that are complete, for protection and recovery jobs in the past 24 hours.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMonitoringJobCountByJobStateRequest;
import org.openapis.openapi.models.operations.GetMonitoringJobCountByJobStateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("placeat", "sit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMonitoringJobCountByJobStateRequest req = new GetMonitoringJobCountByJobStateRequest() {{
                jobTypes = new String[]{{
                    add("ipsa"),
                    add("voluptates"),
                }};
            }};            

            GetMonitoringJobCountByJobStateResponse res = sdk.rootJobMonitoring.getMonitoringJobCountByJobState(req);

            if (res.jobMonitoringSummaryByState != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMonitoringJobCountByJobType

Get job summaries for protection and recovery jobs, separated by job type, that have been scheduled, are currently running, or completed in the past 24 hours.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMonitoringJobCountByJobTypeJobMonitoringStateEnum;
import org.openapis.openapi.models.operations.GetMonitoringJobCountByJobTypeRequest;
import org.openapis.openapi.models.operations.GetMonitoringJobCountByJobTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("inventore", "aperiam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMonitoringJobCountByJobTypeRequest req = new GetMonitoringJobCountByJobTypeRequest(GetMonitoringJobCountByJobTypeJobMonitoringStateEnum.SUCCESS);            

            GetMonitoringJobCountByJobTypeResponse res = sdk.rootJobMonitoring.getMonitoringJobCountByJobType(req);

            if (res.jobMonitoringSummaryByType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMonitoringSubscription

Returns a summary of the provided monitoring subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMonitoringSubscriptionRequest;
import org.openapis.openapi.models.operations.GetMonitoringSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolore", "eligendi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMonitoringSubscriptionRequest req = new GetMonitoringSubscriptionRequest("distinctio");            

            GetMonitoringSubscriptionResponse res = sdk.rootJobMonitoring.getMonitoringSubscription(req);

            if (res.monitoringSubscriptionSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMonitoringSubscriptions

Return all unarchived email subscriptions for monitoring page in a list of summaries sorted by creation time (earliest created first). Each summary contains information for each subscription -- Time attributes - when to send the email -- Email addresses - who to send the email -- Attachments - what attachments should the email include -- Job states - which job states to include in the email (Failure, Scheduled, Success, Active, Canceled). -- Id - the tring that identifies the subscription -- Status - the status of the subscription (Active, Suspended, or Unknown) -- Owner - information about the owner of the subscription -- user id - unique id used to identify the owner -- user name - human-readable name of user the time schedule to send the subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMonitoringSubscriptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptatem", "autem") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMonitoringSubscriptionsResponse res = sdk.rootJobMonitoring.getMonitoringSubscriptions();

            if (res.monitoringSubscriptionSummaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMonitoringSubscription

Updates the monitoring email subscription with the subscription ID provided.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMonitoringSubscriptionRequest;
import org.openapis.openapi.models.operations.UpdateMonitoringSubscriptionResponse;
import org.openapis.openapi.models.shared.JobMonitoringStateEnum;
import org.openapis.openapi.models.shared.MonitoringEmailSubscriptionUpdate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubscriptionAttachmentTypeEnum;
import org.openapis.openapi.models.shared.SubscriptionScheduleTimeAttributes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("esse", "dolores") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateMonitoringSubscriptionRequest req = new UpdateMonitoringSubscriptionRequest(                new MonitoringEmailSubscriptionUpdate(                new org.openapis.openapi.models.shared.SubscriptionAttachmentTypeEnum[]{{
                                                add(SubscriptionAttachmentTypeEnum.CSV),
                                                add(SubscriptionAttachmentTypeEnum.CSV),
                                                add(SubscriptionAttachmentTypeEnum.CSV),
                                                add(SubscriptionAttachmentTypeEnum.CSV),
                                            }},                 new String[]{{
                                                add("est"),
                                            }}, "facere",                 new org.openapis.openapi.models.shared.JobMonitoringStateEnum[]{{
                                                add(JobMonitoringStateEnum.SUCCESS),
                                                add(JobMonitoringStateEnum.SUCCESS),
                                                add(JobMonitoringStateEnum.CANCELED),
                                            }},                 new SubscriptionScheduleTimeAttributes() {{
                                                dailyScheduleHour = 896480;
                                                dayOfMonth = 733289;
                                                daysOfWeek = new Integer[]{{
                                                    add(409726),
                                                    add(421819),
                                                    add(373511),
                                                }};
                                                monthlyScheduleHour = 702952;
                                                weeklyScheduleHour = 515638;
                                            }};) {{
                                assumeOwnership = false;
                            }};, "corporis");            

            UpdateMonitoringSubscriptionResponse res = sdk.rootJobMonitoring.updateMonitoringSubscription(req);

            if (res.monitoringSubscriptionSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
