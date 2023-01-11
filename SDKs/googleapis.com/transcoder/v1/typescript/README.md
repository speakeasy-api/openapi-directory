# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { TranscoderProjectsLocationsJobTemplatesCreateRequest, TranscoderProjectsLocationsJobTemplatesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TranscoderProjectsLocationsJobTemplatesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    jobTemplateId: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    config: {
      adBreaks: [
        {
          startTimeOffset: "voluptatum",
        },
      ],
      editList: [
        {
          endTimeOffset: "ut",
          inputs: [
            "et",
            "voluptate",
            "iste",
          ],
          key: "vitae",
          startTimeOffset: "totam",
        },
      ],
      elementaryStreams: [
        {
          audioStream: {
            bitrateBps: 1929546706668609706,
            channelCount: 6392442863481646880,
            channelLayout: [
              "odio",
              "dolore",
            ],
            codec: "id",
            mapping: [
              {
                atomKey: "accusantium",
                gainDb: 45.099998,
                inputChannel: 2897681629866238117,
                inputKey: "est",
                inputTrack: 5974317550424871033,
                outputChannel: 3317123977833389635,
              },
            ],
            sampleRateHertz: 5001958211167890979,
          },
          key: "voluptas",
          textStream: {
            codec: "omnis",
            mapping: [
              {
                atomKey: "illo",
                inputKey: "sed",
                inputTrack: 7845762441295307478,
              },
            ],
          },
          videoStream: {
            h264: {
              allowOpenGop: true,
              aqStrength: 68.099998,
              bFrameCount: 4345851588384648695,
              bPyramid: false,
              bitrateBps: 388440063886460141,
              crfLevel: 7561811714888168464,
              enableTwoPass: false,
              entropyCoder: "eveniet",
              frameRate: 19.100000,
              gopDuration: "inventore",
              gopFrameCount: 7847956203786849690,
              heightPixels: 406703151708498928,
              pixelFormat: "aut",
              preset: "reprehenderit",
              profile: "tempore",
              rateControlMode: "maiores",
              tune: "incidunt",
              vbvFullnessBits: 7242748068272024738,
              vbvSizeBits: 7719717197379695442,
              widthPixels: 4112921325496946042,
            },
            h265: {
              allowOpenGop: true,
              aqStrength: 69.199997,
              bFrameCount: 4564823113789767141,
              bPyramid: true,
              bitrateBps: 7014402135919778893,
              crfLevel: 3983722386484812742,
              enableTwoPass: true,
              frameRate: 93.199997,
              gopDuration: "voluptas",
              gopFrameCount: 8097022081922209513,
              heightPixels: 7481608503761597087,
              pixelFormat: "qui",
              preset: "qui",
              profile: "unde",
              rateControlMode: "in",
              tune: "autem",
              vbvFullnessBits: 8086159467323165929,
              vbvSizeBits: 35604086129376003,
              widthPixels: 8559453321117178323,
            },
            vp9: {
              bitrateBps: 2006924026344156168,
              crfLevel: 8218430188258725598,
              frameRate: 76.099998,
              gopDuration: "accusantium",
              gopFrameCount: 3462733497206508461,
              heightPixels: 5902760509050140210,
              pixelFormat: "quam",
              profile: "velit",
              rateControlMode: "cumque",
              widthPixels: 3331863358128628835,
            },
          },
        },
      ],
      inputs: [
        {
          key: "voluptates",
          preprocessingConfig: {
            audio: {
              highBoost: false,
              lowBoost: false,
              lufs: 41.099998,
            },
            color: {
              brightness: 59.200001,
              contrast: 6.100000,
              saturation: 82.099998,
            },
            crop: {
              bottomPixels: 7945398411639602224,
              leftPixels: 1925401661646756611,
              rightPixels: 150340687756601720,
              topPixels: 4989862523986425397,
            },
            deblock: {
              enabled: true,
              strength: 19.100000,
            },
            deinterlace: {
              bwdif: {
                deinterlaceAllFrames: true,
                mode: "a",
                parity: "soluta",
              },
              yadif: {
                deinterlaceAllFrames: true,
                disableSpatialInterlacing: true,
                mode: "consequuntur",
                parity: "laudantium",
              },
            },
            denoise: {
              strength: 73.199997,
              tune: "expedita",
            },
            pad: {
              bottomPixels: 8204648627352676445,
              leftPixels: 4234137922270959652,
              rightPixels: 8497925768463229012,
              topPixels: 5311927246208705713,
            },
          },
          uri: "quisquam",
        },
        {
          key: "explicabo",
          preprocessingConfig: {
            audio: {
              highBoost: true,
              lowBoost: true,
              lufs: 15.200000,
            },
            color: {
              brightness: 66.099998,
              contrast: 94.199997,
              saturation: 97.199997,
            },
            crop: {
              bottomPixels: 2333048574390956331,
              leftPixels: 9205243623417456715,
              rightPixels: 190417550815006435,
              topPixels: 7478610059307147871,
            },
            deblock: {
              enabled: false,
              strength: 27.200001,
            },
            deinterlace: {
              bwdif: {
                deinterlaceAllFrames: true,
                mode: "expedita",
                parity: "vel",
              },
              yadif: {
                deinterlaceAllFrames: true,
                disableSpatialInterlacing: false,
                mode: "nihil",
                parity: "tempora",
              },
            },
            denoise: {
              strength: 42.200001,
              tune: "sunt",
            },
            pad: {
              bottomPixels: 157519078836327761,
              leftPixels: 2867593906384393455,
              rightPixels: 7506934391669544280,
              topPixels: 952897656927189675,
            },
          },
          uri: "vel",
        },
      ],
      manifests: [
        {
          fileName: "qui",
          muxStreams: [
            "quis",
            "adipisci",
          ],
          type: "DASH",
        },
      ],
      muxStreams: [
        {
          container: "et",
          elementaryStreams: [
            "numquam",
            "laborum",
            "rerum",
          ],
          fileName: "ut",
          key: "laborum",
          segmentSettings: {
            individualSegments: false,
            segmentDuration: "quis",
          },
        },
        {
          container: "minus",
          elementaryStreams: [
            "aperiam",
          ],
          fileName: "consequuntur",
          key: "excepturi",
          segmentSettings: {
            individualSegments: true,
            segmentDuration: "inventore",
          },
        },
        {
          container: "delectus",
          elementaryStreams: [
            "animi",
          ],
          fileName: "animi",
          key: "ut",
          segmentSettings: {
            individualSegments: false,
            segmentDuration: "fuga",
          },
        },
      ],
      output: {
        uri: "sed",
      },
      overlays: [
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "consequuntur",
              },
              animationFade: {
                endTimeOffset: "non",
                fadeType: "FADE_OUT",
                startTimeOffset: "provident",
                xy: {
                  x: 99.099998,
                  y: 22.100000,
                },
              },
              animationStatic: {
                startTimeOffset: "enim",
                xy: {
                  x: 85.099998,
                  y: 84.199997,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "neque",
              },
              animationFade: {
                endTimeOffset: "consequuntur",
                fadeType: "FADE_TYPE_UNSPECIFIED",
                startTimeOffset: "et",
                xy: {
                  x: 28.100000,
                  y: 93.099998,
                },
              },
              animationStatic: {
                startTimeOffset: "quia",
                xy: {
                  x: 39.200001,
                  y: 30.200001,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "ut",
              },
              animationFade: {
                endTimeOffset: "necessitatibus",
                fadeType: "FADE_OUT",
                startTimeOffset: "possimus",
                xy: {
                  x: 62.200001,
                  y: 90.199997,
                },
              },
              animationStatic: {
                startTimeOffset: "sunt",
                xy: {
                  x: 59.099998,
                  y: 88.099998,
                },
              },
            },
          ],
          image: {
            alpha: 10.200000,
            resolution: {
              x: 54.200001,
              y: 63.099998,
            },
            uri: "dolores",
          },
        },
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "impedit",
              },
              animationFade: {
                endTimeOffset: "non",
                fadeType: "FADE_TYPE_UNSPECIFIED",
                startTimeOffset: "ut",
                xy: {
                  x: 63.099998,
                  y: 23.100000,
                },
              },
              animationStatic: {
                startTimeOffset: "ipsam",
                xy: {
                  x: 78.199997,
                  y: 46.099998,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "delectus",
              },
              animationFade: {
                endTimeOffset: "rerum",
                fadeType: "FADE_IN",
                startTimeOffset: "repellat",
                xy: {
                  x: 26.200001,
                  y: 9.200000,
                },
              },
              animationStatic: {
                startTimeOffset: "voluptas",
                xy: {
                  x: 64.199997,
                  y: 32.099998,
                },
              },
            },
          ],
          image: {
            alpha: 30.200001,
            resolution: {
              x: 3.100000,
              y: 73.199997,
            },
            uri: "quae",
          },
        },
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "recusandae",
              },
              animationFade: {
                endTimeOffset: "qui",
                fadeType: "FADE_IN",
                startTimeOffset: "et",
                xy: {
                  x: 7.100000,
                  y: 43.200001,
                },
              },
              animationStatic: {
                startTimeOffset: "et",
                xy: {
                  x: 90.099998,
                  y: 16.200001,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "nihil",
              },
              animationFade: {
                endTimeOffset: "adipisci",
                fadeType: "FADE_OUT",
                startTimeOffset: "illum",
                xy: {
                  x: 32.099998,
                  y: 40.099998,
                },
              },
              animationStatic: {
                startTimeOffset: "quidem",
                xy: {
                  x: 49.200001,
                  y: 40.200001,
                },
              },
            },
          ],
          image: {
            alpha: 81.099998,
            resolution: {
              x: 2.200000,
              y: 65.199997,
            },
            uri: "totam",
          },
        },
      ],
      pubsubDestination: {
        topic: "aut",
      },
      spriteSheets: [
        {
          columnCount: 7167106058699817943,
          endTimeOffset: "necessitatibus",
          filePrefix: "et",
          format: "culpa",
          interval: "repellendus",
          quality: 4761677689824345557,
          rowCount: 5168005730101237705,
          spriteHeightPixels: 2118949171484888039,
          spriteWidthPixels: 4628132784885150210,
          startTimeOffset: "molestias",
          totalCount: 4841391702283203193,
        },
      ],
    },
    labels: {
      "et": "saepe",
      "commodi": "in",
      "quibusdam": "asperiores",
    },
    name: "quo",
  },
};

sdk.projects.transcoderProjectsLocationsJobTemplatesCreate(req).then((res: TranscoderProjectsLocationsJobTemplatesCreateResponse | AxiosError) => {
   // handle response
});
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
