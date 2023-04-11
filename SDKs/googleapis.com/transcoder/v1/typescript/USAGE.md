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
            displayName: "molestiae",
            languageCode: "quod",
            mapping: [
              {
                atomKey: "esse",
                gainDb: 5204.78,
                inputChannel: 780529,
                inputKey: "dolorum",
                inputTrack: 118274,
                outputChannel: 720633,
              },
              {
                atomKey: "officia",
                gainDb: 5820.2,
                inputChannel: 143353,
                inputKey: "deleniti",
                inputTrack: 944669,
                outputChannel: 758616,
              },
              {
                atomKey: "totam",
                gainDb: 1059.07,
                inputChannel: 414662,
                inputKey: "molestiae",
                inputTrack: 264555,
                outputChannel: 186332,
              },
              {
                atomKey: "impedit",
                gainDb: 7369.18,
                inputChannel: 456150,
                inputKey: "ipsum",
                inputTrack: 568434,
                outputChannel: 135218,
              },
            ],
            sampleRateHertz: 18789,
          },
          key: "ad",
          textStream: {
            codec: "natus",
            displayName: "sed",
            languageCode: "iste",
            mapping: [
              {
                atomKey: "natus",
                inputKey: "laboriosam",
                inputTrack: 943749,
              },
            ],
          },
          videoStream: {
            h264: {
              allowOpenGop: false,
              aqStrength: 9025.99,
              bFrameCount: 681820,
              bPyramid: false,
              bitrateBps: 449950,
              crfLevel: 359508,
              enableTwoPass: false,
              entropyCoder: "iste",
              frameRate: 4370.32,
              gopDuration: "saepe",
              gopFrameCount: 697631,
              heightPixels: 99280,
              pixelFormat: "ipsa",
              preset: "reiciendis",
              profile: "est",
              rateControlMode: "mollitia",
              tune: "laborum",
              vbvFullnessBits: 170909,
              vbvSizeBits: 210382,
              widthPixels: 358152,
            },
            h265: {
              allowOpenGop: false,
              aqStrength: 1289.26,
              bFrameCount: 750686,
              bPyramid: false,
              bitrateBps: 315428,
              crfLevel: 607831,
              enableTwoPass: false,
              frameRate: 3637.11,
              gopDuration: "minima",
              gopFrameCount: 570197,
              heightPixels: 38425,
              pixelFormat: "iure",
              preset: "culpa",
              profile: "doloribus",
              rateControlMode: "sapiente",
              tune: "architecto",
              vbvFullnessBits: 652790,
              vbvSizeBits: 208876,
              widthPixels: 635059,
            },
            vp9: {
              bitrateBps: 161309,
              crfLevel: 995300,
              frameRate: 6531.08,
              gopDuration: "occaecati",
              gopFrameCount: 253291,
              heightPixels: 414369,
              pixelFormat: "quam",
              profile: "molestiae",
              rateControlMode: "velit",
              widthPixels: 623510,
            },
          },
        },
      ],
      inputs: [
        {
          key: "quis",
          preprocessingConfig: {
            audio: {
              highBoost: false,
              lowBoost: false,
              lufs: 1103.75,
            },
            color: {
              brightness: 6747.52,
              contrast: 6563.3,
              saturation: 3172.02,
            },
            crop: {
              bottomPixels: 138183,
              leftPixels: 778346,
              rightPixels: 196582,
              topPixels: 949572,
            },
            deblock: {
              enabled: false,
              strength: 3687.25,
            },
            deinterlace: {
              bwdif: {
                deinterlaceAllFrames: false,
                mode: "id",
                parity: "possimus",
              },
              yadif: {
                deinterlaceAllFrames: false,
                disableSpatialInterlacing: false,
                mode: "aut",
                parity: "quasi",
              },
            },
            denoise: {
              strength: 6228.46,
              tune: "temporibus",
            },
            pad: {
              bottomPixels: 673660,
              leftPixels: 96098,
              rightPixels: 971945,
              topPixels: 976460,
            },
          },
          uri: "https://klutzy-level.org",
        },
      ],
      manifests: [
        {
          fileName: "omnis",
          muxStreams: [
            "cum",
            "perferendis",
          ],
          type: ManifestTypeEnum.ManifestTypeUnspecified,
        },
      ],
      muxStreams: [
        {
          container: "ut",
          elementaryStreams: [
            "dicta",
            "corporis",
            "dolore",
            "iusto",
          ],
          fileName: "dicta",
          key: "harum",
          segmentSettings: {
            individualSegments: false,
            segmentDuration: "enim",
          },
        },
        {
          container: "accusamus",
          elementaryStreams: [
            "repudiandae",
            "quae",
          ],
          fileName: "ipsum",
          key: "quidem",
          segmentSettings: {
            individualSegments: false,
            segmentDuration: "molestias",
          },
        },
      ],
      output: {
        uri: "https://treasured-dirt.name",
      },
      overlays: [
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "quasi",
              },
              animationFade: {
                endTimeOffset: "repudiandae",
                fadeType: AnimationFadeFadeTypeEnum.FadeIn,
                startTimeOffset: "veritatis",
                xy: {
                  x: 9292.97,
                  y: 2777.18,
                },
              },
              animationStatic: {
                startTimeOffset: "enim",
                xy: {
                  x: 93.56,
                  y: 6674.11,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "quibusdam",
              },
              animationFade: {
                endTimeOffset: "explicabo",
                fadeType: AnimationFadeFadeTypeEnum.FadeIn,
                startTimeOffset: "distinctio",
                xy: {
                  x: 8413.86,
                  y: 2894.06,
                },
              },
              animationStatic: {
                startTimeOffset: "modi",
                xy: {
                  x: 1831.91,
                  y: 3978.21,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "cupiditate",
              },
              animationFade: {
                endTimeOffset: "quos",
                fadeType: AnimationFadeFadeTypeEnum.FadeTypeUnspecified,
                startTimeOffset: "magni",
                xy: {
                  x: 8289.4,
                  y: 3698.08,
                },
              },
              animationStatic: {
                startTimeOffset: "alias",
                xy: {
                  x: 1464.41,
                  y: 6778.17,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "excepturi",
              },
              animationFade: {
                endTimeOffset: "tempora",
                fadeType: AnimationFadeFadeTypeEnum.FadeOut,
                startTimeOffset: "tempore",
                xy: {
                  x: 2884.76,
                  y: 9621.89,
                },
              },
              animationStatic: {
                startTimeOffset: "eum",
                xy: {
                  x: 2487.53,
                  y: 7561.07,
                },
              },
            },
          ],
          image: {
            alpha: 5761.57,
            resolution: {
              x: 3960.98,
              y: 5920.42,
            },
            uri: "https://nonstop-pate.biz",
          },
        },
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "a",
              },
              animationFade: {
                endTimeOffset: "dolorum",
                fadeType: AnimationFadeFadeTypeEnum.FadeIn,
                startTimeOffset: "in",
                xy: {
                  x: 8464.09,
                  y: 9785.71,
                },
              },
              animationStatic: {
                startTimeOffset: "rerum",
                xy: {
                  x: 1162.02,
                  y: 2974.37,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "cumque",
              },
              animationFade: {
                endTimeOffset: "facere",
                fadeType: AnimationFadeFadeTypeEnum.FadeIn,
                startTimeOffset: "aliquid",
                xy: {
                  x: 6754.39,
                  y: 8811.04,
                },
              },
              animationStatic: {
                startTimeOffset: "non",
                xy: {
                  x: 5812.73,
                  y: 3132.18,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "accusamus",
              },
              animationFade: {
                endTimeOffset: "delectus",
                fadeType: AnimationFadeFadeTypeEnum.FadeOut,
                startTimeOffset: "provident",
                xy: {
                  x: 7252.55,
                  y: 6596.69,
                },
              },
              animationStatic: {
                startTimeOffset: "blanditiis",
                xy: {
                  x: 5332.06,
                  y: 9560.84,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "amet",
              },
              animationFade: {
                endTimeOffset: "deserunt",
                fadeType: AnimationFadeFadeTypeEnum.FadeIn,
                startTimeOffset: "vel",
                xy: {
                  x: 6188.09,
                  y: 6063.93,
                },
              },
              animationStatic: {
                startTimeOffset: "molestiae",
                xy: {
                  x: 191.93,
                  y: 4701.32,
                },
              },
            },
          ],
          image: {
            alpha: 3015.75,
            resolution: {
              x: 7160.75,
              y: 6601.74,
            },
            uri: "http://flawed-gherkin.name",
          },
        },
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "eum",
              },
              animationFade: {
                endTimeOffset: "vero",
                fadeType: AnimationFadeFadeTypeEnum.FadeTypeUnspecified,
                startTimeOffset: "architecto",
                xy: {
                  x: 2982.82,
                  y: 923.73,
                },
              },
              animationStatic: {
                startTimeOffset: "excepturi",
                xy: {
                  x: 3540.47,
                  y: 5908.73,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "quos",
              },
              animationFade: {
                endTimeOffset: "sint",
                fadeType: AnimationFadeFadeTypeEnum.FadeTypeUnspecified,
                startTimeOffset: "mollitia",
                xy: {
                  x: 9689.62,
                  y: 6521.03,
                },
              },
              animationStatic: {
                startTimeOffset: "ad",
                xy: {
                  x: 4314.18,
                  y: 2212.62,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "necessitatibus",
              },
              animationFade: {
                endTimeOffset: "odit",
                fadeType: AnimationFadeFadeTypeEnum.FadeIn,
                startTimeOffset: "quasi",
                xy: {
                  x: 4358.65,
                  y: 9840.43,
                },
              },
              animationStatic: {
                startTimeOffset: "debitis",
                xy: {
                  x: 2603.41,
                  y: 8061.94,
                },
              },
            },
          ],
          image: {
            alpha: 5370.23,
            resolution: {
              x: 7038.89,
              y: 4479.26,
            },
            uri: "http://burly-trachoma.info",
          },
        },
      ],
      pubsubDestination: {
        topic: "expedita",
      },
      spriteSheets: [
        {
          columnCount: 998848,
          endTimeOffset: "quibusdam",
          filePrefix: "sed",
          format: "saepe",
          interval: "pariatur",
          quality: 37559,
          rowCount: 162493,
          spriteHeightPixels: 508315,
          spriteWidthPixels: 615560,
          startTimeOffset: "magni",
          totalCount: 123820,
        },
        {
          columnCount: 779051,
          endTimeOffset: "illum",
          filePrefix: "pariatur",
          format: "maxime",
          interval: "ea",
          quality: 569101,
          rowCount: 139972,
          spriteHeightPixels: 407183,
          spriteWidthPixels: 33222,
          startTimeOffset: "ab",
          totalCount: 982575,
        },
      ],
    },
    labels: {
      "ipsam": "voluptate",
      "autem": "nam",
      "eaque": "pariatur",
    },
    name: "nemo",
  },
  accessToken: "voluptatibus",
  alt: AltEnum.Json,
  callback: "fugiat",
  fields: "amet",
  jobTemplateId: "aut",
  key: "cumque",
  oauthToken: "corporis",
  parent: "hic",
  prettyPrint: false,
  quotaUser: "libero",
  uploadType: "nobis",
  uploadProtocol: "dolores",
};

sdk.projects.transcoderProjectsLocationsJobTemplatesCreate(req).then((res: TranscoderProjectsLocationsJobTemplatesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->