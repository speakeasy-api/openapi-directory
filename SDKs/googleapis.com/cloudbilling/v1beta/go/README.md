# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudbilling/v1beta/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CloudbillingBillingAccountsEstimateCostScenarioRequest{
        DollarXgafv: "2",
        EstimateCostScenarioForBillingAccountRequest: &shared.EstimateCostScenarioForBillingAccountRequest{
            CostScenario: &shared.CostScenario{
                Commitments: []shared.Commitment{
                    shared.Commitment{
                        Name: "distinctio",
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "quibusdam",
                                AcceleratorType: "unde",
                            },
                            MachineSeries: "nulla",
                            MemorySizeGb: 5448.83,
                            Plan: "THIRTY_SIX_MONTH",
                            Region: "vel",
                            VirtualCPUCount: "error",
                        },
                    },
                    shared.Commitment{
                        Name: "deserunt",
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "suscipit",
                                AcceleratorType: "iure",
                            },
                            MachineSeries: "magnam",
                            MemorySizeGb: 8917.73,
                            Plan: "COMMITMENT_PLAN_UNSPECIFIED",
                            Region: "delectus",
                            VirtualCPUCount: "tempora",
                        },
                    },
                    shared.Commitment{
                        Name: "suscipit",
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "molestiae",
                                AcceleratorType: "minus",
                            },
                            MachineSeries: "placeat",
                            MemorySizeGb: 5288.95,
                            Plan: "TWELVE_MONTH",
                            Region: "excepturi",
                            VirtualCPUCount: "nisi",
                        },
                    },
                },
                ScenarioConfig: &shared.ScenarioConfig{
                    EstimateDuration: "recusandae",
                },
                Workloads: []shared.Workload{
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: "CACHE_EGRESS_DESTINATION_UNSPECIFIED",
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "quis",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "deserunt",
                                            },
                                            UsageRate: 202.18,
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: "CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET",
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "repellendus",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "quo",
                                            },
                                            UsageRate: 1403.5,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "at",
                                            },
                                            UsageRate: 8700.88,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "maiores",
                                            },
                                            UsageRate: 4736.08,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "quod",
                                            },
                                            UsageRate: 8009.11,
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: "CACHE_FILL_DESTINATION_REGION_NORTH_AMERICA",
                                SourceRegion: "CACHE_FILL_SOURCE_REGION_NORTH_AMERICA",
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "porro",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "dicta",
                                            },
                                            UsageRate: 7206.33,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "officia",
                                            },
                                            UsageRate: 5820.2,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "fugit",
                                            },
                                            UsageRate: 5373.73,
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "hic",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "totam",
                                            },
                                            UsageRate: 1059.07,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "commodi",
                                            },
                                            UsageRate: 4736,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "modi",
                                            },
                                            UsageRate: 1863.32,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "impedit",
                                            },
                                            UsageRate: 7369.18,
                                        },
                                    },
                                },
                            },
                            InterconnectConnectionLocation: "INTERCONNECT_CONNECTION_LOCATION_EUROPE",
                        },
                        CloudInterconnectWorkload: &shared.CloudInterconnectWorkload{
                            InterconnectAttachments: []shared.VlanAttachment{
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_1G",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "aspernatur",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "ad",
                                                    },
                                                    UsageRate: 6176.36,
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            InterconnectType: "INTERCONNECT_TYPE_UNSPECIFIED",
                            LinkType: "LINK_TYPE_ETHERNET_10G_LR",
                            ProvisionedLinkCount: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "dolor",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "laboriosam",
                                            },
                                            UsageRate: 9437.49,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "saepe",
                                            },
                                            UsageRate: 6818.2,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "in",
                                            },
                                            UsageRate: 3595.08,
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_EUROPE",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "iure",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "quidem",
                                            },
                                            UsageRate: 992.8,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ipsa",
                                            },
                                            UsageRate: 9698.1,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "est",
                                            },
                                            UsageRate: 6531.4,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "laborum",
                                            },
                                            UsageRate: 1709.09,
                                        },
                                    },
                                },
                            },
                            SourceContinent: "SOURCE_CONTINENT_ASIA_PACIFIC",
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "corporis",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "nobis",
                                            },
                                            UsageRate: 3154.28,
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "omnis",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "minima",
                                            },
                                            UsageRate: 5701.97,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "accusantium",
                                            },
                                            UsageRate: 4386.01,
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: "culpa",
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: "doloribus",
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "sapiente",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "mollitia",
                                            },
                                            UsageRate: 2088.76,
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "culpa",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "repellat",
                                            },
                                            UsageRate: 6531.08,
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: "occaecati",
                            },
                            StorageClass: "numquam",
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: false,
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "commodi",
                                AcceleratorType: "quam",
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "molestiae",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "error",
                                            },
                                            UsageRate: 1589.69,
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "vitae",
                                "laborum",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: "animi",
                                    MemorySizeGb: 3172.02,
                                    VirtualCPUCount: "odit",
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: "quo",
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "tenetur",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "id",
                                                    },
                                                    UsageRate: 8209.94,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "aut",
                                                    },
                                                    UsageRate: 971.01,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "error",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "temporibus",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "quasi",
                                                    },
                                                    UsageRate: 9719.45,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "voluptatibus",
                                                    },
                                                    UsageRate: 8781.94,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "nihil",
                                                    },
                                                    UsageRate: 5096.24,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_REGIONAL",
                                },
                            },
                            Preemptible: false,
                            Region: "ipsa",
                        },
                        Name: "omnis",
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_CENTRAL_AMERICA",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "cum",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "doloremque",
                                            },
                                            UsageRate: 4417.11,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "ut",
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "maiores",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "corporis",
                                            },
                                            UsageRate: 2961.4,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "iusto",
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: "dicta",
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: "harum",
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "accusamus",
                                                },
                                                UsageRate: 4142.63,
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "repudiandae",
                                                },
                                                UsageRate: 641.47,
                                            },
                                        },
                                    },
                                },
                                SourceRegion: "ipsum",
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: "quidem",
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "excepturi",
                                                },
                                                UsageRate: 8651.03,
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "modi",
                                                },
                                                UsageRate: 5089.69,
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "rem",
                                                },
                                                UsageRate: 9167.23,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: "CACHE_EGRESS_DESTINATION_UNSPECIFIED",
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "repudiandae",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "veritatis",
                                            },
                                            UsageRate: 9292.97,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "incidunt",
                                            },
                                            UsageRate: 3185.69,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "consequatur",
                                            },
                                            UsageRate: 6674.11,
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: "CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE",
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "explicabo",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "distinctio",
                                            },
                                            UsageRate: 8413.86,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "labore",
                                            },
                                            UsageRate: 2647.3,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "qui",
                                            },
                                            UsageRate: 3978.21,
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: "CACHE_FILL_DESTINATION_REGION_OCEANIA",
                                SourceRegion: "CACHE_FILL_SOURCE_REGION_NORTH_AMERICA",
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "perferendis",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "assumenda",
                                            },
                                            UsageRate: 3698.08,
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "alias",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "dolorum",
                                            },
                                            UsageRate: 5696.18,
                                        },
                                    },
                                },
                            },
                            InterconnectConnectionLocation: "INTERCONNECT_CONNECTION_LOCATION_ASIA",
                        },
                        CloudInterconnectWorkload: &shared.CloudInterconnectWorkload{
                            InterconnectAttachments: []shared.VlanAttachment{
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_5G",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "labore",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "eum",
                                                    },
                                                    UsageRate: 2487.53,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "eligendi",
                                                    },
                                                    UsageRate: 5761.57,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "aliquid",
                                                    },
                                                    UsageRate: 5920.42,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "necessitatibus",
                                                    },
                                                    UsageRate: 5722.52,
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_2G",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "dolor",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "a",
                                                    },
                                                    UsageRate: 6800.56,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "in",
                                                    },
                                                    UsageRate: 4491.98,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "illum",
                                                    },
                                                    UsageRate: 9785.71,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "rerum",
                                                    },
                                                    UsageRate: 1162.02,
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_200M",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "cumque",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "ea",
                                                    },
                                                    UsageRate: 3965.06,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "laborum",
                                                    },
                                                    UsageRate: 8811.04,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "non",
                                                    },
                                                    UsageRate: 5812.73,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "enim",
                                                    },
                                                    UsageRate: 8817.36,
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            InterconnectType: "INTERCONNECT_TYPE_PARTNER",
                            LinkType: "LINK_TYPE_ETHERNET_100G_LR",
                            ProvisionedLinkCount: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "provident",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "id",
                                            },
                                            UsageRate: 5013.24,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "deleniti",
                                            },
                                            UsageRate: 9560.84,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "amet",
                                            },
                                            UsageRate: 6439.9,
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_AUTRALIA",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "vel",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "omnis",
                                            },
                                            UsageRate: 4748.67,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "perferendis",
                                            },
                                            UsageRate: 4701.32,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "magnam",
                                            },
                                            UsageRate: 7160.75,
                                        },
                                    },
                                },
                            },
                            SourceContinent: "SOURCE_CONTINENT_EUROPE",
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "labore",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "suscipit",
                                            },
                                            UsageRate: 6180.16,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "nobis",
                                            },
                                            UsageRate: 4287.69,
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "vero",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "architecto",
                                            },
                                            UsageRate: 2982.82,
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: "et",
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: "excepturi",
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "ullam",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "quos",
                                            },
                                            UsageRate: 5743.25,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "accusantium",
                                            },
                                            UsageRate: 6532.01,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "reiciendis",
                                            },
                                            UsageRate: 6521.03,
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "ad",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "dolor",
                                            },
                                            UsageRate: 8965.47,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "odit",
                                            },
                                            UsageRate: 3675.62,
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: "quasi",
                            },
                            StorageClass: "iure",
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: false,
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "doloribus",
                                AcceleratorType: "debitis",
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "eius",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "deleniti",
                                            },
                                            UsageRate: 7038.89,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "in",
                                            },
                                            UsageRate: 1002.26,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "architecto",
                                            },
                                            UsageRate: 9194.83,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ullam",
                                            },
                                            UsageRate: 7142.42,
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "repellat",
                                "quibusdam",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: "sed",
                                    MemorySizeGb: 9046.48,
                                    VirtualCPUCount: "pariatur",
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: "accusantium",
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "praesentium",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "magni",
                                                    },
                                                    UsageRate: 1238.2,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "quo",
                                                    },
                                                    UsageRate: 8480.09,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "pariatur",
                                                    },
                                                    UsageRate: 8073.19,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "ea",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "excepturi",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "ea",
                                                    },
                                                    UsageRate: 332.22,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_UNSPECIFIED",
                                },
                            },
                            Preemptible: false,
                            Region: "maiores",
                        },
                        Name: "quidem",
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_AUTRALIA",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "voluptate",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "nam",
                                            },
                                            UsageRate: 505.88,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "pariatur",
                                            },
                                            UsageRate: 3654.96,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "voluptatibus",
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "perferendis",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "amet",
                                            },
                                            UsageRate: 117.14,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "cumque",
                                            },
                                            UsageRate: 3599.78,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "hic",
                                            },
                                            UsageRate: 7299.91,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "nobis",
                                            },
                                            UsageRate: 1716.29,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "quis",
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: "totam",
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: "dignissimos",
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "quis",
                                                },
                                                UsageRate: 1999.96,
                                            },
                                        },
                                    },
                                },
                                SourceRegion: "eos",
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: "perferendis",
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "minus",
                                                },
                                                UsageRate: 4634.51,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: "CACHE_EGRESS_DESTINATION_ASIA_PACIFIC",
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "vero",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "hic",
                                            },
                                            UsageRate: 9280.82,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "omnis",
                                            },
                                            UsageRate: 7044.15,
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: "CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET",
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "voluptatem",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "consequuntur",
                                            },
                                            UsageRate: 5000.26,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "error",
                                            },
                                            UsageRate: 503.7,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "occaecati",
                                            },
                                            UsageRate: 6990.98,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "adipisci",
                                            },
                                            UsageRate: 9923.97,
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: "CACHE_FILL_DESTINATION_REGION_OTHERS",
                                SourceRegion: "CACHE_FILL_REGION_ASIA_PACIFIC",
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "iste",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "deleniti",
                                            },
                                            UsageRate: 8642.82,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "provident",
                                            },
                                            UsageRate: 7508.44,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "libero",
                                            },
                                            UsageRate: 9644.9,
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "quaerat",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aliquid",
                                            },
                                            UsageRate: 2123.9,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "dolorem",
                                            },
                                            UsageRate: 2224.43,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "qui",
                                            },
                                            UsageRate: 2187.49,
                                        },
                                    },
                                },
                            },
                            InterconnectConnectionLocation: "INTERCONNECT_CONNECTION_LOCATION_AUSTRALIA",
                        },
                        CloudInterconnectWorkload: &shared.CloudInterconnectWorkload{
                            InterconnectAttachments: []shared.VlanAttachment{
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_5G",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "voluptate",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "reiciendis",
                                                    },
                                                    UsageRate: 2274.14,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "dolorum",
                                                    },
                                                    UsageRate: 2543.56,
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_50M",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "ipsa",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "iure",
                                                    },
                                                    UsageRate: 4878.38,
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_300M",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "accusamus",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "voluptatibus",
                                                    },
                                                    UsageRate: 3777.52,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "natus",
                                                    },
                                                    UsageRate: 1796.03,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "atque",
                                                    },
                                                    UsageRate: 246.78,
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            InterconnectType: "INTERCONNECT_TYPE_PARTNER",
                            LinkType: "LINK_TYPE_UNSPECIFIED",
                            ProvisionedLinkCount: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "soluta",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "iusto",
                                            },
                                            UsageRate: 4536.97,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "dolorum",
                                            },
                                            UsageRate: 5365.79,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "omnis",
                                            },
                                            UsageRate: 8966.72,
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_NORTH_AMERICA",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "asperiores",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ipsum",
                                            },
                                            UsageRate: 4560.15,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "id",
                                            },
                                            UsageRate: 9064.18,
                                        },
                                    },
                                },
                            },
                            SourceContinent: "SOURCE_CONTINENT_ASIA_PACIFIC",
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "aspernatur",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "amet",
                                            },
                                            UsageRate: 7583.79,
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "accusamus",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "saepe",
                                            },
                                            UsageRate: 3834.64,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "deserunt",
                                            },
                                            UsageRate: 5883.17,
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: "minima",
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: "repellendus",
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "totam",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "alias",
                                            },
                                            UsageRate: 8726.51,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "quaerat",
                                            },
                                            UsageRate: 2735.42,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "vel",
                                            },
                                            UsageRate: 7980.47,
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "officiis",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "dolorum",
                                            },
                                            UsageRate: 9527.92,
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: "esse",
                            },
                            StorageClass: "harum",
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: false,
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "iusto",
                                AcceleratorType: "ipsum",
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "quisquam",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "amet",
                                            },
                                            UsageRate: 7308.56,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "accusamus",
                                            },
                                            UsageRate: 2539.41,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "enim",
                                            },
                                            UsageRate: 2133.12,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "sapiente",
                                            },
                                            UsageRate: 5182.01,
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "sit",
                                "expedita",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: "neque",
                                    MemorySizeGb: 1536.94,
                                    VirtualCPUCount: "vel",
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: "libero",
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "deserunt",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "ipsum",
                                                    },
                                                    UsageRate: 2776.28,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "qui",
                                                    },
                                                    UsageRate: 5867.84,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "maxime",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "pariatur",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "dicta",
                                                    },
                                                    UsageRate: 6748.48,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "totam",
                                                    },
                                                    UsageRate: 2768.94,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "aspernatur",
                                                    },
                                                    UsageRate: 1749.09,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_REGIONAL",
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "facilis",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "quam",
                                                    },
                                                    UsageRate: 5654.21,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "temporibus",
                                                    },
                                                    UsageRate: 1832.8,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "neque",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "fugit",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "odio",
                                                    },
                                                    UsageRate: 1248.33,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_ZONAL",
                                },
                            },
                            Preemptible: false,
                            Region: "nam",
                        },
                        Name: "hic",
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_UNSPECIFIED",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "cumque",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "nobis",
                                            },
                                            UsageRate: 925.96,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "saepe",
                                            },
                                            UsageRate: 2174.5,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "veritatis",
                                            },
                                            UsageRate: 7492.55,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "quos",
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "tempore",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aperiam",
                                            },
                                            UsageRate: 9619.37,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "dolorem",
                                            },
                                            UsageRate: 2921.47,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "labore",
                                            },
                                            UsageRate: 2408.29,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "dolorum",
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: "architecto",
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: "quae",
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "quas",
                                                },
                                                UsageRate: 9295.3,
                                            },
                                        },
                                    },
                                },
                                SourceRegion: "consequatur",
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: "est",
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "porro",
                                                },
                                                UsageRate: 9843.3,
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "ut",
                                                },
                                                UsageRate: 7034.95,
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "cupiditate",
                                                },
                                                UsageRate: 1816.31,
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "quae",
                                                },
                                                UsageRate: 5123.93,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: "CACHE_EGRESS_DESTINATION_EUROPE",
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "occaecati",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "quisquam",
                                            },
                                            UsageRate: 8765.06,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "omnis",
                                            },
                                            UsageRate: 3381.59,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ipsum",
                                            },
                                            UsageRate: 9615.71,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "voluptate",
                                            },
                                            UsageRate: 2317.01,
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: "CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE",
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "tenetur",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "hic",
                                            },
                                            UsageRate: 7155.61,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "quod",
                                            },
                                            UsageRate: 4861.6,
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: "CACHE_FILL_DESTINATION_REGION_SOUTH_AMERICA",
                                SourceRegion: "CACHE_FILL_SOURCE_REGION_OCEANIA",
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "vero",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "dolore",
                                            },
                                            UsageRate: 8445.5,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "illum",
                                            },
                                            UsageRate: 1943.42,
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "natus",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aut",
                                            },
                                            UsageRate: 9742.59,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "exercitationem",
                                            },
                                            UsageRate: 8623.1,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "fugit",
                                            },
                                            UsageRate: 7804.27,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "maiores",
                                            },
                                            UsageRate: 9850.33,
                                        },
                                    },
                                },
                            },
                            InterconnectConnectionLocation: "INTERCONNECT_CONNECTION_LOCATION_EUROPE",
                        },
                        CloudInterconnectWorkload: &shared.CloudInterconnectWorkload{
                            InterconnectAttachments: []shared.VlanAttachment{
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_500M",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "alias",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "tempora",
                                                    },
                                                    UsageRate: 3685.84,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "ea",
                                                    },
                                                    UsageRate: 1369,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "vel",
                                                    },
                                                    UsageRate: 8221.18,
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_200M",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "ratione",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "laudantium",
                                                    },
                                                    UsageRate: 1206.57,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "dolor",
                                                    },
                                                    UsageRate: 9807,
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_50M",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "ex",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "excepturi",
                                                    },
                                                    UsageRate: 9729.2,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "nostrum",
                                                    },
                                                    UsageRate: 9608.35,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "quisquam",
                                                    },
                                                    UsageRate: 9065.56,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "ea",
                                                    },
                                                    UsageRate: 7740.48,
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_300M",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "veniam",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "inventore",
                                                    },
                                                    UsageRate: 3018.31,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "ea",
                                                    },
                                                    UsageRate: 7752.2,
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            InterconnectType: "INTERCONNECT_TYPE_UNSPECIFIED",
                            LinkType: "LINK_TYPE_ETHERNET_100G_LR",
                            ProvisionedLinkCount: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "aspernatur",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "eaque",
                                            },
                                            UsageRate: 9528.71,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "libero",
                                            },
                                            UsageRate: 139.48,
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_UNSPECIFIED",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "deleniti",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aliquam",
                                            },
                                            UsageRate: 1469.46,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "accusamus",
                                            },
                                            UsageRate: 795.22,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "non",
                                            },
                                            UsageRate: 896.03,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "dolorum",
                                            },
                                            UsageRate: 6720.48,
                                        },
                                    },
                                },
                            },
                            SourceContinent: "SOURCE_CONTINENT_NORTH_AMERICA",
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "velit",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "autem",
                                            },
                                            UsageRate: 7521.35,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "quas",
                                            },
                                            UsageRate: 8296.03,
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "nulla",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "libero",
                                            },
                                            UsageRate: 965.49,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "tempora",
                                            },
                                            UsageRate: 2561.39,
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: "explicabo",
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: "provident",
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "ipsa",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "magnam",
                                            },
                                            UsageRate: 4879.35,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "eius",
                                            },
                                            UsageRate: 4585.15,
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "esse",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "fuga",
                                            },
                                            UsageRate: 4420.15,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "quidem",
                                            },
                                            UsageRate: 8526.35,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ut",
                                            },
                                            UsageRate: 4334.39,
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: "suscipit",
                            },
                            StorageClass: "assumenda",
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: false,
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "eos",
                                AcceleratorType: "praesentium",
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "quisquam",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ipsa",
                                            },
                                            UsageRate: 6600.4,
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "neque",
                                "quo",
                                "illum",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: "quo",
                                    MemorySizeGb: 6813.59,
                                    VirtualCPUCount: "eius",
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: "eos",
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "ab",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "consequatur",
                                                    },
                                                    UsageRate: 2728.22,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "debitis",
                                                    },
                                                    UsageRate: 3708.53,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "aspernatur",
                                                    },
                                                    UsageRate: 1970.54,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "quo",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "esse",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "aperiam",
                                                    },
                                                    UsageRate: 7151.79,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "quod",
                                                    },
                                                    UsageRate: 4908.19,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "inventore",
                                                    },
                                                    UsageRate: 4694.98,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "totam",
                                                    },
                                                    UsageRate: 8827.1,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_UNSPECIFIED",
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "odio",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "commodi",
                                                    },
                                                    UsageRate: 9594.34,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "dolores",
                                                    },
                                                    UsageRate: 6455.7,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "molestiae",
                                                    },
                                                    UsageRate: 353.62,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "porro",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "eum",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "praesentium",
                                                    },
                                                    UsageRate: 1598.67,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "deleniti",
                                                    },
                                                    UsageRate: 1438.29,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "fuga",
                                                    },
                                                    UsageRate: 6494.63,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_UNSPECIFIED",
                                },
                            },
                            Preemptible: false,
                            Region: "atque",
                        },
                        Name: "explicabo",
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_AUTRALIA",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "nisi",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "sapiente",
                                            },
                                            UsageRate: 1598.7,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "ratione",
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "explicabo",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "occaecati",
                                            },
                                            UsageRate: 5438.06,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "et",
                                            },
                                            UsageRate: 4569.11,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "eveniet",
                                            },
                                            UsageRate: 8820.42,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "veritatis",
                                            },
                                            UsageRate: 4586.04,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "quod",
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: "nam",
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: "vero",
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "quasi",
                                                },
                                                UsageRate: 9040.45,
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "vel",
                                                },
                                                UsageRate: 6900.25,
                                            },
                                        },
                                    },
                                },
                                SourceRegion: "molestiae",
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: "rerum",
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "minima",
                                                },
                                                UsageRate: 7162.44,
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "eligendi",
                                                },
                                                UsageRate: 270.69,
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "culpa",
                                                },
                                                UsageRate: 7313.98,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        AccessToken: "adipisci",
        Alt: "proto",
        BillingAccount: "consequuntur",
        Callback: "consequatur",
        Fields: "minus",
        Key: "quaerat",
        OauthToken: "sapiente",
        PrettyPrint: false,
        QuotaUser: "consectetur",
        UploadType: "esse",
        UploadProtocol: "blanditiis",
    }

    ctx := context.Background()
    res, err := s.BillingAccounts.CloudbillingBillingAccountsEstimateCostScenario(ctx, req, operations.CloudbillingBillingAccountsEstimateCostScenarioSecurity{
        Option1: &operations.CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimateCostScenarioForBillingAccountResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### BillingAccounts

* `CloudbillingBillingAccountsEstimateCostScenario` - Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

### V1beta

* `CloudbillingEstimateCostScenario` - Estimate list prices using a `CostScenario` without a defined `billingAccount`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
