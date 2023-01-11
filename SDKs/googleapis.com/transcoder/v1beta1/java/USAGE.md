<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "maiores";
                }};
                queryParams = new TranscoderProjectsLocationsJobTemplatesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "esse";
                    alt = "proto";
                    callback = "sit";
                    fields = "ut";
                    jobTemplateId = "saepe";
                    key = "autem";
                    oauthToken = "cum";
                    prettyPrint = true;
                    quotaUser = "quasi";
                    uploadType = "tempore";
                    uploadProtocol = "eligendi";
                }};
                request = new JobTemplate() {{
                    config = new JobConfig() {{
                        adBreaks = new openapisdk.models.shared.AdBreak[]() {{
                            add(new AdBreak() {{
                                startTimeOffset = "repellendus";
                            }}),
                            add(new AdBreak() {{
                                startTimeOffset = "odio";
                            }}),
                        }};
                        editList = new openapisdk.models.shared.EditAtom[]() {{
                            add(new EditAtom() {{
                                endTimeOffset = "aspernatur";
                                inputs = new String[]() {{
                                    add("quas"),
                                }};
                                key = "asperiores";
                                startTimeOffset = "nobis";
                            }}),
                        }};
                        elementaryStreams = new openapisdk.models.shared.ElementaryStream[]() {{
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 2147431247965559628;
                                    channelCount = 6207146873806766775;
                                    channelLayout = new String[]() {{
                                        add("ad"),
                                        add("numquam"),
                                    }};
                                    codec = "aliquid";
                                    mapping = new openapisdk.models.shared.AudioAtom[]() {{
                                        add(new AudioAtom() {{
                                            channels = new openapisdk.models.shared.AudioChannel[]() {{
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 8455288727313622966;
                                                            gainDb = 13.200000;
                                                            key = "facere";
                                                            track = 4815370216853812911;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 4495949898192804112;
                                                            gainDb = 5.200000;
                                                            key = "voluptas";
                                                            track = 3317102370290326582;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 6334782320068969940;
                                                            gainDb = 96.099998;
                                                            key = "dolore";
                                                            track = 123294275943246151;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 1701362288153034592;
                                                            gainDb = 94.099998;
                                                            key = "fugiat";
                                                            track = 5356198414695514940;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 7602264608820906115;
                                                            gainDb = 10.200000;
                                                            key = "eius";
                                                            track = 1814357428850433376;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 2455973855381932351;
                                                            gainDb = 14.100000;
                                                            key = "libero";
                                                            track = 8104082517445346524;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "ad";
                                        }}),
                                    }};
                                    sampleRateHertz = 9071297523527474778;
                                }};
                                key = "error";
                                textStream = new TextStream() {{
                                    codec = "rerum";
                                    languageCode = "eveniet";
                                    mapping = new openapisdk.models.shared.TextAtom[]() {{
                                        add(new TextAtom() {{
                                            inputs = new openapisdk.models.shared.TextInput[]() {{
                                                add(new TextInput() {{
                                                    key = "assumenda";
                                                    track = 8969093327809458014;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "fugit";
                                                    track = 2464566660354840183;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "aut";
                                                    track = 2498111193400859222;
                                                }}),
                                            }};
                                            key = "delectus";
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    allowOpenGop = false;
                                    aqStrength = 21.200001;
                                    bFrameCount = 3857940116274635631;
                                    bPyramid = true;
                                    bitrateBps = 4120067125803696150;
                                    codec = "dolor";
                                    crfLevel = 9119154673556197906;
                                    enableTwoPass = false;
                                    entropyCoder = "enim";
                                    frameRate = 0.200000;
                                    gopDuration = "omnis";
                                    gopFrameCount = 8584771044320632075;
                                    heightPixels = 7843486833441384519;
                                    pixelFormat = "voluptatem";
                                    preset = "similique";
                                    profile = "quisquam";
                                    rateControlMode = "ipsum";
                                    tune = "consectetur";
                                    vbvFullnessBits = 9103733620456350548;
                                    vbvSizeBits = 5302832513728774882;
                                    widthPixels = 8318898342726304699;
                                }};
                            }}),
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 5502281368687294674;
                                    channelCount = 666504334083391862;
                                    channelLayout = new String[]() {{
                                        add("incidunt"),
                                        add("molestiae"),
                                        add("est"),
                                    }};
                                    codec = "quia";
                                    mapping = new openapisdk.models.shared.AudioAtom[]() {{
                                        add(new AudioAtom() {{
                                            channels = new openapisdk.models.shared.AudioChannel[]() {{
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 5139232813268466672;
                                                            gainDb = 75.099998;
                                                            key = "et";
                                                            track = 1341776867936038644;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 3321315610938485045;
                                                            gainDb = 10.200000;
                                                            key = "qui";
                                                            track = 8737659538904090620;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "eos";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new openapisdk.models.shared.AudioChannel[]() {{
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 7013934395808530755;
                                                            gainDb = 80.199997;
                                                            key = "quis";
                                                            track = 7344782602638013881;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 2228054240027877211;
                                                            gainDb = 59.099998;
                                                            key = "tempore";
                                                            track = 6886398795303587616;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 7806921862411387887;
                                                            gainDb = 44.099998;
                                                            key = "unde";
                                                            track = 4236407177362981010;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "autem";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new openapisdk.models.shared.AudioChannel[]() {{
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 6544848748590195938;
                                                            gainDb = 34.099998;
                                                            key = "est";
                                                            track = 7274367767292582996;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 3655518706251667376;
                                                            gainDb = 99.099998;
                                                            key = "nemo";
                                                            track = 3937125518741577478;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 8141558984127280761;
                                                            gainDb = 45.099998;
                                                            key = "cumque";
                                                            track = 8055058961374074283;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "voluptatem";
                                        }}),
                                    }};
                                    sampleRateHertz = 6998690379323872;
                                }};
                                key = "aut";
                                textStream = new TextStream() {{
                                    codec = "rerum";
                                    languageCode = "error";
                                    mapping = new openapisdk.models.shared.TextAtom[]() {{
                                        add(new TextAtom() {{
                                            inputs = new openapisdk.models.shared.TextInput[]() {{
                                                add(new TextInput() {{
                                                    key = "sed";
                                                    track = 1307643850513483216;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "voluptas";
                                                    track = 8864390725218078362;
                                                }}),
                                            }};
                                            key = "dolor";
                                        }}),
                                        add(new TextAtom() {{
                                            inputs = new openapisdk.models.shared.TextInput[]() {{
                                                add(new TextInput() {{
                                                    key = "sequi";
                                                    track = 3939168926262569628;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "expedita";
                                                    track = 8062142043377020844;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "aut";
                                                    track = 4158806072285008435;
                                                }}),
                                            }};
                                            key = "dicta";
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    allowOpenGop = false;
                                    aqStrength = 10.100000;
                                    bFrameCount = 584254107397605563;
                                    bPyramid = true;
                                    bitrateBps = 2622171499793806577;
                                    codec = "qui";
                                    crfLevel = 7865739563884073399;
                                    enableTwoPass = false;
                                    entropyCoder = "enim";
                                    frameRate = 21.100000;
                                    gopDuration = "aliquam";
                                    gopFrameCount = 8866039667596093187;
                                    heightPixels = 271036488015640766;
                                    pixelFormat = "sit";
                                    preset = "quibusdam";
                                    profile = "repellendus";
                                    rateControlMode = "dolores";
                                    tune = "veritatis";
                                    vbvFullnessBits = 1367934578366228724;
                                    vbvSizeBits = 7326804821861257633;
                                    widthPixels = 3637830873019925116;
                                }};
                            }}),
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 5787915550816598741;
                                    channelCount = 5760716564568131082;
                                    channelLayout = new String[]() {{
                                        add("consequatur"),
                                    }};
                                    codec = "perspiciatis";
                                    mapping = new openapisdk.models.shared.AudioAtom[]() {{
                                        add(new AudioAtom() {{
                                            channels = new openapisdk.models.shared.AudioChannel[]() {{
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 7036496542858280231;
                                                            gainDb = 96.099998;
                                                            key = "ea";
                                                            track = 8228511669695636850;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 8281485732089818461;
                                                            gainDb = 66.099998;
                                                            key = "qui";
                                                            track = 2329030545325321630;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "eos";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new openapisdk.models.shared.AudioChannel[]() {{
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 8021611287738515523;
                                                            gainDb = 11.200000;
                                                            key = "velit";
                                                            track = 6683785457846865929;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 7728031093423562109;
                                                            gainDb = 52.099998;
                                                            key = "at";
                                                            track = 1955761487986114271;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 6390672139276800572;
                                                            gainDb = 76.099998;
                                                            key = "eos";
                                                            track = 7851131204811335520;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 1694399553625245609;
                                                            gainDb = 22.100000;
                                                            key = "a";
                                                            track = 5018051550004459184;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 5630044255255710085;
                                                            gainDb = 88.099998;
                                                            key = "maiores";
                                                            track = 3190346586786515948;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "repudiandae";
                                        }}),
                                        add(new AudioAtom() {{
                                            channels = new openapisdk.models.shared.AudioChannel[]() {{
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 4852987802651131891;
                                                            gainDb = 52.200001;
                                                            key = "commodi";
                                                            track = 1658404032137674221;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 2973440594762624140;
                                                            gainDb = 45.099998;
                                                            key = "in";
                                                            track = 8948938153011967854;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 2332608288594454169;
                                                            gainDb = 30.200001;
                                                            key = "aperiam";
                                                            track = 7341163957841698578;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "beatae";
                                        }}),
                                    }};
                                    sampleRateHertz = 3985735048508352203;
                                }};
                                key = "quos";
                                textStream = new TextStream() {{
                                    codec = "atque";
                                    languageCode = "temporibus";
                                    mapping = new openapisdk.models.shared.TextAtom[]() {{
                                        add(new TextAtom() {{
                                            inputs = new openapisdk.models.shared.TextInput[]() {{
                                                add(new TextInput() {{
                                                    key = "ad";
                                                    track = 5144182359111664760;
                                                }}),
                                            }};
                                            key = "sunt";
                                        }}),
                                        add(new TextAtom() {{
                                            inputs = new openapisdk.models.shared.TextInput[]() {{
                                                add(new TextInput() {{
                                                    key = "et";
                                                    track = 3215178765550132817;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "aliquam";
                                                    track = 3922673060249970033;
                                                }}),
                                                add(new TextInput() {{
                                                    key = "corrupti";
                                                    track = 6991610623682029497;
                                                }}),
                                            }};
                                            key = "quod";
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    allowOpenGop = false;
                                    aqStrength = 21.100000;
                                    bFrameCount = 4164186512170211861;
                                    bPyramid = false;
                                    bitrateBps = 5538867798809680008;
                                    codec = "doloribus";
                                    crfLevel = 5219349527165536360;
                                    enableTwoPass = false;
                                    entropyCoder = "dolor";
                                    frameRate = 99.199997;
                                    gopDuration = "ex";
                                    gopFrameCount = 4489588779632300674;
                                    heightPixels = 3302287619601867756;
                                    pixelFormat = "officia";
                                    preset = "qui";
                                    profile = "ea";
                                    rateControlMode = "quod";
                                    tune = "asperiores";
                                    vbvFullnessBits = 2776896585269216696;
                                    vbvSizeBits = 46062877643996226;
                                    widthPixels = 1990128544656906984;
                                }};
                            }}),
                        }};
                        inputs = new openapisdk.models.shared.Input[]() {{
                            add(new Input() {{
                                key = "consequatur";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = true;
                                        lowBoost = true;
                                        lufs = 52.200001;
                                    }};
                                    color = new Color() {{
                                        brightness = 79.099998;
                                        contrast = 6.200000;
                                        saturation = 28.200001;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 8863966788726726374;
                                        leftPixels = 9057582087538587124;
                                        rightPixels = 3919580318977596778;
                                        topPixels = 2381098941019624714;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 72.199997;
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 14.100000;
                                        tune = "fugit";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 8476377711504980909;
                                        leftPixels = 6264683472273817115;
                                        rightPixels = 8515407209476474650;
                                        topPixels = 1133249854310155326;
                                    }};
                                }};
                                uri = "quo";
                            }}),
                        }};
                        manifests = new openapisdk.models.shared.Manifest[]() {{
                            add(new Manifest() {{
                                fileName = "deleniti";
                                muxStreams = new String[]() {{
                                    add("ut"),
                                    add("provident"),
                                    add("delectus"),
                                }};
                                type = "DASH";
                            }}),
                            add(new Manifest() {{
                                fileName = "suscipit";
                                muxStreams = new String[]() {{
                                    add("officiis"),
                                    add("sed"),
                                }};
                                type = "MANIFEST_TYPE_UNSPECIFIED";
                            }}),
                        }};
                        muxStreams = new openapisdk.models.shared.MuxStream[]() {{
                            add(new MuxStream() {{
                                container = "quod";
                                elementaryStreams = new String[]() {{
                                    add("similique"),
                                    add("iste"),
                                    add("nulla"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "aut";
                                    }};
                                    iv = "earum";
                                    key = "cupiditate";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "tempore";
                                        scheme = "sequi";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "quia";
                                    }};
                                }};
                                fileName = "quam";
                                key = "natus";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "repudiandae";
                                }};
                            }}),
                        }};
                        output = new Output() {{
                            uri = "itaque";
                        }};
                        overlays = new openapisdk.models.shared.Overlay[]() {{
                            add(new Overlay() {{
                                animations = new openapisdk.models.shared.Animation[]() {{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "quia";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "magni";
                                            fadeType = "FADE_TYPE_UNSPECIFIED";
                                            startTimeOffset = "facilis";
                                            xy = new NormalizedCoordinate() {{
                                                x = 60.099998;
                                                y = 86.199997;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "velit";
                                            xy = new NormalizedCoordinate() {{
                                                x = 13.200000;
                                                y = 94.099998;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "quasi";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "modi";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "earum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 68.099998;
                                                y = 11.200000;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "suscipit";
                                            xy = new NormalizedCoordinate() {{
                                                x = 28.200001;
                                                y = 55.099998;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 93.099998;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 50.099998;
                                        y = 49.200001;
                                    }};
                                    uri = "nulla";
                                }};
                            }}),
                        }};
                        pubsubDestination = new PubsubDestination() {{
                            topic = "ratione";
                        }};
                        spriteSheets = new openapisdk.models.shared.SpriteSheet[]() {{
                            add(new SpriteSheet() {{
                                columnCount = 447672446816893453;
                                endTimeOffset = "perspiciatis";
                                filePrefix = "atque";
                                format = "autem";
                                interval = "dolorum";
                                quality = 4196818782523744366;
                                rowCount = 5093996239656217771;
                                spriteHeightPixels = 1890612141535718352;
                                spriteWidthPixels = 6216739580883950532;
                                startTimeOffset = "vitae";
                                totalCount = 360614394631074257;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 6699429299612682498;
                                endTimeOffset = "voluptatibus";
                                filePrefix = "ea";
                                format = "totam";
                                interval = "est";
                                quality = 7853062524039193924;
                                rowCount = 8509930664332691539;
                                spriteHeightPixels = 1741491846104688878;
                                spriteWidthPixels = 2078898217075126891;
                                startTimeOffset = "voluptatem";
                                totalCount = 3655734318068235075;
                            }}),
                        }};
                    }};
                    name = "voluptatem";
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