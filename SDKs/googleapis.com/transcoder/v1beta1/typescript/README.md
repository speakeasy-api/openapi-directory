# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/transcoder/v1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/transcoder/v1beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  TranscoderProjectsLocationsJobTemplatesCreateRequest,
  TranscoderProjectsLocationsJobTemplatesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  AnimationFadeFadeTypeEnum,
  ManifestTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TranscoderProjectsLocationsJobTemplatesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  jobTemplate: {
    config: {
      adBreaks: [
        {
          startTimeOffset: "distinctio",
        },
        {
          startTimeOffset: "quibusdam",
        },
        {
          startTimeOffset: "unde",
        },
      ],
      editList: [
        {
          endTimeOffset: "corrupti",
          inputs: [
            "vel",
            "error",
            "deserunt",
            "suscipit",
          ],
          key: "iure",
          startTimeOffset: "magnam",
        },
        {
          endTimeOffset: "debitis",
          inputs: [
            "delectus",
          ],
          key: "tempora",
          startTimeOffset: "suscipit",
        },
        {
          endTimeOffset: "molestiae",
          inputs: [
            "placeat",
            "voluptatum",
            "iusto",
            "excepturi",
          ],
          key: "nisi",
          startTimeOffset: "recusandae",
        },
        {
          endTimeOffset: "temporibus",
          inputs: [
            "quis",
          ],
          key: "veritatis",
          startTimeOffset: "deserunt",
        },
      ],
      elementaryStreams: [
        {
          audioStream: {
            bitrateBps: 368241,
            channelCount: 832620,
            channelLayout: [
              "quo",
              "odit",
              "at",
              "at",
            ],
            codec: "maiores",
            mapping: [
              {
                channels: [
                  {
                    inputs: [
                      {
                        channel: 461479,
                        gainDb: 5204.78,
                        key: "porro",
                        track: 678880,
                      },
                      {
                        channel: 118274,
                        gainDb: 7206.33,
                        key: "officia",
                        track: 582020,
                      },
                      {
                        channel: 143353,
                        gainDb: 5373.73,
                        key: "hic",
                        track: 758616,
                      },
                      {
                        channel: 521848,
                        gainDb: 1059.07,
                        key: "commodi",
                        track: 473600,
                      },
                    ],
                  },
                  {
                    inputs: [
                      {
                        channel: 186332,
                        gainDb: 7742.34,
                        key: "cum",
                        track: 456150,
                      },
                      {
                        channel: 216550,
                        gainDb: 5684.34,
                        key: "aspernatur",
                        track: 18789,
                      },
                    ],
                  },
                  {
                    inputs: [
                      {
                        channel: 617636,
                        gainDb: 1496.75,
                        key: "iste",
                        track: 222321,
                      },
                      {
                        channel: 616934,
                        gainDb: 3864.89,
                        key: "hic",
                        track: 902599,
                      },
                    ],
                  },
                  {
                    inputs: [
                      {
                        channel: 449950,
                        gainDb: 3595.08,
                        key: "iste",
                        track: 437032,
                      },
                      {
                        channel: 902349,
                        gainDb: 6976.31,
                        key: "architecto",
                        track: 60225,
                      },
                      {
                        channel: 969810,
                        gainDb: 6667.67,
                        key: "mollitia",
                        track: 670638,
                      },
                    ],
                  },
                ],
                key: "dolores",
              },
              {
                channels: [
                  {
                    inputs: [
                      {
                        channel: 128926,
                        gainDb: 7506.86,
                        key: "enim",
                        track: 607831,
                      },
                      {
                        channel: 363711,
                        gainDb: 3250.47,
                        key: "excepturi",
                        track: 38425,
                      },
                    ],
                  },
                ],
                key: "iure",
              },
            ],
            sampleRateHertz: 634274,
          },
          key: "doloribus",
          textStream: {
            codec: "sapiente",
            languageCode: "architecto",
            mapping: [
              {
                inputs: [
                  {
                    key: "culpa",
                    track: 161309,
                  },
                ],
                key: "repellat",
              },
              {
                inputs: [
                  {
                    key: "occaecati",
                    track: 253291,
                  },
                  {
                    key: "commodi",
                    track: 466311,
                  },
                  {
                    key: "molestiae",
                    track: 244425,
                  },
                ],
                key: "error",
              },
              {
                inputs: [
                  {
                    key: "quis",
                    track: 110375,
                  },
                ],
                key: "laborum",
              },
            ],
          },
          videoStream: {
            allowOpenGop: false,
            aqStrength: 6563.3,
            bFrameCount: 317202,
            bPyramid: false,
            bitrateBps: 138183,
            codec: "quo",
            crfLevel: 196582,
            enableTwoPass: false,
            entropyCoder: "tenetur",
            frameRate: 3687.25,
            gopDuration: "id",
            gopFrameCount: 820994,
            heightPixels: 13571,
            pixelFormat: "quasi",
            preset: "error",
            profile: "temporibus",
            rateControlMode: "laborum",
            tune: "quasi",
            vbvFullnessBits: 971945,
            vbvSizeBits: 976460,
            widthPixels: 878194,
          },
        },
      ],
      inputs: [
        {
          key: "praesentium",
          preprocessingConfig: {
            audio: {
              highBoost: false,
              lowBoost: false,
              lufs: 9767.62,
            },
            color: {
              brightness: 557.14,
              contrast: 6048.46,
              saturation: 4511.59,
            },
            crop: {
              bottomPixels: 739264,
              leftPixels: 19987,
              rightPixels: 39187,
              topPixels: 441711,
            },
            deblock: {
              enabled: false,
              strength: 2828.07,
            },
            denoise: {
              strength: 9795.87,
              tune: "dicta",
            },
            pad: {
              bottomPixels: 359444,
              leftPixels: 296140,
              rightPixels: 480894,
              topPixels: 118727,
            },
          },
          uri: "https://frugal-sympathy.info",
        },
        {
          key: "repudiandae",
          preprocessingConfig: {
            audio: {
              highBoost: false,
              lowBoost: false,
              lufs: 641.47,
            },
            color: {
              brightness: 2168.22,
              contrast: 6924.72,
              saturation: 5651.89,
            },
            crop: {
              bottomPixels: 566602,
              leftPixels: 865103,
              rightPixels: 265389,
              topPixels: 508969,
            },
            deblock: {
              enabled: false,
              strength: 5232.48,
            },
            denoise: {
              strength: 9167.23,
              tune: "quasi",
            },
            pad: {
              bottomPixels: 921158,
              leftPixels: 575947,
              rightPixels: 83112,
              topPixels: 929297,
            },
          },
          uri: "http://fruitful-adjective.net",
        },
      ],
      manifests: [
        {
          fileName: "explicabo",
          muxStreams: [
            "distinctio",
            "quibusdam",
            "labore",
          ],
          type: ManifestTypeEnum.ManifestTypeUnspecified,
        },
        {
          fileName: "qui",
          muxStreams: [
            "cupiditate",
            "quos",
          ],
          type: ManifestTypeEnum.ManifestTypeUnspecified,
        },
        {
          fileName: "magni",
          muxStreams: [
            "ipsam",
            "alias",
            "fugit",
            "dolorum",
          ],
          type: ManifestTypeEnum.Hls,
        },
        {
          fileName: "tempora",
          muxStreams: [
            "tempore",
            "labore",
            "delectus",
          ],
          type: ManifestTypeEnum.Hls,
        },
      ],
      muxStreams: [
        {
          container: "eligendi",
          elementaryStreams: [
            "aliquid",
            "provident",
            "necessitatibus",
          ],
          encryption: {
            aes128: {
              keyUri: "sint",
            },
            iv: "officia",
            key: "dolor",
            mpegCenc: {
              keyId: "debitis",
              scheme: "a",
            },
            sampleAes: {
              keyUri: "dolorum",
            },
          },
          fileName: "in",
          key: "in",
          segmentSettings: {
            individualSegments: false,
            segmentDuration: "illum",
          },
        },
      ],
      output: {
        uri: "https://right-burn.biz",
      },
      overlays: [
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "ea",
              },
              animationFade: {
                endTimeOffset: "aliquid",
                fadeType: AnimationFadeFadeTypeEnum.FadeOut,
                startTimeOffset: "accusamus",
                xy: {
                  x: 2497.96,
                  y: 5812.73,
                },
              },
              animationStatic: {
                startTimeOffset: "enim",
                xy: {
                  x: 8817.36,
                  y: 9654.17,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "quidem",
              },
              animationFade: {
                endTimeOffset: "provident",
                fadeType: AnimationFadeFadeTypeEnum.FadeOut,
                startTimeOffset: "id",
                xy: {
                  x: 5013.24,
                  y: 5332.06,
                },
              },
              animationStatic: {
                startTimeOffset: "sapiente",
                xy: {
                  x: 2305.33,
                  y: 6439.9,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "nisi",
              },
              animationFade: {
                endTimeOffset: "vel",
                fadeType: AnimationFadeFadeTypeEnum.FadeIn,
                startTimeOffset: "omnis",
                xy: {
                  x: 4748.67,
                  y: 191.93,
                },
              },
              animationStatic: {
                startTimeOffset: "nihil",
                xy: {
                  x: 3015.75,
                  y: 7160.75,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "id",
              },
              animationFade: {
                endTimeOffset: "labore",
                fadeType: AnimationFadeFadeTypeEnum.FadeTypeUnspecified,
                startTimeOffset: "suscipit",
                xy: {
                  x: 6180.16,
                  y: 7491.7,
                },
              },
              animationStatic: {
                startTimeOffset: "eum",
                xy: {
                  x: 8784.53,
                  y: 1354.74,
                },
              },
            },
          ],
          image: {
            alpha: 1028.63,
            resolution: {
              x: 2982.82,
              y: 923.73,
            },
            uri: "https://grizzled-nest.name",
          },
        },
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "accusantium",
              },
              animationFade: {
                endTimeOffset: "mollitia",
                fadeType: AnimationFadeFadeTypeEnum.FadeOut,
                startTimeOffset: "mollitia",
                xy: {
                  x: 3209.97,
                  y: 4314.18,
                },
              },
              animationStatic: {
                startTimeOffset: "dolor",
                xy: {
                  x: 8965.47,
                  y: 1412.64,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "nemo",
              },
              animationFade: {
                endTimeOffset: "quasi",
                fadeType: AnimationFadeFadeTypeEnum.FadeIn,
                startTimeOffset: "doloribus",
                xy: {
                  x: 8919.24,
                  y: 2603.41,
                },
              },
              animationStatic: {
                startTimeOffset: "maxime",
                xy: {
                  x: 5370.23,
                  y: 7038.89,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "in",
              },
              animationFade: {
                endTimeOffset: "architecto",
                fadeType: AnimationFadeFadeTypeEnum.FadeTypeUnspecified,
                startTimeOffset: "repudiandae",
                xy: {
                  x: 3523.12,
                  y: 7142.42,
                },
              },
              animationStatic: {
                startTimeOffset: "nihil",
                xy: {
                  x: 9988.48,
                  y: 8411.4,
                },
              },
            },
          ],
          image: {
            alpha: 1494.48,
            resolution: {
              x: 9046.48,
              y: 8681.26,
            },
            uri: "http://cute-lens.name",
          },
        },
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "sunt",
              },
              animationFade: {
                endTimeOffset: "quo",
                fadeType: AnimationFadeFadeTypeEnum.FadeOut,
                startTimeOffset: "pariatur",
                xy: {
                  x: 8073.19,
                  y: 4113.97,
                },
              },
              animationStatic: {
                startTimeOffset: "excepturi",
                xy: {
                  x: 1399.72,
                  y: 4071.83,
                },
              },
            },
          ],
          image: {
            alpha: 332.22,
            resolution: {
              x: 691.67,
              y: 9825.75,
            },
            uri: "https://harmonious-in-joke.info",
          },
        },
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "eaque",
              },
              animationFade: {
                endTimeOffset: "pariatur",
                fadeType: AnimationFadeFadeTypeEnum.FadeIn,
                startTimeOffset: "voluptatibus",
                xy: {
                  x: 166.27,
                  y: 8558.04,
                },
              },
              animationStatic: {
                startTimeOffset: "amet",
                xy: {
                  x: 117.14,
                  y: 7649.12,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "corporis",
              },
              animationFade: {
                endTimeOffset: "hic",
                fadeType: AnimationFadeFadeTypeEnum.FadeOut,
                startTimeOffset: "nobis",
                xy: {
                  x: 1716.29,
                  y: 3394.04,
                },
              },
              animationStatic: {
                startTimeOffset: "totam",
                xy: {
                  x: 4895.49,
                  y: 543.38,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "quis",
              },
              animationFade: {
                endTimeOffset: "nesciunt",
                fadeType: AnimationFadeFadeTypeEnum.FadeTypeUnspecified,
                startTimeOffset: "perferendis",
                xy: {
                  x: 1709.86,
                  y: 7936.98,
                },
              },
              animationStatic: {
                startTimeOffset: "quam",
                xy: {
                  x: 2239.24,
                  y: 8745.73,
                },
              },
            },
          ],
          image: {
            alpha: 3453.52,
            resolution: {
              x: 9441.2,
              y: 9280.82,
            },
            uri: "https://rotten-noir.com",
          },
        },
      ],
      pubsubDestination: {
        topic: "porro",
      },
      spriteSheets: [
        {
          columnCount: 500026,
          endTimeOffset: "error",
          filePrefix: "eaque",
          format: "occaecati",
          interval: "rerum",
          quality: 237893,
          rowCount: 992397,
          spriteHeightPixels: 934214,
          spriteWidthPixels: 267262,
          startTimeOffset: "iste",
          totalCount: 679091,
        },
      ],
    },
    name: "deleniti",
  },
  accessToken: "pariatur",
  alt: AltEnum.Media,
  callback: "nobis",
  fields: "libero",
  jobTemplateId: "delectus",
  key: "quaerat",
  oauthToken: "quos",
  parent: "aliquid",
  prettyPrint: false,
  quotaUser: "dolorem",
  uploadType: "dolorem",
  uploadProtocol: "dolor",
};

sdk.projects.transcoderProjectsLocationsJobTemplatesCreate(req).then((res: TranscoderProjectsLocationsJobTemplatesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `transcoderProjectsLocationsJobTemplatesCreate` - Creates a job template in the specified region.
* `transcoderProjectsLocationsJobTemplatesDelete` - Deletes a job template.
* `transcoderProjectsLocationsJobTemplatesGet` - Returns the job template data.
* `transcoderProjectsLocationsJobTemplatesList` - Lists job templates in the specified region.
* `transcoderProjectsLocationsJobsCreate` - Creates a job in the specified region.
* `transcoderProjectsLocationsJobsList` - Lists jobs in the specified region.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

