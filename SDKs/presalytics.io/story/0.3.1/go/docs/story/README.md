# Story

## Overview

Story

### Available Operations

* [StoryGet](#storyget) - Story: Get List of User Stories
* [StoryIDAnalytics](#storyidanalytics) - Story: View Analytics
* [StoryIDDelete](#storyiddelete) - Story: Delete by Id
* [StoryIDFileOoxmlautomationidDelete](#storyidfileooxmlautomationiddelete) - Story: Delete Subdocument
* [StoryIDFileOoxmlautomationidGet](#storyidfileooxmlautomationidget) - Story: Download Updated File
* [StoryIDFilePost](#storyidfilepost) - Story: Upload a File To Existing Story
* [StoryIDGet](#storyidget) - Story: Get by Id
* [StoryIDOutlineGet](#storyidoutlineget) - Story: Get Story Outline
* [StoryIDOutlinePost](#storyidoutlinepost) - Story: Post Story Outline
* [StoryIDPublic](#storyidpublic) - Story: Public Link to Story Reveal.js Document
* [StoryIDPut](#storyidput) - Story: Modify
* [StoryIDReveal](#storyidreveal) - Story: Get Story at Reveal.js Document
* [StoryIDStatusGet](#storyidstatusget) - Story: Get Story Status
* [StoryPost](#storypost) - Story: Upload
* [StoryPostFile](#storypostfile) - Story: Upload a File
* [StoryPostFileJSON](#storypostfilejson) - Story: Upload a File (base64)

## StoryGet

Returns a list of stories for this user identifie via the access token presentated to the api

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
    res, err := s.Story.StoryGet(ctx, operations.StoryGetRequest{
        IncludeOutline: sdk.Bool(false),
        IncludeRelationships: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Stories != nil {
        // handle response
    }
}
```

## StoryIDAnalytics

returns an html document containing session and event metrics for the story

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
    res, err := s.Story.StoryIDAnalytics(ctx, operations.StoryIDAnalyticsRequest{
        ID: "1a8422bb-679d-4232-a715-bf0cbb1e31b8",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RevealJsPresenationWithAnalyticsData != nil {
        // handle response
    }
}
```

## StoryIDDelete

Remove a story and dependant data.

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
    res, err := s.Story.StoryIDDelete(ctx, operations.StoryIDDeleteRequest{
        ID: "b90f3443-a110-48e0-adcf-4b921879fce9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StoryIDFileOoxmlautomationidDelete

Deletes a subdcoument of this story (e.g., .pptx, .docx, .xlsx)

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
    res, err := s.Story.StoryIDFileOoxmlautomationidDelete(ctx, operations.StoryIDFileOoxmlautomationidDeleteRequest{
        ID: "53f73ef7-fbc7-4abd-b4dd-39c0f5d2cff7",
        OoxmlAutomationID: "c70a4562-6d43-4681-bf16-d9f5fce6c556",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StoryIDFileOoxmlautomationidGet

Redtreives updated story as open office xml file (e.g., .pptx, .docx, .xlsx)

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
    res, err := s.Story.StoryIDFileOoxmlautomationidGet(ctx, operations.StoryIDFileOoxmlautomationidGetRequest{
        ID: "146c3e25-0fb0-408c-82e1-41aac366c8dd",
        OoxmlAutomationID: "6b144290-7474-4778-a7bd-466d28c10ab3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PowerpointPresentation != nil {
        // handle response
    }
}
```

## StoryIDFilePost

Upload a file to an existing story

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
    res, err := s.Story.StoryIDFilePost(ctx, operations.StoryIDFilePostRequest{
        RequestBody: operations.StoryIDFilePostOpenOfficeXMLDocumentEGXlsxPptxFile{
            File: [][]byte{
                []byte("illum"),
                []byte("quo"),
                []byte("fuga"),
                []byte("eius"),
            },
        },
        ID: "251904e5-23c7-4e0b-8717-8e4796f2a70c",
        IncludeOutline: sdk.Bool(false),
        ObsoleteID: sdk.String("688282aa-4825-462f-a22e-9817ee17cbe6"),
        ReplaceExisting: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Story != nil {
        // handle response
    }
}
```

## StoryIDGet

Returns story metadata, inlcuding json object with story outline

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
    res, err := s.Story.StoryIDGet(ctx, operations.StoryIDGetRequest{
        Full: sdk.Bool(false),
        ID: "1e6b7b95-bc0a-4b3c-a0c4-f3789fd871f9",
        IncludeOutline: sdk.Bool(false),
        IncludeRelationships: sdk.Bool(false),
        RefreshCache: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Story != nil {
        // handle response
    }
}
```

## StoryIDOutlineGet

Returns Story's outline

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
    res, err := s.Story.StoryIDOutlineGet(ctx, operations.StoryIDOutlineGetRequest{
        ID: "9dd2efd1-21aa-46f1-a674-bdb04f157560",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoryIDOutlineGet200ApplicationJSONString != nil {
        // handle response
    }
}
```

## StoryIDOutlinePost

Update a story outline.

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
    res, err := s.Story.StoryIDOutlinePost(ctx, operations.StoryIDOutlinePostRequest{
        RequestBody: "voluptatum",
        ID: "2d68ea19-f1d1-4705-9339-d08086a18403",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StoryIDPublic

returns an html document containing a reveal.js epresentation of the story, if the story if set to is_public = True

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
    res, err := s.Story.StoryIDPublic(ctx, operations.StoryIDPublicRequest{
        ID: "94c26071-f93f-45f0-a42d-ac7af515cc41",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RevealJsPresenation != nil {
        // handle response
    }
}
```

## StoryIDPut

Update story metadata, including story outline

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
    res, err := s.Story.StoryIDPut(ctx, operations.StoryIDPutRequest{
        ID: "3aa63aae-8d67-4864-9bb6-75fd5e60b375",
        IncludeOutline: sdk.Bool(false),
        Story: shared.Story{
            Collaborators: []shared.StoryCollaborator{
                shared.StoryCollaborator{
                    Active: sdk.Bool(false),
                    CreatedAt: types.MustTimeFromString("2022-03-25T07:54:13.852Z"),
                    CreatedBy: sdk.String("f6fbee41-f333-417f-a35b-60eb1ea42655"),
                    Email: sdk.String("Nelle79@gmail.com"),
                    ID: sdk.String("28744ed5-3b88-4f3a-8d8f-5c0b2f2fb7b1"),
                    LeadID: sdk.Int(611749),
                    Name: sdk.String("Janie Cremin"),
                    PermissionType: &shared.PermissionType{
                        CanAddCollaborators: sdk.Bool(false),
                        CanDelete: sdk.Bool(false),
                        CanEdit: sdk.Bool(false),
                        CanView: sdk.Bool(false),
                        CreatedAt: types.MustTimeFromString("2022-09-27T03:48:38.490Z"),
                        CreatedBy: sdk.String("6916fe1f-08f4-4294-a369-8f447f603e8b"),
                        ID: sdk.String("445e80ca-55ef-4d20-a457-e1858b6a89fb"),
                        Name: sdk.String("Tony Pagac"),
                        UpdatedAt: types.MustTimeFromString("2021-11-26T16:42:33.328Z"),
                        UpdatedBy: sdk.String("e4824d0a-b407-4508-8e51-862065e904f3"),
                    },
                    PermissionTypeID: sdk.String("b1194b8a-bf60-43a7-9f9d-fe0ab7da8a50"),
                    StoryID: sdk.String("ce187f86-bc17-43d6-89ee-e9526f8d986e"),
                    UpdatedAt: types.MustTimeFromString("2021-12-01T19:00:30.130Z"),
                    UpdatedBy: sdk.String("1ead4f0e-1012-4563-b94e-29e973e922a5"),
                    UserID: sdk.String("7a15be3e-0608-407e-ab6e-3ab8845f0597"),
                },
                shared.StoryCollaborator{
                    Active: sdk.Bool(false),
                    CreatedAt: types.MustTimeFromString("2022-03-30T21:08:39.591Z"),
                    CreatedBy: sdk.String("0ff2a54a-31e9-4476-8a3e-865e7956f925"),
                    Email: sdk.String("Madonna_Heathcote@gmail.com"),
                    ID: sdk.String("da660ff5-7bfa-4ad4-b9ef-c1b4512c1032"),
                    LeadID: sdk.Int(432281),
                    Name: sdk.String("Deanna Swaniawski"),
                    PermissionType: &shared.PermissionType{
                        CanAddCollaborators: sdk.Bool(false),
                        CanDelete: sdk.Bool(false),
                        CanEdit: sdk.Bool(false),
                        CanView: sdk.Bool(false),
                        CreatedAt: types.MustTimeFromString("2021-09-13T13:26:04.826Z"),
                        CreatedBy: sdk.String("15199ebf-d0e9-4fe6-8632-ca3aed011799"),
                        ID: sdk.String("6312fde0-4771-4778-bf61-d017476360a1"),
                        Name: sdk.String("Janis Ratke"),
                        UpdatedAt: types.MustTimeFromString("2022-08-08T07:20:53.498Z"),
                        UpdatedBy: sdk.String("0659a1ad-eaab-4585-9d6c-645b08b61891"),
                    },
                    PermissionTypeID: sdk.String("baa0fe1a-de00-48e6-b8c5-f350d8cdb5a3"),
                    StoryID: sdk.String("41814301-0421-4813-9520-8ece7e253b66"),
                    UpdatedAt: types.MustTimeFromString("2022-05-25T18:20:51.968Z"),
                    UpdatedBy: sdk.String("51c6c6e2-05e1-46de-ab3f-ec9578a64584"),
                    UserID: sdk.String("273a8418-d162-4309-bb09-29921aefb9f5"),
                },
                shared.StoryCollaborator{
                    Active: sdk.Bool(false),
                    CreatedAt: types.MustTimeFromString("2021-05-25T00:50:01.296Z"),
                    CreatedBy: sdk.String("4d86e68e-4be0-4560-93f5-9da757a59ecf"),
                    Email: sdk.String("Zachariah_Jakubowski@hotmail.com"),
                    ID: sdk.String("f1caa338-3c2b-4eb4-b737-3c8d72f64d1d"),
                    LeadID: sdk.Int(726878),
                    Name: sdk.String("Camille Crist"),
                    PermissionType: &shared.PermissionType{
                        CanAddCollaborators: sdk.Bool(false),
                        CanDelete: sdk.Bool(false),
                        CanEdit: sdk.Bool(false),
                        CanView: sdk.Bool(false),
                        CreatedAt: types.MustTimeFromString("2022-12-04T11:51:15.430Z"),
                        CreatedBy: sdk.String("0661e963-49e1-4cf9-a06e-3a437000ae6b"),
                        ID: sdk.String("6bc9b8f7-59ea-4c55-a974-1d311352965b"),
                        Name: sdk.String("Wallace Pagac"),
                        UpdatedAt: types.MustTimeFromString("2022-10-31T15:56:50.300Z"),
                        UpdatedBy: sdk.String("611435e1-39db-4c22-99b1-abda8c070e10"),
                    },
                    PermissionTypeID: sdk.String("84cb0672-d1ad-4879-aeb9-665b85efbd02"),
                    StoryID: sdk.String("bae0be2d-7822-459e-bea4-b5197f92443d"),
                    UpdatedAt: types.MustTimeFromString("2022-01-06T22:02:52.629Z"),
                    UpdatedBy: sdk.String("ce52b895-c537-4c64-94ef-b0b34896c3ca"),
                    UserID: sdk.String("5acfbe2f-d570-4757-b929-177deac646ec"),
                },
                shared.StoryCollaborator{
                    Active: sdk.Bool(false),
                    CreatedAt: types.MustTimeFromString("2022-04-21T19:40:37.162Z"),
                    CreatedBy: sdk.String("73409e3e-b1e5-4a2b-92eb-07f116db9954"),
                    Email: sdk.String("Yasmin.Rosenbaum@yahoo.com"),
                    ID: sdk.String("fa88970e-189d-4bb3-8fcb-33ea055b197c"),
                    LeadID: sdk.Int(820023),
                    Name: sdk.String("Danielle Waters"),
                    PermissionType: &shared.PermissionType{
                        CanAddCollaborators: sdk.Bool(false),
                        CanDelete: sdk.Bool(false),
                        CanEdit: sdk.Bool(false),
                        CanView: sdk.Bool(false),
                        CreatedAt: types.MustTimeFromString("2022-11-01T22:41:35.458Z"),
                        CreatedBy: sdk.String("d82d3513-bb6f-448b-a56b-cdb35ff2e4b2"),
                        ID: sdk.String("7537a8cd-9e73-419c-977d-525f77b114ee"),
                        Name: sdk.String("Leo Dare"),
                        UpdatedAt: types.MustTimeFromString("2022-06-30T04:42:17.193Z"),
                        UpdatedBy: sdk.String("5fc37814-d4c9-48e0-82bb-89eb75dad636"),
                    },
                    PermissionTypeID: sdk.String("c600503d-8bb3-4118-8f73-9ae9e057eb80"),
                    StoryID: sdk.String("9e281033-1f39-481d-8c70-0b607f3c93c7"),
                    UpdatedAt: types.MustTimeFromString("2022-04-04T09:40:23.441Z"),
                    UpdatedBy: sdk.String("9da3f2ce-da7e-423f-a257-411faf4b7544"),
                    UserID: sdk.String("e472e802-857a-45b4-8463-a7d575f1400e"),
                },
            },
            CreatedAt: types.MustTimeFromString("2022-08-02T23:28:33.531Z"),
            CreatedBy: sdk.String("4ad7334e-c1b7-481b-b6a0-8088d100efad"),
            ID: sdk.String("a200ef04-22eb-4216-8cf9-ab8366c723ff"),
            IsPublic: sdk.Bool(false),
            OoxmlDocuments: []shared.OoxmlDocument{
                shared.OoxmlDocument{
                    CreatedAt: types.MustTimeFromString("2021-10-07T02:38:58.799Z"),
                    CreatedBy: sdk.String("e06bee48-25c1-4fc0-a115-c80bff918544"),
                    DeleteTargetOnStoryDelete: sdk.Bool(false),
                    ID: sdk.String("ec42defc-ce8f-4197-b773-e63562a7b408"),
                    OoxmlAutomationID: sdk.String("f05e3d48-fdaf-4313-a1f5-fd94259c0b36"),
                    StoryID: sdk.String("f25ea944-f3b7-456c-91f6-c37a51262438"),
                    UpdatedAt: types.MustTimeFromString("2022-08-26T06:53:46.257Z"),
                    UpdatedBy: sdk.String("bbc05a23-a45c-4efc-9fde-10a0ce2169e5"),
                },
                shared.OoxmlDocument{
                    CreatedAt: types.MustTimeFromString("2022-12-19T16:09:38.668Z"),
                    CreatedBy: sdk.String("019c6dc5-e347-4627-99bf-bbe6949fb2bb"),
                    DeleteTargetOnStoryDelete: sdk.Bool(false),
                    ID: sdk.String("4ecae6c3-d5db-43ad-abd5-daea4c506a8a"),
                    OoxmlAutomationID: sdk.String("a94c0264-4cf5-4e9d-9a45-78adc1ac600d"),
                    StoryID: sdk.String("ec001ac8-02e2-4ec0-9ff8-f0f816ff3477"),
                    UpdatedAt: types.MustTimeFromString("2022-09-19T07:21:23.270Z"),
                    UpdatedBy: sdk.String("3e902c14-125b-4096-8a66-8151a472af92"),
                },
                shared.OoxmlDocument{
                    CreatedAt: types.MustTimeFromString("2022-03-13T00:08:56.282Z"),
                    CreatedBy: sdk.String("5949f83f-350c-4f87-affb-901c6ecbb4e2"),
                    DeleteTargetOnStoryDelete: sdk.Bool(false),
                    ID: sdk.String("43cf789f-fafe-4da5-be5a-e6e0ac184c2b"),
                    OoxmlAutomationID: sdk.String("9c247c88-373a-440e-9942-f32e55055756"),
                    StoryID: sdk.String("f5d56d0b-d0af-42df-a13d-b4f62cba3f89"),
                    UpdatedAt: types.MustTimeFromString("2022-11-26T07:10:57.925Z"),
                    UpdatedBy: sdk.String("aebc0b80-a692-44d3-b2ec-fcc8f895010f"),
                },
                shared.OoxmlDocument{
                    CreatedAt: types.MustTimeFromString("2022-02-17T12:07:51.076Z"),
                    CreatedBy: sdk.String("d3d6fa18-04e5-44c8-af16-8a363c8873e4"),
                    DeleteTargetOnStoryDelete: sdk.Bool(false),
                    ID: sdk.String("84380b1f-6b8c-4a27-9a60-a04c495cc699"),
                    OoxmlAutomationID: sdk.String("171b51c1-bdb1-4cf4-b888-ebdfc4ccca99"),
                    StoryID: sdk.String("bc7fc0b2-dce1-4087-be42-b006d678878b"),
                    UpdatedAt: types.MustTimeFromString("2021-12-01T11:16:17.353Z"),
                    UpdatedBy: sdk.String("581a5820-8c54-4fef-a9c9-5f2eac5565d3"),
                },
            },
            Outline: sdk.String("sit"),
            OutlineHistory: []shared.StoryOutlineHistory{
                shared.StoryOutlineHistory{
                    CollaboratorUserID: sdk.String("cfee8120-6e28-413f-a4a4-1c480d3f2132"),
                    CreatedAt: types.MustTimeFromString("2021-02-11T12:50:04.175Z"),
                    CreatedBy: sdk.String("03102d51-4f4c-4c6f-98bf-9621a6a4f77a"),
                    ID: sdk.String("87ee3e4b-e752-4c65-b344-18e3bb91c8d9"),
                    Outline: sdk.String("iusto"),
                    RevisionNumber: sdk.Int64(315671),
                    StoryID: sdk.String("e0e8419d-8f84-4f14-8f3e-07edcc4aa5f3"),
                    UpdatedAt: types.MustTimeFromString("2020-12-26T16:15:07.247Z"),
                    UpdatedBy: sdk.String("bd905a97-2e05-4672-8227-b2d309470bf7"),
                },
                shared.StoryOutlineHistory{
                    CollaboratorUserID: sdk.String("a4fa87cf-535a-46fa-a54e-bf60c321f023"),
                    CreatedAt: types.MustTimeFromString("2022-02-08T20:10:51.233Z"),
                    CreatedBy: sdk.String("5d2367fe-1a0c-4c8d-b79f-0a396d90c364"),
                    ID: sdk.String("b7c15dfb-ace1-488b-9c4e-e2c8c6ce611f"),
                    Outline: sdk.String("itaque"),
                    RevisionNumber: sdk.Int64(875452),
                    StoryID: sdk.String("b1c7cbdb-6eec-4743-b8ba-25317747dc91"),
                    UpdatedAt: types.MustTimeFromString("2022-05-01T07:01:55.800Z"),
                    UpdatedBy: sdk.String("d2caf5dd-6723-4dc0-b5ae-2f3a6b700878"),
                },
            },
            Revision: sdk.Int64(474885),
            Title: sdk.String("Mrs."),
            UpdatedAt: types.MustTimeFromString("2022-12-06T23:05:29.295Z"),
            UpdatedBy: sdk.String("43f5a6c9-8b55-4554-880d-40bcacc6cbd6"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Story != nil {
        // handle response
    }
}
```

## StoryIDReveal

returns an html document containing a reveal.js epresentation of the story

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
    res, err := s.Story.StoryIDReveal(ctx, operations.StoryIDRevealRequest{
        ID: "b5f3ec90-9304-4f92-abad-2553819b474b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RevealJsPresenation != nil {
        // handle response
    }
}
```

## StoryIDStatusGet

Returns code indicating whether story has active running background and is healthy (e.g., the latest outline is valid)

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
    res, err := s.Story.StoryIDStatusGet(ctx, operations.StoryIDStatusGetRequest{
        ID: "0ed20e56-248f-4ff6-b9a9-10abdcab6267",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## StoryPost

Upload new story to presalytics api

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
    res, err := s.Story.StoryPost(ctx, operations.StoryPostRequest{
        IncludeOutline: sdk.Bool(false),
        Outline: shared.Outline{
            Outline: sdk.String("nisi"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Story != nil {
        // handle response
    }
}
```

## StoryPostFile

Upload new story to presalytics api via an Open Office Xml file

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
    res, err := s.Story.StoryPostFile(ctx, operations.StoryPostFileRequest{
        RequestBody: operations.StoryPostFileOpenOfficeXMLDocumentEGXlsxPptxFile{
            File: [][]byte{
                []byte("provident"),
                []byte("laboriosam"),
            },
        },
        IncludeOutline: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Story != nil {
        // handle response
    }
}
```

## StoryPostFileJSON

Upload new story to presalytics api via an Open Office Xml file

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
    res, err := s.Story.StoryPostFileJSON(ctx, operations.StoryPostFileJSONRequest{
        FileUpload: &shared.FileUpload{
            ContentLength: sdk.Int64(881568),
            File: sdk.String("ab"),
            FileName: sdk.String("itaque"),
            Mimetype: sdk.String("quisquam"),
        },
        IncludeOutline: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Story != nil {
        // handle response
    }
}
```
