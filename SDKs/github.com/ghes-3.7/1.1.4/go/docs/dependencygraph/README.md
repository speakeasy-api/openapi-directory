# DependencyGraph

## Overview

Endpoints to access Dependency Graph features.

### Available Operations

* [DependencyGraphCreateRepositorySnapshot](#dependencygraphcreaterepositorysnapshot) - Create a snapshot of dependencies for a repository
* [DependencyGraphDiffRange](#dependencygraphdiffrange) - Get a diff of the dependencies between commits

## DependencyGraphCreateRepositorySnapshot

Create a new snapshot of a repository's dependencies. You must authenticate using an access token with the `repo` scope to use this endpoint for a repository that the requesting user has access to.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/dependency-graph#create-a-snapshot-of-dependencies-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DependencyGraph.DependencyGraphCreateRepositorySnapshot(ctx, operations.DependencyGraphCreateRepositorySnapshotRequest{
        Owner: "dignissimos",
        Repo: "dicta",
        Snapshot: shared.Snapshot{
            Detector: shared.SnapshotDetector{
                Name: "docker buildtime detector",
                URL: "http://example.com/docker-buildtimer-detector",
                Version: "1.0.0",
            },
            Job: shared.SnapshotJob{
                Correlator: "yourworkflowname_yourjobname",
                HTMLURL: sdk.String("http://example.com/build"),
                ID: "5622a2b0-63f6-4732-8c34-a1ab27e102a11",
            },
            Manifests: map[string]shared.Manifest{
                "natus": shared.Manifest{
                    File: &shared.ManifestFile{
                        SourceLocation: sdk.String("/src/build/package-lock.json"),
                    },
                    Metadata: map[string]interface{}{
                        "voluptatibus": "voluptas",
                    },
                    Name: "package-lock.json",
                    Resolved: map[string]shared.Dependency{
                        "aperiam": shared.Dependency{
                            Dependencies: []string{
                                "quaerat",
                                "consequuntur",
                            },
                            Metadata: map[string]interface{}{
                                "officia": "maxime",
                                "dignissimos": "officia",
                                "asperiores": "nemo",
                                "quae": "quaerat",
                            },
                            PackageURL: sdk.String("pkg:/npm/%40actions/http-client@1.0.11"),
                            Relationship: shared.DependencyRelationshipEnumDirect.ToPointer(),
                            Scope: shared.DependencyScopeEnumRuntime.ToPointer(),
                        },
                        "porro": shared.Dependency{
                            Dependencies: []string{
                                "labore",
                                "ab",
                                "adipisci",
                                "fuga",
                            },
                            Metadata: map[string]interface{}{
                                "suscipit": "velit",
                                "culpa": "est",
                                "recusandae": "totam",
                            },
                            PackageURL: sdk.String("pkg:/npm/%40actions/http-client@1.0.11"),
                            Relationship: shared.DependencyRelationshipEnumDirect.ToPointer(),
                            Scope: shared.DependencyScopeEnumRuntime.ToPointer(),
                        },
                        "fugiat": shared.Dependency{
                            Dependencies: []string{
                                "ducimus",
                                "quos",
                            },
                            Metadata: map[string]interface{}{
                                "labore": "possimus",
                                "facilis": "cum",
                            },
                            PackageURL: sdk.String("pkg:/npm/%40actions/http-client@1.0.11"),
                            Relationship: shared.DependencyRelationshipEnumDirect.ToPointer(),
                            Scope: shared.DependencyScopeEnumRuntime.ToPointer(),
                        },
                        "commodi": shared.Dependency{
                            Dependencies: []string{
                                "corporis",
                                "reiciendis",
                            },
                            Metadata: map[string]interface{}{
                                "nemo": "recusandae",
                                "aliquid": "aperiam",
                                "cum": "consectetur",
                                "in": "exercitationem",
                            },
                            PackageURL: sdk.String("pkg:/npm/%40actions/http-client@1.0.11"),
                            Relationship: shared.DependencyRelationshipEnumDirect.ToPointer(),
                            Scope: shared.DependencyScopeEnumRuntime.ToPointer(),
                        },
                    },
                },
                "earum": shared.Manifest{
                    File: &shared.ManifestFile{
                        SourceLocation: sdk.String("/src/build/package-lock.json"),
                    },
                    Metadata: map[string]interface{}{
                        "numquam": "doloribus",
                        "suscipit": "reiciendis",
                        "quidem": "saepe",
                        "necessitatibus": "dolore",
                    },
                    Name: "package-lock.json",
                    Resolved: map[string]shared.Dependency{
                        "asperiores": shared.Dependency{
                            Dependencies: []string{
                                "non",
                            },
                            Metadata: map[string]interface{}{
                                "beatae": "dignissimos",
                            },
                            PackageURL: sdk.String("pkg:/npm/%40actions/http-client@1.0.11"),
                            Relationship: shared.DependencyRelationshipEnumDirect.ToPointer(),
                            Scope: shared.DependencyScopeEnumRuntime.ToPointer(),
                        },
                    },
                },
                "a": shared.Manifest{
                    File: &shared.ManifestFile{
                        SourceLocation: sdk.String("/src/build/package-lock.json"),
                    },
                    Metadata: map[string]interface{}{
                        "consectetur": "corporis",
                        "harum": "laboriosam",
                        "ipsa": "voluptates",
                        "libero": "vitae",
                    },
                    Name: "package-lock.json",
                    Resolved: map[string]shared.Dependency{
                        "similique": shared.Dependency{
                            Dependencies: []string{
                                "aspernatur",
                                "voluptas",
                            },
                            Metadata: map[string]interface{}{
                                "voluptas": "minima",
                                "nobis": "dolorum",
                            },
                            PackageURL: sdk.String("pkg:/npm/%40actions/http-client@1.0.11"),
                            Relationship: shared.DependencyRelationshipEnumDirect.ToPointer(),
                            Scope: shared.DependencyScopeEnumRuntime.ToPointer(),
                        },
                        "adipisci": shared.Dependency{
                            Dependencies: []string{
                                "dolores",
                                "blanditiis",
                                "in",
                                "dolore",
                            },
                            Metadata: map[string]interface{}{
                                "officiis": "temporibus",
                                "ullam": "adipisci",
                            },
                            PackageURL: sdk.String("pkg:/npm/%40actions/http-client@1.0.11"),
                            Relationship: shared.DependencyRelationshipEnumDirect.ToPointer(),
                            Scope: shared.DependencyScopeEnumRuntime.ToPointer(),
                        },
                        "cum": shared.Dependency{
                            Dependencies: []string{
                                "quas",
                                "hic",
                                "nesciunt",
                            },
                            Metadata: map[string]interface{}{
                                "corrupti": "pariatur",
                                "totam": "hic",
                                "exercitationem": "nobis",
                            },
                            PackageURL: sdk.String("pkg:/npm/%40actions/http-client@1.0.11"),
                            Relationship: shared.DependencyRelationshipEnumDirect.ToPointer(),
                            Scope: shared.DependencyScopeEnumRuntime.ToPointer(),
                        },
                        "sit": shared.Dependency{
                            Dependencies: []string{
                                "sed",
                                "reiciendis",
                                "explicabo",
                            },
                            Metadata: map[string]interface{}{
                                "facilis": "voluptate",
                                "expedita": "ab",
                                "iste": "dolore",
                                "laborum": "sed",
                            },
                            PackageURL: sdk.String("pkg:/npm/%40actions/http-client@1.0.11"),
                            Relationship: shared.DependencyRelationshipEnumDirect.ToPointer(),
                            Scope: shared.DependencyScopeEnumRuntime.ToPointer(),
                        },
                    },
                },
                "in": shared.Manifest{
                    File: &shared.ManifestFile{
                        SourceLocation: sdk.String("/src/build/package-lock.json"),
                    },
                    Metadata: map[string]interface{}{
                        "quidem": "explicabo",
                        "voluptas": "unde",
                    },
                    Name: "package-lock.json",
                    Resolved: map[string]shared.Dependency{
                        "suscipit": shared.Dependency{
                            Dependencies: []string{
                                "debitis",
                                "illo",
                                "reiciendis",
                                "perferendis",
                            },
                            Metadata: map[string]interface{}{
                                "maiores": "incidunt",
                                "sed": "provident",
                                "eius": "necessitatibus",
                            },
                            PackageURL: sdk.String("pkg:/npm/%40actions/http-client@1.0.11"),
                            Relationship: shared.DependencyRelationshipEnumDirect.ToPointer(),
                            Scope: shared.DependencyScopeEnumRuntime.ToPointer(),
                        },
                    },
                },
            },
            Metadata: map[string]interface{}{
                "ea": "occaecati",
            },
            Ref: "refs/heads/main",
            Scanned: types.MustTimeFromString("2020-06-13T14:52:50-05:00"),
            Sha: "ddc951f4b1293222421f2c8df679786153acf689",
            Version: 552078,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependencyGraphCreateRepositorySnapshot201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DependencyGraphDiffRange

Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DependencyGraph.DependencyGraphDiffRange(ctx, operations.DependencyGraphDiffRangeRequest{
        Basehead: "voluptatibus",
        Name: sdk.String("Rhonda Klocko"),
        Owner: "sit",
        Repo: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependencyGraphDiff != nil {
        // handle response
    }
}
```
