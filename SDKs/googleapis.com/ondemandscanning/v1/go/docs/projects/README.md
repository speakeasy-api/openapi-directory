# Projects

### Available Operations

* [OndemandscanningProjectsLocationsOperationsCancel](#ondemandscanningprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [OndemandscanningProjectsLocationsOperationsDelete](#ondemandscanningprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [OndemandscanningProjectsLocationsOperationsGet](#ondemandscanningprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [OndemandscanningProjectsLocationsOperationsList](#ondemandscanningprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [OndemandscanningProjectsLocationsOperationsWait](#ondemandscanningprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [OndemandscanningProjectsLocationsScansAnalyzePackages](#ondemandscanningprojectslocationsscansanalyzepackages) - Initiates an analysis of the provided packages.
* [OndemandscanningProjectsLocationsScansVulnerabilitiesList](#ondemandscanningprojectslocationsscansvulnerabilitieslist) - Lists vulnerabilities resulting from a successfully completed scan.

## OndemandscanningProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

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
    res, err := s.Projects.OndemandscanningProjectsLocationsOperationsCancel(ctx, operations.OndemandscanningProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        Name: "Ken Kshlerin",
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    }, operations.OndemandscanningProjectsLocationsOperationsCancelSecurity{
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

## OndemandscanningProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

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
    res, err := s.Projects.OndemandscanningProjectsLocationsOperationsDelete(ctx, operations.OndemandscanningProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("sapiente"),
        Name: "Fred Strosin",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("esse"),
    }, operations.OndemandscanningProjectsLocationsOperationsDeleteSecurity{
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

## OndemandscanningProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.OndemandscanningProjectsLocationsOperationsGet(ctx, operations.OndemandscanningProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("nam"),
        Key: sdk.String("officia"),
        Name: "Wayne Lind",
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.OndemandscanningProjectsLocationsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## OndemandscanningProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Projects.OndemandscanningProjectsLocationsOperationsList(ctx, operations.OndemandscanningProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("esse"),
        Filter: sdk.String("ipsum"),
        Key: sdk.String("excepturi"),
        Name: "Dorothy Hane",
        OauthToken: sdk.String("iste"),
        PageSize: sdk.Int64(222321),
        PageToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.OndemandscanningProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## OndemandscanningProjectsLocationsOperationsWait

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

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
    res, err := s.Projects.OndemandscanningProjectsLocationsOperationsWait(ctx, operations.OndemandscanningProjectsLocationsOperationsWaitRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("iure"),
        Key: sdk.String("saepe"),
        Name: "Roger Beier",
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        Timeout: sdk.String("dolores"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.OndemandscanningProjectsLocationsOperationsWaitSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## OndemandscanningProjectsLocationsScansAnalyzePackages

Initiates an analysis of the provided packages.

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
    res, err := s.Projects.OndemandscanningProjectsLocationsScansAnalyzePackages(ctx, operations.OndemandscanningProjectsLocationsScansAnalyzePackagesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AnalyzePackagesRequestV1: &shared.AnalyzePackagesRequestV1{
            IncludeOsvData: sdk.Bool(false),
            Packages: []shared.PackageData{
                shared.PackageData{
                    Architecture: sdk.String("enim"),
                    BinaryVersion: &shared.PackageVersion{
                        Name: sdk.String("Corey Hane III"),
                        Version: sdk.String("culpa"),
                    },
                    CpeURI: sdk.String("doloribus"),
                    DependencyChain: []shared.LanguagePackageDependency{
                        shared.LanguagePackageDependency{
                            Package: sdk.String("architecto"),
                            Version: sdk.String("mollitia"),
                        },
                        shared.LanguagePackageDependency{
                            Package: sdk.String("dolorem"),
                            Version: sdk.String("culpa"),
                        },
                        shared.LanguagePackageDependency{
                            Package: sdk.String("consequuntur"),
                            Version: sdk.String("repellat"),
                        },
                        shared.LanguagePackageDependency{
                            Package: sdk.String("mollitia"),
                            Version: sdk.String("occaecati"),
                        },
                    },
                    FileLocation: []shared.FileLocation{
                        shared.FileLocation{
                            FilePath: sdk.String("commodi"),
                        },
                        shared.FileLocation{
                            FilePath: sdk.String("quam"),
                        },
                    },
                    HashDigest: sdk.String("molestiae"),
                    Maintainer: &shared.Maintainer{
                        Kind: sdk.String("velit"),
                        Name: sdk.String("Miss Eugene Hauck"),
                    },
                    Os: sdk.String("enim"),
                    OsVersion: sdk.String("odit"),
                    Package: sdk.String("quo"),
                    PackageType: shared.PackageDataPackageTypeEnumOs.ToPointer(),
                    PatchedCve: []string{
                        "ipsam",
                        "id",
                        "possimus",
                        "aut",
                    },
                    SourceVersion: &shared.PackageVersion{
                        Name: sdk.String("Sabrina Smitham DVM"),
                        Version: sdk.String("voluptatibus"),
                    },
                    Unused: sdk.String("vero"),
                    Version: sdk.String("nihil"),
                },
                shared.PackageData{
                    Architecture: sdk.String("praesentium"),
                    BinaryVersion: &shared.PackageVersion{
                        Name: sdk.String("Jose Moen"),
                        Version: sdk.String("perferendis"),
                    },
                    CpeURI: sdk.String("doloremque"),
                    DependencyChain: []shared.LanguagePackageDependency{
                        shared.LanguagePackageDependency{
                            Package: sdk.String("ut"),
                            Version: sdk.String("maiores"),
                        },
                        shared.LanguagePackageDependency{
                            Package: sdk.String("dicta"),
                            Version: sdk.String("corporis"),
                        },
                    },
                    FileLocation: []shared.FileLocation{
                        shared.FileLocation{
                            FilePath: sdk.String("iusto"),
                        },
                        shared.FileLocation{
                            FilePath: sdk.String("dicta"),
                        },
                    },
                    HashDigest: sdk.String("harum"),
                    Maintainer: &shared.Maintainer{
                        Kind: sdk.String("enim"),
                        Name: sdk.String("Mrs. Leslie VonRueden"),
                    },
                    Os: sdk.String("molestias"),
                    OsVersion: sdk.String("excepturi"),
                    Package: sdk.String("pariatur"),
                    PackageType: shared.PackageDataPackageTypeEnumOs.ToPointer(),
                    PatchedCve: []string{
                        "rem",
                        "voluptates",
                        "quasi",
                    },
                    SourceVersion: &shared.PackageVersion{
                        Name: sdk.String("Kirk Boehm"),
                        Version: sdk.String("enim"),
                    },
                    Unused: sdk.String("consequatur"),
                    Version: sdk.String("est"),
                },
                shared.PackageData{
                    Architecture: sdk.String("quibusdam"),
                    BinaryVersion: &shared.PackageVersion{
                        Name: sdk.String("Joanna Rau"),
                        Version: sdk.String("modi"),
                    },
                    CpeURI: sdk.String("qui"),
                    DependencyChain: []shared.LanguagePackageDependency{
                        shared.LanguagePackageDependency{
                            Package: sdk.String("cupiditate"),
                            Version: sdk.String("quos"),
                        },
                        shared.LanguagePackageDependency{
                            Package: sdk.String("perferendis"),
                            Version: sdk.String("magni"),
                        },
                    },
                    FileLocation: []shared.FileLocation{
                        shared.FileLocation{
                            FilePath: sdk.String("ipsam"),
                        },
                        shared.FileLocation{
                            FilePath: sdk.String("alias"),
                        },
                        shared.FileLocation{
                            FilePath: sdk.String("fugit"),
                        },
                        shared.FileLocation{
                            FilePath: sdk.String("dolorum"),
                        },
                    },
                    HashDigest: sdk.String("excepturi"),
                    Maintainer: &shared.Maintainer{
                        Kind: sdk.String("tempora"),
                        Name: sdk.String("Geoffrey Green"),
                    },
                    Os: sdk.String("non"),
                    OsVersion: sdk.String("eligendi"),
                    Package: sdk.String("sint"),
                    PackageType: shared.PackageDataPackageTypeEnumMaven.ToPointer(),
                    PatchedCve: []string{
                        "necessitatibus",
                        "sint",
                        "officia",
                    },
                    SourceVersion: &shared.PackageVersion{
                        Name: sdk.String("Raquel Wilderman"),
                        Version: sdk.String("in"),
                    },
                    Unused: sdk.String("illum"),
                    Version: sdk.String("maiores"),
                },
                shared.PackageData{
                    Architecture: sdk.String("rerum"),
                    BinaryVersion: &shared.PackageVersion{
                        Name: sdk.String("Valerie Runolfsson"),
                        Version: sdk.String("aliquid"),
                    },
                    CpeURI: sdk.String("laborum"),
                    DependencyChain: []shared.LanguagePackageDependency{
                        shared.LanguagePackageDependency{
                            Package: sdk.String("non"),
                            Version: sdk.String("occaecati"),
                        },
                        shared.LanguagePackageDependency{
                            Package: sdk.String("enim"),
                            Version: sdk.String("accusamus"),
                        },
                        shared.LanguagePackageDependency{
                            Package: sdk.String("delectus"),
                            Version: sdk.String("quidem"),
                        },
                        shared.LanguagePackageDependency{
                            Package: sdk.String("provident"),
                            Version: sdk.String("nam"),
                        },
                    },
                    FileLocation: []shared.FileLocation{
                        shared.FileLocation{
                            FilePath: sdk.String("blanditiis"),
                        },
                        shared.FileLocation{
                            FilePath: sdk.String("deleniti"),
                        },
                        shared.FileLocation{
                            FilePath: sdk.String("sapiente"),
                        },
                    },
                    HashDigest: sdk.String("amet"),
                    Maintainer: &shared.Maintainer{
                        Kind: sdk.String("deserunt"),
                        Name: sdk.String("Wilma Mosciski"),
                    },
                    Os: sdk.String("perferendis"),
                    OsVersion: sdk.String("nihil"),
                    Package: sdk.String("magnam"),
                    PackageType: shared.PackageDataPackageTypeEnumPypi.ToPointer(),
                    PatchedCve: []string{
                        "labore",
                        "labore",
                        "suscipit",
                    },
                    SourceVersion: &shared.PackageVersion{
                        Name: sdk.String("Robin Keebler"),
                        Version: sdk.String("architecto"),
                    },
                    Unused: sdk.String("magnam"),
                    Version: sdk.String("et"),
                },
            },
            ResourceURI: sdk.String("excepturi"),
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("sint"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("mollitia"),
        Parent: "reiciendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("eum"),
    }, operations.OndemandscanningProjectsLocationsScansAnalyzePackagesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## OndemandscanningProjectsLocationsScansVulnerabilitiesList

Lists vulnerabilities resulting from a successfully completed scan.

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
    res, err := s.Projects.OndemandscanningProjectsLocationsScansVulnerabilitiesList(ctx, operations.OndemandscanningProjectsLocationsScansVulnerabilitiesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("doloribus"),
        PageSize: sdk.Int64(891924),
        PageToken: sdk.String("eius"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("in"),
    }, operations.OndemandscanningProjectsLocationsScansVulnerabilitiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVulnerabilitiesResponseV1 != nil {
        // handle response
    }
}
```
