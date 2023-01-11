# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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
                    parent = "sit";
                }};
                queryParams = new TranscoderProjectsLocationsJobTemplatesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    jobTemplateId = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new JobTemplate() {{
                    config = new JobConfig() {{
                        adBreaks = new openapisdk.models.shared.AdBreak[]() {{
                            add(new AdBreak() {{
                                startTimeOffset = "voluptatum";
                            }}),
                        }};
                        editList = new openapisdk.models.shared.EditAtom[]() {{
                            add(new EditAtom() {{
                                endTimeOffset = "ut";
                                inputs = new String[]() {{
                                    add("et"),
                                    add("voluptate"),
                                    add("iste"),
                                }};
                                key = "vitae";
                                startTimeOffset = "totam";
                            }}),
                        }};
                        elementaryStreams = new openapisdk.models.shared.ElementaryStream[]() {{
                            add(new ElementaryStream() {{
                                audioStream = new AudioStream() {{
                                    bitrateBps = 1929546706668609706;
                                    channelCount = 6392442863481646880;
                                    channelLayout = new String[]() {{
                                        add("odio"),
                                        add("dolore"),
                                    }};
                                    codec = "id";
                                    mapping = new openapisdk.models.shared.AudioMapping[]() {{
                                        add(new AudioMapping() {{
                                            atomKey = "accusantium";
                                            gainDb = 45.099998;
                                            inputChannel = 2897681629866238117;
                                            inputKey = "est";
                                            inputTrack = 5974317550424871033;
                                            outputChannel = 3317123977833389635;
                                        }}),
                                    }};
                                    sampleRateHertz = 5001958211167890979;
                                }};
                                key = "voluptas";
                                textStream = new TextStream() {{
                                    codec = "omnis";
                                    mapping = new openapisdk.models.shared.TextMapping[]() {{
                                        add(new TextMapping() {{
                                            atomKey = "illo";
                                            inputKey = "sed";
                                            inputTrack = 7845762441295307478;
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    h264 = new H264CodecSettings() {{
                                        allowOpenGop = true;
                                        aqStrength = 68.099998;
                                        bFrameCount = 4345851588384648695;
                                        bPyramid = false;
                                        bitrateBps = 388440063886460141;
                                        crfLevel = 7561811714888168464;
                                        enableTwoPass = false;
                                        entropyCoder = "eveniet";
                                        frameRate = 19.100000;
                                        gopDuration = "inventore";
                                        gopFrameCount = 7847956203786849690;
                                        heightPixels = 406703151708498928;
                                        pixelFormat = "aut";
                                        preset = "reprehenderit";
                                        profile = "tempore";
                                        rateControlMode = "maiores";
                                        tune = "incidunt";
                                        vbvFullnessBits = 7242748068272024738;
                                        vbvSizeBits = 7719717197379695442;
                                        widthPixels = 4112921325496946042;
                                    }};
                                    h265 = new H265CodecSettings() {{
                                        allowOpenGop = true;
                                        aqStrength = 69.199997;
                                        bFrameCount = 4564823113789767141;
                                        bPyramid = true;
                                        bitrateBps = 7014402135919778893;
                                        crfLevel = 3983722386484812742;
                                        enableTwoPass = true;
                                        frameRate = 93.199997;
                                        gopDuration = "voluptas";
                                        gopFrameCount = 8097022081922209513;
                                        heightPixels = 7481608503761597087;
                                        pixelFormat = "qui";
                                        preset = "qui";
                                        profile = "unde";
                                        rateControlMode = "in";
                                        tune = "autem";
                                        vbvFullnessBits = 8086159467323165929;
                                        vbvSizeBits = 35604086129376003;
                                        widthPixels = 8559453321117178323;
                                    }};
                                    vp9 = new Vp9CodecSettings() {{
                                        bitrateBps = 2006924026344156168;
                                        crfLevel = 8218430188258725598;
                                        frameRate = 76.099998;
                                        gopDuration = "accusantium";
                                        gopFrameCount = 3462733497206508461;
                                        heightPixels = 5902760509050140210;
                                        pixelFormat = "quam";
                                        profile = "velit";
                                        rateControlMode = "cumque";
                                        widthPixels = 3331863358128628835;
                                    }};
                                }};
                            }}),
                        }};
                        inputs = new openapisdk.models.shared.Input[]() {{
                            add(new Input() {{
                                key = "voluptates";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 41.099998;
                                    }};
                                    color = new Color() {{
                                        brightness = 59.200001;
                                        contrast = 6.100000;
                                        saturation = 82.099998;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 7945398411639602224;
                                        leftPixels = 1925401661646756611;
                                        rightPixels = 150340687756601720;
                                        topPixels = 4989862523986425397;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = true;
                                        strength = 19.100000;
                                    }};
                                    deinterlace = new Deinterlace() {{
                                        bwdif = new BwdifConfig() {{
                                            deinterlaceAllFrames = true;
                                            mode = "a";
                                            parity = "soluta";
                                        }};
                                        yadif = new YadifConfig() {{
                                            deinterlaceAllFrames = true;
                                            disableSpatialInterlacing = true;
                                            mode = "consequuntur";
                                            parity = "laudantium";
                                        }};
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 73.199997;
                                        tune = "expedita";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 8204648627352676445;
                                        leftPixels = 4234137922270959652;
                                        rightPixels = 8497925768463229012;
                                        topPixels = 5311927246208705713;
                                    }};
                                }};
                                uri = "quisquam";
                            }}),
                            add(new Input() {{
                                key = "explicabo";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = true;
                                        lowBoost = true;
                                        lufs = 15.200000;
                                    }};
                                    color = new Color() {{
                                        brightness = 66.099998;
                                        contrast = 94.199997;
                                        saturation = 97.199997;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 2333048574390956331;
                                        leftPixels = 9205243623417456715;
                                        rightPixels = 190417550815006435;
                                        topPixels = 7478610059307147871;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 27.200001;
                                    }};
                                    deinterlace = new Deinterlace() {{
                                        bwdif = new BwdifConfig() {{
                                            deinterlaceAllFrames = true;
                                            mode = "expedita";
                                            parity = "vel";
                                        }};
                                        yadif = new YadifConfig() {{
                                            deinterlaceAllFrames = true;
                                            disableSpatialInterlacing = false;
                                            mode = "nihil";
                                            parity = "tempora";
                                        }};
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 42.200001;
                                        tune = "sunt";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 157519078836327761;
                                        leftPixels = 2867593906384393455;
                                        rightPixels = 7506934391669544280;
                                        topPixels = 952897656927189675;
                                    }};
                                }};
                                uri = "vel";
                            }}),
                        }};
                        manifests = new openapisdk.models.shared.Manifest[]() {{
                            add(new Manifest() {{
                                fileName = "qui";
                                muxStreams = new String[]() {{
                                    add("quis"),
                                    add("adipisci"),
                                }};
                                type = "DASH";
                            }}),
                        }};
                        muxStreams = new openapisdk.models.shared.MuxStream[]() {{
                            add(new MuxStream() {{
                                container = "et";
                                elementaryStreams = new String[]() {{
                                    add("numquam"),
                                    add("laborum"),
                                    add("rerum"),
                                }};
                                fileName = "ut";
                                key = "laborum";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "quis";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "minus";
                                elementaryStreams = new String[]() {{
                                    add("aperiam"),
                                }};
                                fileName = "consequuntur";
                                key = "excepturi";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = true;
                                    segmentDuration = "inventore";
                                }};
                            }}),
                            add(new MuxStream() {{
                                container = "delectus";
                                elementaryStreams = new String[]() {{
                                    add("animi"),
                                }};
                                fileName = "animi";
                                key = "ut";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = false;
                                    segmentDuration = "fuga";
                                }};
                            }}),
                        }};
                        output = new Output() {{
                            uri = "sed";
                        }};
                        overlays = new openapisdk.models.shared.Overlay[]() {{
                            add(new Overlay() {{
                                animations = new openapisdk.models.shared.Animation[]() {{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "consequuntur";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "non";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "provident";
                                            xy = new NormalizedCoordinate() {{
                                                x = 99.099998;
                                                y = 22.100000;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "enim";
                                            xy = new NormalizedCoordinate() {{
                                                x = 85.099998;
                                                y = 84.199997;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "neque";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "consequuntur";
                                            fadeType = "FADE_TYPE_UNSPECIFIED";
                                            startTimeOffset = "et";
                                            xy = new NormalizedCoordinate() {{
                                                x = 28.100000;
                                                y = 93.099998;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "quia";
                                            xy = new NormalizedCoordinate() {{
                                                x = 39.200001;
                                                y = 30.200001;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "ut";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "necessitatibus";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "possimus";
                                            xy = new NormalizedCoordinate() {{
                                                x = 62.200001;
                                                y = 90.199997;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "sunt";
                                            xy = new NormalizedCoordinate() {{
                                                x = 59.099998;
                                                y = 88.099998;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 10.200000;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 54.200001;
                                        y = 63.099998;
                                    }};
                                    uri = "dolores";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new openapisdk.models.shared.Animation[]() {{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "impedit";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "non";
                                            fadeType = "FADE_TYPE_UNSPECIFIED";
                                            startTimeOffset = "ut";
                                            xy = new NormalizedCoordinate() {{
                                                x = 63.099998;
                                                y = 23.100000;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "ipsam";
                                            xy = new NormalizedCoordinate() {{
                                                x = 78.199997;
                                                y = 46.099998;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "delectus";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "rerum";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "repellat";
                                            xy = new NormalizedCoordinate() {{
                                                x = 26.200001;
                                                y = 9.200000;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "voluptas";
                                            xy = new NormalizedCoordinate() {{
                                                x = 64.199997;
                                                y = 32.099998;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 30.200001;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 3.100000;
                                        y = 73.199997;
                                    }};
                                    uri = "quae";
                                }};
                            }}),
                            add(new Overlay() {{
                                animations = new openapisdk.models.shared.Animation[]() {{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "recusandae";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "qui";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "et";
                                            xy = new NormalizedCoordinate() {{
                                                x = 7.100000;
                                                y = 43.200001;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "et";
                                            xy = new NormalizedCoordinate() {{
                                                x = 90.099998;
                                                y = 16.200001;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "nihil";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "adipisci";
                                            fadeType = "FADE_OUT";
                                            startTimeOffset = "illum";
                                            xy = new NormalizedCoordinate() {{
                                                x = 32.099998;
                                                y = 40.099998;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "quidem";
                                            xy = new NormalizedCoordinate() {{
                                                x = 49.200001;
                                                y = 40.200001;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 81.099998;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 2.200000;
                                        y = 65.199997;
                                    }};
                                    uri = "totam";
                                }};
                            }}),
                        }};
                        pubsubDestination = new PubsubDestination() {{
                            topic = "aut";
                        }};
                        spriteSheets = new openapisdk.models.shared.SpriteSheet[]() {{
                            add(new SpriteSheet() {{
                                columnCount = 7167106058699817943;
                                endTimeOffset = "necessitatibus";
                                filePrefix = "et";
                                format = "culpa";
                                interval = "repellendus";
                                quality = 4761677689824345557;
                                rowCount = 5168005730101237705;
                                spriteHeightPixels = 2118949171484888039;
                                spriteWidthPixels = 4628132784885150210;
                                startTimeOffset = "molestias";
                                totalCount = 4841391702283203193;
                            }}),
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("et", "saepe");
                        put("commodi", "in");
                        put("quibusdam", "asperiores");
                    }};
                    name = "quo";
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
