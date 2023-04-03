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
import org.openapis.openapi.models.shared.Encryption;
import org.openapis.openapi.models.shared.SampleAesEncryption;
import org.openapis.openapi.models.shared.MpegCommonEncryption;
import org.openapis.openapi.models.shared.Aes128Encryption;
import org.openapis.openapi.models.shared.ManifestTypeEnum;
import org.openapis.openapi.models.shared.Manifest;
import org.openapis.openapi.models.shared.Input;
import org.openapis.openapi.models.shared.PreprocessingConfig;
import org.openapis.openapi.models.shared.Pad;
import org.openapis.openapi.models.shared.Denoise;
import org.openapis.openapi.models.shared.Deblock;
import org.openapis.openapi.models.shared.Crop;
import org.openapis.openapi.models.shared.Color;
import org.openapis.openapi.models.shared.Audio;
import org.openapis.openapi.models.shared.ElementaryStream;
import org.openapis.openapi.models.shared.VideoStream;
import org.openapis.openapi.models.shared.TextStream;
import org.openapis.openapi.models.shared.TextAtom;
import org.openapis.openapi.models.shared.TextInput;
import org.openapis.openapi.models.shared.AudioStream;
import org.openapis.openapi.models.shared.AudioAtom;
import org.openapis.openapi.models.shared.AudioChannel;
import org.openapis.openapi.models.shared.AudioChannelInput;
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
                                    mapping = new org.openapis.openapi.models.shared.AudioAtom[]{{
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 461479;
                                                            gainDb = 5204.78;
                                                            key = "porro";
                                                            track = 678880;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 118274;
                                                            gainDb = 7206.33;
                                                            key = "officia";
                                                            track = 582020;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 143353;
                                                            gainDb = 5373.73;
                                                            key = "hic";
                                                            track = 758616;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 521848;
                                                            gainDb = 1059.07;
                                                            key = "commodi";
                                                            track = 473600;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 186332;
                                                            gainDb = 7742.34;
                                                            key = "cum";
                                                            track = 456150;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 216550;
                                                            gainDb = 5684.34;
                                                            key = "aspernatur";
                                                            track = 18789;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 617636;
                                                            gainDb = 1496.75;
                                                            key = "iste";
                                                            track = 222321;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 616934;
                                                            gainDb = 3864.89;
                                                            key = "hic";
                                                            track = 902599;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 449950;
                                                            gainDb = 3595.08;
                                                            key = "iste";
                                                            track = 437032;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 902349;
                                                            gainDb = 6976.31;
                                                            key = "architecto";
                                                            track = 60225;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 969810;
                                                            gainDb = 6667.67;
                                                            key = "mollitia";
                                                            track = 670638;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "dolores";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 128926;
                                                            gainDb = 7506.86;
                                                            key = "enim";
                                                            track = 607831;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 363711;
                                                            gainDb = 3250.47;
                                                            key = "excepturi";
                                                            track = 38425;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "iure";
                                        }}),
                                    }};
                                    sampleRateHertz = 634274;
                                }};
                                key = "doloribus";
                                textStream = new TextStream() {{
                                    codec = "sapiente";
                                    languageCode = "architecto";
                                    mapping = new org.openapis.openapi.models.shared.TextAtom[]{{
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "culpa";
                                                    track = 161309;
                                                }}),
                                            }};
                                            key = "repellat";
                                        }}),
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "occaecati";
                                                    track = 253291;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "commodi";
                                                    track = 466311;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "molestiae";
                                                    track = 244425;
                                                }}),
                                            }};
                                            key = "error";
                                        }}),
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "quis";
                                                    track = 110375;
                                                }}),
                                            }};
                                            key = "laborum";
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    allowOpenGop = false;
                                    aqStrength = 6563.3;
                                    bFrameCount = 317202;
                                    bPyramid = false;
                                    bitrateBps = 138183;
                                    codec = "quo";
                                    crfLevel = 196582;
                                    enableTwoPass = false;
                                    entropyCoder = "tenetur";
                                    frameRate = 3687.25;
                                    gopDuration = "id";
                                    gopFrameCount = 820994;
                                    heightPixels = 13571;
                                    pixelFormat = "quasi";
                                    preset = "error";
                                    profile = "temporibus";
                                    rateControlMode = "laborum";
                                    tune = "quasi";
                                    vbvFullnessBits = 971945;
                                    vbvSizeBits = 976460;
                                    widthPixels = 878194;
                                }};
                            }}),
                        }};
                        inputs = new org.openapis.openapi.models.shared.Input[]{{
                            add(new Input() {{
                                key = "praesentium";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 9767.62;
                                    }};
                                    color = new Color() {{
                                        brightness = 557.14;
                                        contrast = 6048.46;
                                        saturation = 4511.59;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 739264;
                                        leftPixels = 19987;
                                        rightPixels = 39187;
                                        topPixels = 441711;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 2828.07;
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 9795.87;
                                        tune = "dicta";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 359444;
                                        leftPixels = 296140;
                                        rightPixels = 480894;
                                        topPixels = 118727;
                                    }};
                                }};
                                uri = "https://frugal-sympathy.info";
                            }}),
                            add(new Input() {{
                                key = "repudiandae";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 641.47;
                                    }};
                                    color = new Color() {{
                                        brightness = 2168.22;
                                        contrast = 6924.72;
                                        saturation = 5651.89;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 566602;
                                        leftPixels = 865103;
                                        rightPixels = 265389;
                                        topPixels = 508969;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 5232.48;
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 9167.23;
                                        tune = "quasi";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 921158;
                                        leftPixels = 575947;
                                        rightPixels = 83112;
                                        topPixels = 929297;
                                    }};
                                }};
                                uri = "http://fruitful-adjective.net";
                            }}),
                        }};
                        manifests = new org.openapis.openapi.models.shared.Manifest[]{{
                            add(new Manifest() {{
                                fileName = "explicabo";
                                muxStreams = new String[]{{
                                    add("distinctio"),
                                    add("quibusdam"),
                                    add("labore"),
                                }};
                                type = "MANIFEST_TYPE_UNSPECIFIED";
                            }}),
                            add(new Manifest() {{
                                fileName = "qui";
                                muxStreams = new String[]{{
                                    add("cupiditate"),
                                    add("quos"),
                                }};
                                type = "MANIFEST_TYPE_UNSPECIFIED";
                            }}),
                            add(new Manifest() {{
                                fileName = "magni";
                                muxStreams = new String[]{{
                                    add("ipsam"),
                                    add("alias"),
                                    add("fugit"),
                                    add("dolorum"),
                                }};
                                type = "HLS";
                            }}),
                            add(new Manifest() {{
                                fileName = "tempora";
                                muxStreams = new String[]{{
                                    add("tempore"),
                                    add("labore"),
                                    add("delectus"),
                                }};
                                type = "HLS";
                            }}),
                        }};
                        muxStreams = new org.openapis.openapi.models.shared.MuxStream[]{{
                            add(new MuxStream() {{
                                container = "eligendi";
                                elementaryStreams = new String[]{{
                                    add("aliquid"),
                                    add("provident"),
                                    add("necessitatibus"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "sint";
                                    }};
                                    iv = "officia";
                                    key = "dolor";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "debitis";
                                        scheme = "a";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "dolorum";
                                    }};
                                }};
                                fileName = "in";
                                key = "in";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "illum";
                                }};
                            }}),
                        }};
                        output = new Output() {{
                            uri = "https://right-burn.biz";
                        }};
                        overlays = new org.openapis.openapi.models.shared.Overlay[]{{
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "ea";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "aliquid";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "accusamus";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2497.96;
                                                y = 5812.73;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "enim";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8817.36;
                                                y = 9654.17;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "quidem";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "provident";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "id";
                                            xy = new NormalizedCoordinate() {{
                                                x = 5013.24;
                                                y = 5332.06;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "sapiente";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2305.33;
                                                y = 6439.9;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "nisi";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "vel";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "omnis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 4748.67;
                                                y = 191.93;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "nihil";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3015.75;
                                                y = 7160.75;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "id";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "labore";
                                            fadeType = "FADE_TYPE_UNSPECIFIED";
                                            startTimeOffset = "suscipit";
                                            xy = new NormalizedCoordinate() {{
                                                x = 6180.16;
                                                y = 7491.7;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "eum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8784.53;
                                                y = 1354.74;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 1028.63;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 2982.82;
                                        y = 923.73;
                                    }};
                                    uri = "https://grizzled-nest.name";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "accusantium";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "mollitia";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "mollitia";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3209.97;
                                                y = 4314.18;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "dolor";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8965.47;
                                                y = 1412.64;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "nemo";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "quasi";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "doloribus";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8919.24;
                                                y = 2603.41;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "maxime";
                                            xy = new NormalizedCoordinate() {{
                                                x = 5370.23;
                                                y = 7038.89;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "in";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "architecto";
                                            fadeType = "FADE_TYPE_UNSPECIFIED";
                                            startTimeOffset = "repudiandae";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3523.12;
                                                y = 7142.42;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "nihil";
                                            xy = new NormalizedCoordinate() {{
                                                x = 9988.48;
                                                y = 8411.4;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 1494.48;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 9046.48;
                                        y = 8681.26;
                                    }};
                                    uri = "http://cute-lens.name";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "sunt";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "quo";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "pariatur";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8073.19;
                                                y = 4113.97;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "excepturi";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1399.72;
                                                y = 4071.83;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 332.22;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 691.67;
                                        y = 9825.75;
                                    }};
                                    uri = "https://harmonious-in-joke.info";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "eaque";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "pariatur";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "voluptatibus";
                                            xy = new NormalizedCoordinate() {{
                                                x = 166.27;
                                                y = 8558.04;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "amet";
                                            xy = new NormalizedCoordinate() {{
                                                x = 117.14;
                                                y = 7649.12;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "corporis";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "hic";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "nobis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1716.29;
                                                y = 3394.04;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "totam";
                                            xy = new NormalizedCoordinate() {{
                                                x = 4895.49;
                                                y = 543.38;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "quis";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "nesciunt";
                                            fadeType = "FADE_TYPE_UNSPECIFIED";
                                            startTimeOffset = "perferendis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1709.86;
                                                y = 7936.98;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "quam";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2239.24;
                                                y = 8745.73;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 3453.52;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 9441.2;
                                        y = 9280.82;
                                    }};
                                    uri = "https://rotten-noir.com";
                                }};
                            }}),
                        }};
                        pubsubDestination = new PubsubDestination() {{
                            topic = "porro";
                        }};
                        spriteSheets = new org.openapis.openapi.models.shared.SpriteSheet[]{{
                            add(new SpriteSheet() {{
                                columnCount = 500026;
                                endTimeOffset = "error";
                                filePrefix = "eaque";
                                format = "occaecati";
                                interval = "rerum";
                                quality = 237893;
                                rowCount = 992397;
                                spriteHeightPixels = 934214;
                                spriteWidthPixels = 267262;
                                startTimeOffset = "iste";
                                totalCount = 679091;
                            }}),
                        }};
                    }};
                    name = "deleniti";
                }};
                accessToken = "pariatur";
                alt = "media";
                callback = "nobis";
                fields = "libero";
                jobTemplateId = "delectus";
                key = "quaerat";
                oauthToken = "quos";
                parent = "aliquid";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "dolorem";
                uploadProtocol = "dolor";
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