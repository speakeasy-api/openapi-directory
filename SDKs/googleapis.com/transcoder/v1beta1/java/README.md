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
                                    mapping = new openapisdk.models.shared.AudioAtom[]() {{
                                        add(new AudioAtom() {{
                                            channels = new openapisdk.models.shared.AudioChannel[]() {{
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 6745438398739480977;
                                                            gainDb = 78.199997;
                                                            key = "aut";
                                                            track = 3317123977833389635;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 5001958211167890979;
                                                            gainDb = 14.200000;
                                                            key = "aut";
                                                            track = 6972732843819909978;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 5558237345453186302;
                                                            gainDb = 19.200001;
                                                            key = "consectetur";
                                                            track = 8683452355129068124;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 7699391924090763411;
                                                            gainDb = 50.099998;
                                                            key = "ipsum";
                                                            track = 8902041070398994519;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new AudioChannel() {{
                                                    inputs = new openapisdk.models.shared.AudioChannelInput[]() {{
                                                        add(new AudioChannelInput() {{
                                                            channel = 7338728586234333996;
                                                            gainDb = 77.099998;
                                                            key = "exercitationem";
                                                            track = 4756106358532488297;
                                                        }}),
                                                        add(new AudioChannelInput() {{
                                                            channel = 5837486892148644279;
                                                            gainDb = 7.200000;
                                                            key = "incidunt";
                                                            track = 7242748068272024738;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            key = "beatae";
                                        }}),
                                    }};
                                    sampleRateHertz = 4112921325496946042;
                                }};
                                key = "in";
                                textStream = new TextStream() {{
                                    codec = "et";
                                    languageCode = "omnis";
                                    mapping = new openapisdk.models.shared.TextAtom[]() {{
                                        add(new TextAtom() {{
                                            inputs = new openapisdk.models.shared.TextInput[]() {{
                                                add(new TextInput() {{
                                                    key = "dolores";
                                                    track = 3983722386484812742;
                                                }}),
                                            }};
                                            key = "vel";
                                        }}),
                                    }};
                                }};
                                videoStream = new VideoStream() {{
                                    allowOpenGop = true;
                                    aqStrength = 89.099998;
                                    bFrameCount = 8097022081922209513;
                                    bPyramid = false;
                                    bitrateBps = 6056649900269286653;
                                    codec = "qui";
                                    crfLevel = 4308690457412179793;
                                    enableTwoPass = false;
                                    entropyCoder = "autem";
                                    frameRate = 13.100000;
                                    gopDuration = "itaque";
                                    gopFrameCount = 2006924026344156168;
                                    heightPixels = 8218430188258725598;
                                    pixelFormat = "ullam";
                                    preset = "et";
                                    profile = "accusantium";
                                    rateControlMode = "esse";
                                    tune = "architecto";
                                    vbvFullnessBits = 9021104375654741729;
                                    vbvSizeBits = 3604381780091280195;
                                    widthPixels = 2066195468801476818;
                                }};
                            }}),
                        }};
                        inputs = new openapisdk.models.shared.Input[]() {{
                            add(new Input() {{
                                key = "sunt";
                                preprocessingConfig = new PreprocessingConfig() {{
                                    audio = new Audio() {{
                                        highBoost = false;
                                        lowBoost = false;
                                        lufs = 9.200000;
                                    }};
                                    color = new Color() {{
                                        brightness = 10.200000;
                                        contrast = 19.100000;
                                        saturation = 74.099998;
                                    }};
                                    crop = new Crop() {{
                                        bottomPixels = 5364953311572054685;
                                        leftPixels = 7945398411639602224;
                                        rightPixels = 1925401661646756611;
                                        topPixels = 150340687756601720;
                                    }};
                                    deblock = new Deblock() {{
                                        enabled = false;
                                        strength = 59.200001;
                                    }};
                                    denoise = new Denoise() {{
                                        strength = 64.099998;
                                        tune = "a";
                                    }};
                                    pad = new Pad() {{
                                        bottomPixels = 1836598054518427835;
                                        leftPixels = 7540276489530073149;
                                        rightPixels = 7638413271565042464;
                                        topPixels = 3242614188194728891;
                                    }};
                                }};
                                uri = "laudantium";
                            }}),
                        }};
                        manifests = new openapisdk.models.shared.Manifest[]() {{
                            add(new Manifest() {{
                                fileName = "ipsa";
                                muxStreams = new String[]() {{
                                    add("doloremque"),
                                    add("perferendis"),
                                }};
                                type = "MANIFEST_TYPE_UNSPECIFIED";
                            }}),
                        }};
                        muxStreams = new openapisdk.models.shared.MuxStream[]() {{
                            add(new MuxStream() {{
                                container = "quisquam";
                                elementaryStreams = new String[]() {{
                                    add("ea"),
                                    add("maxime"),
                                    add("eum"),
                                }};
                                encryption = new Encryption() {{
                                    aes128 = new Aes128Encryption() {{
                                        keyUri = "perferendis";
                                    }};
                                    iv = "et";
                                    key = "rerum";
                                    mpegCenc = new MpegCommonEncryption() {{
                                        keyId = "reiciendis";
                                        scheme = "quis";
                                    }};
                                    sampleAes = new SampleAesEncryption() {{
                                        keyUri = "cumque";
                                    }};
                                }};
                                fileName = "minima";
                                key = "necessitatibus";
                                segmentSettings = new SegmentSettings() {{
                                    individualSegments = true;
                                    segmentDuration = "quis";
                                }};
                            }}),
                        }};
                        output = new Output() {{
                            uri = "eum";
                        }};
                        overlays = new openapisdk.models.shared.Overlay[]() {{
                            add(new Overlay() {{
                                animations = new openapisdk.models.shared.Animation[]() {{
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "impedit";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "ad";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "vel";
                                            xy = new NormalizedCoordinate() {{
                                                x = 87.099998;
                                                y = 50.200001;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "deserunt";
                                            xy = new NormalizedCoordinate() {{
                                                x = 59.099998;
                                                y = 68.099998;
                                            }};
                                        }};
                                    }}),
                                    add(new Animation() {{
                                        animationEnd = new AnimationEnd() {{
                                            startTimeOffset = "quis";
                                        }};
                                        animationFade = new AnimationFade() {{
                                            endTimeOffset = "vel";
                                            fadeType = "FADE_IN";
                                            startTimeOffset = "placeat";
                                            xy = new NormalizedCoordinate() {{
                                                x = 13.200000;
                                                y = 96.099998;
                                            }};
                                        }};
                                        animationStatic = new AnimationStatic() {{
                                            startTimeOffset = "porro";
                                            xy = new NormalizedCoordinate() {{
                                                x = 72.099998;
                                                y = 96.099998;
                                            }};
                                        }};
                                    }}),
                                }};
                                image = new Image() {{
                                    alpha = 58.200001;
                                    resolution = new NormalizedCoordinate() {{
                                        x = 9.200000;
                                        y = 92.199997;
                                    }};
                                    uri = "minus";
                                }};
                            }}),
                        }};
                        pubsubDestination = new PubsubDestination() {{
                            topic = "soluta";
                        }};
                        spriteSheets = new openapisdk.models.shared.SpriteSheet[]() {{
                            add(new SpriteSheet() {{
                                columnCount = 7686248226181626741;
                                endTimeOffset = "excepturi";
                                filePrefix = "mollitia";
                                format = "inventore";
                                interval = "delectus";
                                quality = 4283016341703943597;
                                rowCount = 8997481548049309375;
                                spriteHeightPixels = 8271791276134687140;
                                spriteWidthPixels = 2606774689767964810;
                                startTimeOffset = "aliquam";
                                totalCount = 5418224491453948590;
                            }}),
                            add(new SpriteSheet() {{
                                columnCount = 7899896093082851758;
                                endTimeOffset = "sed";
                                filePrefix = "et";
                                format = "consequuntur";
                                interval = "non";
                                quality = 5366472482114725502;
                                rowCount = 432317278959866118;
                                spriteHeightPixels = 5001980330882093199;
                                spriteWidthPixels = 40355290058559125;
                                startTimeOffset = "quasi";
                                totalCount = 5534365872829545664;
                            }}),
                        }};
                    }};
                    name = "enim";
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
