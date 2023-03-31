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
                                    mapping = new org.openapis.openapi.models.shared.AudioAtom[]{{
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 20218;
                                                            gainDb = 3682.41;
                                                            key = "repellendus";
                                                            track = 957156;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 778157;
                                                            gainDb = 1403.5;
                                                            key = "at";
                                                            track = 870088;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 978619;
                                                            gainDb = 4736.08;
                                                            key = "quod";
                                                            track = 800911;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "esse";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
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
                                                        add(new AudioChannelInput() {{
                                                            channel = 758616;
                                                            gainDb = 5218.48;
                                                            key = "beatae";
                                                            track = 414662;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 473600;
                                                            gainDb = 2645.55;
                                                            key = "qui";
                                                            track = 774234;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 456150;
                                                            gainDb = 2165.5;
                                                            key = "excepturi";
                                                            track = 135218;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 18789;
                                                            gainDb = 3241.41;
                                                            key = "natus";
                                                            track = 149675;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 612096;
                                                            gainDb = 2223.21;
                                                            key = "natus";
                                                            track = 386489;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 902599;
                                                            gainDb = 6818.2;
                                                            key = "in";
                                                            track = 359508;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 613064;
                                                            gainDb = 4370.32;
                                                            key = "saepe";
                                                            track = 697631;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 99280;
                                                            gainDb = 602.25;
                                                            key = "reiciendis";
                                                            track = 666767;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 653140;
                                                            gainDb = 6706.38;
                                                            key = "dolores";
                                                            track = 210382;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "corporis";
                                        }}),
                                    }};
                                    sampleRateHertz = 128926;
                                }};
                                key = "nobis";
                                textStream = new TextStream() {{
                                    codec = "enim";
                                    languageCode = "omnis";
                                    mapping = new org.openapis.openapi.models.shared.TextAtom[]{{
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "excepturi";
                                                    track = 38425;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "iure";
                                                    track = 634274;
                                                }}),
                                            }};
                                            key = "doloribus";
                                        }}),
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "architecto";
                                                    track = 652790;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "dolorem";
                                                    track = 635059;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "consequuntur";
                                                    track = 995300;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "mollitia";
                                                    track = 581850;
                                                }}),
                                            }};
                                            key = "numquam";
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    allowOpenGop = false;
                                    aqStrength = 4143.69;
                                    bFrameCount = 466311;
                                    bPyramid = false;
                                    bitrateBps = 474697;
                                    codec = "velit";
                                    crfLevel = 623510;
                                    enableTwoPass = false;
                                    entropyCoder = "quia";
                                    frameRate = 3380.07;
                                    gopDuration = "vitae";
                                    gopFrameCount = 674752;
                                    heightPixels = 656330;
                                    pixelFormat = "enim";
                                    preset = "odit";
                                    profile = "quo";
                                    rateControlMode = "sequi";
                                    tune = "tenetur";
                                    vbvFullnessBits = 368725;
                                    vbvSizeBits = 662527;
                                    widthPixels = 820994;
                                }};
                            }}),
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 13571;
                                    channelCount = 97101;
                                    channelLayout = new String[]{{
                                        add("temporibus"),
                                        add("laborum"),
                                        add("quasi"),
                                    }};
                                    codec = "reiciendis";
                                    mapping = new org.openapis.openapi.models.shared.AudioAtom[]{{
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 509624;
                                                            gainDb = 9767.62;
                                                            key = "ipsa";
                                                            track = 604846;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 451159;
                                                            gainDb = 7392.64;
                                                            key = "perferendis";
                                                            track = 39187;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 282807;
                                                            gainDb = 9795.87;
                                                            key = "dicta";
                                                            track = 359444;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 296140;
                                                            gainDb = 4808.94;
                                                            key = "dicta";
                                                            track = 688661;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 880476;
                                                            gainDb = 4142.63;
                                                            key = "repudiandae";
                                                            track = 64147;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 216822;
                                                            gainDb = 6924.72;
                                                            key = "molestias";
                                                            track = 566602;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 265389;
                                                            gainDb = 5089.69;
                                                            key = "rem";
                                                            track = 916723;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 93940;
                                                            gainDb = 9211.58;
                                                            key = "sint";
                                                            track = 83112;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 929297;
                                                            gainDb = 2777.18;
                                                            key = "enim";
                                                            track = 9356;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 667411;
                                                            gainDb = 8423.42;
                                                            key = "explicabo";
                                                            track = 647174;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "distinctio";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 264730;
                                                            gainDb = 1831.91;
                                                            key = "aliquid";
                                                            track = 586513;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 552822;
                                                            gainDb = 201.07;
                                                            key = "magni";
                                                            track = 828940;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 4695;
                                                            gainDb = 1464.41;
                                                            key = "dolorum";
                                                            track = 569618;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 270008;
                                                            gainDb = 7037.37;
                                                            key = "tempore";
                                                            track = 288476;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 433288;
                                                            gainDb = 2487.53;
                                                            key = "eligendi";
                                                            track = 576157;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 396098;
                                                            gainDb = 5920.42;
                                                            key = "necessitatibus";
                                                            track = 572252;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 638921;
                                                            gainDb = 2230.81;
                                                            key = "debitis";
                                                            track = 952749;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 680056;
                                                            gainDb = 4471.25;
                                                            key = "in";
                                                            track = 846409;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 699479;
                                                            gainDb = 1162.02;
                                                            key = "magnam";
                                                            track = 767024;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 813798;
                                                            gainDb = 4118.2;
                                                            key = "aliquid";
                                                            track = 675439;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 881104;
                                                            gainDb = 2497.96;
                                                            key = "occaecati";
                                                            track = 313218;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 881736;
                                                            gainDb = 9654.17;
                                                            key = "quidem";
                                                            track = 588465;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "nam";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 533206;
                                                            gainDb = 9560.84;
                                                            key = "amet";
                                                            track = 643990;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 394869;
                                                            gainDb = 4238.55;
                                                            key = "natus";
                                                            track = 606393;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 474867;
                                                            gainDb = 191.93;
                                                            key = "nihil";
                                                            track = 301575;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 660174;
                                                            gainDb = 2879.91;
                                                            key = "labore";
                                                            track = 383462;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 618016;
                                                            gainDb = 7491.7;
                                                            key = "eum";
                                                            track = 878453;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 135474;
                                                            gainDb = 1028.63;
                                                            key = "magnam";
                                                            track = 92373;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 354047;
                                                            gainDb = 5908.73;
                                                            key = "quos";
                                                            track = 574325;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 33625;
                                                            gainDb = 6532.01;
                                                            key = "reiciendis";
                                                            track = 652103;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 320997;
                                                            gainDb = 4314.18;
                                                            key = "dolor";
                                                            track = 896547;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "odit";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 435865;
                                                            gainDb = 9840.43;
                                                            key = "debitis";
                                                            track = 260341;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 537023;
                                                            gainDb = 7038.89;
                                                            key = "in";
                                                            track = 100226;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 99569;
                                                            gainDb = 9194.83;
                                                            key = "ullam";
                                                            track = 714242;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 469249;
                                                            gainDb = 9988.48;
                                                            key = "quibusdam";
                                                            track = 149448;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 904648;
                                                            gainDb = 8681.26;
                                                            key = "accusantium";
                                                            track = 162493;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "praesentium";
                                        }}),
                                    }};
                                    sampleRateHertz = 615560;
                                }};
                                key = "magni";
                                textStream = new TextStream() {{
                                    codec = "sunt";
                                    languageCode = "quo";
                                    mapping = new org.openapis.openapi.models.shared.TextAtom[]{{
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "maxime";
                                                    track = 411397;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "excepturi";
                                                    track = 139972;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "ea";
                                                    track = 33222;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "ab";
                                                    track = 982575;
                                                }}),
                                            }};
                                            key = "quidem";
                                        }}),
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "voluptate";
                                                    track = 420075;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "nam";
                                                    track = 50588;
                                                }}),
                                            }};
                                            key = "pariatur";
                                        }}),
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "voluptatibus";
                                                    track = 16627;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "fugiat";
                                                    track = 230742;
                                                }}),
                                            }};
                                            key = "aut";
                                        }}),
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "corporis";
                                                    track = 944124;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "libero";
                                                    track = 749999;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "dolores";
                                                    track = 339404;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "totam";
                                                    track = 489549;
                                                }}),
                                            }};
                                            key = "eaque";
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    allowOpenGop = false;
                                    aqStrength = 3389.85;
                                    bFrameCount = 199996;
                                    bPyramid = false;
                                    bitrateBps = 179490;
                                    codec = "perferendis";
                                    crfLevel = 170986;
                                    enableTwoPass = false;
                                    entropyCoder = "minus";
                                    frameRate = 4634.51;
                                    gopDuration = "dolor";
                                    gopFrameCount = 874573;
                                    heightPixels = 345352;
                                    pixelFormat = "hic";
                                    preset = "recusandae";
                                    profile = "omnis";
                                    rateControlMode = "facilis";
                                    tune = "perspiciatis";
                                    vbvFullnessBits = 31838;
                                    vbvSizeBits = 783645;
                                    widthPixels = 164694;
                                }};
                            }}),
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 500026;
                                    channelCount = 621479;
                                    channelLayout = new String[]{{
                                        add("occaecati"),
                                    }};
                                    codec = "rerum";
                                    mapping = new org.openapis.openapi.models.shared.AudioAtom[]{{
                                        add(new AudioAtom() {{
                                            channels = new org.openapis.openapi.models.shared.AudioChannel[]{{
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 267262;
                                                            gainDb = 6139.66;
                                                            key = "dolorum";
                                                            track = 535633;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 864282;
                                                            gainDb = 5899.1;
                                                            key = "nobis";
                                                            track = 730122;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 964490;
                                                            gainDb = 3119.45;
                                                            key = "quos";
                                                            track = 398221;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 212390;
                                                            gainDb = 2098.43;
                                                            key = "dolor";
                                                            track = 186193;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 944373;
                                                            gainDb = 5695.74;
                                                            key = "cum";
                                                            track = 452109;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 970237;
                                                            gainDb = 2274.14;
                                                            key = "dolorum";
                                                            track = 254356;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 85295;
                                                            gainDb = 580.29;
                                                            key = "ipsa";
                                                            track = 434417;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new org.openapis.openapi.models.shared.AudioChannelInput[]{{
                                                        add(new AudioChannelInput() {{
                                                            channel = 311796;
                                                            gainDb = 8810.05;
                                                            key = "quidem";
                                                            track = 976405;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 377752;
                                                            gainDb = 6176.58;
                                                            key = "eos";
                                                            track = 542499;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "sit";
                                        }}),
                                    }};
                                    sampleRateHertz = 854614;
                                }};
                                key = "ab";
                                textStream = new TextStream() {{
                                    codec = "soluta";
                                    languageCode = "dolorum";
                                    mapping = new org.openapis.openapi.models.shared.TextAtom[]{{
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "dolorum";
                                                    track = 536579;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "omnis";
                                                    track = 896672;
                                                }}),
                                            }};
                                            key = "distinctio";
                                        }}),
                                        add(new TextAtom() {{
                                            inputs = new org.openapis.openapi.models.shared.TextInput[]{{
                                                add(new TextInput() {{
                                                    key = "nihil";
                                                    track = 216897;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "voluptate";
                                                    track = 663078;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "saepe";
                                                    track = 263322;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "aspernatur";
                                                    track = 20651;
                                                }}),
                                            }};
                                            key = "amet";
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    allowOpenGop = false;
                                    aqStrength = 7583.79;
                                    bFrameCount = 881586;
                                    bPyramid = false;
                                    bitrateBps = 320017;
                                    codec = "saepe";
                                    crfLevel = 383464;
                                    enableTwoPass = false;
                                    entropyCoder = "deserunt";
                                    frameRate = 5883.17;
                                    gopDuration = "minima";
                                    gopFrameCount = 831049;
                                    heightPixels = 519711;
                                    pixelFormat = "similique";
                                    preset = "alias";
                                    profile = "at";
                                    rateControlMode = "quaerat";
                                    tune = "tempora";
                                    vbvFullnessBits = 425451;
                                    vbvSizeBits = 798047;
                                    widthPixels = 885338;
                                }};
                            }}),
                        }};
                        inputs = new org.openapis.openapi.models.shared.Input[]{{
                            add(new Input() {{
                                key = "dolorum";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 9527.92;
                                    }};
                                    color = new Color() {{
                                        brightness = 4561.3;
                                        contrast = 6874.88;
                                        saturation = 4834.09;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 215507;
                                        leftPixels = 788740;
                                        rightPixels = 947371;
                                        topPixels = 229442;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 7308.56;
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 8802.98;
                                        tune = "numquam";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 313692;
                                        leftPixels = 213312;
                                        rightPixels = 957451;
                                        topPixels = 518201;
                                    }};
                                }};
                                uri = "http://alienated-quality.biz";
                            }}),
                        }};
                        manifests = new org.openapis.openapi.models.shared.Manifest[]{{
                            add(new Manifest() {{
                                fileName = "vel";
                                muxStreams = new String[]{{
                                    add("voluptas"),
                                    add("deserunt"),
                                    add("quam"),
                                }};
                                type = "MANIFEST_TYPE_UNSPECIFIED";
                            }}),
                        }};
                        muxStreams = new org.openapis.openapi.models.shared.MuxStream[]{{
                            add(new MuxStream() {{
                                container = "qui";
                                elementaryStreams = new String[]{{
                                    add("maxime"),
                                    add("pariatur"),
                                    add("soluta"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "dicta";
                                    }};
                                    iv = "laborum";
                                    key = "totam";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "incidunt";
                                        scheme = "aspernatur";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "dolores";
                                    }};
                                }};
                                fileName = "distinctio";
                                key = "facilis";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "aliquid";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "quam";
                                elementaryStreams = new String[]{{
                                    add("temporibus"),
                                    add("qui"),
                                    add("neque"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "fugit";
                                    }};
                                    iv = "magni";
                                    key = "odio";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "sunt";
                                        scheme = "ullam";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "nam";
                                    }};
                                }};
                                fileName = "hic";
                                key = "voluptatem";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "cumque";
                                }};
                            }}),
                        }};
                        output = new Output() {{
                            uri = "https://showy-bomb.org";
                        }};
                        overlays = new org.openapis.openapi.models.shared.Overlay[]{{
                            add(new Overlay() {{
                                animations = new org.openapis.openapi.models.shared.Animation[]{{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "nobis";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "quos";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "cupiditate";
                                            xy = new NormalizedCoordinate() {{
                                                x = 456.14;
                                                y = 9619.37;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "dolorem";
                                            xy = new NormalizedCoordinate() {{
                                                x = 2921.47;
                                                y = 2869.15;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 2408.29;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 6772.63;
                                        y = 1002.94;
                                    }};
                                    uri = "http://afraid-merit.org";
                                }};
                            }}),
                        }};
                        pubsubDestination = new PubsubDestination() {{
                            topic = "consequatur";
                        }};
                        spriteSheets = new org.openapis.openapi.models.shared.SpriteSheet[]{{
                            add(new SpriteSheet() {{
                                columnCount = 833038;
                                endTimeOffset = "porro";
                                filePrefix = "doloribus";
                                format = "ut";
                                interval = "facilis";
                                quality = 586410;
                                rowCount = 181631;
                                spriteHeightPixels = 63955;
                                spriteWidthPixels = 512393;
                                startTimeOffset = "odio";
                                totalCount = 580447;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 977496;
                                endTimeOffset = "quisquam";
                                filePrefix = "vero";
                                format = "omnis";
                                interval = "quis";
                                quality = 218403;
                                rowCount = 961571;
                                spriteHeightPixels = 455169;
                                spriteWidthPixels = 231701;
                                startTimeOffset = "vero";
                                totalCount = 949319;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 492268;
                                endTimeOffset = "hic";
                                filePrefix = "distinctio";
                                format = "quod";
                                interval = "odio";
                                quality = 630448;
                                rowCount = 708548;
                                spriteHeightPixels = 874288;
                                spriteWidthPixels = 498140;
                                startTimeOffset = "dolore";
                                totalCount = 844550;
                            }}),
                        }};
                    }};
                    name = "illum";
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