# projects

### Available Operations

* [transcoderProjectsLocationsJobTemplatesCreate](#transcoderprojectslocationsjobtemplatescreate) - Creates a job template in the specified region.
* [transcoderProjectsLocationsJobTemplatesDelete](#transcoderprojectslocationsjobtemplatesdelete) - Deletes a job template.
* [transcoderProjectsLocationsJobTemplatesGet](#transcoderprojectslocationsjobtemplatesget) - Returns the job template data.
* [transcoderProjectsLocationsJobTemplatesList](#transcoderprojectslocationsjobtemplateslist) - Lists job templates in the specified region.
* [transcoderProjectsLocationsJobsCreate](#transcoderprojectslocationsjobscreate) - Creates a job in the specified region.
* [transcoderProjectsLocationsJobsList](#transcoderprojectslocationsjobslist) - Lists jobs in the specified region.

## transcoderProjectsLocationsJobTemplatesCreate

Creates a job template in the specified region.

### Example Usage

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

            TranscoderProjectsLocationsJobTemplatesCreateRequest req = new TranscoderProjectsLocationsJobTemplatesCreateRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                jobTemplate = new JobTemplate() {{
                    config = new JobConfig() {{
                        adBreaks = new org.openapis.openapi.models.shared.AdBreak[]{{
                            add(new AdBreak() {{
                                startTimeOffset = "consequuntur";
                            }}),
                        }};
                        editList = new org.openapis.openapi.models.shared.EditAtom[]{{
                            add(new EditAtom() {{
                                endTimeOffset = "natus";
                                inputs = new String[]{{
                                    add("sunt"),
                                }};
                                key = "quo";
                                startTimeOffset = "illum";
                            }}),
                            add(new EditAtom() {{
                                endTimeOffset = "pariatur";
                                inputs = new String[]{{
                                    add("ea"),
                                    add("excepturi"),
                                    add("odit"),
                                    add("ea"),
                                }};
                                key = "accusantium";
                                startTimeOffset = "ab";
                            }}),
                            add(new EditAtom() {{
                                endTimeOffset = "maiores";
                                inputs = new String[]{{
                                    add("ipsam"),
                                    add("voluptate"),
                                    add("autem"),
                                }};
                                key = "nam";
                                startTimeOffset = "eaque";
                            }}),
                        }};
                        elementaryStreams = new org.openapis.openapi.models.shared.ElementaryStream[]{{
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 365496;
                                    channelCount = 975522;
                                    channelLayout = new String[]{{
                                        add("fugiat"),
                                    }};
                                    codec = "amet";
                                    displayName = "aut";
                                    languageCode = "cumque";
                                    mapping = new org.openapis.openapi.models.shared.AudioMapping[]{{
                                        add(new AudioMapping() {{
                                            atomKey = "hic";
                                            gainDb = 7299.91;
                                            inputChannel = 749999;
                                            inputKey = "dolores";
                                            inputTrack = 339404;
                                            outputChannel = 521037;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "dignissimos";
                                            gainDb = 543.38;
                                            inputChannel = 338985;
                                            inputKey = "nesciunt";
                                            inputTrack = 179490;
                                            outputChannel = 18521;
                                        }}),
                                    }};
                                    sampleRateHertz = 170986;
                                }};
                                key = "minus";
                                textStream = new TextStream() {{
                                    codec = "quam";
                                    displayName = "dolor";
                                    languageCode = "vero";
                                    mapping = new org.openapis.openapi.models.shared.TextMapping[]{{
                                        add(new TextMapping() {{
                                            atomKey = "hic";
                                            inputKey = "recusandae";
                                            inputTrack = 608253;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "facilis";
                                            inputKey = "perspiciatis";
                                            inputTrack = 31838;
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    h264 = new H264CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 7836.45;
                                        bFrameCount = 164694;
                                        bPyramid = false;
                                        bitrateBps = 500026;
                                        crfLevel = 621479;
                                        enableTwoPass = false;
                                        entropyCoder = "eaque";
                                        frameRate = 5772.29;
                                        gopDuration = "rerum";
                                        gopFrameCount = 237893;
                                        heightPixels = 992397;
                                        pixelFormat = "earum";
                                        preset = "modi";
                                        profile = "iste";
                                        rateControlMode = "dolorum";
                                        tune = "deleniti";
                                        vbvFullnessBits = 864282;
                                        vbvSizeBits = 589910;
                                        widthPixels = 750844;
                                    }};
                                    h265 = new H265CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 7301.22;
                                        bFrameCount = 964490;
                                        bPyramid = false;
                                        bitrateBps = 311945;
                                        crfLevel = 554242;
                                        enableTwoPass = false;
                                        frameRate = 3982.21;
                                        gopDuration = "dolorem";
                                        gopFrameCount = 209843;
                                        heightPixels = 222443;
                                        pixelFormat = "qui";
                                        preset = "ipsum";
                                        profile = "hic";
                                        rateControlMode = "excepturi";
                                        tune = "cum";
                                        vbvFullnessBits = 452109;
                                        vbvSizeBits = 490459;
                                        widthPixels = 970237;
                                    }};
                                    vp9 = new Vp9CodecSettings() {{
                                        bitrateBps = 227414;
                                        crfLevel = 680545;
                                        frameRate = 2543.56;
                                        gopDuration = "veritatis";
                                        gopFrameCount = 58029;
                                        heightPixels = 56418;
                                        pixelFormat = "iure";
                                        profile = "odio";
                                        rateControlMode = "quaerat";
                                        widthPixels = 881005;
                                    }};
                                }};
                            }}),
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 696344;
                                    channelCount = 976405;
                                    channelLayout = new String[]{{
                                        add("natus"),
                                        add("eos"),
                                    }};
                                    codec = "atque";
                                    displayName = "sit";
                                    languageCode = "fugiat";
                                    mapping = new org.openapis.openapi.models.shared.AudioMapping[]{{
                                        add(new AudioMapping() {{
                                            atomKey = "soluta";
                                            gainDb = 6793.93;
                                            inputChannel = 478596;
                                            inputKey = "voluptate";
                                            inputTrack = 677082;
                                            outputChannel = 536579;
                                        }}),
                                    }};
                                    sampleRateHertz = 607045;
                                }};
                                key = "necessitatibus";
                                textStream = new TextStream() {{
                                    codec = "distinctio";
                                    displayName = "asperiores";
                                    languageCode = "nihil";
                                    mapping = new org.openapis.openapi.models.shared.TextMapping[]{{
                                        add(new TextMapping() {{
                                            atomKey = "voluptate";
                                            inputKey = "id";
                                            inputTrack = 906418;
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    h264 = new H264CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 2633.22;
                                        bFrameCount = 137220;
                                        bPyramid = false;
                                        bitrateBps = 20651;
                                        crfLevel = 229219;
                                        enableTwoPass = false;
                                        entropyCoder = "optio";
                                        frameRate = 8815.86;
                                        gopDuration = "ad";
                                        gopFrameCount = 904425;
                                        heightPixels = 383464;
                                        pixelFormat = "deserunt";
                                        preset = "provident";
                                        profile = "minima";
                                        rateControlMode = "repellendus";
                                        tune = "totam";
                                        vbvFullnessBits = 628982;
                                        vbvSizeBits = 55;
                                        widthPixels = 872651;
                                    }};
                                    h265 = new H265CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 3118.6;
                                        bFrameCount = 273542;
                                        bPyramid = false;
                                        bitrateBps = 425451;
                                        crfLevel = 798047;
                                        enableTwoPass = false;
                                        frameRate = 8853.38;
                                        gopDuration = "qui";
                                        gopFrameCount = 679880;
                                        heightPixels = 952792;
                                        pixelFormat = "esse";
                                        preset = "harum";
                                        profile = "iusto";
                                        rateControlMode = "ipsum";
                                        tune = "quisquam";
                                        vbvFullnessBits = 947371;
                                        vbvSizeBits = 229442;
                                        widthPixels = 730856;
                                    }};
                                    vp9 = new Vp9CodecSettings() {{
                                        bitrateBps = 880298;
                                        crfLevel = 253941;
                                        frameRate = 3136.92;
                                        gopDuration = "dolorem";
                                        gopFrameCount = 957451;
                                        heightPixels = 518201;
                                        pixelFormat = "nihil";
                                        profile = "sit";
                                        rateControlMode = "expedita";
                                        widthPixels = 207470;
                                    }};
                                }};
                            }}),
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 153694;
                                    channelCount = 424685;
                                    channelLayout = new String[]{{
                                        add("voluptas"),
                                        add("deserunt"),
                                        add("quam"),
                                    }};
                                    codec = "ipsum";
                                    displayName = "incidunt";
                                    languageCode = "qui";
                                    mapping = new org.openapis.openapi.models.shared.AudioMapping[]{{
                                        add(new AudioMapping() {{
                                            atomKey = "maxime";
                                            gainDb = 8638.56;
                                            inputChannel = 747080;
                                            inputKey = "dicta";
                                            inputTrack = 674848;
                                            outputChannel = 517379;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "incidunt";
                                            gainDb = 1320.68;
                                            inputChannel = 174909;
                                            inputKey = "distinctio";
                                            inputTrack = 704474;
                                            outputChannel = 396060;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "quam";
                                            gainDb = 5654.21;
                                            inputChannel = 840429;
                                            inputKey = "qui";
                                            inputTrack = 204865;
                                            outputChannel = 144847;
                                        }}),
                                    }};
                                    sampleRateHertz = 164959;
                                }};
                                key = "odio";
                                textStream = new TextStream() {{
                                    codec = "sunt";
                                    displayName = "ullam";
                                    languageCode = "nam";
                                    mapping = new org.openapis.openapi.models.shared.TextMapping[]{{
                                        add(new TextMapping() {{
                                            atomKey = "voluptatem";
                                            inputKey = "cumque";
                                            inputTrack = 746994;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "nobis";
                                            inputKey = "et";
                                            inputTrack = 903720;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "ipsum";
                                            inputKey = "veritatis";
                                            inputTrack = 749255;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "quos";
                                            inputKey = "tempore";
                                            inputTrack = 584476;
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    h264 = new H264CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 456.14;
                                        bFrameCount = 961937;
                                        bPyramid = false;
                                        bitrateBps = 209157;
                                        crfLevel = 292147;
                                        enableTwoPass = false;
                                        entropyCoder = "labore";
                                        frameRate = 2408.29;
                                        gopDuration = "dolorum";
                                        gopFrameCount = 100294;
                                        heightPixels = 63038;
                                        pixelFormat = "aut";
                                        preset = "quas";
                                        profile = "itaque";
                                        rateControlMode = "consequatur";
                                        tune = "est";
                                        vbvFullnessBits = 833038;
                                        vbvSizeBits = 785153;
                                        widthPixels = 984330;
                                    }};
                                    h265 = new H265CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 2817.3;
                                        bFrameCount = 703495;
                                        bPyramid = false;
                                        bitrateBps = 586410;
                                        crfLevel = 181631;
                                        enableTwoPass = false;
                                        frameRate = 639.55;
                                        gopDuration = "laudantium";
                                        gopFrameCount = 485628;
                                        heightPixels = 580447;
                                        pixelFormat = "voluptatibus";
                                        preset = "quisquam";
                                        profile = "vero";
                                        rateControlMode = "omnis";
                                        tune = "quis";
                                        vbvFullnessBits = 218403;
                                        vbvSizeBits = 961571;
                                        widthPixels = 455169;
                                    }};
                                    vp9 = new Vp9CodecSettings() {{
                                        bitrateBps = 231701;
                                        crfLevel = 878870;
                                        frameRate = 9493.19;
                                        gopDuration = "dignissimos";
                                        gopFrameCount = 941378;
                                        heightPixels = 715561;
                                        pixelFormat = "quod";
                                        profile = "odio";
                                        rateControlMode = "similique";
                                        widthPixels = 708548;
                                    }};
                                }};
                            }}),
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 874288;
                                    channelCount = 498140;
                                    channelLayout = new String[]{{
                                        add("quibusdam"),
                                        add("illum"),
                                    }};
                                    codec = "sequi";
                                    displayName = "natus";
                                    languageCode = "impedit";
                                    mapping = new org.openapis.openapi.models.shared.AudioMapping[]{{
                                        add(new AudioMapping() {{
                                            atomKey = "voluptatibus";
                                            gainDb = 3472.33;
                                            inputChannel = 862310;
                                            inputKey = "fugit";
                                            inputTrack = 780427;
                                            outputChannel = 981830;
                                        }}),
                                    }};
                                    sampleRateHertz = 985033;
                                }};
                                key = "iusto";
                                textStream = new TextStream() {{
                                    codec = "eligendi";
                                    displayName = "ducimus";
                                    languageCode = "alias";
                                    mapping = new org.openapis.openapi.models.shared.TextMapping[]{{
                                        add(new TextMapping() {{
                                            atomKey = "tempora";
                                            inputKey = "ipsam";
                                            inputTrack = 410492;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "aspernatur";
                                            inputKey = "vel";
                                            inputTrack = 822118;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "magnam";
                                            inputKey = "ratione";
                                            inputTrack = 401132;
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    h264 = new H264CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 5113.19;
                                        bFrameCount = 120657;
                                        bPyramid = false;
                                        bitrateBps = 224317;
                                        crfLevel = 980700;
                                        enableTwoPass = false;
                                        entropyCoder = "quasi";
                                        frameRate = 4061.2;
                                        gopDuration = "nulla";
                                        gopFrameCount = 569211;
                                        heightPixels = 972920;
                                        pixelFormat = "nostrum";
                                        preset = "sapiente";
                                        profile = "quisquam";
                                        rateControlMode = "saepe";
                                        tune = "ea";
                                        vbvFullnessBits = 774048;
                                        vbvSizeBits = 359271;
                                        widthPixels = 333145;
                                    }};
                                    h265 = new H265CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 3994.99;
                                        bFrameCount = 81101;
                                        bPyramid = false;
                                        bitrateBps = 301831;
                                        crfLevel = 407241;
                                        enableTwoPass = false;
                                        frameRate = 7752.2;
                                        gopDuration = "consectetur";
                                        gopFrameCount = 926213;
                                        heightPixels = 132487;
                                        pixelFormat = "minima";
                                        preset = "eaque";
                                        profile = "a";
                                        rateControlMode = "libero";
                                        tune = "aut";
                                        vbvFullnessBits = 11427;
                                        vbvSizeBits = 533466;
                                        widthPixels = 770581;
                                    }};
                                    vp9 = new Vp9CodecSettings() {{
                                        bitrateBps = 304582;
                                        crfLevel = 146946;
                                        frameRate = 8828.6;
                                        gopDuration = "inventore";
                                        gopFrameCount = 250622;
                                        heightPixels = 89603;
                                        pixelFormat = "dolorum";
                                        profile = "laborum";
                                        rateControlMode = "placeat";
                                        widthPixels = 245367;
                                    }};
                                }};
                            }}),
                        }};
                        inputs = new org.openapis.openapi.models.shared.Input[]{{
                            add(new Input() {{
                                key = "autem";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 7521.35;
                                    }};
                                    color = new Color() {{
                                        brightness = 5573.69;
                                        contrast = 8296.03;
                                        saturation = 8605.52;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 379034;
                                        leftPixels = 727044;
                                        rightPixels = 96549;
                                        topPixels = 270328;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 2561.39;
                                    }};
                                    deinterlace = new Deinterlace() {{
                                        bwdif = new BwdifConfig() {{
                                            deinterlaceAllFrames = false;
                                            mode = "explicabo";
                                            parity = "provident";
                                        }};
                                        yadif = new YadifConfig() {{
                                            deinterlaceAllFrames = false;
                                            disableSpatialInterlacing = false;
                                            mode = "ipsa";
                                            parity = "molestiae";
                                        }};
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 3015.98;
                                        tune = "odio";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 262118;
                                        leftPixels = 458515;
                                        rightPixels = 456141;
                                        topPixels = 524593;
                                    }};
                                }};
                                uri = "https://insubstantial-produce.org";
                            }}),
                            add(new Input() {{
                                key = "ut";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 4334.39;
                                    }};
                                    color = new Color() {{
                                        brightness = 3799.27;
                                        contrast = 8268.71;
                                        saturation = 1811.51;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 509342;
                                        leftPixels = 788546;
                                        rightPixels = 86377;
                                        topPixels = 56848;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 6600.4;
                                    }};
                                    deinterlace = new Deinterlace() {{
                                        bwdif = new BwdifConfig() {{
                                            deinterlaceAllFrames = false;
                                            mode = "quidem";
                                            parity = "neque";
                                        }};
                                        yadif = new YadifConfig() {{
                                            deinterlaceAllFrames = false;
                                            disableSpatialInterlacing = false;
                                            mode = "quo";
                                            parity = "illum";
                                        }};
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 7774.08;
                                        tune = "fuga";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 259422;
                                        leftPixels = 178367;
                                        rightPixels = 373813;
                                        topPixels = 69859;
                                    }};
                                }};
                                uri = "https://acrobatic-divide.org";
                            }}),
                        }};
                        manifests = new org.openapis.openapi.models.shared.Manifest[]{{
                            add(new Manifest() {{
                                fileName = "aspernatur";
                                muxStreams = new String[]{{
                                    add("quo"),
                                }};
                                type = ManifestTypeEnum.HLS;
                            }}),
                            add(new Manifest() {{
                                fileName = "recusandae";
                                muxStreams = new String[]{{
                                    add("distinctio"),
                                }};
                                type = ManifestTypeEnum.DASH;
                            }}),
                        }};
                        muxStreams = new org.openapis.openapi.models.shared.MuxStream[]{{
                            add(new MuxStream() {{
                                container = "inventore";
                                elementaryStreams = new String[]{{
                                    add("totam"),
                                    add("accusamus"),
                                }};
                                fileName = "aliquam";
                                key = "odio";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "occaecati";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "commodi";
                                elementaryStreams = new String[]{{
                                    add("dolores"),
                                    add("deserunt"),
                                    add("molestiae"),
                                    add("accusantium"),
                                }};
                                fileName = "porro";
                                key = "eum";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "quas";
                                }};
                            }}),
                        }};
                        output = new Output() {{
                            uri = "https://cumbersome-mama.com";
                        }};;
                        overlays = new org.openapis.openapi.models.shared.Overlay[]{{
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "incidunt";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "atque";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_TYPE_UNSPECIFIED;
                                            startTimeOffset = "minima";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3926.76;
                                                y = 1470.14;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "sapiente";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1598.7;
                                                y = 1871.31;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "explicabo";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "saepe";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "atque";
                                            xy = new NormalizedCoordinate() {{
                                                x = 922.6;
                                                y = 4569.11;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "eveniet";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8820.42;
                                                y = 829.71;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "esse";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "quod";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_OUT;
                                            startTimeOffset = "vero";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3990.25;
                                                y = 934.59;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "saepe";
                                            xy = new NormalizedCoordinate() {{
                                                x = 4263.06;
                                                y = 6900.25;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 4732.21;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 6996.22;
                                        y = 5801.97;
                                    }};
                                    uri = "http://sandy-room.com";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "tempore";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "adipisci";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_OUT;
                                            startTimeOffset = "consequuntur";
                                            xy = new NormalizedCoordinate() {{
                                                x = 97.66;
                                                y = 7963.92;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "quaerat";
                                            xy = new NormalizedCoordinate() {{
                                                x = 9591.67;
                                                y = 2328.65;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "esse";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "blanditiis";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "a";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8577.23;
                                                y = 5578.11;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "esse";
                                            xy = new NormalizedCoordinate() {{
                                                x = 974.68;
                                                y = 9518.75;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "error";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "sint";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_OUT;
                                            startTimeOffset = "possimus";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1576.32;
                                                y = 9088.44;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "asperiores";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8155.24;
                                                y = 850.01;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 1594.14;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 944.58;
                                        y = 6288.99;
                                    }};
                                    uri = "https://hurtful-vase.com";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "vel";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "in";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_TYPE_UNSPECIFIED;
                                            startTimeOffset = "libero";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8490.39;
                                                y = 7422.38;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "accusantium";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3069.86;
                                                y = 9589.83;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "dicta";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "ullam";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "ullam";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3917.74;
                                                y = 163.28;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "voluptatum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1852.32;
                                                y = 8453.58;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "ex";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "deleniti";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_OUT;
                                            startTimeOffset = "dolorum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 996.15;
                                                y = 6091.78;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "tenetur";
                                            xy = new NormalizedCoordinate() {{
                                                x = 984.78;
                                                y = 8694.89;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "et";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "voluptate";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_TYPE_UNSPECIFIED;
                                            startTimeOffset = "minima";
                                            xy = new NormalizedCoordinate() {{
                                                x = 865.32;
                                                y = 2327.44;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "adipisci";
                                            xy = new NormalizedCoordinate() {{
                                                x = 6144.65;
                                                y = 8395.13;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 330.74;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 5223.71;
                                        y = 156.06;
                                    }};
                                    uri = "https://inconsequential-performance.com";
                                }};
                            }}),
                        }};
                        pubsubDestination = new PubsubDestination() {{
                            topic = "corrupti";
                        }};;
                        spriteSheets = new org.openapis.openapi.models.shared.SpriteSheet[]{{
                            add(new SpriteSheet() {{
                                columnCount = 32465;
                                endTimeOffset = "dolor";
                                filePrefix = "occaecati";
                                format = "numquam";
                                interval = "impedit";
                                quality = 131055;
                                rowCount = 376226;
                                spriteHeightPixels = 12036;
                                spriteWidthPixels = 491025;
                                startTimeOffset = "dicta";
                                totalCount = 981640;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 618480;
                                endTimeOffset = "velit";
                                filePrefix = "voluptatibus";
                                format = "voluptas";
                                interval = "asperiores";
                                quality = 45659;
                                rowCount = 409054;
                                spriteHeightPixels = 310067;
                                spriteWidthPixels = 162954;
                                startTimeOffset = "repellendus";
                                totalCount = 638762;
                            }}),
                        }};
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("dignissimos", "officia");
                        put("asperiores", "nemo");
                        put("quae", "quaerat");
                        put("porro", "quod");
                    }};
                    name = "Kathleen Flatley";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "est";
                jobTemplateId = "recusandae";
                key = "totam";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "ducimus";
                uploadProtocol = "quos";
            }};            

            TranscoderProjectsLocationsJobTemplatesCreateResponse res = sdk.projects.transcoderProjectsLocationsJobTemplatesCreate(req, new TranscoderProjectsLocationsJobTemplatesCreateSecurity("vel", "labore") {{
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

## transcoderProjectsLocationsJobTemplatesDelete

Deletes a job template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesDeleteRequest;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesDeleteResponse;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranscoderProjectsLocationsJobTemplatesDeleteRequest req = new TranscoderProjectsLocationsJobTemplatesDeleteRequest("possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cum";
                allowMissing = false;
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "corporis";
                key = "reiciendis";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "recusandae";
                uploadProtocol = "aliquid";
            }};            

            TranscoderProjectsLocationsJobTemplatesDeleteResponse res = sdk.projects.transcoderProjectsLocationsJobTemplatesDelete(req, new TranscoderProjectsLocationsJobTemplatesDeleteSecurity("aperiam", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transcoderProjectsLocationsJobTemplatesGet

Returns the job template data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesGetRequest;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesGetResponse;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranscoderProjectsLocationsJobTemplatesGetRequest req = new TranscoderProjectsLocationsJobTemplatesGetRequest("consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "numquam";
                key = "doloribus";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "quidem";
                uploadProtocol = "saepe";
            }};            

            TranscoderProjectsLocationsJobTemplatesGetResponse res = sdk.projects.transcoderProjectsLocationsJobTemplatesGet(req, new TranscoderProjectsLocationsJobTemplatesGetSecurity("necessitatibus", "dolore") {{
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

## transcoderProjectsLocationsJobTemplatesList

Lists job templates in the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesListRequest;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesListResponse;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranscoderProjectsLocationsJobTemplatesListRequest req = new TranscoderProjectsLocationsJobTemplatesListRequest("sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.JSON;
                callback = "amet";
                fields = "beatae";
                filter = "dignissimos";
                key = "a";
                oauthToken = "debitis";
                orderBy = "consectetur";
                pageSize = 358107L;
                pageToken = "harum";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "ipsa";
                uploadProtocol = "voluptates";
            }};            

            TranscoderProjectsLocationsJobTemplatesListResponse res = sdk.projects.transcoderProjectsLocationsJobTemplatesList(req, new TranscoderProjectsLocationsJobTemplatesListSecurity("libero", "vitae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listJobTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transcoderProjectsLocationsJobsCreate

Creates a job in the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobsCreateRequest;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobsCreateResponse;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobsCreateSecurity;
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
import org.openapis.openapi.models.shared.JobInput;
import org.openapis.openapi.models.shared.JobModeEnum;
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
import org.openapis.openapi.models.shared.Status;
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

            TranscoderProjectsLocationsJobsCreateRequest req = new TranscoderProjectsLocationsJobsCreateRequest("accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                jobInput = new JobInput() {{
                    config = new JobConfig() {{
                        adBreaks = new org.openapis.openapi.models.shared.AdBreak[]{{
                            add(new AdBreak() {{
                                startTimeOffset = "aspernatur";
                            }}),
                            add(new AdBreak() {{
                                startTimeOffset = "voluptas";
                            }}),
                        }};
                        editList = new org.openapis.openapi.models.shared.EditAtom[]{{
                            add(new EditAtom() {{
                                endTimeOffset = "voluptas";
                                inputs = new String[]{{
                                    add("nobis"),
                                    add("dolorum"),
                                }};
                                key = "adipisci";
                                startTimeOffset = "minus";
                            }}),
                            add(new EditAtom() {{
                                endTimeOffset = "dolores";
                                inputs = new String[]{{
                                    add("in"),
                                    add("dolore"),
                                    add("aliquam"),
                                }};
                                key = "officiis";
                                startTimeOffset = "temporibus";
                            }}),
                        }};
                        elementaryStreams = new org.openapis.openapi.models.shared.ElementaryStream[]{{
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 237742;
                                    channelCount = 738391;
                                    channelLayout = new String[]{{
                                        add("quas"),
                                        add("hic"),
                                        add("nesciunt"),
                                    }};
                                    codec = "culpa";
                                    displayName = "corrupti";
                                    languageCode = "pariatur";
                                    mapping = new org.openapis.openapi.models.shared.AudioMapping[]{{
                                        add(new AudioMapping() {{
                                            atomKey = "hic";
                                            gainDb = 3487.83;
                                            inputChannel = 750765;
                                            inputKey = "sit";
                                            inputTrack = 699575;
                                            outputChannel = 148829;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "reiciendis";
                                            gainDb = 1318.52;
                                            inputChannel = 994401;
                                            inputKey = "facilis";
                                            inputTrack = 451822;
                                            outputChannel = 709072;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "ab";
                                            gainDb = 6117.49;
                                            inputChannel = 292794;
                                            inputKey = "laborum";
                                            inputTrack = 152354;
                                            outputChannel = 447516;
                                        }}),
                                    }};
                                    sampleRateHertz = 417486;
                                }};
                                key = "quidem";
                                textStream = new TextStream() {{
                                    codec = "explicabo";
                                    displayName = "voluptas";
                                    languageCode = "unde";
                                    mapping = new org.openapis.openapi.models.shared.TextMapping[]{{
                                        add(new TextMapping() {{
                                            atomKey = "suscipit";
                                            inputKey = "sapiente";
                                            inputTrack = 895386;
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    h264 = new H264CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 724.34;
                                        bFrameCount = 967795;
                                        bPyramid = false;
                                        bitrateBps = 19300;
                                        crfLevel = 546885;
                                        enableTwoPass = false;
                                        entropyCoder = "maiores";
                                        frameRate = 2748.23;
                                        gopDuration = "sed";
                                        gopFrameCount = 592231;
                                        heightPixels = 258702;
                                        pixelFormat = "necessitatibus";
                                        preset = "ipsum";
                                        profile = "ea";
                                        rateControlMode = "occaecati";
                                        tune = "quos";
                                        vbvFullnessBits = 975752;
                                        vbvSizeBits = 271653;
                                        widthPixels = 273009;
                                    }};
                                    h265 = new H265CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 4554.44;
                                        bFrameCount = 970076;
                                        bPyramid = false;
                                        bitrateBps = 401713;
                                        crfLevel = 25497;
                                        enableTwoPass = false;
                                        frameRate = 2484.13;
                                        gopDuration = "officiis";
                                        gopFrameCount = 505866;
                                        heightPixels = 708609;
                                        pixelFormat = "quaerat";
                                        preset = "incidunt";
                                        profile = "ipsam";
                                        rateControlMode = "debitis";
                                        tune = "rem";
                                        vbvFullnessBits = 26522;
                                        vbvSizeBits = 750595;
                                        widthPixels = 625637;
                                    }};
                                    vp9 = new Vp9CodecSettings() {{
                                        bitrateBps = 333507;
                                        crfLevel = 329543;
                                        frameRate = 9241.59;
                                        gopDuration = "reiciendis";
                                        gopFrameCount = 862319;
                                        heightPixels = 168576;
                                        pixelFormat = "aperiam";
                                        profile = "saepe";
                                        rateControlMode = "numquam";
                                        widthPixels = 329935;
                                    }};
                                }};
                            }}),
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 446135;
                                    channelCount = 889234;
                                    channelLayout = new String[]{{
                                        add("laudantium"),
                                    }};
                                    codec = "exercitationem";
                                    displayName = "praesentium";
                                    languageCode = "cum";
                                    mapping = new org.openapis.openapi.models.shared.AudioMapping[]{{
                                        add(new AudioMapping() {{
                                            atomKey = "dolorum";
                                            gainDb = 5300.89;
                                            inputChannel = 622385;
                                            inputKey = "hic";
                                            inputTrack = 710529;
                                            outputChannel = 892863;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "neque";
                                            gainDb = 6771.15;
                                            inputChannel = 341698;
                                            inputKey = "officia";
                                            inputTrack = 676243;
                                            outputChannel = 548361;
                                        }}),
                                    }};
                                    sampleRateHertz = 879235;
                                }};
                                key = "tempora";
                                textStream = new TextStream() {{
                                    codec = "atque";
                                    displayName = "fugit";
                                    languageCode = "ut";
                                    mapping = new org.openapis.openapi.models.shared.TextMapping[]{{
                                        add(new TextMapping() {{
                                            atomKey = "voluptatem";
                                            inputKey = "culpa";
                                            inputTrack = 710337;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "magnam";
                                            inputKey = "consequatur";
                                            inputTrack = 460220;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "ipsam";
                                            inputKey = "sit";
                                            inputTrack = 530537;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "quas";
                                            inputKey = "repudiandae";
                                            inputTrack = 361151;
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    h264 = new H264CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 894.94;
                                        bFrameCount = 502710;
                                        bPyramid = false;
                                        bitrateBps = 405942;
                                        crfLevel = 153627;
                                        enableTwoPass = false;
                                        entropyCoder = "sit";
                                        frameRate = 4255.08;
                                        gopDuration = "nostrum";
                                        gopFrameCount = 906172;
                                        heightPixels = 622231;
                                        pixelFormat = "consequatur";
                                        preset = "incidunt";
                                        profile = "reiciendis";
                                        rateControlMode = "dolorem";
                                        tune = "harum";
                                        vbvFullnessBits = 115703;
                                        vbvSizeBits = 99416;
                                        widthPixels = 577140;
                                    }};
                                    h265 = new H265CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 2897.76;
                                        bFrameCount = 695270;
                                        bPyramid = false;
                                        bitrateBps = 539074;
                                        crfLevel = 671957;
                                        enableTwoPass = false;
                                        frameRate = 7241.48;
                                        gopDuration = "tenetur";
                                        gopFrameCount = 388867;
                                        heightPixels = 2703;
                                        pixelFormat = "amet";
                                        preset = "deserunt";
                                        profile = "voluptate";
                                        rateControlMode = "unde";
                                        tune = "reiciendis";
                                        vbvFullnessBits = 588740;
                                        vbvSizeBits = 833819;
                                        widthPixels = 962771;
                                    }};
                                    vp9 = new Vp9CodecSettings() {{
                                        bitrateBps = 914791;
                                        crfLevel = 16871;
                                        frameRate = 6672.85;
                                        gopDuration = "quidem";
                                        gopFrameCount = 440666;
                                        heightPixels = 813679;
                                        pixelFormat = "fuga";
                                        profile = "praesentium";
                                        rateControlMode = "mollitia";
                                        widthPixels = 333965;
                                    }};
                                }};
                            }}),
                        }};
                        inputs = new org.openapis.openapi.models.shared.Input[]{{
                            add(new Input() {{
                                key = "quisquam";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 9195.32;
                                    }};
                                    color = new Color() {{
                                        brightness = 972.43;
                                        contrast = 5424.57;
                                        saturation = 4420.36;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 991142;
                                        leftPixels = 519952;
                                        rightPixels = 383103;
                                        topPixels = 693957;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 8066.7;
                                    }};
                                    deinterlace = new Deinterlace() {{
                                        bwdif = new BwdifConfig() {{
                                            deinterlaceAllFrames = false;
                                            mode = "et";
                                            parity = "esse";
                                        }};
                                        yadif = new YadifConfig() {{
                                            deinterlaceAllFrames = false;
                                            disableSpatialInterlacing = false;
                                            mode = "amet";
                                            parity = "assumenda";
                                        }};
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 4103.01;
                                        tune = "atque";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 623295;
                                        leftPixels = 887265;
                                        rightPixels = 886961;
                                        topPixels = 880107;
                                    }};
                                }};
                                uri = "https://giant-carrot.info";
                            }}),
                        }};
                        manifests = new org.openapis.openapi.models.shared.Manifest[]{{
                            add(new Manifest() {{
                                fileName = "corrupti";
                                muxStreams = new String[]{{
                                    add("error"),
                                    add("blanditiis"),
                                    add("suscipit"),
                                    add("repudiandae"),
                                }};
                                type = ManifestTypeEnum.HLS;
                            }}),
                            add(new Manifest() {{
                                fileName = "atque";
                                muxStreams = new String[]{{
                                    add("recusandae"),
                                }};
                                type = ManifestTypeEnum.DASH;
                            }}),
                            add(new Manifest() {{
                                fileName = "repellendus";
                                muxStreams = new String[]{{
                                    add("reiciendis"),
                                    add("doloremque"),
                                }};
                                type = ManifestTypeEnum.DASH;
                            }}),
                            add(new Manifest() {{
                                fileName = "dicta";
                                muxStreams = new String[]{{
                                    add("beatae"),
                                }};
                                type = ManifestTypeEnum.MANIFEST_TYPE_UNSPECIFIED;
                            }}),
                        }};
                        muxStreams = new org.openapis.openapi.models.shared.MuxStream[]{{
                            add(new MuxStream() {{
                                container = "laboriosam";
                                elementaryStreams = new String[]{{
                                    add("a"),
                                }};
                                fileName = "molestias";
                                key = "magnam";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "saepe";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "consequuntur";
                                elementaryStreams = new String[]{{
                                    add("officiis"),
                                    add("perspiciatis"),
                                    add("in"),
                                }};
                                fileName = "adipisci";
                                key = "eveniet";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "occaecati";
                                }};
                            }}),
                        }};
                        output = new Output() {{
                            uri = "http://corrupt-pilot.info";
                        }};;
                        overlays = new org.openapis.openapi.models.shared.Overlay[]{{
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "illo";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "corporis";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_OUT;
                                            startTimeOffset = "eveniet";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2473.99;
                                                y = 8784.93;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "doloremque";
                                            xy = new NormalizedCoordinate() {{
                                                x = 4341.56;
                                                y = 599.44;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "totam";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "quae";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "eveniet";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1843.62;
                                                y = 7398.84;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "iure";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8980.63;
                                                y = 1875.52;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "laborum";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "distinctio";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "rem";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3044.46;
                                                y = 3205.65;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "repellat";
                                            xy = new NormalizedCoordinate() {{
                                                x = 30.99;
                                                y = 3621.89;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 5973.03;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 4706.49;
                                        y = 6490.78;
                                    }};
                                    uri = "http://acceptable-whirlwind.org";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "id";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "minima";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_TYPE_UNSPECIFIED;
                                            startTimeOffset = "dolorum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2003.64;
                                                y = 632.07;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "recusandae";
                                            xy = new NormalizedCoordinate() {{
                                                x = 6072.49;
                                                y = 3092.51;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 4776.46;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 4032.18;
                                        y = 2840;
                                    }};
                                    uri = "https://entire-teapot.name";
                                }};
                            }}),
                        }};
                        pubsubDestination = new PubsubDestination() {{
                            topic = "eum";
                        }};;
                        spriteSheets = new org.openapis.openapi.models.shared.SpriteSheet[]{{
                            add(new SpriteSheet() {{
                                columnCount = 928219;
                                endTimeOffset = "esse";
                                filePrefix = "provident";
                                format = "quis";
                                interval = "eum";
                                quality = 970494;
                                rowCount = 592780;
                                spriteHeightPixels = 133439;
                                spriteWidthPixels = 354506;
                                startTimeOffset = "quasi";
                                totalCount = 657020;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 343392;
                                endTimeOffset = "mollitia";
                                filePrefix = "provident";
                                format = "possimus";
                                interval = "animi";
                                quality = 402767;
                                rowCount = 397257;
                                spriteHeightPixels = 37565;
                                spriteWidthPixels = 999278;
                                startTimeOffset = "doloribus";
                                totalCount = 351893;
                            }}),
                        }};
                    }};;
                    error = new Status() {{
                        code = 448143;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("officia", "laborum");
                                put("placeat", "modi");
                                put("voluptatibus", "molestias");
                                put("officiis", "sapiente");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("vitae", "rerum");
                                put("tempora", "quis");
                                put("inventore", "fugit");
                                put("cumque", "quae");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("velit", "aspernatur");
                            }}),
                        }};
                        message = "eum";
                    }};;
                    inputUri = "eius";
                    labels = new java.util.HashMap<String, String>() {{
                        put("at", "impedit");
                        put("eos", "sapiente");
                        put("eum", "dicta");
                    }};
                    mode = JobModeEnum.PROCESSING_MODE_UNSPECIFIED;
                    name = "Misty McKenzie";
                    outputUri = "hic";
                    templateId = "illum";
                    ttlAfterCompletionDays = 52508;
                }};;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "maiores";
                fields = "debitis";
                key = "aliquid";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "dolorem";
                uploadProtocol = "fugit";
            }};            

            TranscoderProjectsLocationsJobsCreateResponse res = sdk.projects.transcoderProjectsLocationsJobsCreate(req, new TranscoderProjectsLocationsJobsCreateSecurity("cumque", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transcoderProjectsLocationsJobsList

Lists jobs in the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobsListRequest;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobsListResponse;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranscoderProjectsLocationsJobsListRequest req = new TranscoderProjectsLocationsJobsListRequest("ratione") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "consequatur";
                fields = "quasi";
                filter = "et";
                key = "ducimus";
                oauthToken = "natus";
                orderBy = "occaecati";
                pageSize = 382440L;
                pageToken = "adipisci";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "magni";
                uploadProtocol = "doloribus";
            }};            

            TranscoderProjectsLocationsJobsListResponse res = sdk.projects.transcoderProjectsLocationsJobsList(req, new TranscoderProjectsLocationsJobsListSecurity("nulla", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
