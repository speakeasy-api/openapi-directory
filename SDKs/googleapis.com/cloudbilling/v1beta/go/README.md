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
        Security: operations.CloudbillingBillingAccountsEstimateCostScenarioSecurity{
            Option1: &operations.CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.CloudbillingBillingAccountsEstimateCostScenarioPathParams{
            BillingAccount: "corrupti",
        },
        QueryParams: operations.CloudbillingBillingAccountsEstimateCostScenarioQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.EstimateCostScenarioForBillingAccountRequest{
            CostScenario: &shared.CostScenario{
                Commitments: []shared.Commitment{
                    shared.Commitment{
                        Name: "iure",
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "magnam",
                                AcceleratorType: "debitis",
                            },
                            MachineSeries: "ipsa",
                            MemorySizeGb: 9636.63,
                            Plan: "COMMITMENT_PLAN_UNSPECIFIED",
                            Region: "suscipit",
                            VirtualCPUCount: "molestiae",
                        },
                    },
                    shared.Commitment{
                        Name: "minus",
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "placeat",
                                AcceleratorType: "voluptatum",
                            },
                            MachineSeries: "iusto",
                            MemorySizeGb: 5680.45,
                            Plan: "TWELVE_MONTH",
                            Region: "recusandae",
                            VirtualCPUCount: "temporibus",
                        },
                    },
                },
                ScenarioConfig: &shared.ScenarioConfig{
                    EstimateDuration: "ab",
                },
                Workloads: []shared.Workload{
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: "CACHE_EGRESS_DESTINATION_UNSPECIFIED",
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "deserunt",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ipsam",
                                            },
                                            UsageRate: 8326.2,
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: "CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE",
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "quo",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "at",
                                            },
                                            UsageRate: 8700.88,
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: "CACHE_FILL_DESTINATION_REGION_OTHERS",
                                SourceRegion: "CACHE_FILL_SOURCE_REGION_EUROPE",
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "quod",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "esse",
                                            },
                                            UsageRate: 5204.78,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "porro",
                                            },
                                            UsageRate: 6788.8,
                                        },
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
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "fugit",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "hic",
                                            },
                                            UsageRate: 7586.16,
                                        },
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
                                    },
                                },
                            },
                            InterconnectConnectionLocation: "INTERCONNECT_CONNECTION_LOCATION_ASIA",
                        },
                        CloudInterconnectWorkload: &shared.CloudInterconnectWorkload{
                            InterconnectAttachments: []shared.VlanAttachment{
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_10G",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "cum",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "ipsum",
                                                    },
                                                    UsageRate: 5684.34,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "aspernatur",
                                                    },
                                                    UsageRate: 187.89,
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
                                    Unit: "sed",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "dolor",
                                            },
                                            UsageRate: 6169.34,
                                        },
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
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_AUTRALIA",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "corporis",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "iure",
                                            },
                                            UsageRate: 9023.49,
                                        },
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
                                    },
                                },
                            },
                            SourceContinent: "SOURCE_CONTINENT_NORTH_AMERICA",
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "mollitia",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "dolores",
                                            },
                                            UsageRate: 2103.82,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "corporis",
                                            },
                                            UsageRate: 1289.26,
                                        },
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
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.BillingAccounts.CloudbillingBillingAccountsEstimateCostScenario(ctx, req)
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
## SDK Available Operations


### BillingAccounts

* `CloudbillingBillingAccountsEstimateCostScenario` - Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

### V1beta

* `CloudbillingEstimateCostScenario` - Estimate list prices using a `CostScenario` without a defined `billingAccount`.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
