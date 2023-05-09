# BillingAccounts

### Available Operations

* [CloudbillingBillingAccountsEstimateCostScenario](#cloudbillingbillingaccountsestimatecostscenario) - Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

## CloudbillingBillingAccountsEstimateCostScenario

Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BillingAccounts.CloudbillingBillingAccountsEstimateCostScenario(ctx, operations.CloudbillingBillingAccountsEstimateCostScenarioRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EstimateCostScenarioForBillingAccountRequest: &shared.EstimateCostScenarioForBillingAccountRequest{
            CostScenario: &shared.CostScenario{
                Commitments: []shared.Commitment{
                    shared.Commitment{
                        Name: sdk.String("Melody Cole"),
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("architecto"),
                                AcceleratorType: sdk.String("suscipit"),
                            },
                            MachineSeries: sdk.String("sapiente"),
                            MemorySizeGb: sdk.Float64(8953.86),
                            Plan: shared.VMResourceBasedCudPlanEnumCommitmentPlanUnspecified.ToPointer(),
                            Region: sdk.String("reiciendis"),
                            VirtualCPUCount: sdk.String("perferendis"),
                        },
                    },
                    shared.Commitment{
                        Name: sdk.String("Emilio Goodwin"),
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("eius"),
                                AcceleratorType: sdk.String("necessitatibus"),
                            },
                            MachineSeries: sdk.String("ipsum"),
                            MemorySizeGb: sdk.Float64(4067.33),
                            Plan: shared.VMResourceBasedCudPlanEnumTwelveMonth.ToPointer(),
                            Region: sdk.String("quos"),
                            VirtualCPUCount: sdk.String("voluptatibus"),
                        },
                    },
                },
                ScenarioConfig: &shared.ScenarioConfig{
                    EstimateDuration: sdk.String("tempora"),
                },
                Workloads: []shared.Workload{
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: shared.CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationEurope.ToPointer(),
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("reiciendis"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("sit"),
                                            },
                                            UsageRate: sdk.Float64(2484.13),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("officiis"),
                                            },
                                            UsageRate: sdk.Float64(5058.66),
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: shared.CloudCdnWorkloadCacheFillOriginServiceEnumCacheFillOriginServiceBackendService.ToPointer(),
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("quaerat"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ipsam"),
                                            },
                                            UsageRate: sdk.Float64(8948.64),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("rem"),
                                            },
                                            UsageRate: sdk.Float64(265.22),
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: shared.CacheFillRegionsDestinationRegionEnumCacheFillDestinationRegionChina.ToPointer(),
                                SourceRegion: shared.CacheFillRegionsSourceRegionEnumCacheFillSourceRegionNorthAmerica.ToPointer(),
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("veniam"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("recusandae"),
                                            },
                                            UsageRate: sdk.Float64(9671.22),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("nulla"),
                                            },
                                            UsageRate: sdk.Float64(1685.76),
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("aperiam"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("numquam"),
                                            },
                                            UsageRate: sdk.Float64(3299.35),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("in"),
                                            },
                                            UsageRate: sdk.Float64(8892.34),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("beatae"),
                                            },
                                            UsageRate: sdk.Float64(5124.52),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("exercitationem"),
                                            },
                                            UsageRate: sdk.Float64(5106.29),
                                        },
                                    },
                                },
                            },
                            InterconnectConnectionLocation: shared.CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnumInterconnectConnectionLocationSouthAmerica.ToPointer(),
                        },
                        CloudInterconnectWorkload: &shared.CloudInterconnectWorkload{
                            InterconnectAttachments: []shared.VlanAttachment{
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps2G.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("voluptatum"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("hic"),
                                                    },
                                                    UsageRate: sdk.Float64(7105.29),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("debitis"),
                                                    },
                                                    UsageRate: sdk.Float64(2049.23),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("dolorum"),
                                                    },
                                                    UsageRate: sdk.Float64(3416.98),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps2G.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("dolorum"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("accusamus"),
                                                    },
                                                    UsageRate: sdk.Float64(2726.83),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("atque"),
                                                    },
                                                    UsageRate: sdk.Float64(1482.68),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("ut"),
                                                    },
                                                    UsageRate: sdk.Float64(8563.03),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            InterconnectType: shared.CloudInterconnectWorkloadInterconnectTypeEnumInterconnectTypeUnspecified.ToPointer(),
                            LinkType: shared.CloudInterconnectWorkloadLinkTypeEnumLinkTypeEthernet10GLr.ToPointer(),
                            ProvisionedLinkCount: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("expedita"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("consequatur"),
                                            },
                                            UsageRate: sdk.Float64(4602.2),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ipsam"),
                                            },
                                            UsageRate: sdk.Float64(245.27),
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: shared.CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentEurope.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("quas"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("corporis"),
                                            },
                                            UsageRate: sdk.Float64(894.94),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("blanditiis"),
                                            },
                                            UsageRate: sdk.Float64(4059.42),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("sed"),
                                            },
                                            UsageRate: sdk.Float64(243.13),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("vel"),
                                            },
                                            UsageRate: sdk.Float64(3426.11),
                                        },
                                    },
                                },
                            },
                            SourceContinent: shared.CloudStorageEgressWorkloadSourceContinentEnumSourceContinentSouthAmerica.ToPointer(),
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("error"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("incidunt"),
                                            },
                                            UsageRate: sdk.Float64(9688.65),
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("dolorem"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dicta"),
                                            },
                                            UsageRate: sdk.Float64(994.16),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("occaecati"),
                                            },
                                            UsageRate: sdk.Float64(2897.76),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quidem"),
                                            },
                                            UsageRate: sdk.Float64(5390.74),
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: sdk.String("Marco White I"),
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: sdk.String("Karl Miller"),
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("repellendus"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("voluptates"),
                                            },
                                            UsageRate: sdk.Float64(168.71),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("est"),
                                            },
                                            UsageRate: sdk.Float64(6964.83),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("reprehenderit"),
                                            },
                                            UsageRate: sdk.Float64(8136.79),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("fuga"),
                                            },
                                            UsageRate: sdk.Float64(5098.07),
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("mollitia"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("voluptatem"),
                                            },
                                            UsageRate: sdk.Float64(7908.4),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("repudiandae"),
                                            },
                                            UsageRate: sdk.Float64(972.43),
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: sdk.String("Mitchell Zboncak"),
                            },
                            StorageClass: sdk.String("quidem"),
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: sdk.Bool(false),
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("maxime"),
                                AcceleratorType: sdk.String("et"),
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("esse"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("assumenda"),
                                            },
                                            UsageRate: sdk.Float64(4103.01),
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "error",
                                "officiis",
                                "officiis",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: sdk.String("accusamus"),
                                    MemorySizeGb: sdk.Float64(6188.26),
                                    VirtualCPUCount: sdk.String("minima"),
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: sdk.String("aspernatur"),
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("maiores"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("at"),
                                                    },
                                                    UsageRate: sdk.Float64(6216.93),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("blanditiis"),
                                                    },
                                                    UsageRate: sdk.Float64(3793.56),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("repudiandae"),
                                                    },
                                                    UsageRate: sdk.Float64(5421.29),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("atque"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("sunt"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("dolorum"),
                                                    },
                                                    UsageRate: sdk.Float64(8298.98),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("labore"),
                                                    },
                                                    UsageRate: sdk.Float64(9682.87),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("doloremque"),
                                                    },
                                                    UsageRate: sdk.Float64(9197.83),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("dicta"),
                                                    },
                                                    UsageRate: sdk.Float64(360.33),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeUnspecified.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("dolores"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("laboriosam"),
                                                    },
                                                    UsageRate: sdk.Float64(2465.35),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("a"),
                                                    },
                                                    UsageRate: sdk.Float64(5627.83),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("magnam"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("saepe"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("occaecati"),
                                                    },
                                                    UsageRate: sdk.Float64(8863.05),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                            },
                            Preemptible: sdk.Bool(false),
                            Region: sdk.String("in"),
                        },
                        Name: sdk.String("Tricia McClure"),
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: shared.PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentWesternEurope.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("quis"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("error"),
                                            },
                                            UsageRate: sdk.Float64(764.86),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("corporis"),
                                            },
                                            UsageRate: sdk.Float64(6964.63),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("eveniet"),
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("non"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("doloremque"),
                                            },
                                            UsageRate: sdk.Float64(4341.56),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ipsa"),
                                            },
                                            UsageRate: sdk.Float64(5176.12),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quae"),
                                            },
                                            UsageRate: sdk.Float64(4746.68),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("eveniet"),
                                            },
                                            UsageRate: sdk.Float64(1843.62),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("cum"),
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: sdk.String("iure"),
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("necessitatibus"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("laborum"),
                                                },
                                                UsageRate: sdk.Float64(7152.08),
                                            },
                                        },
                                    },
                                },
                                SourceRegion: sdk.String("voluptatum"),
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("rem"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("ad"),
                                                },
                                                UsageRate: sdk.Float64(9979.63),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("alias"),
                                                },
                                                UsageRate: sdk.Float64(3621.89),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: shared.CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationNorthAmerica.ToPointer(),
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("nihil"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("voluptas"),
                                            },
                                            UsageRate: sdk.Float64(51.89),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("maiores"),
                                            },
                                            UsageRate: sdk.Float64(9702.22),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dolores"),
                                            },
                                            UsageRate: sdk.Float64(6638.66),
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: shared.CloudCdnWorkloadCacheFillOriginServiceEnumCacheFillOriginServiceUnspecified.ToPointer(),
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("dolore"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("nesciunt"),
                                            },
                                            UsageRate: sdk.Float64(632.07),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("recusandae"),
                                            },
                                            UsageRate: sdk.Float64(6072.49),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quaerat"),
                                            },
                                            UsageRate: sdk.Float64(4776.46),
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: shared.CacheFillRegionsDestinationRegionEnumCacheFillDestinationRegionNorthAmerica.ToPointer(),
                                SourceRegion: shared.CacheFillRegionsSourceRegionEnumCacheFillRegionAsiaPacific.ToPointer(),
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("culpa"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("debitis"),
                                            },
                                            UsageRate: sdk.Float64(5145.13),
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("eum"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("recusandae"),
                                            },
                                            UsageRate: sdk.Float64(4565.2),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("provident"),
                                            },
                                            UsageRate: sdk.Float64(3374.77),
                                        },
                                    },
                                },
                            },
                            InterconnectConnectionLocation: shared.CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnumInterconnectConnectionLocationEurope.ToPointer(),
                        },
                        CloudInterconnectWorkload: &shared.CloudInterconnectWorkload{
                            InterconnectAttachments: []shared.VlanAttachment{
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps1G.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("aspernatur"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("quasi"),
                                                    },
                                                    UsageRate: sdk.Float64(6570.2),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("nostrum"),
                                                    },
                                                    UsageRate: sdk.Float64(6523.09),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps1G.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("possimus"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("ex"),
                                                    },
                                                    UsageRate: sdk.Float64(3972.57),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("accusantium"),
                                                    },
                                                    UsageRate: sdk.Float64(9992.78),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("doloribus"),
                                                    },
                                                    UsageRate: sdk.Float64(3518.93),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps400M.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("nam"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("officia"),
                                                    },
                                                    UsageRate: sdk.Float64(6720.41),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("placeat"),
                                                    },
                                                    UsageRate: sdk.Float64(2666.97),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("voluptatibus"),
                                                    },
                                                    UsageRate: sdk.Float64(5640.64),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("officiis"),
                                                    },
                                                    UsageRate: sdk.Float64(9569.33),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps5G.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("vitae"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("tempora"),
                                                    },
                                                    UsageRate: sdk.Float64(3354.98),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("inventore"),
                                                    },
                                                    UsageRate: sdk.Float64(1476.85),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("cumque"),
                                                    },
                                                    UsageRate: sdk.Float64(626.36),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            InterconnectType: shared.CloudInterconnectWorkloadInterconnectTypeEnumInterconnectTypeUnspecified.ToPointer(),
                            LinkType: shared.CloudInterconnectWorkloadLinkTypeEnumLinkTypeUnspecified.ToPointer(),
                            ProvisionedLinkCount: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("aspernatur"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("eius"),
                                            },
                                            UsageRate: sdk.Float64(5219.96),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("at"),
                                            },
                                            UsageRate: sdk.Float64(7730.84),
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: shared.CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentAsiaPacific.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("sapiente"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dicta"),
                                            },
                                            UsageRate: sdk.Float64(3251.18),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("beatae"),
                                            },
                                            UsageRate: sdk.Float64(5834.04),
                                        },
                                    },
                                },
                            },
                            SourceContinent: shared.CloudStorageEgressWorkloadSourceContinentEnumSourceContinentEurope.ToPointer(),
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("earum"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("hic"),
                                            },
                                            UsageRate: sdk.Float64(8481.51),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("eaque"),
                                            },
                                            UsageRate: sdk.Float64(9358.33),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("perspiciatis"),
                                            },
                                            UsageRate: sdk.Float64(9834.27),
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("debitis"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("porro"),
                                            },
                                            UsageRate: sdk.Float64(3803.35),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dolorem"),
                                            },
                                            UsageRate: sdk.Float64(1478.08),
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: sdk.String("Grant Dickens"),
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: sdk.String("Ms. William Boyle"),
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("occaecati"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("adipisci"),
                                            },
                                            UsageRate: sdk.Float64(965.62),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("magni"),
                                            },
                                            UsageRate: sdk.Float64(9849.34),
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("nulla"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ipsa"),
                                            },
                                            UsageRate: sdk.Float64(2711.13),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("nihil"),
                                            },
                                            UsageRate: sdk.Float64(4731.9),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dicta"),
                                            },
                                            UsageRate: sdk.Float64(4797.54),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("esse"),
                                            },
                                            UsageRate: sdk.Float64(5083.9),
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: sdk.String("Dr. Van Kassulke Sr."),
                            },
                            StorageClass: sdk.String("odio"),
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: sdk.Bool(false),
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("tempora"),
                                AcceleratorType: sdk.String("esse"),
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("ex"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("aliquid"),
                                            },
                                            UsageRate: sdk.Float64(588.7),
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "sunt",
                                "nostrum",
                                "fugiat",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: sdk.String("expedita"),
                                    MemorySizeGb: sdk.Float64(3996.67),
                                    VirtualCPUCount: sdk.String("officia"),
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: sdk.String("suscipit"),
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("perferendis"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("voluptas"),
                                                    },
                                                    UsageRate: sdk.Float64(6145.28),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("id"),
                                                    },
                                                    UsageRate: sdk.Float64(700.42),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("error"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("possimus"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("mollitia"),
                                                    },
                                                    UsageRate: sdk.Float64(6717.94),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("libero"),
                                                    },
                                                    UsageRate: sdk.Float64(3240.83),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("deleniti"),
                                                    },
                                                    UsageRate: sdk.Float64(3162.2),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("vitae"),
                                                    },
                                                    UsageRate: sdk.Float64(8333.16),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("quo"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("ut"),
                                                    },
                                                    UsageRate: sdk.Float64(3210.43),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("expedita"),
                                                    },
                                                    UsageRate: sdk.Float64(299.5),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("molestias"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("cum"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("beatae"),
                                                    },
                                                    UsageRate: sdk.Float64(5308.6),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("omnis"),
                                                    },
                                                    UsageRate: sdk.Float64(852.33),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeRegional.ToPointer(),
                                },
                            },
                            Preemptible: sdk.Bool(false),
                            Region: sdk.String("est"),
                        },
                        Name: sdk.String("Donald Williamson MD"),
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: shared.PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentMiddleEast.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("debitis"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("alias"),
                                            },
                                            UsageRate: sdk.Float64(5349.17),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("earum"),
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("ex"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("rem"),
                                            },
                                            UsageRate: sdk.Float64(7963.2),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("nemo"),
                                            },
                                            UsageRate: sdk.Float64(9920.74),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ratione"),
                                            },
                                            UsageRate: sdk.Float64(3552.25),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("perferendis"),
                                            },
                                            UsageRate: sdk.Float64(8483.41),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("totam"),
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: sdk.String("impedit"),
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("quibusdam"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("ipsam"),
                                                },
                                                UsageRate: sdk.Float64(6334.15),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("dolor"),
                                                },
                                                UsageRate: sdk.Float64(3073.76),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("inventore"),
                                                },
                                                UsageRate: sdk.Float64(5372.79),
                                            },
                                        },
                                    },
                                },
                                SourceRegion: sdk.String("veritatis"),
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("tempora"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("consequatur"),
                                                },
                                                UsageRate: sdk.Float64(1000.14),
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
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BillingAccount: "fugit",
        Callback: sdk.String("ab"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.CloudbillingBillingAccountsEstimateCostScenarioSecurity{
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
