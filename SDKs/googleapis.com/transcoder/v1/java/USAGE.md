<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesCreateRequest;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesCreateResponse;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesCreateSecurity;
import org.openapis.openapi.models.shared.AdBreak;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Animation;
import org.openapis.openapi.models.shared.AnimationEnd;
import org.openapis.openapi.models.shared.AnimationFade;
import org.openapis.openapi.models.shared.AnimationFadeFadeTypeEnum;
import org.openapis.openapi.models.shared.AnimationStatic;
import org.openapis.openapi.models.shared.Audio;
import org.openapis.openapi.models.shared.AudioMapping;
import org.openapis.openapi.models.shared.AudioStream;
import org.openapis.openapi.models.shared.BwdifConfig;
import org.openapis.openapi.models.shared.Color;
import org.openapis.openapi.models.shared.Crop;
import org.openapis.openapi.models.shared.Deblock;
import org.openapis.openapi.models.shared.Deinterlace;
import org.openapis.openapi.models.shared.Denoise;
import org.openapis.openapi.models.shared.EditAtom;
import org.openapis.openapi.models.shared.ElementaryStream;
import org.openapis.openapi.models.shared.H264CodecSettings;
import org.openapis.openapi.models.shared.H265CodecSettings;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.Input;
import org.openapis.openapi.models.shared.JobConfig;
import org.openapis.openapi.models.shared.JobTemplate;
import org.openapis.openapi.models.shared.Manifest;
import org.openapis.openapi.models.shared.ManifestTypeEnum;
import org.openapis.openapi.models.shared.MuxStream;
import org.openapis.openapi.models.shared.NormalizedCoordinate;
import org.openapis.openapi.models.shared.Output;
import org.openapis.openapi.models.shared.Overlay;
import org.openapis.openapi.models.shared.Pad;
import org.openapis.openapi.models.shared.PreprocessingConfig;
import org.openapis.openapi.models.shared.PubsubDestination;
import org.openapis.openapi.models.shared.SegmentSettings;
import org.openapis.openapi.models.shared.SpriteSheet;
import org.openapis.openapi.models.shared.TextMapping;
import org.openapis.openapi.models.shared.TextStream;
import org.openapis.openapi.models.shared.VideoStream;
import org.openapis.openapi.models.shared.Vp9CodecSettings;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YadifConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranscoderProjectsLocationsJobTemplatesCreateRequest req = new TranscoderProjectsLocationsJobTemplatesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                jobTemplate = new JobTemplate() {{
                    config = new JobConfig() {{
                        adBreaks = new org.openapis.openapi.models.shared.AdBreak[]{{
                            add(new AdBreak() {{
                                startTimeOffset = "quibusdam";
                            }}),
                            add(new AdBreak() {{
                                startTimeOffset = "unde";
                            }}),
                            add(new AdBreak() {{
                                startTimeOffset = "nulla";
                            }}),
                        }};
                        editList = new org.openapis.openapi.models.shared.EditAtom[]{{
                            add(new EditAtom() {{
                                endTimeOffset = "illum";
                                inputs = new String[]{{
                                    add("error"),
                                    add("deserunt"),
                                }};
                                key = "suscipit";
                                startTimeOffset = "iure";
                            }}),
                            add(new EditAtom() {{
                                endTimeOffset = "magnam";
                                inputs = new String[]{{
                                    add("ipsa"),
                                    add("delectus"),
                                    add("tempora"),
                                    add("suscipit"),
                                }};
                                key = "molestiae";
                                startTimeOffset = "minus";
                            }}),
                            add(new EditAtom() {{
                                endTimeOffset = "placeat";
                                inputs = new String[]{{
                                    add("iusto"),
                                    add("excepturi"),
                                    add("nisi"),
                                }};
                                key = "recusandae";
                                startTimeOffset = "temporibus";
                            }}),
                        }};
                        elementaryStreams = new org.openapis.openapi.models.shared.ElementaryStream[]{{
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 337396;
                                    channelCount = 87129;
                                    channelLayout = new String[]{{
                                        add("perferendis"),
                                        add("ipsam"),
                                        add("repellendus"),
                                    }};
                                    codec = "sapiente";
                                    displayName = "quo";
                                    languageCode = "odit";
                                    mapping = new org.openapis.openapi.models.shared.AudioMapping[]{{
                                        add(new AudioMapping() {{
                                            atomKey = "at";
                                            gainDb = 9786.19;
                                            inputChannel = 473608;
                                            inputKey = "quod";
                                            inputTrack = 800911;
                                            outputChannel = 461479;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "totam";
                                            gainDb = 7805.29;
                                            inputChannel = 678880;
                                            inputKey = "dicta";
                                            inputTrack = 720633;
                                            outputChannel = 639921;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "occaecati";
                                            gainDb = 1433.53;
                                            inputChannel = 537373;
                                            inputKey = "hic";
                                            inputTrack = 758616;
                                            outputChannel = 521848;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "beatae";
                                            gainDb = 4146.62;
                                            inputChannel = 473600;
                                            inputKey = "modi";
                                            inputTrack = 186332;
                                            outputChannel = 774234;
                                        }}),
                                    }};
                                    sampleRateHertz = 736918;
                                }};
                                key = "esse";
                                textStream = new TextStream() {{
                                    codec = "ipsum";
                                    displayName = "excepturi";
                                    languageCode = "aspernatur";
                                    mapping = new org.openapis.openapi.models.shared.TextMapping[]{{
                                        add(new TextMapping() {{
                                            atomKey = "ad";
                                            inputKey = "natus";
                                            inputTrack = 149675;
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    h264 = new H264CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 6120.96;
                                        bFrameCount = 222321;
                                        bPyramid = false;
                                        bitrateBps = 616934;
                                        crfLevel = 386489;
                                        enableTwoPass = false;
                                        entropyCoder = "hic";
                                        frameRate = 9025.99;
                                        gopDuration = "fuga";
                                        gopFrameCount = 449950;
                                        heightPixels = 359508;
                                        pixelFormat = "iste";
                                        preset = "iure";
                                        profile = "saepe";
                                        rateControlMode = "quidem";
                                        tune = "architecto";
                                        vbvFullnessBits = 60225;
                                        vbvSizeBits = 969810;
                                        widthPixels = 666767;
                                    }};
                                    h265 = new H265CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 6531.4;
                                        bFrameCount = 670638;
                                        bPyramid = false;
                                        bitrateBps = 170909;
                                        crfLevel = 210382;
                                        enableTwoPass = false;
                                        frameRate = 3581.52;
                                        gopDuration = "explicabo";
                                        gopFrameCount = 750686;
                                        heightPixels = 315428;
                                        pixelFormat = "omnis";
                                        preset = "nemo";
                                        profile = "minima";
                                        rateControlMode = "excepturi";
                                        tune = "accusantium";
                                        vbvFullnessBits = 438601;
                                        vbvSizeBits = 634274;
                                        widthPixels = 988374;
                                    }};
                                    vp9 = new Vp9CodecSettings() {{
                                        bitrateBps = 958950;
                                        crfLevel = 102044;
                                        frameRate = 6527.9;
                                        gopDuration = "dolorem";
                                        gopFrameCount = 635059;
                                        heightPixels = 161309;
                                        pixelFormat = "repellat";
                                        profile = "mollitia";
                                        rateControlMode = "occaecati";
                                        widthPixels = 253291;
                                    }};
                                }};
                            }}),
                        }};
                        inputs = new org.openapis.openapi.models.shared.Input[]{{
                            add(new Input() {{
                                key = "quam";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 4746.97;
                                    }};
                                    color = new Color() {{
                                        brightness = 2444.25;
                                        contrast = 6235.1;
                                        saturation = 1589.69;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 338007;
                                        leftPixels = 110375;
                                        rightPixels = 674752;
                                        topPixels = 656330;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 3172.02;
                                    }};
                                    deinterlace = new Deinterlace() {{
                                        bwdif = new BwdifConfig() {{
                                            deinterlaceAllFrames = false;
                                            mode = "odit";
                                            parity = "quo";
                                        }};
                                        yadif = new YadifConfig() {{
                                            deinterlaceAllFrames = false;
                                            disableSpatialInterlacing = false;
                                            mode = "sequi";
                                            parity = "tenetur";
                                        }};
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 3687.25;
                                        tune = "id";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 820994;
                                        leftPixels = 13571;
                                        rightPixels = 97101;
                                        topPixels = 622846;
                                    }};
                                }};
                                uri = "https://quirky-boot.org";
                            }}),
                            add(new Input() {{
                                key = "voluptatibus";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 8781.94;
                                    }};
                                    color = new Color() {{
                                        brightness = 4686.51;
                                        contrast = 5096.24;
                                        saturation = 9767.62;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 55714;
                                        leftPixels = 604846;
                                        rightPixels = 451159;
                                        topPixels = 739264;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 199.87;
                                    }};
                                    deinterlace = new Deinterlace() {{
                                        bwdif = new BwdifConfig() {{
                                            deinterlaceAllFrames = false;
                                            mode = "doloremque";
                                            parity = "reprehenderit";
                                        }};
                                        yadif = new YadifConfig() {{
                                            deinterlaceAllFrames = false;
                                            disableSpatialInterlacing = false;
                                            mode = "ut";
                                            parity = "maiores";
                                        }};
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 1201.96;
                                        tune = "corporis";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 296140;
                                        leftPixels = 480894;
                                        rightPixels = 118727;
                                        topPixels = 688661;
                                    }};
                                }};
                                uri = "http://unacceptable-hare.org";
                            }}),
                        }};
                        manifests = new org.openapis.openapi.models.shared.Manifest[]{{
                            add(new Manifest() {{
                                fileName = "ipsum";
                                muxStreams = new String[]{{
                                    add("molestias"),
                                    add("excepturi"),
                                    add("pariatur"),
                                }};
                                type = ManifestTypeEnum.MANIFEST_TYPE_UNSPECIFIED;
                            }}),
                        }};
                        muxStreams = new org.openapis.openapi.models.shared.MuxStream[]{{
                            add(new MuxStream() {{
                                container = "rem";
                                elementaryStreams = new String[]{{
                                    add("quasi"),
                                    add("repudiandae"),
                                    add("sint"),
                                    add("veritatis"),
                                }};
                                fileName = "itaque";
                                key = "incidunt";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "enim";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "consequatur";
                                elementaryStreams = new String[]{{
                                    add("quibusdam"),
                                    add("explicabo"),
                                    add("deserunt"),
                                }};
                                fileName = "distinctio";
                                key = "quibusdam";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "labore";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "modi";
                                elementaryStreams = new String[]{{
                                    add("aliquid"),
                                }};
                                fileName = "cupiditate";
                                key = "quos";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "perferendis";
                                }};
                            }}),
                        }};
                        output = new Output() {{
                            uri = "http://svelte-frosting.com";
                        }};;
                        overlays = new org.openapis.openapi.models.shared.Overlay[]{{
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "excepturi";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "tempora";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_OUT;
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
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "sint";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "aliquid";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "necessitatibus";
                                            xy = new NormalizedCoordinate() {{
                                                x = 5722.52;
                                                y = 6389.21;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "dolor";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8915.55;
                                                y = 9527.49;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "dolorum";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "in";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "illum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 9785.71;
                                                y = 6994.79;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "dicta";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2974.37;
                                                y = 7670.24;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 8137.98;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 4118.2;
                                        y = 3965.06;
                                    }};
                                    uri = "https://unaware-department.name";
                                }};
                            }}),
                        }};
                        pubsubDestination = new PubsubDestination() {{
                            topic = "enim";
                        }};;
                        spriteSheets = new org.openapis.openapi.models.shared.SpriteSheet[]{{
                            add(new SpriteSheet() {{
                                columnCount = 965417;
                                endTimeOffset = "quidem";
                                filePrefix = "provident";
                                format = "nam";
                                interval = "id";
                                quality = 501324;
                                rowCount = 533206;
                                spriteHeightPixels = 956084;
                                spriteWidthPixels = 230533;
                                startTimeOffset = "deserunt";
                                totalCount = 394869;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 423855;
                                endTimeOffset = "natus";
                                filePrefix = "omnis";
                                format = "molestiae";
                                interval = "perferendis";
                                quality = 470132;
                                rowCount = 301575;
                                spriteHeightPixels = 716075;
                                spriteWidthPixels = 660174;
                                startTimeOffset = "labore";
                                totalCount = 290077;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 383462;
                                endTimeOffset = "natus";
                                filePrefix = "nobis";
                                format = "eum";
                                interval = "vero";
                                quality = 135474;
                                rowCount = 102863;
                                spriteHeightPixels = 298282;
                                spriteWidthPixels = 92373;
                                startTimeOffset = "excepturi";
                                totalCount = 354047;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 590873;
                                endTimeOffset = "quos";
                                filePrefix = "sint";
                                format = "accusantium";
                                interval = "mollitia";
                                quality = 968962;
                                rowCount = 652103;
                                spriteHeightPixels = 320997;
                                spriteWidthPixels = 431418;
                                startTimeOffset = "dolor";
                                totalCount = 896547;
                            }}),
                        }};
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("nemo", "quasi");
                    }};
                    name = "Melba Toy";
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "architecto";
                jobTemplateId = "architecto";
                key = "repudiandae";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "nihil";
                uploadProtocol = "repellat";
            }};            

            TranscoderProjectsLocationsJobTemplatesCreateResponse res = sdk.projects.transcoderProjectsLocationsJobTemplatesCreate(req, new TranscoderProjectsLocationsJobTemplatesCreateSecurity("quibusdam", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.jobTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->