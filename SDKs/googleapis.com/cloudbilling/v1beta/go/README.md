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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EstimateCostScenarioForBillingAccountRequest: &shared.EstimateCostScenarioForBillingAccountRequest{
            CostScenario: &shared.CostScenario{
                Commitments: []shared.Commitment{
                    shared.Commitment{
                        Name: sdk.String("Ellis Mitchell"),
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("illum"),
                                AcceleratorType: sdk.String("vel"),
                            },
                            MachineSeries: sdk.String("error"),
                            MemorySizeGb: sdk.Float64(6458.94),
                            Plan: shared.VMResourceBasedCudPlanEnumTwelveMonth.ToPointer(),
                            Region: sdk.String("iure"),
                            VirtualCPUCount: sdk.String("magnam"),
                        },
                    },
                    shared.Commitment{
                        Name: sdk.String("Larry Windler"),
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("molestiae"),
                                AcceleratorType: sdk.String("minus"),
                            },
                            MachineSeries: sdk.String("placeat"),
                            MemorySizeGb: sdk.Float64(5288.95),
                            Plan: shared.VMResourceBasedCudPlanEnumTwelveMonth.ToPointer(),
                            Region: sdk.String("excepturi"),
                            VirtualCPUCount: sdk.String("nisi"),
                        },
                    },
                    shared.Commitment{
                        Name: sdk.String("Jake Bernier MD"),
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("perferendis"),
                                AcceleratorType: sdk.String("ipsam"),
                            },
                            MachineSeries: sdk.String("repellendus"),
                            MemorySizeGb: sdk.Float64(9571.56),
                            Plan: shared.VMResourceBasedCudPlanEnumThirtySixMonth.ToPointer(),
                            Region: sdk.String("odit"),
                            VirtualCPUCount: sdk.String("at"),
                        },
                    },
                },
                ScenarioConfig: &shared.ScenarioConfig{
                    EstimateDuration: sdk.String("at"),
                },
                Workloads: []shared.Workload{
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: shared.CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationEurope.ToPointer(),
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("quod"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("esse"),
                                            },
                                            UsageRate: sdk.Float64(5204.78),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("porro"),
                                            },
                                            UsageRate: sdk.Float64(6788.8),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dicta"),
                                            },
                                            UsageRate: sdk.Float64(7206.33),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("officia"),
                                            },
                                            UsageRate: sdk.Float64(5820.2),
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: shared.CloudCdnWorkloadCacheFillOriginServiceEnumCacheFillOriginServiceUnspecified.ToPointer(),
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("deleniti"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("optio"),
                                            },
                                            UsageRate: sdk.Float64(5218.48),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("beatae"),
                                            },
                                            UsageRate: sdk.Float64(4146.62),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("molestiae"),
                                            },
                                            UsageRate: sdk.Float64(2645.55),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("qui"),
                                            },
                                            UsageRate: sdk.Float64(7742.34),
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: shared.CacheFillRegionsDestinationRegionEnumCacheFillDestinationRegionSouthAmerica.ToPointer(),
                                SourceRegion: shared.CacheFillRegionsSourceRegionEnumCacheFillSourceRegionEurope.ToPointer(),
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("ipsum"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("aspernatur"),
                                            },
                                            UsageRate: sdk.Float64(187.89),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ad"),
                                            },
                                            UsageRate: sdk.Float64(6176.36),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("sed"),
                                            },
                                            UsageRate: sdk.Float64(6120.96),
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("dolor"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("laboriosam"),
                                            },
                                            UsageRate: sdk.Float64(9437.49),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("saepe"),
                                            },
                                            UsageRate: sdk.Float64(6818.2),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("in"),
                                            },
                                            UsageRate: sdk.Float64(3595.08),
                                        },
                                    },
                                },
                            },
                            InterconnectConnectionLocation: shared.CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnumInterconnectConnectionLocationNorthAmerica.ToPointer(),
                        },
                        CloudInterconnectWorkload: &shared.CloudInterconnectWorkload{
                            InterconnectAttachments: []shared.VlanAttachment{
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps20G.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("quidem"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("ipsa"),
                                                    },
                                                    UsageRate: sdk.Float64(9698.1),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps2G.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("mollitia"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("dolores"),
                                                    },
                                                    UsageRate: sdk.Float64(2103.82),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("corporis"),
                                                    },
                                                    UsageRate: sdk.Float64(1289.26),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("nobis"),
                                                    },
                                                    UsageRate: sdk.Float64(3154.28),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            InterconnectType: shared.CloudInterconnectWorkloadInterconnectTypeEnumInterconnectTypeDedicated.ToPointer(),
                            LinkType: shared.CloudInterconnectWorkloadLinkTypeEnumLinkTypeEthernet10GLr.ToPointer(),
                            ProvisionedLinkCount: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("minima"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("accusantium"),
                                            },
                                            UsageRate: sdk.Float64(4386.01),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("culpa"),
                                            },
                                            UsageRate: sdk.Float64(9883.74),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("sapiente"),
                                            },
                                            UsageRate: sdk.Float64(1020.44),
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: shared.CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentEurope.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("dolorem"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("consequuntur"),
                                            },
                                            UsageRate: sdk.Float64(9953),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("mollitia"),
                                            },
                                            UsageRate: sdk.Float64(5818.5),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("numquam"),
                                            },
                                            UsageRate: sdk.Float64(4143.69),
                                        },
                                    },
                                },
                            },
                            SourceContinent: shared.CloudStorageEgressWorkloadSourceContinentEnumSourceContinentAustralia.ToPointer(),
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("molestiae"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("error"),
                                            },
                                            UsageRate: sdk.Float64(1589.69),
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("quis"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("laborum"),
                                            },
                                            UsageRate: sdk.Float64(6563.3),
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: sdk.String("Christina Satterfield"),
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: sdk.String("Mr. Alberta Schuster"),
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("temporibus"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quasi"),
                                            },
                                            UsageRate: sdk.Float64(9719.45),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("voluptatibus"),
                                            },
                                            UsageRate: sdk.Float64(8781.94),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("nihil"),
                                            },
                                            UsageRate: sdk.Float64(5096.24),
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("voluptatibus"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("omnis"),
                                            },
                                            UsageRate: sdk.Float64(4511.59),
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: sdk.String("Thomas Batz"),
                            },
                            StorageClass: sdk.String("maiores"),
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: sdk.Bool(false),
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("dicta"),
                                AcceleratorType: sdk.String("corporis"),
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("dolore"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dicta"),
                                            },
                                            UsageRate: sdk.Float64(6886.61),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("enim"),
                                            },
                                            UsageRate: sdk.Float64(8804.76),
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "repudiandae",
                                "quae",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: sdk.String("ipsum"),
                                    MemorySizeGb: sdk.Float64(6924.72),
                                    VirtualCPUCount: sdk.String("molestias"),
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: sdk.String("excepturi"),
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("modi"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("rem"),
                                                    },
                                                    UsageRate: sdk.Float64(9167.23),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("quasi"),
                                                    },
                                                    UsageRate: sdk.Float64(9211.58),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("sint"),
                                                    },
                                                    UsageRate: sdk.Float64(831.12),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("itaque"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("incidunt"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("consequatur"),
                                                    },
                                                    UsageRate: sdk.Float64(6674.11),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("quibusdam"),
                                                    },
                                                    UsageRate: sdk.Float64(1317.97),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("distinctio"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("labore"),
                                                    },
                                                    UsageRate: sdk.Float64(2647.3),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("qui"),
                                                    },
                                                    UsageRate: sdk.Float64(3978.21),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("cupiditate"),
                                                    },
                                                    UsageRate: sdk.Float64(5528.22),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("perferendis"),
                                                    },
                                                    UsageRate: sdk.Float64(1649.4),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("assumenda"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("ipsam"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("fugit"),
                                                    },
                                                    UsageRate: sdk.Float64(6778.17),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("tempora"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("tempore"),
                                                    },
                                                    UsageRate: sdk.Float64(2884.76),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("delectus"),
                                                    },
                                                    UsageRate: sdk.Float64(4332.88),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("non"),
                                                    },
                                                    UsageRate: sdk.Float64(7561.07),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("sint"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("aliquid"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("necessitatibus"),
                                                    },
                                                    UsageRate: sdk.Float64(5722.52),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("officia"),
                                                    },
                                                    UsageRate: sdk.Float64(2230.81),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("debitis"),
                                                    },
                                                    UsageRate: sdk.Float64(9527.49),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeRegional.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("in"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("illum"),
                                                    },
                                                    UsageRate: sdk.Float64(9785.71),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("rerum"),
                                                    },
                                                    UsageRate: sdk.Float64(1162.02),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("magnam"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("cumque"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("ea"),
                                                    },
                                                    UsageRate: sdk.Float64(3965.06),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("laborum"),
                                                    },
                                                    UsageRate: sdk.Float64(8811.04),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("non"),
                                                    },
                                                    UsageRate: sdk.Float64(5812.73),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("enim"),
                                                    },
                                                    UsageRate: sdk.Float64(8817.36),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeRegional.ToPointer(),
                                },
                            },
                            Preemptible: sdk.Bool(false),
                            Region: sdk.String("quidem"),
                        },
                        Name: sdk.String("Marco Olson"),
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: shared.PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentSouthAmerica.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("amet"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("nisi"),
                                            },
                                            UsageRate: sdk.Float64(4238.55),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("natus"),
                                            },
                                            UsageRate: sdk.Float64(6063.93),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("molestiae"),
                                            },
                                            UsageRate: sdk.Float64(191.93),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("nihil"),
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("magnam"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("id"),
                                            },
                                            UsageRate: sdk.Float64(2879.91),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("labore"),
                                            },
                                            UsageRate: sdk.Float64(3834.62),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("natus"),
                                            },
                                            UsageRate: sdk.Float64(7491.7),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("eum"),
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: sdk.String("vero"),
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("aspernatur"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("magnam"),
                                                },
                                                UsageRate: sdk.Float64(923.73),
                                            },
                                        },
                                    },
                                },
                                SourceRegion: sdk.String("excepturi"),
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("ullam"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("quos"),
                                                },
                                                UsageRate: sdk.Float64(5743.25),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("accusantium"),
                                                },
                                                UsageRate: sdk.Float64(6532.01),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("reiciendis"),
                                                },
                                                UsageRate: sdk.Float64(6521.03),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: shared.CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationChina.ToPointer(),
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("eum"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("necessitatibus"),
                                            },
                                            UsageRate: sdk.Float64(1412.64),
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: shared.CloudCdnWorkloadCacheFillOriginServiceEnumCacheFillOriginServiceGoogleCloudStorageBucket.ToPointer(),
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("quasi"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("doloribus"),
                                            },
                                            UsageRate: sdk.Float64(8919.24),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("eius"),
                                            },
                                            UsageRate: sdk.Float64(8061.94),
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: shared.CacheFillRegionsDestinationRegionEnumCacheFillDestinationRegionOceania.ToPointer(),
                                SourceRegion: shared.CacheFillRegionsSourceRegionEnumCacheFillSourceRegionOceania.ToPointer(),
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("in"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("architecto"),
                                            },
                                            UsageRate: sdk.Float64(9194.83),
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("ullam"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("nihil"),
                                            },
                                            UsageRate: sdk.Float64(9988.48),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quibusdam"),
                                            },
                                            UsageRate: sdk.Float64(1494.48),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("saepe"),
                                            },
                                            UsageRate: sdk.Float64(8681.26),
                                        },
                                    },
                                },
                            },
                            InterconnectConnectionLocation: shared.CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnumInterconnectConnectionLocationUnspecified.ToPointer(),
                        },
                        CloudInterconnectWorkload: &shared.CloudInterconnectWorkload{
                            InterconnectAttachments: []shared.VlanAttachment{
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps500M.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("natus"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("sunt"),
                                                    },
                                                    UsageRate: sdk.Float64(7790.51),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            InterconnectType: shared.CloudInterconnectWorkloadInterconnectTypeEnumInterconnectTypePartner.ToPointer(),
                            LinkType: shared.CloudInterconnectWorkloadLinkTypeEnumLinkTypeEthernet100GLr.ToPointer(),
                            ProvisionedLinkCount: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("maxime"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("excepturi"),
                                            },
                                            UsageRate: sdk.Float64(1399.72),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ea"),
                                            },
                                            UsageRate: sdk.Float64(332.22),
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: shared.CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentUnspecified.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("maiores"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ipsam"),
                                            },
                                            UsageRate: sdk.Float64(4535.43),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("autem"),
                                            },
                                            UsageRate: sdk.Float64(7220.56),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("eaque"),
                                            },
                                            UsageRate: sdk.Float64(8663.83),
                                        },
                                    },
                                },
                            },
                            SourceContinent: shared.CloudStorageEgressWorkloadSourceContinentEnumSourceContinentAustralia.ToPointer(),
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("voluptatibus"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("fugiat"),
                                            },
                                            UsageRate: sdk.Float64(2307.42),
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("aut"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("corporis"),
                                            },
                                            UsageRate: sdk.Float64(9441.24),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("libero"),
                                            },
                                            UsageRate: sdk.Float64(7499.99),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dolores"),
                                            },
                                            UsageRate: sdk.Float64(3394.04),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("totam"),
                                            },
                                            UsageRate: sdk.Float64(4895.49),
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: sdk.String("Beatrice Dooley Sr."),
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: sdk.String("Darryl Fadel"),
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("hic"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("omnis"),
                                            },
                                            UsageRate: sdk.Float64(7044.15),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("perspiciatis"),
                                            },
                                            UsageRate: sdk.Float64(318.38),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("porro"),
                                            },
                                            UsageRate: sdk.Float64(1646.94),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("blanditiis"),
                                            },
                                            UsageRate: sdk.Float64(6214.79),
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("eaque"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("rerum"),
                                            },
                                            UsageRate: sdk.Float64(2378.93),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("asperiores"),
                                            },
                                            UsageRate: sdk.Float64(9342.14),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("modi"),
                                            },
                                            UsageRate: sdk.Float64(6139.66),
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: sdk.String("Casey Stracke"),
                            },
                            StorageClass: sdk.String("libero"),
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: sdk.Bool(false),
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("delectus"),
                                AcceleratorType: sdk.String("quaerat"),
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("quos"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dolorem"),
                                            },
                                            UsageRate: sdk.Float64(2098.43),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dolor"),
                                            },
                                            UsageRate: sdk.Float64(1861.93),
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "hic",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: sdk.String("excepturi"),
                                    MemorySizeGb: sdk.Float64(7395.51),
                                    VirtualCPUCount: sdk.String("voluptate"),
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: sdk.String("dignissimos"),
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("amet"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("numquam"),
                                                    },
                                                    UsageRate: sdk.Float64(852.95),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("ipsa"),
                                                    },
                                                    UsageRate: sdk.Float64(564.18),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("iure"),
                                                    },
                                                    UsageRate: sdk.Float64(4878.38),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("quaerat"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("accusamus"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("voluptatibus"),
                                                    },
                                                    UsageRate: sdk.Float64(3777.52),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("natus"),
                                                    },
                                                    UsageRate: sdk.Float64(1796.03),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("atque"),
                                                    },
                                                    UsageRate: sdk.Float64(246.78),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeRegional.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("ab"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("dolorum"),
                                                    },
                                                    UsageRate: sdk.Float64(4785.96),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("voluptate"),
                                                    },
                                                    UsageRate: sdk.Float64(6770.82),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("deleniti"),
                                                    },
                                                    UsageRate: sdk.Float64(6070.45),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("necessitatibus"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("distinctio"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("nihil"),
                                                    },
                                                    UsageRate: sdk.Float64(2168.97),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("voluptate"),
                                                    },
                                                    UsageRate: sdk.Float64(6630.78),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("saepe"),
                                                    },
                                                    UsageRate: sdk.Float64(2633.22),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("aspernatur"),
                                                    },
                                                    UsageRate: sdk.Float64(206.51),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeUnspecified.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("optio"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("ad"),
                                                    },
                                                    UsageRate: sdk.Float64(9044.25),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("suscipit"),
                                                    },
                                                    UsageRate: sdk.Float64(6457.85),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("provident"),
                                                    },
                                                    UsageRate: sdk.Float64(3246.83),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("repellendus"),
                                                    },
                                                    UsageRate: sdk.Float64(5197.11),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("similique"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("alias"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("quaerat"),
                                                    },
                                                    UsageRate: sdk.Float64(2735.42),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("vel"),
                                                    },
                                                    UsageRate: sdk.Float64(7980.47),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("officiis"),
                                                    },
                                                    UsageRate: sdk.Float64(1856.36),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("dolorum"),
                                                    },
                                                    UsageRate: sdk.Float64(9527.92),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("harum"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("ipsum"),
                                                    },
                                                    UsageRate: sdk.Float64(7887.4),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("tenetur"),
                                                    },
                                                    UsageRate: sdk.Float64(2294.42),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("tempore"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("accusamus"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("enim"),
                                                    },
                                                    UsageRate: sdk.Float64(2133.12),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("sapiente"),
                                                    },
                                                    UsageRate: sdk.Float64(5182.01),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                            },
                            Preemptible: sdk.Bool(false),
                            Region: sdk.String("sit"),
                        },
                        Name: sdk.String("Luis Cremin"),
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: shared.PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentAutralia.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("deserunt"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ipsum"),
                                            },
                                            UsageRate: sdk.Float64(2776.28),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("qui"),
                                            },
                                            UsageRate: sdk.Float64(5867.84),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("maxime"),
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("pariatur"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dicta"),
                                            },
                                            UsageRate: sdk.Float64(6748.48),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("totam"),
                                            },
                                            UsageRate: sdk.Float64(2768.94),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("aspernatur"),
                                            },
                                            UsageRate: sdk.Float64(1749.09),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("distinctio"),
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: sdk.String("facilis"),
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("aliquid"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("molestias"),
                                                },
                                                UsageRate: sdk.Float64(8404.29),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("qui"),
                                                },
                                                UsageRate: sdk.Float64(2048.65),
                                            },
                                        },
                                    },
                                },
                                SourceRegion: sdk.String("fugit"),
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("magni"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("sunt"),
                                                },
                                                UsageRate: sdk.Float64(3556.13),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("nam"),
                                                },
                                                UsageRate: sdk.Float64(9404.32),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: shared.CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationUnspecified.ToPointer(),
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("cumque"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("nobis"),
                                            },
                                            UsageRate: sdk.Float64(925.96),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("saepe"),
                                            },
                                            UsageRate: sdk.Float64(2174.5),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("veritatis"),
                                            },
                                            UsageRate: sdk.Float64(7492.55),
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: shared.CloudCdnWorkloadCacheFillOriginServiceEnumCacheFillOriginServiceGoogleCloudStorageBucket.ToPointer(),
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("tempore"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("aperiam"),
                                            },
                                            UsageRate: sdk.Float64(9619.37),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dolorem"),
                                            },
                                            UsageRate: sdk.Float64(2921.47),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("labore"),
                                            },
                                            UsageRate: sdk.Float64(2408.29),
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: shared.CacheFillRegionsDestinationRegionEnumCacheFillDestinationRegionSouthAmerica.ToPointer(),
                                SourceRegion: shared.CacheFillRegionsSourceRegionEnumCacheFillSourceRegionUnspecified.ToPointer(),
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("quae"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quas"),
                                            },
                                            UsageRate: sdk.Float64(9295.3),
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("consequatur"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("repellendus"),
                                            },
                                            UsageRate: sdk.Float64(7851.53),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("doloribus"),
                                            },
                                            UsageRate: sdk.Float64(2817.3),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("facilis"),
                                            },
                                            UsageRate: sdk.Float64(5864.1),
                                        },
                                    },
                                },
                            },
                            InterconnectConnectionLocation: shared.CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnumInterconnectConnectionLocationAsia.ToPointer(),
                        },
                        CloudInterconnectWorkload: &shared.CloudInterconnectWorkload{
                            InterconnectAttachments: []shared.VlanAttachment{
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps500M.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("odio"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("voluptatibus"),
                                                    },
                                                    UsageRate: sdk.Float64(7875.42),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("vero"),
                                                    },
                                                    UsageRate: sdk.Float64(6064.76),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("quis"),
                                                    },
                                                    UsageRate: sdk.Float64(2184.03),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            InterconnectType: shared.CloudInterconnectWorkloadInterconnectTypeEnumInterconnectTypePartner.ToPointer(),
                            LinkType: shared.CloudInterconnectWorkloadLinkTypeEnumLinkTypeEthernet10GLr.ToPointer(),
                            ProvisionedLinkCount: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("consectetur"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("tenetur"),
                                            },
                                            UsageRate: sdk.Float64(4922.68),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("hic"),
                                            },
                                            UsageRate: sdk.Float64(7155.61),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quod"),
                                            },
                                            UsageRate: sdk.Float64(4861.6),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("similique"),
                                            },
                                            UsageRate: sdk.Float64(7085.48),
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: shared.CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentSouthAmerica.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("ducimus"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quibusdam"),
                                            },
                                            UsageRate: sdk.Float64(8489.44),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("sequi"),
                                            },
                                            UsageRate: sdk.Float64(6178.77),
                                        },
                                    },
                                },
                            },
                            SourceContinent: shared.CloudStorageEgressWorkloadSourceContinentEnumSourceContinentNorthAmerica.ToPointer(),
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("aut"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("exercitationem"),
                                            },
                                            UsageRate: sdk.Float64(8623.1),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("fugit"),
                                            },
                                            UsageRate: sdk.Float64(7804.27),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("maiores"),
                                            },
                                            UsageRate: sdk.Float64(9850.33),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("iusto"),
                                            },
                                            UsageRate: sdk.Float64(7535.7),
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("ducimus"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("officia"),
                                            },
                                            UsageRate: sdk.Float64(2694.79),
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: sdk.String("Terri Collins"),
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: sdk.String("Paula Jacobs I"),
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("maiores"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ex"),
                                            },
                                            UsageRate: sdk.Float64(8621.92),
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("excepturi"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("nostrum"),
                                            },
                                            UsageRate: sdk.Float64(9608.35),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quisquam"),
                                            },
                                            UsageRate: sdk.Float64(9065.56),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ea"),
                                            },
                                            UsageRate: sdk.Float64(7740.48),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("corporis"),
                                            },
                                            UsageRate: sdk.Float64(3331.45),
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: sdk.String("Stephanie Gutkowski"),
                            },
                            StorageClass: sdk.String("consectetur"),
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: sdk.Bool(false),
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("recusandae"),
                                AcceleratorType: sdk.String("aspernatur"),
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("minima"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("a"),
                                            },
                                            UsageRate: sdk.Float64(7255.95),
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "aut",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: sdk.String("deleniti"),
                                    MemorySizeGb: sdk.Float64(7705.81),
                                    VirtualCPUCount: sdk.String("aliquam"),
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: sdk.String("fugit"),
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("inventore"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("et"),
                                                    },
                                                    UsageRate: sdk.Float64(6774.12),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("laborum"),
                                                    },
                                                    UsageRate: sdk.Float64(8104.24),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("velit"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("eum"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("nobis"),
                                                    },
                                                    UsageRate: sdk.Float64(5573.69),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("assumenda"),
                                                    },
                                                    UsageRate: sdk.Float64(8605.52),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("libero"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("tempora"),
                                                    },
                                                    UsageRate: sdk.Float64(2561.39),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("explicabo"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("provident"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("molestiae"),
                                                    },
                                                    UsageRate: sdk.Float64(3015.98),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("eius"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("esse"),
                                                    },
                                                    UsageRate: sdk.Float64(5245.93),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("fuga"),
                                                    },
                                                    UsageRate: sdk.Float64(4420.15),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("quidem"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("fugiat"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("eum"),
                                                    },
                                                    UsageRate: sdk.Float64(3799.27),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("assumenda"),
                                                    },
                                                    UsageRate: sdk.Float64(1811.51),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("quisquam"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("ipsa"),
                                                    },
                                                    UsageRate: sdk.Float64(6600.4),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("quidem"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("neque"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("illum"),
                                                    },
                                                    UsageRate: sdk.Float64(7774.08),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("fuga"),
                                                    },
                                                    UsageRate: sdk.Float64(2594.22),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("eos"),
                                                    },
                                                    UsageRate: sdk.Float64(3738.13),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("ab"),
                                                    },
                                                    UsageRate: sdk.Float64(5876),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeUnspecified.ToPointer(),
                                },
                            },
                            Preemptible: sdk.Bool(false),
                            Region: sdk.String("tempora"),
                        },
                        Name: sdk.String("Roberto Collier"),
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: shared.PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentCentralAmerica.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("recusandae"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("distinctio"),
                                            },
                                            UsageRate: sdk.Float64(7997.96),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("dignissimos"),
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("inventore"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("totam"),
                                            },
                                            UsageRate: sdk.Float64(8827.1),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("aliquam"),
                                            },
                                            UsageRate: sdk.Float64(4884.1),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("occaecati"),
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: sdk.String("commodi"),
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("sapiente"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("deserunt"),
                                                },
                                                UsageRate: sdk.Float64(4752.89),
                                            },
                                        },
                                    },
                                },
                                SourceRegion: sdk.String("accusantium"),
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("porro"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("quas"),
                                                },
                                                UsageRate: sdk.Float64(5100.17),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("consequuntur"),
                                                },
                                                UsageRate: sdk.Float64(5361.78),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: shared.CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationAsiaPacific.ToPointer(),
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("fuga"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("incidunt"),
                                            },
                                            UsageRate: sdk.Float64(5392.24),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("explicabo"),
                                            },
                                            UsageRate: sdk.Float64(3256.85),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("nisi"),
                                            },
                                            UsageRate: sdk.Float64(1470.14),
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: shared.CloudCdnWorkloadCacheFillOriginServiceEnumCacheFillOriginServiceBackendService.ToPointer(),
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("consequuntur"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("explicabo"),
                                            },
                                            UsageRate: sdk.Float64(9039.84),
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: shared.CacheFillRegionsDestinationRegionEnumCacheFillDestinationRegionOceania.ToPointer(),
                                SourceRegion: shared.CacheFillRegionsSourceRegionEnumCacheFillSourceRegionNorthAmerica.ToPointer(),
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("et"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("eveniet"),
                                            },
                                            UsageRate: sdk.Float64(8820.42),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("veritatis"),
                                            },
                                            UsageRate: sdk.Float64(4586.04),
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("quod"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("vero"),
                                            },
                                            UsageRate: sdk.Float64(3990.25),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quasi"),
                                            },
                                            UsageRate: sdk.Float64(9040.45),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("vel"),
                                            },
                                            UsageRate: sdk.Float64(6900.25),
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
                                            Unit: sdk.String("minima"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("eligendi"),
                                                    },
                                                    UsageRate: sdk.Float64(270.69),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("culpa"),
                                                    },
                                                    UsageRate: sdk.Float64(7313.98),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("adipisci"),
                                                    },
                                                    UsageRate: sdk.Float64(7669.64),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps100M.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("consequatur"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("quaerat"),
                                                    },
                                                    UsageRate: sdk.Float64(9591.67),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("consectetur"),
                                                    },
                                                    UsageRate: sdk.Float64(4581.39),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("blanditiis"),
                                                    },
                                                    UsageRate: sdk.Float64(5909.84),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("a"),
                                                    },
                                                    UsageRate: sdk.Float64(8577.23),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps1G.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("esse"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("a"),
                                                    },
                                                    UsageRate: sdk.Float64(6216.79),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            InterconnectType: shared.CloudInterconnectWorkloadInterconnectTypeEnumInterconnectTypeDedicated.ToPointer(),
                            LinkType: shared.CloudInterconnectWorkloadLinkTypeEnumLinkTypeEthernet100GLr.ToPointer(),
                            ProvisionedLinkCount: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("possimus"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("eveniet"),
                                            },
                                            UsageRate: sdk.Float64(9924.3),
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: shared.CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentNorthAmerica.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("veritatis"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quasi"),
                                            },
                                            UsageRate: sdk.Float64(6288.99),
                                        },
                                    },
                                },
                            },
                            SourceContinent: shared.CloudStorageEgressWorkloadSourceContinentEnumSourceContinentEurope.ToPointer(),
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("aliquid"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quae"),
                                            },
                                            UsageRate: sdk.Float64(9367.47),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("vel"),
                                            },
                                            UsageRate: sdk.Float64(4473.78),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("eius"),
                                            },
                                            UsageRate: sdk.Float64(7276.97),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("illum"),
                                            },
                                            UsageRate: sdk.Float64(7422.38),
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("accusantium"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("sapiente"),
                                            },
                                            UsageRate: sdk.Float64(1197.71),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ullam"),
                                            },
                                            UsageRate: sdk.Float64(4438.79),
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: sdk.String("Alma Armstrong"),
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: sdk.String("Marc Leuschke"),
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("architecto"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("tenetur"),
                                            },
                                            UsageRate: sdk.Float64(984.78),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("at"),
                                            },
                                            UsageRate: sdk.Float64(920.27),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("voluptate"),
                                            },
                                            UsageRate: sdk.Float64(559.65),
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("minima"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("consectetur"),
                                            },
                                            UsageRate: sdk.Float64(2371.73),
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: sdk.String("Lionel Bartoletti IV"),
                            },
                            StorageClass: sdk.String("eum"),
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: sdk.Bool(false),
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("mollitia"),
                                AcceleratorType: sdk.String("ab"),
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("corrupti"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("voluptatem"),
                                            },
                                            UsageRate: sdk.Float64(2211.61),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("occaecati"),
                                            },
                                            UsageRate: sdk.Float64(2531.91),
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "explicabo",
                                "voluptas",
                                "aut",
                                "dignissimos",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: sdk.String("dicta"),
                                    MemorySizeGb: sdk.Float64(9816.4),
                                    VirtualCPUCount: sdk.String("natus"),
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: sdk.String("velit"),
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("voluptas"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("aperiam"),
                                                    },
                                                    UsageRate: sdk.Float64(4090.54),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("quaerat"),
                                                    },
                                                    UsageRate: sdk.Float64(1629.54),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("repellendus"),
                                                    },
                                                    UsageRate: sdk.Float64(6387.62),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("maxime"),
                                                    },
                                                    UsageRate: sdk.Float64(4903.05),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("officia"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("asperiores"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("quae"),
                                                    },
                                                    UsageRate: sdk.Float64(3127.53),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("porro"),
                                                    },
                                                    UsageRate: sdk.Float64(8018.36),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeUnspecified.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("ab"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("fuga"),
                                                    },
                                                    UsageRate: sdk.Float64(6625.05),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("suscipit"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("velit"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("est"),
                                                    },
                                                    UsageRate: sdk.Float64(9268.8),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("totam"),
                                                    },
                                                    UsageRate: sdk.Float64(8539.4),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("vel"),
                                                    },
                                                    UsageRate: sdk.Float64(4976.78),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("vel"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("possimus"),
                                                    },
                                                    UsageRate: sdk.Float64(7065.75),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("cum"),
                                                    },
                                                    UsageRate: sdk.Float64(4148.57),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("in"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("corporis"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("assumenda"),
                                                    },
                                                    UsageRate: sdk.Float64(3631.61),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("recusandae"),
                                                    },
                                                    UsageRate: sdk.Float64(3975.33),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("aperiam"),
                                                    },
                                                    UsageRate: sdk.Float64(7386.83),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("consectetur"),
                                                    },
                                                    UsageRate: sdk.Float64(4490.83),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("earum"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("numquam"),
                                                    },
                                                    UsageRate: sdk.Float64(9854.92),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("suscipit"),
                                                    },
                                                    UsageRate: sdk.Float64(9689.72),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("quidem"),
                                                    },
                                                    UsageRate: sdk.Float64(9049.49),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("necessitatibus"),
                                                    },
                                                    UsageRate: sdk.Float64(2965.56),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("sunt"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("asperiores"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("non"),
                                                    },
                                                    UsageRate: sdk.Float64(2282.63),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeUnspecified.ToPointer(),
                                },
                            },
                            Preemptible: sdk.Bool(false),
                            Region: sdk.String("dignissimos"),
                        },
                        Name: sdk.String("Doyle Feest"),
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: shared.PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentCentralAmerica.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("ipsa"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("libero"),
                                            },
                                            UsageRate: sdk.Float64(1138.16),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("accusamus"),
                                            },
                                            UsageRate: sdk.Float64(6311.26),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("tempora"),
                                            },
                                            UsageRate: sdk.Float64(1328.15),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("voluptas"),
                                            },
                                            UsageRate: sdk.Float64(3742.44),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("voluptas"),
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("minima"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dolorum"),
                                            },
                                            UsageRate: sdk.Float64(2378.07),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("minus"),
                                            },
                                            UsageRate: sdk.Float64(1718.53),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("blanditiis"),
                                            },
                                            UsageRate: sdk.Float64(4492.92),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("dolore"),
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: sdk.String("aliquam"),
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("officiis"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("ullam"),
                                                },
                                                UsageRate: sdk.Float64(2377.42),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("cum"),
                                                },
                                                UsageRate: sdk.Float64(5023.89),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("quas"),
                                                },
                                                UsageRate: sdk.Float64(9425.84),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("nesciunt"),
                                                },
                                                UsageRate: sdk.Float64(6339.98),
                                            },
                                        },
                                    },
                                },
                                SourceRegion: sdk.String("corrupti"),
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("pariatur"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("hic"),
                                                },
                                                UsageRate: sdk.Float64(3487.83),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("nobis"),
                                                },
                                                UsageRate: sdk.Float64(246.19),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("rerum"),
                                                },
                                                UsageRate: sdk.Float64(1488.29),
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
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BillingAccount: "asperiores",
        Callback: sdk.String("facilis"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("expedita"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("laborum"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [BillingAccounts](docs/billingaccounts/README.md)

* [CloudbillingBillingAccountsEstimateCostScenario](docs/billingaccounts/README.md#cloudbillingbillingaccountsestimatecostscenario) - Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

### [V1beta](docs/v1beta/README.md)

* [CloudbillingEstimateCostScenario](docs/v1beta/README.md#cloudbillingestimatecostscenario) - Estimate list prices using a `CostScenario` without a defined `billingAccount`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
