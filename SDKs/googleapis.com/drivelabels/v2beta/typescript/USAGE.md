<!-- Start SDK Example Usage -->
```typescript
import {
  DrivelabelsLabelsCreateRequest,
  DrivelabelsLabelsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum,
  GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum,
  GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DrivelabelsLabelsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleAppsDriveLabelsV2betaLabelInput: {
    appliedCapabilities: {
      canApply: false,
      canRead: false,
      canRemove: false,
    },
    appliedLabelPolicy: {
      copyMode: GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum.AlwaysCopy,
    },
    creator: {
      person: "distinctio",
    },
    disabler: {
      person: "quibusdam",
    },
    displayHints: {
      disabled: false,
      hiddenInSearch: false,
      priority: "unde",
      shownInApply: false,
    },
    fields: [
      {
        appliedCapabilities: {
          canRead: false,
          canSearch: false,
          canWrite: false,
        },
        creator: {
          person: "corrupti",
        },
        dateOptions: {
          dateFormatType: GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum.ShortDate,
          maxValue: {
            day: 423655,
            month: 623564,
            year: 645894,
          },
          minValue: {
            day: 384382,
            month: 437587,
            year: 297534,
          },
        },
        disabler: {
          person: "debitis",
        },
        displayHints: {
          disabled: false,
          hiddenInSearch: false,
          required: false,
          shownInApply: false,
        },
        lifecycle: {
          disabledPolicy: {
            hideInSearch: false,
            showInApply: false,
          },
        },
        properties: {
          displayName: "ipsa",
          insertBeforeField: "delectus",
          required: false,
        },
        publisher: {
          person: "tempora",
        },
        schemaCapabilities: {
          canDelete: false,
          canDisable: false,
          canEnable: false,
          canUpdate: false,
        },
        selectionOptions: {
          choices: [
            {
              appliedCapabilities: {
                canRead: false,
                canSearch: false,
                canSelect: false,
              },
              creator: {
                person: "molestiae",
              },
              disabler: {
                person: "minus",
              },
              displayHints: {
                badgeColors: {
                  backgroundColor: {
                    alpha: 8121.69,
                    blue: 5288.95,
                    green: 4799.77,
                    red: 5680.45,
                  },
                  foregroundColor: {
                    alpha: 3927.85,
                    blue: 9255.97,
                    green: 8360.79,
                    red: 710.36,
                  },
                  soloColor: {
                    alpha: 3373.96,
                    blue: 871.29,
                    green: 6481.72,
                    red: 202.18,
                  },
                },
                badgePriority: "ipsam",
                darkBadgeColors: {
                  backgroundColor: {
                    alpha: 8326.2,
                    blue: 9571.56,
                    green: 7781.57,
                    red: 1403.5,
                  },
                  foregroundColor: {
                    alpha: 8700.13,
                    blue: 8700.88,
                    green: 9786.19,
                    red: 4736.08,
                  },
                  soloColor: {
                    alpha: 7991.59,
                    blue: 8009.11,
                    green: 4614.79,
                    red: 5204.78,
                  },
                },
                disabled: false,
                hiddenInSearch: false,
                shownInApply: false,
              },
              id: "porro",
              lifecycle: {
                disabledPolicy: {
                  hideInSearch: false,
                  showInApply: false,
                },
              },
              properties: {
                badgeConfig: {
                  color: {
                    alpha: 6788.8,
                    blue: 1182.74,
                    green: 7206.33,
                    red: 6399.21,
                  },
                  priorityOverride: "occaecati",
                },
                description: "fugit",
                displayName: "deleniti",
                insertBeforeChoice: "hic",
              },
              publisher: {
                person: "optio",
              },
              schemaCapabilities: {
                canDelete: false,
                canDisable: false,
                canEnable: false,
                canUpdate: false,
              },
              updater: {
                person: "totam",
              },
            },
            {
              appliedCapabilities: {
                canRead: false,
                canSearch: false,
                canSelect: false,
              },
              creator: {
                person: "beatae",
              },
              disabler: {
                person: "commodi",
              },
              displayHints: {
                badgeColors: {
                  backgroundColor: {
                    alpha: 4736,
                    blue: 2645.55,
                    green: 1863.32,
                    red: 7742.34,
                  },
                  foregroundColor: {
                    alpha: 7369.18,
                    blue: 4561.5,
                    green: 2165.5,
                    red: 5684.34,
                  },
                  soloColor: {
                    alpha: 1352.18,
                    blue: 187.89,
                    green: 3241.41,
                    red: 6176.36,
                  },
                },
                badgePriority: "sed",
                darkBadgeColors: {
                  backgroundColor: {
                    alpha: 6120.96,
                    blue: 2223.21,
                    green: 6169.34,
                    red: 3864.89,
                  },
                  foregroundColor: {
                    alpha: 9437.49,
                    blue: 9025.99,
                    green: 6818.2,
                    red: 4499.5,
                  },
                  soloColor: {
                    alpha: 3595.08,
                    blue: 6130.64,
                    green: 4370.32,
                    red: 9023.49,
                  },
                },
                disabled: false,
                hiddenInSearch: false,
                shownInApply: false,
              },
              id: "quidem",
              lifecycle: {
                disabledPolicy: {
                  hideInSearch: false,
                  showInApply: false,
                },
              },
              properties: {
                badgeConfig: {
                  color: {
                    alpha: 992.8,
                    blue: 602.25,
                    green: 9698.1,
                    red: 6667.67,
                  },
                  priorityOverride: "mollitia",
                },
                description: "laborum",
                displayName: "dolores",
                insertBeforeChoice: "dolorem",
              },
              publisher: {
                person: "corporis",
              },
              schemaCapabilities: {
                canDelete: false,
                canDisable: false,
                canEnable: false,
                canUpdate: false,
              },
              updater: {
                person: "explicabo",
              },
            },
          ],
          listOptions: {
            maxEntries: 750686,
          },
        },
        updater: {
          person: "enim",
        },
        userOptions: {
          listOptions: {
            maxEntries: 607831,
          },
        },
      },
      {
        appliedCapabilities: {
          canRead: false,
          canSearch: false,
          canWrite: false,
        },
        creator: {
          person: "nemo",
        },
        dateOptions: {
          dateFormatType: GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum.DateFormatUnspecified,
          maxValue: {
            day: 570197,
            month: 38425,
            year: 438601,
          },
          minValue: {
            day: 634274,
            month: 988374,
            year: 958950,
          },
        },
        disabler: {
          person: "architecto",
        },
        displayHints: {
          disabled: false,
          hiddenInSearch: false,
          required: false,
          shownInApply: false,
        },
        lifecycle: {
          disabledPolicy: {
            hideInSearch: false,
            showInApply: false,
          },
        },
        properties: {
          displayName: "mollitia",
          insertBeforeField: "dolorem",
          required: false,
        },
        publisher: {
          person: "culpa",
        },
        schemaCapabilities: {
          canDelete: false,
          canDisable: false,
          canEnable: false,
          canUpdate: false,
        },
        selectionOptions: {
          choices: [
            {
              appliedCapabilities: {
                canRead: false,
                canSearch: false,
                canSelect: false,
              },
              creator: {
                person: "repellat",
              },
              disabler: {
                person: "mollitia",
              },
              displayHints: {
                badgeColors: {
                  backgroundColor: {
                    alpha: 5818.5,
                    blue: 2532.91,
                    green: 4143.69,
                    red: 4663.11,
                  },
                  foregroundColor: {
                    alpha: 4746.97,
                    blue: 2444.25,
                    green: 6235.1,
                    red: 1589.69,
                  },
                  soloColor: {
                    alpha: 3380.07,
                    blue: 1103.75,
                    green: 6747.52,
                    red: 6563.3,
                  },
                },
                badgePriority: "enim",
                darkBadgeColors: {
                  backgroundColor: {
                    alpha: 1381.83,
                    blue: 7783.46,
                    green: 1965.82,
                    red: 9495.72,
                  },
                  foregroundColor: {
                    alpha: 3687.25,
                    blue: 6625.27,
                    green: 8209.94,
                    red: 135.71,
                  },
                  soloColor: {
                    alpha: 971.01,
                    blue: 6228.46,
                    green: 8379.45,
                    red: 6736.6,
                  },
                },
                disabled: false,
                hiddenInSearch: false,
                shownInApply: false,
              },
              id: "quasi",
              lifecycle: {
                disabledPolicy: {
                  hideInSearch: false,
                  showInApply: false,
                },
              },
              properties: {
                badgeConfig: {
                  color: {
                    alpha: 9719.45,
                    blue: 9764.6,
                    green: 8781.94,
                    red: 4686.51,
                  },
                  priorityOverride: "praesentium",
                },
                description: "voluptatibus",
                displayName: "ipsa",
                insertBeforeChoice: "omnis",
              },
              publisher: {
                person: "voluptate",
              },
              schemaCapabilities: {
                canDelete: false,
                canDisable: false,
                canEnable: false,
                canUpdate: false,
              },
              updater: {
                person: "cum",
              },
            },
          ],
          listOptions: {
            maxEntries: 19987,
          },
        },
        updater: {
          person: "doloremque",
        },
        userOptions: {
          listOptions: {
            maxEntries: 441711,
          },
        },
      },
      {
        appliedCapabilities: {
          canRead: false,
          canSearch: false,
          canWrite: false,
        },
        creator: {
          person: "ut",
        },
        dateOptions: {
          dateFormatType: GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum.ShortDate,
          maxValue: {
            day: 120196,
            month: 359444,
            year: 296140,
          },
          minValue: {
            day: 480894,
            month: 118727,
            year: 688661,
          },
        },
        disabler: {
          person: "enim",
        },
        displayHints: {
          disabled: false,
          hiddenInSearch: false,
          required: false,
          shownInApply: false,
        },
        lifecycle: {
          disabledPolicy: {
            hideInSearch: false,
            showInApply: false,
          },
        },
        properties: {
          displayName: "accusamus",
          insertBeforeField: "commodi",
          required: false,
        },
        publisher: {
          person: "repudiandae",
        },
        schemaCapabilities: {
          canDelete: false,
          canDisable: false,
          canEnable: false,
          canUpdate: false,
        },
        selectionOptions: {
          choices: [
            {
              appliedCapabilities: {
                canRead: false,
                canSearch: false,
                canSelect: false,
              },
              creator: {
                person: "ipsum",
              },
              disabler: {
                person: "quidem",
              },
              displayHints: {
                badgeColors: {
                  backgroundColor: {
                    alpha: 5651.89,
                    blue: 5666.02,
                    green: 8651.03,
                    red: 2653.89,
                  },
                  foregroundColor: {
                    alpha: 5089.69,
                    blue: 5232.48,
                    green: 9167.23,
                    red: 939.4,
                  },
                  soloColor: {
                    alpha: 9211.58,
                    blue: 5759.47,
                    green: 831.12,
                    red: 9292.97,
                  },
                },
                badgePriority: "incidunt",
                darkBadgeColors: {
                  backgroundColor: {
                    alpha: 3185.69,
                    blue: 93.56,
                    green: 6674.11,
                    red: 8423.42,
                  },
                  foregroundColor: {
                    alpha: 1317.97,
                    blue: 6471.74,
                    green: 7163.27,
                    red: 8413.86,
                  },
                  soloColor: {
                    alpha: 2894.06,
                    blue: 2647.3,
                    green: 1831.91,
                    red: 3978.21,
                  },
                },
                disabled: false,
                hiddenInSearch: false,
                shownInApply: false,
              },
              id: "cupiditate",
              lifecycle: {
                disabledPolicy: {
                  hideInSearch: false,
                  showInApply: false,
                },
              },
              properties: {
                badgeConfig: {
                  color: {
                    alpha: 5528.22,
                    blue: 201.07,
                    green: 1649.4,
                    red: 8289.4,
                  },
                  priorityOverride: "ipsam",
                },
                description: "alias",
                displayName: "fugit",
                insertBeforeChoice: "dolorum",
              },
              publisher: {
                person: "excepturi",
              },
              schemaCapabilities: {
                canDelete: false,
                canDisable: false,
                canEnable: false,
                canUpdate: false,
              },
              updater: {
                person: "tempora",
              },
            },
          ],
          listOptions: {
            maxEntries: 703737,
          },
        },
        updater: {
          person: "tempore",
        },
        userOptions: {
          listOptions: {
            maxEntries: 288476,
          },
        },
      },
      {
        appliedCapabilities: {
          canRead: false,
          canSearch: false,
          canWrite: false,
        },
        creator: {
          person: "delectus",
        },
        dateOptions: {
          dateFormatType: GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum.LongDate,
          maxValue: {
            day: 248753,
            month: 756107,
            year: 576157,
          },
          minValue: {
            day: 396098,
            month: 592042,
            year: 896039,
          },
        },
        disabler: {
          person: "sint",
        },
        displayHints: {
          disabled: false,
          hiddenInSearch: false,
          required: false,
          shownInApply: false,
        },
        lifecycle: {
          disabledPolicy: {
            hideInSearch: false,
            showInApply: false,
          },
        },
        properties: {
          displayName: "officia",
          insertBeforeField: "dolor",
          required: false,
        },
        publisher: {
          person: "debitis",
        },
        schemaCapabilities: {
          canDelete: false,
          canDisable: false,
          canEnable: false,
          canUpdate: false,
        },
        selectionOptions: {
          choices: [
            {
              appliedCapabilities: {
                canRead: false,
                canSearch: false,
                canSelect: false,
              },
              creator: {
                person: "dolorum",
              },
              disabler: {
                person: "in",
              },
              displayHints: {
                badgeColors: {
                  backgroundColor: {
                    alpha: 4491.98,
                    blue: 8464.09,
                    green: 9785.71,
                    red: 6994.79,
                  },
                  foregroundColor: {
                    alpha: 1162.02,
                    blue: 2974.37,
                    green: 7670.24,
                    red: 8137.98,
                  },
                  soloColor: {
                    alpha: 4118.2,
                    blue: 3965.06,
                    green: 6754.39,
                    red: 8811.04,
                  },
                },
                badgePriority: "non",
                darkBadgeColors: {
                  backgroundColor: {
                    alpha: 5812.73,
                    blue: 3132.18,
                    green: 8817.36,
                    red: 9654.17,
                  },
                  foregroundColor: {
                    alpha: 6925.32,
                    blue: 5884.65,
                    green: 7252.55,
                    red: 6596.69,
                  },
                  soloColor: {
                    alpha: 5013.24,
                    blue: 5332.06,
                    green: 9560.84,
                    red: 2305.33,
                  },
                },
                disabled: false,
                hiddenInSearch: false,
                shownInApply: false,
              },
              id: "deserunt",
              lifecycle: {
                disabledPolicy: {
                  hideInSearch: false,
                  showInApply: false,
                },
              },
              properties: {
                badgeConfig: {
                  color: {
                    alpha: 3948.69,
                    blue: 4238.55,
                    green: 6188.09,
                    red: 6063.93,
                  },
                  priorityOverride: "molestiae",
                },
                description: "perferendis",
                displayName: "nihil",
                insertBeforeChoice: "magnam",
              },
              publisher: {
                person: "distinctio",
              },
              schemaCapabilities: {
                canDelete: false,
                canDisable: false,
                canEnable: false,
                canUpdate: false,
              },
              updater: {
                person: "id",
              },
            },
            {
              appliedCapabilities: {
                canRead: false,
                canSearch: false,
                canSelect: false,
              },
              creator: {
                person: "labore",
              },
              disabler: {
                person: "labore",
              },
              displayHints: {
                badgeColors: {
                  backgroundColor: {
                    alpha: 3834.62,
                    blue: 6180.16,
                    green: 7491.7,
                    red: 4287.69,
                  },
                  foregroundColor: {
                    alpha: 8784.53,
                    blue: 1354.74,
                    green: 1028.63,
                    red: 2982.82,
                  },
                  soloColor: {
                    alpha: 923.73,
                    blue: 5699.65,
                    green: 3540.47,
                    red: 5908.73,
                  },
                },
                badgePriority: "quos",
                darkBadgeColors: {
                  backgroundColor: {
                    alpha: 5743.25,
                    blue: 336.25,
                    green: 6532.01,
                    red: 9689.62,
                  },
                  foregroundColor: {
                    alpha: 6521.03,
                    blue: 3209.97,
                    green: 4314.18,
                    red: 2212.62,
                  },
                  soloColor: {
                    alpha: 8965.47,
                    blue: 1412.64,
                    green: 3675.62,
                    red: 972.6,
                  },
                },
                disabled: false,
                hiddenInSearch: false,
                shownInApply: false,
              },
              id: "iure",
              lifecycle: {
                disabledPolicy: {
                  hideInSearch: false,
                  showInApply: false,
                },
              },
              properties: {
                badgeConfig: {
                  color: {
                    alpha: 9840.43,
                    blue: 8919.24,
                    green: 2603.41,
                    red: 8061.94,
                  },
                  priorityOverride: "deleniti",
                },
                description: "facilis",
                displayName: "in",
                insertBeforeChoice: "architecto",
              },
              publisher: {
                person: "architecto",
              },
              schemaCapabilities: {
                canDelete: false,
                canDisable: false,
                canEnable: false,
                canUpdate: false,
              },
              updater: {
                person: "repudiandae",
              },
            },
            {
              appliedCapabilities: {
                canRead: false,
                canSearch: false,
                canSelect: false,
              },
              creator: {
                person: "ullam",
              },
              disabler: {
                person: "expedita",
              },
              displayHints: {
                badgeColors: {
                  backgroundColor: {
                    alpha: 4692.49,
                    blue: 9988.48,
                    green: 8411.4,
                    red: 1494.48,
                  },
                  foregroundColor: {
                    alpha: 9046.48,
                    blue: 8681.26,
                    green: 375.59,
                    red: 1624.93,
                  },
                  soloColor: {
                    alpha: 5083.15,
                    blue: 6155.6,
                    green: 1668.47,
                    red: 1238.2,
                  },
                },
                badgePriority: "quo",
                darkBadgeColors: {
                  backgroundColor: {
                    alpha: 8480.09,
                    blue: 8649.34,
                    green: 8073.19,
                    red: 4113.97,
                  },
                  foregroundColor: {
                    alpha: 5691.01,
                    blue: 1399.72,
                    green: 4071.83,
                    red: 332.22,
                  },
                  soloColor: {
                    alpha: 691.67,
                    blue: 9825.75,
                    green: 6974.29,
                    red: 3732.91,
                  },
                },
                disabled: false,
                hiddenInSearch: false,
                shownInApply: false,
              },
              id: "voluptate",
              lifecycle: {
                disabledPolicy: {
                  hideInSearch: false,
                  showInApply: false,
                },
              },
              properties: {
                badgeConfig: {
                  color: {
                    alpha: 4200.75,
                    blue: 7220.56,
                    green: 505.88,
                    red: 8663.83,
                  },
                  priorityOverride: "nemo",
                },
                description: "voluptatibus",
                displayName: "perferendis",
                insertBeforeChoice: "fugiat",
              },
              publisher: {
                person: "amet",
              },
              schemaCapabilities: {
                canDelete: false,
                canDisable: false,
                canEnable: false,
                canUpdate: false,
              },
              updater: {
                person: "aut",
              },
            },
            {
              appliedCapabilities: {
                canRead: false,
                canSearch: false,
                canSelect: false,
              },
              creator: {
                person: "cumque",
              },
              disabler: {
                person: "corporis",
              },
              displayHints: {
                badgeColors: {
                  backgroundColor: {
                    alpha: 9441.24,
                    blue: 7299.91,
                    green: 7499.99,
                    red: 1716.29,
                  },
                  foregroundColor: {
                    alpha: 3394.04,
                    blue: 5210.37,
                    green: 4895.49,
                    red: 543.38,
                  },
                  soloColor: {
                    alpha: 3389.85,
                    blue: 1999.96,
                    green: 1794.9,
                    red: 185.21,
                  },
                },
                badgePriority: "dolores",
                darkBadgeColors: {
                  backgroundColor: {
                    alpha: 7936.98,
                    blue: 4634.51,
                    green: 2239.24,
                    red: 8745.73,
                  },
                  foregroundColor: {
                    alpha: 3453.52,
                    blue: 9441.2,
                    green: 9280.82,
                    red: 6082.53,
                  },
                  soloColor: {
                    alpha: 7044.15,
                    blue: 5966.56,
                    green: 318.38,
                    red: 7836.45,
                  },
                },
                disabled: false,
                hiddenInSearch: false,
                shownInApply: false,
              },
              id: "consequuntur",
              lifecycle: {
                disabledPolicy: {
                  hideInSearch: false,
                  showInApply: false,
                },
              },
              properties: {
                badgeConfig: {
                  color: {
                    alpha: 5000.26,
                    blue: 6214.79,
                    green: 503.7,
                    red: 5772.29,
                  },
                  priorityOverride: "rerum",
                },
                description: "adipisci",
                displayName: "asperiores",
                insertBeforeChoice: "earum",
              },
              publisher: {
                person: "modi",
              },
              schemaCapabilities: {
                canDelete: false,
                canDisable: false,
                canEnable: false,
                canUpdate: false,
              },
              updater: {
                person: "iste",
              },
            },
          ],
          listOptions: {
            maxEntries: 679091,
          },
        },
        updater: {
          person: "deleniti",
        },
        userOptions: {
          listOptions: {
            maxEntries: 864282,
          },
        },
      },
    ],
    labelType: GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum.Shared,
    learnMoreUri: "nobis",
    lifecycle: {
      disabledPolicy: {
        hideInSearch: false,
        showInApply: false,
      },
    },
    properties: {
      description: "libero",
      title: "Dr.",
    },
    publisher: {
      person: "quaerat",
    },
    revisionCreator: {
      person: "quos",
    },
    schemaCapabilities: {
      canDelete: false,
      canDisable: false,
      canEnable: false,
      canUpdate: false,
    },
  },
  accessToken: "aliquid",
  alt: AltEnum.Json,
  callback: "dolorem",
  fields: "dolor",
  key: "qui",
  languageCode: "ipsum",
  oauthToken: "hic",
  prettyPrint: false,
  quotaUser: "excepturi",
  uploadType: "cum",
  uploadProtocol: "voluptate",
  useAdminAccess: false,
};

sdk.labels.drivelabelsLabelsCreate(req).then((res: DrivelabelsLabelsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->