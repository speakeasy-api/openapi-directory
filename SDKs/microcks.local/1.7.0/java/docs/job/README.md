# job

## Overview

Operations related to Jobs for discovering mocks and tests

### Available Operations

* [activateImportJob](#activateimportjob) - Activate an ImportJob
* [createImportJob](#createimportjob) - Create ImportJob
* [deleteImportJob](#deleteimportjob) - Delete ImportJob
* [getImportJobCounter](#getimportjobcounter) - Get the ImportJobs counter
* [getImportJobs](#getimportjobs) - Get ImportJobs
* [startImportJob](#startimportjob) - Start an ImportJob
* [stopImportJob](#stopimportjob) - Stop an ImportJob
* [getJobsId](#getjobsid) - Get ImportJob
* [postJobsId](#postjobsid) - Update ImportJob
* [uploadArtifact](#uploadartifact) - Upload an artifact

## activateImportJob

Make an ImportJob active, so that it is executed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateImportJobRequest;
import org.openapis.openapi.models.operations.ActivateImportJobResponse;
import org.openapis.openapi.models.operations.ActivateImportJobSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivateImportJobRequest req = new ActivateImportJobRequest("modi");            

            ActivateImportJobResponse res = sdk.job.activateImportJob(req, new ActivateImportJobSecurity("qui") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.importJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImportJob

Create a new ImportJob

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImportJobResponse;
import org.openapis.openapi.models.operations.CreateImportJobSecurity;
import org.openapis.openapi.models.shared.ImportJob;
import org.openapis.openapi.models.shared.Metadata;
import org.openapis.openapi.models.shared.SecretRef;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceRef;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ImportJob req = new ImportJob("impedit", "cum") {{
                active = false;
                createdDate = OffsetDateTime.parse("2022-10-13T23:01:07.168Z");
                etag = "excepturi";
                frequency = "aspernatur";
                id = "05929396-fea7-4596-ab10-faaa2352c595";
                lastImportDate = OffsetDateTime.parse("2022-06-06T21:04:34.044Z");
                lastImportError = "accusantium";
                mainArtifact = false;
                metadata = new Metadata(438601L, 634274L) {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("sapiente", "architecto");
                        put("mollitia", "dolorem");
                        put("culpa", "consequuntur");
                        put("repellat", "mollitia");
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("numquam", "commodi");
                        put("quam", "molestiae");
                        put("velit", "error");
                    }};
                }};;
                repositoryDisableSSLValidation = false;
                secretRef = new SecretRef("quia", "quis");;
                serviceRefs = new org.openapis.openapi.models.shared.ServiceRef[]{{
                    add(new ServiceRef("ipsam", "id", "possimus") {{
                        name = "Matt Hamill";
                        serviceId = "sequi";
                        version = "tenetur";
                    }}),
                }};
            }};            

            CreateImportJobResponse res = sdk.job.createImportJob(req, new CreateImportJobSecurity("aut") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.importJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteImportJob

Delete an ImportJob

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImportJobRequest;
import org.openapis.openapi.models.operations.DeleteImportJobResponse;
import org.openapis.openapi.models.operations.DeleteImportJobSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteImportJobRequest req = new DeleteImportJobRequest("quasi");            

            DeleteImportJobResponse res = sdk.job.deleteImportJob(req, new DeleteImportJobSecurity("error") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImportJobCounter

Get the ImportJobs counter

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImportJobCounterResponse;
import org.openapis.openapi.models.operations.GetImportJobCounterSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImportJobCounterResponse res = sdk.job.getImportJobCounter(new GetImportJobCounterSecurity("temporibus") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.counter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImportJobs

Retrieve a list of ImportJobs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImportJobsRequest;
import org.openapis.openapi.models.operations.GetImportJobsResponse;
import org.openapis.openapi.models.operations.GetImportJobsSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImportJobsRequest req = new GetImportJobsRequest() {{
                name = "Ryan Witting";
                page = 468651L;
                size = 509624L;
            }};            

            GetImportJobsResponse res = sdk.job.getImportJobs(req, new GetImportJobsSecurity("voluptatibus") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.importJobs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startImportJob

Starting an ImportJob forces it to immediatly import mock definitions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartImportJobRequest;
import org.openapis.openapi.models.operations.StartImportJobResponse;
import org.openapis.openapi.models.operations.StartImportJobSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StartImportJobRequest req = new StartImportJobRequest("ipsa");            

            StartImportJobResponse res = sdk.job.startImportJob(req, new StartImportJobSecurity("omnis") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.importJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopImportJob

Stopping an ImportJob desactivate it, so that it won't execute at next schedule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopImportJobRequest;
import org.openapis.openapi.models.operations.StopImportJobResponse;
import org.openapis.openapi.models.operations.StopImportJobSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopImportJobRequest req = new StopImportJobRequest("voluptate");            

            StopImportJobResponse res = sdk.job.stopImportJob(req, new StopImportJobSecurity("cum") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.importJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJobsId

Retrieve an ImportJob using its identifier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobsIdRequest;
import org.openapis.openapi.models.operations.GetJobsIdResponse;
import org.openapis.openapi.models.operations.GetJobsIdSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJobsIdRequest req = new GetJobsIdRequest("perferendis");            

            GetJobsIdResponse res = sdk.job.getJobsId(req, new GetJobsIdSecurity("doloremque") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.importJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postJobsId

Update an ImportJob

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostJobsIdRequest;
import org.openapis.openapi.models.operations.PostJobsIdResponse;
import org.openapis.openapi.models.shared.ImportJob;
import org.openapis.openapi.models.shared.Metadata;
import org.openapis.openapi.models.shared.SecretRef;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceRef;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostJobsIdRequest req = new PostJobsIdRequest(                new ImportJob("ut", "maiores") {{
                                active = false;
                                createdDate = OffsetDateTime.parse("2022-08-22T19:15:58.586Z");
                                etag = "dolore";
                                frequency = "iusto";
                                id = "1b5e6e13-b99d-4488-a1e9-1e450ad2abd4";
                                lastImportDate = OffsetDateTime.parse("2022-10-26T03:14:36.345Z");
                                lastImportError = "aliquid";
                                mainArtifact = false;
                                metadata = new Metadata(586513L, 552822L) {{
                                    annotations = new java.util.HashMap<String, String>() {{
                                        put("magni", "assumenda");
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("alias", "fugit");
                                        put("dolorum", "excepturi");
                                    }};
                                }};;
                                repositoryDisableSSLValidation = false;
                                secretRef = new SecretRef("tempora", "facilis");;
                                serviceRefs = new org.openapis.openapi.models.shared.ServiceRef[]{{
                                    add(new ServiceRef("provident", "necessitatibus", "sint") {{
                                        name = "Lucia Kemmer";
                                        serviceId = "sint";
                                        version = "aliquid";
                                    }}),
                                    add(new ServiceRef("illum", "maiores", "rerum") {{
                                        name = "Curtis Toy";
                                        serviceId = "in";
                                        version = "in";
                                    }}),
                                    add(new ServiceRef("accusamus", "non", "occaecati") {{
                                        name = "Valerie Runolfsson";
                                        serviceId = "aliquid";
                                        version = "laborum";
                                    }}),
                                }};
                            }};, "enim");            

            PostJobsIdResponse res = sdk.job.postJobsId(req);

            if (res.importJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadArtifact

Uploads an artifact to be imported by Microcks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadArtifactRequest;
import org.openapis.openapi.models.operations.UploadArtifactResponse;
import org.openapis.openapi.models.operations.UploadArtifactSecurity;
import org.openapis.openapi.models.shared.ArtifactUpload;
import org.openapis.openapi.models.shared.ArtifactUploadFile;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadArtifactRequest req = new UploadArtifactRequest(                new ArtifactUpload(                new ArtifactUploadFile("accusamus".getBytes(), "delectus"););, false);            

            UploadArtifactResponse res = sdk.job.uploadArtifact(req, new UploadArtifactSecurity("quidem") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.uploadArtifact201TextPlainString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
