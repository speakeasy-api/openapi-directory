# DependencyGraph

## Overview

Endpoints to access Dependency Graph features.

### Available Operations

* [DependencyGraphDiffRange](#dependencygraphdiffrange) - Get a diff of the dependencies between commits

## DependencyGraphDiffRange

Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits>

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
        Basehead: "quibusdam",
        Name: sdk.String("Cassandra Ward V"),
        Owner: "tenetur",
        Repo: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependencyGraphDiff != nil {
        // handle response
    }
}
```
