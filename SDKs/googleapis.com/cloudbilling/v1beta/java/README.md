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

import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioSecurity;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioPathParams;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioQueryParams;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioRequest;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsEstimateCostScenarioResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingBillingAccountsEstimateCostScenarioRequest req = new CloudbillingBillingAccountsEstimateCostScenarioRequest() {{
                security = new CloudbillingBillingAccountsEstimateCostScenarioSecurity() {{
                    option1 = new CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new CloudbillingBillingAccountsEstimateCostScenarioPathParams() {{
                    billingAccount = "corrupti";
                }};
                queryParams = new CloudbillingBillingAccountsEstimateCostScenarioQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new EstimateCostScenarioForBillingAccountRequest() {{
                    costScenario = new CostScenario() {{
                        commitments = new org.openapis.openapi.models.shared.Commitment[]{{
                            add(new Commitment() {{
                                name = "iure";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "magnam";
                                        acceleratorType = "debitis";
                                    }};
                                    machineSeries = "ipsa";
                                    memorySizeGb = 9636.63;
                                    plan = "COMMITMENT_PLAN_UNSPECIFIED";
                                    region = "suscipit";
                                    virtualCpuCount = "molestiae";
                                }};
                            }}),
                            add(new Commitment() {{
                                name = "minus";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "placeat";
                                        acceleratorType = "voluptatum";
                                    }};
                                    machineSeries = "iusto";
                                    memorySizeGb = 5680.45;
                                    plan = "TWELVE_MONTH";
                                    region = "recusandae";
                                    virtualCpuCount = "temporibus";
                                }};
                            }}),
                        }};
                        scenarioConfig = new ScenarioConfig() {{
                            estimateDuration = "ab";
                        }};
                        workloads = new org.openapis.openapi.models.shared.Workload[]{{
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = "CACHE_EGRESS_DESTINATION_UNSPECIFIED";
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "deserunt";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ipsam";
                                                    }};
                                                    usageRate = 8326.2;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = "CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE";
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "quo";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "at";
                                                    }};
                                                    usageRate = 8700.88;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = "CACHE_FILL_DESTINATION_REGION_OTHERS";
                                        sourceRegion = "CACHE_FILL_SOURCE_REGION_EUROPE";
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "quod";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "esse";
                                                    }};
                                                    usageRate = 5204.78;
                                                }}),
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
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "fugit";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "hic";
                                                    }};
                                                    usageRate = 7586.16;
                                                }}),
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
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = "INTERCONNECT_CONNECTION_LOCATION_ASIA";
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_10G";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "cum";
                                                    usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ipsum";
                                                            }};
                                                            usageRate = 5684.34;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aspernatur";
                                                            }};
                                                            usageRate = 187.89;
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
                                            unit = "sed";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolor";
                                                    }};
                                                    usageRate = 6169.34;
                                                }}),
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
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_AUTRALIA";
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "corporis";
                                            usageRateTimelineEntries = new org.openapis.openapi.models.shared.UsageRateTimelineEntry[]{{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "iure";
                                                    }};
                                                    usageRate = 9023.49;
                                                }}),
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
                                            }};
                                        }};
                                    }};
                                    sourceContinent = "SOURCE_CONTINENT_NORTH_AMERICA";
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
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
                        }};
                    }};
                }};
            }};            

            CloudbillingBillingAccountsEstimateCostScenarioResponse res = sdk.billingAccounts.cloudbillingBillingAccountsEstimateCostScenario(req);

            if (res.estimateCostScenarioForBillingAccountResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### billingAccounts

* `cloudbillingBillingAccountsEstimateCostScenario` - Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

### v1beta

* `cloudbillingEstimateCostScenario` - Estimate list prices using a `CostScenario` without a defined `billingAccount`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
