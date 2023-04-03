<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioSecurity;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioRequest;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EstimateCostScenarioForBillingAccountRequest;
import org.openapis.openapi.models.shared.CostScenario;
import org.openapis.openapi.models.shared.Workload;
import org.openapis.openapi.models.shared.VmToVmEgressWorkload;
import org.openapis.openapi.models.shared.IntraRegionEgress;
import org.openapis.openapi.models.shared.Usage;
import org.openapis.openapi.models.shared.UsageRateTimeline;
import org.openapis.openapi.models.shared.UsageRateTimelineEntry;
import org.openapis.openapi.models.shared.EstimationTimePoint;
import org.openapis.openapi.models.shared.InterRegionEgress;
import org.openapis.openapi.models.shared.StandardTierEgressWorkload;
import org.openapis.openapi.models.shared.PremiumTierEgressWorkloadDestinationContinentEnum;
import org.openapis.openapi.models.shared.PremiumTierEgressWorkload;
import org.openapis.openapi.models.shared.ComputeVmWorkload;
import org.openapis.openapi.models.shared.PersistentDiskScopeEnum;
import org.openapis.openapi.models.shared.PersistentDisk;
import org.openapis.openapi.models.shared.MachineType;
import org.openapis.openapi.models.shared.PredefinedMachineType;
import org.openapis.openapi.models.shared.CustomMachineType;
import org.openapis.openapi.models.shared.GuestAccelerator;
import org.openapis.openapi.models.shared.CloudStorageWorkload;
import org.openapis.openapi.models.shared.Regional;
import org.openapis.openapi.models.shared.MultiRegional;
import org.openapis.openapi.models.shared.DualRegional;
import org.openapis.openapi.models.shared.CloudStorageEgressWorkloadDestinationContinentEnum;
import org.openapis.openapi.models.shared.CloudStorageEgressWorkloadSourceContinentEnum;
import org.openapis.openapi.models.shared.CloudStorageEgressWorkload;
import org.openapis.openapi.models.shared.CloudInterconnectWorkloadInterconnectTypeEnum;
import org.openapis.openapi.models.shared.CloudInterconnectWorkloadLinkTypeEnum;
import org.openapis.openapi.models.shared.CloudInterconnectWorkload;
import org.openapis.openapi.models.shared.VlanAttachmentBandwidthEnum;
import org.openapis.openapi.models.shared.VlanAttachment;
import org.openapis.openapi.models.shared.CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum;
import org.openapis.openapi.models.shared.CloudInterconnectEgressWorkload;
import org.openapis.openapi.models.shared.CloudCdnWorkloadCacheFillOriginServiceEnum;
import org.openapis.openapi.models.shared.CloudCdnWorkload;
import org.openapis.openapi.models.shared.CacheFillRegionsDestinationRegionEnum;
import org.openapis.openapi.models.shared.CacheFillRegionsSourceRegionEnum;
import org.openapis.openapi.models.shared.CacheFillRegions;
import org.openapis.openapi.models.shared.CloudCdnEgressWorkloadCacheEgressDestinationEnum;
import org.openapis.openapi.models.shared.CloudCdnEgressWorkload;
import org.openapis.openapi.models.shared.ScenarioConfig;
import org.openapis.openapi.models.shared.Commitment;
import org.openapis.openapi.models.shared.VmResourceBasedCudPlanEnum;
import org.openapis.openapi.models.shared.VmResourceBasedCud;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingBillingAccountsEstimateCostScenarioRequest req = new CloudbillingBillingAccountsEstimateCostScenarioRequest() {{
                dollarXgafv = "2";
                estimateCostScenarioForBillingAccountRequest = new EstimateCostScenarioForBillingAccountRequest() {{
                    costScenario = new CostScenario() {{
                        commitments = new org.openapis.openapi.models.shared.Commitment[]{{
                            add(new Commitment() {{
                                name = "distinctio";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "quibusdam";
                                        acceleratorType = "unde";
                                    }};
                                    machineSeries = "nulla";
                                    memorySizeGb = 5448.83;
                                    plan = "THIRTY_SIX_MONTH";
                                    region = "vel";
                                    virtualCpuCount = "error";
                                }};
                            }}),
                            add(new Commitment() {{
                                name = "deserunt";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "suscipit";
                                        acceleratorType = "iure";
                                    }};
                                    machineSeries = "magnam";
                                    memorySizeGb = 8917.73;
                                    plan = "COMMITMENT_PLAN_UNSPECIFIED";
                                    region = "delectus";
                                    virtualCpuCount = "tempora";
                                }};
                            }}),
                            add(new Commitment() {{
                                name = "suscipit";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "molestiae";
                                        acceleratorType = "minus";
                                    }};
                                    machineSeries = "placeat";
                                    memorySizeGb = 5288.95;
                                    plan = "TWELVE_MONTH";
                                    region = "excepturi";
                                    virtualCpuCount = "nisi";
                                }};
                            }}),
                        }};
                        scenarioConfig = new ScenarioConfig() {{
                            estimateDuration = "recusandae";
                        }};
                        workloads = new org.openapis.openapi.models.shared.Workload[]{{
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = "CACHE_EGRESS_DESTINATION_UNSPECIFIED";
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "quis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "deserunt";
                                                    }};
                                                    usageRate = 202.18;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = "CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET";
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "repellendus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quo";
                                                    }};
                                                    usageRate = 1403.5;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "at";
                                                    }};
                                                    usageRate = 8700.88;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "maiores";
                                                    }};
                                                    usageRate = 4736.08;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quod";
                                                    }};
                                                    usageRate = 8009.11;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = "CACHE_FILL_DESTINATION_REGION_NORTH_AMERICA";
                                        sourceRegion = "CACHE_FILL_SOURCE_REGION_NORTH_AMERICA";
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "porro";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
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
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "fugit";
                                                    }};
                                                    usageRate = 5373.73;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "hic";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "totam";
                                                    }};
                                                    usageRate = 1059.07;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "commodi";
                                                    }};
                                                    usageRate = 4736;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "modi";
                                                    }};
                                                    usageRate = 1863.32;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "impedit";
                                                    }};
                                                    usageRate = 7369.18;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = "INTERCONNECT_CONNECTION_LOCATION_EUROPE";
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_1G";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "aspernatur";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ad";
                                                            }};
                                                            usageRate = 6176.36;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                    }};
                                    interconnectType = "INTERCONNECT_TYPE_UNSPECIFIED";
                                    linkType = "LINK_TYPE_ETHERNET_10G_LR";
                                    provisionedLinkCount = new Usage() {{
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
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_EUROPE";
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "iure";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quidem";
                                                    }};
                                                    usageRate = 992.8;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ipsa";
                                                    }};
                                                    usageRate = 9698.1;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "est";
                                                    }};
                                                    usageRate = 6531.4;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "laborum";
                                                    }};
                                                    usageRate = 1709.09;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = "SOURCE_CONTINENT_ASIA_PACIFIC";
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "corporis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nobis";
                                                    }};
                                                    usageRate = 3154.28;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "omnis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "minima";
                                                    }};
                                                    usageRate = 5701.97;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "accusantium";
                                                    }};
                                                    usageRate = 4386.01;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "culpa";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "doloribus";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "sapiente";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "mollitia";
                                                    }};
                                                    usageRate = 2088.76;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "culpa";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "repellat";
                                                    }};
                                                    usageRate = 6531.08;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "occaecati";
                                    }};
                                    storageClass = "numquam";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "commodi";
                                        acceleratorType = "quam";
                                    }};
                                    instancesRunning = new Usage() {{
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
                                    licenses = new String[]{{
                                        add("vitae"),
                                        add("laborum"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "animi";
                                            memorySizeGb = 3172.02;
                                            virtualCpuCount = "odit";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "quo";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "tenetur";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "id";
                                                            }};
                                                            usageRate = 8209.94;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aut";
                                                            }};
                                                            usageRate = 971.01;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "error";
                                            provisionedIops = new Usage() {{
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
                                            scope = "SCOPE_REGIONAL";
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "ipsa";
                                }};
                                name = "omnis";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_CENTRAL_AMERICA";
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "cum";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "doloremque";
                                                    }};
                                                    usageRate = 4417.11;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "ut";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "maiores";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "corporis";
                                                    }};
                                                    usageRate = 2961.4;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "iusto";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "dicta";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "harum";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "accusamus";
                                                        }};
                                                        usageRate = 4142.63;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "repudiandae";
                                                        }};
                                                        usageRate = 641.47;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        sourceRegion = "ipsum";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "quidem";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "excepturi";
                                                        }};
                                                        usageRate = 8651.03;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "modi";
                                                        }};
                                                        usageRate = 5089.69;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "rem";
                                                        }};
                                                        usageRate = 9167.23;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }}),
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = "CACHE_EGRESS_DESTINATION_UNSPECIFIED";
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "repudiandae";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "veritatis";
                                                    }};
                                                    usageRate = 9292.97;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "incidunt";
                                                    }};
                                                    usageRate = 3185.69;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "consequatur";
                                                    }};
                                                    usageRate = 6674.11;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = "CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE";
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "explicabo";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "distinctio";
                                                    }};
                                                    usageRate = 8413.86;
                                                }}),
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
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = "CACHE_FILL_DESTINATION_REGION_OCEANIA";
                                        sourceRegion = "CACHE_FILL_SOURCE_REGION_NORTH_AMERICA";
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "perferendis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "assumenda";
                                                    }};
                                                    usageRate = 3698.08;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "alias";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorum";
                                                    }};
                                                    usageRate = 5696.18;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = "INTERCONNECT_CONNECTION_LOCATION_ASIA";
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_5G";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "labore";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "eum";
                                                            }};
                                                            usageRate = 2487.53;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "eligendi";
                                                            }};
                                                            usageRate = 5761.57;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aliquid";
                                                            }};
                                                            usageRate = 5920.42;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "necessitatibus";
                                                            }};
                                                            usageRate = 5722.52;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_2G";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "dolor";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "a";
                                                            }};
                                                            usageRate = 6800.56;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "in";
                                                            }};
                                                            usageRate = 4491.98;
                                                        }}),
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
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_200M";
                                            vlanCount = new Usage() {{
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
                                        }}),
                                    }};
                                    interconnectType = "INTERCONNECT_TYPE_PARTNER";
                                    linkType = "LINK_TYPE_ETHERNET_100G_LR";
                                    provisionedLinkCount = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "provident";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "id";
                                                    }};
                                                    usageRate = 5013.24;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "deleniti";
                                                    }};
                                                    usageRate = 9560.84;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "amet";
                                                    }};
                                                    usageRate = 6439.9;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_AUTRALIA";
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "vel";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "omnis";
                                                    }};
                                                    usageRate = 4748.67;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "perferendis";
                                                    }};
                                                    usageRate = 4701.32;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "magnam";
                                                    }};
                                                    usageRate = 7160.75;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = "SOURCE_CONTINENT_EUROPE";
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "labore";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "suscipit";
                                                    }};
                                                    usageRate = 6180.16;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nobis";
                                                    }};
                                                    usageRate = 4287.69;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "vero";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "architecto";
                                                    }};
                                                    usageRate = 2982.82;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "et";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "excepturi";
                                    }};
                                    operationA = new Usage() {{
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
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ad";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolor";
                                                    }};
                                                    usageRate = 8965.47;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "odit";
                                                    }};
                                                    usageRate = 3675.62;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "quasi";
                                    }};
                                    storageClass = "iure";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "doloribus";
                                        acceleratorType = "debitis";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "eius";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "deleniti";
                                                    }};
                                                    usageRate = 7038.89;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "in";
                                                    }};
                                                    usageRate = 1002.26;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "architecto";
                                                    }};
                                                    usageRate = 9194.83;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ullam";
                                                    }};
                                                    usageRate = 7142.42;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]{{
                                        add("repellat"),
                                        add("quibusdam"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "sed";
                                            memorySizeGb = 9046.48;
                                            virtualCpuCount = "pariatur";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "accusantium";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "praesentium";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "magni";
                                                            }};
                                                            usageRate = 1238.2;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quo";
                                                            }};
                                                            usageRate = 8480.09;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "pariatur";
                                                            }};
                                                            usageRate = 8073.19;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "ea";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "excepturi";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ea";
                                                            }};
                                                            usageRate = 332.22;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = "SCOPE_UNSPECIFIED";
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "maiores";
                                }};
                                name = "quidem";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_AUTRALIA";
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "voluptate";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nam";
                                                    }};
                                                    usageRate = 505.88;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "pariatur";
                                                    }};
                                                    usageRate = 3654.96;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "voluptatibus";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "perferendis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "amet";
                                                    }};
                                                    usageRate = 117.14;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "cumque";
                                                    }};
                                                    usageRate = 3599.78;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "hic";
                                                    }};
                                                    usageRate = 7299.91;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nobis";
                                                    }};
                                                    usageRate = 1716.29;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "quis";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "totam";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "dignissimos";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "quis";
                                                        }};
                                                        usageRate = 1999.96;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        sourceRegion = "eos";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "perferendis";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "minus";
                                                        }};
                                                        usageRate = 4634.51;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }}),
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = "CACHE_EGRESS_DESTINATION_ASIA_PACIFIC";
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "vero";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "hic";
                                                    }};
                                                    usageRate = 9280.82;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "omnis";
                                                    }};
                                                    usageRate = 7044.15;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = "CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET";
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "voluptatem";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "consequuntur";
                                                    }};
                                                    usageRate = 5000.26;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "error";
                                                    }};
                                                    usageRate = 503.7;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "occaecati";
                                                    }};
                                                    usageRate = 6990.98;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "adipisci";
                                                    }};
                                                    usageRate = 9923.97;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = "CACHE_FILL_DESTINATION_REGION_OTHERS";
                                        sourceRegion = "CACHE_FILL_REGION_ASIA_PACIFIC";
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "iste";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "deleniti";
                                                    }};
                                                    usageRate = 8642.82;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "provident";
                                                    }};
                                                    usageRate = 7508.44;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "libero";
                                                    }};
                                                    usageRate = 9644.9;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "quaerat";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "aliquid";
                                                    }};
                                                    usageRate = 2123.9;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorem";
                                                    }};
                                                    usageRate = 2224.43;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "qui";
                                                    }};
                                                    usageRate = 2187.49;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = "INTERCONNECT_CONNECTION_LOCATION_AUSTRALIA";
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_5G";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "voluptate";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "reiciendis";
                                                            }};
                                                            usageRate = 2274.14;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "dolorum";
                                                            }};
                                                            usageRate = 2543.56;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_50M";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "ipsa";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "iure";
                                                            }};
                                                            usageRate = 4878.38;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_300M";
                                            vlanCount = new Usage() {{
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
                                        }}),
                                    }};
                                    interconnectType = "INTERCONNECT_TYPE_PARTNER";
                                    linkType = "LINK_TYPE_UNSPECIFIED";
                                    provisionedLinkCount = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "soluta";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "iusto";
                                                    }};
                                                    usageRate = 4536.97;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorum";
                                                    }};
                                                    usageRate = 5365.79;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "omnis";
                                                    }};
                                                    usageRate = 8966.72;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_NORTH_AMERICA";
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "asperiores";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ipsum";
                                                    }};
                                                    usageRate = 4560.15;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "id";
                                                    }};
                                                    usageRate = 9064.18;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = "SOURCE_CONTINENT_ASIA_PACIFIC";
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "aspernatur";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "amet";
                                                    }};
                                                    usageRate = 7583.79;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "accusamus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "saepe";
                                                    }};
                                                    usageRate = 3834.64;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "deserunt";
                                                    }};
                                                    usageRate = 5883.17;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "minima";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "repellendus";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "totam";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "alias";
                                                    }};
                                                    usageRate = 8726.51;
                                                }}),
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
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "officiis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorum";
                                                    }};
                                                    usageRate = 9527.92;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "esse";
                                    }};
                                    storageClass = "harum";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "iusto";
                                        acceleratorType = "ipsum";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "quisquam";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "amet";
                                                    }};
                                                    usageRate = 7308.56;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "accusamus";
                                                    }};
                                                    usageRate = 2539.41;
                                                }}),
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
                                    licenses = new String[]{{
                                        add("sit"),
                                        add("expedita"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "neque";
                                            memorySizeGb = 1536.94;
                                            virtualCpuCount = "vel";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "libero";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
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
                                            diskType = "maxime";
                                            provisionedIops = new Usage() {{
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
                                            scope = "SCOPE_REGIONAL";
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "facilis";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quam";
                                                            }};
                                                            usageRate = 5654.21;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "temporibus";
                                                            }};
                                                            usageRate = 1832.8;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "neque";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "fugit";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "odio";
                                                            }};
                                                            usageRate = 1248.33;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = "SCOPE_ZONAL";
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "nam";
                                }};
                                name = "hic";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_UNSPECIFIED";
                                    egressRate = new Usage() {{
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
                                    sourceRegion = "quos";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
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
                                    sourceRegion = "dolorum";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "architecto";
                                        egressRate = new Usage() {{
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
                                        sourceRegion = "consequatur";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "est";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "porro";
                                                        }};
                                                        usageRate = 9843.3;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "ut";
                                                        }};
                                                        usageRate = 7034.95;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "cupiditate";
                                                        }};
                                                        usageRate = 1816.31;
                                                    }}),
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "quae";
                                                        }};
                                                        usageRate = 5123.93;
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }}),
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = "CACHE_EGRESS_DESTINATION_EUROPE";
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "occaecati";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quisquam";
                                                    }};
                                                    usageRate = 8765.06;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "omnis";
                                                    }};
                                                    usageRate = 3381.59;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ipsum";
                                                    }};
                                                    usageRate = 9615.71;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "voluptate";
                                                    }};
                                                    usageRate = 2317.01;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = "CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE";
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "tenetur";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
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
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = "CACHE_FILL_DESTINATION_REGION_SOUTH_AMERICA";
                                        sourceRegion = "CACHE_FILL_SOURCE_REGION_OCEANIA";
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "vero";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolore";
                                                    }};
                                                    usageRate = 8445.5;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "illum";
                                                    }};
                                                    usageRate = 1943.42;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "natus";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "aut";
                                                    }};
                                                    usageRate = 9742.59;
                                                }}),
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
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = "INTERCONNECT_CONNECTION_LOCATION_EUROPE";
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_500M";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "alias";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "tempora";
                                                            }};
                                                            usageRate = 3685.84;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ea";
                                                            }};
                                                            usageRate = 1369;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "vel";
                                                            }};
                                                            usageRate = 8221.18;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_200M";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "ratione";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "laudantium";
                                                            }};
                                                            usageRate = 1206.57;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "dolor";
                                                            }};
                                                            usageRate = 9807;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_50M";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "ex";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "excepturi";
                                                            }};
                                                            usageRate = 9729.2;
                                                        }}),
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
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_300M";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "veniam";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "inventore";
                                                            }};
                                                            usageRate = 3018.31;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ea";
                                                            }};
                                                            usageRate = 7752.2;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                    }};
                                    interconnectType = "INTERCONNECT_TYPE_UNSPECIFIED";
                                    linkType = "LINK_TYPE_ETHERNET_100G_LR";
                                    provisionedLinkCount = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "aspernatur";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eaque";
                                                    }};
                                                    usageRate = 9528.71;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "libero";
                                                    }};
                                                    usageRate = 139.48;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_UNSPECIFIED";
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "deleniti";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "aliquam";
                                                    }};
                                                    usageRate = 1469.46;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "accusamus";
                                                    }};
                                                    usageRate = 795.22;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "non";
                                                    }};
                                                    usageRate = 896.03;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorum";
                                                    }};
                                                    usageRate = 6720.48;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = "SOURCE_CONTINENT_NORTH_AMERICA";
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "velit";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "autem";
                                                    }};
                                                    usageRate = 7521.35;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quas";
                                                    }};
                                                    usageRate = 8296.03;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "nulla";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "libero";
                                                    }};
                                                    usageRate = 965.49;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "tempora";
                                                    }};
                                                    usageRate = 2561.39;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "explicabo";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "provident";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ipsa";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "magnam";
                                                    }};
                                                    usageRate = 4879.35;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eius";
                                                    }};
                                                    usageRate = 4585.15;
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
                                                        estimationTimeFrameOffset = "fuga";
                                                    }};
                                                    usageRate = 4420.15;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quidem";
                                                    }};
                                                    usageRate = 8526.35;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ut";
                                                    }};
                                                    usageRate = 4334.39;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "suscipit";
                                    }};
                                    storageClass = "assumenda";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "eos";
                                        acceleratorType = "praesentium";
                                    }};
                                    instancesRunning = new Usage() {{
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
                                    licenses = new String[]{{
                                        add("neque"),
                                        add("quo"),
                                        add("illum"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "quo";
                                            memorySizeGb = 6813.59;
                                            virtualCpuCount = "eius";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "eos";
                                        }};
                                    }};
                                    persistentDisks = new org.openapis.openapi.models.shared.PersistentDisk[]{{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "ab";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "consequatur";
                                                            }};
                                                            usageRate = 2728.22;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "debitis";
                                                            }};
                                                            usageRate = 3708.53;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aspernatur";
                                                            }};
                                                            usageRate = 1970.54;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "quo";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "esse";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aperiam";
                                                            }};
                                                            usageRate = 7151.79;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quod";
                                                            }};
                                                            usageRate = 4908.19;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "inventore";
                                                            }};
                                                            usageRate = 4694.98;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "totam";
                                                            }};
                                                            usageRate = 8827.1;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = "SCOPE_UNSPECIFIED";
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "odio";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "commodi";
                                                            }};
                                                            usageRate = 9594.34;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "dolores";
                                                            }};
                                                            usageRate = 6455.7;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "molestiae";
                                                            }};
                                                            usageRate = 353.62;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "porro";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "eum";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "praesentium";
                                                            }};
                                                            usageRate = 1598.67;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "deleniti";
                                                            }};
                                                            usageRate = 1438.29;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "fuga";
                                                            }};
                                                            usageRate = 6494.63;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = "SCOPE_UNSPECIFIED";
                                        }}),
                                    }};
                                    preemptible = false;
                                    region = "atque";
                                }};
                                name = "explicabo";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_AUTRALIA";
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "nisi";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sapiente";
                                                    }};
                                                    usageRate = 1598.7;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "ratione";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "explicabo";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "occaecati";
                                                    }};
                                                    usageRate = 5438.06;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "et";
                                                    }};
                                                    usageRate = 4569.11;
                                                }}),
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
                                    sourceRegion = "quod";
                                }};
                                vmToVmEgressWorkload = new VmToVmEgressWorkload() {{
                                    interRegionEgress = new InterRegionEgress() {{
                                        destinationRegion = "nam";
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "vero";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
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
                                        sourceRegion = "molestiae";
                                    }};
                                    intraRegionEgress = new IntraRegionEgress() {{
                                        egressRate = new Usage() {{
                                            usageRateTimeline = new UsageRateTimeline() {{
                                                unit = "rerum";
                                                usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                    add(new UsageRateTimelineEntry() {{
                                                        effectiveTime = new EstimationTimePoint() {{
                                                            estimationTimeFrameOffset = "minima";
                                                        }};
                                                        usageRate = 7162.44;
                                                    }}),
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
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }}),
                        }};
                    }};
                }};
                accessToken = "adipisci";
                alt = "proto";
                billingAccount = "consequuntur";
                callback = "consequatur";
                fields = "minus";
                key = "quaerat";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "esse";
                uploadProtocol = "blanditiis";
            }}            

            CloudbillingBillingAccountsEstimateCostScenarioResponse res = sdk.billingAccounts.cloudbillingBillingAccountsEstimateCostScenario(req, new CloudbillingBillingAccountsEstimateCostScenarioSecurity() {{
                option1 = new CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.estimateCostScenarioForBillingAccountResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->