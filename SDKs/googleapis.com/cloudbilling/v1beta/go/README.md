# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            BillingAccount: "sit",
        },
        QueryParams: operations.CloudbillingBillingAccountsEstimateCostScenarioQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.EstimateCostScenarioForBillingAccountRequest{
            CostScenario: &shared.CostScenario{
                Commitments: []shared.Commitment{
                    shared.Commitment{
                        Name: "debitis",
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "voluptatum",
                                AcceleratorType: "et",
                            },
                            MachineSeries: "ut",
                            MemorySizeGb: 50.099998,
                            Plan: "COMMITMENT_PLAN_UNSPECIFIED",
                            Region: "iste",
                            VirtualCPUCount: "vitae",
                        },
                    },
                    shared.Commitment{
                        Name: "totam",
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "dolores",
                                AcceleratorType: "illum",
                            },
                            MachineSeries: "debitis",
                            MemorySizeGb: 52.099998,
                            Plan: "TWELVE_MONTH",
                            Region: "id",
                            VirtualCPUCount: "aspernatur",
                        },
                    },
                    shared.Commitment{
                        Name: "accusantium",
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "totam",
                                AcceleratorType: "commodi",
                            },
                            MachineSeries: "quis",
                            MemorySizeGb: 93.099998,
                            Plan: "TWELVE_MONTH",
                            Region: "non",
                            VirtualCPUCount: "voluptas",
                        },
                    },
                },
                ScenarioConfig: &shared.ScenarioConfig{
                    EstimateDuration: "omnis",
                },
                Workloads: []shared.Workload{
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: "CACHE_EGRESS_DESTINATION_NORTH_AMERICA",
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "sed",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "autem",
                                            },
                                            UsageRate: 68.099998,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "odio",
                                            },
                                            UsageRate: 77.099998,
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: "CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET",
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "ipsum",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "modi",
                                            },
                                            UsageRate: 0.200000,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ut",
                                            },
                                            UsageRate: 56.099998,
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: "CACHE_FILL_DESTINATION_REGION_CHINA",
                                SourceRegion: "CACHE_FILL_SOURCE_REGION_SOUTH_AMERICA",
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "maiores",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "dolor",
                                            },
                                            UsageRate: 23.200001,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "in",
                                            },
                                            UsageRate: 69.199997,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ipsum",
                                            },
                                            UsageRate: 66.099998,
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "placeat",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "rerum",
                                            },
                                            UsageRate: 89.099998,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "quam",
                                            },
                                            UsageRate: 23.100000,
                                        },
                                    },
                                },
                            },
                            InterconnectConnectionLocation: "INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED",
                        },
                        CloudInterconnectWorkload: &shared.CloudInterconnectWorkload{
                            InterconnectAttachments: []shared.VlanAttachment{
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_10G",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "autem",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "ut",
                                                    },
                                                    UsageRate: 26.100000,
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_1G",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "ullam",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "accusantium",
                                                    },
                                                    UsageRate: 68.099998,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "quam",
                                                    },
                                                    UsageRate: 29.100000,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "soluta",
                                                    },
                                                    UsageRate: 41.200001,
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: "BANDWIDTH_BPS_1G",
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "et",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "qui",
                                                    },
                                                    UsageRate: 59.200001,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "omnis",
                                                    },
                                                    UsageRate: 74.099998,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "dolor",
                                                    },
                                                    UsageRate: 26.100000,
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            InterconnectType: "INTERCONNECT_TYPE_UNSPECIFIED",
                            LinkType: "LINK_TYPE_UNSPECIFIED",
                            ProvisionedLinkCount: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "nostrum",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "laboriosam",
                                            },
                                            UsageRate: 80.199997,
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_EUROPE",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "aut",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "consequuntur",
                                            },
                                            UsageRate: 47.200001,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "ipsa",
                                            },
                                            UsageRate: 37.099998,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "perferendis",
                                            },
                                            UsageRate: 26.200001,
                                        },
                                    },
                                },
                            },
                            SourceContinent: "SOURCE_CONTINENT_SOUTH_AMERICA",
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "explicabo",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "maxime",
                                            },
                                            UsageRate: 15.200000,
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "et",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "reiciendis",
                                            },
                                            UsageRate: 9.200000,
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: "minima",
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: "necessitatibus",
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "est",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "eum",
                                            },
                                            UsageRate: 94.199997,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "impedit",
                                            },
                                            UsageRate: 84.099998,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "vel",
                                            },
                                            UsageRate: 87.099998,
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "nihil",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "deserunt",
                                            },
                                            UsageRate: 59.099998,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "sit",
                                            },
                                            UsageRate: 34.099998,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "vel",
                                            },
                                            UsageRate: 91.099998,
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: "qui",
                            },
                            StorageClass: "nisi",
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: true,
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "adipisci",
                                AcceleratorType: "porro",
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "rerum",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "accusamus",
                                            },
                                            UsageRate: 2.100000,
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "ut",
                                "laborum",
                                "fugit",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: "quis",
                                    MemorySizeGb: 49.200001,
                                    VirtualCPUCount: "aperiam",
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: "consequuntur",
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "mollitia",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "delectus",
                                                    },
                                                    UsageRate: 51.099998,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "animi",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "ut",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "fuga",
                                                    },
                                                    UsageRate: 92.199997,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_REGIONAL",
                                },
                            },
                            Preemptible: true,
                            Region: "non",
                        },
                        Name: "cupiditate",
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: "DESTINATION_CONTINENT_MIDDLE_EAST",
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "molestiae",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "quasi",
                                            },
                                            UsageRate: 68.099998,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "qui",
                                            },
                                            UsageRate: 2.100000,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "modi",
                                            },
                                            UsageRate: 18.200001,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "quia",
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "et",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "occaecati",
                                            },
                                            UsageRate: 93.099998,
                                        },
                                    },
                                },
                            },
                            SourceRegion: "quia",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### billingAccounts

* `CloudbillingBillingAccountsEstimateCostScenario` - Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

### v1beta

* `CloudbillingEstimateCostScenario` - Estimate list prices using a `CostScenario` without a defined `billingAccount`.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
