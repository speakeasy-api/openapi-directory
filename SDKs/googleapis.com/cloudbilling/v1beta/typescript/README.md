# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudbilling/v1beta/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudbilling/v1beta/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CloudbillingBillingAccountsEstimateCostScenarioRequest,
  CloudbillingBillingAccountsEstimateCostScenarioResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  PremiumTierEgressWorkloadDestinationContinentEnum,
  PersistentDiskScopeEnum,
  CloudStorageEgressWorkloadDestinationContinentEnum,
  CloudStorageEgressWorkloadSourceContinentEnum,
  CloudInterconnectWorkloadInterconnectTypeEnum,
  CloudInterconnectWorkloadLinkTypeEnum,
  VlanAttachmentBandwidthEnum,
  CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum,
  CloudCdnWorkloadCacheFillOriginServiceEnum,
  CacheFillRegionsDestinationRegionEnum,
  CacheFillRegionsSourceRegionEnum,
  CloudCdnEgressWorkloadCacheEgressDestinationEnum,
  VmResourceBasedCudPlanEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudbillingBillingAccountsEstimateCostScenarioRequest = {
  dollarXgafv: XgafvEnum.Two,
  estimateCostScenarioForBillingAccountRequest: {
    costScenario: {
      commitments: [
        {
          name: "distinctio",
          vmResourceBasedCud: {
            guestAccelerator: {
              acceleratorCount: "quibusdam",
              acceleratorType: "unde",
            },
            machineSeries: "nulla",
            memorySizeGb: 5448.83,
            plan: VmResourceBasedCudPlanEnum.ThirtySixMonth,
            region: "vel",
            virtualCpuCount: "error",
          },
        },
        {
          name: "deserunt",
          vmResourceBasedCud: {
            guestAccelerator: {
              acceleratorCount: "suscipit",
              acceleratorType: "iure",
            },
            machineSeries: "magnam",
            memorySizeGb: 8917.73,
            plan: VmResourceBasedCudPlanEnum.CommitmentPlanUnspecified,
            region: "delectus",
            virtualCpuCount: "tempora",
          },
        },
        {
          name: "suscipit",
          vmResourceBasedCud: {
            guestAccelerator: {
              acceleratorCount: "molestiae",
              acceleratorType: "minus",
            },
            machineSeries: "placeat",
            memorySizeGb: 5288.95,
            plan: VmResourceBasedCudPlanEnum.TwelveMonth,
            region: "excepturi",
            virtualCpuCount: "nisi",
          },
        },
      ],
      scenarioConfig: {
        estimateDuration: "recusandae",
      },
      workloads: [
        {
          cloudCdnEgressWorkload: {
            cacheEgressDestination: CloudCdnEgressWorkloadCacheEgressDestinationEnum.CacheEgressDestinationUnspecified,
            cacheEgressRate: {
              usageRateTimeline: {
                unit: "quis",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "deserunt",
                    },
                    usageRate: 202.18,
                  },
                ],
              },
            },
          },
          cloudCdnWorkload: {
            cacheFillOriginService: CloudCdnWorkloadCacheFillOriginServiceEnum.CacheFillOriginServiceGoogleCloudStorageBucket,
            cacheFillRate: {
              usageRateTimeline: {
                unit: "repellendus",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "quo",
                    },
                    usageRate: 1403.5,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "at",
                    },
                    usageRate: 8700.88,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "maiores",
                    },
                    usageRate: 4736.08,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "quod",
                    },
                    usageRate: 8009.11,
                  },
                ],
              },
            },
            cacheFillRegions: {
              destinationRegion: CacheFillRegionsDestinationRegionEnum.CacheFillDestinationRegionNorthAmerica,
              sourceRegion: CacheFillRegionsSourceRegionEnum.CacheFillSourceRegionNorthAmerica,
            },
            cacheLookUpRate: {
              usageRateTimeline: {
                unit: "porro",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "dicta",
                    },
                    usageRate: 7206.33,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "officia",
                    },
                    usageRate: 5820.2,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "fugit",
                    },
                    usageRate: 5373.73,
                  },
                ],
              },
            },
          },
          cloudInterconnectEgressWorkload: {
            egressRate: {
              usageRateTimeline: {
                unit: "hic",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "totam",
                    },
                    usageRate: 1059.07,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "commodi",
                    },
                    usageRate: 4736,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "modi",
                    },
                    usageRate: 1863.32,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "impedit",
                    },
                    usageRate: 7369.18,
                  },
                ],
              },
            },
            interconnectConnectionLocation: CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum.InterconnectConnectionLocationEurope,
          },
          cloudInterconnectWorkload: {
            interconnectAttachments: [
              {
                bandwidth: VlanAttachmentBandwidthEnum.BandwidthBps1G,
                vlanCount: {
                  usageRateTimeline: {
                    unit: "aspernatur",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "ad",
                        },
                        usageRate: 6176.36,
                      },
                    ],
                  },
                },
              },
            ],
            interconnectType: CloudInterconnectWorkloadInterconnectTypeEnum.InterconnectTypeUnspecified,
            linkType: CloudInterconnectWorkloadLinkTypeEnum.LinkTypeEthernet10GLr,
            provisionedLinkCount: {
              usageRateTimeline: {
                unit: "dolor",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "laboriosam",
                    },
                    usageRate: 9437.49,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "saepe",
                    },
                    usageRate: 6818.2,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "in",
                    },
                    usageRate: 3595.08,
                  },
                ],
              },
            },
          },
          cloudStorageEgressWorkload: {
            destinationContinent: CloudStorageEgressWorkloadDestinationContinentEnum.DestinationContinentEurope,
            egressRate: {
              usageRateTimeline: {
                unit: "iure",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "quidem",
                    },
                    usageRate: 992.8,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "ipsa",
                    },
                    usageRate: 9698.1,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "est",
                    },
                    usageRate: 6531.4,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "laborum",
                    },
                    usageRate: 1709.09,
                  },
                ],
              },
            },
            sourceContinent: CloudStorageEgressWorkloadSourceContinentEnum.SourceContinentAsiaPacific,
          },
          cloudStorageWorkload: {
            dataRetrieval: {
              usageRateTimeline: {
                unit: "corporis",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "nobis",
                    },
                    usageRate: 3154.28,
                  },
                ],
              },
            },
            dataStored: {
              usageRateTimeline: {
                unit: "omnis",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "minima",
                    },
                    usageRate: 5701.97,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "accusantium",
                    },
                    usageRate: 4386.01,
                  },
                ],
              },
            },
            dualRegion: {
              name: "culpa",
            },
            multiRegion: {
              name: "doloribus",
            },
            operationA: {
              usageRateTimeline: {
                unit: "sapiente",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "mollitia",
                    },
                    usageRate: 2088.76,
                  },
                ],
              },
            },
            operationB: {
              usageRateTimeline: {
                unit: "culpa",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "repellat",
                    },
                    usageRate: 6531.08,
                  },
                ],
              },
            },
            region: {
              name: "occaecati",
            },
            storageClass: "numquam",
          },
          computeVmWorkload: {
            enableConfidentialCompute: false,
            guestAccelerator: {
              acceleratorCount: "commodi",
              acceleratorType: "quam",
            },
            instancesRunning: {
              usageRateTimeline: {
                unit: "molestiae",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "error",
                    },
                    usageRate: 1589.69,
                  },
                ],
              },
            },
            licenses: [
              "vitae",
              "laborum",
            ],
            machineType: {
              customMachineType: {
                machineSeries: "animi",
                memorySizeGb: 3172.02,
                virtualCpuCount: "odit",
              },
              predefinedMachineType: {
                machineType: "quo",
              },
            },
            persistentDisks: [
              {
                diskSize: {
                  usageRateTimeline: {
                    unit: "tenetur",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "id",
                        },
                        usageRate: 8209.94,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "aut",
                        },
                        usageRate: 971.01,
                      },
                    ],
                  },
                },
                diskType: "error",
                provisionedIops: {
                  usageRateTimeline: {
                    unit: "temporibus",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "quasi",
                        },
                        usageRate: 9719.45,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "voluptatibus",
                        },
                        usageRate: 8781.94,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "nihil",
                        },
                        usageRate: 5096.24,
                      },
                    ],
                  },
                },
                scope: PersistentDiskScopeEnum.ScopeRegional,
              },
            ],
            preemptible: false,
            region: "ipsa",
          },
          name: "omnis",
          premiumTierEgressWorkload: {
            destinationContinent: PremiumTierEgressWorkloadDestinationContinentEnum.DestinationContinentCentralAmerica,
            egressRate: {
              usageRateTimeline: {
                unit: "cum",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "doloremque",
                    },
                    usageRate: 4417.11,
                  },
                ],
              },
            },
            sourceRegion: "ut",
          },
          standardTierEgressWorkload: {
            egressRate: {
              usageRateTimeline: {
                unit: "maiores",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "corporis",
                    },
                    usageRate: 2961.4,
                  },
                ],
              },
            },
            sourceRegion: "iusto",
          },
          vmToVmEgressWorkload: {
            interRegionEgress: {
              destinationRegion: "dicta",
              egressRate: {
                usageRateTimeline: {
                  unit: "harum",
                  usageRateTimelineEntries: [
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "accusamus",
                      },
                      usageRate: 4142.63,
                    },
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "repudiandae",
                      },
                      usageRate: 641.47,
                    },
                  ],
                },
              },
              sourceRegion: "ipsum",
            },
            intraRegionEgress: {
              egressRate: {
                usageRateTimeline: {
                  unit: "quidem",
                  usageRateTimelineEntries: [
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "excepturi",
                      },
                      usageRate: 8651.03,
                    },
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "modi",
                      },
                      usageRate: 5089.69,
                    },
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "rem",
                      },
                      usageRate: 9167.23,
                    },
                  ],
                },
              },
            },
          },
        },
        {
          cloudCdnEgressWorkload: {
            cacheEgressDestination: CloudCdnEgressWorkloadCacheEgressDestinationEnum.CacheEgressDestinationUnspecified,
            cacheEgressRate: {
              usageRateTimeline: {
                unit: "repudiandae",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "veritatis",
                    },
                    usageRate: 9292.97,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "incidunt",
                    },
                    usageRate: 3185.69,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "consequatur",
                    },
                    usageRate: 6674.11,
                  },
                ],
              },
            },
          },
          cloudCdnWorkload: {
            cacheFillOriginService: CloudCdnWorkloadCacheFillOriginServiceEnum.CacheFillOriginServiceBackendService,
            cacheFillRate: {
              usageRateTimeline: {
                unit: "explicabo",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "distinctio",
                    },
                    usageRate: 8413.86,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "labore",
                    },
                    usageRate: 2647.3,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "qui",
                    },
                    usageRate: 3978.21,
                  },
                ],
              },
            },
            cacheFillRegions: {
              destinationRegion: CacheFillRegionsDestinationRegionEnum.CacheFillDestinationRegionOceania,
              sourceRegion: CacheFillRegionsSourceRegionEnum.CacheFillSourceRegionNorthAmerica,
            },
            cacheLookUpRate: {
              usageRateTimeline: {
                unit: "perferendis",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "assumenda",
                    },
                    usageRate: 3698.08,
                  },
                ],
              },
            },
          },
          cloudInterconnectEgressWorkload: {
            egressRate: {
              usageRateTimeline: {
                unit: "alias",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "dolorum",
                    },
                    usageRate: 5696.18,
                  },
                ],
              },
            },
            interconnectConnectionLocation: CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum.InterconnectConnectionLocationAsia,
          },
          cloudInterconnectWorkload: {
            interconnectAttachments: [
              {
                bandwidth: VlanAttachmentBandwidthEnum.BandwidthBps5G,
                vlanCount: {
                  usageRateTimeline: {
                    unit: "labore",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "eum",
                        },
                        usageRate: 2487.53,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "eligendi",
                        },
                        usageRate: 5761.57,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "aliquid",
                        },
                        usageRate: 5920.42,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "necessitatibus",
                        },
                        usageRate: 5722.52,
                      },
                    ],
                  },
                },
              },
              {
                bandwidth: VlanAttachmentBandwidthEnum.BandwidthBps2G,
                vlanCount: {
                  usageRateTimeline: {
                    unit: "dolor",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "a",
                        },
                        usageRate: 6800.56,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "in",
                        },
                        usageRate: 4491.98,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "illum",
                        },
                        usageRate: 9785.71,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "rerum",
                        },
                        usageRate: 1162.02,
                      },
                    ],
                  },
                },
              },
              {
                bandwidth: VlanAttachmentBandwidthEnum.BandwidthBps200M,
                vlanCount: {
                  usageRateTimeline: {
                    unit: "cumque",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "ea",
                        },
                        usageRate: 3965.06,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "laborum",
                        },
                        usageRate: 8811.04,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "non",
                        },
                        usageRate: 5812.73,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "enim",
                        },
                        usageRate: 8817.36,
                      },
                    ],
                  },
                },
              },
            ],
            interconnectType: CloudInterconnectWorkloadInterconnectTypeEnum.InterconnectTypePartner,
            linkType: CloudInterconnectWorkloadLinkTypeEnum.LinkTypeEthernet100GLr,
            provisionedLinkCount: {
              usageRateTimeline: {
                unit: "provident",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "id",
                    },
                    usageRate: 5013.24,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "deleniti",
                    },
                    usageRate: 9560.84,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "amet",
                    },
                    usageRate: 6439.9,
                  },
                ],
              },
            },
          },
          cloudStorageEgressWorkload: {
            destinationContinent: CloudStorageEgressWorkloadDestinationContinentEnum.DestinationContinentAutralia,
            egressRate: {
              usageRateTimeline: {
                unit: "vel",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "omnis",
                    },
                    usageRate: 4748.67,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "perferendis",
                    },
                    usageRate: 4701.32,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "magnam",
                    },
                    usageRate: 7160.75,
                  },
                ],
              },
            },
            sourceContinent: CloudStorageEgressWorkloadSourceContinentEnum.SourceContinentEurope,
          },
          cloudStorageWorkload: {
            dataRetrieval: {
              usageRateTimeline: {
                unit: "labore",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "suscipit",
                    },
                    usageRate: 6180.16,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "nobis",
                    },
                    usageRate: 4287.69,
                  },
                ],
              },
            },
            dataStored: {
              usageRateTimeline: {
                unit: "vero",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "architecto",
                    },
                    usageRate: 2982.82,
                  },
                ],
              },
            },
            dualRegion: {
              name: "et",
            },
            multiRegion: {
              name: "excepturi",
            },
            operationA: {
              usageRateTimeline: {
                unit: "ullam",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "quos",
                    },
                    usageRate: 5743.25,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "accusantium",
                    },
                    usageRate: 6532.01,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "reiciendis",
                    },
                    usageRate: 6521.03,
                  },
                ],
              },
            },
            operationB: {
              usageRateTimeline: {
                unit: "ad",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "dolor",
                    },
                    usageRate: 8965.47,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "odit",
                    },
                    usageRate: 3675.62,
                  },
                ],
              },
            },
            region: {
              name: "quasi",
            },
            storageClass: "iure",
          },
          computeVmWorkload: {
            enableConfidentialCompute: false,
            guestAccelerator: {
              acceleratorCount: "doloribus",
              acceleratorType: "debitis",
            },
            instancesRunning: {
              usageRateTimeline: {
                unit: "eius",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "deleniti",
                    },
                    usageRate: 7038.89,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "in",
                    },
                    usageRate: 1002.26,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "architecto",
                    },
                    usageRate: 9194.83,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "ullam",
                    },
                    usageRate: 7142.42,
                  },
                ],
              },
            },
            licenses: [
              "repellat",
              "quibusdam",
            ],
            machineType: {
              customMachineType: {
                machineSeries: "sed",
                memorySizeGb: 9046.48,
                virtualCpuCount: "pariatur",
              },
              predefinedMachineType: {
                machineType: "accusantium",
              },
            },
            persistentDisks: [
              {
                diskSize: {
                  usageRateTimeline: {
                    unit: "praesentium",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "magni",
                        },
                        usageRate: 1238.2,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "quo",
                        },
                        usageRate: 8480.09,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "pariatur",
                        },
                        usageRate: 8073.19,
                      },
                    ],
                  },
                },
                diskType: "ea",
                provisionedIops: {
                  usageRateTimeline: {
                    unit: "excepturi",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "ea",
                        },
                        usageRate: 332.22,
                      },
                    ],
                  },
                },
                scope: PersistentDiskScopeEnum.ScopeUnspecified,
              },
            ],
            preemptible: false,
            region: "maiores",
          },
          name: "quidem",
          premiumTierEgressWorkload: {
            destinationContinent: PremiumTierEgressWorkloadDestinationContinentEnum.DestinationContinentAutralia,
            egressRate: {
              usageRateTimeline: {
                unit: "voluptate",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "nam",
                    },
                    usageRate: 505.88,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "pariatur",
                    },
                    usageRate: 3654.96,
                  },
                ],
              },
            },
            sourceRegion: "voluptatibus",
          },
          standardTierEgressWorkload: {
            egressRate: {
              usageRateTimeline: {
                unit: "perferendis",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "amet",
                    },
                    usageRate: 117.14,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "cumque",
                    },
                    usageRate: 3599.78,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "hic",
                    },
                    usageRate: 7299.91,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "nobis",
                    },
                    usageRate: 1716.29,
                  },
                ],
              },
            },
            sourceRegion: "quis",
          },
          vmToVmEgressWorkload: {
            interRegionEgress: {
              destinationRegion: "totam",
              egressRate: {
                usageRateTimeline: {
                  unit: "dignissimos",
                  usageRateTimelineEntries: [
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "quis",
                      },
                      usageRate: 1999.96,
                    },
                  ],
                },
              },
              sourceRegion: "eos",
            },
            intraRegionEgress: {
              egressRate: {
                usageRateTimeline: {
                  unit: "perferendis",
                  usageRateTimelineEntries: [
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "minus",
                      },
                      usageRate: 4634.51,
                    },
                  ],
                },
              },
            },
          },
        },
        {
          cloudCdnEgressWorkload: {
            cacheEgressDestination: CloudCdnEgressWorkloadCacheEgressDestinationEnum.CacheEgressDestinationAsiaPacific,
            cacheEgressRate: {
              usageRateTimeline: {
                unit: "vero",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "hic",
                    },
                    usageRate: 9280.82,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "omnis",
                    },
                    usageRate: 7044.15,
                  },
                ],
              },
            },
          },
          cloudCdnWorkload: {
            cacheFillOriginService: CloudCdnWorkloadCacheFillOriginServiceEnum.CacheFillOriginServiceGoogleCloudStorageBucket,
            cacheFillRate: {
              usageRateTimeline: {
                unit: "voluptatem",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "consequuntur",
                    },
                    usageRate: 5000.26,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "error",
                    },
                    usageRate: 503.7,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "occaecati",
                    },
                    usageRate: 6990.98,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "adipisci",
                    },
                    usageRate: 9923.97,
                  },
                ],
              },
            },
            cacheFillRegions: {
              destinationRegion: CacheFillRegionsDestinationRegionEnum.CacheFillDestinationRegionOthers,
              sourceRegion: CacheFillRegionsSourceRegionEnum.CacheFillRegionAsiaPacific,
            },
            cacheLookUpRate: {
              usageRateTimeline: {
                unit: "iste",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "deleniti",
                    },
                    usageRate: 8642.82,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "provident",
                    },
                    usageRate: 7508.44,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "libero",
                    },
                    usageRate: 9644.9,
                  },
                ],
              },
            },
          },
          cloudInterconnectEgressWorkload: {
            egressRate: {
              usageRateTimeline: {
                unit: "quaerat",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "aliquid",
                    },
                    usageRate: 2123.9,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "dolorem",
                    },
                    usageRate: 2224.43,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "qui",
                    },
                    usageRate: 2187.49,
                  },
                ],
              },
            },
            interconnectConnectionLocation: CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum.InterconnectConnectionLocationAustralia,
          },
          cloudInterconnectWorkload: {
            interconnectAttachments: [
              {
                bandwidth: VlanAttachmentBandwidthEnum.BandwidthBps5G,
                vlanCount: {
                  usageRateTimeline: {
                    unit: "voluptate",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "reiciendis",
                        },
                        usageRate: 2274.14,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "dolorum",
                        },
                        usageRate: 2543.56,
                      },
                    ],
                  },
                },
              },
              {
                bandwidth: VlanAttachmentBandwidthEnum.BandwidthBps50M,
                vlanCount: {
                  usageRateTimeline: {
                    unit: "ipsa",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "iure",
                        },
                        usageRate: 4878.38,
                      },
                    ],
                  },
                },
              },
              {
                bandwidth: VlanAttachmentBandwidthEnum.BandwidthBps300M,
                vlanCount: {
                  usageRateTimeline: {
                    unit: "accusamus",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "voluptatibus",
                        },
                        usageRate: 3777.52,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "natus",
                        },
                        usageRate: 1796.03,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "atque",
                        },
                        usageRate: 246.78,
                      },
                    ],
                  },
                },
              },
            ],
            interconnectType: CloudInterconnectWorkloadInterconnectTypeEnum.InterconnectTypePartner,
            linkType: CloudInterconnectWorkloadLinkTypeEnum.LinkTypeUnspecified,
            provisionedLinkCount: {
              usageRateTimeline: {
                unit: "soluta",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "iusto",
                    },
                    usageRate: 4536.97,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "dolorum",
                    },
                    usageRate: 5365.79,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "omnis",
                    },
                    usageRate: 8966.72,
                  },
                ],
              },
            },
          },
          cloudStorageEgressWorkload: {
            destinationContinent: CloudStorageEgressWorkloadDestinationContinentEnum.DestinationContinentNorthAmerica,
            egressRate: {
              usageRateTimeline: {
                unit: "asperiores",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "ipsum",
                    },
                    usageRate: 4560.15,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "id",
                    },
                    usageRate: 9064.18,
                  },
                ],
              },
            },
            sourceContinent: CloudStorageEgressWorkloadSourceContinentEnum.SourceContinentAsiaPacific,
          },
          cloudStorageWorkload: {
            dataRetrieval: {
              usageRateTimeline: {
                unit: "aspernatur",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "amet",
                    },
                    usageRate: 7583.79,
                  },
                ],
              },
            },
            dataStored: {
              usageRateTimeline: {
                unit: "accusamus",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "saepe",
                    },
                    usageRate: 3834.64,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "deserunt",
                    },
                    usageRate: 5883.17,
                  },
                ],
              },
            },
            dualRegion: {
              name: "minima",
            },
            multiRegion: {
              name: "repellendus",
            },
            operationA: {
              usageRateTimeline: {
                unit: "totam",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "alias",
                    },
                    usageRate: 8726.51,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "quaerat",
                    },
                    usageRate: 2735.42,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "vel",
                    },
                    usageRate: 7980.47,
                  },
                ],
              },
            },
            operationB: {
              usageRateTimeline: {
                unit: "officiis",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "dolorum",
                    },
                    usageRate: 9527.92,
                  },
                ],
              },
            },
            region: {
              name: "esse",
            },
            storageClass: "harum",
          },
          computeVmWorkload: {
            enableConfidentialCompute: false,
            guestAccelerator: {
              acceleratorCount: "iusto",
              acceleratorType: "ipsum",
            },
            instancesRunning: {
              usageRateTimeline: {
                unit: "quisquam",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "amet",
                    },
                    usageRate: 7308.56,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "accusamus",
                    },
                    usageRate: 2539.41,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "enim",
                    },
                    usageRate: 2133.12,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "sapiente",
                    },
                    usageRate: 5182.01,
                  },
                ],
              },
            },
            licenses: [
              "sit",
              "expedita",
            ],
            machineType: {
              customMachineType: {
                machineSeries: "neque",
                memorySizeGb: 1536.94,
                virtualCpuCount: "vel",
              },
              predefinedMachineType: {
                machineType: "libero",
              },
            },
            persistentDisks: [
              {
                diskSize: {
                  usageRateTimeline: {
                    unit: "deserunt",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "ipsum",
                        },
                        usageRate: 2776.28,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "qui",
                        },
                        usageRate: 5867.84,
                      },
                    ],
                  },
                },
                diskType: "maxime",
                provisionedIops: {
                  usageRateTimeline: {
                    unit: "pariatur",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "dicta",
                        },
                        usageRate: 6748.48,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "totam",
                        },
                        usageRate: 2768.94,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "aspernatur",
                        },
                        usageRate: 1749.09,
                      },
                    ],
                  },
                },
                scope: PersistentDiskScopeEnum.ScopeRegional,
              },
              {
                diskSize: {
                  usageRateTimeline: {
                    unit: "facilis",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "quam",
                        },
                        usageRate: 5654.21,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "temporibus",
                        },
                        usageRate: 1832.8,
                      },
                    ],
                  },
                },
                diskType: "neque",
                provisionedIops: {
                  usageRateTimeline: {
                    unit: "fugit",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "odio",
                        },
                        usageRate: 1248.33,
                      },
                    ],
                  },
                },
                scope: PersistentDiskScopeEnum.ScopeZonal,
              },
            ],
            preemptible: false,
            region: "nam",
          },
          name: "hic",
          premiumTierEgressWorkload: {
            destinationContinent: PremiumTierEgressWorkloadDestinationContinentEnum.DestinationContinentUnspecified,
            egressRate: {
              usageRateTimeline: {
                unit: "cumque",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "nobis",
                    },
                    usageRate: 925.96,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "saepe",
                    },
                    usageRate: 2174.5,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "veritatis",
                    },
                    usageRate: 7492.55,
                  },
                ],
              },
            },
            sourceRegion: "quos",
          },
          standardTierEgressWorkload: {
            egressRate: {
              usageRateTimeline: {
                unit: "tempore",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "aperiam",
                    },
                    usageRate: 9619.37,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "dolorem",
                    },
                    usageRate: 2921.47,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "labore",
                    },
                    usageRate: 2408.29,
                  },
                ],
              },
            },
            sourceRegion: "dolorum",
          },
          vmToVmEgressWorkload: {
            interRegionEgress: {
              destinationRegion: "architecto",
              egressRate: {
                usageRateTimeline: {
                  unit: "quae",
                  usageRateTimelineEntries: [
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "quas",
                      },
                      usageRate: 9295.3,
                    },
                  ],
                },
              },
              sourceRegion: "consequatur",
            },
            intraRegionEgress: {
              egressRate: {
                usageRateTimeline: {
                  unit: "est",
                  usageRateTimelineEntries: [
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "porro",
                      },
                      usageRate: 9843.3,
                    },
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "ut",
                      },
                      usageRate: 7034.95,
                    },
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "cupiditate",
                      },
                      usageRate: 1816.31,
                    },
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "quae",
                      },
                      usageRate: 5123.93,
                    },
                  ],
                },
              },
            },
          },
        },
        {
          cloudCdnEgressWorkload: {
            cacheEgressDestination: CloudCdnEgressWorkloadCacheEgressDestinationEnum.CacheEgressDestinationEurope,
            cacheEgressRate: {
              usageRateTimeline: {
                unit: "occaecati",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "quisquam",
                    },
                    usageRate: 8765.06,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "omnis",
                    },
                    usageRate: 3381.59,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "ipsum",
                    },
                    usageRate: 9615.71,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "voluptate",
                    },
                    usageRate: 2317.01,
                  },
                ],
              },
            },
          },
          cloudCdnWorkload: {
            cacheFillOriginService: CloudCdnWorkloadCacheFillOriginServiceEnum.CacheFillOriginServiceBackendService,
            cacheFillRate: {
              usageRateTimeline: {
                unit: "tenetur",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "hic",
                    },
                    usageRate: 7155.61,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "quod",
                    },
                    usageRate: 4861.6,
                  },
                ],
              },
            },
            cacheFillRegions: {
              destinationRegion: CacheFillRegionsDestinationRegionEnum.CacheFillDestinationRegionSouthAmerica,
              sourceRegion: CacheFillRegionsSourceRegionEnum.CacheFillSourceRegionOceania,
            },
            cacheLookUpRate: {
              usageRateTimeline: {
                unit: "vero",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "dolore",
                    },
                    usageRate: 8445.5,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "illum",
                    },
                    usageRate: 1943.42,
                  },
                ],
              },
            },
          },
          cloudInterconnectEgressWorkload: {
            egressRate: {
              usageRateTimeline: {
                unit: "natus",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "aut",
                    },
                    usageRate: 9742.59,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "exercitationem",
                    },
                    usageRate: 8623.1,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "fugit",
                    },
                    usageRate: 7804.27,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "maiores",
                    },
                    usageRate: 9850.33,
                  },
                ],
              },
            },
            interconnectConnectionLocation: CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum.InterconnectConnectionLocationEurope,
          },
          cloudInterconnectWorkload: {
            interconnectAttachments: [
              {
                bandwidth: VlanAttachmentBandwidthEnum.BandwidthBps500M,
                vlanCount: {
                  usageRateTimeline: {
                    unit: "alias",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "tempora",
                        },
                        usageRate: 3685.84,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "ea",
                        },
                        usageRate: 1369,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "vel",
                        },
                        usageRate: 8221.18,
                      },
                    ],
                  },
                },
              },
              {
                bandwidth: VlanAttachmentBandwidthEnum.BandwidthBps200M,
                vlanCount: {
                  usageRateTimeline: {
                    unit: "ratione",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "laudantium",
                        },
                        usageRate: 1206.57,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "dolor",
                        },
                        usageRate: 9807,
                      },
                    ],
                  },
                },
              },
              {
                bandwidth: VlanAttachmentBandwidthEnum.BandwidthBps50M,
                vlanCount: {
                  usageRateTimeline: {
                    unit: "ex",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "excepturi",
                        },
                        usageRate: 9729.2,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "nostrum",
                        },
                        usageRate: 9608.35,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "quisquam",
                        },
                        usageRate: 9065.56,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "ea",
                        },
                        usageRate: 7740.48,
                      },
                    ],
                  },
                },
              },
              {
                bandwidth: VlanAttachmentBandwidthEnum.BandwidthBps300M,
                vlanCount: {
                  usageRateTimeline: {
                    unit: "veniam",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "inventore",
                        },
                        usageRate: 3018.31,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "ea",
                        },
                        usageRate: 7752.2,
                      },
                    ],
                  },
                },
              },
            ],
            interconnectType: CloudInterconnectWorkloadInterconnectTypeEnum.InterconnectTypeUnspecified,
            linkType: CloudInterconnectWorkloadLinkTypeEnum.LinkTypeEthernet100GLr,
            provisionedLinkCount: {
              usageRateTimeline: {
                unit: "aspernatur",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "eaque",
                    },
                    usageRate: 9528.71,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "libero",
                    },
                    usageRate: 139.48,
                  },
                ],
              },
            },
          },
          cloudStorageEgressWorkload: {
            destinationContinent: CloudStorageEgressWorkloadDestinationContinentEnum.DestinationContinentUnspecified,
            egressRate: {
              usageRateTimeline: {
                unit: "deleniti",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "aliquam",
                    },
                    usageRate: 1469.46,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "accusamus",
                    },
                    usageRate: 795.22,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "non",
                    },
                    usageRate: 896.03,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "dolorum",
                    },
                    usageRate: 6720.48,
                  },
                ],
              },
            },
            sourceContinent: CloudStorageEgressWorkloadSourceContinentEnum.SourceContinentNorthAmerica,
          },
          cloudStorageWorkload: {
            dataRetrieval: {
              usageRateTimeline: {
                unit: "velit",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "autem",
                    },
                    usageRate: 7521.35,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "quas",
                    },
                    usageRate: 8296.03,
                  },
                ],
              },
            },
            dataStored: {
              usageRateTimeline: {
                unit: "nulla",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "libero",
                    },
                    usageRate: 965.49,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "tempora",
                    },
                    usageRate: 2561.39,
                  },
                ],
              },
            },
            dualRegion: {
              name: "explicabo",
            },
            multiRegion: {
              name: "provident",
            },
            operationA: {
              usageRateTimeline: {
                unit: "ipsa",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "magnam",
                    },
                    usageRate: 4879.35,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "eius",
                    },
                    usageRate: 4585.15,
                  },
                ],
              },
            },
            operationB: {
              usageRateTimeline: {
                unit: "esse",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "fuga",
                    },
                    usageRate: 4420.15,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "quidem",
                    },
                    usageRate: 8526.35,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "ut",
                    },
                    usageRate: 4334.39,
                  },
                ],
              },
            },
            region: {
              name: "suscipit",
            },
            storageClass: "assumenda",
          },
          computeVmWorkload: {
            enableConfidentialCompute: false,
            guestAccelerator: {
              acceleratorCount: "eos",
              acceleratorType: "praesentium",
            },
            instancesRunning: {
              usageRateTimeline: {
                unit: "quisquam",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "ipsa",
                    },
                    usageRate: 6600.4,
                  },
                ],
              },
            },
            licenses: [
              "neque",
              "quo",
              "illum",
            ],
            machineType: {
              customMachineType: {
                machineSeries: "quo",
                memorySizeGb: 6813.59,
                virtualCpuCount: "eius",
              },
              predefinedMachineType: {
                machineType: "eos",
              },
            },
            persistentDisks: [
              {
                diskSize: {
                  usageRateTimeline: {
                    unit: "ab",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "consequatur",
                        },
                        usageRate: 2728.22,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "debitis",
                        },
                        usageRate: 3708.53,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "aspernatur",
                        },
                        usageRate: 1970.54,
                      },
                    ],
                  },
                },
                diskType: "quo",
                provisionedIops: {
                  usageRateTimeline: {
                    unit: "esse",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "aperiam",
                        },
                        usageRate: 7151.79,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "quod",
                        },
                        usageRate: 4908.19,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "inventore",
                        },
                        usageRate: 4694.98,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "totam",
                        },
                        usageRate: 8827.1,
                      },
                    ],
                  },
                },
                scope: PersistentDiskScopeEnum.ScopeUnspecified,
              },
              {
                diskSize: {
                  usageRateTimeline: {
                    unit: "odio",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "commodi",
                        },
                        usageRate: 9594.34,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "dolores",
                        },
                        usageRate: 6455.7,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "molestiae",
                        },
                        usageRate: 353.62,
                      },
                    ],
                  },
                },
                diskType: "porro",
                provisionedIops: {
                  usageRateTimeline: {
                    unit: "eum",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "praesentium",
                        },
                        usageRate: 1598.67,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "deleniti",
                        },
                        usageRate: 1438.29,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "fuga",
                        },
                        usageRate: 6494.63,
                      },
                    ],
                  },
                },
                scope: PersistentDiskScopeEnum.ScopeUnspecified,
              },
            ],
            preemptible: false,
            region: "atque",
          },
          name: "explicabo",
          premiumTierEgressWorkload: {
            destinationContinent: PremiumTierEgressWorkloadDestinationContinentEnum.DestinationContinentAutralia,
            egressRate: {
              usageRateTimeline: {
                unit: "nisi",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "sapiente",
                    },
                    usageRate: 1598.7,
                  },
                ],
              },
            },
            sourceRegion: "ratione",
          },
          standardTierEgressWorkload: {
            egressRate: {
              usageRateTimeline: {
                unit: "explicabo",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "occaecati",
                    },
                    usageRate: 5438.06,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "et",
                    },
                    usageRate: 4569.11,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "eveniet",
                    },
                    usageRate: 8820.42,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "veritatis",
                    },
                    usageRate: 4586.04,
                  },
                ],
              },
            },
            sourceRegion: "quod",
          },
          vmToVmEgressWorkload: {
            interRegionEgress: {
              destinationRegion: "nam",
              egressRate: {
                usageRateTimeline: {
                  unit: "vero",
                  usageRateTimelineEntries: [
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "quasi",
                      },
                      usageRate: 9040.45,
                    },
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "vel",
                      },
                      usageRate: 6900.25,
                    },
                  ],
                },
              },
              sourceRegion: "molestiae",
            },
            intraRegionEgress: {
              egressRate: {
                usageRateTimeline: {
                  unit: "rerum",
                  usageRateTimelineEntries: [
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "minima",
                      },
                      usageRate: 7162.44,
                    },
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "eligendi",
                      },
                      usageRate: 270.69,
                    },
                    {
                      effectiveTime: {
                        estimationTimeFrameOffset: "culpa",
                      },
                      usageRate: 7313.98,
                    },
                  ],
                },
              },
            },
          },
        },
      ],
    },
  },
  accessToken: "adipisci",
  alt: AltEnum.Proto,
  billingAccount: "consequuntur",
  callback: "consequatur",
  fields: "minus",
  key: "quaerat",
  oauthToken: "sapiente",
  prettyPrint: false,
  quotaUser: "consectetur",
  uploadType: "esse",
  uploadProtocol: "blanditiis",
};

sdk.billingAccounts.cloudbillingBillingAccountsEstimateCostScenario(req).then((res: CloudbillingBillingAccountsEstimateCostScenarioResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### billingAccounts

* `cloudbillingBillingAccountsEstimateCostScenario` - Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

### v1beta

* `cloudbillingEstimateCostScenario` - Estimate list prices using a `CostScenario` without a defined `billingAccount`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

