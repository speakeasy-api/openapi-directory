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
                    parent = "molestiae";
                }};
                queryParams = new TranscoderProjectsLocationsJobTemplatesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "est";
                    alt = "json";
                    callback = "eaque";
                    fields = "eos";
                    jobTemplateId = "asperiores";
                    key = "autem";
                    oauthToken = "esse";
                    prettyPrint = false;
                    quotaUser = "reiciendis";
                    uploadType = "eum";
                    uploadProtocol = "eveniet";
                }};
                request = new JobTemplate() {{
                    config = new JobConfig() {{
                        adBreaks = new openapisdk.models.shared.AdBreak[]() {{
                            add(new AdBreak() {{
                                startTimeOffset = "possimus";
                            }}),
                        }};
                        editList = new openapisdk.models.shared.EditAtom[]() {{
                            add(new EditAtom() {{
                                endTimeOffset = "aut";
                                inputs = new String[]() {{
                                    add("hic"),
                                }};
                                key = "sit";
                                startTimeOffset = "ut";
                            }}),
                            add(new EditAtom() {{
                                endTimeOffset = "magni";
                                inputs = new String[]() {{
                                    add("delectus"),
                                    add("est"),
                                }};
                                key = "facilis";
                                startTimeOffset = "porro";
                            }}),
                        }};
                        elementaryStreams = new openapisdk.models.shared.ElementaryStream[]() {{
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 8253142083214500704;
                                    channelCount = 3330571492845111004;
                                    channelLayout = new String[]() {{
                                        add("repellendus"),
                                        add("non"),
                                        add("officia"),
                                    }};
                                    codec = "nemo";
                                    mapping = new openapisdk.models.shared.AudioMapping[]() {{
                                        add(new AudioMapping() {{
                                            atomKey = "sed";
                                            gainDb = 6.100000;
                                            inputChannel = 6087194424553984976;
                                            inputKey = "ullam";
                                            inputTrack = 5903856222706336659;
                                            outputChannel = 7080577169994418455;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "inventore";
                                            gainDb = 18.100000;
                                            inputChannel = 3470377474677958859;
                                            inputKey = "soluta";
                                            inputTrack = 2002476629722247804;
                                            outputChannel = 7077662646280927991;
                                        }}),
                                        add(new AudioMapping() {{
                                            atomKey = "aut";
                                            gainDb = 95.099998;
                                            inputChannel = 1276417380075799535;
                                            inputKey = "magnam";
                                            inputTrack = 5009552826894592913;
                                            outputChannel = 5853586852270461251;
                                        }}),
                                    }};
                                    sampleRateHertz = 6578522286717093259;
                                }};
                                key = "consequuntur";
                                textStream = new TextStream() {{
                                    codec = "autem";
                                    mapping = new openapisdk.models.shared.TextMapping[]() {{
                                        add(new TextMapping() {{
                                            atomKey = "veniam";
                                            inputKey = "dolorum";
                                            inputTrack = 5477172865852689861;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "aperiam";
                                            inputKey = "tempora";
                                            inputTrack = 5465721507126610360;
                                        }}),
                                        add(new TextMapping() {{
                                            atomKey = "reiciendis";
                                            inputKey = "quis";
                                            inputTrack = 2120469620575065270;
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    h264 = new H264CodecSettings() {{
                                        allowOpenGop = true;
                                        aqStrength = 78.099998;
                                        bFrameCount = 306459737748576483;
                                        bPyramid = false;
                                        bitrateBps = 8029993493626390959;
                                        crfLevel = 746588212425440450;
                                        enableTwoPass = true;
                                        entropyCoder = "sequi";
                                        frameRate = 51.099998;
                                        gopDuration = "labore";
                                        gopFrameCount = 8822147979320849443;
                                        heightPixels = 5413737101333890318;
                                        pixelFormat = "id";
                                        preset = "nihil";
                                        profile = "in";
                                        rateControlMode = "fuga";
                                        tune = "aut";
                                        vbvFullnessBits = 5347579254122869055;
                                        vbvSizeBits = 6933214513704843670;
                                        widthPixels = 1642456108844942089;
                                    }};
                                    h265 = new H265CodecSettings() {{
                                        allowOpenGop = false;
                                        aqStrength = 89.099998;
                                        bFrameCount = 4423730834986076977;
                                        bPyramid = true;
                                        bitrateBps = 3690496115666881690;
                                        crfLevel = 7646751547678235323;
                                        enableTwoPass = true;
                                        frameRate = 15.200000;
                                        gopDuration = "impedit";
                                        gopFrameCount = 2761840909437805142;
                                        heightPixels = 9043115738807627718;
                                        pixelFormat = "corporis";
                                        preset = "neque";
                                        profile = "quis";
                                        rateControlMode = "aut";
                                        tune = "aut";
                                        vbvFullnessBits = 1986690199887050356;
                                        vbvSizeBits = 1076166909765663402;
                                        widthPixels = 7704488755456173169;
                                    }};
                                    vp9 = new Vp9CodecSettings() {{
                                        bitrateBps = 4996916034253137276;
                                        crfLevel = 5567606930701133576;
                                        frameRate = 57.099998;
                                        gopDuration = "quia";
                                        gopFrameCount = 6418912865837296177;
                                        heightPixels = 2910010368033635183;
                                        pixelFormat = "officiis";
                                        profile = "sit";
                                        rateControlMode = "consequatur";
                                        widthPixels = 67224818552506878;
                                    }};
                                }};
                            }}),
                        }};
                        inputs = new openapisdk.models.shared.Input[]() {{
                            add(new Input() {{
                                key = "dolores";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = true;
                                        lufs = 35.200001;
                                    }};
                                    color = new Color() {{
                                        brightness = 57.099998;
                                        contrast = 2.200000;
                                        saturation = 98.099998;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 4105289039439410357;
                                        leftPixels = 7208483989743964478;
                                        rightPixels = 9016921831746654990;
                                        topPixels = 1240964980171196369;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = true;
                                        strength = 16.200001;
                                    }};
                                    deinterlace = new Deinterlace() {{
                                        bwdif = new BwdifConfig() {{
                                            deinterlaceAllFrames = false;
                                            mode = "hic";
                                            parity = "fugiat";
                                        }};
                                        yadif = new YadifConfig() {{
                                            deinterlaceAllFrames = false;
                                            disableSpatialInterlacing = true;
                                            mode = "quo";
                                            parity = "corrupti";
                                        }};
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 73.199997;
                                        tune = "itaque";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 9015838303703633027;
                                        leftPixels = 1060971529365246972;
                                        rightPixels = 1322334430323684827;
                                        topPixels = 5295117650633074170;
                                    }};
                                }};
                                uri = "id";
                            }}),
                        }};
                        manifests = new openapisdk.models.shared.Manifest[]() {{
                            add(new Manifest() {{
                                fileName = "beatae";
                                muxStreams = new String[]() {{
                                    add("repudiandae"),
                                }};
                                type = "HLS";
                            }}),
                            add(new Manifest() {{
                                fileName = "assumenda";
                                muxStreams = new String[]() {{
                                    add("et"),
                                    add("aspernatur"),
                                }};
                                type = "DASH";
                            }}),
                            add(new Manifest() {{
                                fileName = "exercitationem";
                                muxStreams = new String[]() {{
                                    add("optio"),
                                    add("earum"),
                                    add("doloremque"),
                                }};
                                type = "HLS";
                            }}),
                        }};
                        muxStreams = new openapisdk.models.shared.MuxStream[]() {{
                            add(new MuxStream() {{
                                container = "mollitia";
                                elementaryStreams = new String[]() {{
                                    add("nam"),
                                }};
                                fileName = "a";
                                key = "modi";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = true;
                                    segmentDuration = "sed";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "laboriosam";
                                elementaryStreams = new String[]() {{
                                    add("voluptatibus"),
                                }};
                                fileName = "vel";
                                key = "adipisci";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = true;
                                    segmentDuration = "sapiente";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "ex";
                                elementaryStreams = new String[]() {{
                                    add("quos"),
                                }};
                                fileName = "ratione";
                                key = "iusto";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = true;
                                    segmentDuration = "quod";
                                }};
                            }}),
                        }};
                        output = new Output() {{
                            uri = "odio";
                        }};
                        overlays = new openapisdk.models.shared.Overlay[]() {{
                            add(new Overlay() {{
                                animations = new openapisdk.models.shared.Animation[]() {{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "eveniet";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "veniam";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "accusantium";
                                            xy = new NormalizedCoordinate() {{
                                                x = 74.199997;
                                                y = 66.099998;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "esse";
                                            xy = new NormalizedCoordinate() {{
                                                x = 89.099998;
                                                y = 44.200001;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "saepe";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "aspernatur";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "expedita";
                                            xy = new NormalizedCoordinate() {{
                                                x = 3.100000;
                                                y = 55.200001;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "et";
                                            xy = new NormalizedCoordinate() {{
                                                x = 30.200001;
                                                y = 75.199997;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 6.200000;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 33.200001;
                                        y = 85.099998;
                                    }};
                                    uri = "eaque";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new openapisdk.models.shared.Animation[]() {{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "quis";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "deserunt";
                                            fadeType = "FADE_TYPE_UNSPECIFIED";
                                            startTimeOffset = "nostrum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 65.199997;
                                                y = 25.200001;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "ipsum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 92.199997;
                                                y = 95.199997;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 15.100000;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 24.200001;
                                        y = 27.100000;
                                    }};
                                    uri = "quis";
                                }};
                            }}),
                        }};
                        pubsubDestination = new PubsubDestination() {{
                            topic = "et";
                        }};
                        spriteSheets = new openapisdk.models.shared.SpriteSheet[]() {{
                            add(new SpriteSheet() {{
                                columnCount = 2207912197656169148;
                                endTimeOffset = "dolores";
                                filePrefix = "porro";
                                format = "magnam";
                                interval = "quis";
                                quality = 8690758628900883555;
                                rowCount = 206212156470731435;
                                spriteHeightPixels = 7877572364721443124;
                                spriteWidthPixels = 2539670256466839552;
                                startTimeOffset = "odio";
                                totalCount = 7390773645324921012;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 6579523513657919645;
                                endTimeOffset = "delectus";
                                filePrefix = "iure";
                                format = "qui";
                                interval = "rerum";
                                quality = 131640655528846416;
                                rowCount = 6859649168577286742;
                                spriteHeightPixels = 9134602395195606042;
                                spriteWidthPixels = 6991641271569512695;
                                startTimeOffset = "consectetur";
                                totalCount = 936308372565615270;
                            }}),
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("aut", "et");
                        put("minima", "provident");
                        put("tempore", "rerum");
                    }};
                    name = "est";
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