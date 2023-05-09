# jobs

### Available Operations

* [deleteJobById](#deletejobbyid) - Delete Job by Id
* [getJobById](#getjobbyid) - Get Job By Id
* [getListOfJobs](#getlistofjobs) - Get List of Jobs
* [submitTranscriptionJobJson](#submittranscriptionjobjson) - Submit Transcription Job
* [submitTranscriptionJobMultipart](#submittranscriptionjobmultipart) - Submit Transcription Job

## deleteJobById

Deletes a transcription job. All data related to the job, such as input media and transcript, will be permanently deleted. A job can only be deleted once it's completed (either with success or failure).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteJobByIdRequest;
import org.openapis.openapi.models.operations.DeleteJobByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    accessToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteJobByIdRequest req = new DeleteJobByIdRequest("illum");            

            DeleteJobByIdResponse res = sdk.jobs.deleteJobById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJobById

Returns information about a transcription job

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobByIdRequest;
import org.openapis.openapi.models.operations.GetJobByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    accessToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetJobByIdRequest req = new GetJobByIdRequest("error");            

            GetJobByIdResponse res = sdk.jobs.getJobById(req);

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListOfJobs

Gets a list of transcription jobs submitted within the last 30 days in reverse chronological order up to the provided `limit` number of jobs per call. **Note:** Jobs older than 30 days will not be listed. Pagination is supported via passing the last job `id` from a previous call into `starting_after`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListOfJobsRequest;
import org.openapis.openapi.models.operations.GetListOfJobsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    accessToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetListOfJobsRequest req = new GetListOfJobsRequest() {{
                limit = 384382L;
                startingAfter = "iure";
            }};            

            GetListOfJobsResponse res = sdk.jobs.getListOfJobs(req);

            if (res.jobs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitTranscriptionJobJson

Starts an asynchronous job to transcribe speech-to-text for a media file. Media files can be specified in two ways, either by including a public url to the media in the transcription job `options` or by uploading a local file as part of a multipart/form request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitTranscriptionJobJsonResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubmitJobMediaUrlOptions;
import org.openapis.openapi.models.shared.SubmitJobMediaUrlOptionsCustomVocabularies;
import org.openapis.openapi.models.shared.SubmitJobMediaUrlOptionsLanguageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    accessToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SubmitJobMediaUrlOptions req = new SubmitJobMediaUrlOptions("https://www.rev.ai/FTC_Sample_1.mp3") {{
                callbackUrl = "https://www.example.com/callback";
                customVocabularies = new org.openapis.openapi.models.shared.SubmitJobMediaUrlOptionsCustomVocabularies[]{{
                    add(new SubmitJobMediaUrlOptionsCustomVocabularies(                new String[]{{
                                        add("suscipit"),
                                        add("molestiae"),
                                    }}) {{
                        phrases = new String[]{{
                            add("delectus"),
                        }};
                    }}),
                    add(new SubmitJobMediaUrlOptionsCustomVocabularies(                new String[]{{
                                        add("recusandae"),
                                        add("temporibus"),
                                    }}) {{
                        phrases = new String[]{{
                            add("placeat"),
                            add("voluptatum"),
                            add("iusto"),
                            add("excepturi"),
                        }};
                    }}),
                    add(new SubmitJobMediaUrlOptionsCustomVocabularies(                new String[]{{
                                        add("deserunt"),
                                    }}) {{
                        phrases = new String[]{{
                            add("quis"),
                        }};
                    }}),
                    add(new SubmitJobMediaUrlOptionsCustomVocabularies(                new String[]{{
                                        add("sapiente"),
                                        add("quo"),
                                        add("odit"),
                                        add("at"),
                                    }}) {{
                        phrases = new String[]{{
                            add("ipsam"),
                        }};
                    }}),
                }};
                customVocabularyId = "cvgnDwmB6iXevn";
                deleteAfterSeconds = 50L;
                filterProfanity = true;
                language = SubmitJobMediaUrlOptionsLanguageEnum.EN;
                metadata = "sample metadata";
                removeDisfluencies = true;
                skipDiarization = true;
                skipPunctuation = true;
                speakerChannelsCount = 2L;
            }};            

            SubmitTranscriptionJobJsonResponse res = sdk.jobs.submitTranscriptionJobJson(req);

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitTranscriptionJobMultipart

Starts an asynchronous job to transcribe speech-to-text for a media file. Media files can be specified in two ways, either by including a public url to the media in the transcription job `options` or by uploading a local file as part of a multipart/form request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitTranscriptionJobMultipartFormData;
import org.openapis.openapi.models.operations.SubmitTranscriptionJobMultipartFormDataMedia;
import org.openapis.openapi.models.operations.SubmitTranscriptionJobMultipartResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    accessToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            SubmitTranscriptionJobMultipartFormData req = new SubmitTranscriptionJobMultipartFormData() {{
                media = new SubmitTranscriptionJobMultipartFormDataMedia("maiores".getBytes(), "molestiae");;
                options = "quod";
            }};            

            SubmitTranscriptionJobMultipartResponse res = sdk.jobs.submitTranscriptionJobMultipart(req);

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
