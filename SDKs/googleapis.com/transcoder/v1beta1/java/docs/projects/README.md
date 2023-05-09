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

            TranscoderProjectsLocationsJobTemplatesCreateRequest req = new TranscoderProjectsLocationsJobTemplatesCreateRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                jobTemplate = new JobTemplate() {{
                    config = new JobConfig() {{
                        adBreaks = new org.openapis.openapi.models.shared.AdBreak[]{{
                            add(new AdBreak() {{
                                startTimeOffset = "aspernatur";
                            }}),
                            add(new AdBreak() {{
                                startTimeOffset = "dolores";
                            }}),
                        }};
                        editList = new org.openapis.openapi.models.shared.EditAtom[]{{
                            add(new EditAtom() {{
                                endTimeOffset = "facilis";
                                inputs = new String[]{{
                                    add("quam"),
                                    add("molestias"),
                                }};
                                key = "temporibus";
                                startTimeOffset = "qui";
                            }}),
                            add(new EditAtom() {{
                                endTimeOffset = "neque";
                                inputs = new String[]{{
                                    add("magni"),
                                }};
                                key = "odio";
                                startTimeOffset = "sunt";
                            }}),
                            add(new EditAtom() {{
                                endTimeOffset = "ullam";
                                inputs = new String[]{{
                                    add("hic"),
                                    add("voluptatem"),
                                    add("cumque"),
                                }};
                                key = "soluta";
                                startTimeOffset = "nobis";
                            }}),
                        }};
                        elementaryStreams = new org.openapis.openapi.models.shared.ElementaryStream[]{{
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 903720;
                                    channelCount = 217450;
                                    channelLayout = new String[]{{
                                        add("nobis"),
                                    }};
                                    codec = "quos";
                                    mapping = new org.openapis.openapi.models.shared.AudioAtom[]{{
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 961937;
                                                            gainDb = 2091.57;
                                                            key = "dolore";
                                                            track = 286915;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 677263;
                                                            gainDb = 1002.94;
                                                            key = "quae";
                                                            track = 16429;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 929530;
                                                            gainDb = 92.4;
                                                            key = "est";
                                                            track = 833038;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 785153;
                                                            gainDb = 9843.3;
                                                            key = "ut";
                                                            track = 703495;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 586410;
                                                            gainDb = 1816.31;
                                                            key = "quae";
                                                            track = 512393;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "odio";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 787542;
                                                            gainDb = 8765.06;
                                                            key = "omnis";
                                                            track = 338159;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 218403;
                                                            gainDb = 9615.71;
                                                            key = "voluptate";
                                                            track = 231701;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 878870;
                                                            gainDb = 9493.19;
                                                            key = "dignissimos";
                                                            track = 941378;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 715561;
                                                            gainDb = 7992.03;
                                                            key = "odio";
                                                            track = 630448;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 874288;
                                                            gainDb = 4981.4;
                                                            key = "dolore";
                                                            track = 844550;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 848944;
                                                            gainDb = 1943.42;
                                                            key = "natus";
                                                            track = 773326;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 13236;
                                                            gainDb = 9742.59;
                                                            key = "exercitationem";
                                                            track = 862310;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 780427;
                                                            gainDb = 9818.3;
                                                            key = "doloribus";
                                                            track = 478370;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "eligendi";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 639473;
                                                            gainDb = 2694.79;
                                                            key = "ipsam";
                                                            track = 410492;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 428224;
                                                            gainDb = 8221.18;
                                                            key = "magnam";
                                                            track = 189848;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "ex";
                                        }}),
                                    }};
                                    sampleRateHertz = 511319;
                                }};
                                key = "dicta";
                                textStream = new TextStream() {{
                                    codec = "dolor";
                                    languageCode = "maiores";
                                    mapping = new org.openapis.openapi.models.shared.TextAtom[]{{
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "nulla";
                                                    track = 569211;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "voluptatibus";
                                                    track = 343605;
                                                }}),
                                            }};
                                            key = "sapiente";
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    allowOpenGop = false;
                                    aqStrength = 7888.73;
                                    bFrameCount = 906556;
                                    bPyramid = false;
                                    bitrateBps = 411372;
                                    codec = "impedit";
                                    crfLevel = 359271;
                                    enableTwoPass = false;
                                    entropyCoder = "veniam";
                                    frameRate = 3994.99;
                                    gopDuration = "inventore";
                                    gopFrameCount = 301831;
                                    heightPixels = 407241;
                                    pixelFormat = "quo";
                                    preset = "consectetur";
                                    profile = "recusandae";
                                    rateControlMode = "aspernatur";
                                    tune = "minima";
                                    vbvFullnessBits = 53427;
                                    vbvSizeBits = 952871;
                                    widthPixels = 725595;
                                }};
                            }}),
                        }};
                        inputs = new org.openapis.openapi.models.shared.Input[]{{
                            add(new Input() {{
                                key = "aut";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 5334.66;
                                    }};
                                    color = new Color() {{
                                        brightness = 7705.81;
                                        contrast = 3045.82;
                                        saturation = 1469.46;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 882860;
                                        leftPixels = 79522;
                                        rightPixels = 250622;
                                        topPixels = 89603;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 6774.12;
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 6720.48;
                                        tune = "placeat";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 245367;
                                        leftPixels = 432148;
                                        rightPixels = 420539;
                                        topPixels = 752135;
                                    }};
                                }};
                                uri = "https://sweaty-stripe.info";
                            }}),
                        }};
                        manifests = new org.openapis.openapi.models.shared.Manifest[]{{
                            add(new Manifest() {{
                                fileName = "quasi";
                                muxStreams = new String[]{{
                                    add("numquam"),
                                    add("explicabo"),
                                }};
                                type = ManifestTypeEnum.HLS;
                            }}),
                            add(new Manifest() {{
                                fileName = "ipsa";
                                muxStreams = new String[]{{
                                    add("magnam"),
                                    add("odio"),
                                }};
                                type = ManifestTypeEnum.MANIFEST_TYPE_UNSPECIFIED;
                            }}),
                            add(new Manifest() {{
                                fileName = "esse";
                                muxStreams = new String[]{{
                                    add("rem"),
                                    add("fuga"),
                                }};
                                type = ManifestTypeEnum.HLS;
                            }}),
                        }};
                        muxStreams = new org.openapis.openapi.models.shared.MuxStream[]{{
                            add(new MuxStream() {{
                                container = "fugiat";
                                elementaryStreams = new String[]{{
                                    add("eum"),
                                    add("suscipit"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "assumenda";
                                    }};
                                    iv = "eos";
                                    key = "praesentium";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "quisquam";
                                        scheme = "veritatis";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "ipsa";
                                    }};
                                }};
                                fileName = "id";
                                key = "quidem";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "neque";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "quo";
                                elementaryStreams = new String[]{{
                                    add("quo"),
                                    add("fuga"),
                                    add("eius"),
                                    add("eos"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "voluptas";
                                    }};
                                    iv = "ab";
                                    key = "cupiditate";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "consequatur";
                                        scheme = "tempora";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "debitis";
                                    }};
                                }};
                                fileName = "ipsam";
                                key = "aspernatur";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "sequi";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "quo";
                                elementaryStreams = new String[]{{
                                    add("recusandae"),
                                    add("aperiam"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "distinctio";
                                    }};
                                    iv = "quod";
                                    key = "dignissimos";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "inventore";
                                        scheme = "nihil";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "totam";
                                    }};
                                }};
                                fileName = "accusamus";
                                key = "aliquam";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "odio";
                                }};
                            }}),
                        }};
                        output = new Output() {{
                            uri = "https://immense-virtue.biz";
                        }};;
                        overlays = new org.openapis.openapi.models.shared.Overlay[]{{
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "accusantium";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "porro";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "quas";
                                            xy = new NormalizedCoordinate() {{
                                                x = 5100.17;
                                                y = 1598.67;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "deleniti";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1438.29;
                                                y = 6813.93;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "mollitia";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "incidunt";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "explicabo";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3256.85;
                                                y = 3926.76;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "fugit";
                                            xy = new NormalizedCoordinate() {{
                                                x = 9564.06;
                                                y = 1598.7;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 1871.31;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 1294.12;
                                        y = 9039.84;
                                    }};
                                    uri = "https://monumental-bolero.info";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "accusamus";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "veritatis";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "quod";
                                            xy = new NormalizedCoordinate() {{
                                                x = 7241.68;
                                                y = 8771.31;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "aliquid";
                                            xy = new NormalizedCoordinate() {{
                                                x = 934.59;
                                                y = 9040.45;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "vel";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "harum";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "rerum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 5801.97;
                                                y = 3277.2;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "distinctio";
                                            xy = new NormalizedCoordinate() {{
                                                x = 7567.79;
                                                y = 270.69;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "culpa";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "tempore";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_TYPE_UNSPECIFIED;
                                            startTimeOffset = "cumque";
                                            xy = new NormalizedCoordinate() {{
                                                x = 1605.38;
                                                y = 97.66;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "minus";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3082.86;
                                                y = 9591.67;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "consectetur";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "esse";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "provident";
                                            xy = new NormalizedCoordinate() {{
                                                x = 9537.22;
                                                y = 8577.23;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "quas";
                                            xy = new NormalizedCoordinate() {{
                                                x = 4572.23;
                                                y = 974.68;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 9518.75;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 6216.79;
                                        y = 5757.51;
                                    }};
                                    uri = "https://sugary-choice.org";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "facere";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "veritatis";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_TYPE_UNSPECIFIED;
                                            startTimeOffset = "quasi";
                                            xy = new NormalizedCoordinate() {{
                                                x = 6288.99;
                                                y = 6336.08;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "aliquid";
                                            xy = new NormalizedCoordinate() {{
                                                x = 9492.98;
                                                y = 627.13;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "earum";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "vel";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "eius";
                                            xy = new NormalizedCoordinate() {{
                                                x = 7276.97;
                                                y = 8490.39;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "soluta";
                                            xy = new NormalizedCoordinate() {{
                                                x = 333.04;
                                                y = 3069.86;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "sapiente";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "dicta";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "reprehenderit";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3567.07;
                                                y = 3917.74;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "aut";
                                            xy = new NormalizedCoordinate() {{
                                                x = 5318.49;
                                                y = 1852.32;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "quibusdam";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "ex";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "itaque";
                                            xy = new NormalizedCoordinate() {{
                                                x = 6802.7;
                                                y = 996.15;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "omnis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 9453.02;
                                                y = 984.78;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 8694.89;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 920.27;
                                        y = 4541.62;
                                    }};
                                    uri = "http://gentle-bladder.biz";
                                }};
                            }}),
                        }};
                        pubsubDestination = new PubsubDestination() {{
                            topic = "adipisci";
                        }};;
                        spriteSheets = new org.openapis.openapi.models.shared.SpriteSheet[]{{
                            add(new SpriteSheet() {{
                                columnCount = 839513;
                                endTimeOffset = "accusantium";
                                filePrefix = "rem";
                                format = "aut";
                                interval = "laudantium";
                                quality = 428796;
                                rowCount = 649832;
                                spriteHeightPixels = 68074;
                                spriteWidthPixels = 544591;
                                startTimeOffset = "non";
                                totalCount = 32465;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 221161;
                                endTimeOffset = "occaecati";
                                filePrefix = "numquam";
                                format = "impedit";
                                interval = "explicabo";
                                quality = 376226;
                                rowCount = 12036;
                                spriteHeightPixels = 491025;
                                spriteWidthPixels = 115484;
                                startTimeOffset = "maiores";
                                totalCount = 618480;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 244651;
                                endTimeOffset = "voluptatibus";
                                filePrefix = "voluptas";
                                format = "asperiores";
                                interval = "aperiam";
                                quality = 409054;
                                rowCount = 310067;
                                spriteHeightPixels = 162954;
                                spriteWidthPixels = 831520;
                                startTimeOffset = "officia";
                                totalCount = 807023;
                            }}),
                        }};
                    }};;
                    name = "Blanche Yundt II";
                }};;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "ab";
                jobTemplateId = "adipisci";
                key = "fuga";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "velit";
                uploadProtocol = "culpa";
            }};            

            TranscoderProjectsLocationsJobTemplatesCreateResponse res = sdk.projects.transcoderProjectsLocationsJobTemplatesCreate(req, new TranscoderProjectsLocationsJobTemplatesCreateSecurity("est", "recusandae") {{
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

            TranscoderProjectsLocationsJobTemplatesDeleteRequest req = new TranscoderProjectsLocationsJobTemplatesDeleteRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "vel";
                key = "labore";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "cum";
                uploadProtocol = "commodi";
            }};            

            TranscoderProjectsLocationsJobTemplatesDeleteResponse res = sdk.projects.transcoderProjectsLocationsJobTemplatesDelete(req, new TranscoderProjectsLocationsJobTemplatesDeleteSecurity("in", "corporis") {{
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

            TranscoderProjectsLocationsJobTemplatesGetRequest req = new TranscoderProjectsLocationsJobTemplatesGetRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                fields = "aperiam";
                key = "cum";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "exercitationem";
                uploadProtocol = "earum";
            }};            

            TranscoderProjectsLocationsJobTemplatesGetResponse res = sdk.projects.transcoderProjectsLocationsJobTemplatesGet(req, new TranscoderProjectsLocationsJobTemplatesGetSecurity("facere", "numquam") {{
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

            TranscoderProjectsLocationsJobTemplatesListRequest req = new TranscoderProjectsLocationsJobTemplatesListRequest("doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "necessitatibus";
                key = "dolore";
                oauthToken = "sunt";
                pageSize = 992012L;
                pageToken = "adipisci";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "amet";
                uploadProtocol = "beatae";
            }};            

            TranscoderProjectsLocationsJobTemplatesListResponse res = sdk.projects.transcoderProjectsLocationsJobTemplatesList(req, new TranscoderProjectsLocationsJobTemplatesListSecurity("dignissimos", "a") {{
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
import org.openapis.openapi.models.shared.JobInput;
import org.openapis.openapi.models.shared.Manifest;
import org.openapis.openapi.models.shared.ManifestTypeEnum;
import org.openapis.openapi.models.shared.MpegCommonEncryption;
import org.openapis.openapi.models.shared.MuxStream;
import org.openapis.openapi.models.shared.NormalizedCoordinate;
import org.openapis.openapi.models.shared.OriginUri;
import org.openapis.openapi.models.shared.Output;
import org.openapis.openapi.models.shared.Overlay;
import org.openapis.openapi.models.shared.Pad;
import org.openapis.openapi.models.shared.PreprocessingConfig;
import org.openapis.openapi.models.shared.Progress;
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

            TranscoderProjectsLocationsJobsCreateRequest req = new TranscoderProjectsLocationsJobsCreateRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                jobInput = new JobInput() {{
                    config = new JobConfig() {{
                        adBreaks = new org.openapis.openapi.models.shared.AdBreak[]{{
                            add(new AdBreak() {{
                                startTimeOffset = "harum";
                            }}),
                            add(new AdBreak() {{
                                startTimeOffset = "laboriosam";
                            }}),
                        }};
                        editList = new org.openapis.openapi.models.shared.EditAtom[]{{
                            add(new EditAtom() {{
                                endTimeOffset = "voluptates";
                                inputs = new String[]{{
                                    add("vitae"),
                                    add("accusamus"),
                                    add("similique"),
                                }};
                                key = "tempora";
                                startTimeOffset = "aspernatur";
                            }}),
                        }};
                        elementaryStreams = new org.openapis.openapi.models.shared.ElementaryStream[]{{
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 374244;
                                    channelCount = 374296;
                                    channelLayout = new String[]{{
                                        add("nobis"),
                                        add("dolorum"),
                                    }};
                                    codec = "adipisci";
                                    mapping = new org.openapis.openapi.models.shared.AudioAtom[]{{
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 449292;
                                                            gainDb = 2962.42;
                                                            key = "aliquam";
                                                            track = 885963;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 839189;
                                                            gainDb = 3518.7;
                                                            key = "adipisci";
                                                            track = 738391;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 502389;
                                                            gainDb = 5553.61;
                                                            key = "hic";
                                                            track = 201517;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "culpa";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 519643;
                                                            gainDb = 9402.1;
                                                            key = "exercitationem";
                                                            track = 750765;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 24619;
                                                            gainDb = 6995.75;
                                                            key = "sed";
                                                            track = 967966;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 131852;
                                                            gainDb = 9944.01;
                                                            key = "facilis";
                                                            track = 451822;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 709072;
                                                            gainDb = 708.69;
                                                            key = "iste";
                                                            track = 292794;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 152354;
                                                            gainDb = 4475.16;
                                                            key = "commodi";
                                                            track = 696077;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 131289;
                                                            gainDb = 3783.26;
                                                            key = "unde";
                                                            track = 100032;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 382808;
                                                            gainDb = 9602.57;
                                                            key = "debitis";
                                                            track = 72434;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 19300;
                                                            gainDb = 5468.85;
                                                            key = "maiores";
                                                            track = 274823;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 148478;
                                                            gainDb = 5922.31;
                                                            key = "eius";
                                                            track = 896762;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 215529;
                                                            gainDb = 4067.33;
                                                            key = "occaecati";
                                                            track = 552078;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 975752;
                                                            gainDb = 2716.53;
                                                            key = "tempora";
                                                            track = 455444;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "reiciendis";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 248413;
                                                            gainDb = 8880.44;
                                                            key = "praesentium";
                                                            track = 708609;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 277773;
                                                            gainDb = 3730.35;
                                                            key = "debitis";
                                                            track = 524970;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 26522;
                                                            gainDb = 7505.95;
                                                            key = "error";
                                                            track = 333507;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "minima";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 862319;
                                                            gainDb = 1685.76;
                                                            key = "aperiam";
                                                            track = 901483;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 253642;
                                                            gainDb = 3299.35;
                                                            key = "in";
                                                            track = 889234;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 104627;
                                                            gainDb = 5124.52;
                                                            key = "exercitationem";
                                                            track = 510629;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 740098;
                                                            gainDb = 3868.27;
                                                            key = "dolorum";
                                                            track = 530089;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 944708;
                                                            gainDb = 7105.29;
                                                            key = "debitis";
                                                            track = 204923;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 677115;
                                                            gainDb = 3416.98;
                                                            key = "officia";
                                                            track = 676243;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 548361;
                                                            gainDb = 8792.35;
                                                            key = "tempora";
                                                            track = 543678;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 282699;
                                                            gainDb = 8563.03;
                                                            key = "voluptatem";
                                                            track = 635057;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 299643;
                                                            gainDb = 78.84;
                                                            key = "esse";
                                                            track = 372679;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 24527;
                                                            gainDb = 5305.37;
                                                            key = "quas";
                                                            track = 922112;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 361151;
                                                            gainDb = 894.94;
                                                            key = "blanditiis";
                                                            track = 405942;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "sed";
                                        }}),
                                    }};
                                    sampleRateHertz = 24313;
                                }};
                                key = "vel";
                                textStream = new TextStream() {{
                                    codec = "nostrum";
                                    languageCode = "saepe";
                                    mapping = new org.openapis.openapi.models.shared.TextAtom[]{{
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "incidunt";
                                                    track = 968865;
                                                }}),
                                            }};
                                            key = "dolorem";
                                        }}),
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "dicta";
                                                    track = 99416;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "occaecati";
                                                    track = 289776;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "quidem";
                                                    track = 539074;
                                                }}),
                                            }};
                                            key = "laborum";
                                        }}),
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "tenetur";
                                                    track = 388867;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "alias";
                                                    track = 227084;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "deserunt";
                                                    track = 454860;
                                                }}),
                                            }};
                                            key = "unde";
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    allowOpenGop = false;
                                    aqStrength = 9720.83;
                                    bFrameCount = 588740;
                                    bPyramid = false;
                                    bitrateBps = 833819;
                                    codec = "delectus";
                                    crfLevel = 914791;
                                    enableTwoPass = false;
                                    entropyCoder = "perferendis";
                                    frameRate = 6672.85;
                                    gopDuration = "quidem";
                                    gopFrameCount = 440666;
                                    heightPixels = 813679;
                                    pixelFormat = "fuga";
                                    preset = "praesentium";
                                    profile = "mollitia";
                                    rateControlMode = "veniam";
                                    tune = "voluptatem";
                                    vbvFullnessBits = 790840;
                                    vbvSizeBits = 919532;
                                    widthPixels = 97243;
                                }};
                            }}),
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 542457;
                                    channelCount = 442036;
                                    channelLayout = new String[]{{
                                        add("totam"),
                                        add("suscipit"),
                                        add("quidem"),
                                        add("maxime"),
                                    }};
                                    codec = "et";
                                    mapping = new org.openapis.openapi.models.shared.AudioAtom[]{{
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 410301;
                                                            gainDb = 5391.18;
                                                            key = "error";
                                                            track = 887265;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 886961;
                                                            gainDb = 8801.07;
                                                            key = "natus";
                                                            track = 328303;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 133461;
                                                            gainDb = 4044.25;
                                                            key = "maiores";
                                                            track = 544647;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 871786;
                                                            gainDb = 6216.93;
                                                            key = "blanditiis";
                                                            track = 379356;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "repudiandae";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 120919;
                                                            gainDb = 9233.06;
                                                            key = "dolorum";
                                                            track = 829898;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 287119;
                                                            gainDb = 9682.87;
                                                            key = "doloremque";
                                                            track = 919783;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 116098;
                                                            gainDb = 360.33;
                                                            key = "beatae";
                                                            track = 174772;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 389135;
                                                            gainDb = 2465.35;
                                                            key = "a";
                                                            track = 562783;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 300029;
                                                            gainDb = 9063.55;
                                                            key = "consequuntur";
                                                            track = 580107;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 597937;
                                                            gainDb = 4463.94;
                                                            key = "adipisci";
                                                            track = 907876;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 580887;
                                                            gainDb = 1602.3;
                                                            key = "fugit";
                                                            track = 661118;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 335631;
                                                            gainDb = 4402.64;
                                                            key = "error";
                                                            track = 76486;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 361306;
                                                            gainDb = 6964.63;
                                                            key = "eveniet";
                                                            track = 247399;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "vero";
                                        }}),
                                    }};
                                    sampleRateHertz = 39615;
                                }};
                                key = "iure";
                                textStream = new TextStream() {{
                                    codec = "ipsa";
                                    languageCode = "totam";
                                    mapping = new org.openapis.openapi.models.shared.TextAtom[]{{
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "eveniet";
                                                    track = 184362;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "cum";
                                                    track = 434761;
                                                }}),
                                            }};
                                            key = "necessitatibus";
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    allowOpenGop = false;
                                    aqStrength = 1875.52;
                                    bFrameCount = 672582;
                                    bPyramid = false;
                                    bitrateBps = 715208;
                                    codec = "voluptatum";
                                    crfLevel = 523006;
                                    enableTwoPass = false;
                                    entropyCoder = "aliquam";
                                    frameRate = 3205.65;
                                    gopDuration = "repellat";
                                    gopFrameCount = 3099;
                                    heightPixels = 362189;
                                    pixelFormat = "perspiciatis";
                                    preset = "nihil";
                                    profile = "mollitia";
                                    rateControlMode = "voluptas";
                                    tune = "alias";
                                    vbvFullnessBits = 979527;
                                    vbvSizeBits = 970222;
                                    widthPixels = 174658;
                                }};
                            }}),
                        }};
                        inputs = new org.openapis.openapi.models.shared.Input[]{{
                            add(new Input() {{
                                key = "minima";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 2931.44;
                                    }};
                                    color = new Color() {{
                                        brightness = 6803.49;
                                        contrast = 2003.64;
                                        saturation = 632.07;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 925703;
                                        leftPixels = 607249;
                                        rightPixels = 309251;
                                        topPixels = 477646;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 4032.18;
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 2840;
                                        tune = "culpa";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 238413;
                                        leftPixels = 890653;
                                        rightPixels = 514513;
                                        topPixels = 432606;
                                    }};
                                }};
                                uri = "http://verifiable-independent.name";
                            }}),
                            add(new Input() {{
                                key = "quis";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 4317.85;
                                    }};
                                    color = new Color() {{
                                        brightness = 9704.94;
                                        contrast = 5927.8;
                                        saturation = 1334.39;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 354506;
                                        leftPixels = 96804;
                                        rightPixels = 657020;
                                        topPixels = 343392;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 6523.09;
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 5910.27;
                                        tune = "possimus";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 659177;
                                        leftPixels = 402767;
                                        rightPixels = 397257;
                                        topPixels = 37565;
                                    }};
                                }};
                                uri = "https://worse-fledgling.info";
                            }}),
                            add(new Input() {{
                                key = "nam";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 9376.36;
                                    }};
                                    color = new Color() {{
                                        brightness = 6375.83;
                                        contrast = 6720.41;
                                        saturation = 8130.54;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 266697;
                                        leftPixels = 976226;
                                        rightPixels = 564064;
                                        topPixels = 889794;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 9569.33;
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 7645.62;
                                        tune = "vitae";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 698249;
                                        leftPixels = 272229;
                                        rightPixels = 335498;
                                        topPixels = 82057;
                                    }};
                                }};
                                uri = "http://slushy-bamboo.com";
                            }}),
                        }};
                        manifests = new org.openapis.openapi.models.shared.Manifest[]{{
                            add(new Manifest() {{
                                fileName = "aspernatur";
                                muxStreams = new String[]{{
                                    add("eius"),
                                    add("rem"),
                                }};
                                type = ManifestTypeEnum.DASH;
                            }}),
                        }};
                        muxStreams = new org.openapis.openapi.models.shared.MuxStream[]{{
                            add(new MuxStream() {{
                                container = "eos";
                                elementaryStreams = new String[]{{
                                    add("eum"),
                                    add("dicta"),
                                    add("minima"),
                                    add("beatae"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "cupiditate";
                                    }};
                                    iv = "provident";
                                    key = "earum";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "soluta";
                                        scheme = "hic";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "illum";
                                    }};
                                }};
                                fileName = "eaque";
                                key = "earum";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "perspiciatis";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "maiores";
                                elementaryStreams = new String[]{{
                                    add("aliquid"),
                                    add("porro"),
                                    add("suscipit"),
                                    add("dolorem"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "fugit";
                                    }};
                                    iv = "cumque";
                                    key = "fuga";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "ratione";
                                        scheme = "animi";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "necessitatibus";
                                    }};
                                }};
                                fileName = "nulla";
                                key = "consequatur";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "quasi";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "et";
                                elementaryStreams = new String[]{{
                                    add("natus"),
                                    add("occaecati"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "suscipit";
                                    }};
                                    iv = "adipisci";
                                    key = "quasi";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "magni";
                                        scheme = "doloribus";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "nulla";
                                    }};
                                }};
                                fileName = "necessitatibus";
                                key = "ipsa";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "tempora";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "nihil";
                                elementaryStreams = new String[]{{
                                    add("dicta"),
                                    add("iusto"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "esse";
                                    }};
                                    iv = "praesentium";
                                    key = "maiores";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "reiciendis";
                                        scheme = "vel";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "architecto";
                                    }};
                                }};
                                fileName = "fugiat";
                                key = "doloremque";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "dicta";
                                }};
                            }}),
                        }};
                        output = new Output() {{
                            uri = "http://fat-infant.info";
                        }};;
                        overlays = new org.openapis.openapi.models.shared.Overlay[]{{
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "ipsa";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "laborum";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_TYPE_UNSPECIFIED;
                                            startTimeOffset = "nostrum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 8567.56;
                                                y = 7137.67;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "aliquid";
                                            xy = new NormalizedCoordinate() {{
                                                x = 6391.87;
                                                y = 3813.97;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "aliquid";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "perferendis";
                                            fadeType = AnimationFadeFadeTypeEnum.FADE_IN;
                                            startTimeOffset = "voluptas";
                                            xy = new NormalizedCoordinate() {{
                                                x = 6145.28;
                                                y = 6616.07;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "ab";
                                            xy = new NormalizedCoordinate() {{
                                                x = 6253.58;
                                                y = 8224.07;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 9139.92;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 6534.21;
                                        y = 6717.94;
                                    }};
                                    uri = "https://gargantuan-management.biz";
                                }};
                            }}),
                        }};
                        pubsubDestination = new PubsubDestination() {{
                            topic = "vitae";
                        }};;
                        spriteSheets = new org.openapis.openapi.models.shared.SpriteSheet[]{{
                            add(new SpriteSheet() {{
                                columnCount = 405036;
                                endTimeOffset = "quo";
                                filePrefix = "ex";
                                format = "ut";
                                interval = "ad";
                                quality = 713927;
                                rowCount = 29950;
                                spriteHeightPixels = 561577;
                                spriteWidthPixels = 737254;
                                startTimeOffset = "aliquid";
                                totalCount = 109784;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 530860;
                                endTimeOffset = "omnis";
                                filePrefix = "veritatis";
                                format = "rerum";
                                interval = "est";
                                quality = 634786;
                                rowCount = 29634;
                                spriteHeightPixels = 959143;
                                spriteWidthPixels = 889288;
                                startTimeOffset = "architecto";
                                totalCount = 682119;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 867168;
                                endTimeOffset = "debitis";
                                filePrefix = "voluptatem";
                                format = "alias";
                                interval = "deleniti";
                                quality = 937219;
                                rowCount = 404244;
                                spriteHeightPixels = 958308;
                                spriteWidthPixels = 524184;
                                startTimeOffset = "minus";
                                totalCount = 365100;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 992074;
                                endTimeOffset = "ratione";
                                filePrefix = "ullam";
                                format = "perferendis";
                                interval = "illum";
                                quality = 518150;
                                rowCount = 770675;
                                spriteHeightPixels = 842777;
                                spriteWidthPixels = 720528;
                                startTimeOffset = "ipsam";
                                totalCount = 633415;
                            }}),
                        }};
                    }};;
                    inputUri = "dolor";
                    name = "Mrs. Stephanie Lind";
                    originUri = new OriginUri() {{
                        dash = "consequatur";
                        hls = "architecto";
                    }};;
                    outputUri = "sit";
                    priority = 265039;
                    progress = new Progress() {{
                        analyzed = 1442.86;
                        encoded = 661.49;
                        notified = 5137.6;
                        uploaded = 656.04;
                    }};;
                    templateId = "dolor";
                    ttlAfterCompletionDays = 856277;
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "quas";
                key = "eveniet";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "esse";
                uploadProtocol = "necessitatibus";
            }};            

            TranscoderProjectsLocationsJobsCreateResponse res = sdk.projects.transcoderProjectsLocationsJobsCreate(req, new TranscoderProjectsLocationsJobsCreateSecurity("sed", "veniam") {{
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

            TranscoderProjectsLocationsJobsListRequest req = new TranscoderProjectsLocationsJobsListRequest("nesciunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "voluptatum";
                fields = "magnam";
                key = "exercitationem";
                oauthToken = "ab";
                pageSize = 781480L;
                pageToken = "autem";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "laboriosam";
                uploadProtocol = "recusandae";
            }};            

            TranscoderProjectsLocationsJobsListResponse res = sdk.projects.transcoderProjectsLocationsJobsList(req, new TranscoderProjectsLocationsJobsListSecurity("consequuntur", "voluptatem") {{
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
