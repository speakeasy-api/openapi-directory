# projects

### Available Operations

* [scriptProjectsCreate](#scriptprojectscreate) - Creates a new, empty script project with no script files and a base manifest file.
* [scriptProjectsDeploymentsCreate](#scriptprojectsdeploymentscreate) - Creates a deployment of an Apps Script project.
* [scriptProjectsDeploymentsDelete](#scriptprojectsdeploymentsdelete) - Deletes a deployment of an Apps Script project.
* [scriptProjectsDeploymentsGet](#scriptprojectsdeploymentsget) - Gets a deployment of an Apps Script project.
* [scriptProjectsDeploymentsList](#scriptprojectsdeploymentslist) - Lists the deployments of an Apps Script project.
* [scriptProjectsDeploymentsUpdate](#scriptprojectsdeploymentsupdate) - Updates a deployment of an Apps Script project.
* [scriptProjectsGet](#scriptprojectsget) - Gets a script project's metadata.
* [scriptProjectsGetContent](#scriptprojectsgetcontent) - Gets the content of the script project, including the code source and metadata for each script file.
* [scriptProjectsGetMetrics](#scriptprojectsgetmetrics) - Get metrics data for scripts, such as number of executions and active users.
* [scriptProjectsUpdateContent](#scriptprojectsupdatecontent) - Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
* [scriptProjectsVersionsCreate](#scriptprojectsversionscreate) - Creates a new immutable version using the current code, with a unique version number.
* [scriptProjectsVersionsGet](#scriptprojectsversionsget) - Gets a version of a script project.
* [scriptProjectsVersionsList](#scriptprojectsversionslist) - List the versions of a script project.

## scriptProjectsCreate

Creates a new, empty script project with no script files and a base manifest file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProjectsCreateRequest;
import org.openapis.openapi.models.operations.ScriptProjectsCreateResponse;
import org.openapis.openapi.models.operations.ScriptProjectsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreateProjectRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProjectsCreateRequest req = new ScriptProjectsCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                createProjectRequest = new CreateProjectRequest() {{
                    parentId = "omnis";
                    title = "Mrs.";
                }};;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "iure";
                key = "culpa";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "architecto";
                uploadProtocol = "mollitia";
            }};            

            ScriptProjectsCreateResponse res = sdk.projects.scriptProjectsCreate(req, new ScriptProjectsCreateSecurity("dolorem", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scriptProjectsDeploymentsCreate

Creates a deployment of an Apps Script project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsCreateRequest;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsCreateResponse;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeploymentConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProjectsDeploymentsCreateRequest req = new ScriptProjectsDeploymentsCreateRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                deploymentConfig = new DeploymentConfig() {{
                    description = "mollitia";
                    manifestFileName = "occaecati";
                    scriptId = "numquam";
                    versionNumber = 414369;
                }};;
                accessToken = "quam";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "error";
                key = "quia";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "laborum";
                uploadProtocol = "animi";
            }};            

            ScriptProjectsDeploymentsCreateResponse res = sdk.projects.scriptProjectsDeploymentsCreate(req, new ScriptProjectsDeploymentsCreateSecurity("enim", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scriptProjectsDeploymentsDelete

Deletes a deployment of an Apps Script project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsDeleteRequest;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsDeleteResponse;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProjectsDeploymentsDeleteRequest req = new ScriptProjectsDeploymentsDeleteRequest("quo", "sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "aut";
                key = "quasi";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "laborum";
                uploadProtocol = "quasi";
            }};            

            ScriptProjectsDeploymentsDeleteResponse res = sdk.projects.scriptProjectsDeploymentsDelete(req, new ScriptProjectsDeploymentsDeleteSecurity("reiciendis", "voluptatibus") {{
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

## scriptProjectsDeploymentsGet

Gets a deployment of an Apps Script project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsGetRequest;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsGetResponse;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsGetSecurity;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsGetSecurityOption1;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProjectsDeploymentsGetRequest req = new ScriptProjectsDeploymentsGetRequest("vero", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "voluptate";
                key = "cum";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "reprehenderit";
                uploadProtocol = "ut";
            }};            

            ScriptProjectsDeploymentsGetResponse res = sdk.projects.scriptProjectsDeploymentsGet(req, new ScriptProjectsDeploymentsGetSecurity() {{
                option1 = new ScriptProjectsDeploymentsGetSecurityOption1("maiores", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.deployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scriptProjectsDeploymentsList

Lists the deployments of an Apps Script project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsListRequest;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsListResponse;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsListSecurity;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsListSecurityOption1;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProjectsDeploymentsListRequest req = new ScriptProjectsDeploymentsListRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "harum";
                fields = "enim";
                key = "accusamus";
                oauthToken = "commodi";
                pageSize = 918236L;
                pageToken = "quae";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "quidem";
                uploadProtocol = "molestias";
            }};            

            ScriptProjectsDeploymentsListResponse res = sdk.projects.scriptProjectsDeploymentsList(req, new ScriptProjectsDeploymentsListSecurity() {{
                option1 = new ScriptProjectsDeploymentsListSecurityOption1("excepturi", "pariatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDeploymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scriptProjectsDeploymentsUpdate

Updates a deployment of an Apps Script project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsUpdateRequest;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsUpdateResponse;
import org.openapis.openapi.models.operations.ScriptProjectsDeploymentsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeploymentConfig;
import org.openapis.openapi.models.shared.UpdateDeploymentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProjectsDeploymentsUpdateRequest req = new ScriptProjectsDeploymentsUpdateRequest("modi", "praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                updateDeploymentRequest = new UpdateDeploymentRequest() {{
                    deploymentConfig = new DeploymentConfig() {{
                        description = "voluptates";
                        manifestFileName = "quasi";
                        scriptId = "repudiandae";
                        versionNumber = 575947;
                    }};;
                }};;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "enim";
                key = "consequatur";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "explicabo";
                uploadProtocol = "deserunt";
            }};            

            ScriptProjectsDeploymentsUpdateResponse res = sdk.projects.scriptProjectsDeploymentsUpdate(req, new ScriptProjectsDeploymentsUpdateSecurity("distinctio", "quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scriptProjectsGet

Gets a script project's metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProjectsGetRequest;
import org.openapis.openapi.models.operations.ScriptProjectsGetResponse;
import org.openapis.openapi.models.operations.ScriptProjectsGetSecurity;
import org.openapis.openapi.models.operations.ScriptProjectsGetSecurityOption1;
import org.openapis.openapi.models.operations.ScriptProjectsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProjectsGetRequest req = new ScriptProjectsGetRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "qui";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "quos";
                key = "perferendis";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "ipsam";
                uploadProtocol = "alias";
            }};            

            ScriptProjectsGetResponse res = sdk.projects.scriptProjectsGet(req, new ScriptProjectsGetSecurity() {{
                option1 = new ScriptProjectsGetSecurityOption1("fugit", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scriptProjectsGetContent

Gets the content of the script project, including the code source and metadata for each script file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProjectsGetContentRequest;
import org.openapis.openapi.models.operations.ScriptProjectsGetContentResponse;
import org.openapis.openapi.models.operations.ScriptProjectsGetContentSecurity;
import org.openapis.openapi.models.operations.ScriptProjectsGetContentSecurityOption1;
import org.openapis.openapi.models.operations.ScriptProjectsGetContentSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProjectsGetContentRequest req = new ScriptProjectsGetContentRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "delectus";
                key = "eum";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "sint";
                uploadProtocol = "aliquid";
                versionNumber = 592042L;
            }};            

            ScriptProjectsGetContentResponse res = sdk.projects.scriptProjectsGetContent(req, new ScriptProjectsGetContentSecurity() {{
                option1 = new ScriptProjectsGetContentSecurityOption1("necessitatibus", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.content != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scriptProjectsGetMetrics

Get metrics data for scripts, such as number of executions and active users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProjectsGetMetricsMetricsGranularityEnum;
import org.openapis.openapi.models.operations.ScriptProjectsGetMetricsRequest;
import org.openapis.openapi.models.operations.ScriptProjectsGetMetricsResponse;
import org.openapis.openapi.models.operations.ScriptProjectsGetMetricsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProjectsGetMetricsRequest req = new ScriptProjectsGetMetricsRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "in";
                key = "in";
                metricsFilterDeploymentId = "illum";
                metricsGranularity = ScriptProjectsGetMetricsMetricsGranularityEnum.DAILY;
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "magnam";
                uploadProtocol = "cumque";
            }};            

            ScriptProjectsGetMetricsResponse res = sdk.projects.scriptProjectsGetMetrics(req, new ScriptProjectsGetMetricsSecurity("facere", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.metrics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scriptProjectsUpdateContent

Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProjectsUpdateContentRequest;
import org.openapis.openapi.models.operations.ScriptProjectsUpdateContentResponse;
import org.openapis.openapi.models.operations.ScriptProjectsUpdateContentSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Content;
import org.openapis.openapi.models.shared.File;
import org.openapis.openapi.models.shared.FileTypeEnum;
import org.openapis.openapi.models.shared.GoogleAppsScriptTypeFunction;
import org.openapis.openapi.models.shared.GoogleAppsScriptTypeFunctionSet;
import org.openapis.openapi.models.shared.GoogleAppsScriptTypeUser;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProjectsUpdateContentRequest req = new ScriptProjectsUpdateContentRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                content = new Content() {{
                    files = new org.openapis.openapi.models.shared.File[]{{
                        add(new File() {{
                            createTime = "non";
                            functionSet = new GoogleAppsScriptTypeFunctionSet() {{
                                values = new org.openapis.openapi.models.shared.GoogleAppsScriptTypeFunction[]{{
                                    add(new GoogleAppsScriptTypeFunction() {{
                                        name = "Sophia Wintheiser";
                                        parameters = new String[]{{
                                            add("id"),
                                            add("blanditiis"),
                                            add("deleniti"),
                                        }};
                                    }}),
                                    add(new GoogleAppsScriptTypeFunction() {{
                                        name = "Vincent Nolan";
                                        parameters = new String[]{{
                                            add("omnis"),
                                            add("molestiae"),
                                            add("perferendis"),
                                        }};
                                    }}),
                                    add(new GoogleAppsScriptTypeFunction() {{
                                        name = "Megan Rau";
                                        parameters = new String[]{{
                                            add("suscipit"),
                                            add("natus"),
                                        }};
                                    }}),
                                }};
                            }};
                            lastModifyUser = new GoogleAppsScriptTypeUser() {{
                                domain = "nobis";
                                email = "Shaina29@yahoo.com";
                                name = "Miriam Hermann";
                                photoUrl = "sint";
                            }};
                            name = "Angie Wisozk";
                            source = "eum";
                            type = FileTypeEnum.ENUM_TYPE_UNSPECIFIED;
                            updateTime = "necessitatibus";
                        }}),
                        add(new File() {{
                            createTime = "odit";
                            functionSet = new GoogleAppsScriptTypeFunctionSet() {{
                                values = new org.openapis.openapi.models.shared.GoogleAppsScriptTypeFunction[]{{
                                    add(new GoogleAppsScriptTypeFunction() {{
                                        name = "Vera Wyman";
                                        parameters = new String[]{{
                                            add("deleniti"),
                                            add("facilis"),
                                            add("in"),
                                            add("architecto"),
                                        }};
                                    }}),
                                    add(new GoogleAppsScriptTypeFunction() {{
                                        name = "Elvira Herman";
                                        parameters = new String[]{{
                                            add("quibusdam"),
                                            add("sed"),
                                            add("saepe"),
                                            add("pariatur"),
                                        }};
                                    }}),
                                }};
                            }};
                            lastModifyUser = new GoogleAppsScriptTypeUser() {{
                                domain = "accusantium";
                                email = "Johan12@gmail.com";
                                name = "Gilberto Streich";
                                photoUrl = "excepturi";
                            }};
                            name = "Dr. Rosemary Bartoletti";
                            source = "ipsam";
                            type = FileTypeEnum.SERVER_JS;
                            updateTime = "autem";
                        }}),
                        add(new File() {{
                            createTime = "nam";
                            functionSet = new GoogleAppsScriptTypeFunctionSet() {{
                                values = new org.openapis.openapi.models.shared.GoogleAppsScriptTypeFunction[]{{
                                    add(new GoogleAppsScriptTypeFunction() {{
                                        name = "Dr. Herman Wolf";
                                        parameters = new String[]{{
                                            add("cumque"),
                                        }};
                                    }}),
                                }};
                            }};
                            lastModifyUser = new GoogleAppsScriptTypeUser() {{
                                domain = "corporis";
                                email = "Morgan33@hotmail.com";
                                name = "Lance Becker";
                                photoUrl = "eos";
                            }};
                            name = "Jacqueline Schimmel";
                            source = "vero";
                            type = FileTypeEnum.SERVER_JS;
                            updateTime = "hic";
                        }}),
                        add(new File() {{
                            createTime = "recusandae";
                            functionSet = new GoogleAppsScriptTypeFunctionSet() {{
                                values = new org.openapis.openapi.models.shared.GoogleAppsScriptTypeFunction[]{{
                                    add(new GoogleAppsScriptTypeFunction() {{
                                        name = "Freddie Bartoletti";
                                        parameters = new String[]{{
                                            add("error"),
                                            add("eaque"),
                                            add("occaecati"),
                                        }};
                                    }}),
                                    add(new GoogleAppsScriptTypeFunction() {{
                                        name = "Travis Zemlak";
                                        parameters = new String[]{{
                                            add("dolorum"),
                                            add("deleniti"),
                                            add("pariatur"),
                                        }};
                                    }}),
                                    add(new GoogleAppsScriptTypeFunction() {{
                                        name = "Loren Renner";
                                        parameters = new String[]{{
                                            add("aliquid"),
                                            add("dolorem"),
                                            add("dolorem"),
                                        }};
                                    }}),
                                }};
                            }};
                            lastModifyUser = new GoogleAppsScriptTypeUser() {{
                                domain = "dolor";
                                email = "Dagmar_Welch@gmail.com";
                                name = "Marian Wisozk";
                                photoUrl = "numquam";
                            }};
                            name = "Melissa Bednar";
                            source = "quaerat";
                            type = FileTypeEnum.JSON;
                            updateTime = "quidem";
                        }}),
                    }};
                    scriptId = "voluptatibus";
                }};;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "eos";
                fields = "atque";
                key = "sit";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "soluta";
                uploadProtocol = "dolorum";
            }};            

            ScriptProjectsUpdateContentResponse res = sdk.projects.scriptProjectsUpdateContent(req, new ScriptProjectsUpdateContentSecurity("iusto", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.content != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scriptProjectsVersionsCreate

Creates a new immutable version using the current code, with a unique version number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProjectsVersionsCreateRequest;
import org.openapis.openapi.models.operations.ScriptProjectsVersionsCreateResponse;
import org.openapis.openapi.models.operations.ScriptProjectsVersionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Version;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProjectsVersionsCreateRequest req = new ScriptProjectsVersionsCreateRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                version = new Version() {{
                    createTime = "omnis";
                    description = "necessitatibus";
                    scriptId = "distinctio";
                    versionNumber = 990339;
                }};;
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "voluptate";
                fields = "id";
                key = "saepe";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "perferendis";
                uploadProtocol = "amet";
            }};            

            ScriptProjectsVersionsCreateResponse res = sdk.projects.scriptProjectsVersionsCreate(req, new ScriptProjectsVersionsCreateSecurity("optio", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.version != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scriptProjectsVersionsGet

Gets a version of a script project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProjectsVersionsGetRequest;
import org.openapis.openapi.models.operations.ScriptProjectsVersionsGetResponse;
import org.openapis.openapi.models.operations.ScriptProjectsVersionsGetSecurity;
import org.openapis.openapi.models.operations.ScriptProjectsVersionsGetSecurityOption1;
import org.openapis.openapi.models.operations.ScriptProjectsVersionsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProjectsVersionsGetRequest req = new ScriptProjectsVersionsGetRequest("ad", 904425L) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "repellendus";
                key = "totam";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "at";
                uploadProtocol = "quaerat";
            }};            

            ScriptProjectsVersionsGetResponse res = sdk.projects.scriptProjectsVersionsGet(req, new ScriptProjectsVersionsGetSecurity() {{
                option1 = new ScriptProjectsVersionsGetSecurityOption1("tempora", "vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.version != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scriptProjectsVersionsList

List the versions of a script project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProjectsVersionsListRequest;
import org.openapis.openapi.models.operations.ScriptProjectsVersionsListResponse;
import org.openapis.openapi.models.operations.ScriptProjectsVersionsListSecurity;
import org.openapis.openapi.models.operations.ScriptProjectsVersionsListSecurityOption1;
import org.openapis.openapi.models.operations.ScriptProjectsVersionsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProjectsVersionsListRequest req = new ScriptProjectsVersionsListRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "esse";
                key = "harum";
                oauthToken = "iusto";
                pageSize = 215507L;
                pageToken = "quisquam";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "amet";
                uploadProtocol = "tempore";
            }};            

            ScriptProjectsVersionsListResponse res = sdk.projects.scriptProjectsVersionsList(req, new ScriptProjectsVersionsListSecurity() {{
                option1 = new ScriptProjectsVersionsListSecurityOption1("accusamus", "numquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
