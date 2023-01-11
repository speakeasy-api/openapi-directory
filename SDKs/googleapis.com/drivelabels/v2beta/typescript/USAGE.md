<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DrivelabelsLabelsCreateRequest, DrivelabelsLabelsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DrivelabelsLabelsCreateRequest = {
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    languageCode: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
    useAdminAccess: false,
  },
  request: {
    appliedCapabilities: {
      canApply: true,
      canRead: true,
      canRemove: false,
    },
    appliedLabelPolicy: {
      copyMode: "COPY_APPLIABLE",
    },
    creator: {
      person: "dolorem",
    },
    disabler: {
      person: "et",
    },
    displayHints: {
      disabled: false,
      hiddenInSearch: true,
      priority: "vitae",
      shownInApply: true,
    },
    fields: [
      {
        appliedCapabilities: {
          canRead: false,
          canSearch: true,
          canWrite: false,
        },
        creator: {
          person: "odio",
        },
        dateOptions: {
          dateFormatType: "LONG_DATE",
          maxValue: {
            day: 4035568504096476779,
            month: 959367522974354090,
            year: 2914295034816259174,
          },
          minValue: {
            day: 1395437218309923052,
            month: 6745438398739480977,
            year: 2897681629866238117,
          },
        },
        disabler: {
          person: "est",
        },
        displayHints: {
          disabled: true,
          hiddenInSearch: true,
          required: true,
          shownInApply: false,
        },
        lifecycle: {
          disabledPolicy: {
            hideInSearch: true,
            showInApply: false,
          },
        },
        properties: {
          displayName: "illo",
          insertBeforeField: "sed",
          required: false,
        },
        publisher: {
          person: "autem",
        },
        schemaCapabilities: {
          canDelete: true,
          canDisable: false,
          canEnable: false,
          canUpdate: false,
        },
        selectionOptions: {
          choices: [
            {
              appliedCapabilities: {
                canRead: true,
                canSearch: false,
                canSelect: true,
              },
              creator: {
                person: "modi",
              },
              disabler: {
                person: "sint",
              },
              displayHints: {
                badgeColors: {
                  backgroundColor: {
                    alpha: 77.099998,
                    blue: 56.099998,
                    green: 30.200001,
                    red: 97.099998,
                  },
                  foregroundColor: {
                    alpha: 94.199997,
                    blue: 19.100000,
                    green: 69.199997,
                    red: 3.100000,
                  },
                  soloColor: {
                    alpha: 64.199997,
                    blue: 78.199997,
                    green: 89.099998,
                    red: 63.200001,
                  },
                },
                badgePriority: "qui",
                darkBadgeColors: {
                  backgroundColor: {
                    alpha: 78.099998,
                    blue: 31.100000,
                    green: 13.100000,
                    red: 26.100000,
                  },
                  foregroundColor: {
                    alpha: 90.099998,
                    blue: 92.099998,
                    green: 68.099998,
                    red: 38.200001,
                  },
                  soloColor: {
                    alpha: 20.100000,
                    blue: 41.200001,
                    green: 89.199997,
                    red: 41.099998,
                  },
                },
                disabled: true,
                hiddenInSearch: true,
                shownInApply: true,
              },
              id: "ut",
              lifecycle: {
                disabledPolicy: {
                  hideInSearch: false,
                  showInApply: true,
                },
              },
              properties: {
                badgeConfig: {
                  color: {
                    alpha: 26.100000,
                    blue: 19.200001,
                    green: 59.200001,
                    red: 64.099998,
                  },
                  priorityOverride: "a",
                },
                description: "soluta",
                displayName: "aut",
                insertBeforeChoice: "quas",
              },
              publisher: {
                person: "consequuntur",
              },
              schemaCapabilities: {
                canDelete: false,
                canDisable: true,
                canEnable: true,
                canUpdate: false,
              },
              updater: {
                person: "doloremque",
              },
            },
            {
              appliedCapabilities: {
                canRead: true,
                canSearch: false,
                canSelect: true,
              },
              creator: {
                person: "quisquam",
              },
              disabler: {
                person: "explicabo",
              },
              displayHints: {
                badgeColors: {
                  backgroundColor: {
                    alpha: 42.099998,
                    blue: 15.200000,
                    green: 66.099998,
                    red: 94.199997,
                  },
                  foregroundColor: {
                    alpha: 97.199997,
                    blue: 1.200000,
                    green: 40.200001,
                    red: 94.199997,
                  },
                  soloColor: {
                    alpha: 31.100000,
                    blue: 70.099998,
                    green: 87.099998,
                    red: 50.200001,
                  },
                },
                badgePriority: "deserunt",
                darkBadgeColors: {
                  backgroundColor: {
                    alpha: 59.099998,
                    blue: 68.099998,
                    green: 66.099998,
                    red: 91.099998,
                  },
                  foregroundColor: {
                    alpha: 13.200000,
                    blue: 96.099998,
                    green: 5.100000,
                    red: 54.099998,
                  },
                  soloColor: {
                    alpha: 2.100000,
                    blue: 37.200001,
                    green: 63.099998,
                    red: 27.200001,
                  },
                },
                disabled: false,
                hiddenInSearch: false,
                shownInApply: true,
              },
              id: "excepturi",
              lifecycle: {
                disabledPolicy: {
                  hideInSearch: true,
                  showInApply: true,
                },
              },
              properties: {
                badgeConfig: {
                  color: {
                    alpha: 29.200001,
                    blue: 20.100000,
                    green: 28.100000,
                    red: 95.099998,
                  },
                  priorityOverride: "sed",
                },
                description: "et",
                displayName: "consequuntur",
                insertBeforeChoice: "non",
              },
              publisher: {
                person: "cupiditate",
              },
              schemaCapabilities: {
                canDelete: false,
                canDisable: true,
                canEnable: false,
                canUpdate: false,
              },
              updater: {
                person: "corrupti",
              },
            },
            {
              appliedCapabilities: {
                canRead: false,
                canSearch: true,
                canSelect: true,
              },
              creator: {
                person: "possimus",
              },
              disabler: {
                person: "modi",
              },
              displayHints: {
                badgeColors: {
                  backgroundColor: {
                    alpha: 18.200001,
                    blue: 33.099998,
                    green: 28.100000,
                    red: 93.099998,
                  },
                  foregroundColor: {
                    alpha: 20.200001,
                    blue: 73.099998,
                    green: 45.099998,
                    red: 56.099998,
                  },
                  soloColor: {
                    alpha: 18.100000,
                    blue: 57.099998,
                    green: 47.200001,
                    red: 59.099998,
                  },
                },
                badgePriority: "ut",
                darkBadgeColors: {
                  backgroundColor: {
                    alpha: 80.099998,
                    blue: 47.099998,
                    green: 3.200000,
                    red: 58.200001,
                  },
                  foregroundColor: {
                    alpha: 69.199997,
                    blue: 66.199997,
                    green: 25.200001,
                    red: 16.200001,
                  },
                  soloColor: {
                    alpha: 14.100000,
                    blue: 78.199997,
                    green: 46.099998,
                    red: 84.099998,
                  },
                },
                disabled: false,
                hiddenInSearch: true,
                shownInApply: true,
              },
              id: "officia",
              lifecycle: {
                disabledPolicy: {
                  hideInSearch: true,
                  showInApply: false,
                },
              },
              properties: {
                badgeConfig: {
                  color: {
                    alpha: 30.100000,
                    blue: 43.099998,
                    green: 80.099998,
                    red: 55.200001,
                  },
                  priorityOverride: "dicta",
                },
                description: "rem",
                displayName: "doloremque",
                insertBeforeChoice: "quae",
              },
              publisher: {
                person: "nisi",
              },
              schemaCapabilities: {
                canDelete: false,
                canDisable: false,
                canEnable: false,
                canUpdate: true,
              },
              updater: {
                person: "rerum",
              },
            },
          ],
          listOptions: {
            maxEntries: 7434067341455688771,
          },
        },
        updater: {
          person: "rem",
        },
        userOptions: {
          listOptions: {
            maxEntries: 2386043087176739176,
          },
        },
      },
    ],
    labelType: "LABEL_TYPE_UNSPECIFIED",
    learnMoreUri: "reiciendis",
    lifecycle: {
      disabledPolicy: {
        hideInSearch: true,
        showInApply: true,
      },
    },
    properties: {
      description: "porro",
      title: "nihil",
    },
    publisher: {
      person: "adipisci",
    },
    revisionCreator: {
      person: "consequatur",
    },
    schemaCapabilities: {
      canDelete: false,
      canDisable: false,
      canEnable: true,
      canUpdate: true,
    },
  },
};

sdk.labels.drivelabelsLabelsCreate(req).then((res: DrivelabelsLabelsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->