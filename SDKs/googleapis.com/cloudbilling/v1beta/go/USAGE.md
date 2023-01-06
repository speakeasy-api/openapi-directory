<!-- Start SDK Example Usage -->
```go
package main

import (
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
            BillingAccount: "rem",
        },
        QueryParams: operations.CloudbillingBillingAccountsEstimateCostScenarioQueryParams{
            DollarXgafv: "1",
            AccessToken: "et",
            Alt: "media",
            Callback: "ea",
            Fields: "facilis",
            Key: "eligendi",
            OauthToken: "mollitia",
            PrettyPrint: false,
            QuotaUser: "nostrum",
            UploadType: "eaque",
            UploadProtocol: "delectus",
        },
        Request: &shared.EstimateCostScenarioForBillingAccountRequest{
            CostScenario: &shared.CostScenario{
                Commitments: []shared.Commitment{
                    shared.Commitment{
                        Name: "sequi",
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "laborum",
                                AcceleratorType: "dolorem",
                            },
                            MachineSeries: "repudiandae",
                            MemorySizeGb: 41.099998,
                            Plan: "THIRTY_SIX_MONTH",
                            Region: "alias",
                            VirtualCPUCount: "omnis",
                        },
                    },
                    shared.Commitment{
                        Name: "voluptatem",
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "qui",
                                AcceleratorType: "non",
                            },
                            MachineSeries: "quos",
                            MemorySizeGb: 9.200000,
                            Plan: "COMMITMENT_PLAN_UNSPECIFIED",
                            Region: "iure",
                            VirtualCPUCount: "perferendis",
                        },
                    },
                },
                ScenarioConfig: &shared.ScenarioConfig{
                    EstimateDuration: "modi",
                },
                Workloads: []shared.Workload{
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: "CACHE_EGRESS_DESTINATION_EUROPE",
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "et",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "officiis",
                                            },
                                            UsageRate: 5.200000,
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: "CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED",
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "voluptatem",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "et",
                                            },
                                            UsageRate: 70.199997,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "consequatur",
                                            },
                                            UsageRate: 67.199997,
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: "CACHE_FILL_DESTINATION_REGION_CHINA",
                                SourceRegion: "CACHE_FILL_SOURCE_REGION_UNSPECIFIED",
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "aut",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "voluptatem",
                                            },
                                            UsageRate: 11.200000,
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "quisquam",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ratione",
                                            },
                                            UsageRate: 24.100000,
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
                                            Unit: "eius",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "itaque",
                                                    },
                                                    UsageRate: 21.100000,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "earum",
                                                    },
                                                    UsageRate: 55.200001,
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_50M",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "et",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "quas",
                                                    },
                                                    UsageRate: 29.200001,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "eos",
                                                    },
                                                    UsageRate: 54.200001,
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
                                    Unit: "dolores",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "itaque",
                                            },
                                            UsageRate: 6.100000,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "repudiandae",
                                            },
                                            UsageRate: 91.199997,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "harum",
                                            },
                                            UsageRate: 86.099998,
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_AUTRALIA",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "quasi",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "molestiae",
                                            },
                                            UsageRate: 2.100000,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "laborum",
                                            },
                                            UsageRate: 25.100000,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "dolorem",
                                            },
                                            UsageRate: 42.099998,
                                        },
                                    },
                                },
                            },
                            SourceContinent: "SOURCE_CONTINENT_EUROPE",
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "reprehenderit",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "quos",
                                            },
                                            UsageRate: 14.200000,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "sint",
                                            },
                                            UsageRate: 87.099998,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "molestias",
                                            },
                                            UsageRate: 78.199997,
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "repudiandae",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aut",
                                            },
                                            UsageRate: 27.100000,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "amet",
                                            },
                                            UsageRate: 70.099998,
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: "nostrum",
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: "sit",
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "quae",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "nostrum",
                                            },
                                            UsageRate: 60.099998,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aut",
                                            },
                                            UsageRate: 39.200001,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aliquam",
                                            },
                                            UsageRate: 74.099998,
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "possimus",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "explicabo",
                                            },
                                            UsageRate: 50.099998,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "mollitia",
                                            },
                                            UsageRate: 84.199997,
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: "et",
                            },
                            StorageClass: "omnis",
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: false,
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "accusantium",
                                AcceleratorType: "distinctio",
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "laboriosam",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "cumque",
                                            },
                                            UsageRate: 13.200000,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "explicabo",
                                            },
                                            UsageRate: 65.199997,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "id",
                                            },
                                            UsageRate: 6.200000,
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "quaerat",
                                "vel",
                                "tempora",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: "iusto",
                                    MemorySizeGb: 57.200001,
                                    VirtualCPUCount: "quia",
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: "iste",
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "accusantium",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "et",
                                                    },
                                                    UsageRate: 25.200001,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "eaque",
                                                    },
                                                    UsageRate: 99.099998,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "consectetur",
                                                    },
                                                    UsageRate: 6.100000,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "fugiat",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "sunt",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "asperiores",
                                                    },
                                                    UsageRate: 25.200001,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "facilis",
                                                    },
                                                    UsageRate: 57.200001,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "est",
                                                    },
                                                    UsageRate: 71.099998,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_UNSPECIFIED",
                                },
                            },
                            Preemptible: true,
                            Region: "eos",
                        },
                        Name: "porro",
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_EMEA",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "sint",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "laudantium",
                                            },
                                            UsageRate: 14.100000,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "officia",
                                            },
                                            UsageRate: 87.199997,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "exercitationem",
                                            },
                                            UsageRate: 41.200001,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "non",
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "tenetur",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ipsum",
                                            },
                                            UsageRate: 2.100000,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "porro",
                                            },
                                            UsageRate: 76.199997,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "aliquid",
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.BillingAccounts.CloudbillingBillingAccountsEstimateCostScenario(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimateCostScenarioForBillingAccountResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->