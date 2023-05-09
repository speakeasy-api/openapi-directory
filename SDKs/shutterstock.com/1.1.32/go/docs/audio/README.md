# Audio

### Available Operations

* [AddTrackCollectionItems](#addtrackcollectionitems) - Add audio tracks to collections
* [CreateTrackCollection](#createtrackcollection) - Create audio collections
* [DeleteTrackCollection](#deletetrackcollection) - Delete audio collections
* [DeleteTrackCollectionItems](#deletetrackcollectionitems) - Remove audio tracks from collections
* [DownloadTracks](#downloadtracks) - Download audio tracks
* [GetTrack](#gettrack) - Get details about audio tracks
* [GetTrackCollection](#gettrackcollection) - Get the details of audio collections
* [GetTrackCollectionItems](#gettrackcollectionitems) - Get the contents of audio collections
* [GetTrackCollectionList](#gettrackcollectionlist) - List audio collections
* [GetTrackLicenseList](#gettracklicenselist) - List audio licenses
* [GetTrackList](#gettracklist) - List audio tracks
* [LicenseTrack](#licensetrack) - License audio tracks
* [ListGenres](#listgenres) - List audio genres
* [ListInstruments](#listinstruments) - List audio instruments
* [ListMoods](#listmoods) - List audio moods
* [RenameTrackCollection](#renametrackcollection) - Rename audio collections
* [SearchTracks](#searchtracks) - Search for tracks

## AddTrackCollectionItems

This endpoint adds one or more tracks to a collection by track IDs.

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
    res, err := s.Audio.AddTrackCollectionItems(ctx, operations.AddTrackCollectionItemsRequest{
        CollectionItemRequest: shared.CollectionItemRequest{
            Items: []shared.CollectionItem{
                shared.CollectionItem{
                    AddedTime: types.MustTimeFromString("2021-04-29T07:12:18.684Z"),
                    ID: "a1ffe78f-097b-4007-8f15-471b5e6e13b9",
                    MediaType: sdk.String("excepturi"),
                },
            },
        },
        ID: "d488e1e9-1e45-40ad-aabd-44269802d502",
    }, operations.AddTrackCollectionItemsSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateTrackCollection

This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Audio.CreateTrackCollection(ctx, shared.CollectionCreateRequest{
        Name: "Marshall Glover",
    }, operations.CreateTrackCollectionSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionCreateResponse != nil {
        // handle response
    }
}
```

## DeleteTrackCollection

This endpoint deletes a collection.

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
    res, err := s.Audio.DeleteTrackCollection(ctx, operations.DeleteTrackCollectionRequest{
        ID: "4f63c969-e9a3-4efa-b7df-b14cd66ae395",
    }, operations.DeleteTrackCollectionSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteTrackCollectionItems

This endpoint removes one or more tracks from a collection.

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
    res, err := s.Audio.DeleteTrackCollectionItems(ctx, operations.DeleteTrackCollectionItemsRequest{
        ID: "efb9ba88-f3a6-4699-b074-ba4469b6e214",
        ItemID: []string{
            "excepturi",
        },
    }, operations.DeleteTrackCollectionItemsSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DownloadTracks

This endpoint redownloads tracks that you have already received a license for. The download links in the response are valid for 8 hours.

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
    res, err := s.Audio.DownloadTracks(ctx, operations.DownloadTracksRequest{
        ID: "59890afa-563e-4251-afe4-c8b711e5b7fd",
    }, operations.DownloadTracksSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AudioURL != nil {
        // handle response
    }
}
```

## GetTrack

This endpoint shows information about a track, including its genres, instruments, and other attributes.

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
    res, err := s.Audio.GetTrack(ctx, operations.GetTrackRequest{
        ID: 149448,
        SearchID: sdk.String("saepe"),
        View: operations.GetTrackViewEnumFull.ToPointer(),
    }, operations.GetTrackSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Audio != nil {
        // handle response
    }
}
```

## GetTrackCollection

This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.

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
    res, err := s.Audio.GetTrackCollection(ctx, operations.GetTrackCollectionRequest{
        Embed: []GetTrackCollectionEmbedEnum{
            operations.GetTrackCollectionEmbedEnumShareCode,
        },
        ID: "8921cddc-6926-401f-b576-b0d5f0d30c5f",
        ShareCode: sdk.String("libero"),
    }, operations.GetTrackCollectionSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collection != nil {
        // handle response
    }
}
```

## GetTrackCollectionItems

This endpoint lists the IDs of tracks in a collection and the date that each was added.

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
    res, err := s.Audio.GetTrackCollectionItems(ctx, operations.GetTrackCollectionItemsRequest{
        ID: "b2587053-202c-473d-9fe9-b90c28909b3f",
        Page: sdk.Int64(934214),
        PerPage: sdk.Int64(267262),
        ShareCode: sdk.String("iste"),
        Sort: operations.GetTrackCollectionItemsSortEnumOldest.ToPointer(),
    }, operations.GetTrackCollectionItemsSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionItemDataList != nil {
        // handle response
    }
}
```

## GetTrackCollectionList

This endpoint lists your collections of audio tracks and their basic attributes.

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
    res, err := s.Audio.GetTrackCollectionList(ctx, operations.GetTrackCollectionListRequest{
        Embed: []GetTrackCollectionListEmbedEnum{
            operations.GetTrackCollectionListEmbedEnumShareURL,
            operations.GetTrackCollectionListEmbedEnumShareURL,
            operations.GetTrackCollectionListEmbedEnumShareURL,
        },
        Page: sdk.Int64(730122),
        PerPage: sdk.Int64(964490),
    }, operations.GetTrackCollectionListSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionDataList != nil {
        // handle response
    }
}
```

## GetTrackLicenseList

This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Audio.GetTrackLicenseList(ctx, operations.GetTrackLicenseListRequest{
        AudioID: sdk.String("quaerat"),
        DownloadAvailability: operations.GetTrackLicenseListDownloadAvailabilityEnumDownloadable.ToPointer(),
        EndDate: types.MustTimeFromString("2022-10-15T11:27:32.342Z"),
        License: sdk.String("dolorem"),
        Page: sdk.Int64(222443),
        PerPage: sdk.Int64(186193),
        Sort: operations.GetTrackLicenseListSortEnumNewest.ToPointer(),
        StartDate: types.MustTimeFromString("2021-04-17T07:36:26.867Z"),
        TeamHistory: sdk.Bool(false),
        Username: sdk.String("Myrtle_Klein"),
    }, operations.GetTrackLicenseListSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadHistoryDataList != nil {
        // handle response
    }
}
```

## GetTrackList

This endpoint lists information about one or more audio tracks, including the description and publication date.

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
    res, err := s.Audio.GetTrackList(ctx, operations.GetTrackListRequest{
        ID: []string{
            "dolorum",
        },
        SearchID: sdk.String("numquam"),
        View: operations.GetTrackListViewEnumMinimal.ToPointer(),
    }, operations.GetTrackListSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AudioDataList != nil {
        // handle response
    }
}
```

## LicenseTrack

This endpoint gets licenses for one or more tracks. The download links in the response are valid for 8 hours.

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
    res, err := s.Audio.LicenseTrack(ctx, operations.LicenseTrackRequest{
        LicenseAudioRequest: shared.LicenseAudioRequest{
            Audio: []shared.LicenseAudio{
                shared.LicenseAudio{
                    AudioID: "ipsa",
                    License: shared.LicenseAudioLicenseEnumPremierMusicExtended.ToPointer(),
                    SearchID: sdk.String("odio"),
                },
            },
        },
        License: operations.LicenseTrackLicenseEnumPremierMusicBasic.ToPointer(),
        SearchID: sdk.String("accusamus"),
    }, operations.LicenseTrackSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseAudioResultDataList != nil {
        // handle response
    }
}
```

## ListGenres

This endpoint returns a list of all audio genres.

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
    res, err := s.Audio.ListGenres(ctx, operations.ListGenresRequest{
        Language: sdk.String("quidem"),
    }, operations.ListGenresSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenreList != nil {
        // handle response
    }
}
```

## ListInstruments

This endpoint returns a list of all audio instruments.

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
    res, err := s.Audio.ListInstruments(ctx, operations.ListInstrumentsRequest{
        Language: sdk.String("voluptatibus"),
    }, operations.ListInstrumentsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstrumentList != nil {
        // handle response
    }
}
```

## ListMoods

This endpoint returns a list of all audio moods.

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
    res, err := s.Audio.ListMoods(ctx, operations.ListMoodsRequest{
        Language: sdk.String("voluptas"),
    }, operations.ListMoodsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoodList != nil {
        // handle response
    }
}
```

## RenameTrackCollection

This endpoint sets a new name for a collection.

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
    res, err := s.Audio.RenameTrackCollection(ctx, operations.RenameTrackCollectionRequest{
        CollectionUpdateRequest: shared.CollectionUpdateRequest{
            Name: "Dr. Craig Littel DDS",
        },
        ID: "a77a89eb-f737-4ae4-a03c-e5e6a95d8a0d",
    }, operations.RenameTrackCollectionSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SearchTracks

This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.

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
    res, err := s.Audio.SearchTracks(ctx, operations.SearchTracksRequest{
        Artists: []string{
            "tempora",
            "vel",
        },
        Bpm: sdk.Int64(798047),
        BpmFrom: sdk.Int64(885338),
        BpmTo: sdk.Int64(185636),
        Duration: sdk.Int64(679880),
        DurationFrom: sdk.Int64(952792),
        DurationTo: sdk.Int64(456130),
        Fields: sdk.String("harum"),
        Genre: []string{
            "ipsum",
            "quisquam",
        },
        Instruments: []string{
            "amet",
            "tempore",
            "accusamus",
            "numquam",
        },
        IsInstrumental: sdk.Bool(false),
        Language: sdk.String("enim"),
        Library: operations.SearchTracksLibraryEnumShutterstock.ToPointer(),
        Moods: []string{
            "totam",
            "nihil",
            "sit",
            "expedita",
        },
        Page: sdk.Int64(207470),
        PerPage: sdk.Int64(153694),
        Query: sdk.String("vel"),
        Sort: operations.SearchTracksSortEnumFreshness.ToPointer(),
        SortOrder: operations.SearchTracksSortOrderEnumAsc.ToPointer(),
        View: operations.SearchTracksViewEnumFull.ToPointer(),
        VocalDescription: sdk.String("quam"),
    }, operations.SearchTracksSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AudioSearchResults != nil {
        // handle response
    }
}
```
