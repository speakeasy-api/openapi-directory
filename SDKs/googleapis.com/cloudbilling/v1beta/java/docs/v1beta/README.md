# v1beta

### Available Operations

* [cloudbillingEstimateCostScenario](#cloudbillingestimatecostscenario) - Estimate list prices using a `CostScenario` without a defined `billingAccount`.

## cloudbillingEstimateCostScenario

Estimate list prices using a `CostScenario` without a defined `billingAccount`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingEstimateCostScenarioRequest;
import org.openapis.openapi.models.operations.CloudbillingEstimateCostScenarioResponse;
import org.openapis.openapi.models.operations.CloudbillingEstimateCostScenarioSecurity;
import org.openapis.openapi.models.operations.CloudbillingEstimateCostScenarioSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingEstimateCostScenarioSecurityOption2;
import org.openapis.openapi.models.operations.CloudbillingEstimateCostScenarioSecurityOption3;
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
import org.openapis.openapi.models.shared.EstimateCostScenarioWithListPriceRequest;
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

            CloudbillingEstimateCostScenarioRequest req = new CloudbillingEstimateCostScenarioRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                estimateCostScenarioWithListPriceRequest = new EstimateCostScenarioWithListPriceRequest() {{
                    costScenario = new CostScenario() {{
                        commitments = new org.openapis.openapi.models.shared.Commitment[]{{
                            add(new Commitment() {{
                                name = "Dr. Virgil Kuhic V";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "iste";
                                        acceleratorType = "assumenda";
                                    }};
                                    machineSeries = "tempore";
                                    memorySizeGb = 7255.74;
                                    plan = VmResourceBasedCudPlanEnum.COMMITMENT_PLAN_UNSPECIFIED;
                                    region = "doloremque";
                                    virtualCpuCount = "delectus";
                                }};
                            }}),
                            add(new Commitment() {{
                                name = "Bennie Emmerich";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "deserunt";
                                        acceleratorType = "doloremque";
                                    }};
                                    machineSeries = "quis";
                                    memorySizeGb = 3330.72;
                                    plan = VmResourceBasedCudPlanEnum.THIRTY_SIX_MONTH;
                                    region = "architecto";
                                    virtualCpuCount = "cupiditate";
                                }};
                            }}),
                            add(new Commitment() {{
                                name = "Sheri Schuppe";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "itaque";
                                        acceleratorType = "sed";
                                    }};
                                    machineSeries = "asperiores";
                                    memorySizeGb = 3302.67;
                                    plan = VmResourceBasedCudPlanEnum.COMMITMENT_PLAN_UNSPECIFIED;
                                    region = "facere";
                                    virtualCpuCount = "laudantium";
                                }};
                            }}),
                        }};
                        scenarioConfig = new ScenarioConfig() {{
                            estimateDuration = "odit";
                        }};;
                        workloads = new org.openapis.openapi.models.shared.Workload[]{{
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = CloudCdnEgressWorkloadCacheEgressDestinationEnum.CACHE_EGRESS_DESTINATION_ASIA_PACIFIC;
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "exercitationem";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "velit";
                                                    }};
                                                    usageRate = 7057.1;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = CloudCdnWorkloadCacheFillOriginServiceEnum.CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE;
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "nisi";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quaerat";
                                                    }};
                                                    usageRate = 5037.48;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "distinctio";
                                                    }};
                                                    usageRate = 3924.3;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quis";
                                                    }};
                                                    usageRate = 3919.33;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "libero";
                                                    }};
                                                    usageRate = 7945.07;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = CacheFillRegionsDestinationRegionEnum.CACHE_FILL_DESTINATION_REGION_CHINA;
                                        sourceRegion = CacheFillRegionsSourceRegionEnum.CACHE_FILL_SOURCE_REGION_OCEANIA;
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ipsum";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "voluptatibus";
                                                    }};
                                                    usageRate = 9745.89;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "consequuntur";
                                                    }};
                                                    usageRate = 8915.81;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "labore";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eos";
                                                    }};
                                                    usageRate = 4407.77;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nostrum";
                                                    }};
                                                    usageRate = 2072.96;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "iusto";
                                                    }};
                                                    usageRate = 6649.65;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum.INTERCONNECT_CONNECTION_LOCATION_NORTH_AMERICA;
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS20_G;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "unde";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ducimus";
                                                            }};
                                                            usageRate = 2201.04;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "dicta";
                                                            }};
                                                            usageRate = 6228.94;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "porro";
                                                            }};
                                                            usageRate = 1114.96;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "dignissimos";
                                                            }};
                                                            usageRate = 4589.7;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS20_G;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "ad";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "enim";
                                                            }};
                                                            usageRate = 9650.9;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS500_M;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "dignissimos";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "illo";
                                                            }};
                                                            usageRate = 691.82;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "incidunt";
                                                            }};
                                                            usageRate = 8791.74;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "saepe";
                                                            }};
                                                            usageRate = 7348.14;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS300_M;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "eos";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "earum";
                                                            }};
                                                            usageRate = 4441.21;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "praesentium";
                                                            }};
                                                            usageRate = 3670.46;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "repellat";
                                                            }};
                                                            usageRate = 7897.7;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "sequi";
                                                            }};
                                                            usageRate = 4671.19;
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
                                            unit = "labore";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "aliquam";
                                                    }};
                                                    usageRate = 7904.63;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "provident";
                                                    }};
                                                    usageRate = 5149.93;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "repudiandae";
                                                    }};
                                                    usageRate = 96.83;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "maxime";
                                                    }};
                                                    usageRate = 1363.57;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = CloudStorageEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_NORTH_AMERICA;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "expedita";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "provident";
                                                    }};
                                                    usageRate = 9222.99;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "rerum";
                                                    }};
                                                    usageRate = 4923.61;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "corporis";
                                                    }};
                                                    usageRate = 8738.33;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = CloudStorageEgressWorkloadSourceContinentEnum.SOURCE_CONTINENT_EUROPE;
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "repellendus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorem";
                                                    }};
                                                    usageRate = 4138.01;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "impedit";
                                                    }};
                                                    usageRate = 4150.33;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "aut";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ad";
                                                    }};
                                                    usageRate = 609.95;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "Desiree Lakin";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "Joyce Carroll DVM";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "iusto";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "provident";
                                                    }};
                                                    usageRate = 6771.41;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "necessitatibus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "repudiandae";
                                                    }};
                                                    usageRate = 100.63;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nemo";
                                                    }};
                                                    usageRate = 4758.26;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "itaque";
                                                    }};
                                                    usageRate = 7087.71;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "Anthony Marvin";
                                    }};
                                    storageClass = "totam";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "dicta";
                                        acceleratorType = "voluptatem";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "velit";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sunt";
                                                    }};
                                                    usageRate = 9536.76;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]{{
                                        add("occaecati"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "atque";
                                            memorySizeGb = 1074.72;
                                            virtualCpuCount = "at";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "labore";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "esse";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "perferendis";
                                                            }};
                                                            usageRate = 6985.58;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "ea";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "aperiam";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "repellat";
                                                            }};
                                                            usageRate = 2436.78;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "porro";
                                                            }};
                                                            usageRate = 5886.39;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_UNSPECIFIED;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "eligendi";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "consectetur";
                                                            }};
                                                            usageRate = 7441.01;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "natus";
                                                            }};
                                                            usageRate = 8398.07;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "officia";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "amet";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aspernatur";
                                                            }};
                                                            usageRate = 7782.76;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "itaque";
                                                            }};
                                                            usageRate = 8483.46;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "laborum";
                                                            }};
                                                            usageRate = 4904.2;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "vero";
                                                            }};
                                                            usageRate = 1853.48;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_UNSPECIFIED;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "repellat";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "explicabo";
                                                            }};
                                                            usageRate = 3503.25;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "nihil";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "non";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "illo";
                                                            }};
                                                            usageRate = 9438.51;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_ZONAL;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "delectus";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "distinctio";
                                                            }};
                                                            usageRate = 4502.24;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "exercitationem";
                                                            }};
                                                            usageRate = 2883;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "numquam";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "repudiandae";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "in";
                                                            }};
                                                            usageRate = 1272.94;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "accusamus";
                                                            }};
                                                            usageRate = 5258.09;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_UNSPECIFIED;
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "odit";
                                }};
                                name = "Bill Kling";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = PremiumTierEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_EMEA;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "magnam";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "modi";
                                                    }};
                                                    usageRate = 4301.16;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "nesciunt";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "mollitia";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "fugiat";
                                                    }};
                                                    usageRate = 3451.38;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "molestiae";
                                                    }};
                                                    usageRate = 3306;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "reiciendis";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "ab";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "modi";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "aut";
                                                        }};
                                                        usageRate = 9116.57;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        sourceRegion = "odio";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "commodi";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "dolorum";
                                                        }};
                                                        usageRate = 8237.18;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "voluptate";
                                                        }};
                                                        usageRate = 2327.72;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }}),
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = CloudCdnEgressWorkloadCacheEgressDestinationEnum.CACHE_EGRESS_DESTINATION_ASIA_PACIFIC;
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "quaerat";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "minus";
                                                    }};
                                                    usageRate = 1226.62;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "distinctio";
                                                    }};
                                                    usageRate = 4813.75;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quas";
                                                    }};
                                                    usageRate = 917.28;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "facilis";
                                                    }};
                                                    usageRate = 2292.76;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = CloudCdnWorkloadCacheFillOriginServiceEnum.CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET;
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "fuga";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "rem";
                                                    }};
                                                    usageRate = 113.55;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = CacheFillRegionsDestinationRegionEnum.CACHE_FILL_DESTINATION_REGION_OCEANIA;
                                        sourceRegion = CacheFillRegionsSourceRegionEnum.CACHE_FILL_SOURCE_REGION_NORTH_AMERICA;
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "repellendus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quae";
                                                    }};
                                                    usageRate = 510.75;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "saepe";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "mollitia";
                                                    }};
                                                    usageRate = 8590.03;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "officia";
                                                    }};
                                                    usageRate = 1520.27;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "voluptatem";
                                                    }};
                                                    usageRate = 6.64;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eveniet";
                                                    }};
                                                    usageRate = 9416.68;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum.INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED;
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS100_M;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "qui";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "harum";
                                                            }};
                                                            usageRate = 1267.27;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "beatae";
                                                            }};
                                                            usageRate = 3979.88;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "modi";
                                                            }};
                                                            usageRate = 7600.49;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "voluptatibus";
                                                            }};
                                                            usageRate = 5629.48;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS2_G;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "libero";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "sequi";
                                                            }};
                                                            usageRate = 3979.19;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ea";
                                                            }};
                                                            usageRate = 7745.01;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ducimus";
                                                            }};
                                                            usageRate = 1409.57;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                    }};
                                    interconnectType = CloudInterconnectWorkloadInterconnectTypeEnum.INTERCONNECT_TYPE_UNSPECIFIED;
                                    linkType = CloudInterconnectWorkloadLinkTypeEnum.LINK_TYPE_ETHERNET100_G_LR;
                                    provisionedLinkCount = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "repellat";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "laborum";
                                                    }};
                                                    usageRate = 6176.57;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "accusamus";
                                                    }};
                                                    usageRate = 429.06;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nisi";
                                                    }};
                                                    usageRate = 7008.56;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "recusandae";
                                                    }};
                                                    usageRate = 9132.85;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = CloudStorageEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_ASIA_PACIFIC;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "rem";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ullam";
                                                    }};
                                                    usageRate = 7868.6;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = CloudStorageEgressWorkloadSourceContinentEnum.SOURCE_CONTINENT_UNSPECIFIED;
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "voluptatibus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quae";
                                                    }};
                                                    usageRate = 8850.22;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "architecto";
                                                    }};
                                                    usageRate = 1002.51;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "enim";
                                                    }};
                                                    usageRate = 7589.85;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "rem";
                                                    }};
                                                    usageRate = 170.6;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "facilis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "a";
                                                    }};
                                                    usageRate = 6150.58;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dicta";
                                                    }};
                                                    usageRate = 5524.39;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ullam";
                                                    }};
                                                    usageRate = 2959.5;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "modi";
                                                    }};
                                                    usageRate = 9292.92;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "Joel Cruickshank";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "Edmund Sawayn";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "reiciendis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sint";
                                                    }};
                                                    usageRate = 4724.14;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "esse";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "odio";
                                                    }};
                                                    usageRate = 2027.96;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "debitis";
                                                    }};
                                                    usageRate = 4235.88;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "Dana Hirthe";
                                    }};
                                    storageClass = "reprehenderit";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "distinctio";
                                        acceleratorType = "eius";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ipsa";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "maiores";
                                                    }};
                                                    usageRate = 351.6;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "veniam";
                                                    }};
                                                    usageRate = 9062.32;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "neque";
                                                    }};
                                                    usageRate = 8163.65;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]{{
                                        add("quos"),
                                        add("doloribus"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "fugiat";
                                            memorySizeGb = 6685.77;
                                            virtualCpuCount = "delectus";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "velit";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "nesciunt";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "illo";
                                                            }};
                                                            usageRate = 9979.95;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "nemo";
                                                            }};
                                                            usageRate = 9878.9;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "possimus";
                                                            }};
                                                            usageRate = 6033.23;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "incidunt";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "explicabo";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "cupiditate";
                                                            }};
                                                            usageRate = 7614.37;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "alias";
                                                            }};
                                                            usageRate = 6959.47;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_UNSPECIFIED;
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "commodi";
                                }};
                                name = "Bobby Harris";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = PremiumTierEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_EASTERN_EUROPE;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ut";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "tenetur";
                                                    }};
                                                    usageRate = 2367.9;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "libero";
                                                    }};
                                                    usageRate = 4483.86;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "minima";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ex";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ab";
                                                    }};
                                                    usageRate = 1081.65;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "hic";
                                                    }};
                                                    usageRate = 3923.19;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quisquam";
                                                    }};
                                                    usageRate = 2212.18;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ducimus";
                                                    }};
                                                    usageRate = 6837.27;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "minima";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "architecto";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "qui";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "magni";
                                                        }};
                                                        usageRate = 2766.5;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "adipisci";
                                                        }};
                                                        usageRate = 5063.43;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        sourceRegion = "dolor";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "exercitationem";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "facilis";
                                                        }};
                                                        usageRate = 7696.34;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "sit";
                                                        }};
                                                        usageRate = 3634.82;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "culpa";
                                                        }};
                                                        usageRate = 1593.93;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }}),
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = CloudCdnEgressWorkloadCacheEgressDestinationEnum.CACHE_EGRESS_DESTINATION_ASIA_PACIFIC;
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "deserunt";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "veniam";
                                                    }};
                                                    usageRate = 8002.56;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "itaque";
                                                    }};
                                                    usageRate = 9555.69;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = CloudCdnWorkloadCacheFillOriginServiceEnum.CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE;
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "enim";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "assumenda";
                                                    }};
                                                    usageRate = 8873.63;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "architecto";
                                                    }};
                                                    usageRate = 53.15;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "culpa";
                                                    }};
                                                    usageRate = 603.35;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nobis";
                                                    }};
                                                    usageRate = 8981.93;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = CacheFillRegionsDestinationRegionEnum.CACHE_FILL_DESTINATION_REGION_ASIA_PACIFIC;
                                        sourceRegion = CacheFillRegionsSourceRegionEnum.CACHE_FILL_SOURCE_REGION_UNSPECIFIED;
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "vel";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "debitis";
                                                    }};
                                                    usageRate = 3548.21;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "architecto";
                                                    }};
                                                    usageRate = 337.71;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "perferendis";
                                                    }};
                                                    usageRate = 828.76;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "provident";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "iure";
                                                    }};
                                                    usageRate = 8424.02;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quod";
                                                    }};
                                                    usageRate = 3632.24;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "recusandae";
                                                    }};
                                                    usageRate = 2467.72;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "magnam";
                                                    }};
                                                    usageRate = 4935.91;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum.INTERCONNECT_CONNECTION_LOCATION_EUROPE;
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS500_M;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "natus";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "cum";
                                                            }};
                                                            usageRate = 9838.54;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "facilis";
                                                            }};
                                                            usageRate = 6973.3;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "itaque";
                                                            }};
                                                            usageRate = 3895.48;
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
                                            unit = "perspiciatis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "cum";
                                                    }};
                                                    usageRate = 1355.48;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "libero";
                                                    }};
                                                    usageRate = 7202.66;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "incidunt";
                                                    }};
                                                    usageRate = 9253.95;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quod";
                                                    }};
                                                    usageRate = 6646.66;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = CloudStorageEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_SOUTH_AMERICA;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "autem";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nesciunt";
                                                    }};
                                                    usageRate = 8493.83;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nemo";
                                                    }};
                                                    usageRate = 8487.22;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "facilis";
                                                    }};
                                                    usageRate = 2476.18;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "mollitia";
                                                    }};
                                                    usageRate = 8270.51;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = CloudStorageEgressWorkloadSourceContinentEnum.SOURCE_CONTINENT_SOUTH_AMERICA;
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "distinctio";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ad";
                                                    }};
                                                    usageRate = 8161.51;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "laborum";
                                                    }};
                                                    usageRate = 9114.51;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "laborum";
                                                    }};
                                                    usageRate = 2763.37;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "maxime";
                                                    }};
                                                    usageRate = 3695.23;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "alias";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "deserunt";
                                                    }};
                                                    usageRate = 5604.51;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "laborum";
                                                    }};
                                                    usageRate = 6682.18;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "Mr. Leroy Sanford";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "Gail Roob";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "officiis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nulla";
                                                    }};
                                                    usageRate = 6213.93;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "mollitia";
                                                    }};
                                                    usageRate = 2986.13;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nostrum";
                                                    }};
                                                    usageRate = 4609.09;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "corrupti";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "facere";
                                                    }};
                                                    usageRate = 7736.59;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quasi";
                                                    }};
                                                    usageRate = 6472.18;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quod";
                                                    }};
                                                    usageRate = 3857.39;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "Sandra Schumm";
                                    }};
                                    storageClass = "consequatur";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "eaque";
                                        acceleratorType = "architecto";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "similique";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "blanditiis";
                                                    }};
                                                    usageRate = 608.92;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "magni";
                                                    }};
                                                    usageRate = 8857.97;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sed";
                                                    }};
                                                    usageRate = 8981.11;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "impedit";
                                                    }};
                                                    usageRate = 559.81;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]{{
                                        add("a"),
                                        add("maiores"),
                                        add("laudantium"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "maiores";
                                            memorySizeGb = 6.91;
                                            virtualCpuCount = "asperiores";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "rem";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "suscipit";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "doloribus";
                                                            }};
                                                            usageRate = 2445.69;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "eius";
                                                            }};
                                                            usageRate = 4582.12;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "in";
                                                            }};
                                                            usageRate = 7574.07;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quasi";
                                                            }};
                                                            usageRate = 2036.21;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "vero";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "excepturi";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "qui";
                                                            }};
                                                            usageRate = 7712.41;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_UNSPECIFIED;
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "incidunt";
                                }};
                                name = "Christina Herzog V";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = PremiumTierEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_CENTRAL_AMERICA;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "accusantium";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "laboriosam";
                                                    }};
                                                    usageRate = 4016.88;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quas";
                                                    }};
                                                    usageRate = 857.94;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ullam";
                                                    }};
                                                    usageRate = 626.88;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "similique";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "incidunt";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "magni";
                                                    }};
                                                    usageRate = 6463.29;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "delectus";
                                                    }};
                                                    usageRate = 6095.37;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "sed";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "nesciunt";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "maxime";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "cupiditate";
                                                        }};
                                                        usageRate = 3032.53;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "excepturi";
                                                        }};
                                                        usageRate = 9804.1;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        sourceRegion = "laudantium";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "velit";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "amet";
                                                        }};
                                                        usageRate = 3638.45;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "ipsa";
                                                        }};
                                                        usageRate = 7879.16;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "tenetur";
                                                        }};
                                                        usageRate = 5552.94;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "molestiae";
                                                        }};
                                                        usageRate = 3956.34;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }}),
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = CloudCdnEgressWorkloadCacheEgressDestinationEnum.CACHE_EGRESS_DESTINATION_OTHER_DESTINATIONS;
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "a";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "perspiciatis";
                                                    }};
                                                    usageRate = 342.45;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dicta";
                                                    }};
                                                    usageRate = 7955.46;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "commodi";
                                                    }};
                                                    usageRate = 9087.34;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = CloudCdnWorkloadCacheFillOriginServiceEnum.CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE;
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "tempore";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "modi";
                                                    }};
                                                    usageRate = 9163.41;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "fugit";
                                                    }};
                                                    usageRate = 2593.77;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sequi";
                                                    }};
                                                    usageRate = 7581.94;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = CacheFillRegionsDestinationRegionEnum.CACHE_FILL_DESTINATION_REGION_OTHERS;
                                        sourceRegion = CacheFillRegionsSourceRegionEnum.CACHE_FILL_SOURCE_REGION_EUROPE;
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "blanditiis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "repellat";
                                                    }};
                                                    usageRate = 9550.47;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "animi";
                                                    }};
                                                    usageRate = 9792.87;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "itaque";
                                                    }};
                                                    usageRate = 8615.91;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "deserunt";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "velit";
                                                    }};
                                                    usageRate = 8877.01;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "enim";
                                                    }};
                                                    usageRate = 6386.09;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum.INTERCONNECT_CONNECTION_LOCATION_AUSTRALIA;
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS20_G;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "accusantium";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "impedit";
                                                            }};
                                                            usageRate = 978.96;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "blanditiis";
                                                            }};
                                                            usageRate = 2609.11;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quisquam";
                                                            }};
                                                            usageRate = 1779.29;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS5_G;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "natus";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quia";
                                                            }};
                                                            usageRate = 3006.51;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "reprehenderit";
                                                            }};
                                                            usageRate = 8007.99;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quos";
                                                            }};
                                                            usageRate = 5488.46;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "amet";
                                                            }};
                                                            usageRate = 4733.26;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                    }};
                                    interconnectType = CloudInterconnectWorkloadInterconnectTypeEnum.INTERCONNECT_TYPE_UNSPECIFIED;
                                    linkType = CloudInterconnectWorkloadLinkTypeEnum.LINK_TYPE_ETHERNET100_G_LR;
                                    provisionedLinkCount = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "modi";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "necessitatibus";
                                                    }};
                                                    usageRate = 1023.16;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = CloudStorageEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_EUROPE;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "dolore";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "maiores";
                                                    }};
                                                    usageRate = 2050.11;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = CloudStorageEgressWorkloadSourceContinentEnum.SOURCE_CONTINENT_UNSPECIFIED;
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "earum";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ipsam";
                                                    }};
                                                    usageRate = 510.53;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "exercitationem";
                                                    }};
                                                    usageRate = 3312.69;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "nihil";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nisi";
                                                    }};
                                                    usageRate = 9468.08;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quis";
                                                    }};
                                                    usageRate = 8451.54;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "Miss Laurie Streich";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "Amelia Williamson";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "repellat";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "architecto";
                                                    }};
                                                    usageRate = 2406.96;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "pariatur";
                                                    }};
                                                    usageRate = 6884.63;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolore";
                                                    }};
                                                    usageRate = 9767.62;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "iure";
                                                    }};
                                                    usageRate = 1270.87;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "minus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorum";
                                                    }};
                                                    usageRate = 2425.31;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "earum";
                                                    }};
                                                    usageRate = 5100.2;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "error";
                                                    }};
                                                    usageRate = 2524.73;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "Iris Torp";
                                    }};
                                    storageClass = "doloremque";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "expedita";
                                        acceleratorType = "corrupti";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "eaque";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "aliquid";
                                                    }};
                                                    usageRate = 5704.23;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "magni";
                                                    }};
                                                    usageRate = 2736.77;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "possimus";
                                                    }};
                                                    usageRate = 2208.24;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]{{
                                        add("sed"),
                                        add("accusamus"),
                                        add("optio"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "delectus";
                                            memorySizeGb = 7927.19;
                                            virtualCpuCount = "quo";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "quos";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "voluptatum";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "corporis";
                                                            }};
                                                            usageRate = 371.29;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "illo";
                                                            }};
                                                            usageRate = 142.51;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "doloribus";
                                                            }};
                                                            usageRate = 3421.04;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "at";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "possimus";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "pariatur";
                                                            }};
                                                            usageRate = 4248.53;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_REGIONAL;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "mollitia";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quos";
                                                            }};
                                                            usageRate = 445.71;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "non";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "voluptates";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aliquam";
                                                            }};
                                                            usageRate = 7881.65;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quas";
                                                            }};
                                                            usageRate = 1624.5;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_REGIONAL;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "inventore";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "laudantium";
                                                            }};
                                                            usageRate = 6658.72;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "dolor";
                                                            }};
                                                            usageRate = 4008.79;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "consectetur";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "cumque";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "voluptatum";
                                                            }};
                                                            usageRate = 4985.34;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "adipisci";
                                                            }};
                                                            usageRate = 9279.59;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "tempora";
                                                            }};
                                                            usageRate = 5034.49;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_UNSPECIFIED;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "sequi";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "sit";
                                                            }};
                                                            usageRate = 7031.89;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "veritatis";
                                                            }};
                                                            usageRate = 9492.8;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "autem";
                                                            }};
                                                            usageRate = 6940.88;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "totam";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "porro";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "magni";
                                                            }};
                                                            usageRate = 4712.07;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "voluptas";
                                                            }};
                                                            usageRate = 6581.99;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "commodi";
                                                            }};
                                                            usageRate = 7.16;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_REGIONAL;
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "aut";
                                }};
                                name = "Jody Gutmann";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = PremiumTierEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_EMEA;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "placeat";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "occaecati";
                                                    }};
                                                    usageRate = 6009.34;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "illo";
                                                    }};
                                                    usageRate = 4691.7;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "inventore";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "libero";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quasi";
                                                    }};
                                                    usageRate = 7665.91;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dicta";
                                                    }};
                                                    usageRate = 6886.84;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "facere";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "facilis";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "beatae";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "delectus";
                                                        }};
                                                        usageRate = 2871.52;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "expedita";
                                                        }};
                                                        usageRate = 5482.56;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "rem";
                                                        }};
                                                        usageRate = 5433.53;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "officiis";
                                                        }};
                                                        usageRate = 7396.33;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        sourceRegion = "pariatur";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "sapiente";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "incidunt";
                                                        }};
                                                        usageRate = 7972.93;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "minus";
                                                        }};
                                                        usageRate = 7814.91;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "id";
                                                        }};
                                                        usageRate = 5697.06;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "occaecati";
                                                        }};
                                                        usageRate = 7268.51;
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
                accessToken = "quo";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "maxime";
                key = "accusantium";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "pariatur";
                uploadProtocol = "eligendi";
            }};            

            CloudbillingEstimateCostScenarioResponse res = sdk.v1beta.cloudbillingEstimateCostScenario(req, new CloudbillingEstimateCostScenarioSecurity() {{
                option1 = new CloudbillingEstimateCostScenarioSecurityOption1("recusandae", "veritatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.estimateCostScenarioWithListPriceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
