# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FormsFormsBatchUpdateRequest, FormsFormsBatchUpdateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FormsFormsBatchUpdateRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
    },
  },
  pathParams: {
    formId: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    includeFormInResponse: false,
    requests: [
      {
        createItem: {
          item: {
            description: "voluptatum",
            imageItem: {
              image: {
                altText: "et",
                properties: {
                  alignment: "CENTER",
                  width: 161231572858529631,
                },
                sourceUri: "et",
              },
            },
            itemId: "voluptate",
            pageBreakItem: {
              "vitae": "totam",
              "dolores": "illum",
              "debitis": "vel",
            },
            questionGroupItem: {
              grid: {
                columns: {
                  options: [
                    {
                      goToAction: "SUBMIT_FORM",
                      goToSectionId: "id",
                      image: {
                        altText: "aspernatur",
                        properties: {
                          alignment: "ALIGNMENT_UNSPECIFIED",
                          width: 1395437218309923052,
                        },
                        sourceUri: "commodi",
                      },
                      isOther: true,
                      value: "est",
                    },
                  ],
                  shuffle: true,
                  type: "CHECKBOX",
                },
                shuffleQuestions: true,
              },
              image: {
                altText: "voluptas",
                properties: {
                  alignment: "CENTER",
                  width: 1059542851699319360,
                },
                sourceUri: "illo",
              },
              questions: [
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: "SUBMIT_FORM",
                        goToSectionId: "consectetur",
                        image: {
                          altText: "nobis",
                          properties: {
                            alignment: "RIGHT",
                            width: 7699391924090763411,
                          },
                          sourceUri: "recusandae",
                        },
                        isOther: true,
                        value: "ipsum",
                      },
                      {
                        goToAction: "GO_TO_ACTION_UNSPECIFIED",
                        goToSectionId: "modi",
                        image: {
                          altText: "sint",
                          properties: {
                            alignment: "LEFT",
                            width: 7847956203786849690,
                          },
                          sourceUri: "exercitationem",
                        },
                        isOther: true,
                        value: "reprehenderit",
                      },
                    ],
                    shuffle: false,
                    type: "RADIO",
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "beatae",
                    maxFileSize: "veritatis",
                    maxFiles: 2671030200101705776,
                    types: [
                      "ANY",
                      "PRESENTATION",
                      "PDF",
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "placeat",
                        },
                        {
                          value: "vel",
                        },
                        {
                          value: "rerum",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "voluptas",
                            uri: "quam",
                          },
                          video: {
                            displayText: "reprehenderit",
                            youtubeUri: "qui",
                          },
                        },
                        {
                          link: {
                            displayText: "qui",
                            uri: "unde",
                          },
                          video: {
                            displayText: "in",
                            youtubeUri: "autem",
                          },
                        },
                      ],
                      text: "qui",
                    },
                    pointValue: 35604086129376003,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "ab",
                            uri: "neque",
                          },
                          video: {
                            displayText: "ullam",
                            youtubeUri: "et",
                          },
                        },
                        {
                          link: {
                            displayText: "accusantium",
                            uri: "esse",
                          },
                          video: {
                            displayText: "architecto",
                            youtubeUri: "quam",
                          },
                        },
                        {
                          link: {
                            displayText: "velit",
                            uri: "cumque",
                          },
                          video: {
                            displayText: "soluta",
                            youtubeUri: "sunt",
                          },
                        },
                      ],
                      text: "voluptates",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "et",
                            uri: "optio",
                          },
                          video: {
                            displayText: "qui",
                            youtubeUri: "earum",
                          },
                        },
                        {
                          link: {
                            displayText: "illo",
                            uri: "omnis",
                          },
                          video: {
                            displayText: "ut",
                            youtubeUri: "consequatur",
                          },
                        },
                        {
                          link: {
                            displayText: "dolor",
                            uri: "commodi",
                          },
                          video: {
                            displayText: "error",
                            youtubeUri: "reprehenderit",
                          },
                        },
                      ],
                      text: "consectetur",
                    },
                  },
                  questionId: "nostrum",
                  required: false,
                  rowQuestion: {
                    title: "laboriosam",
                  },
                  scaleQuestion: {
                    high: 1937101031588528881,
                    highLabel: "a",
                    low: 1836598054518427835,
                    lowLabel: "aut",
                  },
                  textQuestion: {
                    paragraph: true,
                  },
                  timeQuestion: {
                    duration: true,
                  },
                },
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: "NEXT_SECTION",
                        goToSectionId: "ipsa",
                        image: {
                          altText: "expedita",
                          properties: {
                            alignment: "ALIGNMENT_UNSPECIFIED",
                            width: 4234137922270959652,
                          },
                          sourceUri: "atque",
                        },
                        isOther: true,
                        value: "quisquam",
                      },
                    ],
                    shuffle: false,
                    type: "CHECKBOX",
                  },
                  dateQuestion: {
                    includeTime: true,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "perferendis",
                    maxFileSize: "et",
                    maxFiles: 2037591971392316788,
                    types: [
                      "AUDIO",
                      "IMAGE",
                      "AUDIO",
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "est",
                        },
                        {
                          value: "quis",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "labore",
                            uri: "et",
                          },
                          video: {
                            displayText: "impedit",
                            youtubeUri: "ad",
                          },
                        },
                      ],
                      text: "expedita",
                    },
                    pointValue: 4540487686588600123,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "modi",
                            uri: "nihil",
                          },
                          video: {
                            displayText: "tempora",
                            youtubeUri: "deserunt",
                          },
                        },
                        {
                          link: {
                            displayText: "eaque",
                            uri: "sunt",
                          },
                          video: {
                            displayText: "sit",
                            youtubeUri: "autem",
                          },
                        },
                      ],
                      text: "quis",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "vel",
                            uri: "placeat",
                          },
                          video: {
                            displayText: "qui",
                            youtubeUri: "nisi",
                          },
                        },
                        {
                          link: {
                            displayText: "quis",
                            uri: "adipisci",
                          },
                          video: {
                            displayText: "porro",
                            youtubeUri: "rerum",
                          },
                        },
                      ],
                      text: "et",
                    },
                  },
                  questionId: "accusamus",
                  required: true,
                  rowQuestion: {
                    title: "laborum",
                  },
                  scaleQuestion: {
                    high: 8958290475970215309,
                    highLabel: "ut",
                    low: 4400124260933614083,
                    lowLabel: "fugit",
                  },
                  textQuestion: {
                    paragraph: false,
                  },
                  timeQuestion: {
                    duration: false,
                  },
                },
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: "GO_TO_ACTION_UNSPECIFIED",
                        goToSectionId: "consequuntur",
                        image: {
                          altText: "excepturi",
                          properties: {
                            alignment: "ALIGNMENT_UNSPECIFIED",
                            width: 1377327594979300801,
                          },
                          sourceUri: "delectus",
                        },
                        isOther: false,
                        value: "animi",
                      },
                    ],
                    shuffle: false,
                    type: "CHOICE_TYPE_UNSPECIFIED",
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "sed",
                    maxFileSize: "sed",
                    maxFiles: 6464511094049078446,
                    types: [
                      "DOCUMENT",
                      "DOCUMENT",
                      "FILE_TYPE_UNSPECIFIED",
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "pariatur",
                        },
                        {
                          value: "quasi",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "enim",
                            uri: "qui",
                          },
                          video: {
                            displayText: "sit",
                            youtubeUri: "possimus",
                          },
                        },
                        {
                          link: {
                            displayText: "modi",
                            uri: "neque",
                          },
                          video: {
                            displayText: "consequuntur",
                            youtubeUri: "quia",
                          },
                        },
                        {
                          link: {
                            displayText: "et",
                            uri: "est",
                          },
                          video: {
                            displayText: "occaecati",
                            youtubeUri: "ex",
                          },
                        },
                      ],
                      text: "voluptatem",
                    },
                    pointValue: 7646345395863209143,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "velit",
                            uri: "quae",
                          },
                          video: {
                            displayText: "est",
                            youtubeUri: "ut",
                          },
                        },
                        {
                          link: {
                            displayText: "necessitatibus",
                            uri: "in",
                          },
                          video: {
                            displayText: "possimus",
                            youtubeUri: "voluptatem",
                          },
                        },
                        {
                          link: {
                            displayText: "dolorum",
                            uri: "doloribus",
                          },
                          video: {
                            displayText: "saepe",
                            youtubeUri: "sunt",
                          },
                        },
                      ],
                      text: "earum",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "ut",
                            uri: "asperiores",
                          },
                          video: {
                            displayText: "et",
                            youtubeUri: "est",
                          },
                        },
                        {
                          link: {
                            displayText: "ipsum",
                            uri: "quam",
                          },
                          video: {
                            displayText: "voluptas",
                            youtubeUri: "nihil",
                          },
                        },
                      ],
                      text: "dolores",
                    },
                  },
                  questionId: "suscipit",
                  required: true,
                  rowQuestion: {
                    title: "non",
                  },
                  scaleQuestion: {
                    high: 2991421044203248760,
                    highLabel: "ut",
                    low: 3357930257403748968,
                    lowLabel: "illo",
                  },
                  textQuestion: {
                    paragraph: true,
                  },
                  timeQuestion: {
                    duration: false,
                  },
                },
              ],
            },
            questionItem: {
              image: {
                altText: "ipsam",
                properties: {
                  alignment: "RIGHT",
                  width: 9105358522635467874,
                },
                sourceUri: "blanditiis",
              },
              question: {
                choiceQuestion: {
                  options: [
                    {
                      goToAction: "GO_TO_ACTION_UNSPECIFIED",
                      goToSectionId: "rerum",
                      image: {
                        altText: "dolore",
                        properties: {
                          alignment: "ALIGNMENT_UNSPECIFIED",
                          width: 7796777083842162182,
                        },
                        sourceUri: "officia",
                      },
                      isOther: true,
                      value: "sunt",
                    },
                  ],
                  shuffle: false,
                  type: "CHOICE_TYPE_UNSPECIFIED",
                },
                dateQuestion: {
                  includeTime: true,
                  includeYear: true,
                },
                fileUploadQuestion: {
                  folderId: "qui",
                  maxFileSize: "excepturi",
                  maxFiles: 6315628527077982941,
                  types: [
                    "PDF",
                  ],
                },
                grading: {
                  correctAnswers: {
                    answers: [
                      {
                        value: "doloremque",
                      },
                      {
                        value: "quae",
                      },
                    ],
                  },
                  generalFeedback: {
                    material: [
                      {
                        link: {
                          displayText: "recusandae",
                          uri: "qui",
                        },
                        video: {
                          displayText: "minus",
                          youtubeUri: "et",
                        },
                      },
                      {
                        link: {
                          displayText: "rerum",
                          uri: "ut",
                        },
                        video: {
                          displayText: "rem",
                          youtubeUri: "eos",
                        },
                      },
                    ],
                    text: "et",
                  },
                  pointValue: 1176850203168067696,
                  whenRight: {
                    material: [
                      {
                        link: {
                          displayText: "praesentium",
                          uri: "porro",
                        },
                        video: {
                          displayText: "nihil",
                          youtubeUri: "adipisci",
                        },
                      },
                    ],
                    text: "consequatur",
                  },
                  whenWrong: {
                    material: [
                      {
                        link: {
                          displayText: "accusantium",
                          uri: "atque",
                        },
                        video: {
                          displayText: "amet",
                          youtubeUri: "nisi",
                        },
                      },
                      {
                        link: {
                          displayText: "quidem",
                          uri: "est",
                        },
                        video: {
                          displayText: "quo",
                          youtubeUri: "vero",
                        },
                      },
                      {
                        link: {
                          displayText: "alias",
                          uri: "totam",
                        },
                        video: {
                          displayText: "deserunt",
                          youtubeUri: "eius",
                        },
                      },
                    ],
                    text: "repellat",
                  },
                },
                questionId: "beatae",
                required: false,
                rowQuestion: {
                  title: "totam",
                },
                scaleQuestion: {
                  high: 6110482739283003758,
                  highLabel: "et",
                  low: 7167106058699817943,
                  lowLabel: "necessitatibus",
                },
                textQuestion: {
                  paragraph: false,
                },
                timeQuestion: {
                  duration: false,
                },
              },
            },
            textItem: {
              "voluptas": "ut",
            },
            title: "veniam",
            videoItem: {
              caption: "architecto",
              video: {
                properties: {
                  alignment: "CENTER",
                  width: 4841391702283203193,
                },
                youtubeUri: "quo",
              },
            },
          },
          location: {
            index: 7465719782626729327,
          },
        },
        deleteItem: {
          location: {
            index: 5065591635656109736,
          },
        },
        moveItem: {
          newLocation: {
            index: 1215184329252422444,
          },
          originalLocation: {
            index: 4178331056796501958,
          },
        },
        updateFormInfo: {
          info: {
            description: "quibusdam",
            title: "asperiores",
          },
          updateMask: "quo",
        },
        updateItem: {
          item: {
            description: "ea",
            imageItem: {
              image: {
                altText: "soluta",
                properties: {
                  alignment: "ALIGNMENT_UNSPECIFIED",
                  width: 5850174490929081658,
                },
                sourceUri: "blanditiis",
              },
            },
            itemId: "facere",
            pageBreakItem: {
              "et": "odit",
              "est": "id",
              "ipsum": "aut",
            },
            questionGroupItem: {
              grid: {
                columns: {
                  options: [
                    {
                      goToAction: "NEXT_SECTION",
                      goToSectionId: "vero",
                      image: {
                        altText: "voluptatem",
                        properties: {
                          alignment: "ALIGNMENT_UNSPECIFIED",
                          width: 1253678802066634880,
                        },
                        sourceUri: "vero",
                      },
                      isOther: true,
                      value: "cumque",
                    },
                    {
                      goToAction: "SUBMIT_FORM",
                      goToSectionId: "non",
                      image: {
                        altText: "non",
                        properties: {
                          alignment: "CENTER",
                          width: 8411630060280462350,
                        },
                        sourceUri: "quae",
                      },
                      isOther: false,
                      value: "magni",
                    },
                  ],
                  shuffle: true,
                  type: "CHOICE_TYPE_UNSPECIFIED",
                },
                shuffleQuestions: false,
              },
              image: {
                altText: "neque",
                properties: {
                  alignment: "RIGHT",
                  width: 5401654515258649126,
                },
                sourceUri: "repudiandae",
              },
              questions: [
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: "SUBMIT_FORM",
                        goToSectionId: "enim",
                        image: {
                          altText: "ut",
                          properties: {
                            alignment: "RIGHT",
                            width: 4671696214766305422,
                          },
                          sourceUri: "laborum",
                        },
                        isOther: true,
                        value: "nihil",
                      },
                    ],
                    shuffle: false,
                    type: "DROP_DOWN",
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "autem",
                    maxFileSize: "hic",
                    maxFiles: 262877386996496551,
                    types: [
                      "AUDIO",
                      "DRAWING",
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "minus",
                        },
                        {
                          value: "nostrum",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "sit",
                            uri: "repellat",
                          },
                          video: {
                            displayText: "quo",
                            youtubeUri: "dolorum",
                          },
                        },
                        {
                          link: {
                            displayText: "laboriosam",
                            uri: "velit",
                          },
                          video: {
                            displayText: "ea",
                            youtubeUri: "tempore",
                          },
                        },
                      ],
                      text: "fugit",
                    },
                    pointValue: 2128339608861509852,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "aliquid",
                            uri: "mollitia",
                          },
                          video: {
                            displayText: "non",
                            youtubeUri: "magni",
                          },
                        },
                        {
                          link: {
                            displayText: "recusandae",
                            uri: "illum",
                          },
                          video: {
                            displayText: "consequatur",
                            youtubeUri: "dolores",
                          },
                        },
                        {
                          link: {
                            displayText: "hic",
                            uri: "nihil",
                          },
                          video: {
                            displayText: "explicabo",
                            youtubeUri: "ex",
                          },
                        },
                      ],
                      text: "iure",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "quos",
                            uri: "et",
                          },
                          video: {
                            displayText: "explicabo",
                            youtubeUri: "necessitatibus",
                          },
                        },
                      ],
                      text: "veniam",
                    },
                  },
                  questionId: "qui",
                  required: true,
                  rowQuestion: {
                    title: "odit",
                  },
                  scaleQuestion: {
                    high: 2552826169751964368,
                    highLabel: "corporis",
                    low: 6502696439032783967,
                    lowLabel: "esse",
                  },
                  textQuestion: {
                    paragraph: true,
                  },
                  timeQuestion: {
                    duration: false,
                  },
                },
              ],
            },
            questionItem: {
              image: {
                altText: "id",
                properties: {
                  alignment: "ALIGNMENT_UNSPECIFIED",
                  width: 153570803637391025,
                },
                sourceUri: "maiores",
              },
              question: {
                choiceQuestion: {
                  options: [
                    {
                      goToAction: "RESTART_FORM",
                      goToSectionId: "aperiam",
                      image: {
                        altText: "repellendus",
                        properties: {
                          alignment: "CENTER",
                          width: 6179772165467236447,
                        },
                        sourceUri: "earum",
                      },
                      isOther: false,
                      value: "officia",
                    },
                    {
                      goToAction: "GO_TO_ACTION_UNSPECIFIED",
                      goToSectionId: "dolor",
                      image: {
                        altText: "quia",
                        properties: {
                          alignment: "RIGHT",
                          width: 8724673710750471494,
                        },
                        sourceUri: "et",
                      },
                      isOther: false,
                      value: "recusandae",
                    },
                    {
                      goToAction: "SUBMIT_FORM",
                      goToSectionId: "qui",
                      image: {
                        altText: "aut",
                        properties: {
                          alignment: "ALIGNMENT_UNSPECIFIED",
                          width: 3417054809625618671,
                        },
                        sourceUri: "temporibus",
                      },
                      isOther: false,
                      value: "sed",
                    },
                  ],
                  shuffle: false,
                  type: "CHECKBOX",
                },
                dateQuestion: {
                  includeTime: false,
                  includeYear: false,
                },
                fileUploadQuestion: {
                  folderId: "et",
                  maxFileSize: "qui",
                  maxFiles: 5749655769367477879,
                  types: [
                    "DOCUMENT",
                    "SPREADSHEET",
                  ],
                },
                grading: {
                  correctAnswers: {
                    answers: [
                      {
                        value: "vero",
                      },
                      {
                        value: "aut",
                      },
                      {
                        value: "et",
                      },
                    ],
                  },
                  generalFeedback: {
                    material: [
                      {
                        link: {
                          displayText: "sunt",
                          uri: "quae",
                        },
                        video: {
                          displayText: "placeat",
                          youtubeUri: "vitae",
                        },
                      },
                      {
                        link: {
                          displayText: "rerum",
                          uri: "officiis",
                        },
                        video: {
                          displayText: "commodi",
                          youtubeUri: "sed",
                        },
                      },
                    ],
                    text: "voluptates",
                  },
                  pointValue: 1987095690814515857,
                  whenRight: {
                    material: [
                      {
                        link: {
                          displayText: "ipsa",
                          uri: "cum",
                        },
                        video: {
                          displayText: "sint",
                          youtubeUri: "aut",
                        },
                      },
                      {
                        link: {
                          displayText: "eaque",
                          uri: "facilis",
                        },
                        video: {
                          displayText: "et",
                          youtubeUri: "ut",
                        },
                      },
                    ],
                    text: "et",
                  },
                  whenWrong: {
                    material: [
                      {
                        link: {
                          displayText: "sit",
                          uri: "voluptate",
                        },
                        video: {
                          displayText: "eaque",
                          youtubeUri: "consequuntur",
                        },
                      },
                    ],
                    text: "et",
                  },
                },
                questionId: "amet",
                required: false,
                rowQuestion: {
                  title: "in",
                },
                scaleQuestion: {
                  high: 6612358853391904586,
                  highLabel: "minima",
                  low: 8742852710189167914,
                  lowLabel: "et",
                },
                textQuestion: {
                  paragraph: true,
                },
                timeQuestion: {
                  duration: false,
                },
              },
            },
            textItem: {
              "cupiditate": "quam",
            },
            title: "repellendus",
            videoItem: {
              caption: "dolores",
              video: {
                properties: {
                  alignment: "ALIGNMENT_UNSPECIFIED",
                  width: 703460223791086499,
                },
                youtubeUri: "architecto",
              },
            },
          },
          location: {
            index: 3689647184521680189,
          },
          updateMask: "beatae",
        },
        updateSettings: {
          settings: {
            quizSettings: {
              isQuiz: true,
            },
          },
          updateMask: "veniam",
        },
      },
    ],
    writeControl: {
      requiredRevisionId: "hic",
      targetRevisionId: "beatae",
    },
  },
};

sdk.forms.formsFormsBatchUpdate(req).then((res: FormsFormsBatchUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### forms

* `formsFormsBatchUpdate` - Change the form with a batch of updates.
* `formsFormsCreate` - Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
* `formsFormsGet` - Get a form.
* `formsFormsResponsesGet` - Get one response from the form.
* `formsFormsResponsesList` - List a form's responses.
* `formsFormsWatchesCreate` - Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
* `formsFormsWatchesDelete` - Delete a watch.
* `formsFormsWatchesList` - Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
* `formsFormsWatchesRenew` - Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
