# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesCreateSecurity;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesCreateRequest;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.JobTemplate;
import org.openapis.openapi.models.shared.JobConfig;
import org.openapis.openapi.models.shared.SpriteSheet;
import org.openapis.openapi.models.shared.PubsubDestination;
import org.openapis.openapi.models.shared.Overlay;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.NormalizedCoordinate;
import org.openapis.openapi.models.shared.Animation;
import org.openapis.openapi.models.shared.AnimationStatic;
import org.openapis.openapi.models.shared.AnimationFadeFadeTypeEnum;
import org.openapis.openapi.models.shared.AnimationFade;
import org.openapis.openapi.models.shared.AnimationEnd;
import org.openapis.openapi.models.shared.Output;
import org.openapis.openapi.models.shared.MuxStream;
import org.openapis.openapi.models.shared.SegmentSettings;
import org.openapis.openapi.models.shared.ManifestTypeEnum;
import org.openapis.openapi.models.shared.Manifest;
import org.openapis.openapi.models.shared.Input;
import org.openapis.openapi.models.shared.PreprocessingConfig;
import org.openapis.openapi.models.shared.Pad;
import org.openapis.openapi.models.shared.Denoise;
import org.openapis.openapi.models.shared.Deinterlace;
import org.openapis.openapi.models.shared.YadifConfig;
import org.openapis.openapi.models.shared.BwdifConfig;
import org.openapis.openapi.models.shared.Deblock;
import org.openapis.openapi.models.shared.Crop;
import org.openapis.openapi.models.shared.Color;
import org.openapis.openapi.models.shared.Audio;
import org.openapis.openapi.models.shared.ElementaryStream;
import org.openapis.openapi.models.shared.VideoStream;
import org.openapis.openapi.models.shared.Vp9CodecSettings;
import org.openapis.openapi.models.shared.H265CodecSettings;
import org.openapis.openapi.models.shared.H264CodecSettings;
import org.openapis.openapi.models.shared.TextStream;
import org.openapis.openapi.models.shared.TextMapping;
import org.openapis.openapi.models.shared.AudioStream;
import org.openapis.openapi.models.shared.AudioMapping;
import org.openapis.openapi.models.shared.EditAtom;
import org.openapis.openapi.models.shared.AdBreak;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranscoderProjectsLocationsJobTemplatesCreateRequest req = new TranscoderProjectsLocationsJobTemplatesCreateRequest() {{
                dollarXgafv = "2";
                jobTemplate = new JobTemplate() {{
                    config = new JobConfig() {{
                        adBreaks = new org.openapis.openapi.models.shared.AdBreak[]{{
                            add(new AdBreak() {{
                                startTimeOffset = "distinctio";
                            }}),
                            add(new AdBreak() {{
                                startTimeOffset = "quibusdam";
                            }}),
                            add(new AdBreak() {{
                                startTimeOffset = "unde";
                            }}),
                        }};
                        editList = new org.openapis.openapi.models.shared.EditAtom[]{{
                            add(new EditAtom() {{
                                endTimeOffset = "corrupti";
                                inputs = new String[]{{
                                    add("vel"),
                                    add("error"),
                                    add("deserunt"),
                                    add("suscipit"),
                                }};
                                key = "iure";
                                startTimeOffset = "magnam";
                            }}),
                            add(new EditAtom() {{
                                endTimeOffset = "debitis";
                                inputs = new String[]{{
                                    add("delectus"),
                                }};
                                key = "tempora";
                                startTimeOffset = "suscipit";
                            }}),
                            add(new EditAtom() {{
                                endTimeOffset = "molestiae";
                                inputs = new String[]{{
                                    add("placeat"),
                                    add("voluptatum"),
                                    add("iusto"),
                                    add("excepturi"),
                                }};
                                key = "nisi";
                                startTimeOffset = "recusandae";
                            }}),
                            add(new EditAtom() {{
                                endTimeOffset = "temporibus";
                                inputs = new String[]{{
                                    add("quis"),
                                }};
                                key = "veritatis";
                                startTimeOffset = "deserunt";
                            }}),
                        }};
                        elementaryStreams = new org.openapis.openapi.models.shared.ElementaryStream[]{{
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 368241;
                                    channelCount = 832620;
                                    channelLayout = new String[]{{
                                        add("quo"),
                                        add("odit"),
                                        add("at"),
                                        add("at"),
                                    }};
                                    codec = "maiores";
                                    displayName = "molestiae";
                                    languageCode = "quod";
                                    mapping = new org.openapis.openapi.models.shared.AudioMapping[]{{
                                        add(new AudioMapping() {{
                                            atomKey = "esse";
                                            gainDb = 5204.78;
                                            inputChannel = 780529;
                                            inputKey = "dolorum";
                                            inputTrack = 118274;
                                            outputChannel = 720633;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "officia";
                                            gainDb = 5820.2;
                                            inputChannel = 143353;
                                            inputKey = "deleniti";
                                            inputTrack = 944669;
                                            outputChannel = 758616;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "totam";
                                            gainDb = 1059.07;
                                            inputChannel = 414662;
                                            inputKey = "molestiae";
                                            inputTrack = 264555;
                                            outputChannel = 186332;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "impedit";
                                            gainDb = 7369.18;
                                            inputChannel = 456150;
                                            inputKey = "ipsum";
                                            inputTrack = 568434;
                                            outputChannel = 135218;
                                        }}),
                                    }};
                                    sampleRateHertz = 18789;
                                }};
                                key = "ad";
                                textStream = new TextStream() {{
                                    codec = "natus";
                                    displayName = "sed";
                                    languageCode = "iste";
                                    mapping = new org.openapis.openapi.models.shared.TextMapping[]{{
                                        add(new TextMapping() {{
                                            atomKey = "natus";
                                            inputKey = "laboriosam";
                                            inputTrack = 943749;
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    h264 = new H264CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 9025.99;
                                        bFrameCount = 681820;
                                        bPyramid = false;
                                        bitrateBps = 449950;
                                        crfLevel = 359508;
                                        enableTwoPass = false;
                                        entropyCoder = "iste";
                                        frameRate = 4370.32;
                                        gopDuration = "saepe";
                                        gopFrameCount = 697631;
                                        heightPixels = 99280;
                                        pixelFormat = "ipsa";
                                        preset = "reiciendis";
                                        profile = "est";
                                        rateControlMode = "mollitia";
                                        tune = "laborum";
                                        vbvFullnessBits = 170909;
                                        vbvSizeBits = 210382;
                                        widthPixels = 358152;
                                    }};
                                    h265 = new H265CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 1289.26;
                                        bFrameCount = 750686;
                                        bPyramid = false;
                                        bitrateBps = 315428;
                                        crfLevel = 607831;
                                        enableTwoPass = false;
                                        frameRate = 3637.11;
                                        gopDuration = "minima";
                                        gopFrameCount = 570197;
                                        heightPixels = 38425;
                                        pixelFormat = "iure";
                                        preset = "culpa";
                                        profile = "doloribus";
                                        rateControlMode = "sapiente";
                                        tune = "architecto";
                                        vbvFullnessBits = 652790;
                                        vbvSizeBits = 208876;
                                        widthPixels = 635059;
                                    }};
                                    vp9 = new Vp9CodecSettings() {{
                                        bitrateBps = 161309;
                                        crfLevel = 995300;
                                        frameRate = 6531.08;
                                        gopDuration = "occaecati";
                                        gopFrameCount = 253291;
                                        heightPixels = 414369;
                                        pixelFormat = "quam";
                                        profile = "molestiae";
                                        rateControlMode = "velit";
                                        widthPixels = 623510;
                                    }};
                                }};
                            }}),
                        }};
                        inputs = new org.openapis.openapi.models.shared.Input[]{{
                            add(new Input() {{
                                key = "quis";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 1103.75;
                                    }};
                                    color = new Color() {{
                                        brightness = 6747.52;
                                        contrast = 6563.3;
                                        saturation = 3172.02;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 138183;
                                        leftPixels = 778346;
                                        rightPixels = 196582;
                                        topPixels = 949572;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 3687.25;
                                    }};
                                    deinterlace = new Deinterlace() {{
                                        bwdif = new BwdifConfig() {{
                                            deinterlaceAllFrames = false;
                                            mode = "id";
                                            parity = "possimus";
                                        }};
                                        yadif = new YadifConfig() {{
                                            deinterlaceAllFrames = false;
                                            disableSpatialInterlacing = false;
                                            mode = "aut";
                                            parity = "quasi";
                                        }};
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 6228.46;
                                        tune = "temporibus";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 673660;
                                        leftPixels = 96098;
                                        rightPixels = 971945;
                                        topPixels = 976460;
                                    }};
                                }};
                                uri = "https://klutzy-level.org";
                            }}),
                        }};
                        manifests = new org.openapis.openapi.models.shared.Manifest[]{{
                            add(new Manifest() {{
                                fileName = "omnis";
                                muxStreams = new String[]{{
                                    add("cum"),
                                    add("perferendis"),
                                }};
                                type = "MANIFEST_TYPE_UNSPECIFIED";
                            }}),
                        }};
                        muxStreams = new org.openapis.openapi.models.shared.MuxStream[]{{
                            add(new MuxStream() {{
                                container = "ut";
                                elementaryStreams = new String[]{{
                                    add("dicta"),
                                    add("corporis"),
                                    add("dolore"),
                                    add("iusto"),
                                }};
                                fileName = "dicta";
                                key = "harum";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "enim";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "accusamus";
                                elementaryStreams = new String[]{{
                                    add("repudiandae"),
                                    add("quae"),
                                }};
                                fileName = "ipsum";
                                key = "quidem";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "molestias";
                                }};
                            }}),
                        }};
                        output = new Output() {{
                            uri = "https://treasured-dirt.name";
                        }};
                        overlays = new org.openapis.openapi.models.shared.Overlay[]{{
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "quasi";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "repudiandae";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "veritatis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 9292.97;
                                                y = 2777.18;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "enim";
                                            xy = new NormalizedCoordinate() {{
                                                x = 93.56;
                                                y = 6674.11;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "quibusdam";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "explicabo";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "distinctio";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8413.86;
                                                y = 2894.06;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "modi";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1831.91;
                                                y = 3978.21;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "cupiditate";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "quos";
                                            fadeType = "FADE_TYPE_UNSPECIFIED";
                                            startTimeOffset = "magni";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8289.4;
                                                y = 3698.08;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "alias";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1464.41;
                                                y = 6778.17;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "excepturi";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "tempora";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "tempore";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2884.76;
                                                y = 9621.89;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "eum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2487.53;
                                                y = 7561.07;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 5761.57;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 3960.98;
                                        y = 5920.42;
                                    }};
                                    uri = "https://nonstop-pate.biz";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "a";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "dolorum";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "in";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8464.09;
                                                y = 9785.71;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "rerum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1162.02;
                                                y = 2974.37;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "cumque";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "facere";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "aliquid";
                                            xy = new NormalizedCoordinate() {{
                                                x = 6754.39;
                                                y = 8811.04;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "non";
                                            xy = new NormalizedCoordinate() {{
                                                x = 5812.73;
                                                y = 3132.18;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "accusamus";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "delectus";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "provident";
                                            xy = new NormalizedCoordinate() {{
                                                x = 7252.55;
                                                y = 6596.69;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "blanditiis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 5332.06;
                                                y = 9560.84;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "amet";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "deserunt";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "vel";
                                            xy = new NormalizedCoordinate() {{
                                                x = 6188.09;
                                                y = 6063.93;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "molestiae";
                                            xy = new NormalizedCoordinate() {{
                                                x = 191.93;
                                                y = 4701.32;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 3015.75;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 7160.75;
                                        y = 6601.74;
                                    }};
                                    uri = "http://flawed-gherkin.name";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "eum";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "vero";
                                            fadeType = "FADE_TYPE_UNSPECIFIED";
                                            startTimeOffset = "architecto";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2982.82;
                                                y = 923.73;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "excepturi";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3540.47;
                                                y = 5908.73;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "quos";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "sint";
                                            fadeType = "FADE_TYPE_UNSPECIFIED";
                                            startTimeOffset = "mollitia";
                                            xy = new NormalizedCoordinate() {{
                                                x = 9689.62;
                                                y = 6521.03;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "ad";
                                            xy = new NormalizedCoordinate() {{
                                                x = 4314.18;
                                                y = 2212.62;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "necessitatibus";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "odit";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "quasi";
                                            xy = new NormalizedCoordinate() {{
                                                x = 4358.65;
                                                y = 9840.43;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "debitis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2603.41;
                                                y = 8061.94;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 5370.23;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 7038.89;
                                        y = 4479.26;
                                    }};
                                    uri = "http://burly-trachoma.info";
                                }};
                            }}),
                        }};
                        pubsubDestination = new PubsubDestination() {{
                            topic = "expedita";
                        }};
                        spriteSheets = new org.openapis.openapi.models.shared.SpriteSheet[]{{
                            add(new SpriteSheet() {{
                                columnCount = 998848;
                                endTimeOffset = "quibusdam";
                                filePrefix = "sed";
                                format = "saepe";
                                interval = "pariatur";
                                quality = 37559;
                                rowCount = 162493;
                                spriteHeightPixels = 508315;
                                spriteWidthPixels = 615560;
                                startTimeOffset = "magni";
                                totalCount = 123820;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 779051;
                                endTimeOffset = "illum";
                                filePrefix = "pariatur";
                                format = "maxime";
                                interval = "ea";
                                quality = 569101;
                                rowCount = 139972;
                                spriteHeightPixels = 407183;
                                spriteWidthPixels = 33222;
                                startTimeOffset = "ab";
                                totalCount = 982575;
                            }}),
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsam", "voluptate");
                        put("autem", "nam");
                        put("eaque", "pariatur");
                    }};
                    name = "nemo";
                }};
                accessToken = "voluptatibus";
                alt = "json";
                callback = "fugiat";
                fields = "amet";
                jobTemplateId = "aut";
                key = "cumque";
                oauthToken = "corporis";
                parent = "hic";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "nobis";
                uploadProtocol = "dolores";
            }}            

            TranscoderProjectsLocationsJobTemplatesCreateResponse res = sdk.projects.transcoderProjectsLocationsJobTemplatesCreate(req, new TranscoderProjectsLocationsJobTemplatesCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.jobTemplate.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `transcoderProjectsLocationsJobTemplatesCreate` - Creates a job template in the specified region.
* `transcoderProjectsLocationsJobTemplatesDelete` - Deletes a job template.
* `transcoderProjectsLocationsJobTemplatesGet` - Returns the job template data.
* `transcoderProjectsLocationsJobTemplatesList` - Lists job templates in the specified region.
* `transcoderProjectsLocationsJobsCreate` - Creates a job in the specified region.
* `transcoderProjectsLocationsJobsList` - Lists jobs in the specified region.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
