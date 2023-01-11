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
                    billingAccount = "sit";
                }};
                queryParams = new CloudbillingBillingAccountsEstimateCostScenarioQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new EstimateCostScenarioForBillingAccountRequest() {{
                    costScenario = new CostScenario() {{
                        commitments = new openapisdk.models.shared.Commitment[]() {{
                            add(new Commitment() {{
                                name = "debitis";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "voluptatum";
                                        acceleratorType = "et";
                                    }};
                                    machineSeries = "ut";
                                    memorySizeGb = 50.099998;
                                    plan = "COMMITMENT_PLAN_UNSPECIFIED";
                                    region = "iste";
                                    virtualCpuCount = "vitae";
                                }};
                            }}),
                            add(new Commitment() {{
                                name = "totam";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "dolores";
                                        acceleratorType = "illum";
                                    }};
                                    machineSeries = "debitis";
                                    memorySizeGb = 52.099998;
                                    plan = "TWELVE_MONTH";
                                    region = "id";
                                    virtualCpuCount = "aspernatur";
                                }};
                            }}),
                            add(new Commitment() {{
                                name = "accusantium";
                                vmResourceBasedCud = new VmResourceBasedCud() {{
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "totam";
                                        acceleratorType = "commodi";
                                    }};
                                    machineSeries = "quis";
                                    memorySizeGb = 93.099998;
                                    plan = "TWELVE_MONTH";
                                    region = "non";
                                    virtualCpuCount = "voluptas";
                                }};
                            }}),
                        }};
                        scenarioConfig = new ScenarioConfig() {{
                            estimateDuration = "omnis";
                        }};
                        workloads = new openapisdk.models.shared.Workload[]() {{
                            add(new Workload() {{
                                cloudCdnEgressWorkload = new CloudCdnEgressWorkload() {{
                                    cacheEgressDestination = "CACHE_EGRESS_DESTINATION_NORTH_AMERICA";
                                    cacheEgressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "sed";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "autem";
                                                    }};
                                                    usageRate = 68.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "odio";
                                                    }};
                                                    usageRate = 77.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudCdnWorkload = new CloudCdnWorkload() {{
                                    cacheFillOriginService = "CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET";
                                    cacheFillRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "ipsum";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "modi";
                                                    }};
                                                    usageRate = 0.200000;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ut";
                                                    }};
                                                    usageRate = 56.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    cacheFillRegions = new CacheFillRegions() {{
                                        destinationRegion = "CACHE_FILL_DESTINATION_REGION_CHINA";
                                        sourceRegion = "CACHE_FILL_SOURCE_REGION_SOUTH_AMERICA";
                                    }};
                                    cacheLookUpRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "maiores";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "dolor";
                                                    }};
                                                    usageRate = 23.200001;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "in";
                                                    }};
                                                    usageRate = 69.199997;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ipsum";
                                                    }};
                                                    usageRate = 66.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudInterconnectEgressWorkload = new CloudInterconnectEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "placeat";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "rerum";
                                                    }};
                                                    usageRate = 89.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quam";
                                                    }};
                                                    usageRate = 23.100000;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    interconnectConnectionLocation = "INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED";
                                }};
                                cloudInterconnectWorkload = new CloudInterconnectWorkload() {{
                                    interconnectAttachments = new openapisdk.models.shared.VlanAttachment[]() {{
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_10G";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "autem";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "ut";
                                                            }};
                                                            usageRate = 26.100000;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_1G";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "ullam";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "accusantium";
                                                            }};
                                                            usageRate = 68.099998;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "quam";
                                                            }};
                                                            usageRate = 29.100000;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "soluta";
                                                            }};
                                                            usageRate = 41.200001;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new VlanAttachment() {{
                                            bandwidth = "BANDWIDTH_BPS_1G";
                                            vlanCount = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "et";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "qui";
                                                            }};
                                                            usageRate = 59.200001;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "omnis";
                                                            }};
                                                            usageRate = 74.099998;
                                                        }}),
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "dolor";
                                                            }};
                                                            usageRate = 26.100000;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                    }};
                                    interconnectType = "INTERCONNECT_TYPE_UNSPECIFIED";
                                    linkType = "LINK_TYPE_UNSPECIFIED";
                                    provisionedLinkCount = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "nostrum";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "laboriosam";
                                                    }};
                                                    usageRate = 80.199997;
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                cloudStorageEgressWorkload = new CloudStorageEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_EUROPE";
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "aut";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "consequuntur";
                                                    }};
                                                    usageRate = 47.200001;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "ipsa";
                                                    }};
                                                    usageRate = 37.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "perferendis";
                                                    }};
                                                    usageRate = 26.200001;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceContinent = "SOURCE_CONTINENT_SOUTH_AMERICA";
                                }};
                                cloudStorageWorkload = new CloudStorageWorkload() {{
                                    dataRetrieval = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "explicabo";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "maxime";
                                                    }};
                                                    usageRate = 15.200000;
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
                                                        estimationTimeFrameOffset = "reiciendis";
                                                    }};
                                                    usageRate = 9.200000;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    dualRegion = new DualRegional() {{
                                        name = "minima";
                                    }};
                                    multiRegion = new MultiRegional() {{
                                        name = "necessitatibus";
                                    }};
                                    operationA = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "est";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "eum";
                                                    }};
                                                    usageRate = 94.199997;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "impedit";
                                                    }};
                                                    usageRate = 84.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "vel";
                                                    }};
                                                    usageRate = 87.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    operationB = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "nihil";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "deserunt";
                                                    }};
                                                    usageRate = 59.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "sit";
                                                    }};
                                                    usageRate = 34.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "vel";
                                                    }};
                                                    usageRate = 91.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    region = new Regional() {{
                                        name = "qui";
                                    }};
                                    storageClass = "nisi";
                                }};
                                computeVmWorkload = new ComputeVmWorkload() {{
                                    enableConfidentialCompute = true;
                                    guestAccelerator = new GuestAccelerator() {{
                                        acceleratorCount = "adipisci";
                                        acceleratorType = "porro";
                                    }};
                                    instancesRunning = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "rerum";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "accusamus";
                                                    }};
                                                    usageRate = 2.100000;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    licenses = new String[]() {{
                                        add("ut"),
                                        add("laborum"),
                                        add("fugit"),
                                    }};
                                    machineType = new MachineType() {{
                                        customMachineType = new CustomMachineType() {{
                                            machineSeries = "quis";
                                            memorySizeGb = 49.200001;
                                            virtualCpuCount = "aperiam";
                                        }};
                                        predefinedMachineType = new PredefinedMachineType() {{
                                            machineType = "consequuntur";
                                        }};
                                    }};
                                    persistentDisks = new openapisdk.models.shared.PersistentDisk[]() {{
                                        add(new PersistentDisk() {{
                                            diskSize = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "mollitia";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "delectus";
                                                            }};
                                                            usageRate = 51.099998;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            diskType = "animi";
                                            provisionedIops = new Usage() {{
                                                usageRateTimeline = new UsageRateTimeline() {{
                                                    unit = "ut";
                                                    usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                        add(new UsageRateTimelineEntry() {{
                                                            effectiveTime = new EstimationTimePoint() {{
                                                                estimationTimeFrameOffset = "fuga";
                                                            }};
                                                            usageRate = 92.199997;
                                                        }}),
                                                    }};
                                                }};
                                            }};
                                            scope = "SCOPE_REGIONAL";
                                        }}),
                                    }};
                                    preemptible = true;
                                    region = "non";
                                }};
                                name = "cupiditate";
                                premiumTierEgressWorkload = new PremiumTierEgressWorkload() {{
                                    destinationContinent = "DESTINATION_CONTINENT_MIDDLE_EAST";
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "molestiae";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "quasi";
                                                    }};
                                                    usageRate = 68.099998;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "qui";
                                                    }};
                                                    usageRate = 2.100000;
                                                }}),
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "modi";
                                                    }};
                                                    usageRate = 18.200001;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "quia";
                                }};
                                standardTierEgressWorkload = new StandardTierEgressWorkload() {{
                                    egressRate = new Usage() {{
                                        usageRateTimeline = new UsageRateTimeline() {{
                                            unit = "et";
                                            usageRateTimelineEntries = new openapisdk.models.shared.UsageRateTimelineEntry[]() {{
                                                add(new UsageRateTimelineEntry() {{
                                                    effectiveTime = new EstimationTimePoint() {{
                                                        estimationTimeFrameOffset = "occaecati";
                                                    }};
                                                    usageRate = 93.099998;
                                                }}),
                                            }};
                                        }};
                                    }};
                                    sourceRegion = "quia";
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