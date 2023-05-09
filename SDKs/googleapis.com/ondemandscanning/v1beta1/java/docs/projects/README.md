# projects

### Available Operations

* [ondemandscanningProjectsLocationsOperationsCancel](#ondemandscanningprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ondemandscanningProjectsLocationsOperationsDelete](#ondemandscanningprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [ondemandscanningProjectsLocationsOperationsGet](#ondemandscanningprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [ondemandscanningProjectsLocationsOperationsList](#ondemandscanningprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [ondemandscanningProjectsLocationsOperationsWait](#ondemandscanningprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [ondemandscanningProjectsLocationsScansAnalyzePackages](#ondemandscanningprojectslocationsscansanalyzepackages) - Initiates an analysis of the provided packages.
* [ondemandscanningProjectsLocationsScansVulnerabilitiesList](#ondemandscanningprojectslocationsscansvulnerabilitieslist) - Lists vulnerabilities resulting from a successfully completed scan.

## ondemandscanningProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OndemandscanningProjectsLocationsOperationsCancelRequest req = new OndemandscanningProjectsLocationsOperationsCancelRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            OndemandscanningProjectsLocationsOperationsCancelResponse res = sdk.projects.ondemandscanningProjectsLocationsOperationsCancel(req, new OndemandscanningProjectsLocationsOperationsCancelSecurity("excepturi", "nisi") {{
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

## ondemandscanningProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OndemandscanningProjectsLocationsOperationsDeleteRequest req = new OndemandscanningProjectsLocationsOperationsDeleteRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "sapiente";
                uploadProtocol = "quo";
            }};            

            OndemandscanningProjectsLocationsOperationsDeleteResponse res = sdk.projects.ondemandscanningProjectsLocationsOperationsDelete(req, new OndemandscanningProjectsLocationsOperationsDeleteSecurity("odit", "at") {{
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

## ondemandscanningProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OndemandscanningProjectsLocationsOperationsGetRequest req = new OndemandscanningProjectsLocationsOperationsGetRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "esse";
                key = "totam";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "dicta";
                uploadProtocol = "nam";
            }};            

            OndemandscanningProjectsLocationsOperationsGetResponse res = sdk.projects.ondemandscanningProjectsLocationsOperationsGet(req, new OndemandscanningProjectsLocationsOperationsGetSecurity("officia", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ondemandscanningProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OndemandscanningProjectsLocationsOperationsListRequest req = new OndemandscanningProjectsLocationsOperationsListRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "beatae";
                filter = "commodi";
                key = "molestiae";
                oauthToken = "modi";
                pageSize = 186332L;
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "esse";
                uploadProtocol = "ipsum";
            }};            

            OndemandscanningProjectsLocationsOperationsListResponse res = sdk.projects.ondemandscanningProjectsLocationsOperationsList(req, new OndemandscanningProjectsLocationsOperationsListSecurity("excepturi", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ondemandscanningProjectsLocationsOperationsWait

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsWaitRequest;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsWaitResponse;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsWaitSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OndemandscanningProjectsLocationsOperationsWaitRequest req = new OndemandscanningProjectsLocationsOperationsWaitRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolor";
                key = "natus";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "hic";
                timeout = "saepe";
                uploadType = "fuga";
                uploadProtocol = "in";
            }};            

            OndemandscanningProjectsLocationsOperationsWaitResponse res = sdk.projects.ondemandscanningProjectsLocationsOperationsWait(req, new OndemandscanningProjectsLocationsOperationsWaitSecurity("corporis", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ondemandscanningProjectsLocationsScansAnalyzePackages

Initiates an analysis of the provided packages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsScansAnalyzePackagesRequest;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsScansAnalyzePackagesResponse;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsScansAnalyzePackagesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AnalyzePackagesRequest;
import org.openapis.openapi.models.shared.FileLocation;
import org.openapis.openapi.models.shared.LanguagePackageDependency;
import org.openapis.openapi.models.shared.Maintainer;
import org.openapis.openapi.models.shared.PackageData;
import org.openapis.openapi.models.shared.PackageDataPackageTypeEnum;
import org.openapis.openapi.models.shared.PackageVersion;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OndemandscanningProjectsLocationsScansAnalyzePackagesRequest req = new OndemandscanningProjectsLocationsScansAnalyzePackagesRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                analyzePackagesRequest = new AnalyzePackagesRequest() {{
                    packages = new org.openapis.openapi.models.shared.PackageData[]{{
                        add(new PackageData() {{
                            architecture = "architecto";
                            binaryVersion = new PackageVersion() {{
                                name = "Lela Orn";
                                version = "dolores";
                            }};
                            cpeUri = "dolorem";
                            dependencyChain = new org.openapis.openapi.models.shared.LanguagePackageDependency[]{{
                                add(new LanguagePackageDependency() {{
                                    package_ = "explicabo";
                                    version = "nobis";
                                }}),
                                add(new LanguagePackageDependency() {{
                                    package_ = "enim";
                                    version = "omnis";
                                }}),
                            }};
                            fileLocation = new org.openapis.openapi.models.shared.FileLocation[]{{
                                add(new FileLocation() {{
                                    filePath = "minima";
                                }}),
                                add(new FileLocation() {{
                                    filePath = "excepturi";
                                }}),
                            }};
                            hashDigest = "accusantium";
                            maintainer = new Maintainer() {{
                                kind = "iure";
                                name = "Miss Aubrey Williamson";
                            }};
                            os = "culpa";
                            osVersion = "consequuntur";
                            package_ = "repellat";
                            packageType = PackageDataPackageTypeEnum.GO_STDLIB;
                            patchedCve = new String[]{{
                                add("numquam"),
                                add("commodi"),
                                add("quam"),
                            }};
                            sourceVersion = new PackageVersion() {{
                                name = "Shannon Mueller";
                                version = "vitae";
                            }};
                            unused = "laborum";
                            version = "animi";
                        }}),
                        add(new PackageData() {{
                            architecture = "enim";
                            binaryVersion = new PackageVersion() {{
                                name = "Angelica Dietrich";
                                version = "id";
                            }};
                            cpeUri = "possimus";
                            dependencyChain = new org.openapis.openapi.models.shared.LanguagePackageDependency[]{{
                                add(new LanguagePackageDependency() {{
                                    package_ = "quasi";
                                    version = "error";
                                }}),
                            }};
                            fileLocation = new org.openapis.openapi.models.shared.FileLocation[]{{
                                add(new FileLocation() {{
                                    filePath = "laborum";
                                }}),
                                add(new FileLocation() {{
                                    filePath = "quasi";
                                }}),
                                add(new FileLocation() {{
                                    filePath = "reiciendis";
                                }}),
                                add(new FileLocation() {{
                                    filePath = "voluptatibus";
                                }}),
                            }};
                            hashDigest = "vero";
                            maintainer = new Maintainer() {{
                                kind = "nihil";
                                name = "Jan Bednar";
                            }};
                            os = "cum";
                            osVersion = "perferendis";
                            package_ = "doloremque";
                            packageType = PackageDataPackageTypeEnum.GO;
                            patchedCve = new String[]{{
                                add("maiores"),
                                add("dicta"),
                            }};
                            sourceVersion = new PackageVersion() {{
                                name = "Miss Valerie Kshlerin";
                                version = "accusamus";
                            }};
                            unused = "commodi";
                            version = "repudiandae";
                        }}),
                        add(new PackageData() {{
                            architecture = "quae";
                            binaryVersion = new PackageVersion() {{
                                name = "Alison Mann";
                                version = "modi";
                            }};
                            cpeUri = "praesentium";
                            dependencyChain = new org.openapis.openapi.models.shared.LanguagePackageDependency[]{{
                                add(new LanguagePackageDependency() {{
                                    package_ = "voluptates";
                                    version = "quasi";
                                }}),
                                add(new LanguagePackageDependency() {{
                                    package_ = "repudiandae";
                                    version = "sint";
                                }}),
                                add(new LanguagePackageDependency() {{
                                    package_ = "veritatis";
                                    version = "itaque";
                                }}),
                            }};
                            fileLocation = new org.openapis.openapi.models.shared.FileLocation[]{{
                                add(new FileLocation() {{
                                    filePath = "enim";
                                }}),
                                add(new FileLocation() {{
                                    filePath = "consequatur";
                                }}),
                            }};
                            hashDigest = "est";
                            maintainer = new Maintainer() {{
                                kind = "quibusdam";
                                name = "Joanna Rau";
                            }};
                            os = "modi";
                            osVersion = "qui";
                            package_ = "aliquid";
                            packageType = PackageDataPackageTypeEnum.GO_STDLIB;
                            patchedCve = new String[]{{
                                add("perferendis"),
                                add("magni"),
                                add("assumenda"),
                            }};
                            sourceVersion = new PackageVersion() {{
                                name = "Linda Corkery";
                                version = "tempora";
                            }};
                            unused = "facilis";
                            version = "tempore";
                        }}),
                    }};
                    resourceUri = "labore";
                }};;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "eligendi";
                key = "sint";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "necessitatibus";
                uploadProtocol = "sint";
            }};            

            OndemandscanningProjectsLocationsScansAnalyzePackagesResponse res = sdk.projects.ondemandscanningProjectsLocationsScansAnalyzePackages(req, new OndemandscanningProjectsLocationsScansAnalyzePackagesSecurity("officia", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ondemandscanningProjectsLocationsScansVulnerabilitiesList

Lists vulnerabilities resulting from a successfully completed scan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsScansVulnerabilitiesListRequest;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsScansVulnerabilitiesListResponse;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsScansVulnerabilitiesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OndemandscanningProjectsLocationsScansVulnerabilitiesListRequest req = new OndemandscanningProjectsLocationsScansVulnerabilitiesListRequest("debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "illum";
                key = "maiores";
                oauthToken = "rerum";
                pageSize = 116202L;
                pageToken = "magnam";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "facere";
                uploadProtocol = "ea";
            }};            

            OndemandscanningProjectsLocationsScansVulnerabilitiesListResponse res = sdk.projects.ondemandscanningProjectsLocationsScansVulnerabilitiesList(req, new OndemandscanningProjectsLocationsScansVulnerabilitiesListSecurity("aliquid", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listVulnerabilitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
