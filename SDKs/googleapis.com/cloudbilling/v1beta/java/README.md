# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            CloudbillingBillingAccountsEstimateCostScenarioRequest req = new CloudbillingBillingAccountsEstimateCostScenarioRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                estimateCostScenarioForBillingAccountRequest = new EstimateCostScenarioForBillingAccountRequest() {{
                    costScenario = new CostScenario() {{
                        commitments = new org.openapis.openapi.models.shared.Commitment[]{{
                            add(new Commitment() {{
                                name = "Stuart Stiedemann";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "vel";
                                        acceleratorType = "error";
                                    }};
                                    machineSeries = "deserunt";
                                    memorySizeGb = 3843.82;
                                    plan = VmResourceBasedCudPlanEnum.TWELVE_MONTH;
                                    region = "magnam";
                                    virtualCpuCount = "debitis";
                                }};
                            }}),
                            add(new Commitment() {{
                                name = "Lucia Goldner";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "minus";
                                        acceleratorType = "placeat";
                                    }};
                                    machineSeries = "voluptatum";
                                    memorySizeGb = 4799.77;
                                    plan = VmResourceBasedCudPlanEnum.TWELVE_MONTH;
                                    region = "nisi";
                                    virtualCpuCount = "recusandae";
                                }};
                            }}),
                            add(new Commitment() {{
                                name = "Miss Raymond Hauck III";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "repellendus";
                                        acceleratorType = "sapiente";
                                    }};
                                    machineSeries = "quo";
                                    memorySizeGb = 1403.5;
                                    plan = VmResourceBasedCudPlanEnum.THIRTY_SIX_MONTH;
                                    region = "at";
                                    virtualCpuCount = "maiores";
                                }};
                            }}),
                        }};
                        scenarioConfig = new ScenarioConfig() {{
                            estimateDuration = "molestiae";
                        }};;
                        workloads = new org.openapis.openapi.models.shared.Workload[]{{
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = CloudCdnEgressWorkloadCacheEgressDestinationEnum.CACHE_EGRESS_DESTINATION_LATIN_AMERICA;
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "esse";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "porro";
                                                    }};
                                                    usageRate = 6788.8;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dicta";
                                                    }};
                                                    usageRate = 7206.33;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "officia";
                                                    }};
                                                    usageRate = 5820.2;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = CloudCdnWorkloadCacheFillOriginServiceEnum.CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED;
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "deleniti";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "optio";
                                                    }};
                                                    usageRate = 5218.48;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "beatae";
                                                    }};
                                                    usageRate = 4146.62;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "molestiae";
                                                    }};
                                                    usageRate = 2645.55;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "qui";
                                                    }};
                                                    usageRate = 7742.34;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = CacheFillRegionsDestinationRegionEnum.CACHE_FILL_DESTINATION_REGION_SOUTH_AMERICA;
                                        sourceRegion = CacheFillRegionsSourceRegionEnum.CACHE_FILL_SOURCE_REGION_EUROPE;
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ipsum";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "aspernatur";
                                                    }};
                                                    usageRate = 187.89;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ad";
                                                    }};
                                                    usageRate = 6176.36;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sed";
                                                    }};
                                                    usageRate = 6120.96;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "dolor";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "laboriosam";
                                                    }};
                                                    usageRate = 9437.49;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "saepe";
                                                    }};
                                                    usageRate = 6818.2;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "in";
                                                    }};
                                                    usageRate = 3595.08;
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
                                                    unit = "quidem";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ipsa";
                                                            }};
                                                            usageRate = 9698.1;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS2_G;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "mollitia";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "dolores";
                                                            }};
                                                            usageRate = 2103.82;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "corporis";
                                                            }};
                                                            usageRate = 1289.26;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "nobis";
                                                            }};
                                                            usageRate = 3154.28;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                    }};
                                    interconnectType = CloudInterconnectWorkloadInterconnectTypeEnum.INTERCONNECT_TYPE_DEDICATED;
                                    linkType = CloudInterconnectWorkloadLinkTypeEnum.LINK_TYPE_ETHERNET10_G_LR;
                                    provisionedLinkCount = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "minima";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "accusantium";
                                                    }};
                                                    usageRate = 4386.01;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "culpa";
                                                    }};
                                                    usageRate = 9883.74;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sapiente";
                                                    }};
                                                    usageRate = 1020.44;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = CloudStorageEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_EUROPE;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "dolorem";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "consequuntur";
                                                    }};
                                                    usageRate = 9953;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "mollitia";
                                                    }};
                                                    usageRate = 5818.5;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "numquam";
                                                    }};
                                                    usageRate = 4143.69;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = CloudStorageEgressWorkloadSourceContinentEnum.SOURCE_CONTINENT_AUSTRALIA;
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "molestiae";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "error";
                                                    }};
                                                    usageRate = 1589.69;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "quis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "laborum";
                                                    }};
                                                    usageRate = 6563.3;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "Christina Satterfield";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "Mr. Alberta Schuster";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "temporibus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quasi";
                                                    }};
                                                    usageRate = 9719.45;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "voluptatibus";
                                                    }};
                                                    usageRate = 8781.94;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nihil";
                                                    }};
                                                    usageRate = 5096.24;
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
                                                        estimationTimeFrameOffset = "omnis";
                                                    }};
                                                    usageRate = 4511.59;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "Thomas Batz";
                                    }};
                                    storageClass = "maiores";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "dicta";
                                        acceleratorType = "corporis";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "dolore";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dicta";
                                                    }};
                                                    usageRate = 6886.61;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "enim";
                                                    }};
                                                    usageRate = 8804.76;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]{{
                                        add("repudiandae"),
                                        add("quae"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "ipsum";
                                            memorySizeGb = 6924.72;
                                            virtualCpuCount = "molestias";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "excepturi";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "modi";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "rem";
                                                            }};
                                                            usageRate = 9167.23;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quasi";
                                                            }};
                                                            usageRate = 9211.58;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "sint";
                                                            }};
                                                            usageRate = 831.12;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "itaque";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "incidunt";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "consequatur";
                                                            }};
                                                            usageRate = 6674.11;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quibusdam";
                                                            }};
                                                            usageRate = 1317.97;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_ZONAL;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "distinctio";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "labore";
                                                            }};
                                                            usageRate = 2647.3;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "qui";
                                                            }};
                                                            usageRate = 3978.21;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "cupiditate";
                                                            }};
                                                            usageRate = 5528.22;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "perferendis";
                                                            }};
                                                            usageRate = 1649.4;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "assumenda";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "ipsam";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "fugit";
                                                            }};
                                                            usageRate = 6778.17;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_ZONAL;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "tempora";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "tempore";
                                                            }};
                                                            usageRate = 2884.76;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "delectus";
                                                            }};
                                                            usageRate = 4332.88;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "non";
                                                            }};
                                                            usageRate = 7561.07;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "sint";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "aliquid";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "necessitatibus";
                                                            }};
                                                            usageRate = 5722.52;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "officia";
                                                            }};
                                                            usageRate = 2230.81;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "debitis";
                                                            }};
                                                            usageRate = 9527.49;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_REGIONAL;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "in";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "illum";
                                                            }};
                                                            usageRate = 9785.71;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "rerum";
                                                            }};
                                                            usageRate = 1162.02;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "magnam";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "cumque";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ea";
                                                            }};
                                                            usageRate = 3965.06;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "laborum";
                                                            }};
                                                            usageRate = 8811.04;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "non";
                                                            }};
                                                            usageRate = 5812.73;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "enim";
                                                            }};
                                                            usageRate = 8817.36;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_REGIONAL;
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "quidem";
                                }};
                                name = "Marco Olson";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = PremiumTierEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_SOUTH_AMERICA;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "amet";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nisi";
                                                    }};
                                                    usageRate = 4238.55;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "natus";
                                                    }};
                                                    usageRate = 6063.93;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "molestiae";
                                                    }};
                                                    usageRate = 191.93;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "nihil";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "magnam";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "id";
                                                    }};
                                                    usageRate = 2879.91;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "labore";
                                                    }};
                                                    usageRate = 3834.62;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "natus";
                                                    }};
                                                    usageRate = 7491.7;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "eum";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "vero";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "aspernatur";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "magnam";
                                                        }};
                                                        usageRate = 923.73;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        sourceRegion = "excepturi";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "ullam";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "quos";
                                                        }};
                                                        usageRate = 5743.25;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "accusantium";
                                                        }};
                                                        usageRate = 6532.01;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "reiciendis";
                                                        }};
                                                        usageRate = 6521.03;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }}),
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = CloudCdnEgressWorkloadCacheEgressDestinationEnum.CACHE_EGRESS_DESTINATION_CHINA;
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "eum";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "necessitatibus";
                                                    }};
                                                    usageRate = 1412.64;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = CloudCdnWorkloadCacheFillOriginServiceEnum.CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET;
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "quasi";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "doloribus";
                                                    }};
                                                    usageRate = 8919.24;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eius";
                                                    }};
                                                    usageRate = 8061.94;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = CacheFillRegionsDestinationRegionEnum.CACHE_FILL_DESTINATION_REGION_OCEANIA;
                                        sourceRegion = CacheFillRegionsSourceRegionEnum.CACHE_FILL_SOURCE_REGION_OCEANIA;
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "in";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "architecto";
                                                    }};
                                                    usageRate = 9194.83;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ullam";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nihil";
                                                    }};
                                                    usageRate = 9988.48;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quibusdam";
                                                    }};
                                                    usageRate = 1494.48;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "saepe";
                                                    }};
                                                    usageRate = 8681.26;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum.INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED;
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
                                                                estimationTimeFrameOffset = "sunt";
                                                            }};
                                                            usageRate = 7790.51;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                    }};
                                    interconnectType = CloudInterconnectWorkloadInterconnectTypeEnum.INTERCONNECT_TYPE_PARTNER;
                                    linkType = CloudInterconnectWorkloadLinkTypeEnum.LINK_TYPE_ETHERNET100_G_LR;
                                    provisionedLinkCount = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "maxime";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "excepturi";
                                                    }};
                                                    usageRate = 1399.72;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ea";
                                                    }};
                                                    usageRate = 332.22;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = CloudStorageEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_UNSPECIFIED;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "maiores";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ipsam";
                                                    }};
                                                    usageRate = 4535.43;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "autem";
                                                    }};
                                                    usageRate = 7220.56;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eaque";
                                                    }};
                                                    usageRate = 8663.83;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = CloudStorageEgressWorkloadSourceContinentEnum.SOURCE_CONTINENT_AUSTRALIA;
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "voluptatibus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "fugiat";
                                                    }};
                                                    usageRate = 2307.42;
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
                                                        estimationTimeFrameOffset = "corporis";
                                                    }};
                                                    usageRate = 9441.24;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "libero";
                                                    }};
                                                    usageRate = 7499.99;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolores";
                                                    }};
                                                    usageRate = 3394.04;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "totam";
                                                    }};
                                                    usageRate = 4895.49;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "Beatrice Dooley Sr.";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "Darryl Fadel";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "hic";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "omnis";
                                                    }};
                                                    usageRate = 7044.15;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "perspiciatis";
                                                    }};
                                                    usageRate = 318.38;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "porro";
                                                    }};
                                                    usageRate = 1646.94;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "blanditiis";
                                                    }};
                                                    usageRate = 6214.79;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "eaque";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "rerum";
                                                    }};
                                                    usageRate = 2378.93;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "asperiores";
                                                    }};
                                                    usageRate = 9342.14;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "modi";
                                                    }};
                                                    usageRate = 6139.66;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "Casey Stracke";
                                    }};
                                    storageClass = "libero";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "delectus";
                                        acceleratorType = "quaerat";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "quos";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorem";
                                                    }};
                                                    usageRate = 2098.43;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolor";
                                                    }};
                                                    usageRate = 1861.93;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]{{
                                        add("hic"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "excepturi";
                                            memorySizeGb = 7395.51;
                                            virtualCpuCount = "voluptate";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "dignissimos";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "amet";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "numquam";
                                                            }};
                                                            usageRate = 852.95;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ipsa";
                                                            }};
                                                            usageRate = 564.18;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "iure";
                                                            }};
                                                            usageRate = 4878.38;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "quaerat";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "accusamus";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "voluptatibus";
                                                            }};
                                                            usageRate = 3777.52;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "natus";
                                                            }};
                                                            usageRate = 1796.03;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "atque";
                                                            }};
                                                            usageRate = 246.78;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_REGIONAL;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "ab";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "dolorum";
                                                            }};
                                                            usageRate = 4785.96;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "voluptate";
                                                            }};
                                                            usageRate = 6770.82;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "deleniti";
                                                            }};
                                                            usageRate = 6070.45;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "necessitatibus";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "distinctio";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "nihil";
                                                            }};
                                                            usageRate = 2168.97;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "voluptate";
                                                            }};
                                                            usageRate = 6630.78;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "saepe";
                                                            }};
                                                            usageRate = 2633.22;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aspernatur";
                                                            }};
                                                            usageRate = 206.51;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_UNSPECIFIED;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "optio";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ad";
                                                            }};
                                                            usageRate = 9044.25;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "suscipit";
                                                            }};
                                                            usageRate = 6457.85;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "provident";
                                                            }};
                                                            usageRate = 3246.83;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "repellendus";
                                                            }};
                                                            usageRate = 5197.11;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "similique";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "alias";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quaerat";
                                                            }};
                                                            usageRate = 2735.42;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "vel";
                                                            }};
                                                            usageRate = 7980.47;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "officiis";
                                                            }};
                                                            usageRate = 1856.36;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "dolorum";
                                                            }};
                                                            usageRate = 9527.92;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_ZONAL;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "harum";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ipsum";
                                                            }};
                                                            usageRate = 7887.4;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "tenetur";
                                                            }};
                                                            usageRate = 2294.42;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "tempore";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "accusamus";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "enim";
                                                            }};
                                                            usageRate = 2133.12;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "sapiente";
                                                            }};
                                                            usageRate = 5182.01;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_ZONAL;
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "sit";
                                }};
                                name = "Luis Cremin";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = PremiumTierEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_AUTRALIA;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "deserunt";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ipsum";
                                                    }};
                                                    usageRate = 2776.28;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "qui";
                                                    }};
                                                    usageRate = 5867.84;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "maxime";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "pariatur";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dicta";
                                                    }};
                                                    usageRate = 6748.48;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "totam";
                                                    }};
                                                    usageRate = 2768.94;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "aspernatur";
                                                    }};
                                                    usageRate = 1749.09;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "distinctio";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "facilis";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "aliquid";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "molestias";
                                                        }};
                                                        usageRate = 8404.29;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "qui";
                                                        }};
                                                        usageRate = 2048.65;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        sourceRegion = "fugit";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "magni";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "sunt";
                                                        }};
                                                        usageRate = 3556.13;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "nam";
                                                        }};
                                                        usageRate = 9404.32;
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
                                            unit = "cumque";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nobis";
                                                    }};
                                                    usageRate = 925.96;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "saepe";
                                                    }};
                                                    usageRate = 2174.5;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "veritatis";
                                                    }};
                                                    usageRate = 7492.55;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = CloudCdnWorkloadCacheFillOriginServiceEnum.CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET;
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "tempore";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "aperiam";
                                                    }};
                                                    usageRate = 9619.37;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorem";
                                                    }};
                                                    usageRate = 2921.47;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "labore";
                                                    }};
                                                    usageRate = 2408.29;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = CacheFillRegionsDestinationRegionEnum.CACHE_FILL_DESTINATION_REGION_SOUTH_AMERICA;
                                        sourceRegion = CacheFillRegionsSourceRegionEnum.CACHE_FILL_SOURCE_REGION_UNSPECIFIED;
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "quae";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quas";
                                                    }};
                                                    usageRate = 9295.3;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "consequatur";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "repellendus";
                                                    }};
                                                    usageRate = 7851.53;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "doloribus";
                                                    }};
                                                    usageRate = 2817.3;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "facilis";
                                                    }};
                                                    usageRate = 5864.1;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum.INTERCONNECT_CONNECTION_LOCATION_ASIA;
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS500_M;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "odio";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "voluptatibus";
                                                            }};
                                                            usageRate = 7875.42;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "vero";
                                                            }};
                                                            usageRate = 6064.76;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quis";
                                                            }};
                                                            usageRate = 2184.03;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                    }};
                                    interconnectType = CloudInterconnectWorkloadInterconnectTypeEnum.INTERCONNECT_TYPE_PARTNER;
                                    linkType = CloudInterconnectWorkloadLinkTypeEnum.LINK_TYPE_ETHERNET10_G_LR;
                                    provisionedLinkCount = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "consectetur";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "tenetur";
                                                    }};
                                                    usageRate = 4922.68;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "hic";
                                                    }};
                                                    usageRate = 7155.61;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quod";
                                                    }};
                                                    usageRate = 4861.6;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "similique";
                                                    }};
                                                    usageRate = 7085.48;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = CloudStorageEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_SOUTH_AMERICA;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ducimus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quibusdam";
                                                    }};
                                                    usageRate = 8489.44;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sequi";
                                                    }};
                                                    usageRate = 6178.77;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = CloudStorageEgressWorkloadSourceContinentEnum.SOURCE_CONTINENT_NORTH_AMERICA;
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "aut";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "exercitationem";
                                                    }};
                                                    usageRate = 8623.1;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "fugit";
                                                    }};
                                                    usageRate = 7804.27;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "maiores";
                                                    }};
                                                    usageRate = 9850.33;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "iusto";
                                                    }};
                                                    usageRate = 7535.7;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ducimus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "officia";
                                                    }};
                                                    usageRate = 2694.79;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "Terri Collins";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "Paula Jacobs I";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "maiores";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ex";
                                                    }};
                                                    usageRate = 8621.92;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "excepturi";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nostrum";
                                                    }};
                                                    usageRate = 9608.35;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quisquam";
                                                    }};
                                                    usageRate = 9065.56;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ea";
                                                    }};
                                                    usageRate = 7740.48;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "corporis";
                                                    }};
                                                    usageRate = 3331.45;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "Stephanie Gutkowski";
                                    }};
                                    storageClass = "consectetur";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "recusandae";
                                        acceleratorType = "aspernatur";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "minima";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "a";
                                                    }};
                                                    usageRate = 7255.95;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]{{
                                        add("aut"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "deleniti";
                                            memorySizeGb = 7705.81;
                                            virtualCpuCount = "aliquam";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "fugit";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "inventore";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "et";
                                                            }};
                                                            usageRate = 6774.12;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "laborum";
                                                            }};
                                                            usageRate = 8104.24;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "velit";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "eum";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "nobis";
                                                            }};
                                                            usageRate = 5573.69;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "assumenda";
                                                            }};
                                                            usageRate = 8605.52;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_ZONAL;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "libero";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "tempora";
                                                            }};
                                                            usageRate = 2561.39;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "explicabo";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "provident";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "molestiae";
                                                            }};
                                                            usageRate = 3015.98;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_ZONAL;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "eius";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "esse";
                                                            }};
                                                            usageRate = 5245.93;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "fuga";
                                                            }};
                                                            usageRate = 4420.15;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "quidem";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "fugiat";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "eum";
                                                            }};
                                                            usageRate = 3799.27;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "assumenda";
                                                            }};
                                                            usageRate = 1811.51;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_ZONAL;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "quisquam";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ipsa";
                                                            }};
                                                            usageRate = 6600.4;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "quidem";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "neque";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "illum";
                                                            }};
                                                            usageRate = 7774.08;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "fuga";
                                                            }};
                                                            usageRate = 2594.22;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "eos";
                                                            }};
                                                            usageRate = 3738.13;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ab";
                                                            }};
                                                            usageRate = 5876;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_UNSPECIFIED;
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "tempora";
                                }};
                                name = "Roberto Collier";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = PremiumTierEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_CENTRAL_AMERICA;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "recusandae";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "distinctio";
                                                    }};
                                                    usageRate = 7997.96;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "dignissimos";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "inventore";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "totam";
                                                    }};
                                                    usageRate = 8827.1;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "aliquam";
                                                    }};
                                                    usageRate = 4884.1;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "occaecati";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "commodi";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "sapiente";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "deserunt";
                                                        }};
                                                        usageRate = 4752.89;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        sourceRegion = "accusantium";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "porro";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "quas";
                                                        }};
                                                        usageRate = 5100.17;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "consequuntur";
                                                        }};
                                                        usageRate = 5361.78;
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
                                            unit = "fuga";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "incidunt";
                                                    }};
                                                    usageRate = 5392.24;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "explicabo";
                                                    }};
                                                    usageRate = 3256.85;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nisi";
                                                    }};
                                                    usageRate = 1470.14;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = CloudCdnWorkloadCacheFillOriginServiceEnum.CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE;
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "consequuntur";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "explicabo";
                                                    }};
                                                    usageRate = 9039.84;
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
                                            unit = "et";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eveniet";
                                                    }};
                                                    usageRate = 8820.42;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "veritatis";
                                                    }};
                                                    usageRate = 4586.04;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "quod";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "vero";
                                                    }};
                                                    usageRate = 3990.25;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quasi";
                                                    }};
                                                    usageRate = 9040.45;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "vel";
                                                    }};
                                                    usageRate = 6900.25;
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
                                                    unit = "minima";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "eligendi";
                                                            }};
                                                            usageRate = 270.69;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "culpa";
                                                            }};
                                                            usageRate = 7313.98;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "adipisci";
                                                            }};
                                                            usageRate = 7669.64;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS100_M;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "consequatur";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quaerat";
                                                            }};
                                                            usageRate = 9591.67;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "consectetur";
                                                            }};
                                                            usageRate = 4581.39;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "blanditiis";
                                                            }};
                                                            usageRate = 5909.84;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "a";
                                                            }};
                                                            usageRate = 8577.23;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = VlanAttachmentBandwidthEnum.BANDWIDTH_BPS1_G;
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "esse";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "a";
                                                            }};
                                                            usageRate = 6216.79;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                    }};
                                    interconnectType = CloudInterconnectWorkloadInterconnectTypeEnum.INTERCONNECT_TYPE_DEDICATED;
                                    linkType = CloudInterconnectWorkloadLinkTypeEnum.LINK_TYPE_ETHERNET100_G_LR;
                                    provisionedLinkCount = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "possimus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eveniet";
                                                    }};
                                                    usageRate = 9924.3;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = CloudStorageEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_NORTH_AMERICA;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "veritatis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quasi";
                                                    }};
                                                    usageRate = 6288.99;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = CloudStorageEgressWorkloadSourceContinentEnum.SOURCE_CONTINENT_EUROPE;
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "aliquid";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quae";
                                                    }};
                                                    usageRate = 9367.47;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "vel";
                                                    }};
                                                    usageRate = 4473.78;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eius";
                                                    }};
                                                    usageRate = 7276.97;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "illum";
                                                    }};
                                                    usageRate = 7422.38;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "accusantium";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sapiente";
                                                    }};
                                                    usageRate = 1197.71;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ullam";
                                                    }};
                                                    usageRate = 4438.79;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "Alma Armstrong";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "Marc Leuschke";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "architecto";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "tenetur";
                                                    }};
                                                    usageRate = 984.78;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "at";
                                                    }};
                                                    usageRate = 920.27;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "voluptate";
                                                    }};
                                                    usageRate = 559.65;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "minima";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "consectetur";
                                                    }};
                                                    usageRate = 2371.73;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "Lionel Bartoletti IV";
                                    }};
                                    storageClass = "eum";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "mollitia";
                                        acceleratorType = "ab";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "corrupti";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "voluptatem";
                                                    }};
                                                    usageRate = 2211.61;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "occaecati";
                                                    }};
                                                    usageRate = 2531.91;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]{{
                                        add("explicabo"),
                                        add("voluptas"),
                                        add("aut"),
                                        add("dignissimos"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "dicta";
                                            memorySizeGb = 9816.4;
                                            virtualCpuCount = "natus";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "velit";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "voluptas";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aperiam";
                                                            }};
                                                            usageRate = 4090.54;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quaerat";
                                                            }};
                                                            usageRate = 1629.54;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "repellendus";
                                                            }};
                                                            usageRate = 6387.62;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "maxime";
                                                            }};
                                                            usageRate = 4903.05;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "officia";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "asperiores";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quae";
                                                            }};
                                                            usageRate = 3127.53;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "porro";
                                                            }};
                                                            usageRate = 8018.36;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_UNSPECIFIED;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "ab";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "fuga";
                                                            }};
                                                            usageRate = 6625.05;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "suscipit";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "velit";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "est";
                                                            }};
                                                            usageRate = 9268.8;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "totam";
                                                            }};
                                                            usageRate = 8539.4;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "vel";
                                                            }};
                                                            usageRate = 4976.78;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_ZONAL;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "vel";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "possimus";
                                                            }};
                                                            usageRate = 7065.75;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "cum";
                                                            }};
                                                            usageRate = 4148.57;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "in";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "corporis";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "assumenda";
                                                            }};
                                                            usageRate = 3631.61;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "recusandae";
                                                            }};
                                                            usageRate = 3975.33;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aperiam";
                                                            }};
                                                            usageRate = 7386.83;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "consectetur";
                                                            }};
                                                            usageRate = 4490.83;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_ZONAL;
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "earum";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "numquam";
                                                            }};
                                                            usageRate = 9854.92;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "suscipit";
                                                            }};
                                                            usageRate = 9689.72;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quidem";
                                                            }};
                                                            usageRate = 9049.49;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "necessitatibus";
                                                            }};
                                                            usageRate = 2965.56;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "sunt";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "asperiores";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "non";
                                                            }};
                                                            usageRate = 2282.63;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = PersistentDiskScopeEnum.SCOPE_UNSPECIFIED;
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "dignissimos";
                                }};
                                name = "Doyle Feest";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = PremiumTierEgressWorkloadDestinationContinentEnum.DESTINATION_CONTINENT_CENTRAL_AMERICA;
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ipsa";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "libero";
                                                    }};
                                                    usageRate = 1138.16;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "accusamus";
                                                    }};
                                                    usageRate = 6311.26;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "tempora";
                                                    }};
                                                    usageRate = 1328.15;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "voluptas";
                                                    }};
                                                    usageRate = 3742.44;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "voluptas";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "minima";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorum";
                                                    }};
                                                    usageRate = 2378.07;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "minus";
                                                    }};
                                                    usageRate = 1718.53;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "blanditiis";
                                                    }};
                                                    usageRate = 4492.92;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "dolore";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "aliquam";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "officiis";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "ullam";
                                                        }};
                                                        usageRate = 2377.42;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "cum";
                                                        }};
                                                        usageRate = 5023.89;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "quas";
                                                        }};
                                                        usageRate = 9425.84;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "nesciunt";
                                                        }};
                                                        usageRate = 6339.98;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        sourceRegion = "corrupti";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "pariatur";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "hic";
                                                        }};
                                                        usageRate = 3487.83;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "nobis";
                                                        }};
                                                        usageRate = 246.19;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "rerum";
                                                        }};
                                                        usageRate = 1488.29;
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
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "facilis";
                key = "voluptate";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "iste";
                uploadProtocol = "dolore";
            }};            

            CloudbillingBillingAccountsEstimateCostScenarioResponse res = sdk.billingAccounts.cloudbillingBillingAccountsEstimateCostScenario(req, new CloudbillingBillingAccountsEstimateCostScenarioSecurity() {{
                option1 = new CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1("laborum", "sed") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [billingAccounts](docs/billingaccounts/README.md)

* [cloudbillingBillingAccountsEstimateCostScenario](docs/billingaccounts/README.md#cloudbillingbillingaccountsestimatecostscenario) - Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

### [v1beta](docs/v1beta/README.md)

* [cloudbillingEstimateCostScenario](docs/v1beta/README.md#cloudbillingestimatecostscenario) - Estimate list prices using a `CostScenario` without a defined `billingAccount`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
