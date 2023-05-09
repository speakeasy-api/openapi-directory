# project

### Available Operations

* [assignCM](#assigncm) - Assign a CM to the project
* [cancelProject](#cancelproject) - Cancel your translation project
* [createProjectJson](#createprojectjson) - Create a new project
* [createProjectMultipart](#createprojectmultipart) - Create a new project
* [deleteProject](#deleteproject) - Delete your translation project
* [deliverProject](#deliverproject) - Deliver project
* [download](#download) - Download your translated project
* [downloadHtmlInvoice](#downloadhtmlinvoice) - Download project invoice (HTML)
* [downloadLanguage](#downloadlanguage) - Download your translated project language
* [downloadPdfInvoice](#downloadpdfinvoice) - Download project invoice (PDF)
* [getInvoice](#getinvoice) - View project invoice
* [getProgress](#getprogress) - View progress of a project
* [getProject](#getproject) - View a translation project
* [getProjectVendors](#getprojectvendors) - Get a list of vendors.
* [getProjects](#getprojects) - View your translation projects
* [getQuoteIdFromInternalId](#getquoteidfrominternalid) - Get Quote Id
* [getVendorProjects](#getvendorprojects) - List projects as a vendor
* [getVendorProjectsByUserId](#getvendorprojectsbyuserid) - Get a list of user/vendor projects
* [launchProject](#launchproject) - Launch your translation project
* [package_](#package_) - Package your translated project
* [packageLanguage](#packagelanguage) - Package your translated project language
* [recreateProject](#recreateproject) - Recreate your translation project from scratch. This is a risky action, you will lose current translations.
* [sendQuoteEmail](#sendquoteemail) - Send a quote email
* [submitProjectReports](#submitprojectreports) - Submit feedback report for a project
* [trackPackage](#trackpackage) - Track translation packaging status
* [triggerCallback](#triggercallback) - Trigger a call to your callback URL related to this project.
* [updateProject](#updateproject) - Update project info and settings

## assignCM

Assign a CM to the project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignCMRequest;
import org.openapis.openapi.models.operations.AssignCMResponse;
import org.openapis.openapi.models.shared.Cm;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AssignCMRequest req = new AssignCMRequest(952871L) {{
                cm = new Cm() {{
                    userId = 725595L;
                }};;
            }};            

            AssignCMResponse res = sdk.project.assignCM(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelProject

If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelProjectRequest;
import org.openapis.openapi.models.operations.CancelProjectResponse;
import org.openapis.openapi.models.shared.CancelProjectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CancelProjectRequest req = new CancelProjectRequest(11427L) {{
                cancelProjectRequest = new CancelProjectRequest() {{
                    reason = "deleniti";
                }};;
            }};            

            CancelProjectResponse res = sdk.project.cancelProject(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProjectJson

Create a new translation project. Projects are not launched (you are not charged) until you `/launch` the created project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectJsonResponse;
import org.openapis.openapi.models.shared.NewProject;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.NewProject req = new NewProject() {{
                callbackUrl = "aliquam";
                couponCode = "fugit";
                custom = new String[]{{
                    add("inventore"),
                    add("non"),
                    add("et"),
                    add("dolorum"),
                }};
                documents = "laborum".getBytes();
                glossaries = "placeat".getBytes();
                sourceLanguage = "velit";
                styleguides = "eum".getBytes();
                targetLanguages = new String[]{{
                    add("nobis"),
                    add("quas"),
                }};
            }};            

            CreateProjectJsonResponse res = sdk.project.createProjectJson(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProjectMultipart

Create a new translation project. Projects are not launched (you are not charged) until you `/launch` the created project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectMultipartResponse;
import org.openapis.openapi.models.shared.NewProject1;
import org.openapis.openapi.models.shared.NewProjectDocuments;
import org.openapis.openapi.models.shared.NewProjectGlossaries;
import org.openapis.openapi.models.shared.NewProjectStyleguides;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.NewProject1 req = new NewProject1() {{
                callbackUrl = "nulla";
                couponCode = "voluptas";
                custom = new String[]{{
                    add("quasi"),
                    add("tempora"),
                    add("numquam"),
                }};
                documents = new NewProjectDocuments("explicabo".getBytes(), "provident");;
                glossaries = new NewProjectGlossaries("ipsa".getBytes(), "molestiae");;
                sourceLanguage = "magnam";
                styleguides = new NewProjectStyleguides("odio".getBytes(), "eius");;
                targetLanguages = new String[]{{
                    add("esse"),
                    add("rem"),
                }};
            }};            

            CreateProjectMultipartResponse res = sdk.project.createProjectMultipart(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProject

If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectRequest;
import org.openapis.openapi.models.operations.DeleteProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteProjectRequest req = new DeleteProjectRequest(442015L);            

            DeleteProjectResponse res = sdk.project.deleteProject(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deliverProject

Deliver project to the owner of the project. You can also download your translations in `/package` and `/download` endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeliverProjectRequest;
import org.openapis.openapi.models.operations.DeliverProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeliverProjectRequest req = new DeliverProjectRequest(852635L);            

            DeliverProjectResponse res = sdk.project.deliverProject(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## download

Download the latest translation package. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadRequest;
import org.openapis.openapi.models.operations.DownloadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DownloadRequest req = new DownloadRequest(433439L);            

            DownloadResponse res = sdk.project.download(req);

            if (res.download200ApplicationOctetStreamBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadHtmlInvoice

Download your project invoice as HTML. This is useful when you want to show your users the invoice in a webpage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadHtmlInvoiceRequest;
import org.openapis.openapi.models.operations.DownloadHtmlInvoiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DownloadHtmlInvoiceRequest req = new DownloadHtmlInvoiceRequest(826871L);            

            DownloadHtmlInvoiceResponse res = sdk.project.downloadHtmlInvoice(req);

            if (res.downloadHTMLInvoice200TextHTMLString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadLanguage

Download the latest translation package for your target language. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadLanguageRequest;
import org.openapis.openapi.models.operations.DownloadLanguageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DownloadLanguageRequest req = new DownloadLanguageRequest(509342L, "quisquam");            

            DownloadLanguageResponse res = sdk.project.downloadLanguage(req);

            if (res.downloadLanguage200ApplicationOctetStreamBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadPdfInvoice

Download your project invoice as PDF. Your invoice may be in "unpaid" status, in which case youn can see the payment instructions in the PDF file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadPdfInvoiceRequest;
import org.openapis.openapi.models.operations.DownloadPdfInvoiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DownloadPdfInvoiceRequest req = new DownloadPdfInvoiceRequest(56848L);            

            DownloadPdfInvoiceResponse res = sdk.project.downloadPdfInvoice(req);

            if (res.downloadPdfInvoice200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInvoice

View your invoice details for your translation project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInvoiceRequest;
import org.openapis.openapi.models.operations.GetInvoiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetInvoiceRequest req = new GetInvoiceRequest(696997L);            

            GetInvoiceResponse res = sdk.project.getInvoice(req);

            if (res.invoice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProgress

Monitor the translation progress of an already launched project in real-time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProgressRequest;
import org.openapis.openapi.models.operations.GetProgressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProgressRequest req = new GetProgressRequest(778696L) {{
                raw = false;
            }};            

            GetProgressResponse res = sdk.project.getProgress(req);

            if (res.progress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProject

View the details of a translation project in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectRequest;
import org.openapis.openapi.models.operations.GetProjectResponse;
import org.openapis.openapi.models.operations.GetProjectWithEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectRequest req = new GetProjectRequest(777408L) {{
                with = new org.openapis.openapi.models.operations.GetProjectWithEnum[]{{
                    add(GetProjectWithEnum.CLIENT),
                    add(GetProjectWithEnum.CLIENT),
                    add(GetProjectWithEnum.VENDOR),
                }};
            }};            

            GetProjectResponse res = sdk.project.getProject(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectVendors

Get a list of vendors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectVendorsRequest;
import org.openapis.openapi.models.operations.GetProjectVendorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectVendorsRequest req = new GetProjectVendorsRequest(587600L);            

            GetProjectVendorsResponse res = sdk.project.getProjectVendors(req);

            if (res.userList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjects

View the translation projects ordered in your account. If you have the related permission (configured by your account administrator), you can view the projects of your colleagues under the same company account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectsOrderByEnum;
import org.openapis.openapi.models.operations.GetProjectsRequest;
import org.openapis.openapi.models.operations.GetProjectsResponse;
import org.openapis.openapi.models.operations.GetProjectsWithEnum;
import org.openapis.openapi.models.shared.ListOrderTypeEnum;
import org.openapis.openapi.models.shared.ProjectStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectsRequest req = new GetProjectsRequest() {{
                orderBy = GetProjectsOrderByEnum.STATUS;
                orderType = ListOrderTypeEnum.DESC;
                page = 370853L;
                perPage = 133465L;
                status = new org.openapis.openapi.models.shared.ProjectStatusEnum[]{{
                    add(ProjectStatusEnum.TRANSLATED),
                }};
                with = new org.openapis.openapi.models.operations.GetProjectsWithEnum[]{{
                    add(GetProjectsWithEnum.VENDOR),
                    add(GetProjectsWithEnum.CLIENT),
                }};
                withCompleted = false;
                withPending = false;
                withStarted = false;
            }};            

            GetProjectsResponse res = sdk.project.getProjects(req);

            if (res.projectList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuoteIdFromInternalId

Get Quote Id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteIdFromInternalIdRequest;
import org.openapis.openapi.models.operations.GetQuoteIdFromInternalIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetQuoteIdFromInternalIdRequest req = new GetQuoteIdFromInternalIdRequest(799796L);            

            GetQuoteIdFromInternalIdResponse res = sdk.project.getQuoteIdFromInternalId(req);

            if (res.projectId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVendorProjects

Get a list of projects that are available to you to work on as a vendor. This is not a list of projects that you ordered as a customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVendorProjectsRequest;
import org.openapis.openapi.models.operations.GetVendorProjectsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetVendorProjectsRequest req = new GetVendorProjectsRequest() {{
                completed = false;
                joined = false;
                page = 76956L;
                perPage = 469498L;
            }};            

            GetVendorProjectsResponse res = sdk.project.getVendorProjects(req);

            if (res.projectList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVendorProjectsByUserId

Get a list of user/vendor projects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVendorProjectsByUserIdRequest;
import org.openapis.openapi.models.operations.GetVendorProjectsByUserIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetVendorProjectsByUserIdRequest req = new GetVendorProjectsByUserIdRequest(882710L) {{
                completed = false;
                joined = false;
                page = 306810L;
                perPage = 488410L;
            }};            

            GetVendorProjectsByUserIdResponse res = sdk.project.getVendorProjectsByUserId(req);

            if (res.projectList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## launchProject

Launch your translation project so MotaWord can actually start working on your translation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LaunchProjectRequest;
import org.openapis.openapi.models.operations.LaunchProjectResponse;
import org.openapis.openapi.models.shared.ProjectPayment;
import org.openapis.openapi.models.shared.ProjectPaymentPaymentMethodEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            LaunchProjectRequest req = new LaunchProjectRequest(414567L) {{
                projectPayment = new ProjectPayment() {{
                    bin = "sapiente";
                    budgetCode = "dolores";
                    cardId = 645570L;
                    paymentCode = "molestiae";
                    paymentMethod = ProjectPaymentPaymentMethodEnum.CORPORATE;
                    stripeToken = "porro";
                }};;
            }};            

            LaunchProjectResponse res = sdk.project.launchProject(req);

            if (res.projectLaunchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## package_

Package the translations in your project, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackageRequest;
import org.openapis.openapi.models.operations.PackageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PackageRequest req = new PackageRequest(556429L) {{
                async = 510017L;
            }};            

            PackageResponse res = sdk.project.package_(req);

            if (res.package200ApplicationOctetStreamBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## packageLanguage

Package the translations in your project for a specific target language, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project in this target language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackageLanguageRequest;
import org.openapis.openapi.models.operations.PackageLanguageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PackageLanguageRequest req = new PackageLanguageRequest(536178L, "fugit") {{
                async = 681393L;
            }};            

            PackageLanguageResponse res = sdk.project.packageLanguage(req);

            if (res.package_ != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recreateProject

Recreate your translation project from scratch. This is a risky action, you will lose current translations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecreateProjectRequest;
import org.openapis.openapi.models.operations.RecreateProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RecreateProjectRequest req = new RecreateProjectRequest(277596L);            

            RecreateProjectResponse res = sdk.project.recreateProject(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendQuoteEmail

Send a quote email

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendQuoteEmailRequest;
import org.openapis.openapi.models.operations.SendQuoteEmailResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            SendQuoteEmailRequest req = new SendQuoteEmailRequest(128860L);            

            SendQuoteEmailResponse res = sdk.project.sendQuoteEmail(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitProjectReports

Submit feedback report for a project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitProjectReportsRequest;
import org.openapis.openapi.models.operations.SubmitProjectReportsResponse;
import org.openapis.openapi.models.shared.ReportContent;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            SubmitProjectReportsRequest req = new SubmitProjectReportsRequest(392676L) {{
                reportContent = new ReportContent() {{
                    activityType = "fugit";
                    message = "sapiente";
                }};;
            }};            

            SubmitProjectReportsResponse res = sdk.project.submitProjectReports(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## trackPackage

Track the packaging status of your translations, by using the `key` from packaging request. Once packaging is completed, you can download your translations via `/download` endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrackPackageRequest;
import org.openapis.openapi.models.operations.TrackPackageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            TrackPackageRequest req = new TrackPackageRequest(187131L) {{
                key = "explicabo";
            }};            

            TrackPackageResponse res = sdk.project.trackPackage(req);

            if (res.packageStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## triggerCallback

Trigger a call to your callback URL related to this project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TriggerCallbackActionTypeEnum;
import org.openapis.openapi.models.operations.TriggerCallbackRequest;
import org.openapis.openapi.models.operations.TriggerCallbackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            TriggerCallbackRequest req = new TriggerCallbackRequest(TriggerCallbackActionTypeEnum.PROOFREAD, 543806L);            

            TriggerCallbackResponse res = sdk.project.triggerCallback(req);

            if (res.callbackResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProject

Update project info and settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectRequest;
import org.openapis.openapi.models.operations.UpdateProjectResponse;
import org.openapis.openapi.models.shared.ProjectUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateProjectRequest req = new UpdateProjectRequest(456911L) {{
                projectUpdate = new ProjectUpdate() {{
                    callbackUrl = "eveniet";
                    couponCode = "accusamus";
                    custom = new String[]{{
                        add("esse"),
                    }};
                    sourceLanguage = "quod";
                    targetLanguages = new String[]{{
                        add("vero"),
                        add("aliquid"),
                        add("quasi"),
                    }};
                }};;
            }};            

            UpdateProjectResponse res = sdk.project.updateProject(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
