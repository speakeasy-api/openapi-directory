# Edit

### Available Operations

* [GetRender](#getrender) - Get Render Status
* [PostRender](#postrender) - Render Asset

## GetRender

Get the rendering status, temporary asset url and details of a render by ID.

**base URL:** https://api.shotstack.io/{version}

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
    res, err := s.Edit.GetRender(ctx, operations.GetRenderRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    }, operations.GetRenderSecurity{
        DeveloperKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RenderResponse != nil {
        // handle response
    }
}
```

## PostRender

Queue and render the contents of a timeline as a video, image or audio file.

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
    res, err := s.Edit.PostRender(ctx, shared.Edit{
        Callback: sdk.String("https://my-server.com/callback.php"),
        Disk: shared.EditDiskEnumMount.ToPointer(),
        Output: shared.Output{
            AspectRatio: shared.OutputAspectRatioEnumSixteen9.ToPointer(),
            Destinations: []interface{}{
                shared.ShotstackDestination{
                    Exclude: sdk.Bool(false),
                    Provider: "shotstack",
                },
                shared.ShotstackDestination{
                    Exclude: sdk.Bool(false),
                    Provider: "shotstack",
                },
                shared.ShotstackDestination{
                    Exclude: sdk.Bool(false),
                    Provider: "shotstack",
                },
            },
            Format: shared.OutputFormatEnumMp4,
            Fps: shared.OutputFpsEnumTwentyFour.ToPointer(),
            Poster: &shared.Poster{
                Capture: 1,
            },
            Quality: shared.OutputQualityEnumMedium.ToPointer(),
            Range: &shared.Range{
                Length: sdk.Float32(6),
                Start: sdk.Float32(3),
            },
            Resolution: shared.OutputResolutionEnumSd.ToPointer(),
            ScaleTo: shared.OutputScaleToEnumMobile.ToPointer(),
            Size: &shared.Size{
                Height: sdk.Int64(800),
                Width: sdk.Int64(1200),
            },
            Thumbnail: &shared.Thumbnail{
                Capture: 1,
                Scale: 0.3,
            },
        },
        Timeline: shared.Timeline{
            Background: sdk.String("excepturi"),
            Cache: sdk.Bool(false),
            Fonts: []shared.Font{
                shared.Font{
                    Src: "https://s3-ap-northeast-1.amazonaws.com/my-bucket/open-sans.ttf",
                },
            },
            Soundtrack: &shared.Soundtrack{
                Effect: shared.SoundtrackEffectEnumFadeIn.ToPointer(),
                Src: "https://s3-ap-northeast-1.amazonaws.com/my-bucket/music.mp3",
                Volume: sdk.Float64(3241.41),
            },
            Tracks: []shared.Track{
                shared.Track{
                    Clips: []shared.Clip{
                        shared.Clip{
                            Asset: shared.ClipAsset{},
                            Effect: shared.ClipEffectEnumSlideRight.ToPointer(),
                            Filter: shared.ClipFilterEnumGreyscale.ToPointer(),
                            Fit: shared.ClipFitEnumCover.ToPointer(),
                            Length: 5,
                            Offset: &shared.Offset{
                                X: sdk.Float32(0.1),
                                Y: sdk.Float32(-0.2),
                            },
                            Opacity: sdk.Float64(6169.34),
                            Position: shared.ClipPositionEnumBottomRight.ToPointer(),
                            Scale: sdk.Float64(9437.49),
                            Start: 2,
                            Transition: &shared.Transition{
                                In: shared.TransitionInEnumShuffleLeftTopSlow.ToPointer(),
                                Out: shared.TransitionOutEnumShuffleRightTopFast.ToPointer(),
                            },
                        },
                    },
                },
                shared.Track{
                    Clips: []shared.Clip{
                        shared.Clip{
                            Asset: shared.ClipAsset{},
                            Effect: shared.ClipEffectEnumSlideLeft.ToPointer(),
                            Filter: shared.ClipFilterEnumGreyscale.ToPointer(),
                            Fit: shared.ClipFitEnumCrop.ToPointer(),
                            Length: 5,
                            Offset: &shared.Offset{
                                X: sdk.Float32(0.1),
                                Y: sdk.Float32(-0.2),
                            },
                            Opacity: sdk.Float64(4370.32),
                            Position: shared.ClipPositionEnumCenter.ToPointer(),
                            Scale: sdk.Float64(6976.31),
                            Start: 2,
                            Transition: &shared.Transition{
                                In: shared.TransitionInEnumWipeLeft.ToPointer(),
                                Out: shared.TransitionOutEnumReveal.ToPointer(),
                            },
                        },
                        shared.Clip{
                            Asset: shared.ClipAsset{},
                            Effect: shared.ClipEffectEnumSlideDown.ToPointer(),
                            Filter: shared.ClipFilterEnumGreyscale.ToPointer(),
                            Fit: shared.ClipFitEnumCrop.ToPointer(),
                            Length: 5,
                            Offset: &shared.Offset{
                                X: sdk.Float32(0.1),
                                Y: sdk.Float32(-0.2),
                            },
                            Opacity: sdk.Float64(6531.4),
                            Position: shared.ClipPositionEnumLeft.ToPointer(),
                            Scale: sdk.Float64(1709.09),
                            Start: 2,
                            Transition: &shared.Transition{
                                In: shared.TransitionInEnumSlideLeft.ToPointer(),
                                Out: shared.TransitionOutEnumSlideDown.ToPointer(),
                            },
                        },
                    },
                },
                shared.Track{
                    Clips: []shared.Clip{
                        shared.Clip{
                            Asset: shared.ClipAsset{},
                            Effect: shared.ClipEffectEnumSlideUp.ToPointer(),
                            Filter: shared.ClipFilterEnumGreyscale.ToPointer(),
                            Fit: shared.ClipFitEnumContain.ToPointer(),
                            Length: 5,
                            Offset: &shared.Offset{
                                X: sdk.Float32(0.1),
                                Y: sdk.Float32(-0.2),
                            },
                            Opacity: sdk.Float64(6078.31),
                            Position: shared.ClipPositionEnumBottomRight.ToPointer(),
                            Scale: sdk.Float64(3250.47),
                            Start: 2,
                            Transition: &shared.Transition{
                                In: shared.TransitionInEnumCarouselDownSlow.ToPointer(),
                                Out: shared.TransitionOutEnumFadeFast.ToPointer(),
                            },
                        },
                    },
                },
            },
        },
    }, operations.PostRenderSecurity{
        DeveloperKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueuedResponse != nil {
        // handle response
    }
}
```
