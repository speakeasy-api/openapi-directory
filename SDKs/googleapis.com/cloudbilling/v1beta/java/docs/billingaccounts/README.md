# billingAccounts

### Available Operations

* [cloudbillingBillingAccountsEstimateCostScenario](#cloudbillingbillingaccountsestimatecostscenario) - Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

## cloudbillingBillingAccountsEstimateCostScenario

Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioRequest;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioResponse;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioSecurity;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CacheFillRegions;
import org.openapis.openapi.models.shared.CacheFillRegionsDestinationRegionEnum;
import org.openapis.openapi.models.shared.CacheFillRegionsSourceRegionEnum;
import org.openapis.openapi.models.shared.CloudCdnEgressWorkload;
import org.openapis.openapi.models.shared.CloudCdnEgressWorkloadCacheEgressDestinationEnum;
import org.openapis.openapi.models.shared.CloudCdnWorkload;
import org.openapis.openapi.models.shared.CloudCdnWorkloadCacheFillOriginServiceEnum;
import org.openapis.openapi.models.shared.CloudInterconnectEgressWorkload;
import org.openapis.openapi.models.shared.CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum;
import org.openapis.openapi.models.shared.CloudInterconnectWorkload;
import org.openapis.openapi.models.shared.CloudInterconnectWorkloadInterconnectTypeEnum;
import org.openapis.openapi.models.shared.CloudInterconnectWorkloadLinkTypeEnum;
import org.openapis.openapi.models.shared.CloudStorageEgressWorkload;
import org.openapis.openapi.models.shared.CloudStorageEgressWorkloadDestinationContinentEnum;
import org.openapis.openapi.models.shared.CloudStorageEgressWorkloadSourceContinentEnum;
import org.openapis.openapi.models.shared.CloudStorageWorkload;
import org.openapis.openapi.models.shared.Commitment;
import org.openapis.openapi.models.shared.ComputeVmWorkload;
import org.openapis.openapi.models.shared.CostScenario;
import org.openapis.openapi.models.shared.CustomMachineType;
import org.openapis.openapi.models.shared.DualRegional;
import org.openapis.openapi.models.shared.EstimateCostScenarioForBillingAccountRequest;
import org.openapis.openapi.models.shared.EstimationTimePoint;
import org.openapis.openapi.models.shared.GuestAccelerator;
import org.openapis.openapi.models.shared.InterRegionEgress;
import org.openapis.openapi.models.shared.IntraRegionEgress;
import org.openapis.openapi.models.shared.MachineType;
import org.openapis.openapi.models.shared.MultiRegional;
import org.openapis.openapi.models.shared.PersistentDisk;
import org.openapis.openapi.models.shared.PersistentDiskScopeEnum;
import org.openapis.openapi.models.shared.PredefinedMachineType;
import org.openapis.openapi.models.shared.PremiumTierEgressWorkload;
import org.openapis.openapi.models.shared.PremiumTierEgressWorkloadDestinationContinentEnum;
import org.openapis.openapi.models.shared.Regional;
import org.openapis.openapi.models.shared.ScenarioConfig;
import org.openapis.openapi.models.shared.StandardTierEgressWorkload;
import org.openapis.openapi.models.shared.Usage;
import org.openapis.openapi.models.shared.UsageRateTimeline;
import org.openapis.openapi.models.shared.UsageRateTimelineEntry;
import org.openapis.openapi.models.shared.VlanAttachment;
import org.openapis.openapi.models.shared.VlanAttachmentBandwidthEnum;
import org.openapis.openapi.models.shared.VmResourceBasedCud;
import org.openapis.openapi.models.shared.VmResourceBasedCudPlanEnum;
import org.openapis.openapi.models.shared.VmToVmEgressWorkload;
import org.openapis.openapi.models.shared.Workload;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingBillingAccountsEstimateCostScenarioRequest req = new CloudbillingBillingAccountsEstimateCostScenarioRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                estimateCostScenarioForBillingAccountRequest = new EstimateCostScenarioForBillingAccountRequest() {{
                    costScenario = new CostScenario() {{
                        commitments = new org.openapis.openapi.models.shared.Commitment[]{{
                            add(new Commitment() {{
                                name = "Mrs. Yolanda Mitchell";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "debitis";
                                        acceleratorType = "illo";
                                    }};
                                    machineSeries = "reiciendis";
                                    memorySizeGb = 193;
                                    plan = VmResourceBasedCudPlanEnum.TWELVE_MONTH;
                                    region = "maiores";
                                    virtualCpuCount = "incidunt";
                                }};
                            }}),
                            add(new Commitment() {{
                                name = "Sherri Gerlach";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "ea";
                                        acceleratorType = "occaecati";
                                    }};
                                    machineSeries = "quos";
                                    memorySizeGb = 9757.52;
                                    plan = VmResourceBasedCudPlanEnum.COMMITMENT_PLAN_UNSPECIFIED;
                                    region = "tempora";
                                    virtualCpuCount = "voluptate";
                                }};
                            }}),
                            add(new Commitment() {{
                                name = "Marc Balistreri";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "praesentium";
                                        acceleratorType = "facilis";
                                    }};
                                    machineSeries = "quaerat";
                                    memorySizeGb = 2777.73;
                                    plan = VmResourceBasedCudPlanEnum.TWELVE_MONTH;
                                    region = "debitis";
                                    virtualCpuCount = "rem";
                                }};
                            }}),
                        }};
                        scenarioConfig = new ScenarioConfig() {{
                            estimateDuration = "sit";
                        }};;
                        workloads = new org.openapis.openapi.models.shared.Workload[]{{
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = CloudCdnEgressWorkloadCacheEgressDestinationEnum.CACHE_EGRESS_DESTINATION_OCEANIA;
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "veniam";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "recusandae";
                                                    }};
                                                    usageRate = 9671.22;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nulla";
                                                    }};
                                                    usageRate = 1685.76;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = CloudCdnWorkloadCacheFillOriginServiceEnum.CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED;
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "saepe";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "veniam";
                                                    }};
                                                    usageRate = 4461.35;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "officiis";
                                                    }};
                                                    usageRate = 1046.27;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = CacheFillRegionsDestinationRegionEnum.CACHE_FILL_DESTINATION_REGION_OCEANIA;
                                        sourceRegion = CacheFillRegionsSourceRegionEnum.CACHE_FILL_SOURCE_REGION_EUROPE;
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "praesentium";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "laboriosam";
                                                    }};
                                                    usageRate = 6805.15;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "voluptatum";
                                                    }};
                                                    usageRate = 6223.85;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "hic";
                                                    }};
                                                    usageRate = 7105.29;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "debitis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorum";
                                                    }};
                                                    usageRate = 3416.98;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum.INTERCONNECT_CONNECTION_LOCATION_NORTH_AMERICA;
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS1_G;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "accusamus";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "atque";
                                                            }};
                                                            usageRate = 1482.68;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ut";
                                                            }};
                                                            usageRate = 8563.03;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_UNSPECIFIED;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "culpa";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "magnam";
                                                            }};
                                                            usageRate = 78.84;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "esse";
                                                            }};
                                                            usageRate = 3726.79;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "sit";
                                                            }};
                                                            usageRate = 5305.37;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS1_G;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "repudiandae";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "et";
                                                            }};
                                                            usageRate = 5027.1;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ex";
                                                            }};
                                                            usageRate = 1536.27;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                    }};
                                    interconnectType = CloudInterconnectWorkloadInterconnectTypeEnum.INTERCONNECT_TYPE_UNSPECIFIED;
                                    linkType = CloudInterconnectWorkloadLinkTypeEnum.LINK_TYPE_ETHERNET10_G_LR;
                                    provisionedLinkCount = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "nostrum";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "error";
                                                    }};
                                                    usageRate = 85.11;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "incidunt";
                                                    }};
                                                    usageRate = 9688.65;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorem";
                                                    }};
                                                    usageRate = 6908.94;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dicta";
                                                    }};
                                                    usageRate = 994.16;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = CloudStorageEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_EUROPE;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "labore";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "atque";
                                                    }};
                                                    usageRate = 6719.57;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nam";
                                                    }};
                                                    usageRate = 9488.61;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "laboriosam";
                                                    }};
                                                    usageRate = 27.03;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = CloudStorageEgressWorkloadSourceContinentEnum.SOURCE_CONTINENT_ASIA_PACIFIC;
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "deserunt";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "unde";
                                                    }};
                                                    usageRate = 9720.83;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "provident";
                                                    }};
                                                    usageRate = 8338.19;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "delectus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "perferendis";
                                                    }};
                                                    usageRate = 6672.85;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quidem";
                                                    }};
                                                    usageRate = 4406.66;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "facere";
                                                    }};
                                                    usageRate = 6850.92;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "praesentium";
                                                    }};
                                                    usageRate = 6485.98;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "Helen Schiller IV";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "Tabitha Leannon";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "maxime";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "esse";
                                                    }};
                                                    usageRate = 2277.59;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "assumenda";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "atque";
                                                    }};
                                                    usageRate = 6232.95;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "officiis";
                                                    }};
                                                    usageRate = 8869.61;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "Wendell Harber";
                                    }};
                                    storageClass = "maiores";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "corrupti";
                                        acceleratorType = "at";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "error";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "suscipit";
                                                    }};
                                                    usageRate = 9223.48;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "atque";
                                                    }};
                                                    usageRate = 5413.81;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sunt";
                                                    }};
                                                    usageRate = 9233.06;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]{{
                                        add("repellendus"),
                                        add("labore"),
                                        add("reiciendis"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "doloremque";
                                            memorySizeGb = 9197.83;
                                            virtualCpuCount = "dicta";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "accusantium";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "dolores";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "laboriosam";
                                                            }};
                                                            usageRate = 2465.35;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "a";
                                                            }};
                                                            usageRate = 5627.83;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "magnam";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "saepe";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "occaecati";
                                                            }};
                                                            usageRate = 8863.05;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_ZONAL;
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "in";
                                }};
                                name = "Tricia McClure";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = PremiumTierEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_WESTERN_EUROPE;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "quis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "error";
                                                    }};
                                                    usageRate = 764.86;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "corporis";
                                                    }};
                                                    usageRate = 6964.63;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "eveniet";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "non";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "doloremque";
                                                    }};
                                                    usageRate = 4341.56;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ipsa";
                                                    }};
                                                    usageRate = 5176.12;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quae";
                                                    }};
                                                    usageRate = 4746.68;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eveniet";
                                                    }};
                                                    usageRate = 1843.62;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "cum";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "iure";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "necessitatibus";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "laborum";
                                                        }};
                                                        usageRate = 7152.08;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        sourceRegion = "voluptatum";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "rem";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "ad";
                                                        }};
                                                        usageRate = 9979.63;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "alias";
                                                        }};
                                                        usageRate = 3621.89;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }}),
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = CloudCdnEgressWorkloadCacheEgressDestinationEnum.CACHE_EGRESS_DESTINATION_NORTH_AMERICA;
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "nihil";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "voluptas";
                                                    }};
                                                    usageRate = 51.89;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "maiores";
                                                    }};
                                                    usageRate = 9702.22;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolores";
                                                    }};
                                                    usageRate = 6638.66;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = CloudCdnWorkloadCacheFillOriginServiceEnum.CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED;
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "dolore";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nesciunt";
                                                    }};
                                                    usageRate = 632.07;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "recusandae";
                                                    }};
                                                    usageRate = 6072.49;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quaerat";
                                                    }};
                                                    usageRate = 4776.46;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = CacheFillRegionsDestinationRegionEnum.CACHE_FILL_DESTINATION_REGION_NORTH_AMERICA;
                                        sourceRegion = CacheFillRegionsSourceRegionEnum.CACHE_FILL_REGION_ASIA_PACIFIC;
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "culpa";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "debitis";
                                                    }};
                                                    usageRate = 5145.13;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "eum";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "recusandae";
                                                    }};
                                                    usageRate = 4565.2;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "provident";
                                                    }};
                                                    usageRate = 3374.77;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum.INTERCONNECT_CONNECTION_LOCATION_EUROPE;
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS1_G;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "aspernatur";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quasi";
                                                            }};
                                                            usageRate = 6570.2;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "nostrum";
                                                            }};
                                                            usageRate = 6523.09;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS1_G;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "possimus";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ex";
                                                            }};
                                                            usageRate = 3972.57;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "accusantium";
                                                            }};
                                                            usageRate = 9992.78;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "doloribus";
                                                            }};
                                                            usageRate = 3518.93;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS400_M;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "nam";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "officia";
                                                            }};
                                                            usageRate = 6720.41;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "placeat";
                                                            }};
                                                            usageRate = 2666.97;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "voluptatibus";
                                                            }};
                                                            usageRate = 5640.64;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "officiis";
                                                            }};
                                                            usageRate = 9569.33;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS5_G;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "vitae";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "tempora";
                                                            }};
                                                            usageRate = 3354.98;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "inventore";
                                                            }};
                                                            usageRate = 1476.85;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "cumque";
                                                            }};
                                                            usageRate = 626.36;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                    }};
                                    interconnectType = CloudInterconnectWorkloadInterconnectTypeEnum.INTERCONNECT_TYPE_UNSPECIFIED;
                                    linkType = CloudInterconnectWorkloadLinkTypeEnum.LINK_TYPE_UNSPECIFIED;
                                    provisionedLinkCount = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "aspernatur";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eius";
                                                    }};
                                                    usageRate = 5219.96;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "at";
                                                    }};
                                                    usageRate = 7730.84;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = CloudStorageEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_ASIA_PACIFIC;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "sapiente";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dicta";
                                                    }};
                                                    usageRate = 3251.18;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "beatae";
                                                    }};
                                                    usageRate = 5834.04;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = CloudStorageEgressWorkloadSourceContinentEnum.SOURCE_CONTINENT_EUROPE;
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "earum";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "hic";
                                                    }};
                                                    usageRate = 8481.51;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eaque";
                                                    }};
                                                    usageRate = 9358.33;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "perspiciatis";
                                                    }};
                                                    usageRate = 9834.27;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "debitis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "porro";
                                                    }};
                                                    usageRate = 3803.35;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorem";
                                                    }};
                                                    usageRate = 1478.08;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "Grant Dickens";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "Ms. William Boyle";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "occaecati";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "adipisci";
                                                    }};
                                                    usageRate = 965.62;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "magni";
                                                    }};
                                                    usageRate = 9849.34;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "nulla";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ipsa";
                                                    }};
                                                    usageRate = 2711.13;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nihil";
                                                    }};
                                                    usageRate = 4731.9;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dicta";
                                                    }};
                                                    usageRate = 4797.54;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "esse";
                                                    }};
                                                    usageRate = 5083.9;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "Dr. Van Kassulke Sr.";
                                    }};
                                    storageClass = "odio";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "tempora";
                                        acceleratorType = "esse";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ex";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "aliquid";
                                                    }};
                                                    usageRate = 588.7;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]{{
                                        add("sunt"),
                                        add("nostrum"),
                                        add("fugiat"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "expedita";
                                            memorySizeGb = 3996.67;
                                            virtualCpuCount = "officia";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "suscipit";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "perferendis";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "voluptas";
                                                            }};
                                                            usageRate = 6145.28;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "id";
                                                            }};
                                                            usageRate = 700.42;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "error";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "possimus";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "mollitia";
                                                            }};
                                                            usageRate = 6717.94;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "libero";
                                                            }};
                                                            usageRate = 3240.83;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "deleniti";
                                                            }};
                                                            usageRate = 3162.2;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "vitae";
                                                            }};
                                                            usageRate = 8333.16;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_ZONAL;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "quo";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ut";
                                                            }};
                                                            usageRate = 3210.43;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "expedita";
                                                            }};
                                                            usageRate = 299.5;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "molestias";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "cum";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "beatae";
                                                            }};
                                                            usageRate = 5308.6;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "omnis";
                                                            }};
                                                            usageRate = 852.33;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_REGIONAL;
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "est";
                                }};
                                name = "Donald Williamson MD";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = PremiumTierEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_MIDDLE_EAST;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "debitis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "alias";
                                                    }};
                                                    usageRate = 5349.17;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "earum";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ex";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "rem";
                                                    }};
                                                    usageRate = 7963.2;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nemo";
                                                    }};
                                                    usageRate = 9920.74;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ratione";
                                                    }};
                                                    usageRate = 3552.25;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "perferendis";
                                                    }};
                                                    usageRate = 8483.41;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "totam";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "impedit";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "quibusdam";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "ipsam";
                                                        }};
                                                        usageRate = 6334.15;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "dolor";
                                                        }};
                                                        usageRate = 3073.76;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "inventore";
                                                        }};
                                                        usageRate = 5372.79;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        sourceRegion = "veritatis";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "tempora";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "consequatur";
                                                        }};
                                                        usageRate = 1000.14;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }}),
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = CloudCdnEgressWorkloadCacheEgressDestinationEnum.CACHE_EGRESS_DESTINATION_UNSPECIFIED;
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "modi";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ab";
                                                    }};
                                                    usageRate = 5137.6;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = CloudCdnWorkloadCacheFillOriginServiceEnum.CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED;
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "dolor";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ipsam";
                                                    }};
                                                    usageRate = 1621.2;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ipsa";
                                                    }};
                                                    usageRate = 5596.82;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eveniet";
                                                    }};
                                                    usageRate = 7734.56;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "officiis";
                                                    }};
                                                    usageRate = 4564.1;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = CacheFillRegionsDestinationRegionEnum.CACHE_FILL_DESTINATION_REGION_OTHERS;
                                        sourceRegion = CacheFillRegionsSourceRegionEnum.CACHE_FILL_SOURCE_REGION_UNSPECIFIED;
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "veniam";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "expedita";
                                                    }};
                                                    usageRate = 4329.84;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "vel";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "magnam";
                                                    }};
                                                    usageRate = 3494.4;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ab";
                                                    }};
                                                    usageRate = 7814.8;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "autem";
                                                    }};
                                                    usageRate = 7510.22;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum.INTERCONNECT_CONNECTION_LOCATION_EUROPE;
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS100_M;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "voluptatem";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "necessitatibus";
                                                            }};
                                                            usageRate = 956.19;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "nisi";
                                                            }};
                                                            usageRate = 8711.03;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS20_G;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "est";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "sequi";
                                                            }};
                                                            usageRate = 9873.49;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "repudiandae";
                                                            }};
                                                            usageRate = 7592.83;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "occaecati";
                                                            }};
                                                            usageRate = 3645.44;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS400_M;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "blanditiis";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "voluptas";
                                                            }};
                                                            usageRate = 2540.25;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "nemo";
                                                            }};
                                                            usageRate = 5510.79;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "eius";
                                                            }};
                                                            usageRate = 1319.03;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS500_M;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "nesciunt";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "laudantium";
                                                            }};
                                                            usageRate = 2773.4;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quasi";
                                                            }};
                                                            usageRate = 5243.8;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "fugiat";
                                                            }};
                                                            usageRate = 1173.8;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                    }};
                                    interconnectType = CloudInterconnectWorkloadInterconnectTypeEnum.INTERCONNECT_TYPE_DEDICATED;
                                    linkType = CloudInterconnectWorkloadLinkTypeEnum.LINK_TYPE_UNSPECIFIED;
                                    provisionedLinkCount = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "consectetur";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "cupiditate";
                                                    }};
                                                    usageRate = 9707.32;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = CloudStorageEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_NORTH_AMERICA;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "alias";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eos";
                                                    }};
                                                    usageRate = 5790.11;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "iste";
                                                    }};
                                                    usageRate = 1700.99;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "inventore";
                                                    }};
                                                    usageRate = 6863.62;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = CloudStorageEgressWorkloadSourceContinentEnum.SOURCE_CONTINENT_SOUTH_AMERICA;
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "voluptatibus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "omnis";
                                                    }};
                                                    usageRate = 9663.9;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "minima";
                                                    }};
                                                    usageRate = 5076.36;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "maxime";
                                                    }};
                                                    usageRate = 3004.03;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "temporibus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "commodi";
                                                    }};
                                                    usageRate = 9308.19;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "commodi";
                                                    }};
                                                    usageRate = 5207.61;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "earum";
                                                    }};
                                                    usageRate = 2672.07;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "Ignacio Bartoletti";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "Frances Franey";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "sint";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "deserunt";
                                                    }};
                                                    usageRate = 4585.03;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nemo";
                                                    }};
                                                    usageRate = 4445.87;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "est";
                                                    }};
                                                    usageRate = 3361.02;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sint";
                                                    }};
                                                    usageRate = 8806.79;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "impedit";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "necessitatibus";
                                                    }};
                                                    usageRate = 9918.91;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ex";
                                                    }};
                                                    usageRate = 3767.41;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "debitis";
                                                    }};
                                                    usageRate = 9661.48;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quae";
                                                    }};
                                                    usageRate = 7918.8;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "Pablo Feeney";
                                    }};
                                    storageClass = "ipsum";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "impedit";
                                        acceleratorType = "magni";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "soluta";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nam";
                                                    }};
                                                    usageRate = 2940.76;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "iusto";
                                                    }};
                                                    usageRate = 4530.94;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sequi";
                                                    }};
                                                    usageRate = 4939.58;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "neque";
                                                    }};
                                                    usageRate = 7781.72;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]{{
                                        add("quibusdam"),
                                        add("iure"),
                                        add("odit"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "voluptatibus";
                                            memorySizeGb = 4269.04;
                                            virtualCpuCount = "magnam";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "quibusdam";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "facere";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "architecto";
                                                            }};
                                                            usageRate = 9754.25;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quia";
                                                            }};
                                                            usageRate = 7820.9;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aliquam";
                                                            }};
                                                            usageRate = 2470.45;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "illo";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "accusantium";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ea";
                                                            }};
                                                            usageRate = 1076.17;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "vero";
                                                            }};
                                                            usageRate = 5682.18;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_ZONAL;
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "velit";
                                }};
                                name = "Miss Katrina Weber";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = PremiumTierEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_EASTERN_EUROPE;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "itaque";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nisi";
                                                    }};
                                                    usageRate = 9315.05;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "velit";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "laborum";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolor";
                                                    }};
                                                    usageRate = 4833.94;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sit";
                                                    }};
                                                    usageRate = 399.92;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "consequatur";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "officia";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "recusandae";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "quidem";
                                                        }};
                                                        usageRate = 3774.06;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "facilis";
                                                        }};
                                                        usageRate = 8093.65;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        sourceRegion = "perspiciatis";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "expedita";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "a";
                                                        }};
                                                        usageRate = 4555.79;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "ullam";
                                                        }};
                                                        usageRate = 6001.93;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "necessitatibus";
                                                        }};
                                                        usageRate = 6540.82;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }}),
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = CloudCdnEgressWorkloadCacheEgressDestinationEnum.CACHE_EGRESS_DESTINATION_LATIN_AMERICA;
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ipsam";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "est";
                                                    }};
                                                    usageRate = 6216.66;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "esse";
                                                    }};
                                                    usageRate = 2885.7;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = CloudCdnWorkloadCacheFillOriginServiceEnum.CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED;
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "vero";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "vitae";
                                                    }};
                                                    usageRate = 813.71;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = CacheFillRegionsDestinationRegionEnum.CACHE_FILL_DESTINATION_REGION_ASIA_PACIFIC;
                                        sourceRegion = CacheFillRegionsSourceRegionEnum.CACHE_FILL_REGION_ASIA_PACIFIC;
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "qui";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ex";
                                                    }};
                                                    usageRate = 3676.26;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "soluta";
                                                    }};
                                                    usageRate = 7262.27;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "rem";
                                                    }};
                                                    usageRate = 6780.6;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "odio";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "alias";
                                                    }};
                                                    usageRate = 1680.42;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum.INTERCONNECT_CONNECTION_LOCATION_EUROPE;
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_UNSPECIFIED;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "modi";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "exercitationem";
                                                            }};
                                                            usageRate = 9323.94;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                    }};
                                    interconnectType = CloudInterconnectWorkloadInterconnectTypeEnum.INTERCONNECT_TYPE_UNSPECIFIED;
                                    linkType = CloudInterconnectWorkloadLinkTypeEnum.LINK_TYPE_UNSPECIFIED;
                                    provisionedLinkCount = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "unde";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "distinctio";
                                                    }};
                                                    usageRate = 8028.94;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quia";
                                                    }};
                                                    usageRate = 1591.46;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nostrum";
                                                    }};
                                                    usageRate = 6057.12;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "libero";
                                                    }};
                                                    usageRate = 1156.61;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = CloudStorageEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_EUROPE;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "libero";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "officia";
                                                    }};
                                                    usageRate = 5546.03;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "placeat";
                                                    }};
                                                    usageRate = 257.56;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "iusto";
                                                    }};
                                                    usageRate = 573.2;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "voluptates";
                                                    }};
                                                    usageRate = 800.61;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = CloudStorageEgressWorkloadSourceContinentEnum.SOURCE_CONTINENT_UNSPECIFIED;
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "totam";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eligendi";
                                                    }};
                                                    usageRate = 7150.53;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "voluptatem";
                                                    }};
                                                    usageRate = 4181.09;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "esse";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "assumenda";
                                                    }};
                                                    usageRate = 1072.1;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "Bryant Lockman";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "Terence Reynolds";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "autem";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "rerum";
                                                    }};
                                                    usageRate = 5156.38;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "corporis";
                                                    }};
                                                    usageRate = 8890.6;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "voluptatibus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "at";
                                                    }};
                                                    usageRate = 51.52;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quia";
                                                    }};
                                                    usageRate = 6941.58;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "fuga";
                                                    }};
                                                    usageRate = 9195.08;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "Mamie Torp";
                                    }};
                                    storageClass = "odio";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "praesentium";
                                        acceleratorType = "odit";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "explicabo";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "error";
                                                    }};
                                                    usageRate = 9371.17;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "adipisci";
                                                    }};
                                                    usageRate = 9233.06;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]{{
                                        add("ut"),
                                        add("quidem"),
                                        add("quis"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "beatae";
                                            memorySizeGb = 6002.13;
                                            virtualCpuCount = "molestiae";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "delectus";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "fugit";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "numquam";
                                                            }};
                                                            usageRate = 2010.1;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "at";
                                                            }};
                                                            usageRate = 6378.56;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "dignissimos";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "optio";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "corporis";
                                                            }};
                                                            usageRate = 1855.18;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "expedita";
                                                            }};
                                                            usageRate = 5326.69;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "cupiditate";
                                                            }};
                                                            usageRate = 3262.69;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "placeat";
                                                            }};
                                                            usageRate = 3165.42;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_UNSPECIFIED;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "in";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "eum";
                                                            }};
                                                            usageRate = 2664.08;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "corporis";
                                                            }};
                                                            usageRate = 2982.64;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "voluptates";
                                                            }};
                                                            usageRate = 9781.73;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "tempore";
                                                            }};
                                                            usageRate = 460.13;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "libero";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "ratione";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "totam";
                                                            }};
                                                            usageRate = 5777.09;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "voluptas";
                                                            }};
                                                            usageRate = 7791.8;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_UNSPECIFIED;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "minus";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "nostrum";
                                                            }};
                                                            usageRate = 6692.37;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "impedit";
                                                            }};
                                                            usageRate = 9637.41;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "tempore";
                                                            }};
                                                            usageRate = 8786.01;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "odit";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "repellat";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "nemo";
                                                            }};
                                                            usageRate = 4413.21;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aperiam";
                                                            }};
                                                            usageRate = 4864.1;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "minima";
                                                            }};
                                                            usageRate = 4483.69;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ducimus";
                                                            }};
                                                            usageRate = 5678.46;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_UNSPECIFIED;
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "error";
                                }};
                                name = "Jo Kling";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = PremiumTierEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_WESTERN_EUROPE;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "optio";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quaerat";
                                                    }};
                                                    usageRate = 4166.92;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "officiis";
                                                    }};
                                                    usageRate = 8108.39;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "quidem";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "exercitationem";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorem";
                                                    }};
                                                    usageRate = 2646.19;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ipsa";
                                                    }};
                                                    usageRate = 5755.34;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "vero";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "sequi";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "repudiandae";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "dicta";
                                                        }};
                                                        usageRate = 9369.28;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "veniam";
                                                        }};
                                                        usageRate = 6592.68;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "dolores";
                                                        }};
                                                        usageRate = 7249.94;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        sourceRegion = "dicta";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "consequuntur";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "nobis";
                                                        }};
                                                        usageRate = 568.77;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "ducimus";
                                                        }};
                                                        usageRate = 9804.86;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "veritatis";
                                                        }};
                                                        usageRate = 964.5;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "laboriosam";
                                                        }};
                                                        usageRate = 8634.71;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "nemo";
                key = "aliquam";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "eligendi";
                uploadProtocol = "sint";
            }};            

            CloudbillingBillingAccountsEstimateCostScenarioResponse res = sdk.billingAccounts.cloudbillingBillingAccountsEstimateCostScenario(req, new CloudbillingBillingAccountsEstimateCostScenarioSecurity() {{
                option1 = new CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1("enim", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.estimateCostScenarioForBillingAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
