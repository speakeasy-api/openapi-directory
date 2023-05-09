<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesCreateRequest;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesCreateResponse;
import org.openapis.openapi.models.operations.TranscoderProjectsLocationsJobTemplatesCreateSecurity;
import org.openapis.openapi.models.shared.AdBreak;
import org.openapis.openapi.models.shared.Aes128Encryption;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Animation;
import org.openapis.openapi.models.shared.AnimationEnd;
import org.openapis.openapi.models.shared.AnimationFade;
import org.openapis.openapi.models.shared.AnimationFadeFadeTypeEnum;
import org.openapis.openapi.models.shared.AnimationStatic;
import org.openapis.openapi.models.shared.Audio;
import org.openapis.openapi.models.shared.AudioAtom;
import org.openapis.openapi.models.shared.AudioChannel;
import org.openapis.openapi.models.shared.AudioChannelInput;
import org.openapis.openapi.models.shared.AudioStream;
import org.openapis.openapi.models.shared.Color;
import org.openapis.openapi.models.shared.Crop;
import org.openapis.openapi.models.shared.Deblock;
import org.openapis.openapi.models.shared.Denoise;
import org.openapis.openapi.models.shared.EditAtom;
import org.openapis.openapi.models.shared.ElementaryStream;
import org.openapis.openapi.models.shared.Encryption;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.Input;
import org.openapis.openapi.models.shared.JobConfig;
import org.openapis.openapi.models.shared.JobTemplate;
import org.openapis.openapi.models.shared.Manifest;
import org.openapis.openapi.models.shared.ManifestTypeEnum;
import org.openapis.openapi.models.shared.MpegCommonEncryption;
import org.openapis.openapi.models.shared.MuxStream;
import org.openapis.openapi.models.shared.NormalizedCoordinate;
import org.openapis.openapi.models.shared.Output;
import org.openapis.openapi.models.shared.Overlay;
import org.openapis.openapi.models.shared.Pad;
import org.openapis.openapi.models.shared.PreprocessingConfig;
import org.openapis.openapi.models.shared.PubsubDestination;
import org.openapis.openapi.models.shared.SampleAesEncryption;
import org.openapis.openapi.models.shared.SegmentSettings;
import org.openapis.openapi.models.shared.SpriteSheet;
import org.openapis.openapi.models.shared.TextAtom;
import org.openapis.openapi.models.shared.TextInput;
import org.openapis.openapi.models.shared.TextStream;
import org.openapis.openapi.models.shared.VideoStream;
import org.openapis.openapi.models.shared.XgafvEnum;

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
                                    mapping = new org.openapis.openapi.models.shared.AudioAtom[]{{
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 870088;
                                                            gainDb = 9786.19;
                                                            key = "molestiae";
                                                            track = 799159;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 800911;
                                                            gainDb = 4614.79;
                                                            key = "totam";
                                                            track = 780529;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 678880;
                                                            gainDb = 1182.74;
                                                            key = "nam";
                                                            track = 639921;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 582020;
                                                            gainDb = 1433.53;
                                                            key = "deleniti";
                                                            track = 944669;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "optio";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 414662;
                                                            gainDb = 4736;
                                                            key = "modi";
                                                            track = 186332;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 736918;
                                                            gainDb = 4561.5;
                                                            key = "ipsum";
                                                            track = 568434;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 135218;
                                                            gainDb = 187.89;
                                                            key = "ad";
                                                            track = 617636;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 149675;
                                                            gainDb = 6120.96;
                                                            key = "dolor";
                                                            track = 616934;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 386489;
                                                            gainDb = 9437.49;
                                                            key = "saepe";
                                                            track = 681820;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 359508;
                                                            gainDb = 6130.64;
                                                            key = "iure";
                                                            track = 902349;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 697631;
                                                            gainDb = 992.8;
                                                            key = "ipsa";
                                                            track = 969810;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "est";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 170909;
                                                            gainDb = 2103.82;
                                                            key = "corporis";
                                                            track = 128926;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 750686;
                                                            gainDb = 3154.28;
                                                            key = "omnis";
                                                            track = 363711;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 325047;
                                                            gainDb = 5701.97;
                                                            key = "accusantium";
                                                            track = 438601;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 988374;
                                                            gainDb = 9589.5;
                                                            key = "architecto";
                                                            track = 652790;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 208876;
                                                            gainDb = 6350.59;
                                                            key = "consequuntur";
                                                            track = 995300;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 653108;
                                                            gainDb = 5818.5;
                                                            key = "numquam";
                                                            track = 414369;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 474697;
                                                            gainDb = 2444.25;
                                                            key = "error";
                                                            track = 158969;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 338007;
                                                            gainDb = 1103.75;
                                                            key = "laborum";
                                                            track = 656330;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "enim";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 196582;
                                                            gainDb = 9495.72;
                                                            key = "ipsam";
                                                            track = 662527;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 820994;
                                                            gainDb = 135.71;
                                                            key = "quasi";
                                                            track = 622846;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 837945;
                                                            gainDb = 6736.6;
                                                            key = "quasi";
                                                            track = 971945;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 976460;
                                                            gainDb = 8781.94;
                                                            key = "nihil";
                                                            track = 509624;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "voluptatibus";
                                        }}),
                                    }};
                                    sampleRateHertz = 55714;
                                }};
                                key = "omnis";
                                textStream = new TextStream() {{
                                    codec = "voluptate";
                                    languageCode = "cum";
                                    mapping = new org.openapis.openapi.models.shared.TextAtom[]{{
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "reprehenderit";
                                                    track = 282807;
                                                }}),
                                            }};
                                            key = "maiores";
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    allowOpenGop = false;
                                    aqStrength = 1201.96;
                                    bFrameCount = 359444;
                                    bPyramid = false;
                                    bitrateBps = 296140;
                                    codec = "iusto";
                                    crfLevel = 118727;
                                    enableTwoPass = false;
                                    entropyCoder = "harum";
                                    frameRate = 3179.83;
                                    gopDuration = "accusamus";
                                    gopFrameCount = 414263;
                                    heightPixels = 918236;
                                    pixelFormat = "quae";
                                    preset = "ipsum";
                                    profile = "quidem";
                                    rateControlMode = "molestias";
                                    tune = "excepturi";
                                    vbvFullnessBits = 865103;
                                    vbvSizeBits = 265389;
                                    widthPixels = 508969;
                                }};
                            }}),
                        }};
                        inputs = new org.openapis.openapi.models.shared.Input[]{{
                            add(new Input() {{
                                key = "voluptates";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 939.4;
                                    }};
                                    color = new Color() {{
                                        brightness = 9211.58;
                                        contrast = 5759.47;
                                        saturation = 831.12;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 929297;
                                        leftPixels = 277718;
                                        rightPixels = 318569;
                                        topPixels = 9356;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 6674.11;
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 8423.42;
                                        tune = "explicabo";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 647174;
                                        leftPixels = 716327;
                                        rightPixels = 841386;
                                        topPixels = 289406;
                                    }};
                                }};
                                uri = "http://delightful-graph.name";
                            }}),
                            add(new Input() {{
                                key = "quos";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 201.07;
                                    }};
                                    color = new Color() {{
                                        brightness = 1649.4;
                                        contrast = 8289.4;
                                        saturation = 3698.08;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 4695;
                                        leftPixels = 146441;
                                        rightPixels = 677817;
                                        topPixels = 569618;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 2700.08;
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 7037.37;
                                        tune = "tempore";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 288476;
                                        leftPixels = 962189;
                                        rightPixels = 433288;
                                        topPixels = 248753;
                                    }};
                                }};
                                uri = "https://novel-grandfather.name";
                            }}),
                            add(new Input() {{
                                key = "necessitatibus";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 5722.52;
                                    }};
                                    color = new Color() {{
                                        brightness = 6389.21;
                                        contrast = 2230.81;
                                        saturation = 8915.55;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 952749;
                                        leftPixels = 680056;
                                        rightPixels = 447125;
                                        topPixels = 449198;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 8464.09;
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 9785.71;
                                        tune = "rerum";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 116202;
                                        leftPixels = 297437;
                                        rightPixels = 767024;
                                        topPixels = 813798;
                                    }};
                                }};
                                uri = "http://humming-police.org";
                            }}),
                        }};
                        manifests = new org.openapis.openapi.models.shared.Manifest[]{{
                            add(new Manifest() {{
                                fileName = "occaecati";
                                muxStreams = new String[]{{
                                    add("accusamus"),
                                    add("delectus"),
                                }};
                                type = ManifestTypeEnum.DASH;
                            }}),
                        }};
                        muxStreams = new org.openapis.openapi.models.shared.MuxStream[]{{
                            add(new MuxStream() {{
                                container = "nam";
                                elementaryStreams = new String[]{{
                                    add("blanditiis"),
                                    add("deleniti"),
                                    add("sapiente"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "amet";
                                    }};
                                    iv = "deserunt";
                                    key = "nisi";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "vel";
                                        scheme = "natus";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "omnis";
                                    }};
                                }};
                                fileName = "molestiae";
                                key = "perferendis";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "nihil";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "magnam";
                                elementaryStreams = new String[]{{
                                    add("id"),
                                    add("labore"),
                                    add("labore"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "suscipit";
                                    }};
                                    iv = "natus";
                                    key = "nobis";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "eum";
                                        scheme = "vero";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "aspernatur";
                                    }};
                                }};
                                fileName = "architecto";
                                key = "magnam";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "et";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "excepturi";
                                elementaryStreams = new String[]{{
                                    add("provident"),
                                    add("quos"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "sint";
                                    }};
                                    iv = "accusantium";
                                    key = "mollitia";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "reiciendis";
                                        scheme = "mollitia";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "ad";
                                    }};
                                }};
                                fileName = "eum";
                                key = "dolor";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "necessitatibus";
                                }};
                            }}),
                        }};
                        output = new Output() {{
                            uri = "http://handy-borrowing.info";
                        }};;
                        overlays = new org.openapis.openapi.models.shared.Overlay[]{{
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "eius";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "maxime";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "facilis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 4479.26;
                                                y = 1002.26;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "architecto";
                                            xy = new NormalizedCoordinate() {{
                                                x = 9194.83;
                                                y = 3523.12;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "expedita";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "nihil";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_OUT;
                                            startTimeOffset = "quibusdam";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1494.48;
                                                y = 9046.48;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "pariatur";
                                            xy = new NormalizedCoordinate() {{
                                                x = 375.59;
                                                y = 1624.93;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "praesentium";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "natus";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_TYPE_UNSPECIFIED;
                                            startTimeOffset = "sunt";
                                            xy = new NormalizedCoordinate() {{
                                                x = 7790.51;
                                                y = 8480.09;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "pariatur";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8073.19;
                                                y = 4113.97;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "excepturi";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "odit";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "accusantium";
                                            xy = new NormalizedCoordinate() {{
                                                x = 691.67;
                                                y = 9825.75;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "quidem";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3732.91;
                                                y = 4535.43;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 4200.75;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 7220.56;
                                        y = 505.88;
                                    }};
                                    uri = "https://half-wedge.com";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "amet";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "aut";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_OUT;
                                            startTimeOffset = "corporis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 9441.24;
                                                y = 7299.91;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "nobis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1716.29;
                                                y = 3394.04;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "totam";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "dignissimos";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_TYPE_UNSPECIFIED;
                                            startTimeOffset = "quis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1999.96;
                                                y = 1794.9;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "perferendis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1709.86;
                                                y = 7936.98;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "quam";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "dolor";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_OUT;
                                            startTimeOffset = "nostrum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 9441.2;
                                                y = 9280.82;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "omnis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 7044.15;
                                                y = 5966.56;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "voluptatem";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "porro";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_TYPE_UNSPECIFIED;
                                            startTimeOffset = "blanditiis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 6214.79;
                                                y = 503.7;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "occaecati";
                                            xy = new NormalizedCoordinate() {{
                                                x = 6990.98;
                                                y = 2378.93;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 9923.97;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 9342.14;
                                        y = 2672.62;
                                    }};
                                    uri = "https://rash-mallard.org";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "nobis";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "libero";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_OUT;
                                            startTimeOffset = "quaerat";
                                            xy = new NormalizedCoordinate() {{
                                                x = 5542.42;
                                                y = 3982.21;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "dolorem";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2098.43;
                                                y = 2224.43;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "qui";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "ipsum";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_OUT;
                                            startTimeOffset = "excepturi";
                                            xy = new NormalizedCoordinate() {{
                                                x = 7395.51;
                                                y = 4521.09;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "dignissimos";
                                            xy = new NormalizedCoordinate() {{
                                                x = 9702.37;
                                                y = 2274.14;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "dolorum";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "numquam";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_TYPE_UNSPECIFIED;
                                            startTimeOffset = "ipsa";
                                            xy = new NormalizedCoordinate() {{
                                                x = 564.18;
                                                y = 4344.17;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "odio";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3117.96;
                                                y = 8810.05;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 6963.44;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 9764.05;
                                        y = 3777.52;
                                    }};
                                    uri = "https://definite-marines.com";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "ab";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "soluta";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_OUT;
                                            startTimeOffset = "iusto";
                                            xy = new NormalizedCoordinate() {{
                                                x = 4536.97;
                                                y = 6770.82;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "deleniti";
                                            xy = new NormalizedCoordinate() {{
                                                x = 6070.45;
                                                y = 8966.72;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "distinctio";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "asperiores";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "ipsum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 4560.15;
                                                y = 6630.78;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "saepe";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2633.22;
                                                y = 1372.2;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "perferendis";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "amet";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_OUT;
                                            startTimeOffset = "accusamus";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3200.17;
                                                y = 9044.25;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "suscipit";
                                            xy = new NormalizedCoordinate() {{
                                                x = 6457.85;
                                                y = 5883.17;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "minima";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "repellendus";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "similique";
                                            xy = new NormalizedCoordinate() {{
                                                x = 0.55;
                                                y = 8726.51;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "quaerat";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2735.42;
                                                y = 4254.51;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 7980.47;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 8853.38;
                                        y = 1856.36;
                                    }};
                                    uri = "https://weepy-increase.net";
                                }};
                            }}),
                        }};
                        pubsubDestination = new PubsubDestination() {{
                            topic = "iusto";
                        }};;
                        spriteSheets = new org.openapis.openapi.models.shared.SpriteSheet[]{{
                            add(new SpriteSheet() {{
                                columnCount = 788740;
                                endTimeOffset = "tenetur";
                                filePrefix = "amet";
                                format = "tempore";
                                interval = "accusamus";
                                quality = 253941;
                                rowCount = 313692;
                                spriteHeightPixels = 213312;
                                spriteWidthPixels = 957451;
                                startTimeOffset = "totam";
                                totalCount = 471752;
                            }}),
                        }};
                    }};;
                    name = "Mamie Durgan";
                }};;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "quam";
                jobTemplateId = "ipsum";
                key = "incidunt";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "maxime";
                uploadProtocol = "pariatur";
            }};            

            TranscoderProjectsLocationsJobTemplatesCreateResponse res = sdk.projects.transcoderProjectsLocationsJobTemplatesCreate(req, new TranscoderProjectsLocationsJobTemplatesCreateSecurity("soluta", "dicta") {{
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