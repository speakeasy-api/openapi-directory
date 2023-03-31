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
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesCreatePathParams;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesCreateQueryParams;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesCreateRequest;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesCreateResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranscoderProjectsLocationsJobTemplatesCreateRequest req = new TranscoderProjectsLocationsJobTemplatesCreateRequest() {{
                security = new TranscoderProjectsLocationsJobTemplatesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new TranscoderProjectsLocationsJobTemplatesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new TranscoderProjectsLocationsJobTemplatesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    jobTemplateId = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new JobTemplate() {{
                    config = new JobConfig() {{
                        adBreaks = new org.openapis.openapi.models.shared.AdBreak[]{{
                            add(new AdBreak() {{
                                startTimeOffset = "magnam";
                            }}),
                            add(new AdBreak() {{
                                startTimeOffset = "debitis";
                            }}),
                        }};
                        editList = new org.openapis.openapi.models.shared.EditAtom[]{{
                            add(new EditAtom() {{
                                endTimeOffset = "delectus";
                                inputs = new String[]{{
                                    add("suscipit"),
                                    add("molestiae"),
                                }};
                                key = "minus";
                                startTimeOffset = "placeat";
                            }}),
                        }};
                        elementaryStreams = new org.openapis.openapi.models.shared.ElementaryStream[]{{
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 479977;
                                    channelCount = 568045;
                                    channelLayout = new String[]{{
                                        add("recusandae"),
                                        add("temporibus"),
                                    }};
                                    codec = "ab";
                                    displayName = "quis";
                                    languageCode = "veritatis";
                                    mapping = new org.openapis.openapi.models.shared.AudioMapping[]{{
                                        add(new AudioMapping() {{
                                            atomKey = "perferendis";
                                            gainDb = 3682.41;
                                            inputChannel = 832620;
                                            inputKey = "sapiente";
                                            inputTrack = 778157;
                                            outputChannel = 140350;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "at";
                                            gainDb = 8700.88;
                                            inputChannel = 978619;
                                            inputKey = "molestiae";
                                            inputTrack = 799159;
                                            outputChannel = 800911;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "esse";
                                            gainDb = 5204.78;
                                            inputChannel = 780529;
                                            inputKey = "dolorum";
                                            inputTrack = 118274;
                                            outputChannel = 720633;
                                        }}),
                                    }};
                                    sampleRateHertz = 639921;
                                }};
                                key = "occaecati";
                                textStream = new TextStream() {{
                                    codec = "fugit";
                                    displayName = "deleniti";
                                    languageCode = "hic";
                                    mapping = new org.openapis.openapi.models.shared.TextMapping[]{{
                                        add(new TextMapping() {{
                                            atomKey = "totam";
                                            inputKey = "beatae";
                                            inputTrack = 414662;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "molestiae";
                                            inputKey = "modi";
                                            inputTrack = 186332;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "impedit";
                                            inputKey = "cum";
                                            inputTrack = 456150;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "ipsum";
                                            inputKey = "excepturi";
                                            inputTrack = 135218;
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    h264 = new H264CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 187.89;
                                        bFrameCount = 324141;
                                        bPyramid = false;
                                        bitrateBps = 617636;
                                        crfLevel = 149675;
                                        enableTwoPass = false;
                                        entropyCoder = "iste";
                                        frameRate = 2223.21;
                                        gopDuration = "natus";
                                        gopFrameCount = 386489;
                                        heightPixels = 943749;
                                        pixelFormat = "saepe";
                                        preset = "fuga";
                                        profile = "in";
                                        rateControlMode = "corporis";
                                        tune = "iste";
                                        vbvFullnessBits = 437032;
                                        vbvSizeBits = 902349;
                                        widthPixels = 697631;
                                    }};
                                    h265 = new H265CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 992.8;
                                        bFrameCount = 60225;
                                        bPyramid = false;
                                        bitrateBps = 969810;
                                        crfLevel = 666767;
                                        enableTwoPass = false;
                                        frameRate = 6531.4;
                                        gopDuration = "laborum";
                                        gopFrameCount = 170909;
                                        heightPixels = 210382;
                                        pixelFormat = "corporis";
                                        preset = "explicabo";
                                        profile = "nobis";
                                        rateControlMode = "enim";
                                        tune = "omnis";
                                        vbvFullnessBits = 363711;
                                        vbvSizeBits = 325047;
                                        widthPixels = 570197;
                                    }};
                                    vp9 = new Vp9CodecSettings() {{
                                        bitrateBps = 38425;
                                        crfLevel = 438601;
                                        frameRate = 6342.74;
                                        gopDuration = "doloribus";
                                        gopFrameCount = 958950;
                                        heightPixels = 102044;
                                        pixelFormat = "mollitia";
                                        profile = "dolorem";
                                        rateControlMode = "culpa";
                                        widthPixels = 161309;
                                    }};
                                }};
                            }}),
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 995300;
                                    channelCount = 653108;
                                    channelLayout = new String[]{{
                                        add("numquam"),
                                        add("commodi"),
                                        add("quam"),
                                    }};
                                    codec = "molestiae";
                                    displayName = "velit";
                                    languageCode = "error";
                                    mapping = new org.openapis.openapi.models.shared.AudioMapping[]{{
                                        add(new AudioMapping() {{
                                            atomKey = "quis";
                                            gainDb = 1103.75;
                                            inputChannel = 674752;
                                            inputKey = "animi";
                                            inputTrack = 317202;
                                            outputChannel = 138183;
                                        }}),
                                    }};
                                    sampleRateHertz = 778346;
                                }};
                                key = "sequi";
                                textStream = new TextStream() {{
                                    codec = "tenetur";
                                    displayName = "ipsam";
                                    languageCode = "id";
                                    mapping = new org.openapis.openapi.models.shared.TextMapping[]{{
                                        add(new TextMapping() {{
                                            atomKey = "aut";
                                            inputKey = "quasi";
                                            inputTrack = 622846;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "temporibus";
                                            inputKey = "laborum";
                                            inputTrack = 96098;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "reiciendis";
                                            inputKey = "voluptatibus";
                                            inputTrack = 878194;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "nihil";
                                            inputKey = "praesentium";
                                            inputTrack = 976762;
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    h264 = new H264CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 557.14;
                                        bFrameCount = 604846;
                                        bPyramid = false;
                                        bitrateBps = 451159;
                                        crfLevel = 739264;
                                        enableTwoPass = false;
                                        entropyCoder = "perferendis";
                                        frameRate = 391.87;
                                        gopDuration = "reprehenderit";
                                        gopFrameCount = 282807;
                                        heightPixels = 979587;
                                        pixelFormat = "dicta";
                                        preset = "corporis";
                                        profile = "dolore";
                                        rateControlMode = "iusto";
                                        tune = "dicta";
                                        vbvFullnessBits = 688661;
                                        vbvSizeBits = 317983;
                                        widthPixels = 880476;
                                    }};
                                    h265 = new H265CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 4142.63;
                                        bFrameCount = 918236;
                                        bPyramid = false;
                                        bitrateBps = 64147;
                                        crfLevel = 216822;
                                        enableTwoPass = false;
                                        frameRate = 6924.72;
                                        gopDuration = "molestias";
                                        gopFrameCount = 566602;
                                        heightPixels = 865103;
                                        pixelFormat = "modi";
                                        preset = "praesentium";
                                        profile = "rem";
                                        rateControlMode = "voluptates";
                                        tune = "quasi";
                                        vbvFullnessBits = 921158;
                                        vbvSizeBits = 575947;
                                        widthPixels = 83112;
                                    }};
                                    vp9 = new Vp9CodecSettings() {{
                                        bitrateBps = 929297;
                                        crfLevel = 277718;
                                        frameRate = 3185.69;
                                        gopDuration = "consequatur";
                                        gopFrameCount = 667411;
                                        heightPixels = 842342;
                                        pixelFormat = "explicabo";
                                        profile = "deserunt";
                                        rateControlMode = "distinctio";
                                        widthPixels = 841386;
                                    }};
                                }};
                            }}),
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 289406;
                                    channelCount = 264730;
                                    channelLayout = new String[]{{
                                        add("aliquid"),
                                    }};
                                    codec = "cupiditate";
                                    displayName = "quos";
                                    languageCode = "perferendis";
                                    mapping = new org.openapis.openapi.models.shared.AudioMapping[]{{
                                        add(new AudioMapping() {{
                                            atomKey = "assumenda";
                                            gainDb = 3698.08;
                                            inputChannel = 4695;
                                            inputKey = "fugit";
                                            inputTrack = 677817;
                                            outputChannel = 569618;
                                        }}),
                                    }};
                                    sampleRateHertz = 270008;
                                }};
                                key = "facilis";
                                textStream = new TextStream() {{
                                    codec = "tempore";
                                    displayName = "labore";
                                    languageCode = "delectus";
                                    mapping = new org.openapis.openapi.models.shared.TextMapping[]{{
                                        add(new TextMapping() {{
                                            atomKey = "non";
                                            inputKey = "eligendi";
                                            inputTrack = 576157;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "aliquid";
                                            inputKey = "provident";
                                            inputTrack = 896039;
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    h264 = new H264CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 5722.52;
                                        bFrameCount = 638921;
                                        bPyramid = false;
                                        bitrateBps = 223081;
                                        crfLevel = 891555;
                                        enableTwoPass = false;
                                        entropyCoder = "a";
                                        frameRate = 6800.56;
                                        gopDuration = "in";
                                        gopFrameCount = 449198;
                                        heightPixels = 846409;
                                        pixelFormat = "maiores";
                                        preset = "rerum";
                                        profile = "dicta";
                                        rateControlMode = "magnam";
                                        tune = "cumque";
                                        vbvFullnessBits = 813798;
                                        vbvSizeBits = 411820;
                                        widthPixels = 396506;
                                    }};
                                    h265 = new H265CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 6754.39;
                                        bFrameCount = 881104;
                                        bPyramid = false;
                                        bitrateBps = 249796;
                                        crfLevel = 581273;
                                        enableTwoPass = false;
                                        frameRate = 3132.18;
                                        gopDuration = "accusamus";
                                        gopFrameCount = 965417;
                                        heightPixels = 692532;
                                        pixelFormat = "provident";
                                        preset = "nam";
                                        profile = "id";
                                        rateControlMode = "blanditiis";
                                        tune = "deleniti";
                                        vbvFullnessBits = 956084;
                                        vbvSizeBits = 230533;
                                        widthPixels = 643990;
                                    }};
                                    vp9 = new Vp9CodecSettings() {{
                                        bitrateBps = 394869;
                                        crfLevel = 423855;
                                        frameRate = 6188.09;
                                        gopDuration = "omnis";
                                        gopFrameCount = 474867;
                                        heightPixels = 19193;
                                        pixelFormat = "nihil";
                                        profile = "magnam";
                                        rateControlMode = "distinctio";
                                        widthPixels = 660174;
                                    }};
                                }};
                            }}),
                        }};
                        inputs = new org.openapis.openapi.models.shared.Input[]{{
                            add(new Input() {{
                                key = "labore";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 3834.62;
                                    }};
                                    color = new Color() {{
                                        brightness = 6180.16;
                                        contrast = 7491.7;
                                        saturation = 4287.69;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 878453;
                                        leftPixels = 135474;
                                        rightPixels = 102863;
                                        topPixels = 298282;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 923.73;
                                    }};
                                    deinterlace = new Deinterlace() {{
                                        bwdif = new BwdifConfig() {{
                                            deinterlaceAllFrames = false;
                                            mode = "excepturi";
                                            parity = "ullam";
                                        }};
                                        yadif = new YadifConfig() {{
                                            deinterlaceAllFrames = false;
                                            disableSpatialInterlacing = false;
                                            mode = "provident";
                                            parity = "quos";
                                        }};
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 5743.25;
                                        tune = "accusantium";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 653201;
                                        leftPixels = 968962;
                                        rightPixels = 652103;
                                        topPixels = 320997;
                                    }};
                                }};
                                uri = "http://easy-going-term.com";
                            }}),
                            add(new Input() {{
                                key = "nemo";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 972.6;
                                    }};
                                    color = new Color() {{
                                        brightness = 4358.65;
                                        contrast = 9840.43;
                                        saturation = 8919.24;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 260341;
                                        leftPixels = 806194;
                                        rightPixels = 537023;
                                        topPixels = 703889;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 4479.26;
                                    }};
                                    deinterlace = new Deinterlace() {{
                                        bwdif = new BwdifConfig() {{
                                            deinterlaceAllFrames = false;
                                            mode = "architecto";
                                            parity = "architecto";
                                        }};
                                        yadif = new YadifConfig() {{
                                            deinterlaceAllFrames = false;
                                            disableSpatialInterlacing = false;
                                            mode = "repudiandae";
                                            parity = "ullam";
                                        }};
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 7142.42;
                                        tune = "nihil";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 998848;
                                        leftPixels = 841140;
                                        rightPixels = 149448;
                                        topPixels = 904648;
                                    }};
                                }};
                                uri = "https://another-circuit.name";
                            }}),
                        }};
                        manifests = new org.openapis.openapi.models.shared.Manifest[]{{
                            add(new Manifest() {{
                                fileName = "magni";
                                muxStreams = new String[]{{
                                    add("quo"),
                                }};
                                type = "DASH";
                            }}),
                            add(new Manifest() {{
                                fileName = "pariatur";
                                muxStreams = new String[]{{
                                    add("ea"),
                                    add("excepturi"),
                                    add("odit"),
                                    add("ea"),
                                }};
                                type = "MANIFEST_TYPE_UNSPECIFIED";
                            }}),
                            add(new Manifest() {{
                                fileName = "ab";
                                muxStreams = new String[]{{
                                    add("quidem"),
                                    add("ipsam"),
                                    add("voluptate"),
                                    add("autem"),
                                }};
                                type = "DASH";
                            }}),
                        }};
                        muxStreams = new org.openapis.openapi.models.shared.MuxStream[]{{
                            add(new MuxStream() {{
                                container = "pariatur";
                                elementaryStreams = new String[]{{
                                    add("voluptatibus"),
                                    add("perferendis"),
                                }};
                                fileName = "fugiat";
                                key = "amet";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "aut";
                                }};
                            }}),
                        }};
                        output = new Output() {{
                            uri = "https://grubby-urge.net";
                        }};
                        overlays = new org.openapis.openapi.models.shared.Overlay[]{{
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "quis";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "totam";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "eaque";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3389.85;
                                                y = 1999.96;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "eos";
                                            xy = new NormalizedCoordinate() {{
                                                x = 185.21;
                                                y = 1709.86;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 7936.98;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 4634.51;
                                        y = 2239.24;
                                    }};
                                    uri = "https://grandiose-urge.org";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "facilis";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "perspiciatis";
                                            fadeType = "FADE_TYPE_UNSPECIFIED";
                                            startTimeOffset = "porro";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1646.94;
                                                y = 5000.26;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "error";
                                            xy = new NormalizedCoordinate() {{
                                                x = 503.7;
                                                y = 5772.29;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "rerum";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "adipisci";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "earum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2672.62;
                                                y = 6139.66;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "dolorum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 5356.33;
                                                y = 8642.82;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "provident";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "nobis";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "delectus";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3119.45;
                                                y = 5542.42;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "aliquid";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2123.9;
                                                y = 2098.43;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 2224.43;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 1861.93;
                                        y = 2187.49;
                                    }};
                                    uri = "https://nimble-reporter.info";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "reiciendis";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "amet";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "numquam";
                                            xy = new NormalizedCoordinate() {{
                                                x = 852.95;
                                                y = 580.29;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "ipsa";
                                            xy = new NormalizedCoordinate() {{
                                                x = 4344.17;
                                                y = 4878.38;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "quaerat";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "accusamus";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "voluptatibus";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3777.52;
                                                y = 6176.58;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "eos";
                                            xy = new NormalizedCoordinate() {{
                                                x = 5424.99;
                                                y = 246.78;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 8546.14;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 672.49;
                                        y = 7438.35;
                                    }};
                                    uri = "https://late-in-laws.net";
                                }};
                            }}),
                        }};
                        pubsubDestination = new PubsubDestination() {{
                            topic = "deleniti";
                        }};
                        spriteSheets = new org.openapis.openapi.models.shared.SpriteSheet[]{{
                            add(new SpriteSheet() {{
                                columnCount = 896672;
                                endTimeOffset = "distinctio";
                                filePrefix = "asperiores";
                                format = "nihil";
                                interval = "ipsum";
                                quality = 456015;
                                rowCount = 663078;
                                spriteHeightPixels = 906418;
                                spriteWidthPixels = 263322;
                                startTimeOffset = "aspernatur";
                                totalCount = 20651;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 229219;
                                endTimeOffset = "optio";
                                filePrefix = "accusamus";
                                format = "ad";
                                interval = "saepe";
                                quality = 383464;
                                rowCount = 645785;
                                spriteHeightPixels = 588317;
                                spriteWidthPixels = 324683;
                                startTimeOffset = "repellendus";
                                totalCount = 519711;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 628982;
                                endTimeOffset = "alias";
                                filePrefix = "at";
                                format = "quaerat";
                                interval = "tempora";
                                quality = 425451;
                                rowCount = 798047;
                                spriteHeightPixels = 885338;
                                spriteWidthPixels = 185636;
                                startTimeOffset = "dolorum";
                                totalCount = 952792;
                            }}),
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("harum", "iusto");
                        put("ipsum", "quisquam");
                    }};
                    name = "tenetur";
                }};
            }};            

            TranscoderProjectsLocationsJobTemplatesCreateResponse res = sdk.projects.transcoderProjectsLocationsJobTemplatesCreate(req);

            if (res.jobTemplate.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


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
