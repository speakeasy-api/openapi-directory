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
                channels: [
                  {
                    inputs: [
                      {
                        channel: 6745438398739480977,
                        gainDb: 78.199997,
                        key: "aut",
                        track: 3317123977833389635,
                      },
                      {
                        channel: 5001958211167890979,
                        gainDb: 14.200000,
                        key: "aut",
                        track: 6972732843819909978,
                      },
                      {
                        channel: 5558237345453186302,
                        gainDb: 19.200001,
                        key: "consectetur",
                        track: 8683452355129068124,
                      },
                    ],
                  },
                  {
                    inputs: [
                      {
                        channel: 7699391924090763411,
                        gainDb: 50.099998,
                        key: "ipsum",
                        track: 8902041070398994519,
                      },
                    ],
                  },
                  {
                    inputs: [
                      {
                        channel: 7338728586234333996,
                        gainDb: 77.099998,
                        key: "exercitationem",
                        track: 4756106358532488297,
                      },
                      {
                        channel: 5837486892148644279,
                        gainDb: 7.200000,
                        key: "incidunt",
                        track: 7242748068272024738,
                      },
                    ],
                  },
                ],
                key: "beatae",
              },
            ],
            sampleRateHertz: 4112921325496946042,
          },
          key: "in",
          textStream: {
            codec: "et",
            languageCode: "omnis",
            mapping: [
              {
                inputs: [
                  {
                    key: "dolores",
                    track: 3983722386484812742,
                  },
                ],
                key: "vel",
              },
            ],
          },
          videoStream: {
            allowOpenGop: true,
            aqStrength: 89.099998,
            bFrameCount: 8097022081922209513,
            bPyramid: false,
            bitrateBps: 6056649900269286653,
            codec: "qui",
            crfLevel: 4308690457412179793,
            enableTwoPass: false,
            entropyCoder: "autem",
            frameRate: 13.100000,
            gopDuration: "itaque",
            gopFrameCount: 2006924026344156168,
            heightPixels: 8218430188258725598,
            pixelFormat: "ullam",
            preset: "et",
            profile: "accusantium",
            rateControlMode: "esse",
            tune: "architecto",
            vbvFullnessBits: 9021104375654741729,
            vbvSizeBits: 3604381780091280195,
            widthPixels: 2066195468801476818,
          },
        },
      ],
      inputs: [
        {
          key: "sunt",
          preprocessingConfig: {
            audio: {
              highBoost: false,
              lowBoost: false,
              lufs: 9.200000,
            },
            color: {
              brightness: 10.200000,
              contrast: 19.100000,
              saturation: 74.099998,
            },
            crop: {
              bottomPixels: 5364953311572054685,
              leftPixels: 7945398411639602224,
              rightPixels: 1925401661646756611,
              topPixels: 150340687756601720,
            },
            deblock: {
              enabled: false,
              strength: 59.200001,
            },
            denoise: {
              strength: 64.099998,
              tune: "a",
            },
            pad: {
              bottomPixels: 1836598054518427835,
              leftPixels: 7540276489530073149,
              rightPixels: 7638413271565042464,
              topPixels: 3242614188194728891,
            },
          },
          uri: "laudantium",
        },
      ],
      manifests: [
        {
          fileName: "ipsa",
          muxStreams: [
            "doloremque",
            "perferendis",
          ],
          type: "MANIFEST_TYPE_UNSPECIFIED",
        },
      ],
      muxStreams: [
        {
          container: "quisquam",
          elementaryStreams: [
            "ea",
            "maxime",
            "eum",
          ],
          encryption: {
            aes128: {
              keyUri: "perferendis",
            },
            iv: "et",
            key: "rerum",
            mpegCenc: {
              keyId: "reiciendis",
              scheme: "quis",
            },
            sampleAes: {
              keyUri: "cumque",
            },
          },
          fileName: "minima",
          key: "necessitatibus",
          segmentSettings: {
            individualSegments: true,
            segmentDuration: "quis",
          },
        },
      ],
      output: {
        uri: "eum",
      },
      overlays: [
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "impedit",
              },
              animationFade: {
                endTimeOffset: "ad",
                fadeType: "FADE_IN",
                startTimeOffset: "vel",
                xy: {
                  x: 87.099998,
                  y: 50.200001,
                },
              },
              animationStatic: {
                startTimeOffset: "deserunt",
                xy: {
                  x: 59.099998,
                  y: 68.099998,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "quis",
              },
              animationFade: {
                endTimeOffset: "vel",
                fadeType: "FADE_IN",
                startTimeOffset: "placeat",
                xy: {
                  x: 13.200000,
                  y: 96.099998,
                },
              },
              animationStatic: {
                startTimeOffset: "porro",
                xy: {
                  x: 72.099998,
                  y: 96.099998,
                },
              },
            },
          ],
          image: {
            alpha: 58.200001,
            resolution: {
              x: 9.200000,
              y: 92.199997,
            },
            uri: "minus",
          },
        },
      ],
      pubsubDestination: {
        topic: "soluta",
      },
      spriteSheets: [
        {
          columnCount: 7686248226181626741,
          endTimeOffset: "excepturi",
          filePrefix: "mollitia",
          format: "inventore",
          interval: "delectus",
          quality: 4283016341703943597,
          rowCount: 8997481548049309375,
          spriteHeightPixels: 8271791276134687140,
          spriteWidthPixels: 2606774689767964810,
          startTimeOffset: "aliquam",
          totalCount: 5418224491453948590,
        },
        {
          columnCount: 7899896093082851758,
          endTimeOffset: "sed",
          filePrefix: "et",
          format: "consequuntur",
          interval: "non",
          quality: 5366472482114725502,
          rowCount: 432317278959866118,
          spriteHeightPixels: 5001980330882093199,
          spriteWidthPixels: 40355290058559125,
          startTimeOffset: "quasi",
          totalCount: 5534365872829545664,
        },
      ],
    },
    name: "enim",
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
