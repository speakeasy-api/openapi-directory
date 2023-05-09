# edit

### Available Operations

* [getRender](#getrender) - Get Render Status
* [postRender](#postrender) - Render Asset

## getRender

Get the rendering status, temporary asset url and details of a render by ID.

**base URL:** https://api.shotstack.io/{version}

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRenderRequest;
import org.openapis.openapi.models.operations.GetRenderResponse;
import org.openapis.openapi.models.operations.GetRenderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRenderRequest req = new GetRenderRequest("distinctio");            

            GetRenderResponse res = sdk.edit.getRender(req, new GetRenderSecurity("quibusdam") {{
                developerKey = "YOUR_API_KEY_HERE";
            }});

            if (res.renderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRender

Queue and render the contents of a timeline as a video, image or audio file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRenderResponse;
import org.openapis.openapi.models.operations.PostRenderSecurity;
import org.openapis.openapi.models.shared.AudioAsset;
import org.openapis.openapi.models.shared.AudioAssetEffectEnum;
import org.openapis.openapi.models.shared.Clip;
import org.openapis.openapi.models.shared.ClipEffectEnum;
import org.openapis.openapi.models.shared.ClipFilterEnum;
import org.openapis.openapi.models.shared.ClipFitEnum;
import org.openapis.openapi.models.shared.ClipPositionEnum;
import org.openapis.openapi.models.shared.Crop;
import org.openapis.openapi.models.shared.Edit;
import org.openapis.openapi.models.shared.EditDiskEnum;
import org.openapis.openapi.models.shared.Font;
import org.openapis.openapi.models.shared.HtmlAsset;
import org.openapis.openapi.models.shared.HtmlAssetPositionEnum;
import org.openapis.openapi.models.shared.ImageAsset;
import org.openapis.openapi.models.shared.LumaAsset;
import org.openapis.openapi.models.shared.Offset;
import org.openapis.openapi.models.shared.Output;
import org.openapis.openapi.models.shared.OutputAspectRatioEnum;
import org.openapis.openapi.models.shared.OutputFormatEnum;
import org.openapis.openapi.models.shared.OutputFpsEnum;
import org.openapis.openapi.models.shared.OutputQualityEnum;
import org.openapis.openapi.models.shared.OutputResolutionEnum;
import org.openapis.openapi.models.shared.OutputScaleToEnum;
import org.openapis.openapi.models.shared.Poster;
import org.openapis.openapi.models.shared.Range;
import org.openapis.openapi.models.shared.ShotstackDestination;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.Soundtrack;
import org.openapis.openapi.models.shared.SoundtrackEffectEnum;
import org.openapis.openapi.models.shared.Thumbnail;
import org.openapis.openapi.models.shared.Timeline;
import org.openapis.openapi.models.shared.TitleAsset;
import org.openapis.openapi.models.shared.TitleAssetPositionEnum;
import org.openapis.openapi.models.shared.TitleAssetSizeEnum;
import org.openapis.openapi.models.shared.TitleAssetStyleEnum;
import org.openapis.openapi.models.shared.Track;
import org.openapis.openapi.models.shared.Transition;
import org.openapis.openapi.models.shared.TransitionInEnum;
import org.openapis.openapi.models.shared.TransitionOutEnum;
import org.openapis.openapi.models.shared.VideoAsset;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Edit req = new Edit(                new Output(OutputFormatEnum.MP4) {{
                                aspectRatio = OutputAspectRatioEnum.SIXTEEN9;
                                destinations = new Object[]{{
                                    add(new ShotstackDestination("shotstack") {{
                                        exclude = false;
                                        provider = "shotstack";
                                    }}),
                                    add(new ShotstackDestination("shotstack") {{
                                        exclude = false;
                                        provider = "shotstack";
                                    }}),
                                    add(new ShotstackDestination("shotstack") {{
                                        exclude = false;
                                        provider = "shotstack";
                                    }}),
                                }};
                                fps = OutputFpsEnum.THIRTY;
                                poster = new Poster(1);;
                                quality = OutputQualityEnum.MEDIUM;
                                range = new Range() {{
                                    length = 6;
                                    start = 3;
                                }};;
                                resolution = OutputResolutionEnum.SD;
                                scaleTo = OutputScaleToEnum.SD;
                                size = new Size() {{
                                    height = 800L;
                                    width = 1200L;
                                }};;
                                thumbnail = new Thumbnail(1, 0.3);;
                            }};,                 new Timeline(                new org.openapis.openapi.models.shared.Track[]{{
                                                add(new Track(                new org.openapis.openapi.models.shared.Clip[]{{
                                                                    add(new Clip(                new HtmlAsset("<p>Hello <b>World</b></p>", "modi") {{
                                                                                        background = "beatae";
                                                                                        css = "p { color: #ffffff; } b { color: #ffff00; }";
                                                                                        height = 200L;
                                                                                        html = "<p>Hello <b>World</b></p>";
                                                                                        position = HtmlAssetPositionEnum.BOTTOM_RIGHT;
                                                                                        type = "molestiae";
                                                                                        width = 400L;
                                                                                    }}, 5, 2) {{
                                                                        asset = new AudioAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3", "dicta") {{
                                                                            effect = AudioAssetEffectEnum.FADE_OUT;
                                                                            src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3";
                                                                            trim = 5204.78;
                                                                            type = "porro";
                                                                            volume = 6788.8;
                                                                        }};
                                                                        effect = ClipEffectEnum.SLIDE_UP;
                                                                        filter = ClipFilterEnum.GREYSCALE;
                                                                        fit = ClipFitEnum.CROP;
                                                                        length = 5;
                                                                        offset = new Offset() {{
                                                                            x = 0.1;
                                                                            y = -0.2;
                                                                        }};
                                                                        opacity = 5820.2;
                                                                        position = ClipPositionEnum.TOP_RIGHT;
                                                                        scale = 5373.73;
                                                                        start = 2;
                                                                        transition = new Transition() {{
                                                                            in = TransitionInEnum.SHUFFLE_TOP_LEFT;
                                                                            out = TransitionOutEnum.SHUFFLE_BOTTOM_RIGHT_SLOW;
                                                                        }};
                                                                    }}),
                                                                    add(new Clip(                new ImageAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg", "saepe") {{
                                                                                        crop = new Crop() {{
                                                                                            bottom = 0.15;
                                                                                            left = 6169.34;
                                                                                            right = 3864.89;
                                                                                            top = 0.15;
                                                                                        }};
                                                                                        src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg";
                                                                                        type = "hic";
                                                                                    }}, 5, 2) {{
                                                                        asset = new ImageAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg", "ipsum") {{
                                                                            crop = new Crop() {{
                                                                                bottom = 0.15;
                                                                                left = 7742.34;
                                                                                right = 7369.18;
                                                                                top = 0.15;
                                                                            }};
                                                                            src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg";
                                                                            type = "esse";
                                                                        }};
                                                                        effect = ClipEffectEnum.SLIDE_RIGHT;
                                                                        filter = ClipFilterEnum.GREYSCALE;
                                                                        fit = ClipFitEnum.COVER;
                                                                        length = 5;
                                                                        offset = new Offset() {{
                                                                            x = 0.1;
                                                                            y = -0.2;
                                                                        }};
                                                                        opacity = 187.89;
                                                                        position = ClipPositionEnum.RIGHT;
                                                                        scale = 6176.36;
                                                                        start = 2;
                                                                        transition = new Transition() {{
                                                                            in = TransitionInEnum.WIPE_RIGHT;
                                                                            out = TransitionOutEnum.SHUFFLE_TOP_RIGHT_SLOW;
                                                                        }};
                                                                    }}),
                                                                    add(new Clip(                new ImageAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg", "nobis") {{
                                                                                        crop = new Crop() {{
                                                                                            bottom = 0.15;
                                                                                            left = 2103.82;
                                                                                            right = 3581.52;
                                                                                            top = 0.15;
                                                                                        }};
                                                                                        src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg";
                                                                                        type = "explicabo";
                                                                                    }}, 5, 2) {{
                                                                        asset = new AudioAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3", "saepe") {{
                                                                            effect = AudioAssetEffectEnum.FADE_OUT;
                                                                            src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3";
                                                                            trim = 3595.08;
                                                                            type = "iste";
                                                                            volume = 4370.32;
                                                                        }};
                                                                        effect = ClipEffectEnum.SLIDE_UP;
                                                                        filter = ClipFilterEnum.GREYSCALE;
                                                                        fit = ClipFitEnum.COVER;
                                                                        length = 5;
                                                                        offset = new Offset() {{
                                                                            x = 0.1;
                                                                            y = -0.2;
                                                                        }};
                                                                        opacity = 602.25;
                                                                        position = ClipPositionEnum.CENTER;
                                                                        scale = 6667.67;
                                                                        start = 2;
                                                                        transition = new Transition() {{
                                                                            in = TransitionInEnum.SHUFFLE_RIGHT_TOP;
                                                                            out = TransitionOutEnum.SHUFFLE_RIGHT_TOP_SLOW;
                                                                        }};
                                                                    }}),
                                                                    add(new Clip(                new ImageAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg", "mollitia") {{
                                                                                        crop = new Crop() {{
                                                                                            bottom = 0.15;
                                                                                            left = 6350.59;
                                                                                            right = 1613.09;
                                                                                            top = 0.15;
                                                                                        }};
                                                                                        src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg";
                                                                                        type = "repellat";
                                                                                    }}, 5, 2) {{
                                                                        asset = new ImageAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg", "excepturi") {{
                                                                            crop = new Crop() {{
                                                                                bottom = 0.15;
                                                                                left = 6078.31;
                                                                                right = 3637.11;
                                                                                top = 0.15;
                                                                            }};
                                                                            src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg";
                                                                            type = "minima";
                                                                        }};
                                                                        effect = ClipEffectEnum.ZOOM_IN;
                                                                        filter = ClipFilterEnum.GREYSCALE;
                                                                        fit = ClipFitEnum.CONTAIN;
                                                                        length = 5;
                                                                        offset = new Offset() {{
                                                                            x = 0.1;
                                                                            y = -0.2;
                                                                        }};
                                                                        opacity = 6342.74;
                                                                        position = ClipPositionEnum.CENTER;
                                                                        scale = 9589.5;
                                                                        start = 2;
                                                                        transition = new Transition() {{
                                                                            in = TransitionInEnum.WIPE_LEFT;
                                                                            out = TransitionOutEnum.SHUFFLE_RIGHT_TOP;
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    clips = new org.openapis.openapi.models.shared.Clip[]{{
                                                        add(new Clip(                new AudioAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3", "recusandae") {{
                                                                            effect = AudioAssetEffectEnum.FADE_OUT;
                                                                            src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3";
                                                                            trim = 4799.77;
                                                                            type = "excepturi";
                                                                            volume = 3927.85;
                                                                        }}, 5, 2) {{
                                                            asset = new HtmlAsset("<p>Hello <b>World</b></p>", "magnam") {{
                                                                background = "deserunt";
                                                                css = "p { color: #ffffff; } b { color: #ffff00; }";
                                                                height = 200L;
                                                                html = "<p>Hello <b>World</b></p>";
                                                                position = HtmlAssetPositionEnum.BOTTOM_RIGHT;
                                                                type = "iure";
                                                                width = 400L;
                                                            }};
                                                            effect = ClipEffectEnum.SLIDE_DOWN;
                                                            filter = ClipFilterEnum.GREYSCALE;
                                                            fit = ClipFitEnum.COVER;
                                                            length = 5;
                                                            offset = new Offset() {{
                                                                x = 0.1;
                                                                y = -0.2;
                                                            }};
                                                            opacity = 9636.63;
                                                            position = ClipPositionEnum.RIGHT;
                                                            scale = 3834.41;
                                                            start = 2;
                                                            transition = new Transition() {{
                                                                in = TransitionInEnum.CAROUSEL_RIGHT_FAST;
                                                                out = TransitionOutEnum.SHUFFLE_BOTTOM_LEFT;
                                                            }};
                                                        }}),
                                                        add(new Clip(                new LumaAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/mask.mp4", "molestiae") {{
                                                                            src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/mask.mp4";
                                                                            trim = 8700.88;
                                                                            type = "maiores";
                                                                        }}, 5, 2) {{
                                                            asset = new LumaAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/mask.mp4", "veritatis") {{
                                                                src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/mask.mp4";
                                                                trim = 710.36;
                                                                type = "quis";
                                                            }};
                                                            effect = ClipEffectEnum.SLIDE_RIGHT;
                                                            filter = ClipFilterEnum.GREYSCALE;
                                                            fit = ClipFitEnum.COVER;
                                                            length = 5;
                                                            offset = new Offset() {{
                                                                x = 0.1;
                                                                y = -0.2;
                                                            }};
                                                            opacity = 3682.41;
                                                            position = ClipPositionEnum.TOP_LEFT;
                                                            scale = 9571.56;
                                                            start = 2;
                                                            transition = new Transition() {{
                                                                in = TransitionInEnum.SHUFFLE_BOTTOM_RIGHT_FAST;
                                                                out = TransitionOutEnum.WIPE_LEFT_FAST;
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new Track(                new org.openapis.openapi.models.shared.Clip[]{{
                                                                    add(new Clip(                new ImageAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg", "quibusdam") {{
                                                                                        crop = new Crop() {{
                                                                                            bottom = 0.15;
                                                                                            left = 3185.69;
                                                                                            right = 93.56;
                                                                                            top = 0.15;
                                                                                        }};
                                                                                        src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg";
                                                                                        type = "est";
                                                                                    }}, 5, 2) {{
                                                                        asset = new AudioAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3", "praesentium") {{
                                                                            effect = AudioAssetEffectEnum.FADE_OUT;
                                                                            src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3";
                                                                            trim = 5666.02;
                                                                            type = "pariatur";
                                                                            volume = 2653.89;
                                                                        }};
                                                                        effect = ClipEffectEnum.SLIDE_RIGHT;
                                                                        filter = ClipFilterEnum.GREYSCALE;
                                                                        fit = ClipFitEnum.NONE;
                                                                        length = 5;
                                                                        offset = new Offset() {{
                                                                            x = 0.1;
                                                                            y = -0.2;
                                                                        }};
                                                                        opacity = 939.4;
                                                                        position = ClipPositionEnum.CENTER;
                                                                        scale = 5759.47;
                                                                        start = 2;
                                                                        transition = new Transition() {{
                                                                            in = TransitionInEnum.REVEAL_FAST;
                                                                            out = TransitionOutEnum.SHUFFLE_LEFT_TOP_FAST;
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    clips = new org.openapis.openapi.models.shared.Clip[]{{
                                                        add(new Clip(                new VideoAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/video.mp4", "ipsam") {{
                                                                            crop = new Crop() {{
                                                                                bottom = 0.15;
                                                                                left = 7783.46;
                                                                                right = 1965.82;
                                                                                top = 0.15;
                                                                            }};
                                                                            src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/video.mp4";
                                                                            trim = 2;
                                                                            type = "tenetur";
                                                                            volume = 1;
                                                                        }}, 5, 2) {{
                                                            asset = new ImageAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg", "velit") {{
                                                                crop = new Crop() {{
                                                                    bottom = 0.15;
                                                                    left = 4143.69;
                                                                    right = 4663.11;
                                                                    top = 0.15;
                                                                }};
                                                                src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg";
                                                                type = "molestiae";
                                                            }};
                                                            effect = ClipEffectEnum.SLIDE_RIGHT;
                                                            filter = ClipFilterEnum.GREYSCALE;
                                                            fit = ClipFitEnum.COVER;
                                                            length = 5;
                                                            offset = new Offset() {{
                                                                x = 0.1;
                                                                y = -0.2;
                                                            }};
                                                            opacity = 3380.07;
                                                            position = ClipPositionEnum.TOP;
                                                            scale = 6747.52;
                                                            start = 2;
                                                            transition = new Transition() {{
                                                                in = TransitionInEnum.SHUFFLE_RIGHT_TOP_SLOW;
                                                                out = TransitionOutEnum.SLIDE_UP_SLOW;
                                                            }};
                                                        }}),
                                                        add(new Clip(                new HtmlAsset("<p>Hello <b>World</b></p>", "voluptate") {{
                                                                            background = "voluptatibus";
                                                                            css = "p { color: #ffffff; } b { color: #ffff00; }";
                                                                            height = 200L;
                                                                            html = "<p>Hello <b>World</b></p>";
                                                                            position = HtmlAssetPositionEnum.TOP;
                                                                            type = "omnis";
                                                                            width = 400L;
                                                                        }}, 5, 2) {{
                                                            asset = new HtmlAsset("<p>Hello <b>World</b></p>", "error") {{
                                                                background = "possimus";
                                                                css = "p { color: #ffffff; } b { color: #ffff00; }";
                                                                height = 200L;
                                                                html = "<p>Hello <b>World</b></p>";
                                                                position = HtmlAssetPositionEnum.TOP;
                                                                type = "quasi";
                                                                width = 400L;
                                                            }};
                                                            effect = ClipEffectEnum.SLIDE_DOWN;
                                                            filter = ClipFilterEnum.GREYSCALE;
                                                            fit = ClipFitEnum.CROP;
                                                            length = 5;
                                                            offset = new Offset() {{
                                                                x = 0.1;
                                                                y = -0.2;
                                                            }};
                                                            opacity = 960.98;
                                                            position = ClipPositionEnum.CENTER;
                                                            scale = 9764.6;
                                                            start = 2;
                                                            transition = new Transition() {{
                                                                in = TransitionInEnum.SHUFFLE_LEFT_BOTTOM_FAST;
                                                                out = TransitionOutEnum.CAROUSEL_RIGHT_SLOW;
                                                            }};
                                                        }}),
                                                        add(new Clip(                new LumaAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/mask.mp4", "quae") {{
                                                                            src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/mask.mp4";
                                                                            trim = 4142.63;
                                                                            type = "repudiandae";
                                                                        }}, 5, 2) {{
                                                            asset = new AudioAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3", "maiores") {{
                                                                effect = AudioAssetEffectEnum.FADE_IN;
                                                                src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3";
                                                                trim = 391.87;
                                                                type = "reprehenderit";
                                                                volume = 2828.07;
                                                            }};
                                                            effect = ClipEffectEnum.ZOOM_IN;
                                                            filter = ClipFilterEnum.GREYSCALE;
                                                            fit = ClipFitEnum.CONTAIN;
                                                            length = 5;
                                                            offset = new Offset() {{
                                                                x = 0.1;
                                                                y = -0.2;
                                                            }};
                                                            opacity = 2961.4;
                                                            position = ClipPositionEnum.BOTTOM;
                                                            scale = 1187.27;
                                                            start = 2;
                                                            transition = new Transition() {{
                                                                in = TransitionInEnum.SHUFFLE_RIGHT_BOTTOM;
                                                                out = TransitionOutEnum.SLIDE_UP_SLOW;
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new Track(                new org.openapis.openapi.models.shared.Clip[]{{
                                                                    add(new Clip(                new LumaAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/mask.mp4", "in") {{
                                                                                        src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/mask.mp4";
                                                                                        trim = 9527.49;
                                                                                        type = "dolorum";
                                                                                    }}, 5, 2) {{
                                                                        asset = new ImageAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg", "eligendi") {{
                                                                            crop = new Crop() {{
                                                                                bottom = 0.15;
                                                                                left = 9621.89;
                                                                                right = 4332.88;
                                                                                top = 0.15;
                                                                            }};
                                                                            src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg";
                                                                            type = "non";
                                                                        }};
                                                                        effect = ClipEffectEnum.SLIDE_RIGHT;
                                                                        filter = ClipFilterEnum.GREYSCALE;
                                                                        fit = ClipFitEnum.CONTAIN;
                                                                        length = 5;
                                                                        offset = new Offset() {{
                                                                            x = 0.1;
                                                                            y = -0.2;
                                                                        }};
                                                                        opacity = 5920.42;
                                                                        position = ClipPositionEnum.CENTER;
                                                                        scale = 5722.52;
                                                                        start = 2;
                                                                        transition = new Transition() {{
                                                                            in = TransitionInEnum.SHUFFLE_TOP_RIGHT_FAST;
                                                                            out = TransitionOutEnum.SLIDE_LEFT_SLOW;
                                                                        }};
                                                                    }}),
                                                                    add(new Clip(                new ImageAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg", "provident") {{
                                                                                        crop = new Crop() {{
                                                                                            bottom = 0.15;
                                                                                            left = 8817.36;
                                                                                            right = 9654.17;
                                                                                            top = 0.15;
                                                                                        }};
                                                                                        src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg";
                                                                                        type = "quidem";
                                                                                    }}, 5, 2) {{
                                                                        asset = new TitleAsset("Hello World", "cumque") {{
                                                                            background = "#000000";
                                                                            color = "illum";
                                                                            offset = new Offset() {{
                                                                                x = 0.1;
                                                                                y = -0.2;
                                                                            }};
                                                                            position = TitleAssetPositionEnum.CENTER;
                                                                            size = TitleAssetSizeEnum.LARGE;
                                                                            style = TitleAssetStyleEnum.BLOCKBUSTER;
                                                                            text = "Hello World";
                                                                            type = "magnam";
                                                                        }};
                                                                        effect = ClipEffectEnum.SLIDE_UP;
                                                                        filter = ClipFilterEnum.GREYSCALE;
                                                                        fit = ClipFitEnum.CONTAIN;
                                                                        length = 5;
                                                                        offset = new Offset() {{
                                                                            x = 0.1;
                                                                            y = -0.2;
                                                                        }};
                                                                        opacity = 3965.06;
                                                                        position = ClipPositionEnum.LEFT;
                                                                        scale = 8811.04;
                                                                        start = 2;
                                                                        transition = new Transition() {{
                                                                            in = TransitionInEnum.SLIDE_RIGHT;
                                                                            out = TransitionOutEnum.CAROUSEL_DOWN_FAST;
                                                                        }};
                                                                    }}),
                                                                    add(new Clip(                new TitleAsset("Hello World", "suscipit") {{
                                                                                        background = "#000000";
                                                                                        color = "magnam";
                                                                                        offset = new Offset() {{
                                                                                            x = 0.1;
                                                                                            y = -0.2;
                                                                                        }};
                                                                                        position = TitleAssetPositionEnum.LEFT;
                                                                                        size = TitleAssetSizeEnum.LARGE;
                                                                                        style = TitleAssetStyleEnum.VOGUE;
                                                                                        text = "Hello World";
                                                                                        type = "labore";
                                                                                    }}, 5, 2) {{
                                                                        asset = new AudioAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3", "amet") {{
                                                                            effect = AudioAssetEffectEnum.FADE_OUT;
                                                                            src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3";
                                                                            trim = 5013.24;
                                                                            type = "deleniti";
                                                                            volume = 9560.84;
                                                                        }};
                                                                        effect = ClipEffectEnum.SLIDE_RIGHT;
                                                                        filter = ClipFilterEnum.GREYSCALE;
                                                                        fit = ClipFitEnum.CONTAIN;
                                                                        length = 5;
                                                                        offset = new Offset() {{
                                                                            x = 0.1;
                                                                            y = -0.2;
                                                                        }};
                                                                        opacity = 4238.55;
                                                                        position = ClipPositionEnum.BOTTOM_LEFT;
                                                                        scale = 6063.93;
                                                                        start = 2;
                                                                        transition = new Transition() {{
                                                                            in = TransitionInEnum.CAROUSEL_RIGHT_SLOW;
                                                                            out = TransitionOutEnum.FADE_SLOW;
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    clips = new org.openapis.openapi.models.shared.Clip[]{{
                                                        add(new Clip(                new TitleAsset("Hello World", "facilis") {{
                                                                            background = "#000000";
                                                                            color = "alias";
                                                                            offset = new Offset() {{
                                                                                x = 0.1;
                                                                                y = -0.2;
                                                                            }};
                                                                            position = TitleAssetPositionEnum.TOP_RIGHT;
                                                                            size = TitleAssetSizeEnum.LARGE;
                                                                            style = TitleAssetStyleEnum.CHUNK;
                                                                            text = "Hello World";
                                                                            type = "tempora";
                                                                        }}, 5, 2) {{
                                                            asset = new HtmlAsset("<p>Hello <b>World</b></p>", "modi") {{
                                                                background = "distinctio";
                                                                css = "p { color: #ffffff; } b { color: #ffff00; }";
                                                                height = 200L;
                                                                html = "<p>Hello <b>World</b></p>";
                                                                position = HtmlAssetPositionEnum.TOP_LEFT;
                                                                type = "labore";
                                                                width = 400L;
                                                            }};
                                                            effect = ClipEffectEnum.ZOOM_OUT;
                                                            filter = ClipFilterEnum.GREYSCALE;
                                                            fit = ClipFitEnum.CONTAIN;
                                                            length = 5;
                                                            offset = new Offset() {{
                                                                x = 0.1;
                                                                y = -0.2;
                                                            }};
                                                            opacity = 5865.13;
                                                            position = ClipPositionEnum.BOTTOM;
                                                            scale = 201.07;
                                                            start = 2;
                                                            transition = new Transition() {{
                                                                in = TransitionInEnum.WIPE_RIGHT_SLOW;
                                                                out = TransitionOutEnum.SHUFFLE_BOTTOM_LEFT_FAST;
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new Track(                new org.openapis.openapi.models.shared.Clip[]{{
                                                                    add(new Clip(                new LumaAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/mask.mp4", "cumque") {{
                                                                                        src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/mask.mp4";
                                                                                        trim = 2307.42;
                                                                                        type = "aut";
                                                                                    }}, 5, 2) {{
                                                                        asset = new TitleAsset("Hello World", "voluptate") {{
                                                                            background = "#000000";
                                                                            color = "accusantium";
                                                                            offset = new Offset() {{
                                                                                x = 0.1;
                                                                                y = -0.2;
                                                                            }};
                                                                            position = TitleAssetPositionEnum.TOP;
                                                                            size = TitleAssetSizeEnum.XX_LARGE;
                                                                            style = TitleAssetStyleEnum.CHUNK_LIGHT;
                                                                            text = "Hello World";
                                                                            type = "ipsam";
                                                                        }};
                                                                        effect = ClipEffectEnum.SLIDE_LEFT;
                                                                        filter = ClipFilterEnum.GREYSCALE;
                                                                        fit = ClipFitEnum.CROP;
                                                                        length = 5;
                                                                        offset = new Offset() {{
                                                                            x = 0.1;
                                                                            y = -0.2;
                                                                        }};
                                                                        opacity = 505.88;
                                                                        position = ClipPositionEnum.TOP_LEFT;
                                                                        scale = 3654.96;
                                                                        start = 2;
                                                                        transition = new Transition() {{
                                                                            in = TransitionInEnum.SHUFFLE_TOP_LEFT_FAST;
                                                                            out = TransitionOutEnum.FADE_SLOW;
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    clips = new org.openapis.openapi.models.shared.Clip[]{{
                                                        add(new Clip(                new HtmlAsset("<p>Hello <b>World</b></p>", "eum") {{
                                                                            background = "reiciendis";
                                                                            css = "p { color: #ffffff; } b { color: #ffff00; }";
                                                                            height = 200L;
                                                                            html = "<p>Hello <b>World</b></p>";
                                                                            position = HtmlAssetPositionEnum.BOTTOM_LEFT;
                                                                            type = "ad";
                                                                            width = 400L;
                                                                        }}, 5, 2) {{
                                                            asset = new AudioAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3", "magnam") {{
                                                                effect = AudioAssetEffectEnum.FADE_OUT;
                                                                src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3";
                                                                trim = 8784.53;
                                                                type = "aspernatur";
                                                                volume = 1028.63;
                                                            }};
                                                            effect = ClipEffectEnum.ZOOM_IN;
                                                            filter = ClipFilterEnum.GREYSCALE;
                                                            fit = ClipFitEnum.CROP;
                                                            length = 5;
                                                            offset = new Offset() {{
                                                                x = 0.1;
                                                                y = -0.2;
                                                            }};
                                                            opacity = 3540.47;
                                                            position = ClipPositionEnum.BOTTOM_LEFT;
                                                            scale = 5518.16;
                                                            start = 2;
                                                            transition = new Transition() {{
                                                                in = TransitionInEnum.CAROUSEL_DOWN_FAST;
                                                                out = TransitionOutEnum.FADE_FAST;
                                                            }};
                                                        }}),
                                                        add(new Clip(                new TitleAsset("Hello World", "nihil") {{
                                                                            background = "#000000";
                                                                            color = "architecto";
                                                                            offset = new Offset() {{
                                                                                x = 0.1;
                                                                                y = -0.2;
                                                                            }};
                                                                            position = TitleAssetPositionEnum.TOP;
                                                                            size = TitleAssetSizeEnum.XX_LARGE;
                                                                            style = TitleAssetStyleEnum.SKETCHY;
                                                                            text = "Hello World";
                                                                            type = "expedita";
                                                                        }}, 5, 2) {{
                                                            asset = new ImageAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg", "quasi") {{
                                                                crop = new Crop() {{
                                                                    bottom = 0.15;
                                                                    left = 8965.47;
                                                                    right = 1412.64;
                                                                    top = 0.15;
                                                                }};
                                                                src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/image.jpg";
                                                                type = "nemo";
                                                            }};
                                                            effect = ClipEffectEnum.SLIDE_LEFT;
                                                            filter = ClipFilterEnum.GREYSCALE;
                                                            fit = ClipFitEnum.NONE;
                                                            length = 5;
                                                            offset = new Offset() {{
                                                                x = 0.1;
                                                                y = -0.2;
                                                            }};
                                                            opacity = 8919.24;
                                                            position = ClipPositionEnum.RIGHT;
                                                            scale = 8061.94;
                                                            start = 2;
                                                            transition = new Transition() {{
                                                                in = TransitionInEnum.CAROUSEL_UP_FAST;
                                                                out = TransitionOutEnum.SHUFFLE_RIGHT_BOTTOM;
                                                            }};
                                                        }}),
                                                        add(new Clip(                new AudioAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3", "excepturi") {{
                                                                            effect = AudioAssetEffectEnum.FADE_IN_FADE_OUT;
                                                                            src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/sound.mp3";
                                                                            trim = 8649.34;
                                                                            type = "maxime";
                                                                            volume = 4113.97;
                                                                        }}, 5, 2) {{
                                                            asset = new LumaAsset("https://s3-ap-northeast-1.amazonaws.com/my-bucket/mask.mp4", "saepe") {{
                                                                src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/mask.mp4";
                                                                trim = 8411.4;
                                                                type = "sed";
                                                            }};
                                                            effect = ClipEffectEnum.SLIDE_DOWN;
                                                            filter = ClipFilterEnum.GREYSCALE;
                                                            fit = ClipFitEnum.COVER;
                                                            length = 5;
                                                            offset = new Offset() {{
                                                                x = 0.1;
                                                                y = -0.2;
                                                            }};
                                                            opacity = 1624.93;
                                                            position = ClipPositionEnum.BOTTOM;
                                                            scale = 6155.6;
                                                            start = 2;
                                                            transition = new Transition() {{
                                                                in = TransitionInEnum.WIPE_RIGHT_SLOW;
                                                                out = TransitionOutEnum.WIPE_LEFT_SLOW;
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }}) {{
                                background = "corporis";
                                cache = false;
                                fonts = new org.openapis.openapi.models.shared.Font[]{{
                                    add(new Font("https://s3-ap-northeast-1.amazonaws.com/my-bucket/open-sans.ttf") {{
                                        src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/open-sans.ttf";
                                    }}),
                                    add(new Font("https://s3-ap-northeast-1.amazonaws.com/my-bucket/open-sans.ttf") {{
                                        src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/open-sans.ttf";
                                    }}),
                                    add(new Font("https://s3-ap-northeast-1.amazonaws.com/my-bucket/open-sans.ttf") {{
                                        src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/open-sans.ttf";
                                    }}),
                                    add(new Font("https://s3-ap-northeast-1.amazonaws.com/my-bucket/open-sans.ttf") {{
                                        src = "https://s3-ap-northeast-1.amazonaws.com/my-bucket/open-sans.ttf";
                                    }}),
                                }};
                                soundtrack = new Soundtrack("https://s3-ap-northeast-1.amazonaws.com/my-bucket/music.mp3") {{
                                    effect = SoundtrackEffectEnum.FADE_IN_FADE_OUT;
                                    volume = 7499.99;
                                }};;
                            }};) {{
                callback = "https://my-server.com/callback.php";
                disk = EditDiskEnum.LOCAL;
            }};            

            PostRenderResponse res = sdk.edit.postRender(req, new PostRenderSecurity("quis") {{
                developerKey = "YOUR_API_KEY_HERE";
            }});

            if (res.queuedResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
