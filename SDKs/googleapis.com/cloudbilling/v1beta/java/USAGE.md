<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    billingAccount = "perspiciatis";
                }};
                queryParams = new CloudbillingBillingAccountsEstimateCostScenarioQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "magni";
                    alt = "media";
                    callback = "non";
                    fields = "a";
                    key = "recusandae";
                    oauthToken = "molestias";
                    prettyPrint = true;
                    quotaUser = "dolores";
                    uploadType = "sint";
                    uploadProtocol = "et";
                }};
                request = new EstimateCostScenarioForBillingAccountRequest() {{
                    costScenario = new CostScenario() {{
                        commitments = new openapisdk.models.shared.Commitment[]() {{
                            add(new Commitment() {{
                                name = "ratione";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "voluptas";
                                        acceleratorType = "quas";
                                    }};
                                    machineSeries = "quae";
                                    memorySizeGb = 50.200001;
                                    plan = "TWELVE_MONTH";
                                    region = "eveniet";
                                    virtualCpuCount = "aut";
                                }};
                            }}),
                        }};
                        scenarioConfig = new ScenarioConfig() {{
                            estimateDuration = "velit";
                        }};
                        workloads = new openapisdk.models.shared.Workload[]() {{
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = "CACHE_EGRESS_DESTINATION_OCEANIA";
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "numquam";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quisquam";
                                                    }};
                                                    usageRate = 9.200000;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ea";
                                                    }};
                                                    usageRate = 22.200001;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = "CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED";
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "est";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "iste";
                                                    }};
                                                    usageRate = 82.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "amet";
                                                    }};
                                                    usageRate = 11.100000;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eum";
                                                    }};
                                                    usageRate = 94.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = "CACHE_FILL_DESTINATION_REGION_SOUTH_AMERICA";
                                        sourceRegion = "CACHE_FILL_SOURCE_REGION_EUROPE";
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "nesciunt";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quos";
                                                    }};
                                                    usageRate = 93.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "nemo";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sapiente";
                                                    }};
                                                    usageRate = 37.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dicta";
                                                    }};
                                                    usageRate = 73.199997;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eum";
                                                    }};
                                                    usageRate = 8.200000;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = "INTERCONNECT_CONNECTION_LOCATION_AUSTRALIA";
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new openapisdk.models.shared.VlanAttachment[]() {{
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_50G";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "adipisci";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "laborum";
                                                            }};
                                                            usageRate = 91.099998;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "sequi";
                                                            }};
                                                            usageRate = 73.199997;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_50M";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "qui";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "natus";
                                                            }};
                                                            usageRate = 75.199997;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "reprehenderit";
                                                            }};
                                                            usageRate = 82.099998;
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
                                            unit = "voluptas";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nostrum";
                                                    }};
                                                    usageRate = 78.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "esse";
                                                    }};
                                                    usageRate = 29.200001;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_UNSPECIFIED";
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "aut";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "tempora";
                                                    }};
                                                    usageRate = 50.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = "SOURCE_CONTINENT_AUSTRALIA";
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "et";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "magnam";
                                                    }};
                                                    usageRate = 84.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "doloremque";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ut";
                                                    }};
                                                    usageRate = 80.199997;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "voluptate";
                                                    }};
                                                    usageRate = 52.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "voluptates";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "voluptatem";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "iusto";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quas";
                                                    }};
                                                    usageRate = 69.199997;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "aut";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "exercitationem";
                                                    }};
                                                    usageRate = 96.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolores";
                                                    }};
                                                    usageRate = 74.199997;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "harum";
                                                    }};
                                                    usageRate = 61.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "deleniti";
                                    }};
                                    storageClass = "dicta";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "dolorem";
                                        acceleratorType = "amet";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "atque";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nihil";
                                                    }};
                                                    usageRate = 46.200001;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quia";
                                                    }};
                                                    usageRate = 63.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "earum";
                                                    }};
                                                    usageRate = 89.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]() {{
                                        add("soluta"),
                                        add("eos"),
                                        add("explicabo"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "corporis";
                                            memorySizeGb = 24.200001;
                                            virtualCpuCount = "necessitatibus";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "placeat";
                                        }};
                                    }};
                                    persistentDisks = new openapisdk.models.shared.PersistentDisk[]() {{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "voluptas";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "placeat";
                                                            }};
                                                            usageRate = 78.099998;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "totam";
                                                            }};
                                                            usageRate = 37.200001;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "natus";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "facilis";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "odio";
                                                            }};
                                                            usageRate = 66.099998;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = "SCOPE_UNSPECIFIED";
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "nihil";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "magnam";
                                                            }};
                                                            usageRate = 9.200000;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "magnam";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "et";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "cupiditate";
                                                            }};
                                                            usageRate = 89.199997;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quis";
                                                            }};
                                                            usageRate = 0.100000;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aut";
                                                            }};
                                                            usageRate = 63.200001;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = "SCOPE_UNSPECIFIED";
                                        }}),
                                    }};
                                    preemptible = true;
                                    region = "eligendi";
                                }};
                                name = "molestias";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_CENTRAL_AMERICA";
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "molestiae";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "autem";
                                                    }};
                                                    usageRate = 45.200001;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "molestias";
                                                    }};
                                                    usageRate = 93.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "aut";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "numquam";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "veritatis";
                                                    }};
                                                    usageRate = 43.200001;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "vitae";
                                                    }};
                                                    usageRate = 83.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "iusto";
                                                    }};
                                                    usageRate = 12.200000;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "itaque";
                                }};
                            }}),
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = "CACHE_EGRESS_DESTINATION_LATIN_AMERICA";
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "sequi";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "nobis";
                                                    }};
                                                    usageRate = 93.199997;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sequi";
                                                    }};
                                                    usageRate = 28.100000;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = "CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE";
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "soluta";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "adipisci";
                                                    }};
                                                    usageRate = 66.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "necessitatibus";
                                                    }};
                                                    usageRate = 96.199997;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = "CACHE_FILL_DESTINATION_REGION_ASIA_PACIFIC";
                                        sourceRegion = "CACHE_FILL_REGION_ASIA_PACIFIC";
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "iusto";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "qui";
                                                    }};
                                                    usageRate = 48.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "voluptatem";
                                                    }};
                                                    usageRate = 2.100000;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "magnam";
                                                    }};
                                                    usageRate = 51.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ipsum";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "vitae";
                                                    }};
                                                    usageRate = 3.100000;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "necessitatibus";
                                                    }};
                                                    usageRate = 66.199997;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "aut";
                                                    }};
                                                    usageRate = 85.199997;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = "INTERCONNECT_CONNECTION_LOCATION_SOUTH_AMERICA";
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new openapisdk.models.shared.VlanAttachment[]() {{
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_50M";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "similique";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aut";
                                                            }};
                                                            usageRate = 65.099998;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_50G";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "amet";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "perspiciatis";
                                                            }};
                                                            usageRate = 17.200001;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quasi";
                                                            }};
                                                            usageRate = 30.100000;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "pariatur";
                                                            }};
                                                            usageRate = 51.200001;
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
                                            unit = "ipsa";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quis";
                                                    }};
                                                    usageRate = 31.100000;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "enim";
                                                    }};
                                                    usageRate = 53.200001;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_ASIA_PACIFIC";
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "dolorem";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "at";
                                                    }};
                                                    usageRate = 5.100000;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ut";
                                                    }};
                                                    usageRate = 95.199997;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ut";
                                                    }};
                                                    usageRate = 92.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = "SOURCE_CONTINENT_ASIA_PACIFIC";
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "laboriosam";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "atque";
                                                    }};
                                                    usageRate = 11.200000;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolorum";
                                                    }};
                                                    usageRate = 43.200001;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "laborum";
                                                    }};
                                                    usageRate = 71.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dataStored = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "et";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "autem";
                                                    }};
                                                    usageRate = 81.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "delectus";
                                                    }};
                                                    usageRate = 78.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quaerat";
                                                    }};
                                                    usageRate = 97.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "et";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "qui";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "deleniti";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "error";
                                                    }};
                                                    usageRate = 11.200000;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "rerum";
                                                    }};
                                                    usageRate = 96.199997;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "aut";
                                                    }};
                                                    usageRate = 17.100000;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "voluptatibus";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "aut";
                                                    }};
                                                    usageRate = 40.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "dolore";
                                    }};
                                    storageClass = "aut";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = false;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "ea";
                                        acceleratorType = "doloremque";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "sit";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "iste";
                                                    }};
                                                    usageRate = 94.199997;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]() {{
                                        add("quis"),
                                        add("ullam"),
                                        add("debitis"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "quam";
                                            memorySizeGb = 13.200000;
                                            virtualCpuCount = "animi";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "odio";
                                        }};
                                    }};
                                    persistentDisks = new openapisdk.models.shared.PersistentDisk[]() {{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "odio";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "sunt";
                                                            }};
                                                            usageRate = 5.100000;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "accusamus";
                                                            }};
                                                            usageRate = 85.199997;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "illo";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "molestiae";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "aliquid";
                                                            }};
                                                            usageRate = 96.199997;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "non";
                                                            }};
                                                            usageRate = 31.200001;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "sint";
                                                            }};
                                                            usageRate = 90.199997;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = "SCOPE_UNSPECIFIED";
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "tempore";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "perferendis";
                                                            }};
                                                            usageRate = 93.099998;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "sunt";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "in";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "laudantium";
                                                            }};
                                                            usageRate = 81.099998;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "corrupti";
                                                            }};
                                                            usageRate = 53.099998;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = "SCOPE_ZONAL";
                                        }}),
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "et";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "est";
                                                            }};
                                                            usageRate = 69.099998;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ea";
                                                            }};
                                                            usageRate = 10.200000;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "eos";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "minus";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "rerum";
                                                            }};
                                                            usageRate = 91.099998;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = "SCOPE_REGIONAL";
                                        }}),
                                    }};
                                    preemptible = true;
                                    region = "architecto";
                                }};
                                name = "omnis";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_CHINA";
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ut";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "perferendis";
                                                    }};
                                                    usageRate = 69.199997;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "laboriosam";
                                                    }};
                                                    usageRate = 64.199997;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "et";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "quibusdam";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eaque";
                                                    }};
                                                    usageRate = 97.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "deleniti";
                                                    }};
                                                    usageRate = 32.200001;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ea";
                                                    }};
                                                    usageRate = 6.200000;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "et";
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