# V1beta

### Available Operations

* [CloudbillingEstimateCostScenario](#cloudbillingestimatecostscenario) - Estimate list prices using a `CostScenario` without a defined `billingAccount`.

## CloudbillingEstimateCostScenario

Estimate list prices using a `CostScenario` without a defined `billingAccount`.

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
    res, err := s.V1beta.CloudbillingEstimateCostScenario(ctx, operations.CloudbillingEstimateCostScenarioRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EstimateCostScenarioWithListPriceRequest: &shared.EstimateCostScenarioWithListPriceRequest{
            CostScenario: &shared.CostScenario{
                Commitments: []shared.Commitment{
                    shared.Commitment{
                        Name: sdk.String("Edmund Torp"),
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("sed"),
                                AcceleratorType: sdk.String("veniam"),
                            },
                            MachineSeries: sdk.String("nesciunt"),
                            MemorySizeGb: sdk.Float64(7129.27),
                            Plan: shared.VMResourceBasedCudPlanEnumTwelveMonth.ToPointer(),
                            Region: sdk.String("vel"),
                            VirtualCPUCount: sdk.String("voluptatum"),
                        },
                    },
                    shared.Commitment{
                        Name: sdk.String("Annette Bernier"),
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("nobis"),
                                AcceleratorType: sdk.String("laboriosam"),
                            },
                            MachineSeries: sdk.String("recusandae"),
                            MemorySizeGb: sdk.Float64(1603.93),
                            Plan: shared.VMResourceBasedCudPlanEnumCommitmentPlanUnspecified.ToPointer(),
                            Region: sdk.String("exercitationem"),
                            VirtualCPUCount: sdk.String("necessitatibus"),
                        },
                    },
                    shared.Commitment{
                        Name: sdk.String("Sue Swaniawski"),
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("harum"),
                                AcceleratorType: sdk.String("sequi"),
                            },
                            MachineSeries: sdk.String("doloribus"),
                            MemorySizeGb: sdk.Float64(9180.92),
                            Plan: shared.VMResourceBasedCudPlanEnumThirtySixMonth.ToPointer(),
                            Region: sdk.String("occaecati"),
                            VirtualCPUCount: sdk.String("nemo"),
                        },
                    },
                },
                ScenarioConfig: &shared.ScenarioConfig{
                    EstimateDuration: sdk.String("voluptate"),
                },
                Workloads: []shared.Workload{
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: shared.CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationOceania.ToPointer(),
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("voluptas"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("nemo"),
                                            },
                                            UsageRate: sdk.Float64(5510.79),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("eius"),
                                            },
                                            UsageRate: sdk.Float64(1319.03),
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: shared.CloudCdnWorkloadCacheFillOriginServiceEnumCacheFillOriginServiceGoogleCloudStorageBucket.ToPointer(),
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("nesciunt"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("laudantium"),
                                            },
                                            UsageRate: sdk.Float64(2773.4),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quasi"),
                                            },
                                            UsageRate: sdk.Float64(5243.8),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("fugiat"),
                                            },
                                            UsageRate: sdk.Float64(1173.8),
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: shared.CacheFillRegionsDestinationRegionEnumCacheFillDestinationRegionNorthAmerica.ToPointer(),
                                SourceRegion: shared.CacheFillRegionsSourceRegionEnumCacheFillSourceRegionUnspecified.ToPointer(),
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("consectetur"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("cupiditate"),
                                            },
                                            UsageRate: sdk.Float64(9707.32),
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("soluta"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("omnis"),
                                            },
                                            UsageRate: sdk.Float64(1785.8),
                                        },
                                    },
                                },
                            },
                            InterconnectConnectionLocation: shared.CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnumInterconnectConnectionLocationNorthAmerica.ToPointer(),
                        },
                        CloudInterconnectWorkload: &shared.CloudInterconnectWorkload{
                            InterconnectAttachments: []shared.VlanAttachment{
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps100M.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("inventore"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("accusamus"),
                                                    },
                                                    UsageRate: sdk.Float64(9768.02),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("distinctio"),
                                                    },
                                                    UsageRate: sdk.Float64(6085.93),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("delectus"),
                                                    },
                                                    UsageRate: sdk.Float64(3283.79),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps500M.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("maxime"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("temporibus"),
                                                    },
                                                    UsageRate: sdk.Float64(5495.01),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("commodi"),
                                                    },
                                                    UsageRate: sdk.Float64(9308.19),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps400M.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("totam"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("modi"),
                                                    },
                                                    UsageRate: sdk.Float64(7221.84),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("vero"),
                                                    },
                                                    UsageRate: sdk.Float64(329.01),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("ipsam"),
                                                    },
                                                    UsageRate: sdk.Float64(4259.46),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("alias"),
                                                    },
                                                    UsageRate: sdk.Float64(938.94),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            InterconnectType: shared.CloudInterconnectWorkloadInterconnectTypeEnumInterconnectTypeUnspecified.ToPointer(),
                            LinkType: shared.CloudInterconnectWorkloadLinkTypeEnumLinkTypeEthernet100GLr.ToPointer(),
                            ProvisionedLinkCount: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("enim"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("nulla"),
                                            },
                                            UsageRate: sdk.Float64(6436.78),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("esse"),
                                            },
                                            UsageRate: sdk.Float64(3644.63),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("reprehenderit"),
                                            },
                                            UsageRate: sdk.Float64(6677.15),
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: shared.CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentAutralia.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("sint"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("impedit"),
                                            },
                                            UsageRate: sdk.Float64(9450.27),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("necessitatibus"),
                                            },
                                            UsageRate: sdk.Float64(9918.91),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ex"),
                                            },
                                            UsageRate: sdk.Float64(3767.41),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("debitis"),
                                            },
                                            UsageRate: sdk.Float64(9661.48),
                                        },
                                    },
                                },
                            },
                            SourceContinent: shared.CloudStorageEgressWorkloadSourceContinentEnumSourceContinentUnspecified.ToPointer(),
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("minus"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("laborum"),
                                            },
                                            UsageRate: sdk.Float64(2310.7),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("velit"),
                                            },
                                            UsageRate: sdk.Float64(5388.69),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ipsum"),
                                            },
                                            UsageRate: sdk.Float64(7730.35),
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("magni"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("repudiandae"),
                                            },
                                            UsageRate: sdk.Float64(7214.3),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dolore"),
                                            },
                                            UsageRate: sdk.Float64(4828.92),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("voluptate"),
                                            },
                                            UsageRate: sdk.Float64(1940.23),
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: sdk.String("Gladys Satterfield"),
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: sdk.String("Christina Wolf"),
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("quibusdam"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("facere"),
                                            },
                                            UsageRate: sdk.Float64(7268.78),
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("architecto"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quia"),
                                            },
                                            UsageRate: sdk.Float64(7820.9),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("aliquam"),
                                            },
                                            UsageRate: sdk.Float64(2470.45),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("illo"),
                                            },
                                            UsageRate: sdk.Float64(365.61),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("vel"),
                                            },
                                            UsageRate: sdk.Float64(4069.22),
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: sdk.String("Leigh Mante"),
                            },
                            StorageClass: sdk.String("ut"),
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: sdk.Bool(false),
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("perspiciatis"),
                                AcceleratorType: sdk.String("earum"),
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("dicta"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("voluptatibus"),
                                            },
                                            UsageRate: sdk.Float64(6109.87),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("itaque"),
                                            },
                                            UsageRate: sdk.Float64(26.77),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("nisi"),
                                            },
                                            UsageRate: sdk.Float64(9315.05),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("velit"),
                                            },
                                            UsageRate: sdk.Float64(6738.38),
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "dolor",
                                "iusto",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: sdk.String("sit"),
                                    MemorySizeGb: sdk.Float64(399.92),
                                    VirtualCPUCount: sdk.String("consequatur"),
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: sdk.String("officia"),
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("ea"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("voluptas"),
                                                    },
                                                    UsageRate: sdk.Float64(7051.48),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("placeat"),
                                                    },
                                                    UsageRate: sdk.Float64(5960.65),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("expedita"),
                                                    },
                                                    UsageRate: sdk.Float64(5372.36),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("a"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("voluptate"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("unde"),
                                                    },
                                                    UsageRate: sdk.Float64(8975.43),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("animi"),
                                                    },
                                                    UsageRate: sdk.Float64(7699.67),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("corporis"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("error"),
                                                    },
                                                    UsageRate: sdk.Float64(4568.85),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("labore"),
                                                    },
                                                    UsageRate: sdk.Float64(850.66),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("vero"),
                                                    },
                                                    UsageRate: sdk.Float64(2331.73),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("vitae"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("inventore"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("ad"),
                                                    },
                                                    UsageRate: sdk.Float64(1830.33),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("ex"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("soluta"),
                                                    },
                                                    UsageRate: sdk.Float64(7262.27),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("rem"),
                                                    },
                                                    UsageRate: sdk.Float64(6780.6),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("odio"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("fugit"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("magni"),
                                                    },
                                                    UsageRate: sdk.Float64(4254.02),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeUnspecified.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("quae"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("neque"),
                                                    },
                                                    UsageRate: sdk.Float64(3483.57),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("itaque"),
                                                    },
                                                    UsageRate: sdk.Float64(882.48),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("ipsum"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("unde"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("distinctio"),
                                                    },
                                                    UsageRate: sdk.Float64(8028.94),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("quia"),
                                                    },
                                                    UsageRate: sdk.Float64(1591.46),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("nostrum"),
                                                    },
                                                    UsageRate: sdk.Float64(6057.12),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("libero"),
                                                    },
                                                    UsageRate: sdk.Float64(1156.61),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                            },
                            Preemptible: sdk.Bool(false),
                            Region: sdk.String("libero"),
                        },
                        Name: sdk.String("Oliver Luettgen IV"),
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: shared.PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentUnspecified.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("voluptates"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("aperiam"),
                                            },
                                            UsageRate: sdk.Float64(5171.37),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("dolore"),
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("eligendi"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("voluptatem"),
                                            },
                                            UsageRate: sdk.Float64(4181.09),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("esse"),
                                            },
                                            UsageRate: sdk.Float64(1729.51),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("assumenda"),
                                            },
                                            UsageRate: sdk.Float64(1072.1),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("est"),
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: sdk.String("facere"),
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("corrupti"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("provident"),
                                                },
                                                UsageRate: sdk.Float64(8822.84),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("necessitatibus"),
                                                },
                                                UsageRate: sdk.Float64(7332.89),
                                            },
                                        },
                                    },
                                },
                                SourceRegion: sdk.String("sint"),
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("ea"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("ipsam"),
                                                },
                                                UsageRate: sdk.Float64(7029.52),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("laudantium"),
                                                },
                                                UsageRate: sdk.Float64(3572.07),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    shared.Workload{
                        CloudCdnEgressWorkload: &shared.CloudCdnEgressWorkload{
                            CacheEgressDestination: shared.CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationOtherDestinations.ToPointer(),
                            CacheEgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("voluptatibus"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("at"),
                                            },
                                            UsageRate: sdk.Float64(51.52),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quia"),
                                            },
                                            UsageRate: sdk.Float64(6941.58),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("fuga"),
                                            },
                                            UsageRate: sdk.Float64(9195.08),
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: shared.CloudCdnWorkloadCacheFillOriginServiceEnumCacheFillOriginServiceUnspecified.ToPointer(),
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("expedita"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("eos"),
                                            },
                                            UsageRate: sdk.Float64(8448.54),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("odio"),
                                            },
                                            UsageRate: sdk.Float64(5101.28),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("odit"),
                                            },
                                            UsageRate: sdk.Float64(1276.88),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("corporis"),
                                            },
                                            UsageRate: sdk.Float64(6214.73),
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: shared.CacheFillRegionsDestinationRegionEnumCacheFillDestinationRegionOthers.ToPointer(),
                                SourceRegion: shared.CacheFillRegionsSourceRegionEnumCacheFillRegionAsiaPacific.ToPointer(),
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("recusandae"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ut"),
                                            },
                                            UsageRate: sdk.Float64(6937.46),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quis"),
                                            },
                                            UsageRate: sdk.Float64(1062.55),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("unde"),
                                            },
                                            UsageRate: sdk.Float64(4769.46),
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("delectus"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("fugit"),
                                            },
                                            UsageRate: sdk.Float64(2536.25),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("numquam"),
                                            },
                                            UsageRate: sdk.Float64(2010.1),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("at"),
                                            },
                                            UsageRate: sdk.Float64(6378.56),
                                        },
                                    },
                                },
                            },
                            InterconnectConnectionLocation: shared.CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnumInterconnectConnectionLocationEurope.ToPointer(),
                        },
                        CloudInterconnectWorkload: &shared.CloudInterconnectWorkload{
                            InterconnectAttachments: []shared.VlanAttachment{
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps20G.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("corporis"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("expedita"),
                                                    },
                                                    UsageRate: sdk.Float64(5326.69),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps1G.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("minima"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("enim"),
                                                    },
                                                    UsageRate: sdk.Float64(2040.72),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("in"),
                                                    },
                                                    UsageRate: sdk.Float64(7963.97),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("eum"),
                                                    },
                                                    UsageRate: sdk.Float64(2664.08),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("corporis"),
                                                    },
                                                    UsageRate: sdk.Float64(2982.64),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps20G.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("maiores"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("aperiam"),
                                                    },
                                                    UsageRate: sdk.Float64(7275.47),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("ratione"),
                                                    },
                                                    UsageRate: sdk.Float64(2899.13),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("totam"),
                                                    },
                                                    UsageRate: sdk.Float64(5777.09),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps300M.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("quo"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("minus"),
                                                    },
                                                    UsageRate: sdk.Float64(6845.53),
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
                                    Unit: sdk.String("impedit"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("tempore"),
                                            },
                                            UsageRate: sdk.Float64(8786.01),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("odit"),
                                            },
                                            UsageRate: sdk.Float64(9974.37),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("pariatur"),
                                            },
                                            UsageRate: sdk.Float64(3628.88),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("reprehenderit"),
                                            },
                                            UsageRate: sdk.Float64(452.34),
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: shared.CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentAutralia.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("minima"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("ducimus"),
                                            },
                                            UsageRate: sdk.Float64(5678.46),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dolores"),
                                            },
                                            UsageRate: sdk.Float64(6211.69),
                                        },
                                    },
                                },
                            },
                            SourceContinent: shared.CloudStorageEgressWorkloadSourceContinentEnumSourceContinentUnspecified.ToPointer(),
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("ducimus"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("pariatur"),
                                            },
                                            UsageRate: sdk.Float64(9326.66),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("similique"),
                                            },
                                            UsageRate: sdk.Float64(7631.65),
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("ex"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("commodi"),
                                            },
                                            UsageRate: sdk.Float64(8886.16),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("placeat"),
                                            },
                                            UsageRate: sdk.Float64(6972.74),
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: sdk.String("Constance Effertz V"),
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: sdk.String("Earl VonRueden DVM"),
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("veniam"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dolores"),
                                            },
                                            UsageRate: sdk.Float64(7249.94),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("dicta"),
                                            },
                                            UsageRate: sdk.Float64(1644.88),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("necessitatibus"),
                                            },
                                            UsageRate: sdk.Float64(7482.24),
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("ipsa"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("maiores"),
                                            },
                                            UsageRate: sdk.Float64(873.82),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quasi"),
                                            },
                                            UsageRate: sdk.Float64(3864.47),
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: sdk.String("Pete Mann"),
                            },
                            StorageClass: sdk.String("aliquam"),
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: sdk.Bool(false),
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("nostrum"),
                                AcceleratorType: sdk.String("doloribus"),
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("eligendi"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("enim"),
                                            },
                                            UsageRate: sdk.Float64(9449.5),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("animi"),
                                            },
                                            UsageRate: sdk.Float64(5597.74),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("totam"),
                                            },
                                            UsageRate: sdk.Float64(5646.67),
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "eaque",
                                "saepe",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: sdk.String("architecto"),
                                    MemorySizeGb: sdk.Float64(5546.45),
                                    VirtualCPUCount: sdk.String("iste"),
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: sdk.String("assumenda"),
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("libero"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("doloremque"),
                                                    },
                                                    UsageRate: sdk.Float64(9639.76),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("impedit"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("cum"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("adipisci"),
                                                    },
                                                    UsageRate: sdk.Float64(9031.5),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("doloremque"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("veniam"),
                                                    },
                                                    UsageRate: sdk.Float64(7274.81),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("architecto"),
                                                    },
                                                    UsageRate: sdk.Float64(5845.93),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("molestiae"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("eligendi"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("non"),
                                                    },
                                                    UsageRate: sdk.Float64(2981.87),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("itaque"),
                                                    },
                                                    UsageRate: sdk.Float64(1509.35),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("asperiores"),
                                                    },
                                                    UsageRate: sdk.Float64(3302.67),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("consequuntur"),
                                                    },
                                                    UsageRate: sdk.Float64(8138.8),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("odit"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("amet"),
                                                    },
                                                    UsageRate: sdk.Float64(3476.98),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("ab"),
                                                    },
                                                    UsageRate: sdk.Float64(2426.37),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("facilis"),
                                                    },
                                                    UsageRate: sdk.Float64(7310.65),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("nisi"),
                                                    },
                                                    UsageRate: sdk.Float64(9775.18),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("quaerat"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("blanditiis"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("nisi"),
                                                    },
                                                    UsageRate: sdk.Float64(3359.77),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("nisi"),
                                                    },
                                                    UsageRate: sdk.Float64(7277.71),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("minus"),
                                                    },
                                                    UsageRate: sdk.Float64(8152),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeRegional.ToPointer(),
                                },
                            },
                            Preemptible: sdk.Bool(false),
                            Region: sdk.String("ipsum"),
                        },
                        Name: sdk.String("Shari Wiza"),
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: shared.PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentNorthAmerica.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("rerum"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("reprehenderit"),
                                            },
                                            UsageRate: sdk.Float64(3455.06),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("neque"),
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("iusto"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("rem"),
                                            },
                                            UsageRate: sdk.Float64(7538.9),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("fugiat"),
                                            },
                                            UsageRate: sdk.Float64(6040.78),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("officiis"),
                                            },
                                            UsageRate: sdk.Float64(4956.17),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("dolor"),
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: sdk.String("dicta"),
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("error"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("vitae"),
                                                },
                                                UsageRate: sdk.Float64(4915.91),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("esse"),
                                                },
                                                UsageRate: sdk.Float64(8541.15),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("ad"),
                                                },
                                                UsageRate: sdk.Float64(1348.18),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("enim"),
                                                },
                                                UsageRate: sdk.Float64(9650.9),
                                            },
                                        },
                                    },
                                },
                                SourceRegion: sdk.String("iusto"),
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("dignissimos"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("illo"),
                                                },
                                                UsageRate: sdk.Float64(691.82),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("incidunt"),
                                                },
                                                UsageRate: sdk.Float64(8791.74),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("saepe"),
                                                },
                                                UsageRate: sdk.Float64(7348.14),
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
                                    Unit: sdk.String("eos"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("earum"),
                                            },
                                            UsageRate: sdk.Float64(4441.21),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("praesentium"),
                                            },
                                            UsageRate: sdk.Float64(3670.46),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("repellat"),
                                            },
                                            UsageRate: sdk.Float64(7897.7),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("sequi"),
                                            },
                                            UsageRate: sdk.Float64(4671.19),
                                        },
                                    },
                                },
                            },
                        },
                        CloudCdnWorkload: &shared.CloudCdnWorkload{
                            CacheFillOriginService: shared.CloudCdnWorkloadCacheFillOriginServiceEnumCacheFillOriginServiceGoogleCloudStorageBucket.ToPointer(),
                            CacheFillRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("illo"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("assumenda"),
                                            },
                                            UsageRate: sdk.Float64(3041.73),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("quisquam"),
                                            },
                                            UsageRate: sdk.Float64(5910.65),
                                        },
                                    },
                                },
                            },
                            CacheFillRegions: &shared.CacheFillRegions{
                                DestinationRegion: shared.CacheFillRegionsDestinationRegionEnumCacheFillDestinationRegionOceania.ToPointer(),
                                SourceRegion: shared.CacheFillRegionsSourceRegionEnumCacheFillSourceRegionSouthAmerica.ToPointer(),
                            },
                            CacheLookUpRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("consequatur"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("aspernatur"),
                                            },
                                            UsageRate: sdk.Float64(7239.42),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("expedita"),
                                            },
                                            UsageRate: sdk.Float64(5591.74),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("provident"),
                                            },
                                            UsageRate: sdk.Float64(9222.99),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("rerum"),
                                            },
                                            UsageRate: sdk.Float64(4923.61),
                                        },
                                    },
                                },
                            },
                        },
                        CloudInterconnectEgressWorkload: &shared.CloudInterconnectEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("corporis"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("similique"),
                                            },
                                            UsageRate: sdk.Float64(8339.82),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("iure"),
                                            },
                                            UsageRate: sdk.Float64(2138.35),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("commodi"),
                                            },
                                            UsageRate: sdk.Float64(7712.26),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("commodi"),
                                            },
                                            UsageRate: sdk.Float64(121.71),
                                        },
                                    },
                                },
                            },
                            InterconnectConnectionLocation: shared.CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnumInterconnectConnectionLocationUnspecified.ToPointer(),
                        },
                        CloudInterconnectWorkload: &shared.CloudInterconnectWorkload{
                            InterconnectAttachments: []shared.VlanAttachment{
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthUnspecified.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("amet"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("praesentium"),
                                                    },
                                                    UsageRate: sdk.Float64(6955.26),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("cum"),
                                                    },
                                                    UsageRate: sdk.Float64(2304.11),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("quasi"),
                                                    },
                                                    UsageRate: sdk.Float64(1181.26),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("laudantium"),
                                                    },
                                                    UsageRate: sdk.Float64(407.1),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.VlanAttachment{
                                    Bandwidth: shared.VlanAttachmentBandwidthEnumBandwidthBps50G.ToPointer(),
                                    VlanCount: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("iusto"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("provident"),
                                                    },
                                                    UsageRate: sdk.Float64(6771.41),
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
                                    Unit: sdk.String("repudiandae"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("nemo"),
                                            },
                                            UsageRate: sdk.Float64(4758.26),
                                        },
                                    },
                                },
                            },
                        },
                        CloudStorageEgressWorkload: &shared.CloudStorageEgressWorkload{
                            DestinationContinent: shared.CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentSouthAmerica.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("facilis"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("aperiam"),
                                            },
                                            UsageRate: sdk.Float64(5740.92),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("accusamus"),
                                            },
                                            UsageRate: sdk.Float64(1786.35),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("totam"),
                                            },
                                            UsageRate: sdk.Float64(1158.61),
                                        },
                                    },
                                },
                            },
                            SourceContinent: shared.CloudStorageEgressWorkloadSourceContinentEnumSourceContinentUnspecified.ToPointer(),
                        },
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("velit"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("sunt"),
                                            },
                                            UsageRate: sdk.Float64(9536.76),
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("dolor"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("atque"),
                                            },
                                            UsageRate: sdk.Float64(1074.72),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("at"),
                                            },
                                            UsageRate: sdk.Float64(2875.44),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("minus"),
                                            },
                                            UsageRate: sdk.Float64(4567.04),
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: sdk.String("Lisa Price IV"),
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: sdk.String("Jacob Sawayn"),
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("eligendi"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("consectetur"),
                                            },
                                            UsageRate: sdk.Float64(7441.01),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("natus"),
                                            },
                                            UsageRate: sdk.Float64(8398.07),
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("officia"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("tenetur"),
                                            },
                                            UsageRate: sdk.Float64(1339.49),
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: sdk.String("Dexter Stanton"),
                            },
                            StorageClass: sdk.String("vero"),
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: sdk.Bool(false),
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: sdk.String("qui"),
                                AcceleratorType: sdk.String("consectetur"),
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("repellat"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("explicabo"),
                                            },
                                            UsageRate: sdk.Float64(3503.25),
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "non",
                                "ab",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: sdk.String("illo"),
                                    MemorySizeGb: sdk.Float64(9438.51),
                                    VirtualCPUCount: sdk.String("deserunt"),
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: sdk.String("delectus"),
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("distinctio"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("exercitationem"),
                                                    },
                                                    UsageRate: sdk.Float64(2883),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("numquam"),
                                                    },
                                                    UsageRate: sdk.Float64(9211.93),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("modi"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("in"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("accusamus"),
                                                    },
                                                    UsageRate: sdk.Float64(5258.09),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeUnspecified.ToPointer(),
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("odit"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("enim"),
                                                    },
                                                    UsageRate: sdk.Float64(4527.3),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("similique"),
                                                    },
                                                    UsageRate: sdk.Float64(3261.18),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("libero"),
                                                    },
                                                    UsageRate: sdk.Float64(3001.89),
                                                },
                                            },
                                        },
                                    },
                                    DiskType: sdk.String("sit"),
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: sdk.String("modi"),
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("nesciunt"),
                                                    },
                                                    UsageRate: sdk.Float64(6521.25),
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: sdk.String("dignissimos"),
                                                    },
                                                    UsageRate: sdk.Float64(8532.46),
                                                },
                                            },
                                        },
                                    },
                                    Scope: shared.PersistentDiskScopeEnumScopeZonal.ToPointer(),
                                },
                            },
                            Preemptible: sdk.Bool(false),
                            Region: sdk.String("molestiae"),
                        },
                        Name: sdk.String("Lela Bergstrom Jr."),
                        PremiumTierEgressWorkload: &shared.PremiumTierEgressWorkload{
                            DestinationContinent: shared.PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentMiddleEast.ToPointer(),
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("odio"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("numquam"),
                                            },
                                            UsageRate: sdk.Float64(6770.45),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("possimus"),
                                            },
                                            UsageRate: sdk.Float64(4523.99),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("consectetur"),
                        },
                        StandardTierEgressWorkload: &shared.StandardTierEgressWorkload{
                            EgressRate: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: sdk.String("nesciunt"),
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("itaque"),
                                            },
                                            UsageRate: sdk.Float64(7912.28),
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: sdk.String("sunt"),
                                            },
                                            UsageRate: sdk.Float64(7151.43),
                                        },
                                    },
                                },
                            },
                            SourceRegion: sdk.String("iusto"),
                        },
                        VMToVMEgressWorkload: &shared.VMToVMEgressWorkload{
                            InterRegionEgress: &shared.InterRegionEgress{
                                DestinationRegion: sdk.String("quas"),
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("et"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("amet"),
                                                },
                                                UsageRate: sdk.Float64(4186.37),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("fuga"),
                                                },
                                                UsageRate: sdk.Float64(53.1),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("rem"),
                                                },
                                                UsageRate: sdk.Float64(113.55),
                                            },
                                        },
                                    },
                                },
                                SourceRegion: sdk.String("quos"),
                            },
                            IntraRegionEgress: &shared.IntraRegionEgress{
                                EgressRate: &shared.Usage{
                                    UsageRateTimeline: &shared.UsageRateTimeline{
                                        Unit: sdk.String("laudantium"),
                                        UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("veritatis"),
                                                },
                                                UsageRate: sdk.Float64(607.78),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("eaque"),
                                                },
                                                UsageRate: sdk.Float64(9048.27),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("delectus"),
                                                },
                                                UsageRate: sdk.Float64(6512.28),
                                            },
                                            shared.UsageRateTimelineEntry{
                                                EffectiveTime: &shared.EstimationTimePoint{
                                                    EstimationTimeFrameOffset: sdk.String("nulla"),
                                                },
                                                UsageRate: sdk.Float64(6409.07),
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
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("eveniet"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("qui"),
    }, operations.CloudbillingEstimateCostScenarioSecurity{
        Option1: &operations.CloudbillingEstimateCostScenarioSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimateCostScenarioWithListPriceResponse != nil {
        // handle response
    }
}
```
