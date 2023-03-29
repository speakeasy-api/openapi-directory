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
            BillingAccount: "unde",
        },
        QueryParams: operations.CloudbillingBillingAccountsEstimateCostScenarioQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.EstimateCostScenarioForBillingAccountRequest{
            CostScenario: &shared.CostScenario{
                Commitments: []shared.Commitment{
                    shared.Commitment{
                        Name: "iusto",
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "ullam",
                                AcceleratorType: "saepe",
                            },
                            MachineSeries: "inventore",
                            MemorySizeGb: 9636.63,
                            Plan: "COMMITMENT_PLAN_UNSPECIFIED",
                            Region: "eum",
                            VirtualCPUCount: "voluptatum",
                        },
                    },
                    shared.Commitment{
                        Name: "autem",
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "vel",
                                AcceleratorType: "non",
                            },
                            MachineSeries: "deleniti",
                            MemorySizeGb: 5680.45,
                            Plan: "TWELVE_MONTH",
                            Region: "molestiae",
                            VirtualCPUCount: "quo",
                        },
                    },
                },
                ScenarioConfig: &shared.ScenarioConfig{
                    EstimateDuration: "quasi",
                },
                Workloads: []shared.Workload{
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: "CACHE_EGRESS_DESTINATION_UNSPECIFIED",
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "est",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "consequatur",
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
                                    Unit: "omnis",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "accusamus",
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
                                    Unit: "quibusdam",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "praesentium",
                                            },
                                            UsageRate: 5204.78,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "dolor",
                                            },
                                            UsageRate: 6788.8,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "sed",
                                            },
                                            UsageRate: 7206.33,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "rerum",
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
                                    Unit: "qui",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "rerum",
                                            },
                                            UsageRate: 7586.16,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "occaecati",
                                            },
                                            UsageRate: 1059.07,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "esse",
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
                                            Unit: "id",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "numquam",
                                                    },
                                                    UsageRate: 5684.34,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "dolores",
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
                                    Unit: "voluptatem",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "modi",
                                            },
                                            UsageRate: 6169.34,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "iure",
                                            },
                                            UsageRate: 9437.49,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ut",
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
                                    Unit: "ea",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "iusto",
                                            },
                                            UsageRate: 9023.49,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "optio",
                                            },
                                            UsageRate: 992.8,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "inventore",
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
                                    Unit: "et",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ipsum",
                                            },
                                            UsageRate: 2103.82,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ea",
                                            },
                                            UsageRate: 1289.26,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "placeat",
                                            },
                                            UsageRate: 3154.28,
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "est",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "quia",
                                            },
                                            UsageRate: 5701.97,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "eaque",
                                            },
                                            UsageRate: 4386.01,
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: "harum",
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: "doloribus",
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "a",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "et",
                                            },
                                            UsageRate: 2088.76,
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "quidem",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "asperiores",
                                            },
                                            UsageRate: 6531.08,
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: "culpa",
                            },
                            StorageClass: "aliquam",
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: false,
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "esse",
                                AcceleratorType: "totam",
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "voluptatum",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "fuga",
                                            },
                                            UsageRate: 1589.69,
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "aut",
                                "cum",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: "expedita",
                                    MemorySizeGb: 3172.02,
                                    VirtualCPUCount: "eos",
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: "omnis",
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "hic",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "distinctio",
                                                    },
                                                    UsageRate: 8209.94,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "perferendis",
                                                    },
                                                    UsageRate: 971.01,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "fuga",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "quo",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "explicabo",
                                                    },
                                                    UsageRate: 9719.45,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "reiciendis",
                                                    },
                                                    UsageRate: 8781.94,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "totam",
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
                            Region: "illo",
                        },
                        Name: "id",
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_CENTRAL_AMERICA",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "quod",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "eaque",
                                            },
                                            UsageRate: 4417.11,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "veniam",
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "reiciendis",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ea",
                                            },
                                            UsageRate: 2961.4,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "deleniti",
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: "sed",
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: "est",
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "aut",
                                                },
                                                UsageRate: 4142.63,
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "sint",
                                                },
                                                UsageRate: 641.47,
                                            },
                                        },
                                    },
                                },
                                SourceRegion: "numquam",
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: "eligendi",
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "similique",
                                                },
                                                UsageRate: 8651.03,
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "ut",
                                                },
                                                UsageRate: 5089.69,
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "cupiditate",
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
                                    Unit: "et",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "vitae",
                                            },
                                            UsageRate: 9292.97,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "minima",
                                            },
                                            UsageRate: 3185.69,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aut",
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
                                    Unit: "magni",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "porro",
                                            },
                                            UsageRate: 8413.86,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "nostrum",
                                            },
                                            UsageRate: 2647.3,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "sit",
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
                                    Unit: "voluptatem",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "eum",
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
                                    Unit: "consequatur",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "cum",
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
                                            Unit: "quis",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "et",
                                                    },
                                                    UsageRate: 2487.53,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "possimus",
                                                    },
                                                    UsageRate: 5761.57,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "qui",
                                                    },
                                                    UsageRate: 5920.42,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "eveniet",
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
                                            Unit: "modi",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "tenetur",
                                                    },
                                                    UsageRate: 6800.56,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "ducimus",
                                                    },
                                                    UsageRate: 4491.98,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "nulla",
                                                    },
                                                    UsageRate: 9785.71,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "cumque",
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
                                            Unit: "voluptas",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "velit",
                                                    },
                                                    UsageRate: 3965.06,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "cum",
                                                    },
                                                    UsageRate: 8811.04,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "magnam",
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
                                    Unit: "officia",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "distinctio",
                                            },
                                            UsageRate: 5013.24,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "provident",
                                            },
                                            UsageRate: 9560.84,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "incidunt",
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
                                    Unit: "nihil",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "id",
                                            },
                                            UsageRate: 4748.67,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "sit",
                                            },
                                            UsageRate: 4701.32,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "corporis",
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
                                    Unit: "quis",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "eum",
                                            },
                                            UsageRate: 6180.16,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "placeat",
                                            },
                                            UsageRate: 4287.69,
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "debitis",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aut",
                                            },
                                            UsageRate: 2982.82,
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: "explicabo",
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: "similique",
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "ex",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "omnis",
                                            },
                                            UsageRate: 5743.25,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aperiam",
                                            },
                                            UsageRate: 6532.01,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ut",
                                            },
                                            UsageRate: 6521.03,
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "voluptatem",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "modi",
                                            },
                                            UsageRate: 8965.47,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "qui",
                                            },
                                            UsageRate: 3675.62,
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: "aspernatur",
                            },
                            StorageClass: "iusto",
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: false,
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "maiores",
                                AcceleratorType: "saepe",
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "quaerat",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "sed",
                                            },
                                            UsageRate: 7038.89,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ducimus",
                                            },
                                            UsageRate: 1002.26,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aspernatur",
                                            },
                                            UsageRate: 9194.83,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aliquid",
                                            },
                                            UsageRate: 7142.42,
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "repellat",
                                "voluptas",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: "voluptatem",
                                    MemorySizeGb: 9046.48,
                                    VirtualCPUCount: "accusamus",
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: "eaque",
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "molestias",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "dolorem",
                                                    },
                                                    UsageRate: 1238.2,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "omnis",
                                                    },
                                                    UsageRate: 8480.09,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "et",
                                                    },
                                                    UsageRate: 8073.19,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "velit",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "similique",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "voluptate",
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
                            Region: "voluptatibus",
                        },
                        Name: "optio",
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_AUTRALIA",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "qui",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "quisquam",
                                            },
                                            UsageRate: 505.88,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "et",
                                            },
                                            UsageRate: 3654.96,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "aut",
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "sit",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "incidunt",
                                            },
                                            UsageRate: 117.14,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "voluptas",
                                            },
                                            UsageRate: 3599.78,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "rerum",
                                            },
                                            UsageRate: 7299.91,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "placeat",
                                            },
                                            UsageRate: 1716.29,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "laboriosam",
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: "occaecati",
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: "corrupti",
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "laboriosam",
                                                },
                                                UsageRate: 1999.96,
                                            },
                                        },
                                    },
                                },
                                SourceRegion: "dolor",
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: "sit",
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: "autem",
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